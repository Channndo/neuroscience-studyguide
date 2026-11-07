/**
 * Full-sentence MCQ stems and readable options (loaded before inline app logic).
 */
(function () {
  const PREFIX_RES = [
    /^Proctored mock\s*[—–-]\s*/i,
    /^Lesion:\s*/i,
  ];

  function stripStemPrefix(s) {
    let t = String(s ?? "").trim();
    for (const re of PREFIX_RES) t = t.replace(re, "");
    return t.trim();
  }

  function polishOption(raw) {
    let t = String(raw ?? "").trim();
    if (!t) return t;
    t = t.replace(/\s+as the primary route\b/gi, "");
    t = t.replace(/\s+as the primary pathway\b/gi, "");
    t = t.replace(/\s*\(same units as E_ion\)/gi, "");
    t = t.replace(/\bpain\/temp\b/gi, "pain and temperature");
    t = t.replace(/\bvibration\/proprioception\b/gi, "vibration and proprioception");
    t = t.replace(/\bflexor\/extensor\b/gi, "flexor and extensor");
    t = t.replace(/\s*\+\s*/g, ", ");
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

  function polishStem(question, q) {
    let s = stripStemPrefix(question);
    if (!s) return s;

    const scenarioWrap = s.match(/^Which answer best matches this scenario:\s*(.+)$/i);
    if (scenarioWrap) {
      let inner = scenarioWrap[1].replace(/\?\s*$/, "").trim();
      const approxIon = inner.match(/^(.+?)\s*(E_[A-Za-z⁺²⁻]+)\s*≈\s*$/);
      if (approxIon) {
        return ensureQuestionMark(
          `Given ${approxIon[1].replace(/\.\s*$/, "").trim()}, approximately what is ${approxIon[2]}`
        );
      }
      const vmClose = inner.match(/^(.+?)\s*V_m\s+closest to\s*$/i);
      if (vmClose) {
        return ensureQuestionMark(
          `Given ${vmClose[1].trim()}, which resting membrane potential (V_m) is closest`
        );
      }
      const vmApprox = inner.match(/^(.+?)\s*Resting V_m\s*≈\s*$/i);
      if (vmApprox) {
        return ensureQuestionMark(`Given ${vmApprox[1].trim()}, approximately what is resting V_m`);
      }
      const currentApprox = inner.match(/^(.+?)\s*((?:Na⁺|K⁺|Ca²⁺)?\s*current[^?]*)\s*≈\s*$/i);
      if (currentApprox) {
        return ensureQuestionMark(
          `Given ${currentApprox[1].trim()}, approximately what is the ${currentApprox[2].trim()}`
        );
      }
      return ensureQuestionMark(
        `Using the values stated below, which answer is correct: ${inner}`
      );
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

    const selectAll =
      q?.type === "selectAll" || /\bselect all\b/i.test(s);

    if (selectAll) {
      if (q?.topic) {
        const label = String(q.topic).trim();
        const lead = label.charAt(0).toLowerCase() + label.slice(1);
        return `Which of the following statements about ${lead} are correct? Select all that apply.`;
      }
      const wrapped = s.match(
        /^Which of the following statements about (.+?) are correct\?\s*Select all that apply\.?\s*$/i
      );
      if (wrapped) {
        let topic = wrapped[1].trim();
        topic = topic.replace(/\?\s*\([^)]*select[^)]*\)\.?\s*$/i, "");
        topic = topic.replace(/^which follow from (the )?/i, "the ");
        topic = topic.replace(/^during\s+(a\s+)?/i, "");
        topic = topic.replace(/,?\s*which are true\??\s*$/i, "");
        topic = topic.replace(/\s{2,}/g, " ").trim();
        if (topic.length >= 6) {
          const lead = topic.charAt(0).toLowerCase() + topic.slice(1);
          return `Which of the following statements about ${lead} are correct? Select all that apply.`;
        }
      }
      let topic = s
        .replace(/:\s*select all[^.?!]*[.?!]?\s*$/i, "")
        .replace(/\.\s*select all[^.?!]*[.?!]?\s*$/i, "")
        .trim();
      topic = stripStemPrefix(topic);
      if (topic) {
        const lead = topic.charAt(0).toLowerCase() + topic.slice(1);
        return `Which of the following statements about ${lead} are correct? Select all that apply.`;
      }
    }

    if (/^which\b/i.test(s)) return ensureQuestionMark(s);

    if (s.endsWith(":")) s = s.slice(0, -1).trim();

    const expectedSplit = s.match(/^(.+?)\.\s*Expected\s+(.+)$/i);
    if (expectedSplit && !s.includes("?")) {
      const ctx = expectedSplit[1].trim();
      const field = expectedSplit[2].trim().replace(/:$/, "").toLowerCase();
      return ensureQuestionMark(
        `Given ${ctx}, which ${field} is expected`
      );
    }

   const suggests = s.match(/^(.+?)\s+suggests:?$/i);
    if (suggests && !s.includes("?")) {
      return ensureQuestionMark(
        `Which anatomic lesion best explains ${suggests[1].trim()}`
      );
    }

    const verbTail = s.match(/^(.+?)\s+(reduces|produces|allows|can|causes|is|are|was|were)\s*:?$/i);
    if (verbTail && !s.includes("?")) {
      const subject = verbTail[1].trim();
      const verb = verbTail[2].toLowerCase();
      if (verb === "reduces") return ensureQuestionMark(`What does ${subject} reduce`);
      if (verb === "produces") return ensureQuestionMark(`What does ${subject} produce`);
      if (verb === "allows") return ensureQuestionMark(`What does ${subject} allow`);
      if (verb === "can") return ensureQuestionMark(`Which capability best describes ${subject}`);
      if (verb === "causes") {
        return ensureQuestionMark(`Which outcome is most likely when ${subject} occurs`);
      }
      if (verb === "is" || verb === "are") {
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
      return ensureQuestionMark(
        `Which clinical presentation is most consistent with ${scenario}`
      );
    }

    if (/^Consider the following lesion:/i.test(s)) {
      return ensureQuestionMark(
        `${s} Which deficit or presentation is most likely`
      );
    }

    if (!/^which\b|^what\b|^how\b|^where\b|^when\b|^why\b|^if\b|^in\b|^during\b|^given\b/i.test(s)) {
      const scenario = s.replace(/\.$/, "");
      if (scenario.length >= 12) {
        return ensureQuestionMark(`Which answer best matches this scenario: ${scenario}`);
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

  const root = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this;
  root.QuestionCopyPolish = {
    polishStem,
    polishOption,
    polishQuestion,
  };
})();
