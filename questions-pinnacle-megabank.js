// Pinnacle megabank — regenerate: python3 _generate_pinnacle_megabank.py
// ~300 unique hard MCQs across Parts 1–3.

const PINNACLE_MEGA_POOL = [
  {
    topic: "Nernst Equation",
    question: "At 37°C, [K⁺]i = 140 mM and [K⁺]o = 5 mM. E_K is closest to?",
    options: [
      "-89 mV",
      "-49 mV",
      "60 mV",
      "0 mV",
    ],
    correct: 0,
    explanation: "E_K = 61.54·log10(5/140) ≈ -89.1 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C, [K⁺]i = 140 mM and [K⁺]o = 2.5 mM. E_K is closest to?",
    options: [
      "≈ 0 mV",
      "≈ -68 mV",
      "-108 mV",
      "≈ 60 mV",
    ],
    correct: 2,
    explanation: "E_K = 61.54·log10(2.5/140) ≈ -107.6 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C, [Na⁺]i = 15 mM and [Na⁺]o = 145 mM. E_Na is closest to?",
    options: [
      "31 mV",
      "61 mV",
      "−70 mV",
      "10 mV",
    ],
    correct: 1,
    explanation: "E_Na ≈ +60.6 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C (z=2), [Ca²⁺]i = 0.10 µM and [Ca²⁺]o = 2 mM. E_Ca is closest to?",
    options: [
      "30 mV",
      "132 mV",
      "0 mV",
      "−70 mV",
    ],
    correct: 1,
    explanation: "E_Ca ≈ +132.3 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C (z=2), [Ca²⁺]i = 0.05 µM and [Ca²⁺]o = 1.5 mM. E_Ca is closest to?",
    options: [
      "30 mV",
      "−70 mV",
      "0 mV",
      "138 mV",
    ],
    correct: 3,
    explanation: "E_Ca ≈ +137.8 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "With standard K⁺/Na⁺ concentrations and P_K:P_Na = 1:0.05, resting V_m is best described as?",
    options: [
      "Near −65 mV",
      "At E_K (≈ −90 mV) exactly",
      "Exactly 0 mV",
      "Closer to E_Na (, 60 mV)",
    ],
    correct: 0,
    explanation: "With typical [K⁺]i/o and [Na⁺]i/o, Goldman at high P_K but finite P_Na gives V_m ≈ −65 mV—not the full Nernst E_K.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "With standard K⁺/Na⁺ concentrations and P_Cl equals P_K with E_Cl negative to rest, resting V_m is best described as?",
    options: [
      "V_m undefined",
      "V_m pulled toward E_Cl if P_Cl high",
      "V_m equals E_Na",
      "Main mechanism: electrical synapses set resting potential",
    ],
    correct: 1,
    explanation: "Goldman equation weights ions by permeability.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman equation weights ions by permeability.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman equation weights ions by permeability.",
    ]
  },
  {
    topic: "Cable Properties",
    question: "Which statement best describes Passive cable: Doubling R_m with R_i fixed. The expected effect?",
    options: [
      "τ equals λ when homeostatic mechanisms are intact",
      "λ halves under typical experimental conditions",
      "λ unchanged under typical experimental conditions",
      "λ increases (√(R_m/R_i))",
    ],
    correct: 3,
    explanation: "λ increases (√(R_m/R_i))",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Cable Properties",
    question: "Which statement best describes Passive cable: Doubling C_m with fixed g_leak. The expected effect?",
    options: [
      "No effect on τ under typical experimental conditions",
      "τ halves under typical experimental conditions",
      "Λ doubles at steady state in normoxic tissue",
      "τ = R_m C_m doubles",
    ],
    correct: 3,
    explanation: "τ = R_m C_m doubles",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ = R_m C_m doubles",
      "",
    ]
  },
  {
    topic: "Cable Properties",
    question: "Which statement best describes Passive cable: Increased axial resistance R_a. The expected effect?",
    options: [
      "λ increases",
      "Main mechanism: τ changes",
      "λ decreases",
      "Spikes fail",
    ],
    correct: 2,
    explanation: "λ decreases",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ decreases",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ decreases",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Application of TTX on squid giant axon produces which outcome?",
    options: [
      "Blocks voltage-gated Na⁺",
      "Depolarizes to, 60 mV at mammalian body temperature",
      "Blocks K⁺ under typical experimental conditions",
      "Opens Cl⁻ channels under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Blocks voltage-gated Na⁺; no action potentials",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Blocks voltage-gated Na⁺; no action potentials",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Application of TEA during an action potential produces which outcome?",
    options: [
      "Slows repolarization; broadens spike",
      "Hyperpolarizes to E_K instantly",
      "Blocks Na⁺ inactivation",
      "Prevents AP initiation mainly at AIS",
    ],
    correct: 0,
    explanation: "Slows repolarization; broadens spike",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Slows repolarization; broadens spike",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Application of Ouabain on a neuron produces which outcome?",
    options: [
      "Instant hyperpolarization at steady state in normoxic tissue",
      "Selective GABA block when ligand-gated channels are open",
      "Blocks synaptic vesicle fusion at fast chemical synapses",
      "Stops Na⁺/K⁺ pump; gradual depolarization",
    ],
    correct: 3,
    explanation: "Stops Na⁺/K⁺ pump; gradual depolarization",
    wrongExplanations: [
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Stops Na⁺/K⁺ pump; gradual depolarization",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Application of 4-AP (K⁺ channel blocker) produces which outcome?",
    options: [
      "Eliminates EPSPs following presynaptic Ca²⁺ influx",
      "Mimics myelin when Na⁺ inactivation has progressed",
      "Blocks Na⁺ entry at steady state in normoxic tissue",
      "Prolongs repolarization / increases firing",
    ],
    correct: 3,
    explanation: "Prolongs repolarization / increases firing",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In AMPA receptor activation at rest Mg²⁺, the best description?",
    options: [
      "Requires presynaptic effect at fast chemical synapses",
      "Ionotropic Cl⁻ influx at fast chemical synapses",
      "Fast EPSC; NMDA still blocked by Mg²⁺",
      "Requires g-protein signaling following presynaptic Ca²⁺ influx",
    ],
    correct: 2,
    explanation: "Fast EPSC; NMDA still blocked by Mg²⁺",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In NMDA receptor with strong depolarization, the best description?",
    options: [
      "Often closed at rest when ligand-gated channels are open",
      "Requires metabotropic at fast chemical synapses",
      "Blocks all LTP when ligand-gated channels are open",
      "Mg²⁺ block relieved; Ca²⁺ entry possible",
    ],
    correct: 3,
    explanation: "Mg²⁺ block relieved; Ca²⁺ entry possible",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mg²⁺ block relieved; Ca²⁺ entry possible",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In GABA<sub>A</sub> at rest when E_Cl ≈ −70 mV, the best description?",
    options: [
      "Cl⁻ influx; inhibition/shunting",
      "Often excitatory",
      "Requires presynaptic",
      "Light raises cGMP and keeps CNG channels open",
    ],
    correct: 0,
    explanation: "Cl⁻ influx; inhibition/shunting",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cl⁻ influx; inhibition/shunting",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Cl⁻ influx; inhibition/shunting",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In GABA<sub>B</sub> receptor activation, the best description?",
    options: [
      "G-protein; opens K⁺ / closes Ca²⁺",
      "Requires in retina at fast chemical synapses",
      "Fast ionotropic Cl⁻ following presynaptic Ca²⁺ influx",
      "Na⁺ channel opening following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "G-protein; often opens K⁺ / closes Ca²⁺",
    wrongExplanations: [
      "",
      "",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. G-protein; often opens K⁺ / closes Ca²⁺",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In Nicotinic ACh at NMJ, the best description?",
    options: [
      "Fast cationic EPSP leading to endplate",
      "Glutamate release when ligand-gated channels are open",
      "Metabotropic at fast chemical synapses",
      "Pure hyperpolarization following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Fast cationic EPSP leading to endplate potential",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fast cationic EPSP leading to endplate potential",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fast cationic EPSP leading to endplate potential",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Fast cationic EPSP leading to endplate potential",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In Botulinum toxin at motor synapse, the best description?",
    options: [
      "Postsynaptic receptor block at fast chemical synapses",
      "Myelin damage when Na⁺ inactivation has progressed",
      "Cleaves SNAREs; blocks vesicle fusion",
      "Na⁺ channel toxin when ligand-gated channels are open",
    ],
    correct: 2,
    explanation: "Cleaves SNAREs; blocks vesicle fusion",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In α-Latrotoxin (excess release), the best description?",
    options: [
      "Requires inhibits GABA",
      "Blocks Ca²⁺ channels",
      "Massive vesicle release",
      "Prevents AP propagation",
    ],
    correct: 2,
    explanation: "Massive vesicle release; depletion possible",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "In Strengthening an synapse via LTP protocol, the best description?",
    options: [
      "Requires in photoreceptors",
      "Requires presynaptic Na⁺ increase",
      "Light raises cGMP and keeps CNG channels open",
      "Postsynaptic Ca²⁺ via NMDA, AMPA cooperation",
    ],
    correct: 3,
    explanation: "Postsynaptic Ca²⁺ via NMDA + AMPA cooperation",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Postsynaptic Ca²⁺ via NMDA + AMPA cooperation",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Postsynaptic Ca²⁺ via NMDA + AMPA cooperation",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Two EPSPs 5 ms apart at one synapse?",
    options: [
      "Requires inhibition possible at fast chemical synapses",
      "No summation ever following presynaptic Ca²⁺ influx",
      "Temporal summation if within τ",
      "Requires spatial summation following presynaptic Ca²⁺ influx",
    ],
    correct: 2,
    explanation: "Temporal summation if within τ",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "EPSP at dendrite vs soma (same amplitude locally)?",
    options: [
      "Distal EPSP smaller at soma",
      "Distal larger",
      "Identical at AIS",
      "Requires gap junctions matter",
    ],
    correct: 0,
    explanation: "Distal EPSP smaller at soma (cable filter)",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Distal EPSP smaller at soma (cable filter)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Distal EPSP smaller at soma (cable filter)",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition during an EPSP?",
    options: [
      "Increased EPSP",
      "Reduced EPSP amplitude via increased conductance",
      "Main mechanism: hyperpolarization without conductance change",
      "Blocks all spikes permanently",
    ],
    correct: 1,
    explanation: "Reduced EPSP amplitude via increased conductance",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reduced EPSP amplitude via increased conductance",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Reduced EPSP amplitude via increased conductance",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Left optic nerve transection, which deficit is expected?",
    options: [
      "Blindness in left eye",
      "Bitemporal hemianopia",
      "Right homonymous hemianopia",
      "Left superior quadrantanopia",
    ],
    correct: 0,
    explanation: "Left optic nerve transection → Blindness in left eye.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Optic chiasm midline compression, which deficit is expected?",
    options: [
      "Right homonymous hemianopia",
      "Bitemporal hemianopia",
      "Macular sparing",
      "Left monocular blindness",
    ],
    correct: 1,
    explanation: "Optic chiasm midline compression → Bitemporal hemianopia.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Optic chiasm midline compression → Bitemporal hemianopia.",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Right optic tract lesion, which deficit is expected?",
    options: [
      "Ipsilateral quadrantanopia",
      "Right monocular blindness",
      "Bitemporal loss",
      "Left homonymous hemianopia",
    ],
    correct: 3,
    explanation: "Right optic tract lesion → Left homonymous hemianopia.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Left Meyer's loop (temporal lobe) damage, which deficit is expected?",
    options: [
      "Bitemporal hemianopia under typical experimental conditions",
      "Left superior quadrantanopia at steady state in normoxic tissue",
      "Right monocular blindness at steady state in normoxic tissue",
      "Right superior quadrantanopia",
    ],
    correct: 3,
    explanation: "Left Meyer's loop (temporal lobe) damage → Right superior quadrantanopia.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Right occipital lobe (V1) lesion, which deficit is expected?",
    options: [
      "Pure alexia when homeostatic mechanisms are intact",
      "Right monocular blindness at steady state in normoxic tissue",
      "Left homonymous hemianopia",
      "Bitemporal hemianopia under typical experimental conditions",
    ],
    correct: 2,
    explanation: "Right occipital lobe (V1) lesion → Left homonymous hemianopia.",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Right occipital lobe (V1) lesion → Left homonymous hemianopia.",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Complete left medial lemniscus in medulla, which deficit is expected?",
    options: [
      "Contralateral loss of touch/proprioception",
      "Bilateral blindness at steady state in normoxic tissue",
      "Ipsilateral face pain loss before cortical association areas",
      "Pure aphasia under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Complete left medial lemniscus in medulla → Contralateral loss of touch/proprioception.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Left spinothalamic tract at T8, which deficit is expected?",
    options: [
      "Deafness when homeostatic mechanisms are intact",
      "Ipsilateral proprioception loss contralateral to monocular stimulation",
      "Bilateral UMN weakness at steady state in normoxic tissue",
      "Contralateral pain/temperature loss below",
    ],
    correct: 3,
    explanation: "Left spinothalamic tract at T8 → Contralateral pain/temperature loss below lesion.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Left spinothalamic tract at T8 → Contralateral pain/temperature loss below lesion.",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Brown-Séquard hemisection at T10 (right), which deficit is expected?",
    options: [
      "Ipsilateral UMN weakness, DCML loss",
      "Pure cerebellar ataxia",
      "Requires autonomic loss",
      "Main mechanism: bilateral flaccid paralysis",
    ],
    correct: 0,
    explanation: "Brown-Séquard hemisection at T10 (right) → Ipsilateral UMN weakness + DCML loss; contralateral pain loss.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Brown-Séquard hemisection at T10 (right) → Ipsilateral UMN weakness + DCML loss; contralateral pain loss.",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Anterior spinal artery infarct, which deficit is expected?",
    options: [
      "Isolated proprioception loss contralateral to monocular stimulation",
      "Pure ataxia when homeostatic mechanisms are intact",
      "Requires autonomic symptoms under typical experimental conditions",
      "Bilateral motor, spinothalamic loss",
    ],
    correct: 3,
    explanation: "Anterior spinal artery infarct → Bilateral motor + spinothalamic loss; dorsal columns spared.",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anterior spinal artery infarct → Bilateral motor + spinothalamic loss; dorsal columns spared.",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Right cerebellar hemisphere lesion, which deficit is expected?",
    options: [
      "Contralateral hemiparesis",
      "Bitemporal hemianopia",
      "Ipsilateral limb ataxia",
      "Broca aphasia",
    ],
    correct: 2,
    explanation: "Right cerebellar hemisphere lesion → Ipsilateral limb ataxia (planning/timing).",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Cerebellar vermis lesion, which deficit is expected?",
    options: [
      "Truncal/gait ataxia",
      "Ipsilateral arm intention tremor",
      "Homonymous hemianopia",
      "Hyperreflexia with Babinski",
    ],
    correct: 0,
    explanation: "Cerebellar vermis lesion → Truncal/gait ataxia.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar vermis lesion → Truncal/gait ataxia.",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Bilateral hippocampal damage, which deficit is expected?",
    options: [
      "Deafness when homeostatic mechanisms are intact",
      "Anterograde declarative memory impairment",
      "Color blindness under typical experimental conditions",
      "Pure motor weakness at steady state in normoxic tissue",
    ],
    correct: 1,
    explanation: "Bilateral hippocampal damage → Anterograde declarative memory impairment.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Substantia nigra dopamine loss, which deficit is expected?",
    options: [
      "Pure sensory neglect when homeostatic mechanisms are intact",
      "Bradykinesia and rigidity",
      "Hyperreflexia at steady state in normoxic tissue",
      "Homonymous hemianopia under typical experimental conditions",
    ],
    correct: 1,
    explanation: "Substantia nigra dopamine loss → Bradykinesia and rigidity.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Substantia nigra dopamine loss → Bradykinesia and rigidity.",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Left Broca area damage, which deficit is expected?",
    options: [
      "Pure alexia when homeostatic mechanisms are intact",
      "Nonfluent aphasia; comprehension",
      "Fluent nonsense speech at steady state in normoxic tissue",
      "Right hemianopia at steady state in normoxic tissue",
    ],
    correct: 1,
    explanation: "Left Broca area damage → Nonfluent aphasia; comprehension relatively spared.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Left Broca area damage → Nonfluent aphasia; comprehension relatively spared.",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Given Left Wernicke area damage, which deficit is expected?",
    options: [
      "Deafness when homeostatic mechanisms are intact",
      "Pure motor neglect under typical experimental conditions",
      "Nonfluent speech at steady state in normoxic tissue",
      "Fluent but impaired comprehension",
    ],
    correct: 3,
    explanation: "Left Wernicke area damage → Fluent but impaired comprehension.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given MLF lesion (left), which deficit is expected?",
    options: [
      "Monocular blindness at steady state in normoxic tissue",
      "Internuclear ophthalmoplegia",
      "Facial paralysis at steady state in normoxic tissue",
      "Bitemporal hemianopia under typical experimental conditions",
    ],
    correct: 1,
    explanation: "MLF lesion (left) → Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus).",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MLF lesion (left) → Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus).",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Right CN VI nucleus lesion, which deficit is expected?",
    options: [
      "Optic chiasm syndrome under typical experimental conditions",
      "Pure aphasia under typical experimental conditions",
      "Horizontal gaze palsy toward lesion side /",
      "Requires hearing loss under typical experimental conditions",
    ],
    correct: 2,
    explanation: "Right CN VI nucleus lesion → Horizontal gaze palsy toward lesion side / ipsilateral abduction deficit.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Unilateral vestibular nerve lesion, which deficit is expected?",
    options: [
      "Vertigo and imbalance toward lesion",
      "Homonymous hemianopia under typical experimental conditions",
      "Spastic paralysis when homeostatic mechanisms are intact",
      "Pure aphasia under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Unilateral vestibular nerve lesion → Vertigo and imbalance toward lesion; nystagmus.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unilateral vestibular nerve lesion → Vertigo and imbalance toward lesion; nystagmus.",
      "",
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Which clinical presentation is most consistent with Given Left lateral pontine syndrome (AICA), which deficit is expected?",
    options: [
      "Ipsilateral face pain/temp",
      "Pure motor weakness at steady state in normoxic tissue",
      "Bitemporal hemianopia under typical experimental conditions",
      "Broca aphasia at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Left lateral pontine syndrome (AICA) → Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Left lateral pontine syndrome (AICA) → Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss.",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Photoreceptor in darkness?",
    options: [
      "Spiking at 100 Hz",
      "Releases ACh",
      "Hyperpolarized like bipolar ON cells",
      "Relatively depolarized",
    ],
    correct: 3,
    explanation: "Relatively depolarized; glutamate release ongoing",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Relatively depolarized; glutamate release ongoing",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Relatively depolarized; glutamate release ongoing",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Hair cell stereocilia deflection toward tallest row?",
    options: [
      "Complete silence at steady state in normoxic tissue",
      "Increased firing rate in auditory nerve",
      "Requires na⁺ pump stops when homeostatic mechanisms are intact",
      "Requires pain fibers activate before cortical association areas",
    ],
    correct: 1,
    explanation: "Increased firing rate in auditory nerve",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased firing rate in auditory nerve",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Olfactory receptor binding odorant?",
    options: [
      "Requires electrical synapse at fast chemical synapses",
      "Requires in cerebellum bilaterally at the level described",
      "G-protein cascade → cAMP → channel opening",
      "Direct gap junction to cortex via major descending or ascending tracts",
    ],
    correct: 2,
    explanation: "G-protein cascade → cAMP → channel opening",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Pacinian corpuscle high-frequency vibration?",
    options: [
      "Slow adaptation under typical experimental conditions",
      "Requires in retina in the primary sensory pathway named",
      "Requires nociceptor response at steady state in normoxic tissue",
      "Rapid adaptation; phasic firing",
    ],
    correct: 3,
    explanation: "Rapid adaptation; phasic firing",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rapid adaptation; phasic firing",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Voltage clamp at −40 mV with TTX and K⁺ channels available?",
    options: [
      "Mostly K⁺ current isolated if Na⁺ blocked",
      "Photoreceptor current following presynaptic Ca²⁺ influx",
      "Requires capacitive current forever under typical experimental conditions",
      "Requires cl⁻ without gradient under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Mostly K⁺ current isolated if Na⁺ blocked",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Mostly K⁺ current isolated if Na⁺ blocked",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Current clamp with brief hyperpolarizing step?",
    options: [
      "Subthreshold voltage change without spikes",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires synaptic vesicle fusion",
      "Often full AP train",
    ],
    correct: 0,
    explanation: "Subthreshold voltage change without spikes",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold voltage change without spikes",
    ]
  },
  {
    topic: "Methods",
    question: "Dual whole-cell recording of connected cells?",
    options: [
      "Can measure gap junction coupling or",
      "Requires measures bone density at steady state in normoxic tissue",
      "Requires measures myelin thickness along a uniformly leaky cable",
      "Requires measures glomeruli size under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Can measure gap junction coupling or monosynaptic latency",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Inactivation of Na⁺ channels during a long train?",
    options: [
      "Spike amplitude may decline; frequency adaptation",
      "Resting potential becomes, 60 mV",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Spikes grow without bound",
    ],
    correct: 0,
    explanation: "Spike amplitude may decline; frequency adaptation",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Spike amplitude may decline; frequency adaptation",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Hyperpolarized resting V_m near E_K?",
    options: [
      "More Na⁺ channels open during the rising phase of the spike",
      "Requires k⁺ channels disappear along a uniformly leaky cable",
      "Fewer Na⁺ channels available from closed",
      "Requires cl⁻ channels open when Na⁺ inactivation has progressed",
    ],
    correct: 2,
    explanation: "Fewer Na⁺ channels available from closed state",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fewer Na⁺ channels available from closed state",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Ectopic spike initiation in demyelinated axon?",
    options: [
      "In dendrites along a uniformly leaky cable",
      "Requires in glomeruli along a uniformly leaky cable",
      "Impossible without nodes along a uniformly leaky cable",
      "Can occur where excitability is high along",
    ],
    correct: 3,
    explanation: "Can occur where excitability is high along axon",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Can occur where excitability is high along axon",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Antidromic vs orthodromic propagation?",
    options: [
      "Same biophysics; direction follows",
      "Orthodromic mainly in retina during the rising phase of the spike",
      "Antidromic during the rising phase of the spike",
      "Requires gap junctions propagate when Na⁺ inactivation has progressed",
    ],
    correct: 0,
    explanation: "Same biophysics; direction follows refractory tail",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Same biophysics; direction follows refractory tail",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Same biophysics; direction follows refractory tail",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Absolute refractory period primarily reflects?",
    options: [
      "Requires photopigment recovery along a uniformly leaky cable",
      "Na⁺ inactivation preventing immediate",
      "Requires synaptic depression during the rising phase of the spike",
      "Requires k⁺ leak at mammalian body temperature",
    ],
    correct: 1,
    explanation: "Na⁺ inactivation preventing immediate re-firing",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Relative refractory period?",
    options: [
      "Requires muscle spindle stretch",
      "No stimulus can fire cell",
      "Requires cl⁻ influx",
      "Stronger stimulus needed",
    ],
    correct: 3,
    explanation: "Stronger stimulus needed; K⁺ still elevated",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Anode break excitation after hyperpolarization?",
    options: [
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
      "Persistent silence",
      "Na⁺ channels recover from inactivation",
    ],
    correct: 3,
    explanation: "Na⁺ channels recover from inactivation; can fire on repolarization",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best defined as?",
    options: [
      "Voltage where net inward current triggers",
      "Fixed at 0 mV",
      "Rod outer segments generate all-or-none spikes in darkness",
      "Same as E_K",
    ],
    correct: 0,
    explanation: "Voltage where net inward current triggers regenerative Na⁺ activation",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage where net inward current triggers regenerative Na⁺ activation",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Voltage where net inward current triggers regenerative Na⁺ activation",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage where net inward current triggers regenerative Na⁺ activation",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Safety factor for propagation in myelinated axon?",
    options: [
      "Myelin blocks all current during the rising phase of the spike",
      "Requires dendrites propagate during the rising phase of the spike",
      "Exactly one node required during the rising phase of the spike",
      "Multiple nodes can support propagation if",
    ],
    correct: 3,
    explanation: "Multiple nodes can support propagation if one fails",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Multiple nodes can support propagation if one fails",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Temperature increase on squid axon?",
    options: [
      "Resting potential fixed at 0 mV",
      "Kinetics faster; shorter AP width",
      "Applies a sensory transduction pathway from a different modality",
      "AP width doubles",
    ],
    correct: 1,
    explanation: "Kinetics faster; shorter AP width often",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Kinetics faster; shorter AP width often",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Kinetics faster; shorter AP width often",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Local anesthetic block of small vs large fibers?",
    options: [
      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Large fibers blocked first",
      "Small myelinated/C fibers blocked at lower",
      "No use dependence",
    ],
    correct: 2,
    explanation: "Small myelinated/C fibers often blocked at lower exposure (use-dependent)",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Small myelinated/C fibers often blocked at lower exposure (use-dependent)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Small myelinated/C fibers often blocked at lower exposure (use-dependent)",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Accommodation during slow depolarizing ramp?",
    options: [
      "Requires affects cochlea basilar membrane",
      "Requires affects glomeruli",
      "Inactivation reduces firing despite",
      "Increases firing without limit",
    ],
    correct: 2,
    explanation: "Inactivation reduces firing despite depolarization",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Post-tetanic potentiation (short-term)?",
    options: [
      "Requires gap junction opening when Na⁺ inactivation has progressed",
      "Postsynaptic Na⁺ deletion during the rising phase of the spike",
      "Presynaptic Ca²⁺ buildup increases release",
      "Requires lTP in hippocampus forever when Na⁺ inactivation has progressed",
    ],
    correct: 2,
    explanation: "Presynaptic Ca²⁺ buildup increases release briefly",
    wrongExplanations: [
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Presynaptic Ca²⁺ buildup increases release briefly",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Synaptic fatigue after high-frequency stimulation?",
    options: [
      "Depletion of readily releasable vesicles",
      "Requires myelin loss when Na⁺ inactivation has progressed",
      "Unlimited vesicle supply along a uniformly leaky cable",
      "Requires photopigment bleaching during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "Depletion of readily releasable vesicles",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depletion of readily releasable vesicles",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Dendritic Na⁺ spike in some pyramidal neurons?",
    options: [
      "Can boost distal signal toward soma",
      "Seldom occurs in CNS when Na⁺ inactivation has progressed",
      "Requires in olfactory bulb when Na⁺ inactivation has progressed",
      "Requires in NMJ along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Can boost distal signal toward soma",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Can boost distal signal toward soma",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Backpropagating action potential into dendrites?",
    options: [
      "Blocked by myelin on dendrites along a uniformly leaky cable",
      "Requires in muscle spindles along a uniformly leaky cable",
      "Requires in photoreceptors when Na⁺ inactivation has progressed",
      "Can activate dendritic channels",
    ],
    correct: 3,
    explanation: "Can activate dendritic channels and plasticity rules",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Can activate dendritic channels and plasticity rules",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Ephaptic coupling between unmyelinated fibers?",
    options: [
      "In retina primarily during the rising phase of the spike",
      "In cerebellum primarily when Na⁺ inactivation has progressed",
      "Extracellular fields can influence",
      "Stronger than gap junctions along a uniformly leaky cable",
    ],
    correct: 2,
    explanation: "Extracellular fields can influence neighbors weakly",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Extracellular fields can influence neighbors weakly",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Extracellular fields can influence neighbors weakly",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Extracellular fields can influence neighbors weakly",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Bicuculline applied to a CNS slice blocks which effect?",
    options: [
      "Myelin compaction",
      "GABA_A-mediated fast IPSPs",
      "Voltage-gated Na⁺ inactivation",
      "Nicotinic EPSPs",
    ],
    correct: 1,
    explanation: "GABA_A-mediated fast IPSPs",
    wrongExplanations: [
      "",
      "",
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. GABA_A-mediated fast IPSPs",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Picrotoxin and bicuculline both disrupt inhibition primarily by targeting?",
    options: [
      "Glutamate transporters following presynaptic Ca²⁺ influx",
      "GABA_A receptor–channel function",
      "Voltage-gated Ca²⁺ channels under typical experimental conditions",
      "GABA_B Gi/o coupling when ligand-gated channels are open",
    ],
    correct: 1,
    explanation: "GABA_A receptor–channel function",
    wrongExplanations: [
      "",
      "",
      "",
      "Fast synaptic inhibition at many CNS synapses is dominated by GABA_A Cl⁻ flux. Metabotropic GABA_B signaling is slower and works through G-proteins, not direct ligand-gated Cl⁻ pores. GABA_A receptor–channel function",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Strychnine causes convulsions mainly by blocking?",
    options: [
      "Glycine receptors in spinal cord",
      "Dopamine reuptake transporters at fast chemical synapses",
      "Muscarinic receptors in heart when ligand-gated channels are open",
      "AMPA receptors in cortex at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Glycine receptors in spinal cord",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Benzodiazepines enhance GABAergic inhibition by?",
    options: [
      "Inactivating Na⁺ channels irreversibly when homeostatic mechanisms are intact",
      "Increasing GABA_A channel open frequency",
      "Opening KCNQ channels directly under typical experimental conditions",
      "Blocking GABA reuptake following presynaptic Ca²⁺ influx",
    ],
    correct: 1,
    explanation: "Increasing GABA_A channel open frequency (allosteric)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Which capability best describes Barbiturates at anesthetic doses differ from benzodiazepines because they?",
    options: [
      "Selectively block NMDA mainly at all doses",
      "Activate dopamine D1 receptors",
      "Prolong GABA_A channel open time directly",
      "Prevent all K⁺ flux",
    ],
    correct: 2,
    explanation: "Prolong GABA_A channel open time directly at high dose",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Prolong GABA_A channel open time directly at high dose",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Atropine blocks muscarinic receptors; expected peripheral effect includes?",
    options: [
      "Bradycardia and miosis at steady state in normoxic tissue",
      "Tachycardia and reduced salivation",
      "Bronchoconstriction at steady state in normoxic tissue",
      "Increased gastric motility when homeostatic mechanisms are intact",
    ],
    correct: 1,
    explanation: "Tachycardia and reduced salivation",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Neostigmine reverses neuromuscular blockade by?",
    options: [
      "Blocking nicotinic receptors following presynaptic Ca²⁺ influx",
      "Opening voltage-gated K⁺ channels under typical experimental conditions",
      "Cleaving SNARE proteins when homeostatic mechanisms are intact",
      "Inhibiting acetylcholinesterase at the NMJ",
    ],
    correct: 3,
    explanation: "Inhibiting acetylcholinesterase at the NMJ",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Succinylcholine produces initial fasciculations because it?",
    options: [
      "Hyperpolarizes muscle to E_K at steady state in normoxic tissue",
      "Depolarizes the motor endplate",
      "Inhibits ryanodine receptors following presynaptic Ca²⁺ influx",
      "Blocks acetylcholine release at steady state in normoxic tissue",
    ],
    correct: 1,
    explanation: "Depolarizes the motor endplate (nicotinic agonist)",
    wrongExplanations: [
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Depolarizes the motor endplate (nicotinic agonist)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depolarizes the motor endplate (nicotinic agonist)",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Dantrolene treats malignant hyperthermia by reducing?",
    options: [
      "Central dopamine synthesis when ligand-gated channels are open",
      "Na⁺ channel density in neurons under typical experimental conditions",
      "Ca²⁺ release from sarcoplasmic reticulum",
      "Glutamate release in hippocampus when ligand-gated channels are open",
    ],
    correct: 2,
    explanation: "Ca²⁺ release from sarcoplasmic reticulum in muscle",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Reserpine depletes monoamine stores by inhibiting?",
    options: [
      "COMT in synaptic cleft following presynaptic Ca²⁺ influx",
      "Dopamine β-hydroxylase following presynaptic Ca²⁺ influx",
      "MAO-A in mitochondria under typical experimental conditions",
      "Vesicular monoamine transporter (VMAT)",
    ],
    correct: 3,
    explanation: "Vesicular monoamine transporter (VMAT)",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicular monoamine transporter (VMAT)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicular monoamine transporter (VMAT)",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Amphetamine increases synaptic catecholamines primarily by?",
    options: [
      "Reversing DAT/NET transporters",
      "Blocking all voltage-gated Na⁺ channels",
      "Opening GABA_A receptors",
      "Inhibiting acetylcholinesterase",
    ],
    correct: 0,
    explanation: "Reversing DAT/NET transporters and promoting release",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Cocaine's acute psychoactive motor effect is linked most to?",
    options: [
      "GABA_B activation in striatum when ligand-gated channels are open",
      "Blockade of dopamine reuptake (DAT)",
      "Persistent Na⁺ channel destruction at steady state in normoxic tissue",
      "Muscarinic blockade in spinal cord bilaterally at the level described",
    ],
    correct: 1,
    explanation: "Blockade of dopamine reuptake (DAT)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Haloperidol treats psychosis mainly through?",
    options: [
      "D2 dopamine receptor antagonism",
      "Nicotinic agonism in cortex in the adult human CNS",
      "Glycine transporter blockade at steady state in normoxic tissue",
      "NMDA receptor potentiation when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "D2 dopamine receptor antagonism",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "L-DOPA helps Parkinsonism because it?",
    options: [
      "Blocks subthalamic nucleus firing permanently",
      "Directly activates all serotonin receptors",
      "Replaces lost acetylcholine at NMJ",
      "Crosses the BBB and is converted to",
    ],
    correct: 3,
    explanation: "Crosses the BBB and is converted to dopamine in striatum",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Carbidopa is co-administered with L-DOPA to?",
    options: [
      "Inhibit peripheral DOPA decarboxylase",
      "Cross the BBB faster than L-DOPA when homeostatic mechanisms are intact",
      "Open K_ATP channels in pancreas at steady state in normoxic tissue",
      "Block MAO-B in all tissues equally at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Inhibit peripheral DOPA decarboxylase",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Selegiline (low dose) can augment L-DOPA by inhibiting?",
    options: [
      "Acetylcholinesterase at NMJ under typical experimental conditions",
      "GABA transaminase when ligand-gated channels are open",
      "VMAT2 in all neurons when homeostatic mechanisms are intact",
      "MAO-B in brain, slowing dopamine breakdown",
    ],
    correct: 3,
    explanation: "MAO-B in brain, slowing dopamine breakdown",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "SSRIs increase serotonin signaling chiefly by?",
    options: [
      "Opening 5-HT3 channels directly",
      "Blocking SERT reuptake",
      "Blocking all dopamine receptors",
      "Depleting vesicular 5-HT",
    ],
    correct: 1,
    explanation: "Blocking SERT reuptake",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Ketamine's rapid antidepressant actions are often attributed to?",
    options: [
      "Requires mu-opioid receptor agonism",
      "Persistent GABA_A blockade",
      "Irreversible MAO inhibition",
      "NMDA receptor antagonism",
    ],
    correct: 3,
    explanation: "NMDA receptor antagonism and downstream synaptic effects",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Morphine analgesia in the spinal dorsal horn involves?",
    options: [
      "Blocking all K⁺ channels in DRG",
      "AMPA receptor potentiation on nociceptors",
      "Mu-opioid receptor–mediated inhibition of",
      "Opening TRPV1 channels",
    ],
    correct: 2,
    explanation: "Mu-opioid receptor–mediated inhibition of pain transmission",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Naloxone reverses opioid overdose by?",
    options: [
      "Inhibiting COX enzymes at steady state in normoxic tissue",
      "Activating GABA_B in VTA at fast chemical synapses",
      "Blocking Na⁺ channels like TTX under typical experimental conditions",
      "Competitive antagonism at opioid receptors",
    ],
    correct: 3,
    explanation: "Competitive antagonism at opioid receptors",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Caffeine opposes sleepiness largely by antagonizing?",
    options: [
      "Nicotinic receptors at NMJ",
      "Adenosine A1/A2A receptors",
      "Voltage-gated Ca²⁺ channels in SNARE release",
      "Glycine receptors in cord",
    ],
    correct: 1,
    explanation: "Adenosine A1/A2A receptors",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "When Ethanol potentiates GABA_A and inhibits NMDA; at high dose this, which change in membrane potential is most likely?",
    options: [
      "Cause generalized seizures via NMDA potentiation",
      "Depress CNS function (sedation, ataxia)",
      "Selectively enhance dopamine mainly in cortex",
      "Increase REM without change to slow waves",
    ],
    correct: 1,
    explanation: "Depress CNS function (sedation, ataxia)",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depress CNS function (sedation, ataxia)",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Which outcome is most likely when Phenylephrine as an alpha-1 agonist typically occurs?",
    options: [
      "Hyperpolarization of all neurons to E_K",
      "Bronchodilation via β2 receptors",
      "Bradycardia via M2 receptors",
      "Vasoconstriction and increased blood",
    ],
    correct: 3,
    explanation: "Vasoconstriction and increased blood pressure",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Propranolol reduces tremor and tachycardia by blocking?",
    options: [
      "Alpha-1 receptors primarily",
      "D2 receptors in striatum",
      "Beta-adrenergic receptors",
      "Muscarinic receptors in heart",
    ],
    correct: 2,
    explanation: "Beta-adrenergic receptors",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Beta-adrenergic receptors",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Beta-adrenergic receptors",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Nifedipine lowers blood pressure primarily by blocking?",
    options: [
      "Kir channels in glia when homeostatic mechanisms are intact",
      "T-type Ca²⁺ in thalamus via major descending or ascending tracts",
      "L-type voltage-gated Ca²⁺ channels in",
      "Na⁺ channels in cardiac pacemaker under typical experimental conditions",
    ],
    correct: 2,
    explanation: "L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Verapamil differs from nifedipine partly because verapamil also?",
    options: [
      "Blocks all glutamate receptors",
      "Activates VMAT",
      "Slows AV conduction",
      "Permanently opens KCNQ channels",
    ],
    correct: 2,
    explanation: "Slows AV conduction (cardiac L-type Ca²⁺ block)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Zolpidem aids sleep mainly through?",
    options: [
      "Irreversible NMDA blockade when homeostatic mechanisms are intact",
      "Serotonin reuptake inhibition when ligand-gated channels are open",
      "GABA_A α1-subunit–preferring positive",
      "D2 receptor agonism following presynaptic Ca²⁺ influx",
    ],
    correct: 2,
    explanation: "GABA_A α1-subunit–preferring positive modulation",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Memantine in Alzheimer's disease is thought to act by?",
    options: [
      "Depleting acetylcholine stores",
      "Blocking all AMPA receptors",
      "Opening L-type Ca²⁺ channels",
      "Uncompetitive NMDA antagonism",
    ],
    correct: 3,
    explanation: "Uncompetitive NMDA antagonism (moderate channel block)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Donepezil improves cognition in Alzheimer's by inhibiting?",
    options: [
      "Butyrylcholinesterase mainly in muscle",
      "VMAT2",
      "Acetylcholinesterase",
      "GABA transaminase",
    ],
    correct: 2,
    explanation: "Acetylcholinesterase",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Acetylcholinesterase",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Riluzole in ALS may prolong survival partly by reducing?",
    options: [
      "Myelin basic protein expression",
      "Cochlear outer hair cell motility",
      "Glutamate excitotoxicity",
      "Most dopamine synthesis",
    ],
    correct: 2,
    explanation: "Glutamate excitotoxicity (e.g., Na⁺ channel effects on release)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrabenazine reduces chorea in Huntington's by depleting?",
    options: [
      "Monoamines via VMAT2 inhibition",
      "GABA via GAD blockade",
      "Glutamate via EAAT overactivation",
      "Acetylcholine via hemicholinium",
    ],
    correct: 0,
    explanation: "Monoamines via VMAT2 inhibition",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Levetiracetam binds SV2A; this antiseizure action likely alters?",
    options: [
      "Muscarinic M1 primarily in heart when homeostatic mechanisms are intact",
      "Synaptic vesicle release probability",
      "GABA_A benzodiazepine site when ligand-gated channels are open",
      "Ryanodine receptors in muscle when ligand-gated channels are open",
    ],
    correct: 1,
    explanation: "Synaptic vesicle release probability",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Synaptic vesicle release probability",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Synaptic vesicle release probability",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Synaptic vesicle release probability",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Carbamazepine treats trigeminal neuralgia partly by?",
    options: [
      "Stabilizing inactivated Na⁺ channels",
      "Opening KCNQ channels irreversibly at steady state in normoxic tissue",
      "Blocking all Ca²⁺ channels equally at steady state in normoxic tissue",
      "Activating glycine receptors following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Stabilizing inactivated Na⁺ channels (use-dependent block)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Phenytoin reduces seizure spread primarily through?",
    options: [
      "Persistent NMDA removal when homeostatic mechanisms are intact",
      "GABA transporter inhibition at fast chemical synapses",
      "Na⁺ channel block limiting high-frequency",
      "NMJ acetylcholinesterase inhibition when homeostatic mechanisms are intact",
    ],
    correct: 2,
    explanation: "Na⁺ channel block limiting high-frequency firing",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ channel block limiting high-frequency firing",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Valproate has multiple mechanisms including?",
    options: [
      "Increased GABA tone and Na⁺/Ca²⁺ channel",
      "Requires dopamine reuptake blockade when ligand-gated channels are open",
      "Irreversible VMAT blockade when homeostatic mechanisms are intact",
      "Requires aMPA potentiation when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Increased GABA tone and Na⁺/Ca²⁺ channel effects",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased GABA tone and Na⁺/Ca²⁺ channel effects",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Baclofen reduces spasticity mainly by activating?",
    options: [
      "GABA_B receptors (Gi/o) in spinal cord",
      "AMPA on Ia afferents primarily under typical experimental conditions",
      "Nicotinic receptors on interneurons when ligand-gated channels are open",
      "GABA_A receptors on muscle fibers at fast chemical synapses",
    ],
    correct: 0,
    explanation: "GABA_B receptors (Gi/o) in spinal cord",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABA_B receptors (Gi/o) in spinal cord",
      "",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. GABA_B receptors (Gi/o) in spinal cord",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Gabapentinoids bind alpha-2-delta subunits of?",
    options: [
      "Ryanodine receptor at fast chemical synapses",
      "Voltage-gated Ca²⁺ channels",
      "D2 receptor when ligand-gated channels are open",
      "SERT transporter at steady state in normoxic tissue",
    ],
    correct: 1,
    explanation: "Voltage-gated Ca²⁺ channels (modulating release)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Local anesthetic use-dependence means block is stronger when?",
    options: [
      "Channels open frequently during firing",
      "Main mechanism: glial K⁺ channels open",
      "Myelin thickness doubles",
      "Membrane is hyperpolarized for minutes",
    ],
    correct: 0,
    explanation: "Channels open frequently during firing",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Channels open frequently during firing",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Capsaicin desensitization reduces pain by?",
    options: [
      "Overactivating TRPV1 leading to nociceptor",
      "Blocking all Na⁺ channels permanently at steady state in normoxic tissue",
      "Opening GABA_A on muscle spindles at fast chemical synapses",
      "Preventing all glutamate release in DCML following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Overactivating TRPV1 leading to nociceptor defunctionalization",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin and saxitoxin both block?",
    options: [
      "GABA transporters",
      "Voltage-gated Na⁺ channels",
      "Nicotinic receptors at NMJ",
      "KCNQ channels primarily",
    ],
    correct: 1,
    explanation: "Voltage-gated Na⁺ channels",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-gated Na⁺ channels",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-gated Na⁺ channels",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Apamin blocks SK channels; expected neuronal effect?",
    options: [
      "Increased excitability and altered spike timing",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires myelination loss",
      "Complete inability to depolarize",
    ],
    correct: 0,
    explanation: "Increased excitability and altered spike timing",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Increased excitability and altered spike timing",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Which statement best describes D-AP5 blocks NMDA receptors; pairing-induced hippocampal LTP?",
    options: [
      "Enhanced regardless of voltage under typical experimental conditions",
      "Blocked mainly in cerebellum bilaterally at the level described",
      "Impaired when NMDA-dependent Ca²⁺ influx",
      "Unchanged because AMPA matters under typical experimental conditions",
    ],
    correct: 2,
    explanation: "Impaired when NMDA-dependent Ca²⁺ influx is required",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Impaired when NMDA-dependent Ca²⁺ influx is required",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Impaired when NMDA-dependent Ca²⁺ influx is required",
    ]
  },
  {
    topic: "Pharmacology",
    question: "CNQX blocks AMPA/kainate; fast EPSCs at many glutamatergic synapses?",
    options: [
      "Are unchanged because NMDA carries all fast current",
      "Are greatly reduced or abolished",
      "Depend on gap junctions",
      "Become pure GABA_B responses",
    ],
    correct: 1,
    explanation: "Are greatly reduced or abolished",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Are greatly reduced or abolished",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Diazoxide opens K_ATP channels in beta cells, causing?",
    options: [
      "Requires glucagon release at steady state in normoxic tissue",
      "Depolarization and insulin surge along a uniformly leaky cable",
      "Persistent Na⁺ channel opening under typical experimental conditions",
      "Hyperpolarization and reduced insulin",
    ],
    correct: 3,
    explanation: "Hyperpolarization and reduced insulin release",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Hyperpolarization and reduced insulin release",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Sulfonylureas stimulate insulin release by?",
    options: [
      "Opening all GABA_A channels in pancreas at fast chemical synapses",
      "Activating D2 receptors in liver when ligand-gated channels are open",
      "Closing K_ATP → beta-cell depolarization →",
      "Blocking VMAT in islets when homeostatic mechanisms are intact",
    ],
    correct: 2,
    explanation: "Closing K_ATP → beta-cell depolarization → Ca²⁺ influx",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "In the direct pathway of basal ganglia, striatal D1 MSNs tend to?",
    options: [
      "Hyperpolarize motor cortex directly via major descending or ascending tracts",
      "Excite STN to increase GPi output under typical experimental conditions",
      "Block all cerebellar output in the adult human CNS",
      "Inhibit GPi/SNr, disinhibiting thalamus",
    ],
    correct: 3,
    explanation: "Inhibit GPi/SNr, disinhibiting thalamus (facilitate movement)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "The indirect pathway (D2 MSNs) promotes motor suppression by?",
    options: [
      "Eliminating dopamine release permanently",
      "Directly opening Na⁺ channels in muscle",
      "Disinhibiting STN → increased GPi/SNr",
      "Blocking all sensory thalamus relay",
    ],
    correct: 2,
    explanation: "Disinhibiting STN → increased GPi/SNr inhibition of thalamus",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Dopamine loss in Parkinson's shifts basal ganglia balance toward?",
    options: [
      "Pure cerebellar ataxia bilaterally at the level described",
      "Complete loss of thalamus bilaterally at the level described",
      "Enhanced direct pathway when homeostatic mechanisms are intact",
      "Increased indirect pathway activity",
    ],
    correct: 3,
    explanation: "Increased indirect pathway activity and bradykinesia",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased indirect pathway activity and bradykinesia",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased indirect pathway activity and bradykinesia",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "STN deep brain stimulation often improves Parkinsonian symptoms by?",
    options: [
      "Replacing lost dopamine in substantia nigra",
      "Blocking all sensory input to M1",
      "Myelinating corticospinal axons",
      "Disrupting pathological basal",
    ],
    correct: 3,
    explanation: "Disrupting pathological basal ganglia–thalamus oscillations",
    wrongExplanations: [
      "",
      "",
      "Basal ganglia motor control involves dopamine from substantia nigra pars compacta to striatum. Membrane equations or retinal biochemistry do not substitute for that circuit logic. Disrupting pathological basal ganglia–thalamus oscillations",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Climbing fiber input to Purkinje cells primarily?",
    options: [
      "Carries proprioception from muscle spindles",
      "Is the sole driver of simple spikes",
      "Releases dopamine in deep nuclei",
      "Delivers powerful excitation",
    ],
    correct: 3,
    explanation: "Delivers powerful excitation and error-related signals",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Delivers powerful excitation and error-related signals",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Delivers powerful excitation and error-related signals",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Mossy fiber input to cerebellum carries?",
    options: [
      "Requires retinal ON/OFF channels",
      "Diverse sensory and motor-related",
      "Requires pain from spinothalamic tract",
      "Requires olfactory cAMP signals",
    ],
    correct: 1,
    explanation: "Diverse sensory and motor-related information to granule cells",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Purkinje cell simple spikes are driven mainly by?",
    options: [
      "Parallel fiber synaptic input",
      "Dopamine from VTA",
      "Direct monosynaptic Ia afferents",
      "Cochlear inner hair cells",
    ],
    correct: 0,
    explanation: "Parallel fiber synaptic input",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Parallel fiber synaptic input",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Parallel fiber synaptic input",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Cerebellar deep nuclei are the primary output because?",
    options: [
      "Climbing fibers bypass Purkinje cells entirely",
      "Vestibular nuclei have no connection",
      "Purkinje cells inhibit deep nuclei",
      "Granule cells project directly to alpha motor neurons",
    ],
    correct: 2,
    explanation: "Purkinje cells inhibit deep nuclei, gating cerebellar output",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Purkinje cells inhibit deep nuclei, gating cerebellar output",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which statement best describes trisynaptic hippocampal circuit order?",
    options: [
      "CA1 → dentate → subiculum → thalamus in the adult human CNS",
      "Entorhinal cortex → dentate gyrus → CA3 →",
      "Cerebellum → M1 → CA3 in the adult human CNS",
      "Amygdala → hypothalamus → CA3 directly via major descending or ascending tracts",
    ],
    correct: 1,
    explanation: "Entorhinal cortex → dentate gyrus → CA3 → CA1",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Entorhinal cortex → dentate gyrus → CA3 → CA1",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Place cells in CA1 fire maximally when?",
    options: [
      "Muscle spindle is silent",
      "Basilar membrane is at cochlear apex",
      "The animal occupies a specific location",
      "Retinal image motion is purely horizontal",
    ],
    correct: 2,
    explanation: "The animal occupies a specific location",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The animal occupies a specific location",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The animal occupies a specific location",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Grid cells in entorhinal cortex show?",
    options: [
      "Periodic firing fields tiling space",
      "Orientation tuning like V1 simple cells",
      "Pure frequency tuning like A1",
      "Requires nociceptive heat tuning",
    ],
    correct: 0,
    explanation: "Periodic firing fields tiling space hexagonally",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Periodic firing fields tiling space hexagonally",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Periodic firing fields tiling space hexagonally",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "LGN relay cells carry?",
    options: [
      "Requires olfactory glomerular maps",
      "Visual information to primary visual cortex",
      "References a circuit element that does not control the variable asked about",
      "Requires proprioception to cerebellum",
    ],
    correct: 1,
    explanation: "Visual information to primary visual cortex",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Thalamic reticular nucleus (TRN) provides?",
    options: [
      "Myelin to optic nerve during the rising phase of the spike",
      "Direct dopamine to striatum at fast chemical synapses",
      "Excitatory drive to ventral horn when homeostatic mechanisms are intact",
      "Inhibitory feedback/feedforward to relay",
    ],
    correct: 3,
    explanation: "Inhibitory feedback/feedforward to relay nuclei",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibitory feedback/feedforward to relay nuclei",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which capability best describes Corticothalamic feedback to sensory thalamus?",
    options: [
      "Replace all peripheral transduction",
      "Eliminate need for Na⁺ channels",
      "Modulate relay gain and receptive fields",
      "Convert all EPSPs to Cl⁻-dominated events",
    ],
    correct: 2,
    explanation: "Modulate relay gain and receptive fields",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Modulate relay gain and receptive fields",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Superior colliculus deep layers are important for?",
    options: [
      "Orienting eye/head movements toward",
      "Glomerular odor discrimination under typical experimental conditions",
      "Cochlear amplification contralateral to monocular stimulation",
      "Color constancy mainly in V4 at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Orienting eye/head movements toward stimuli",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orienting eye/head movements toward stimuli",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orienting eye/head movements toward stimuli",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orienting eye/head movements toward stimuli",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Default mode network is most active during?",
    options: [
      "Maximal stretch reflex activation under typical experimental conditions",
      "Pure photoreceptor transduction following presynaptic Ca²⁺ influx",
      "NMJ blockade under typical experimental conditions",
      "Rest and internally directed thought",
    ],
    correct: 3,
    explanation: "Rest and internally directed thought",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Rest and internally directed thought",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Layer 5 pyramidal neurons often?",
    options: [
      "Project subcortically",
      "Fire mainly at 200 Hz without adaptation",
      "Are the cells with gap junctions",
      "Receive olfactory receptor input",
    ],
    correct: 0,
    explanation: "Project subcortically and intracortically",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Project subcortically and intracortically",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Project subcortically and intracortically",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Project subcortically and intracortically",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Parvalbumin interneurons in cortex typically?",
    options: [
      "Are identical to Purkinje cells at steady state in normoxic tissue",
      "Carry proprioception to DCML contralateral to monocular stimulation",
      "Release glutamate at NMJ at fast chemical synapses",
      "Provide fast perisomatic inhibition to",
    ],
    correct: 3,
    explanation: "Provide fast perisomatic inhibition to pyramidal cells",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "VTA → nucleus accumbens dopamine mediates?",
    options: [
      "Reward prediction and motivational",
      "Cochlear tuning in the primary sensory pathway named",
      "Purely conjugate eye movements under typical experimental conditions",
      "Requires cerebellar LTD via major descending or ascending tracts",
    ],
    correct: 0,
    explanation: "Reward prediction and motivational salience",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reward prediction and motivational salience",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reward prediction and motivational salience",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Hypothalamic PVN neurons?",
    options: [
      "Release oxytocin/vasopressin",
      "Generate otoacoustic emissions",
      "Are sole source of NMJ acetylcholine",
      "Encode retinal receptive fields",
    ],
    correct: 0,
    explanation: "Release oxytocin/vasopressin and regulate autonomic/endocrine function",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release oxytocin/vasopressin and regulate autonomic/endocrine function",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "SCN circadian pacemaker synchronizes via?",
    options: [
      "Requires olfactory bulb oscillations",
      "Retinohypothalamic light input",
      "Direct muscle spindle afferents",
      "Requires gap junctions in liver",
    ],
    correct: 1,
    explanation: "Retinohypothalamic light input and internal gene loops",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Amygdala lateral nucleus is critical for?",
    options: [
      "Generating AIS spikes primarily when Na⁺ inactivation has progressed",
      "Associating sensory cues with emotional",
      "Motor unit recruitment order at steady state in normoxic tissue",
      "Computing E_K from concentrations under typical experimental conditions",
    ],
    correct: 1,
    explanation: "Associating sensory cues with emotional significance",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Associating sensory cues with emotional significance",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Associating sensory cues with emotional significance",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Cerebellar flocculus is involved in?",
    options: [
      "Pain crossing in cord",
      "VOR adaptation",
      "NMJ ACh packaging",
      "Color opponency in retina",
    ],
    correct: 1,
    explanation: "VOR adaptation",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: VOR adaptation",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: VOR adaptation",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: VOR adaptation",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Inferior olive climbing fibers are linked to?",
    options: [
      "Timing errors and cerebellar motor learning",
      "Photoreceptor bleaching",
      "Applies a sensory transduction pathway from a different modality",
      "Requires k⁺ Nernst potential",
    ],
    correct: 0,
    explanation: "Timing errors and cerebellar motor learning",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Timing errors and cerebellar motor learning",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Red nucleus participates in?",
    options: [
      "Rubrospinal influence on limb flexor tone",
      "Purely visual stereopsis in the primary sensory pathway named",
      "Adult hippocampal neurogenesis in the adult human CNS",
      "Requires inner ear endolymph production under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Rubrospinal influence on limb flexor tone",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rubrospinal influence on limb flexor tone",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rubrospinal influence on limb flexor tone",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Raphe serotonergic projections modulate?",
    options: [
      "Mood, sleep, and sensory gain broadly",
      "Requires rod disk shedding",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
    ],
    correct: 0,
    explanation: "Mood, sleep, and sensory gain broadly",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Locus coeruleus norepinephrine increases?",
    options: [
      "Main mechanism: photoreceptor dark current elimination",
      "Arousal and signal-to-noise in many circuits",
      "Main mechanism: glycine at NMJ",
      "Persistent hyperpolarization to E_K everywhere",
    ],
    correct: 1,
    explanation: "Arousal and signal-to-noise in many circuits",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Arousal and signal-to-noise in many circuits",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Arousal and signal-to-noise in many circuits",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Basal forebrain cholinergic neurons promote?",
    options: [
      "Requires spinal reflex reversal",
      "Cochlear map inversion",
      "Cortical arousal and attention",
      "Requires cerebellar simple spikes",
    ],
    correct: 2,
    explanation: "Cortical arousal and attention",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which outcome is most likely when Internal capsule corticospinal lesion occurs?",
    options: [
      "Pure Wernicke aphasia",
      "Bitemporal hemianopia",
      "Ipsilateral proprioception loss",
      "Contralateral UMN signs",
    ],
    correct: 3,
    explanation: "Contralateral UMN signs",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Contralateral UMN signs",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Contralateral UMN signs",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "DCML pathway carries?",
    options: [
      "Fine touch, vibration, and proprioception to S1",
      "Applies a sensory transduction pathway from a different modality",
      "pain/temp",
      "Requires smell to amygdala",
    ],
    correct: 0,
    explanation: "Fine touch, vibration, and proprioception to S1",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fine touch, vibration, and proprioception to S1",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which clinical presentation is most consistent with Spinoreticular tract contributes to?",
    options: [
      "Arousal and affective aspects of pain",
      "Fine two-point discrimination when homeostatic mechanisms are intact",
      "VOR slow phase when homeostatic mechanisms are intact",
      "Photoreceptor glutamate in dark following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Arousal and affective aspects of pain",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Arousal and affective aspects of pain",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Arousal and affective aspects of pain",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Cuneate vs gracile nuclei divide?",
    options: [
      "High vs low sound frequency under typical experimental conditions",
      "Left vs right visual hemifields contralateral to monocular stimulation",
      "D1 vs D2 receptors at fast chemical synapses",
      "Upper limb vs lower limb DCML input",
    ],
    correct: 3,
    explanation: "Upper limb vs lower limb DCML input",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Upper limb vs lower limb DCML input",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Trigeminal lemniscus carries?",
    options: [
      "Ia afferents to motor neurons when homeostatic mechanisms are intact",
      "Olfactory axons to cortex directly when Na⁺ inactivation has progressed",
      "Retinal axons to LGN along a uniformly leaky cable",
      "Face touch/proprioception to VPM thalamus",
    ],
    correct: 3,
    explanation: "Face touch/proprioception to VPM thalamus",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face touch/proprioception to VPM thalamus",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which outcome is most likely when Hypoglossal nucleus damage occurs?",
    options: [
      "Pure ataxia without weakness at steady state in normoxic tissue",
      "Contralateral hemianopia under typical experimental conditions",
      "Deafness when homeostatic mechanisms are intact",
      "Ipsilateral tongue weakness/deviation",
    ],
    correct: 3,
    explanation: "Ipsilateral tongue weakness/deviation toward lesion",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Which anatomic lesion best explains Facial nerve lesion with forehead sparing?",
    options: [
      "Peripheral Bell's palsy whole hemiface",
      "Complete DCML loss",
      "Central (UMN) facial weakness",
      "Optic chiasm compression",
    ],
    correct: 2,
    explanation: "Central (UMN) facial weakness",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Medial longitudinal fasciculus coordinates?",
    options: [
      "Requires ia discharge under typical experimental conditions",
      "Cochlear amplification contralateral to monocular stimulation",
      "Horizontal eye movements linking CN VI",
      "Requires hippocampal ripples bilaterally at the level described",
    ],
    correct: 2,
    explanation: "Horizontal eye movements linking CN VI and III",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Horizontal eye movements linking CN VI and III",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Nucleus ambiguus motor fibers innervate?",
    options: [
      "Dorsal root ganglion when homeostatic mechanisms are intact",
      "Corticospinal tract bilaterally at the level described",
      "Pharynx/larynx via CN IX",
      "Optic nerve when homeostatic mechanisms are intact",
    ],
    correct: 2,
    explanation: "Pharynx/larynx via CN IX, X (XI component)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pharynx/larynx via CN IX, X (XI component)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pharynx/larynx via CN IX, X (XI component)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pharynx/larynx via CN IX, X (XI component)",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Area postrema detects emetic toxins because it?",
    options: [
      "Has no synapses at fast chemical synapses",
      "Is sole site of Na⁺ pump under typical experimental conditions",
      "Lacks a complete blood–brain barrier",
      "Contains photoreceptors when ligand-gated channels are open",
    ],
    correct: 2,
    explanation: "Lacks a complete blood–brain barrier",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Lacks a complete blood–brain barrier",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Nucleus tractus solitarius receives?",
    options: [
      "Requires motor cortex commands",
      "Requires ia fibers directly",
      "Requires oN bipolar input",
      "Visceral sensory input (taste",
    ],
    correct: 3,
    explanation: "Visceral sensory input (taste, baroreceptors)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "PAG stimulation can produce?",
    options: [
      "Analgesia via descending pain-modulation",
      "Pure cerebellar intention tremor via major descending or ascending tracts",
      "Complete loss of K⁺ channels at steady state in normoxic tissue",
      "Persistent blindness when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Analgesia via descending pain-modulation",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Rostral ventrolateral medulla is important for?",
    options: [
      "Sympathetic vasomotor tone",
      "Color opponency under typical experimental conditions",
      "Cochlear map in the primary sensory pathway named",
      "Place field remapping under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Sympathetic vasomotor tone",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sympathetic vasomotor tone",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sympathetic vasomotor tone",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sympathetic vasomotor tone",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Solitary nucleus baroreceptor afferents regulate?",
    options: [
      "NMJ quantal content at steady state in normoxic tissue",
      "Photopigment regeneration at steady state in normoxic tissue",
      "Blood pressure via brainstem autonomic",
      "Olfactory cAMP primarily in the primary sensory pathway named",
    ],
    correct: 2,
    explanation: "Blood pressure via brainstem autonomic centers",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Blood pressure via brainstem autonomic centers",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Blood pressure via brainstem autonomic centers",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Cortico-pontine-cerebellar pathway carries?",
    options: [
      "Requires lamina I pain contralateral to monocular stimulation",
      "Efference copy of planned motor signals",
      "Requires renshaw glycine to muscle at steady state in normoxic tissue",
      "Requires rod signals when homeostatic mechanisms are intact",
    ],
    correct: 1,
    explanation: "Efference copy of planned motor signals",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Cerebello-thalamo-cortical loop returns to?",
    options: [
      "NMJ under typical experimental conditions",
      "Olfactory epithelium before cortical association areas",
      "Retinal bipolar cells in the primary sensory pathway named",
      "Motor/premotor cortex to adjust movement",
    ],
    correct: 3,
    explanation: "Motor/premotor cortex to adjust movement",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor/premotor cortex to adjust movement",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor/premotor cortex to adjust movement",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor/premotor cortex to adjust movement",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "CA3 recurrent collaterals support?",
    options: [
      "Pattern completion and autoassociation",
      "Otoacoustic emissions under typical experimental conditions",
      "Photoreceptor dark current when ligand-gated channels are open",
      "Requires monosynaptic reflex following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Pattern completion and autoassociation",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Pattern completion and autoassociation",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Photoreceptors hyperpolarize to light because?",
    options: [
      "Glutamate release increases in light",
      "cGMP-gated channels close → photoreceptor",
      "Action potentials propagate along the photoreceptor outer segment",
      "Na⁺ channels open maximally in light",
    ],
    correct: 1,
    explanation: "cGMP-gated channels close → photoreceptor depolarization in dark reverses",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: cGMP-gated channels close → photoreceptor depolarization in dark reverses",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "ON bipolar cells depolarize to light via?",
    options: [
      "ON pathway sign inversion (e.g.",
      "Requires muscarinic receptors",
      "Na⁺ spikes in bipolar axons",
      "Direct electrical coupling to rods",
    ],
    correct: 0,
    explanation: "ON pathway sign inversion (e.g., mGluR6 cascade)",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ON pathway sign inversion (e.g., mGluR6 cascade)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ON pathway sign inversion (e.g., mGluR6 cascade)",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Horizontal cells contribute to center-surround by?",
    options: [
      "Generating cochlear traveling wave",
      "Releasing ACh at NMJ",
      "Lateral inhibition in outer retina",
      "Driving Ia afferents in muscle",
    ],
    correct: 2,
    explanation: "Lateral inhibition in outer retina",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Ganglion cell receptive fields often show center-surround because?",
    options: [
      "Bipolar/amacrine circuits create",
      "Requires muscle spindles create surround",
      "Requires olfactory glomeruli create surround",
      "Requires thalamus adds surround later",
    ],
    correct: 0,
    explanation: "Bipolar/amacrine circuits create antagonistic surrounds",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "M pathway (parvocellular) vs P pathway (magnocellular) in primates?",
    options: [
      "M: smell; P: proprioception",
      "P carries pain from cord",
      "M: motion/depth transient",
      "Both are identical in LGN layers mainly in fish",
    ],
    correct: 2,
    explanation: "M: motion/depth transient; P: color/fine detail (classic division)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M: motion/depth transient; P: color/fine detail (classic division)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M: motion/depth transient; P: color/fine detail (classic division)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M: motion/depth transient; P: color/fine detail (classic division)",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Cochlear tonotopy maps frequency because?",
    options: [
      "Applies a sensory transduction pathway from a different modality",
      "Most hair cells identical tuning",
      "Basilar membrane stiffness varies along length (high at base)",
      "Requires vestibular otoliths encode pitch",
    ],
    correct: 2,
    explanation: "Basilar membrane stiffness varies along length (high at base)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Outer hair cell electromotility contributes to?",
    options: [
      "Requires dCML vibration sense when homeostatic mechanisms are intact",
      "Cochlear amplification and sharp tuning",
      "Photoreceptor dark current when ligand-gated channels are open",
      "NMJ endplate potential at steady state in normoxic tissue",
    ],
    correct: 1,
    explanation: "Cochlear amplification and sharp tuning",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Cochlear amplification and sharp tuning",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Tip links in hair cells transduce sound by?",
    options: [
      "Requires gap junction coupling under typical experimental conditions",
      "Opening mechanotransduction channels when",
      "Releasing dopamine in cochlear nucleus when ligand-gated channels are open",
      "Closing all K⁺ channels permanently when homeostatic mechanisms are intact",
    ],
    correct: 1,
    explanation: "Opening mechanotransduction channels when stereocilia shear",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Semicircular canals detect?",
    options: [
      "Angular acceleration of the head",
      "Skin vibration",
      "Retinal image slip",
      "Linear translation (otolith job)",
    ],
    correct: 0,
    explanation: "Angular acceleration of the head",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Angular acceleration of the head",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Angular acceleration of the head",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Angular acceleration of the head",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Utricle and saccule detect?",
    options: [
      "Linear acceleration and head tilt",
      "Color opponency under typical experimental conditions",
      "Olfactory concentration before cortical association areas",
      "Angular acceleration when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Linear acceleration and head tilt (gravity)",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Linear acceleration and head tilt (gravity)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Linear acceleration and head tilt (gravity)",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "VOR stabilizes gaze by?",
    options: [
      "Blocking all CN III output when homeostatic mechanisms are intact",
      "Generating eye movements opposite to head",
      "Requires hippocampal place fields in the adult human CNS",
      "Requires pain withdrawal reflex contralateral to monocular stimulation",
    ],
    correct: 1,
    explanation: "Generating eye movements opposite to head movement",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Two-point discrimination is finest on fingertips because?",
    options: [
      "Requires spinothalamic input is used",
      "High receptor density and large cortical",
      "No cortical map exists for fingers",
      "Requires pacinian corpuscles exist there",
    ],
    correct: 1,
    explanation: "High receptor density and large cortical representation",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Merkel discs are well suited for?",
    options: [
      "Fine texture and sustained touch (SA I)",
      "Proprioception from muscle spindles before cortical association areas",
      "Pain temperature contralateral to monocular stimulation",
      "High-frequency vibration (PC) when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Fine texture and sustained touch (SA I)",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fine texture and sustained touch (SA I)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fine texture and sustained touch (SA I)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fine texture and sustained touch (SA I)",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Pacinian corpuscles encode?",
    options: [
      "Retinal contrast contralateral to monocular stimulation",
      "Olfactory identity in the primary sensory pathway named",
      "Sustained pressure under typical experimental conditions",
      "High-frequency vibration",
    ],
    correct: 3,
    explanation: "High-frequency vibration (rapidly adapting)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High-frequency vibration (rapidly adapting)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High-frequency vibration (rapidly adapting)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High-frequency vibration (rapidly adapting)",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Ruffini endings detect?",
    options: [
      "Sound frequency at cochlear apex before cortical association areas",
      "Skin stretch and sustained deformation",
      "Photons in rods under typical experimental conditions",
      "Requires visceral baroreceptors following presynaptic Ca²⁺ influx",
    ],
    correct: 1,
    explanation: "Skin stretch and sustained deformation",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Skin stretch and sustained deformation",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Skin stretch and sustained deformation",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Free nerve endings often mediate?",
    options: [
      "Applies a sensory transduction pathway from a different modality",
      "pain/temp (among other signals)",
      "Requires proprioception to DCML",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
    ],
    correct: 1,
    explanation: "pain/temp (among other signals)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Gate control theory of pain emphasizes?",
    options: [
      "References a circuit element that does not control the variable asked about",
      "Mixes up temporal versus spatial summation at the postsynaptic membrane",
      "Spinal modulation where touch and pain pathways interact",
      "Requires cortical blindness",
    ],
    correct: 2,
    explanation: "Spinal modulation where touch and pain pathways interact",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Spinal modulation where touch and pain pathways interact",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Spinal modulation where touch and pain pathways interact",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Referred pain from heart is often felt in left arm because?",
    options: [
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Convergence of visceral and somatic pain pathways in CNS",
      "Requires retina maps heart",
      "DCML carries cardiac pain",
    ],
    correct: 1,
    explanation: "Convergence of visceral and somatic pain pathways in CNS",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Convergence of visceral and somatic pain pathways in CNS",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Capsaicin activates TRPV1 on?",
    options: [
      "Nociceptors sensing noxious heat/pH",
      "Alpha motor neurons at steady state in normoxic tissue",
      "Photoreceptors in fovea when ligand-gated channels are open",
      "Inner hair cells at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Nociceptors sensing noxious heat/pH",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nociceptors sensing noxious heat/pH",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Nociceptors sensing noxious heat/pH",
      "These are visual pathway structures (retina → LGN → cortex). Cochlear and auditory nerve mechanisms belong to hearing, not the visual question in the stem. Nociceptors sensing noxious heat/pH",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Cooling menthol sensation uses?",
    options: [
      "Rod cGMP channels when homeostatic mechanisms are intact",
      "TRPM8 channels on cold-sensitive fibers",
      "Nicotinic NMJ receptors when ligand-gated channels are open",
      "Requires nMDA in CA1 when homeostatic mechanisms are intact",
    ],
    correct: 1,
    explanation: "TRPM8 channels on cold-sensitive fibers",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. TRPM8 channels on cold-sensitive fibers",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Olfactory receptor neurons use?",
    options: [
      "Main mechanism: cerebellar parallel fibers",
      "Direct gap junctions to cortex",
      "G-protein / cAMP cascade to open cation channels",
      "Main mechanism: electrical synapses in glomeruli primarily forever",
    ],
    correct: 2,
    explanation: "G-protein / cAMP cascade to open cation channels",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: G-protein / cAMP cascade to open cation channels",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: G-protein / cAMP cascade to open cation channels",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: G-protein / cAMP cascade to open cation channels",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Glomeruli in olfactory bulb represent?",
    options: [
      "Inputs from ORNs expressing the same",
      "Single retinal photoreceptors when ligand-gated channels are open",
      "Single cochlear frequencies in the primary sensory pathway named",
      "Individual muscle motor units when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Inputs from ORNs expressing the same receptor type (roughly)",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Inputs from ORNs expressing the same receptor type (roughly)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inputs from ORNs expressing the same receptor type (roughly)",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Taste sweet stimuli often act through?",
    options: [
      "T1R2/T1R3 G-protein coupled receptors",
      "Main mechanism: nMDA on CN VII",
      "Main mechanism: tRPV1 on fungiform papillae primarily",
      "Nicotinic receptors on tongue muscle",
    ],
    correct: 0,
    explanation: "T1R2/T1R3 G-protein coupled receptors",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: T1R2/T1R3 G-protein coupled receptors",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: T1R2/T1R3 G-protein coupled receptors",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: T1R2/T1R3 G-protein coupled receptors",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Umami taste is primarily?",
    options: [
      "Main mechanism: naCl epithelial sodium channels",
      "Main mechanism: sour proton block of K⁺",
      "Main mechanism: bitter T2R",
      "Glutamate sensing (e.g., T1R1/T1R3)",
    ],
    correct: 3,
    explanation: "Glutamate sensing (e.g., T1R1/T1R3)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Glutamate sensing (e.g., T1R1/T1R3)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Glutamate sensing (e.g., T1R1/T1R3)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Glutamate sensing (e.g., T1R1/T1R3)",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Bitter taste uses T2R receptors to?",
    options: [
      "Encode sound localization",
      "Detect potentially toxic compounds",
      "Encode retinal direction selectivity",
      "Encode muscle length",
    ],
    correct: 1,
    explanation: "Detect potentially toxic compounds",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Detect potentially toxic compounds",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Detect potentially toxic compounds",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Sour taste transduction often involves?",
    options: [
      "Applies a sensory transduction pathway from a different modality",
      "Proton entry/acid sensing depolarizing taste cells",
      "Requires ia afferents",
      "Requires cGMP in photoreceptors",
    ],
    correct: 1,
    explanation: "Proton entry/acid sensing depolarizing taste cells",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Proton entry/acid sensing depolarizing taste cells",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Primary somatosensory cortex (S1) is organized?",
    options: [
      "Without any spatial map when homeostatic mechanisms are intact",
      "Somatotopically (homunculus)",
      "Retinotopically like V1 before cortical association areas",
      "Tonotopically like A1 under typical experimental conditions",
    ],
    correct: 1,
    explanation: "Somatotopically (homunculus)",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Somatotopically (homunculus)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Somatotopically (homunculus)",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Receptive field size in S1 is smaller for?",
    options: [
      "Trunk vs fingers larger on fingers",
      "Main mechanism: vestibular nuclei",
      "Main mechanism: olfactory bulb",
      "Digits vs proximal limb",
    ],
    correct: 3,
    explanation: "Digits vs proximal limb (more cortical territory per area)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Digits vs proximal limb (more cortical territory per area)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Digits vs proximal limb (more cortical territory per area)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Digits vs proximal limb (more cortical territory per area)",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Cortical blindness with V1 damage occurs because?",
    options: [
      "Optic nerve transection",
      "No conscious visual perception despite intact eyes",
      "Applies a sensory transduction pathway from a different modality",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 1,
    explanation: "No conscious visual perception despite intact eyes",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: No conscious visual perception despite intact eyes",
      "",
      "",
      "These are visual pathway structures (retina → LGN → cortex). Cochlear and auditory nerve mechanisms belong to hearing, not the visual question in the stem. No conscious visual perception despite intact eyes",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Which anatomic lesion best explains Blindsight?",
    options: [
      "Complete loss of all retina function in the primary sensory pathway named",
      "Requires proprioception remains contralateral to monocular stimulation",
      "Some visual processing without conscious",
      "Requires hippocampal maps remain via major descending or ascending tracts",
    ],
    correct: 2,
    explanation: "Some visual processing without conscious V1 perception",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Prosopagnosia typically reflects?",
    options: [
      "Requires alpha motor neuron loss when homeostatic mechanisms are intact",
      "Pure cochlear apex lesion contralateral to monocular stimulation",
      "Requires dCML lesion when homeostatic mechanisms are intact",
      "Fusiform face area / ventral stream",
    ],
    correct: 3,
    explanation: "Fusiform face area / ventral stream dysfunction",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Akinetopsia (motion blindness) links to?",
    options: [
      "References a circuit element that does not control the variable asked about",
      "Requires spinal shock",
      "MT/V5 or dorsal stream motion processing lesions",
      "Requires olfactory bulb removal",
    ],
    correct: 2,
    explanation: "MT/V5 or dorsal stream motion processing lesions",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Stereopsis depends on?",
    options: [
      "Requires muscle spindle Ia when homeostatic mechanisms are intact",
      "Requires vestibular otoliths at steady state in normoxic tissue",
      "Binocular disparity processed in visual",
      "Requires monocular luminance at steady state in normoxic tissue",
    ],
    correct: 2,
    explanation: "Binocular disparity processed in visual cortex",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Color opponency (red-green) arises partly from?",
    options: [
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires spinothalamic lamina I",
      "Requires cerebellar climbing fibers",
      "P ganglion/on-off midget opponent pathways",
    ],
    correct: 3,
    explanation: "P ganglion/on-off midget opponent pathways",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Auditory brainstem response (ABR) reflects?",
    options: [
      "Hippocampal theta via major descending or ascending tracts",
      "Synchronized activity in auditory",
      "Requires cortical alpha rhythm under typical experimental conditions",
      "Requires eMG from muscle under typical experimental conditions",
    ],
    correct: 1,
    explanation: "Synchronized activity in auditory nerve/brainstem nuclei",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Synchronized activity in auditory nerve/brainstem nuclei",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Interaural time differences localize?",
    options: [
      "Main mechanism: visual bars in V1",
      "Main mechanism: olfactory glomeruli",
      "Low-frequency sounds (phase timing)",
      "Most frequencies via pinna",
    ],
    correct: 2,
    explanation: "Low-frequency sounds (phase timing)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency sounds (phase timing)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency sounds (phase timing)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency sounds (phase timing)",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Interaural level differences localize?",
    options: [
      "Requires retinal rods",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires dCML vibration",
      "High-frequency sounds (head shadow)",
    ],
    correct: 3,
    explanation: "High-frequency sounds (head shadow)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Visual afterimages relate to?",
    options: [
      "Photopigment/bleaching and adaptation in retina",
      "LTP in CA3 primarily",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires spinal gate control",
    ],
    correct: 0,
    explanation: "Photopigment/bleaching and adaptation in retina",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Photopigment/bleaching and adaptation in retina",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Dark adaptation curve inflection reflects?",
    options: [
      "Olfactory fatigue before cortical association areas",
      "Rod system taking over from cones in dim",
      "Requires muscle spindle adaptation at steady state in normoxic tissue",
      "Requires k⁺ Nernst shift at mammalian body temperature",
    ],
    correct: 1,
    explanation: "Rod system taking over from cones in dim light",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rod system taking over from cones in dim light",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Sensory Systems",
    question: "Conduction aphasia (arcuate) often shows?",
    options: [
      "Nonfluent Broca speech",
      "Impaired repetition with fluent",
      "Bitemporal hemianopia",
      "Pure alexia without writing issues",
    ],
    correct: 1,
    explanation: "Impaired repetition with fluent speech/comprehension relatively spared",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Impaired repetition with fluent speech/comprehension relatively spared",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Impaired repetition with fluent speech/comprehension relatively spared",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Alpha motor neurons innervate?",
    options: [
      "Extrafusal skeletal muscle fibers",
      "Most smooth muscle in gut when homeostatic mechanisms are intact",
      "Photoreceptors at fast chemical synapses",
      "Intrafusal muscle spindle fibers under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Extrafusal skeletal muscle fibers",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Extrafusal skeletal muscle fibers",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Extrafusal skeletal muscle fibers",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Gamma motor neurons adjust?",
    options: [
      "Retinal gain",
      "Applies a sensory transduction pathway from a different modality",
      "Cochlear tuning",
      "Muscle spindle sensitivity by innervating intrafusal fibers",
    ],
    correct: 3,
    explanation: "Muscle spindle sensitivity by innervating intrafusal fibers",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscle spindle sensitivity by innervating intrafusal fibers",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Muscle spindle sensitivity by innervating intrafusal fibers",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Coactivation of alpha and gamma during contraction?",
    options: [
      "Maintains spindle sensitivity during",
      "Requires affects cerebellum bilaterally at the level described",
      "Requires affects olfactory bulb before cortical association areas",
      "Eliminates stretch reflex entirely when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Maintains spindle sensitivity during muscle shortening",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which statement best describes Stretch reflex (myotatic)?",
    options: [
      "Polysynaptic pain withdrawal when ligand-gated channels are open",
      "Monosynaptic Ia → alpha motor neuron",
      "Requires corticospinal volitional bilaterally at the level described",
      "Requires vestibular otolith at steady state in normoxic tissue",
    ],
    correct: 1,
    explanation: "Monosynaptic Ia → alpha motor neuron excitation",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Monosynaptic Ia → alpha motor neuron excitation",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Golgi tendon organ Ib afferents mediate?",
    options: [
      "Photoreceptor transduction at fast chemical synapses",
      "Cochlear amplification before cortical association areas",
      "Stretch reflex facilitation at steady state in normoxic tissue",
      "Autogenic inhibition when tendon tension",
    ],
    correct: 3,
    explanation: "Autogenic inhibition when tendon tension is high",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Autogenic inhibition when tendon tension is high",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Autogenic inhibition when tendon tension is high",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Reciprocal inhibition during stretch reflex?",
    options: [
      "Requires occurs in retina before cortical association areas",
      "Excites antagonist at steady state in normoxic tissue",
      "Inhibits antagonist alpha motor neurons",
      "Requires in olfactory glomeruli before cortical association areas",
    ],
    correct: 2,
    explanation: "Inhibits antagonist alpha motor neurons via Ia interneurons",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibits antagonist alpha motor neurons via Ia interneurons",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Renshaw cells provide?",
    options: [
      "Requires dopamine to striatum at fast chemical synapses",
      "Requires cerebellar climbing input via major descending or ascending tracts",
      "Recurrent inhibition of alpha motor",
      "Excitation of all Ia afferents at steady state in normoxic tissue",
    ],
    correct: 2,
    explanation: "Recurrent inhibition of alpha motor neurons",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Recurrent inhibition of alpha motor neurons",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Upper motor neuron lesion signs include?",
    options: [
      "Flaccid paralysis with fasciculations typically",
      "Blindness",
      "Immediate muscle atrophy within hours",
      "Hyperreflexia, spasticity, Babinski",
    ],
    correct: 3,
    explanation: "Hyperreflexia, spasticity, Babinski",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hyperreflexia, spasticity, Babinski",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hyperreflexia, spasticity, Babinski",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Lower motor neuron lesion signs include?",
    options: [
      "Homonymous hemianopia at steady state in normoxic tissue",
      "Hyperreflexia when homeostatic mechanisms are intact",
      "Babinski positive under typical experimental conditions",
      "Weakness, atrophy, fasciculations",
    ],
    correct: 3,
    explanation: "Weakness, atrophy, fasciculations, hyporeflexia",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Weakness, atrophy, fasciculations, hyporeflexia",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Weakness, atrophy, fasciculations, hyporeflexia",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which anatomic lesion best explains Decorticate posturing (flexor arms)?",
    options: [
      "Applies a sensory transduction pathway from a different modality",
      "Damage above red nucleus (cortex/thalamus)",
      "Requires peripheral nerve cut",
      "Requires olfactory bulb removal",
    ],
    correct: 1,
    explanation: "Damage above red nucleus (cortex/thalamus)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which anatomic lesion best explains Decerebrate posturing (extensor)?",
    options: [
      "Requires retinal detachment following presynaptic Ca²⁺ influx",
      "Brainstem lesion below red nucleus level",
      "Requires hippocampal lesion bilaterally at the level described",
      "Pure NMJ myasthenia when homeostatic mechanisms are intact",
    ],
    correct: 1,
    explanation: "Brainstem lesion below red nucleus level",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Brainstem lesion below red nucleus level",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Corticospinal tract primarily decussates in?",
    options: [
      "Optic chiasm at steady state in normoxic tissue",
      "Pyramids of medulla (most fibers)",
      "Requires cerebellar vermis in the adult human CNS",
      "Requires spinal lamina II via major descending or ascending tracts",
    ],
    correct: 1,
    explanation: "Pyramids of medulla (most fibers)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Voluntary fine finger movement relies heavily on?",
    options: [
      "References a circuit element that does not control the variable asked about",
      "Requires autonomic ganglia",
      "Requires olfactory receptor neurons",
      "Corticospinal (and associated) control of distal muscles",
    ],
    correct: 3,
    explanation: "Corticospinal (and associated) control of distal muscles",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Corticospinal (and associated) control of distal muscles",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Basal ganglia motor role is often described as?",
    options: [
      "Transducing odorants under typical experimental conditions",
      "Generating cochlear traveling waves in the primary sensory pathway named",
      "Computing retinal receptive fields before cortical association areas",
      "Selecting/inhibiting movement programs",
    ],
    correct: 3,
    explanation: "Selecting/inhibiting movement programs and enabling initiation",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Selecting/inhibiting movement programs and enabling initiation",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Selecting/inhibiting movement programs and enabling initiation",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar motor role emphasizes?",
    options: [
      "Requires hormone release from PVN",
      "Requires pain/temperature crossing",
      "Error correction, timing",
      "Primary conscious proprioception",
    ],
    correct: 2,
    explanation: "Error correction, timing, and coordination",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Error correction, timing, and coordination",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which anatomic lesion best explains Intention tremor?",
    options: [
      "Pure UMN corticospinal lesion in the adult human CNS",
      "Cerebellar or cerebellar outflow",
      "Requires amygdala lesion bilaterally at the level described",
      "Optic nerve transection under typical experimental conditions",
    ],
    correct: 1,
    explanation: "Cerebellar or cerebellar outflow dysfunction",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar or cerebellar outflow dysfunction",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Dysmetria on finger-nose testing indicates?",
    options: [
      "Requires dCML loss at steady state in normoxic tissue",
      "Requires blindness at steady state in normoxic tissue",
      "Cerebellar inaccuracy of movement endpoint",
      "Pure LMN facial weakness at steady state in normoxic tissue",
    ],
    correct: 2,
    explanation: "Cerebellar inaccuracy of movement endpoint",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Chorea (Huntington's) reflects?",
    options: [
      "Requires spinal shock",
      "Dysregulated basal ganglia leading to random movements",
      "Pure cerebellar vermis agenesis",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 1,
    explanation: "Dysregulated basal ganglia leading to random movements",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Dysregulated basal ganglia leading to random movements",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Dystonia involves?",
    options: [
      "NMJ blockade",
      "Requires hippocampal place cells",
      "Sustained abnormal postures from motor program dysfunction",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 2,
    explanation: "Sustained abnormal postures from motor program dysfunction",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sustained abnormal postures from motor program dysfunction",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Sustained abnormal postures from motor program dysfunction",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Myasthenia gravis fatigability is due to?",
    options: [
      "Requires retinal bipolar dysfunction",
      "Autoimmune reduction of functional",
      "Dopamine loss in SNc",
      "Requires tTX on axons",
    ],
    correct: 1,
    explanation: "Autoimmune reduction of functional nicotinic receptors at NMJ",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Lambert-Eaton syndrome differs from myasthenia because?",
    options: [
      "Postsynaptic AChR destruction",
      "Presynaptic Ca²⁺ channel autoimmunity reduces ACh release",
      "Requires muscle spindle Ia loss",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 1,
    explanation: "Presynaptic Ca²⁺ channel autoimmunity reduces ACh release",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Presynaptic Ca²⁺ channel autoimmunity reduces ACh release",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Botulism causes weakness by?",
    options: [
      "Opening all Na⁺ channels at steady state in normoxic tissue",
      "Destroying cerebellar Purkinje cells bilaterally at the level described",
      "Blocking all K⁺ channels at steady state in normoxic tissue",
      "Cleaving SNARE proteins → blocked vesicle",
    ],
    correct: 3,
    explanation: "Cleaving SNARE proteins → blocked vesicle fusion",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "End-plate potential is graded because?",
    options: [
      "Main mechanism: photoreceptor response",
      "Often regenerative Na⁺ along entire muscle instantly",
      "Main mechanism: olfactory cAMP",
      "Local depolarization from NMJ ion flux",
    ],
    correct: 3,
    explanation: "Local depolarization from NMJ ion flux (not full AP in muscle yet)",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Local depolarization from NMJ ion flux (not full AP in muscle yet)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local depolarization from NMJ ion flux (not full AP in muscle yet)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local depolarization from NMJ ion flux (not full AP in muscle yet)",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Muscle fiber types (slow vs fast) differ partly in?",
    options: [
      "References a circuit element that does not control the variable asked about",
      "Applies a sensory transduction pathway from a different modality",
      "Requires retinal opsin type",
      "Myosin ATPase isoforms and metabolic profile",
    ],
    correct: 3,
    explanation: "Myosin ATPase isoforms and metabolic profile",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Motor unit size is larger in?",
    options: [
      "Retina vs cochlea in the primary sensory pathway named",
      "Proximal muscles vs small hand muscles",
      "Fingers vs back smaller in back when homeostatic mechanisms are intact",
      "Requires olfactory epithelium in the primary sensory pathway named",
    ],
    correct: 1,
    explanation: "Proximal muscles vs small hand muscles typically",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Proximal muscles vs small hand muscles typically",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Size principle of motor unit recruitment?",
    options: [
      "Smaller units recruited before larger",
      "Random order",
      "Requires applies to photoreceptors",
      "Largest units fire first at any force",
    ],
    correct: 0,
    explanation: "Smaller units recruited before larger units for graded force",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Smaller units recruited before larger units for graded force",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Smaller units recruited before larger units for graded force",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Smaller units recruited before larger units for graded force",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Spinal shock after transection initially shows?",
    options: [
      "Pure aphasia at steady state in normoxic tissue",
      "Flaccid paralysis and areflexia below",
      "Bitemporal hemianopia at steady state in normoxic tissue",
      "Immediate spastic hyperreflexia when homeostatic mechanisms are intact",
    ],
    correct: 1,
    explanation: "Flaccid paralysis and areflexia below lesion",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Flaccid paralysis and areflexia below lesion",
    ]
  },
  {
    topic: "Motor Systems",
    question: "After spinal shock, chronic SCI often shows?",
    options: [
      "Spasticity and hyperreflexia below lesion",
      "Main mechanism: deafness at steady state in normoxic tissue",
      "Persistent flaccidity without change at steady state in normoxic tissue",
      "Main mechanism: blindness when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Spasticity and hyperreflexia below lesion",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spasticity and hyperreflexia below lesion",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spasticity and hyperreflexia below lesion",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spasticity and hyperreflexia below lesion",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which capability best describes Central pattern generators in spinal cord?",
    options: [
      "Main mechanism: compute Goldman equation",
      "Produce rhythmic locomotor-like activity",
      "Main mechanism: encode color opponency",
      "Main mechanism: generate olfactory maps primarily",
    ],
    correct: 1,
    explanation: "Produce rhythmic locomotor-like activity",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Produce rhythmic locomotor-like activity",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Produce rhythmic locomotor-like activity",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Produce rhythmic locomotor-like activity",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Rubrospinal tract generally facilitates?",
    options: [
      "Flexor muscle tone in upper limb (with other pathways)",
      "Requires retinal ON bipolar cells",
      "Requires hypothalamic SCN",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
    ],
    correct: 0,
    explanation: "Flexor muscle tone in upper limb (with other pathways)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Reticulospinal pathways influence?",
    options: [
      "Hippocampal grids primarily bilaterally at the level described",
      "Posture, locomotion, and autonomic-motor",
      "Requires photopigment bleaching when ligand-gated channels are open",
      "NMJ quantal size primarily under typical experimental conditions",
    ],
    correct: 1,
    explanation: "Posture, locomotion, and autonomic-motor integration",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Posture, locomotion, and autonomic-motor integration",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Posture, locomotion, and autonomic-motor integration",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Vestibulospinal tract helps?",
    options: [
      "Postural adjustments to maintain balance",
      "Requires lTP induction without changes in presynaptic release probability",
      "Color vision at steady state in normoxic tissue",
      "Olfactory adaptation in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "Postural adjustments to maintain balance",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Postural adjustments to maintain balance",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Postural adjustments to maintain balance",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Tectospinal tract contributes to?",
    options: [
      "Requires dCML fine touch at steady state in normoxic tissue",
      "Requires insulin release at steady state in normoxic tissue",
      "Requires pain gate control in the primary sensory pathway named",
      "Orienting head/eye movements with",
    ],
    correct: 3,
    explanation: "Orienting head/eye movements with colliculus",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "ALS typically involves?",
    options: [
      "Main mechanism: wernicke aphasia",
      "Combined UMN and LMN degeneration",
      "Main mechanism: retinal detachment",
      "Main mechanism: pure sensory neuropathy",
    ],
    correct: 1,
    explanation: "Combined UMN and LMN degeneration",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Combined UMN and LMN degeneration",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Combined UMN and LMN degeneration",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Combined UMN and LMN degeneration",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Multiple sclerosis motor signs can include?",
    options: [
      "Pure agnosia at steady state in normoxic tissue",
      "Peripheral LMN pattern when homeostatic mechanisms are intact",
      "UMN weakness/spasticity from demyelination",
      "Homonymous hemianopia at steady state in normoxic tissue",
    ],
    correct: 2,
    explanation: "UMN weakness/spasticity from demyelination",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMN weakness/spasticity from demyelination",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMN weakness/spasticity from demyelination",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMN weakness/spasticity from demyelination",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Parkinsonian rigidity is often?",
    options: [
      "Main mechanism: nMJ fatigability",
      "Lead-pipe or cogwheel",
      "Flaccid with fasciculations",
      "Main mechanism: cerebellar intention tremor",
    ],
    correct: 1,
    explanation: "Lead-pipe or cogwheel (basal ganglia/bradykinesia context)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lead-pipe or cogwheel (basal ganglia/bradykinesia context)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lead-pipe or cogwheel (basal ganglia/bradykinesia context)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lead-pipe or cogwheel (basal ganglia/bradykinesia context)",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Essential tremor often improves with?",
    options: [
      "Requires tTX",
      "Requires strychnine",
      "L-DOPA required",
      "Beta-blockers (e.g.",
    ],
    correct: 3,
    explanation: "Beta-blockers (e.g., propranolol) or alcohol transiently",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Beta-blockers (e.g., propranolol) or alcohol transiently",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Hemiballismus classically follows?",
    options: [
      "Optic chiasm compression",
      "Main mechanism: cochlear nucleus lesion",
      "Main mechanism: olfactory bulb lesion",
      "Subthalamic nucleus lesion",
    ],
    correct: 3,
    explanation: "Subthalamic nucleus lesion (contralateral violent movements)",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthalamic nucleus lesion (contralateral violent movements)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthalamic nucleus lesion (contralateral violent movements)",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Focal dystonia in musicians may relate to?",
    options: [
      "Maladaptive cortical sensorimotor plasticity",
      "Hippocampal sclerosis",
      "Applies a sensory transduction pathway from a different modality",
      "Requires spinal shock forever",
    ],
    correct: 0,
    explanation: "Maladaptive cortical sensorimotor plasticity",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Maladaptive cortical sensorimotor plasticity",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Maladaptive cortical sensorimotor plasticity",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Mirror neurons (premotor/parietal) fire when?",
    options: [
      "Performing or observing similar actions",
      "Requires in photoreceptors at fast chemical synapses",
      "During REM sleep primarily during quiet wakefulness",
      "Requires in olfactory ORNs in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "Performing or observing similar actions",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Performing or observing similar actions",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Performing or observing similar actions",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Declarative memory depends critically on?",
    options: [
      "Medial temporal lobe structures (hippocampus and related)",
      "Cerebellar cortex primarily",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "Medial temporal lobe structures (hippocampus and related)",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Medial temporal lobe structures (hippocampus and related)",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Procedural memory (skills/habits) involves?",
    options: [
      "Spinal lamina I primarily in the adult human CNS",
      "Basal ganglia and cerebellum among other",
      "Hippocampus CA1 primarily in the adult human CNS",
      "Retina primarily in the primary sensory pathway named",
    ],
    correct: 1,
    explanation: "Basal ganglia and cerebellum among other circuits",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia and cerebellum among other circuits",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia and cerebellum among other circuits",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia and cerebellum among other circuits",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Patient H.M. after bilateral hippocampal damage showed?",
    options: [
      "Loss of pain sensation in the primary sensory pathway named",
      "Severe anterograde declarative amnesia",
      "Loss of all motor skills immediately without changes in presynaptic release probability",
      "Blindness without changes in presynaptic release probability",
    ],
    correct: 1,
    explanation: "Severe anterograde declarative amnesia",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Severe anterograde declarative amnesia",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Consolidation of declarative memories is thought to require?",
    options: [
      "Hippocampal-cortical dialogue over time",
      "References a circuit element that does not control the variable asked about",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires immediate cerebellar LTD once",
    ],
    correct: 0,
    explanation: "Hippocampal-cortical dialogue over time",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Hippocampal-cortical dialogue over time",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Systems consolidation proposes?",
    options: [
      "References a circuit element that does not control the variable asked about",
      "Most memories stay mainly in DG forever",
      "Gradual redistribution of memory traces to cortex",
      "Requires olfactory bulb stores episodic memory",
    ],
    correct: 2,
    explanation: "Gradual redistribution of memory traces to cortex",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gradual redistribution of memory traces to cortex",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Working memory prefrontal activity often shows?",
    options: [
      "Requires ia afferent silence",
      "Sustained delay-period firing for held information",
      "Requires insulin pulses",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 1,
    explanation: "Sustained delay-period firing for held information",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Sustained delay-period firing for held information",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "NMDA receptor-dependent LTP at CA3–CA1 Schaffer collateral synapses requires?",
    options: [
      "Blockade of NMDA receptors without postsynaptic depolarization",
      "LTD induced by presynaptic spikes alone without postsynaptic voltage change",
      "Requires presynaptic Na⁺ increase",
      "Postsynaptic depolarization to relieve Mg²⁺ block with glutamate",
    ],
    correct: 3,
    explanation: "Postsynaptic depolarization to relieve Mg²⁺ block with glutamate",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "LTD at cerebellar parallel fiber–Purkinje synapses is often?",
    options: [
      "Main mechanism: at NMJ",
      "Climbing fiber–dependent",
      "Identical to hippocampal NMDA LTP",
      "Main mechanism: in retina",
    ],
    correct: 1,
    explanation: "Climbing fiber–dependent (calcium signaling context)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Climbing fiber–dependent (calcium signaling context)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Climbing fiber–dependent (calcium signaling context)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Climbing fiber–dependent (calcium signaling context)",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Differential conditioning requires?",
    options: [
      "Requires one stimulus ever presented",
      "Requires muscle spindle stretch",
      "Applies a sensory transduction pathway from a different modality",
      "Learning difference between CS, and CS−",
    ],
    correct: 3,
    explanation: "Learning difference between CS+ and CS−",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Learning difference between CS+ and CS−",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Extinction of conditioned response involves?",
    options: [
      "Persistent deletion of all hippocampal neurons",
      "Nernst potential is independent of ion concentration gradients",
      "Applies a sensory transduction pathway from a different modality",
      "New inhibitory learning, not erasure of original trace always",
    ],
    correct: 3,
    explanation: "New inhibitory learning, not erasure of original trace always",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Kandel Aplysia sensitization involves?",
    options: [
      "References a circuit element that does not control the variable asked about",
      "NMDA LTP in CA1",
      "Presynaptic facilitation via serotonin and cAMP/PKA",
      "Requires cerebellar climbing fibers",
    ],
    correct: 2,
    explanation: "Presynaptic facilitation via serotonin and cAMP/PKA",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Presynaptic facilitation via serotonin and cAMP/PKA",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Presynaptic facilitation via serotonin and cAMP/PKA",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Hebbian plasticity is summarized as?",
    options: [
      "Main mechanism: myelin thickness determines synapses",
      "Main mechanism: olfactory OR choice",
      "Cells that fire together wire together",
      "Main mechanism: gap junctions form",
    ],
    correct: 2,
    explanation: "Cells that fire together wire together (correlated activity strengthens synapses)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cells that fire together wire together (correlated activity strengthens synapses)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cells that fire together wire together (correlated activity strengthens synapses)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cells that fire together wire together (correlated activity strengthens synapses)",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Spike-timing-dependent plasticity (STDP) depends on?",
    options: [
      "Applies a sensory transduction pathway from a different modality",
      "Requires retinal luminance alone",
      "Requires muscle length",
      "Relative timing of pre- and postsynaptic spikes",
    ],
    correct: 3,
    explanation: "Relative timing of pre- and postsynaptic spikes",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Reconsolidation theory suggests retrieved memories?",
    options: [
      "Can become labile and require",
      "Exist mainly in muscle spindles",
      "Exist mainly in rods",
      "Are immutable once formed",
    ],
    correct: 0,
    explanation: "Can become labile and require restabilization",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Can become labile and require restabilization",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Can become labile and require restabilization",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Can become labile and require restabilization",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Morris water maze tests?",
    options: [
      "Spatial learning dependent on hippocampus (in rodents)",
      "Requires color vision in V1",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Requires olfactory glomeruli size",
    ],
    correct: 0,
    explanation: "Spatial learning dependent on hippocampus (in rodents)",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Eyeblink classical conditioning in rabbits involves?",
    options: [
      "DCML nuclei primarily without changes in presynaptic release probability",
      "Requires primary visual cortex before cortical association areas",
      "Requires hypothalamic SCN after repeated synaptic activation",
      "Cerebellum and associated brainstem nuclei",
    ],
    correct: 3,
    explanation: "Cerebellum and associated brainstem nuclei",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellum and associated brainstem nuclei",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Fear conditioning to tone often requires?",
    options: [
      "Amygdala (lateral/basal nuclei) for acquisition",
      "Requires alpha motor neurons",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Retina primarily",
    ],
    correct: 0,
    explanation: "Amygdala (lateral/basal nuclei) for acquisition",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Amygdala (lateral/basal nuclei) for acquisition",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Contextual fear conditioning to chamber requires?",
    options: [
      "Requires proprioception loss",
      "Requires wernicke area",
      "Hippocampus for context representation with amygdala",
      "Rod outer segments generate all-or-none spikes in darkness",
    ],
    correct: 2,
    explanation: "Hippocampus for context representation with amygdala",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Hippocampus for context representation with amygdala",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Retrograde amnesia after hippocampal damage is often?",
    options: [
      "Main mechanism: for motor skills when NMDA receptors are co-activated",
      "Main mechanism: for pain before cortical association areas",
      "Temporally graded (recent > remote)",
      "Complete for all lifetime memories after repeated synaptic activation",
    ],
    correct: 2,
    explanation: "Temporally graded (recent > remote)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Temporally graded (recent > remote)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Temporally graded (recent > remote)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Temporally graded (recent > remote)",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Semantic vs episodic memory distinction?",
    options: [
      "Both identical to procedural",
      "Both require NMJ",
      "Both stored mainly in cochlea",
      "Episodic: personal events",
    ],
    correct: 3,
    explanation: "Episodic: personal events; semantic: facts/knowledge",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Episodic: personal events; semantic: facts/knowledge",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Episodic: personal events; semantic: facts/knowledge",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Priming is a form of?",
    options: [
      "Main mechanism: photoreceptor adaptation",
      "Implicit memory",
      "Main mechanism: stretch reflex",
      "Declarative episodic memory",
    ],
    correct: 1,
    explanation: "Implicit memory (facilitated processing without conscious recall)",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Implicit memory (facilitated processing without conscious recall)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Implicit memory (facilitated processing without conscious recall)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Implicit memory (facilitated processing without conscious recall)",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Which clinical presentation is most consistent with Korsakoff syndrome memory deficits link to?",
    options: [
      "Peripheral neuropathy",
      "Thiamine deficiency affecting diencephalon (mammillary bodies etc.)",
      "Mixes up temporal versus spatial summation at the postsynaptic membrane",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 1,
    explanation: "Thiamine deficiency affecting diencephalon (mammillary bodies etc.)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thiamine deficiency affecting diencephalon (mammillary bodies etc.)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thiamine deficiency affecting diencephalon (mammillary bodies etc.)",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Alzheimer's early hippocampal involvement explains?",
    options: [
      "Deafness when NMDA receptors are co-activated",
      "Early episodic memory impairment",
      "Pure motor flaccidity without changes in presynaptic release probability",
      "Bitemporal hemianopia without changes in presynaptic release probability",
    ],
    correct: 1,
    explanation: "Early episodic memory impairment",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Early episodic memory impairment",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Early episodic memory impairment",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Early episodic memory impairment",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Long-term potentiation maintenance phases may involve?",
    options: [
      "Structural synaptic changes",
      "Requires golgi tendon silence",
      "Requires photopigment regeneration",
      "Requires immediate Na⁺ block",
    ],
    correct: 0,
    explanation: "Structural synaptic changes and protein synthesis",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Sharp-wave ripples in hippocampus are associated with?",
    options: [
      "Cochlear otoacoustic emissions before cortical association areas",
      "NMJ endplate without changes in presynaptic release probability",
      "Requires retinal ON responses contralateral to monocular stimulation",
      "Offline replay and memory consolidation",
    ],
    correct: 3,
    explanation: "Offline replay and memory consolidation processes",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Offline replay and memory consolidation processes",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Place field remapping occurs when?",
    options: [
      "Requires muscle spindle length changes when NMDA receptors are co-activated",
      "Requires cN VI fires once after repeated synaptic activation",
      "Requires insulin is released after repeated synaptic activation",
      "Environment context changes substantially",
    ],
    correct: 3,
    explanation: "Environment context changes substantially",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Object recognition memory (perirhinal cortex) tests?",
    options: [
      "Pain withdrawal latency",
      "Main mechanism: sound frequency discrimination",
      "Requires vestibular nystagmus",
      "Familiarity discrimination for objects",
    ],
    correct: 3,
    explanation: "Familiarity discrimination for objects",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Familiarity discrimination for objects",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Familiarity discrimination for objects",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Delayed non-match to sample tasks probe?",
    options: [
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Working memory and recognition in prefrontal/temporal networks",
      "Describes presynaptic vesicle release instead of postsynaptic integration",
      "Requires ia afferent frequency",
    ],
    correct: 1,
    explanation: "Working memory and recognition in prefrontal/temporal networks",
    wrongExplanations: [
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Working memory and recognition in prefrontal/temporal networks",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Working memory and recognition in prefrontal/temporal networks",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Medial temporal lobe amnesia spares?",
    options: [
      "Vision lost",
      "Often procedural and priming",
      "Hearing lost",
      "Most memory types impaired equally",
    ],
    correct: 1,
    explanation: "Often procedural and priming (depending on lesion)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Often procedural and priming (depending on lesion)",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Often procedural and priming (depending on lesion)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Often procedural and priming (depending on lesion)",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Cognitive map concept (Tolman) refers to?",
    options: [
      "Requires motor unit map in muscle",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Main mechanism: retinotopic map primarily same thing",
      "Internal spatial representation of environment",
    ],
    correct: 3,
    explanation: "Internal spatial representation of environment",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Internal spatial representation of environment",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Engram cells refer to?",
    options: [
      "Muscle fibers after repeated synaptic activation",
      "Photoreceptors following presynaptic Ca²⁺ influx",
      "Glial cells when NMDA receptors are co-activated",
      "Neurons allocated to storing a specific",
    ],
    correct: 3,
    explanation: "Neurons allocated to storing a specific memory trace",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons allocated to storing a specific memory trace",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Neurons allocated to storing a specific memory trace",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons allocated to storing a specific memory trace",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Which capability best describes Optogenetic reactivation of engram cells?",
    options: [
      "Main mechanism: silence cochlea",
      "Main mechanism: block NMJ",
      "Evoke memory-associated behavior in rodents",
      "Main mechanism: bleach photopigment in humans clinically",
    ],
    correct: 2,
    explanation: "Evoke memory-associated behavior in rodents",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Evoke memory-associated behavior in rodents",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Evoke memory-associated behavior in rodents",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Evoke memory-associated behavior in rodents",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Sleep slow-wave activity supports memory by?",
    options: [
      "Requiring metabotropic glutamate receptors without Ca²⁺ entry",
      "Inhibition of K⁺ leak channels only",
      "Facilitating hippocampal-cortical transfer",
      "Activation of AMPA alone with Mg²⁺ still blocking NMDA",
    ],
    correct: 2,
    explanation: "Facilitating hippocampal-cortical transfer and synaptic homeostasis theories",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "REM sleep is associated with?",
    options: [
      "Vivid dreaming and cortical activation",
      "Cochlear amplification primarily contralateral to monocular stimulation",
      "Spinal monosynaptic reflex primarily when ligand-gated channels are open",
      "Purely DCML transmission without changes in presynaptic release probability",
    ],
    correct: 0,
    explanation: "Vivid dreaming and cortical activation with muscle atonia",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vivid dreaming and cortical activation with muscle atonia",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vivid dreaming and cortical activation with muscle atonia",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vivid dreaming and cortical activation with muscle atonia",
    ]
  },
  {
    topic: "Memory & Learning",
    question: "Which capability best describes Transcranial magnetic stimulation (TMS)?",
    options: [
      "Measure E_K directly in vivo without electrodes",
      "Replace all fMRI",
      "Transiently disrupt or facilitate focal cortical processing",
      "Permanently lesion all hippocampus in one pulse clinically safe context",
    ],
    correct: 2,
    explanation: "Transiently disrupt or facilitate focal cortical processing",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Transiently disrupt or facilitate focal cortical processing",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Transiently disrupt or facilitate focal cortical processing",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Transiently disrupt or facilitate focal cortical processing",
    ]
  },
  {
    topic: "Methods",
    question: "Patch-clamp gigaohm seal enables?",
    options: [
      "Requires eEG scalp averaging without contact",
      "High-resolution measurement of single-channel or whole-cell currents",
      "Requires mRI BOLD without magnet",
      "Confuses resting multi-ion equilibrium with time-varying spike conductances",
    ],
    correct: 1,
    explanation: "High-resolution measurement of single-channel or whole-cell currents",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. High-resolution measurement of single-channel or whole-cell currents",
    ]
  },
  {
    topic: "Methods",
    question: "Voltage-clamp mode holds membrane potential fixed to?",
    options: [
      "Measure unlimited action potentials freely",
      "Measure olfactory OR mRNA",
      "Measure currents required to maintain",
      "Requires measure bone density",
    ],
    correct: 2,
    explanation: "Measure currents required to maintain command voltage",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Measure currents required to maintain command voltage",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Current-clamp records?",
    options: [
      "Main mechanism: insulin in blood",
      "Main mechanism: cochlear basilar stiffness directly",
      "Main mechanism: magnetic field of Earth",
      "Voltage changes evoked by injected current",
    ],
    correct: 3,
    explanation: "Voltage changes evoked by injected current",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage changes evoked by injected current",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage changes evoked by injected current",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage changes evoked by injected current",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Which capability best describes Whole-cell patch clamp dialyzes cytoplasm, which?",
    options: [
      "Wash out second messengers over time",
      "Increase seal resistance to infinity harmful zero",
      "Main mechanism: record from extracellular space",
      "Prevent all channel recording",
    ],
    correct: 0,
    explanation: "Wash out second messengers over time (run-down concern)",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Wash out second messengers over time (run-down concern)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Wash out second messengers over time (run-down concern)",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Cell-attached patch can record?",
    options: [
      "Main mechanism: population spikes from whole brain without electrodes",
      "Main mechanism: eM synapse count",
      "Main mechanism: fMRI signal",
      "Single-channel activity without breaking into cell",
    ],
    correct: 3,
    explanation: "Single-channel activity without breaking into cell",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Single-channel activity without breaking into cell",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Single-channel activity without breaking into cell",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Single-channel activity without breaking into cell",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Sharp electrode intracellular recording differs from patch in?",
    options: [
      "Higher access resistance; can impale without seal",
      "Main mechanism: measures LFP",
      "Often requires TTX",
      "Main mechanism: used in retina in vivo humans routinely for diagnosis",
    ],
    correct: 0,
    explanation: "Higher access resistance; can impale without seal",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher access resistance; can impale without seal",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher access resistance; can impale without seal",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher access resistance; can impale without seal",
    ]
  },
  {
    topic: "Methods",
    question: "Local field potential (LFP) reflects?",
    options: [
      "Single Na⁺ channel openings isolated",
      "Summed synaptic currents near electrode",
      "Main mechanism: dCML fiber conduction",
      "Main mechanism: action potentials from one axon primarily",
    ],
    correct: 1,
    explanation: "Summed synaptic currents near electrode",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Summed synaptic currents near electrode",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Summed synaptic currents near electrode",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Summed synaptic currents near electrode",
    ]
  },
  {
    topic: "Methods",
    question: "Which statement best describes Multi-unit activity?",
    options: [
      "Main mechanism: olfactory OR binding",
      "Identical to patch clamp single channel",
      "Main mechanism: eEG alpha",
      "Mixed spikes from nearby neurons",
    ],
    correct: 3,
    explanation: "Mixed spikes from nearby neurons (not isolated single units)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mixed spikes from nearby neurons (not isolated single units)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mixed spikes from nearby neurons (not isolated single units)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mixed spikes from nearby neurons (not isolated single units)",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Calcium imaging with GCaMP reports?",
    options: [
      "Fluorescence changes tied to calcium influx/activity",
      "Persistent membrane voltage without indicator change",
      "Main mechanism: myelin thickness",
      "Main mechanism: blood pressure",
    ],
    correct: 0,
    explanation: "Fluorescence changes tied to calcium influx/activity",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fluorescence changes tied to calcium influx/activity",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fluorescence changes tied to calcium influx/activity",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fluorescence changes tied to calcium influx/activity",
    ]
  },
  {
    topic: "Methods",
    question: "Optogenetics Channelrhodopsin-2 typically?",
    options: [
      "Hyperpolarizes with any opsin",
      "Requires works without light if ATP high",
      "Works in glia primarily",
      "Depolarizes neurons when exposed to blue",
    ],
    correct: 3,
    explanation: "Depolarizes neurons when exposed to blue light",
    wrongExplanations: [
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Depolarizes neurons when exposed to blue light",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depolarizes neurons when exposed to blue light",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Halorhodopsin or archaerhodopsin often?",
    options: [
      "Requires binds glutamate following presynaptic Ca²⁺ influx",
      "Hyperpolarizes/inhibits neurons with light",
      "Often excites like ChR2 under typical experimental conditions",
      "Requires opens NMJ nicotinic receptors at fast chemical synapses",
    ],
    correct: 1,
    explanation: "Hyperpolarizes/inhibits neurons with light",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hyperpolarizes/inhibits neurons with light",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "DREADDs (hM3Dq) activate neurons when exposed to?",
    options: [
      "Presynaptic LTP without postsynaptic depolarization",
      "Inhibition of K⁺ leak channels only",
      "Requires tTX",
      "Designer ligand (e.g.",
    ],
    correct: 3,
    explanation: "Designer ligand (e.g., CNO/clozapine-N-oxide) not endogenous ligand at low dose context",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Chemogenetic silencing Gi DREADDs typically?",
    options: [
      "Often cause LTP when NMDA receptors are co-activated",
      "Often bleach photopigment when ligand-gated channels are open",
      "Open all Na⁺ channels at steady state in normoxic tissue",
      "Reduce neuronal firing via Gi/o pathways",
    ],
    correct: 3,
    explanation: "Reduce neuronal firing via Gi/o pathways when ligand present",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reduce neuronal firing via Gi/o pathways when ligand present",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reduce neuronal firing via Gi/o pathways when ligand present",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "fMRI BOLD signal is best interpreted as?",
    options: [
      "Direct measure of each synaptic vesicle fusion",
      "Measure of E_K precisely",
      "Measure of NMJ quantal size directly",
      "Indirect hemodynamic correlate of neural",
    ],
    correct: 3,
    explanation: "Indirect hemodynamic correlate of neural activity",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Indirect hemodynamic correlate of neural activity",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "EEG alpha rhythm (8–13 Hz) prominent when?",
    options: [
      "Main mechanism: during cochlear damage",
      "Main mechanism: during maximal pain",
      "Deep anesthesia stage with burst suppression",
      "Relaxed wakefulness with eyes closed",
    ],
    correct: 3,
    explanation: "Relaxed wakefulness with eyes closed (classically)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Relaxed wakefulness with eyes closed (classically)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Relaxed wakefulness with eyes closed (classically)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Relaxed wakefulness with eyes closed (classically)",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "MEG primarily detects?",
    options: [
      "Magnetic fields from synchronized",
      "Requires photopigment bleaching",
      "Requires muscle spindle length directly",
      "Bone conduction of sound",
    ],
    correct: 0,
    explanation: "Magnetic fields from synchronized post-synaptic currents",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Magnetic fields from synchronized post-synaptic currents",
    ]
  },
  {
    topic: "Methods",
    question: "Event-related potential (ERP) P300 often relates to?",
    options: [
      "Requires ia afferent silence when homeostatic mechanisms are intact",
      "Requires rod dark current when homeostatic mechanisms are intact",
      "Attention/target detection in oddball",
      "Requires insulin release at steady state in normoxic tissue",
    ],
    correct: 2,
    explanation: "Attention/target detection in oddball paradigms",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Attention/target detection in oddball paradigms",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Two-photon microscopy advantage in brain?",
    options: [
      "Main mechanism: measures BOLD",
      "Deep scattering tissue imaging with localized excitation",
      "Non-invasive whole human brain without skull clinically routine",
      "Main mechanism: images myelin without stain",
    ],
    correct: 1,
    explanation: "Deep scattering tissue imaging with localized excitation",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Deep scattering tissue imaging with localized excitation",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Deep scattering tissue imaging with localized excitation",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Deep scattering tissue imaging with localized excitation",
    ]
  },
  {
    topic: "Methods",
    question: "Optical intrinsic signal imaging maps?",
    options: [
      "Activity-related changes in light reflectance/absorption",
      "Requires olfactory OR gene sequences",
      "Single ion channel conductance directly",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 0,
    explanation: "Activity-related changes in light reflectance/absorption",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Activity-related changes in light reflectance/absorption",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Unit recording with tetrodes helps?",
    options: [
      "Replace all behavior experiments",
      "Sort spikes from multiple nearby neurons",
      "Main mechanism: measure EEG without scalp contact",
      "Measure Goldman equation directly",
    ],
    correct: 1,
    explanation: "Sort spikes from multiple nearby neurons",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sort spikes from multiple nearby neurons",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sort spikes from multiple nearby neurons",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Which clinical presentation is most consistent with Antidromic activation in tract tracing stimulation means?",
    options: [
      "Action potential propagated toward axon",
      "Inhibition of K⁺ leak channels only",
      "Activation of AMPA alone with Mg²⁺ still blocking NMDA",
      "Presynaptic LTP without postsynaptic depolarization",
    ],
    correct: 0,
    explanation: "Action potential propagated toward axon terminals from stimulation site",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Retrograde tracer (e.g., cholera toxin B) labels?",
    options: [
      "Neurons projecting to injection site",
      "Main mechanism: glia",
      "Main mechanism: muscle spindles",
      "Main mechanism: postsynaptic targets of injection primarily wrong direction",
    ],
    correct: 0,
    explanation: "Neurons projecting to injection site",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons projecting to injection site",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons projecting to injection site",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neurons projecting to injection site",
    ]
  },
  {
    topic: "Methods",
    question: "Anterograde tracer (e.g., Phaseolus) labels?",
    options: [
      "Main mechanism: cerebrospinal fluid",
      "Main mechanism: blood vessels",
      "Main mechanism: cell bodies at injection primarily",
      "Axons projecting away from injection site",
    ],
    correct: 3,
    explanation: "Axons projecting away from injection site",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Axons projecting away from injection site",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Axons projecting away from injection site",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Axons projecting away from injection site",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Which clinical presentation is most consistent with Lesion study limitation includes?",
    options: [
      "Lack of specificity and compensation over",
      "Affects glia seldom neurons at steady state in normoxic tissue",
      "No plasticity ever after lesion without changes in presynaptic release probability",
      "Perfect cell-type specificity under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Lack of specificity and compensation over time",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lack of specificity and compensation over time",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lack of specificity and compensation over time",
    ]
  },
  {
    topic: "Methods",
    question: "Transcranial electrical stimulation (tES) modulates?",
    options: [
      "Main mechanism: myelin gene expression permanently in one session",
      "Main mechanism: cochlear fluids",
      "Main mechanism: photoreceptors primarily",
      "Neural excitability non-invasively (mechanisms debated)",
    ],
    correct: 3,
    explanation: "Neural excitability non-invasively (mechanisms debated)",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neural excitability non-invasively (mechanisms debated)",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neural excitability non-invasively (mechanisms debated)",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Neural excitability non-invasively (mechanisms debated)",
      "",
    ]
  },
  {
    topic: "Methods",
    question: "Brain-computer interface decode algorithms often use?",
    options: [
      "Population activity patterns from motor cortex (e.g.",
      "Inhibition of K⁺ leak channels only",
      "Activation of AMPA alone with Mg²⁺ still blocking NMDA",
      "Golgi tendon silence",
    ],
    correct: 0,
    explanation: "Population activity patterns from motor cortex (e.g., for prosthetics)",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Population activity patterns from motor cortex (e.g., for prosthetics)",
    ]
  },
  {
    topic: "Methods",
    question: "What does Miniscope calcium imaging in freely moving rodents allow?",
    options: [
      "Main mechanism: measures blood pressure",
      "Mobile neural activity imaging",
      "Main mechanism: human clinical diagnosis standard",
      "Main mechanism: fixed-head patch clamp required",
    ],
    correct: 1,
    explanation: "Mobile neural activity imaging",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mobile neural activity imaging",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mobile neural activity imaging",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mobile neural activity imaging",
    ]
  }
];
