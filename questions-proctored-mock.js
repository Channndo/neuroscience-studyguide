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
  }
];

const PROCTORED_CIRCUIT_POOL = [
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Three-neuron chain: sensory \u2192 excitatory interneuron \u2192 motor. Sensory fires; interneuron is blocked. Motor output?",
    options: [
      "Reduced or absent excitation of motor neuron",
      "Increased motor firing",
      "Only neuromodulation",
      "Saltatory conduction in muscle"
    ],
    correct: 0,
    explanation: "Without the interneuron relay, the motor neuron receives little or no excitation.",
    wrongExplanations: [
      "",
      "Incorrect: Increased motor firing does not follow from the stated circuit.",
      "Incorrect: Only neuromodulation is inconsistent with the wiring described.",
      "Incorrect: Saltatory conduction in muscle is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Recurrent inhibition: motor neuron excites interneuron that inhibits the same motor neuron. Effect?",
    options: [
      "Negative feedback limiting firing duration",
      "Runaway excitation",
      "Only LTP",
      "Myelin formation"
    ],
    correct: 0,
    explanation: "Recurrent inhibition provides negative feedback on motor neuron firing.",
    wrongExplanations: [
      "",
      "Incorrect: Runaway excitation does not follow from the stated circuit.",
      "Incorrect: Only LTP is inconsistent with the wiring described.",
      "Incorrect: Myelin formation is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Feedforward inhibition: sensory input excites both relay neuron and interneuron that inhibits relay. Net effect on relay timing?",
    options: [
      "Narrower window for relay firing (sharper temporal filtering)",
      "Relay fires longer without limit",
      "Relay cannot fire at all always",
      "Only gap junction coupling"
    ],
    correct: 0,
    explanation: "Feedforward inhibition curtails relay output to a brief window.",
    wrongExplanations: [
      "",
      "Incorrect: Relay fires longer without limit does not follow from the stated circuit.",
      "Incorrect: Relay cannot fire at all always is inconsistent with the wiring described.",
      "Incorrect: Only gap junction coupling is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Disinhibition: inhibitory interneuron is silenced, releasing target neuron from inhibition. Target neuron activity?",
    options: [
      "Increases (disinhibition)",
      "Always decreases",
      "Unchanged always",
      "Only photoreceptor responds"
    ],
    correct: 0,
    explanation: "Removing inhibition increases target excitability.",
    wrongExplanations: [
      "",
      "Incorrect: Always decreases does not follow from the stated circuit.",
      "Incorrect: Unchanged always is inconsistent with the wiring described.",
      "Incorrect: Only photoreceptor responds is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Reciprocal inhibition between two antagonist motor pools (flexor/extensor). When flexor pool is active, extensor pool?",
    options: [
      "Reciprocally inhibited (reduced firing)",
      "Co-activated equally",
      "Unrelated",
      "Only sensory firing"
    ],
    correct: 0,
    explanation: "Reciprocal inhibition prevents co-contraction of antagonists.",
    wrongExplanations: [
      "",
      "Incorrect: Co-activated equally does not follow from the stated circuit.",
      "Incorrect: Unrelated is inconsistent with the wiring described.",
      "Incorrect: Only sensory firing is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Central pattern generator (CPG) for locomotion: rhythmic output persists after sensory input ends. This implies?",
    options: [
      "Recurrent excitatory/inhibitory loops can sustain rhythm intrinsically",
      "Sensory input required every cycle always",
      "Only myelin generates rhythm",
      "Only cortex required each step"
    ],
    correct: 0,
    explanation: "CPGs use local circuit dynamics to maintain rhythmic motor patterns.",
    wrongExplanations: [
      "",
      "Incorrect: Sensory input required every cycle always does not follow from the stated circuit.",
      "Incorrect: Only myelin generates rhythm is inconsistent with the wiring described.",
      "Incorrect: Only cortex required each step is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Aplysia siphon withdrawal: strong tail shock sensitizes siphon response via serotonin on sensory terminals. Mechanism?",
    options: [
      "Serotonin increases cAMP/PKA and broadens sensory terminal excitability (sensitization)",
      "Only postsynaptic K\u207a block always",
      "Only long-term depression",
      "Only gap junction opening"
    ],
    correct: 0,
    explanation: "Serotonin modulates presynaptic release in Aplysia sensitization.",
    wrongExplanations: [
      "",
      "Incorrect: Only postsynaptic K\u207a block always does not follow from the stated circuit.",
      "Incorrect: Only long-term depression is inconsistent with the wiring described.",
      "Incorrect: Only gap junction opening is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Summation: EPSP +5 mV and IPSP \u22123 mV arrive simultaneously at soma (linear range). Approximate net change?",
    options: [
      "+2 mV toward threshold",
      "+8 mV always",
      "\u22128 mV always",
      "0 mV always"
    ],
    correct: 0,
    explanation: "Subthreshold linear summation: +5 + (\u22123) \u2248 +2 mV.",
    wrongExplanations: [
      "",
      "Incorrect: +8 mV always does not follow from the stated circuit.",
      "Incorrect: \u22128 mV always is inconsistent with the wiring described.",
      "Incorrect: 0 mV always is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Two EPSPs +3 mV each arrive 2 ms apart within \u03c4_m. Compared with one EPSP, somatic depolarization?",
    options: [
      "Greater peak (temporal summation)",
      "Same peak always",
      "Zero always",
      "Only inhibition results"
    ],
    correct: 0,
    explanation: "Temporal summation within \u03c4 increases peak depolarization.",
    wrongExplanations: [
      "",
      "Incorrect: Same peak always does not follow from the stated circuit.",
      "Incorrect: Zero always is inconsistent with the wiring described.",
      "Incorrect: Only inhibition results is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Feedback inhibition in cortex: pyramidal cell activates interneuron that inhibits same pyramidal cell. Function?",
    options: [
      "Gain control and stabilization of firing rate",
      "Guaranteed runaway activity",
      "Only LTP induction",
      "Only myelin repair"
    ],
    correct: 0,
    explanation: "Feedback inhibition stabilizes cortical firing.",
    wrongExplanations: [
      "",
      "Incorrect: Guaranteed runaway activity does not follow from the stated circuit.",
      "Incorrect: Only LTP induction is inconsistent with the wiring described.",
      "Incorrect: Only myelin repair is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Lateral inhibition in retina: surround inhibits center. Visual edge enhancement occurs because?",
    options: [
      "Contrast at borders increases due to differential center vs surround firing",
      "All pixels fire equally",
      "Only photoreceptors spike",
      "Only cochlea tuned"
    ],
    correct: 0,
    explanation: "Lateral inhibition enhances contrast at edges.",
    wrongExplanations: [
      "",
      "Incorrect: All pixels fire equally does not follow from the stated circuit.",
      "Incorrect: Only photoreceptors spike is inconsistent with the wiring described.",
      "Incorrect: Only cochlea tuned is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Inhibitory interneuron (PV+) provides perisomatic inhibition on pyramidal cell. Effect on spike timing?",
    options: [
      "Precise control of spike timing and synchrony",
      "Only increases firing rate without bound",
      "Only blocks all input permanently",
      "Only affects glomeruli"
    ],
    correct: 0,
    explanation: "Perisomatic inhibition strongly regulates spike timing.",
    wrongExplanations: [
      "",
      "Incorrect: Only increases firing rate without bound does not follow from the stated circuit.",
      "Incorrect: Only blocks all input permanently is inconsistent with the wiring described.",
      "Incorrect: Only affects glomeruli is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Excitatory drive to motor neuron with concurrent shunting inhibition (open Cl\u207b channels). EPSP amplitude at soma?",
    options: [
      "Reduced (shunting) even if E_Cl near rest",
      "Always increased",
      "Unchanged always",
      "Only Na\u207a blocked"
    ],
    correct: 0,
    explanation: "Increased conductance shunts EPSPs.",
    wrongExplanations: [
      "",
      "Incorrect: Always increased does not follow from the stated circuit.",
      "Incorrect: Unchanged always is inconsistent with the wiring described.",
      "Incorrect: Only Na\u207a blocked is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Divergent excitatory circuit: one sensory neuron drives many motor neurons. Effect?",
    options: [
      "Amplification/spread of signal to multiple outputs",
      "Only one motor neuron can ever fire",
      "Only inhibition spreads",
      "Only photoreceptor signal"
    ],
    correct: 0,
    explanation: "Divergence distributes input to many targets.",
    wrongExplanations: [
      "",
      "Incorrect: Only one motor neuron can ever fire does not follow from the stated circuit.",
      "Incorrect: Only inhibition spreads is inconsistent with the wiring described.",
      "Incorrect: Only photoreceptor signal is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Convergent excitatory circuit: many sensory neurons onto one motor neuron. Effect?",
    options: [
      "Spatial summation can reach threshold more easily",
      "Motor neuron cannot integrate inputs",
      "Only one synapse matters always",
      "Only gap junctions converge"
    ],
    correct: 0,
    explanation: "Convergence allows spatial summation.",
    wrongExplanations: [
      "",
      "Incorrect: Motor neuron cannot integrate inputs does not follow from the stated circuit.",
      "Incorrect: Only one synapse matters always is inconsistent with the wiring described.",
      "Incorrect: Only gap junctions converge is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Renshaw cell recurrent inhibition on alpha motor neuron after firing. Purpose?",
    options: [
      "Limits firing rate and prevents over-excitation",
      "Increases firing without limit",
      "Only LTP at NMJ",
      "Only cerebellar learning"
    ],
    correct: 0,
    explanation: "Renshaw cells provide recurrent inhibition to motor neurons.",
    wrongExplanations: [
      "",
      "Incorrect: Increases firing without limit does not follow from the stated circuit.",
      "Incorrect: Only LTP at NMJ is inconsistent with the wiring described.",
      "Incorrect: Only cerebellar learning is unrelated to this circuit."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Mutual excitation between two neurons with slow synapses. Possible circuit behavior?",
    options: [
      "Sustained co-activation or oscillations depending on kinetics",
      "Immediate silence always",
      "Only photopigment bleaching",
      "Only DCML loss"
    ],
    correct: 0,
    explanation: "Mutual excitation can sustain activity or oscillate.",
    wrongExplanations: [
      "",
      "Incorrect: Immediate silence always does not follow from the stated circuit.",
      "Incorrect: Only photopigment bleaching is inconsistent with the wiring described.",
      "Incorrect: Only DCML loss is unrelated to this circuit."
    ]
  }
];

const PROCTORED_CLAMP_TRACE_POOL = [
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "The clamp trace shows a depolarizing step to 0 mV with early inward then late outward current (squid axon). Which currents dominate each phase?",
    options: [
      "Early inward Na\u207a; later outward K\u207a",
      "Only K\u207a throughout",
      "Only leak current",
      "Ca\u00b2\u207a only inward at all times"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"HH step clamp\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">I (nA) vs time</text><line x1=\"30\" y1=\"130\" x2=\"310\" y2=\"130\" stroke=\"#333\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"30,90 100,90 100,95 250,95\"/></svg>",
    explanation: "Depolarizing clamp activates Na\u207a first, then delayed K\u207a.",
    wrongExplanations: [
      "",
      "K\u207a alone cannot explain early inward current at 0 mV from rest.",
      "Leak alone does not reproduce Hodgkin\u2013Huxley sequence.",
      "Ca\u00b2\u207a is not the primary squid axon clamp inward at this step."
    ]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "After TTX, the same voltage step shows only late outward current. This outward current is primarily:",
    options: [
      "Voltage-gated K\u207a",
      "Na\u207a influx",
      "Photopigment current",
      "Glomerular odor current"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"TTX clamp\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">I (nA) vs time</text><line x1=\"30\" y1=\"130\" x2=\"310\" y2=\"130\" stroke=\"#333\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"30,90 100,90 100,95 250,95\"/></svg>",
    explanation: "TTX blocks Na\u207a; remaining outward current is primarily K\u207a.",
    wrongExplanations: [
      "",
      "Na\u207a is blocked by TTX in this condition.",
      "Not a photoreceptor recording.",
      "Not olfactory epithelium."
    ]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "After TEA, the early inward current remains but repolarizing outward current is reduced. Early inward is:",
    options: [
      "Na\u207a current (TEA blocks K\u207a)",
      "Only Cl\u207b",
      "Only pump current",
      "Only gap junction"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"TEA clamp\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">I (nA) vs time</text><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"30,90 100,90 100,40 250,40 250,70 300,70\"/></svg>",
    explanation: "TEA blocks K\u207a channels; inward Na\u207a remains on depolarizing steps.",
    wrongExplanations: [
      "",
      "Cl\u207b is not the early inward at 0 mV here.",
      "Pump current is negligible at ms scale.",
      "Gap junctions are not the clamp signal."
    ]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "K\u207a-only condition (Na\u207a blocked): step to \u221240 mV produces sustained outward current. This indicates:",
    options: [
      "K\u207a channels open at depolarized command",
      "Na\u207a regenerative spike",
      "Only photopigment",
      "Only muscle spindle"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"K only\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">I_K (nA)</text><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"30,100 100,100 100,120 250,120\"/></svg>",
    explanation: "With Na\u207a blocked, outward K\u207a follows depolarizing command.",
    wrongExplanations: [
      "",
      "Na\u207a is pharmacologically blocked.",
      "Not phototransduction.",
      "Not spindle stretch."
    ]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "I\u2013V plot shows inward current at depolarized potentials crossing zero near +55 mV. This reversal near +55 mV suggests:",
    options: [
      "Predominantly Na\u207a current under these conditions",
      "Predominantly K\u207a only at all voltages",
      "No ionic currents",
      "Only Cl\u207b at all voltages"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"I-V curve\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">I (nA)</text><text x=\"8\" y=\"80\" font-size=\"10\" transform=\"rotate(-90 8 80)\">V_m (mV)</text><line x1=\"40\" y1=\"140\" x2=\"300\" y2=\"140\" stroke=\"#333\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#333\"/><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"40,100 120,100 200,40 280,120\"/></svg>",
    explanation: "Na\u207a reversal near +55 mV matches inward current reversing there.",
    wrongExplanations: [
      "",
      "K\u207a reversal is near E_K (~\u221290 mV).",
      "Ionic currents are present.",
      "Cl\u207b reversal is typically negative to rest."
    ]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "Current-clamp: brief hyperpolarizing current step produces exponential return with time constant \u03c4. \u03c4 primarily reflects:",
    options: [
      "R_m \u00d7 C_m membrane properties",
      "Axon diameter only",
      "Only synaptic quanta",
      "Only myelin thickness without R_m"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"current clamp\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">V_m (mV) vs time</text><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"30,110 100,110 100,70 220,70 220,85 300,85\"/></svg>",
    explanation: "Passive \u03c4 = R_m C_m.",
    wrongExplanations: [
      "",
      "Diameter affects R_a and \u03bb, not \u03c4 alone directly.",
      "Synaptic quanta are not the passive \u03c4 here.",
      "Myelin affects \u03bb and conduction, not this passive \u03c4 definition."
    ]
  },
  {
    topic: "Voltage Clamp",
    module: "part1",
    question: "Subthreshold current-clamp step produces graded depolarization without spikes. The trace shows:",
    options: [
      "Passive/subthreshold response without regenerative Na\u207a activation",
      "Full action potential train",
      "Only synaptic vesicle fusion",
      "Only cochlear tuning"
    ],
    correct: 0,
    diagram: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 160\" role=\"img\" aria-label=\"subthreshold\"><rect width=\"340\" height=\"160\" fill=\"#fafafa\"/><text x=\"170\" y=\"14\" text-anchor=\"middle\" font-size=\"10\">V_m (mV)</text><polyline fill=\"none\" stroke=\"#a41034\" stroke-width=\"2\" points=\"30,100 100,100 100,85 250,85\"/></svg>",
    explanation: "Subthreshold steps do not trigger regenerative spikes.",
    wrongExplanations: [
      "",
      "No Na\u207a regenerative upstroke is shown.",
      "Vesicle fusion is not the plotted V_m.",
      "Not basilar membrane tuning."
    ]
  }
];


const PROCTORED_MOCK_POOL = [
  ...PROCTORED_SATA_POOL,
  ...PROCTORED_LESION_POOL,
  ...PROCTORED_CIRCUIT_POOL,
  ...PROCTORED_CLAMP_TRACE_POOL
];
