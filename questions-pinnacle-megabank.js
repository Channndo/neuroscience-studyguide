// Pinnacle megabank — regenerate: python3 _generate_pinnacle_megabank.py
// ~300 unique hard MCQs across Parts 1–3.

const PINNACLE_MEGA_POOL = [
  {
    topic: "Nernst Equation",
    question: "At 37°C, [K⁺]i = 140 mM and [K⁺]o = 5 mM. E_K is closest to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "0 mV",
      "-68 mV",
      "-108 mV",
      "60 mV",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "τ equals λ",
      "λ halves",
      "λ unchanged",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "No effect on τ",
      "τ halves",
      "Λ doubles",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Blocks voltage-gated Na⁺; no action potentials",
      "Depolarizes to, 60 mV",
      "Blocks K⁺",
      "Opens Cl⁻ channels",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Instant hyperpolarization",
      "Selective GABA block",
      "Blocks synaptic vesicle fusion",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Eliminates EPSPs",
      "Mimics myelin",
      "Blocks Na⁺ entry",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires presynaptic effect",
      "Ionotropic Cl⁻ influx",
      "Fast EPSC; NMDA still blocked by Mg²⁺",
      "Requires g-protein signaling",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Often closed at rest",
      "Requires metabotropic",
      "Blocks all LTP",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "G-protein; opens K⁺ / closes Ca²⁺",
      "Requires in retina",
      "Fast ionotropic Cl⁻",
      "Na⁺ channel opening",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Fast cationic EPSP leading to endplate potential",
      "Glutamate release",
      "Metabotropic",
      "Pure hyperpolarization",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Postsynaptic receptor block",
      "Myelin damage",
      "Cleaves SNAREs; blocks vesicle fusion",
      "Na⁺ channel toxin",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires inhibits GABA",
      "Blocks Ca²⁺ channels",
      "Massive vesicle release; depletion possible",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires inhibition possible",
      "No summation ever",
      "Temporal summation if within τ",
      "Requires spatial summation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Distal EPSP smaller at soma (cable filter)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Bitemporal hemianopia",
      "Left superior quadrantanopia",
      "Right monocular blindness",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure alexia",
      "Right monocular blindness",
      "Left homonymous hemianopia",
      "Bitemporal hemianopia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Contralateral loss of touch/proprioception",
      "Bilateral blindness",
      "Ipsilateral face pain loss",
      "Pure aphasia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Deafness",
      "Ipsilateral proprioception loss",
      "Bilateral UMN weakness",
      "Contralateral pain/temperature loss below lesion",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Isolated proprioception loss",
      "Pure ataxia",
      "Requires autonomic symptoms",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Contralateral hemiparesis",
      "Bitemporal hemianopia",
      "Ipsilateral limb ataxia (planning/timing)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Deafness",
      "Anterograde declarative memory impairment",
      "Color blindness",
      "Pure motor weakness",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure sensory neglect",
      "Bradykinesia and rigidity",
      "Hyperreflexia",
      "Homonymous hemianopia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure alexia",
      "Nonfluent aphasia; comprehension relatively spared",
      "Fluent nonsense speech",
      "Right hemianopia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Deafness",
      "Pure motor neglect",
      "Nonfluent speech",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Monocular blindness",
      "Internuclear ophthalmoplegia",
      "Facial paralysis",
      "Bitemporal hemianopia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Optic chiasm syndrome",
      "Pure aphasia",
      "Horizontal gaze palsy toward lesion side / ipsilateral abduction deficit",
      "Requires hearing loss",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Vertigo and imbalance toward lesion",
      "Homonymous hemianopia",
      "Spastic paralysis",
      "Pure aphasia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Ipsilateral face pain/temp, cerebellar signs",
      "Pure motor weakness",
      "Bitemporal hemianopia",
      "Broca aphasia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Spiking at 100 Hz",
      "Releases ACh",
      "Hyperpolarized like bipolar ON cells",
      "Relatively depolarized; glutamate release ongoing",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Complete silence",
      "Increased firing rate in auditory nerve",
      "Requires na⁺ pump stops",
      "Requires pain fibers activate",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires electrical synapse",
      "Requires in cerebellum",
      "G-protein cascade → cAMP → channel opening",
      "Direct gap junction to cortex",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Slow adaptation",
      "Requires in retina",
      "Requires nociceptor response",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Mostly K⁺ current isolated if Na⁺ blocked",
      "Photoreceptor current",
      "Requires capacitive current forever",
      "Requires cl⁻ without gradient",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Can measure gap junction coupling or monosynaptic latency",
      "Requires measures bone density",
      "Requires measures myelin thickness",
      "Requires measures glomeruli size",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "More Na⁺ channels open",
      "Requires k⁺ channels disappear",
      "Fewer Na⁺ channels available from closed state",
      "Requires cl⁻ channels open",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "In dendrites",
      "Requires in glomeruli",
      "Impossible without nodes",
      "Can occur where excitability is high along axon",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Same biophysics; direction follows refractory tail",
      "Orthodromic mainly in retina",
      "Antidromic",
      "Requires gap junctions propagate",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires photopigment recovery",
      "Na⁺ inactivation preventing immediate re-firing",
      "Requires synaptic depression",
      "Requires k⁺ leak",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires muscle spindle stretch",
      "No stimulus can fire cell",
      "Requires cl⁻ influx",
      "Stronger stimulus needed; K⁺ still elevated",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Voltage where net inward current triggers regenerative Na⁺ activation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Myelin blocks all current",
      "Requires dendrites propagate",
      "Exactly one node required",
      "Multiple nodes can support propagation if one fails",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Large fibers blocked first",
      "Small myelinated/C fibers blocked at lower exposure (use-dependent)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires affects cochlea basilar membrane",
      "Requires affects glomeruli",
      "Inactivation reduces firing despite depolarization",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires gap junction opening",
      "Postsynaptic Na⁺ deletion",
      "Presynaptic Ca²⁺ buildup increases release briefly",
      "Requires lTP in hippocampus forever",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Depletion of readily releasable vesicles",
      "Requires myelin loss",
      "Unlimited vesicle supply",
      "Requires photopigment bleaching",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Can boost distal signal toward soma",
      "Seldom occurs in CNS",
      "Requires in olfactory bulb",
      "Requires in NMJ",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Blocked by myelin on dendrites",
      "Requires in muscle spindles",
      "Requires in photoreceptors",
      "Can activate dendritic channels and plasticity rules",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "In retina primarily",
      "In cerebellum primarily",
      "Extracellular fields can influence neighbors weakly",
      "Stronger than gap junctions",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Glutamate transporters",
      "GABA_A receptor–channel function",
      "Voltage-gated Ca²⁺ channels",
      "GABA_B Gi/o coupling",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Glycine receptors in spinal cord",
      "Dopamine reuptake transporters",
      "Muscarinic receptors in heart",
      "AMPA receptors in cortex",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Inactivating Na⁺ channels irreversibly",
      "Increasing GABA_A channel open frequency (allosteric)",
      "Opening KCNQ channels directly",
      "Blocking GABA reuptake",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Selectively block NMDA mainly at all doses",
      "Activate dopamine D1 receptors",
      "Prolong GABA_A channel open time directly at high dose",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Bradycardia and miosis",
      "Tachycardia and reduced salivation",
      "Bronchoconstriction",
      "Increased gastric motility",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Blocking nicotinic receptors",
      "Opening voltage-gated K⁺ channels",
      "Cleaving SNARE proteins",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Hyperpolarizes muscle to E_K",
      "Depolarizes the motor endplate (nicotinic agonist)",
      "Inhibits ryanodine receptors",
      "Blocks acetylcholine release",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Central dopamine synthesis",
      "Na⁺ channel density in neurons",
      "Ca²⁺ release from sarcoplasmic reticulum in muscle",
      "Glutamate release in hippocampus",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "COMT in synaptic cleft",
      "Dopamine β-hydroxylase",
      "MAO-A in mitochondria",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Reversing DAT/NET transporters and promoting release",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "GABA_B activation in striatum",
      "Blockade of dopamine reuptake (DAT)",
      "Persistent Na⁺ channel destruction",
      "Muscarinic blockade in spinal cord",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "D2 dopamine receptor antagonism",
      "Nicotinic agonism in cortex",
      "Glycine transporter blockade",
      "NMDA receptor potentiation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Blocks subthalamic nucleus firing permanently",
      "Directly activates all serotonin receptors",
      "Replaces lost acetylcholine at NMJ",
      "Crosses the BBB and is converted to dopamine in striatum",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Inhibit peripheral DOPA decarboxylase",
      "Cross the BBB faster than L-DOPA",
      "Open K_ATP channels in pancreas",
      "Block MAO-B in all tissues equally",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Acetylcholinesterase at NMJ",
      "GABA transaminase",
      "VMAT2 in all neurons",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires mu-opioid receptor agonism",
      "Persistent GABA_A blockade",
      "Irreversible MAO inhibition",
      "NMDA receptor antagonism and downstream synaptic effects",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Blocking all K⁺ channels in DRG",
      "AMPA receptor potentiation on nociceptors",
      "Mu-opioid receptor–mediated inhibition of pain transmission",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Inhibiting COX enzymes",
      "Activating GABA_B in VTA",
      "Blocking Na⁺ channels like TTX",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Hyperpolarization of all neurons to E_K",
      "Bronchodilation via β2 receptors",
      "Bradycardia via M2 receptors",
      "Vasoconstriction and increased blood pressure",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Kir channels in glia",
      "T-type Ca²⁺ in thalamus",
      "L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
      "Na⁺ channels in cardiac pacemaker",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Irreversible NMDA blockade",
      "Serotonin reuptake inhibition",
      "GABA_A α1-subunit–preferring positive modulation",
      "D2 receptor agonism",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Depleting acetylcholine stores",
      "Blocking all AMPA receptors",
      "Opening L-type Ca²⁺ channels",
      "Uncompetitive NMDA antagonism (moderate channel block)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Muscarinic M1 primarily in heart",
      "Synaptic vesicle release probability",
      "GABA_A benzodiazepine site",
      "Ryanodine receptors in muscle",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Stabilizing inactivated Na⁺ channels (use-dependent block)",
      "Opening KCNQ channels irreversibly",
      "Blocking all Ca²⁺ channels equally",
      "Activating glycine receptors",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Persistent NMDA removal",
      "GABA transporter inhibition",
      "Na⁺ channel block limiting high-frequency firing",
      "NMJ acetylcholinesterase inhibition",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Increased GABA tone and Na⁺/Ca²⁺ channel effects",
      "Requires dopamine reuptake blockade",
      "Irreversible VMAT blockade",
      "Requires aMPA potentiation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "GABA_B receptors (Gi/o) in spinal cord",
      "AMPA on Ia afferents primarily",
      "Nicotinic receptors on interneurons",
      "GABA_A receptors on muscle fibers",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Ryanodine receptor",
      "Voltage-gated Ca²⁺ channels (modulating release)",
      "D2 receptor",
      "SERT transporter",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Overactivating TRPV1 leading to nociceptor defunctionalization",
      "Blocking all Na⁺ channels permanently",
      "Opening GABA_A on muscle spindles",
      "Preventing all glutamate release in DCML",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Enhanced regardless of voltage",
      "Blocked mainly in cerebellum",
      "Impaired when NMDA-dependent Ca²⁺ influx is required",
      "Unchanged because AMPA matters",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires glucagon release",
      "Depolarization and insulin surge",
      "Persistent Na⁺ channel opening",
      "Hyperpolarization and reduced insulin release",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Opening all GABA_A channels in pancreas",
      "Activating D2 receptors in liver",
      "Closing K_ATP → beta-cell depolarization → Ca²⁺ influx",
      "Blocking VMAT in islets",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Hyperpolarize motor cortex directly",
      "Excite STN to increase GPi output",
      "Block all cerebellar output",
      "Inhibit GPi/SNr, disinhibiting thalamus (facilitate movement)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Eliminating dopamine release permanently",
      "Directly opening Na⁺ channels in muscle",
      "Disinhibiting STN → increased GPi/SNr inhibition of thalamus",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure cerebellar ataxia",
      "Complete loss of thalamus",
      "Enhanced direct pathway",
      "Increased indirect pathway activity and bradykinesia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Replacing lost dopamine in substantia nigra",
      "Blocking all sensory input to M1",
      "Myelinating corticospinal axons",
      "Disrupting pathological basal ganglia–thalamus oscillations",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Carries proprioception from muscle spindles",
      "Is the sole driver of simple spikes",
      "Releases dopamine in deep nuclei",
      "Delivers powerful excitation and error-related signals",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires retinal ON/OFF channels",
      "Diverse sensory and motor-related information to granule cells",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Climbing fibers bypass Purkinje cells entirely",
      "Vestibular nuclei have no connection",
      "Purkinje cells inhibit deep nuclei, gating cerebellar output",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "CA1 → dentate → subiculum → thalamus",
      "Entorhinal cortex → dentate gyrus → CA3 → CA1",
      "Cerebellum → M1 → CA3",
      "Amygdala → hypothalamus → CA3 directly",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Periodic firing fields tiling space hexagonally",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Myelin to optic nerve",
      "Direct dopamine to striatum",
      "Excitatory drive to ventral horn",
      "Inhibitory feedback/feedforward to relay nuclei",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Orienting eye/head movements toward stimuli",
      "Glomerular odor discrimination",
      "Cochlear amplification",
      "Color constancy mainly in V4",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Maximal stretch reflex activation",
      "Pure photoreceptor transduction",
      "NMJ blockade",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Project subcortically and intracortically",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Are identical to Purkinje cells",
      "Carry proprioception to DCML",
      "Release glutamate at NMJ",
      "Provide fast perisomatic inhibition to pyramidal cells",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Reward prediction and motivational salience",
      "Cochlear tuning",
      "Purely conjugate eye movements",
      "Requires cerebellar LTD",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Release oxytocin/vasopressin and regulate autonomic/endocrine function",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires olfactory bulb oscillations",
      "Retinohypothalamic light input and internal gene loops",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Generating AIS spikes primarily",
      "Associating sensory cues with emotional significance",
      "Motor unit recruitment order",
      "Computing E_K from concentrations",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Rubrospinal influence on limb flexor tone",
      "Purely visual stereopsis",
      "Adult hippocampal neurogenesis",
      "Requires inner ear endolymph production",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Arousal and affective aspects of pain",
      "Fine two-point discrimination",
      "VOR slow phase",
      "Photoreceptor glutamate in dark",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "High vs low sound frequency",
      "Left vs right visual hemifields",
      "D1 vs D2 receptors",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Ia afferents to motor neurons",
      "Olfactory axons to cortex directly",
      "Retinal axons to LGN",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure ataxia without weakness",
      "Contralateral hemianopia",
      "Deafness",
      "Ipsilateral tongue weakness/deviation toward lesion",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires ia discharge",
      "Cochlear amplification",
      "Horizontal eye movements linking CN VI and III",
      "Requires hippocampal ripples",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Dorsal root ganglion",
      "Corticospinal tract",
      "Pharynx/larynx via CN IX, X (XI component)",
      "Optic nerve",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Has no synapses",
      "Is sole site of Na⁺ pump",
      "Lacks a complete blood–brain barrier",
      "Contains photoreceptors",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires motor cortex commands",
      "Requires ia fibers directly",
      "Requires oN bipolar input",
      "Visceral sensory input (taste, baroreceptors)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Analgesia via descending pain-modulation",
      "Pure cerebellar intention tremor",
      "Complete loss of K⁺ channels",
      "Persistent blindness",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Sympathetic vasomotor tone",
      "Color opponency",
      "Cochlear map",
      "Place field remapping",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "NMJ quantal content",
      "Photopigment regeneration",
      "Blood pressure via brainstem autonomic centers",
      "Olfactory cAMP primarily",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires lamina I pain",
      "Efference copy of planned motor signals",
      "Requires renshaw glycine to muscle",
      "Requires rod signals",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "NMJ",
      "Olfactory epithelium",
      "Retinal bipolar cells",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pattern completion and autoassociation",
      "Otoacoustic emissions",
      "Photoreceptor dark current",
      "Requires monosynaptic reflex",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Glutamate release increases in light",
      "cGMP-gated channels close → photoreceptor depolarization in dark reverses",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "ON pathway sign inversion (e.g., mGluR6 cascade)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Bipolar/amacrine circuits create antagonistic surrounds",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "M: smell; P: proprioception",
      "P carries pain from cord",
      "M: motion/depth transient; P: color/fine detail (classic division)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires dCML vibration sense",
      "Cochlear amplification and sharp tuning",
      "Photoreceptor dark current",
      "NMJ endplate potential",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires gap junction coupling",
      "Opening mechanotransduction channels when stereocilia shear",
      "Releasing dopamine in cochlear nucleus",
      "Closing all K⁺ channels permanently",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Linear acceleration and head tilt (gravity)",
      "Color opponency",
      "Olfactory concentration",
      "Angular acceleration",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Blocking all CN III output",
      "Generating eye movements opposite to head movement",
      "Requires hippocampal place fields",
      "Requires pain withdrawal reflex",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires spinothalamic input is used",
      "High receptor density and large cortical representation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Fine texture and sustained touch (SA I)",
      "Proprioception from muscle spindles",
      "Pain temperature",
      "High-frequency vibration (PC)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Retinal contrast",
      "Olfactory identity",
      "Sustained pressure",
      "High-frequency vibration (rapidly adapting)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Sound frequency at cochlear apex",
      "Skin stretch and sustained deformation",
      "Photons in rods",
      "Requires visceral baroreceptors",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Nociceptors sensing noxious heat/pH",
      "Alpha motor neurons",
      "Photoreceptors in fovea",
      "Inner hair cells",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Rod cGMP channels",
      "TRPM8 channels on cold-sensitive fibers",
      "Nicotinic NMJ receptors",
      "Requires nMDA in CA1",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Inputs from ORNs expressing the same receptor type (roughly)",
      "Single retinal photoreceptors",
      "Single cochlear frequencies",
      "Individual muscle motor units",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Without any spatial map",
      "Somatotopically (homunculus)",
      "Retinotopically like V1",
      "Tonotopically like A1",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Complete loss of all retina function",
      "Requires proprioception remains",
      "Some visual processing without conscious V1 perception",
      "Requires hippocampal maps remain",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires alpha motor neuron loss",
      "Pure cochlear apex lesion",
      "Requires dCML lesion",
      "Fusiform face area / ventral stream dysfunction",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires muscle spindle Ia",
      "Requires vestibular otoliths",
      "Binocular disparity processed in visual cortex",
      "Requires monocular luminance",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Hippocampal theta",
      "Synchronized activity in auditory nerve/brainstem nuclei",
      "Requires cortical alpha rhythm",
      "Requires eMG from muscle",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Olfactory fatigue",
      "Rod system taking over from cones in dim light",
      "Requires muscle spindle adaptation",
      "Requires k⁺ Nernst shift",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Nonfluent Broca speech",
      "Impaired repetition with fluent speech/comprehension relatively spared",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Extrafusal skeletal muscle fibers",
      "Most smooth muscle in gut",
      "Photoreceptors",
      "Intrafusal muscle spindle fibers",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Maintains spindle sensitivity during muscle shortening",
      "Requires affects cerebellum",
      "Requires affects olfactory bulb",
      "Eliminates stretch reflex entirely",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Polysynaptic pain withdrawal",
      "Monosynaptic Ia → alpha motor neuron excitation",
      "Requires corticospinal volitional",
      "Requires vestibular otolith",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Photoreceptor transduction",
      "Cochlear amplification",
      "Stretch reflex facilitation",
      "Autogenic inhibition when tendon tension is high",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires occurs in retina",
      "Excites antagonist",
      "Inhibits antagonist alpha motor neurons via Ia interneurons",
      "Requires in olfactory glomeruli",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires dopamine to striatum",
      "Requires cerebellar climbing input",
      "Recurrent inhibition of alpha motor neurons",
      "Excitation of all Ia afferents",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Homonymous hemianopia",
      "Hyperreflexia",
      "Babinski positive",
      "Weakness, atrophy, fasciculations, hyporeflexia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires retinal detachment",
      "Brainstem lesion below red nucleus level",
      "Requires hippocampal lesion",
      "Pure NMJ myasthenia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Optic chiasm",
      "Pyramids of medulla (most fibers)",
      "Requires cerebellar vermis",
      "Requires spinal lamina II",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Transducing odorants",
      "Generating cochlear traveling waves",
      "Computing retinal receptive fields",
      "Selecting/inhibiting movement programs and enabling initiation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires hormone release from PVN",
      "Requires pain/temperature crossing",
      "Error correction, timing, and coordination",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure UMN corticospinal lesion",
      "Cerebellar or cerebellar outflow dysfunction",
      "Requires amygdala lesion",
      "Optic nerve transection",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires dCML loss",
      "Requires blindness",
      "Cerebellar inaccuracy of movement endpoint",
      "Pure LMN facial weakness",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires retinal bipolar dysfunction",
      "Autoimmune reduction of functional nicotinic receptors at NMJ",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Opening all Na⁺ channels",
      "Destroying cerebellar Purkinje cells",
      "Blocking all K⁺ channels",
      "Cleaving SNARE proteins → blocked vesicle fusion",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Retina vs cochlea",
      "Proximal muscles vs small hand muscles typically",
      "Fingers vs back smaller in back",
      "Requires olfactory epithelium",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Smaller units recruited before larger units for graded force",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure aphasia",
      "Flaccid paralysis and areflexia below lesion",
      "Bitemporal hemianopia",
      "Immediate spastic hyperreflexia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Spasticity and hyperreflexia below lesion",
      "Main mechanism: deafness",
      "Persistent flaccidity without change",
      "Main mechanism: blindness",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Hippocampal grids primarily",
      "Posture, locomotion, and autonomic-motor integration",
      "Requires photopigment bleaching",
      "NMJ quantal size primarily",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Postural adjustments to maintain balance",
      "Requires lTP induction",
      "Color vision",
      "Olfactory adaptation",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires dCML fine touch",
      "Requires insulin release",
      "Requires pain gate control",
      "Orienting head/eye movements with colliculus",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Pure agnosia",
      "Peripheral LMN pattern",
      "UMN weakness/spasticity from demyelination",
      "Homonymous hemianopia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires tTX",
      "Requires strychnine",
      "L-DOPA required",
      "Beta-blockers (e.g., propranolol) or alcohol transiently",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Performing or observing similar actions",
      "Requires in photoreceptors",
      "During REM sleep primarily",
      "Requires in olfactory ORNs",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Spinal lamina I primarily",
      "Basal ganglia and cerebellum among other circuits",
      "Hippocampus CA1 primarily",
      "Retina primarily",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Loss of pain sensation",
      "Severe anterograde declarative amnesia",
      "Loss of all motor skills immediately",
      "Blindness",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Can become labile and require restabilization",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "DCML nuclei primarily",
      "Requires primary visual cortex",
      "Requires hypothalamic SCN",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Main mechanism: for motor skills",
      "Main mechanism: for pain",
      "Temporally graded (recent > remote)",
      "Complete for all lifetime memories",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Both identical to procedural",
      "Both require NMJ",
      "Both stored mainly in cochlea",
      "Episodic: personal events; semantic: facts/knowledge",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Deafness",
      "Early episodic memory impairment",
      "Pure motor flaccidity",
      "Bitemporal hemianopia",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Structural synaptic changes and protein synthesis",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Cochlear otoacoustic emissions",
      "NMJ endplate",
      "Requires retinal ON responses",
      "Offline replay and memory consolidation processes",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires muscle spindle length changes",
      "Requires cN VI fires once",
      "Requires insulin is released",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Vision lost",
      "Often procedural and priming (depending on lesion)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Muscle fibers",
      "Photoreceptors",
      "Glial cells",
      "Neurons allocated to storing a specific memory trace",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requiring metabotropic glutamate receptors without Ca²⁺ entry",
      "Inhibition of K⁺ leak channels only",
      "Facilitating hippocampal-cortical transfer and synaptic homeostasis theories",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Vivid dreaming and cortical activation with muscle atonia",
      "Cochlear amplification primarily",
      "Spinal monosynaptic reflex primarily",
      "Purely DCML transmission",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Measure unlimited action potentials freely",
      "Measure olfactory OR mRNA",
      "Measure currents required to maintain command voltage",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Wash out second messengers over time (run-down concern)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Hyperpolarizes with any opsin",
      "Requires works without light if ATP high",
      "Works in glia primarily",
      "Depolarizes neurons when exposed to blue light",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires binds glutamate",
      "Hyperpolarizes/inhibits neurons with light",
      "Often excites like ChR2",
      "Requires opens NMJ nicotinic receptors",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Presynaptic LTP without postsynaptic depolarization",
      "Inhibition of K⁺ leak channels only",
      "Requires tTX",
      "Designer ligand (e.g., CNO/clozapine-N-oxide) not endogenous ligand at low dose context",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Often cause LTP",
      "Often bleach photopigment",
      "Open all Na⁺ channels",
      "Reduce neuronal firing via Gi/o pathways when ligand present",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Direct measure of each synaptic vesicle fusion",
      "Measure of E_K precisely",
      "Measure of NMJ quantal size directly",
      "Indirect hemodynamic correlate of neural activity",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Main mechanism: during cochlear damage",
      "Main mechanism: during maximal pain",
      "Deep anesthesia stage with burst suppression",
      "Relaxed wakefulness with eyes closed (classically)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Magnetic fields from synchronized post-synaptic currents",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Requires ia afferent silence",
      "Requires rod dark current",
      "Attention/target detection in oddball paradigms",
      "Requires insulin release",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Action potential propagated toward axon terminals from stimulation site",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Lack of specificity and compensation over time",
      "Affects glia seldom neurons",
      "No plasticity ever after lesion",
      "Perfect cell-type specificity",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [




      "Population activity patterns from motor cortex (e.g., for prosthetics)",
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
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
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
