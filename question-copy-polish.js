/**
 * Runtime MCQ stem/option polish — conservative transforms only (no global rewrites).
 */
(function () {
  const PREFIX_RES = [
    /^Proctored mock\s*[—–-]\s*/i,
    /^Lesion:\s*/i,
  ];

  const GENERIC_WRAPPERS = [
    /^Using the values stated below, which answer is correct:\s*/i,
    /^Which answer best matches this scenario:\s*/i,
  ];

  const MALFORMED_APPLIES = [
    [/^Which description best applies to If\b/i, "If"],
    [/^Which description best applies to At\b/i, "At"],
    [/^Which description best applies to Given\b/i, "Given"],
    [/^Which description best applies to During\b/i, "During"],
    [/^Which description best applies to In\b/i, "In"],
  ];

  function stripStemPrefix(s) {
    let t = String(s ?? "").trim();
    for (const re of PREFIX_RES) t = t.replace(re, "");
    return t.trim();
  }

  function stripGenericWrappers(s) {
    let t = String(s ?? "").trim();
    for (const re of GENERIC_WRAPPERS) t = t.replace(re, "");
    for (const [re, lead] of MALFORMED_APPLIES) {
      if (re.test(t)) t = t.replace(re, lead);
    }
    return t.trim();
  }

  /**
   * Replace " + " only in plain-language lists (not ions, math, or signed voltages).
   */
  function polishListPlus(raw) {
    let t = String(raw ?? "");
    if (!/\s\+\s/.test(t)) return t;
  const ionLike = /(?:\d|⁺|²|⁻|\+(?=\s*[,\;\)]|$)|^[\d.+-]?\s*mV|Na|K\+|Ca|Cl|Mg|H\+|Zn|E_ion|V_m|P_|Δ|≈|\/)/i;
    return t.replace(/(\S+)\s+\+\s+(\S+)/g, (match, left, right) => {
      if (ionLike.test(left) || ionLike.test(right)) return match;
      if (/^[+\-−]?\d/.test(left) || /^[+\-−]?\d/.test(right)) return match;
      if (left.length <= 1 || right.length <= 1) return match;
      return `${left}; ${right}`;
    });
  }

  function polishOption(raw) {
    let t = String(raw ?? "").trim();
    if (!t) return t;
    t = t.replace(/\s+as the primary route\b/gi, "");
    t = t.replace(/\s+as the primary pathway\b/gi, "");
    t = t.replace(/\s*\(same units as E_ion\)/gi, "");
    t = polishListPlus(t);
    t = t.replace(/,\s*,/g, ",");
    t = t.replace(/\s+often\s*$/i, "");
    t = t.replace(/\s+often\b/gi, "");
    t = t.replace(/\bBlocks\s+,/i, "Blocks");
    t = t.replace(/\s{2,}/g, " ").trim();
    if (t && t[0] === ",") t = t.slice(1).trim();
    return t;
  }

  function ensureQuestionMark(s) {
    const t = s.trim();
    if (!t) return t;
    if (t.endsWith("?")) return t;
    if (/select all that apply\.?$/i.test(t)) {
      return t.endsWith(".") ? t : `${t}.`;
    }
    if (/[.:]\s*$/.test(t)) return t.replace(/[.:]+\s*$/, "?");
    return `${t}?`;
  }

  function stemHasExperimentalContext(s) {
    const t = String(s);
    return (
      t.length >= 100 ||
      /\b(\d+\s*mM|clamp|lesion|TTX|voltage|current|EPSP|IPSP|reversal|Nernst|Goldman|Goldman-Hodgkin|\[K|\[Na|select all)/i.test(
        t
      )
    );
  }

  function polishStem(question, q) {
    let s = stripStemPrefix(question);
    s = stripGenericWrappers(s);
    if (!s) return s;

    const selectAll =
      q?.type === "selectAll" || /\bselect all\b/i.test(s);

    if (selectAll && stemHasExperimentalContext(s)) {
      if (!/select all that apply/i.test(s)) {
        const trimmed = s.replace(/[.?:]+\s*$/u, "").trim();
        return `${trimmed} Select all that apply.`;
      }
      return s.endsWith(".") || s.endsWith("?") ? s : `${s}.`;
    }

    const scenarioWrap = s.match(/^Which answer best matches this scenario:\s*(.+)$/i);
    if (scenarioWrap) {
      return polishStem(scenarioWrap[1].trim(), q);
    }

    if (/driving force is:?\s*$/i.test(s)) {
      const stem = s.replace(/\s+is:?\s*$/i, "").trim();
      return ensureQuestionMark(`For ${stem}, which description of the driving force is correct`);
    }

    const brokenMostLikely = s.match(
      /^Which clinical presentation is most consistent with (.+?)\.\s*Most likely deficit:?$/i
    );
    if (brokenMostLikely) {
      return ensureQuestionMark(
        `Which neurologic deficit or presentation is most likely with ${brokenMostLikely[1].trim()}`
      );
    }

    const mostLikely = s.match(/^(.+?)\.\s*Most likely deficit:?$/i);
    if (mostLikely) {
      const site = mostLikely[1].trim();
      return ensureQuestionMark(
        `Which neurologic deficit or presentation is most likely with ${site}`
      );
    }

    if (selectAll) {
      if (q?.topic && s.length < 40 && !stemHasExperimentalContext(s)) {
        const label = String(q.topic).trim();
        const lead = label.charAt(0).toLowerCase() + label.slice(1);
        return `Which of the following statements about ${lead} are correct? Select all that apply.`;
      }
      if (/select all that apply/i.test(s)) return s;
    }

    if (/^which\b/i.test(s)) return ensureQuestionMark(s);

    if (s.endsWith(":")) s = s.slice(0, -1).trim();

    const expectedSplit = s.match(/^(.+?)\.\s*Expected\s+(.+)$/i);
    if (expectedSplit && !s.includes("?")) {
      const ctx = expectedSplit[1].trim();
      const field = expectedSplit[2].trim().replace(/:$/, "").toLowerCase();
      return ensureQuestionMark(`Given ${ctx}, which ${field} is expected`);
    }

    const suggests = s.match(/^(.+?)\s+suggests:?$/i);
    if (suggests && !s.includes("?")) {
      return ensureQuestionMark(`Which anatomic lesion best explains ${suggests[1].trim()}`);
    }

    const verbTail = s.match(/^(.+?)\s+(reduces|produces|allows|can|causes|is|are|was|were)\s*:?$/i);
    if (verbTail && !s.includes("?")) {
      const subject = verbTail[1].trim();
      const verb = verbTail[2].toLowerCase();
      const skipApplies =
        verb === "is" || verb === "are"
          ? /^(if|at|given|during|in|when|after|before|under|with)\b/i.test(subject)
          : false;
      if (verb === "reduces") return ensureQuestionMark(`What does ${subject} reduce`);
      if (verb === "produces") return ensureQuestionMark(`What does ${subject} produce`);
      if (verb === "allows") return ensureQuestionMark(`What does ${subject} allow`);
      if (verb === "can") return ensureQuestionMark(`Which capability best describes ${subject}`);
      if (verb === "causes") {
        return ensureQuestionMark(`Which outcome is most likely when ${subject} occurs`);
      }
      if ((verb === "is" || verb === "are") && !skipApplies) {
        return ensureQuestionMark(`Which description best applies to ${subject}`);
      }
    }

    if (/release site:?$/i.test(s) && !s.includes("?")) {
      const topic = s.replace(/\s+release site:?$/i, "").trim();
      return ensureQuestionMark(`Where is ${topic} released into the circulation`);
    }

    if (/\btends to:?$/i.test(s) && !s.includes("?")) {
      const topic = s.replace(/\s+tends to:?$/i, "").trim();
      return ensureQuestionMark(
        `When ${topic}, which effect on membrane potential is most likely`
      );
    }

    if (/\bequals:?$/i.test(s) && !s.includes("?")) {
      return "Under the conditions described in the stem, which value equals membrane potential?";
    }

    if (/\bmost directly prevents:?$/i.test(s) && !s.includes("?")) {
      const topic = s.replace(/\s+most directly prevents:?$/i, "").trim();
      return ensureQuestionMark(
        `Which process would blocking the stated target most directly prevent during ${topic}`
      );
    }

    if (/\bchanges\s+τ\s+by:?$/i.test(s) && !s.includes("?")) {
      return ensureQuestionMark(
        "How does increasing membrane capacitance (with fixed membrane resistance) change the time constant τ"
      );
    }

    if (/\bτ:?\s*$/i.test(s) && /R_m|membrane resistance/i.test(s) && !s.includes("?")) {
      return ensureQuestionMark(
        "If membrane resistance doubles while capacitance is unchanged, how does the membrane time constant τ change"
      );
    }

    if (/\bSubthreshold\??$/i.test(s)) {
      s = s.replace(/\?$/, "");
      return ensureQuestionMark(
        `Given the EPSP, resting potential, and threshold in the stem, is the response subthreshold`
      );
    }

    if (s.includes("?")) return s;

    const clinical =
      /(syndrome|infarct|stroke|destroyed|compression|adenoma|hemisphere|lesion|labyrinthectomy|cupula|tract)\b/i.test(
        s
      );
    if (clinical && !/^which\b/i.test(s)) {
      const scenario = s.replace(/\.$/, "");
      return ensureQuestionMark(`Which clinical presentation is most consistent with ${scenario}`);
    }

    if (/^Consider the following lesion:/i.test(s)) {
      return ensureQuestionMark(`${s} Which deficit or presentation is most likely`);
    }

    if (
      !/^which\b|^what\b|^how\b|^where\b|^when\b|^why\b|^if\b|^in\b|^during\b|^given\b/i.test(s)
    ) {
      const scenario = s.replace(/\.$/, "");
      if (scenario.length >= 12 && /\d|mM|clamp|lesion|TTX|EPSP/i.test(scenario)) {
        return ensureQuestionMark(`Given the scenario below, which answer is correct: ${scenario}`);
      }
    }

    return ensureQuestionMark(s);
  }

  function polishQuestion(q) {
    if (!q || typeof q !== "object") return q;
    if (q.type === "shortAnswer" || (!q.options && q.modelAnswer)) return q;
    const question = q.question ? polishStem(q.question, q) : q.question;
    let options = q.options;
    if (Array.isArray(options)) {
      const polished = options.map(polishOption);
      if (polished.join("\0") !== options.join("\0")) options = polished;
    }
    if (question === q.question && options === q.options) return q;
    return { ...q, question, options };
  }

  const root =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
        ? window
        : this;
  root.QuestionCopyPolish = {
    polishStem,
    polishOption,
    polishQuestion,
    polishListPlus,
    stripGenericWrappers,
  };
})();
