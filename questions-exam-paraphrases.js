// Exam-style paraphrases — pruned of near-duplicates of core/supplemental stems

const PART1_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Action Potentials",
    question: "In the phase associated with the rising phase of an action potential, which event primarily drives depolarization?",
    options: [
      "Efflux of K⁺ through voltage-gated potassium channels",
      "Influx of Na⁺ through voltage-gated sodium channels",
      "Influx of Cl⁻ through ligand-gated channels",
      "Efflux of Ca²⁺ through voltage-gated calcium channels"
    ],
    correct: 1,
    explanation: "Voltage-gated Na⁺ channels open at threshold, producing rapid Na⁺ influx that drives the upswing of the action potential.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Influx of Na⁺ through voltage-gated sodium channels) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Influx of Na⁺ through voltage-gated sodium channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Influx of Na⁺ through voltage-gated sodium channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the falling phase of an action potential, which ionic current dominates?",
    options: [
      "Na⁺ influx through open sodium channels",
      "K⁺ efflux through voltage-gated potassium channels",
      "Ca²⁺ influx through N-type channels",
      "Cl⁻ influx through GABA receptors"
    ],
    correct: 1,
    explanation: "Voltage-gated K⁺ channels open during repolarization, allowing K⁺ efflux that returns the membrane toward its resting potential.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (K⁺ efflux through voltage-gated potassium channels) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (K⁺ efflux through voltage-gated potassium channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (K⁺ efflux through voltage-gated potassium channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Myelination of an axon mainly increases:",
    options: [
      "The resting membrane potential",
      "The speed of action potential propagation",
      "The number of synaptic vesicles released",
      "The equilibrium potential for Na⁺"
    ],
    correct: 1,
    explanation: "Myelin reduces membrane capacitance and enables saltatory conduction, allowing faster propagation of action potentials.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (The speed of action potential propagation) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (The speed of action potential propagation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The speed of action potential propagation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "If a neuron has high K⁺ leak conductance and only minimal Na⁺ leak conductance, its resting membrane potential would be expected to lie closest to:",
    options: [
      "The Na⁺ equilibrium potential",
      "The K⁺ equilibrium potential",
      "0 mV exactly",
      "The Cl⁻ equilibrium potential only"
    ],
    correct: 1,
    explanation: "Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (The K⁺ equilibrium potential) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (The K⁺ equilibrium potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The K⁺ equilibrium potential) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that extracellular K⁺ concentration is increased while intracellular K⁺ is held constant, the K⁺ equilibrium potential (E_K):",
    options: [
      "Becomes more negative",
      "Becomes less negative (moves toward 0 mV)",
      "Becomes exactly 0 mV regardless of concentration",
      "Is unaffected by concentration changes"
    ],
    correct: 1,
    explanation: "The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Becomes less negative (moves toward 0 mV)) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Becomes less negative (moves toward 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes less negative (moves toward 0 mV)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period, a larger-than-normal depolarizing stimulus may still trigger a spike because:",
    options: [
      "Inactivated Na⁺ channels are recovering and fewer channels are available",
      "All K⁺ channels are permanently closed",
      "Myelin is absent at the axon hillock",
      "The Na⁺/K⁺ pump stops functioning"
    ],
    correct: 0,
    explanation: "Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inactivated Na⁺ channels are recovering and fewer channels are available) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inactivated Na⁺ channels are recovering and fewer channels are available) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inactivated Na⁺ channels are recovering and fewer channels are available) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "The falling phase of the action potential is driven mainly by delayed-rectifier K⁺ channels because they:",
    options: [
      "Open with slower kinetics than the initial Na⁺ surge and carry outward current",
      "Permit massive Na⁺ influx",
      "Block all Cl⁻ conductance permanently",
      "Pump Ca²⁺ into the cytosol"
    ],
    correct: 0,
    explanation: "Delayed-rectifier K⁺ channels activate during the spike and repolarize the membrane through K⁺ efflux.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Open with slower kinetics than the initial Na⁺ surge and carry outward current) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Open with slower kinetics than the initial Na⁺ surge and carry outward current) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Open with slower kinetics than the initial Na⁺ surge and carry outward current) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Myelin increases conduction velocity mainly by:",
    options: [
      "Increasing the number of voltage-gated channels per unit length",
      "Reducing effective membrane capacitance and limiting active regeneration to nodes",
      "Raising the resting membrane potential above 0 mV",
      "Blocking all passive current flow"
    ],
    correct: 1,
    explanation: "Myelin insulation lowers capacitive load and confines ion channel activity to nodes, enabling faster saltatory propagation.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Reducing effective membrane capacitance and limiting active regeneration to nodes) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Reducing effective membrane capacitance and limiting active regeneration to nodes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reducing effective membrane capacitance and limiting active regeneration to nodes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The Goldman equation predicts that if membrane permeability to Na⁺ greatly exceeds permeability to K⁺, V_m would be expected to approach:",
    options: [
      "The potassium reversal potential (E_K), as if K⁺ were the dominant permeant ion",
      "The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability",
      "0 mV only if all monovalent gradients were abolished and Cl⁻ is impermeant",
      "The reversal potential of gap junction channels, not voltage-gated cation channels"
    ],
    correct: 1,
    explanation: "The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "For a given constant current injection, a neuron with a larger membrane time constant would be expected to show:",
    options: [
      "A faster rise to steady-state voltage",
      "A slower rise to steady-state voltage",
      "No change in voltage over time",
      "Immediate action potential firing at all stimulus amplitudes"
    ],
    correct: 1,
    explanation: "A larger τ (R_m × C_m) slows the charging of the membrane capacitance, delaying voltage change.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (A slower rise to steady-state voltage) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (A slower rise to steady-state voltage) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (A slower rise to steady-state voltage) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "What mainly sets the ion concentration gradients that establish the resting potential?",
    options: [
      "The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients",
      "Voltage-gated channels at the axon hillock only",
      "Synaptic vesicle recycling",
      "Photoreceptor cGMP channels"
    ],
    correct: 0,
    explanation: "The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates striatal circuits mainly through:",
    options: [
      "Metabotropic D1 and D2 receptors altering cAMP and channel activity",
      "Direct ionotropic pores with millisecond kinetics only",
      "Gap junctions between photoreceptors",
      "Voltage-gated Na⁺ channels in the cochlea"
    ],
    correct: 0,
    explanation: "Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic D1 and D2 receptors altering cAMP and channel activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic D1 and D2 receptors altering cAMP and channel activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic D1 and D2 receptors altering cAMP and channel activity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Rods are more sensitive than cones mainly because:",
    options: [
      "They express higher levels of photopigment and converge on bipolar cells",
      "They respond only to bright daylight",
      "They lack cGMP-gated channels",
      "They fire action potentials with higher amplitude always"
    ],
    correct: 0,
    explanation: "Rod convergence and high photopigment density support scotopic vision.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (They express higher levels of photopigment and converge on bipolar cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (They express higher levels of photopigment and converge on bipolar cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (They express higher levels of photopigment and converge on bipolar cells) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Gray matter consists mainly of:",
    options: [
      "Neuronal cell bodies, dendrites, and synapses",
      "Myelinated axon tracts only",
      "Cerebrospinal fluid in the ventricles exclusively",
      "Photoreceptor outer segments only"
    ],
    correct: 0,
    explanation: "Gray matter is rich in neuronal somata and synaptic neuropil.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neuronal cell bodies, dendrites, and synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neuronal cell bodies, dendrites, and synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neuronal cell bodies, dendrites, and synapses) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude mainly by:",
    options: [
      "Lowering input resistance and diverting current",
      "Opening Na⁺ channels at the axon hillock",
      "Increasing length constant indefinitely",
      "Blocking the Na⁺/K⁺ pump"
    ],
    correct: 0,
    explanation: "Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance and diverting current) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance and diverting current) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance and diverting current) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin mainly detect:",
    options: [
      "Pain and temperature",
      "High-frequency vibration at Pacinian frequency",
      "Sustained pressure with Merkel-like precision",
      "Photons of visible light"
    ],
    correct: 0,
    explanation: "Free nerve endings are nociceptors and thermoreceptors for pain and temperature.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature) matches the underlying mechanism."
    ]
  },
  {
    topic: "Olfaction",
    question: "Each olfactory sensory neuron usually expresses:",
    options: [
      "One functional odor receptor type",
      "All receptor genes simultaneously",
      "Only photopigment genes",
      "Nicotinic acetylcholine receptors exclusively"
    ],
    correct: 0,
    explanation: "One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (One functional odor receptor type) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (One functional odor receptor type) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (One functional odor receptor type) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter tracts consist mainly of:",
    options: [
      "Myelinated axons",
      "Neuronal cell bodies and dendrites",
      "Synaptic cleft fluid",
      "Photoreceptor outer segments"
    ],
    correct: 0,
    explanation: "White matter is dominated by myelinated axon bundles connecting brain regions.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axons) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axons) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axons) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage of many substances mainly at:",
    options: [
      "CNS capillary endothelial tight junctions",
      "Nodes of Ranvier in peripheral nerve",
      "Synaptic clefts of all chemical synapses",
      "Photoreceptor outer segments"
    ],
    correct: 0,
    explanation: "Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (CNS capillary endothelial tight junctions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (CNS capillary endothelial tight junctions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (CNS capillary endothelial tight junctions) matches the underlying mechanism."
    ]
  },
  {
    topic: "Current Clamp",
    question: "During a current-clamp experiment, injecting steady hyperpolarizing current would be expected to typically:",
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
    question: "Tetrodotoxin (TTX) applied to an axon prevents action potentials mainly by:",
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
    question: "Suppose that extracellular K⁺ is raised fourfold while intracellular K⁺ is unchanged, E_K shifts approximately:",
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
    topic: "Passive Membrane Properties",
    question: "Suppose that τ increases but λ is unchanged, subthreshold signals at the soma will:",
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
    topic: "Goldman Equation",
    question: "Suppose that P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will:",
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
    question: "In the phase associated with the relative refractory period, a second stimulus must be:",
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
    topic: "Resting Potential",
    question: "Suppose that the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will:",
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
    question: "Cooling an axon usually slows conduction because:",
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
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that P_K >> P_Na at rest and P_Cl is negligible, increasing P_Na slightly will:",
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
    topic: "Quantitative Physiology",
    question: "Suppose that E_K = -80 mV and E_Na = +60 mV, V_m at rest near -65 mV implies:",
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
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~10% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long",
      "Does not change ever",
      "Converts dendrites to photoreceptors"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~25% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long",
      "Does not change ever",
      "Converts dendrites to photoreceptors"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~40% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long",
      "Does not change ever",
      "Converts dendrites to photoreceptors"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~60% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long",
      "Does not change ever",
      "Converts dendrites to photoreceptors"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~80% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long",
      "Does not change ever",
      "Converts dendrites to photoreceptors"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Becomes shorter (less spatial spread)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the threshold period/mechanism:",
    options: [
      "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
      "Myelin is synthesized in the soma",
      "Only GABA is released globally",
      "Photoreceptors depolarize to light"
    ],
    correct: 0,
    explanation: "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Net inward current exceeds outward current initiating regenerative Na⁺ entry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Net inward current exceeds outward current initiating regenerative Na⁺ entry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Net inward current exceeds outward current initiating regenerative Na⁺ entry) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the absolute refractory period/mechanism:",
    options: [
      "Many Na⁺ channels inactivated; no new spike possible",
      "Myelin is synthesized in the soma",
      "Only GABA is released globally",
      "Photoreceptors depolarize to light"
    ],
    correct: 0,
    explanation: "Many Na⁺ channels inactivated; no new spike possible",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Many Na⁺ channels inactivated; no new spike possible) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Many Na⁺ channels inactivated; no new spike possible) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Many Na⁺ channels inactivated; no new spike possible) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period/mechanism:",
    options: [
      "Partial recovery requires stronger stimulus",
      "Myelin is synthesized in the soma",
      "Only GABA is released globally",
      "Photoreceptors depolarize to light"
    ],
    correct: 0,
    explanation: "Partial recovery requires stronger stimulus",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Partial recovery requires stronger stimulus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Partial recovery requires stronger stimulus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Partial recovery requires stronger stimulus) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the afterhyperpolarization period/mechanism:",
    options: [
      "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
      "Myelin is synthesized in the soma",
      "Only GABA is released globally",
      "Photoreceptors depolarize to light"
    ],
    correct: 0,
    explanation: "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Unmyelinated axon. Key process and outcome:",
    options: [
      "Active regeneration along membrane; Non-decremental propagation",
      "Only passive spread forever",
      "Only cochlear tuning",
      "Only LTP induction"
    ],
    correct: 0,
    explanation: "Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Active regeneration along membrane; Non-decremental propagation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Active regeneration along membrane; Non-decremental propagation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Active regeneration along membrane; Non-decremental propagation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Myelinated axon. Key process and outcome:",
    options: [
      "Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction",
      "Only passive spread forever",
      "Only cochlear tuning",
      "Only LTP induction"
    ],
    correct: 0,
    explanation: "Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Cold temperature. Key process and outcome:",
    options: [
      "Slower channel kinetics; Reduced conduction velocity",
      "Only passive spread forever",
      "Only cochlear tuning",
      "Only LTP induction"
    ],
    correct: 0,
    explanation: "Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slower channel kinetics; Reduced conduction velocity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slower channel kinetics; Reduced conduction velocity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slower channel kinetics; Reduced conduction velocity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Local anesthetic. Key process and outcome:",
    options: [
      "Na⁺ block in pain fibers; Loss of sensation in region",
      "Only passive spread forever",
      "Only cochlear tuning",
      "Only LTP induction"
    ],
    correct: 0,
    explanation: "Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Na⁺ block in pain fibers; Loss of sensation in region) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Na⁺ block in pain fibers; Loss of sensation in region) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Na⁺ block in pain fibers; Loss of sensation in region) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that leak conductance rises by 12% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [
      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always",
      "Unchanged — λ never depends on R_m",
      "Infinite — passive spread without limit"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that leak conductance rises by 28% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [
      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always",
      "Unchanged — λ never depends on R_m",
      "Infinite — passive spread without limit"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that leak conductance rises by 41% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [
      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always",
      "Unchanged — λ never depends on R_m",
      "Infinite — passive spread without limit"
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorter — signals attenuate faster with distance) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane capacitance increases by 15% while R_m is held fixed, the time constant τ is:",
    options: [
      "~115% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness"
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (~115% of baseline (τ = R_m C_m)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~115% of baseline (τ = R_m C_m)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~115% of baseline (τ = R_m C_m)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane capacitance increases by 35% while R_m is held fixed, the time constant τ is:",
    options: [
      "~135% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness"
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (~135% of baseline (τ = R_m C_m)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~135% of baseline (τ = R_m C_m)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~135% of baseline (τ = R_m C_m)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane capacitance increases by 55% while R_m is held fixed, the time constant τ is:",
    options: [
      "~155% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness"
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (~155% of baseline (τ = R_m C_m)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~155% of baseline (τ = R_m C_m)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~155% of baseline (τ = R_m C_m)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that intracellular Na⁺ rises while extracellular Na⁺ is fixed, E_Na shifts:",
    options: [
      "Less positive (toward 0 mV)",
      "More positive beyond +100 mV",
      "To match E_K",
      "Not at all — Nernst ignores Na⁺"
    ],
    correct: 0,
    explanation: "Higher inside Na⁺ reduces the driving equilibrium toward outside.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Less positive (toward 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Less positive (toward 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Less positive (toward 0 mV)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Myelin on an axon mainly increases effective R_m locally, which:",
    options: [
      "Lengthens λ and reduces current leak per unit length",
      "Shortens λ by increasing capacitance only",
      "Prevents all ion flow at nodes",
      "Converts active to purely graded signals forever"
    ],
    correct: 0,
    explanation: "Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lengthens λ and reduces current leak per unit length) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lengthens λ and reduces current leak per unit length) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lengthens λ and reduces current leak per unit length) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the rising phase of a squid-giant-axon spike, the dominant current is:",
    options: [
      "Inward Na⁺ through voltage-gated channels",
      "Outward K⁺ through leak channels only",
      "Inward Cl⁻ through GABA receptors",
      "Na⁺/K⁺ pump current reversing each ms"
    ],
    correct: 0,
    explanation: "Voltage-gated Na⁺ entry drives rapid depolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ through voltage-gated channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ through voltage-gated channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ through voltage-gated channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Suppose that voltage-gated K⁺ channels are blocked during a spike, you expect:",
    options: [
      "Prolonged repolarization and broader spikes",
      "No change in spike width",
      "Immediate loss of resting potential",
      "Only photoreceptor responses"
    ],
    correct: 0,
    explanation: "Delayed K⁺ repolarization widens the action potential.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Prolonged repolarization and broader spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolonged repolarization and broader spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolonged repolarization and broader spikes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp relative to cell-attached recording:",
    options: [
      "Controls V_m or I_m across the entire cell interior",
      "Samples only one ion species with no pipette access",
      "Measures muscle force transduction",
      "Replaces need for electrodes in cochlea"
    ],
    correct: 0,
    explanation: "Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Controls V_m or I_m across the entire cell interior) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Controls V_m or I_m across the entire cell interior) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Controls V_m or I_m across the entire cell interior) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that selectively increases K⁺ leak conductance at rest would be expected to tend to:",
    options: [
      "Hyperpolarize the cell and shorten λ",
      "Depolarize toward E_Na",
      "Block all synaptic vesicle fusion",
      "Increase cochlear gain only"
    ],
    correct: 0,
    explanation: "More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize the cell and shorten λ) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize the cell and shorten λ) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize the cell and shorten λ) matches the underlying mechanism."
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "In voltage clamp, a downward step in command potential usually produces:",
    options: [
      "Inward (negative) clamp current if channels open during the step",
      "Zero current because voltage is clamped",
      "Only mechanical cochlear motion",
      "Irreversible LTP"
    ],
    correct: 0,
    explanation: "Clamp current equals the net ionic current required to hold V constant.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inward (negative) clamp current if channels open during the step) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward (negative) clamp current if channels open during the step) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward (negative) clamp current if channels open during the step) matches the underlying mechanism."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that Cl⁻ channels open with E_Cl below rest, net Cl⁻ current at rest will:",
    options: [
      "Be inward (hyperpolarizing) until V_m approaches E_Cl",
      "Always be outward",
      "Be zero because Cl⁻ is impermeant",
      "Depend only on photopigment"
    ],
    correct: 0,
    explanation: "When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Be inward (hyperpolarizing) until V_m approaches E_Cl) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Be inward (hyperpolarizing) until V_m approaches E_Cl) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Be inward (hyperpolarizing) until V_m approaches E_Cl) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is mainly due to:",
    options: [
      "Continued/outlasting K⁺ conductance (and sometimes Ca²⁺-activated K⁺)",
      "Reopening of all Na⁺ channels",
      "Cl⁻ influx through AMPA receptors",
      "Photoreceptor hyperpolarization to light"
    ],
    correct: 0,
    explanation: "Delayed K⁺ currents drive V_m below rest briefly.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Continued/outlasting K⁺ conductance (and sometimes Ca²⁺-activated K⁺)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Continued/outlasting K⁺ conductance (and sometimes Ca²⁺-activated K⁺)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Continued/outlasting K⁺ conductance (and sometimes Ca²⁺-activated K⁺)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed would be expected to shift the Goldman resting potential:",
    options: [
      "Toward E_Na (less negative)",
      "Toward E_K only",
      "To exactly +60 mV always",
      "Away from any ion equilibrium"
    ],
    correct: 0,
    explanation: "Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains. V_m will tend to move:",
    options: [
      "Toward E_Na (depolarized relative to normal K⁺-dominated rest)",
      "Toward E_K as if K⁺ leak were unchanged",
      "To 0 mV instantly regardless of gradients",
      "Below −150 mV"
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that [K⁺]_out equals [K⁺]_in, the Nernst equilibrium potential for K⁺ is:",
    options: [
      "0 mV",
      "−90 mV",
      "+60 mV",
      "Undefined"
    ],
    correct: 0,
    explanation: "With no concentration gradient, E_K = 0 mV regardless of channel presence.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (0 mV) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (0 mV) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (0 mV) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Suppose that V_m is held at E_K, the driving force on K⁺ is:",
    options: [
      "Zero",
      "Maximal outward",
      "Maximal inward",
      "Equal to the pump flux only"
    ],
    correct: 0,
    explanation: "At equilibrium potential, net electrochemical driving force for that ion is zero.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance arises mainly because:",
    options: [
      "The lipid bilayer stores charge separated across a thin dielectric",
      "Myelin increases ion channel density",
      "Na⁺ channels pump charge into the ER",
      "Dendrites lack any resistance"
    ],
    correct: 0,
    explanation: "The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The lipid bilayer stores charge separated across a thin dielectric) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The lipid bilayer stores charge separated across a thin dielectric) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The lipid bilayer stores charge separated across a thin dielectric) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal synapse is usually smaller and slower because of:",
    options: [
      "Cable filtering (attenuation and low-pass filtering)",
      "Complete absence of ionotropic receptors",
      "Myelin on dendrites",
      "Only electrical synapses distally"
    ],
    correct: 0,
    explanation: "Passive spread along dendrites attenuates amplitude and spreads rise time.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cable filtering (attenuation and low-pass filtering)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cable filtering (attenuation and low-pass filtering)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cable filtering (attenuation and low-pass filtering)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials mainly by binding:",
    options: [
      "Voltage-gated Na⁺ channel pore",
      "Voltage-gated K⁺ channels",
      "The Na⁺/K⁺ pump",
      "Gap junction connexins"
    ],
    correct: 0,
    explanation: "TTX selectively occludes voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channel pore) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channel pore) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channel pore) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to axons usually prolongs spikes by blocking:",
    options: [
      "Certain voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels",
      "Glutamate receptors",
      "Myelin basic protein"
    ],
    correct: 0,
    explanation: "TEA blocks some K⁺ channels, slowing repolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Certain voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Certain voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Certain voltage-gated K⁺ channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Suppose that voltage-gated Na⁺ channels are held in the inactivated state, the neuron:",
    options: [
      "Cannot fire another action potential until recovery",
      "Fires at higher frequency",
      "Depolarizes to E_Na permanently",
      "Loses all resting potential"
    ],
    correct: 0,
    explanation: "Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cannot fire another action potential until recovery) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cannot fire another action potential until recovery) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cannot fire another action potential until recovery) matches the underlying mechanism."
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Voltage clamp was developed mainly to:",
    options: [
      "Hold membrane voltage constant and measure the currents required",
      "Measure only resting potential without perturbation",
      "Visualize myelin with light microscopy alone",
      "Count synaptic vesicles directly"
    ],
    correct: 0,
    explanation: "Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage constant and measure the currents required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage constant and measure the currents required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage constant and measure the currents required) matches the underlying mechanism."
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "Suppose that E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors:",
    options: [
      "Inward Na⁺ movement (into the cell)",
      "Outward Na⁺ only",
      "No movement regardless of channels",
      "Movement only through gap junctions"
    ],
    correct: 0,
    explanation: "V_m negative relative to E_Na drives cation influx if channels open.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ movement (into the cell)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ movement (into the cell)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ movement (into the cell)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that increases K⁺ conductance at rest would be expected to generally:",
    options: [
      "Hyperpolarize or stabilize V_m nearer E_K",
      "Depolarize toward E_Na",
      "Block all spikes by removing Na⁺ channels from membrane",
      "Eliminate capacitance"
    ],
    correct: 0,
    explanation: "More K⁺ conductance pulls V_m toward E_K (often more negative).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m nearer E_K) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m nearer E_K) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m nearer E_K) matches the underlying mechanism."
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Suppose that g_Na increases transiently during a spike while g_K rises later, the sequence reflects:",
    options: [
      "Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation",
      "Goldman equation at rest only",
      "Only pump activity",
      "Gap junction coupling"
    ],
    correct: 0,
    explanation: "Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation) matches the underlying mechanism."
    ]
  }
];

const PART2_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "An excitatory postsynaptic potential (EPSP) can be described as a postsynaptic depolarization that:",
    options: [
      "Always prevents action potential generation",
      "Brings the membrane closer to threshold for firing",
      "Always hyperpolarizes the postsynaptic cell",
      "Only occurs at inhibitory synapses"
    ],
    correct: 1,
    explanation: "EPSPs depolarize the postsynaptic membrane, moving it closer to the threshold needed to trigger an action potential.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Brings the membrane closer to threshold for firing) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Brings the membrane closer to threshold for firing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Brings the membrane closer to threshold for firing) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "An inhibitory postsynaptic potential (IPSP) can be described as a postsynaptic change that:",
    options: [
      "Depolarizes the membrane toward threshold",
      "Hyperpolarizes the membrane or stabilizes it away from threshold",
      "Always opens voltage-gated Na⁺ channels",
      "Directly triggers neurotransmitter release"
    ],
    correct: 1,
    explanation: "IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarizes the membrane or stabilizes it away from threshold) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarizes the membrane or stabilizes it away from threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarizes the membrane or stabilizes it away from threshold) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptors usually act by:",
    options: [
      "Opening an ion channel pore directly upon binding",
      "Activating G-proteins that modulate ion channels or second-messenger systems",
      "Blocking all synaptic transmission permanently",
      "Generating action potentials in the presynaptic terminal"
    ],
    correct: 1,
    explanation: "Metabotropic receptors couple to G-proteins, which activate intracellular signaling cascades such as cAMP or IP₃ pathways.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Activating G-proteins that modulate ion channels or second-messenger systems) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Activating G-proteins that modulate ion channels or second-messenger systems) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activating G-proteins that modulate ion channels or second-messenger systems) matches the underlying mechanism."
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ (inositol trisphosphate) produced during metabotropic signaling mainly causes:",
    options: [
      "Direct opening of voltage-gated Na⁺ channels",
      "Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum",
      "Immediate repolarization of the axon",
      "Degradation of all cAMP in the cell"
    ],
    correct: 1,
    explanation: "IP₃ binds receptors on the endoplasmic reticulum, releasing stored Ca²⁺ into the cytosol as part of the signaling cascade.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptor signaling is usually slower than ionotropic signaling because it involves:",
    options: [
      "Direct ion flux through the receptor pore",
      "G-protein activation and second-messenger cascades before channel modulation",
      "Immediate fusion of synaptic vesicles",
      "Saltatory conduction in the dendrite"
    ],
    correct: 1,
    explanation: "Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (G-protein activation and second-messenger cascades before channel modulation) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (G-protein activation and second-messenger cascades before channel modulation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (G-protein activation and second-messenger cascades before channel modulation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ signaling raises cytosolic Ca²⁺ mainly by:",
    options: [
      "Opening plasmalemmal Na⁺ channels",
      "Releasing Ca²⁺ from endoplasmic reticulum stores",
      "Blocking all K⁺ channels permanently",
      "Stopping vesicle endocytosis"
    ],
    correct: 1,
    explanation: "IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Releasing Ca²⁺ from endoplasmic reticulum stores) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Releasing Ca²⁺ from endoplasmic reticulum stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Releasing Ca²⁺ from endoplasmic reticulum stores) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "AMPA receptors mediate fast EPSCs at glutamatergic synapses mainly by passing:",
    options: [
      "Na⁺ and some K⁺ at resting potentials",
      "Cl⁻ only",
      "Mg²⁺ out of the cell",
      "Current only when the cell is hyperpolarized below −90 mV"
    ],
    correct: 0,
    explanation: "AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Na⁺ and some K⁺ at resting potentials) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Na⁺ and some K⁺ at resting potentials) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Na⁺ and some K⁺ at resting potentials) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "GABA_A receptor activation usually produces inhibition by:",
    options: [
      "Increasing Cl⁻ conductance when E_Cl⁻ is below rest",
      "Opening Na⁺ channels at the axon hillock",
      "Blocking all metabotropic signaling permanently",
      "Releasing Ca²⁺ from mitochondria only"
    ],
    correct: 0,
    explanation: "GABA_A receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increasing Cl⁻ conductance when E_Cl⁻ is below rest) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing Cl⁻ conductance when E_Cl⁻ is below rest) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing Cl⁻ conductance when E_Cl⁻ is below rest) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose that the Na⁺/K⁺ pump is blocked, over time the resting potential will:",
    options: [
      "Move toward 0 mV as gradients collapse",
      "Become more negative indefinitely without limit",
      "Lock at the Nernst potential for Cl⁻ only",
      "Prevent all action potentials by hyperpolarizing above 0 mV"
    ],
    correct: 0,
    explanation: "Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Move toward 0 mV as gradients collapse) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move toward 0 mV as gradients collapse) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move toward 0 mV as gradients collapse) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that intracellular K⁺ is 140 mM and extracellular K⁺ is 4 mM, E_K is approximately:",
    options: [
      "−96 mV (negative inside)",
      "+60 mV (positive inside)",
      "0 mV",
      "+120 mV"
    ],
    correct: 0,
    explanation: "A large inward K⁺ gradient yields a strongly negative E_K.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (−96 mV (negative inside)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (−96 mV (negative inside)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (−96 mV (negative inside)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Blocking presynaptic voltage-gated Ca²⁺ channels would be expected to most directly reduce:",
    options: [
      "Neurotransmitter release probability",
      "Postsynaptic AMPA receptor density",
      "Axonal myelin thickness",
      "Retinal phototransduction"
    ],
    correct: 0,
    explanation: "Ca²⁺ influx is the immediate trigger for vesicle fusion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter release probability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin mainly signal:",
    options: [
      "Pain and temperature (nociception and thermoreception)",
      "Only fine discriminative touch on glabrous skin",
      "Auditory frequency place coding",
      "Declarative memory consolidation"
    ],
    correct: 0,
    explanation: "Polymodal nociceptors and thermoreceptors use free nerve endings.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature (nociception and thermoreception)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature (nociception and thermoreception)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature (nociception and thermoreception)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "If E_K = −90 mV and E_Na = +60 mV, increasing P_Na/P_K at rest would be expected to shift V_m:",
    options: [
      "Toward E_Na (less negative)",
      "Toward E_K (more negative)",
      "To exactly the arithmetic mean (−15 mV) always",
      "Away from both equilibrium potentials equally"
    ],
    correct: 0,
    explanation: "Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Raising intracellular Na⁺ concentration while extracellular Na⁺ is fixed would be expected to make E_Na:",
    options: [
      "Less positive (closer to 0 mV)",
      "More positive",
      "Equal to E_K",
      "Independent of Na⁺ gradients"
    ],
    correct: 0,
    explanation: "Higher internal Na⁺ reduces the inward driving force, lowering E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Less positive (closer to 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Less positive (closer to 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Less positive (closer to 0 mV)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Suppose that g_Na increases while V_m is held fixed, the Na⁺ equilibrium current (I_Na) according to I = g(V_m − E_ion) will:",
    options: [
      "Increase in magnitude if V_m ≠ E_Na",
      "Always become zero regardless of V_m",
      "Reverse sign without changing magnitude",
      "Depend only on the Na⁺/K⁺ pump rate"
    ],
    correct: 0,
    explanation: "Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase in magnitude if V_m ≠ E_Na) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase in magnitude if V_m ≠ E_Na) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase in magnitude if V_m ≠ E_Na) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Suppose that presynaptic Ca²⁺ influx is reduced, one expects:",
    options: [
      "Lower probability of vesicle release",
      "Larger quantal size per vesicle always",
      "Postsynaptic receptor number to increase instantly",
      "Conversion of IPSPs to action potentials in the axon"
    ],
    correct: 0,
    explanation: "Release probability is steeply dependent on presynaptic Ca²⁺ concentration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lower probability of vesicle release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lower probability of vesicle release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lower probability of vesicle release) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity mainly by:",
    options: [
      "Increasing firing rate with louder stimuli",
      "Changing the wavelength of basilar membrane resonance only",
      "Switching from rods to cones",
      "Eliminating all spontaneous activity at threshold"
    ],
    correct: 0,
    explanation: "Rate coding in auditory nerve fibers conveys stimulus intensity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increasing firing rate with louder stimuli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing firing rate with louder stimuli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing firing rate with louder stimuli) matches the underlying mechanism."
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides usually differ from small transmitters by:",
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
    topic: "Synaptic Integration",
    question: "Suppose that E_rev for a GABA_A synapse is near −70 mV at rest, GABA at rest:",
    options: [
      "Produces little change in V_m (shunting may still occur)",
      "Always massive hyperpolarization to −90 mV",
      "Depolarizes to E_Na",
      "Blocks all quantal release"
    ],
    correct: 0,
    explanation: "Driving force is small when E_rev matches V_m; conductance changes still matter.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Produces little change in V_m (shunting may still occur)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Produces little change in V_m (shunting may still occur)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Produces little change in V_m (shunting may still occur)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine depletion in Parkinson disease mainly affects:",
    options: [
      "Basal ganglia circuits for movement initiation and selection",
      "Cochlear inner hair cell transduction",
      "Rod photoreceptor dark current only",
      "NMJ quantal content exclusively"
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia motor loops.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia circuits for movement initiation and selection) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia circuits for movement initiation and selection) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia circuits for movement initiation and selection) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells usually mediate:",
    options: [
      "Fast excitatory postsynaptic currents at many glutamatergic synapses",
      "Slow G-protein inhibitory currents only",
      "Direct opening of voltage-gated Na⁺ in myelin",
      "Peptide hormone release"
    ],
    correct: 0,
    explanation: "AMPA channels dominate fast EPSCs when Glu is released.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism."
    ]
  }
];

const PART3_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Olfaction",
    question: "In the olfactory system, each olfactory sensory neuron usually expresses:",
    options: [
      "All olfactory receptor genes simultaneously",
      "One functional olfactory receptor gene (one neuron–one receptor rule)",
      "Only voltage-gated Na⁺ channels and no receptors",
      "The same receptors as gustatory taste cells"
    ],
    correct: 1,
    explanation: "The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (One functional olfactory receptor gene (one neuron–one receptor rule)) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (One functional olfactory receptor gene (one neuron–one receptor rule)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (One functional olfactory receptor gene (one neuron–one receptor rule)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum mainly connects:",
    options: [
      "The spinal cord to the cerebellum",
      "Homologous regions of the left and right cerebral hemispheres",
      "The hippocampus to the hypothalamus only",
      "Sensory receptors to motor neurons directly"
    ],
    correct: 1,
    explanation: "The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Homologous regions of the left and right cerebral hemispheres) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Homologous regions of the left and right cerebral hemispheres) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Homologous regions of the left and right cerebral hemispheres) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "At rest, if K⁺ leak conductance dominates, increasing Na⁺ leak conductance would be expected to shift V_m:",
    options: [
      "Toward E_Na (less negative)",
      "Toward E_K (more negative)",
      "To exactly 0 mV instantly",
      "Away from both equilibrium potentials equally with no shift"
    ],
    correct: 0,
    explanation: "Resting V_m is a conductance-weighted average of equilibrium potentials; added Na⁺ leak pulls V_m toward E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that λ is short, EPSPs from distal synapses at the axon hillock will be:",
    options: [
      "Smaller due to greater attenuation",
      "Larger than proximal EPSPs always",
      "Unchanged regardless of distance",
      "Converted directly to action potentials without decay"
    ],
    correct: 0,
    explanation: "Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Smaller due to greater attenuation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Smaller due to greater attenuation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Smaller due to greater attenuation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Suppose that E_ion for a permeant cation is +50 mV and V_m is −70 mV, the driving force for that ion is:",
    options: [
      "120 mV inward (V_m − E_ion = −120 mV)",
      "20 mV outward only",
      "Zero because the cell is at rest",
      "50 mV with no direction"
    ],
    correct: 0,
    explanation: "Driving force is V_m − E_ion; negative values indicate inward current for cations.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (120 mV inward (V_m − E_ion = −120 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (120 mV inward (V_m − E_ion = −120 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (120 mV inward (V_m − E_ion = −120 mV)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "EPSP amplitude at the soma is reduced for distal synapses mainly due to:",
    options: [
      "Passive cable attenuation along dendrites",
      "Complete absence of receptors at distal sites always",
      "Saltatory conduction in dendrites",
      "Photoreceptor convergence only"
    ],
    correct: 0,
    explanation: "Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Passive cable attenuation along dendrites) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive cable attenuation along dendrites) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive cable attenuation along dendrites) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity mainly through:",
    options: [
      "Increased action potential firing rate",
      "Changing the amino acid sequence of rhodopsin",
      "Shifting the visual receptive field center",
      "Blocking all K⁺ leak channels permanently"
    ],
    correct: 0,
    explanation: "Rate coding complements place coding for intensity and temporal features.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increased action potential firing rate) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased action potential firing rate) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased action potential firing rate) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose that the Na⁺/K⁺ pump rate doubles but relative leak conductances are unchanged, the immediate effect on V_m is:",
    options: [
      "Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange",
      "Immediate depolarization to E_Na",
      "No change because pumps do not affect voltage",
      "Shift to E_Cl regardless of Cl⁻ conductance"
    ],
    correct: 0,
    explanation: "Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that both R_m and R_i double while C_m is constant, the length constant λ:",
    options: [
      "Remains unchanged because λ = √(R_m/R_i)",
      "Doubles",
      "Halves",
      "Becomes zero"
    ],
    correct: 0,
    explanation: "Proportional changes in R_m and R_i cancel in the ratio under the square root.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Remains unchanged because λ = √(R_m/R_i)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Remains unchanged because λ = √(R_m/R_i)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Remains unchanged because λ = √(R_m/R_i)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Cooling an axon reduces conduction velocity mainly by:",
    options: [
      "Slowing voltage-gated channel kinetics and ion diffusion",
      "Increasing myelin thickness",
      "Raising E_Na above +100 mV",
      "Eliminating passive spread between nodes"
    ],
    correct: 0,
    explanation: "Temperature affects channel gating rates and ion mobility, slowing propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slowing voltage-gated channel kinetics and ion diffusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slowing voltage-gated channel kinetics and ion diffusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slowing voltage-gated channel kinetics and ion diffusion) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Suppose that V_m is clamped at E_K, the driving force on K⁺ ions is:",
    options: [
      "Zero (no net electrochemical driving force)",
      "Maximal inward",
      "Maximal outward always",
      "Determined only by the Na⁺/K⁺ pump"
    ],
    correct: 0,
    explanation: "When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Zero (no net electrochemical driving force)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero (no net electrochemical driving force)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero (no net electrochemical driving force)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA_B receptors inhibit neurons mainly by:",
    options: [
      "Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity",
      "Direct fast Cl⁻ influx identical to GABA_A",
      "Opening voltage-gated Na⁺ channels",
      "Bleaching photopigment in rods"
    ],
    correct: 0,
    explanation: "Metabotropic GABA_B signaling opens K⁺ channels and inhibits Ca²⁺ channels.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellum contributes to motor control mainly by:",
    options: [
      "Error correction and timing of movements via mossy and climbing fiber input",
      "Transducing odorants in glomeruli",
      "Encoding color opponency in blobs",
      "Generating the cochlear traveling wave"
    ],
    correct: 0,
    explanation: "Cerebellar circuits compare intended and actual movement for fine coordination.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Error correction and timing of movements via mossy and climbing fiber input) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Error correction and timing of movements via mossy and climbing fiber input) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Error correction and timing of movements via mossy and climbing fiber input) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "A neuron with reduced Na⁺ channel density would be expected to likely show:",
    options: [
      "Higher threshold and slower rising phase",
      "Lower threshold and faster rising phase",
      "No change in excitability",
      "Permanent hyperpolarization to E_K without stimulation"
    ],
    correct: 0,
    explanation: "Fewer Na⁺ channels require stronger depolarization and slow regenerative upswing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Higher threshold and slower rising phase) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher threshold and slower rising phase) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher threshold and slower rising phase) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose that a drug doubles K⁺ leak conductance without changing the pump, the new resting potential will:",
    options: [
      "Move closer to E_K",
      "Move closer to E_Na",
      "Remain unchanged because the pump sets voltage directly",
      "Become exactly 0 mV"
    ],
    correct: 0,
    explanation: "Higher K⁺ conductance increases the weight of E_K in the Goldman equation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Move closer to E_K) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move closer to E_K) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move closer to E_K) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose that P_Cl increases while E_Cl remains −70 mV and rest is −65 mV, V_m will shift toward:",
    options: [
      "E_Cl (more negative)",
      "E_Na exclusively",
      "0 mV always",
      "The photoreceptor dark current"
    ],
    correct: 0,
    explanation: "Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (E_Cl (more negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (E_Cl (more negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (E_Cl (more negative)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Halving intracellular Na⁺ while keeping extracellular Na⁺ constant would be expected to make E_Na:",
    options: [
      "More positive",
      "More negative (closer to 0 mV)",
      "Exactly 0 mV always",
      "Equal to E_K"
    ],
    correct: 0,
    explanation: "Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (More positive) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (More positive) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (More positive) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Suppose that voltage-gated K⁺ channels are pharmacologically blocked during a spike, repolarization will:",
    options: [
      "Be slowed and the action potential may broaden",
      "Complete instantly with no change",
      "Prevent all Na⁺ channel opening permanently",
      "Eliminate the need for Na⁺ inactivation"
    ],
    correct: 0,
    explanation: "K⁺ efflux normally repolarizes the membrane; blockade prolongs depolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Be slowed and the action potential may broaden) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Be slowed and the action potential may broaden) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Be slowed and the action potential may broaden) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Suppose that nodes of Ranvier are spaced farther apart in a myelinated axon, conduction velocity typically:",
    options: [
      "Increases up to a point because fewer regenerative steps are needed",
      "Decreases to zero always",
      "Is unaffected by internode distance",
      "Requires elimination of all K⁺ channels"
    ],
    correct: 0,
    explanation: "Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increases up to a point because fewer regenerative steps are needed) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases up to a point because fewer regenerative steps are needed) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases up to a point because fewer regenerative steps are needed) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Suppose that EPSPs and IPSPs arrive simultaneously at the axon hillock, the net effect depends on:",
    options: [
      "The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing and location",
      "Only the largest EPSP regardless of IPSPs",
      "The myelin thickness exclusively",
      "The olfactory receptor expressed by the neuron"
    ],
    correct: 0,
    explanation: "Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing and location) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing and location) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing and location) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "C fibers usually convey:",
    options: [
      "Slow pain and temperature (unmyelinated)",
      "Fine discriminative touch with highest conduction velocity",
      "Photons to retinal ganglion cells",
      "Dopamine to the striatum"
    ],
    correct: 0,
    explanation: "Thin unmyelinated C fibers mediate slow nociceptive and thermal signals.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slow pain and temperature (unmyelinated)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slow pain and temperature (unmyelinated)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slow pain and temperature (unmyelinated)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Corticospinal tract lesions usually produce:",
    options: [
      "Contralateral weakness or paralysis of voluntary movement",
      "Loss of olfactory receptor gene expression",
      "Elimination of all photoreceptor responses",
      "Permanent hyperpolarization of all photoreceptors in light"
    ],
    correct: 0,
    explanation: "Most corticospinal fibers decussate, causing contralateral motor deficits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Contralateral weakness or paralysis of voluntary movement) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Contralateral weakness or paralysis of voluntary movement) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Contralateral weakness or paralysis of voluntary movement) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that z = +2 for Ca²⁺, a fourfold increase in external Ca²⁺ (fixed internal) changes E_Ca by approximately:",
    options: [
      "+18.5 mV at 37°C (more positive)",
      "+61 mV",
      "0 mV",
      "−61 mV"
    ],
    correct: 0,
    explanation: "For divalent ions the Nernst slope is halved; a fourfold outside change is ~ (61/2)×log10(4) ≈ 18.5 mV at 37°C.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (+18.5 mV at 37°C (more positive)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (+18.5 mV at 37°C (more positive)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (+18.5 mV at 37°C (more positive)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Suppose that nodal Na⁺ channel density is halved in a myelinated axon, conduction failure is most likely when:",
    options: [
      "Internodal distance is long and passive decay is large",
      "Internodal distance is very short with strong passive spread",
      "The axon is unmyelinated",
      "Temperature is raised to accelerate kinetics"
    ],
    correct: 0,
    explanation: "Insufficient nodal regeneration combined with excessive internodal decay blocks propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Internodal distance is long and passive decay is large) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Internodal distance is long and passive decay is large) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Internodal distance is long and passive decay is large) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Suppose that release probability p approaches 1, the coefficient of variation (CV) of EPSC amplitude across trials:",
    options: [
      "Decreases toward zero (less trial-to-trial variability)",
      "Increases without bound",
      "Equals p independent of quantal size",
      "Is determined solely by mEPSP frequency in darkness"
    ],
    correct: 0,
    explanation: "When release is nearly deterministic, variability from binomial release statistics diminishes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Decreases toward zero (less trial-to-trial variability)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Decreases toward zero (less trial-to-trial variability)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Decreases toward zero (less trial-to-trial variability)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Suppose that two neurons are coupled by gap junctions, injecting hyperpolarizing current into one will:",
    options: [
      "Hyperpolarize the coupled partner (if junction is open)",
      "Depolarize the partner always regardless of polarity",
      "Have no effect because gap junctions are rectifying always",
      "Trigger photopigment regeneration"
    ],
    correct: 0,
    explanation: "Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize the coupled partner (if junction is open)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize the coupled partner (if junction is open)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize the coupled partner (if junction is open)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Suppose that E_K is −90 mV and V_m is −60 mV, net K⁺ current through open K⁺ channels is:",
    options: [
      "Outward (efflux)",
      "Inward (influx)",
      "Zero",
      "Determined only by the pump without channels"
    ],
    correct: 0,
    explanation: "V_m above E_K drives K⁺ outward through open channels.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Outward (efflux)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Outward (efflux)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Outward (efflux)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "The lateral superior olive uses interaural level differences mainly for:",
    options: [
      "High-frequency localization via intensity cues",
      "Low-frequency phase locking without level",
      "Color processing in V1",
      "Olfactory discrimination in piriform cortex"
    ],
    correct: 0,
    explanation: "LSO compares sound level at the two ears, effective at higher frequencies.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (High-frequency localization via intensity cues) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (High-frequency localization via intensity cues) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (High-frequency localization via intensity cues) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate mainly in:",
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
    topic: "Learning & Memory",
    question: "Medial temporal lobe damage producing anterograde amnesia mainly disrupts:",
    options: [
      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods"
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Forming new declarative/episodic memories) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Forming new declarative/episodic memories) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Forming new declarative/episodic memories) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal ganglion cells encode visual information mainly as:",
    options: [
      "Patterns of action potentials sent to the brain",
      "Graded muscle contractions",
      "Continuous DC without spikes",
      "Direct hormone release into CSF"
    ],
    correct: 0,
    explanation: "Ganglion cells are the spiking output of the retina.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials sent to the brain) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials sent to the brain) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials sent to the brain) matches the underlying mechanism."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Damage to primary visual cortex (V1) usually causes:",
    options: [
      "Cortical blindness in corresponding visual field regions",
      "Complete loss of all sensation including touch",
      "Deafness for all frequencies",
      "Immediate loss of all procedural memory"
    ],
    correct: 0,
    explanation: "V1 lesions produce scotomas or field loss depending on extent.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cortical blindness in corresponding visual field regions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cortical blindness in corresponding visual field regions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cortical blindness in corresponding visual field regions) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Ganglion cells encode visual information mainly as:",
    options: [
      "Patterns of action potentials (rate and timing)",
      "Graded muscle contractions",
      "Direct myelin thickness changes",
      "Only peptide release without spikes"
    ],
    correct: 0,
    explanation: "Retinal output is spiking activity in optic nerve fibers.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials (rate and timing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials (rate and timing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials (rate and timing)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter mainly contains:",
    options: [
      "Myelinated axon tracts",
      "Neuronal cell bodies only",
      "Photoreceptor layers",
      "Taste bud cells"
    ],
    correct: 0,
    explanation: "White matter is axons; gray matter is cell bodies and neuropil.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axon tracts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axon tracts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axon tracts) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is usually associated with:",
    options: [
      "Hippocampus and medial temporal lobe structures",
      "Only cerebellar cortex for all memories",
      "Cochlear nucleus exclusively",
      "Skin Meissner corpuscles"
    ],
    correct: 0,
    explanation: "Explicit facts/events depend on medial temporal lobe circuits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hippocampus and medial temporal lobe structures) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hippocampus and medial temporal lobe structures) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hippocampus and medial temporal lobe structures) matches the underlying mechanism."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia usually reflects dysfunction in:",
    options: [
      "Fusiform face area / ventral visual stream (face recognition)",
      "Cochlear nucleus only",
      "Stretch reflex arc exclusively",
      "NMJ acetylcholine release only"
    ],
    correct: 0,
    explanation: "Face recognition deficits implicate specialized ventral visual cortex.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fusiform face area / ventral visual stream (face recognition)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fusiform face area / ventral visual stream (face recognition)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fusiform face area / ventral visual stream (face recognition)) matches the underlying mechanism."
    ]
  }
];

