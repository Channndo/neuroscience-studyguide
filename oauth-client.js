(function () {
  const SESSION_KEY = "mcb80x_oauth_session";

  const PROVIDER_ORDER = [
    "google",
    "microsoft",
    "amazon",
    "github",
    "facebook",
    "x",
    "apple"
  ];

  const PROVIDER_LABELS = {
    google: "Google",
    microsoft: "Microsoft",
    amazon: "Amazon",
    github: "GitHub",
    facebook: "Facebook",
    x: "X",
    apple: "Apple"
  };

  const PROVIDER_ICONS = {
    google:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"/></svg>',
    microsoft:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F25022" d="M1 1h10.5v10.5H1z"/><path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z"/><path fill="#00A4EF" d="M1 12.5h10.5V23H1z"/><path fill="#FFB900" d="M12.5 12.5H23V23H12.5z"/></svg>',
    amazon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.96 8.4c-1.67.12-3.6.23-4.95.82-1.56.67-2.65 2.04-2.65 4.06 0 2.58 1.62 3.87 3.71 3.87 1.76 0 2.73-.42 4.08-1.8.45.65.6.97 1.42 1.65.18.1.42.09.58-.06l1.6-1.38c.19-.16.16-.42.01-.62-.45-.62-.93-1.13-.93-2.28V8.83c0-1.62.12-3.1-1.08-4.22C16.8 3.7 15.24 3.4 14.05 3.4c-2.33 0-4.93.87-5.48 3.75-.06.3.17.47.37.51l2.38.26c.22-.01.38-.23.42-.45.2-1 1.04-1.48 1.98-1.48.51 0 1.08.19 1.38.63.34.5.3 1.18.3 1.76v.32h.56zm-.46 5.04c-.39.69-1.01 1.12-1.7 1.12-.94 0-1.49-.72-1.49-1.78 0-2.09 1.88-2.47 3.65-2.47v.53c0 .95.02 1.74-.46 2.6z"/><path fill="#FF9900" d="M20.6 18.27c-2.37 1.75-5.8 2.68-8.76 2.68-4.14 0-7.87-1.53-10.7-4.08-.22-.2-.02-.47.25-.32 3.05 1.78 6.82 2.85 10.71 2.85 2.63 0 5.51-.55 8.17-1.67.4-.17.74.26.33.54zm.99-1.13c-.3-.39-2-.18-2.77-.09-.23.03-.27-.18-.06-.33 1.36-.95 3.58-.68 3.84-.36.26.32-.07 2.55-1.34 3.61-.2.16-.38.07-.3-.14.29-.71.93-2.31.63-2.69z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.91v-8.41H7.08v-3.5h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79v8.41C19.61 23.08 24 18.09 24 12.07z"/></svg>',
    x:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    apple:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3-1.5z"/></svg>'
  };

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

  function orderProviders(list) {
    const allowed = new Set(PROVIDER_ORDER);
    const fromApi = (Array.isArray(list) ? list : []).filter(p => allowed.has(p));
    return PROVIDER_ORDER.filter(p => fromApi.includes(p));
  }

  async function fetchProviders() {
    try {
      const res = await fetch(`${apiBase()}/api/auth/oauth/providers?site=mcb80x`);
      if (!res.ok) return orderProviders(["google", "microsoft"]);
      const data = await res.json();
      const ordered = orderProviders(data.providers);
      return ordered.length ? ordered : orderProviders(["google", "microsoft"]);
    } catch {
      return orderProviders(["google", "microsoft"]);
    }
  }

  function renderSocialGrid(container, providers) {
    if (!container) return;
    container.replaceChildren();
    const list = orderProviders(providers);
    if (!list.length) {
      container.hidden = true;
      return;
    }
    container.classList.toggle("auth-social-grid--many", list.length > 4);
    list.forEach(p => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "auth-social-btn";
      btn.innerHTML =
        (PROVIDER_ICONS[p] || "") +
        "<span>" +
        (PROVIDER_LABELS[p] || p) +
        "</span>";
      btn.addEventListener("click", () => startOAuth(p));
      container.appendChild(btn);
    });
    container.hidden = false;
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
    orderProviders,
    renderSocialGrid,
    PROVIDER_ORDER,
    PROVIDER_LABELS,
    PROVIDER_ICONS,
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
