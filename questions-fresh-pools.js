// MCB80x additional fresh items — distinct stems from core/variant pools

const PART1_FRESH_POOL = [
  {
    topic: "Current Clamp",
    question: "During a current-clamp experiment, injecting steady hyperpolarizing current will typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Move V_m away from threshold",
      "Open voltage-gated Na⁺ channels",
      "Eliminate K⁺ leak conductance",
      "Block the Na⁺/K⁺ pump permanently",
    ],
    correct: 0,
    explanation: "Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin (TTX) applied to an axon prevents action potentials primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Blocking voltage-gated Na⁺ channels",
      "Blocking voltage-gated K⁺ channels",
      "Inhibiting the Na⁺/K⁺ ATPase",
      "Sealing gap junctions",
    ],
    correct: 0,
    explanation: "TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If extracellular K⁺ is raised fourfold while intracellular K⁺ is unchanged, E_K shifts approximately?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "~37 mV toward 0 mV (less negative)",
      "~37 mV more negative",
      "To exactly, 58 mV",
      "Not at all because K⁺ is impermeant",
    ],
    correct: 0,
    explanation: "The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Decreasing axon diameter (with myelin unchanged) generally?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slows conduction by increasing internal axial resistance",
      "Speeds conduction by shortening λ",
      "Eliminates the need for Na⁺ channels",
      "Prevents passive spread entirely",
    ],
    correct: 0,
    explanation: "Smaller diameter raises R_i, shortening λ and slowing active propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If τ increases but λ is unchanged, subthreshold signals at the soma will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Reach steady deflection more slowly but spread the same distance",
      "Spread farther along dendrites",
      "Often trigger full spikes",
      "No longer decay passively",
    ],
    correct: 0,
    explanation: "τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetraethylammonium (TEA) is classically used to probe?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels",
      "Nicotinic receptors",
      "Glutamate transporters",
    ],
    correct: 0,
    explanation: "TEA blocks many voltage-gated K⁺ channels, prolonging repolarization when applied.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: TEA blocks many voltage-gated K⁺ channels, prolonging repolarization when applied.",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "When Ouabain inhibits the Na⁺/K⁺ ATPase. Over time this, which change in resting membrane potential is most likely over time?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depolarize the cell as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize the cell instantly to E_K",
      "Block all chemical synapses",
      "Prevent action potentials by opening Cl⁻ channels",
    ],
    correct: 0,
    explanation: "Pump failure gradually collapses ion gradients, eventually depolarizing the cell.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Pump failure gradually collapses ion gradients, eventually depolarizing the cell.",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Tend to hyperpolarize or stabilize V_m toward E_Cl",
      "Often depolarize to E_Na",
      "Have no effect because Cl⁻ is not charged",
      "Reverse the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a second stimulus must be?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Stronger to reach threshold because many Na⁺ channels remain inactivated",
      "Weaker because K⁺ channels are closed",
      "Identical in strength",
      "Applied to dendrites",
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Subthreshold EPSPs decay as they travel toward the soma mainly because of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Passive cable properties (leak and axial resistance)",
      "Active regeneration at many micron",
      "Myelin along dendrites",
      "Exclusive Na⁺ pump activity",
    ],
    correct: 0,
    explanation: "Dendrites lack dense voltage-gated Na⁺ for regeneration; passive decay dominates.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "In voltage-clamp mode, the amplifier injects current to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hold membrane voltage at a commanded value",
      "Measure resting potential without feedback",
      "Clamp extracellular K⁺ concentration",
      "Block all synaptic input pharmacologically",
    ],
    correct: 0,
    explanation: "Voltage-clamp feedback injects whatever current is needed to maintain the set V_m.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-clamp feedback injects whatever current is needed to maintain the set V_m.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetics such as lidocaine block?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated Na⁺ channels in axons",
      "Metabotropic GABA<sub>B</sub> receptors",
      "Photopigment isomerization",
      "Basilar membrane motion",
    ],
    correct: 0,
    explanation: "Local anesthetics use-dependent block of Na⁺ channels prevents pain fiber firing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane thickness (more lipid) without changing channel density would tend to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Lower capacitance per unit area (C ∝ 1/d) and alter τ depending on R_m",
      "Increase capacitance per unit area and slow voltage responses",
      "Decrease τ to zero",
      "Make λ infinite",
    ],
    correct: 0,
    explanation: "In the parallel-plate model, thicker membrane (larger d) lowers C per unit area; τ = R_m C_m changes with both R_m and C_m.",
    wrongExplanations: [
      "",
      "Capacitance per unit area decreases with thickness, not increases.",
      "τ does not collapse to zero when thickness increases.",
      "Length constant depends on R_m and R_i, not membrane thickness alone.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Which statement best describes rheobase of a neuron?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The minimum current amplitude needed to reach threshold",
      "The maximum firing rate in Hz",
      "The equilibrium potential for Ca²⁺",
      "The synaptic delay at one synapse",
    ],
    correct: 0,
    explanation: "Rheobase quantifies excitability: smallest sustained stimulus that elicits a response.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Make V_m less negative (depolarized relative to E_K)",
      "Make V_m equal E_Na instantly",
      "Hyperpolarize below E_K",
      "Stop all ion movement",
    ],
    correct: 0,
    explanation: "Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
    wrongExplanations: [
      "",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "After a spike, slow after-hyperpolarization (AHP) is often mediated by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ca²⁺-activated K⁺ channels",
      "Opening of voltage-gated Na⁺ channels",
      "Closing of all leak channels",
      "Photoreceptor dark current",
    ],
    correct: 0,
    explanation: "Ca²⁺ entry during the spike can activate K_Ca channels, hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An integrator neuron (high τ, high input resistance) is specialized to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Sum many small inputs over time before firing",
      "Fire at maximal rate to every input",
      "Conduct saltatory spikes in PNS",
      "Transduce odorants",
    ],
    correct: 0,
    explanation: "Long τ and high R_in favor temporal summation of subthreshold inputs.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Long τ and high R_in favor temporal summation of subthreshold inputs.",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "At a synapse, if only Na⁺ channels open transiently, V_m moves toward?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The sodium reversal potential (E_Na) while Na⁺ conductance dominates",
      "The potassium reversal potential (E_K) as if K⁺ leak were unchanged",
      "The chloride reversal potential (E_Cl) primarily, ignoring cations",
      "0 mV regardless of whether concentration gradients are maintained",
    ],
    correct: 0,
    explanation: "Dominant Na⁺ permeability during the rising phase drives V_m toward E_Na.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dominant Na⁺ permeability during the rising phase drives V_m toward E_Na.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling both R_m and R_i while keeping geometry fixed changes λ such that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "λ is unchanged (√(R_m/R_i) ratio preserved)",
      "λ doubles",
      "λ halves",
      "λ becomes zero",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); scaling both by the same factor leaves λ the same.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Cooling an axon typically slows conduction because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Channel kinetics and ion mobility slow",
      "Myelin is converted to cerebrospinal fluid",
      "Resting potential becomes, 40 mV",
      "Na⁺/K⁺ pump reverses direction",
    ],
    correct: 0,
    explanation: "Lower temperature slows gating and diffusion, delaying spike propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  }
];

const PART2_FRESH_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "Presynaptic Ca²⁺ entry is critical because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Triggers synaptic vesicle fusion with the active zone membrane",
      "Directly opens postsynaptic AMPA receptors",
      "Hyperpolarizes the axon terminal to rest",
      "Blocks SNARE proteins permanently",
    ],
    correct: 0,
    explanation: "Ca²⁺ sensors on the release machinery couple depolarization to exocytosis.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "NMDA receptors show voltage-dependent Mg²⁺ block such that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depolarization relieves block and permits Ca²⁺ influx",
      "Hyperpolarization opens NMDA maximally",
      "Mg²⁺ acts as a neurotransmitter at NMDA sites",
      "NMDA is purely metabotropic",
    ],
    correct: 0,
    explanation: "At rest Mg²⁺ blocks the pore; depolarization expels Mg²⁺, enabling NMDA current.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. At rest Mg²⁺ blocks the pore; depolarization expels Mg²⁺, enabling NMDA current.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Spike-timing-dependent plasticity (STDP) often strengthens synapses when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Presynaptic spikes precede postsynaptic spikes within a narrow window",
      "Postsynaptic spikes precede presynaptic spikes by seconds",
      "K⁺ channels alone set the photoreceptor resting potential in light",
      "No Ca²⁺ enters the postsynaptic cell",
    ],
    correct: 0,
    explanation: "Classic Hebbian STDP favors causal order: presynaptic before postsynaptic firing.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Classic Hebbian STDP favors causal order: presynaptic before postsynaptic firing.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Classic Hebbian STDP favors causal order: presynaptic before postsynaptic firing.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Autoreceptors on presynaptic terminals typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Reduce further neurotransmitter release when activated",
      "Increase release without limit",
      "Convert electrical to chemical synapses",
      "Generate action potentials in the terminal",
    ],
    correct: 0,
    explanation: "Negative feedback via autoreceptors (e.g., 5-HT1, D2) inhibits release.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "At the neuromuscular junction, acetylcholine acts on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Nicotinic ionotropic receptors on muscle endplate",
      "Muscarinic receptors on muscle nuclei",
      "NMDA receptors on motor neurons",
      "Gap junction hemichannels",
    ],
    correct: 0,
    explanation: "ACh nicotinic receptors depolarize the muscle endplate (end-plate potential).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ACh nicotinic receptors depolarize the muscle endplate (end-plate potential).",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Perisomatic inhibition from basket cells primarily?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Controls timing and gain of pyramidal output",
      "Transduces light in the retina",
      "Maps sound frequency on basilar membrane",
      "Stores long-term declarative memories alone",
    ],
    correct: 0,
    explanation: "Perisomatic GABAergic input strongly regulates when principal cells fire.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "D1-type dopamine receptors are generally?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Excitatory/modulatory via Gs-linked cAMP increases",
      "Often opening Cl⁻ pores directly",
      "Located mainly in photoreceptor outer segments",
      "Identical to nicotinic ACh receptors",
    ],
    correct: 0,
    explanation: "D1 receptors typically couple to Gs, raising cAMP and modulating excitability.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: D1 receptors typically couple to Gs, raising cAMP and modulating excitability.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. D1 receptors typically couple to Gs, raising cAMP and modulating excitability.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Endocannabinoids often act as retrograde messengers to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Suppress presynaptic release after strong postsynaptic activity",
      "Increase glutamate release unconditionally",
      "Open voltage-gated Na⁺ channels in glia",
      "Replace SNARE-mediated fusion",
    ],
    correct: 0,
    explanation: "Postsynaptic synthesis of endocannabinoids can feedback-inhibit presynaptic terminals.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Postsynaptic synthesis of endocannabinoids can feedback-inhibit presynaptic terminals.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Which statement best describes readily releasable pool of vesicles?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Docked/primed for fast release upon Ca²⁺ influx",
      "Located mainly in the nucleus",
      "Identical to neurotransmitter transporters",
      "Used primarily for neuromodulator volume transmission",
    ],
    correct: 0,
    explanation: "Primed vesicles at the active zone supply fast synchronous release.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Primed vesicles at the active zone supply fast synchronous release.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Primed vesicles at the active zone supply fast synchronous release.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Co-transmission refers to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Release of multiple neuroactive substances from one neuron",
      "Main mechanism: electrical coupling via gap junctions",
      "A single receptor type for all transmitters",
      "Propagation without vesicles",
    ],
    correct: 0,
    explanation: "Neurons may release classic transmitters plus peptides or other modulators.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons may release classic transmitters plus peptides or other modulators.",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedback inhibition differs from feedforward inhibition because feedback?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Acts on an element earlier in the same pathway after it fired",
      "Requires occurs in the olfactory bulb",
      "Rod outer segments generate all-or-none spikes in darkness",
      "Prevents all sensory input",
    ],
    correct: 0,
    explanation: "Feedback loops regulate activity of cells that were just active (e.g., Renshaw, interneuron loops).",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Feedback loops regulate activity of cells that were just active (e.g., Renshaw, interneuron loops).",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Phospholipase C activation produces IP₃ and DAG; IP₃ primarily?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Releases Ca²⁺ from intracellular stores",
      "Opens nicotinic receptors",
      "Hydrolyzes cAMP",
      "Closes all K⁺ channels permanently",
    ],
    correct: 0,
    explanation: "IP₃ binds ER receptors to mobilize stored Ca²⁺.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in cortex can be implemented by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inhibitory interneurons scaling responses relative to local activity",
      "Removing all Na⁺ channels",
      "Increasing myelin on dendrites",
      "Blocking metabotropic receptors globally",
    ],
    correct: 0,
    explanation: "Inhibition can divide or scale excitatory drive depending on circuit motif.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition can divide or scale excitatory drive depending on circuit motif.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Allosteric modulators of GABA<sub>A</sub> receptors (e.g., benzodiazepines) typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Enhance GABA binding or channel opening probability",
      "Block GABA synthesis in presynaptic terminals",
      "Open NMDA receptors instead",
      "Prevent Cl⁻ flux entirely",
    ],
    correct: 0,
    explanation: "Positive allosteric modulators increase inhibitory effect of GABA without being the primary agonist.",
    wrongExplanations: [
      "",
      "",
      "",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. Positive allosteric modulators increase inhibitory effect of GABA without being the primary agonist.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptotagmin acts as a Ca²⁺ sensor for exocytosis because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Binds Ca²⁺ and helps trigger SNARE-mediated fusion",
      "Pumps ACh into vesicles",
      "Is a glutamate receptor subunit",
      "Generates EPSPs in muscle",
    ],
    correct: 0,
    explanation: "Synaptotagmin couples Ca²⁺ rise to vesicle fusion machinery.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuropeptides compared to small-molecule transmitters often?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Diffuse more slowly over longer distances and modulate on slower timescales",
      "Are stored mainly in mitochondria",
      "Cannot affect ion channels indirectly",
      "Replace action potentials in axons",
    ],
    correct: 0,
    explanation: "Peptide co-transmitters/modulators act on broader spatial and temporal scales.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptide co-transmitters/modulators act on broader spatial and temporal scales.",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which capability best describes Winner-take-all dynamics in a recurrent inhibitory network?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Sharpen selection of one active representation",
      "Eliminate all firing permanently",
      "Convert chemical synapses to electrical",
      "Map odorants one-to-one to glomeruli without overlap",
    ],
    correct: 0,
    explanation: "Strong lateral/recurrent inhibition suppresses weaker competitors.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Strong lateral/recurrent inhibition suppresses weaker competitors.",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "An IPSP arriving at the axon initial segment is especially effective because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "It directly opposes spike initiation where Na⁺ density is high",
      "It affects photoreceptors",
      "It blocks the Na⁺/K⁺ pump primarily",
      "It occurs mainly in the cerebellum",
    ],
    correct: 0,
    explanation: "Initial segment is the spike trigger zone; inhibition there strongly gates output.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Initial segment is the spike trigger zone; inhibition there strongly gates output.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Initial segment is the spike trigger zone; inhibition there strongly gates output.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Initial segment is the spike trigger zone; inhibition there strongly gates output.",
    ]
  }
];

const PART3_FRESH_POOL = [
  {
    topic: "Visual System",
    question: "Magnocellular (M) retinal ganglion cells compared to parvocellular (P) cells typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Respond with transient/larger receptive fields and prefer motion/contrast",
      "Mediate fine color and high spatial acuity primarily",
      "Lack any axonal projection to the brain",
      "Synapse mainly in the olfactory bulb",
    ],
    correct: 0,
    explanation: "M cells favor temporal change and motion; P cells favor color and fine detail.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M cells favor temporal change and motion; P cells favor color and fine detail.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M cells favor temporal change and motion; P cells favor color and fine detail.",
    ]
  },
  {
    topic: "Visual System",
    question: "Orientation selectivity in primary visual cortex arises largely from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Specific arrangements of thalamic inputs and intracortical inhibition",
      "Random wiring without structure",
      "Cochlear tonotopy",
      "Muscle spindle length encoding",
    ],
    correct: 0,
    explanation: "Hubel–Wiesel models use oriented subfields and inhibition to build orientation tuning.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Executive Function",
    question: "Working memory tasks often engage prefrontal cortex because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Maintains and manipulates information during delay periods",
      "Transduces sound in the cochlea",
      "Generates cerebrospinal fluid",
      "Is the sole source of action potentials in the CNS",
    ],
    correct: 0,
    explanation: "PFC supports temporary maintenance/control of task-relevant information.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PFC supports temporary maintenance/control of task-relevant information.",
      "",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Long-term depression (LTD) at cerebellar parallel fiber–Purkinje synapses is often induced by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Sustained low-frequency stimulation paired with climbing fiber input",
      "Single action potential",
      "Blocking all Ca²⁺ signaling",
      "Eliminating GABA release globally",
    ],
    correct: 0,
    explanation: "Cerebellar LTD protocols use specific pairing of parallel and climbing fiber activity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar LTD protocols use specific pairing of parallel and climbing fiber activity.",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar output helps correct movement errors by comparing?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Predicted vs. actual sensory consequences of actions",
      "Main mechanism: olfactory input to glomeruli (maps the lesion to the wrong motor pathway or reflex)",
      "Photopigment bleaching rates (maps the lesion to the wrong motor pathway or reflex)",
      "Blood CO₂ without neural signals (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Forward models and sensory feedback guide cerebellar adjustment of motor commands.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Amygdala activation during fear conditioning strongly associates?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neutral cues with aversive outcomes",
      "Color opponency in V1",
      "Basilar membrane stiffness alone",
      "Na⁺ channel gating in axons",
    ],
    correct: 0,
    explanation: "Amygdala encodes emotional salience and learns CS–US associations.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Amygdala encodes emotional salience and learns CS–US associations.",
      "",
      "",
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Slow-wave sleep is thought to support memory consolidation partly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Replaying and transferring hippocampal patterns to cortex",
      "Eliminating Many synapses formed during the day",
      "Blocking all thalamic input permanently",
      "Converting rods to cones",
    ],
    correct: 0,
    explanation: "Hippocampo-cortical replay during SWS supports systems consolidation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Language",
    question: "What does Broca's area damage classically produce?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Nonfluent speech with relatively preserved comprehension",
      "Complete loss of all language comprehension",
      "Blindness in both visual fields",
      "Deafness without cochlear damage",
    ],
    correct: 0,
    explanation: "Broca's aphasia: effortful, agrammatic speech; comprehension often less impaired.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Broca's aphasia: effortful, agrammatic speech; comprehension often less impaired.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Place cells in hippocampus fire when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The animal occupies specific locations in an environment",
      "Requires during REM sleep without locomotion",
      "Odorants bind olfactory receptors",
      "Sound frequency exceeds 10 kHz",
    ],
    correct: 0,
    explanation: "Place fields encode spatial location; key evidence for cognitive maps.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Place fields encode spatial location; key evidence for cognitive maps.",
    ]
  },
  {
    topic: "Neuroimaging",
    question: "BOLD fMRI signal indirectly reflects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Local changes in blood oxygenation coupled to neural activity",
      "Direct measurement of every synaptic vesicle fusion",
      "Static anatomy without physiology",
      "Uses steady-state Nernst for one ion while multiple conductances change in time",
    ],
    correct: 0,
    explanation: "Neural activity drives blood flow and oxygenation changes detected as BOLD contrast.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Neural activity drives blood flow and oxygenation changes detected as BOLD contrast.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neuron lesions (e.g., corticospinal) often cause?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Spasticity and hyperreflexia with weakness",
      "Immediate flaccid paralysis without hyperreflexia",
      "Loss of all sensation including touch",
      "Persistent blindness",
    ],
    correct: 0,
    explanation: "UMN loss removes inhibitory control, producing spasticity; LMN lesions differ.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMN loss removes inhibitory control, producing spasticity; LMN lesions differ.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMN loss removes inhibitory control, producing spasticity; LMN lesions differ.",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Receptive field surround antagonism in vision helps?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Enhance edges and contrast via lateral inhibition",
      "Eliminate all rod function",
      "Map frequency in the cochlea",
      "Store declarative memories in amygdala",
    ],
    correct: 0,
    explanation: "Center-surround antagonism sharpens spatial contrast (e.g., retinal ganglion cells).",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Center-surround antagonism sharpens spatial contrast (e.g., retinal ganglion cells).",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The thalamus functions largely as?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "A gateway relaying and modulating sensory/motor information to cortex",
      "The primary site of cerebrospinal fluid production",
      "Exclusive storage of long-term motor skills without relay",
      "The region containing photoreceptors (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Thalamic nuclei gate and relay streams to specific cortical areas.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei gate and relay streams to specific cortical areas.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Anterograde amnesia after hippocampal damage means?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inability to form new declarative memories after injury",
      "Loss of all procedural skills including riding a bike",
      "Complete elimination of sensation",
      "Persistent loss of childhood memories",
    ],
    correct: 0,
    explanation: "Hippocampus critical for encoding new episodic/declarative memories.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hippocampus critical for encoding new episodic/declarative memories.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Phase locking in auditory nerve fibers supports?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Encoding low-frequency pitch via precise spike timing",
      "Color vision in the fovea",
      "Olfactory combinatorial coding",
      "Muscle spindle stretch detection",
    ],
    correct: 0,
    explanation: "For low frequencies, timing of spikes to waveform phase carries pitch information.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Parkinson disease motor symptoms relate especially to loss of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Dopaminergic neurons in substantia nigra pars compacta",
      "Photoreceptors in the retina",
      "Most Purkinje cells instantly",
      "Olfactory sensory neurons primarily",
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia movement control (bradykinesia, rigidity).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNc dopamine loss disrupts basal ganglia movement control (bradykinesia, rigidity).",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis blockers after training impair?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Long-term but not early short-term memory in many paradigms",
      "Immediate reflexes",
      "Dark current in rods",
      "Saltatory conduction in myelinated axons",
    ],
    correct: 0,
    explanation: "Late LTP/LTM often requires gene expression and new proteins.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Late LTP/LTM often",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Late LTP/LTM often",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood–brain barrier limits passage of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Many large/polar molecules while allowing some regulated transport",
      "Most ions including O₂ and CO₂ equally (localizes the function to the wrong brain region)",
      "Main mechanism: neurotransmitters synthesized in muscle (localizes the function to the wrong brain region)",
      "Nothing; all substances cross freely (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Tight junctions and transporters regulate CNS access; small gases still diffuse.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Tight junctions and transporters regulate CNS access; small gases still diffuse.",
      "",
    ]
  }
];

const PART1_FRESH_POOL_2 = [
  {
    topic: "Goldman Equation",
    question: "If P_K >> P_Na at rest and P_Cl is negligible, increasing P_Na slightly will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depolarize V_m toward E_Na",
      "Hyperpolarize to E_K instantly",
      "Fix V_m at 0 mV",
      "Stop the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Goldman weighting shifts V_m toward newly permeant ions.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Goldman weighting shifts V_m toward newly permeant ions.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman weighting shifts V_m toward newly permeant ions.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a cation with higher concentration inside than outside, E_ion is typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Negative (inside negative relative to outside at equilibrium)",
      "Often, 60 mV",
      "Zero regardless of charge",
      "Equal to E_K",
    ],
    correct: 0,
    explanation: "Inward concentration gradient for cations yields negative equilibrium potential.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inward concentration gradient for cations yields negative equilibrium potential.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inward concentration gradient for cations yields negative equilibrium potential.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane leak conductance (lower R_m) while C_m is fixed?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Decreases τ and shortens λ",
      "Increases τ and λ without limit",
      "Blocks action potentials by opening Na channels",
      "Eliminates capacitance",
    ],
    correct: 0,
    explanation: "More leak lowers R_m, shortening time and length constants.",
    wrongExplanations: [
      "",
      "",
      "",
      "Membrane capacitance stores charge (Q = CV) and slows voltage changes, but capacitive current alone cannot produce the selective Na⁺ influx and delayed K⁺ efflux that underlie spike upstroke and repolarization. More leak lowers R_m, shortening time and length constants.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Which clinical presentation is most consistent with The upstroke threshold is reached when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inward current exceeds outward current net positive feedback",
      "K⁺ channels fully close permanently",
      "Myelin is removed",
      "Pump rate doubles",
    ],
    correct: 0,
    explanation: "Regenerative Na⁺ current drives depolarization past threshold.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In unmyelinated axons, conduction velocity increases with?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Larger diameter (lower internal resistance)",
      "Smaller diameter",
      "Removing all Na⁺ channels",
      "Cooling the axon",
    ],
    correct: 0,
    explanation: "Wider axons have lower R_i, supporting faster propagation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Wider axons have lower R_i, supporting faster propagation.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "An EPSP recorded at the soma from a distal dendrite is smaller than at the site of input because of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Passive attenuation along dendrites",
      "Active amplification at many spine",
      "Saltatory conduction in dendrites",
      "Exclusive Cl- pumping",
    ],
    correct: 0,
    explanation: "Subthreshold signals decay with distance in passive cable.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ pump is electrogenic because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)",
      "Opens voltage-gated channels",
      "Is the sole determinant of V_m without leaks",
      "Main mechanism: operates during spikes",
    ],
    correct: 0,
    explanation: "Net outward charge movement hyperpolarizes slightly beyond pure leak balance.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Net outward charge movement hyperpolarizes slightly beyond pure leak balance.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Voltage-gated Na⁺ channel inactivation gates close during?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The peak/plateau of the spike",
      "Rest",
      "Hyperpolarization below E_K",
      "Synaptic vesicle fusion",
    ],
    correct: 0,
    explanation: "Inactivation during the spike produces the absolute refractory period.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inactivation during the spike produces the absolute refractory period.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inactivation during the spike produces the absolute refractory period.",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "TTX sensitivity indicates dependence on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated Na⁺ channels",
      "Nicotinic ACh receptors",
      "Photopigment activation",
      "Gap junction connexins",
    ],
    correct: 0,
    explanation: "TTX blocks Na⁺ channels and abolishes spikes.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Which capability best describes Whole-cell patch clamp dialyzes the interior of the cell, which?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Wash out second messengers and dialyzable factors over time",
      "Permanently myelinate the axon",
      "Replace synaptic vesicles",
      "Measure extracellular field potentials without access",
    ],
    correct: 0,
    explanation: "Dialysis can run down metabotropic signaling components.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dialysis can run down metabotropic signaling components.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If E_K = -80 mV and E_Na = +60 mV, V_m at rest near -65 mV implies?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Resting permeability is dominated by K⁺ with some Na⁺ leak",
      "Requires na⁺ channels are open",
      "V_m equals E_Na",
      "No ion gradients exist",
    ],
    correct: 0,
    explanation: "Rest lies closer to E_K when K⁺ permeability dominates.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "The Na⁺ channel selectivity filter favors Na⁺ over K⁺ partly because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Smaller dehydrated Na⁺ fits the pore geometry better than K⁺",
      "Na⁺ is negatively charged",
      "K⁺ is impermeant in all channels",
      "Selectivity",
    ],
    correct: 0,
    explanation: "Pore structure discriminates ion size/hydration shell.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "At the ion equilibrium potential, net electrodiffusive flux of that ion?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Zero",
      "Maximal outward",
      "Equal to pump flux",
      "Undefined",
    ],
    correct: 0,
    explanation: "Equilibrium: no net movement for that ion.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Equilibrium: no net movement for that ion.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Equilibrium: no net movement for that ion.",
      "",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "High density of voltage-gated Na⁺ at the AIS serves to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Lower threshold for spike initiation and regulate backpropagation",
      "Transduce odorants",
      "Generate EPSPs",
      "Produce myelin",
    ],
    correct: 0,
    explanation: "AIS is the spike initiation zone in many neurons.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AIS is the spike initiation zone in many neurons.",
      "",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Replacing extracellular Na⁺ with impermeant cation during voltage clamp typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Reduces inward Na⁺ current during depolarizing steps",
      "Increases Na⁺ current",
      "Blocks K⁺ leak",
      "Hyperpolarizes without clamp",
    ],
    correct: 0,
    explanation: "Na⁺ removal abolishes INa.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ removal abolishes INa.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Na⁺ removal abolishes INa.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Passive dendrites act as?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Low-pass filters attenuating high-frequency inputs",
      "Perfect amplifiers of all frequencies",
      "Myelinated conductors",
      "Photoreceptors",
    ],
    correct: 0,
    explanation: "RC properties filter synaptic inputs temporally and spatially.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RC properties filter synaptic inputs temporally and spatially.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. RC properties filter synaptic inputs temporally and spatially.",
    ]
  },
  {
    topic: "Membrane Biophysics",
    question: "Specific membrane resistance R_m has units conceptually of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ohm·cm² (resistance times area)",
      "Farads per second",
      "Meters per volt",
      "Spikes per second",
    ],
    correct: 0,
    explanation: "R_m normalizes leak per unit area of membrane.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: R_m normalizes leak per unit area of membrane.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterchannel block of delayed rectifier K⁺ would?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Prolong repolarization and broaden spikes",
      "Prevent Na⁺ influx",
      "Eliminate resting potential",
      "Stop synaptic release",
    ],
    correct: 0,
    explanation: "K⁺ outward current repolarizes; block widens the spike.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: K⁺ outward current repolarizes; block widens the spike.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "When an action potential reaches a cut axon terminal (open end), active propagation?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Fails at the discontinuity; the spike does not reflect back along the axon",
      "Reflects like a cable and travels backward with full amplitude",
      "Jumps to dendrites without voltage-gated channels",
      "Continues indefinitely with increasing amplitude",
    ],
    correct: 0,
    explanation: "Active regeneration needs continuous excitable membrane; an open cut stops propagation—there is no cable-style reflection of full spikes.",
    wrongExplanations: [
      "",
      "Myelinated/unmyelinated axons do not show optical-style reflection of action potentials at a cut end.",
      "Dendrites are not bypassed by spikes jumping across a cut.",
      "Amplitude is bounded by channel kinetics; propagation does not grow without bound at a terminal.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Current divided between capacitive and resistive paths at step onset reflects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "I_C = C dV/dt charging the membrane",
      "Main mechanism: pump activity",
      "Saltatory conduction",
      "Glial phagocytosis",
    ],
    correct: 0,
    explanation: "Early current charges C_m before steady leak dominates.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Early current charges C_m before steady leak dominates.",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If Adding Cl- conductance when E_Cl is below V_m, which change in membrane potential is most likely?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hyperpolarize or stabilize V_m toward E_Cl",
      "Depolarize to E_Na",
      "Have no effect",
      "Open NMDA receptors",
    ],
    correct: 0,
    explanation: "Conductance pulls V_m toward that ion's equilibrium.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Conductance pulls V_m toward that ion's equilibrium.",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Temperature increase in the Nernst relation (other factors fixed) changes E_ion magnitude?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slightly (proportionally to absolute temperature in RT/F)",
      "Not at all",
      "Often to zero",
      "Main mechanism: for anions",
    ],
    correct: 0,
    explanation: "RT/F scales with temperature.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RT/F scales with temperature.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RT/F scales with temperature.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Space clamp in experiments aims to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Make V_m uniform along a long process for accurate voltage clamp",
      "Increase λ indefinitely",
      "Block synapses",
      "Measure smell intensity",
    ],
    correct: 0,
    explanation: "Space clamp reduces axial voltage gradients.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Space clamp reduces axial voltage gradients.",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Lidocaine use-dependence means block is stronger when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Channels open frequently during firing",
      "Cell is hyperpolarized at rest",
      "Myelin is thick",
      "Requires k⁺ pumps run",
    ],
    correct: 0,
    explanation: "Many local anesthetics prefer inactivated/open states.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Many local anesthetics prefer inactivated/open states.",
      "",
      "",
    ]
  },
  {
    topic: "Current Clamp",
    question: "Zero net current injection in current clamp at rest records?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Resting potential",
      "E_Na directly",
      "Synaptic cleft width",
      "Cochlear vibration",
    ],
    correct: 0,
    explanation: "No injected current → passive resting V_m.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  }
];

const PART2_FRESH_POOL_2 = [
  {
    topic: "Chemical Synapses",
    question: "Synaptic delay (≈0.5–2 ms) is largely due to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ca2, influx and vesicle fusion kinetics",
      "Action potential travel in myelin",
      "DNA transcription",
      "Photopigment recovery",
    ],
    correct: 0,
    explanation: "Release machinery adds milliseconds after presynaptic spike arrival.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release machinery adds milliseconds after presynaptic spike arrival.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Quantal analysis estimates release probability from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Distribution of EPSP amplitudes (multiples of mEPSP size)",
      "Muscle stretch",
      "Retinal dark current",
      "Cochlear place map",
    ],
    correct: 0,
    explanation: "Quantal content reflects number of vesicles released.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors at many central synapses are permeable to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Na, and K, (non-selective cation)",
      "Cl-",
      "Ca2, primarily",
      "Large peptides",
    ],
    correct: 0,
    explanation: "AMPA typically carries depolarizing mixed cation current.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA typically carries depolarizing mixed cation current.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA typically carries depolarizing mixed cation current.",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which statement best describes GABA<sub>A</sub> receptors?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ligand-gated Cl- channels (usually inhibitory)",
      "Metabotropic",
      "Voltage-gated Na channels",
      "Photoreceptors",
    ],
    correct: 0,
    explanation: "GABA<sub>A</sub> is ionotropic Cl- conductance.",
    wrongExplanations: [
      "",
      "Fast synaptic inhibition at many CNS synapses is dominated by GABA_A Cl⁻ flux. Metabotropic GABA_B signaling is slower and works through G-proteins, not direct ligand-gated Cl⁻ pores. GABAA is ionotropic Cl- conductance.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. GABAA is ionotropic Cl- conductance.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Which capability best describes cAMP produced by adenylyl cyclase?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Activate PKA to phosphorylate channels and enzymes",
      "Directly open nicotinic receptors",
      "Replace SNARE proteins",
      "Measure muscle length",
    ],
    correct: 0,
    explanation: "PKA is a major cAMP effector in neurons.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection (e.g., NMDA) requires?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depolarization plus glutamate binding to relieve Mg2, block",
      "Main mechanism: hyperpolarization",
      "Main mechanism: gABA",
      "Odor binding",
    ],
    correct: 0,
    explanation: "NMDA acts as a Hebbian coincidence detector.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA acts as a Hebbian coincidence detector.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA acts as a Hebbian coincidence detector.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA acts as a Hebbian coincidence detector.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which capability best describes Feedforward inhibition?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Limit spread of excitation and sharpen timing",
      "Eliminate all inhibition",
      "Replace electrical synapses globally",
      "Map frequency on basilar membrane",
    ],
    correct: 0,
    explanation: "FF inhibition constrains excitatory recruitment.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "What does Electrical coupling allow?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Rapid synchrony and shared subthreshold signals",
      "Vesicle fusion without Ca2,",
      "Phototransduction",
      "Requires retrograde peptide signaling",
    ],
    correct: 0,
    explanation: "Gap junctions pass ions and small molecules bidirectionally.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Vesicular transporters load?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neurotransmitter into vesicles against gradient (using H, gradient)",
      "Na, into nucleus",
      "Rhodopsin into spines",
      "Myelin proteins into cleft",
    ],
    correct: 0,
    explanation: "VGLUT/VGAT/VMAT use proton exchange to fill vesicles.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after high-frequency trains often reflects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depletion of readily releasable vesicles",
      "Persistent loss of DNA",
      "Myelin thinning",
      "Rod-cone switch",
    ],
    correct: 0,
    explanation: "Vesicle pool depletion reduces release probability.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "NMDA receptor-dependent LTP induction classically requires?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Postsynaptic depolarization sufficient to unblock NMDA and Ca2, entry",
      "Main mechanism: presynaptic GABA",
      "Main mechanism: hyperpolarization",
      "Elimination of AMPA",
    ],
    correct: 0,
    explanation: "Ca2+ through NMDA triggers LTP cascades.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca2+ through NMDA triggers LTP cascades.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Ca2+ through NMDA triggers LTP cascades.",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Homosynaptic LTD can be induced by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Prolonged low-frequency stimulation at the synapse",
      "Single photon absorption",
      "Muscle spindle stretch",
      "Opening all Na channels",
    ],
    correct: 0,
    explanation: "Low-frequency pairing protocols weaken synapses.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency pairing protocols weaken synapses.",
      "",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Which statement best describes End-plate potential?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Graded depolarization from ACh",
      "Often hyperpolarizing",
      "A photoreceptor signal",
      "Purely electrical gap junction",
    ],
    correct: 0,
    explanation: "NMJ EPP typically exceeds muscle threshold.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMJ EPP typically exceeds muscle threshold.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. NMJ EPP typically exceeds muscle threshold.",
      "",
    ]
  },
  {
    topic: "Co-transmission",
    question: "A neuron releasing both glutamate and neuropeptide Y will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Act on fast ionotropic and slower modulatory targets",
      "Requires signal via gap junctions",
      "Requires affect retina",
      "Cannot modulate circuits",
    ],
    correct: 0,
    explanation: "Co-release spans fast and slow signaling timescales.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Benzodiazepines enhance GABAergic inhibition by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Positive allosteric modulation of GABA<sub>A</sub> receptors",
      "Blocking glutamate synthesis",
      "Opening NMDA maximally",
      "Destroying synaptic vesicles",
    ],
    correct: 0,
    explanation: "BZDs increase Cl- flux probability when GABA binds.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Nitric oxide (NO) as a retrograde messenger?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Diffuses from postsynaptic sites to modulate presynaptic release",
      "Is stored mainly in muscle spindles",
      "Uses steady-state Nernst for one ion while multiple conductances change in time",
      "Is the primary photopigment",
    ],
    correct: 0,
    explanation: "NO can act as a short-range retrograde signal.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NO can act as a short-range retrograde signal.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. NO can act as a short-range retrograde signal.",
      "",
    ]
  },
  {
    topic: "Excitatory-Inhibitory Balance",
    question: "E/I imbalance in cortex is implicated in?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Epilepsy and some psychiatric phenotypes",
      "Applies a sensory transduction pathway from a different modality",
      "Requires rod dark current",
      "Elimination of all LTP",
    ],
    correct: 0,
    explanation: "Too much excitation or too little inhibition destabilizes networks.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Too much excitation or too little inhibition destabilizes networks.",
      "",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Active zone proteins organize?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Vesicle docking and Ca2, channel coupling for release",
      "Photoreceptor disks",
      "Cochlear basilar stiffness",
      "Blood-brain tight junctions",
    ],
    correct: 0,
    explanation: "Active zone scaffolds exocytosis machinery.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Active zone scaffolds exocytosis machinery.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active zone scaffolds exocytosis machinery.",
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "Acetylcholine via muscarinic receptors often?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slows K, channels or alters cAMP, changing excitability",
      "Directly opens photopigment",
      "Forms the blood-brain barrier",
      "Is identical to NMJ nicotinic",
    ],
    correct: 0,
    explanation: "Muscarinic signaling modulates ion channels via G proteins.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscarinic signaling modulates ion channels via G proteins.",
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides typically differ from small transmitters by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slower synthesis/release and longer-range/modulatory actions",
      "Being stored mainly in mitochondria",
      "Opening voltage-gated Na directly",
      "Existing mainly in retina",
    ],
    correct: 0,
    explanation: "Peptides modulate on slower timescales.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate on slower timescales.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate on slower timescales.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate on slower timescales.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "What does Desensitization of ionotropic receptors reduce?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Response despite agonist still bound",
      "Resting K, leak",
      "Myelin thickness",
      "Cochlear amplification",
    ],
    correct: 0,
    explanation: "Conformational desensitization lowers current during prolonged agonist.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Conformational desensitization lowers current during prolonged agonist.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Conformational desensitization lowers current during prolonged agonist.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which capability best describes Recurrent excitatory networks?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Amplify activity but risk runaway unless balanced by inhibition",
      "Seldom show oscillations",
      "Uses steady-state Nernst for one ion while multiple conductances change in time",
      "Eliminate action potentials",
    ],
    correct: 0,
    explanation: "Recurrent E loops need I for stability.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Recurrent E loops need I for stability.",
      "",
      "",
    ]
  }
];

const PART3_FRESH_POOL_2 = [
  {
    topic: "Phototransduction",
    question: "Photoreceptors hyperpolarize to light because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "cGMP drops and cGMP-gated channels close",
      "Na, channels open maximally",
      "Myelin is added",
      "Tip links break permanently",
    ],
    correct: 0,
    explanation: "Light reduces cGMP, closing channels and hyperpolarizing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "OFF bipolar cells respond to light with?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hyperpolarization",
      "Often depolarization like ON cells",
      "Muscle contraction",
      "Cochlear phase lock",
    ],
    correct: 0,
    explanation: "OFF pathway signals light offset depending on wiring; MCB80x contrasts ON/OFF.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. OFF pathway signals light offset depending on wiring; MCB80x contrasts ON/OFF.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OFF pathway signals light offset depending on wiring; MCB80x contrasts ON/OFF.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Ocular dominance columns reflect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Binocular input segregation that can be shaped by experience",
      "Random wiring without use",
      "Requires olfactory maps",
      "Saltatory conduction maps",
    ],
    correct: 0,
    explanation: "Early visual experience sculpts dominance patterns.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Interaural time differences are useful for?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Localizing low-frequency sounds",
      "Color vision",
      "Taste umami",
      "Proprioception",
    ],
    correct: 0,
    explanation: "ITD coding supports azimuth for low frequencies.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ITD coding supports azimuth for low frequencies.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells in cochlea contribute to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Active amplification (cochlear amplifier)",
      "Phototransduction",
      "NMJ transmission",
      "Glomerular odor maps",
    ],
    correct: 0,
    explanation: "OHC electromotility boosts sensitivity and tuning.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Vestibular System",
    question: "Otolith organs detect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Linear acceleration and head tilt (gravity)",
      "Requires angular acceleration",
      "Odor concentration",
      "Retinal illuminance",
    ],
    correct: 0,
    explanation: "Utricle/saccule sense linear forces including gravity.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Utricle/saccule sense linear forces including gravity.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Dorsal column–medial lemniscus pathway carries?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Fine touch, vibration, proprioception to cortex",
      "Requires pain via spinothalamic",
      "Implies myelin alone sets spike threshold without voltage-gated channels",
      "Requires auditory pitch",
    ],
    correct: 0,
    explanation: "DCML is the discriminative touch pathway.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DCML is the discriminative touch pathway.",
      "",
    ]
  },
  {
    topic: "Pain",
    question: "Which clinical presentation is most consistent with Spinothalamic tract carries?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "pain/temp to thalamus",
      "Requires proprioception",
      "Requires vision",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 0,
    explanation: "Anterolateral system for nociception and thermal sense.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Odor identity is encoded by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Combinatorial receptor activation across glomeruli",
      "Single receptor for all odors",
      "Cochlear tonotopy",
      "Muscle spindle length",
    ],
    correct: 0,
    explanation: "Combinatorial coding maps complex odor space.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Combinatorial coding maps complex odor space.",
    ]
  },
  {
    topic: "Gustation",
    question: "Sour taste often involves?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Acid sensing",
      "Rhodopsin activation",
      "Hair cell tip links",
      "Na, channel block",
    ],
    correct: 0,
    explanation: "Low pH is detected by specialized taste mechanisms.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low pH is detected by specialized taste mechanisms.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate primarily in?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Motor cortex and brainstem descending tracts",
      "Photoreceptors (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory bulb mitral cells (maps the lesion to the wrong motor pathway or reflex)",
      "Cochlear inner hair cells (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "UMNs project to spinal/brainstem motor neurons.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. UMNs project to spinal/brainstem motor neurons.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMNs project to spinal/brainstem motor neurons.",
      "",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "When Direct pathway is active in basal ganglia, which effect on neural circuit function is most likely?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Facilitate movement by disinhibiting thalamus",
      "Stop all movement permanently",
      "Transduce sound",
      "Generate dark current",
    ],
    correct: 0,
    explanation: "Direct pathway (simplified) supports action selection.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Direct pathway (simplified) supports action selection.",
      "",
      "",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Climbing fibers to Purkinje cells often signal?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Error or unexpected events in motor learning",
      "Color opponency",
      "Odor identity alone",
      "Requires passive membrane properties",
    ],
    correct: 0,
    explanation: "Climbing fiber input is linked to error teaching signals.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Hippocampus",
    question: "Pattern separation in dentate gyrus helps?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Distinguish similar memories/contexts",
      "Transduce photons",
      "Amplify cochlea",
      "Block Many synapses",
    ],
    correct: 0,
    explanation: "DG/CAS networks reduce overlap of similar inputs.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DG/CAS networks reduce overlap of similar inputs.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Systems consolidation proposes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Gradual transfer of memory traces from hippocampus to cortex",
      "Instant permanent hippocampal-dominated storage",
      "No role for sleep",
      "Requires procedural memory exists",
    ],
    correct: 0,
    explanation: "Memories become less hippocampus-dependent over time.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Memories become less hippocampus-dependent over time.",
      "",
      "",
    ]
  },
  {
    topic: "Language",
    question: "Wernicke's area damage often impairs?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Language comprehension while speech may remain fluent but empty",
      "Motor output of speech",
      "Vision in both fields",
      "Cochlear tuning",
    ],
    correct: 0,
    explanation: "Receptive language deficits characterize Wernicke-type aphasia.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Receptive language deficits characterize Wernicke-type aphasia.",
      "",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "CSF is produced mainly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Choroid plexus epithelium",
      "Photoreceptor outer segments",
      "NMJ",
      "Glomeruli",
    ],
    correct: 0,
    explanation: "Choroid plexus secretes CSF into ventricles.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Thalamus",
    question: "Thalamic reticular nucleus provides?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inhibitory gating of thalamocortical relay",
      "Excitatory drive to photoreceptors",
      "Cochlear amplification",
      "Myelin to all axons",
    ],
    correct: 0,
    explanation: "TRN inhibits relay cells, modulating thalamic gate.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. TRN inhibits relay cells, modulating thalamic gate.",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Multiple sclerosis symptoms relate to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Demyelination slowing/failing conduction in CNS pathways",
      "Requires peripheral NMJ block",
      "Loss of taste buds",
      "Purely retinal disease",
    ],
    correct: 0,
    explanation: "CNS demyelination disrupts timing and strength of signals.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CNS demyelination disrupts timing and strength of signals.",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "What does Sensory adaptation reduce?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Response to maintained constant stimuli",
      "Most pain permanently",
      "Need for receptors",
      "Number of neurons in cortex",
    ],
    correct: 0,
    explanation: "Adaptation emphasizes changes over steady state.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Hippocampal sharp-wave ripples occur often during?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slow-wave sleep and quiet rest, supporting replay",
      "Requires deep anesthesia without neural activity",
      "Requires phototransduction",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 0,
    explanation: "Ripples accompany replay linked to consolidation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Flashbulb memories illustrate?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Vivid episodic memories for emotionally salient events",
      "Procedural skill learning",
      "Cochlear phase locking",
      "Passive membrane τ",
    ],
    correct: 0,
    explanation: "Emotional arousal can enhance declarative memory vividness.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Emotional arousal can enhance declarative memory vividness.",
      "",
      "",
    ]
  },
  {
    topic: "Executive Function",
    question: "Task switching costs reflect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Executive control overhead when changing rules/context",
      "Purely sensory adaptation",
      "Myelin thickness",
      "Rod-cone ratio",
    ],
    correct: 0,
    explanation: "PFC-mediated control slows performance when switching tasks.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PFC-mediated control slows performance when switching tasks.",
      "",
    ]
  },
  {
    topic: "Neuroimaging",
    question: "EEG compared to fMRI has?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Higher temporal resolution but poorer spatial localization generally",
      "Perfect single-cell spatial resolution",
      "No relation to neural activity",
      "Requires measures blood flow",
    ],
    correct: 0,
    explanation: "EEG tracks summed electrical activity with ms timing.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EEG tracks summed electrical activity with ms timing.",
      "",
      "",
    ]
  }
];
