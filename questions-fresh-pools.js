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
