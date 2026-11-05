// Proctored-style mock pools — SATA, lesions, circuits, clamp traces

const PROCTORED_SATA_POOL = [
  {
    type: "selectAll",
    topic: "Nernst Equation",
    module: "part1",
    question: "Which follow from the Nernst equation at 37°C? (Select all that apply.)",
    options: [
      "E_K depends on the K⁺ outside/inside ratio",
      "E_Na is independent of Na⁺ concentrations",
      "Anion equilibrium potentials use the same log form with valence",
      "Reversal potential is where net ionic current is zero"
    ],
    correctIndices: [0, 2, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "Selecting this contradicts the keyed mechanism for statement 2.",
      "",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Action Potentials",
    module: "part1",
    question: "During a typical squid axon action potential, which are true? (Select all.)",
    options: [
      "Na⁺ channels activate before delayed K⁺ dominates repolarization",
      "Na⁺ inactivation limits the peak",
      "Resting potential is set only by the Na⁺ Nernst potential",
      "Myelin is required for any spike"
    ],
    correctIndices: [0, 1],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      "Selecting this contradicts the keyed mechanism for statement 4."
    ]
  },
  {
    type: "selectAll",
    topic: "Passive Membrane Properties",
    module: "part1",
    question: "Membrane τ and λ: select all correct.",
    options: [
      "τ = R_m × C_m",
      "λ increases if R_m rises with R_i fixed",
      "Higher leak conductance tends to shorten λ",
      "τ sets how fast voltage changes for a given current"
    ],
    correctIndices: [0, 1, 2, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "τ = R_m C_m; λ = √(R_m/R_i) so λ rises if R_m rises with R_i fixed; higher leak (lower R_m) shortens λ; τ sets voltage change speed for a given current.",
    wrongExplanations: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Goldman Equation",
    module: "part1",
    question: "Goldman/constant-field resting potential: select all.",
    options: [
      "Weights ions by permeability and concentration",
      "Equals E_K when only K⁺ is permeant",
      "Ignores ion concentrations",
      "Can lie between individual E_ion values"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Synaptic Transmission",
    module: "part2",
    question: "Quantal release: select all true.",
    options: [
      "mEPSPs reflect single vesicle fusion",
      "Evoked release adds quanta stochastically",
      "All synapses release exactly one vesicle per spike",
      "Ca²⁺ triggers SNARE-mediated fusion"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Synaptic Integration",
    module: "part2",
    question: "EPSP/IPSP integration: select all.",
    options: [
      "Temporal summation occurs within τ",
      "Spatial summation combines inputs from different sites",
      "Inhibition cannot affect temporal summation",
      "AIS is a common spike initiation site"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Long-Term Plasticity",
    module: "part2",
    question: "NMDA-dependent LTP: select all required elements.",
    options: [
      "Postsynaptic depolarization relieves Mg²⁺ block",
      "Presynaptic activity alone is always sufficient",
      "Ca²⁺ influx through NMDA receptors",
      "Hebbian pairing of pre and post activity"
    ],
    correctIndices: [0, 2, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "Selecting this contradicts the keyed mechanism for statement 2.",
      "",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Visual System",
    module: "part3",
    question: "Retinofugal pathway: select all correct.",
    options: [
      "Optic nerve carries ganglion cell axons",
      "LGN relays to primary visual cortex",
      "All fibers synapse in superior colliculus only",
      "Contralateral hemifield maps cross at the chiasm"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Auditory System",
    module: "part3",
    question: "Cochlear tuning: select all.",
    options: [
      "Basilar membrane is tonotopic",
      "High frequencies encoded basally",
      "All hair cells respond equally to all frequencies",
      "Inner hair cells drive afferent activity"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Motor Systems",
    module: "part3",
    question: "Lower motor neuron pools: select all.",
    options: [
      "Receive corticospinal and interneuron input",
      "Are in ventral horn",
      "Are identical to upper motor neurons",
      "Innervate muscle via motor units"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Neuroanatomy",
    module: "part3",
    question: "Basal ganglia loops: select all.",
    options: [
      "Dopamine loss in SNc relates to Parkinsonism",
      "Direct and indirect pathways regulate movement",
      "Cerebellar cortex is part of basal ganglia",
      "Subthalamic nucleus participates in indirect pathway"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Learning & Memory",
    module: "part3",
    question: "Memory systems: select all.",
    options: [
      "Hippocampus critical for declarative encoding",
      "Procedural skills can survive hippocampal damage",
      "Working memory equals long-term storage only in amygdala",
      "HM showed dissociation of memory types"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Electrical Signaling",
    module: "part1",
    question: "Ionic current sign convention: select all.",
    options: [
      "Outward current is often defined positive",
      "I = g(V_m − E_ion)",
      "Inward Na⁺ at rest from E_Na is always outward current",
      "Driving force depends on V_m and E_ion"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Neuromodulation",
    module: "part2",
    question: "Neuromodulators vs transmitters: select all.",
    options: [
      "Can diffuse more broadly",
      "Often use GPCRs",
      "Always produce 1 ms EPSPs at one synapse",
      "Can change gain over seconds to minutes"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Somatosensation",
    module: "part3",
    question: "Dorsal column vs spinothalamic: select all.",
    options: [
      "DCML carries fine touch/proprioception",
      "Spinothalamic carries pain and temperature",
      "Both are purely motor",
      "Second-order neurons cross at different levels"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Chemical Synapses",
    module: "part2",
    question: "Ionotropic vs metabotropic: select all.",
    options: [
      "Ionotropic gates ion channels directly",
      "Metabotropic uses G-proteins",
      "All GABA is ionotropic only",
      "mGluRs are metabotropic"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Action Potential Propagation",
    module: "part1",
    question: "Saltatory conduction: select all.",
    options: [
      "Na⁺ channels concentrated at nodes",
      "Myelin reduces capacitance per unit length",
      "Continuous propagation requires no Na⁺ channels",
      "Current loops between nodes"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Taste",
    module: "part3",
    question: "Taste transduction: select all.",
    options: [
      "Umami uses T1R1/T1R3 GPCRs",
      "Sweet uses T1R2/T1R3",
      "All tastes use rhodopsin",
      "Bitter uses T2R receptors"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Pharmacology",
    module: "part1",
    question: "Channel toxins: select all.",
    options: [
      "TTX blocks voltage-gated Na⁺",
      "TTX blocks voltage-gated K⁺ exclusively",
      "α-dendrotoxin affects K⁺ channels",
      "Lidocaine use-dependent Na⁺ block"
    ],
    correctIndices: [0, 2, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "Selecting this contradicts the keyed mechanism for statement 2.",
      "",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Neural Circuits",
    module: "part2",
    question: "Feedforward inhibition: select all.",
    options: [
      "Inhibitory interneuron activated by same input as principal cell",
      "Can sharpen timing",
      "Is identical to recurrent excitation only",
      "Common in sensory circuits"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  }
];

const PROCTORED_LESION_POOL = [
  {
    topic: "Visual System",
    module: "part3",
    question: "Left optic tract lesion.",
    options: [
      "Left monocular blindness",
      "Right homonymous hemianopia",
      "Bitemporal hemianopia",
      "Normal fields"
    ],
    correct: 1,
    explanation: "Right homonymous hemianopia",
    wrongExplanations: [
      "This pattern does not match the anatomy of the stated lesion.",
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Visual System",
    module: "part3",
    question: "Optic chiasm compression (pituitary).",
    options: [
      "Bitemporal hemianopia",
      "Right homonymous hemianopia",
      "Left monocular loss",
      "Upper quadrantanopia only"
    ],
    correct: 0,
    explanation: "Bitemporal hemianopia",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Visual System",
    module: "part3",
    question: "Right Meyer's loop (temporal) damage.",
    options: [
      "Left superior quadrantanopia",
      "Right inferior quadrantanopia",
      "Left homonymous hemianopia",
      "Macular sparing only"
    ],
    correct: 0,
    explanation: "Left superior quadrantanopia",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Motor Systems",
    module: "part3",
    question: "Left medullary pyramid (corticospinal fibers before decussation). Most likely deficit:",
    options: [
      "Right limb weakness (UMN)",
      "Left limb weakness",
      "Bilateral flaccid paralysis",
      "Ipsilateral face only"
    ],
    correct: 0,
    explanation: "Right limb weakness (UMN)",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Motor Systems",
    module: "part3",
    question: "Complete spinal hemisection at T10 (Brown-Séquard).",
    options: [
      "Ipsilateral UMN weakness and DCML loss; contralateral spinothalamic loss",
      "Only pain loss bilaterally",
      "Flaccid paralysis above lesion",
      "Only autonomic loss"
    ],
    correct: 0,
    explanation: "Ipsilateral weakness/proprioception loss below lesion; contralateral pain/temp loss",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Motor Systems",
    module: "part3",
    question: "Anterior spinal artery syndrome at thoracic level.",
    options: [
      "Bilateral motor and pain/temp loss with spared dorsal columns",
      "Isolated proprioception loss only",
      "Only autonomic symptoms",
      "Pure cerebellar ataxia"
    ],
    correct: 0,
    explanation: "Bilateral UMN weakness and spinothalamic loss; DCML spared",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neuroanatomy",
    module: "part3",
    question: "Right middle cerebral artery stroke (non-dominant hemisphere). Most likely deficit:",
    options: [
      "Contralateral (left) face/arm weakness; spatial neglect possible; aphasia unlikely",
      "Ipsilateral weakness only",
      "Pure vision loss only",
      "Only cerebellar signs"
    ],
    correct: 0,
    explanation: "Right MCA supplies left body motor cortex; non-dominant right hemisphere → left hemiparesis without classic aphasia.",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neuroanatomy",
    module: "part3",
    question: "Broca area (left frontal) lesion.",
    options: [
      "Nonfluent aphasia with relatively preserved comprehension",
      "Fluent nonsense speech (Wernicke)",
      "Pure alexia without language loss",
      "Deafness"
    ],
    correct: 0,
    explanation: "Nonfluent (Broca) aphasia",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neuroanatomy",
    module: "part3",
    question: "Wernicke area lesion.",
    options: [
      "Fluent aphasia with poor comprehension",
      "Broca nonfluent aphasia",
      "Only motor weakness",
      "Prosopagnosia"
    ],
    correct: 0,
    explanation: "Fluent aphasia with poor comprehension",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Learning & Memory",
    module: "part3",
    question: "Bilateral hippocampal damage.",
    options: [
      "Anterograde declarative amnesia",
      "Loss of all procedural skills instantly",
      "Hypermnesia",
      "Only motor deficit"
    ],
    correct: 0,
    explanation: "Anterograde declarative amnesia",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Motor Systems",
    module: "part3",
    question: "Cerebellar hemisphere lesion.",
    options: [
      "Ipsilateral limb ataxia/dysmetria",
      "Contralateral hemiparesis",
      "Homonymous hemianopia",
      "Bilateral blindness"
    ],
    correct: 0,
    explanation: "Ipsilateral ataxia and dysmetria",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Motor Systems",
    module: "part3",
    question: "Basal ganglia dopamine loss (Parkinson).",
    options: [
      "Bradykinesia, rigidity, resting tremor",
      "Hyperkinetic chorea",
      "Pure sensory loss",
      "Deafness"
    ],
    correct: 0,
    explanation: "Bradykinesia, rigidity, resting tremor",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Auditory System",
    module: "part3",
    question: "Unilateral cochlear nerve section.",
    options: [
      "Ipsilateral SNHL",
      "Conductive loss only",
      "Bilateral loss",
      "Visual field cut"
    ],
    correct: 0,
    explanation: "Ipsilateral sensorineural hearing loss",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Somatosensation",
    module: "part3",
    question: "Right dorsal column lesion at C5.",
    options: [
      "Ipsilateral DCML loss below lesion",
      "Contralateral pain loss only",
      "Bilateral motor loss",
      "Olfactory loss"
    ],
    correct: 0,
    explanation: "Right proprioception/vibration loss below lesion",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Somatosensation",
    module: "part3",
    question: "Left spinothalamic tract lesion at T6.",
    options: [
      "Contralateral pain/temp loss below lesion",
      "Ipsilateral proprioception loss",
      "Bilateral weakness only",
      "Blindness"
    ],
    correct: 0,
    explanation: "Right pain/temperature loss below lesion",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Visual System",
    module: "part3",
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left optic nerve. Most likely deficit:",
    options: [
      "Total blindness in the left eye",
      "Right homonymous hemianopia",
      "Bitemporal hemianopia",
      "Left superior quadrantanopia"
    ],
    correct: 0,
    explanation: "Left optic nerve \u2192 Total blindness in the left eye.",
    wrongExplanations: [
      "",
      "Incorrect: Right homonymous hemianopia does not follow from a left optic nerve lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Left superior quadrantanopia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right optic nerve. Most likely deficit:",
    options: [
      "Total blindness in the right eye",
      "Left monocular blindness",
      "Bitemporal hemianopia",
      "Right homonymous hemianopia"
    ],
    correct: 0,
    explanation: "Right optic nerve \u2192 Total blindness in the right eye.",
    wrongExplanations: [
      "",
      "Incorrect: Left monocular blindness does not follow from a right optic nerve lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Right homonymous hemianopia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Optic chiasm (pituitary adenoma). Most likely deficit:",
    options: [
      "Bitemporal hemianopia",
      "Right homonymous hemianopia",
      "Left monocular blindness",
      "Macular sparing only"
    ],
    correct: 0,
    explanation: "Optic chiasm (pituitary adenoma) \u2192 Bitemporal hemianopia.",
    wrongExplanations: [
      "",
      "Incorrect: Right homonymous hemianopia does not follow from a optic chiasm (pituitary adenoma) lesion.",
      "Incorrect: Left monocular blindness is inconsistent with the stated lesion site.",
      "Incorrect: Macular sparing only reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right optic tract. Most likely deficit:",
    options: [
      "Left homonymous hemianopia",
      "Right monocular blindness",
      "Bitemporal hemianopia",
      "Left superior quadrantanopia"
    ],
    correct: 0,
    explanation: "Right optic tract \u2192 Left homonymous hemianopia.",
    wrongExplanations: [
      "",
      "Incorrect: Right monocular blindness does not follow from a right optic tract lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Left superior quadrantanopia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left optic tract. Most likely deficit:",
    options: [
      "Right homonymous hemianopia",
      "Left monocular blindness",
      "Bitemporal hemianopia",
      "Right inferior quadrantanopia"
    ],
    correct: 0,
    explanation: "Left optic tract \u2192 Right homonymous hemianopia.",
    wrongExplanations: [
      "",
      "Incorrect: Left monocular blindness does not follow from a left optic tract lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Right inferior quadrantanopia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right Meyer's loop (temporal lobe). Most likely deficit:",
    options: [
      "Left superior quadrantanopia ('pie in the sky')",
      "Right superior quadrantanopia",
      "Bitemporal hemianopia",
      "Left monocular blindness"
    ],
    correct: 0,
    explanation: "Right Meyer's loop (temporal lobe) \u2192 Left superior quadrantanopia ('pie in the sky').",
    wrongExplanations: [
      "",
      "Incorrect: Right superior quadrantanopia does not follow from a right meyer's loop (temporal lobe) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Left monocular blindness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left Meyer's loop (temporal lobe). Most likely deficit:",
    options: [
      "Right superior quadrantanopia",
      "Left superior quadrantanopia",
      "Right homonymous hemianopia",
      "Bitemporal hemianopia"
    ],
    correct: 0,
    explanation: "Left Meyer's loop (temporal lobe) \u2192 Right superior quadrantanopia.",
    wrongExplanations: [
      "",
      "Incorrect: Left superior quadrantanopia does not follow from a left meyer's loop (temporal lobe) lesion.",
      "Incorrect: Right homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Bitemporal hemianopia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right occipital lobe (V1). Most likely deficit:",
    options: [
      "Left homonymous hemianopia with macular involvement",
      "Right monocular blindness",
      "Bitemporal hemianopia",
      "Pure word deafness"
    ],
    correct: 0,
    explanation: "Right occipital lobe (V1) \u2192 Left homonymous hemianopia with macular involvement.",
    wrongExplanations: [
      "",
      "Incorrect: Right monocular blindness does not follow from a right occipital lobe (v1) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure word deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left occipital lobe (V1). Most likely deficit:",
    options: [
      "Right homonymous hemianopia",
      "Left monocular blindness",
      "Right superior quadrantanopia only",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Left occipital lobe (V1) \u2192 Right homonymous hemianopia.",
    wrongExplanations: [
      "",
      "Incorrect: Left monocular blindness does not follow from a left occipital lobe (v1) lesion.",
      "Incorrect: Right superior quadrantanopia only is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right lateral geniculate nucleus. Most likely deficit:",
    options: [
      "Contralateral homonymous visual field defect",
      "Ipsilateral monocular blindness",
      "Bitemporal hemianopia",
      "Pure alexia without field loss"
    ],
    correct: 0,
    explanation: "Right lateral geniculate nucleus \u2192 Contralateral homonymous visual field defect.",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral monocular blindness does not follow from a right lateral geniculate nucleus lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure alexia without field loss reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left medial longitudinal fasciculus (MLF). Most likely deficit:",
    options: [
      "Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus)",
      "Monocular blindness",
      "Bitemporal hemianopia",
      "Facial paralysis only"
    ],
    correct: 0,
    explanation: "Left medial longitudinal fasciculus (MLF) \u2192 Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus).",
    wrongExplanations: [
      "",
      "Incorrect: Monocular blindness does not follow from a left medial longitudinal fasciculus (mlf) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Facial paralysis only reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right abducens (CN VI) nucleus. Most likely deficit:",
    options: [
      "Horizontal gaze palsy toward lesion; ipsilateral abduction weakness",
      "Optic chiasm syndrome",
      "Pure aphasia",
      "Only hearing loss"
    ],
    correct: 0,
    explanation: "Right abducens (CN VI) nucleus \u2192 Horizontal gaze palsy toward lesion; ipsilateral abduction weakness.",
    wrongExplanations: [
      "",
      "Incorrect: Optic chiasm syndrome does not follow from a right abducens (cn vi) nucleus lesion.",
      "Incorrect: Pure aphasia is inconsistent with the stated lesion site.",
      "Incorrect: Only hearing loss reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left facial nerve (CN VII) peripheral lesion. Most likely deficit:",
    options: [
      "Ipsilateral lower face weakness; forehead often spared if UMN spared",
      "Contralateral arm weakness only",
      "Homonymous hemianopia",
      "Deafness only"
    ],
    correct: 0,
    explanation: "Left facial nerve (CN VII) peripheral lesion \u2192 Ipsilateral lower face weakness; forehead often spared if UMN spared.",
    wrongExplanations: [
      "",
      "Incorrect: Contralateral arm weakness only does not follow from a left facial nerve (cn vii) peripheral lesion lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Deafness only reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right hypoglossal (CN XII) nerve. Most likely deficit:",
    options: [
      "Tongue deviates to the right on protrusion",
      "Tongue deviates left",
      "Bitemporal hemianopia",
      "Pure ataxia only"
    ],
    correct: 0,
    explanation: "Right hypoglossal (CN XII) nerve \u2192 Tongue deviates to the right on protrusion.",
    wrongExplanations: [
      "",
      "Incorrect: Tongue deviates left does not follow from a right hypoglossal (cn xii) nerve lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure ataxia only reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Unilateral vestibular nerve lesion. Most likely deficit:",
    options: [
      "Vertigo, imbalance, nystagmus toward lesion",
      "Homonymous hemianopia",
      "Spastic quadriplegia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Unilateral vestibular nerve lesion \u2192 Vertigo, imbalance, nystagmus toward lesion.",
    wrongExplanations: [
      "",
      "Incorrect: Homonymous hemianopia does not follow from a unilateral vestibular nerve lesion lesion.",
      "Incorrect: Spastic quadriplegia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right medial lemniscus in medulla. Most likely deficit:",
    options: [
      "Contralateral loss of touch, vibration, proprioception",
      "Ipsilateral face pain loss",
      "Bitemporal hemianopia",
      "Pure aphasia"
    ],
    correct: 0,
    explanation: "Right medial lemniscus in medulla \u2192 Contralateral loss of touch, vibration, proprioception.",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral face pain loss does not follow from a right medial lemniscus in medulla lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left spinothalamic tract at T6. Most likely deficit:",
    options: [
      "Contralateral pain and temperature loss below T6",
      "Ipsilateral proprioception loss below T6",
      "Bilateral blindness",
      "Only autonomic loss"
    ],
    correct: 0,
    explanation: "Left spinothalamic tract at T6 \u2192 Contralateral pain and temperature loss below T6.",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral proprioception loss below T6 does not follow from a left spinothalamic tract at t6 lesion.",
      "Incorrect: Bilateral blindness is inconsistent with the stated lesion site.",
      "Incorrect: Only autonomic loss reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right dorsal column at C5. Most likely deficit:",
    options: [
      "Ipsilateral loss of fine touch/proprioception below C5",
      "Contralateral pain loss only",
      "Bitemporal hemianopia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Right dorsal column at C5 \u2192 Ipsilateral loss of fine touch/proprioception below C5.",
    wrongExplanations: [
      "",
      "Incorrect: Contralateral pain loss only does not follow from a right dorsal column at c5 lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Complete spinal hemisection at T10 (Brown-S\u00e9quard). Most likely deficit:",
    options: [
      "Ipsilateral UMN weakness and DCML loss; contralateral spinothalamic loss below lesion",
      "Bilateral flaccid paralysis only",
      "Only autonomic symptoms",
      "Pure cerebellar ataxia"
    ],
    correct: 0,
    explanation: "Complete spinal hemisection at T10 (Brown-S\u00e9quard) \u2192 Ipsilateral UMN weakness and DCML loss; contralateral spinothalamic loss below lesion.",
    wrongExplanations: [
      "",
      "Incorrect: Bilateral flaccid paralysis only does not follow from a complete spinal hemisection at t10 (brown-s\u00e9quard) lesion.",
      "Incorrect: Only autonomic symptoms is inconsistent with the stated lesion site.",
      "Incorrect: Pure cerebellar ataxia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Anterior spinal artery syndrome (thoracic). Most likely deficit:",
    options: [
      "Bilateral motor weakness and spinothalamic loss; dorsal columns spared",
      "Isolated proprioception loss only",
      "Pure ataxia",
      "Monocular blindness"
    ],
    correct: 0,
    explanation: "Anterior spinal artery syndrome (thoracic) \u2192 Bilateral motor weakness and spinothalamic loss; dorsal columns spared.",
    wrongExplanations: [
      "",
      "Incorrect: Isolated proprioception loss only does not follow from a anterior spinal artery syndrome (thoracic) lesion.",
      "Incorrect: Pure ataxia is inconsistent with the stated lesion site.",
      "Incorrect: Monocular blindness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Central cord syndrome (cervical). Most likely deficit:",
    options: [
      "Greater weakness in upper limbs than lower; variable sensory loss",
      "Only lower limb weakness with intact arms",
      "Homonymous hemianopia",
      "Deafness"
    ],
    correct: 0,
    explanation: "Central cord syndrome (cervical) \u2192 Greater weakness in upper limbs than lower; variable sensory loss.",
    wrongExplanations: [
      "",
      "Incorrect: Only lower limb weakness with intact arms does not follow from a central cord syndrome (cervical) lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Cauda equina compression. Most likely deficit:",
    options: [
      "Lower motor neuron signs in legs; saddle anesthesia; bowel/bladder issues",
      "Upper motor neuron spasticity only above lesion",
      "Bitemporal hemianopia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Cauda equina compression \u2192 Lower motor neuron signs in legs; saddle anesthesia; bowel/bladder issues.",
    wrongExplanations: [
      "",
      "Incorrect: Upper motor neuron spasticity only above lesion does not follow from a cauda equina compression lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right cerebellar hemisphere. Most likely deficit:",
    options: [
      "Ipsilateral limb ataxia and dysmetria",
      "Contralateral hemiparesis",
      "Homonymous hemianopia",
      "Nonfluent aphasia"
    ],
    correct: 0,
    explanation: "Right cerebellar hemisphere \u2192 Ipsilateral limb ataxia and dysmetria.",
    wrongExplanations: [
      "",
      "Incorrect: Contralateral hemiparesis does not follow from a right cerebellar hemisphere lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Nonfluent aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Cerebellar vermis. Most likely deficit:",
    options: [
      "Truncal and gait ataxia",
      "Ipsilateral arm intention tremor only",
      "Homonymous hemianopia",
      "Hyperreflexia with Babinski"
    ],
    correct: 0,
    explanation: "Cerebellar vermis \u2192 Truncal and gait ataxia.",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral arm intention tremor only does not follow from a cerebellar vermis lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Hyperreflexia with Babinski reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left basal ganglia (Parkinsonian pattern). Most likely deficit:",
    options: [
      "Bradykinesia and rigidity (often right body if left hemisphere motor loop)",
      "Flaccid paralysis only",
      "Bitemporal hemianopia",
      "Pure alexia"
    ],
    correct: 0,
    explanation: "Left basal ganglia (Parkinsonian pattern) \u2192 Bradykinesia and rigidity (often right body if left hemisphere motor loop).",
    wrongExplanations: [
      "",
      "Incorrect: Flaccid paralysis only does not follow from a left basal ganglia (parkinsonian pattern) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure alexia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right thalamic VPL nucleus. Most likely deficit:",
    options: [
      "Contralateral hemibody sensory loss",
      "Ipsilateral sensory loss",
      "Bitemporal hemianopia",
      "Broca aphasia only"
    ],
    correct: 0,
    explanation: "Right thalamic VPL nucleus \u2192 Contralateral hemibody sensory loss.",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral sensory loss does not follow from a right thalamic vpl nucleus lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia only reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left thalamic language-related nuclei (dominant). Most likely deficit:",
    options: [
      "Thalamic aphasia or dysfluency with possible memory issues",
      "Pure deafness",
      "Homonymous hemianopia only",
      "Only cerebellar ataxia"
    ],
    correct: 0,
    explanation: "Left thalamic language-related nuclei (dominant) \u2192 Thalamic aphasia or dysfluency with possible memory issues.",
    wrongExplanations: [
      "",
      "Incorrect: Pure deafness does not follow from a left thalamic language-related nuclei (dominant) lesion.",
      "Incorrect: Homonymous hemianopia only is inconsistent with the stated lesion site.",
      "Incorrect: Only cerebellar ataxia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Bilateral hippocampal damage. Most likely deficit:",
    options: [
      "Profound anterograde declarative memory impairment",
      "Pure motor weakness",
      "Color blindness only",
      "Deafness"
    ],
    correct: 0,
    explanation: "Bilateral hippocampal damage \u2192 Profound anterograde declarative memory impairment.",
    wrongExplanations: [
      "",
      "Incorrect: Pure motor weakness does not follow from a bilateral hippocampal damage lesion.",
      "Incorrect: Color blindness only is inconsistent with the stated lesion site.",
      "Incorrect: Deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Bilateral amygdala (selective). Most likely deficit:",
    options: [
      "Impaired fear conditioning; altered social fear processing",
      "Homonymous hemianopia",
      "Pure motor weakness",
      "Deafness"
    ],
    correct: 0,
    explanation: "Bilateral amygdala (selective) \u2192 Impaired fear conditioning; altered social fear processing.",
    wrongExplanations: [
      "",
      "Incorrect: Homonymous hemianopia does not follow from a bilateral amygdala (selective) lesion.",
      "Incorrect: Pure motor weakness is inconsistent with the stated lesion site.",
      "Incorrect: Deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left Broca area. Most likely deficit:",
    options: [
      "Nonfluent aphasia with relatively preserved comprehension",
      "Fluent nonsense speech (Wernicke pattern)",
      "Pure alexia without language loss",
      "Deafness"
    ],
    correct: 0,
    explanation: "Left Broca area \u2192 Nonfluent aphasia with relatively preserved comprehension.",
    wrongExplanations: [
      "",
      "Incorrect: Fluent nonsense speech (Wernicke pattern) does not follow from a left broca area lesion.",
      "Incorrect: Pure alexia without language loss is inconsistent with the stated lesion site.",
      "Incorrect: Deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left Wernicke area. Most likely deficit:",
    options: [
      "Fluent but impaired comprehension (receptive aphasia)",
      "Nonfluent speech with good comprehension",
      "Pure motor neglect only",
      "Monocular blindness"
    ],
    correct: 0,
    explanation: "Left Wernicke area \u2192 Fluent but impaired comprehension (receptive aphasia).",
    wrongExplanations: [
      "",
      "Incorrect: Nonfluent speech with good comprehension does not follow from a left wernicke area lesion.",
      "Incorrect: Pure motor neglect only is inconsistent with the stated lesion site.",
      "Incorrect: Monocular blindness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Arcuate fasciculus (dominant hemisphere). Most likely deficit:",
    options: [
      "Conduction aphasia: poor repetition with fluent speech",
      "Pure deafness",
      "Homonymous hemianopia",
      "Only ataxia"
    ],
    correct: 0,
    explanation: "Arcuate fasciculus (dominant hemisphere) \u2192 Conduction aphasia: poor repetition with fluent speech.",
    wrongExplanations: [
      "",
      "Incorrect: Pure deafness does not follow from a arcuate fasciculus (dominant hemisphere) lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Only ataxia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right parietal neglect syndrome. Most likely deficit:",
    options: [
      "Left spatial neglect and anosognosia",
      "Right neglect",
      "Bitemporal hemianopia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Right parietal neglect syndrome \u2192 Left spatial neglect and anosognosia.",
    wrongExplanations: [
      "",
      "Incorrect: Right neglect does not follow from a right parietal neglect syndrome lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left primary motor cortex (hand area). Most likely deficit:",
    options: [
      "Contralateral hand/upper limb weakness (UMN)",
      "Ipsilateral hand weakness",
      "Bitemporal hemianopia",
      "Pure alexia"
    ],
    correct: 0,
    explanation: "Left primary motor cortex (hand area) \u2192 Contralateral hand/upper limb weakness (UMN).",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral hand weakness does not follow from a left primary motor cortex (hand area) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure alexia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right primary motor cortex (leg area). Most likely deficit:",
    options: [
      "Contralateral leg weakness (UMN)",
      "Ipsilateral leg weakness only",
      "Homonymous hemianopia",
      "Deafness"
    ],
    correct: 0,
    explanation: "Right primary motor cortex (leg area) \u2192 Contralateral leg weakness (UMN).",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral leg weakness only does not follow from a right primary motor cortex (leg area) lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left lateral pontine (AICA) syndrome. Most likely deficit:",
    options: [
      "Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss",
      "Pure motor weakness only",
      "Bitemporal hemianopia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Left lateral pontine (AICA) syndrome \u2192 Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss.",
    wrongExplanations: [
      "",
      "Incorrect: Pure motor weakness only does not follow from a left lateral pontine (aica) syndrome lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right lateral medullary (PICA) syndrome. Most likely deficit:",
    options: [
      "Ipsilateral face pain/temp loss; contralateral body pain/temp loss; ataxia; Horner possible",
      "Bilateral blindness",
      "Pure aphasia",
      "Only deafness"
    ],
    correct: 0,
    explanation: "Right lateral medullary (PICA) syndrome \u2192 Ipsilateral face pain/temp loss; contralateral body pain/temp loss; ataxia; Horner possible.",
    wrongExplanations: [
      "",
      "Incorrect: Bilateral blindness does not follow from a right lateral medullary (pica) syndrome lesion.",
      "Incorrect: Pure aphasia is inconsistent with the stated lesion site.",
      "Incorrect: Only deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Medial medullary syndrome. Most likely deficit:",
    options: [
      "Ipsilateral tongue weakness; contralateral UMN weakness; contralateral DCML loss",
      "Bitemporal hemianopia",
      "Only cerebellar ataxia",
      "Pure alexia"
    ],
    correct: 0,
    explanation: "Medial medullary syndrome \u2192 Ipsilateral tongue weakness; contralateral UMN weakness; contralateral DCML loss.",
    wrongExplanations: [
      "",
      "Incorrect: Bitemporal hemianopia does not follow from a medial medullary syndrome lesion.",
      "Incorrect: Only cerebellar ataxia is inconsistent with the stated lesion site.",
      "Incorrect: Pure alexia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right internal capsule (posterior limb). Most likely deficit:",
    options: [
      "Contralateral hemiparesis (face/arm>leg depending on fibers)",
      "Ipsilateral weakness",
      "Bitemporal hemianopia",
      "Deafness"
    ],
    correct: 0,
    explanation: "Right internal capsule (posterior limb) \u2192 Contralateral hemiparesis (face/arm>leg depending on fibers).",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral weakness does not follow from a right internal capsule (posterior limb) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left prefrontal orbitofrontal lesion. Most likely deficit:",
    options: [
      "Disinhibition and personality change (varies)",
      "Homonymous hemianopia",
      "Pure deafness",
      "Only ataxia"
    ],
    correct: 0,
    explanation: "Left prefrontal orbitofrontal lesion \u2192 Disinhibition and personality change (varies).",
    wrongExplanations: [
      "",
      "Incorrect: Homonymous hemianopia does not follow from a left prefrontal orbitofrontal lesion lesion.",
      "Incorrect: Pure deafness is inconsistent with the stated lesion site.",
      "Incorrect: Only ataxia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Bilateral auditory cortex (Heschl's). Most likely deficit:",
    options: [
      "Cortical deafness or profound auditory processing deficit",
      "Monocular blindness",
      "Bitemporal hemianopia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Bilateral auditory cortex (Heschl's) \u2192 Cortical deafness or profound auditory processing deficit.",
    wrongExplanations: [
      "",
      "Incorrect: Monocular blindness does not follow from a bilateral auditory cortex (heschl's) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Unilateral cochlear nerve section. Most likely deficit:",
    options: [
      "Profound unilateral sensorineural hearing loss",
      "Bilateral deafness from cortex only",
      "Homonymous hemianopia",
      "Pure aphasia"
    ],
    correct: 0,
    explanation: "Unilateral cochlear nerve section \u2192 Profound unilateral sensorineural hearing loss.",
    wrongExplanations: [
      "",
      "Incorrect: Bilateral deafness from cortex only does not follow from a unilateral cochlear nerve section lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Pure aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right superior colliculus lesion. Most likely deficit:",
    options: [
      "Contralateral visual neglect for orienting; saccade deficits possible",
      "Bitemporal hemianopia",
      "Broca aphasia",
      "Only DCML loss"
    ],
    correct: 0,
    explanation: "Right superior colliculus lesion \u2192 Contralateral visual neglect for orienting; saccade deficits possible.",
    wrongExplanations: [
      "",
      "Incorrect: Bitemporal hemianopia does not follow from a right superior colliculus lesion lesion.",
      "Incorrect: Broca aphasia is inconsistent with the stated lesion site.",
      "Incorrect: Only DCML loss reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left red nucleus (combined with nearby pathways). Most likely deficit:",
    options: [
      "Tremor and motor coordination issues; pattern depends on adjacent damage",
      "Pure blindness",
      "Only deafness",
      "Only aphasia without motor signs"
    ],
    correct: 0,
    explanation: "Left red nucleus (combined with nearby pathways) \u2192 Tremor and motor coordination issues; pattern depends on adjacent damage.",
    wrongExplanations: [
      "",
      "Incorrect: Pure blindness does not follow from a left red nucleus (combined with nearby pathways) lesion.",
      "Incorrect: Only deafness is inconsistent with the stated lesion site.",
      "Incorrect: Only aphasia without motor signs reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Cervical cord syrinx expanding centrally. Most likely deficit:",
    options: [
      "Cape-like loss of pain/temp in upper limbs; later motor signs",
      "Only DCML loss in legs first always",
      "Bitemporal hemianopia",
      "Broca aphasia"
    ],
    correct: 0,
    explanation: "Cervical cord syrinx expanding centrally \u2192 Cape-like loss of pain/temp in upper limbs; later motor signs.",
    wrongExplanations: [
      "",
      "Incorrect: Only DCML loss in legs first always does not follow from a cervical cord syrinx expanding centrally lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca aphasia reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Tabes dorsalis (dorsal columns). Most likely deficit:",
    options: [
      "Loss of proprioception/vibration; sensory ataxia; lancinating pains",
      "Pure motor UMN only",
      "Homonymous hemianopia",
      "Deafness only"
    ],
    correct: 0,
    explanation: "Tabes dorsalis (dorsal columns) \u2192 Loss of proprioception/vibration; sensory ataxia; lancinating pains.",
    wrongExplanations: [
      "",
      "Incorrect: Pure motor UMN only does not follow from a tabes dorsalis (dorsal columns) lesion.",
      "Incorrect: Homonymous hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Deafness only reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right middle cerebral artery stroke (left dominant hemisphere). Most likely deficit:",
    options: [
      "Right face/arm weakness; aphasia if language dominant left",
      "Left hemiparesis with aphasia on right dominant side",
      "Pure vision loss only",
      "Only cerebellar signs"
    ],
    correct: 0,
    explanation: "Right middle cerebral artery stroke (left dominant hemisphere) \u2192 Right face/arm weakness; aphasia if language dominant left.",
    wrongExplanations: [
      "",
      "Incorrect: Left hemiparesis with aphasia on right dominant side does not follow from a right middle cerebral artery stroke (left dominant hemisphere) lesion.",
      "Incorrect: Pure vision loss only is inconsistent with the stated lesion site.",
      "Incorrect: Only cerebellar signs reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left middle cerebral artery stroke (left dominant hemisphere). Most likely deficit:",
    options: [
      "Left face/arm weakness; aphasia (dominant hemisphere language)",
      "Right hemiparesis with aphasia",
      "Bitemporal hemianopia",
      "Only deafness"
    ],
    correct: 0,
    explanation: "Left middle cerebral artery stroke (left dominant hemisphere) \u2192 Left face/arm weakness; aphasia (dominant hemisphere language).",
    wrongExplanations: [
      "",
      "Incorrect: Right hemiparesis with aphasia does not follow from a left middle cerebral artery stroke (left dominant hemisphere) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Only deafness reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Right middle cerebral artery stroke (right non-dominant hemisphere). Most likely deficit:",
    options: [
      "Left face/arm weakness; possible neglect; typically no aphasia",
      "Aphasia with intact comprehension",
      "Bitemporal hemianopia",
      "Broca-type fluent nonsense speech"
    ],
    correct: 0,
    explanation: "Right middle cerebral artery stroke (right non-dominant hemisphere) \u2192 Left face/arm weakness; possible neglect; typically no aphasia.",
    wrongExplanations: [
      "",
      "Incorrect: Aphasia with intact comprehension does not follow from a right middle cerebral artery stroke (right non-dominant hemisphere) lesion.",
      "Incorrect: Bitemporal hemianopia is inconsistent with the stated lesion site.",
      "Incorrect: Broca-type fluent nonsense speech reflects a different pathway or syndrome."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Lesion: Left pyramid (medulla) corticospinal lesion before decussation. Most likely deficit:",
    options: [
      "Contralateral limb weakness (UMN) below lesion",
      "Ipsilateral limb weakness below lesion",
      "Bilateral flaccid paralysis at lesion level only",
      "Ipsilateral face weakness only (facial nucleus pattern)"
    ],
    correct: 0,
    explanation: "Left pyramid (medulla) corticospinal lesion before decussation \u2192 Contralateral limb weakness (UMN) below lesion.",
    wrongExplanations: [
      "",
      "Incorrect: Ipsilateral limb weakness below lesion does not follow from a left pyramid (medulla) corticospinal lesion before decussation lesion.",
      "Incorrect: Bilateral flaccid paralysis at lesion level only is inconsistent with the stated lesion site.",
      "Incorrect: Ipsilateral face weakness only (facial nucleus pattern) reflects a different pathway or syndrome."
    ]
  },

const PROCTORED_CIRCUIT_POOL = [
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Three-neuron chain: sensory → excitatory interneuron → motor. Sensory fires; interneuron is blocked. Motor output? — expected deficit?",
    options: [
      "Reduced or absent excitation of motor neuron",
      "Increased motor firing",
      "Only neuromodulation",
      "Saltatory conduction in muscle"
    ],
    correct: 0,
    explanation: "Reduced or absent excitation of motor neuron",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Recurrent inhibition: motor neuron excites interneuron that inhibits same motor neuron. Effect? — expected deficit?",
    options: [
      "Negative feedback limiting firing duration",
      "Runaway excitation",
      "Only LTP",
      "Myelin formation"
    ],
    correct: 0,
    explanation: "Negative feedback limiting firing duration",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 2: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 3: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 4: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 5: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 6: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 7: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 8: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 9: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 10: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part3",
    question: "Circuit 11: excitatory + inhibitory interneurons with serotonergic modulation — expected deficit?",
    options: [
      "Modulation changes network gain",
      "Only removes myelin",
      "Blocks all Na⁺ globally",
      "Eliminates resting potential"
    ],
    correct: 0,
    explanation: "Modulation changes gain not single synapse delay only",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  }
];

const PROCTORED_CLAMP_TRACE_POOL = [
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a step to 0 mV with early inward then late outward current. Which currents dominate each phase?",
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Voltage clamp trace\"><rect width=\"320\" height=\"120\" fill=\"#fafafa\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"10,60 80,60 80,30 200,30 200,90 300,90\"/></svg>",
    options: [
      "Early inward Na⁺; later outward K⁺",
      "Only K⁺ throughout",
      "Only leak current",
      "Ca²⁺ only inward at all times"
    ],
    correct: 0,
    explanation: "Depolarizing clamp activates Na⁺ first, then delayed K⁺ repolarizes the command.",
    wrongExplanations: ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a step to 0 mV with early inward then late outward current. Which currents dominate each phase?",
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Voltage clamp trace\"><rect width=\"320\" height=\"120\" fill=\"#fafafa\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"10,60 80,60 80,30 200,30 200,90 300,90\"/></svg>",
    options: [
      "Early inward Na⁺; later outward K⁺",
      "Only K⁺ throughout",
      "Only leak current",
      "Ca²⁺ only inward at all times"
    ],
    correct: 0,
    explanation: "Depolarizing clamp activates Na⁺ first, then delayed K⁺ repolarizes the command.",
    wrongExplanations: ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a step to 0 mV with early inward then late outward current. Which currents dominate each phase?",
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Voltage clamp trace\"><rect width=\"320\" height=\"120\" fill=\"#fafafa\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"10,60 80,60 80,30 200,30 200,90 300,90\"/></svg>",
    options: [
      "Early inward Na⁺; later outward K⁺",
      "Only K⁺ throughout",
      "Only leak current",
      "Ca²⁺ only inward at all times"
    ],
    correct: 0,
    explanation: "Depolarizing clamp activates Na⁺ first, then delayed K⁺ repolarizes the command.",
    wrongExplanations: ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a step to 0 mV with early inward then late outward current. Which currents dominate each phase?",
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Voltage clamp trace\"><rect width=\"320\" height=\"120\" fill=\"#fafafa\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"10,60 80,60 80,30 200,30 200,90 300,90\"/></svg>",
    options: [
      "Early inward Na⁺; later outward K⁺",
      "Only K⁺ throughout",
      "Only leak current",
      "Ca²⁺ only inward at all times"
    ],
    correct: 0,
    explanation: "Depolarizing clamp activates Na⁺ first, then delayed K⁺ repolarizes the command.",
    wrongExplanations: ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a step to 0 mV with early inward then late outward current. Which currents dominate each phase?",
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Voltage clamp trace\"><rect width=\"320\" height=\"120\" fill=\"#fafafa\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"10,60 80,60 80,30 200,30 200,90 300,90\"/></svg>",
    options: [
      "Early inward Na⁺; later outward K⁺",
      "Only K⁺ throughout",
      "Only leak current",
      "Ca²⁺ only inward at all times"
    ],
    correct: 0,
    explanation: "Depolarizing clamp activates Na⁺ first, then delayed K⁺ repolarizes the command.",
    wrongExplanations: ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a step to 0 mV with early inward then late outward current. Which currents dominate each phase?",
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Voltage clamp trace\"><rect width=\"320\" height=\"120\" fill=\"#fafafa\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"10,60 80,60 80,30 200,30 200,90 300,90\"/></svg>",
    options: [
      "Early inward Na⁺; later outward K⁺",
      "Only K⁺ throughout",
      "Only leak current",
      "Ca²⁺ only inward at all times"
    ],
    correct: 0,
    explanation: "Depolarizing clamp activates Na⁺ first, then delayed K⁺ repolarizes the command.",
    wrongExplanations: ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]
  }
];

const PROCTORED_MOCK_POOL = [
  ...PROCTORED_SATA_POOL,
  ...PROCTORED_LESION_POOL,
  ...PROCTORED_CIRCUIT_POOL,
  ...PROCTORED_CLAMP_TRACE_POOL
];
