// MCB80x expansion pools — regenerate with: python3 _generate_expansion.py

const PART1_EXPANSION_POOL = [
  {
    topic: "Nernst Equation",
    question: "Using the Nernst relation, if intracellular K⁺ is doubled, how does equilibrium potential change?",
    options: [
      "E_K becomes more negative",
      "Often exactly 0 mV",
      "Unaffected by concentration",
      "Equal to E_Na for every ion",
    ],
    correct: 0,
    explanation: "Concentration changes for K⁺ shift its equilibrium potential per the Nernst equation.",
    wrongExplanations: [
      "",
      "Equilibrium potentials depend on concentrations; they are not fixed at 0 mV for every ion.",
      "Changing inside/outside concentrations shifts Nernst equilibrium potentials.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the Nernst relation, if extracellular Na⁺ is doubled, how does equilibrium potential change?",
    options: [
      "E_Na becomes more positive",
      "E_Na becomes less positive (toward 0 mV)",
      "E_Na is unchanged because Na⁺ is not permeant",
      "E_Na shifts by exactly −61 mV regardless of the ion",
    ],
    correct: 0,
    explanation: "Doubling [Na⁺]_out increases log([Na⁺]_out/[Na⁺]_in), so E_Na moves more positive by ~61.54 mV×log10(2) ≈ +18.5 mV.",
    wrongExplanations: [
      "",
      "Higher extracellular Na⁺ increases the out/in ratio, making E_Na more positive, not less.",
      "Nernst potentials change when concentrations change.",
      "The shift magnitude depends on the fold-change in concentration, not a fixed −61 mV for every ion.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the Nernst relation, if extracellular Cl⁻ is increased, how does equilibrium potential change?",
    options: [
      "E_Cl shifts according to the anion Nernst relation (signed valence)",
      "E_Cl becomes more negative when [Cl⁻]o rises, with no dependence on concentration",
      "E_Cl is fixed at 0 mV in all neurons",
      "Chloride equilibrium is unaffected by transmembrane Cl⁻ gradients",
    ],
    correct: 0,
    explanation: "Concentration changes for Cl⁻ shift its equilibrium potential per the Nernst equation with the appropriate sign for anions.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the Nernst relation, if intracellular Ca²⁺ buffering lowers free Ca²⁺, how does equilibrium potential change?",
    options: [
      "E_Ca becomes more positive",
      "E_Ca becomes more negative",
      "E_Ca is unchanged when only bound (non-free) Ca²⁺ rises",
      "The Nernst equation does not apply to divalent cations",
    ],
    correct: 0,
    explanation: "Lowering free intracellular Ca²⁺ increases the effective out/in ratio for the permeant pool, shifting E_Ca toward more positive values.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane leak conductance increases by ~10% (R_m falls) with unchanged geometry, the length constant λ typically?",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long when homeostatic mechanisms are intact",
      "Does not change ever when homeostatic mechanisms are intact",
      "Converts dendrites to photoreceptors at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane leak conductance increases by ~40% (R_m falls) with unchanged geometry, the length constant λ typically?",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long when homeostatic mechanisms are intact",
      "Does not change ever when homeostatic mechanisms are intact",
      "Converts dendrites to photoreceptors at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: TTX. Mechanism → outcome?",
    options: [
      "Blocks voltage-gated Na⁺ channels; Action potentials fail",
      "Opens photopigment",
      "Forms gap junctions in retina",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "TTX: Blocks voltage-gated Na⁺ channels, leading to Action potentials fail.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: TEA. Mechanism → outcome?",
    options: [
      "Blocks many voltage-gated K⁺ channels",
      "Opens photopigment",
      "Forms gap junctions in retina",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "TEA: Blocks many voltage-gated K⁺ channels, leading to Repolarization slows; spikes broaden.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: Ouabain. Mechanism → outcome?",
    options: [
      "Inhibits Na⁺/K⁺ ATPase",
      "Opens photopigment",
      "Forms gap junctions in retina",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Ouabain: Inhibits Na⁺/K⁺ ATPase, leading to Gradients run down; eventual depolarization.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: Lidocaine (use-dependent). Mechanism → outcome?",
    options: [
      "Preferentially blocks inactivated Na⁺ channels",
      "Opens photopigment",
      "Forms gap junctions in retina",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Lidocaine (use-dependent): Preferentially blocks inactivated Na⁺ channels, leading to Firing fibers blocked more strongly.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "The voltage clamp configuration is especially useful because it allows experimenters to?",
    options: [
      "hold V_m constant and measure required",
      "Measure muscle force at steady state in normoxic tissue",
      "Transduce sound in cochlea contralateral to monocular stimulation",
      "Label glomeruli directly when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Voltage Clamp enables hold V_m constant and measure required current.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage Clamp enables hold V_m constant and measure required current.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "The current clamp configuration is especially useful because it allows experimenters to?",
    options: [
      "inject current and record V_m changes",
      "Measure muscle force at steady state in normoxic tissue",
      "Transduce sound in cochlea contralateral to monocular stimulation",
      "Label glomeruli directly when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Current Clamp enables inject current and record V_m changes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current Clamp enables inject current and record V_m changes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "The cell-attached patch configuration is especially useful because it allows experimenters to?",
    options: [
      "record single-channel openings in a",
      "Measure muscle force at steady state in normoxic tissue",
      "Transduce sound in cochlea contralateral to monocular stimulation",
      "Label glomeruli directly when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Cell-Attached Patch enables record single-channel openings in a membrane patch.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cell-Attached Patch enables record single-channel openings in a membrane patch.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +5 mV EPSP that remains subthreshold. Approximate peak V_m?",
    options: [
      "-65 mV",
      "40 mV",
      "Exactly E_Na",
      "Exactly E_K",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +8 mV EPSP that remains subthreshold. Approximate peak V_m?",
    options: [
      "-62 mV",
      "40 mV",
      "Exactly E_Na",
      "Exactly E_K",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +12 mV EPSP that remains subthreshold. Approximate peak V_m?",
    options: [
      "-58 mV",
      "40 mV",
      "Exactly E_Na",
      "Exactly E_K",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +15 mV EPSP that remains subthreshold. Approximate peak V_m?",
    options: [
      "-55 mV",
      "40 mV",
      "Exactly E_Na",
      "Exactly E_K",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +20 mV EPSP that remains subthreshold. Approximate peak V_m?",
    options: [
      "-50 mV",
      "40 mV",
      "Exactly E_Na",
      "Exactly E_K",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the threshold period/mechanism?",
    options: [
      "Net inward current exceeds outward current",
      "Myelin is synthesized in the soma",
      "Myelin on the inner segment sets receptor potential",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the absolute refractory period/mechanism?",
    options: [
      "Many Na⁺ channels inactivated",
      "Myelin is synthesized in the soma",
      "Main mechanism: gABA is released globally",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Many Na⁺ channels inactivated; no new spike possible",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Many Na⁺ channels inactivated; no new spike possible",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period/mechanism?",
    options: [
      "Partial recovery requires stronger stimulus",
      "Myelin is synthesized in the soma",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Partial recovery requires stronger stimulus",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the afterhyperpolarization period/mechanism?",
    options: [
      "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
      "Myelin is synthesized in the soma",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Unmyelinated axon), which mechanism and outcome best match the scenario?",
    options: [
      "Active regeneration along membrane",
      "Main mechanism: passive spread forever",
      "Main mechanism: cochlear tuning",
      "Main mechanism: lTP induction",
    ],
    correct: 0,
    explanation: "Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Myelinated axon), which mechanism and outcome best match the scenario?",
    options: [
      "Nodes of Ranvier concentrate Na⁺ channels",
      "Main mechanism: passive spread forever during the rising phase of the spike",
      "Main mechanism: cochlear tuning along a uniformly leaky cable",
      "Main mechanism: lTP induction during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Cold temperature), which mechanism and outcome best match the scenario?",
    options: [
      "Slower channel kinetics",
      "Main mechanism: passive spread forever",
      "Main mechanism: cochlear tuning",
      "Main mechanism: lTP induction",
    ],
    correct: 0,
    explanation: "Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Local anesthetic), which mechanism and outcome best match the scenario?",
    options: [
      "Na⁺ block in pain fibers",
      "Main mechanism: passive spread forever",
      "Main mechanism: cochlear tuning",
      "Main mechanism: lTP induction",
    ],
    correct: 0,
    explanation: "Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Only K⁺ leak channels open (no significant Na⁺ or Cl⁻ conductance). V_m is pulled toward?",
    options: [
      "E_K (the K⁺ equilibrium potential)",
      "E_Na regardless of permeability",
      "Often 0 mV regardless of gradients",
      "The electrogenic pump reversal potential alone",
    ],
    correct: 0,
    explanation: "With only K⁺ leak conductance, the Goldman relation reduces to V_m ≈ E_K.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: With only K⁺ leak conductance, the Goldman relation reduces to V_m ≈ E_K.",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Brief opening of Na⁺ channels during synaptic depolarization (K⁺ leak still present). V_m is pulled toward?",
    options: [
      "A Goldman-weighted value between E_K and E_Na",
      "E_K primarily, ignoring Na⁺ conductance",
      "Often 0 mV regardless of gradients",
      "The electrogenic pump reversal potential alone",
    ],
    correct: 0,
    explanation: "Transiently high P_Na pulls V_m toward E_Na but other permeant ions still contribute via the Goldman sum.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Transiently high P_Na pulls V_m toward E_Na but other permeant ions still contribute via the Goldman sum.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Transiently high P_Na pulls V_m toward E_Na but other permeant ions still contribute via the Goldman sum.",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Increased Cl⁻ conductance with E_Cl below rest (K⁺ leak still present). V_m is pulled toward?",
    options: [
      "A Goldman-weighted value between E_K and E_Cl",
      "E_Na regardless of chloride",
      "Often 0 mV regardless of gradients",
      "The electrogenic pump reversal potential alone",
    ],
    correct: 0,
    explanation: "Added Cl⁻ conductance hyperpolarizes V_m toward the weighted influence of E_Cl.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Added Cl⁻ conductance hyperpolarizes V_m toward the weighted influence of E_Cl.",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Elevated extracellular K⁺ with unchanged intracellular K⁺ (dominant K⁺ leak). V_m is pulled toward?",
    options: [
      "The new, less-negative E_K after the",
      "E_Na regardless of potassium",
      "Often 0 mV regardless of gradients",
      "The electrogenic pump reversal potential alone",
    ],
    correct: 0,
    explanation: "Raising [K⁺]_out depolarizes E_K; with high K⁺ permeability, V_m follows the updated E_K.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Raising [K⁺]_out depolarizes E_K; with high K⁺ permeability, V_m follows the updated E_K.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If leak conductance rises by 12% (R_m falls) with geometry unchanged, the length constant λ compared with baseline?",
    options: [
      "Shorter — signals attenuate faster with",
      "Longer — signals spread farther",
      "Unchanged — λ seldom depends on R_m",
      "Infinite — passive spread without limit",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If leak conductance rises by 28% (R_m falls) with geometry unchanged, the length constant λ compared with baseline?",
    options: [
      "Shorter — signals attenuate faster with",
      "Longer — signals spread farther",
      "Unchanged — λ seldom depends on R_m",
      "Infinite — passive spread without limit",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If leak conductance rises by 41% (R_m falls) with geometry unchanged, the length constant λ compared with baseline?",
    options: [
      "Shorter — signals attenuate faster with",
      "Longer — signals spread farther",
      "Unchanged — λ seldom depends on R_m",
      "Infinite — passive spread without limit",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane capacitance increases by 15% while R_m is held fixed, the time constant τ?",
    options: [
      "~115% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly",
      "Independent of C_m",
      "Determined by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane capacitance increases by 35% while R_m is held fixed, the time constant τ?",
    options: [
      "~135% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly",
      "Independent of C_m",
      "Determined by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane capacitance increases by 55% while R_m is held fixed, the time constant τ?",
    options: [
      "~155% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly",
      "Independent of C_m",
      "Determined by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Which statement best describes Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + 4 mV. This EPSP?",
    options: [
      "Depolarizing by about 4 mV without reaching threshold",
      "Hyperpolarizing by 4 mV",
      "At E_Na (, 60 mV) — uses the wrong sign or driving force for ionic current.",
      "Blocked by photopigment",
    ],
    correct: 0,
    explanation: "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. EPSP amplitude adds to resting potential until threshold mechanisms engage.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Which statement best describes Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + 9 mV. This EPSP?",
    options: [
      "Depolarizing by about 9 mV without reaching threshold",
      "Hyperpolarizing by 9 mV",
      "At E_Na (, 60 mV) — uses the wrong sign or driving force for ionic current.",
      "Blocked by photopigment",
    ],
    correct: 0,
    explanation: "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. EPSP amplitude adds to resting potential until threshold mechanisms engage.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Which statement best describes Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + 14 mV. This EPSP?",
    options: [
      "Depolarizing by about 14 mV without reaching threshold",
      "Hyperpolarizing by 14 mV",
      "At E_Na (, 60 mV) — uses the wrong sign or driving force for ionic current.",
      "Blocked by photopigment",
    ],
    correct: 0,
    explanation: "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. EPSP amplitude adds to resting potential until threshold mechanisms engage.",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Increasing membrane permeability to K⁺ alone (with gradients unchanged) moves V_m?",
    options: [
      "Closer to E_K",
      "To E_Na (, 60 mV)",
      "To exactly 0 mV",
      "Away from any ion equilibrium",
    ],
    correct: 0,
    explanation: "Dominant K⁺ permeability pulls V_m toward E_K.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dominant K⁺ permeability pulls V_m toward E_K.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If intracellular Na⁺ rises while extracellular Na⁺ is fixed, E_Na shifts?",
    options: [
      "Less positive (toward 0 mV)",
      "More positive beyond, 100 mV",
      "To match E_K",
      "Not at all — Nernst ignores Na⁺",
    ],
    correct: 0,
    explanation: "Higher inside Na⁺ reduces the driving equilibrium toward outside.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "At rest, if P_Na << P_K, V_m is best described as?",
    options: [
      "Near E_K with a small depolarizing",
      "Exactly halfway between E_K and E_Na",
      "At E_Na because Na⁺ dominates",
      "Independent of ion gradients",
    ],
    correct: 0,
    explanation: "Low Na⁺ permeability at rest keeps V_m close to E_K.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low Na⁺ permeability at rest keeps V_m close to E_K.",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling dendrite diameter (uniform cylinder) typically?",
    options: [
      "Increases λ because internal axial",
      "Halves λ when homeostatic mechanisms are intact",
      "Eliminates passive decay under typical experimental conditions",
      "Blocks voltage-gated channels when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Larger diameter lowers R_i, lengthening the space constant.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Larger diameter lowers R_i, lengthening the space constant.",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Myelin on an axon primarily increases effective R_m locally, which?",
    options: [
      "Lengthens λ and reduces current leak per unit",
      "Shortens λ by increasing capacitance",
      "Prevents all ion flow at nodes",
      "Converts active to purely graded signals forever",
    ],
    correct: 0,
    explanation: "Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An IPSP that hyperpolarizes the soma from −70 mV to −75 mV will?",
    options: [
      "Increase the depolarization needed to",
      "Guarantee an immediate action potential",
      "Set V_m to E_Na",
      "Block all K⁺ leak channels permanently",
    ],
    correct: 0,
    explanation: "Hyperpolarization moves V_m away from threshold, requiring stronger net excitation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the rising phase of a squid-giant-axon spike, the dominant current?",
    options: [
      "Inward Na⁺ through voltage-gated channels",
      "Outward K⁺ through leak channels with dominant K⁺ permeability at rest",
      "Inward Cl⁻ through GABA receptors along a uniformly leaky cable",
      "Na⁺/K⁺ pump current reversing each ms during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "Voltage-gated Na⁺ entry drives rapid depolarization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-gated Na⁺ entry drives rapid depolarization.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated K⁺ channels are blocked during a spike, you expect?",
    options: [
      "Prolonged repolarization and broader spikes",
      "No change in spike width",
      "Immediate loss of resting potential",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 0,
    explanation: "Delayed K⁺ repolarization widens the action potential.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In saltatory conduction, action currents are regenerated chiefly at?",
    options: [
      "Nodes of Ranvier",
      "Myelin internodes",
      "Dendritic spines primarily",
      "The nucleus",
    ],
    correct: 0,
    explanation: "High Na⁺ channel density at nodes supports discrete regeneration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High Na⁺ channel density at nodes supports discrete regeneration.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High Na⁺ channel density at nodes supports discrete regeneration.",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp compared with cell-attached recording?",
    options: [
      "Controls V_m or I_m across the entire cell",
      "Samples one ion species with no pipette access",
      "Measures muscle force transduction",
      "Replaces need for electrodes in cochlea",
    ],
    correct: 0,
    explanation: "Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that selectively increases K⁺ leak conductance at rest will tend to?",
    options: [
      "Hyperpolarize the cell and shorten λ",
      "Depolarize toward E_Na when Na⁺ inactivation has progressed",
      "Block all synaptic vesicle fusion at fast chemical synapses",
      "Increase cochlear gain contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Current Clamp",
    question: "What does Injecting a brief depolarizing current step in current clamp produce?",
    options: [
      "A graded V_m change whose size depends on R_in",
      "An all-or-none spike even below threshold",
      "Direct measurement of single-channel conductance without noise",
      "Persistent inactivation of Na⁺ channels",
    ],
    correct: 0,
    explanation: "Subthreshold responses reflect input resistance and membrane time constant.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold responses reflect input resistance and membrane time constant.",
      "",
      "",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "What does In voltage clamp, a downward step in command potential typically produce?",
    options: [
      "Inward (negative) clamp current if",
      "Zero current because voltage is clamped",
      "Requires mechanical cochlear motion",
      "Irreversible LTP",
    ],
    correct: 0,
    explanation: "Clamp current equals the net ionic current required to hold V constant.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Spatial summation is most effective when EPSPs arrive?",
    options: [
      "At nearby sites on the dendritic tree",
      "At opposite ends of the axon",
      "After complete Na⁺ channel inactivation",
      "Main mechanism: at the axon terminal",
    ],
    correct: 0,
    explanation: "Local passive spread allows nearby EPSPs to combine at the axon hillock.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local passive spread allows nearby EPSPs to combine at the axon hillock.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local passive spread allows nearby EPSPs to combine at the axon hillock.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Temporal summation fails when successive EPSPs are separated by?",
    options: [
      "Intervals much longer than the membrane",
      "Exactly one millisecond at steady state in normoxic tissue",
      "The refractory period of muscle under typical experimental conditions",
      "The photopigment recovery cycle under typical experimental conditions",
    ],
    correct: 0,
    explanation: "If the second input arrives after decay, peaks do not add strongly.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: If the second input arrives after decay, peaks do not add strongly.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: If the second input arrives after decay, peaks do not add strongly.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "When Increasing extracellular K⁺ (without changing intracellular K⁺) occurs, which change in membrane potential is most likely?",
    options: [
      "Depolarize neurons by shifting E_K",
      "Hyperpolarize all cells to −90 mV at mammalian body temperature",
      "Block glutamate release when ligand-gated channels are open",
      "Eliminate tonotopy under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Raised external K⁺ makes E_K less negative, depolarizing cells toward threshold.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Raised external K⁺ makes E_K less negative, depolarizing cells toward threshold.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Raised external K⁺ makes E_K less negative, depolarizing cells toward threshold.",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The absolute refractory period exists largely because?",
    options: [
      "Many Na⁺ channels remain inactivated",
      "Most K⁺ channels are permanently open",
      "Myelin is removed transiently",
      "Synaptic vesicles are depleted for hours",
    ],
    correct: 0,
    explanation: "Inactivated Na⁺ channels cannot reopen until reset, preventing immediate re-firing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An axon with fewer functional Na⁺ channels per unit area will?",
    options: [
      "Conduct spikes more slowly or fail to",
      "Often conduct faster via saltation",
      "Convert to purely electrical synapses",
      "Encode high-frequency sound better",
    ],
    correct: 0,
    explanation: "Insufficient Na⁺ current density weakens regeneration along the axon.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Insufficient Na⁺ current density weakens regeneration along the axon.",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a cation with higher concentration outside than inside, E_ion is typically?",
    options: [
      "Positive",
      "Often negative",
      "Zero regardless of gradients",
      "Equal to pump reversal potential",
    ],
    correct: 0,
    explanation: "Outward concentration gradient for cations yields positive equilibrium potential.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outward concentration gradient for cations yields positive equilibrium potential.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outward concentration gradient for cations yields positive equilibrium potential.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If Cl⁻ channels open with E_Cl below rest, net Cl⁻ current at rest will?",
    options: [
      "Be inward (hyperpolarizing) until V_m",
      "Often be outward if voltage-gated Na⁺ channels are inactivated",
      "Be zero because Cl⁻ is impermeant with dominant K⁺ permeability at rest",
      "Depend on photopigment if voltage-gated Na⁺ channels are inactivated",
    ],
    correct: 0,
    explanation: "When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Shunting inhibition works in part by?",
    options: [
      "Lowering input resistance so EPSPs produce",
      "Increasing R_m to amplify EPSPs",
      "Opening Na⁺ channels at the axon hillock",
      "Converting spikes to graded release mainly in retina",
    ],
    correct: 0,
    explanation: "Increased leak conductance reduces the voltage deflection from a given synaptic current.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased leak conductance reduces the voltage deflection from a given synaptic current.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "A longer λ with unchanged τ implies subthreshold signals?",
    options: [
      "Spread farther electrotonically before",
      "Decay faster in time",
      "Often trigger spikes at distant synapses",
      "Is unlikely in dendrites",
    ],
    correct: 0,
    explanation: "λ governs spatial decay; larger λ means less attenuation with distance.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ governs spatial decay; larger λ means less attenuation with distance.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ governs spatial decay; larger λ means less attenuation with distance.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Local anesthetics preferentially block small-diameter pain fibers partly because?",
    options: [
      "Use-dependent block accumulates in",
      "Pain fibers lack voltage-gated Na⁺",
      "Anesthetics open NMDA receptors",
      "Pain fibers are purely passive",
    ],
    correct: 0,
    explanation: "Frequency-dependent Na⁺ block affects firing pathways more strongly.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase contributes to resting V_m mainly by?",
    options: [
      "Maintaining ion gradients that set E_K and E_Na",
      "Directly clamping V_m to, 60 mV",
      "Replacing all leak conductance",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "The pump is electrogenic but its main effect is sustaining concentration gradients.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best defined as the V_m at which?",
    options: [
      "Regenerative Na⁺ entry exceeds opposing",
      "K⁺ channels are fully closed forever along a uniformly leaky cable",
      "The cell reaches E_Na instantly during the rising phase of the spike",
      "Myelin thickness changes along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Positive feedback from Na⁺ channels initiates the all-or-none spike.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron receiving concurrent EPSP and IPSP at the soma shows?",
    options: [
      "Net integration",
      "Often silent inhibition regardless of timing",
      "Main mechanism: the last synapse counts",
      "Guaranteed spike if either is excitatory",
    ],
    correct: 0,
    explanation: "Excitation and inhibition combine algebraically at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Excitation and inhibition combine algebraically at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Excitation and inhibition combine algebraically at the integration zone.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance C_m affects?",
    options: [
      "How quickly V_m can change for a given",
      "The Nernst potential of K⁺ directly",
      "Tonotopic map position on basilar membrane",
      "Which glomerulus a receptor targets",
    ],
    correct: 0,
    explanation: "Capacitance stores charge; higher C_m slows voltage responses.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Cooling an axon generally slows conduction because?",
    options: [
      "Channel gating kinetics slow",
      "Myelin is permanently removed",
      "Saltatory jumps increase in distance",
      "Na⁺ equilibrium potential disappears",
    ],
    correct: 0,
    explanation: "Slower channel opening/closing delays regeneration at each node or segment.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "What does Rupturing the patch membrane to achieve whole-cell mode allow?",
    options: [
      "Dialysis of the cell with pipette solution",
      "Recording extracellular field potentials under typical experimental conditions",
      "Direct imaging of rhodopsin isomerization at steady state in normoxic tissue",
      "Measurement of basilar membrane velocity under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Whole-cell access exchanges cytoplasm with electrode solution.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell access exchanges cytoplasm with electrode solution.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell access exchanges cytoplasm with electrode solution.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For an anion with higher outside concentration, E_ion is typically?",
    options: [
      "Negative relative to typical resting V_m",
      "Often, 58 mV at mammalian body temperature",
      "Independent of valence with dominant K⁺ permeability at rest",
      "Defined by the pump with dominant K⁺ permeability at rest",
    ],
    correct: 0,
    explanation: "Anions like Cl⁻ often have negative E when outside > inside.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anions like Cl⁻ often have negative E when outside > inside.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anions like Cl⁻ often have negative E when outside > inside.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A synapse with reversal potential near −70 mV produces at rest?",
    options: [
      "Little net driving force",
      "Maximal depolarization",
      "Hyperpolarization to E_Na",
      "Persistent spike inactivation",
    ],
    correct: 0,
    explanation: "When E_rev ≈ V_m, synaptic current is small (driving force ≈ 0).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When E_rev ≈ V_m, synaptic current is small (driving force ≈ 0).",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing P_Na relative to P_K during a depolarizing event moves V_m?",
    options: [
      "Toward E_Na (more positive)",
      "Instantly to E_K",
      "To 0 mV regardless of gradients",
      "Main mechanism: toward E_Cl in most recordings",
    ],
    correct: 0,
    explanation: "Higher Na⁺ permeability weights the Goldman sum toward E_Na.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher Na⁺ permeability weights the Goldman sum toward E_Na.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Blocking the Na⁺/K⁺ pump with ouabain over minutes will?",
    options: [
      "Gradually depolarize cells as Na⁺",
      "Immediately hyperpolarize to E_K",
      "Prevent all action potentials within 1 ms",
      "Enhance cochlear outer hair motility",
    ],
    correct: 0,
    explanation: "Pump failure runs down gradients, reducing the K⁺ leak battery.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Pump failure runs down gradients, reducing the K⁺ leak battery.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is primarily due to?",
    options: [
      "Continued/outlasting K⁺ conductance",
      "Reopening of all Na⁺ channels",
      "Cl⁻ influx through AMPA receptors",
      "Photoreceptor hyperpolarization to light",
    ],
    correct: 0,
    explanation: "Delayed K⁺ currents drive V_m below rest briefly.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input resistance R_in decreases when?",
    options: [
      "Additional ion channels open (leak or synaptic)",
      "Myelin thickness increases",
      "Axon diameter shrinks toward zero mainly in nodes",
      "Intracellular K⁺ is depleted instantly",
    ],
    correct: 0,
    explanation: "More conductance lowers R_in = ΔV/ΔI for small signals.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: More conductance lowers R_in = ΔV/ΔI for small signals.",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An EPSP with reversal potential above threshold can still fail to fire if?",
    options: [
      "It is too brief or too far",
      "It triggers two spikes",
      "Na⁺ channels are absent at rest",
      "It hyperpolarizes the cell",
    ],
    correct: 0,
    explanation: "Attenuation and timing can prevent reaching threshold at the trigger zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Attenuation and timing can prevent reaching threshold at the trigger zone.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Bidirectional propagation from a mid-axon stimulus occurs because?",
    options: [
      "Both directions lack refractory block at",
      "Myelin forces one direction",
      "Nodes exist on one side",
      "Photoreceptors release glutamate equally",
    ],
    correct: 0,
    explanation: "Locally generated spikes can travel both ways until meeting refractory tissue.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Locally generated spikes can travel both ways until meeting refractory tissue.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Locally generated spikes can travel both ways until meeting refractory tissue.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If A selective increase is active in P_Cl with E_Cl below rest, which change in membrane potential is most likely?",
    options: [
      "Hyperpolarize or stabilize V_m near E_Cl",
      "Depolarize to E_Na",
      "Have no effect on V_m ever",
      "Open voltage-gated Ca²⁺ channels at rest",
    ],
    correct: 0,
    explanation: "Cl⁻ conductance pulls V_m toward the Cl⁻ reversal potential.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Cl⁻ conductance pulls V_m toward the Cl⁻ reversal potential.",
      "",
      "",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "Holding V_m at 0 mV during an experiment (from a resting −70 mV) typically?",
    options: [
      "Produces net outward current if rest was",
      "Requires zero pipette resistance under typical experimental conditions",
      "Eliminates all ion gradients instantly under typical experimental conditions",
      "Measures muscle spindle length at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Depolarizing from rest toward 0 mV reverses the driving force on K⁺, so the clamp must inject outward current to hold 0 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depolarizing from rest toward 0 mV reverses the driving force on K⁺, so the clamp must inject outward current to hold 0 mV.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Which statement best describes Cable theory predicts dendritic EPSPs recorded at the soma?",
    options: [
      "Smaller and slower than at the synaptic",
      "Larger than at the synapse following presynaptic Ca²⁺ influx",
      "Identical amplitude everywhere when homeostatic mechanisms are intact",
      "Often suprathreshold when Na⁺ inactivation has progressed",
    ],
    correct: 0,
    explanation: "Distance and τ filter dendritic signals reaching the soma.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Distance and τ filter dendritic signals reaching the soma.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Distance and τ filter dendritic signals reaching the soma.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "A neuron at 37°C has [K⁺]_in=140 mM, [K⁺]_out=4 mM, [Na⁺]_in=12 mM, [Na⁺]_out=145 mM, and P_K:P_Na:P_Cl = 1:0.04:0.45 with E_Cl=−65 mV. With dominant K⁺ leak, V_m is closest to?",
    options: [
      "About −65 to −75 mV (near E_K",
      "About, 60 mV (dominated by E_Na)",
      "Exactly 0 mV",
      "About −150 mV regardless of permeabilities",
    ],
    correct: 0,
    explanation: "Compute E_K ≈ −95 mV; high P_K with modest P_Cl and low P_Na places V_m near E_K in the Goldman sum.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Using the same concentrations, if P_Na increases tenfold during the rising phase while P_K stays constant, V_m should?",
    options: [
      "Depolarize toward E_Na but remain below",
      "Hyperpolarize toward E_K with dominant K⁺ permeability at rest",
      "Clamp instantly to 0 mV at mammalian body temperature",
      "Reverse sign of E_Cl at mammalian body temperature",
    ],
    correct: 0,
    explanation: "Goldman potential shifts toward E_Na when sodium permeability rises, but other ions still contribute.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Goldman potential shifts toward E_Na when sodium permeability rises, but other ions still contribute.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A patch with g_Na=50 nS, V_m=−10 mV, and E_Na=+60 mV. The Na⁺ current (conventional positive outward) is approximately?",
    options: [
      "−3.5 nA (inward Na⁺ current at −10 mV)",
      "3.5 nA outward at steady state in normoxic tissue",
      "0 nA because V_m is negative at mammalian body temperature",
      "−60 nA regardless of E_Na under typical experimental conditions",
    ],
    correct: 0,
    explanation: "I = g(V−E): 50 nS × (−70 mV) = −3500 pA = −3.5 nA inward (negative by outward-positive convention).",
    wrongExplanations: [
      "",
      "Driving force (V_m−E_Na) is negative here, so positive outward current is not expected.",
      "V_m sign alone does not zero current; compare V_m to E_Na.",
      "Current scales with g and (V_m−E), not a fixed −60 nA.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane τ = R_m C_m. If R_m doubles and C_m is unchanged, a step current produces a voltage response that?",
    options: [
      "Reaches twice the original steady-state",
      "Rises to the same steady state but with a longer time constant (2× τ)",
      "Becomes instantaneous with half the amplitude",
      "Oscillates at 100 Hz",
    ],
    correct: 0,
    explanation: "For fixed injected current, steady-state V = I·R_m doubles when R_m doubles; τ = R_m C_m also doubles, slowing the approach.",
    wrongExplanations: [
      "",
      "Same steady-state amplitude would require current to change with R_m; with fixed I, V_steady = I·R_m scales with R_m.",
      "Higher R_m and C_m slow the response; it does not become instantaneous.",
      "Passive RC charging does not produce sustained oscillations at fixed current.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In Hodgkin–Huxley kinetics, the m gate primarily controls?",
    options: [
      "Activation (opening) of voltage-gated Na⁺",
      "Inactivation of K⁺ channels along a uniformly leaky cable",
      "Na⁺/K⁺ pump rate during the rising phase of the spike",
      "Myelin thickness during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "m tracks Na⁺ channel activation; h mediates inactivation and n mediates delayed K⁺ activation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: m tracks Na⁺ channel activation; h mediates inactivation and n mediates delayed K⁺ activation.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During a voltage-clamp step from −70 mV to 0 mV in a squid axon, the initial inward current followed by outward current reflects?",
    options: [
      "Early Na⁺ influx (inward) then delayed K⁺",
      "K⁺ influx then Cl⁻ efflux",
      "Pump current",
      "Capacitive current with no ionic currents",
    ],
    correct: 0,
    explanation: "Classic Hodgkin–Huxley clamp: fast Na⁺ activation/inactivation then slower K⁺ activation.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Classic Hodgkin–Huxley clamp: fast Na⁺ activation/inactivation then slower K⁺ activation.",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "In current-clamp, injecting a brief depolarizing current pulse at rest typically produces a membrane response that?",
    options: [
      "Shows a graded, passive depolarization",
      "Often produces a full action potential regardless of amplitude",
      "Hyperpolarizes before depolarizing",
      "Eliminates the Na⁺ gradient",
    ],
    correct: 0,
    explanation: "Subthreshold pulses yield passive RC responses; suprathreshold triggers regenerative Na⁺ entry.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold pulses yield passive RC responses; suprathreshold triggers regenerative Na⁺ entry.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Subthreshold pulses yield passive RC responses; suprathreshold triggers regenerative Na⁺ entry.",
      "",
    ]
  }
];

const PART2_EXPANSION_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: AP invades terminal. Immediate consequence?",
    options: [
      "Depolarization opens presynaptic Ca²⁺",
      "Photopigment isomerization",
      "Basilar membrane vibration",
      "Persistent DNA transcription in muscle",
    ],
    correct: 0,
    explanation: "AP invades terminal leads to Depolarization opens presynaptic Ca²⁺ channels in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AP invades terminal leads to Depolarization opens presynaptic Ca²⁺ channels in chemical synaptic transmission.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: Ca²⁺ influx. Immediate consequence?",
    options: [
      "Triggers SNARE-mediated vesicle fusion",
      "Photopigment isomerization",
      "Basilar membrane vibration",
      "Persistent DNA transcription in muscle",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx leads to Triggers SNARE-mediated vesicle fusion in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ influx leads to Triggers SNARE-mediated vesicle fusion in chemical synaptic transmission.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: Vesicle fusion. Immediate consequence?",
    options: [
      "Quantal transmitter release into cleft",
      "Photopigment isomerization",
      "Basilar membrane vibration",
      "Persistent DNA transcription in muscle",
    ],
    correct: 0,
    explanation: "Vesicle fusion leads to Quantal transmitter release into cleft in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicle fusion leads to Quantal transmitter release into cleft in chemical synaptic transmission.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: Transmitter binding. Immediate consequence?",
    options: [
      "Postsynaptic receptor opening/conformation",
      "Photopigment isomerization when ligand-gated channels are open",
      "Basilar membrane vibration when ligand-gated channels are open",
      "Persistent DNA transcription in muscle when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Transmitter binding leads to Postsynaptic receptor opening/conformation change in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Transmitter binding leads to Postsynaptic receptor opening/conformation change in chemical synaptic transmission.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Transmitter: Glutamate. Typical role?",
    options: [
      "Fast excitatory ionotropic signaling",
      "Main mechanism: phototransduction",
      "Main mechanism: cochlear outer hair motility",
      "Main mechanism: cerebrospinal fluid secretion",
    ],
    correct: 0,
    explanation: "Glutamate primarily mediates Fast excitatory ionotropic signaling (often AMPA/NMDA).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Glutamate primarily mediates Fast excitatory ionotropic signaling (often AMPA/NMDA).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Glutamate primarily mediates Fast excitatory ionotropic signaling (often AMPA/NMDA).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Glutamate primarily mediates Fast excitatory ionotropic signaling (often AMPA/NMDA).",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Transmitter: GABA. Typical role?",
    options: [
      "Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>)",
      "Main mechanism: phototransduction",
      "Main mechanism: cochlear outer hair motility",
      "Main mechanism: cerebrospinal fluid secretion",
    ],
    correct: 0,
    explanation: "GABA primarily mediates Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABA primarily mediates Fast inhibitory Cl⁻ conductance (GABAA).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABA primarily mediates Fast inhibitory Cl⁻ conductance (GABAA).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABA primarily mediates Fast inhibitory Cl⁻ conductance (GABAA).",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Transmitter: Acetylcholine. Typical role?",
    options: [
      "Nicotinic ionotropic at NMJ",
      "Main mechanism: phototransduction",
      "Main mechanism: cochlear outer hair motility",
      "Main mechanism: cerebrospinal fluid secretion",
    ],
    correct: 0,
    explanation: "Acetylcholine primarily mediates Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Acetylcholine primarily mediates Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Acetylcholine primarily mediates Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Acetylcholine primarily mediates Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Transmitter: Dopamine. Typical role?",
    options: [
      "Neuromodulation of motivation/movement circuits",
      "Requires phototransduction",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires cerebrospinal fluid secretion",
    ],
    correct: 0,
    explanation: "Dopamine primarily mediates Neuromodulation of motivation/movement circuits.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Plasticity form: NMDA-dependent LTP. Induction requirement?",
    options: [
      "Postsynaptic Ca²⁺ entry during strong",
      "Main mechanism: muscle stretch without changes in presynaptic release probability",
      "Main mechanism: rod dark current when NMDA receptors are co-activated",
      "Main mechanism: olfactory adaptation before cortical association areas",
    ],
    correct: 0,
    explanation: "NMDA-dependent LTP requires Postsynaptic Ca²⁺ entry during strong depolarization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NMDA-dependent LTP",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. NMDA-dependent LTP",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NMDA-dependent LTP",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Plasticity form: Homosynaptic LTD. Induction requirement?",
    options: [
      "Prolonged low-frequency stimulation",
      "Main mechanism: muscle stretch",
      "Main mechanism: rod dark current",
      "Main mechanism: olfactory adaptation",
    ],
    correct: 0,
    explanation: "Homosynaptic LTD requires Prolonged low-frequency stimulation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Homosynaptic LTD",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Homosynaptic LTD",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Homosynaptic LTD",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Plasticity form: STDP potentiation. Induction requirement?",
    options: [
      "Presynaptic spike shortly before",
      "Requires muscle stretch at fast chemical synapses",
      "Requires rod dark current when ligand-gated channels are open",
      "Requires olfactory adaptation at fast chemical synapses",
    ],
    correct: 0,
    explanation: "STDP potentiation requires Presynaptic spike shortly before postsynaptic spike.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. STDP potentiation",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Plasticity form: Facilitation. Induction requirement?",
    options: [
      "Residual presynaptic Ca²⁺ increases",
      "Requires muscle stretch without changes in presynaptic release probability",
      "Requires rod dark current when NMDA receptors are co-activated",
      "Requires olfactory adaptation before cortical association areas",
    ],
    correct: 0,
    explanation: "Facilitation requires Residual presynaptic Ca²⁺ increases release probability.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Facilitation",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Circuit motif: Feedforward inhibition. Functional effect?",
    options: [
      "Limits spread and sharpens timing of",
      "Eliminates all spikes globally",
      "Requires maps sound frequency",
      "Requires stores declarative memory in NMJ",
    ],
    correct: 0,
    explanation: "Feedforward inhibition: Limits spread and sharpens timing of excitation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Circuit motif: Feedback inhibition. Functional effect?",
    options: [
      "Stabilizes firing rate after activity",
      "Eliminates all spikes globally",
      "Main mechanism: maps sound frequency",
      "Main mechanism: stores declarative memory in NMJ",
    ],
    correct: 0,
    explanation: "Feedback inhibition: Stabilizes firing rate after activity.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Feedback inhibition: Stabilizes firing rate after activity.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Feedback inhibition: Stabilizes firing rate after activity.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Circuit motif: Lateral inhibition. Functional effect?",
    options: [
      "Enhances contrast between active",
      "Eliminates all spikes globally",
      "Requires maps sound frequency",
      "Requires stores declarative memory in NMJ",
    ],
    correct: 0,
    explanation: "Lateral inhibition: Enhances contrast between active and surround.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Circuit motif: Disinhibition. Functional effect?",
    options: [
      "Removing inhibition from a target",
      "Eliminates all spikes globally",
      "Requires maps sound frequency",
      "Requires stores declarative memory in NMJ",
    ],
    correct: 0,
    explanation: "Disinhibition: Removing inhibition from a target increases net excitation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Second-messenger pathway: cAMP → PKA. Common action?",
    options: [
      "Phosphorylation of channels/transporters",
      "Direct opening of rhodopsin when homeostatic mechanisms are intact",
      "Saltatory conduction in dendrites along a uniformly leaky cable",
      "Requires cl⁻ pumping at NMJ when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "cAMP → PKA typically causes Phosphorylation of channels/transporters.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Second-messenger pathway: IP₃. Common action?",
    options: [
      "Ca²⁺ release from ER stores",
      "Direct opening of rhodopsin",
      "Saltatory conduction in dendrites",
      "Main mechanism: cl⁻ pumping at NMJ",
    ],
    correct: 0,
    explanation: "IP₃ typically causes Ca²⁺ release from ER stores.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: IP₃ typically causes Ca²⁺ release from ER stores.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Second-messenger pathway: DAG. Common action?",
    options: [
      "Can activate PKC at membrane",
      "Direct opening of rhodopsin",
      "Saltatory conduction in dendrites",
      "Main mechanism: cl⁻ pumping at NMJ",
    ],
    correct: 0,
    explanation: "DAG typically causes Can activate PKC at membrane.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DAG typically causes Can activate PKC at membrane.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +3 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak?",
    options: [
      "-64 mV if approximately linear",
      "Often threshold crossed when Na⁺ inactivation has progressed",
      "Often hyperpolarization following presynaptic Ca²⁺ influx",
      "Exactly E_Na when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +6 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak?",
    options: [
      "-58 mV if approximately linear",
      "Often threshold crossed when Na⁺ inactivation has progressed",
      "Often hyperpolarization following presynaptic Ca²⁺ influx",
      "Exactly E_Na when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +9 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak?",
    options: [
      "-52 mV if approximately linear",
      "Often threshold crossed when Na⁺ inactivation has progressed",
      "Often hyperpolarization following presynaptic Ca²⁺ influx",
      "Exactly E_Na when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +12 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak?",
    options: [
      "-46 mV if approximately linear",
      "Often threshold crossed when Na⁺ inactivation has progressed",
      "Often hyperpolarization following presynaptic Ca²⁺ influx",
      "Exactly E_Na when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +15 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak?",
    options: [
      "-40 mV if approximately linear",
      "Often threshold crossed when Na⁺ inactivation has progressed",
      "Often hyperpolarization following presynaptic Ca²⁺ influx",
      "Exactly E_Na when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +18 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak?",
    options: [
      "-34 mV if approximately linear",
      "Often threshold crossed when Na⁺ inactivation has progressed",
      "Often hyperpolarization following presynaptic Ca²⁺ influx",
      "Exactly E_Na when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spatial summation combines depolarizations at the integration zone.",
      "",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "NMJ concept: End-plate potential. Description?",
    options: [
      "Graded depolarization of muscle membrane",
      "Photoreceptor hyperpolarization to light",
      "Cochlear phase locking",
      "Glomerular one-receptor rule",
    ],
    correct: 0,
    explanation: "End-plate potential: Graded depolarization of muscle membrane.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. End-plate potential: Graded depolarization of muscle membrane.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: End-plate potential: Graded depolarization of muscle membrane.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: End-plate potential: Graded depolarization of muscle membrane.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "NMJ concept: AChE in cleft. Description?",
    options: [
      "Clears ACh to terminate signal",
      "Photoreceptor hyperpolarization to light",
      "Cochlear phase locking",
      "Glomerular one-receptor rule",
    ],
    correct: 0,
    explanation: "AChE in cleft: Clears ACh to terminate signal.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. AChE in cleft: Clears ACh to terminate signal.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AChE in cleft: Clears ACh to terminate signal.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AChE in cleft: Clears ACh to terminate signal.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "NMJ concept: Curare-like antagonists. Description?",
    options: [
      "Block nicotinic receptors",
      "Photoreceptor hyperpolarization to light",
      "Cochlear phase locking",
      "Glomerular one-receptor rule",
    ],
    correct: 0,
    explanation: "Curare-like antagonists: Block nicotinic receptors.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Curare-like antagonists: Block nicotinic receptors.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Curare-like antagonists: Block nicotinic receptors.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Curare-like antagonists: Block nicotinic receptors.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "After a brief presynaptic train at 10 Hz, the next EPSC is often larger because?",
    options: [
      "Residual presynaptic Ca²⁺ elevates release probability",
      "Persistent insertion of all postsynaptic NMDA receptors",
      "Complete vesicle pool depletion on the first spike",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Moderate-frequency spikes leave Ca²⁺ elevated briefly, increasing release probability for the following spike.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "After a brief presynaptic train at 40 Hz, release often shows?",
    options: [
      "Mixed facilitation early in the train with",
      "Persistent loss of all receptors",
      "Conversion to electrical synapses",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Intermediate frequencies can facilitate initially, then depress as vesicle availability falls.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Intermediate frequencies can facilitate initially, then depress as vesicle availability falls.",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "After a brief presynaptic train at 100 Hz, the dominant short-term change is usually?",
    options: [
      "Synaptic depression from rapid depletion of the",
      "Persistent loss of all receptors",
      "Conversion to electrical synapses",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Very high-frequency stimulation exhausts releasable vesicles, reducing subsequent release (short-term depression).",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Very high-frequency stimulation exhausts releasable vesicles, reducing subsequent release (short-term depression).",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two EPSPs (+2 mV each) arrive 5 ms apart at one synapse (temporal summation). Compared with one EPSP alone, peak depolarization tends to be?",
    options: [
      "Larger if within τ of the membrane",
      "Smaller at fast chemical synapses",
      "Unchanged when ligand-gated channels are open",
      "Exactly at E_K following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Temporal summation combines inputs within the membrane time window.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Temporal summation combines inputs within the membrane time window.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Temporal summation combines inputs within the membrane time window.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Calcium entry into the presynaptic terminal is required because it?",
    options: [
      "Triggers vesicle fusion machinery",
      "Directly opens postsynaptic AMPA receptors",
      "Hyperpolarizes the postsynaptic cell",
      "Replaces ACh in the cleft",
    ],
    correct: 0,
    explanation: "Ca²⁺–sensor coupling drives exocytosis of neurotransmitter.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺–sensor coupling drives exocytosis of neurotransmitter.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Miniature EPSCs (mEPSCs) in the absence of presynaptic spikes indicate?",
    options: [
      "Spontaneous quantal release of vesicles",
      "Postsynthetic DNA damage at fast chemical synapses",
      "Cochlear amplification failure at fast chemical synapses",
      "Persistent LTP when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "mEPSCs reflect single vesicle fusion events.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: mEPSCs reflect single vesicle fusion events.",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Which statement best describes Nicotinic ACh receptors at the NMJ?",
    options: [
      "Ligand-gated cation channels (fast EPSP)",
      "Metabotropic G-protein receptors following presynaptic Ca²⁺ influx",
      "Voltage-gated Cl⁻ channels following presynaptic Ca²⁺ influx",
      "Gap junction hemichannels at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Nicotinic receptors pass cations and depolarize muscle.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nicotinic receptors pass cations and depolarize muscle.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "If E_rev for a GABA<sub>A</sub> synapse is near −70 mV at rest, GABA at rest?",
    options: [
      "Produces little change in V_m",
      "Often massive hyperpolarization to −90 mV",
      "Depolarizes to E_Na",
      "Blocks all quantal release",
    ],
    correct: 0,
    explanation: "Driving force is small when E_rev matches V_m; conductance changes still matter.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Driving force is small when E_rev matches V_m; conductance changes still matter.",
      "",
      "",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "NMDA receptors act as coincidence detectors because they require?",
    options: [
      "Glutamate binding AND postsynaptic",
      "Main mechanism: presynaptic Ca²⁺ following presynaptic Ca²⁺ influx",
      "Main mechanism: gABA release at fast chemical synapses",
      "Photopigment isomerization when NMDA receptors are co-activated",
    ],
    correct: 0,
    explanation: "Voltage-dependent Mg²⁺ block links pre and post activity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-dependent Mg²⁺ block links pre and post activity.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-dependent Mg²⁺ block links pre and post activity.",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Post-tetanic potentiation reflects primarily?",
    options: [
      "Elevated presynaptic Ca²⁺",
      "Persistent insertion of AMPA receptors",
      "Loss of all inhibitory interneurons",
      "Cochlear outer hair cell motility",
    ],
    correct: 0,
    explanation: "Residual Ca²⁺ enhances short-term release.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Residual Ca²⁺ enhances short-term release.",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition in sensory pathways often?",
    options: [
      "Narrows the temporal window for effective",
      "Eliminates all thalamic relay when homeostatic mechanisms are intact",
      "Prevents any spikes in cortex along a uniformly leaky cable",
      "Stores declarative memories directly under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Inhibition follows disynaptic paths that limit excitation duration.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Which capability best describes Metabotropic glutamate receptor activation?",
    options: [
      "Modulate ion channels via G-proteins",
      "Directly pass Na⁺ like AMPA",
      "Transduce sound in the cochlea primarily",
      "Replace SNARE proteins",
    ],
    correct: 0,
    explanation: "GPCRs adjust excitability and synaptic strength slowly compared with ionotropic receptors.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GPCRs adjust excitability and synaptic strength slowly compared with ionotropic receptors.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GPCRs adjust excitability and synaptic strength slowly compared with ionotropic receptors.",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "In spike-timing-dependent plasticity (STDP), pre-before-post within ~20 ms often yields?",
    options: [
      "LTP (potentiation)",
      "LTD",
      "No change regardless of timing",
      "Main mechanism: retrograde amnesia clinically",
    ],
    correct: 0,
    explanation: "Classic STDP windows link order of spikes to sign of plasticity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Classic STDP windows link order of spikes to sign of plasticity.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Classic STDP windows link order of spikes to sign of plasticity.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Botulinum toxin reduces transmission by?",
    options: [
      "Cleaving SNARE proteins required for vesicle fusion",
      "Blocking nicotinic receptors on muscle via curare mechanism",
      "Opening NMDA receptors",
      "Increasing photoreceptor gain",
    ],
    correct: 0,
    explanation: "SNARE cleavage prevents exocytosis of transmitter.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNARE cleavage prevents exocytosis of transmitter.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. SNARE cleavage prevents exocytosis of transmitter.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Acetylcholinesterase inhibitors (e.g., neostigmine) increase?",
    options: [
      "Duration of ACh in the synaptic cleft",
      "Quantal size of each vesicle permanently",
      "Myelin thickness",
      "Cochlear place map spacing",
    ],
    correct: 0,
    explanation: "Slowing ACh breakdown prolongs receptor activation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors means?",
    options: [
      "Receptors enter a closed state despite",
      "Vesicles stop fusing permanently when ligand-gated channels are open",
      "Axons myelinate faster when Na⁺ inactivation has progressed",
      "Hippocampus is removed following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Desensitized receptors no longer conduct even with ligand present.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Electrical synapses (gap junctions) differ from chemical synapses because they?",
    options: [
      "Pass ionic current directly with less synaptic delay",
      "Often require SNARE-mediated fusion",
      "Use dopamine as transmitter",
      "Exist mainly in retina amacrine cells with no exceptions",
    ],
    correct: 0,
    explanation: "Connexin channels couple pre and post voltages rapidly.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Connexin channels couple pre and post voltages rapidly.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Connexin channels couple pre and post voltages rapidly.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Connexin channels couple pre and post voltages rapidly.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "LTD induced by low-frequency stimulation often involves?",
    options: [
      "Reduced AMPA receptor insertion or",
      "Immediate permanent axotomy",
      "Main mechanism: cochlear tuning shifts",
      "Loss of all K⁺ channels",
    ],
    correct: 0,
    explanation: "LTD protocols weaken synapses via receptor trafficking and signaling.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LTD protocols weaken synapses via receptor trafficking and signaling.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptotagmin acts as a Ca²⁺ sensor because it?",
    options: [
      "Triggers fast exocytosis when Ca²⁺ binds",
      "Opens voltage-gated Na⁺ channels when ligand-gated channels are open",
      "Is a ligand for glutamate following presynaptic Ca²⁺ influx",
      "Defines tonotopic position when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Synaptotagmin couples Ca²⁺ influx to vesicle fusion timing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which capability best describes Recurrent excitatory circuits?",
    options: [
      "Sustain activity or amplify patterns but",
      "Guarantee perfect stability under typical experimental conditions",
      "Prevent all oscillations under typical experimental conditions",
      "Replace hippocampal indexing bilaterally at the level described",
    ],
    correct: 0,
    explanation: "Recurrent loops need inhibitory balance to avoid epileptiform activity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Recurrent loops need inhibitory balance to avoid epileptiform activity.",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP elevation in neurons commonly?",
    options: [
      "Activates PKA to phosphorylate channels",
      "Directly opens nicotinic receptors at fast chemical synapses",
      "Hyperpolarizes rods to light under typical experimental conditions",
      "Sets E_Na to 0 mV with dominant K⁺ permeability at rest",
    ],
    correct: 0,
    explanation: "PKA-mediated phosphorylation modulates excitability and gene expression.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Which capability best describes Retrograde messengers (e.g., endocannabinoids)?",
    options: [
      "Suppress presynaptic release following",
      "Travel anterograde in myelin",
      "Replace all electrical coupling",
      "Encode sound frequency on basilar membrane",
    ],
    correct: 0,
    explanation: "Retrograde signaling adjusts future presynaptic release.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Retrograde signaling adjusts future presynaptic release.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection in dendrites can use?",
    options: [
      "Nonlinear NMDA and active dendritic",
      "Main mechanism: passive leak at all sites",
      "Photopigment regeneration",
      "Outer hair cell somatic motility alone",
    ],
    correct: 0,
    explanation: "Nonlinearities allow dendrites to detect conjunctive inputs.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nonlinearities allow dendrites to detect conjunctive inputs.",
      "",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after sustained high-frequency firing often reflects?",
    options: [
      "Depletion of readily releasable vesicles",
      "Instant permanent SNARE loss when NMDA receptors are co-activated",
      "Requires lTD at CA3–CA1 without changes in presynaptic release probability",
      "Elimination of ITD coding when NMDA receptors are co-activated",
    ],
    correct: 0,
    explanation: "Vesicle pool depletion reduces release probability transiently.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Muscarinic ACh receptors in the CNS are typically?",
    options: [
      "Metabotropic — slow modulation of excitability",
      "Ionotropic nicotinic channels identical to NMJ",
      "Main mechanism: located on muscle endplate",
      "Responsible for phototransduction",
    ],
    correct: 0,
    explanation: "Muscarinic receptors are GPCRs with diverse downstream effects.",
    wrongExplanations: [
      "",
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Muscarinic receptors are GPCRs with diverse downstream effects.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscarinic receptors are GPCRs with diverse downstream effects.",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine depletion in Parkinson disease primarily affects?",
    options: [
      "Basal ganglia circuits for movement initiation and selection",
      "Cochlear inner hair cell transduction",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "NMJ quantal content primarily",
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia motor loops.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNc dopamine loss disrupts basal ganglia motor loops.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Hebbian plasticity is often summarized as?",
    options: [
      "Cells that fire together wire together",
      "Many synapses weaken many second regardless of activity",
      "Main mechanism: inhibitory synapses potentiate",
      "Spikes cannot change receptor number",
    ],
    correct: 0,
    explanation: "Correlated pre/post activity drives strengthening in classic Hebbian models.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre/post activity drives strengthening in classic Hebbian models.",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Center-surround receptive fields in retina emerge largely from?",
    options: [
      "Lateral inhibition and bipolar/amacrine connectivity",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Gap junctions at the NMJ",
      "Hippocampal place fields",
    ],
    correct: 0,
    explanation: "Antagonistic surround via lateral inhibition enhances contrast.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Clathrin-mediated endocytosis after fusion serves to?",
    options: [
      "Recycle vesicle membrane",
      "Open new Na⁺ channels at nodes",
      "Generate photoreceptor hyperpolarization",
      "Encode odor identity in glomeruli",
    ],
    correct: 0,
    explanation: "Endocytosis retrieves membrane for new vesicle formation.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Endocytosis retrieves membrane for new vesicle formation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Endocytosis retrieves membrane for new vesicle formation.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ opens channels on the ER to?",
    options: [
      "Release Ca²⁺ from internal stores into the",
      "Pump Na⁺ out of the cell directly when homeostatic mechanisms are intact",
      "Hyperpolarize photoreceptors to light at fast chemical synapses",
      "Set basilar membrane stiffness globally when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "IP₃ receptors release stored Ca²⁺ for signaling.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. IP₃ receptors release stored Ca²⁺ for signaling.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "An inhibitory synapse with E_rev above rest can be?",
    options: [
      "Depolarizing yet still inhibitory",
      "Impossible under any condition",
      "Often excitatory if depolarizing",
      "Main mechanism: found in cochlear hair cells",
    ],
    correct: 0,
    explanation: "Depolarizing IPSPs can still reduce excitatory drive via conductance increase.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Depolarizing IPSPs can still reduce excitatory drive via conductance increase.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Depolarizing IPSPs can still reduce excitatory drive via conductance increase.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Depolarizing IPSPs can still reduce excitatory drive via conductance increase.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "AMPA receptor blockers reduce?",
    options: [
      "Fast excitatory synaptic currents in many CNS pathways",
      "References a circuit element that does not control the variable asked about",
      "Myelin thickness",
      "Muscle endplate quantal size directly",
    ],
    correct: 0,
    explanation: "AMPA mediates rapid glutamatergic EPSCs.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Miniature end-plate potentials (MEPPs) demonstrate?",
    options: [
      "Quantal nature of synaptic transmission at the NMJ",
      "Continuous graded muscle depolarization without vesicles",
      "Saltatory conduction in muscle spindles",
      "Tonotopic mapping",
    ],
    correct: 0,
    explanation: "MEPPs are single-quantum events at motor endplates.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MEPPs are single-quantum events at motor endplates.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Tetanus toxin prevents release by?",
    options: [
      "Proteolyzing SNARE proteins",
      "Blocking voltage-gated K⁺",
      "Opening gap junctions globally",
      "Destroying hippocampal place fields",
    ],
    correct: 0,
    explanation: "SNARE cleavage abolishes vesicle fusion.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNARE cleavage abolishes vesicle fusion.",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all selection can be implemented by?",
    options: [
      "Strong mutual inhibition among competing representations",
      "Removing all inhibition",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Increasing leak without synapses",
    ],
    correct: 0,
    explanation: "Lateral inhibition suppresses weaker active units.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Lateral inhibition suppresses weaker active units.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Dendritic spikes (active dendritic conductances) allow?",
    options: [
      "Local nonlinear amplification before",
      "Main mechanism: passive decay everywhere",
      "Elimination of all IPSPs",
      "Direct transduction of odor to muscle",
    ],
    correct: 0,
    explanation: "Active dendrites boost coincident synaptic input locally.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active dendrites boost coincident synaptic input locally.",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Glutamate reuptake transporters on glia and neurons serve to?",
    options: [
      "Terminate synaptic action",
      "Synthesize GABA from glutamate mainly in cochlea",
      "Open nicotinic receptors",
      "Set E_K to, 60 mV",
    ],
    correct: 0,
    explanation: "Clearance of glutamate limits receptor activation duration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Clearance of glutamate limits receptor activation duration.",
      "",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Facilitation after a single presynaptic spike partly reflects?",
    options: [
      "Leftover presynaptic Ca²⁺ elevating",
      "Persistent insertion of new axons during the rising phase of the spike",
      "Loss of all AMPA receptors when ligand-gated channels are open",
      "Increased rod dark current without changes in presynaptic release probability",
    ],
    correct: 0,
    explanation: "Ca²⁺ remains elevated briefly, enhancing subsequent release.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Ca²⁺ remains elevated briefly, enhancing subsequent release.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "When Norepinephrine is active in arousal networks, which effect on neural circuit function is most likely?",
    options: [
      "Increase gain and reduce background noise",
      "Silence all thalamic relay permanently when brainstem arousal nuclei are active",
      "Block all Na⁺ channels with diffuse forebrain projections",
      "Replace cerebellar climbing fibers bilaterally at the level described",
    ],
    correct: 0,
    explanation: "NE modulates alertness and signal-to-noise in sensory cortex.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "A central pattern generator (CPG) for locomotion can produce rhythmic output because?",
    options: [
      "Reciprocally connected interneurons and endogenous bursting sustain alternating activity",
      "Every motor neuron requires continuous cortical spikes each cycle",
      "Main mechanism: sensory feedback from muscle spindles creates rhythm",
      "Gap junctions replace all chemical synapses in cortex (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "CPGs combine intrinsic pacemaker properties with inhibitory wiring for rhythm.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CPGs combine intrinsic pacemaker properties with inhibitory wiring for rhythm.",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Reciprocal inhibition in a spinal stretch reflex circuit ensures that?",
    options: [
      "Agonist contraction is accompanied by antagonist relaxation",
      "Both agonist and antagonist contract maximally together",
      "Main mechanism: sensory neurons fire without motor output (maps the lesion to the wrong motor pathway or reflex)",
      "Upper motor neurons are bypassed entirely (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Ia interneurons inhibit antagonist α-motor neurons during agonist activation.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ia interneurons inhibit antagonist α-motor neurons during agonist activation.",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "In Aplysia, habituation of the gill-withdrawal reflex is associated with?",
    options: [
      "Decreased presynaptic glutamate release from",
      "New insertion of AMPA receptors on motor neurons",
      "Persistent LTP at many synapse",
      "Loss of all voltage-gated Na⁺ channels",
    ],
    correct: 0,
    explanation: "Habituation reflects homosynaptic depression of sensory→motor transmission.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Habituation reflects homosynaptic depression of sensory→motor transmission.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Sensitization in Aplysia after noxious tail shock involves?",
    options: [
      "Modulatory serotonergic facilitation of sensory neuron terminals",
      "Immediate long-term potentiation requiring NMDA mainly in hippocampus",
      "Exclusive gap junction coupling in cerebellum",
      "Photoreceptor bleaching",
    ],
    correct: 0,
    explanation: "Serotonin increases cAMP/PKA signaling and enhances transmitter release.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Serotonin increases cAMP/PKA signaling and enhances transmitter release.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Serotonin increases cAMP/PKA signaling and enhances transmitter release.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Quantal analysis showing discrete step sizes in EPSC amplitude supports?",
    options: [
      "Vesicles release fixed amounts of transmitter",
      "Continuous fluid secretion without vesicles",
      "Main mechanism: electrical coupling without quanta",
      "Infinite release without saturation",
    ],
    correct: 0,
    explanation: "Stepwise mEPSC/EPSC sizes reflect multimodal vesicle fusion events.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Stepwise mEPSC/EPSC sizes reflect multimodal vesicle fusion events.",
      "",
    ]
  }
];

const PART3_EXPANSION_POOL = [
  {
    topic: "Phototransduction",
    question: "Retinal cell class: Photoreceptor. Role?",
    options: [
      "Transduces photons; releases glutamate continuously in darkness",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Applies a sensory transduction pathway from a different modality",
      "under standard whole-cell recording conditions.",
    ],
    correct: 0,
    explanation: "Photoreceptor: Transduces photons; releases glutamate continuously in darkness.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Retinal cell class: Bipolar cell. Role?",
    options: [
      "Sign-inverting or sign-conserving pathway element",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Applies a sensory transduction pathway from a different modality",
      "Requires cSF production",
    ],
    correct: 0,
    explanation: "Bipolar cell: Sign-inverting or sign-conserving pathway element.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Retinal cell class: Amacrine cell. Role?",
    options: [
      "Lateral processing in inner plexiform layer",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Applies a sensory transduction pathway from a different modality",
      "Requires cSF production",
    ],
    correct: 0,
    explanation: "Amacrine cell: Lateral processing in inner plexiform layer.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal cell class: Ganglion cell. Role?",
    options: [
      "Output spike trains to brain via optic nerve",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Applies a sensory transduction pathway from a different modality",
      "Requires cSF production",
    ],
    correct: 0,
    explanation: "Ganglion cell: Output spike trains to brain via optic nerve.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Basilar base. Function?",
    options: [
      "Encodes high frequencies",
      "Olfactory combinatorial coding",
      "Photopigment regeneration",
      "Cerebellar climbing fiber error",
    ],
    correct: 0,
    explanation: "Basilar base: Encodes high frequencies.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basilar base: Encodes high frequencies.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Basilar apex. Function?",
    options: [
      "Encodes low frequencies",
      "Olfactory combinatorial coding",
      "Photopigment regeneration",
      "Cerebellar climbing fiber error",
    ],
    correct: 0,
    explanation: "Basilar apex: Encodes low frequencies.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basilar apex: Encodes low frequencies.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Inner hair cell. Function?",
    options: [
      "Primary sensory transduction to afferents",
      "Olfactory combinatorial coding in the primary sensory pathway named",
      "Photopigment regeneration contralateral to monocular stimulation",
      "Cerebellar climbing fiber error contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "Inner hair cell: Primary sensory transduction to afferents.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Outer hair cell. Function?",
    options: [
      "Active cochlear amplification/tuning",
      "Olfactory combinatorial coding in the primary sensory pathway named",
      "Photopigment regeneration contralateral to monocular stimulation",
      "Cerebellar climbing fiber error contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "Outer hair cell: Active cochlear amplification/tuning.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Sensory pathway/receptor: Dorsal column pathway. Conveys?",
    options: [
      "Fine touch, vibration, proprioception",
      "Color opponency in the primary sensory pathway named",
      "Saltatory node formation during the rising phase of the spike",
      "Requires declarative memory storage before cortical association areas",
    ],
    correct: 0,
    explanation: "Dorsal column pathway signals Fine touch, vibration, proprioception.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dorsal column pathway signals Fine touch, vibration, proprioception.",
      "",
      "",
    ]
  },
  {
    topic: "Pain",
    question: "Which clinical presentation is most consistent with Sensory pathway/receptor: Spinothalamic tract. Conveys?",
    options: [
      "pain/temp",
      "Color opponency",
      "Saltatory node formation",
      "Main mechanism: declarative memory storage",
    ],
    correct: 0,
    explanation: "Spinothalamic tract signals pain/temp.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spinothalamic tract signals pain/temp.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spinothalamic tract signals pain/temp.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Sensory pathway/receptor: Meissner corpuscle. Conveys?",
    options: [
      "Light touch and flutter",
      "Color opponency",
      "Saltatory node formation",
      "Main mechanism: declarative memory storage",
    ],
    correct: 0,
    explanation: "Meissner corpuscle signals Light touch and flutter.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Meissner corpuscle signals Light touch and flutter.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Meissner corpuscle signals Light touch and flutter.",
    ]
  },
  {
    topic: "Proprioception",
    question: "Sensory pathway/receptor: Muscle spindle. Conveys?",
    options: [
      "Muscle length/stretch",
      "Color opponency",
      "Saltatory node formation",
      "Main mechanism: declarative memory storage",
    ],
    correct: 0,
    explanation: "Muscle spindle signals Muscle length/stretch.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscle spindle signals Muscle length/stretch.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscle spindle signals Muscle length/stretch.",
    ]
  },
  {
    topic: "Hippocampus",
    question: "CNS region: Hippocampus. Best-known function?",
    options: [
      "Spatial/episodic memory and navigation",
      "Requires phototransduction",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Hippocampus: Spatial/episodic memory and navigation.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "CNS region: Amygdala. Best-known function?",
    options: [
      "Emotional learning and salience",
      "Requires phototransduction",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Amygdala: Emotional learning and salience.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "CNS region: Cerebellum. Best-known function?",
    options: [
      "Timing and error correction in movement",
      "Requires phototransduction",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Cerebellum: Timing and error correction in movement.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "CNS region: Basal ganglia. Best-known function?",
    options: [
      "Action selection and reinforcement learning",
      "Requires phototransduction",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Basal ganglia: Action selection and reinforcement learning.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Thalamus",
    question: "CNS region: Thalamus. Best-known function?",
    options: [
      "Sensory/motor relay and gating to cortex",
      "Requires phototransduction",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Thalamus: Sensory/motor relay and gating to cortex.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Executive Function",
    question: "CNS region: Prefrontal cortex. Best-known function?",
    options: [
      "Working memory and executive control",
      "Requires phototransduction",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Prefrontal cortex: Working memory and executive control.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Memory paradigm/structure: LTP at CA3–CA1. Key lesson?",
    options: [
      "Long-lasting increase in synaptic strength",
      "Eliminates all sensation at fast chemical synapses",
      "Blocks photopigment following presynaptic Ca²⁺ influx",
      "Prevents Na⁺ gating following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "LTP at CA3–CA1: Long-lasting increase in synaptic strength after strong activation.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LTP at CA3–CA1: Long-lasting increase in synaptic strength after strong activation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LTP at CA3–CA1: Long-lasting increase in synaptic strength after strong activation.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Memory paradigm/structure: Consolidation. Key lesson?",
    options: [
      "Transfer/stabilization of memory over",
      "Eliminates all sensation without changes in presynaptic release probability",
      "Blocks photopigment after repeated synaptic activation",
      "Prevents Na⁺ gating after repeated synaptic activation",
    ],
    correct: 0,
    explanation: "Consolidation: Transfer/stabilization of memory over hours to years.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation: Transfer/stabilization of memory over hours to years.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation: Transfer/stabilization of memory over hours to years.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Memory paradigm/structure: H.M.. Key lesson?",
    options: [
      "Profound anterograde declarative amnesia",
      "Eliminates all sensation without changes in presynaptic release probability",
      "Blocks photopigment after repeated synaptic activation",
      "Prevents Na⁺ gating after repeated synaptic activation",
    ],
    correct: 0,
    explanation: "H.M.: Profound anterograde declarative amnesia.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: H.M.: Profound anterograde declarative amnesia.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: H.M.: Profound anterograde declarative amnesia.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Memory paradigm/structure: Morris water maze. Key lesson?",
    options: [
      "Tests hippocampal-dependent spatial",
      "Eliminates all sensation without changes in presynaptic release probability",
      "Blocks photopigment after repeated synaptic activation",
      "Prevents Na⁺ gating after repeated synaptic activation",
    ],
    correct: 0,
    explanation: "Morris water maze: Tests hippocampal-dependent spatial learning.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Morris water maze: Tests hippocampal-dependent spatial learning.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Morris water maze: Tests hippocampal-dependent spatial learning.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Parkinson disease. Typical neural basis?",
    options: [
      "Loss of SNc dopamine neurons",
      "Main mechanism: outer hair cell loss in cochlea",
      "Main mechanism: taste bud apoptosis",
      "Gap junction blockade at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Parkinson disease linked to Loss of SNc dopamine neurons.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Parkinson disease linked to Loss of SNc dopamine neurons.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Multiple sclerosis. Typical neural basis?",
    options: [
      "CNS demyelination",
      "Main mechanism: outer hair cell loss in cochlea",
      "Main mechanism: taste bud apoptosis",
      "Gap junction blockade at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Multiple sclerosis linked to CNS demyelination.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Multiple sclerosis linked to CNS demyelination.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Prosopagnosia. Typical neural basis?",
    options: [
      "Fusiform face area / ventral temporal cortex",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Prosopagnosia reflects ventral stream face-processing dysfunction, often linked to fusiform/occipitotemporal cortex.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Hemianopia (post-chiasmal). Typical neural basis?",
    options: [
      "Contralateral visual field loss",
      "Main mechanism: outer hair cell loss in cochlea",
      "Main mechanism: taste bud apoptosis",
      "Gap junction blockade at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Hemianopia (post-chiasmal) linked to Contralateral visual field loss.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hemianopia (post-chiasmal) linked to Contralateral visual field loss.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Binaural hearing uses interaural cues; for low frequencies, which cue is especially important?",
    options: [
      "Interaural time differences (ITD)",
      "Requires retinal eccentricity",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires muscle spindle length",
    ],
    correct: 0,
    explanation: "Sound localization combines ITD and ILD depending on frequency.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Binaural hearing uses interaural cues; for mid frequencies, which cue is especially important?",
    options: [
      "ITD for low, ILD for high (classic MCB80x split)",
      "Requires retinal eccentricity",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires muscle spindle length",
    ],
    correct: 0,
    explanation: "Sound localization combines ITD and ILD depending on frequency.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Binaural hearing uses interaural cues; for high frequencies, which cue is especially important?",
    options: [
      "Interaural level differences (ILD)",
      "Requires retinal eccentricity",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires muscle spindle length",
    ],
    correct: 0,
    explanation: "Sound localization combines ITD and ILD depending on frequency.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "A basilar membrane region with peak sensitivity near 400 Hz best reflects?",
    options: [
      "Tonotopic organization",
      "Random wiring without frequency order",
      "Main mechanism: olfactory receptor choice",
      "Main mechanism: nMJ ACh release",
    ],
    correct: 0,
    explanation: "Cochlear mechanics map frequency to position (place theory).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "A basilar membrane region with peak sensitivity near 4000 Hz best reflects?",
    options: [
      "Tonotopic organization",
      "Random wiring without frequency order",
      "Main mechanism: olfactory receptor choice",
      "Main mechanism: nMJ ACh release",
    ],
    correct: 0,
    explanation: "Cochlear mechanics map frequency to position (place theory).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Bilateral hippocampal system damage in humans most consistently impairs?",
    options: [
      "Forming new declarative/episodic memories",
      "Most procedural skills such as riding a bike",
      "Most sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Profound medial temporal lobe damage in humans most consistently impairs?",
    options: [
      "Forming new declarative/episodic memories",
      "Most procedural skills such as riding a bike",
      "Most sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Which statement best describes Following extensive hippocampal injury in adults, the ability to form new memories?",
    options: [
      "Forming new declarative/episodic memories",
      "Most procedural skills such as riding a bike",
      "Most sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "After bilateral hippocampal loss, which learning is most impaired in typical cases?",
    options: [
      "Forming new declarative/episodic memories",
      "Most procedural skills such as riding a bike",
      "Most sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Medial temporal lobe damage producing anterograde amnesia primarily disrupts?",
    options: [
      "Forming new declarative/episodic memories",
      "Most procedural skills such as riding a bike",
      "Most sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Phototransduction",
    question: "In darkness, vertebrate photoreceptors?",
    options: [
      "Are depolarized and release glutamate",
      "Hyperpolarize strongly to −70 mV below rest",
      "Fire Na⁺ spikes at 100 Hz",
      "Use nicotinic receptors at the outer segment",
    ],
    correct: 0,
    explanation: "Dark current through cGMP-gated channels depolarizes photoreceptors.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Dark current through cGMP-gated channels depolarizes photoreceptors.",
      "",
      "",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Light closes cGMP-gated channels in rods, leading to?",
    options: [
      "Hyperpolarization and reduced glutamate",
      "Depolarization and increased glutamate release",
      "Opening of voltage-gated Na⁺ at the synapse",
      "Immediate LTP at CA3–CA1",
    ],
    correct: 0,
    explanation: "Less cGMP closes channels, hyperpolarizing the cell.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Less cGMP closes channels, hyperpolarizing the cell.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Less cGMP closes channels, hyperpolarizing the cell.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal ganglion cells encode visual information primarily as?",
    options: [
      "Patterns of action potentials sent to the",
      "Graded muscle contractions in the primary sensory pathway named",
      "Continuous DC without spikes along a uniformly leaky cable",
      "Direct hormone release into CSF before cortical association areas",
    ],
    correct: 0,
    explanation: "Ganglion cells are the spiking output of the retina.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Lateral geniculate nucleus (LGN) of thalamus?",
    options: [
      "Relays retinal input to primary visual",
      "Transduces photons directly contralateral to monocular stimulation",
      "Encodes smell via glomeruli contralateral to monocular stimulation",
      "Generates end-plate potentials contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "LGN is the main thalamic relay for vision.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Primary visual cortex (V1) neurons often show?",
    options: [
      "Orientation and spatial frequency",
      "Pure tone frequency tuning like cochlea",
      "Requires pain/temp maps",
      "No receptive fields",
    ],
    correct: 0,
    explanation: "V1 simple/complex cells filter orientation and spatial structure.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Place theory of hearing states that?",
    options: [
      "Sound frequency is mapped to location along the",
      "Most frequencies activate the entire cochlea equally",
      "ITD is used for all frequencies in most recordings",
      "Outer hair cells are the sole afferent signal",
    ],
    correct: 0,
    explanation: "Tonotopy maps frequency to cochlear place.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Inner hair cells primarily?",
    options: [
      "Provide afferent signal to auditory nerve",
      "Amplify basilar motion via somatic motility",
      "Secrete cerebrospinal fluid",
      "Store episodic memories",
    ],
    correct: 0,
    explanation: "IHCs transduce vibration into receptor potentials driving afferents.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: IHCs transduce vibration into receptor potentials driving afferents.",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cell electromotility contributes to?",
    options: [
      "Sharp cochlear tuning and sensitivity",
      "Requires pain modulation in spinothalamic tract",
      "Photopigment regeneration",
      "NMJ quantal release",
    ],
    correct: 0,
    explanation: "OHC motility boosts cochlear frequency selectivity.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "For localizing low-frequency sounds, the brain relies heavily on?",
    options: [
      "Interaural time differences (ITD)",
      "Interaural level differences (ILD)",
      "Retinal eccentricity",
      "Muscle spindle Ia fibers",
    ],
    correct: 0,
    explanation: "Low frequencies carry phase/time cues between ears.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low frequencies carry phase/time cues between ears.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low frequencies carry phase/time cues between ears.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Which statement best describes For localizing high-frequency sounds, a dominant cue?",
    options: [
      "Interaural level difference (ILD) from",
      "Pure ITD without level change in the primary sensory pathway named",
      "Olfactory combinatorial codes in the primary sensory pathway named",
      "Rod dark current amplitude in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "High frequencies are shadowed by the head, creating level differences.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. High frequencies are shadowed by the head, creating level differences.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles are most sensitive to?",
    options: [
      "High-frequency vibration",
      "Static two-point touch",
      "Cold temperatures primarily",
      "Bitter taste quality",
    ],
    correct: 0,
    explanation: "Pacinian corpuscles adapt rapidly and encode vibration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pacinian corpuscles adapt rapidly and encode vibration.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pacinian corpuscles adapt rapidly and encode vibration.",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin often signal?",
    options: [
      "pain/temp",
      "Fine vibration at 200 Hz",
      "Sound frequency",
      "Face identity in fusiform gyrus directly",
    ],
    correct: 0,
    explanation: "Polymodal nociceptors and thermoreceptors use free nerve endings.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Polymodal nociceptors and thermoreceptors use free nerve endings.",
      "",
      "",
    ]
  },
  {
    topic: "Pain",
    question: "Gate control theory proposes that?",
    options: [
      "Spinal interneurons can inhibit nociceptive",
      "Pain fibers are seldom influenced by touch",
      "Most pain is purely cortical with no spinal relay",
      "Myelin prevents all pain",
    ],
    correct: 0,
    explanation: "Inhibitory circuits in dorsal horn modulate pain relay.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibitory circuits in dorsal horn modulate pain relay.",
      "",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "One olfactory receptor neuron in many species typically?",
    options: [
      "Expresses one receptor type",
      "Expresses all receptor genes simultaneously",
      "Synapses directly on motor neurons",
      "Uses ACh as its neurotransmitter at NMJ",
    ],
    correct: 0,
    explanation: "Receptor choice and glomerular targeting create labeled lines/combinatorial codes.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Receptor choice and glomerular targeting create labeled lines/combinatorial codes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Receptor choice and glomerular targeting create labeled lines/combinatorial codes.",
    ]
  },
  {
    topic: "Gustation",
    question: "Which statement best describes Different taste qualities (sweet, salty, sour, bitter, umami)?",
    options: [
      "Encoded by distinct receptor mechanisms",
      "Detected by pain fibers in tongue in the primary sensory pathway named",
      "Identical to cochlear tonotopy in the primary sensory pathway named",
      "Stored solely in cerebellum in the adult human CNS",
    ],
    correct: 0,
    explanation: "Taste uses specialized receptors and central gustatory pathways.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Taste uses specialized receptors and central gustatory pathways.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (e.g., skills) often involves?",
    options: [
      "Basal ganglia and cerebellum among other",
      "Hippocampal place cells primarily via major descending or ascending tracts",
      "Requires olfactory glomeruli in the primary sensory pathway named",
      "Requires inner hair cells after repeated synaptic activation",
    ],
    correct: 0,
    explanation: "Motor learning uses striatum, cerebellum, and related loops.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor learning uses striatum, cerebellum, and related loops.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Climbing fiber input to Purkinje cells often signals?",
    options: [
      "Unexpected error or perturbation in movement",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "Constant sound intensity",
      "Static touch on Meissner corpuscle",
    ],
    correct: 0,
    explanation: "Climbing fibers carry error-related signals for motor learning.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Climbing fibers carry error-related signals for motor learning.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Climbing fibers carry error-related signals for motor learning.",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "Direct vs indirect pathways in basal ganglia modulate?",
    options: [
      "Thalamic drive to cortex",
      "Main mechanism: cochlear fluid ion composition",
      "Rhodopsin regeneration primarily",
      "Quantal size at NMJ",
    ],
    correct: 0,
    explanation: "Striatal pathways gate cortical initiation of action.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Striatal pathways gate cortical initiation of action.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Striatal pathways gate cortical initiation of action.",
    ]
  },
  {
    topic: "Thalamus",
    question: "Thalamic relay nuclei function as?",
    options: [
      "Gateways that filter and route sensory/motor",
      "Sites of phototransduction",
      "Primary storage of all declarative memories permanently",
      "NMJ-dominated synapses",
    ],
    correct: 0,
    explanation: "Thalamus controls what reaches cortex and when.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamus controls what reaches cortex and when.",
    ]
  },
  {
    topic: "Executive Function",
    question: "Working memory tasks heavily engage?",
    options: [
      "Prefrontal cortex maintaining",
      "Requires rod outer segments",
      "Requires spinothalamic tract",
      "Cochlear basilar apex primarily",
    ],
    correct: 0,
    explanation: "PFC supports temporary maintenance and manipulation of information.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which outcome is most likely when Damage to primary visual cortex (V1) typically occurs?",
    options: [
      "Cortical blindness in corresponding visual",
      "Complete loss of all sensation including touch",
      "Deafness for all frequencies",
      "Immediate loss of all procedural memory",
    ],
    correct: 0,
    explanation: "V1 lesions produce scotomas or field loss depending on extent.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which clinical presentation is most consistent with Hemianopia after post-chiasmal lesion means?",
    options: [
      "Loss of contralateral half of the visual",
      "Loss of ipsilateral hearing at steady state in normoxic tissue",
      "Inability to taste umami contralateral to monocular stimulation",
      "Complete NMJ block at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Optic tract/radiation lesions create contralateral field defects.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Optic tract/radiation lesions create contralateral field defects.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Optic tract/radiation lesions create contralateral field defects.",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia involves difficulty with?",
    options: [
      "Recognizing faces despite intact low-level",
      "Detecting all sounds above 4 kHz under typical experimental conditions",
      "Feeling vibration under typical experimental conditions",
      "Most forms of motor learning instantly after repeated synaptic activation",
    ],
    correct: 0,
    explanation: "Face recognition networks (fusiform area among others) are impaired.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition networks (fusiform area among others) are impaired.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition networks (fusiform area among others) are impaired.",
      "",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Which capability best describes Amygdala activation during emotional events?",
    options: [
      "Modulate hippocampal consolidation",
      "Transduce photons in rods without changes in presynaptic release probability",
      "Set cochlear place map before cortical association areas",
      "Replace SNARE proteins without changes in presynaptic release probability",
    ],
    correct: 0,
    explanation: "Emotional salience enhances memory encoding via amygdala–hippocampus interactions.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Morris water maze performance is impaired by?",
    options: [
      "Hippocampal lesions that disrupt spatial",
      "Blocking photopigment",
      "Removing outer hair cells",
      "Cutting all dorsal roots without CNS effect",
    ],
    correct: 0,
    explanation: "Hippocampus is critical for spatial learning in this task.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hippocampus is critical for spatial learning in this task.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hippocampus is critical for spatial learning in this task.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular vs parvocellular LGN pathways differ partly in?",
    options: [
      "Temporal vs spatial resolution emphasis",
      "Encoding bitter taste contralateral to monocular stimulation",
      "NMJ quantal content before cortical association areas",
      "Muscle spindle length contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "M pathway favors motion/transients; P pathway favors detail/color.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M pathway favors motion/transients; P pathway favors detail/color.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M pathway favors motion/transients; P pathway favors detail/color.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Horizontal cells contribute to?",
    options: [
      "Lateral inhibition shaping center-surround",
      "Saltatory conduction in optic nerve when Na⁺ inactivation has progressed",
      "ACh release at NMJ when ligand-gated channels are open",
      "CSF production contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "Horizontal cells modulate bipolar input via lateral inhibition.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "The organ of Corti sits on the basilar membrane and contains?",
    options: [
      "Hair cells and supporting cells transducing mechanical vibration",
      "References a circuit element that does not control the variable asked about",
      "Delayed K⁺ channels are closed throughout the entire action potential",
      "Implies myelin alone sets spike threshold without voltage-gated channels",
    ],
    correct: 0,
    explanation: "Cochlear hair cells transduce fluid–membrane motion.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pain",
    question: "Which clinical presentation is most consistent with Spinothalamic tract neurons convey?",
    options: [
      "Pain, temperature, and crude touch",
      "Main mechanism: fine two-point discrimination",
      "Main mechanism: visual orientation",
      "Main mechanism: cochlear phase locking",
    ],
    correct: 0,
    explanation: "Anterolateral system includes pain/temp.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anterolateral system includes pain/temp.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anterolateral system includes pain/temp.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Consolidation of memory over sleep involves?",
    options: [
      "Reactivation and transfer/interaction of",
      "Immediate erasure of all LTP",
      "HCN channels are silent while cGMP keeps CNG channels open",
      "Persistent block of Many synapses",
    ],
    correct: 0,
    explanation: "Sleep supports systems consolidation and trace stabilization.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Sleep supports systems consolidation and trace stabilization.",
      "",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "Dopamine reward prediction error signals are often associated with?",
    options: [
      "Midbrain dopamine neurons responding to",
      "Inner hair cell stereocilia bilaterally at the level described",
      "Rod outer segment discs in the adult human CNS",
      "NMJ acetylcholinesterase bilaterally at the level described",
    ],
    correct: 0,
    explanation: "DA neurons encode discrepancies between expected and received reward.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DA neurons encode discrepancies between expected and received reward.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DA neurons encode discrepancies between expected and received reward.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DA neurons encode discrepancies between expected and received reward.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Purkinje cells are the sole output of cerebellar cortex and?",
    options: [
      "Inhibit deep cerebellar nuclei",
      "Excite all motor neurons directly",
      "Transduce sound in cochlea",
      "Release glutamate onto rods",
    ],
    correct: 0,
    explanation: "Purkinje GABAergic output tonically suppresses deep nuclei.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Purkinje GABAergic output tonically suppresses deep nuclei.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Color opponency (red–green) arises largely from?",
    options: [
      "Retinal ganglion cell receptive field",
      "Cochlear place map alone contralateral to monocular stimulation",
      "Spinothalamic nociceptors before cortical association areas",
      "NMJ end-plate folds before cortical association areas",
    ],
    correct: 0,
    explanation: "Opponent processing compares cone signals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Opponent processing compares cone signals.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Auditory information reaches cortex via?",
    options: [
      "Thalamus (MGN) to primary auditory cortex",
      "Direct rod synapse on Purkinje cells",
      "Requires hippocampus without thalamus",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Medial geniculate nucleus relays to A1.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral cells in olfactory bulb?",
    options: [
      "Project output to higher olfactory areas",
      "Are photoreceptors in retina when ligand-gated channels are open",
      "Are inner hair cells in the primary sensory pathway named",
      "Generate NMJ quanta before cortical association areas",
    ],
    correct: 0,
    explanation: "Mitral/tufted cells are principal output neurons of the bulb.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Gustation",
    question: "Taste information reaches cortex through?",
    options: [
      "Thalamus (VPM) and gustatory cortex among other relays",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires dorsal column without synapse",
      "Direct gap junction from tongue to cerebellum",
    ],
    correct: 0,
    explanation: "Gustatory pathways synapse in brainstem, thalamus, then cortex.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Multiple sclerosis symptoms often include?",
    options: [
      "Weakness, sensory changes",
      "Requires loss of bitter taste permanently",
      "Requires rod hyperpolarization to dark",
      "Exclusive NMJ curare sensitivity",
    ],
    correct: 0,
    explanation: "CNS demyelination slows conduction and causes multifocal deficits.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. CNS demyelination slows conduction and causes multifocal deficits.",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Parkinson disease motor symptoms include?",
    options: [
      "Bradykinesia, rigidity, and resting tremor",
      "Hyperacuity for high-frequency hearing",
      "Complete cortical blindness",
      "Instant anterograde amnesia for all stimuli",
    ],
    correct: 0,
    explanation: "Basal ganglia dysfunction slows and stiffens movement.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia dysfunction slows and stiffens movement.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia dysfunction slows and stiffens movement.",
      "",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Rhodopsin activation by light triggers?",
    options: [
      "Transducin/phosphodiesterase cascade lowering cGMP",
      "Immediate opening of voltage-gated Na⁺ at axon hillock",
      "SNARE-mediated fusion at NMJ",
      "LTP at Many synapses globally",
    ],
    correct: 0,
    explanation: "G-protein cascade closes cGMP-gated channels in rods.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Two-point discrimination is finest on?",
    options: [
      "Fingertips with high receptor density",
      "Proximal back with low density in the primary sensory pathway named",
      "Cochlear apex primarily before cortical association areas",
      "Rod outer segment tip in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "Sensory acuity correlates with receptor density and cortical magnification.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which outcome is most likely when A lesion of the optic tract (post-chiasmal, left side) typically occurs?",
    options: [
      "Right homonymous hemianopia",
      "Left nasal hemianopia mainly in the left eye",
      "Bitemporal hemianopia",
      "Complete blindness in the left eye",
    ],
    correct: 0,
    explanation: "Post-chiasmal fibers carry contralateral visual field information.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Post-chiasmal fibers carry contralateral visual field information.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Post-chiasmal fibers carry contralateral visual field information.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which clinical presentation is most consistent with What does Transection of the lateral corticospinal tract in the cervical spinal cord usually produce?",
    options: [
      "Ipsilateral weakness below the lesion with",
      "Contralateral weakness below the lesion at steady state in normoxic tissue",
      "Bilateral flaccid paralysis at the level when homeostatic mechanisms are intact",
      "Isolated loss of taste on the tongue contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "Corticospinal fibers decussate in the medulla; ipsilateral tract carries ipsilateral limb control.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Corticospinal fibers decussate in the medulla; ipsilateral tract carries ipsilateral limb control.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Corticospinal fibers decussate in the medulla; ipsilateral tract carries ipsilateral limb control.",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Damage to left Wernicke's area (posterior superior temporal gyrus) most often yields?",
    options: [
      "Fluent but largely meaningless speech with impaired comprehension",
      "Nonfluent effortful speech with relatively preserved comprehension",
      "Pure motor weakness without language change",
      "Loss of vestibulo-ocular reflex",
    ],
    correct: 0,
    explanation: "Wernicke aphasia affects language comprehension and semantic output.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Wernicke aphasia affects language comprehension and semantic output.",
    ]
  },
  {
    topic: "Vestibular System",
    question: "Semicircular canal hair cells depolarize when?",
    options: [
      "Endolymph flow deflects the cupula toward",
      "Basilar membrane moves at 4 kHz under typical experimental conditions",
      "Rod photopigment isomerizes when homeostatic mechanisms are intact",
      "Glomeruli are activated by odorants at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Vestibular transduction is direction-sensitive to stereocilia bundle deflection.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar lesions classically produce?",
    options: [
      "Ataxia, dysmetria, and intention tremor without primary weakness",
      "Resting tremor and bradykinesia identical to Parkinson disease",
      "Complete cortical blindness (maps the lesion to the wrong motor pathway or reflex)",
      "Anterograde amnesia for all events (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Cerebellum coordinates timing and accuracy of movement.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "When direct pathway of the basal ganglia (striatum → GPi/SNr) is active, which effect on neural circuit function is most likely?",
    options: [
      "Disinhibit thalamocortical neurons and facilitate movement",
      "Strongly inhibit all thalamic output permanently (maps the lesion to the wrong motor pathway or reflex)",
      "Hyperpolarize photoreceptors (maps the lesion to the wrong motor pathway or reflex)",
      "Block all Na⁺ channels in cortex (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Direct-pathway MSNs inhibit the inhibitory output nuclei, gating movement.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Thalamus",
    question: "The ventral posteromedial (VPM) nucleus of thalamus primarily relays?",
    options: [
      "Facial somatosensory",
      "Primary visual information from retina",
      "Cochlear frequency maps",
      "Corticospinal tract motor commands",
    ],
    correct: 0,
    explanation: "VPM carries face S1 and taste-related inputs; VPL carries body somatosensation.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  }
];
