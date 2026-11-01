// MCB80x additional fresh items — distinct stems from core/variant pools

const PART1_FRESH_POOL = [
  {
    topic: "Current Clamp",
    question: "During a current-clamp experiment, injecting steady hyperpolarizing current will typically:",
    options: [
      "Move V_m away from threshold",
      "Open voltage-gated Na⁺ channels",
      "Eliminate K⁺ leak conductance",
      "Block the Na⁺/K⁺ pump permanently"
    ],
    correct: 0,
    explanation: "Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Move V_m away from threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Move V_m away from threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Move V_m away from threshold), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin (TTX) applied to an axon prevents action potentials primarily by:",
    options: [
      "Blocking voltage-gated Na⁺ channels",
      "Blocking voltage-gated K⁺ channels (does not follow from the mechanism implied in the stem)",
      "Inhibiting the Na⁺/K⁺ ATPase (does not follow from the mechanism implied in the stem)",
      "Sealing gap junctions (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Blocking voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Blocking voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Blocking voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If extracellular K⁺ is raised fourfold while intracellular K⁺ is unchanged, E_K shifts approximately:",
    options: [
      "~37 mV toward 0 mV (less negative)",
      "~37 mV more negative",
      "To exactly +58 mV",
      "Not at all because K⁺ is impermeant"
    ],
    correct: 0,
    explanation: "The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0.",
    wrongExplanations: [
      "",
      "This choice (~37 mV more negative) does not match the keyed answer’s mechanism for Nernst Equation.",
      "This choice (To exactly +58 mV) does not match the keyed answer’s mechanism for Nernst Equation.",
      "Unlike the keyed answer (~37 mV toward 0 mV (less negative)), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Decreasing axon diameter (with myelin unchanged) generally:",
    options: [
      "Slows conduction by increasing internal axial resistance",
      "Speeds conduction by shortening λ (misapplies how active propagation uses local circuit currents)",
      "Eliminates the need for Na⁺ channels (misapplies how active propagation uses local circuit currents)",
      "Prevents passive spread entirely (misapplies how active propagation uses local circuit currents)"
    ],
    correct: 0,
    explanation: "Smaller diameter raises R_i, shortening λ and slowing active propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Slows conduction by increasing internal axial resistance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slows conduction by increasing internal axial resistance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slows conduction by increasing internal axial resistance), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If τ increases but λ is unchanged, subthreshold signals at the soma will:",
    options: [
      "Reach steady deflection more slowly but spread the same distance",
      "Spread farther along dendrites (misstates how R_m, C_m, or geometry set τ or λ)",
      "Always trigger full spikes (misstates how R_m, C_m, or geometry set τ or λ)",
      "No longer decay passively (misstates how R_m, C_m, or geometry set τ or λ)"
    ],
    correct: 0,
    explanation: "τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reach steady deflection more slowly but spread the same distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reach steady deflection more slowly but spread the same distance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reach steady deflection more slowly but spread the same distance), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetraethylammonium (TEA) is classically used to probe:",
    options: [
      "Voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels",
      "Nicotinic receptors only",
      "Glutamate transporters"
    ],
    correct: 0,
    explanation: "TEA blocks many voltage-gated K⁺ channels, prolonging repolarization when applied.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated K⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "This choice (Nicotinic receptors only) does not match the keyed answer’s mechanism for Pharmacology.",
      "This choice (Glutamate transporters) does not match the keyed answer’s mechanism for Pharmacology."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Ouabain inhibits the Na⁺/K⁺ ATPase. Over time this tends to:",
    options: [
      "Depolarize the cell as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize the cell instantly to E_K (ignores which ion dominates resting permeability)",
      "Block all chemical synapses (ignores which ion dominates resting permeability)",
      "Prevent action potentials by opening Cl⁻ channels (ignores which ion dominates resting permeability)"
    ],
    correct: 0,
    explanation: "Pump failure gradually collapses ion gradients, eventually depolarizing the cell.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarize the cell as Na⁺ accumulates and K⁺ is lost), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize the cell as Na⁺ accumulates and K⁺ is lost), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize the cell as Na⁺ accumulates and K⁺ is lost), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will:",
    options: [
      "Tend to hyperpolarize or stabilize V_m toward E_Cl",
      "Always depolarize to E_Na (ignores weighted permeabilities in the constant-field equation)",
      "Have no effect because Cl⁻ is not charged (ignores weighted permeabilities in the constant-field equation)",
      "Reverse the Na⁺/K⁺ pump (ignores weighted permeabilities in the constant-field equation)"
    ],
    correct: 0,
    explanation: "Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Tend to hyperpolarize or stabilize V_m toward E_Cl), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Tend to hyperpolarize or stabilize V_m toward E_Cl), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Tend to hyperpolarize or stabilize V_m toward E_Cl), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a second stimulus must be:",
    options: [
      "Stronger to reach threshold because many Na⁺ channels remain inactivated",
      "Weaker because K⁺ channels are closed (does not follow from the mechanism implied in the stem)",
      "Identical in strength always (does not follow from the mechanism implied in the stem)",
      "Applied only to dendrites (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Stronger to reach threshold because many Na⁺ channels remain inactivated), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Stronger to reach threshold because many Na⁺ channels remain inactivated), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Stronger to reach threshold because many Na⁺ channels remain inactivated), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Subthreshold EPSPs decay as they travel toward the soma mainly because of:",
    options: [
      "Passive cable properties (leak and axial resistance)",
      "Active regeneration at every micron (uses the wrong sign or driving force for ionic current)",
      "Myelin along dendrites (uses the wrong sign or driving force for ionic current)",
      "Exclusive Na⁺ pump activity (uses the wrong sign or driving force for ionic current)"
    ],
    correct: 0,
    explanation: "Dendrites lack dense voltage-gated Na⁺ for regeneration; passive decay dominates.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Passive cable properties (leak and axial resistance)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Passive cable properties (leak and axial resistance)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Passive cable properties (leak and axial resistance)), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "In voltage-clamp mode, the amplifier injects current to:",
    options: [
      "Hold membrane voltage at a commanded value",
      "Measure only resting potential without feedback",
      "Clamp extracellular K⁺ concentration",
      "Block all synaptic input pharmacologically"
    ],
    correct: 0,
    explanation: "Voltage-clamp feedback injects whatever current is needed to maintain the set V_m.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hold membrane voltage at a commanded value), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hold membrane voltage at a commanded value), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hold membrane voltage at a commanded value), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetics such as lidocaine block:",
    options: [
      "Voltage-gated Na⁺ channels in axons",
      "Metabotropic GABA<sub>B</sub> receptors (misapplies how active propagation uses local circuit currents)",
      "Photopigment isomerization (misapplies how active propagation uses local circuit currents)",
      "Basilar membrane motion (misapplies how active propagation uses local circuit currents)"
    ],
    correct: 0,
    explanation: "Local anesthetics use-dependent block of Na⁺ channels prevents pain fiber firing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels in axons), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels in axons), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels in axons), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane thickness (more lipid) without changing channel density would tend to:",
    options: [
      "Lower capacitance per unit area (C ∝ 1/d) and alter τ depending on R_m",
      "Increase capacitance per unit area and slow voltage responses",
      "Decrease τ to zero (misstates how R_m, C_m, or geometry set τ or λ)",
      "Make λ infinite (misstates how R_m, C_m, or geometry set τ or λ)"
    ],
    correct: 0,
    explanation: "In the parallel-plate model, thicker membrane (larger d) lowers C per unit area; τ = R_m C_m changes with both R_m and C_m.",
    wrongExplanations: [
      "",
      "Capacitance per unit area decreases with thickness, not increases.",
      "τ does not collapse to zero when thickness increases.",
      "Length constant depends on R_m and R_i, not membrane thickness alone."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The rheobase of a neuron is:",
    options: [
      "The minimum current amplitude needed to reach threshold",
      "The maximum firing rate in Hz (uses the wrong sign or driving force for ionic current)",
      "The equilibrium potential for Ca²⁺ (uses the wrong sign or driving force for ionic current)",
      "The synaptic delay at one synapse (uses the wrong sign or driving force for ionic current)"
    ],
    correct: 0,
    explanation: "Rheobase quantifies excitability: smallest sustained stimulus that elicits a response.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The minimum current amplitude needed to reach threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The minimum current amplitude needed to reach threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The minimum current amplitude needed to reach threshold), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Resting Potential",
    question: "If the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will:",
    options: [
      "Make V_m less negative (depolarized relative to E_K)",
      "Make V_m equal E_Na instantly (ignores which ion dominates resting permeability)",
      "Hyperpolarize below E_K always (ignores which ion dominates resting permeability)",
      "Stop all ion movement (ignores which ion dominates resting permeability)"
    ],
    correct: 0,
    explanation: "Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Make V_m less negative (depolarized relative to E_K)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Make V_m less negative (depolarized relative to E_K)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Make V_m less negative (depolarized relative to E_K)), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Action Potentials",
    question: "After a spike, slow after-hyperpolarization (AHP) is often mediated by:",
    options: [
      "Ca²⁺-activated K⁺ channels",
      "Opening of voltage-gated Na⁺ channels",
      "Closing of all leak channels",
      "Photoreceptor dark current"
    ],
    correct: 0,
    explanation: "Ca²⁺ entry during the spike can activate K_Ca channels, hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Ca²⁺-activated K⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ca²⁺-activated K⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An integrator neuron (high τ, high input resistance) is specialized to:",
    options: [
      "Sum many small inputs over time before firing",
      "Fire at maximal rate to every input (uses the wrong sign or driving force for ionic current)",
      "Conduct saltatory spikes in PNS only (uses the wrong sign or driving force for ionic current)",
      "Transduce odorants (uses the wrong sign or driving force for ionic current)"
    ],
    correct: 0,
    explanation: "Long τ and high R_in favor temporal summation of subthreshold inputs.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Sum many small inputs over time before firing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sum many small inputs over time before firing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sum many small inputs over time before firing), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "At a synapse, if only Na⁺ channels open transiently, V_m moves toward:",
    options: [
      "The sodium reversal potential (E_Na) while Na⁺ conductance dominates",
      "The potassium reversal potential (E_K) as if K⁺ leak were unchanged",
      "The chloride reversal potential (E_Cl) exclusively, ignoring cations",
      "0 mV regardless of whether concentration gradients are maintained"
    ],
    correct: 0,
    explanation: "Dominant Na⁺ permeability during the rising phase drives V_m toward E_Na.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The sodium reversal potential (E_Na) while Na⁺ conductance dominates), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The sodium reversal potential (E_Na) while Na⁺ conductance dominates), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The sodium reversal potential (E_Na) while Na⁺ conductance dominates), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling both R_m and R_i while keeping geometry fixed changes λ such that:",
    options: [
      "λ is unchanged (√(R_m/R_i) ratio preserved)",
      "λ doubles (misstates how R_m, C_m, or geometry set τ or λ)",
      "λ halves (misstates how R_m, C_m, or geometry set τ or λ)",
      "λ becomes zero (misstates how R_m, C_m, or geometry set τ or λ)"
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); scaling both by the same factor leaves λ the same.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (λ is unchanged (√(R_m/R_i) ratio preserved)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (λ is unchanged (√(R_m/R_i) ratio preserved)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (λ is unchanged (√(R_m/R_i) ratio preserved)), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Cooling an axon typically slows conduction because:",
    options: [
      "Channel kinetics and ion mobility slow",
      "Myelin is converted to cerebrospinal fluid",
      "Resting potential becomes +40 mV",
      "Na⁺/K⁺ pump reverses direction"
    ],
    correct: 0,
    explanation: "Lower temperature slows gating and diffusion, delaying spike propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Channel kinetics and ion mobility slow), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Channel kinetics and ion mobility slow), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Channel kinetics and ion mobility slow), this option misstates the mechanism or direction described in the stem."
    ]
  }
];

const PART2_FRESH_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "Presynaptic Ca²⁺ entry is critical because it:",
    options: [
      "Triggers synaptic vesicle fusion with the active zone membrane",
      "Directly opens postsynaptic AMPA receptors (mixes up presynaptic release with postsynaptic receptor logic)",
      "Hyperpolarizes the axon terminal to rest (mixes up presynaptic release with postsynaptic receptor logic)",
      "Blocks SNARE proteins permanently (mixes up presynaptic release with postsynaptic receptor logic)"
    ],
    correct: 0,
    explanation: "Ca²⁺ sensors on the release machinery couple depolarization to exocytosis.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Triggers synaptic vesicle fusion with the active zone membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers synaptic vesicle fusion with the active zone membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Triggers synaptic vesicle fusion with the active zone membrane) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "NMDA receptors show voltage-dependent Mg²⁺ block such that:",
    options: [
      "Depolarization relieves block and permits Ca²⁺ influx",
      "Hyperpolarization always opens NMDA maximally (does not follow from the mechanism implied in the stem)",
      "Mg²⁺ acts as a neurotransmitter at NMDA sites (does not follow from the mechanism implied in the stem)",
      "NMDA is purely metabotropic (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "At rest Mg²⁺ blocks the pore; depolarization expels Mg²⁺, enabling NMDA current.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarization relieves block and permits Ca²⁺ influx) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarization relieves block and permits Ca²⁺ influx) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarization relieves block and permits Ca²⁺ influx) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Spike-timing-dependent plasticity (STDP) often strengthens synapses when:",
    options: [
      "Presynaptic spikes precede postsynaptic spikes within a narrow window",
      "Postsynaptic spikes always precede presynaptic spikes by seconds",
      "Only GABA is released (does not follow from the mechanism implied in the stem)",
      "No Ca²⁺ enters the postsynaptic cell (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Classic Hebbian STDP favors causal order: presynaptic before postsynaptic firing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Presynaptic spikes precede postsynaptic spikes within a narrow window) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Presynaptic spikes precede postsynaptic spikes within a narrow window) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Presynaptic spikes precede postsynaptic spikes within a narrow window) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Autoreceptors on presynaptic terminals typically:",
    options: [
      "Reduce further neurotransmitter release when activated",
      "Increase release without limit (mixes up presynaptic release with postsynaptic receptor logic)",
      "Convert electrical to chemical synapses (mixes up presynaptic release with postsynaptic receptor logic)",
      "Generate action potentials in the terminal (mixes up presynaptic release with postsynaptic receptor logic)"
    ],
    correct: 0,
    explanation: "Negative feedback via autoreceptors (e.g., 5-HT1, D2) inhibits release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduce further neurotransmitter release when activated) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce further neurotransmitter release when activated) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce further neurotransmitter release when activated) matches the underlying mechanism."
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "At the neuromuscular junction, acetylcholine acts on:",
    options: [
      "Nicotinic ionotropic receptors on muscle endplate",
      "Muscarinic receptors only on muscle nuclei (describes the wrong synaptic structure or transmission step)",
      "NMDA receptors on motor neurons (describes the wrong synaptic structure or transmission step)",
      "Gap junction hemichannels (describes the wrong synaptic structure or transmission step)"
    ],
    correct: 0,
    explanation: "ACh nicotinic receptors depolarize the muscle endplate (end-plate potential).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Nicotinic ionotropic receptors on muscle endplate) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nicotinic ionotropic receptors on muscle endplate) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nicotinic ionotropic receptors on muscle endplate) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Perisomatic inhibition from basket cells primarily:",
    options: [
      "Controls timing and gain of pyramidal output",
      "Transduces light in the retina (does not follow from the mechanism implied in the stem)",
      "Maps sound frequency on basilar membrane (does not follow from the mechanism implied in the stem)",
      "Stores long-term declarative memories alone"
    ],
    correct: 0,
    explanation: "Perisomatic GABAergic input strongly regulates when principal cells fire.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Controls timing and gain of pyramidal output) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Controls timing and gain of pyramidal output) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Controls timing and gain of pyramidal output) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "D1-type dopamine receptors are generally:",
    options: [
      "Excitatory/modulatory via Gs-linked cAMP increases",
      "Always opening Cl⁻ pores directly (does not follow from the mechanism implied in the stem)",
      "Located only in photoreceptor outer segments (does not follow from the mechanism implied in the stem)",
      "Identical to nicotinic ACh receptors (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "D1 receptors typically couple to Gs, raising cAMP and modulating excitability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Excitatory/modulatory via Gs-linked cAMP increases) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Excitatory/modulatory via Gs-linked cAMP increases) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Excitatory/modulatory via Gs-linked cAMP increases) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Endocannabinoids often act as retrograde messengers to:",
    options: [
      "Suppress presynaptic release after strong postsynaptic activity",
      "Increase glutamate release unconditionally (mixes up presynaptic release with postsynaptic receptor logic)",
      "Open voltage-gated Na⁺ channels in glia only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Replace SNARE-mediated fusion (mixes up presynaptic release with postsynaptic receptor logic)"
    ],
    correct: 0,
    explanation: "Postsynaptic synthesis of endocannabinoids can feedback-inhibit presynaptic terminals.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic release after strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic release after strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic release after strong postsynaptic activity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "The readily releasable pool of vesicles is:",
    options: [
      "Docked/primed for fast release upon Ca²⁺ influx",
      "Located only in the nucleus",
      "Identical to neurotransmitter transporters",
      "Used exclusively for neuromodulator volume transmission"
    ],
    correct: 0,
    explanation: "Primed vesicles at the active zone supply fast synchronous release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Docked/primed for fast release upon Ca²⁺ influx) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Docked/primed for fast release upon Ca²⁺ influx) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Docked/primed for fast release upon Ca²⁺ influx) matches the underlying mechanism."
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Co-transmission refers to:",
    options: [
      "Release of multiple neuroactive substances from one neuron",
      "Only electrical coupling via gap junctions (describes the wrong synaptic structure or transmission step)",
      "A single receptor type for all transmitters (describes the wrong synaptic structure or transmission step)",
      "Propagation without vesicles (describes the wrong synaptic structure or transmission step)"
    ],
    correct: 0,
    explanation: "Neurons may release classic transmitters plus peptides or other modulators.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Release of multiple neuroactive substances from one neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release of multiple neuroactive substances from one neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release of multiple neuroactive substances from one neuron) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedback inhibition differs from feedforward inhibition because feedback:",
    options: [
      "Acts on an element earlier in the same pathway after it fired",
      "Only occurs in the olfactory bulb (does not follow from the mechanism implied in the stem)",
      "Requires gap junctions exclusively (does not follow from the mechanism implied in the stem)",
      "Prevents all sensory input (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Feedback loops regulate activity of cells that were just active (e.g., Renshaw, interneuron loops).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Acts on an element earlier in the same pathway after it fired) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Acts on an element earlier in the same pathway after it fired) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Acts on an element earlier in the same pathway after it fired) matches the underlying mechanism."
    ]
  },
  {
    topic: "Second Messengers",
    question: "Phospholipase C activation produces IP₃ and DAG; IP₃ primarily:",
    options: [
      "Releases Ca²⁺ from intracellular stores",
      "Opens nicotinic receptors (does not follow from the mechanism implied in the stem)",
      "Hydrolyzes cAMP (does not follow from the mechanism implied in the stem)",
      "Closes all K⁺ channels permanently (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "IP₃ binds ER receptors to mobilize stored Ca²⁺.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Releases Ca²⁺ from intracellular stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Releases Ca²⁺ from intracellular stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Releases Ca²⁺ from intracellular stores) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in cortex can be implemented by:",
    options: [
      "Inhibitory interneurons scaling responses relative to local activity",
      "Removing all Na⁺ channels (ignores how EPSPs/IPSPs sum in time or space)",
      "Increasing myelin on dendrites (ignores how EPSPs/IPSPs sum in time or space)",
      "Blocking only metabotropic receptors globally (ignores how EPSPs/IPSPs sum in time or space)"
    ],
    correct: 0,
    explanation: "Inhibition can divide or scale excitatory drive depending on circuit motif.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory interneurons scaling responses relative to local activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory interneurons scaling responses relative to local activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory interneurons scaling responses relative to local activity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "Allosteric modulators of GABA<sub>A</sub> receptors (e.g., benzodiazepines) typically:",
    options: [
      "Enhance GABA binding or channel opening probability",
      "Block GABA synthesis in presynaptic terminals (does not follow from the mechanism implied in the stem)",
      "Open NMDA receptors instead (does not follow from the mechanism implied in the stem)",
      "Prevent Cl⁻ flux entirely (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Positive allosteric modulators increase inhibitory effect of GABA without being the primary agonist.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Enhance GABA binding or channel opening probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhance GABA binding or channel opening probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhance GABA binding or channel opening probability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptotagmin acts as a Ca²⁺ sensor for exocytosis because it:",
    options: [
      "Binds Ca²⁺ and helps trigger SNARE-mediated fusion",
      "Pumps ACh into vesicles (mixes up presynaptic release with postsynaptic receptor logic)",
      "Is a glutamate receptor subunit (mixes up presynaptic release with postsynaptic receptor logic)",
      "Generates EPSPs in muscle (mixes up presynaptic release with postsynaptic receptor logic)"
    ],
    correct: 0,
    explanation: "Synaptotagmin couples Ca²⁺ rise to vesicle fusion machinery.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Binds Ca²⁺ and helps trigger SNARE-mediated fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Binds Ca²⁺ and helps trigger SNARE-mediated fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Binds Ca²⁺ and helps trigger SNARE-mediated fusion) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuropeptides compared to small-molecule transmitters often:",
    options: [
      "Diffuse more slowly over longer distances and modulate on slower timescales",
      "Are stored only in mitochondria (does not follow from the mechanism implied in the stem)",
      "Cannot affect ion channels indirectly (does not follow from the mechanism implied in the stem)",
      "Replace action potentials in axons (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Peptide co-transmitters/modulators act on broader spatial and temporal scales.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Diffuse more slowly over longer distances and modulate on slower timescales) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Diffuse more slowly over longer distances and modulate on slower timescales) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Diffuse more slowly over longer distances and modulate on slower timescales) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all dynamics in a recurrent inhibitory network can:",
    options: [
      "Sharpen selection of one active representation",
      "Eliminate all firing permanently",
      "Convert chemical synapses to electrical only",
      "Map odorants one-to-one to glomeruli without overlap"
    ],
    correct: 0,
    explanation: "Strong lateral/recurrent inhibition suppresses weaker competitors.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Sharpen selection of one active representation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sharpen selection of one active representation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sharpen selection of one active representation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "An IPSP arriving at the axon initial segment is especially effective because:",
    options: [
      "It directly opposes spike initiation where Na⁺ density is high",
      "It only affects photoreceptors (ignores how EPSPs/IPSPs sum in time or space)",
      "It blocks the Na⁺/K⁺ pump exclusively (ignores how EPSPs/IPSPs sum in time or space)",
      "It occurs only in the cerebellum (ignores how EPSPs/IPSPs sum in time or space)"
    ],
    correct: 0,
    explanation: "Initial segment is the spike trigger zone; inhibition there strongly gates output.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (It directly opposes spike initiation where Na⁺ density is high) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (It directly opposes spike initiation where Na⁺ density is high) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (It directly opposes spike initiation where Na⁺ density is high) matches the underlying mechanism."
    ]
  }
];

const PART3_FRESH_POOL = [
  {
    topic: "Visual System",
    question: "Magnocellular (M) retinal ganglion cells compared to parvocellular (P) cells typically:",
    options: [
      "Respond with transient/larger receptive fields and prefer motion/contrast",
      "Mediate fine color and high spatial acuity exclusively (assigns the deficit to the wrong visual pathway stage)",
      "Lack any axonal projection to the brain (assigns the deficit to the wrong visual pathway stage)",
      "Synapse only in the olfactory bulb (assigns the deficit to the wrong visual pathway stage)"
    ],
    correct: 0,
    explanation: "M cells favor temporal change and motion; P cells favor color and fine detail.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Respond with transient/larger receptive fields and prefer motion/contrast), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Respond with transient/larger receptive fields and prefer motion/contrast), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Respond with transient/larger receptive fields and prefer motion/contrast), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Visual System",
    question: "Orientation selectivity in primary visual cortex arises largely from:",
    options: [
      "Specific arrangements of thalamic inputs and intracortical inhibition",
      "Random wiring without structure (assigns the deficit to the wrong visual pathway stage)",
      "Cochlear tonotopy (assigns the deficit to the wrong visual pathway stage)",
      "Muscle spindle length encoding (assigns the deficit to the wrong visual pathway stage)"
    ],
    correct: 0,
    explanation: "Hubel–Wiesel models use oriented subfields and inhibition to build orientation tuning.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Specific arrangements of thalamic inputs and intracortical inhibition), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Specific arrangements of thalamic inputs and intracortical inhibition), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Executive Function",
    question: "Working memory tasks often engage prefrontal cortex because it:",
    options: [
      "Maintains and manipulates information during delay periods",
      "Transduces sound in the cochlea (does not follow from the mechanism implied in the stem)",
      "Generates cerebrospinal fluid only (does not follow from the mechanism implied in the stem)",
      "Is the sole source of action potentials in the CNS (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "PFC supports temporary maintenance/control of task-relevant information.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Maintains and manipulates information during delay periods), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintains and manipulates information during delay periods), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Cerebellum",
    question: "Long-term depression (LTD) at cerebellar parallel fiber–Purkinje synapses is often induced by:",
    options: [
      "Sustained low-frequency stimulation paired with climbing fiber input",
      "Single action potential only (does not follow from the mechanism implied in the stem)",
      "Blocking all Ca²⁺ signaling (does not follow from the mechanism implied in the stem)",
      "Eliminating GABA release globally (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Cerebellar LTD protocols use specific pairing of parallel and climbing fiber activity.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Sustained low-frequency stimulation paired with climbing fiber input), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sustained low-frequency stimulation paired with climbing fiber input), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sustained low-frequency stimulation paired with climbing fiber input), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar output helps correct movement errors by comparing:",
    options: [
      "Predicted vs. actual sensory consequences of actions",
      "Only olfactory input to glomeruli (maps the lesion to the wrong motor pathway or reflex)",
      "Photopigment bleaching rates (maps the lesion to the wrong motor pathway or reflex)",
      "Blood CO₂ without neural signals (maps the lesion to the wrong motor pathway or reflex)"
    ],
    correct: 0,
    explanation: "Forward models and sensory feedback guide cerebellar adjustment of motor commands.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Predicted vs. actual sensory consequences of actions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Predicted vs. actual sensory consequences of actions), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Amygdala activation during fear conditioning strongly associates:",
    options: [
      "Neutral cues with aversive outcomes",
      "Color opponency in V1 only (does not follow from the mechanism implied in the stem)",
      "Basilar membrane stiffness alone (does not follow from the mechanism implied in the stem)",
      "Na⁺ channel gating in axons (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Amygdala encodes emotional salience and learns CS–US associations.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Neutral cues with aversive outcomes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neutral cues with aversive outcomes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neutral cues with aversive outcomes), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Slow-wave sleep is thought to support memory consolidation partly by:",
    options: [
      "Replaying and transferring hippocampal patterns to cortex",
      "Eliminating all synapses formed during the day (does not follow from the mechanism implied in the stem)",
      "Blocking all thalamic input permanently (does not follow from the mechanism implied in the stem)",
      "Converting rods to cones (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Hippocampo-cortical replay during SWS supports systems consolidation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Replaying and transferring hippocampal patterns to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Replaying and transferring hippocampal patterns to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Replaying and transferring hippocampal patterns to cortex), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Language",
    question: "Broca's area damage classically produces:",
    options: [
      "Nonfluent speech with relatively preserved comprehension",
      "Complete loss of all language comprehension only (does not follow from the mechanism implied in the stem)",
      "Blindness in both visual fields (does not follow from the mechanism implied in the stem)",
      "Deafness without cochlear damage (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Broca's aphasia: effortful, agrammatic speech; comprehension often less impaired.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Nonfluent speech with relatively preserved comprehension), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Nonfluent speech with relatively preserved comprehension), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Place cells in hippocampus fire when:",
    options: [
      "The animal occupies specific locations in an environment",
      "Only during REM sleep without locomotion (does not follow from the mechanism implied in the stem)",
      "Odorants bind olfactory receptors (does not follow from the mechanism implied in the stem)",
      "Sound frequency exceeds 10 kHz only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Place fields encode spatial location; key evidence for cognitive maps.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The animal occupies specific locations in an environment), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The animal occupies specific locations in an environment), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The animal occupies specific locations in an environment), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Neuroimaging",
    question: "BOLD fMRI signal indirectly reflects:",
    options: [
      "Local changes in blood oxygenation coupled to neural activity",
      "Direct measurement of every synaptic vesicle fusion (does not follow from the mechanism implied in the stem)",
      "Static anatomy without physiology (does not follow from the mechanism implied in the stem)",
      "Only myelin thickness (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Neural activity drives blood flow and oxygenation changes detected as BOLD contrast.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Local changes in blood oxygenation coupled to neural activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Local changes in blood oxygenation coupled to neural activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Local changes in blood oxygenation coupled to neural activity), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neuron lesions (e.g., corticospinal) often cause:",
    options: [
      "Spasticity and hyperreflexia with weakness",
      "Immediate flaccid paralysis only without hyperreflexia always",
      "Loss of all sensation including touch always",
      "Permanent blindness"
    ],
    correct: 0,
    explanation: "UMN loss removes inhibitory control, producing spasticity; LMN lesions differ.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spasticity and hyperreflexia with weakness), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spasticity and hyperreflexia with weakness), this option misstates the mechanism or direction described in the stem.",
      "This choice (Permanent blindness) does not match the keyed answer’s mechanism for Motor Systems."
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Receptive field surround antagonism in vision helps:",
    options: [
      "Enhance edges and contrast via lateral inhibition",
      "Eliminate all rod function (does not follow from the mechanism implied in the stem)",
      "Map frequency in the cochlea (does not follow from the mechanism implied in the stem)",
      "Store declarative memories in amygdala only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Center-surround antagonism sharpens spatial contrast (e.g., retinal ganglion cells).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Enhance edges and contrast via lateral inhibition), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Enhance edges and contrast via lateral inhibition), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The thalamus functions largely as:",
    options: [
      "A gateway relaying and modulating sensory/motor information to cortex",
      "The primary site of cerebrospinal fluid production only",
      "Exclusive storage of long-term motor skills without relay",
      "The only region containing photoreceptors (localizes the function to the wrong brain region)"
    ],
    correct: 0,
    explanation: "Thalamic nuclei gate and relay streams to specific cortical areas.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A gateway relaying and modulating sensory/motor information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A gateway relaying and modulating sensory/motor information to cortex), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Anterograde amnesia after hippocampal damage means:",
    options: [
      "Inability to form new declarative memories after injury",
      "Loss of all procedural skills including riding a bike",
      "Complete elimination of sensation (does not follow from the mechanism implied in the stem)",
      "Permanent loss of childhood memories only always (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Hippocampus critical for encoding new episodic/declarative memories.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inability to form new declarative memories after injury), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inability to form new declarative memories after injury), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inability to form new declarative memories after injury), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Auditory System",
    question: "Phase locking in auditory nerve fibers supports:",
    options: [
      "Encoding low-frequency pitch via precise spike timing",
      "Color vision in the fovea (confuses cochlear place coding with an unrelated modality)",
      "Olfactory combinatorial coding only (confuses cochlear place coding with an unrelated modality)",
      "Muscle spindle stretch detection (confuses cochlear place coding with an unrelated modality)"
    ],
    correct: 0,
    explanation: "For low frequencies, timing of spikes to waveform phase carries pitch information.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Parkinson disease motor symptoms relate especially to loss of:",
    options: [
      "Dopaminergic neurons in substantia nigra pars compacta",
      "Photoreceptors in the retina (does not follow from the mechanism implied in the stem)",
      "All Purkinje cells instantly (does not follow from the mechanism implied in the stem)",
      "Olfactory sensory neurons exclusively (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia movement control (bradykinesia, rigidity).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Dopaminergic neurons in substantia nigra pars compacta), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Dopaminergic neurons in substantia nigra pars compacta), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis blockers after training impair:",
    options: [
      "Long-term but not early short-term memory in many paradigms",
      "Immediate reflexes only (does not follow from the mechanism implied in the stem)",
      "Dark current in rods only (does not follow from the mechanism implied in the stem)",
      "Saltatory conduction in myelinated axons (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Late LTP/LTM often requires gene expression and new proteins.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Long-term but not early short-term memory in many paradigms), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Long-term but not early short-term memory in many paradigms), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Long-term but not early short-term memory in many paradigms), this option misstates the mechanism or direction described in the stem."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood–brain barrier limits passage of:",
    options: [
      "Many large/polar molecules while allowing some regulated transport",
      "All ions including O₂ and CO₂ equally (localizes the function to the wrong brain region)",
      "Only neurotransmitters synthesized in muscle (localizes the function to the wrong brain region)",
      "Nothing; all substances cross freely (localizes the function to the wrong brain region)"
    ],
    correct: 0,
    explanation: "Tight junctions and transporters regulate CNS access; small gases still diffuse.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Many large/polar molecules while allowing some regulated transport), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Many large/polar molecules while allowing some regulated transport), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Many large/polar molecules while allowing some regulated transport), this option misstates the mechanism or direction described in the stem."
    ]
  }
];

const PART1_FRESH_POOL_2 = [
  {
    topic: "Goldman Equation",
    question: "If P_K >> P_Na at rest and P_Cl is negligible, increasing P_Na slightly will:",
    options: [
      "Depolarize V_m toward E_Na",
      "Hyperpolarize to E_K instantly",
      "Fix V_m at 0 mV always",
      "Stop the Na⁺/K⁺ pump"
    ],
    correct: 0,
    explanation: "Goldman weighting shifts V_m toward newly permeant ions.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarize V_m toward E_Na) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarize V_m toward E_Na) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarize V_m toward E_Na) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a cation with higher concentration inside than outside, E_ion is typically:",
    options: [
      "Negative (inside negative relative to outside at equilibrium)",
      "Always +60 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "Zero regardless of charge (contradicts the Nernst dependence on inside/outside concentrations)",
      "Equal to E_K always (contradicts the Nernst dependence on inside/outside concentrations)"
    ],
    correct: 0,
    explanation: "Inward concentration gradient for cations yields negative equilibrium potential.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Negative (inside negative relative to outside at equilibrium)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Negative (inside negative relative to outside at equilibrium)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Negative (inside negative relative to outside at equilibrium)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane leak conductance (lower R_m) while C_m is fixed:",
    options: [
      "Decreases τ and shortens λ",
      "Increases τ and λ without limit",
      "Blocks action potentials by opening Na channels",
      "Eliminates capacitance"
    ],
    correct: 0,
    explanation: "More leak lowers R_m, shortening time and length constants.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Decreases τ and shortens λ) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Decreases τ and shortens λ) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Decreases τ and shortens λ) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "The upstroke threshold is reached when:",
    options: [
      "Inward current exceeds outward current net positive feedback",
      "K⁺ channels fully close permanently (does not follow from the mechanism implied in the stem)",
      "Myelin is removed (does not follow from the mechanism implied in the stem)",
      "Pump rate doubles (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Regenerative Na⁺ current drives depolarization past threshold.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inward current exceeds outward current net positive feedback) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward current exceeds outward current net positive feedback) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward current exceeds outward current net positive feedback) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In unmyelinated axons, conduction velocity increases with:",
    options: [
      "Larger diameter (lower internal resistance)",
      "Smaller diameter always (misapplies how active propagation uses local circuit currents)",
      "Removing all Na⁺ channels (misapplies how active propagation uses local circuit currents)",
      "Cooling the axon (misapplies how active propagation uses local circuit currents)"
    ],
    correct: 0,
    explanation: "Wider axons have lower R_i, supporting faster propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Larger diameter (lower internal resistance)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Larger diameter (lower internal resistance)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Larger diameter (lower internal resistance)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An EPSP recorded at the soma from a distal dendrite is smaller than at the site of input because of:",
    options: [
      "Passive attenuation along dendrites",
      "Active amplification at every spine",
      "Saltatory conduction in dendrites",
      "Exclusive Cl- pumping"
    ],
    correct: 0,
    explanation: "Subthreshold signals decay with distance in passive cable.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Passive attenuation along dendrites) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive attenuation along dendrites) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive attenuation along dendrites) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ pump is electrogenic because it:",
    options: [
      "Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)",
      "Opens voltage-gated channels (ignores which ion dominates resting permeability)",
      "Is the sole determinant of V_m without leaks (ignores which ion dominates resting permeability)",
      "Only operates during spikes (ignores which ion dominates resting permeability)"
    ],
    correct: 0,
    explanation: "Net outward charge movement hyperpolarizes slightly beyond pure leak balance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Channel Gating",
    question: "Voltage-gated Na⁺ channel inactivation gates close during:",
    options: [
      "The peak/plateau of the spike",
      "Rest only",
      "Hyperpolarization below E_K only",
      "Synaptic vesicle fusion"
    ],
    correct: 0,
    explanation: "Inactivation during the spike produces the absolute refractory period.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The peak/plateau of the spike) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The peak/plateau of the spike) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The peak/plateau of the spike) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "TTX sensitivity indicates dependence on:",
    options: [
      "Voltage-gated Na⁺ channels",
      "Nicotinic ACh receptors (does not follow from the mechanism implied in the stem)",
      "Photopigment activation (does not follow from the mechanism implied in the stem)",
      "Gap junction connexins (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "TTX blocks Na⁺ channels and abolishes spikes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp dialyzes the interior of the cell, which can:",
    options: [
      "Wash out second messengers and dialyzable factors over time",
      "Permanently myelinate the axon (does not follow from the mechanism implied in the stem)",
      "Replace synaptic vesicles (does not follow from the mechanism implied in the stem)",
      "Measure only extracellular field potentials without access"
    ],
    correct: 0,
    explanation: "Dialysis can run down metabotropic signaling components.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Wash out second messengers and dialyzable factors over time) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Wash out second messengers and dialyzable factors over time) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Wash out second messengers and dialyzable factors over time) matches the underlying mechanism."
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If E_K = -80 mV and E_Na = +60 mV, V_m at rest near -65 mV implies:",
    options: [
      "Resting permeability is dominated by K⁺ with some Na⁺ leak",
      "Only Na⁺ channels are open (does not follow from the mechanism implied in the stem)",
      "V_m equals E_Na (does not follow from the mechanism implied in the stem)",
      "No ion gradients exist (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Rest lies closer to E_K when K⁺ permeability dominates.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Resting permeability is dominated by K⁺ with some Na⁺ leak) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resting permeability is dominated by K⁺ with some Na⁺ leak) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resting permeability is dominated by K⁺ with some Na⁺ leak) matches the underlying mechanism."
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "The Na⁺ channel selectivity filter favors Na⁺ over K⁺ partly because:",
    options: [
      "Smaller dehydrated Na⁺ fits the pore geometry better than K⁺",
      "Na⁺ is negatively charged (does not follow from the mechanism implied in the stem)",
      "K⁺ is impermeant in all channels (does not follow from the mechanism implied in the stem)",
      "Selectivity requires myelin (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Pore structure discriminates ion size/hydration shell.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Smaller dehydrated Na⁺ fits the pore geometry better than K⁺) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Smaller dehydrated Na⁺ fits the pore geometry better than K⁺) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Smaller dehydrated Na⁺ fits the pore geometry better than K⁺) matches the underlying mechanism."
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "At the ion equilibrium potential, net electrodiffusive flux of that ion is:",
    options: [
      "Zero",
      "Maximal outward always",
      "Equal to pump flux always",
      "Undefined"
    ],
    correct: 0,
    explanation: "Equilibrium: no net movement for that ion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism."
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "High density of voltage-gated Na⁺ at the AIS serves to:",
    options: [
      "Lower threshold for spike initiation and regulate backpropagation",
      "Transduce odorants (does not follow from the mechanism implied in the stem)",
      "Generate EPSPs only (does not follow from the mechanism implied in the stem)",
      "Produce myelin (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "AIS is the spike initiation zone in many neurons.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lower threshold for spike initiation and regulate backpropagation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lower threshold for spike initiation and regulate backpropagation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lower threshold for spike initiation and regulate backpropagation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Replacing extracellular Na⁺ with impermeant cation during voltage clamp typically:",
    options: [
      "Reduces inward Na⁺ current during depolarizing steps",
      "Increases Na⁺ current (does not follow from the mechanism implied in the stem)",
      "Blocks K⁺ leak only (does not follow from the mechanism implied in the stem)",
      "Hyperpolarizes without clamp (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Na⁺ removal abolishes INa.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduces inward Na⁺ current during depolarizing steps) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduces inward Na⁺ current during depolarizing steps) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduces inward Na⁺ current during depolarizing steps) matches the underlying mechanism."
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Passive dendrites act as:",
    options: [
      "Low-pass filters attenuating high-frequency inputs",
      "Perfect amplifiers of all frequencies (does not follow from the mechanism implied in the stem)",
      "Myelinated conductors only (does not follow from the mechanism implied in the stem)",
      "Photoreceptors (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "RC properties filter synaptic inputs temporally and spatially.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Low-pass filters attenuating high-frequency inputs) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Low-pass filters attenuating high-frequency inputs) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Low-pass filters attenuating high-frequency inputs) matches the underlying mechanism."
    ]
  },
  {
    topic: "Membrane Biophysics",
    question: "Specific membrane resistance R_m has units conceptually of:",
    options: [
      "Ohm·cm² (resistance times area)",
      "Farads per second only (does not follow from the mechanism implied in the stem)",
      "Meters per volt (does not follow from the mechanism implied in the stem)",
      "Spikes per second (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "R_m normalizes leak per unit area of membrane.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ohm·cm² (resistance times area)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ohm·cm² (resistance times area)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ohm·cm² (resistance times area)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterchannel block of delayed rectifier K⁺ would:",
    options: [
      "Prolong repolarization and broaden spikes",
      "Prevent Na⁺ influx (does not follow from the mechanism implied in the stem)",
      "Eliminate resting potential (does not follow from the mechanism implied in the stem)",
      "Stop synaptic release only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "K⁺ outward current repolarizes; block widens the spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Prolong repolarization and broaden spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolong repolarization and broaden spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolong repolarization and broaden spikes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "When an action potential reaches a cut axon terminal (open end), active propagation:",
    options: [
      "Fails at the discontinuity; the spike does not reflect back along the axon",
      "Reflects like a cable and travels backward with full amplitude",
      "Jumps to dendrites without voltage-gated channels (misapplies how active propagation uses local circuit currents)",
      "Continues indefinitely with increasing amplitude (misapplies how active propagation uses local circuit currents)"
    ],
    correct: 0,
    explanation: "Active regeneration needs continuous excitable membrane; an open cut stops propagation—there is no cable-style reflection of full spikes.",
    wrongExplanations: [
      "",
      "Myelinated/unmyelinated axons do not show optical-style reflection of action potentials at a cut end.",
      "Dendrites are not bypassed by spikes jumping across a cut.",
      "Amplitude is bounded by channel kinetics; propagation does not grow without bound at a terminal."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Current divided between capacitive and resistive paths at step onset reflects:",
    options: [
      "I_C = C dV/dt charging the membrane",
      "Only pump activity (uses the wrong sign or driving force for ionic current)",
      "Saltatory conduction (uses the wrong sign or driving force for ionic current)",
      "Glial phagocytosis (uses the wrong sign or driving force for ionic current)"
    ],
    correct: 0,
    explanation: "Early current charges C_m before steady leak dominates.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (I_C = C dV/dt charging the membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (I_C = C dV/dt charging the membrane) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (I_C = C dV/dt charging the membrane) matches the underlying mechanism."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Adding Cl- conductance when E_Cl is below V_m tends to:",
    options: [
      "Hyperpolarize or stabilize V_m toward E_Cl",
      "Depolarize to E_Na always (ignores weighted permeabilities in the constant-field equation)",
      "Have no effect (ignores weighted permeabilities in the constant-field equation)",
      "Open NMDA receptors (ignores weighted permeabilities in the constant-field equation)"
    ],
    correct: 0,
    explanation: "Conductance pulls V_m toward that ion's equilibrium.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m toward E_Cl) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m toward E_Cl) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m toward E_Cl) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Temperature increase in the Nernst relation (other factors fixed) changes E_ion magnitude:",
    options: [
      "Slightly (proportionally to absolute temperature in RT/F)",
      "Not at all (contradicts the Nernst dependence on inside/outside concentrations)",
      "Always to zero (contradicts the Nernst dependence on inside/outside concentrations)",
      "Only for anions (contradicts the Nernst dependence on inside/outside concentrations)"
    ],
    correct: 0,
    explanation: "RT/F scales with temperature.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slightly (proportionally to absolute temperature in RT/F)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slightly (proportionally to absolute temperature in RT/F)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slightly (proportionally to absolute temperature in RT/F)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Space clamp in experiments aims to:",
    options: [
      "Make V_m uniform along a long process for accurate voltage clamp",
      "Increase λ indefinitely (misstates how R_m, C_m, or geometry set τ or λ)",
      "Block synapses only (misstates how R_m, C_m, or geometry set τ or λ)",
      "Measure smell intensity (misstates how R_m, C_m, or geometry set τ or λ)"
    ],
    correct: 0,
    explanation: "Space clamp reduces axial voltage gradients.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Make V_m uniform along a long process for accurate voltage clamp) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Make V_m uniform along a long process for accurate voltage clamp) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Make V_m uniform along a long process for accurate voltage clamp) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "Lidocaine use-dependence means block is stronger when:",
    options: [
      "Channels open frequently during firing",
      "Cell is hyperpolarized at rest only (does not follow from the mechanism implied in the stem)",
      "Myelin is thick (does not follow from the mechanism implied in the stem)",
      "Only K⁺ pumps run (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Many local anesthetics prefer inactivated/open states.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Channels open frequently during firing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Channels open frequently during firing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Channels open frequently during firing) matches the underlying mechanism."
    ]
  },
  {
    topic: "Current Clamp",
    question: "Zero net current injection in current clamp at rest records:",
    options: [
      "Resting potential",
      "E_Na directly",
      "Synaptic cleft width",
      "Cochlear vibration"
    ],
    correct: 0,
    explanation: "No injected current → passive resting V_m.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Resting potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resting potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resting potential) matches the underlying mechanism."
    ]
  }
];

const PART2_FRESH_POOL_2 = [
  {
    topic: "Chemical Synapses",
    question: "Synaptic delay (≈0.5–2 ms) is largely due to:",
    options: [
      "Ca2+ influx and vesicle fusion kinetics",
      "Action potential travel in myelin only",
      "DNA transcription (describes the wrong synaptic structure or transmission step)",
      "Photopigment recovery (describes the wrong synaptic structure or transmission step)"
    ],
    correct: 0,
    explanation: "Release machinery adds milliseconds after presynaptic spike arrival.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ca2+ influx and vesicle fusion kinetics) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca2+ influx and vesicle fusion kinetics) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca2+ influx and vesicle fusion kinetics) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Quantal analysis estimates release probability from:",
    options: [
      "Distribution of EPSP amplitudes (multiples of mEPSP size)",
      "Muscle stretch (mixes up presynaptic release with postsynaptic receptor logic)",
      "Retinal dark current (mixes up presynaptic release with postsynaptic receptor logic)",
      "Cochlear place map (mixes up presynaptic release with postsynaptic receptor logic)"
    ],
    correct: 0,
    explanation: "Quantal content reflects number of vesicles released.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Distribution of EPSP amplitudes (multiples of mEPSP size)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Distribution of EPSP amplitudes (multiples of mEPSP size)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Distribution of EPSP amplitudes (multiples of mEPSP size)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors at many central synapses are permeable to:",
    options: [
      "Na+ and K+ (non-selective cation)",
      "Cl- only (does not follow from the mechanism implied in the stem)",
      "Ca2+ exclusively always (does not follow from the mechanism implied in the stem)",
      "Large peptides (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "AMPA typically carries depolarizing mixed cation current.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Na+ and K+ (non-selective cation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Na+ and K+ (non-selective cation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Na+ and K+ (non-selective cation)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>A</sub> receptors are:",
    options: [
      "Ligand-gated Cl- channels (usually inhibitory)",
      "Metabotropic only (does not follow from the mechanism implied in the stem)",
      "Voltage-gated Na channels (does not follow from the mechanism implied in the stem)",
      "Photoreceptors (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "GABA<sub>A</sub> is ionotropic Cl- conductance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated Cl- channels (usually inhibitory)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated Cl- channels (usually inhibitory)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated Cl- channels (usually inhibitory)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP produced by adenylyl cyclase can:",
    options: [
      "Activate PKA to phosphorylate channels and enzymes",
      "Directly open nicotinic receptors (does not follow from the mechanism implied in the stem)",
      "Replace SNARE proteins (does not follow from the mechanism implied in the stem)",
      "Measure muscle length (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "PKA is a major cAMP effector in neurons.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Activate PKA to phosphorylate channels and enzymes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activate PKA to phosphorylate channels and enzymes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activate PKA to phosphorylate channels and enzymes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection (e.g., NMDA) requires:",
    options: [
      "Depolarization plus glutamate binding to relieve Mg2+ block",
      "Only hyperpolarization (ignores how EPSPs/IPSPs sum in time or space)",
      "Only GABA (ignores how EPSPs/IPSPs sum in time or space)",
      "Odor binding (ignores how EPSPs/IPSPs sum in time or space)"
    ],
    correct: 0,
    explanation: "NMDA acts as a Hebbian coincidence detector.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarization plus glutamate binding to relieve Mg2+ block) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarization plus glutamate binding to relieve Mg2+ block) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarization plus glutamate binding to relieve Mg2+ block) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition can:",
    options: [
      "Limit spread of excitation and sharpen timing",
      "Eliminate all inhibition (does not follow from the mechanism implied in the stem)",
      "Replace electrical synapses globally (does not follow from the mechanism implied in the stem)",
      "Map frequency on basilar membrane (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "FF inhibition constrains excitatory recruitment.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Limit spread of excitation and sharpen timing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Limit spread of excitation and sharpen timing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Limit spread of excitation and sharpen timing) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical coupling allows:",
    options: [
      "Rapid synchrony and shared subthreshold signals",
      "Vesicle fusion without Ca2+ (does not follow from the mechanism implied in the stem)",
      "Phototransduction (does not follow from the mechanism implied in the stem)",
      "Only retrograde peptide signaling (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Gap junctions pass ions and small molecules bidirectionally.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Rapid synchrony and shared subthreshold signals) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Rapid synchrony and shared subthreshold signals) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Rapid synchrony and shared subthreshold signals) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Vesicular transporters load:",
    options: [
      "Neurotransmitter into vesicles against gradient (using H+ gradient)",
      "Na+ into nucleus (does not follow from the mechanism implied in the stem)",
      "Rhodopsin into spines (does not follow from the mechanism implied in the stem)",
      "Myelin proteins into cleft (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "VGLUT/VGAT/VMAT use proton exchange to fill vesicles.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter into vesicles against gradient (using H+ gradient)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter into vesicles against gradient (using H+ gradient)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter into vesicles against gradient (using H+ gradient)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after high-frequency trains often reflects:",
    options: [
      "Depletion of readily releasable vesicles",
      "Permanent loss of DNA (does not follow from the mechanism implied in the stem)",
      "Myelin thinning (does not follow from the mechanism implied in the stem)",
      "Rod-cone switch (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Vesicle pool depletion reduces release probability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depletion of readily releasable vesicles) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of readily releasable vesicles) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of readily releasable vesicles) matches the underlying mechanism."
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "NMDA receptor-dependent LTP induction classically requires:",
    options: [
      "Postsynaptic depolarization sufficient to unblock NMDA and Ca2+ entry",
      "Only presynaptic GABA (states the wrong induction requirement for LTP/LTD)",
      "Only hyperpolarization (states the wrong induction requirement for LTP/LTD)",
      "Elimination of AMPA (states the wrong induction requirement for LTP/LTD)"
    ],
    correct: 0,
    explanation: "Ca2+ through NMDA triggers LTP cascades.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic depolarization sufficient to unblock NMDA and Ca2+ entry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic depolarization sufficient to unblock NMDA and Ca2+ entry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic depolarization sufficient to unblock NMDA and Ca2+ entry) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Homosynaptic LTD can be induced by:",
    options: [
      "Prolonged low-frequency stimulation at the synapse",
      "Single photon absorption (does not follow from the mechanism implied in the stem)",
      "Muscle spindle stretch only (does not follow from the mechanism implied in the stem)",
      "Opening all Na channels (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Low-frequency pairing protocols weaken synapses.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Prolonged low-frequency stimulation at the synapse) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolonged low-frequency stimulation at the synapse) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolonged low-frequency stimulation at the synapse) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "End-plate potential is:",
    options: [
      "Graded depolarization from ACh; large enough to trigger muscle AP",
      "Always hyperpolarizing (does not follow from the mechanism implied in the stem)",
      "A photoreceptor signal (does not follow from the mechanism implied in the stem)",
      "Purely electrical gap junction (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "NMJ EPP typically exceeds muscle threshold.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Graded depolarization from ACh; large enough to trigger muscle AP) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Graded depolarization from ACh; large enough to trigger muscle AP) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Graded depolarization from ACh; large enough to trigger muscle AP) matches the underlying mechanism."
    ]
  },
  {
    topic: "Co-transmission",
    question: "A neuron releasing both glutamate and neuropeptide Y will:",
    options: [
      "Act on fast ionotropic and slower modulatory targets",
      "Only signal via gap junctions (does not follow from the mechanism implied in the stem)",
      "Only affect retina (does not follow from the mechanism implied in the stem)",
      "Cannot modulate circuits (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Co-release spans fast and slow signaling timescales.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Act on fast ionotropic and slower modulatory targets) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Act on fast ionotropic and slower modulatory targets) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Act on fast ionotropic and slower modulatory targets) matches the underlying mechanism."
    ]
  },
  {
    topic: "Drug Effects",
    question: "Benzodiazepines enhance GABAergic inhibition by:",
    options: [
      "Positive allosteric modulation of GABA<sub>A</sub> receptors",
      "Blocking glutamate synthesis (does not follow from the mechanism implied in the stem)",
      "Opening NMDA maximally (does not follow from the mechanism implied in the stem)",
      "Destroying synaptic vesicles (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "BZDs increase Cl- flux probability when GABA binds.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Positive allosteric modulation of GABA<sub>A</sub> receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Positive allosteric modulation of GABA<sub>A</sub> receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Positive allosteric modulation of GABA<sub>A</sub> receptors) matches the underlying mechanism."
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Nitric oxide (NO) as a retrograde messenger:",
    options: [
      "Diffuses from postsynaptic sites to modulate presynaptic release",
      "Is stored only in muscle spindles (does not follow from the mechanism implied in the stem)",
      "Requires myelin (does not follow from the mechanism implied in the stem)",
      "Is the primary photopigment (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "NO can act as a short-range retrograde signal.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Diffuses from postsynaptic sites to modulate presynaptic release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Diffuses from postsynaptic sites to modulate presynaptic release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Diffuses from postsynaptic sites to modulate presynaptic release) matches the underlying mechanism."
    ]
  },
  {
    topic: "Excitatory-Inhibitory Balance",
    question: "E/I imbalance in cortex is implicated in:",
    options: [
      "Epilepsy and some psychiatric phenotypes",
      "Only cochlear tuning (does not follow from the mechanism implied in the stem)",
      "Only rod dark current (does not follow from the mechanism implied in the stem)",
      "Elimination of all LTP (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Too much excitation or too little inhibition destabilizes networks.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Epilepsy and some psychiatric phenotypes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Epilepsy and some psychiatric phenotypes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Epilepsy and some psychiatric phenotypes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Active zone proteins organize:",
    options: [
      "Vesicle docking and Ca2+ channel coupling for release",
      "Photoreceptor disks (does not follow from the mechanism implied in the stem)",
      "Cochlear basilar stiffness (does not follow from the mechanism implied in the stem)",
      "Blood-brain tight junctions only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Active zone scaffolds exocytosis machinery.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca2+ channel coupling for release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca2+ channel coupling for release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca2+ channel coupling for release) matches the underlying mechanism."
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "Acetylcholine via muscarinic receptors often:",
    options: [
      "Slows K+ channels or alters cAMP, changing excitability",
      "Directly opens photopigment (does not follow from the mechanism implied in the stem)",
      "Forms the blood-brain barrier (does not follow from the mechanism implied in the stem)",
      "Is identical to NMJ nicotinic only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Muscarinic signaling modulates ion channels via G proteins.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slows K+ channels or alters cAMP, changing excitability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slows K+ channels or alters cAMP, changing excitability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slows K+ channels or alters cAMP, changing excitability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides typically differ from small transmitters by:",
    options: [
      "Slower synthesis/release and longer-range/modulatory actions",
      "Being stored only in mitochondria (does not follow from the mechanism implied in the stem)",
      "Opening voltage-gated Na directly always (does not follow from the mechanism implied in the stem)",
      "Existing only in retina (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Peptides modulate on slower timescales.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slower synthesis/release and longer-range/modulatory actions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slower synthesis/release and longer-range/modulatory actions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slower synthesis/release and longer-range/modulatory actions) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors reduces:",
    options: [
      "Response despite agonist still bound",
      "Resting K+ leak only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Myelin thickness (mixes up presynaptic release with postsynaptic receptor logic)",
      "Cochlear amplification only (mixes up presynaptic release with postsynaptic receptor logic)"
    ],
    correct: 0,
    explanation: "Conformational desensitization lowers current during prolonged agonist.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Response despite agonist still bound) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Response despite agonist still bound) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Response despite agonist still bound) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Recurrent excitatory networks can:",
    options: [
      "Amplify activity but risk runaway unless balanced by inhibition",
      "Never show oscillations (does not follow from the mechanism implied in the stem)",
      "Only process olfaction (does not follow from the mechanism implied in the stem)",
      "Eliminate action potentials (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Recurrent E loops need I for stability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Amplify activity but risk runaway unless balanced by inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Amplify activity but risk runaway unless balanced by inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Amplify activity but risk runaway unless balanced by inhibition) matches the underlying mechanism."
    ]
  }
];

const PART3_FRESH_POOL_2 = [
  {
    topic: "Phototransduction",
    question: "Photoreceptors hyperpolarize to light because:",
    options: [
      "cGMP drops and cGMP-gated channels close",
      "Na+ channels open maximally (does not follow from the mechanism implied in the stem)",
      "Myelin is added (does not follow from the mechanism implied in the stem)",
      "Tip links break permanently (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Light reduces cGMP, closing channels and hyperpolarizing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (cGMP drops and cGMP-gated channels close) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (cGMP drops and cGMP-gated channels close) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (cGMP drops and cGMP-gated channels close) matches the underlying mechanism."
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "OFF bipolar cells respond to light with:",
    options: [
      "Hyperpolarization (sign-conserving OFF pathway in classic wiring)",
      "Always depolarization like ON cells (does not follow from the mechanism implied in the stem)",
      "Muscle contraction (does not follow from the mechanism implied in the stem)",
      "Cochlear phase lock only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "OFF pathway signals light offset depending on wiring; MCB80x contrasts ON/OFF.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarization (sign-conserving OFF pathway in classic wiring)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarization (sign-conserving OFF pathway in classic wiring)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarization (sign-conserving OFF pathway in classic wiring)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Ocular dominance columns reflect:",
    options: [
      "Binocular input segregation that can be shaped by experience",
      "Random wiring without use (does not follow from the mechanism implied in the stem)",
      "Only olfactory maps (does not follow from the mechanism implied in the stem)",
      "Saltatory conduction maps (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Early visual experience sculpts dominance patterns.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Binocular input segregation that can be shaped by experience) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Binocular input segregation that can be shaped by experience) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Binocular input segregation that can be shaped by experience) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Interaural time differences are useful for:",
    options: [
      "Localizing low-frequency sounds",
      "Color vision (does not follow from the mechanism implied in the stem)",
      "Taste umami (does not follow from the mechanism implied in the stem)",
      "Proprioception only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "ITD coding supports azimuth for low frequencies.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Localizing low-frequency sounds) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Localizing low-frequency sounds) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Localizing low-frequency sounds) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells in cochlea contribute to:",
    options: [
      "Active amplification (cochlear amplifier)",
      "Phototransduction (confuses cochlear place coding with an unrelated modality)",
      "NMJ transmission (confuses cochlear place coding with an unrelated modality)",
      "Glomerular odor maps (confuses cochlear place coding with an unrelated modality)"
    ],
    correct: 0,
    explanation: "OHC electromotility boosts sensitivity and tuning.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Active amplification (cochlear amplifier)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Active amplification (cochlear amplifier)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Active amplification (cochlear amplifier)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Vestibular System",
    question: "Otolith organs detect:",
    options: [
      "Linear acceleration and head tilt (gravity)",
      "Only angular acceleration (does not follow from the mechanism implied in the stem)",
      "Odor concentration (does not follow from the mechanism implied in the stem)",
      "Retinal illuminance only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Utricle/saccule sense linear forces including gravity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Linear acceleration and head tilt (gravity)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Linear acceleration and head tilt (gravity)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Linear acceleration and head tilt (gravity)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "Dorsal column–medial lemniscus pathway carries:",
    options: [
      "Fine touch, vibration, proprioception to cortex",
      "Only pain via spinothalamic (does not follow from the mechanism implied in the stem)",
      "Only smell (does not follow from the mechanism implied in the stem)",
      "Only auditory pitch (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "DCML is the discriminative touch pathway.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fine touch, vibration, proprioception to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fine touch, vibration, proprioception to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fine touch, vibration, proprioception to cortex) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pain",
    question: "Spinothalamic tract carries:",
    options: [
      "Pain and temperature to thalamus",
      "Only proprioception (does not follow from the mechanism implied in the stem)",
      "Only vision (does not follow from the mechanism implied in the stem)",
      "Only NMJ signals (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Anterolateral system for nociception and thermal sense.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature to thalamus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature to thalamus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature to thalamus) matches the underlying mechanism."
    ]
  },
  {
    topic: "Olfaction",
    question: "Odor identity is encoded by:",
    options: [
      "Combinatorial receptor activation across glomeruli",
      "Single receptor for all odors (does not follow from the mechanism implied in the stem)",
      "Cochlear tonotopy (does not follow from the mechanism implied in the stem)",
      "Muscle spindle length only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Combinatorial coding maps complex odor space.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Combinatorial receptor activation across glomeruli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Combinatorial receptor activation across glomeruli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Combinatorial receptor activation across glomeruli) matches the underlying mechanism."
    ]
  },
  {
    topic: "Taste",
    question: "Sour taste often involves:",
    options: [
      "Acid sensing (H+ permeation or acid-sensitive channels)",
      "Rhodopsin activation (does not follow from the mechanism implied in the stem)",
      "Hair cell tip links (does not follow from the mechanism implied in the stem)",
      "Na+ channel block only (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Low pH is detected by specialized taste mechanisms.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Acid sensing (H+ permeation or acid-sensitive channels)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Acid sensing (H+ permeation or acid-sensitive channels)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Acid sensing (H+ permeation or acid-sensitive channels)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate primarily in:",
    options: [
      "Motor cortex and brainstem descending tracts",
      "Photoreceptors (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory bulb mitral cells only (maps the lesion to the wrong motor pathway or reflex)",
      "Cochlear inner hair cells (maps the lesion to the wrong motor pathway or reflex)"
    ],
    correct: 0,
    explanation: "UMNs project to spinal/brainstem motor neurons.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Motor cortex and brainstem descending tracts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Motor cortex and brainstem descending tracts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Motor cortex and brainstem descending tracts) matches the underlying mechanism."
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "Direct pathway in basal ganglia tends to:",
    options: [
      "Facilitate movement by disinhibiting thalamus",
      "Stop all movement permanently always (does not follow from the mechanism implied in the stem)",
      "Transduce sound (does not follow from the mechanism implied in the stem)",
      "Generate dark current (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Direct pathway (simplified) supports action selection.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Facilitate movement by disinhibiting thalamus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Facilitate movement by disinhibiting thalamus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Facilitate movement by disinhibiting thalamus) matches the underlying mechanism."
    ]
  },
  {
    topic: "Cerebellum",
    question: "Climbing fibers to Purkinje cells often signal:",
    options: [
      "Error or unexpected events in motor learning",
      "Color opponency (does not follow from the mechanism implied in the stem)",
      "Odor identity alone (does not follow from the mechanism implied in the stem)",
      "Only passive membrane properties (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Climbing fiber input is linked to error teaching signals.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Error or unexpected events in motor learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Error or unexpected events in motor learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Error or unexpected events in motor learning) matches the underlying mechanism."
    ]
  },
  {
    topic: "Hippocampus",
    question: "Pattern separation in dentate gyrus helps:",
    options: [
      "Distinguish similar memories/contexts",
      "Transduce photons (does not follow from the mechanism implied in the stem)",
      "Amplify cochlea only (does not follow from the mechanism implied in the stem)",
      "Block all synapses (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "DG/CAS networks reduce overlap of similar inputs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Distinguish similar memories/contexts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Distinguish similar memories/contexts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Distinguish similar memories/contexts) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Systems consolidation proposes:",
    options: [
      "Gradual transfer of memory traces from hippocampus to cortex",
      "Instant permanent hippocampal-only storage (does not follow from the mechanism implied in the stem)",
      "No role for sleep (does not follow from the mechanism implied in the stem)",
      "Only procedural memory exists (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Memories become less hippocampus-dependent over time.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Gradual transfer of memory traces from hippocampus to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Gradual transfer of memory traces from hippocampus to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Gradual transfer of memory traces from hippocampus to cortex) matches the underlying mechanism."
    ]
  },
  {
    topic: "Language",
    question: "Wernicke's area damage often impairs:",
    options: [
      "Language comprehension while speech may remain fluent but empty",
      "Only motor output of speech always (does not follow from the mechanism implied in the stem)",
      "Vision in both fields (does not follow from the mechanism implied in the stem)",
      "Cochlear tuning (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Receptive language deficits characterize Wernicke-type aphasia.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Language comprehension while speech may remain fluent but empty) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Language comprehension while speech may remain fluent but empty) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Language comprehension while speech may remain fluent but empty) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "CSF is produced mainly by:",
    options: [
      "Choroid plexus epithelium",
      "Photoreceptor outer segments",
      "NMJ",
      "Glomeruli"
    ],
    correct: 0,
    explanation: "Choroid plexus secretes CSF into ventricles.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Choroid plexus epithelium) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Choroid plexus epithelium) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Choroid plexus epithelium) matches the underlying mechanism."
    ]
  },
  {
    topic: "Thalamus",
    question: "Thalamic reticular nucleus provides:",
    options: [
      "Inhibitory gating of thalamocortical relay",
      "Excitatory drive to photoreceptors (does not follow from the mechanism implied in the stem)",
      "Cochlear amplification (does not follow from the mechanism implied in the stem)",
      "Myelin to all axons (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "TRN inhibits relay cells, modulating thalamic gate.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory gating of thalamocortical relay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory gating of thalamocortical relay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory gating of thalamocortical relay) matches the underlying mechanism."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Multiple sclerosis symptoms relate to:",
    options: [
      "Demyelination slowing/failing conduction in CNS pathways",
      "Only peripheral NMJ block (does not follow from the mechanism implied in the stem)",
      "Loss of taste buds only (does not follow from the mechanism implied in the stem)",
      "Purely retinal disease (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "CNS demyelination disrupts timing and strength of signals.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Demyelination slowing/failing conduction in CNS pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Demyelination slowing/failing conduction in CNS pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Demyelination slowing/failing conduction in CNS pathways) matches the underlying mechanism."
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Sensory adaptation reduces:",
    options: [
      "Response to maintained constant stimuli",
      "All pain permanently (does not follow from the mechanism implied in the stem)",
      "Need for receptors (does not follow from the mechanism implied in the stem)",
      "Number of neurons in cortex (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Adaptation emphasizes changes over steady state.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Response to maintained constant stimuli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Response to maintained constant stimuli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Response to maintained constant stimuli) matches the underlying mechanism."
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Hippocampal sharp-wave ripples occur often during:",
    options: [
      "Slow-wave sleep and quiet rest, supporting replay",
      "Only deep anesthesia without neural activity (does not follow from the mechanism implied in the stem)",
      "Only phototransduction (does not follow from the mechanism implied in the stem)",
      "Only NMJ release (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Ripples accompany replay linked to consolidation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slow-wave sleep and quiet rest, supporting replay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slow-wave sleep and quiet rest, supporting replay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slow-wave sleep and quiet rest, supporting replay) matches the underlying mechanism."
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Flashbulb memories illustrate:",
    options: [
      "Vivid episodic memories for emotionally salient events",
      "Procedural skill learning only (does not follow from the mechanism implied in the stem)",
      "Cochlear phase locking (does not follow from the mechanism implied in the stem)",
      "Passive membrane τ (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "Emotional arousal can enhance declarative memory vividness.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Vivid episodic memories for emotionally salient events) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vivid episodic memories for emotionally salient events) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vivid episodic memories for emotionally salient events) matches the underlying mechanism."
    ]
  },
  {
    topic: "Executive Function",
    question: "Task switching costs reflect:",
    options: [
      "Executive control overhead when changing rules/context",
      "Purely sensory adaptation (does not follow from the mechanism implied in the stem)",
      "Myelin thickness only (does not follow from the mechanism implied in the stem)",
      "Rod-cone ratio (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "PFC-mediated control slows performance when switching tasks.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Executive control overhead when changing rules/context) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Executive control overhead when changing rules/context) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Executive control overhead when changing rules/context) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroimaging",
    question: "EEG compared to fMRI has:",
    options: [
      "Higher temporal resolution but poorer spatial localization generally",
      "Perfect single-cell spatial resolution always (does not follow from the mechanism implied in the stem)",
      "No relation to neural activity (does not follow from the mechanism implied in the stem)",
      "Only measures blood flow (does not follow from the mechanism implied in the stem)"
    ],
    correct: 0,
    explanation: "EEG tracks summed electrical activity with ms timing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Higher temporal resolution but poorer spatial localization generally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher temporal resolution but poorer spatial localization generally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher temporal resolution but poorer spatial localization generally) matches the underlying mechanism."
    ]
  }
];
