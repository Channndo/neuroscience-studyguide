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

  const OPTION_GIVEAWAY_STRIPS = [
    /\s*\(does not follow from the mechanism implied in the stem\)/gi,
    /\s*\([^)]*does not follow from the mechanism[^)]*\)/gi,
    /\s*\([^)]*inconsistent with the mechanism[^)]*\)/gi,
    /\s*—\s*contradicts the Nernst dependence on inside\/outside concentrations\.?/gi,
    /\s*\(contradicts the Nernst dependence on inside\/outside concentrations\)/gi,
    /\s*\([^)]*contradicts the Nernst dependence[^)]*\)/gi,
    /\s*\(ignores weighted permeabilities in the constant-field equation\)/gi,
    /\s*\([^)]*ignores weighted permeabilities[^)]*\)/gi,
    /\s*\(misstates how R_m, C_m, or geometry set τ or λ\)/gi,
    /\s*\([^)]*misstates how R_m[^)]*\)/gi,
    /\s*\(uses the wrong sign or driving force for ionic current\)/gi,
    /\s*\([^)]*uses the wrong sign or driving force[^)]*\)/gi,
    /\s*\([^)]*ignores which ion dominates[^)]*\)/gi,
    /\s*\([^)]*misapplies how active propagation[^)]*\)/gi,
    /\s*\([^)]*mixes up presynaptic release[^)]*\)/gi,
    /\s*\([^)]*not the best match[^)]*\)/gi,
    /\s+—\s*misstates how R_m, C_m, or geometry set τ or λ\.?/gi,
  ];

  function polishOption(raw) {
    let t = String(raw ?? "").trim();
    if (!t) return t;
    for (const re of OPTION_GIVEAWAY_STRIPS) t = t.replace(re, "");
    if (/^Requires\s+(photoreceptor|photoreceptors|gABA|GABA)/i.test(t)) {
      t = "Applies a sensory transduction pathway from a different modality";
    }
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

  function clauseWithVerb(clause) {
    let c = String(clause || "")
      .trim()
      .replace(/^When\s+/i, "")
      .replace(/^The\s+/i, "")
      .replace(/^If\s+/i, "if ");
    if (/\b(is|are|was|were|acts|increases|decreases|released|binds|blocks|opens|elevated|active|occurs)\b/i.test(c)) {
      return c;
    }
    const inMatch = c.match(/^(.+?)\s+in\s+(.+)$/i);
    if (inMatch && !/\b(is|are)\b/i.test(c)) {
      return `${inMatch[1].trim()} is active in ${inMatch[2].trim()}`;
    }
    if (/activity$/i.test(c)) return `${c} increases`;
    if (/^increasing\s+/i.test(c)) return `${c} occurs`;
    if (/^adding\s+/i.test(c)) {
      return `${c.replace(/^adding\s+/i, "").trim()} increases`;
    }
    if (/^opening\s+/i.test(c)) return c;
    if (/^a selective/i.test(c)) return c;
    if (/^direct pathway/i.test(c)) return `${c} is active`;
    return c;
  }

  function repairBrokenStem(s, q) {
    let t = String(s || "").trim();
    const topic = String(q?.topic || "");

    const struct = t.match(/^Structure\/condition:\s*(.+?)\.\s*Key (mechanism|process) and outcome\??$/i);
    if (struct) {
      const cond = struct[1].trim().replace(/^the\s+/i, "");
      return ensureQuestionMark(
        `For this condition (${cond}), which mechanism and outcome best match the scenario`
      );
    }

    const brokenWhenVm = t.match(/^When (.+),\s*which effect on membrane potential is most likely\??$/i);
    if (brokenWhenVm) {
      const clause = clauseWithVerb(brokenWhenVm[1]);
      const ctx = `${topic} ${clause}`.toLowerCase();
      const circuit =
        /neuromodulation|arousal|norepinephrine|acetylcholine|wake|basal ganglia|direct pathway|cortex during|motor output/i.test(
          ctx
        );
      const biophysical =
        /ouabain|pump|conductance|channel|k⁺|na⁺|cl⁻|e_|v_m|p_|gaba|opening|adding|selective increase|extracellular k/i.test(
          ctx
        );
      if (circuit && !biophysical) {
        return ensureQuestionMark(`When ${clause}, which effect on neural circuit function is most likely`);
      }
      if (/^adding\s+|^opening\s+|^a selective|^if\s+/i.test(clause) || /^if\s+/i.test(brokenWhenVm[1])) {
        const body = clause.replace(/^if\s+/i, "").trim();
        return ensureQuestionMark(`If ${body}, which change in membrane potential is most likely`);
      }
      if (/ouabain|pump|atpase/i.test(clause)) {
        return ensureQuestionMark(
          `When ${clause}, which change in resting membrane potential is most likely over time`
        );
      }
      return ensureQuestionMark(`When ${clause}, which change in membrane potential is most likely`);
    }

    if (/^When The\s+/i.test(t)) {
      t = t.replace(/^When The\s+/i, "When ");
    }
    if (/^When If\s+/i.test(t)) {
      t = t.replace(/^When If\s+/i, "If ");
    }
    if (/\.\s*Over time this,/i.test(t)) {
      t = t.replace(/\.\s*Over time this,/i, ", over time,");
    }

    const applies = t.match(/^Which description best applies to (.+)\?$/i);
    if (applies) {
      let subj = applies[1].trim().replace(/^The\s+/i, "");
      if (/^For a positively charged ion/i.test(subj)) {
        return ensureQuestionMark(
          "For a cation with higher extracellular than intracellular concentration, what is the sign of E_ion at equilibrium"
        );
      }
      if (/^For an anion like Cl⁻/i.test(subj) || /^For an anion like Cl-/i.test(subj)) {
        return ensureQuestionMark(
          "For Cl⁻ with higher internal than external concentration, what is the relative value of E_Cl"
        );
      }
      if (/^For a cation with equal intracellular and extracellular concentrations/i.test(subj)) {
        return ensureQuestionMark("If inside and outside concentrations are equal, what is the Nernst equilibrium potential");
      }
      if (/primary cation with highest permeability at rest/i.test(subj)) {
        return ensureQuestionMark("Which ion has the highest resting membrane permeability in most neurons");
      }
      if (/^Glycine receptors/i.test(subj)) {
        return ensureQuestionMark(`Which statement best describes ${subj}`);
      }
      if (/^Nicotinic acetylcholine receptors/i.test(subj)) {
        return ensureQuestionMark(`Which statement best describes ${subj}`);
      }
      if (/^A major advantage of electrical synapses/i.test(subj)) {
        return ensureQuestionMark("What is a major advantage of electrical synapses over chemical synapses");
      }
      return ensureQuestionMark(`Which statement best describes ${subj}`);
    }

  const givenNernst = t.match(/^Given Nernst scenario:\s*(.+),\s*which change in equilibrium potential is expected\??$/i);
    if (givenNernst) {
      const scenario = givenNernst[1].trim();
      return ensureQuestionMark(
        `Using the Nernst relation, if ${scenario.charAt(0).toLowerCase()}${scenario.slice(1)}, how does equilibrium potential change`
      );
    }

    return t;
  }

  function polishStem(question, q) {
    let s = stripStemPrefix(question);
    s = stripGenericWrappers(s);
    if (!s) return s;
    s = repairBrokenStem(s, q);

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
      const clause = clauseWithVerb(topic);
      const ctx = `${q?.topic || ""} ${topic}`.toLowerCase();
      if (/neuromodulation|arousal|norepinephrine|acetylcholine|wake|cortex|basal ganglia/i.test(ctx)) {
        return ensureQuestionMark(`When ${clause}, which effect on neural circuit function is most likely`);
      }
      if (/conductance|channel|pump|ion|e_|v_m|k⁺|na⁺|cl⁻/i.test(topic)) {
        return ensureQuestionMark(`When ${clause}, which change in membrane potential is most likely`);
      }
      return ensureQuestionMark(`When ${clause}, which outcome is most likely`);
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
