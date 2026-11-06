/**
 * Shared Face ID / Touch ID UI for sign-in pages and the main study app.
 */
(function () {
  let inAppSignInHandler = null;

  function normalizeSession(session) {
    return {
      ...session,
      email: String(session.email || "").toLowerCase(),
      id: session.id || session.email
    };
  }

  function completeSignInRedirect(session) {
    const normalized = normalizeSession(session);
    sessionStorage.setItem("mcb80x_oauth_pending_apply", JSON.stringify(normalized));
    sessionStorage.setItem("mcb80x_force_cloud_sync", "1");
    if (window.MCB80XOAuth?.saveSession) {
      const keepEl = document.getElementById("keep-signed-in");
      const persist = keepEl
        ? keepEl.checked
        : (window.MCB80XOAuth.getKeepSignedInPreference?.() ?? true);
      MCB80XOAuth.saveSession(normalized, { persist });
    }
    window.location.replace("index.html?signed_in=1");
  }

  function setInAppSignInHandler(fn) {
    inAppSignInHandler = typeof fn === "function" ? fn : null;
  }

  async function completeSignIn(session, options) {
    const inApp = options?.inApp === true;
    if (inApp && inAppSignInHandler) {
      inAppSignInHandler(normalizeSession(session));
      return;
    }
    completeSignInRedirect(session);
  }

  function showError(errorEl, message) {
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.hidden = false;
  }

  async function mountSignInButton({ buttonEl, labelEl, errorEl, inApp }) {
    const bio = window.MCB80XBiometric;
    if (!buttonEl || !bio) return false;
    if (!(await bio.isPlatformAvailable())) return false;
    if (!(await bio.hasCredentials())) return false;
    if (labelEl) {
      labelEl.textContent = `Sign in with ${bio.label()}`;
    }
    buttonEl.hidden = false;
    buttonEl.addEventListener("click", async () => {
      if (errorEl) errorEl.hidden = true;
      buttonEl.disabled = true;
      try {
        const session = await bio.signInWithBiometric();
        await completeSignIn(session, { inApp });
      } catch (ex) {
        showError(errorEl, ex.message || String(ex));
        buttonEl.disabled = false;
      }
    });
    return true;
  }

  async function refreshSettingsBiometricPanel() {
    const bio = window.MCB80XBiometric;
    const block = document.getElementById("settings-biometric-block");
    const lead = document.getElementById("settings-biometric-lead");
    const enableBtn = document.getElementById("settings-biometric-enable");
    const disableBtn = document.getElementById("settings-biometric-disable");
    const msg = document.getElementById("settings-biometric-msg");
    if (!block || !bio) return;

    if (!(await bio.isPlatformAvailable())) {
      block.hidden = true;
      return;
    }
    block.hidden = false;

    const session =
      window.MCB80XOAuth?.getAccountSession?.() || window.MCB80XOAuth?.getSession?.();
    const email = session?.email || "";
    const hasForAccount = email ? await bio.hasCredentialForEmail(email) : false;

    if (lead) {
      lead.textContent = session?.email
        ? `Use ${bio.label()} on this device to sign back in without your password.`
        : `Sign in with email or social first, then enable ${bio.label()} here.`;
    }
    if (enableBtn) {
      enableBtn.disabled = !session?.email || hasForAccount;
      enableBtn.textContent = hasForAccount
        ? `${bio.label()} enabled on this device`
        : `Enable ${bio.label()}`;
    }
    if (disableBtn) {
      disableBtn.disabled = !hasForAccount;
    }
    if (msg) msg.hidden = true;
  }

  function wireSettingsBiometricHandlers() {
    const bio = window.MCB80XBiometric;
    const enableBtn = document.getElementById("settings-biometric-enable");
    const disableBtn = document.getElementById("settings-biometric-disable");
    const msg = document.getElementById("settings-biometric-msg");
    if (!bio || !enableBtn || !disableBtn) return;

    const showMsg = (text, isErr) => {
      if (!msg) return;
      msg.textContent = text;
      msg.hidden = false;
      msg.style.color = isErr ? "var(--incorrect)" : "var(--gray-600)";
    };

    enableBtn.addEventListener("click", async () => {
      const session =
        window.MCB80XOAuth?.getAccountSession?.() || window.MCB80XOAuth?.getSession?.();
      if (!session?.email) {
        showMsg("Sign in first, then enable biometrics.", true);
        return;
      }
      enableBtn.disabled = true;
      try {
        await bio.registerForSession(session);
        showMsg(`${bio.label()} is set up on this device.`);
        await refreshSettingsBiometricPanel();
      } catch (ex) {
        showMsg(ex.message || String(ex), true);
        enableBtn.disabled = false;
      }
    });

    disableBtn.addEventListener("click", async () => {
      const session =
        window.MCB80XOAuth?.getAccountSession?.() || window.MCB80XOAuth?.getSession?.();
      if (!session?.email) return;
      disableBtn.disabled = true;
      try {
        await bio.removeForEmail(session.email);
        showMsg(`${bio.label()} removed for this account on this device.`);
        await refreshSettingsBiometricPanel();
      } catch (ex) {
        showMsg(ex.message || String(ex), true);
        disableBtn.disabled = false;
      }
    });
  }

  function offerStorageKey(email) {
    return `mcb80x_biometric_offer_${String(email || "").toLowerCase()}`;
  }

  async function shouldOfferSetup(session) {
    const bio = window.MCB80XBiometric;
    if (!bio || !session?.email) return false;
    if (!(await bio.isPlatformAvailable())) return false;
    if (await bio.hasCredentialForEmail(session.email)) return false;
    if (sessionStorage.getItem(offerStorageKey(session.email))) return false;
    return true;
  }

  async function markOfferShown(session) {
    if (!session?.email) return;
    sessionStorage.setItem(offerStorageKey(session.email), "1");
  }

  window.MCB80XBiometricUI = {
    setInAppSignInHandler,
    completeSignIn,
    completeSignInRedirect,
    mountSignInButton,
    refreshSettingsBiometricPanel,
    wireSettingsBiometricHandlers,
    shouldOfferSetup,
    markOfferShown
  };
})();
