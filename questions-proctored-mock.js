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
    correctIndices: [0],
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
    correctIndices: [1],
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
    correctIndices: [0],
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
    correctIndices: [0, 1],
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
    topic: "Gustation",
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
    correctIndices: [0, 1],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Selecting this contradicts the keyed mechanism for statement 3.",
      ""
    ]
  }
,
  {
    type: "selectAll",
    topic: "Ion Channels",
    module: "part1",
    question: "Voltage-gated Na⁺ channel gating: select all that apply.",
    options: [
      "Activation opens the pore on depolarization",
      "Inactivation can close the pore during sustained depolarization",
      "They are equally permeable to Ca²⁺ and Na⁺ at peak open probability",
      "Tetrodotoxin blocks many neuronal isoforms from the extracellular side"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Peak Na⁺ selectivity excludes meaningful Ca²⁺ flux through these channels.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Passive Properties",
    module: "part1",
    question: "Cable equation / length constant: select all correct.",
    options: [
      "λ = √(R_m / R_i)",
      "Doubling R_m with fixed R_i increases λ",
      "λ is unchanged if only C_m changes",
      "Distal synaptic EPSPs decay more when λ is short"
    ],
    correctIndices: [0, 1, 2, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Synaptic Plasticity",
    module: "part2",
    question: "Hebbian LTP at CA3–CA1 synapses: select all supported statements.",
    options: [
      "Coincident pre- and postsynaptic activity can strengthen AMPA responses",
      "NMDA receptors act as coincidence detectors via voltage-dependent Mg²⁺ block",
      "LTP requires immediate permanent silencing of all inhibitory interneurons",
      "Ca²⁺ entry through NMDA receptors can trigger kinase cascades"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Inhibition modulates induction but is not abolished globally for LTP.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Sensory Transduction",
    module: "part3",
    question: "Photoreceptor responses to light: select all true.",
    options: [
      "Rods hyperpolarize because light closes cGMP-gated channels",
      "Reduced glutamate release from photoreceptors depolarizes ON bipolar cells",
      "Light increases cGMP in the outer segment",
      "Dark current is carried partly by Na⁺ and Ca²⁺ influx"
    ],
    correctIndices: [0, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "ON bipolars depolarize when glutamate falls; that statement alone is false as written.",
      "Light lowers, not raises, cGMP.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Motor Systems",
    module: "part3",
    question: "Upper vs lower motor neuron signs: select all correct pairings.",
    options: [
      "UMN lesion → increased deep tendon reflexes",
      "LMN lesion → flaccid weakness with atrophy",
      "UMN lesion → fasciculations as the primary sign",
      "LMN lesion → reduced tone early"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Fasciculations point to LMN or anterior horn pathology, not classic UMN lesions.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Basal Ganglia",
    module: "part3",
    question: "Direct vs indirect pathway (simplified): select all accurate.",
    options: [
      "Direct pathway striatal cells are D1-like and facilitate thalamocortical drive",
      "Indirect pathway striatal cells are D2-like and tend to suppress movement",
      "Substantia nigra pars compacta dopamine loss favors indirect pathway activity in Parkinsonism",
      "Globus pallidus interna inhibition of thalamus is the only output of basal ganglia"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "GPi and SNr both provide inhibitory output; GPi is not the sole output nucleus."
    ]
  },
  {
    type: "selectAll",
    topic: "Autonomic Neuroscience",
    module: "part2",
    question: "Sympathetic vs parasympathetic ganglia: select all true.",
    options: [
      "Preganglionic sympathetic fibers can be myelinated and relatively short to the chain ganglia",
      "Parasympathetic preganglionic fibers are long and synapse near or in target organs",
      "All autonomic postganglionic neurons release ACh onto smooth muscle",
      "Nicotinic receptors mediate fast EPSPs in autonomic ganglia"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Most sympathetic postganglionic neurons release norepinephrine, not ACh (exceptions exist).",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Neurotransmitters",
    module: "part2",
    question: "GABAergic signaling: select all correct.",
    options: [
      "GABA_A receptors are ligand-gated Cl⁻ channels",
      "GABA_B receptors are metabotropic and can open K⁺ channels",
      "GABA always depolarizes mature CNS neurons because E_Cl is above rest",
      "Benzodiazepines positive-modulate many GABA_A receptors"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "In many mature neurons E_Cl is below rest, so GABA_A activation hyperpolarizes.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Development",
    module: "part2",
    question: "Activity-dependent refinement: select all that apply.",
    options: [
      "Binocular competition shapes ocular dominance columns",
      "Spontaneous retinal waves can drive wiring before vision",
      "Critical periods never close in sensory cortex",
      "Myelination timing can influence conduction delays in circuits"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Critical periods close or narrow for many sensory systems after experience.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Methods",
    module: "part3",
    question: "fMRI BOLD signal basics: select all accurate.",
    options: [
      "BOLD reflects blood oxygenation changes coupled to metabolism",
      "Increased neural activity locally can increase oxygenated hemoglobin relative to deoxyhemoglobin",
      "BOLD directly counts action potentials one-for-one",
      "Vascular dynamics blur temporal resolution compared to electrophysiology"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "BOLD is hemodynamic and indirect, not a spike counter.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Hearing",
    module: "part3",
    question: "Cochlear tuning: select all true.",
    options: [
      "Basilar membrane is stiffer at the base (high-frequency place)",
      "Outer hair cells provide active amplification",
      "All frequencies map to the apex only",
      "Inner hair cells primarily synapse onto afferents"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Tonotopy maps low frequencies to the apex and high to the base.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Sleep",
    module: "part3",
    question: "REM vs NREM physiology: select all correct.",
    options: [
      "REM shows muscle atonia in normal subjects",
      "NREM slow-wave sleep shows large-amplitude delta EEG",
      "REM EEG resembles quiet wakefulness in some bands",
      "Dreaming occurs exclusively in NREM stage 3"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Vivid dreaming is classically linked to REM, not exclusively to NREM3."
    ]
  },
  {
    type: "selectAll",
    topic: "Pain",
    module: "part3",
    question: "Nociceptive pathways: select all accurate.",
    options: [
      "First-order nociceptors can synapse in dorsal horn laminae I–II",
      "Spinothalamic tract carries pain and temperature",
      "All fast touch and pain share identical thickly myelinated fibers",
      "Central sensitization can widen receptive fields after injury"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Fast touch uses Aβ fibers; pain uses Aδ and C fibers.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Cerebellum",
    module: "part3",
    question: "Cerebellar motor learning signs: select all that apply.",
    options: [
      "Lateral cerebellar lesions can cause intention tremor",
      "Medial vermis lesions relate to truncal ataxia",
      "Cerebellar output is exclusively excitatory to spinal motor neurons",
      "Purkinje cells inhibit deep nuclei"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Deep nuclei are inhibited by Purkinje cells; final output is disynaptic and not direct excitation of LMNs.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Memory",
    module: "part3",
    question: "Hippocampal role in memory: select all supported.",
    options: [
      "Declarative/episodic encoding depends on hippocampal circuits",
      "Procedural skills like riding a bike rely primarily on hippocampus alone",
      "Bilateral medial temporal damage can cause anterograde amnesia",
      "Place cells fire when an animal occupies specific locations"
    ],
    correctIndices: [0, 2, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "Procedural memory involves striatum/cerebellum among other structures, not hippocampus alone.",
      "",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Neuroendocrine",
    module: "part3",
    question: "Hypothalamic–pituitary control: select all true.",
    options: [
      "Oxytocin is synthesized in hypothalamic neurons and released from posterior pituitary",
      "CRH from hypothalamus drives ACTH release from anterior pituitary",
      "Posterior pituitary secretes peptide hormones made locally in the gland",
      "Dopamine from hypothalamus inhibits prolactin release"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Posterior pituitary stores and releases hypothalamic peptides; it does not synthesize them.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Glial Cells",
    module: "part2",
    question: "Astrocyte functions: select all that apply.",
    options: [
      "K⁺ spatial buffering after neuronal firing",
      "Uptake of glutamate from synaptic cleft",
      "Generation of action potentials for long-range signaling like axons",
      "Formation of the glial limitans at the blood–brain barrier"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Astrocytes use graded calcium waves, not classic long-range APs in axons.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Retina",
    module: "part3",
    question: "Retinal circuitry: select all correct.",
    options: [
      "Horizontal cells provide lateral inhibition in the outer plexiform layer",
      "Amacrine cells modulate bipolar–ganglion synapses",
      "Ganglion cells are the output neurons of the retina",
      "Rods and cones both depolarize strongly to light"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Photoreceptors hyperpolarize to light; the statement reverses their response."
    ]
  },
  {
    type: "selectAll",
    topic: "Epilepsy",
    module: "part3",
    question: "Seizure mechanisms (conceptual): select all accurate.",
    options: [
      "Imbalance of excitation and inhibition can promote hypersynchrony",
      "Spread can involve thalamocortical loops",
      "All seizures require visible tonic–clonic movements",
      "Gap junction coupling can contribute to synchrony in some models"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Absence and focal impaired-awareness seizures may lack dramatic motor signs.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Neurodegeneration",
    module: "part3",
    question: "Alzheimer disease pathology: select all true.",
    options: [
      "Extracellular amyloid-β plaques are a hallmark",
      "Intracellular neurofibrillary tangles contain hyperphosphorylated tau",
      "Cholinergic basal forebrain neurons are vulnerable early",
      "Motor neuron loss in anterior horn is the primary lesion"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Anterior horn motor neuron loss defines ALS, not typical Alzheimer pathology."
    ]
  },
  {
    type: "selectAll",
    topic: "Language",
    module: "part3",
    question: "Aphasia profiles: select all correct pairings.",
    options: [
      "Broca → nonfluent speech with relatively preserved comprehension",
      "Wernicke → fluent but paraphasic speech with poor comprehension",
      "Conduction aphasia → impaired repetition with fluent speech",
      "Global aphasia → isolated dysarthria only"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Global aphasia affects fluency and comprehension broadly, not dysarthria alone."
    ]
  },
  {
    type: "selectAll",
    topic: "Vestibular",
    module: "part3",
    question: "Semicircular canal physiology: select all true.",
    options: [
      "Endolymph displacement deflects cupula and hair bundles",
      "Horizontal canal pairs detect yaw head rotation",
      "Canals directly measure linear translation like otolith organs",
      "Canal plane aligns with complementary contralateral canal"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Otolith organs detect linear acceleration and head tilt; canals detect angular acceleration.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Spinal Cord",
    module: "part3",
    question: "Brown-Séquard hemisection: select all expected below the lesion.",
    options: [
      "Ipsilateral loss of proprioception/vibration (dorsal columns)",
      "Contralateral loss of pain/temperature (spinothalamic)",
      "Ipsilateral UMN weakness",
      "Contralateral dorsal column loss"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Dorsal column fibers decussate in the medulla; loss is ipsilateral to the cord lesion."
    ]
  },
  {
    type: "selectAll",
    topic: "Neuromuscular",
    module: "part2",
    question: "Neuromuscular junction pharmacology: select all accurate.",
    options: [
      "Botulinum toxin cleaves SNARE proteins reducing ACh release",
      "Neostigmine inhibits acetylcholinesterase",
      "Curare-like agents block postsynaptic nicotinic receptors",
      "Lambert–Eaton syndrome increases quantal release via presynaptic Ca²⁺ channel antibodies"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Lambert–Eaton reduces release; myasthenia targets postsynaptic receptors."
    ]
  },
  {
    type: "selectAll",
    topic: "Rhythmic Motor",
    module: "part2",
    question: "Central pattern generators: select all true.",
    options: [
      "Can produce locomotor rhythms without sensory feedback",
      "Reciprocal inhibition helps alternate flexor/extensor bursts",
      "Require continuous cortical spiking for each muscle twitch in all species",
      "Can be modulated by descending and sensory inputs"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "CPGs can run subcortically; cortex modulates but does not drive every twitch.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Ion Homeostasis",
    module: "part1",
    question: "Na⁺/K⁺-ATPase: select all correct.",
    options: [
      "Exports 3 Na⁺ and imports 2 K⁺ per ATP hydrolyzed cycle (classic stoichiometry)",
      "Is electrogenic and contributes to resting potential",
      "Is the sole determinant of action potential peak amplitude",
      "Can be inhibited by cardiac glycosides like ouabain"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Peak amplitude is set mainly by Na⁺ channel gating and Na⁺ driving force, not pump stoichiometry alone.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Receptors",
    module: "part2",
    question: "Metabotropic glutamate receptors (group I example): select all true.",
    options: [
      "Often couple to Gq and can raise postsynaptic Ca²⁺",
      "Can modulate ionotropic receptor function",
      "Are always ligand-gated ion channels like AMPA",
      "Slow EPSPs/IPSPs can outlast fast ionotropic events"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Group I mGluRs are GPCRs, not ionotropic AMPA-like channels.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Olfactory System",
    module: "part3",
    question: "Olfactory transduction: select all accurate.",
    options: [
      "Odorants bind receptors on cilia of olfactory sensory neurons",
      "Golf activates adenylyl cyclase raising cAMP",
      "All olfactory receptor neurons express the same single receptor gene",
      "CNG channels admit Na⁺ and Ca²⁺ depolarizing the neuron"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Each OSN typically expresses one receptor type from a large gene family.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Gustation",
    module: "part3",
    question: "Taste coding: select all true.",
    options: [
      "Different taste qualities engage partially overlapping peripheral pathways",
      "Umami is often signaled by glutamate binding metabotropic receptors",
      "Sweet and bitter always share identical labeled lines with no overlap",
      "Brainstem gustatory nuclei receive primary afferents from VII, IX, and X"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Peripheral and central populations show overlap and combinatorial coding.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Computational",
    module: "part1",
    question: "Integrate-and-fire simplifications: select all that apply.",
    options: [
      "Threshold crossing triggers a stereotyped spike event",
      "Subthreshold dynamics often follow RC membrane properties",
      "Every dendritic branch is modeled with full Hodgkin–Huxley kinetics always",
      "Refractory period limits maximal firing rate"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Integrate-and-fire models deliberately omit full HH kinetics in dendrites.",
      ""
    ]
  }];

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
      "Increased motor firing (not implied by the circuit wiring described above.)",
      "Only neuromodulation (not implied by the circuit wiring described above.)",
      "Saltatory conduction in muscle (not implied by the circuit wiring described above.)"
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
      "Always decreases (not implied by the circuit wiring described above.)",
      "Unchanged always (not implied by the circuit wiring described above.)",
      "Only photoreceptor responds (not implied by the circuit wiring described above.)"
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
      "Co-activated equally (not implied by the circuit wiring described above.)",
      "Unrelated (not implied by the circuit wiring described above.)",
      "Only sensory firing (not implied by the circuit wiring described above.)"
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
      "Sensory input required every cycle always (not implied by the circuit wiring described above.)",
      "Only myelin generates rhythm (not implied by the circuit wiring described above.)",
      "Only cortex required each step (not implied by the circuit wiring described above.)"
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
      "Only postsynaptic K\u207a block always (not implied by the circuit wiring described above.)",
      "Only long-term depression (not implied by the circuit wiring described above.)",
      "Only gap junction opening (not implied by the circuit wiring described above.)"
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
      "+8 mV always (not implied by the circuit wiring described above.)",
      "\u22128 mV always (not implied by the circuit wiring described above.)",
      "0 mV always (not implied by the circuit wiring described above.)"
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
      "Same peak always (not implied by the circuit wiring described above.)",
      "Zero always (not implied by the circuit wiring described above.)",
      "Only inhibition results (not implied by the circuit wiring described above.)"
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
      "Guaranteed runaway activity (not implied by the circuit wiring described above.)",
      "Only LTP induction (not implied by the circuit wiring described above.)",
      "Only myelin repair (not implied by the circuit wiring described above.)"
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
      "All pixels fire equally (not implied by the circuit wiring described above.)",
      "Only photoreceptors spike (not implied by the circuit wiring described above.)",
      "Only cochlea tuned (not implied by the circuit wiring described above.)"
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
      "Only increases firing rate without bound (not implied by the circuit wiring described above.)",
      "Only blocks all input permanently (not implied by the circuit wiring described above.)",
      "Only affects glomeruli (not implied by the circuit wiring described above.)"
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
      "Only one motor neuron can ever fire (not implied by the circuit wiring described above.)",
      "Only inhibition spreads (not implied by the circuit wiring described above.)",
      "Only photoreceptor signal (not implied by the circuit wiring described above.)"
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
      "Motor neuron cannot integrate inputs (not implied by the circuit wiring described above.)",
      "Only one synapse matters always (not implied by the circuit wiring described above.)",
      "Only gap junctions converge (not implied by the circuit wiring described above.)"
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
      "Only Cl\u207b (not implied by the circuit wiring described above.)",
      "Only pump current (not implied by the circuit wiring described above.)",
      "Only gap junction (not implied by the circuit wiring described above.)"
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
      "Predominantly K\u207a only at all voltages (not implied by the circuit wiring described above.)",
      "No ionic currents (not implied by the circuit wiring described above.)",
      "Only Cl\u207b at all voltages (not implied by the circuit wiring described above.)"
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
      "Axon diameter only (not implied by the circuit wiring described above.)",
      "Only synaptic quanta (not implied by the circuit wiring described above.)",
      "Only myelin thickness without R_m (not implied by the circuit wiring described above.)"
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
      "Full action potential train (not implied by the circuit wiring described above.)",
      "Only synaptic vesicle fusion (not implied by the circuit wiring described above.)",
      "Only cochlear tuning (not implied by the circuit wiring described above.)"
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


const PROCTORED_MOCK_EXAM_POOL = [
  {
    type: "selectAll",
    topic: "Nernst Equation",
    module: "part1",
    question: "Proctored mock — Nernst at 37°C (61.54 mV/decade): select all true.",
    options: [
      "Raising external K⁺ makes E_K less negative",
      "E_Cl sign in the Nernst equation uses valence in the denominator",
      "Reversal potential is where net current for that ion is zero",
      "E_Na is always below rest in every cell type"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "E_Na is typically well above rest in neurons."
    ]
  },
  {
    type: "selectAll",
    topic: "Passive Properties",
    module: "part1",
    question: "Proctored mock — τ and λ: select all correct.",
    options: [
      "τ = R_m C_m",
      "λ increases if R_m rises with R_i fixed",
      "Higher leak conductance lengthens λ",
      "Shorter τ speeds voltage equilibration for a given current"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Higher leak lowers R_m and shortens λ.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Action Potentials",
    module: "part1",
    question: "Proctored mock — spike phases: select all accurate.",
    options: [
      "Na⁺ activation drives rapid depolarization",
      "Na⁺ inactivation contributes to repolarization",
      "K⁺ activation typically follows Na⁺ activation",
      "Resting potential is set solely by E_Na"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Resting is dominated by K⁺ leak and pump activity, not E_Na alone."
    ]
  },
  {
    type: "selectAll",
    topic: "Synaptic Transmission",
    module: "part2",
    question: "Proctored mock — quantal release: select all true.",
    options: [
      "Miniature events reflect single vesicles",
      "Evoked release is probabilistic",
      "Every active zone fuses exactly one vesicle per spike",
      "Ca²⁺ couples action potential to fusion"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Release probability and vesicle number vary; not exactly one.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Plasticity",
    module: "part2",
    question: "Proctored mock — LTD/LTP: select all supported.",
    options: [
      "Low-frequency pairing can weaken synapses (LTD)",
      "NMDA receptors detect coincident pre/post activity",
      "LTP never requires postsynaptic Ca²⁺",
      "Endocannabinoids can mediate some forms of retrograde signaling"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Postsynaptic Ca²⁺ rise is central to many LTP induction protocols.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Visual System",
    module: "part3",
    question: "Proctored mock — geniculate layers: select all true.",
    options: [
      "M and P streams remain partially segregated in LGN",
      "Contralateral eye layers alternate in cats/primates",
      "LGN receives only retinal input with no cortical feedback",
      "Magnocellular layers favor motion/transient responses"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Cortico-thalamic feedback modulates LGN relay cells.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Motor Systems",
    module: "part3",
    question: "Proctored mock — corticospinal tract: select all accurate.",
    options: [
      "Most fibers decussate in the medullary pyramids",
      "Lateral corticospinal tract controls skilled distal movement",
      "All corticospinal fibers remain ipsilateral without decussation",
      "Upper motor neuron lesions can increase reflex tone"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "A minority (ventral corticospinal) remains ipsilateral.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Basal Ganglia",
    module: "part3",
    question: "Proctored mock — Parkinsonism: select all true.",
    options: [
      "Dopamine loss in substantia nigra pars compacta is central",
      "Bradykinesia and rigidity are common",
      "Chorea is the hallmark of untreated Parkinson disease",
      "L-DOPA replaces a dopamine precursor"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Chorea links more to Huntington and other disorders.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Autonomic",
    module: "part2",
    question: "Proctored mock — autonomic outflow: select all correct.",
    options: [
      "Sympathetic chain ganglia lie paravertebrally",
      "Parasympathetic preganglionic fibers are long",
      "All postganglionic fibers release ACh on vascular smooth muscle",
      "Sacral outflow contributes to pelvic parasympathetic functions"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Most vascular smooth muscle gets NE from sympathetic fibers.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Methods",
    module: "part3",
    question: "Proctored mock — EEG vs unit recording: select all true.",
    options: [
      "Scalp EEG reflects synchronized population activity",
      "Single-unit recording resolves individual spike waveforms",
      "EEG has finer spatial resolution than fMRI always",
      "Local field potentials sit between single units and EEG"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "EEG is coarse spatially; fMRI can localize better at millimeter scale.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Hearing",
    module: "part3",
    question: "Proctored mock — auditory brainstem: select all accurate.",
    options: [
      "Cochlear nuclei are the first CNS relay for audition",
      "Superior olivary complex computes interaural time differences",
      "Inferior colliculus is part of the tectum in midbrain",
      "Primary auditory cortex is in occipital lobe"
    ],
    correctIndices: [0, 1, 2],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "",
      "Primary auditory cortex is temporal (Heschl gyrus), not occipital."
    ]
  },
  {
    type: "selectAll",
    topic: "Sleep",
    module: "part3",
    question: "Proctored mock — orexin/hypocretin: select all true.",
    options: [
      "Loss of orexin neurons links to narcolepsy with cataplexy",
      "Orexin stabilizes wakefulness",
      "Orexin is identical to melatonin",
      "Lateral hypothalamus contains orexin-producing neurons"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Melatonin is a pineal hormone with different receptors.",
      ""
    ]
  },
  {
    type: "selectAll",
    topic: "Pain",
    module: "part3",
    question: "Proctored mock — gate control (conceptual): select all supported.",
    options: [
      "Non-nociceptive input can modulate pain transmission",
      "Substantia gelatinosa involves interneurons in dorsal horn",
      "Pain is immutable once peripheral nociceptors fire",
      "Descending pathways can inhibit dorsal horn neurons"
    ],
    correctIndices: [0, 1, 3],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      "",
      "",
      "Central and descending modulation strongly shape pain.",
      ""
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Right optic tract compression. Expected visual field defect:",
    options: [
      "Bitemporal hemianopia — not the best match to the stem.",
      "Left monocular blindness — not the best match to the stem.",
      "Right superior quadrantanopia — not the best match to the stem.",
      "Left homonymous hemianopia"
    ],
    correct: 3,
    explanation: "Optic tract carries contralateral visual field information.",
    wrongExplanations: [
      "This choice (Bitemporal hemianopia) does not follow from the stem.",
      "This choice (Left monocular blindness) does not follow from the stem.",
      "This choice (Right superior quadrantanopia) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Pituitary adenoma compressing optic chiasm.",
    options: [
      "Left inferior quadrantanopia",
      "Bitemporal hemianopia",
      "Left monocular blindness",
      "Right homonymous hemianopia"
    ],
    correct: 1,
    explanation: "Nasal retinal fibers cross in chiasm; compression knocks out temporal fields.",
    wrongExplanations: [
      "This choice (Left inferior quadrantanopia) does not follow from the stem.",
      "",
      "This choice (Left monocular blindness) does not follow from the stem.",
      "This choice (Right homonymous hemianopia) does not follow from the stem."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Right Meyer's loop (temporal lobe) destroyed.",
    options: [
      "Left monocular blindness — not the best match to the stem.",
      "Right homonymous hemianopia — not the best match to the stem.",
      "Bitemporal loss — not the best match to the stem.",
      "Left superior quadrantanopia"
    ],
    correct: 3,
    explanation: "Meyer's loop carries upper quadrant fibers; temporal lesion → contralateral superior quadrantanopia.",
    wrongExplanations: [
      "This choice (Left monocular blindness) does not follow from the stem.",
      "This choice (Right homonymous hemianopia) does not follow from the stem.",
      "This choice (Bitemporal loss) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Left medial lemniscus in pons.",
    options: [
      "Left hemiparesis only — not the best match to the stem.",
      "Right hemianopia — not the best match to the stem.",
      "Global aphasia — not the best match to the stem.",
      "Right loss of vibration/proprioception"
    ],
    correct: 3,
    explanation: "Medial lemniscus carries dorsal column information already decussated.",
    wrongExplanations: [
      "This choice (Left hemiparesis only) does not follow from the stem.",
      "This choice (Right hemianopia) does not follow from the stem.",
      "This choice (Global aphasia) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Right lateral medulla (PICA) syndrome.",
    options: [
      "Pure motor hemiplegia only",
      "Broca aphasia",
      "Bitemporal hemianopia",
      "Right Horner + ataxia + pain/temp loss on right face and left body"
    ],
    correct: 3,
    explanation: "Classic lateral medullary pattern mixes cranial nerve, cerebellar, and crossed spinothalamic findings.",
    wrongExplanations: [
      "This choice (Pure motor hemiplegia only) does not follow from the stem.",
      "This choice (Broca aphasia) does not follow from the stem.",
      "This choice (Bitemporal hemianopia) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Anterior spinal artery infarct at thoracic level.",
    options: [
      "Pure cerebellar ataxia — not the best match to the stem.",
      "Isolated dorsal column loss only — not the best match to the stem.",
      "Bilateral motor weakness with dissociated sensory loss (pain/temp) below lesion",
      "Third nerve palsy — not the best match to the stem."
    ],
    correct: 2,
    explanation: "ASA supplies anterior cord; motor and spinothalamic tracts affected bilaterally.",
    wrongExplanations: [
      "This choice (Pure cerebellar ataxia) does not follow from the stem.",
      "This choice (Isolated dorsal column loss only) does not follow from the stem.",
      "",
      "This choice (Third nerve palsy) does not follow from the stem."
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Left cerebellar hemisphere stroke.",
    options: [
      "Left-sided UMN spasticity pattern — not the best match to the stem.",
      "Right hemianopia — not the best match to the stem.",
      "Bitemporal hemianopia — not the best match to the stem.",
      "Left limb intention tremor and dysmetria"
    ],
    correct: 3,
    explanation: "Lateral cerebellum coordinates ipsilateral limb movement.",
    wrongExplanations: [
      "This choice (Left-sided UMN spasticity pattern) does not follow from the stem.",
      "This choice (Right hemianopia) does not follow from the stem.",
      "This choice (Bitemporal hemianopia) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: "Proctored mock — Left Broca area infarct in dominant hemisphere.",
    options: [
      "Pure alexia without motor deficit — not the best match to the stem.",
      "Bilateral deafness — not the best match to the stem.",
      "Nonfluent aphasia with relatively preserved comprehension",
      "Fluent paraphasic speech with poor comprehension — not the best match to the stem."
    ],
    correct: 2,
    explanation: "Broca area lesions impair speech production more than comprehension.",
    wrongExplanations: [
      "This choice (Pure alexia without motor deficit) does not follow from the stem.",
      "This choice (Bilateral deafness) does not follow from the stem.",
      "",
      "This choice (Fluent paraphasic speech with poor comprehension) does not follow from the stem."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Proctored mock — Feedforward inhibition: interneuron I inhibits principal P while both receive excitation. Net effect on P spike timing?",
    options: [
      "Identical to removing I",
      "Always prevents P from firing",
      "Narrows timing window for P to fire",
      "Forces P to fire before input arrives"
    ],
    correct: 2,
    explanation: "Feedforward inhibition delays or suppresses P unless excitation is strong and well timed.",
    wrongExplanations: [
      "This choice (Identical to removing I) does not follow from the stem.",
      "This choice (Always prevents P from firing) does not follow from the stem.",
      "",
      "This choice (Forces P to fire before input arrives) does not follow from the stem."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Proctored mock — Reciprocal inhibition between flexor and extensor CPG half-centers produces:",
    options: [
      "Random Poisson spikes only — not the best match to the stem.",
      "Simultaneous flexor/extensor co-contraction always",
      "Alternating burst patterns",
      "Complete silence — not the best match to the stem."
    ],
    correct: 2,
    explanation: "Reciprocal inhibition enforces alternation in many CPG models.",
    wrongExplanations: [
      "This choice (Random Poisson spikes only) does not follow from the stem.",
      "This choice (Simultaneous flexor/extensor co-contraction always) does not follow from the stem.",
      "",
      "This choice (Complete silence) does not follow from the stem."
    ]
  },
  {
    topic: "Neural Circuits",
    module: "part2",
    question: "Proctored mock — Disinhibition: inhibitory interneuron stops another inhibitor targeting P. P becomes:",
    options: [
      "Uncoupled from all synaptic input",
      "Hyperpolarized below rest always",
      "More likely to fire (disinhibited)",
      "Unable to integrate EPSPs"
    ],
    correct: 2,
    explanation: "Removing inhibition from P is disinhibition and can facilitate firing.",
    wrongExplanations: [
      "This choice (Uncoupled from all synaptic input) does not follow from the stem.",
      "This choice (Hyperpolarized below rest always) does not follow from the stem.",
      "",
      "This choice (Unable to integrate EPSPs) does not follow from the stem."
    ]
  },
  {
    topic: "Electrophysiology",
    module: "part1",
    question: "Proctored mock — TTX applied during current-clamp recording of action potential. Expected change?",
    options: [
      "Blocks only afterhyperpolarization",
      "Abolishes the Na⁺-dependent upstroke",
      "Converts spikes to calcium-only plateaus unchanged",
      "Increases peak amplitude"
    ],
    correct: 1,
    explanation: "TTX blocks voltage-gated Na⁺ channels required for the upstroke.",
    wrongExplanations: [
      "This choice (Blocks only afterhyperpolarization) does not follow from the stem.",
      "",
      "This choice (Converts spikes to calcium-only plateaus unchanged) does not follow from the stem.",
      "This choice (Increases peak amplitude) does not follow from the stem."
    ]
  },
  {
    topic: "Electrophysiology",
    module: "part1",
    question: "Proctored mock — Voltage clamp at 0 mV with normal gradients. Dominant inward current at peak of voltage step mimicking spike?",
    options: [
      "Sustained K⁺ current only",
      "Exclusive Cl⁻ current",
      "No currents because 0 mV is rest",
      "Large transient Na⁺ current"
    ],
    correct: 3,
    explanation: "At 0 mV, Na⁺ channels open producing inward current before K⁺ dominates repolarization.",
    wrongExplanations: [
      "This choice (Sustained K⁺ current only) does not follow from the stem.",
      "This choice (Exclusive Cl⁻ current) does not follow from the stem.",
      "This choice (No currents because 0 mV is rest) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Nernst Equation",
    module: "part1",
    question: "Proctored mock — [K⁺]o/[K⁺]i = 0.25 at 37°C. E_K is about:",
    options: [
      "+37 mV — not the best match to the stem.",
      "0 mV — not the best match to the stem.",
      "−90 mV — not the best match to the stem.",
      "−37 mV"
    ],
    correct: 3,
    explanation: "One decade ratio → ~61.5 mV; 0.25 outside/inside yields less negative than 140/4.",
    wrongExplanations: [
      "This choice (+37 mV) does not follow from the stem.",
      "This choice (0 mV) does not follow from the stem.",
      "This choice (−90 mV) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Nernst Equation",
    module: "part1",
    question: "Proctored mock — If E_K = −80 mV and V_m = −65 mV, opening K⁺ channels tends to:",
    options: [
      "Hyperpolarize toward E_K",
      "Depolarize toward 0 mV always",
      "Have no effect on V_m — not the best match to the stem.",
      "Clamp V_m to E_Na — not the best match to the stem."
    ],
    correct: 0,
    explanation: "Driving force moves V_m toward E_K when K⁺ conductance rises.",
    wrongExplanations: [
      "",
      "This choice (Depolarize toward 0 mV always) does not follow from the stem.",
      "This choice (Have no effect on V_m) does not follow from the stem.",
      "This choice (Clamp V_m to E_Na) does not follow from the stem."
    ]
  },
  {
    topic: "Goldman Equation",
    module: "part1",
    question: "Proctored mock — Only K⁺ permeant. V_m equals:",
    options: [
      "Always 0 mV",
      "E_Na",
      "E_K",
      "Average of all ions"
    ],
    correct: 2,
    explanation: "Goldman reduces to Nernst for a single permeant ion.",
    wrongExplanations: [
      "This choice (Always 0 mV) does not follow from the stem.",
      "This choice (E_Na) does not follow from the stem.",
      "",
      "This choice (Average of all ions) does not follow from the stem."
    ]
  },
  {
    topic: "Passive Properties",
    module: "part1",
    question: "Proctored mock — R_m doubles, C_m unchanged. τ:",
    options: [
      "Halves — not the best match to the stem.",
      "Quarters — not the best match to the stem.",
      "Unchanged — not the best match to the stem.",
      "Doubles"
    ],
    correct: 3,
    explanation: "τ = R_m C_m.",
    wrongExplanations: [
      "This choice (Halves) does not follow from the stem.",
      "This choice (Quarters) does not follow from the stem.",
      "This choice (Unchanged) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Passive Properties",
    module: "part1",
    question: "Proctored mock — EPSP 5 mV at soma, threshold −50 mV, rest −65 mV. Subthreshold?",
    options: [
      "Cannot tell — not the best match to the stem.",
      "Always triggers spike — not the best match to the stem.",
      "Yes — peak −60 mV",
      "No — exceeds threshold"
    ],
    correct: 2,
    explanation: "−65 + 5 = −60 mV, still above threshold −50.",
    wrongExplanations: [
      "This choice (Cannot tell) does not follow from the stem.",
      "This choice (Always triggers spike) does not follow from the stem.",
      "",
      "This choice (No) does not follow from the stem."
    ]
  },
  {
    topic: "Synaptic Transmission",
    module: "part2",
    question: "Proctored mock — Mini amplitude 1 mV; 100 quanta released synchronously (linear sum). Peak EPSP ~",
    options: [
      "100 mV (unrealistic saturation ignored)",
      "0 mV",
      "10 mV",
      "1 mV"
    ],
    correct: 0,
    explanation: "Linear summation of 100 × 1 mV quanta in this idealized stem.",
    wrongExplanations: [
      "",
      "This choice (0 mV) does not follow from the stem.",
      "This choice (10 mV) does not follow from the stem.",
      "This choice (1 mV) does not follow from the stem."
    ]
  },
  {
    topic: "Synaptic Transmission",
    module: "part2",
    question: "Proctored mock — Botulinum at NMJ reduces:",
    options: [
      "Postsynaptic nicotinic receptors",
      "Muscle AChE only",
      "Muscle action potential voltage-gated Na⁺",
      "Quantal ACh release"
    ],
    correct: 3,
    explanation: "Botulinum cleaves SNAREs presynaptically.",
    wrongExplanations: [
      "This choice (Postsynaptic nicotinic receptors) does not follow from the stem.",
      "This choice (Muscle AChE only) does not follow from the stem.",
      "This choice (Muscle action potential voltage-gated Na⁺) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Plasticity",
    module: "part2",
    question: "Proctored mock — Blocking NMDA receptors during high-frequency pairing most directly prevents:",
    options: [
      "Resting K⁺ leak — not the best match to the stem.",
      "LTP induction",
      "Retrograde endocannabinoid release only",
      "Rod phototransduction"
    ],
    correct: 1,
    explanation: "NMDA coincidence detection is required for many LTP protocols.",
    wrongExplanations: [
      "This choice (Resting K⁺ leak) does not follow from the stem.",
      "",
      "This choice (Retrograde endocannabinoid release only) does not follow from the stem.",
      "This choice (Rod phototransduction) does not follow from the stem."
    ]
  },
  {
    topic: "Sensory Systems",
    module: "part3",
    question: "Proctored mock — Photoreceptor in dark is:",
    options: [
      "Spiking at 100 Hz — not the best match to the stem.",
      "Hyperpolarized below −80 mV always — not the best match to the stem.",
      "Depolarized with steady dark current",
      "Silent electrically — not the best match to the stem."
    ],
    correct: 2,
    explanation: "Dark current through cGMP-gated channels depolarizes photoreceptors.",
    wrongExplanations: [
      "This choice (Spiking at 100 Hz) does not follow from the stem.",
      "This choice (Hyperpolarized below −80 mV always) does not follow from the stem.",
      "",
      "This choice (Silent electrically) does not follow from the stem."
    ]
  },
  {
    topic: "Motor Systems",
    module: "part3",
    question: "Proctored mock — Lower motor neuron lesion causes:",
    options: [
      "Homonymous hemianopia — not the best match to the stem.",
      "Spasticity and hyperreflexia — not the best match to the stem.",
      "Flaccid weakness and hyporeflexia",
      "Bitemporal hemianopia — not the best match to the stem."
    ],
    correct: 2,
    explanation: "LMN loss reduces tone and reflexes locally.",
    wrongExplanations: [
      "This choice (Homonymous hemianopia) does not follow from the stem.",
      "This choice (Spasticity and hyperreflexia) does not follow from the stem.",
      "",
      "This choice (Bitemporal hemianopia) does not follow from the stem."
    ]
  },
  {
    topic: "Language",
    module: "part3",
    question: "Proctored mock — Wernicke area lesion in dominant hemisphere:",
    options: [
      "Fluent speech with poor comprehension",
      "Nonfluent speech",
      "Deafness",
      "Pure motor hemiplegia only"
    ],
    correct: 0,
    explanation: "Wernicke aphasia is fluent but incomprehensible with poor comprehension.",
    wrongExplanations: [
      "",
      "This choice (Nonfluent speech) does not follow from the stem.",
      "This choice (Deafness) does not follow from the stem.",
      "This choice (Pure motor hemiplegia only) does not follow from the stem."
    ]
  },
  {
    topic: "Vestibular",
    module: "part3",
    question: "Proctored mock — Horizontal canal excitatory ampullopetal cupula deflection:",
    options: [
      "Activates photoreceptors",
      "Increases afferent firing rate",
      "Silences all afferents permanently",
      "Opens blood–brain barrier"
    ],
    correct: 1,
    explanation: "Cupula deflection modulates hair cell transmitter release to vestibular nerve.",
    wrongExplanations: [
      "This choice (Activates photoreceptors) does not follow from the stem.",
      "",
      "This choice (Silences all afferents permanently) does not follow from the stem.",
      "This choice (Opens blood–brain barrier) does not follow from the stem."
    ]
  },
  {
    topic: "Neuroendocrine",
    module: "part3",
    question: "Proctored mock — ADH release site:",
    options: [
      "Posterior pituitary (from hypothalamic axons)",
      "Pineal gland — not the best match to the stem.",
      "Adrenal medulla — not the best match to the stem.",
      "Anterior pituitary somatotropes — not the best match to the stem."
    ],
    correct: 0,
    explanation: "ADH is made in hypothalamus and released neurohypophysis.",
    wrongExplanations: [
      "",
      "This choice (Pineal gland) does not follow from the stem.",
      "This choice (Adrenal medulla) does not follow from the stem.",
      "This choice (Anterior pituitary somatotropes) does not follow from the stem."
    ]
  },
  {
    topic: "Glial Cells",
    module: "part2",
    question: "Proctored mock — Myelin produced by oligodendrocytes in CNS:",
    options: [
      "Shortens λ in axons always — not the best match to the stem.",
      "Is identical to Schwann cell myelin functionally",
      "Prevents all K⁺ leak — not the best match to the stem.",
      "Speeds saltatory conduction"
    ],
    correct: 3,
    explanation: "Myelin increases effective membrane resistance and enables saltatory conduction.",
    wrongExplanations: [
      "This choice (Shortens λ in axons always) does not follow from the stem.",
      "This choice (Is identical to Schwann cell myelin functionally) does not follow from the stem.",
      "This choice (Prevents all K⁺ leak) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Rhythmic Motor",
    module: "part2",
    question: "Proctored mock — Central pattern generator for walking can:",
    options: [
      "Require continuous conscious control for each step always — not the best match to the stem.",
      "Produce alternating left/right bursts without sensory feedback",
      "Only operate in REM sleep — not the best match to the stem.",
      "Not be modulated by brainstem — not the best match to the stem."
    ],
    correct: 1,
    explanation: "CPGs generate basic rhythms; descending input modulates them.",
    wrongExplanations: [
      "This choice (Require continuous conscious control for each step always) does not follow from the stem.",
      "",
      "This choice (Only operate in REM sleep) does not follow from the stem.",
      "This choice (Not be modulated by brainstem) does not follow from the stem."
    ]
  },
  {
    topic: "Integrative",
    module: "part2",
    question: "Proctored mock — Opening GABA_A channels at rest when E_Cl is below V_m tends to:",
    options: [
      "Hyperpolarize or stabilize V_m",
      "Depolarize toward E_Na",
      "Abolish all synaptic release",
      "Block the Na⁺/K⁺ pump only"
    ],
    correct: 0,
    explanation: "Inhibitory chloride conductance pulls V_m toward E_Cl.",
    wrongExplanations: [
      "",
      "This choice (Depolarize toward E_Na) does not follow from the stem.",
      "This choice (Abolish all synaptic release) does not follow from the stem.",
      "This choice (Block the Na⁺/K⁺ pump only) does not follow from the stem."
    ]
  },
  {
    topic: "Integrative",
    module: "part1",
    question: "Proctored mock — Increasing membrane capacitance with fixed R_m changes τ by:",
    options: [
      "Decreasing τ",
      "Eliminating λ entirely",
      "Leaving τ unchanged always",
      "Increasing τ (τ = R_m C_m)"
    ],
    correct: 3,
    explanation: "τ scales with C_m.",
    wrongExplanations: [
      "This choice (Decreasing τ) does not follow from the stem.",
      "This choice (Eliminating λ entirely) does not follow from the stem.",
      "This choice (Leaving τ unchanged always) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Integrative",
    module: "part2",
    question: "Proctored mock — Presynaptic metabotropic autoreceptors typically:",
    options: [
      "Reduce transmitter release when activated",
      "Guarantee maximal release — not the best match to the stem.",
      "Convert EPSPs to action potentials in glia — not the best match to the stem.",
      "Open voltage-gated Na⁺ in postsynaptic spine always"
    ],
    correct: 0,
    explanation: "Autoreceptors provide negative feedback on release.",
    wrongExplanations: [
      "",
      "This choice (Guarantee maximal release) does not follow from the stem.",
      "This choice (Convert EPSPs to action potentials in glia) does not follow from the stem.",
      "This choice (Open voltage-gated Na⁺ in postsynaptic spine always) does not follow from the stem."
    ]
  },
  {
    topic: "Integrative",
    module: "part3",
    question: "Proctored mock — Unilateral labyrinthectomy acutely causes:",
    options: [
      "Broca aphasia — not the best match to the stem.",
      "Bitemporal hemianopia — not the best match to the stem.",
      "Vertigo and nystagmus toward the lesioned side (acute)",
      "Flaccid paralysis of contralateral face only — not the best match to the stem."
    ],
    correct: 2,
    explanation: "Acute vestibular deafferentation produces vertigo and nystagmus.",
    wrongExplanations: [
      "This choice (Broca aphasia) does not follow from the stem.",
      "This choice (Bitemporal hemianopia) does not follow from the stem.",
      "",
      "This choice (Flaccid paralysis of contralateral face only) does not follow from the stem."
    ]
  },
  {
    topic: "Integrative",
    module: "part3",
    question: "Proctored mock — Hippocampal place fields fire when:",
    options: [
      "Light hits photoreceptors — not the best match to the stem.",
      "The animal occupies a preferred location in an environment",
      "Odorants bind only in glomeruli of cerebellum — not the best match to the stem.",
      "Muscle spindles stretch only — not the best match to the stem."
    ],
    correct: 1,
    explanation: "Place cells encode spatial location.",
    wrongExplanations: [
      "This choice (Light hits photoreceptors) does not follow from the stem.",
      "",
      "This choice (Odorants bind only in glomeruli of cerebellum) does not follow from the stem.",
      "This choice (Muscle spindles stretch only) does not follow from the stem."
    ]
  },
  {
    topic: "Integrative",
    module: "part2",
    question: "Proctored mock — Electrical synapses (gap junctions) allow:",
    options: [
      "Only Cl⁻ extrusion by NKCC",
      "Only retrograde peptide signaling",
      "Only myelination of axons",
      "Bidirectional ion flow and fast coupling"
    ],
    correct: 3,
    explanation: "Gap junctions couple cells electrically.",
    wrongExplanations: [
      "This choice (Only Cl⁻ extrusion by NKCC) does not follow from the stem.",
      "This choice (Only retrograde peptide signaling) does not follow from the stem.",
      "This choice (Only myelination of axons) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Integrative",
    module: "part1",
    question: "Proctored mock — In voltage clamp, holding potential is:",
    options: [
      "The same as spike threshold always",
      "Measured only in muscle spindles",
      "The command potential the amplifier enforces across the membrane",
      "Always +40 mV only"
    ],
    correct: 2,
    explanation: "The clamp holds V_m at the command potential.",
    wrongExplanations: [
      "This choice (The same as spike threshold always) does not follow from the stem.",
      "This choice (Measured only in muscle spindles) does not follow from the stem.",
      "",
      "This choice (Always +40 mV only) does not follow from the stem."
    ]
  },
  {
    topic: "Integrative",
    module: "part3",
    question: "Proctored mock — Contralateral hemiparesis with UMN signs suggests:",
    options: [
      "Cochlear nucleus infarct only — not the best match to the stem.",
      "Lesion of optic nerve only — not the best match to the stem.",
      "Pure LMN anterior horn loss only — not the best match to the stem.",
      "Lesion in corticospinal tract above the spinal segment"
    ],
    correct: 3,
    explanation: "UMN weakness is contralateral to corticospinal tract lesions rostral to decussation.",
    wrongExplanations: [
      "This choice (Cochlear nucleus infarct only) does not follow from the stem.",
      "This choice (Lesion of optic nerve only) does not follow from the stem.",
      "This choice (Pure LMN anterior horn loss only) does not follow from the stem.",
      ""
    ]
  },
  {
    topic: "Integrative",
    module: "part2",
    question: "Proctored mock — End-plate potential at NMJ is:",
    options: [
      "Generated by rods and cones — not the best match to the stem.",
      "Identical to inhibitory IPSP in spinal neuron — not the best match to the stem.",
      "All-or-none in the muscle membrane always before initiation — not the best match to the stem.",
      "Graded and suprathreshold for muscle fiber in normal conditions"
    ],
    correct: 3,
    explanation: "EPP is graded but typically triggers muscle AP.",
    wrongExplanations: [
      "This choice (Generated by rods and cones) does not follow from the stem.",
      "This choice (Identical to inhibitory IPSP in spinal neuron) does not follow from the stem.",
      "This choice (All-or-none in the muscle membrane always before initiation) does not follow from the stem.",
      ""
    ]
  }
];
