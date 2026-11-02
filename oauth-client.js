(function () {
  const SESSION_KEY = "mcb80x_oauth_session";

  function apiBase() {
    const c = window.MCB80X_CLOUD || {};
    return String(c.syntrixApiBase || "https://api.syntrix.solutions").replace(/\/$/, "");
  }

  function authCallbackUrl() {
    const path = window.location.pathname.replace(/\/[^/]*$/, "/");
    return `${window.location.origin}${path}auth-callback.html`;
  }

  function getSession() {
    try {
      const raw = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (!raw?.email || !raw?.accessToken) return null;
      return raw;
    } catch {
      return null;
    }
  }

  function saveSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function startOAuth(provider) {
    const url =
      `${apiBase()}/api/auth/oauth/${encodeURIComponent(provider)}/start` +
      `?return_to=${encodeURIComponent(authCallbackUrl())}`;
    window.location.assign(url);
  }

  async function fetchProviders() {
    try {
      const res = await fetch(`${apiBase()}/api/auth/oauth/providers?site=mcb80x`);
      if (!res.ok) return ["google", "microsoft"];
      const data = await res.json();
      const list = Array.isArray(data.providers) ? data.providers : [];
      return list.filter(p => p === "google" || p === "microsoft");
    } catch {
      return ["google", "microsoft"];
    }
  }

  async function exchangeCode(code) {
    const res = await fetch(`${apiBase()}/api/auth/oauth/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.detail || data.error || "Sign-in exchange failed.");
    }
    const user = data.user || {};
    const session = {
      accessToken: data.access_token,
      email: String(user.email || "").toLowerCase(),
      id: user.id || "",
      provider: "oauth"
    };
    saveSession(session);
    return session;
  }

  function applyToApp(session) {
    if (!session?.email) return;
    if (window.MCB80XSheetSync?.applyGoogleProfile) {
      MCB80XSheetSync.applyGoogleProfile({
        email: session.email,
        sub: session.id || session.email,
        name: session.email.split("@")[0]
      });
    }
    if (typeof saveSettings === "function") {
      saveSettings({
        syncEmail: session.email,
        googleSub: session.id || "",
        displayName: session.email.split("@")[0]
      });
    }
  }

  window.MCB80XOAuth = {
    apiBase,
    authCallbackUrl,
    getSession,
    saveSession,
    clearSession,
    startOAuth,
    fetchProviders,
    exchangeCode,
    applyToApp,
    signOut() {
      clearSession();
      if (window.MCB80XSheetSync?.clearSessionPassphrase) {
        MCB80XSheetSync.clearSessionPassphrase();
      }
    }
  };
})();
