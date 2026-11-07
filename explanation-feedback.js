/**
 * Rich MCQ feedback for HarvardX MCB80x — resolves boilerplate wrongExplanations
 * and deepens short correct-answer explanations using neuroscience facts.
 */
(function (global) {
  const BOILER_RE =
    /unlike the keyed answer|misstates the mechanism|inconsistent with the stem|does not match the keyed|does not follow from the mechanism|matches the underlying mechanism|This option is inconsistent|does not match the mechanism \(topic:/i;

  function stripHtml(s) {
    return String(s ?? "")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function truncate(s, n = 100) {
    const t = stripHtml(s);
    return t.length <= n ? t : `${t.slice(0, n - 1)}…`;
  }

  function isBoilerplate(text) {
    if (!text || !String(text).trim()) return true;
    return BOILER_RE.test(text);
  }

  function ctx(q, wrongIndex) {
    const stem = stripHtml(q.question);
    const topic = stripHtml(q.topic || "");
    const options = q.options || [];
    const correct = q.correct;
    const wrong = options[wrongIndex] ?? "";
    const right = options[correct] ?? "";
    const main = stripHtml(q.explanation || "");
    const stemTopic = `${stem} ${topic}`.toLowerCase();
    const w = stripHtml(wrong).toLowerCase();
    const r = stripHtml(right).toLowerCase();
    return { stem, topic, wrong, right, main, stemTopic, w, r, correct, wrongIndex, options };
  }

  /** @returns {string|undefined} */
  function matchSpecialty(c) {
    const rules = [
      {
        when: () =>
          /postsynaptic density|\bpsd\b/i.test(c.stemTopic) &&
          (/rhodopsin|transducin|photoreceptor|outer segment/i.test(c.wrong)),
        text: () =>
          `Rhodopsin and transducin operate in rod/cone outer segments for phototransduction. The PSD is a postsynaptic protein lattice at excitatory synapses, enriched in glutamate receptors and scaffolds (e.g., PSD-95)—not retinal photopigment.`,
      },
      {
        when: () =>
          /postsynaptic density|\bpsd\b/i.test(c.stemTopic) &&
          (/tip link|hair cell|cochlea|stereocilia/i.test(c.wrong)),
        text: () =>
          `Tip-link proteins couple stereocilia during cochlear mechanotransduction. The PSD is on the postsynaptic dendritic spine/ shaft membrane at chemical synapses, not in the auditory organ of Corti.`,
      },
      {
        when: () =>
          /postsynaptic density|\bpsd\b/i.test(c.stemTopic) &&
          (/active zone|caz|vesicle dock|presynaptic terminal/i.test(c.wrong)),
        text: () =>
          `Active-zone (CAZ) proteins and vesicle tethers are presynaptic—they position vesicles for Ca²⁺-triggered release facing the synaptic cleft. The PSD is the postsynaptic specialization on the opposite membrane.`,
      },
      {
        when: () =>
          /photoreceptor|transducin|\bcgmp\b|cng channel|horizontal cell|amacrine.*dark|rod.*dark|cone.*dark|rhodopsin/i.test(
            c.wrong
          ) && !/photoreceptor|retina|vision|rod|cone|light|dark adapt/i.test(c.stemTopic),
        text: () =>
          `This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. ${c.main}`,
      },
      {
        when: () => /gap junction/i.test(c.w) && /action potential|hodgkin|spike|voltage-gated|g_na|g_k|conductance/i.test(c.stemTopic),
        text: () =>
          `Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. ${c.main}`,
      },
      {
        when: () => /goldman/i.test(c.w) && /spike|action potential|transient|hodgkin|conductance.*later|g_na|g_k/i.test(c.stemTopic),
        text: () =>
          `The Goldman equation combines permeabilities and concentrations to estimate steady resting voltage when multiple ions are relevant. It does not, by itself, describe the fast temporal sequence of rising g_Na and delayed g_K during a single spike—that requires Hodgkin–Huxley (or equivalent) kinetics. ${c.main}`,
      },
      {
        when: () => /nernst/i.test(c.w) && /hodgkin|spike|transient|repolariz|g_k rises|g_na/i.test(c.stemTopic),
        text: () =>
          `The Nernst equation gives the equilibrium potential for one ion when its inside/outside concentrations are fixed. It does not explain coordinated, time-varying changes in Na⁺ and K⁺ conductance during an action potential. ${c.main}`,
      },
      {
        when: () => /capacit|charging/i.test(c.w) && /g_na|g_k|hodgkin|conductance|voltage-gated/i.test(c.stemTopic),
        text: () =>
          `Membrane capacitance stores charge (Q = CV) and slows voltage changes, but capacitive current alone cannot produce the selective Na⁺ influx and delayed K⁺ efflux that underlie spike upstroke and repolarization. ${c.main}`,
      },
      {
        when: () =>
          (/gaba.?a|chloride|cl⁻|cl-/i.test(c.wrong) || /ionotropic.*cl/i.test(c.w)) &&
          (/gaba.?b|metabotropic/i.test(c.stemTopic) || /gaba.?b|metabotropic/i.test(c.r)),
        text: () =>
          `GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. ${c.main}`,
      },
      {
        when: () =>
          (/gaba.?b|metabotropic|g-protein|girk|k⁺ channel via g/i.test(c.wrong) || /opens k/i.test(c.w)) &&
          (/gaba.?a|fast.*cl/i.test(c.stemTopic) || /gaba.?a/i.test(c.r)),
        text: () =>
          `Fast synaptic inhibition at many CNS synapses is dominated by GABA_A Cl⁻ flux. Metabotropic GABA_B signaling is slower and works through G-proteins, not direct ligand-gated Cl⁻ pores. ${c.main}`,
      },
      {
        when: () => /ionotropic/i.test(c.w) && /metabotropic|g-protein|second messenger|cAMP|IP₃|IP3/i.test(c.stemTopic + c.r),
        text: () =>
          `Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. ${c.main}`,
      },
      {
        when: () => /metabotropic|g-protein|second messenger/i.test(c.w) && /ionotropic|ligand-gated channel|directly opens/i.test(c.stemTopic + c.r),
        text: () =>
          `Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. ${c.main}`,
      },
      {
        when: () => /epsp|depolariz|excitatory postsynaptic/i.test(c.r) && /hyperpolar|ipsp|inhibitory postsynaptic|closer to e_k|more negative/i.test(c.w),
        text: () =>
          `EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. ${c.main}`,
      },
      {
        when: () => /ipsp|hyperpolar|inhibitory postsynaptic/i.test(c.r) && /depolariz|epsp|closer to threshold|excitatory postsynaptic|na⁺ influx postsynaptic/i.test(c.w),
        text: () =>
          `IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. ${c.main}`,
      },
      {
        when: () => /nernst/i.test(c.stemTopic) && (/unaffected by concentration|always exactly 0|independent of concentration/i.test(c.w)),
        text: () =>
          `The Nernst potential depends logarithmically on the ratio of external to internal concentration (and on valence and temperature). Changing concentrations must shift E_ion; it is not fixed at 0 mV for all ions. ${c.main}`,
      },
      {
        when: () => /resting potential|goldman|leak/i.test(c.stemTopic) && /voltage-gated na.*ups wing|action potential amplitude|all-or-none/i.test(c.w) && !/action potential|spike|threshold/i.test(c.stemTopic),
        text: () =>
          `At rest, leak K⁺ and resting permeability set V_m near E_K (modulated by other leaks). The all-or-none spike requires regenerative voltage-gated Na⁺ entry—a distinct, active regime not described by resting leak alone. ${c.main}`,
      },
      {
        when: () => /myelin|saltatory|node of ranvier/i.test(c.r) && (/passive spread only|no na⁺ channels|capacitance alone/i.test(c.w)),
        text: () =>
          `Myelin increases effective membrane resistance and reduces capacitance between nodes so depolarization regenerates at discrete nodes. Passive decay without Na⁺ channel regeneration cannot sustain fast long-distance signaling in myelinated axons. ${c.main}`,
      },
      {
        when: () => /length constant|λ|lambda/i.test(c.stemTopic) && /myelin.*only|without.*r_i|diameter.*only.*velocity/i.test(c.w),
        text: () =>
          `Length constant λ = √(R_m/R_i) depends on both membrane and axial resistance. Conduction velocity also reflects active regeneration and geometry; λ is not interchangeable with myelin's effect alone. ${c.main}`,
      },
      {
        when: () => /refractory|inactivat/i.test(c.stemTopic) && (/open more na|repeated spike|no delay/i.test(c.w)),
        text: () =>
          `Voltage-gated Na⁺ channels enter an inactivated state after opening, so another spike cannot start until they recover. That enforces a relative refractory period—without it, firing rates would be unphysiologically high. ${c.main}`,
      },
      {
        when: () => /temporal summation/i.test(c.stemTopic) && /spatial summation|different dendrite branches only/i.test(c.w),
        text: () =>
          `Temporal summation adds inputs in time at one synapse before the membrane relaxes. Spatial summation combines simultaneous inputs at different locations—different integration rule. ${c.main}`,
      },
      {
        when: () => /spatial summation/i.test(c.stemTopic) && /temporal summation|same synapse.*time/i.test(c.w),
        text: () =>
          `Spatial summation integrates EPSPs/IPSPs from multiple synapses at once. Temporal summation is sequential input at a single synapse—different mechanism. ${c.main}`,
      },
      {
        when: () =>
          /superior colliculus|multisensory integration|cross-modal/i.test(c.stemTopic) &&
          (/weaker|suppress|loss of all retinal|v1 only|no orienting/i.test(c.w)),
        text: () =>
          `In the superior colliculus, aligned auditory and visual (and other) cues often increase neuronal firing super-additively to support orienting. Options that describe suppression, retinal pathway loss, or cortex-only integration misstate colliculus multisensory enhancement. ${c.main}`,
      },
      {
        when: () => /lateral geniculate|lgn|v1|striate|optic tract|retinotopic/i.test(c.stemTopic) && /cochlea|hair cell|basilar|auditory nerve/i.test(c.w),
        text: () =>
          `These are visual pathway structures (retina → LGN → cortex). Cochlear and auditory nerve mechanisms belong to hearing, not the visual question in the stem. ${c.main}`,
      },
      {
        when: () => /cochlea|hair cell|basilar|tonotopy|auditory/i.test(c.stemTopic) && /lgn|v1|optic|retinotopic|photoreceptor/i.test(c.w),
        text: () =>
          `Cochlear place coding and hair-cell transduction are auditory. The stem concerns hearing mechanics or pathways, not retinotopy or cortical vision maps. ${c.main}`,
      },
      {
        when: () => /dopamine|l-dopa|substantia nigra|parkinson|striatum/i.test(c.stemTopic) && /myelin|nernst|photoreceptor/i.test(c.w),
        text: () =>
          `Basal ganglia motor control involves dopamine from substantia nigra pars compacta to striatum. Membrane equations or retinal biochemistry do not substitute for that circuit logic. ${c.main}`,
      },
      {
        when: () => /na⁺\/k⁺ pump|sodium-potassium|3 na.*2 k/i.test(c.r) && /nernst equilibrium only|passive leak alone sets gradient|no atp/i.test(c.w),
        text: () =>
          `The Na⁺/K⁺-ATPase actively maintains low intracellular Na⁺ and high K⁺ against leaks. Without pump activity, concentration gradients—and thus resting potential—would dissipate over time. ${c.main}`,
      },
      {
        when: () => /threshold|all-or-none/i.test(c.stemTopic) && (/graded.*same amplitude|proportional to stimulus forever/i.test(c.w)),
        text: () =>
          `Once threshold is reached, voltage-gated Na⁺ regenerative opening produces a stereotyped action potential. Graded potentials vary with stimulus strength but do not show this fixed-amplitude, all-or-none behavior. ${c.main}`,
      },
      {
        when: () => /presynaptic ca|vesicle fusion|exocytosis/i.test(c.stemTopic) && (/postsynaptic receptor only|no ca²⁺ needed|gap junction release/i.test(c.w)),
        text: () =>
          `Chemical synapses require presynaptic Ca²⁺ influx to trigger vesicle fusion and quantal neurotransmitter release. Receptor binding alone occurs postsynaptically and does not drive presynaptic exocytosis. ${c.main}`,
      },
      {
        when: () =>
          /always|never|cannot occur/i.test(c.w) &&
          !/rhodopsin|cochlea|photoreceptor|tip link|dark current|glomerul/i.test(c.w),
        text: () =>
          `MCB80x answers rarely hinge on absolute "always/never" claims—biology has exceptions. This option overstates a rule: ${c.main}`,
      },
    ];

    for (const rule of rules) {
      if (rule.when()) return rule.text();
    }
    return undefined;
  }

  function contrastFallback(c) {
    const specialty = matchSpecialty(c);
    if (specialty) return specialty;

    const topicBit = c.topic ? ` (topic: ${c.topic})` : "";
    if (c.main.length > 20) {
      return `“${truncate(c.wrong, 85)}” does not match the mechanism${topicBit}. ${c.main} The correct choice—“${truncate(c.right, 85)}”—fits that description.`;
    }
    return `“${truncate(c.wrong, 85)}” is not the best match for the stem${topicBit}. The keyed answer—“${truncate(c.right, 85)}”—reflects the underlying neuroscience described in the course.`;
  }

  function topicEnrichment(topic, stem, rightText) {
    const t = `${topic} ${stem} ${rightText}`.toLowerCase();
    if (/resting potential|leak|k⁺ permeab/i.test(t)) {
      return "Resting V_m is dominated by K⁺ leak conductance and the Na⁺/K⁺ pump maintaining ion gradients.";
    }
    if (/nernst/i.test(t)) {
      return "Remember E_ion = (RT/zF) ln([ion]_out/[ion]_in); doubling outside concentration shifts equilibrium potential toward 0 mV for cations.";
    }
    if (/goldman|constant.field/i.test(t)) {
      return "Goldman weights each ion's equilibrium potential by relative permeability at that moment.";
    }
    if (/action potential|spike|hodgkin/i.test(t)) {
      return "Spike upstroke: fast Na⁺ entry; repolarization: delayed K⁺ exit; absolute refractory: Na⁺ inactivation.";
    }
    if (/synap|vesicle|epsp|ipsp/i.test(t)) {
      return "Think in order: release (often Ca²⁺-triggered) → receptor → postsynaptic current → integration at axon hillock.";
    }
    if (/gaba|glycine|inhibit/i.test(t)) {
      return "Classify inhibition as fast ionotropic (e.g., GABA_A Cl⁻) versus slow metabotropic (e.g., GABA_B → K⁺/↓Ca²⁺).";
    }
    if (/glutamate|ampa|nmda|excit/i.test(t)) {
      return "AMPA gives fast depolarization; NMDA contributes Ca²⁺ signaling and is voltage- and ligand-gated.";
    }
    if (/vision|retina|photoreceptor|lgn|v1/i.test(t)) {
      return "Trace the feedforward path: photoreceptors → bipolar → ganglion → LGN → V1, noting sign (ON/OFF) and retinotopy.";
    }
    if (/hearing|cochlea|hair cell|auditory/i.test(t)) {
      return "Place along basilar membrane encodes frequency; hair-cell mechanotransduction drives afferent firing.";
    }
    if (/motor|cerebellum|basal ganglia|cortex/i.test(t)) {
      return "Separate planning (cortex), gain/timing (cerebellum), and action selection/inhibition (basal ganglia) roles.";
    }
    return "";
  }

  function resolveWrong(q, optionIndex) {
    if (optionIndex == null || optionIndex === q.correct) return "";
    const stored = q.wrongExplanations?.[optionIndex];
    if (stored && !isBoilerplate(stored)) return stored;
    return contrastFallback(ctx(q, optionIndex));
  }

  function resolveMain(q) {
    let main = stripHtml(q.explanation || "");
    if (!main) {
      main = contrastFallback(ctx(q, (q.correct + 1) % (q.options?.length || 1))).replace(/^“[^”]+” does not match[^.]+\.\s*/, "");
    }
    const right = q.options?.[q.correct] ?? "";
    const extra = topicEnrichment(q.topic, q.question, right);
    if (extra && main.length < 140 && !main.toLowerCase().includes(extra.slice(0, 25).toLowerCase())) {
      main = `${main} ${extra}`.trim();
    }
    const rightLine = right ? `Choice “${truncate(right, 90)}” is correct because it matches this mechanism.` : "";
    if (main.length < 100 && rightLine) {
      main = `${main} ${rightLine}`.trim();
    }
    return main;
  }

  function resolveWhyCorrect(q) {
    const right = q.options?.[q.correct] ?? "";
    const main = resolveMain(q);
    if (!right) return main;
    return `${main} In short, “${truncate(right, 100)}” is the answer that aligns with the facts above.`;
  }

  global.ExplanationFeedback = {
    isBoilerplate,
    resolveWrong,
    resolveMain,
    resolveWhyCorrect,
    stripHtml,
  };
})(typeof globalThis !== "undefined" ? globalThis : window);
