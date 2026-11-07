// Google Sheet cloud backup — deploy SYNC_SECRET only via private CI injection (never commit).
window.MCB80X_CLOUD = window.MCB80X_CLOUD || {
  syntrixApiBase: "https://api.syntrix.solutions",
  /** Login with Amazon (and future Square1-only providers) — uses Square1 OAuth apps, not Render. */
  square1OAuthBase: "https://square1dgm.com",
  sheetsWebAppUrl:
    "https://script.google.com/macros/s/AKfycbz5RTp-TPSzNSzJ1fbYtjHAw_5f_bjw5I8aZokJm-30lmYLpo_M33gQIcZroVPwrF0C/exec",
  /** Required for push/pull; empty disables automatic cloud sync (local export/import still works). */
  syncSecret: ""
};
