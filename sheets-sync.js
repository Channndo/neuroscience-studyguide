/**
 * Google Sheet backup with client-side encryption (passphrase never sent to the server).
 */
(function () {
  const SYNC_VERSION = 1;
  const CRYPTO_VERSION = 1;
  const PUSH_DEBOUNCE_MS = 2500;
  const PBKDF2_ITERATIONS = 310000;

  let hooks = null;
  let pushTimer = null;
  let applyingRemote = false;
  let lastSyncAt = null;
  let lastSyncError = null;
  let sessionPassphrase = null;

  function config() {
    return window.MCB80X_CLOUD || {};
  }

  function webAppUrl() {
    return String(config().sheetsWebAppUrl || "").trim();
  }

  function syncSecret() {
    return String(config().syncSecret || "");
  }

  function isConfigured() {
    return webAppUrl().startsWith("https://");
  }

  function b64FromBytes(bytes) {
    let s = "";
    bytes.forEach(b => { s += String.fromCharCode(b); });
    return btoa(s);
  }

  function bytesFromB64(b64) {
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  async function sha256Hex(text) {
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, "0")).join("");
  }

  async function deriveAesKey(passphrase, saltBytes) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      enc.encode(passphrase),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: saltBytes, iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  async function encryptBundle(bundle, passphrase) {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveAesKey(passphrase, salt);
    const plain = new TextEncoder().encode(JSON.stringify({ version: SYNC_VERSION, ...bundle }));
    const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plain);
    return {
      v: CRYPTO_VERSION,
      salt: b64FromBytes(salt),
      iv: b64FromBytes(iv),
      ciphertext: b64FromBytes(new Uint8Array(ct))
    };
  }

  async function decryptBundle(envelope, passphrase) {
    if (!envelope?.salt || !envelope?.iv || !envelope?.ciphertext) {
      throw new Error("Invalid encrypted backup.");
    }
    const salt = bytesFromB64(envelope.salt);
    const iv = bytesFromB64(envelope.iv);
    const key = await deriveAesKey(passphrase, salt);
    const ct = bytesFromB64(envelope.ciphertext);
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
    const parsed = JSON.parse(new TextDecoder().decode(plain));
    if (parsed.version !== SYNC_VERSION) {
      throw new Error("Unsupported backup version.");
    }
    return parsed;
  }

  function mergeObjects(a, b) {
    return { ...(a || {}), ...(b || {}) };
  }

  function mergeProgress(local, remote) {
    const l = local && typeof local === "object" ? local : {};
    const r = remote && typeof remote === "object" ? remote : {};
    const out = mergeObjects(r, l);
    const keys = new Set([...Object.keys(l), ...Object.keys(r)]);
    keys.forEach(key => {
      if (key.endsWith("Passed") || key === "finalCompleted") {
        out[key] = !!(l[key] || r[key]);
      } else if (key.startsWith("best_")) {
        out[key] = Math.max(Number(l[key]) || 0, Number(r[key]) || 0);
      } else if (key.startsWith("completed_")) {
        out[key] = !!(l[key] || r[key]);
      }
    });
    out.streakCount = Math.max(Number(l.streakCount) || 0, Number(r.streakCount) || 0);
    out.streakBest = Math.max(Number(l.streakBest) || 0, Number(r.streakBest) || 0);
    const ld = l.streakLastDate;
    const rd = r.streakLastDate;
    if (ld && rd) out.streakLastDate = ld >= rd ? ld : rd;
    else out.streakLastDate = ld || rd || null;
    const lq = l.lastQuiz;
    const rq = r.lastQuiz;
    if (lq && rq) {
      out.lastQuiz = (lq.ts || 0) >= (rq.ts || 0) ? lq : rq;
    } else {
      out.lastQuiz = lq || rq || null;
    }
    return out;
  }

  function mergeModuleStats(a, b) {
    const out = mergeObjects(a, b);
    const mods = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
    mods.forEach(m => {
      const sa = a?.[m] || { correct: 0, total: 0 };
      const sb = b?.[m] || { correct: 0, total: 0 };
      out[m] = {
        correct: Math.max(sa.correct || 0, sb.correct || 0),
        total: Math.max(sa.total || 0, sb.total || 0)
      };
    });
    return out;
  }

  function mergeAnalytics(local, remote) {
    const l = local?.version === 1 ? local : null;
    const r = remote?.version === 1 ? remote : null;
    if (!l) return r || l;
    if (!r) return l;
    const attemptMap = new Map();
    [...(r.attempts || []), ...(l.attempts || [])].forEach(a => {
      if (!a) return;
      const k = `${a.quizId || ""}-${a.ts || 0}`;
      const prev = attemptMap.get(k);
      if (!prev || (a.pct || 0) >= (prev.pct || 0)) attemptMap.set(k, a);
    });
    const attempts = [...attemptMap.values()].sort((a, b) => (b.ts || 0) - (a.ts || 0)).slice(0, 200);
    const topicStats = mergeObjects(r.topicStats, l.topicStats);
    Object.keys(topicStats).forEach(t => {
      const ta = l.topicStats?.[t];
      const tb = r.topicStats?.[t];
      if (ta && tb) {
        topicStats[t] = {
          correct: Math.max(ta.correct || 0, tb.correct || 0),
          total: Math.max(ta.total || 0, tb.total || 0),
          module: ta.module || tb.module
        };
      }
    });
    return {
      version: 1,
      attempts,
      topicStats,
      moduleStats: mergeModuleStats(l.moduleStats, r.moduleStats),
      totalQuestionsAnswered: Math.max(l.totalQuestionsAnswered || 0, r.totalQuestionsAnswered || 0),
      firstActivityTs: Math.min(l.firstActivityTs || Infinity, r.firstActivityTs || Infinity) === Infinity
        ? null
        : Math.min(l.firstActivityTs || Date.now(), r.firstActivityTs || Date.now()),
      lastActivityTs: Math.max(l.lastActivityTs || 0, r.lastActivityTs || 0) || null
    };
  }

  function mergeFlashcardDecks(local, remote) {
    const l = local && typeof local === "object" ? local : {};
    const r = remote && typeof remote === "object" ? remote : {};
    const out = mergeObjects(l, r);
    Object.keys(out).forEach(ch => {
      const byQ = new Map();
      [...(r[ch] || []), ...(l[ch] || [])].forEach(card => {
        if (card?.question) byQ.set(card.question, card);
      });
      out[ch] = [...byQ.values()];
    });
    return out;
  }

  function mergeFlashcardSrs(local, remote) {
    const l = local && typeof local === "object" ? local : {};
    const r = remote && typeof remote === "object" ? remote : {};
    const out = mergeObjects(r, l);
    Object.keys(out).forEach(k => {
      const a = l[k];
      const b = r[k];
      if (a && b) {
        out[k] = {
          ...b,
          ...a,
          box: Math.max(a.box || 0, b.box || 0),
          ease: Math.max(a.ease || 0, b.ease || 0),
          reps: Math.max(a.reps || 0, b.reps || 0),
          intervalDays: Math.max(a.intervalDays || 0, b.intervalDays || 0),
          due: Math.min(a.due || Infinity, b.due || Infinity),
          retired: !!(a.retired && b.retired)
        };
      }
    });
    return out;
  }

  function mergeBundles(localBundle, remoteBundle) {
    const l = localBundle || {};
    const r = remoteBundle || {};
    return {
      version: SYNC_VERSION,
      progress: mergeProgress(l.progress, r.progress),
      settings: mergeObjects(r.settings, l.settings),
      flashcards: mergeFlashcardDecks(l.flashcards, r.flashcards),
      flashcardSrs: mergeFlashcardSrs(l.flashcardSrs, r.flashcardSrs),
      analytics: mergeAnalytics(l.analytics, r.analytics)
    };
  }

  function isProgressEmpty(progress) {
    const p = progress || {};
    if (p.lastQuiz || p.finalCompleted) return false;
    if (Object.keys(p).some(k => k.endsWith("Passed") && p[k])) return false;
    return !Object.keys(p).some(k => k.startsWith("best_") && (p[k] || 0) > 0);
  }

  function isAnalyticsEmpty(a) {
    return !(a && (a.totalQuestionsAnswered > 0 || (a.attempts && a.attempts.length)));
  }

  function isLocalBundleEmpty(bundle) {
    return isProgressEmpty(bundle?.progress) && isAnalyticsEmpty(bundle?.analytics);
  }

  function getPassphrase() {
    return sessionPassphrase;
  }

  function unlockSession(passphrase) {
    sessionPassphrase = String(passphrase);
  }

  function clearSessionPassphrase() {
    sessionPassphrase = null;
    try {
      sessionStorage.removeItem("mcb80x_sync_session");
    } catch { /* ignore */ }
  }

  function isUnlocked() {
    return !!sessionPassphrase;
  }

  async function verifyPassphraseLocal(passphrase, verifierHex) {
    if (!verifierHex) return true;
    const h = await sha256Hex(String(passphrase));
    return h === verifierHex;
  }

  async function registerPassphraseVerifier(passphrase) {
    return sha256Hex(String(passphrase));
  }

  /** Deterministic sync key for OAuth sign-in (same Google account → same key on every device). */
  async function deriveOAuthSyncPassphrase(googleSub) {
    const sub = String(googleSub || "").trim();
    if (!sub) throw new Error("Missing Google account id.");
    const pepper = String(config().syncSecret || "mcb80x-oauth-sync");
    return sha256Hex(`mcb80x-oauth-sync-v1|${pepper}|${sub}`);
  }

  /**
   * After Google/Microsoft OAuth, unlock cloud sync without a manual passphrase when the
   * account has not opted into a custom sync passphrase on this device.
   */
  async function bootstrapFromOAuthSession(session) {
    if (!isConfigured() || !session?.email || !session?.id) {
      return { ok: false, reason: "skip" };
    }
    const email = String(session.email).toLowerCase();
    const derived = await deriveOAuthSyncPassphrase(session.id);
    const derivedVerifier = await registerPassphraseVerifier(derived);
    const settings = hooks?.getSettings?.() || {};
    const existingVerifier = settings.syncPassVerifier || "";

    if (existingVerifier && existingVerifier !== derivedVerifier) {
      return { ok: false, reason: "custom-passphrase" };
    }

    hooks?.applyOAuthAccount?.({
      email,
      googleSub: session.id,
      displayName: settings.displayName || email.split("@")[0],
      syncPassVerifier: derivedVerifier
    });

    unlockSession(derived);
    try {
      await pullAndMerge(derived, { preferRemoteIfLocalEmpty: true });
      return { ok: true, reason: "synced" };
    } catch (err) {
      clearSessionPassphrase();
      if (!existingVerifier) {
        hooks?.applyOAuthAccount?.({
          email,
          googleSub: session.id,
          syncPassVerifier: ""
        });
      }
      return { ok: false, reason: "pull-failed", error: err };
    }
  }

  function notifyStatus() {
    hooks?.onSyncStatus?.({
      configured: isConfigured(),
      unlocked: isUnlocked(),
      lastSyncAt,
      lastSyncError
    });
  }

  function pullJsonp(email) {
    return new Promise((resolve, reject) => {
      const cb = `_mcb80xPull_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const url = new URL(webAppUrl());
      url.searchParams.set("action", "pull");
      url.searchParams.set("email", email);
      if (syncSecret()) url.searchParams.set("secret", syncSecret());
      url.searchParams.set("callback", cb);
      const timer = setTimeout(() => {
        cleanup();
        reject(new Error("Cloud pull timed out."));
      }, 25000);
      function cleanup() {
        clearTimeout(timer);
        delete window[cb];
        script.remove();
      }
      window[cb] = data => {
        cleanup();
        resolve(data);
      };
      const script = document.createElement("script");
      script.src = url.toString();
      script.onerror = () => {
        cleanup();
        reject(new Error("Could not reach Google Sheet backup (check web app URL)."));
      };
      document.head.appendChild(script);
    });
  }

  async function pushPost(email, envelope, profile) {
    const body = JSON.stringify({
      action: "push",
      secret: syncSecret(),
      email,
      googleSub: profile?.googleSub || "",
      displayName: profile?.displayName || "",
      cryptoVersion: CRYPTO_VERSION,
      envelope
    });
    try {
      const res = await fetch(webAppUrl(), {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body
      });
      if (res.ok) {
        const data = await res.json();
        if (data.ok) return data;
        throw new Error(data.error || "Push rejected.");
      }
    } catch (e) {
      /* fall through to no-cors attempt */
    }
    await fetch(webAppUrl(), {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body
    });
    return { ok: true, opaque: true };
  }

  async function pushNow(passphrase) {
    if (!isConfigured()) throw new Error("Sheet backup URL is not configured.");
    const email = hooks?.getSyncEmail?.();
    if (!email) throw new Error("Set your account email in Settings first.");
    const pass = passphrase || sessionPassphrase;
    if (!pass) throw new Error("Enter your sync passphrase to upload.");
    const bundle = hooks.getLocalBundle();
    const envelope = await encryptBundle(bundle, pass);
    await pushPost(email, envelope, hooks.getProfileMeta?.());
    lastSyncAt = Date.now();
    lastSyncError = null;
    notifyStatus();
  }

  async function pullAndMerge(passphrase, { preferRemoteIfLocalEmpty = true } = {}) {
    if (!isConfigured()) throw new Error("Sheet backup URL is not configured.");
    const email = hooks?.getSyncEmail?.();
    if (!email) throw new Error("Set your account email in Settings first.");
    const pass = passphrase || sessionPassphrase;
    if (!pass) throw new Error("Enter your sync passphrase to download.");
    applyingRemote = true;
    notifyStatus();
    try {
      const resp = await pullJsonp(email);
      if (!resp?.ok) throw new Error(resp?.error || "Pull failed.");
      const local = hooks.getLocalBundle();
      if (!resp.found) {
        if (!isLocalBundleEmpty(local)) {
          await pushNow(pass);
        }
        return { merged: false, empty: true };
      }
      const remoteBundle = await decryptBundle(resp.envelope, pass);
      delete remoteBundle.version;
      let merged;
      if (preferRemoteIfLocalEmpty && isLocalBundleEmpty(local)) {
        merged = {
          progress: remoteBundle.progress,
          settings: remoteBundle.settings,
          flashcards: remoteBundle.flashcards,
          flashcardSrs: remoteBundle.flashcardSrs,
          analytics: remoteBundle.analytics
        };
      } else {
        merged = mergeBundles(local, remoteBundle);
      }
      hooks.applyLocalBundle(merged, { fromCloud: true });
      sessionPassphrase = pass;
      await pushNow(pass);
      lastSyncAt = Date.now();
      lastSyncError = null;
      return { merged: true, empty: false };
    } catch (err) {
      lastSyncError = err?.message || String(err);
      throw err;
    } finally {
      applyingRemote = false;
      notifyStatus();
    }
  }

  function schedulePush() {
    if (!isConfigured() || !sessionPassphrase || applyingRemote) return;
    if (!hooks?.getSyncEmail?.()) return;
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(() => {
      pushTimer = null;
      pushNow().catch(err => {
        lastSyncError = err?.message || String(err);
        notifyStatus();
      });
    }, PUSH_DEBOUNCE_MS);
  }

  function init(userHooks) {
    hooks = userHooks;
    notifyStatus();
    return Promise.resolve(isConfigured());
  }

  /** For future Google Sign-In: attach profile without changing encryption. */
  function applyGoogleProfile(profile) {
    if (!profile?.email) return;
    hooks?.onGoogleProfile?.(profile);
  }

  window.MCB80XSheetSync = {
    init,
    isConfigured,
    isUnlocked,
    getPassphrase,
    unlockSession,
    clearSessionPassphrase,
    schedulePush,
    pushNow,
    pullAndMerge,
    encryptBundle,
    decryptBundle,
    mergeBundles,
    registerPassphraseVerifier,
    verifyPassphraseLocal,
    deriveOAuthSyncPassphrase,
    bootstrapFromOAuthSession,
    applyGoogleProfile,
    getStatus: () => ({
      configured: isConfigured(),
      unlocked: isUnlocked(),
      lastSyncAt,
      lastSyncError
    })
  };
})();
