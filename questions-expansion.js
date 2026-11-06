// MCB80x expansion pools — regenerate with: python3 _generate_expansion.py

const PART1_EXPANSION_POOL = [
  {
    topic: "Nernst Equation",
    question: "Nernst scenario: intracellular K⁺ is doubled. Expected change in equilibrium potential:",
    options: [


      "E_K becomes more negative",
      "Always exactly 0 mV",
      "Unaffected by concentration",
      "Equal to E_Na for every ion",
    ],
    correct: 0,
    explanation: "Concentration changes for K⁺ shift its equilibrium potential per the Nernst equation.",
    wrongExplanations: [
      "",
      "Equilibrium potentials depend on concentrations; they are not fixed at 0 mV for every ion.",
      "Changing inside/outside concentrations shifts Nernst equilibrium potentials.",
      "Unlike the keyed answer (E_K becomes more negative), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Nernst scenario: extracellular Na⁺ is doubled. Expected change in equilibrium potential:",
    options: [


      "E_Na becomes more positive (about +18 mV at 37°C)",
      "E_Na becomes less positive (toward 0 mV) — contradicts the Nernst dependence on inside/outside concentrations.",
      "Mixes up temporal order of channel activation during signaling",
      "Shifts by exactly −61 mV regardless of ion (contradicts the Nernst dependence on inside/outside concentrations)",
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
    question: "Nernst scenario: extracellular Cl⁻ is increased. Expected change in equilibrium potential:",
    options: [


      "E_Cl shifts according to the anion Nernst relation",
      "Mixes up temporal order of channel activation during signaling",
      "Mixes up temporal order of channel activation during signaling",
      "Mixes up temporal order of channel activation during signaling",
    ],
    correct: 0,
    explanation: "Concentration changes for Cl⁻ shift its equilibrium potential per the Nernst equation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (E_Cl shifts according to the anion Nernst relation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_Cl shifts according to the anion Nernst relation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_Cl shifts according to the anion Nernst relation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Nernst scenario: intracellular Ca²⁺ buffering lowers free Ca²⁺. Expected change in equilibrium potential:",
    options: [


      "E_Ca becomes more positive",
      "Mixes up temporal order of channel activation during signaling",
      "Mixes up temporal order of channel activation during signaling",
      "Mixes up temporal order of channel activation during signaling",
    ],
    correct: 0,
    explanation: "Lowering free intracellular Ca²⁺ increases the out/in ratio, shifting E_Ca toward more positive values.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (E_Ca becomes more positive), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_Ca becomes more positive), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_Ca becomes more positive), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane leak conductance increases by ~10% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [


      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long (misstates how R_m, C_m, or geometry set τ or λ)",
      "Does not change ever (misstates how R_m, C_m, or geometry set τ or λ)",
      "Converts dendrites to photoreceptors",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Becomes shorter (less spatial spread)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Becomes shorter (less spatial spread)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane leak conductance increases by ~40% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [


      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long (misstates how R_m, C_m, or geometry set τ or λ)",
      "Does not change ever (misstates how R_m, C_m, or geometry set τ or λ)",
      "Converts dendrites to photoreceptors",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Becomes shorter (less spatial spread)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Becomes shorter (less spatial spread)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: TTX. Mechanism → outcome:",
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
      "Unlike the keyed answer (Blocks voltage-gated Na⁺ channels; Action potentials fail), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Blocks voltage-gated Na⁺ channels; Action potentials fail), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Blocks voltage-gated Na⁺ channels; Action potentials fail), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: TEA. Mechanism → outcome:",
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
      "Unlike the keyed answer (Blocks many voltage-gated K⁺ channels; Repolarization slows; spikes broaden), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Blocks many voltage-gated K⁺ channels; Repolarization slows; spikes broaden), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Blocks many voltage-gated K⁺ channels; Repolarization slows; spikes broaden), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: Ouabain. Mechanism → outcome:",
    options: [


      "Inhibits Na⁺/K⁺ ATPase; Gradients run down; eventual depolarization",
      "Opens photopigment when temperature is near 37 °C. during normal resting permeability conditions.",
      "Forms gap junctions in retina in a typical mammalian central neuron.",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Ouabain: Inhibits Na⁺/K⁺ ATPase, leading to Gradients run down; eventual depolarization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inhibits Na⁺/K⁺ ATPase; Gradients run down; eventual depolarization), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inhibits Na⁺/K⁺ ATPase; Gradients run down; eventual depolarization), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inhibits Na⁺/K⁺ ATPase; Gradients run down; eventual depolarization), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Drug: Lidocaine (use-dependent). Mechanism → outcome:",
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
      "Unlike the keyed answer (Preferentially blocks inactivated Na⁺ channels; Firing fibers blocked more stron), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Preferentially blocks inactivated Na⁺ channels; Firing fibers blocked more stron), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Preferentially blocks inactivated Na⁺ channels; Firing fibers blocked more stron), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "The voltage clamp configuration is especially useful because it allows experimenters to:",
    options: [


      "hold V_m constant and measure required current",
      "Measure only muscle force in a typical mammalian central neuron.",
      "Transduce sound in cochlea when temperature is near 37 °C.",
      "Label glomeruli directly",
    ],
    correct: 0,
    explanation: "Voltage Clamp enables hold V_m constant and measure required current.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (hold V_m constant and measure required current), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "The current clamp configuration is especially useful because it allows experimenters to:",
    options: [


      "inject current and record V_m changes",
      "Measure only muscle force in a typical mammalian central neuron.",
      "Transduce sound in cochlea when temperature is near 37 °C.",
      "Label glomeruli directly",
    ],
    correct: 0,
    explanation: "Current Clamp enables inject current and record V_m changes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (inject current and record V_m changes), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "The cell-attached patch configuration is especially useful because it allows experimenters to:",
    options: [


      "record single-channel openings in a membrane patch",
      "Measure only muscle force in a typical mammalian central neuron.",
      "Transduce sound in cochlea when temperature is near 37 °C.",
      "Label glomeruli directly",
    ],
    correct: 0,
    explanation: "Cell-Attached Patch enables record single-channel openings in a membrane patch.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (record single-channel openings in a membrane patch), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +5 mV EPSP that remains subthreshold. Approximate peak V_m:",
    options: [


      "-65 mV",
      "+40 mV always",
      "Exactly E_Na",
      "Exactly E_K always",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "This choice (+40 mV always) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_Na) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_K always) does not match the keyed answer’s mechanism for Electrical Signaling.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +8 mV EPSP that remains subthreshold. Approximate peak V_m:",
    options: [


      "-62 mV",
      "+40 mV always",
      "Exactly E_Na",
      "Exactly E_K always",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "This choice (+40 mV always) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_Na) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_K always) does not match the keyed answer’s mechanism for Electrical Signaling.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +12 mV EPSP that remains subthreshold. Approximate peak V_m:",
    options: [


      "-58 mV",
      "+40 mV always",
      "Exactly E_Na",
      "Exactly E_K always",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "This choice (+40 mV always) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_Na) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_K always) does not match the keyed answer’s mechanism for Electrical Signaling.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +15 mV EPSP that remains subthreshold. Approximate peak V_m:",
    options: [


      "-55 mV",
      "+40 mV always",
      "Exactly E_Na",
      "Exactly E_K always",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "This choice (+40 mV always) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_Na) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_K always) does not match the keyed answer’s mechanism for Electrical Signaling.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron at -70 mV receives a +20 mV EPSP that remains subthreshold. Approximate peak V_m:",
    options: [


      "-50 mV",
      "+40 mV always",
      "Exactly E_Na",
      "Exactly E_K always",
    ],
    correct: 0,
    explanation: "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
    wrongExplanations: [
      "",
      "This choice (+40 mV always) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_Na) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Exactly E_K always) does not match the keyed answer’s mechanism for Electrical Signaling.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the threshold period/mechanism:",
    options: [


      "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
      "Myelin is synthesized in the soma in a typical mammalian central neuron.",
      "",
      "Photoreceptors depolarize to light when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Net inward current exceeds outward current initiating regenerative Na⁺ entry), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Net inward current exceeds outward current initiating regenerative Na⁺ entry), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the absolute refractory period/mechanism:",
    options: [


      "Many Na⁺ channels inactivated",
      "Myelin is synthesized in the soma",
      "Only GABA is released globally",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Many Na⁺ channels inactivated; no new spike possible",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Many Na⁺ channels inactivated; no new spike possible), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Many Na⁺ channels inactivated; no new spike possible), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period/mechanism:",
    options: [


      "Partial recovery requires stronger stimulus",
      "Myelin is synthesized in the soma in a typical mammalian central neuron.",
      "Requires gABA is released globally exclusively in this context",
      "Photoreceptors depolarize to light when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Partial recovery requires stronger stimulus",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Partial recovery requires stronger stimulus), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Partial recovery requires stronger stimulus), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the afterhyperpolarization period/mechanism:",
    options: [


      "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
      "Myelin is synthesized in the soma in a typical mammalian central neuron.",
      "Requires gABA is released globally exclusively in this context",
      "Photoreceptors depolarize to light when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Unmyelinated axon. Key mechanism and outcome:",
    options: [


      "Active regeneration along membrane; Non-decremental propagation",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Active regeneration along membrane; Non-decremental propagation), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Active regeneration along membrane; Non-decremental propagation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Myelinated axon. Key mechanism and outcome:",
    options: [


      "Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Cold temperature. Key mechanism and outcome:",
    options: [


      "Slower channel kinetics; Reduced conduction velocity",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Slower channel kinetics; Reduced conduction velocity), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Slower channel kinetics; Reduced conduction velocity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Local anesthetic. Key mechanism and outcome:",
    options: [


      "Na⁺ block in pain fibers; Loss of sensation in region",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Na⁺ block in pain fibers; Loss of sensation in region), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Na⁺ block in pain fibers; Loss of sensation in region), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Only K⁺ leak channels open (no significant Na⁺ or Cl⁻ conductance). V_m is pulled toward:",
    options: [


      "E_K (the K⁺ equilibrium potential)",
      "E_Na regardless of permeability",
      "Always 0 mV regardless of gradients",
      "The electrogenic pump reversal potential alone",
    ],
    correct: 0,
    explanation: "With only K⁺ leak conductance, the Goldman relation reduces to V_m ≈ E_K.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (E_K (the K⁺ equilibrium potential)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_K (the K⁺ equilibrium potential)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_K (the K⁺ equilibrium potential)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Brief opening of Na⁺ channels during synaptic depolarization (K⁺ leak still present). V_m is pulled toward:",
    options: [


      "A Goldman-weighted value between E_K and E_Na, closer to E_Na while Na⁺ conductance dominates",
      "E_K exclusively, ignoring Na⁺ conductance (ignores weighted permeabilities in the constant-field equation)",
      "Always 0 mV regardless of gradients (ignores weighted permeabilities in the constant-field equation)",
      "The electrogenic pump reversal potential alone (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Transiently high P_Na pulls V_m toward E_Na but other permeant ions still contribute via the Goldman sum.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A Goldman-weighted value between E_K and E_Na, closer to E_Na while Na⁺ conducta), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A Goldman-weighted value between E_K and E_Na, closer to E_Na while Na⁺ conducta), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A Goldman-weighted value between E_K and E_Na, closer to E_Na while Na⁺ conducta), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Increased Cl⁻ conductance with E_Cl below rest (K⁺ leak still present). V_m is pulled toward:",
    options: [


      "A Goldman-weighted value between E_K and E_Cl, shifted more negative when g_Cl rises",
      "E_Na regardless of chloride (ignores weighted permeabilities in the constant-field equation)",
      "Always 0 mV regardless of gradients (ignores weighted permeabilities in the constant-field equation)",
      "The electrogenic pump reversal potential alone (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Added Cl⁻ conductance hyperpolarizes V_m toward the weighted influence of E_Cl.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A Goldman-weighted value between E_K and E_Cl, shifted more negative when g_Cl r), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A Goldman-weighted value between E_K and E_Cl, shifted more negative when g_Cl r), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A Goldman-weighted value between E_K and E_Cl, shifted more negative when g_Cl r), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Given: Elevated extracellular K⁺ with unchanged intracellular K⁺ (dominant K⁺ leak). V_m is pulled toward:",
    options: [


      "The new, less-negative E_K after the extracellular K⁺ increase",
      "E_Na regardless of potassium (ignores weighted permeabilities in the constant-field equation)",
      "Always 0 mV regardless of gradients (ignores weighted permeabilities in the constant-field equation)",
      "The electrogenic pump reversal potential alone (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Raising [K⁺]_out depolarizes E_K; with high K⁺ permeability, V_m follows the updated E_K.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The new, less-negative E_K after the extracellular K⁺ increase), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The new, less-negative E_K after the extracellular K⁺ increase), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The new, less-negative E_K after the extracellular K⁺ increase), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If leak conductance rises by 12% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [


      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Unchanged — λ never depends on R_m (misstates how R_m, C_m, or geometry set τ or λ)",
      "Infinite — passive spread without limit (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If leak conductance rises by 28% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [


      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Unchanged — λ never depends on R_m (misstates how R_m, C_m, or geometry set τ or λ)",
      "Infinite — passive spread without limit (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If leak conductance rises by 41% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [


      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Unchanged — λ never depends on R_m (misstates how R_m, C_m, or geometry set τ or λ)",
      "Infinite — passive spread without limit (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shorter — signals attenuate faster with distance), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane capacitance increases by 15% while R_m is held fixed, the time constant τ is:",
    options: [


      "~115% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (~115% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~115% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~115% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane capacitance increases by 35% while R_m is held fixed, the time constant τ is:",
    options: [


      "~135% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (~135% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~135% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~135% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If membrane capacitance increases by 55% while R_m is held fixed, the time constant τ is:",
    options: [


      "~155% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (~155% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~155% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~155% of baseline (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + 4 mV. This EPSP is:",
    options: [


      "Depolarizing by about 4 mV without reaching threshold",
      "Hyperpolarizing by 4 mV always (uses the wrong sign or driving force for ionic current)",
      "At E_Na (+60 mV) — uses the wrong sign or driving force for ionic current.",
      "Blocked by photopigment (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarizing by about 4 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing by about 4 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing by about 4 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + 9 mV. This EPSP is:",
    options: [


      "Depolarizing by about 9 mV without reaching threshold",
      "Hyperpolarizing by 9 mV always (uses the wrong sign or driving force for ionic current)",
      "At E_Na (+60 mV) — uses the wrong sign or driving force for ionic current.",
      "Blocked by photopigment (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarizing by about 9 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing by about 9 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing by about 9 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + 14 mV. This EPSP is:",
    options: [


      "Depolarizing by about 14 mV without reaching threshold",
      "Hyperpolarizing by 14 mV always (uses the wrong sign or driving force for ionic current)",
      "At E_Na (+60 mV) — uses the wrong sign or driving force for ionic current.",
      "Blocked by photopigment (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarizing by about 14 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing by about 14 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing by about 14 mV without reaching threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Increasing membrane permeability to K⁺ alone (with gradients unchanged) moves V_m:",
    options: [


      "Closer to E_K (more negative in typical cells)",
      "To E_Na (+60 mV) — ignores which ion dominates resting permeability.",
      "To exactly 0 mV always (ignores which ion dominates resting permeability)",
      "Away from any ion equilibrium (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Dominant K⁺ permeability pulls V_m toward E_K.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Closer to E_K (more negative in typical cells)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Closer to E_K (more negative in typical cells)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Closer to E_K (more negative in typical cells)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If intracellular Na⁺ rises while extracellular Na⁺ is fixed, E_Na shifts:",
    options: [


      "Less positive (toward 0 mV)",
      "More positive beyond +100 mV",
      "To match E_K",
      "Not at all — Nernst ignores Na⁺",
    ],
    correct: 0,
    explanation: "Higher inside Na⁺ reduces the driving equilibrium toward outside.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Less positive (toward 0 mV)), this option misstates the mechanism or direction described in the stem.",
      "This choice (To match E_K) does not match the keyed answer’s mechanism for Nernst Equation.",
      "Unlike the keyed answer (Less positive (toward 0 mV)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "At rest, if P_Na << P_K, V_m is best described as:",
    options: [


      "Near E_K with a small depolarizing influence from Na⁺",
      "Exactly halfway between E_K and E_Na always (ignores weighted permeabilities in the constant-field equation)",
      "At E_Na because Na⁺ dominates (ignores weighted permeabilities in the constant-field equation)",
      "Independent of ion gradients (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Low Na⁺ permeability at rest keeps V_m close to E_K.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Near E_K with a small depolarizing influence from Na⁺), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Near E_K with a small depolarizing influence from Na⁺), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Near E_K with a small depolarizing influence from Na⁺), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling dendrite diameter (uniform cylinder) typically:",
    options: [


      "Increases λ because internal axial resistance falls",
      "Halves λ always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Eliminates passive decay (misstates how R_m, C_m, or geometry set τ or λ)",
      "Blocks voltage-gated channels (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Larger diameter lowers R_i, lengthening the space constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increases λ because internal axial resistance falls), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increases λ because internal axial resistance falls), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increases λ because internal axial resistance falls), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Myelin on an axon primarily increases effective R_m locally, which:",
    options: [


      "Lengthens λ and reduces current leak per unit length",
      "Shortens λ by increasing capacitance only (misstates how R_m, C_m, or geometry set τ or λ)",
      "Prevents all ion flow at nodes (misstates how R_m, C_m, or geometry set τ or λ)",
      "Converts active to purely graded signals forever (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Lengthens λ and reduces current leak per unit length), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lengthens λ and reduces current leak per unit length), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lengthens λ and reduces current leak per unit length), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An IPSP that hyperpolarizes the soma from −70 mV to −75 mV will:",
    options: [


      "Increase the depolarization needed to reach threshold",
      "Guarantee an immediate action potential (uses the wrong sign or driving force for ionic current)",
      "Set V_m to E_Na (uses the wrong sign or driving force for ionic current)",
      "Block all K⁺ leak channels permanently (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Hyperpolarization moves V_m away from threshold, requiring stronger net excitation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increase the depolarization needed to reach threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increase the depolarization needed to reach threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increase the depolarization needed to reach threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the rising phase of a squid-giant-axon spike, the dominant current is:",
    options: [


      "Inward Na⁺ through voltage-gated channels",
      "Outward K⁺ through leak channels only",
      "Inward Cl⁻ through GABA receptors in a typical mammalian central neuron.",
      "Na⁺/K⁺ pump current reversing each ms",
    ],
    correct: 0,
    explanation: "Voltage-gated Na⁺ entry drives rapid depolarization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inward Na⁺ through voltage-gated channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inward Na⁺ through voltage-gated channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inward Na⁺ through voltage-gated channels), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated K⁺ channels are blocked during a spike, you expect:",
    options: [


      "Prolonged repolarization and broader spikes",
      "No change in spike width",
      "Immediate loss of resting potential during normal resting permeability conditions.",
      "Requires photoreceptor responses exclusively in this context",
    ],
    correct: 0,
    explanation: "Delayed K⁺ repolarization widens the action potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Prolonged repolarization and broader spikes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Prolonged repolarization and broader spikes), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In saltatory conduction, action currents are regenerated chiefly at:",
    options: [


      "Nodes of Ranvier",
      "Myelin internodes only",
      "Dendritic spines exclusively",
      "The nucleus",
    ],
    correct: 0,
    explanation: "High Na⁺ channel density at nodes supports discrete regeneration.",
    wrongExplanations: [
      "",
      "This choice (Myelin internodes only) does not match the keyed answer’s mechanism for Action Potential Propagation.",
      "Unlike the keyed answer (Nodes of Ranvier), this option misstates the mechanism or direction described in the stem.",
      "This choice (The nucleus) does not match the keyed answer’s mechanism for Action Potential Propagation.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp compared with cell-attached recording:",
    options: [


      "Controls V_m or I_m across the entire cell interior",
      "Samples only one ion species with no pipette access",
      "Measures muscle force transduction",
      "Replaces need for electrodes in cochlea",
    ],
    correct: 0,
    explanation: "Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Controls V_m or I_m across the entire cell interior), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Controls V_m or I_m across the entire cell interior), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that selectively increases K⁺ leak conductance at rest will tend to:",
    options: [


      "Hyperpolarize the cell and shorten λ",
      "Depolarize toward E_Na when temperature is near 37 °C.",
      "Block all synaptic vesicle fusion",
      "Increase cochlear gain only during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hyperpolarize the cell and shorten λ), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hyperpolarize the cell and shorten λ), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Current Clamp",
    question: "Injecting a brief depolarizing current step in current clamp produces:",
    options: [


      "A graded V_m change whose size depends on R_in",
      "An all-or-none spike even below threshold always",
      "Direct measurement of single-channel conductance without noise",
      "Permanent inactivation of Na⁺ channels",
    ],
    correct: 0,
    explanation: "Subthreshold responses reflect input resistance and membrane time constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A graded V_m change whose size depends on R_in), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A graded V_m change whose size depends on R_in), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A graded V_m change whose size depends on R_in), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "In voltage clamp, a downward step in command potential typically produces:",
    options: [


      "Inward (negative) clamp current if channels open during the step",
      "Zero current because voltage is clamped during normal resting permeability conditions.",
      "Requires mechanical cochlear motion exclusively in this context",
      "Irreversible LTP",
    ],
    correct: 0,
    explanation: "Clamp current equals the net ionic current required to hold V constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inward (negative) clamp current if channels open during the step), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Inward (negative) clamp current if channels open during the step), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Spatial summation is most effective when EPSPs arrive:",
    options: [


      "At nearby sites on the dendritic tree within a short time window",
      "At opposite ends of the axon only (uses the wrong sign or driving force for ionic current)",
      "After complete Na⁺ channel inactivation (uses the wrong sign or driving force for ionic current)",
      "Only at the axon terminal (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Local passive spread allows nearby EPSPs to combine at the axon hillock.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (At nearby sites on the dendritic tree within a short time window), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (At nearby sites on the dendritic tree within a short time window), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (At nearby sites on the dendritic tree within a short time window), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Temporal summation fails when successive EPSPs are separated by:",
    options: [


      "Intervals much longer than the membrane time constant τ",
      "Exactly one millisecond always (uses the wrong sign or driving force for ionic current)",
      "The refractory period of muscle only (uses the wrong sign or driving force for ionic current)",
      "The photopigment recovery cycle (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "If the second input arrives after decay, peaks do not add strongly.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Intervals much longer than the membrane time constant τ), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Intervals much longer than the membrane time constant τ), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Intervals much longer than the membrane time constant τ), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing extracellular K⁺ (without changing intracellular K⁺) tends to:",
    options: [


      "Depolarize neurons by shifting E_K and resting V_m",
      "Hyperpolarize all cells to −90 mV (misstates how R_m, C_m, or geometry set τ or λ)",
      "Block glutamate release only (misstates how R_m, C_m, or geometry set τ or λ)",
      "Eliminate tonotopy (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Raised external K⁺ makes E_K less negative, depolarizing cells toward threshold.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarize neurons by shifting E_K and resting V_m), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize neurons by shifting E_K and resting V_m), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize neurons by shifting E_K and resting V_m), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The absolute refractory period exists largely because:",
    options: [


      "Many Na⁺ channels remain inactivated",
      "All K⁺ channels are permanently open",
      "Myelin is removed transiently",
      "Synaptic vesicles are depleted for hours",
    ],
    correct: 0,
    explanation: "Inactivated Na⁺ channels cannot reopen until reset, preventing immediate re-firing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Many Na⁺ channels remain inactivated), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Many Na⁺ channels remain inactivated), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Many Na⁺ channels remain inactivated), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An axon with fewer functional Na⁺ channels per unit area will:",
    options: [


      "Conduct spikes more slowly or fail to propagate",
      "Always conduct faster via saltation (misapplies how active propagation uses local circuit currents)",
      "Convert to purely electrical synapses (misapplies how active propagation uses local circuit currents)",
      "Encode high-frequency sound better (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Insufficient Na⁺ current density weakens regeneration along the axon.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Conduct spikes more slowly or fail to propagate), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Conduct spikes more slowly or fail to propagate), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Conduct spikes more slowly or fail to propagate), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a cation with higher concentration outside than inside, E_ion is typically:",
    options: [


      "Positive (driving inward current at rest if permeable)",
      "Always negative (contradicts the Nernst dependence on inside/outside concentrations)",
      "Zero regardless of gradients (contradicts the Nernst dependence on inside/outside concentrations)",
      "Equal to pump reversal potential only (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "Outward concentration gradient for cations yields positive equilibrium potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Positive (driving inward current at rest if permeable)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Positive (driving inward current at rest if permeable)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Positive (driving inward current at rest if permeable)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If Cl⁻ channels open with E_Cl below rest, net Cl⁻ current at rest will:",
    options: [


      "Be inward (hyperpolarizing) until V_m approaches E_Cl",
      "Always be outward (ignores weighted permeabilities in the constant-field equation)",
      "Be zero because Cl⁻ is impermeant (ignores weighted permeabilities in the constant-field equation)",
      "Depend only on photopigment (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Be inward (hyperpolarizing) until V_m approaches E_Cl), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Be inward (hyperpolarizing) until V_m approaches E_Cl), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Be inward (hyperpolarizing) until V_m approaches E_Cl), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Shunting inhibition works in part by:",
    options: [


      "Lowering input resistance so EPSPs produce smaller V_m changes",
      "Increasing R_m to amplify EPSPs (uses the wrong sign or driving force for ionic current)",
      "Opening Na⁺ channels at the axon hillock (uses the wrong sign or driving force for ionic current)",
      "Converting spikes to graded release only in retina (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Increased leak conductance reduces the voltage deflection from a given synaptic current.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Lowering input resistance so EPSPs produce smaller V_m changes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lowering input resistance so EPSPs produce smaller V_m changes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lowering input resistance so EPSPs produce smaller V_m changes), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "A longer λ with unchanged τ implies subthreshold signals:",
    options: [


      "Spread farther electrotonically before decaying",
      "Decay faster in time (misstates how R_m, C_m, or geometry set τ or λ)",
      "Always trigger spikes at distant synapses (misstates how R_m, C_m, or geometry set τ or λ)",
      "Cannot occur in dendrites (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "λ governs spatial decay; larger λ means less attenuation with distance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spread farther electrotonically before decaying), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spread farther electrotonically before decaying), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spread farther electrotonically before decaying), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Local anesthetics preferentially block small-diameter pain fibers partly because:",
    options: [


      "Use-dependent block accumulates in actively firing fibers",
      "Pain fibers lack voltage-gated Na⁺ when temperature is near 37 °C.",
      "Anesthetics open NMDA receptors during normal resting permeability conditions.",
      "Pain fibers are purely passive when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Frequency-dependent Na⁺ block affects firing pathways more strongly.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Use-dependent block accumulates in actively firing fibers), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Use-dependent block accumulates in actively firing fibers), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Use-dependent block accumulates in actively firing fibers), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase contributes to resting V_m mainly by:",
    options: [


      "Maintaining ion gradients that set E_K and E_Na",
      "Directly clamping V_m to +60 mV (ignores which ion dominates resting permeability)",
      "Replacing all leak conductance (ignores which ion dominates resting permeability)",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "The pump is electrogenic but its main effect is sustaining concentration gradients.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Maintaining ion gradients that set E_K and E_Na), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintaining ion gradients that set E_K and E_Na), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintaining ion gradients that set E_K and E_Na), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best defined as the V_m at which:",
    options: [


      "Regenerative Na⁺ entry exceeds opposing currents",
      "K⁺ channels are fully closed forever",
      "The cell reaches E_Na instantly during normal resting permeability conditions.",
      "Myelin thickness changes",
    ],
    correct: 0,
    explanation: "Positive feedback from Na⁺ channels initiates the all-or-none spike.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Regenerative Na⁺ entry exceeds opposing currents), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Regenerative Na⁺ entry exceeds opposing currents), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Regenerative Na⁺ entry exceeds opposing currents), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A neuron receiving concurrent EPSP and IPSP at the soma shows:",
    options: [


      "Net integration — outcome depends on relative driving forces and timing",
      "Always silent inhibition regardless of timing (uses the wrong sign or driving force for ionic current)",
      "Only the last synapse counts (uses the wrong sign or driving force for ionic current)",
      "Guaranteed spike if either is excitatory (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Excitation and inhibition combine algebraically at the integration zone.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Net integration — outcome depends on relative driving forces and timing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Net integration — outcome depends on relative driving forces and timing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Net integration — outcome depends on relative driving forces and timing), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance C_m affects:",
    options: [


      "How quickly V_m can change for a given current (τ = R_m C_m)",
      "The Nernst potential of K⁺ directly (misstates how R_m, C_m, or geometry set τ or λ)",
      "Tonotopic map position on basilar membrane (misstates how R_m, C_m, or geometry set τ or λ)",
      "Which glomerulus a receptor targets (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Capacitance stores charge; higher C_m slows voltage responses.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (How quickly V_m can change for a given current (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (How quickly V_m can change for a given current (τ = R_m C_m)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Cooling an axon generally slows conduction because:",
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
      "Unlike the keyed answer (Channel gating kinetics slow), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Channel gating kinetics slow), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Channel gating kinetics slow), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Rupturing the patch membrane to achieve whole-cell mode allows:",
    options: [


      "Dialysis of the cell with pipette solution",
      "Recording only extracellular field potentials",
      "Direct imaging of rhodopsin isomerization",
      "Measurement of basilar membrane velocity only",
    ],
    correct: 0,
    explanation: "Whole-cell access exchanges cytoplasm with electrode solution.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Dialysis of the cell with pipette solution), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Dialysis of the cell with pipette solution), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Dialysis of the cell with pipette solution), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For an anion with higher outside concentration, E_ion is typically:",
    options: [


      "Negative relative to typical resting V_m",
      "Always +58 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "Independent of valence (contradicts the Nernst dependence on inside/outside concentrations)",
      "Defined only by the pump (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "Anions like Cl⁻ often have negative E when outside > inside.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Negative relative to typical resting V_m), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Negative relative to typical resting V_m), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Negative relative to typical resting V_m), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A synapse with reversal potential near −70 mV produces at rest:",
    options: [


      "Little net driving force — weak effect on V_m",
      "Maximal depolarization always (uses the wrong sign or driving force for ionic current)",
      "Hyperpolarization to E_Na (uses the wrong sign or driving force for ionic current)",
      "Permanent spike inactivation (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "When E_rev ≈ V_m, synaptic current is small (driving force ≈ 0).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Little net driving force — weak effect on V_m), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Little net driving force — weak effect on V_m), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Little net driving force — weak effect on V_m), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing P_Na relative to P_K during a depolarizing event moves V_m:",
    options: [


      "Toward E_Na (more positive)",
      "Instantly to E_K",
      "To 0 mV regardless of gradients",
      "Only toward E_Cl without exception",
    ],
    correct: 0,
    explanation: "Higher Na⁺ permeability weights the Goldman sum toward E_Na.",
    wrongExplanations: [
      "",
      "This choice (Instantly to E_K) does not match the keyed answer’s mechanism for Goldman Equation.",
      "Unlike the keyed answer (Toward E_Na (more positive)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Toward E_Na (more positive)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Blocking the Na⁺/K⁺ pump with ouabain over minutes will:",
    options: [


      "Gradually depolarize cells as Na⁺ accumulates inside",
      "Immediately hyperpolarize to E_K",
      "Prevent all action potentials within 1 ms in a typical mammalian central neuron.",
      "Enhance cochlear outer hair motility",
    ],
    correct: 0,
    explanation: "Pump failure runs down gradients, reducing the K⁺ leak battery.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Gradually depolarize cells as Na⁺ accumulates inside), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Gradually depolarize cells as Na⁺ accumulates inside), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is primarily due to:",
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
      "Unlike the keyed answer (Continued/outlasting K⁺ conductance (and sometimes Ca²⁺-activated K⁺)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Continued/outlasting K⁺ conductance (and sometimes Ca²⁺-activated K⁺)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input resistance R_in decreases when:",
    options: [


      "Additional ion channels open (leak or synaptic)",
      "Myelin thickness increases",
      "Axon diameter shrinks toward zero only in nodes",
      "Intracellular K⁺ is depleted instantly",
    ],
    correct: 0,
    explanation: "More conductance lowers R_in = ΔV/ΔI for small signals.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Additional ion channels open (leak or synaptic)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Additional ion channels open (leak or synaptic)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Additional ion channels open (leak or synaptic)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An EPSP with reversal potential above threshold can still fail to fire if:",
    options: [


      "It is too brief or too far electrotonically from the axon hillock",
      "It always triggers two spikes (uses the wrong sign or driving force for ionic current)",
      "Na⁺ channels are absent at rest (uses the wrong sign or driving force for ionic current)",
      "It hyperpolarizes the cell (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Attenuation and timing can prevent reaching threshold at the trigger zone.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (It is too brief or too far electrotonically from the axon hillock), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (It is too brief or too far electrotonically from the axon hillock), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (It is too brief or too far electrotonically from the axon hillock), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Bidirectional propagation from a mid-axon stimulus occurs because:",
    options: [


      "Both directions lack refractory block at the stimulus site initially",
      "Myelin forces one direction only (misapplies how active propagation uses local circuit currents)",
      "Nodes exist only on one side (misapplies how active propagation uses local circuit currents)",
      "Photoreceptors release glutamate equally (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Locally generated spikes can travel both ways until meeting refractory tissue.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Both directions lack refractory block at the stimulus site initially), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Both directions lack refractory block at the stimulus site initially), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "A selective increase in P_Cl with E_Cl below rest tends to:",
    options: [


      "Hyperpolarize or stabilize V_m near E_Cl",
      "Depolarize to E_Na (ignores which ion dominates resting permeability)",
      "Have no effect on V_m ever (ignores which ion dominates resting permeability)",
      "Open voltage-gated Ca²⁺ channels at rest",
    ],
    correct: 0,
    explanation: "Cl⁻ conductance pulls V_m toward the Cl⁻ reversal potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hyperpolarize or stabilize V_m near E_Cl), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hyperpolarize or stabilize V_m near E_Cl), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hyperpolarize or stabilize V_m near E_Cl), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "Holding V_m at 0 mV during an experiment (from a resting −70 mV) typically:",
    options: [


      "Produces net outward current if rest was dominated by K⁺ leak",
      "Requires zero pipette resistance",
      "Eliminates all ion gradients instantly when temperature is near 37 °C.",
      "Measures only muscle spindle length during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Depolarizing from rest toward 0 mV reverses the driving force on K⁺, so the clamp must inject outward current to hold 0 mV.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Produces net outward current if rest was dominated by K⁺ leak (V_m depolarized a), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Produces net outward current if rest was dominated by K⁺ leak (V_m depolarized a), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Produces net outward current if rest was dominated by K⁺ leak (V_m depolarized a), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Cable theory predicts dendritic EPSPs recorded at the soma are:",
    options: [


      "Smaller and slower than at the synaptic site",
      "Larger than at the synapse always (uses the wrong sign or driving force for ionic current)",
      "Identical amplitude everywhere (uses the wrong sign or driving force for ionic current)",
      "Always suprathreshold (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Distance and τ filter dendritic signals reaching the soma.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Smaller and slower than at the synaptic site), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Smaller and slower than at the synaptic site), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Smaller and slower than at the synaptic site), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "A neuron at 37°C has [K⁺]_in=140 mM, [K⁺]_out=4 mM, [Na⁺]_in=12 mM, [Na⁺]_out=145 mM, and P_K:P_Na:P_Cl = 1:0.04:0.45 with E_Cl=−65 mV. With dominant K⁺ leak, V_m is closest to:",
    options: [


      "About −65 to −75 mV (near E_K, slightly influenced by Cl⁻ and Na⁺)",
      "About +60 mV (dominated by E_Na) — ignores weighted permeabilities in the constant-field equation.",
      "Exactly 0 mV (ignores weighted permeabilities in the constant-field equation)",
      "About −150 mV regardless of permeabilities (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Compute E_K ≈ −95 mV; high P_K with modest P_Cl and low P_Na places V_m near E_K in the Goldman sum.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (About −65 to −75 mV (near E_K, slightly influenced by Cl⁻ and Na⁺)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (About −65 to −75 mV (near E_K, slightly influenced by Cl⁻ and Na⁺)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (About −65 to −75 mV (near E_K, slightly influenced by Cl⁻ and Na⁺)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Using the same concentrations, if P_Na increases tenfold during the rising phase while P_K stays constant, V_m should:",
    options: [


      "Depolarize toward E_Na but remain below +60 mV while K⁺ conductance persists",
      "Hyperpolarize toward E_K only (ignores weighted permeabilities in the constant-field equation)",
      "Clamp instantly to 0 mV (ignores weighted permeabilities in the constant-field equation)",
      "Reverse sign of E_Cl (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Goldman potential shifts toward E_Na when sodium permeability rises, but other ions still contribute.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarize toward E_Na but remain below +60 mV while K⁺ conductance persists), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize toward E_Na but remain below +60 mV while K⁺ conductance persists), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize toward E_Na but remain below +60 mV while K⁺ conductance persists), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "A patch with g_Na=50 nS, V_m=−10 mV, and E_Na=+60 mV. The Na⁺ current (conventional positive outward) is approximately:",
    options: [


      "−3.5 nA (inward Na⁺ current at −10 mV)",
      "+3.5 nA outward (uses the wrong sign or driving force for ionic current)",
      "0 nA because V_m is negative (uses the wrong sign or driving force for ionic current)",
      "−60 nA regardless of E_Na (uses the wrong sign or driving force for ionic current)",
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
    question: "Membrane τ = R_m C_m. If R_m doubles and C_m is unchanged, a step current produces a voltage response that:",
    options: [


      "Reaches twice the original steady-state amplitude with a longer time constant (2× τ)",
      "Rises to the same steady state but with a longer time constant (2× τ)",
      "Becomes instantaneous with half the amplitude (misstates how R_m, C_m, or geometry set τ or λ)",
      "Oscillates at 100 Hz (misstates how R_m, C_m, or geometry set τ or λ)",
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
    question: "In Hodgkin–Huxley kinetics, the m gate primarily controls:",
    options: [


      "Activation (opening) of voltage-gated Na⁺ channels",
      "Inactivation of K⁺ channels only (confuses channel gating timing during spike phases)",
      "Na⁺/K⁺ pump rate (confuses channel gating timing during spike phases)",
      "Myelin thickness (confuses channel gating timing during spike phases)",
    ],
    correct: 0,
    explanation: "m tracks Na⁺ channel activation; h mediates inactivation and n mediates delayed K⁺ activation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Activation (opening) of voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Activation (opening) of voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Activation (opening) of voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During a voltage-clamp step from −70 mV to 0 mV in a squid axon, the initial inward current followed by outward current reflects:",
    options: [


      "Early Na⁺ influx (inward) then delayed K⁺ efflux (outward)",
      "K⁺ influx then Cl⁻ efflux (confuses channel gating timing during spike phases)",
      "Pump current only (confuses channel gating timing during spike phases)",
      "Capacitive current with no ionic currents (confuses channel gating timing during spike phases)",
    ],
    correct: 0,
    explanation: "Classic Hodgkin–Huxley clamp: fast Na⁺ activation/inactivation then slower K⁺ activation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Early Na⁺ influx (inward) then delayed K⁺ efflux (outward)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Early Na⁺ influx (inward) then delayed K⁺ efflux (outward)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Early Na⁺ influx (inward) then delayed K⁺ efflux (outward)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "In current-clamp, injecting a brief depolarizing current pulse at rest typically produces a membrane response that:",
    options: [


      "Shows a graded, passive depolarization",
      "Always produces a full action potential regardless of amplitude",
      "Hyperpolarizes before depolarizing (uses the wrong sign or driving force for ionic current)",
      "Eliminates the Na⁺ gradient (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Subthreshold pulses yield passive RC responses; suprathreshold triggers regenerative Na⁺ entry.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Shows a graded, passive depolarization), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shows a graded, passive depolarization), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shows a graded, passive depolarization), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];

const PART2_EXPANSION_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: AP invades terminal. Immediate consequence:",
    options: [


      "Depolarization opens presynaptic Ca²⁺ channels",
      "Photopigment isomerization (mixes up presynaptic release with postsynaptic receptor logic)",
      "Basilar membrane vibration only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Permanent DNA transcription in muscle (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "AP invades terminal leads to Depolarization opens presynaptic Ca²⁺ channels in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarization opens presynaptic Ca²⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarization opens presynaptic Ca²⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarization opens presynaptic Ca²⁺ channels) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: Ca²⁺ influx. Immediate consequence:",
    options: [


      "Triggers SNARE-mediated vesicle fusion",
      "Photopigment isomerization (mixes up presynaptic release with postsynaptic receptor logic)",
      "Basilar membrane vibration only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Permanent DNA transcription in muscle",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx leads to Triggers SNARE-mediated vesicle fusion in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Triggers SNARE-mediated vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers SNARE-mediated vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers SNARE-mediated vesicle fusion) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: Vesicle fusion. Immediate consequence:",
    options: [


      "Quantal transmitter release into cleft",
      "Photopigment isomerization (mixes up presynaptic release with postsynaptic receptor logic)",
      "Basilar membrane vibration only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Permanent DNA transcription in muscle",
    ],
    correct: 0,
    explanation: "Vesicle fusion leads to Quantal transmitter release into cleft in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Quantal transmitter release into cleft) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Quantal transmitter release into cleft) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Quantal transmitter release into cleft) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Sequence step: Transmitter binding. Immediate consequence:",
    options: [


      "Postsynaptic receptor opening/conformation change",
      "Photopigment isomerization (mixes up presynaptic release with postsynaptic receptor logic)",
      "Basilar membrane vibration only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Permanent DNA transcription in muscle (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Transmitter binding leads to Postsynaptic receptor opening/conformation change in chemical synaptic transmission.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic receptor opening/conformation change) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic receptor opening/conformation change) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic receptor opening/conformation change) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Transmitter: Glutamate. Typical role:",
    options: [


      "Fast excitatory ionotropic signaling (often AMPA/NMDA)",
      "Only phototransduction (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only cochlear outer hair motility (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only cerebrospinal fluid secretion (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Glutamate primarily mediates Fast excitatory ionotropic signaling (often AMPA/NMDA).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory ionotropic signaling (often AMPA/NMDA)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory ionotropic signaling (often AMPA/NMDA)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory ionotropic signaling (often AMPA/NMDA)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Transmitter: GABA. Typical role:",
    options: [


      "Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>)",
      "Only phototransduction (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only cochlear outer hair motility (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only cerebrospinal fluid secretion (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "GABA primarily mediates Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast inhibitory Cl⁻ conductance (GABA<sub>A</sub>)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Transmitter: Acetylcholine. Typical role:",
    options: [


      "Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS",
      "Only phototransduction (describes the wrong synaptic structure or transmission step)",
      "Only cochlear outer hair motility (describes the wrong synaptic structure or transmission step)",
      "Only cerebrospinal fluid secretion (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Acetylcholine primarily mediates Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Transmitter: Dopamine. Typical role:",
    options: [


      "Neuromodulation of motivation/movement circuits",
      "Requires phototransduction exclusively in this context",
      "Requires cochlear outer hair motility exclusively in this context",
      "Requires cerebrospinal fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Dopamine primarily mediates Neuromodulation of motivation/movement circuits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neuromodulation of motivation/movement circuits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neuromodulation of motivation/movement circuits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neuromodulation of motivation/movement circuits) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Plasticity form: NMDA-dependent LTP. Induction requirement:",
    options: [


      "Postsynaptic Ca²⁺ entry during strong depolarization",
      "Only muscle stretch (states the wrong induction requirement for LTP/LTD)",
      "Only rod dark current (states the wrong induction requirement for LTP/LTD)",
      "Only olfactory adaptation (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "NMDA-dependent LTP requires Postsynaptic Ca²⁺ entry during strong depolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic Ca²⁺ entry during strong depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic Ca²⁺ entry during strong depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic Ca²⁺ entry during strong depolarization) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Plasticity form: Homosynaptic LTD. Induction requirement:",
    options: [


      "Prolonged low-frequency stimulation",
      "Only muscle stretch (states the wrong induction requirement for LTP/LTD)",
      "Only rod dark current (states the wrong induction requirement for LTP/LTD)",
      "Only olfactory adaptation (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "Homosynaptic LTD requires Prolonged low-frequency stimulation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Prolonged low-frequency stimulation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolonged low-frequency stimulation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolonged low-frequency stimulation) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Plasticity form: STDP potentiation. Induction requirement:",
    options: [


      "Presynaptic spike shortly before postsynaptic spike",
      "Requires muscle stretch exclusively in this context",
      "Requires rod dark current exclusively in this context",
      "Requires olfactory adaptation exclusively in this context",
    ],
    correct: 0,
    explanation: "STDP potentiation requires Presynaptic spike shortly before postsynaptic spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Presynaptic spike shortly before postsynaptic spike) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Presynaptic spike shortly before postsynaptic spike) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Presynaptic spike shortly before postsynaptic spike) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Plasticity form: Facilitation. Induction requirement:",
    options: [


      "Residual presynaptic Ca²⁺ increases release probability",
      "Requires muscle stretch exclusively in this context",
      "Requires rod dark current exclusively in this context",
      "Requires olfactory adaptation exclusively in this context",
    ],
    correct: 0,
    explanation: "Facilitation requires Residual presynaptic Ca²⁺ increases release probability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ increases release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ increases release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ increases release probability) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Circuit motif: Feedforward inhibition. Functional effect:",
    options: [


      "Limits spread and sharpens timing of excitation",
      "Eliminates all spikes globally when temperature is near 37 °C.",
      "Requires maps sound frequency exclusively in this context",
      "Requires stores declarative memory in NMJ exclusively in this context",
    ],
    correct: 0,
    explanation: "Feedforward inhibition: Limits spread and sharpens timing of excitation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Limits spread and sharpens timing of excitation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Limits spread and sharpens timing of excitation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Limits spread and sharpens timing of excitation) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Circuit motif: Feedback inhibition. Functional effect:",
    options: [


      "Stabilizes firing rate after activity",
      "Eliminates all spikes globally",
      "Only maps sound frequency",
      "Only stores declarative memory in NMJ",
    ],
    correct: 0,
    explanation: "Feedback inhibition: Stabilizes firing rate after activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Stabilizes firing rate after activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Stabilizes firing rate after activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Stabilizes firing rate after activity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Circuit motif: Lateral inhibition. Functional effect:",
    options: [


      "Enhances contrast between active and surround",
      "Eliminates all spikes globally when temperature is near 37 °C.",
      "Requires maps sound frequency exclusively in this context",
      "Requires stores declarative memory in NMJ exclusively in this context",
    ],
    correct: 0,
    explanation: "Lateral inhibition: Enhances contrast between active and surround.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Enhances contrast between active and surround) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhances contrast between active and surround) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhances contrast between active and surround) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Circuit motif: Disinhibition. Functional effect:",
    options: [


      "Removing inhibition from a target increases net excitation",
      "Eliminates all spikes globally when temperature is near 37 °C.",
      "Requires maps sound frequency exclusively in this context",
      "Requires stores declarative memory in NMJ exclusively in this context",
    ],
    correct: 0,
    explanation: "Disinhibition: Removing inhibition from a target increases net excitation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Removing inhibition from a target increases net excitation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Removing inhibition from a target increases net excitation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Removing inhibition from a target increases net excitation) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Second-messenger pathway: cAMP → PKA. Common action:",
    options: [


      "Phosphorylation of channels/transporters",
      "Direct opening of rhodopsin during normal resting permeability conditions.",
      "Saltatory conduction in dendrites in a typical mammalian central neuron.",
      "Requires cl⁻ pumping at NMJ exclusively in this context",
    ],
    correct: 0,
    explanation: "cAMP → PKA typically causes Phosphorylation of channels/transporters.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylation of channels/transporters) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylation of channels/transporters) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylation of channels/transporters) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Second-messenger pathway: IP₃. Common action:",
    options: [


      "Ca²⁺ release from ER stores",
      "Direct opening of rhodopsin",
      "Saltatory conduction in dendrites",
      "Only Cl⁻ pumping at NMJ",
    ],
    correct: 0,
    explanation: "IP₃ typically causes Ca²⁺ release from ER stores.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ release from ER stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ release from ER stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ release from ER stores) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Second-messenger pathway: DAG. Common action:",
    options: [


      "Can activate PKC at membrane",
      "Direct opening of rhodopsin",
      "Saltatory conduction in dendrites",
      "Only Cl⁻ pumping at NMJ",
    ],
    correct: 0,
    explanation: "DAG typically causes Can activate PKC at membrane.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Can activate PKC at membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Can activate PKC at membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Can activate PKC at membrane) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +3 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
    options: [


      "-64 mV if approximately linear",
      "Always threshold crossed (ignores how EPSPs/IPSPs sum in time or space)",
      "Always hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly E_Na (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (-64 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-64 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-64 mV if approximately linear) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +6 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
    options: [


      "-58 mV if approximately linear",
      "Always threshold crossed (ignores how EPSPs/IPSPs sum in time or space)",
      "Always hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly E_Na (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (-58 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-58 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-58 mV if approximately linear) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +9 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
    options: [


      "-52 mV if approximately linear",
      "Always threshold crossed (ignores how EPSPs/IPSPs sum in time or space)",
      "Always hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly E_Na (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (-52 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-52 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-52 mV if approximately linear) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +12 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
    options: [


      "-46 mV if approximately linear",
      "Always threshold crossed (ignores how EPSPs/IPSPs sum in time or space)",
      "Always hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly E_Na (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (-46 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-46 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-46 mV if approximately linear) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +15 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
    options: [


      "-40 mV if approximately linear",
      "Always threshold crossed (ignores how EPSPs/IPSPs sum in time or space)",
      "Always hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly E_Na (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (-40 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-40 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-40 mV if approximately linear) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two simultaneous EPSPs of +18 mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
    options: [


      "-34 mV if approximately linear",
      "Always threshold crossed (ignores how EPSPs/IPSPs sum in time or space)",
      "Always hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly E_Na (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Spatial summation combines depolarizations at the integration zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (-34 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-34 mV if approximately linear) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (-34 mV if approximately linear) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "NMJ concept: End-plate potential. Description:",
    options: [


      "Graded depolarization of muscle membrane",
      "Photoreceptor hyperpolarization to light",
      "Cochlear phase locking only",
      "Glomerular one-receptor rule only",
    ],
    correct: 0,
    explanation: "End-plate potential: Graded depolarization of muscle membrane.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Graded depolarization of muscle membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Graded depolarization of muscle membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Graded depolarization of muscle membrane) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "NMJ concept: AChE in cleft. Description:",
    options: [


      "Clears ACh to terminate signal",
      "Photoreceptor hyperpolarization to light",
      "Cochlear phase locking only",
      "Glomerular one-receptor rule only",
    ],
    correct: 0,
    explanation: "AChE in cleft: Clears ACh to terminate signal.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Clears ACh to terminate signal) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Clears ACh to terminate signal) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Clears ACh to terminate signal) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "NMJ concept: Curare-like antagonists. Description:",
    options: [


      "Block nicotinic receptors",
      "Photoreceptor hyperpolarization to light",
      "Cochlear phase locking only",
      "Glomerular one-receptor rule only",
    ],
    correct: 0,
    explanation: "Curare-like antagonists: Block nicotinic receptors.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Block nicotinic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Block nicotinic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Block nicotinic receptors) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "After a brief presynaptic train at 10 Hz, the next EPSC is often larger because:",
    options: [


      "Residual presynaptic Ca²⁺ elevates release probability",
      "Permanent insertion of all postsynaptic NMDA receptors",
      "Complete vesicle pool depletion on the first spike",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Moderate-frequency spikes leave Ca²⁺ elevated briefly, increasing release probability for the following spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ elevates release probability (paired-pulse facilitation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ elevates release probability (paired-pulse facilitation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ elevates release probability (paired-pulse facilitation)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "After a brief presynaptic train at 40 Hz, release often shows:",
    options: [


      "Mixed facilitation early in the train with growing depression as the readily releasable pool depletes",
      "Permanent loss of all receptors during normal resting permeability conditions.",
      "Conversion to electrical synapses only when temperature is near 37 °C. during normal resting permeability conditions.",
      "Assigns an unrelated sensory or synaptic mechanism to this context when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Intermediate frequencies can facilitate initially, then depress as vesicle availability falls.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Mixed facilitation early in the train with growing depression as the readily releasable pool depletes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Mixed facilitation early in the train with growing depression as the readily releasable pool depletes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Mixed facilitation early in the train with growing depression as the readily releasable pool depletes) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "After a brief presynaptic train at 100 Hz, the dominant short-term change is usually:",
    options: [


      "Synaptic depression from rapid depletion of the readily releasable vesicle pool",
      "Permanent loss of all receptors during normal resting permeability conditions.",
      "Conversion to electrical synapses only when temperature is near 37 °C. during normal resting permeability conditions.",
      "Assigns an unrelated sensory or synaptic mechanism to this context when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Very high-frequency stimulation exhausts releasable vesicles, reducing subsequent release (short-term depression).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Synaptic depression from rapid depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Synaptic depression from rapid depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Synaptic depression from rapid depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two EPSPs (+2 mV each) arrive 5 ms apart at one synapse (temporal summation). Compared with one EPSP alone, peak depolarization tends to be:",
    options: [


      "Larger if within τ of the membrane",
      "Smaller always (ignores how EPSPs/IPSPs sum in time or space)",
      "Unchanged always (ignores how EPSPs/IPSPs sum in time or space)",
      "Exactly at E_K (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Temporal summation combines inputs within the membrane time window.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Larger if within τ of the membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Larger if within τ of the membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Larger if within τ of the membrane) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Calcium entry into the presynaptic terminal is required because it:",
    options: [


      "Triggers vesicle fusion machinery (SNARE complex)",
      "Directly opens postsynaptic AMPA receptors (mixes up presynaptic release with postsynaptic receptor logic)",
      "Hyperpolarizes the postsynaptic cell always (mixes up presynaptic release with postsynaptic receptor logic)",
      "Replaces ACh in the cleft (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Ca²⁺–sensor coupling drives exocytosis of neurotransmitter.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Triggers vesicle fusion machinery (SNARE complex)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers vesicle fusion machinery (SNARE complex)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers vesicle fusion machinery (SNARE complex)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Miniature EPSCs (mEPSCs) in the absence of presynaptic spikes indicate:",
    options: [


      "Spontaneous quantal release of vesicles",
      "Postsynthetic DNA damage (mixes up presynaptic release with postsynaptic receptor logic)",
      "Cochlear amplification failure only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Permanent LTP (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "mEPSCs reflect single vesicle fusion events.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous quantal release of vesicles) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous quantal release of vesicles) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous quantal release of vesicles) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Nicotinic ACh receptors at the NMJ are:",
    options: [


      "Ligand-gated cation channels (fast EPSP)",
      "Metabotropic G-protein only receptors (describes the wrong synaptic structure or transmission step)",
      "Voltage-gated Cl⁻ channels (describes the wrong synaptic structure or transmission step)",
      "Gap junction hemichannels (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Nicotinic receptors pass cations and depolarize muscle.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels (fast EPSP)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels (fast EPSP)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels (fast EPSP)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "If E_rev for a GABA<sub>A</sub> synapse is near −70 mV at rest, GABA at rest:",
    options: [


      "Produces little change in V_m (shunting may still occur)",
      "Always massive hyperpolarization to −90 mV (ignores how EPSPs/IPSPs sum in time or space)",
      "Depolarizes to E_Na (ignores how EPSPs/IPSPs sum in time or space)",
      "Blocks all quantal release (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Driving force is small when E_rev matches V_m; conductance changes still matter.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Produces little change in V_m (shunting may still occur)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Produces little change in V_m (shunting may still occur)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Produces little change in V_m (shunting may still occur)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "NMDA receptors act as coincidence detectors because they require:",
    options: [


      "Glutamate binding AND postsynaptic depolarization to relieve Mg²⁺ block",
      "Only presynaptic Ca²⁺ (states the wrong induction requirement for LTP/LTD)",
      "Only GABA release (states the wrong induction requirement for LTP/LTD)",
      "Photopigment isomerization (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "Voltage-dependent Mg²⁺ block links pre and post activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Glutamate binding AND postsynaptic depolarization to relieve Mg²⁺ block) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Glutamate binding AND postsynaptic depolarization to relieve Mg²⁺ block) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Glutamate binding AND postsynaptic depolarization to relieve Mg²⁺ block) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Post-tetanic potentiation reflects primarily:",
    options: [


      "Elevated presynaptic Ca²⁺ and increased release probability briefly",
      "Permanent insertion of AMPA receptors only when temperature is near 37 °C.",
      "Loss of all inhibitory interneurons during normal resting permeability conditions.",
      "Cochlear outer hair cell motility in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Residual Ca²⁺ enhances short-term release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Elevated presynaptic Ca²⁺ and increased release probability briefly) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Elevated presynaptic Ca²⁺ and increased release probability briefly) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Elevated presynaptic Ca²⁺ and increased release probability briefly) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition in sensory pathways often:",
    options: [


      "Narrows the temporal window for effective excitation",
      "Eliminates all thalamic relay in a typical mammalian central neuron.",
      "Prevents any spikes in cortex in a typical mammalian central neuron.",
      "Stores declarative memories directly",
    ],
    correct: 0,
    explanation: "Inhibition follows disynaptic paths that limit excitation duration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Narrows the temporal window for effective excitation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Narrows the temporal window for effective excitation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Narrows the temporal window for effective excitation) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Metabotropic glutamate receptor activation can:",
    options: [


      "Modulate ion channels via G-proteins and second messengers",
      "Directly pass Na⁺ like AMPA always when temperature is near 37 °C.",
      "Transduce sound in the cochlea exclusively when temperature is near 37 °C.",
      "Replace SNARE proteins when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "GPCRs adjust excitability and synaptic strength slowly compared with ionotropic receptors.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Modulate ion channels via G-proteins and second messengers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate ion channels via G-proteins and second messengers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate ion channels via G-proteins and second messengers) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "In spike-timing-dependent plasticity (STDP), pre-before-post within ~20 ms often yields:",
    options: [


      "LTP (potentiation)",
      "LTD always",
      "No change regardless of timing",
      "Only retrograde amnesia clinically",
    ],
    correct: 0,
    explanation: "Classic STDP windows link order of spikes to sign of plasticity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (LTP (potentiation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (LTP (potentiation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (LTP (potentiation)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Botulinum toxin reduces transmission by:",
    options: [


      "Cleaving SNARE proteins required for vesicle fusion",
      "Blocking nicotinic receptors on muscle only via curare mechanism",
      "Opening NMDA receptors",
      "Increasing photoreceptor gain",
    ],
    correct: 0,
    explanation: "SNARE cleavage prevents exocytosis of transmitter.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cleaving SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cleaving SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cleaving SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Acetylcholinesterase inhibitors (e.g., neostigmine) increase:",
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
      "This option is inconsistent with the stem; the keyed answer (Duration of ACh in the synaptic cleft) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Duration of ACh in the synaptic cleft) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Duration of ACh in the synaptic cleft) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors means:",
    options: [


      "Receptors enter a closed state despite agonist still bound",
      "Vesicles stop fusing permanently (mixes up presynaptic release with postsynaptic receptor logic)",
      "Axons myelinate faster (mixes up presynaptic release with postsynaptic receptor logic)",
      "Hippocampus is removed (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Desensitized receptors no longer conduct even with ligand present.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Receptors enter a closed state despite agonist still bound) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Receptors enter a closed state despite agonist still bound) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Receptors enter a closed state despite agonist still bound) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Electrical synapses (gap junctions) differ from chemical synapses because they:",
    options: [


      "Pass ionic current directly with less synaptic delay",
      "Always require SNARE-mediated fusion",
      "Use only dopamine as transmitter",
      "Exist only in retina amacrine cells with no exceptions",
    ],
    correct: 0,
    explanation: "Connexin channels couple pre and post voltages rapidly.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pass ionic current directly with less synaptic delay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pass ionic current directly with less synaptic delay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pass ionic current directly with less synaptic delay) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "LTD induced by low-frequency stimulation often involves:",
    options: [


      "Reduced AMPA receptor insertion or enhanced endocytosis",
      "Immediate permanent axotomy (states the wrong induction requirement for LTP/LTD)",
      "Only cochlear tuning shifts (states the wrong induction requirement for LTP/LTD)",
      "Loss of all K⁺ channels (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "LTD protocols weaken synapses via receptor trafficking and signaling.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduced AMPA receptor insertion or enhanced endocytosis) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduced AMPA receptor insertion or enhanced endocytosis) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduced AMPA receptor insertion or enhanced endocytosis) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptotagmin acts as a Ca²⁺ sensor because it:",
    options: [


      "Triggers fast exocytosis when Ca²⁺ binds after an action potential",
      "Opens voltage-gated Na⁺ channels (mixes up presynaptic release with postsynaptic receptor logic)",
      "Is a ligand for glutamate (mixes up presynaptic release with postsynaptic receptor logic)",
      "Defines tonotopic position (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Synaptotagmin couples Ca²⁺ influx to vesicle fusion timing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Triggers fast exocytosis when Ca²⁺ binds after an action potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers fast exocytosis when Ca²⁺ binds after an action potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers fast exocytosis when Ca²⁺ binds after an action potential) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Recurrent excitatory circuits can:",
    options: [


      "Sustain activity or amplify patterns but risk runaway without inhibition",
      "Guarantee perfect stability always when temperature is near 37 °C. during normal resting permeability conditions.",
      "Prevent all oscillations",
      "Replace hippocampal indexing",
    ],
    correct: 0,
    explanation: "Recurrent loops need inhibitory balance to avoid epileptiform activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Sustain activity or amplify patterns but risk runaway without inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sustain activity or amplify patterns but risk runaway without inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sustain activity or amplify patterns but risk runaway without inhibition) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP elevation in neurons commonly:",
    options: [


      "Activates PKA to phosphorylate channels and transcription factors",
      "Directly opens nicotinic receptors when temperature is near 37 °C.",
      "Hyperpolarizes rods to light",
      "Sets E_Na to 0 mV in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "PKA-mediated phosphorylation modulates excitability and gene expression.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Activates PKA to phosphorylate channels and transcription factors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activates PKA to phosphorylate channels and transcription factors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activates PKA to phosphorylate channels and transcription factors) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Retrograde messengers (e.g., endocannabinoids) can:",
    options: [


      "Suppress presynaptic release following strong postsynaptic activity",
      "Travel only anterograde in myelin (mixes up presynaptic release with postsynaptic receptor logic)",
      "Replace all electrical coupling (mixes up presynaptic release with postsynaptic receptor logic)",
      "Encode sound frequency on basilar membrane (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Retrograde signaling adjusts future presynaptic release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic release following strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic release following strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic release following strong postsynaptic activity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection in dendrites can use:",
    options: [


      "Nonlinear NMDA and active dendritic conductances",
      "Only passive leak at all sites (ignores how EPSPs/IPSPs sum in time or space)",
      "Photopigment regeneration (ignores how EPSPs/IPSPs sum in time or space)",
      "Outer hair cell somatic motility alone (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Nonlinearities allow dendrites to detect conjunctive inputs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Nonlinear NMDA and active dendritic conductances) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nonlinear NMDA and active dendritic conductances) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nonlinear NMDA and active dendritic conductances) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after sustained high-frequency firing often reflects:",
    options: [


      "Depletion of readily releasable vesicles",
      "Instant permanent SNARE loss",
      "Requires lTD at CA3–CA1 exclusively in this context",
      "Elimination of ITD coding in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Vesicle pool depletion reduces release probability transiently.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depletion of readily releasable vesicles) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of readily releasable vesicles) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of readily releasable vesicles) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Muscarinic ACh receptors in the CNS are typically:",
    options: [


      "Metabotropic — slow modulation of excitability",
      "Ionotropic nicotinic channels identical to NMJ",
      "Only located on muscle endplate",
      "Responsible for phototransduction",
    ],
    correct: 0,
    explanation: "Muscarinic receptors are GPCRs with diverse downstream effects.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic — slow modulation of excitability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic — slow modulation of excitability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic — slow modulation of excitability) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine depletion in Parkinson disease primarily affects:",
    options: [


      "Basal ganglia circuits for movement initiation and selection",
      "Cochlear inner hair cell transduction",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "NMJ quantal content exclusively",
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia motor loops.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia circuits for movement initiation and selection) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia circuits for movement initiation and selection) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia circuits for movement initiation and selection) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Hebbian plasticity is often summarized as:",
    options: [


      "Cells that fire together wire together",
      "All synapses weaken every second regardless of activity",
      "Only inhibitory synapses potentiate",
      "Spikes cannot change receptor number",
    ],
    correct: 0,
    explanation: "Correlated pre/post activity drives strengthening in classic Hebbian models.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Center-surround receptive fields in retina emerge largely from:",
    options: [


      "Lateral inhibition and bipolar/amacrine connectivity",
      "Requires cochlear amplification exclusively in this context",
      "Gap junctions at the NMJ",
      "Hippocampal place fields",
    ],
    correct: 0,
    explanation: "Antagonistic surround via lateral inhibition enhances contrast.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lateral inhibition and bipolar/amacrine connectivity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lateral inhibition and bipolar/amacrine connectivity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lateral inhibition and bipolar/amacrine connectivity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Clathrin-mediated endocytosis after fusion serves to:",
    options: [


      "Recycle vesicle membrane and maintain release capacity",
      "Open new Na⁺ channels at nodes (mixes up presynaptic release with postsynaptic receptor logic)",
      "Generate photoreceptor hyperpolarization (mixes up presynaptic release with postsynaptic receptor logic)",
      "Encode odor identity in glomeruli only (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Endocytosis retrieves membrane for new vesicle formation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ opens channels on the ER to:",
    options: [


      "Release Ca²⁺ from internal stores into the cytosol",
      "Pump Na⁺ out of the cell directly in a typical mammalian central neuron.",
      "Hyperpolarize photoreceptors to light in a typical mammalian central neuron.",
      "Set basilar membrane stiffness globally during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "IP₃ receptors release stored Ca²⁺ for signaling.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Release Ca²⁺ from internal stores into the cytosol) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release Ca²⁺ from internal stores into the cytosol) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release Ca²⁺ from internal stores into the cytosol) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "An inhibitory synapse with E_rev above rest can be:",
    options: [


      "Depolarizing yet still inhibitory (shunting / Cl⁻ load) in some developing circuits",
      "Impossible under any condition (ignores how EPSPs/IPSPs sum in time or space) in a typical mammalian central neuron.",
      "Always excitatory if depolarizing (ignores how EPSPs/IPSPs sum in time or space)",
      "Only found in cochlear hair cells (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Depolarizing IPSPs can still reduce excitatory drive via conductance increase.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarizing yet still inhibitory (shunting / Cl⁻ load) in some developing circuits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarizing yet still inhibitory (shunting / Cl⁻ load) in some developing circuits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarizing yet still inhibitory (shunting / Cl⁻ load) in some developing circuits) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "AMPA receptor blockers reduce:",
    options: [


      "Fast excitatory synaptic currents in many CNS pathways",
      "Requires gABAergic tonic inhibition exclusively in this context",
      "Myelin thickness",
      "Muscle endplate quantal size directly in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "AMPA mediates rapid glutamatergic EPSCs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory synaptic currents in many CNS pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory synaptic currents in many CNS pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory synaptic currents in many CNS pathways) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Miniature end-plate potentials (MEPPs) demonstrate:",
    options: [


      "Quantal nature of synaptic transmission at the NMJ",
      "Continuous graded muscle depolarization without vesicles",
      "Saltatory conduction in muscle spindles only",
      "Tonotopic mapping",
    ],
    correct: 0,
    explanation: "MEPPs are single-quantum events at motor endplates.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Quantal nature of synaptic transmission at the NMJ) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Quantal nature of synaptic transmission at the NMJ) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Quantal nature of synaptic transmission at the NMJ) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Tetanus toxin prevents release by:",
    options: [


      "Proteolyzing SNARE proteins (similar mechanism to botulinum)",
      "Blocking voltage-gated K⁺ only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Opening gap junctions globally (mixes up presynaptic release with postsynaptic receptor logic)",
      "Destroying hippocampal place fields (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "SNARE cleavage abolishes vesicle fusion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Proteolyzing SNARE proteins (similar mechanism to botulinum)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Proteolyzing SNARE proteins (similar mechanism to botulinum)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Proteolyzing SNARE proteins (similar mechanism to botulinum)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all selection can be implemented by:",
    options: [


      "Strong mutual inhibition among competing representations",
      "Removing all inhibition during normal resting permeability conditions.",
      "Requires photoreceptor coupling exclusively in this context",
      "Increasing leak without synapses",
    ],
    correct: 0,
    explanation: "Lateral inhibition suppresses weaker active units.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Strong mutual inhibition among competing representations) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Strong mutual inhibition among competing representations) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Strong mutual inhibition among competing representations) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Dendritic spikes (active dendritic conductances) allow:",
    options: [


      "Local nonlinear amplification before somatic integration",
      "Only passive decay everywhere (ignores how EPSPs/IPSPs sum in time or space)",
      "Elimination of all IPSPs (ignores how EPSPs/IPSPs sum in time or space)",
      "Direct transduction of odor to muscle (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Active dendrites boost coincident synaptic input locally.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Local nonlinear amplification before somatic integration) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Local nonlinear amplification before somatic integration) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Local nonlinear amplification before somatic integration) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Glutamate reuptake transporters on glia and neurons serve to:",
    options: [


      "Terminate synaptic action and prevent excitotoxic buildup",
      "Synthesize GABA from glutamate only in cochlea (describes the wrong synaptic structure or transmission step)",
      "Open nicotinic receptors (describes the wrong synaptic structure or transmission step)",
      "Set E_K to +60 mV (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Clearance of glutamate limits receptor activation duration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Terminate synaptic action and prevent excitotoxic buildup) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Terminate synaptic action and prevent excitotoxic buildup) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Terminate synaptic action and prevent excitotoxic buildup) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Facilitation after a single presynaptic spike partly reflects:",
    options: [


      "Leftover presynaptic Ca²⁺ elevating release probability for the next spike",
      "Permanent insertion of new axons",
      "Loss of all AMPA receptors when temperature is near 37 °C. during normal resting permeability conditions.",
      "Increased rod dark current when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Ca²⁺ remains elevated briefly, enhancing subsequent release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Leftover presynaptic Ca²⁺ elevating release probability for the next spike) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Leftover presynaptic Ca²⁺ elevating release probability for the next spike) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Leftover presynaptic Ca²⁺ elevating release probability for the next spike) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine in arousal networks tends to:",
    options: [


      "Increase gain and reduce background noise correlation in cortex",
      "Silence all thalamic relay permanently when temperature is near 37 °C.",
      "Block all Na⁺ channels when temperature is near 37 °C. during normal resting permeability conditions.",
      "Replace cerebellar climbing fibers when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "NE modulates alertness and signal-to-noise in sensory cortex.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase gain and reduce background noise correlation in cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase gain and reduce background noise correlation in cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase gain and reduce background noise correlation in cortex) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "A central pattern generator (CPG) for locomotion can produce rhythmic output because:",
    options: [


      "Reciprocally connected interneurons and endogenous bursting sustain alternating activity",
      "Every motor neuron requires continuous cortical spikes each cycle",
      "Only sensory feedback from muscle spindles creates rhythm",
      "Gap junctions replace all chemical synapses in cortex (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "CPGs combine intrinsic pacemaker properties with inhibitory wiring for rhythm.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reciprocally connected interneurons and endogenous bursting sustain alternating activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reciprocally connected interneurons and endogenous bursting sustain alternating activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reciprocally connected interneurons and endogenous bursting sustain alternating activity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Reciprocal inhibition in a spinal stretch reflex circuit ensures that:",
    options: [


      "Agonist contraction is accompanied by antagonist relaxation",
      "Both agonist and antagonist contract maximally together",
      "Only sensory neurons fire without motor output (maps the lesion to the wrong motor pathway or reflex)",
      "Upper motor neurons are bypassed entirely (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Ia interneurons inhibit antagonist α-motor neurons during agonist activation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Agonist contraction is accompanied by antagonist relaxation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Agonist contraction is accompanied by antagonist relaxation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Agonist contraction is accompanied by antagonist relaxation) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "In Aplysia, habituation of the gill-withdrawal reflex is associated with:",
    options: [


      "Decreased presynaptic glutamate release from sensory neurons",
      "New insertion of AMPA receptors on motor neurons only",
      "Permanent LTP at every synapse when temperature is near 37 °C.",
      "Loss of all voltage-gated Na⁺ channels when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Habituation reflects homosynaptic depression of sensory→motor transmission.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Decreased presynaptic glutamate release from sensory neurons) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Decreased presynaptic glutamate release from sensory neurons) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Decreased presynaptic glutamate release from sensory neurons) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Sensitization in Aplysia after noxious tail shock involves:",
    options: [


      "Modulatory serotonergic facilitation of sensory neuron terminals",
      "Immediate long-term potentiation requiring NMDA only in hippocampus",
      "Exclusive gap junction coupling in cerebellum",
      "Photoreceptor bleaching",
    ],
    correct: 0,
    explanation: "Serotonin increases cAMP/PKA signaling and enhances transmitter release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Modulatory serotonergic facilitation of sensory neuron terminals) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulatory serotonergic facilitation of sensory neuron terminals) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulatory serotonergic facilitation of sensory neuron terminals) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Quantal analysis showing discrete step sizes in EPSC amplitude supports:",
    options: [


      "Vesicles release fixed amounts of transmitter (quantal packets)",
      "Continuous fluid secretion without vesicles (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only electrical coupling without quanta (mixes up presynaptic release with postsynaptic receptor logic)",
      "Infinite release without saturation (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Stepwise mEPSC/EPSC sizes reflect multimodal vesicle fusion events.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Vesicles release fixed amounts of transmitter (quantal packets)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicles release fixed amounts of transmitter (quantal packets)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicles release fixed amounts of transmitter (quantal packets)) matches the underlying mechanism.",
    ]
  }
];

const PART3_EXPANSION_POOL = [
  {
    topic: "Phototransduction",
    question: "Retinal cell class: Photoreceptor. Role:",
    options: [

      "Transduces photons; releases glutamate continuously in darkness",
      "Requires cochlear amplification exclusively in this context",
      "Requires nMJ ACh release exclusively in this context",
      "under standard whole-cell recording conditions. in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Photoreceptor: Transduces photons; releases glutamate continuously in darkness.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Transduces photons; releases glutamate continuously in darkness), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transduces photons; releases glutamate continuously in darkness), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Retinal cell class: Bipolar cell. Role:",
    options: [

      "Sign-inverting or sign-conserving pathway element",
      "Requires cochlear amplification exclusively in this context",
      "Requires nMJ ACh release exclusively in this context",
      "Requires cSF production exclusively in this context",
    ],
    correct: 0,
    explanation: "Bipolar cell: Sign-inverting or sign-conserving pathway element.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Sign-inverting or sign-conserving pathway element), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sign-inverting or sign-conserving pathway element), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Retinal cell class: Amacrine cell. Role:",
    options: [

      "Lateral processing in inner plexiform layer",
      "Requires cochlear amplification exclusively in this context",
      "Requires nMJ ACh release exclusively in this context",
      "Requires cSF production exclusively in this context",
    ],
    correct: 0,
    explanation: "Amacrine cell: Lateral processing in inner plexiform layer.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Lateral processing in inner plexiform layer), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lateral processing in inner plexiform layer), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal cell class: Ganglion cell. Role:",
    options: [

      "Output spike trains to brain via optic nerve",
      "Requires cochlear amplification exclusively in this context",
      "Requires nMJ ACh release exclusively in this context",
      "Requires cSF production exclusively in this context",
    ],
    correct: 0,
    explanation: "Ganglion cell: Output spike trains to brain via optic nerve.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Output spike trains to brain via optic nerve), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Output spike trains to brain via optic nerve), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Basilar base. Function:",
    options: [

      "Encodes high frequencies",
      "Olfactory combinatorial coding",
      "Photopigment regeneration only",
      "Cerebellar climbing fiber error",
    ],
    correct: 0,
    explanation: "Basilar base: Encodes high frequencies.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Encodes high frequencies), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Encodes high frequencies), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Encodes high frequencies), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Basilar apex. Function:",
    options: [

      "Encodes low frequencies",
      "Olfactory combinatorial coding",
      "Photopigment regeneration only",
      "Cerebellar climbing fiber error",
    ],
    correct: 0,
    explanation: "Basilar apex: Encodes low frequencies.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Encodes low frequencies), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Encodes low frequencies), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Encodes low frequencies), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Cochlear structure: Inner hair cell. Function:",
    options: [

      "Primary sensory transduction to afferents",
      "Olfactory combinatorial coding when temperature is near 37 °C.",
      "Photopigment regeneration only when temperature is near 37 °C.",
      "Cerebellar climbing fiber error during normal resting permeability conditions.",
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
    question: "Cochlear structure: Outer hair cell. Function:",
    options: [

      "Active cochlear amplification/tuning",
      "Olfactory combinatorial coding when temperature is near 37 °C.",
      "Photopigment regeneration only when temperature is near 37 °C.",
      "Cerebellar climbing fiber error during normal resting permeability conditions.",
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
    question: "Sensory pathway/receptor: Dorsal column pathway. Conveys:",
    options: [

      "Fine touch, vibration, proprioception",
      "Color opponency only",
      "Saltatory node formation",
      "Requires declarative memory storage exclusively in this context",
    ],
    correct: 0,
    explanation: "Dorsal column pathway signals Fine touch, vibration, proprioception.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Fine touch, vibration, proprioception), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fine touch, vibration, proprioception), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fine touch, vibration, proprioception), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pain",
    question: "Sensory pathway/receptor: Spinothalamic tract. Conveys:",
    options: [

      "Pain and temperature",
      "Color opponency only",
      "Saltatory node formation",
      "Only declarative memory storage",
    ],
    correct: 0,
    explanation: "Spinothalamic tract signals Pain and temperature.",
    wrongExplanations: [
      "",
      "This choice (Color opponency only) does not match the keyed answer’s mechanism for Pain.",
      "This choice (Saltatory node formation) does not match the keyed answer’s mechanism for Pain.",
      "Unlike the keyed answer (Pain and temperature), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Sensory pathway/receptor: Meissner corpuscle. Conveys:",
    options: [

      "Light touch and flutter",
      "Color opponency only",
      "Saltatory node formation",
      "Only declarative memory storage",
    ],
    correct: 0,
    explanation: "Meissner corpuscle signals Light touch and flutter.",
    wrongExplanations: [
      "",
      "This choice (Color opponency only) does not match the keyed answer’s mechanism for Somatosensation.",
      "This choice (Saltatory node formation) does not match the keyed answer’s mechanism for Somatosensation.",
      "Unlike the keyed answer (Light touch and flutter), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Proprioception",
    question: "Sensory pathway/receptor: Muscle spindle. Conveys:",
    options: [

      "Muscle length/stretch",
      "Color opponency only",
      "Saltatory node formation",
      "Only declarative memory storage",
    ],
    correct: 0,
    explanation: "Muscle spindle signals Muscle length/stretch.",
    wrongExplanations: [
      "",
      "This choice (Color opponency only) does not match the keyed answer’s mechanism for Proprioception.",
      "This choice (Saltatory node formation) does not match the keyed answer’s mechanism for Proprioception.",
      "Unlike the keyed answer (Muscle length/stretch), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Hippocampus",
    question: "CNS region: Hippocampus. Best-known function:",
    options: [

      "Spatial/episodic memory and navigation",
      "Requires phototransduction exclusively in this context",
      "Requires nMJ maintenance exclusively in this context",
      "Requires cochlear fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Hippocampus: Spatial/episodic memory and navigation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spatial/episodic memory and navigation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spatial/episodic memory and navigation), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "CNS region: Amygdala. Best-known function:",
    options: [

      "Emotional learning and salience",
      "Requires phototransduction exclusively in this context",
      "Requires nMJ maintenance exclusively in this context",
      "Requires cochlear fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Amygdala: Emotional learning and salience.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Emotional learning and salience), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Emotional learning and salience), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "CNS region: Cerebellum. Best-known function:",
    options: [

      "Timing and error correction in movement",
      "Requires phototransduction exclusively in this context",
      "Requires nMJ maintenance exclusively in this context",
      "Requires cochlear fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Cerebellum: Timing and error correction in movement.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Timing and error correction in movement), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Timing and error correction in movement), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "CNS region: Basal ganglia. Best-known function:",
    options: [

      "Action selection and reinforcement learning",
      "Requires phototransduction exclusively in this context",
      "Requires nMJ maintenance exclusively in this context",
      "Requires cochlear fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Basal ganglia: Action selection and reinforcement learning.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Action selection and reinforcement learning), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Action selection and reinforcement learning), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Thalamus",
    question: "CNS region: Thalamus. Best-known function:",
    options: [

      "Sensory/motor relay and gating to cortex",
      "Requires phototransduction exclusively in this context",
      "Requires nMJ maintenance exclusively in this context",
      "Requires cochlear fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Thalamus: Sensory/motor relay and gating to cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Sensory/motor relay and gating to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sensory/motor relay and gating to cortex), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Executive Function",
    question: "CNS region: Prefrontal cortex. Best-known function:",
    options: [

      "Working memory and executive control",
      "Requires phototransduction exclusively in this context",
      "Requires nMJ maintenance exclusively in this context",
      "Requires cochlear fluid secretion exclusively in this context",
    ],
    correct: 0,
    explanation: "Prefrontal cortex: Working memory and executive control.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Working memory and executive control), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Working memory and executive control), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Memory paradigm/structure: LTP at CA3–CA1. Key lesson:",
    options: [

      "Long-lasting increase in synaptic strength after strong activation",
      "Eliminates all sensation",
      "Blocks only photopigment",
      "Prevents only Na⁺ gating",
    ],
    correct: 0,
    explanation: "LTP at CA3–CA1: Long-lasting increase in synaptic strength after strong activation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Long-lasting increase in synaptic strength after strong activation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Long-lasting increase in synaptic strength after strong activation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Long-lasting increase in synaptic strength after strong activation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Memory paradigm/structure: Consolidation. Key lesson:",
    options: [

      "Transfer/stabilization of memory over hours to years",
      "Eliminates all sensation",
      "Blocks only photopigment",
      "Prevents only Na⁺ gating",
    ],
    correct: 0,
    explanation: "Consolidation: Transfer/stabilization of memory over hours to years.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Transfer/stabilization of memory over hours to years), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transfer/stabilization of memory over hours to years), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transfer/stabilization of memory over hours to years), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Memory paradigm/structure: H.M.. Key lesson:",
    options: [

      "Profound anterograde declarative amnesia",
      "Eliminates all sensation",
      "Blocks only photopigment",
      "Prevents only Na⁺ gating",
    ],
    correct: 0,
    explanation: "H.M.: Profound anterograde declarative amnesia.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Profound anterograde declarative amnesia), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Profound anterograde declarative amnesia), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Profound anterograde declarative amnesia), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Memory paradigm/structure: Morris water maze. Key lesson:",
    options: [

      "Tests hippocampal-dependent spatial learning",
      "Eliminates all sensation",
      "Blocks only photopigment",
      "Prevents only Na⁺ gating",
    ],
    correct: 0,
    explanation: "Morris water maze: Tests hippocampal-dependent spatial learning.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Tests hippocampal-dependent spatial learning), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Tests hippocampal-dependent spatial learning), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Tests hippocampal-dependent spatial learning), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Parkinson disease. Typical neural basis:",
    options: [

      "Loss of SNc dopamine neurons",
      "Only outer hair cell loss in cochlea",
      "Only taste bud apoptosis",
      "Gap junction blockade at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Parkinson disease linked to Loss of SNc dopamine neurons.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This choice (Only taste bud apoptosis) does not match the keyed answer’s mechanism for Clinical Correlates.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Multiple sclerosis. Typical neural basis:",
    options: [

      "CNS demyelination",
      "Only outer hair cell loss in cochlea",
      "Only taste bud apoptosis",
      "Gap junction blockade at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Multiple sclerosis linked to CNS demyelination.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This choice (Only taste bud apoptosis) does not match the keyed answer’s mechanism for Clinical Correlates.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Prosopagnosia. Typical neural basis:",
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
      "Unlike the keyed answer (Fusiform face area / ventral temporal cortex (face recognition network)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fusiform face area / ventral temporal cortex (face recognition network)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fusiform face area / ventral temporal cortex (face recognition network)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Clinical correlate: Hemianopia (post-chiasmal). Typical neural basis:",
    options: [

      "Contralateral visual field loss",
      "Only outer hair cell loss in cochlea",
      "Only taste bud apoptosis",
      "Gap junction blockade at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Hemianopia (post-chiasmal) linked to Contralateral visual field loss.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This choice (Only taste bud apoptosis) does not match the keyed answer’s mechanism for Clinical Correlates.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Binaural hearing uses interaural cues; for low frequencies, which cue is especially important?",
    options: [

      "Interaural time differences (ITD)",
      "Requires retinal eccentricity exclusively in this context",
      "Requires glomerular identity exclusively in this context",
      "Requires muscle spindle length exclusively in this context",
    ],
    correct: 0,
    explanation: "Sound localization combines ITD and ILD depending on frequency.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Interaural time differences (ITD)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Interaural time differences (ITD)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Binaural hearing uses interaural cues; for mid frequencies, which cue is especially important?",
    options: [

      "ITD for low, ILD for high (classic MCB80x split)",
      "Requires retinal eccentricity exclusively in this context",
      "Requires glomerular identity exclusively in this context",
      "Requires muscle spindle length exclusively in this context",
    ],
    correct: 0,
    explanation: "Sound localization combines ITD and ILD depending on frequency.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (ITD for low, ILD for high (classic MCB80x split)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (ITD for low, ILD for high (classic MCB80x split)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Binaural hearing uses interaural cues; for high frequencies, which cue is especially important?",
    options: [

      "Interaural level differences (ILD)",
      "Requires retinal eccentricity exclusively in this context",
      "Requires glomerular identity exclusively in this context",
      "Requires muscle spindle length exclusively in this context",
    ],
    correct: 0,
    explanation: "Sound localization combines ITD and ILD depending on frequency.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Interaural level differences (ILD)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Interaural level differences (ILD)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "A basilar membrane region with peak sensitivity near 400 Hz best reflects:",
    options: [

      "Tonotopic organization",
      "Random wiring without frequency order",
      "Only olfactory receptor choice",
      "Only NMJ ACh release",
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
    question: "A basilar membrane region with peak sensitivity near 4000 Hz best reflects:",
    options: [

      "Tonotopic organization",
      "Random wiring without frequency order",
      "Only olfactory receptor choice",
      "Only NMJ ACh release",
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
    question: "Bilateral hippocampal system damage in humans most consistently impairs:",
    options: [

      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Profound medial temporal lobe damage in humans most consistently impairs:",
    options: [

      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Following extensive hippocampal injury in adults, the ability to form new memories is:",
    options: [

      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "After bilateral hippocampal loss, which learning is most impaired in typical cases?",
    options: [

      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Medial temporal lobe damage producing anterograde amnesia primarily disrupts:",
    options: [

      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Forming new declarative/episodic memories), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Phototransduction",
    question: "In darkness, vertebrate photoreceptors:",
    options: [

      "Are depolarized and release glutamate continuously",
      "Hyperpolarize strongly to −70 mV below rest during normal resting permeability conditions.",
      "Fire Na⁺ spikes at 100 Hz in a typical mammalian central neuron.",
      "Use nicotinic receptors at the outer segment",
    ],
    correct: 0,
    explanation: "Dark current through cGMP-gated channels depolarizes photoreceptors.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Are depolarized and release glutamate continuously), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Are depolarized and release glutamate continuously), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Are depolarized and release glutamate continuously), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Light closes cGMP-gated channels in rods, leading to:",
    options: [

      "Hyperpolarization and reduced glutamate release",
      "Depolarization and increased glutamate release",
      "Opening of voltage-gated Na⁺ at the synapse only",
      "Immediate LTP at CA3–CA1",
    ],
    correct: 0,
    explanation: "Less cGMP closes channels, hyperpolarizing the cell.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hyperpolarization and reduced glutamate release), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hyperpolarization and reduced glutamate release), this option misstates the mechanism or direction described in the stem.",
      "This choice (Immediate LTP at CA3–CA1) does not match the keyed answer’s mechanism for Phototransduction.",
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal ganglion cells encode visual information primarily as:",
    options: [

      "Patterns of action potentials sent to the brain",
      "Graded muscle contractions",
      "Continuous DC without spikes",
      "Direct hormone release into CSF",
    ],
    correct: 0,
    explanation: "Ganglion cells are the spiking output of the retina.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Patterns of action potentials sent to the brain), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Patterns of action potentials sent to the brain), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Patterns of action potentials sent to the brain), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Lateral geniculate nucleus (LGN) of thalamus:",
    options: [

      "Relays retinal input to primary visual cortex",
      "Transduces photons directly",
      "Encodes smell via glomeruli",
      "Generates end-plate potentials",
    ],
    correct: 0,
    explanation: "LGN is the main thalamic relay for vision.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Relays retinal input to primary visual cortex), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Relays retinal input to primary visual cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Primary visual cortex (V1) neurons often show:",
    options: [

      "Orientation and spatial frequency selectivity",
      "Pure tone frequency tuning like cochlea",
      "Requires pain and temperature maps exclusively in this context",
      "No receptive fields",
    ],
    correct: 0,
    explanation: "V1 simple/complex cells filter orientation and spatial structure.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Orientation and spatial frequency selectivity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Orientation and spatial frequency selectivity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Place theory of hearing states that:",
    options: [

      "Sound frequency is mapped to location along the basilar membrane",
      "All frequencies activate the entire cochlea equally during normal resting permeability conditions.",
      "ITD is used for all frequencies without exception in a typical mammalian central neuron.",
      "Outer hair cells are the sole afferent signal in a typical mammalian central neuron.",
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
    question: "Inner hair cells primarily:",
    options: [

      "Provide afferent signal to auditory nerve fibers",
      "Amplify basilar motion via somatic motility only",
      "Secrete cerebrospinal fluid",
      "Store episodic memories",
    ],
    correct: 0,
    explanation: "IHCs transduce vibration into receptor potentials driving afferents.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Provide afferent signal to auditory nerve fibers), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Provide afferent signal to auditory nerve fibers), this option misstates the mechanism or direction described in the stem.",
      "This choice (Store episodic memories) does not match the keyed answer’s mechanism for Auditory System.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cell electromotility contributes to:",
    options: [

      "Sharp cochlear tuning and sensitivity (active amplification)",
      "Requires pain modulation in spinothalamic tract exclusively in this context",
      "Photopigment regeneration in a typical mammalian central neuron.",
      "NMJ quantal release during normal resting permeability conditions.",
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
    question: "For localizing low-frequency sounds, the brain relies heavily on:",
    options: [

      "Interaural time differences (ITD)",
      "Interaural level differences (ILD) only",
      "Retinal eccentricity",
      "Muscle spindle Ia fibers only",
    ],
    correct: 0,
    explanation: "Low frequencies carry phase/time cues between ears.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Interaural time differences (ITD)), this option misstates the mechanism or direction described in the stem.",
      "This choice (Retinal eccentricity) does not match the keyed answer’s mechanism for Auditory Pathway.",
      "Unlike the keyed answer (Interaural time differences (ITD)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "For localizing high-frequency sounds, a dominant cue is:",
    options: [

      "Interaural level difference (ILD) from head shadowing",
      "Pure ITD without level change in a typical mammalian central neuron.",
      "Olfactory combinatorial codes in a typical mammalian central neuron.",
      "Rod dark current amplitude when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "High frequencies are shadowed by the head, creating level differences.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Interaural level difference (ILD) from head shadowing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Interaural level difference (ILD) from head shadowing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Interaural level difference (ILD) from head shadowing), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles are most sensitive to:",
    options: [

      "High-frequency vibration and deep pressure transients",
      "Static two-point touch only during normal resting permeability conditions.",
      "Cold temperatures exclusively in a typical mammalian central neuron.",
      "Bitter taste quality",
    ],
    correct: 0,
    explanation: "Pacinian corpuscles adapt rapidly and encode vibration.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (High-frequency vibration and deep pressure transients), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High-frequency vibration and deep pressure transients), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High-frequency vibration and deep pressure transients), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin often signal:",
    options: [

      "Pain and temperature",
      "Fine vibration at 200 Hz only",
      "Sound frequency",
      "Face identity in fusiform gyrus directly",
    ],
    correct: 0,
    explanation: "Polymodal nociceptors and thermoreceptors use free nerve endings.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Pain and temperature), this option misstates the mechanism or direction described in the stem.",
      "This choice (Sound frequency) does not match the keyed answer’s mechanism for Somatosensation.",
      "Unlike the keyed answer (Pain and temperature), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pain",
    question: "Gate control theory proposes that:",
    options: [

      "Spinal interneurons can inhibit nociceptive transmission to projection neurons",
      "Pain fibers are never influenced by touch in a typical mammalian central neuron.",
      "All pain is purely cortical with no spinal relay",
      "Myelin prevents all pain in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Inhibitory circuits in dorsal horn modulate pain relay.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spinal interneurons can inhibit nociceptive transmission to projection neurons), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spinal interneurons can inhibit nociceptive transmission to projection neurons), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spinal interneurons can inhibit nociceptive transmission to projection neurons), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "One olfactory receptor neuron in many species typically:",
    options: [

      "Expresses one receptor type and projects to specific glomeruli",
      "Expresses all receptor genes simultaneously during normal resting permeability conditions.",
      "Synapses directly on motor neurons only",
      "Uses ACh as its only neurotransmitter at NMJ",
    ],
    correct: 0,
    explanation: "Receptor choice and glomerular targeting create labeled lines/combinatorial codes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Expresses one receptor type and projects to specific glomeruli), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Expresses one receptor type and projects to specific glomeruli), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Expresses one receptor type and projects to specific glomeruli), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Gustation",
    question: "Different taste qualities (sweet, salty, sour, bitter, umami) are:",
    options: [

      "Encoded by distinct receptor mechanisms and pathways",
      "Detected only by pain fibers in tongue when temperature is near 37 °C.",
      "Identical to cochlear tonotopy when temperature is near 37 °C.",
      "Stored solely in cerebellum during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Taste uses specialized receptors and central gustatory pathways.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Encoded by distinct receptor mechanisms and pathways), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Encoded by distinct receptor mechanisms and pathways), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (e.g., skills) often involves:",
    options: [

      "Basal ganglia and cerebellum among other motor circuits",
      "Requires hippocampal place cells exclusively exclusively in this context",
      "Requires olfactory glomeruli exclusively in this context",
      "Requires inner hair cells exclusively in this context",
    ],
    correct: 0,
    explanation: "Motor learning uses striatum, cerebellum, and related loops.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Basal ganglia and cerebellum among other motor circuits), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Basal ganglia and cerebellum among other motor circuits), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Climbing fiber input to Purkinje cells often signals:",
    options: [

      "Unexpected error or perturbation in movement",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "Constant sound intensity only",
      "Static touch on Meissner corpuscle only",
    ],
    correct: 0,
    explanation: "Climbing fibers carry error-related signals for motor learning.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Unexpected error or perturbation in movement), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Unexpected error or perturbation in movement), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Unexpected error or perturbation in movement), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "Direct vs indirect pathways in basal ganglia modulate:",
    options: [

      "Thalamic drive to cortex",
      "Only cochlear fluid ion composition",
      "Rhodopsin regeneration exclusively",
      "Quantal size at NMJ only",
    ],
    correct: 0,
    explanation: "Striatal pathways gate cortical initiation of action.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Thalamic drive to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Thalamic drive to cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Thalamus",
    question: "Thalamic relay nuclei function as:",
    options: [

      "Gateways that filter and route sensory/motor information to cortex",
      "Sites of phototransduction when temperature is near 37 °C. during normal resting permeability conditions.",
      "Primary storage of all declarative memories permanently during normal resting permeability conditions.",
      "NMJ-only synapses in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Thalamus controls what reaches cortex and when.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Gateways that filter and route sensory/motor information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Gateways that filter and route sensory/motor information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Gateways that filter and route sensory/motor information to cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Executive Function",
    question: "Working memory tasks heavily engage:",
    options: [

      "Prefrontal cortex maintaining task-relevant information",
      "Requires rod outer segments exclusively in this context",
      "Requires spinothalamic tract exclusively in this context",
      "Cochlear basilar apex exclusively in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "PFC supports temporary maintenance and manipulation of information.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Prefrontal cortex maintaining task-relevant information), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Prefrontal cortex maintaining task-relevant information), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Damage to primary visual cortex (V1) typically causes:",
    options: [

      "Cortical blindness in corresponding visual field regions",
      "Complete loss of all sensation including touch",
      "Deafness for all frequencies",
      "Immediate loss of all procedural memory",
    ],
    correct: 0,
    explanation: "V1 lesions produce scotomas or field loss depending on extent.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Cortical blindness in corresponding visual field regions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cortical blindness in corresponding visual field regions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cortical blindness in corresponding visual field regions), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Hemianopia after post-chiasmal lesion means:",
    options: [

      "Loss of contralateral half of the visual field in each eye",
      "Loss of ipsilateral hearing only",
      "Inability to taste umami only",
      "Complete NMJ block",
    ],
    correct: 0,
    explanation: "Optic tract/radiation lesions create contralateral field defects.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Loss of contralateral half of the visual field in each eye), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Loss of contralateral half of the visual field in each eye), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Loss of contralateral half of the visual field in each eye), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia involves difficulty with:",
    options: [

      "Recognizing faces despite intact low-level vision",
      "Detecting all sounds above 4 kHz only",
      "Feeling vibration only",
      "All forms of motor learning instantly",
    ],
    correct: 0,
    explanation: "Face recognition networks (fusiform area among others) are impaired.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Recognizing faces despite intact low-level vision), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recognizing faces despite intact low-level vision), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recognizing faces despite intact low-level vision), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Amygdala activation during emotional events can:",
    options: [

      "Modulate hippocampal consolidation strength",
      "Transduce photons in rods in a typical mammalian central neuron.",
      "Set cochlear place map when temperature is near 37 °C.",
      "Replace SNARE proteins when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Emotional salience enhances memory encoding via amygdala–hippocampus interactions.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Modulate hippocampal consolidation strength), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Modulate hippocampal consolidation strength), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Morris water maze performance is impaired by:",
    options: [

      "Hippocampal lesions that disrupt spatial navigation memory",
      "Blocking photopigment only when temperature is near 37 °C.",
      "Removing outer hair cells only when temperature is near 37 °C.",
      "Cutting all dorsal roots without CNS effect during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Hippocampus is critical for spatial learning in this task.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hippocampal lesions that disrupt spatial navigation memory), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hippocampal lesions that disrupt spatial navigation memory), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hippocampal lesions that disrupt spatial navigation memory), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular vs parvocellular LGN pathways differ partly in:",
    options: [

      "Temporal vs spatial resolution emphasis",
      "Encoding bitter taste only",
      "NMJ quantal content",
      "Muscle spindle length only",
    ],
    correct: 0,
    explanation: "M pathway favors motion/transients; P pathway favors detail/color.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Temporal vs spatial resolution emphasis (motion vs fine detail/color)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Temporal vs spatial resolution emphasis (motion vs fine detail/color)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Temporal vs spatial resolution emphasis (motion vs fine detail/color)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Horizontal cells contribute to:",
    options: [

      "Lateral inhibition shaping center-surround antagonism",
      "Saltatory conduction in optic nerve during normal resting permeability conditions.",
      "ACh release at NMJ when temperature is near 37 °C.",
      "CSF production when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Horizontal cells modulate bipolar input via lateral inhibition.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Lateral inhibition shaping center-surround antagonism), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lateral inhibition shaping center-surround antagonism), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lateral inhibition shaping center-surround antagonism), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The organ of Corti sits on the basilar membrane and contains:",
    options: [

      "Hair cells and supporting cells transducing mechanical vibration",
      "Requires photoreceptors and bipolar cells exclusively in this context",
      "",
      "",
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
    question: "Spinothalamic tract neurons convey:",
    options: [

      "Pain, temperature, and crude touch",
      "Only fine two-point discrimination",
      "Only visual orientation",
      "Only cochlear phase locking",
    ],
    correct: 0,
    explanation: "Anterolateral system includes pain and temperature.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Pain, temperature, and crude touch), this option misstates the mechanism or direction described in the stem.",
      "This choice (Only visual orientation) does not match the keyed answer’s mechanism for Pain.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Consolidation of memory over sleep involves:",
    options: [

      "Reactivation and transfer/interaction of hippocampal and cortical traces",
      "Immediate erasure of all LTP",
      "",
      "Permanent block of all synapses during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Sleep supports systems consolidation and trace stabilization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reactivation and transfer/interaction of hippocampal and cortical traces), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reactivation and transfer/interaction of hippocampal and cortical traces), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reactivation and transfer/interaction of hippocampal and cortical traces), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "Dopamine reward prediction error signals are often associated with:",
    options: [

      "Midbrain dopamine neurons responding to unexpected reward",
      "Inner hair cell stereocilia only",
      "Rod outer segment discs only",
      "NMJ acetylcholinesterase only in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "DA neurons encode discrepancies between expected and received reward.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Midbrain dopamine neurons responding to unexpected reward), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Midbrain dopamine neurons responding to unexpected reward), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Midbrain dopamine neurons responding to unexpected reward), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Purkinje cells are the sole output of cerebellar cortex and:",
    options: [

      "Inhibit deep cerebellar nuclei",
      "Excite all motor neurons directly always",
      "Transduce sound in cochlea",
      "Release glutamate onto rods",
    ],
    correct: 0,
    explanation: "Purkinje GABAergic output tonically suppresses deep nuclei.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inhibit deep cerebellar nuclei), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Inhibit deep cerebellar nuclei), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Color opponency (red–green) arises largely from:",
    options: [

      "Retinal ganglion cell receptive field organization and cone inputs",
      "Cochlear place map alone",
      "Spinothalamic nociceptors",
      "NMJ end-plate folds only",
    ],
    correct: 0,
    explanation: "Opponent processing compares cone signals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Retinal ganglion cell receptive field organization and cone inputs), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Retinal ganglion cell receptive field organization and cone inputs), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Auditory information reaches cortex via:",
    options: [

      "Thalamus (MGN) to primary auditory cortex",
      "Direct rod synapse on Purkinje cells",
      "Requires hippocampus without thalamus exclusively in this context",
      "Requires glomeruli without cortex exclusively in this context",
    ],
    correct: 0,
    explanation: "Medial geniculate nucleus relays to A1.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Thalamus (MGN) to primary auditory cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Thalamus (MGN) to primary auditory cortex), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral cells in olfactory bulb:",
    options: [

      "Project output to higher olfactory areas",
      "Are photoreceptors in retina",
      "Are inner hair cells",
      "Generate NMJ quanta during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Mitral/tufted cells are principal output neurons of the bulb.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Project output to higher olfactory areas), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Project output to higher olfactory areas), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Gustation",
    question: "Taste information reaches cortex through:",
    options: [

      "Thalamus (VPM) and gustatory cortex among other relays",
      "Requires cochlear nucleus exclusively in this context",
      "Requires dorsal column without synapse exclusively in this context",
      "Direct gap junction from tongue to cerebellum in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Gustatory pathways synapse in brainstem, thalamus, then cortex.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Thalamus (VPM) and gustatory cortex among other relays), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Thalamus (VPM) and gustatory cortex among other relays), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Multiple sclerosis symptoms often include:",
    options: [

      "Weakness, sensory changes, and vision problems from demyelination",
      "Requires loss of bitter taste permanently exclusively in this context",
      "Requires rod hyperpolarization to dark exclusively in this context",
      "Exclusive NMJ curare sensitivity",
    ],
    correct: 0,
    explanation: "CNS demyelination slows conduction and causes multifocal deficits.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Weakness, sensory changes, and vision problems from demyelination), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Weakness, sensory changes, and vision problems from demyelination), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Weakness, sensory changes, and vision problems from demyelination), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Parkinson disease motor symptoms include:",
    options: [

      "Bradykinesia, rigidity, and resting tremor",
      "Hyperacuity for high-frequency hearing only",
      "Complete cortical blindness always",
      "Instant anterograde amnesia for all stimuli",
    ],
    correct: 0,
    explanation: "Basal ganglia dysfunction slows and stiffens movement.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Bradykinesia, rigidity, and resting tremor), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Bradykinesia, rigidity, and resting tremor), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Bradykinesia, rigidity, and resting tremor), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Rhodopsin activation by light triggers:",
    options: [

      "Transducin/phosphodiesterase cascade lowering cGMP",
      "Immediate opening of voltage-gated Na⁺ at axon hillock",
      "SNARE-mediated fusion at NMJ",
      "LTP at all synapses globally",
    ],
    correct: 0,
    explanation: "G-protein cascade closes cGMP-gated channels in rods.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Transducin/phosphodiesterase cascade lowering cGMP), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transducin/phosphodiesterase cascade lowering cGMP), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transducin/phosphodiesterase cascade lowering cGMP), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Two-point discrimination is finest on:",
    options: [

      "Fingertips with high receptor density and large cortical representation",
      "Proximal back with low density when temperature is near 37 °C. during normal resting permeability conditions.",
      "Cochlear apex exclusively in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Rod outer segment tip in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Sensory acuity correlates with receptor density and cortical magnification.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Fingertips with high receptor density and large cortical representation), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Fingertips with high receptor density and large cortical representation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "A lesion of the optic tract (post-chiasmal, left side) typically causes:",
    options: [

      "Right homonymous hemianopia",
      "Left nasal hemianopia only in the left eye",
      "Bitemporal hemianopia",
      "Complete blindness in the left eye only",
    ],
    correct: 0,
    explanation: "Post-chiasmal fibers carry contralateral visual field information.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Right homonymous hemianopia (loss of right visual field in both eyes)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Right homonymous hemianopia (loss of right visual field in both eyes)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Right homonymous hemianopia (loss of right visual field in both eyes)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Transection of the lateral corticospinal tract in the cervical spinal cord usually produces:",
    options: [

      "Ipsilateral weakness below the lesion with upper motor neuron signs",
      "Contralateral weakness below the lesion only",
      "Bilateral flaccid paralysis at the level only",
      "Isolated loss of taste on the tongue",
    ],
    correct: 0,
    explanation: "Corticospinal fibers decussate in the medulla; ipsilateral tract carries ipsilateral limb control.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Ipsilateral weakness below the lesion with upper motor neuron signs), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ipsilateral weakness below the lesion with upper motor neuron signs), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ipsilateral weakness below the lesion with upper motor neuron signs), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Damage to left Wernicke's area (posterior superior temporal gyrus) most often yields:",
    options: [

      "Fluent but largely meaningless speech with impaired comprehension",
      "Nonfluent effortful speech with relatively preserved comprehension",
      "Pure motor weakness without language change",
      "Loss of vestibulo-ocular reflex only",
    ],
    correct: 0,
    explanation: "Wernicke aphasia affects language comprehension and semantic output.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Fluent but largely meaningless speech with impaired comprehension), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fluent but largely meaningless speech with impaired comprehension), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fluent but largely meaningless speech with impaired comprehension), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Vestibular System",
    question: "Semicircular canal hair cells depolarize when:",
    options: [

      "Endolymph flow deflects the cupula toward the kinocilium",
      "Basilar membrane moves at 4 kHz during normal resting permeability conditions.",
      "Rod photopigment isomerizes during normal resting permeability conditions.",
      "Glomeruli are activated by odorants during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Vestibular transduction is direction-sensitive to stereocilia bundle deflection.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Endolymph flow deflects the cupula toward the kinocilium), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Endolymph flow deflects the cupula toward the kinocilium), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar lesions classically produce:",
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
      "Unlike the keyed answer (Ataxia, dysmetria, and intention tremor without primary weakness), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ataxia, dysmetria, and intention tremor without primary weakness), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ataxia, dysmetria, and intention tremor without primary weakness), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The direct pathway of the basal ganglia (striatum → GPi/SNr) tends to:",
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
      "Unlike the keyed answer (Disinhibit thalamocortical neurons and facilitate movement), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Disinhibit thalamocortical neurons and facilitate movement), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Thalamus",
    question: "The ventral posteromedial (VPM) nucleus of thalamus primarily relays:",
    options: [

      "Facial somatosensory and gustatory information toward cortex",
      "Primary visual information from retina",
      "Cochlear frequency maps only",
      "Corticospinal tract motor commands",
    ],
    correct: 0,
    explanation: "VPM carries face S1 and taste-related inputs; VPL carries body somatosensation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Facial somatosensory and gustatory information toward cortex), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Facial somatosensory and gustatory information toward cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];
