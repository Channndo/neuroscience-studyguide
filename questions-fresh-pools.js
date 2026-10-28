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
      "This option is inconsistent with the stem; the keyed answer (Move V_m away from threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move V_m away from threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move V_m away from threshold) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin (TTX) applied to an axon prevents action potentials primarily by:",
    options: [
      "Blocking voltage-gated Na⁺ channels",
      "Blocking voltage-gated K⁺ channels",
      "Inhibiting the Na⁺/K⁺ ATPase",
      "Sealing gap junctions"
    ],
    correct: 0,
    explanation: "TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Blocking voltage-gated Na⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Blocking voltage-gated Na⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Blocking voltage-gated Na⁺ channels) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (~37 mV toward 0 mV (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~37 mV toward 0 mV (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~37 mV toward 0 mV (less negative)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Decreasing axon diameter (with myelin unchanged) generally:",
    options: [
      "Slows conduction by increasing internal axial resistance",
      "Speeds conduction by shortening λ",
      "Eliminates the need for Na⁺ channels",
      "Prevents passive spread entirely"
    ],
    correct: 0,
    explanation: "Smaller diameter raises R_i, shortening λ and slowing active propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slows conduction by increasing internal axial resistance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slows conduction by increasing internal axial resistance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slows conduction by increasing internal axial resistance) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If τ increases but λ is unchanged, subthreshold signals at the soma will:",
    options: [
      "Reach steady deflection more slowly but spread the same distance",
      "Spread farther along dendrites",
      "Always trigger full spikes",
      "No longer decay passively"
    ],
    correct: 0,
    explanation: "τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reach steady deflection more slowly but spread the same distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reach steady deflection more slowly but spread the same distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reach steady deflection more slowly but spread the same distance) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated K⁺ channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Ouabain inhibits the Na⁺/K⁺ ATPase. Over time this tends to:",
    options: [
      "Depolarize the cell as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize the cell instantly to E_K",
      "Block all chemical synapses",
      "Prevent action potentials by opening Cl⁻ channels"
    ],
    correct: 0,
    explanation: "Pump failure gradually collapses ion gradients, eventually depolarizing the cell.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarize the cell as Na⁺ accumulates and K⁺ is lost) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarize the cell as Na⁺ accumulates and K⁺ is lost) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarize the cell as Na⁺ accumulates and K⁺ is lost) matches the underlying mechanism."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will:",
    options: [
      "Tend to hyperpolarize or stabilize V_m toward E_Cl",
      "Always depolarize to E_Na",
      "Have no effect because Cl⁻ is not charged",
      "Reverse the Na⁺/K⁺ pump"
    ],
    correct: 0,
    explanation: "Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Tend to hyperpolarize or stabilize V_m toward E_Cl) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Tend to hyperpolarize or stabilize V_m toward E_Cl) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Tend to hyperpolarize or stabilize V_m toward E_Cl) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a second stimulus must be:",
    options: [
      "Stronger to reach threshold because many Na⁺ channels remain inactivated",
      "Weaker because K⁺ channels are closed",
      "Identical in strength always",
      "Applied only to dendrites"
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Stronger to reach threshold because many Na⁺ channels remain inactivated) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Stronger to reach threshold because many Na⁺ channels remain inactivated) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Stronger to reach threshold because many Na⁺ channels remain inactivated) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Subthreshold EPSPs decay as they travel toward the soma mainly because of:",
    options: [
      "Passive cable properties (leak and axial resistance)",
      "Active regeneration at every micron",
      "Myelin along dendrites",
      "Exclusive Na⁺ pump activity"
    ],
    correct: 0,
    explanation: "Dendrites lack dense voltage-gated Na⁺ for regeneration; passive decay dominates.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Passive cable properties (leak and axial resistance)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive cable properties (leak and axial resistance)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive cable properties (leak and axial resistance)) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage at a commanded value) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage at a commanded value) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage at a commanded value) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetics such as lidocaine block:",
    options: [
      "Voltage-gated Na⁺ channels in axons",
      "Metabotropic GABA_B receptors",
      "Photopigment isomerization",
      "Basilar membrane motion"
    ],
    correct: 0,
    explanation: "Local anesthetics use-dependent block of Na⁺ channels prevents pain fiber firing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels in axons) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels in axons) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels in axons) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane thickness (more lipid) without changing channel density would tend to:",
    options: [
      "Increase capacitance per unit area and slow voltage responses",
      "Decrease τ to zero",
      "Remove the need for ion channels",
      "Make λ infinite"
    ],
    correct: 0,
    explanation: "More membrane area per unit length increases C_m, lengthening τ for a given R_m.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase capacitance per unit area and slow voltage responses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase capacitance per unit area and slow voltage responses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase capacitance per unit area and slow voltage responses) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The rheobase of a neuron is:",
    options: [
      "The minimum current amplitude needed to reach threshold",
      "The maximum firing rate in Hz",
      "The equilibrium potential for Ca²⁺",
      "The synaptic delay at one synapse"
    ],
    correct: 0,
    explanation: "Rheobase quantifies excitability: smallest sustained stimulus that elicits a response.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The minimum current amplitude needed to reach threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The minimum current amplitude needed to reach threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The minimum current amplitude needed to reach threshold) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "If the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will:",
    options: [
      "Make V_m less negative (depolarized relative to E_K)",
      "Make V_m equal E_Na instantly",
      "Hyperpolarize below E_K always",
      "Stop all ion movement"
    ],
    correct: 0,
    explanation: "Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Make V_m less negative (depolarized relative to E_K)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Make V_m less negative (depolarized relative to E_K)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Make V_m less negative (depolarized relative to E_K)) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺-activated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺-activated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺-activated K⁺ channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An integrator neuron (high τ, high input resistance) is specialized to:",
    options: [
      "Sum many small inputs over time before firing",
      "Fire at maximal rate to every input",
      "Conduct saltatory spikes in PNS only",
      "Transduce odorants"
    ],
    correct: 0,
    explanation: "Long τ and high R_in favor temporal summation of subthreshold inputs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Sum many small inputs over time before firing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sum many small inputs over time before firing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sum many small inputs over time before firing) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (The sodium reversal potential (E_Na) while Na⁺ conductance dominates) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The sodium reversal potential (E_Na) while Na⁺ conductance dominates) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The sodium reversal potential (E_Na) while Na⁺ conductance dominates) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling both R_m and R_i while keeping geometry fixed changes λ such that:",
    options: [
      "λ is unchanged (√(R_m/R_i) ratio preserved)",
      "λ doubles",
      "λ halves",
      "λ becomes zero"
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); scaling both by the same factor leaves λ the same.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (λ is unchanged (√(R_m/R_i) ratio preserved)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (λ is unchanged (√(R_m/R_i) ratio preserved)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (λ is unchanged (√(R_m/R_i) ratio preserved)) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (Channel kinetics and ion mobility slow) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Channel kinetics and ion mobility slow) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Channel kinetics and ion mobility slow) matches the underlying mechanism."
    ]
  }
];

const PART2_FRESH_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "Presynaptic Ca²⁺ entry is critical because it:",
    options: [
      "Triggers synaptic vesicle fusion with the active zone membrane",
      "Directly opens postsynaptic AMPA receptors",
      "Hyperpolarizes the axon terminal to rest",
      "Blocks SNARE proteins permanently"
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
      "Hyperpolarization always opens NMDA maximally",
      "Mg²⁺ acts as a neurotransmitter at NMDA sites",
      "NMDA is purely metabotropic"
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
      "Only GABA is released",
      "No Ca²⁺ enters the postsynaptic cell"
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
      "Increase release without limit",
      "Convert electrical to chemical synapses",
      "Generate action potentials in the terminal"
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
      "Muscarinic receptors only on muscle nuclei",
      "NMDA receptors on motor neurons",
      "Gap junction hemichannels"
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
      "Transduces light in the retina",
      "Maps sound frequency on basilar membrane",
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
      "Always opening Cl⁻ pores directly",
      "Located only in photoreceptor outer segments",
      "Identical to nicotinic ACh receptors"
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
      "Increase glutamate release unconditionally",
      "Open voltage-gated Na⁺ channels in glia only",
      "Replace SNARE-mediated fusion"
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
      "Only electrical coupling via gap junctions",
      "A single receptor type for all transmitters",
      "Propagation without vesicles"
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
      "Only occurs in the olfactory bulb",
      "Requires gap junctions exclusively",
      "Prevents all sensory input"
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
      "Opens nicotinic receptors",
      "Hydrolyzes cAMP",
      "Closes all K⁺ channels permanently"
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
      "Removing all Na⁺ channels",
      "Increasing myelin on dendrites",
      "Blocking only metabotropic receptors globally"
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
    question: "Allosteric modulators of GABA_A receptors (e.g., benzodiazepines) typically:",
    options: [
      "Enhance GABA binding or channel opening probability",
      "Block GABA synthesis in presynaptic terminals",
      "Open NMDA receptors instead",
      "Prevent Cl⁻ flux entirely"
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
      "Pumps ACh into vesicles",
      "Is a glutamate receptor subunit",
      "Generates EPSPs in muscle"
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
      "Are stored only in mitochondria",
      "Cannot affect ion channels indirectly",
      "Replace action potentials in axons"
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
      "It only affects photoreceptors",
      "It blocks the Na⁺/K⁺ pump exclusively",
      "It occurs only in the cerebellum"
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
      "Mediate fine color and high spatial acuity exclusively",
      "Lack any axonal projection to the brain",
      "Synapse only in the olfactory bulb"
    ],
    correct: 0,
    explanation: "M cells favor temporal change and motion; P cells favor color and fine detail.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Respond with transient/larger receptive fields and prefer motion/contrast) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Respond with transient/larger receptive fields and prefer motion/contrast) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Respond with transient/larger receptive fields and prefer motion/contrast) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Orientation selectivity in primary visual cortex arises largely from:",
    options: [
      "Specific arrangements of thalamic inputs and intracortical inhibition",
      "Random wiring without structure",
      "Cochlear tonotopy",
      "Muscle spindle length encoding"
    ],
    correct: 0,
    explanation: "Hubel–Wiesel models use oriented subfields and inhibition to build orientation tuning.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Specific arrangements of thalamic inputs and intracortical inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Specific arrangements of thalamic inputs and intracortical inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Specific arrangements of thalamic inputs and intracortical inhibition) matches the underlying mechanism."
    ]
  },
  {
    topic: "Executive Function",
    question: "Working memory tasks often engage prefrontal cortex because it:",
    options: [
      "Maintains and manipulates information during delay periods",
      "Transduces sound in the cochlea",
      "Generates cerebrospinal fluid only",
      "Is the sole source of action potentials in the CNS"
    ],
    correct: 0,
    explanation: "PFC supports temporary maintenance/control of task-relevant information.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Maintains and manipulates information during delay periods) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Maintains and manipulates information during delay periods) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Maintains and manipulates information during delay periods) matches the underlying mechanism."
    ]
  },
  {
    topic: "Cerebellum",
    question: "Long-term depression (LTD) at cerebellar parallel fiber–Purkinje synapses is often induced by:",
    options: [
      "Sustained low-frequency stimulation paired with climbing fiber input",
      "Single action potential only",
      "Blocking all Ca²⁺ signaling",
      "Eliminating GABA release globally"
    ],
    correct: 0,
    explanation: "Cerebellar LTD protocols use specific pairing of parallel and climbing fiber activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Sustained low-frequency stimulation paired with climbing fiber input) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sustained low-frequency stimulation paired with climbing fiber input) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sustained low-frequency stimulation paired with climbing fiber input) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar output helps correct movement errors by comparing:",
    options: [
      "Predicted vs. actual sensory consequences of actions",
      "Only olfactory input to glomeruli",
      "Photopigment bleaching rates",
      "Blood CO₂ without neural signals"
    ],
    correct: 0,
    explanation: "Forward models and sensory feedback guide cerebellar adjustment of motor commands.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Predicted vs. actual sensory consequences of actions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Predicted vs. actual sensory consequences of actions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Predicted vs. actual sensory consequences of actions) matches the underlying mechanism."
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Amygdala activation during fear conditioning strongly associates:",
    options: [
      "Neutral cues with aversive outcomes",
      "Color opponency in V1 only",
      "Basilar membrane stiffness alone",
      "Na⁺ channel gating in axons"
    ],
    correct: 0,
    explanation: "Amygdala encodes emotional salience and learns CS–US associations.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neutral cues with aversive outcomes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neutral cues with aversive outcomes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neutral cues with aversive outcomes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Slow-wave sleep is thought to support memory consolidation partly by:",
    options: [
      "Replaying and transferring hippocampal patterns to cortex",
      "Eliminating all synapses formed during the day",
      "Blocking all thalamic input permanently",
      "Converting rods to cones"
    ],
    correct: 0,
    explanation: "Hippocampo-cortical replay during SWS supports systems consolidation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Replaying and transferring hippocampal patterns to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Replaying and transferring hippocampal patterns to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Replaying and transferring hippocampal patterns to cortex) matches the underlying mechanism."
    ]
  },
  {
    topic: "Language",
    question: "Broca's area damage classically produces:",
    options: [
      "Nonfluent speech with relatively preserved comprehension",
      "Complete loss of all language comprehension only",
      "Blindness in both visual fields",
      "Deafness without cochlear damage"
    ],
    correct: 0,
    explanation: "Broca's aphasia: effortful, agrammatic speech; comprehension often less impaired.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Nonfluent speech with relatively preserved comprehension) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nonfluent speech with relatively preserved comprehension) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nonfluent speech with relatively preserved comprehension) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Place cells in hippocampus fire when:",
    options: [
      "The animal occupies specific locations in an environment",
      "Only during REM sleep without locomotion",
      "Odorants bind olfactory receptors",
      "Sound frequency exceeds 10 kHz only"
    ],
    correct: 0,
    explanation: "Place fields encode spatial location; key evidence for cognitive maps.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The animal occupies specific locations in an environment) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The animal occupies specific locations in an environment) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The animal occupies specific locations in an environment) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroimaging",
    question: "BOLD fMRI signal indirectly reflects:",
    options: [
      "Local changes in blood oxygenation coupled to neural activity",
      "Direct measurement of every synaptic vesicle fusion",
      "Static anatomy without physiology",
      "Only myelin thickness"
    ],
    correct: 0,
    explanation: "Neural activity drives blood flow and oxygenation changes detected as BOLD contrast.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Local changes in blood oxygenation coupled to neural activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Local changes in blood oxygenation coupled to neural activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Local changes in blood oxygenation coupled to neural activity) matches the underlying mechanism."
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
      "This option is inconsistent with the stem; the keyed answer (Spasticity and hyperreflexia with weakness) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spasticity and hyperreflexia with weakness) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spasticity and hyperreflexia with weakness) matches the underlying mechanism."
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Receptive field surround antagonism in vision helps:",
    options: [
      "Enhance edges and contrast via lateral inhibition",
      "Eliminate all rod function",
      "Map frequency in the cochlea",
      "Store declarative memories in amygdala only"
    ],
    correct: 0,
    explanation: "Center-surround antagonism sharpens spatial contrast (e.g., retinal ganglion cells).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Enhance edges and contrast via lateral inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhance edges and contrast via lateral inhibition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhance edges and contrast via lateral inhibition) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The thalamus functions largely as:",
    options: [
      "A gateway relaying and modulating sensory/motor information to cortex",
      "The primary site of cerebrospinal fluid production only",
      "Exclusive storage of long-term motor skills without relay",
      "The only region containing photoreceptors"
    ],
    correct: 0,
    explanation: "Thalamic nuclei gate and relay streams to specific cortical areas.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (A gateway relaying and modulating sensory/motor information to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (A gateway relaying and modulating sensory/motor information to cortex) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (A gateway relaying and modulating sensory/motor information to cortex) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Anterograde amnesia after hippocampal damage means:",
    options: [
      "Inability to form new declarative memories after injury",
      "Loss of all procedural skills including riding a bike",
      "Complete elimination of sensation",
      "Permanent loss of childhood memories only always"
    ],
    correct: 0,
    explanation: "Hippocampus critical for encoding new episodic/declarative memories.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inability to form new declarative memories after injury) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inability to form new declarative memories after injury) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inability to form new declarative memories after injury) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "Phase locking in auditory nerve fibers supports:",
    options: [
      "Encoding low-frequency pitch via precise spike timing",
      "Color vision in the fovea",
      "Olfactory combinatorial coding only",
      "Muscle spindle stretch detection"
    ],
    correct: 0,
    explanation: "For low frequencies, timing of spikes to waveform phase carries pitch information.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Encoding low-frequency pitch via precise spike timing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Encoding low-frequency pitch via precise spike timing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Encoding low-frequency pitch via precise spike timing) matches the underlying mechanism."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Parkinson disease motor symptoms relate especially to loss of:",
    options: [
      "Dopaminergic neurons in substantia nigra pars compacta",
      "Photoreceptors in the retina",
      "All Purkinje cells instantly",
      "Olfactory sensory neurons exclusively"
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia movement control (bradykinesia, rigidity).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Dopaminergic neurons in substantia nigra pars compacta) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Dopaminergic neurons in substantia nigra pars compacta) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Dopaminergic neurons in substantia nigra pars compacta) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis blockers after training impair:",
    options: [
      "Long-term but not early short-term memory in many paradigms",
      "Immediate reflexes only",
      "Dark current in rods only",
      "Saltatory conduction in myelinated axons"
    ],
    correct: 0,
    explanation: "Late LTP/LTM often requires gene expression and new proteins.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Long-term but not early short-term memory in many paradigms) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Long-term but not early short-term memory in many paradigms) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Long-term but not early short-term memory in many paradigms) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood–brain barrier limits passage of:",
    options: [
      "Many large/polar molecules while allowing some regulated transport",
      "All ions including O₂ and CO₂ equally",
      "Only neurotransmitters synthesized in muscle",
      "Nothing; all substances cross freely"
    ],
    correct: 0,
    explanation: "Tight junctions and transporters regulate CNS access; small gases still diffuse.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Many large/polar molecules while allowing some regulated transport) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Many large/polar molecules while allowing some regulated transport) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Many large/polar molecules while allowing some regulated transport) matches the underlying mechanism."
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
      "Stop the Na+/K+ pump"
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
      "Always +60 mV",
      "Zero regardless of charge",
      "Equal to E_K always"
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
      "K+ channels fully close permanently",
      "Myelin is removed",
      "Pump rate doubles"
    ],
    correct: 0,
    explanation: "Regenerative Na+ current drives depolarization past threshold.",
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
      "Smaller diameter always",
      "Removing all Na+ channels",
      "Cooling the axon"
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
    question: "The Na+/K+ pump is electrogenic because it:",
    options: [
      "Transports unequal charge (3 Na+ out, 2 K+ in per cycle)",
      "Opens voltage-gated channels",
      "Is the sole determinant of V_m without leaks",
      "Only operates during spikes"
    ],
    correct: 0,
    explanation: "Net outward charge movement hyperpolarizes slightly beyond pure leak balance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Transports unequal charge (3 Na+ out, 2 K+ in per cycle)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Transports unequal charge (3 Na+ out, 2 K+ in per cycle)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Transports unequal charge (3 Na+ out, 2 K+ in per cycle)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Channel Gating",
    question: "Voltage-gated Na+ channel inactivation gates close during:",
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
      "Voltage-gated Na+ channels",
      "Nicotinic ACh receptors",
      "Photopigment activation",
      "Gap junction connexins"
    ],
    correct: 0,
    explanation: "TTX blocks Na+ channels and abolishes spikes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na+ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na+ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na+ channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp dialyzes the interior of the cell, which can:",
    options: [
      "Wash out second messengers and dialyzable factors over time",
      "Permanently myelinate the axon",
      "Replace synaptic vesicles",
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
      "Resting permeability is dominated by K+ with some Na+ leak",
      "Only Na+ channels are open",
      "V_m equals E_Na",
      "No ion gradients exist"
    ],
    correct: 0,
    explanation: "Rest lies closer to E_K when K+ permeability dominates.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Resting permeability is dominated by K+ with some Na+ leak) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resting permeability is dominated by K+ with some Na+ leak) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resting permeability is dominated by K+ with some Na+ leak) matches the underlying mechanism."
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "The Na+ channel selectivity filter favors Na+ over K+ partly because:",
    options: [
      "Smaller dehydrated Na+ fits the pore geometry better than K+",
      "Na+ is negatively charged",
      "K+ is impermeant in all channels",
      "Selectivity requires myelin"
    ],
    correct: 0,
    explanation: "Pore structure discriminates ion size/hydration shell.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Smaller dehydrated Na+ fits the pore geometry better than K+) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Smaller dehydrated Na+ fits the pore geometry better than K+) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Smaller dehydrated Na+ fits the pore geometry better than K+) matches the underlying mechanism."
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
    question: "High density of voltage-gated Na+ at the AIS serves to:",
    options: [
      "Lower threshold for spike initiation and regulate backpropagation",
      "Transduce odorants",
      "Generate EPSPs only",
      "Produce myelin"
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
    question: "Replacing extracellular Na+ with impermeant cation during voltage clamp typically:",
    options: [
      "Reduces inward Na+ current during depolarizing steps",
      "Increases Na+ current",
      "Blocks K+ leak only",
      "Hyperpolarizes without clamp"
    ],
    correct: 0,
    explanation: "Na+ removal abolishes INa.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduces inward Na+ current during depolarizing steps) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduces inward Na+ current during depolarizing steps) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduces inward Na+ current during depolarizing steps) matches the underlying mechanism."
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Passive dendrites act as:",
    options: [
      "Low-pass filters attenuating high-frequency inputs",
      "Perfect amplifiers of all frequencies",
      "Myelinated conductors only",
      "Photoreceptors"
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
      "Farads per second only",
      "Meters per volt",
      "Spikes per second"
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
    question: "Afterchannel block of delayed rectifier K+ would:",
    options: [
      "Prolong repolarization and broaden spikes",
      "Prevent Na+ influx",
      "Eliminate resting potential",
      "Stop synaptic release only"
    ],
    correct: 0,
    explanation: "K+ outward current repolarizes; block widens the spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Prolong repolarization and broaden spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolong repolarization and broaden spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolong repolarization and broaden spikes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An action potential traveling toward a severed axon end will:",
    options: [
      "Reflect and collide; propagation fails at the cut",
      "Jump to dendrites without channels",
      "Increase amplitude to infinity",
      "Become purely passive forever"
    ],
    correct: 0,
    explanation: "Discontinuities disrupt active propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reflect and collide; propagation fails at the cut) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reflect and collide; propagation fails at the cut) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reflect and collide; propagation fails at the cut) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Current divided between capacitive and resistive paths at step onset reflects:",
    options: [
      "I_C = C dV/dt charging the membrane",
      "Only pump activity",
      "Saltatory conduction",
      "Glial phagocytosis"
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
      "Depolarize to E_Na always",
      "Have no effect",
      "Open NMDA receptors"
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
      "Not at all",
      "Always to zero",
      "Only for anions"
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
      "Increase λ indefinitely",
      "Block synapses only",
      "Measure smell intensity"
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
      "Cell is hyperpolarized at rest only",
      "Myelin is thick",
      "Only K+ pumps run"
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
      "DNA transcription",
      "Photopigment recovery"
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
      "Muscle stretch",
      "Retinal dark current",
      "Cochlear place map"
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
      "Cl- only",
      "Ca2+ exclusively always",
      "Large peptides"
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
    question: "GABA_A receptors are:",
    options: [
      "Ligand-gated Cl- channels (usually inhibitory)",
      "Metabotropic only",
      "Voltage-gated Na channels",
      "Photoreceptors"
    ],
    correct: 0,
    explanation: "GABA_A is ionotropic Cl- conductance.",
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
      "Directly open nicotinic receptors",
      "Replace SNARE proteins",
      "Measure muscle length"
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
      "Only hyperpolarization",
      "Only GABA",
      "Odor binding"
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
      "Eliminate all inhibition",
      "Replace electrical synapses globally",
      "Map frequency on basilar membrane"
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
      "Vesicle fusion without Ca2+",
      "Phototransduction",
      "Only retrograde peptide signaling"
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
      "Na+ into nucleus",
      "Rhodopsin into spines",
      "Myelin proteins into cleft"
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
      "Permanent loss of DNA",
      "Myelin thinning",
      "Rod-cone switch"
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
      "Only presynaptic GABA",
      "Only hyperpolarization",
      "Elimination of AMPA"
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
      "Single photon absorption",
      "Muscle spindle stretch only",
      "Opening all Na channels"
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
      "Always hyperpolarizing",
      "A photoreceptor signal",
      "Purely electrical gap junction"
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
      "Only signal via gap junctions",
      "Only affect retina",
      "Cannot modulate circuits"
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
      "Positive allosteric modulation of GABA_A receptors",
      "Blocking glutamate synthesis",
      "Opening NMDA maximally",
      "Destroying synaptic vesicles"
    ],
    correct: 0,
    explanation: "BZDs increase Cl- flux probability when GABA binds.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Positive allosteric modulation of GABA_A receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Positive allosteric modulation of GABA_A receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Positive allosteric modulation of GABA_A receptors) matches the underlying mechanism."
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Nitric oxide (NO) as a retrograde messenger:",
    options: [
      "Diffuses from postsynaptic sites to modulate presynaptic release",
      "Is stored only in muscle spindles",
      "Requires myelin",
      "Is the primary photopigment"
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
      "Only cochlear tuning",
      "Only rod dark current",
      "Elimination of all LTP"
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
      "Photoreceptor disks",
      "Cochlear basilar stiffness",
      "Blood-brain tight junctions only"
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
      "Directly opens photopigment",
      "Forms the blood-brain barrier",
      "Is identical to NMJ nicotinic only"
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
      "Being stored only in mitochondria",
      "Opening voltage-gated Na directly always",
      "Existing only in retina"
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
      "Resting K+ leak only",
      "Myelin thickness",
      "Cochlear amplification only"
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
      "Never show oscillations",
      "Only process olfaction",
      "Eliminate action potentials"
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
      "Na+ channels open maximally",
      "Myelin is added",
      "Tip links break permanently"
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
      "Always depolarization like ON cells",
      "Muscle contraction",
      "Cochlear phase lock only"
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
      "Random wiring without use",
      "Only olfactory maps",
      "Saltatory conduction maps"
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
      "Color vision",
      "Taste umami",
      "Proprioception only"
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
      "Phototransduction",
      "NMJ transmission",
      "Glomerular odor maps"
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
      "Only angular acceleration",
      "Odor concentration",
      "Retinal illuminance only"
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
      "Only pain via spinothalamic",
      "Only smell",
      "Only auditory pitch"
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
      "Only proprioception",
      "Only vision",
      "Only NMJ signals"
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
      "Single receptor for all odors",
      "Cochlear tonotopy",
      "Muscle spindle length only"
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
      "Rhodopsin activation",
      "Hair cell tip links",
      "Na+ channel block only"
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
      "Photoreceptors",
      "Olfactory bulb mitral cells only",
      "Cochlear inner hair cells"
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
      "Stop all movement permanently always",
      "Transduce sound",
      "Generate dark current"
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
      "Color opponency",
      "Odor identity alone",
      "Only passive membrane properties"
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
      "Transduce photons",
      "Amplify cochlea only",
      "Block all synapses"
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
      "Instant permanent hippocampal-only storage",
      "No role for sleep",
      "Only procedural memory exists"
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
      "Only motor output of speech always",
      "Vision in both fields",
      "Cochlear tuning"
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
      "Excitatory drive to photoreceptors",
      "Cochlear amplification",
      "Myelin to all axons"
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
      "Only peripheral NMJ block",
      "Loss of taste buds only",
      "Purely retinal disease"
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
      "All pain permanently",
      "Need for receptors",
      "Number of neurons in cortex"
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
      "Only deep anesthesia without neural activity",
      "Only phototransduction",
      "Only NMJ release"
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
      "Procedural skill learning only",
      "Cochlear phase locking",
      "Passive membrane τ"
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
      "Purely sensory adaptation",
      "Myelin thickness only",
      "Rod-cone ratio"
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
      "Perfect single-cell spatial resolution always",
      "No relation to neural activity",
      "Only measures blood flow"
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

