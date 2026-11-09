// MCB80x additional fresh items — distinct stems from core/variant pools

const PART1_FRESH_POOL = [
  {
    topic: "Current Clamp",
    question: "During a current-clamp experiment, injecting steady hyperpolarizing current will typically?",
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
    options: [
      "Blocking voltage-gated Na⁺ channels",
      "Blocking voltage-gated K⁺ channels at steady state in normoxic tissue",
      "Inhibiting the Na⁺/K⁺ ATPase at steady state in normoxic tissue",
      "Sealing gap junctions under typical experimental conditions",
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
    options: [
      "Slows conduction by increasing internal",
      "Speeds conduction by shortening λ when Na⁺ inactivation has progressed",
      "Eliminates the need for Na⁺ channels when Na⁺ inactivation has progressed",
      "Prevents passive spread entirely during the rising phase of the spike",
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
    options: [
      "Reach steady deflection more slowly but",
      "Spread farther along dendrites under typical experimental conditions",
      "Often trigger full spikes when Na⁺ inactivation has progressed",
      "No longer decay passively at steady state in normoxic tissue",
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
    options: [
      "Depolarize the cell as Na⁺ accumulates",
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
    options: [
      "Tend to hyperpolarize or stabilize V_m",
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
    options: [
      "Stronger to reach threshold because many",
      "Weaker because K⁺ channels are closed during the rising phase of the spike",
      "Identical in strength along a uniformly leaky cable",
      "Applied to dendrites when Na⁺ inactivation has progressed",
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
    options: [
      "Passive cable properties (leak",
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
    options: [
      "Voltage-gated Na⁺ channels in axons",
      "Metabotropic GABA<sub>B</sub> receptors along a uniformly leaky cable",
      "Photopigment isomerization during the rising phase of the spike",
      "Basilar membrane motion during the rising phase of the spike",
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
    options: [
      "Lower capacitance per unit area (C ∝ 1/d)",
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
    options: [
      "The minimum current amplitude needed to",
      "The maximum firing rate in Hz at steady state in normoxic tissue",
      "The equilibrium potential for Ca²⁺ under typical experimental conditions",
      "The synaptic delay at one synapse when ligand-gated channels are open",
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
    options: [
      "Make V_m less negative",
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
    options: [
      "Sum many small inputs over time before",
      "Fire at maximal rate to every input at steady state in normoxic tissue",
      "Conduct saltatory spikes in PNS during the rising phase of the spike",
      "Transduce odorants when homeostatic mechanisms are intact",
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
    options: [
      "The sodium reversal potential (E_Na)",
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
    options: [
      "λ is unchanged (√(R_m/R_i) ratio",
      "λ doubles under typical experimental conditions",
      "λ halves when homeostatic mechanisms are intact",
      "λ becomes zero when homeostatic mechanisms are intact",
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
    options: [
      "Triggers synaptic vesicle fusion with the",
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
    options: [
      "Depolarization relieves block",
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
    options: [
      "Presynaptic spikes precede postsynaptic spikes",
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
    options: [
      "Reduce further neurotransmitter release",
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
    options: [
      "Nicotinic ionotropic receptors on muscle",
      "Muscarinic receptors on muscle nuclei at fast chemical synapses",
      "NMDA receptors on motor neurons at fast chemical synapses",
      "Gap junction hemichannels at fast chemical synapses",
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
    options: [
      "Controls timing and gain of pyramidal",
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
    options: [
      "Excitatory/modulatory via Gs-linked cAMP",
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
    options: [
      "Suppress presynaptic release after strong",
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
    options: [
      "Release of multiple neuroactive substances from",
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
    options: [
      "Acts on an element earlier in the same pathway",
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
    options: [
      "Releases Ca²⁺ from intracellular stores",
      "Opens nicotinic receptors at fast chemical synapses",
      "Hydrolyzes cAMP when homeostatic mechanisms are intact",
      "Closes all K⁺ channels permanently under typical experimental conditions",
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
    options: [
      "Inhibitory interneurons scaling responses",
      "Removing all Na⁺ channels at fast chemical synapses",
      "Increasing myelin on dendrites along a uniformly leaky cable",
      "Blocking metabotropic receptors globally at fast chemical synapses",
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
    options: [
      "Enhance GABA binding or channel opening",
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
    options: [
      "Binds Ca²⁺ and helps trigger",
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
    options: [
      "Diffuse more slowly over longer distances",
      "Are stored mainly in mitochondria during quiet wakefulness",
      "Cannot affect ion channels indirectly with dominant K⁺ permeability at rest",
      "Replace action potentials in axons when Na⁺ inactivation has progressed",
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
    options: [
      "It directly opposes spike initiation where",
      "It affects photoreceptors at fast chemical synapses",
      "It blocks the Na⁺/K⁺ pump primarily following presynaptic Ca²⁺ influx",
      "It occurs mainly in the cerebellum at fast chemical synapses",
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
    options: [
      "Respond with transient/larger receptive fields",
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
    options: [
      "Specific arrangements of thalamic inputs",
      "Random wiring without structure before cortical association areas",
      "Cochlear tonotopy in the primary sensory pathway named",
      "Muscle spindle length encoding contralateral to monocular stimulation",
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
    options: [
      "Maintains and manipulates information during",
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
    options: [
      "Sustained low-frequency stimulation paired",
      "Single action potential during the rising phase of the spike",
      "Blocking all Ca²⁺ signaling bilaterally at the level described",
      "Eliminating GABA release globally following presynaptic Ca²⁺ influx",
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
    options: [
      "Neutral cues with aversive outcomes",
      "Color opponency in V1 contralateral to monocular stimulation",
      "Basilar membrane stiffness alone after repeated synaptic activation",
      "Na⁺ channel gating in axons when Na⁺ inactivation has progressed",
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
    options: [
      "Replaying and transferring hippocampal patterns",
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
    options: [
      "Nonfluent speech with relatively preserved",
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
    options: [
      "The animal occupies specific locations in an",
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
    options: [
      "Enhance edges and contrast via lateral",
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
    options: [
      "Inability to form new declarative memories after",
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
    options: [
      "Encoding low-frequency pitch via precise",
      "Color vision in the fovea contralateral to monocular stimulation",
      "Olfactory combinatorial coding in the primary sensory pathway named",
      "Muscle spindle stretch detection before cortical association areas",
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
    options: [
      "Dopaminergic neurons in substantia nigra",
      "Photoreceptors in the retina when ligand-gated channels are open",
      "Most Purkinje cells instantly under typical experimental conditions",
      "Olfactory sensory neurons primarily in the primary sensory pathway named",
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
    options: [
      "Long-term but not early short-term memory",
      "Immediate reflexes without changes in presynaptic release probability",
      "Dark current in rods when NMDA receptors are co-activated",
      "Saltatory conduction in myelinated axons during the rising phase of the spike",
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
    options: [
      "Negative",
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
    options: [
      "Inward current exceeds outward current net",
      "K⁺ channels fully close permanently when Na⁺ inactivation has progressed",
      "Myelin is removed when Na⁺ inactivation has progressed",
      "Pump rate doubles when Na⁺ inactivation has progressed",
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
    options: [
      "Larger diameter",
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
    options: [
      "Passive attenuation along dendrites",
      "Active amplification at many spine under typical experimental conditions",
      "Saltatory conduction in dendrites along a uniformly leaky cable",
      "Exclusive Cl- pumping when homeostatic mechanisms are intact",
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
    options: [
      "Transports unequal charge (3 Na⁺ out",
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
    options: [
      "The peak/plateau of the spike",
      "Rest under typical experimental conditions",
      "Hyperpolarization below E_K when homeostatic mechanisms are intact",
      "Synaptic vesicle fusion following presynaptic Ca²⁺ influx",
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
    options: [
      "Voltage-gated Na⁺ channels",
      "Nicotinic ACh receptors when ligand-gated channels are open",
      "Photopigment activation when homeostatic mechanisms are intact",
      "Gap junction connexins at steady state in normoxic tissue",
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
    options: [
      "Wash out second messengers",
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
    options: [
      "Resting permeability is dominated by K⁺",
      "Requires na⁺ channels are open when homeostatic mechanisms are intact",
      "V_m equals E_Na if voltage-gated Na⁺ channels are inactivated",
      "No ion gradients exist under typical experimental conditions",
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
    options: [
      "Smaller dehydrated Na⁺ fits the pore",
      "Na⁺ is negatively charged at steady state in normoxic tissue",
      "K⁺ is impermeant in all channels when homeostatic mechanisms are intact",
      "Selectivity when homeostatic mechanisms are intact",
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
    options: [
      "Lower threshold for spike initiation",
      "Transduce odorants along a uniformly leaky cable",
      "Generate EPSPs when Na⁺ inactivation has progressed",
      "Produce myelin when Na⁺ inactivation has progressed",
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
    options: [
      "Reduces inward Na⁺ current during",
      "Increases Na⁺ current when homeostatic mechanisms are intact",
      "Blocks K⁺ leak with dominant K⁺ permeability at rest",
      "Hyperpolarizes without clamp under typical experimental conditions",
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
    options: [
      "Low-pass filters attenuating",
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
    options: [
      "Ohm·cm² (resistance times area)",
      "Farads per second under typical experimental conditions",
      "Meters per volt at steady state in normoxic tissue",
      "Spikes per second during the rising phase of the spike",
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
    options: [
      "Prolong repolarization",
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
    options: [
      "Fails at the discontinuity",
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
    options: [
      "I_C = C dV/dt charging the membrane",
      "Main mechanism: pump activity at steady state in normoxic tissue",
      "Saltatory conduction when Na⁺ inactivation has progressed",
      "Glial phagocytosis when homeostatic mechanisms are intact",
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
    options: [
      "Hyperpolarize or stabilize V_m toward E_Cl",
      "Depolarize to E_Na with dominant K⁺ permeability at rest",
      "Have no effect at mammalian body temperature",
      "Open NMDA receptors if voltage-gated Na⁺ channels are inactivated",
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
    options: [
      "Slightly",
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
    options: [
      "Make V_m uniform along a long process for",
      "Increase λ indefinitely when homeostatic mechanisms are intact",
      "Block synapses when ligand-gated channels are open",
      "Measure smell intensity when homeostatic mechanisms are intact",
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
    options: [
      "Channels open frequently during firing",
      "Cell is hyperpolarized at rest under typical experimental conditions",
      "Myelin is thick during the rising phase of the spike",
      "Requires k⁺ pumps run under typical experimental conditions",
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
    options: [
      "Ca2, influx and vesicle fusion kinetics",
      "Action potential travel in myelin along a uniformly leaky cable",
      "DNA transcription following presynaptic Ca²⁺ influx",
      "Photopigment recovery when ligand-gated channels are open",
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
    options: [
      "Distribution of EPSP amplitudes",
      "Muscle stretch when ligand-gated channels are open",
      "Retinal dark current when ligand-gated channels are open",
      "Cochlear place map at fast chemical synapses",
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
    options: [
      "Na, and K, (non-selective cation)",
      "Cl- when ligand-gated channels are open",
      "Ca2, primarily following presynaptic Ca²⁺ influx",
      "Large peptides following presynaptic Ca²⁺ influx",
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
    options: [
      "Ligand-gated Cl- channels",
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
    options: [
      "Activate PKA to phosphorylate channels",
      "Directly open nicotinic receptors when ligand-gated channels are open",
      "Replace SNARE proteins under typical experimental conditions",
      "Measure muscle length when homeostatic mechanisms are intact",
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
    options: [
      "Depolarization plus glutamate binding to",
      "Main mechanism: hyperpolarization when ligand-gated channels are open",
      "Main mechanism: gABA following presynaptic Ca²⁺ influx",
      "Odor binding when ligand-gated channels are open",
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
    options: [
      "Limit spread of excitation",
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
    options: [
      "Rapid synchrony and shared subthreshold",
      "Vesicle fusion without Ca2, following presynaptic Ca²⁺ influx",
      "Phototransduction at fast chemical synapses",
      "Requires retrograde peptide signaling when ligand-gated channels are open",
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
    options: [
      "Neurotransmitter into vesicles against",
      "Na, into nucleus at fast chemical synapses",
      "Rhodopsin into spines when ligand-gated channels are open",
      "Myelin proteins into cleft when Na⁺ inactivation has progressed",
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
    options: [
      "Depletion of readily releasable vesicles",
      "Persistent loss of DNA when NMDA receptors are co-activated",
      "Myelin thinning during the rising phase of the spike",
      "Rod-cone switch after repeated synaptic activation",
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
    options: [
      "Postsynaptic depolarization sufficient to unblock NMDA",
      "Main mechanism: presynaptic GABA following presynaptic Ca²⁺ influx",
      "Main mechanism: hyperpolarization without changes in presynaptic release probability",
      "Elimination of AMPA after repeated synaptic activation",
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
    options: [
      "Prolonged low-frequency stimulation at the",
      "Single photon absorption following presynaptic Ca²⁺ influx",
      "Muscle spindle stretch when ligand-gated channels are open",
      "Opening all Na channels at fast chemical synapses",
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
    options: [
      "Act on fast ionotropic",
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
    options: [
      "Positive allosteric modulation of GABA<sub>A</sub>",
      "Blocking glutamate synthesis following presynaptic Ca²⁺ influx",
      "Opening NMDA maximally at steady state in normoxic tissue",
      "Destroying synaptic vesicles following presynaptic Ca²⁺ influx",
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
    options: [
      "Vesicle docking and Ca2",
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
    options: [
      "Slows K, channels or alters cAMP",
      "Directly opens photopigment under typical experimental conditions",
      "Forms the blood-brain barrier when homeostatic mechanisms are intact",
      "Is identical to NMJ nicotinic when homeostatic mechanisms are intact",
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
    options: [
      "Slower synthesis/release",
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
    options: [
      "Response despite agonist still bound",
      "Resting K, leak at mammalian body temperature",
      "Myelin thickness when Na⁺ inactivation has progressed",
      "Cochlear amplification following presynaptic Ca²⁺ influx",
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
    options: [
      "cGMP drops and cGMP-gated channels close",
      "Na, channels open maximally when homeostatic mechanisms are intact",
      "Myelin is added along a uniformly leaky cable",
      "Tip links break permanently when homeostatic mechanisms are intact",
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
    options: [
      "Binocular input segregation that can be",
      "Random wiring without use before cortical association areas",
      "Requires olfactory maps in the primary sensory pathway named",
      "Saltatory conduction maps along a uniformly leaky cable",
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
    options: [
      "Localizing low-frequency sounds",
      "Color vision contralateral to monocular stimulation",
      "Taste umami in the primary sensory pathway named",
      "Proprioception in the primary sensory pathway named",
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
    options: [
      "Active amplification",
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
    options: [
      "Linear acceleration and head tilt",
      "Requires angular acceleration at steady state in normoxic tissue",
      "Odor concentration when homeostatic mechanisms are intact",
      "Retinal illuminance in the primary sensory pathway named",
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
    options: [
      "Combinatorial receptor activation across",
      "Single receptor for all odors at fast chemical synapses",
      "Cochlear tonotopy in the primary sensory pathway named",
      "Muscle spindle length contralateral to monocular stimulation",
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
    options: [
      "Facilitate movement by disinhibiting",
      "Stop all movement permanently in the adult human CNS",
      "Transduce sound bilaterally at the level described",
      "Generate dark current bilaterally at the level described",
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
    options: [
      "Error or unexpected events in motor",
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
    options: [
      "Distinguish similar memories/contexts",
      "Transduce photons bilaterally at the level described",
      "Amplify cochlea before cortical association areas",
      "Block Many synapses at fast chemical synapses",
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
    options: [
      "Gradual transfer of memory traces from",
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
    options: [
      "Language comprehension",
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
    options: [
      "Inhibitory gating of thalamocortical relay",
      "Excitatory drive to photoreceptors at fast chemical synapses",
      "Cochlear amplification in the primary sensory pathway named",
      "Myelin to all axons during the rising phase of the spike",
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
    options: [
      "Demyelination slowing/failing conduction",
      "Requires peripheral NMJ block under typical experimental conditions",
      "Loss of taste buds contralateral to monocular stimulation",
      "Purely retinal disease before cortical association areas",
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
    options: [
      "Response to maintained constant stimuli",
      "Most pain permanently in the primary sensory pathway named",
      "Need for receptors at fast chemical synapses",
      "Number of neurons in cortex in the adult human CNS",
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
    options: [
      "Vivid episodic memories for emotionally",
      "Procedural skill learning without changes in presynaptic release probability",
      "Cochlear phase locking before cortical association areas",
      "Passive membrane τ when NMDA receptors are co-activated",
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
    options: [
      "Executive control overhead when changing",
      "Purely sensory adaptation at steady state in normoxic tissue",
      "Myelin thickness when Na⁺ inactivation has progressed",
      "Rod-cone ratio when homeostatic mechanisms are intact",
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
    options: [
      "Higher temporal resolution but poorer",
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
