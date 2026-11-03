/**
 * Face ID / Touch ID / Windows Hello via WebAuthn (this device only).
 * Stores a signed-in session snapshot unlocked by platform biometrics.
 */
(function () {
  const DB_NAME = "mcb80x_biometric_v1";
  const STORE = "credentials";

  function rpId() {
    return window.location.hostname;
  }

  function bufferToBase64url(buffer) {
    const bytes = new Uint8Array(buffer);
    let s = "";
    bytes.forEach(b => { s += String.fromCharCode(b); });
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function base64urlToBuffer(b64) {
    const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
    const bin = atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out.buffer;
  }

  function openDb() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onerror = () => reject(req.error || new Error("Could not open biometric storage."));
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: "id" });
        }
      };
      req.onsuccess = () => resolve(req.result);
    });
  }

  async function idbGet(id) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbPut(record) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(record);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function idbDelete(id) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function idbAll() {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbDeleteByEmail(email) {
    const em = String(email || "").toLowerCase();
    const all = await idbAll();
    await Promise.all(
      all.filter(r => r.email === em).map(r => idbDelete(r.id))
    );
  }

  function normalizeSession(session) {
    if (!session?.email || !session?.accessToken) {
      throw new Error("Sign in first before enabling biometrics.");
    }
    return {
      accessToken: session.accessToken,
      email: String(session.email).toLowerCase(),
      id: session.id || session.email,
      provider: session.provider || "oauth"
    };
  }

  async function isPlatformAvailable() {
    if (!window.PublicKeyCredential || !window.isSecureContext) return false;
    try {
      if (typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === "function") {
        return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      }
    } catch { /* ignore */ }
    return false;
  }

  async function hasCredentials() {
    if (!(await isPlatformAvailable())) return false;
    const all = await idbAll();
    return all.length > 0;
  }

  async function hasCredentialForEmail(email) {
    const em = String(email || "").toLowerCase();
    if (!em || !(await isPlatformAvailable())) return false;
    const all = await idbAll();
    return all.some(r => r.email === em);
  }

  async function registerForSession(session) {
    if (!(await isPlatformAvailable())) {
      throw new Error("Face ID or Touch ID is not available on this device or browser.");
    }
    const snap = normalizeSession(session);
    const email = snap.email;
    await idbDeleteByEmail(email);

    const userId = new TextEncoder().encode(email.slice(0, 64));
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge,
        rp: { name: "HarvardX MCB80x Study Guide", id: rpId() },
        user: {
          id: userId,
          name: email,
          displayName: email.split("@")[0]
        },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 },
          { type: "public-key", alg: -257 }
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          userVerification: "required",
          residentKey: "required"
        },
        timeout: 120000,
        attestation: "none"
      }
    });
    if (!credential || !("rawId" in credential)) {
      throw new Error("Biometric setup did not finish.");
    }
    const id = bufferToBase64url(credential.rawId);
    await idbPut({
      id,
      email,
      session: snap,
      createdAt: Date.now()
    });
    return { id, email };
  }

  async function signInWithBiometric() {
    if (!(await isPlatformAvailable())) {
      throw new Error("Face ID or Touch ID is not available on this device or browser.");
    }
    const stored = await idbAll();
    if (!stored.length) {
      throw new Error("No biometric sign-in set up on this device. Sign in with email or social first, then enable it in Settings.");
    }

    const allowCredentials = stored.map(r => ({
      type: "public-key",
      id: base64urlToBuffer(r.id)
    }));

    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const assertion = await navigator.credentials.get({
      publicKey: {
        challenge,
        rpId: rpId(),
        allowCredentials,
        userVerification: "required",
        timeout: 120000
      }
    });
    if (!assertion || !("rawId" in assertion)) {
      throw new Error("Biometric sign-in was cancelled.");
    }
    const id = bufferToBase64url(assertion.rawId);
    const row = await idbGet(id);
    if (!row?.session) {
      throw new Error("Biometric sign-in could not be matched. Set it up again in Settings.");
    }
    return normalizeSession(row.session);
  }

  async function removeForEmail(email) {
    await idbDeleteByEmail(String(email || "").toLowerCase());
  }

  async function removeAll() {
    const all = await idbAll();
    await Promise.all(all.map(r => idbDelete(r.id)));
  }

  function label() {
    const ua = navigator.userAgent || "";
    if (/Win/i.test(ua)) return "Windows Hello";
    if (/Mac/i.test(ua)) return "Touch ID";
    if (/iPhone|iPad/i.test(ua)) return "Face ID or Touch ID";
    if (/Android/i.test(ua)) return "Fingerprint or face unlock";
    return "Biometrics";
  }

  window.MCB80XBiometric = {
    isPlatformAvailable,
    hasCredentials,
    hasCredentialForEmail,
    registerForSession,
    signInWithBiometric,
    removeForEmail,
    removeAll,
    label
  };
})();
