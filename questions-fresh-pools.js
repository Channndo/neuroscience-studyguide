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
      "“Open voltage-gated Na⁺ channels” does not match the mechanism (topic: Current Clamp). Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold. The correct choice—“Move V_m away from threshold”—fits that description.",
      "“Eliminate K⁺ leak conductance” does not match the mechanism (topic: Current Clamp). Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold. The correct choice—“Move V_m away from threshold”—fits that description.",
      "“Block the Na⁺/K⁺ pump permanently” does not match the mechanism (topic: Current Clamp). Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold. The correct choice—“Move V_m away from threshold”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Using the values stated below, which answer is correct: Tetrodotoxin (TTX) applied to an axon prevents action potentials primarily by?",
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
      "“Blocking voltage-gated K⁺ channels” does not match the mechanism (topic: Pharmacology). TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation. The correct choice—“Blocking voltage-gated Na⁺ channels”—fits that description.",
      "“Inhibiting the Na⁺/K⁺ ATPase” does not match the mechanism (topic: Pharmacology). TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation. The correct choice—“Blocking voltage-gated Na⁺ channels”—fits that description.",
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
      "“~37 mV more negative” does not match the mechanism (topic: Nernst Equation). The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0. The correct choice—“~37 mV toward 0 mV (less negative)”—fits that description.",
      "“To exactly +58 mV” does not match the mechanism (topic: Nernst Equation). The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0. The correct choice—“~37 mV toward 0 mV (less negative)”—fits that description.",
      "“Not at all because K⁺ is impermeant” does not match the mechanism (topic: Nernst Equation). The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0. The correct choice—“~37 mV toward 0 mV (less negative)”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Using the values stated below, which answer is correct: Decreasing axon diameter (with myelin unchanged) generally?",
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
      "“Speeds conduction by shortening λ (misapplies how active propagation uses local circ…” does not match the mechanism (topic: Action Potential Propagation). Smaller diameter raises R_i, shortening λ and slowing active propagation. The correct choice—“Slows conduction by increasing internal axial resistance”—fits that description.",
      "“Eliminates the need for Na⁺ channels (misapplies how active propagation uses local c…” does not match the mechanism (topic: Action Potential Propagation). Smaller diameter raises R_i, shortening λ and slowing active propagation. The correct choice—“Slows conduction by increasing internal axial resistance”—fits that description.",
      "“Prevents passive spread entirely (misapplies how active propagation uses local circu…” does not match the mechanism (topic: Action Potential Propagation). Smaller diameter raises R_i, shortening λ and slowing active propagation. The correct choice—“Slows conduction by increasing internal axial resistance”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If τ increases but λ is unchanged, subthreshold signals at the soma will?",
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
      "“Spread farther along dendrites (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory. The correct choice—“Reach steady deflection more slowly but spread the same distance”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
      "“No longer decay passively (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory. The correct choice—“Reach steady deflection more slowly but spread the same distance”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Using the values stated below, which answer is correct: Tetraethylammonium (TEA) is classically used to probe?",
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
      "“Voltage-gated Na⁺ channels” does not match the mechanism (topic: Pharmacology). TEA blocks many voltage-gated K⁺ channels, prolonging repolarization when applied. The correct choice—“Voltage-gated K⁺ channels”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: TEA blocks many voltage-gated K⁺ channels, prolonging repolarization when applied.",
      "“Glutamate transporters” does not match the mechanism (topic: Pharmacology). TEA blocks many voltage-gated K⁺ channels, prolonging repolarization when applied. The correct choice—“Voltage-gated K⁺ channels”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "When Ouabain inhibits the Na⁺/K⁺ ATPase. Over time this, which effect on membrane potential is most likely?",
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
      "“Block all chemical synapses (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Pump failure gradually collapses ion gradients, eventually depolarizing the cell. The correct choice—“Depolarize the cell as Na⁺ accumulates and K⁺ is lost”—fits that description.",
      "“Prevent action potentials by opening Cl⁻ channels (ignores which ion dominates resti…” does not match the mechanism (topic: Resting Potential). Pump failure gradually collapses ion gradients, eventually depolarizing the cell. The correct choice—“Depolarize the cell as Na⁺ accumulates and K⁺ is lost”—fits that description.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "If P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will?",
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
      "“Have no effect because Cl⁻ is not charged (ignores weighted permeabilities in the co…” does not match the mechanism (topic: Goldman Equation). Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest. The correct choice—“Tend to hyperpolarize or stabilize V_m toward E_Cl”—fits that description.",
      "“Reverse the Na⁺/K⁺ pump (ignores weighted permeabilities in the constant-field equat…” does not match the mechanism (topic: Goldman Equation). Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest. The correct choice—“Tend to hyperpolarize or stabilize V_m toward E_Cl”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a second stimulus must be?",
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
      "“Weaker because K⁺ channels are closed” does not match the mechanism (topic: Action Potentials). Partial Na⁺ channel inactivation raises the effective threshold for a second spike. The correct choice—“Stronger to reach threshold because many Na⁺ channels remain inactivated”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Using the values stated below, which answer is correct: Subthreshold EPSPs decay as they travel toward the soma mainly because of?",
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
      "“Active regeneration at every micron (uses the wrong sign or driving force for ionic …” does not match the mechanism (topic: Electrical Signaling). Dendrites lack dense voltage-gated Na⁺ for regeneration; passive decay dominates. The correct choice—“Passive cable properties (leak and axial resistance)”—fits that description.",
      "“Myelin along dendrites (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Dendrites lack dense voltage-gated Na⁺ for regeneration; passive decay dominates. The correct choice—“Passive cable properties (leak and axial resistance)”—fits that description.",
      "“Exclusive Na⁺ pump activity (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Dendrites lack dense voltage-gated Na⁺ for regeneration; passive decay dominates. The correct choice—“Passive cable properties (leak and axial resistance)”—fits that description.",
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
      "“Clamp extracellular K⁺ concentration” does not match the mechanism (topic: Patch Clamp). Voltage-clamp feedback injects whatever current is needed to maintain the set V_m. The correct choice—“Hold membrane voltage at a commanded value”—fits that description.",
      "“Block all synaptic input pharmacologically” does not match the mechanism (topic: Patch Clamp). Voltage-clamp feedback injects whatever current is needed to maintain the set V_m. The correct choice—“Hold membrane voltage at a commanded value”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Using the values stated below, which answer is correct: Local anesthetics such as lidocaine block?",
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
      "“Metabotropic GABAB receptors (misapplies how active propagation uses local circuit c…” does not match the mechanism (topic: Action Potential Propagation). Local anesthetics use-dependent block of Na⁺ channels prevents pain fiber firing. The correct choice—“Voltage-gated Na⁺ channels in axons”—fits that description.",
      "“Photopigment isomerization (misapplies how active propagation uses local circuit cur…” does not match the mechanism (topic: Action Potential Propagation). Local anesthetics use-dependent block of Na⁺ channels prevents pain fiber firing. The correct choice—“Voltage-gated Na⁺ channels in axons”—fits that description.",
      "“Basilar membrane motion (misapplies how active propagation uses local circuit curren…” does not match the mechanism (topic: Action Potential Propagation). Local anesthetics use-dependent block of Na⁺ channels prevents pain fiber firing. The correct choice—“Voltage-gated Na⁺ channels in axons”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Using the values stated below, which answer is correct: Increasing membrane thickness (more lipid) without changing channel density would tend to?",
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
    question: "Which description best applies to The rheobase of a neuron?",
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
      "“The maximum firing rate in Hz (uses the wrong sign or driving force for ionic curren…” does not match the mechanism (topic: Electrical Signaling). Rheobase quantifies excitability: smallest sustained stimulus that elicits a response. The correct choice—“The minimum current amplitude needed to reach threshold”—fits that description.",
      "“The equilibrium potential for Ca²⁺ (uses the wrong sign or driving force for ionic c…” does not match the mechanism (topic: Electrical Signaling). Rheobase quantifies excitability: smallest sustained stimulus that elicits a response. The correct choice—“The minimum current amplitude needed to reach threshold”—fits that description.",
      "“The synaptic delay at one synapse (uses the wrong sign or driving force for ionic cu…” does not match the mechanism (topic: Electrical Signaling). Rheobase quantifies excitability: smallest sustained stimulus that elicits a response. The correct choice—“The minimum current amplitude needed to reach threshold”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will?",
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
      "“Make V_m equal E_Na instantly (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest. The correct choice—“Make V_m less negative (depolarized relative to E_K)”—fits that description.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
      "“Stop all ion movement (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest. The correct choice—“Make V_m less negative (depolarized relative to E_K)”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Using the values stated below, which answer is correct: After a spike, slow after-hyperpolarization (AHP) is often mediated by?",
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
      "“Opening of voltage-gated Na⁺ channels” does not match the mechanism (topic: Action Potentials). Ca²⁺ entry during the spike can activate K_Ca channels, hyperpolarizing the membrane. The correct choice—“Ca²⁺-activated K⁺ channels”—fits that description.",
      "“Closing of all leak channels” does not match the mechanism (topic: Action Potentials). Ca²⁺ entry during the spike can activate K_Ca channels, hyperpolarizing the membrane. The correct choice—“Ca²⁺-activated K⁺ channels”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Using the values stated below, which answer is correct: An integrator neuron (high τ, high input resistance) is specialized to?",
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
      "“Fire at maximal rate to every input (uses the wrong sign or driving force for ionic …” does not match the mechanism (topic: Electrical Signaling). Long τ and high R_in favor temporal summation of subthreshold inputs. The correct choice—“Sum many small inputs over time before firing”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Long τ and high R_in favor temporal summation of subthreshold inputs.",
      "“Transduce odorants (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Long τ and high R_in favor temporal summation of subthreshold inputs. The correct choice—“Sum many small inputs over time before firing”—fits that description.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Using the values stated below, which answer is correct: At a synapse, if only Na⁺ channels open transiently, V_m moves toward?",
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
      "“The potassium reversal potential (E_K) as if K⁺ leak were unchanged” does not match the mechanism (topic: Goldman Equation). Dominant Na⁺ permeability during the rising phase drives V_m toward E_Na. The correct choice—“The sodium reversal potential (E_Na) while Na⁺ conductance dominates”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dominant Na⁺ permeability during the rising phase drives V_m toward E_Na.",
      "“0 mV regardless of whether concentration gradients are maintained” does not match the mechanism (topic: Goldman Equation). Dominant Na⁺ permeability during the rising phase drives V_m toward E_Na. The correct choice—“The sodium reversal potential (E_Na) while Na⁺ conductance dominates”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Using the values stated below, which answer is correct: Doubling both R_m and R_i while keeping geometry fixed changes λ such that?",
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
      "“λ doubles (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); scaling both by the same factor leaves λ the same. The correct choice—“λ is unchanged (√(R_m/R_i) ratio preserved)”—fits that description.",
      "“λ halves (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); scaling both by the same factor leaves λ the same. The correct choice—“λ is unchanged (√(R_m/R_i) ratio preserved)”—fits that description.",
      "“λ becomes zero (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); scaling both by the same factor leaves λ the same. The correct choice—“λ is unchanged (√(R_m/R_i) ratio preserved)”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Using the values stated below, which answer is correct: Cooling an axon typically slows conduction because?",
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
      "“Myelin is converted to cerebrospinal fluid” does not match the mechanism (topic: Action Potentials). Lower temperature slows gating and diffusion, delaying spike propagation. The correct choice—“Channel kinetics and ion mobility slow”—fits that description.",
      "“Resting potential becomes +40 mV” does not match the mechanism (topic: Action Potentials). Lower temperature slows gating and diffusion, delaying spike propagation. The correct choice—“Channel kinetics and ion mobility slow”—fits that description.",
      "“Na⁺/K⁺ pump reverses direction” does not match the mechanism (topic: Action Potentials). Lower temperature slows gating and diffusion, delaying spike propagation. The correct choice—“Channel kinetics and ion mobility slow”—fits that description.",
    ]
  }
];

const PART2_FRESH_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "Using the values stated below, which answer is correct: Presynaptic Ca²⁺ entry is critical because it?",
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
      "“Directly opens postsynaptic AMPA receptors (mixes up presynaptic release with postsy…” does not match the mechanism (topic: Synaptic Transmission). Ca²⁺ sensors on the release machinery couple depolarization to exocytosis. The correct choice—“Triggers synaptic vesicle fusion with the active zone membrane”—fits that description.",
      "“Hyperpolarizes the axon terminal to rest (mixes up presynaptic release with postsyna…” does not match the mechanism (topic: Synaptic Transmission). Ca²⁺ sensors on the release machinery couple depolarization to exocytosis. The correct choice—“Triggers synaptic vesicle fusion with the active zone membrane”—fits that description.",
      "“Blocks SNARE proteins permanently (mixes up presynaptic release with postsynaptic re…” does not match the mechanism (topic: Synaptic Transmission). Ca²⁺ sensors on the release machinery couple depolarization to exocytosis. The correct choice—“Triggers synaptic vesicle fusion with the active zone membrane”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Using the values stated below, which answer is correct: NMDA receptors show voltage-dependent Mg²⁺ block such that?",
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
      "“Mg²⁺ acts as a neurotransmitter at NMDA sites” does not match the mechanism (topic: Receptor Types). At rest Mg²⁺ blocks the pore; depolarization expels Mg²⁺, enabling NMDA current. The correct choice—“Depolarization relieves block and permits Ca²⁺ influx”—fits that description.",
      "“NMDA is purely metabotropic” does not match the mechanism (topic: Receptor Types). At rest Mg²⁺ blocks the pore; depolarization expels Mg²⁺, enabling NMDA current. The correct choice—“Depolarization relieves block and permits Ca²⁺ influx”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Using the values stated below, which answer is correct: Spike-timing-dependent plasticity (STDP) often strengthens synapses when?",
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
      "“No Ca²⁺ enters the postsynaptic cell” does not match the mechanism (topic: Synaptic Plasticity Rules). Classic Hebbian STDP favors causal order: presynaptic before postsynaptic firing. The correct choice—“Presynaptic spikes precede postsynaptic spikes within a narrow window”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Using the values stated below, which answer is correct: Autoreceptors on presynaptic terminals typically?",
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
      "“Increase release without limit (mixes up presynaptic release with postsynaptic recep…” does not match the mechanism (topic: Synaptic Transmission). Negative feedback via autoreceptors (e.g., 5-HT1, D2) inhibits release. The correct choice—“Reduce further neurotransmitter release when activated”—fits that description.",
      "“Convert electrical to chemical synapses (mixes up presynaptic release with postsynap…” does not match the mechanism (topic: Synaptic Transmission). Negative feedback via autoreceptors (e.g., 5-HT1, D2) inhibits release. The correct choice—“Reduce further neurotransmitter release when activated”—fits that description.",
      "“Generate action potentials in the terminal (mixes up presynaptic release with postsy…” does not match the mechanism (topic: Synaptic Transmission). Negative feedback via autoreceptors (e.g., 5-HT1, D2) inhibits release. The correct choice—“Reduce further neurotransmitter release when activated”—fits that description.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Using the values stated below, which answer is correct: At the neuromuscular junction, acetylcholine acts on?",
    options: [




      "Nicotinic ionotropic receptors on muscle endplate",
      "Muscarinic receptors on muscle nuclei (describes the wrong synaptic structure or transmission step)",
      "NMDA receptors on motor neurons (describes the wrong synaptic structure or transmission step)",
      "Gap junction hemichannels (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "ACh nicotinic receptors depolarize the muscle endplate (end-plate potential).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ACh nicotinic receptors depolarize the muscle endplate (end-plate potential).",
      "“NMDA receptors on motor neurons (describes the wrong synaptic structure or transmiss…” does not match the mechanism (topic: Chemical Synapses). ACh nicotinic receptors depolarize the muscle endplate (end-plate potential). The correct choice—“Nicotinic ionotropic receptors on muscle endplate”—fits that description.",
      "“Gap junction hemichannels (describes the wrong synaptic structure or transmission st…” does not match the mechanism (topic: Chemical Synapses). ACh nicotinic receptors depolarize the muscle endplate (end-plate potential). The correct choice—“Nicotinic ionotropic receptors on muscle endplate”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Using the values stated below, which answer is correct: Perisomatic inhibition from basket cells primarily?",
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
      "“Transduces light in the retina” does not match the mechanism (topic: Neural Circuits). Perisomatic GABAergic input strongly regulates when principal cells fire. The correct choice—“Controls timing and gain of pyramidal output”—fits that description.",
      "“Maps sound frequency on basilar membrane” does not match the mechanism (topic: Neural Circuits). Perisomatic GABAergic input strongly regulates when principal cells fire. The correct choice—“Controls timing and gain of pyramidal output”—fits that description.",
      "“Stores long-term declarative memories alone” does not match the mechanism (topic: Neural Circuits). Perisomatic GABAergic input strongly regulates when principal cells fire. The correct choice—“Controls timing and gain of pyramidal output”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Using the values stated below, which answer is correct: D1-type dopamine receptors are generally?",
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
      "“Identical to nicotinic ACh receptors” does not match the mechanism (topic: Neuromodulation). D1 receptors typically couple to Gs, raising cAMP and modulating excitability. The correct choice—“Excitatory/modulatory via Gs-linked cAMP increases”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Using the values stated below, which answer is correct: Endocannabinoids often act as retrograde messengers to?",
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
      "“Increase glutamate release unconditionally (mixes up presynaptic release with postsy…” does not match the mechanism (topic: Synaptic Transmission). Postsynaptic synthesis of endocannabinoids can feedback-inhibit presynaptic terminals. The correct choice—“Suppress presynaptic release after strong postsynaptic activity”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Postsynaptic synthesis of endocannabinoids can feedback-inhibit presynaptic terminals.",
      "“Replace SNARE-mediated fusion (mixes up presynaptic release with postsynaptic recept…” does not match the mechanism (topic: Synaptic Transmission). Postsynaptic synthesis of endocannabinoids can feedback-inhibit presynaptic terminals. The correct choice—“Suppress presynaptic release after strong postsynaptic activity”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Which description best applies to The readily releasable pool of vesicles?",
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
      "“Identical to neurotransmitter transporters” does not match the mechanism (topic: Synaptic Transmission). Primed vesicles at the active zone supply fast synchronous release. The correct choice—“Docked/primed for fast release upon Ca²⁺ influx”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Primed vesicles at the active zone supply fast synchronous release.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Using the values stated below, which answer is correct: Co-transmission refers to?",
    options: [




      "Release of multiple neuroactive substances from one neuron",
      "Main mechanism: electrical coupling via gap junctions (describes the wrong synaptic structure or transmission step)",
      "A single receptor type for all transmitters (describes the wrong synaptic structure or transmission step)",
      "Propagation without vesicles (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Neurons may release classic transmitters plus peptides or other modulators.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons may release classic transmitters plus peptides or other modulators.",
      "“A single receptor type for all transmitters (describes the wrong synaptic structure …” does not match the mechanism (topic: Chemical Synapses). Neurons may release classic transmitters plus peptides or other modulators. The correct choice—“Release of multiple neuroactive substances from one neuron”—fits that description.",
      "“Propagation without vesicles (describes the wrong synaptic structure or transmission…” does not match the mechanism (topic: Chemical Synapses). Neurons may release classic transmitters plus peptides or other modulators. The correct choice—“Release of multiple neuroactive substances from one neuron”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Using the values stated below, which answer is correct: Feedback inhibition differs from feedforward inhibition because feedback?",
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
      "“Requires occurs in the olfactory bulb” does not match the mechanism (topic: Neural Circuits). Feedback loops regulate activity of cells that were just active (e.g., Renshaw, interneuron loops). The correct choice—“Acts on an element earlier in the same pathway after it fired”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Feedback loops regulate activity of cells that were just active (e.g., Renshaw, interneuron loops).",
      "“Prevents all sensory input” does not match the mechanism (topic: Neural Circuits). Feedback loops regulate activity of cells that were just active (e.g., Renshaw, interneuron loops). The correct choice—“Acts on an element earlier in the same pathway after it fired”—fits that description.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Using the values stated below, which answer is correct: Phospholipase C activation produces IP₃ and DAG; IP₃ primarily?",
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
      "“Opens nicotinic receptors” does not match the mechanism (topic: Second Messengers). IP₃ binds ER receptors to mobilize stored Ca²⁺. The correct choice—“Releases Ca²⁺ from intracellular stores”—fits that description.",
      "“Hydrolyzes cAMP” does not match the mechanism (topic: Second Messengers). IP₃ binds ER receptors to mobilize stored Ca²⁺. The correct choice—“Releases Ca²⁺ from intracellular stores”—fits that description.",
      "“Closes all K⁺ channels permanently” does not match the mechanism (topic: Second Messengers). IP₃ binds ER receptors to mobilize stored Ca²⁺. The correct choice—“Releases Ca²⁺ from intracellular stores”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Using the values stated below, which answer is correct: Divisive normalization in cortex can be implemented by?",
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
      "“Removing all Na⁺ channels (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Inhibition can divide or scale excitatory drive depending on circuit motif. The correct choice—“Inhibitory interneurons scaling responses relative to local activity”—fits that description.",
      "“Increasing myelin on dendrites (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Inhibition can divide or scale excitatory drive depending on circuit motif. The correct choice—“Inhibitory interneurons scaling responses relative to local activity”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition can divide or scale excitatory drive depending on circuit motif.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Using the values stated below, which answer is correct: Allosteric modulators of GABA<sub>A</sub> receptors (e.g., benzodiazepines) typically?",
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
      "“Block GABA synthesis in presynaptic terminals” does not match the mechanism (topic: Receptor Types). Positive allosteric modulators increase inhibitory effect of GABA without being the primary agonist. The correct choice—“Enhance GABA binding or channel opening probability”—fits that description.",
      "“Open NMDA receptors instead” does not match the mechanism (topic: Receptor Types). Positive allosteric modulators increase inhibitory effect of GABA without being the primary agonist. The correct choice—“Enhance GABA binding or channel opening probability”—fits that description.",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. Positive allosteric modulators increase inhibitory effect of GABA without being the primary agonist.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Using the values stated below, which answer is correct: Synaptotagmin acts as a Ca²⁺ sensor for exocytosis because it?",
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
      "“Pumps ACh into vesicles (mixes up presynaptic release with postsynaptic receptor log…” does not match the mechanism (topic: Synaptic Transmission). Synaptotagmin couples Ca²⁺ rise to vesicle fusion machinery. The correct choice—“Binds Ca²⁺ and helps trigger SNARE-mediated fusion”—fits that description.",
      "“Is a glutamate receptor subunit (mixes up presynaptic release with postsynaptic rece…” does not match the mechanism (topic: Synaptic Transmission). Synaptotagmin couples Ca²⁺ rise to vesicle fusion machinery. The correct choice—“Binds Ca²⁺ and helps trigger SNARE-mediated fusion”—fits that description.",
      "“Generates EPSPs in muscle (mixes up presynaptic release with postsynaptic receptor l…” does not match the mechanism (topic: Synaptic Transmission). Synaptotagmin couples Ca²⁺ rise to vesicle fusion machinery. The correct choice—“Binds Ca²⁺ and helps trigger SNARE-mediated fusion”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Using the values stated below, which answer is correct: Neuropeptides compared to small-molecule transmitters often?",
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
      "“Cannot affect ion channels indirectly” does not match the mechanism (topic: Neuromodulation). Peptide co-transmitters/modulators act on broader spatial and temporal scales. The correct choice—“Diffuse more slowly over longer distances and modulate on slower timescales”—fits that description.",
      "“Replace action potentials in axons” does not match the mechanism (topic: Neuromodulation). Peptide co-transmitters/modulators act on broader spatial and temporal scales. The correct choice—“Diffuse more slowly over longer distances and modulate on slower timescales”—fits that description.",
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
      "“Eliminate all firing permanently” does not match the mechanism (topic: Neural Circuits). Strong lateral/recurrent inhibition suppresses weaker competitors. The correct choice—“Sharpen selection of one active representation”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Strong lateral/recurrent inhibition suppresses weaker competitors.",
      "“Map odorants one-to-one to glomeruli without overlap” does not match the mechanism (topic: Neural Circuits). Strong lateral/recurrent inhibition suppresses weaker competitors. The correct choice—“Sharpen selection of one active representation”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Using the values stated below, which answer is correct: An IPSP arriving at the axon initial segment is especially effective because?",
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
    question: "Using the values stated below, which answer is correct: Magnocellular (M) retinal ganglion cells compared to parvocellular (P) cells typically?",
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
      "“Lack any axonal projection to the brain” does not match the mechanism (topic: Visual System). M cells favor temporal change and motion; P cells favor color and fine detail. The correct choice—“Respond with transient/larger receptive fields and prefer motion/contrast”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M cells favor temporal change and motion; P cells favor color and fine detail.",
    ]
  },
  {
    topic: "Visual System",
    question: "Using the values stated below, which answer is correct: Orientation selectivity in primary visual cortex arises largely from?",
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
      "“Random wiring without structure” does not match the mechanism (topic: Visual System). Hubel–Wiesel models use oriented subfields and inhibition to build orientation tuning. The correct choice—“Specific arrangements of thalamic inputs and intracortical inhibition”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Muscle spindle length encoding” does not match the mechanism (topic: Visual System). Hubel–Wiesel models use oriented subfields and inhibition to build orientation tuning. The correct choice—“Specific arrangements of thalamic inputs and intracortical inhibition”—fits that description.",
    ]
  },
  {
    topic: "Executive Function",
    question: "Using the values stated below, which answer is correct: Working memory tasks often engage prefrontal cortex because it?",
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
      "“Is the sole source of action potentials in the CNS” does not match the mechanism (topic: Executive Function). PFC supports temporary maintenance/control of task-relevant information. The correct choice—“Maintains and manipulates information during delay periods”—fits that description.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Using the values stated below, which answer is correct: Long-term depression (LTD) at cerebellar parallel fiber–Purkinje synapses is often induced by?",
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
      "“Blocking all Ca²⁺ signaling” does not match the mechanism (topic: Cerebellum). Cerebellar LTD protocols use specific pairing of parallel and climbing fiber activity. The correct choice—“Sustained low-frequency stimulation paired with climbing fiber input”—fits that description.",
      "“Eliminating GABA release globally” does not match the mechanism (topic: Cerebellum). Cerebellar LTD protocols use specific pairing of parallel and climbing fiber activity. The correct choice—“Sustained low-frequency stimulation paired with climbing fiber input”—fits that description.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Using the values stated below, which answer is correct: Cerebellar output helps correct movement errors by comparing?",
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
      "“Photopigment bleaching rates (maps the lesion to the wrong motor pathway or reflex)” does not match the mechanism (topic: Motor Systems). Forward models and sensory feedback guide cerebellar adjustment of motor commands. The correct choice—“Predicted vs. actual sensory consequences of actions”—fits that description.",
      "“Blood CO₂ without neural signals (maps the lesion to the wrong motor pathway or refl…” does not match the mechanism (topic: Motor Systems). Forward models and sensory feedback guide cerebellar adjustment of motor commands. The correct choice—“Predicted vs. actual sensory consequences of actions”—fits that description.",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Using the values stated below, which answer is correct: Amygdala activation during fear conditioning strongly associates?",
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
      "“Basilar membrane stiffness alone” does not match the mechanism (topic: Emotion & Memory). Amygdala encodes emotional salience and learns CS–US associations. The correct choice—“Neutral cues with aversive outcomes”—fits that description.",
      "“Na⁺ channel gating in axons” does not match the mechanism (topic: Emotion & Memory). Amygdala encodes emotional salience and learns CS–US associations. The correct choice—“Neutral cues with aversive outcomes”—fits that description.",
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Using the values stated below, which answer is correct: Slow-wave sleep is thought to support memory consolidation partly by?",
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
      "“Eliminating all synapses formed during the day” does not match the mechanism (topic: Sleep & Memory). Hippocampo-cortical replay during SWS supports systems consolidation. The correct choice—“Replaying and transferring hippocampal patterns to cortex”—fits that description.",
      "“Blocking all thalamic input permanently” does not match the mechanism (topic: Sleep & Memory). Hippocampo-cortical replay during SWS supports systems consolidation. The correct choice—“Replaying and transferring hippocampal patterns to cortex”—fits that description.",
      "“Converting rods to cones” does not match the mechanism (topic: Sleep & Memory). Hippocampo-cortical replay during SWS supports systems consolidation. The correct choice—“Replaying and transferring hippocampal patterns to cortex”—fits that description.",
    ]
  },
  {
    topic: "Language",
    question: "What does Broca's area damage classically produce?",
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
      "“Blindness in both visual fields” does not match the mechanism (topic: Language). Broca's aphasia: effortful, agrammatic speech; comprehension often less impaired. The correct choice—“Nonfluent speech with relatively preserved comprehension”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Using the values stated below, which answer is correct: Place cells in hippocampus fire when?",
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
      "“Requires during REM sleep without locomotion” does not match the mechanism (topic: Learning & Memory). Place fields encode spatial location; key evidence for cognitive maps. The correct choice—“The animal occupies specific locations in an environment”—fits that description.",
      "“Odorants bind olfactory receptors” does not match the mechanism (topic: Learning & Memory). Place fields encode spatial location; key evidence for cognitive maps. The correct choice—“The animal occupies specific locations in an environment”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Place fields encode spatial location; key evidence for cognitive maps.",
    ]
  },
  {
    topic: "Neuroimaging",
    question: "Using the values stated below, which answer is correct: BOLD fMRI signal indirectly reflects?",
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
      "“Direct measurement of every synaptic vesicle fusion” does not match the mechanism (topic: Neuroimaging). Neural activity drives blood flow and oxygenation changes detected as BOLD contrast. The correct choice—“Local changes in blood oxygenation coupled to neural activity”—fits that description.",
      "“Static anatomy without physiology” does not match the mechanism (topic: Neuroimaging). Neural activity drives blood flow and oxygenation changes detected as BOLD contrast. The correct choice—“Local changes in blood oxygenation coupled to neural activity”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Neural activity drives blood flow and oxygenation changes detected as BOLD contrast.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Using the values stated below, which answer is correct: Upper motor neuron lesions (e.g., corticospinal) often cause?",
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
      "“Permanent blindness” does not match the mechanism (topic: Motor Systems). UMN loss removes inhibitory control, producing spasticity; LMN lesions differ. The correct choice—“Spasticity and hyperreflexia with weakness”—fits that description.",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Using the values stated below, which answer is correct: Receptive field surround antagonism in vision helps?",
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
      "“Eliminate all rod function” does not match the mechanism (topic: Sensory Systems). Center-surround antagonism sharpens spatial contrast (e.g., retinal ganglion cells). The correct choice—“Enhance edges and contrast via lateral inhibition”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Center-surround antagonism sharpens spatial contrast (e.g., retinal ganglion cells).",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Using the values stated below, which answer is correct: The thalamus functions largely as?",
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
      "“Exclusive storage of long-term motor skills without relay” does not match the mechanism (topic: Neuroanatomy). Thalamic nuclei gate and relay streams to specific cortical areas. The correct choice—“A gateway relaying and modulating sensory/motor information to cortex”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Using the values stated below, which answer is correct: Anterograde amnesia after hippocampal damage means?",
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
      "“Loss of all procedural skills including riding a bike” does not match the mechanism (topic: Learning & Memory). Hippocampus critical for encoding new episodic/declarative memories. The correct choice—“Inability to form new declarative memories after injury”—fits that description.",
      "“Complete elimination of sensation” does not match the mechanism (topic: Learning & Memory). Hippocampus critical for encoding new episodic/declarative memories. The correct choice—“Inability to form new declarative memories after injury”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hippocampus critical for encoding new episodic/declarative memories.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Using the values stated below, which answer is correct: Phase locking in auditory nerve fibers supports?",
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
    question: "Using the values stated below, which answer is correct: Parkinson disease motor symptoms relate especially to loss of?",
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
      "“All Purkinje cells instantly” does not match the mechanism (topic: Clinical Correlates). SNc dopamine loss disrupts basal ganglia movement control (bradykinesia, rigidity). The correct choice—“Dopaminergic neurons in substantia nigra pars compacta”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNc dopamine loss disrupts basal ganglia movement control (bradykinesia, rigidity).",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Using the values stated below, which answer is correct: Protein synthesis blockers after training impair?",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Late LTP/LTM often requires gene expression and new proteins.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Late LTP/LTM often requires gene expression and new proteins.",
      "“Saltatory conduction in myelinated axons” does not match the mechanism (topic: Learning & Memory). Late LTP/LTM often requires gene expression and new proteins. The correct choice—“Long-term but not early short-term memory in many paradigms”—fits that description.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Using the values stated below, which answer is correct: The blood–brain barrier limits passage of?",
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
      "“All ions including O₂ and CO₂ equally (localizes the function to the wrong brain reg…” does not match the mechanism (topic: Neuroanatomy). Tight junctions and transporters regulate CNS access; small gases still diffuse. The correct choice—“Many large/polar molecules while allowing some regulated transport”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Tight junctions and transporters regulate CNS access; small gases still diffuse.",
      "“Nothing; all substances cross freely (localizes the function to the wrong brain regi…” does not match the mechanism (topic: Neuroanatomy). Tight junctions and transporters regulate CNS access; small gases still diffuse. The correct choice—“Many large/polar molecules while allowing some regulated transport”—fits that description.",
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
      "“Stop the Na⁺/K⁺ pump” does not match the mechanism (topic: Goldman Equation). Goldman weighting shifts V_m toward newly permeant ions. The correct choice—“Depolarize V_m toward E_Na”—fits that description.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the values stated below, which answer is correct: For a cation with higher concentration inside than outside, E_ion is typically?",
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
      "“Zero regardless of charge (contradicts the Nernst dependence on inside/outside conce…” does not match the mechanism (topic: Nernst Equation). Inward concentration gradient for cations yields negative equilibrium potential. The correct choice—“Negative (inside negative relative to outside at equilibrium)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inward concentration gradient for cations yields negative equilibrium potential.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Using the values stated below, which answer is correct: Increasing membrane leak conductance (lower R_m) while C_m is fixed?",
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
      "“Increases τ and λ without limit” does not match the mechanism (topic: Passive Membrane Properties). More leak lowers R_m, shortening time and length constants. The correct choice—“Decreases τ and shortens λ”—fits that description.",
      "“Blocks action potentials by opening Na channels” does not match the mechanism (topic: Passive Membrane Properties). More leak lowers R_m, shortening time and length constants. The correct choice—“Decreases τ and shortens λ”—fits that description.",
      "Membrane capacitance stores charge (Q = CV) and slows voltage changes, but capacitive current alone cannot produce the selective Na⁺ influx and delayed K⁺ efflux that underlie spike upstroke and repolarization. More leak lowers R_m, shortening time and length constants.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Which clinical presentation is most consistent with The upstroke threshold is reached when?",
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
      "“K⁺ channels fully close permanently” does not match the mechanism (topic: Action Potentials). Regenerative Na⁺ current drives depolarization past threshold. The correct choice—“Inward current exceeds outward current net positive feedback”—fits that description.",
      "“Myelin is removed” does not match the mechanism (topic: Action Potentials). Regenerative Na⁺ current drives depolarization past threshold. The correct choice—“Inward current exceeds outward current net positive feedback”—fits that description.",
      "“Pump rate doubles” does not match the mechanism (topic: Action Potentials). Regenerative Na⁺ current drives depolarization past threshold. The correct choice—“Inward current exceeds outward current net positive feedback”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In unmyelinated axons, conduction velocity increases with?",
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
      "“Removing all Na⁺ channels (misapplies how active propagation uses local circuit curr…” does not match the mechanism (topic: Action Potential Propagation). Wider axons have lower R_i, supporting faster propagation. The correct choice—“Larger diameter (lower internal resistance)”—fits that description.",
      "“Cooling the axon (misapplies how active propagation uses local circuit currents)” does not match the mechanism (topic: Action Potential Propagation). Wider axons have lower R_i, supporting faster propagation. The correct choice—“Larger diameter (lower internal resistance)”—fits that description.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Using the values stated below, which answer is correct: An EPSP recorded at the soma from a distal dendrite is smaller than at the site of input because of?",
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
      "“Active amplification at every spine” does not match the mechanism (topic: Electrical Signaling). Subthreshold signals decay with distance in passive cable. The correct choice—“Passive attenuation along dendrites”—fits that description.",
      "“Saltatory conduction in dendrites” does not match the mechanism (topic: Electrical Signaling). Subthreshold signals decay with distance in passive cable. The correct choice—“Passive attenuation along dendrites”—fits that description.",
      "“Exclusive Cl- pumping” does not match the mechanism (topic: Electrical Signaling). Subthreshold signals decay with distance in passive cable. The correct choice—“Passive attenuation along dendrites”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Using the values stated below, which answer is correct: The Na⁺/K⁺ pump is electrogenic because it?",
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
      "“Opens voltage-gated channels (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Net outward charge movement hyperpolarizes slightly beyond pure leak balance. The correct choice—“Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)”—fits that description.",
      "“Is the sole determinant of V_m without leaks (ignores which ion dominates resting pe…” does not match the mechanism (topic: Resting Potential). Net outward charge movement hyperpolarizes slightly beyond pure leak balance. The correct choice—“Transports unequal charge (3 Na⁺ out, 2 K⁺ in per cycle)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Net outward charge movement hyperpolarizes slightly beyond pure leak balance.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Using the values stated below, which answer is correct: Voltage-gated Na⁺ channel inactivation gates close during?",
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
      "“Synaptic vesicle fusion” does not match the mechanism (topic: Channel Gating). Inactivation during the spike produces the absolute refractory period. The correct choice—“The peak/plateau of the spike”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Using the values stated below, which answer is correct: TTX sensitivity indicates dependence on?",
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
      "“Nicotinic ACh receptors” does not match the mechanism (topic: Pharmacology). TTX blocks Na⁺ channels and abolishes spikes. The correct choice—“Voltage-gated Na⁺ channels”—fits that description.",
      "“Photopigment activation” does not match the mechanism (topic: Pharmacology). TTX blocks Na⁺ channels and abolishes spikes. The correct choice—“Voltage-gated Na⁺ channels”—fits that description.",
      "“Gap junction connexins” does not match the mechanism (topic: Pharmacology). TTX blocks Na⁺ channels and abolishes spikes. The correct choice—“Voltage-gated Na⁺ channels”—fits that description.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Which capability best describes Whole-cell patch clamp dialyzes the interior of the cell, which?",
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
      "“Permanently myelinate the axon” does not match the mechanism (topic: Patch Clamp). Dialysis can run down metabotropic signaling components. The correct choice—“Wash out second messengers and dialyzable factors over time”—fits that description.",
      "“Replace synaptic vesicles” does not match the mechanism (topic: Patch Clamp). Dialysis can run down metabotropic signaling components. The correct choice—“Wash out second messengers and dialyzable factors over time”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dialysis can run down metabotropic signaling components.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If E_K = -80 mV and E_Na = +60 mV, V_m at rest near -65 mV implies?",
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
      "“Requires na⁺ channels are open” does not match the mechanism (topic: Quantitative Physiology). Rest lies closer to E_K when K⁺ permeability dominates. The correct choice—“Resting permeability is dominated by K⁺ with some Na⁺ leak”—fits that description.",
      "“V_m equals E_Na” does not match the mechanism (topic: Quantitative Physiology). Rest lies closer to E_K when K⁺ permeability dominates. The correct choice—“Resting permeability is dominated by K⁺ with some Na⁺ leak”—fits that description.",
      "“No ion gradients exist” does not match the mechanism (topic: Quantitative Physiology). Rest lies closer to E_K when K⁺ permeability dominates. The correct choice—“Resting permeability is dominated by K⁺ with some Na⁺ leak”—fits that description.",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "Using the values stated below, which answer is correct: The Na⁺ channel selectivity filter favors Na⁺ over K⁺ partly because?",
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
      "“Na⁺ is negatively charged” does not match the mechanism (topic: Ion Selectivity). Pore structure discriminates ion size/hydration shell. The correct choice—“Smaller dehydrated Na⁺ fits the pore geometry better than K⁺”—fits that description.",
      "“K⁺ is impermeant in all channels” does not match the mechanism (topic: Ion Selectivity). Pore structure discriminates ion size/hydration shell. The correct choice—“Smaller dehydrated Na⁺ fits the pore geometry better than K⁺”—fits that description.",
      "“Selectivity” does not match the mechanism (topic: Ion Selectivity). Pore structure discriminates ion size/hydration shell. The correct choice—“Smaller dehydrated Na⁺ fits the pore geometry better than K⁺”—fits that description.",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "Which description best applies to At the ion equilibrium potential, net electrodiffusive flux of that ion?",
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
      "“Undefined” does not match the mechanism (topic: Equilibrium vs Steady State). Equilibrium: no net movement for that ion. The correct choice—“Zero”—fits that description.",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "Using the values stated below, which answer is correct: High density of voltage-gated Na⁺ at the AIS serves to?",
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
      "“Transduce odorants” does not match the mechanism (topic: Axon Initial Segment). AIS is the spike initiation zone in many neurons. The correct choice—“Lower threshold for spike initiation and regulate backpropagation”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AIS is the spike initiation zone in many neurons.",
      "“Produce myelin” does not match the mechanism (topic: Axon Initial Segment). AIS is the spike initiation zone in many neurons. The correct choice—“Lower threshold for spike initiation and regulate backpropagation”—fits that description.",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Using the values stated below, which answer is correct: Replacing extracellular Na⁺ with impermeant cation during voltage clamp typically?",
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
      "“Increases Na⁺ current” does not match the mechanism (topic: Experimental Methods). Na⁺ removal abolishes INa. The correct choice—“Reduces inward Na⁺ current during depolarizing steps”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ removal abolishes INa.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Na⁺ removal abolishes INa.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Using the values stated below, which answer is correct: Passive dendrites act as?",
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
      "“Perfect amplifiers of all frequencies” does not match the mechanism (topic: Dendritic Integration). RC properties filter synaptic inputs temporally and spatially. The correct choice—“Low-pass filters attenuating high-frequency inputs”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RC properties filter synaptic inputs temporally and spatially.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. RC properties filter synaptic inputs temporally and spatially.",
    ]
  },
  {
    topic: "Membrane Biophysics",
    question: "Using the values stated below, which answer is correct: Specific membrane resistance R_m has units conceptually of?",
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
      "“Meters per volt” does not match the mechanism (topic: Membrane Biophysics). R_m normalizes leak per unit area of membrane. The correct choice—“Ohm·cm² (resistance times area)”—fits that description.",
      "“Spikes per second” does not match the mechanism (topic: Membrane Biophysics). R_m normalizes leak per unit area of membrane. The correct choice—“Ohm·cm² (resistance times area)”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Using the values stated below, which answer is correct: Afterchannel block of delayed rectifier K⁺ would?",
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
      "“Prevent Na⁺ influx” does not match the mechanism (topic: Action Potentials). K⁺ outward current repolarizes; block widens the spike. The correct choice—“Prolong repolarization and broaden spikes”—fits that description.",
      "“Eliminate resting potential” does not match the mechanism (topic: Action Potentials). K⁺ outward current repolarizes; block widens the spike. The correct choice—“Prolong repolarization and broaden spikes”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: K⁺ outward current repolarizes; block widens the spike.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "When an action potential reaches a cut axon terminal (open end), active propagation?",
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
    question: "Using the values stated below, which answer is correct: Current divided between capacitive and resistive paths at step onset reflects?",
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
      "“Saltatory conduction (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Early current charges C_m before steady leak dominates. The correct choice—“I_C = C dV/dt charging the membrane”—fits that description.",
      "“Glial phagocytosis (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Early current charges C_m before steady leak dominates. The correct choice—“I_C = C dV/dt charging the membrane”—fits that description.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "When Adding Cl- conductance when E_Cl is below V_m, which effect on membrane potential is most likely?",
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
      "“Have no effect (ignores weighted permeabilities in the constant-field equation)” does not match the mechanism (topic: Goldman Equation). Conductance pulls V_m toward that ion's equilibrium. The correct choice—“Hyperpolarize or stabilize V_m toward E_Cl”—fits that description.",
      "“Open NMDA receptors (ignores weighted permeabilities in the constant-field equation)” does not match the mechanism (topic: Goldman Equation). Conductance pulls V_m toward that ion's equilibrium. The correct choice—“Hyperpolarize or stabilize V_m toward E_Cl”—fits that description.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the values stated below, which answer is correct: Temperature increase in the Nernst relation (other factors fixed) changes E_ion magnitude?",
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
      "“Not at all (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). RT/F scales with temperature. The correct choice—“Slightly (proportionally to absolute temperature in RT/F)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RT/F scales with temperature.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RT/F scales with temperature.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Using the values stated below, which answer is correct: Space clamp in experiments aims to?",
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
      "“Increase λ indefinitely (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Space clamp reduces axial voltage gradients. The correct choice—“Make V_m uniform along a long process for accurate voltage clamp”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Space clamp reduces axial voltage gradients.",
      "“Measure smell intensity (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Space clamp reduces axial voltage gradients. The correct choice—“Make V_m uniform along a long process for accurate voltage clamp”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Using the values stated below, which answer is correct: Lidocaine use-dependence means block is stronger when?",
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
      "“Myelin is thick” does not match the mechanism (topic: Pharmacology). Many local anesthetics prefer inactivated/open states. The correct choice—“Channels open frequently during firing”—fits that description.",
      "“Requires k⁺ pumps run” does not match the mechanism (topic: Pharmacology). Many local anesthetics prefer inactivated/open states. The correct choice—“Channels open frequently during firing”—fits that description.",
    ]
  },
  {
    topic: "Current Clamp",
    question: "Using the values stated below, which answer is correct: Zero net current injection in current clamp at rest records?",
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
      "“E_Na directly” does not match the mechanism (topic: Current Clamp). No injected current → passive resting V_m. The correct choice—“Resting potential”—fits that description.",
      "“Synaptic cleft width” does not match the mechanism (topic: Current Clamp). No injected current → passive resting V_m. The correct choice—“Resting potential”—fits that description.",
      "“Cochlear vibration” does not match the mechanism (topic: Current Clamp). No injected current → passive resting V_m. The correct choice—“Resting potential”—fits that description.",
    ]
  }
];

const PART2_FRESH_POOL_2 = [
  {
    topic: "Chemical Synapses",
    question: "Using the values stated below, which answer is correct: Synaptic delay (≈0.5–2 ms) is largely due to?",
    options: [




      "Ca2, influx and vesicle fusion kinetics",
      "Action potential travel in myelin",
      "DNA transcription (describes the wrong synaptic structure or transmission step)",
      "Photopigment recovery (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Release machinery adds milliseconds after presynaptic spike arrival.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release machinery adds milliseconds after presynaptic spike arrival.",
      "“DNA transcription (describes the wrong synaptic structure or transmission step)” does not match the mechanism (topic: Chemical Synapses). Release machinery adds milliseconds after presynaptic spike arrival. The correct choice—“Ca2+ influx and vesicle fusion kinetics”—fits that description.",
      "“Photopigment recovery (describes the wrong synaptic structure or transmission step)” does not match the mechanism (topic: Chemical Synapses). Release machinery adds milliseconds after presynaptic spike arrival. The correct choice—“Ca2+ influx and vesicle fusion kinetics”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Using the values stated below, which answer is correct: Quantal analysis estimates release probability from?",
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
      "“Muscle stretch (mixes up presynaptic release with postsynaptic receptor logic)” does not match the mechanism (topic: Synaptic Transmission). Quantal content reflects number of vesicles released. The correct choice—“Distribution of EPSP amplitudes (multiples of mEPSP size)”—fits that description.",
      "“Retinal dark current (mixes up presynaptic release with postsynaptic receptor logic)” does not match the mechanism (topic: Synaptic Transmission). Quantal content reflects number of vesicles released. The correct choice—“Distribution of EPSP amplitudes (multiples of mEPSP size)”—fits that description.",
      "“Cochlear place map (mixes up presynaptic release with postsynaptic receptor logic)” does not match the mechanism (topic: Synaptic Transmission). Quantal content reflects number of vesicles released. The correct choice—“Distribution of EPSP amplitudes (multiples of mEPSP size)”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Using the values stated below, which answer is correct: AMPA receptors at many central synapses are permeable to?",
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
      "“Large peptides” does not match the mechanism (topic: Receptor Types). AMPA typically carries depolarizing mixed cation current. The correct choice—“Na+ and K+ (non-selective cation)”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which description best applies to GABA<sub>A</sub> receptors?",
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
      "“Voltage-gated Na channels” does not match the mechanism (topic: Receptor Types). GABAA is ionotropic Cl- conductance. The correct choice—“Ligand-gated Cl- channels (usually inhibitory)”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. GABAA is ionotropic Cl- conductance.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Which capability best describes cAMP produced by adenylyl cyclase?",
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
      "“Directly open nicotinic receptors” does not match the mechanism (topic: Second Messengers). PKA is a major cAMP effector in neurons. The correct choice—“Activate PKA to phosphorylate channels and enzymes”—fits that description.",
      "“Replace SNARE proteins” does not match the mechanism (topic: Second Messengers). PKA is a major cAMP effector in neurons. The correct choice—“Activate PKA to phosphorylate channels and enzymes”—fits that description.",
      "“Measure muscle length” does not match the mechanism (topic: Second Messengers). PKA is a major cAMP effector in neurons. The correct choice—“Activate PKA to phosphorylate channels and enzymes”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Using the values stated below, which answer is correct: Coincidence detection (e.g., NMDA) requires?",
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
      "“Eliminate all inhibition” does not match the mechanism (topic: Neural Circuits). FF inhibition constrains excitatory recruitment. The correct choice—“Limit spread of excitation and sharpen timing”—fits that description.",
      "“Replace electrical synapses globally” does not match the mechanism (topic: Neural Circuits). FF inhibition constrains excitatory recruitment. The correct choice—“Limit spread of excitation and sharpen timing”—fits that description.",
      "“Map frequency on basilar membrane” does not match the mechanism (topic: Neural Circuits). FF inhibition constrains excitatory recruitment. The correct choice—“Limit spread of excitation and sharpen timing”—fits that description.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "What does Electrical coupling allow?",
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
      "“Vesicle fusion without Ca2+” does not match the mechanism (topic: Electrical Synapses). Gap junctions pass ions and small molecules bidirectionally. The correct choice—“Rapid synchrony and shared subthreshold signals”—fits that description.",
      "“Phototransduction” does not match the mechanism (topic: Electrical Synapses). Gap junctions pass ions and small molecules bidirectionally. The correct choice—“Rapid synchrony and shared subthreshold signals”—fits that description.",
      "“Requires retrograde peptide signaling” does not match the mechanism (topic: Electrical Synapses). Gap junctions pass ions and small molecules bidirectionally. The correct choice—“Rapid synchrony and shared subthreshold signals”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Using the values stated below, which answer is correct: Vesicular transporters load?",
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
      "“Na+ into nucleus” does not match the mechanism (topic: Synaptic Vesicles). VGLUT/VGAT/VMAT use proton exchange to fill vesicles. The correct choice—“Neurotransmitter into vesicles against gradient (using H+ gradient)”—fits that description.",
      "“Rhodopsin into spines” does not match the mechanism (topic: Synaptic Vesicles). VGLUT/VGAT/VMAT use proton exchange to fill vesicles. The correct choice—“Neurotransmitter into vesicles against gradient (using H+ gradient)”—fits that description.",
      "“Myelin proteins into cleft” does not match the mechanism (topic: Synaptic Vesicles). VGLUT/VGAT/VMAT use proton exchange to fill vesicles. The correct choice—“Neurotransmitter into vesicles against gradient (using H+ gradient)”—fits that description.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Using the values stated below, which answer is correct: Synaptic depression after high-frequency trains often reflects?",
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
      "“Permanent loss of DNA” does not match the mechanism (topic: Short-Term Plasticity). Vesicle pool depletion reduces release probability. The correct choice—“Depletion of readily releasable vesicles”—fits that description.",
      "“Myelin thinning” does not match the mechanism (topic: Short-Term Plasticity). Vesicle pool depletion reduces release probability. The correct choice—“Depletion of readily releasable vesicles”—fits that description.",
      "“Rod-cone switch” does not match the mechanism (topic: Short-Term Plasticity). Vesicle pool depletion reduces release probability. The correct choice—“Depletion of readily releasable vesicles”—fits that description.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Using the values stated below, which answer is correct: NMDA receptor-dependent LTP induction classically requires?",
    options: [




      "Postsynaptic depolarization sufficient to unblock NMDA and Ca2, entry",
      "Main mechanism: presynaptic GABA (states the wrong induction requirement for LTP/LTD)",
      "Main mechanism: hyperpolarization (states the wrong induction requirement for LTP/LTD)",
      "Elimination of AMPA (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "Ca2+ through NMDA triggers LTP cascades.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca2+ through NMDA triggers LTP cascades.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Ca2+ through NMDA triggers LTP cascades.",
      "“Elimination of AMPA (states the wrong induction requirement for LTP/LTD)” does not match the mechanism (topic: Long-Term Plasticity). Ca2+ through NMDA triggers LTP cascades. The correct choice—“Postsynaptic depolarization sufficient to unblock NMDA and Ca2+ entry”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Using the values stated below, which answer is correct: Homosynaptic LTD can be induced by?",
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
      "“Single photon absorption” does not match the mechanism (topic: Synaptic Plasticity Rules). Low-frequency pairing protocols weaken synapses. The correct choice—“Prolonged low-frequency stimulation at the synapse”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency pairing protocols weaken synapses.",
      "“Opening all Na channels” does not match the mechanism (topic: Synaptic Plasticity Rules). Low-frequency pairing protocols weaken synapses. The correct choice—“Prolonged low-frequency stimulation at the synapse”—fits that description.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Which description best applies to End-plate potential?",
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
      "“Purely electrical gap junction” does not match the mechanism (topic: Neuromuscular Junction). NMJ EPP typically exceeds muscle threshold. The correct choice—“Graded depolarization from ACh”—fits that description.",
    ]
  },
  {
    topic: "Co-transmission",
    question: "Using the values stated below, which answer is correct: A neuron releasing both glutamate and neuropeptide Y will?",
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
      "“Requires signal via gap junctions” does not match the mechanism (topic: Co-transmission). Co-release spans fast and slow signaling timescales. The correct choice—“Act on fast ionotropic and slower modulatory targets”—fits that description.",
      "“Requires affect retina” does not match the mechanism (topic: Co-transmission). Co-release spans fast and slow signaling timescales. The correct choice—“Act on fast ionotropic and slower modulatory targets”—fits that description.",
      "“Cannot modulate circuits” does not match the mechanism (topic: Co-transmission). Co-release spans fast and slow signaling timescales. The correct choice—“Act on fast ionotropic and slower modulatory targets”—fits that description.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Using the values stated below, which answer is correct: Benzodiazepines enhance GABAergic inhibition by?",
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
      "“Blocking glutamate synthesis” does not match the mechanism (topic: Drug Effects). BZDs increase Cl- flux probability when GABA binds. The correct choice—“Positive allosteric modulation of GABAA receptors”—fits that description.",
      "“Opening NMDA maximally” does not match the mechanism (topic: Drug Effects). BZDs increase Cl- flux probability when GABA binds. The correct choice—“Positive allosteric modulation of GABAA receptors”—fits that description.",
      "“Destroying synaptic vesicles” does not match the mechanism (topic: Drug Effects). BZDs increase Cl- flux probability when GABA binds. The correct choice—“Positive allosteric modulation of GABAA receptors”—fits that description.",
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Using the values stated below, which answer is correct: Nitric oxide (NO) as a retrograde messenger?",
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
      "“Is the primary photopigment” does not match the mechanism (topic: Retrograde Signaling). NO can act as a short-range retrograde signal. The correct choice—“Diffuses from postsynaptic sites to modulate presynaptic release”—fits that description.",
    ]
  },
  {
    topic: "Excitatory-Inhibitory Balance",
    question: "Using the values stated below, which answer is correct: E/I imbalance in cortex is implicated in?",
    options: [




      "Epilepsy and some psychiatric phenotypes",
      "Requires cochlear tuning",
      "Requires rod dark current",
      "Elimination of all LTP",
    ],
    correct: 0,
    explanation: "Too much excitation or too little inhibition destabilizes networks.",
    wrongExplanations: [
      "",
      "“Requires cochlear tuning” does not match the mechanism (topic: Excitatory-Inhibitory Balance). Too much excitation or too little inhibition destabilizes networks. The correct choice—“Epilepsy and some psychiatric phenotypes”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Too much excitation or too little inhibition destabilizes networks.",
      "“Elimination of all LTP” does not match the mechanism (topic: Excitatory-Inhibitory Balance). Too much excitation or too little inhibition destabilizes networks. The correct choice—“Epilepsy and some psychiatric phenotypes”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Using the values stated below, which answer is correct: Active zone proteins organize?",
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
      "“Cochlear basilar stiffness” does not match the mechanism (topic: Synaptic Anatomy). Active zone scaffolds exocytosis machinery. The correct choice—“Vesicle docking and Ca2+ channel coupling for release”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active zone scaffolds exocytosis machinery.",
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "Using the values stated below, which answer is correct: Acetylcholine via muscarinic receptors often?",
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
      "“Directly opens photopigment” does not match the mechanism (topic: Circuit Modulation). Muscarinic signaling modulates ion channels via G proteins. The correct choice—“Slows K+ channels or alters cAMP, changing excitability”—fits that description.",
      "“Forms the blood-brain barrier” does not match the mechanism (topic: Circuit Modulation). Muscarinic signaling modulates ion channels via G proteins. The correct choice—“Slows K+ channels or alters cAMP, changing excitability”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscarinic signaling modulates ion channels via G proteins.",
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Using the values stated below, which answer is correct: Neuropeptides typically differ from small transmitters by?",
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
      "“Myelin thickness (mixes up presynaptic release with postsynaptic receptor logic)” does not match the mechanism (topic: Synaptic Transmission). Conformational desensitization lowers current during prolonged agonist. The correct choice—“Response despite agonist still bound”—fits that description.",
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
      "“Inner hair cells establish the dark resting potential of rods” does not match the mechanism (topic: Neural Circuits). Recurrent E loops need I for stability. The correct choice—“Amplify activity but risk runaway unless balanced by inhibition”—fits that description.",
      "“Eliminate action potentials” does not match the mechanism (topic: Neural Circuits). Recurrent E loops need I for stability. The correct choice—“Amplify activity but risk runaway unless balanced by inhibition”—fits that description.",
    ]
  }
];

const PART3_FRESH_POOL_2 = [
  {
    topic: "Phototransduction",
    question: "Using the values stated below, which answer is correct: Photoreceptors hyperpolarize to light because?",
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
      "“Na+ channels open maximally” does not match the mechanism (topic: Phototransduction). Light reduces cGMP, closing channels and hyperpolarizing. The correct choice—“cGMP drops and cGMP-gated channels close”—fits that description.",
      "“Myelin is added” does not match the mechanism (topic: Phototransduction). Light reduces cGMP, closing channels and hyperpolarizing. The correct choice—“cGMP drops and cGMP-gated channels close”—fits that description.",
      "“Tip links break permanently” does not match the mechanism (topic: Phototransduction). Light reduces cGMP, closing channels and hyperpolarizing. The correct choice—“cGMP drops and cGMP-gated channels close”—fits that description.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Using the values stated below, which answer is correct: OFF bipolar cells respond to light with?",
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
      "“Muscle contraction” does not match the mechanism (topic: Retinal Circuitry). OFF pathway signals light offset depending on wiring; MCB80x contrasts ON/OFF. The correct choice—“Hyperpolarization”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OFF pathway signals light offset depending on wiring; MCB80x contrasts ON/OFF.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Using the values stated below, which answer is correct: Ocular dominance columns reflect?",
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
      "“Random wiring without use” does not match the mechanism (topic: Visual Cortex). Early visual experience sculpts dominance patterns. The correct choice—“Binocular input segregation that can be shaped by experience”—fits that description.",
      "“Requires olfactory maps” does not match the mechanism (topic: Visual Cortex). Early visual experience sculpts dominance patterns. The correct choice—“Binocular input segregation that can be shaped by experience”—fits that description.",
      "“Saltatory conduction maps” does not match the mechanism (topic: Visual Cortex). Early visual experience sculpts dominance patterns. The correct choice—“Binocular input segregation that can be shaped by experience”—fits that description.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Using the values stated below, which answer is correct: Interaural time differences are useful for?",
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
      "“Color vision” does not match the mechanism (topic: Auditory Pathway). ITD coding supports azimuth for low frequencies. The correct choice—“Localizing low-frequency sounds”—fits that description.",
      "“Taste umami” does not match the mechanism (topic: Auditory Pathway). ITD coding supports azimuth for low frequencies. The correct choice—“Localizing low-frequency sounds”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ITD coding supports azimuth for low frequencies.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Using the values stated below, which answer is correct: Outer hair cells in cochlea contribute to?",
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
      "“Phototransduction” does not match the mechanism (topic: Auditory System). OHC electromotility boosts sensitivity and tuning. The correct choice—“Active amplification (cochlear amplifier)”—fits that description.",
      "“NMJ transmission” does not match the mechanism (topic: Auditory System). OHC electromotility boosts sensitivity and tuning. The correct choice—“Active amplification (cochlear amplifier)”—fits that description.",
      "“Glomerular odor maps” does not match the mechanism (topic: Auditory System). OHC electromotility boosts sensitivity and tuning. The correct choice—“Active amplification (cochlear amplifier)”—fits that description.",
    ]
  },
  {
    topic: "Vestibular System",
    question: "Using the values stated below, which answer is correct: Otolith organs detect?",
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
      "“Requires angular acceleration” does not match the mechanism (topic: Vestibular System). Utricle/saccule sense linear forces including gravity. The correct choice—“Linear acceleration and head tilt (gravity)”—fits that description.",
      "“Odor concentration” does not match the mechanism (topic: Vestibular System). Utricle/saccule sense linear forces including gravity. The correct choice—“Linear acceleration and head tilt (gravity)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Utricle/saccule sense linear forces including gravity.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Using the values stated below, which answer is correct: Dorsal column–medial lemniscus pathway carries?",
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
      "“Requires pain via spinothalamic” does not match the mechanism (topic: Somatosensation). DCML is the discriminative touch pathway. The correct choice—“Fine touch, vibration, proprioception to cortex”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DCML is the discriminative touch pathway.",
      "“Requires auditory pitch” does not match the mechanism (topic: Somatosensation). DCML is the discriminative touch pathway. The correct choice—“Fine touch, vibration, proprioception to cortex”—fits that description.",
    ]
  },
  {
    topic: "Pain",
    question: "Which clinical presentation is most consistent with Spinothalamic tract carries?",
    options: [




      "Pain and temperature to thalamus",
      "Requires proprioception",
      "Requires vision",
      "Requires nMJ signals",
    ],
    correct: 0,
    explanation: "Anterolateral system for nociception and thermal sense.",
    wrongExplanations: [
      "",
      "“Requires proprioception” does not match the mechanism (topic: Pain). Anterolateral system for nociception and thermal sense. The correct choice—“Pain and temperature to thalamus”—fits that description.",
      "“Requires vision” does not match the mechanism (topic: Pain). Anterolateral system for nociception and thermal sense. The correct choice—“Pain and temperature to thalamus”—fits that description.",
      "“Requires nMJ signals” does not match the mechanism (topic: Pain). Anterolateral system for nociception and thermal sense. The correct choice—“Pain and temperature to thalamus”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Using the values stated below, which answer is correct: Odor identity is encoded by?",
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
      "“Single receptor for all odors” does not match the mechanism (topic: Olfactory System). Combinatorial coding maps complex odor space. The correct choice—“Combinatorial receptor activation across glomeruli”—fits that description.",
      "“Cochlear tonotopy” does not match the mechanism (topic: Olfactory System). Combinatorial coding maps complex odor space. The correct choice—“Combinatorial receptor activation across glomeruli”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Combinatorial coding maps complex odor space.",
    ]
  },
  {
    topic: "Gustation",
    question: "Using the values stated below, which answer is correct: Sour taste often involves?",
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
      "“Rhodopsin activation” does not match the mechanism (topic: Gustation). Low pH is detected by specialized taste mechanisms. The correct choice—“Acid sensing”—fits that description.",
      "“Hair cell tip links” does not match the mechanism (topic: Gustation). Low pH is detected by specialized taste mechanisms. The correct choice—“Acid sensing”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low pH is detected by specialized taste mechanisms.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Using the values stated below, which answer is correct: Upper motor neurons originate primarily in?",
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
      "“Cochlear inner hair cells (maps the lesion to the wrong motor pathway or reflex)” does not match the mechanism (topic: Motor Systems). UMNs project to spinal/brainstem motor neurons. The correct choice—“Motor cortex and brainstem descending tracts”—fits that description.",
    ]
  },
  {
    topic: "Basal Ganglia",
    question: "When Direct pathway in basal ganglia, which effect on membrane potential is most likely?",
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
      "“Transduce sound” does not match the mechanism (topic: Basal Ganglia). Direct pathway (simplified) supports action selection. The correct choice—“Facilitate movement by disinhibiting thalamus”—fits that description.",
      "“Generate dark current” does not match the mechanism (topic: Basal Ganglia). Direct pathway (simplified) supports action selection. The correct choice—“Facilitate movement by disinhibiting thalamus”—fits that description.",
    ]
  },
  {
    topic: "Cerebellum",
    question: "Using the values stated below, which answer is correct: Climbing fibers to Purkinje cells often signal?",
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
      "“Color opponency” does not match the mechanism (topic: Cerebellum). Climbing fiber input is linked to error teaching signals. The correct choice—“Error or unexpected events in motor learning”—fits that description.",
      "“Odor identity alone” does not match the mechanism (topic: Cerebellum). Climbing fiber input is linked to error teaching signals. The correct choice—“Error or unexpected events in motor learning”—fits that description.",
      "“Requires passive membrane properties” does not match the mechanism (topic: Cerebellum). Climbing fiber input is linked to error teaching signals. The correct choice—“Error or unexpected events in motor learning”—fits that description.",
    ]
  },
  {
    topic: "Hippocampus",
    question: "Using the values stated below, which answer is correct: Pattern separation in dentate gyrus helps?",
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
      "“Transduce photons” does not match the mechanism (topic: Hippocampus). DG/CAS networks reduce overlap of similar inputs. The correct choice—“Distinguish similar memories/contexts”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DG/CAS networks reduce overlap of similar inputs.",
      "“Block all synapses” does not match the mechanism (topic: Hippocampus). DG/CAS networks reduce overlap of similar inputs. The correct choice—“Distinguish similar memories/contexts”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Using the values stated below, which answer is correct: Systems consolidation proposes?",
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
      "“No role for sleep” does not match the mechanism (topic: Learning & Memory). Memories become less hippocampus-dependent over time. The correct choice—“Gradual transfer of memory traces from hippocampus to cortex”—fits that description.",
      "“Requires procedural memory exists” does not match the mechanism (topic: Learning & Memory). Memories become less hippocampus-dependent over time. The correct choice—“Gradual transfer of memory traces from hippocampus to cortex”—fits that description.",
    ]
  },
  {
    topic: "Language",
    question: "Using the values stated below, which answer is correct: Wernicke's area damage often impairs?",
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
      "“Vision in both fields” does not match the mechanism (topic: Language). Receptive language deficits characterize Wernicke-type aphasia. The correct choice—“Language comprehension while speech may remain fluent but empty”—fits that description.",
      "“Cochlear tuning” does not match the mechanism (topic: Language). Receptive language deficits characterize Wernicke-type aphasia. The correct choice—“Language comprehension while speech may remain fluent but empty”—fits that description.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Using the values stated below, which answer is correct: CSF is produced mainly by?",
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
      "“Photoreceptor outer segments” does not match the mechanism (topic: Neuroanatomy). Choroid plexus secretes CSF into ventricles. The correct choice—“Choroid plexus epithelium”—fits that description.",
      "“NMJ” does not match the mechanism (topic: Neuroanatomy). Choroid plexus secretes CSF into ventricles. The correct choice—“Choroid plexus epithelium”—fits that description.",
      "“Glomeruli” does not match the mechanism (topic: Neuroanatomy). Choroid plexus secretes CSF into ventricles. The correct choice—“Choroid plexus epithelium”—fits that description.",
    ]
  },
  {
    topic: "Thalamus",
    question: "Using the values stated below, which answer is correct: Thalamic reticular nucleus provides?",
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
      "“Cochlear amplification” does not match the mechanism (topic: Thalamus). TRN inhibits relay cells, modulating thalamic gate. The correct choice—“Inhibitory gating of thalamocortical relay”—fits that description.",
      "“Myelin to all axons” does not match the mechanism (topic: Thalamus). TRN inhibits relay cells, modulating thalamic gate. The correct choice—“Inhibitory gating of thalamocortical relay”—fits that description.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Using the values stated below, which answer is correct: Multiple sclerosis symptoms relate to?",
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
      "“Requires peripheral NMJ block” does not match the mechanism (topic: Clinical Correlates). CNS demyelination disrupts timing and strength of signals. The correct choice—“Demyelination slowing/failing conduction in CNS pathways”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CNS demyelination disrupts timing and strength of signals.",
      "“Purely retinal disease” does not match the mechanism (topic: Clinical Correlates). CNS demyelination disrupts timing and strength of signals. The correct choice—“Demyelination slowing/failing conduction in CNS pathways”—fits that description.",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "What does Sensory adaptation reduce?",
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
      "“All pain permanently” does not match the mechanism (topic: Sensory Systems). Adaptation emphasizes changes over steady state. The correct choice—“Response to maintained constant stimuli”—fits that description.",
      "“Need for receptors” does not match the mechanism (topic: Sensory Systems). Adaptation emphasizes changes over steady state. The correct choice—“Response to maintained constant stimuli”—fits that description.",
      "“Number of neurons in cortex” does not match the mechanism (topic: Sensory Systems). Adaptation emphasizes changes over steady state. The correct choice—“Response to maintained constant stimuli”—fits that description.",
    ]
  },
  {
    topic: "Sleep & Memory",
    question: "Using the values stated below, which answer is correct: Hippocampal sharp-wave ripples occur often during?",
    options: [




      "Slow-wave sleep and quiet rest, supporting replay",
      "Requires deep anesthesia without neural activity",
      "Requires phototransduction",
      "Requires nMJ release",
    ],
    correct: 0,
    explanation: "Ripples accompany replay linked to consolidation.",
    wrongExplanations: [
      "",
      "“Requires deep anesthesia without neural activity” does not match the mechanism (topic: Sleep & Memory). Ripples accompany replay linked to consolidation. The correct choice—“Slow-wave sleep and quiet rest, supporting replay”—fits that description.",
      "“Requires phototransduction” does not match the mechanism (topic: Sleep & Memory). Ripples accompany replay linked to consolidation. The correct choice—“Slow-wave sleep and quiet rest, supporting replay”—fits that description.",
      "“Requires nMJ release” does not match the mechanism (topic: Sleep & Memory). Ripples accompany replay linked to consolidation. The correct choice—“Slow-wave sleep and quiet rest, supporting replay”—fits that description.",
    ]
  },
  {
    topic: "Emotion & Memory",
    question: "Using the values stated below, which answer is correct: Flashbulb memories illustrate?",
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
      "“Cochlear phase locking” does not match the mechanism (topic: Emotion & Memory). Emotional arousal can enhance declarative memory vividness. The correct choice—“Vivid episodic memories for emotionally salient events”—fits that description.",
      "“Passive membrane τ” does not match the mechanism (topic: Emotion & Memory). Emotional arousal can enhance declarative memory vividness. The correct choice—“Vivid episodic memories for emotionally salient events”—fits that description.",
    ]
  },
  {
    topic: "Executive Function",
    question: "Using the values stated below, which answer is correct: Task switching costs reflect?",
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
      "“Purely sensory adaptation” does not match the mechanism (topic: Executive Function). PFC-mediated control slows performance when switching tasks. The correct choice—“Executive control overhead when changing rules/context”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PFC-mediated control slows performance when switching tasks.",
      "“Rod-cone ratio” does not match the mechanism (topic: Executive Function). PFC-mediated control slows performance when switching tasks. The correct choice—“Executive control overhead when changing rules/context”—fits that description.",
    ]
  },
  {
    topic: "Neuroimaging",
    question: "Using the values stated below, which answer is correct: EEG compared to fMRI has?",
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
      "“No relation to neural activity” does not match the mechanism (topic: Neuroimaging). EEG tracks summed electrical activity with ms timing. The correct choice—“Higher temporal resolution but poorer spatial localization generally”—fits that description.",
      "“Requires measures blood flow” does not match the mechanism (topic: Neuroimaging). EEG tracks summed electrical activity with ms timing. The correct choice—“Higher temporal resolution but poorer spatial localization generally”—fits that description.",
    ]
  }
];
