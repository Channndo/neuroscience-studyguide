(function () {
  const SESSION_KEY = "mcb80x_oauth_session";

  /** Keep in sync with syntrix/scanner/app/security_questions.py */
  const SECURITY_QUESTIONS = [
    "What city were you born in?",
    "What was the name of your first school?",
    "What was your childhood nickname?",
    "What is your maternal grandmother's first name?",
    "In what city did you meet your spouse or partner?",
    "What was the make of your first car?",
    "What was the name of your first pet?",
    "What street did you grow up on?",
    "What was your dream job as a child?",
    "What is the middle name of your oldest sibling?"
  ];

  function apiBase() {
    const c = window.MCB80X_CLOUD || {};
    return String(c.syntrixApiBase || "https://api.syntrix.solutions").replace(/\/$/, "");
  }

  function apiErrorMessage(data, fallback) {
    const d = data?.detail;
    if (typeof d === "string") return d;
    if (Array.isArray(d) && d[0]?.msg) return String(d[0].msg);
    return fallback;
  }

  async function postJson(path, body) {
    const res = await fetch(`${apiBase()}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(apiErrorMessage(data, "Request failed."));
    }
    return data;
  }

  function validatePassword(password) {
    const p = String(password || "");
    if (p.length < 12) return "Password must be at least 12 characters.";
    if (!/[a-zA-Z]/.test(p)) return "Password must include at least one letter.";
    if (!/\d/.test(p)) return "Password must include at least one number.";
    if (!/[^a-zA-Z0-9\s]/.test(p)) {
      return "Password must include at least one special character (e.g. ! @ # $).";
    }
    return "";
  }

  function sessionFromAuthResponse(data) {
    const user = data.user || {};
    const email = String(user.email || "").toLowerCase();
    const accessToken = data.access_token;
    if (!accessToken || !email) {
      throw new Error("Sign-in did not return a complete session.");
    }
    return {
      accessToken,
      email,
      id: user.id || email,
      provider: "password"
    };
  }

  function saveSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function applySessionToApp(session) {
    if (window.MCB80XOAuth?.applyToApp) {
      MCB80XOAuth.applyToApp(session);
    } else if (typeof saveSettings === "function") {
      saveSettings({
        syncEmail: session.email,
        googleSub: session.id || "",
        displayName: session.email.split("@")[0]
      });
    }
  }

  function finishSignIn(session) {
    saveSession(session);
    applySessionToApp(session);
    sessionStorage.setItem("mcb80x_oauth_pending_apply", JSON.stringify(session));
    window.location.replace("index.html?signed_in=1");
  }

  async function registerAccount(payload) {
    const err = validatePassword(payload.password);
    if (err) throw new Error(err);
    if (payload.security_q1_id === payload.security_q2_id) {
      throw new Error("Choose two different security questions.");
    }
    const data = await postJson("/api/auth/password/register", {
      email: String(payload.email).trim().toLowerCase(),
      password: payload.password,
      first_name: payload.first_name || undefined,
      last_name: payload.last_name || undefined,
      security_q1_id: payload.security_q1_id,
      security_q2_id: payload.security_q2_id,
      security_answer1: payload.security_answer1,
      security_answer2: payload.security_answer2
    });
    return sessionFromAuthResponse(data);
  }

  async function loginAccount(email, password) {
    const data = await postJson("/api/auth/password/login", {
      email: String(email).trim().toLowerCase(),
      password
    });
    if (data.requires_mfa) {
      throw new Error(
        "This account uses an authenticator app. Sign in at syntrix.solutions or disable MFA there first."
      );
    }
    if (data.requires_security_questions) {
      return {
        requiresSecurity: true,
        challengeToken: data.challenge_token,
        questions: (data.questions || []).map(q => ({
          id: q.id,
          text: q.text
        }))
      };
    }
    if (data.password_change_required) {
      throw new Error("Your password must be updated before you can sign in here.");
    }
    return { session: sessionFromAuthResponse(data) };
  }

  async function loginSecurity(challengeToken, answer1, answer2, trustDevice = true) {
    const data = await postJson("/api/auth/password/login/security", {
      challenge_token: challengeToken,
      answer1,
      answer2,
      trust_device: trustDevice
    });
    if (data.password_change_required) {
      throw new Error("Your password must be updated before you can sign in here.");
    }
    return sessionFromAuthResponse(data);
  }

  window.MCB80XPasswordAuth = {
    SECURITY_QUESTIONS,
    validatePassword,
    registerAccount,
    loginAccount,
    loginSecurity,
    finishSignIn,
    saveSession
  };
})();
