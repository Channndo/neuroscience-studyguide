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
    question: "Left optic tract lesion — expected deficit?",
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
    question: "Optic chiasm compression (pituitary) — expected deficit?",
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
    question: "Right Meyer's loop (temporal) damage — expected deficit?",
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
    question: "Left lateral corticospinal tract in medulla — expected deficit?",
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
    question: "Complete spinal hemisection at T10 (Brown-Séquard) — expected deficit?",
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
    question: "Anterior spinal artery syndrome at thoracic level — expected deficit?",
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
    question: "Right middle cerebral artery stroke (dominant hemisphere) — expected deficit?",
    options: [
      "Contralateral face/arm weakness; language deficit if dominant",
      "Ipsilateral weakness only",
      "Pure vision loss only",
      "Only cerebellar signs"
    ],
    correct: 0,
    explanation: "Left hemiparesis and aphasia if dominant",
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
    question: "Broca area (left frontal) lesion — expected deficit?",
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
    question: "Wernicke area lesion — expected deficit?",
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
    question: "Bilateral hippocampal damage — expected deficit?",
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
    question: "Cerebellar hemisphere lesion — expected deficit?",
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
    question: "Basal ganglia dopamine loss (Parkinson) — expected deficit?",
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
    question: "Unilateral cochlear nerve section — expected deficit?",
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
    question: "Right dorsal column lesion at C5 — expected deficit?",
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
    question: "Left spinothalamic tract lesion at T6 — expected deficit?",
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
    question: "Clinical vignette 1: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 2: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 3: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 4: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 5: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Vestibular System",
    module: "part3",
    question: "Clinical vignette 6: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Cranial Nerves",
    module: "part3",
    question: "Clinical vignette 7: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Taste",
    module: "part3",
    question: "Clinical vignette 8: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 9: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 10: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 11: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 12: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 13: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Vestibular System",
    module: "part3",
    question: "Clinical vignette 14: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Cranial Nerves",
    module: "part3",
    question: "Clinical vignette 15: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Taste",
    module: "part3",
    question: "Clinical vignette 16: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 17: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 18: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 19: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 20: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 21: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Vestibular System",
    module: "part3",
    question: "Clinical vignette 22: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Cranial Nerves",
    module: "part3",
    question: "Clinical vignette 23: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Taste",
    module: "part3",
    question: "Clinical vignette 24: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 25: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 26: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 27: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 28: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 29: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Vestibular System",
    module: "part3",
    question: "Clinical vignette 30: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Cranial Nerves",
    module: "part3",
    question: "Clinical vignette 31: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  },
  {
    topic: "Taste",
    module: "part3",
    question: "Clinical vignette 32: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 33: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 34: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
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
    question: "Clinical vignette 35: focal CNS lesion — expected deficit?",
    options: [
      "Deficit matches stated pathway",
      "Unrelated sensory modality loss only",
      "Global coma from single cranial nerve",
      "Purely metabolic with no localization"
    ],
    correct: 0,
    explanation: "Deficit matches stated pathway",
    wrongExplanations: [
      "",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion.",
      "This pattern does not match the anatomy of the stated lesion."
    ]
  }
];

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
