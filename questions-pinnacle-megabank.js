// Pinnacle megabank — regenerate: python3 _generate_pinnacle_megabank.py
// ~300 unique hard MCQs across Parts 1–3.

const PINNACLE_MEGA_POOL = [
  {
    topic: "Nernst Equation",
    question: "At 37°C, [K⁺]i = 140 mM and [K⁺]o = 5 mM. E_K is closest to:",
    options: [

      "-89 mV",
      "-49 mV",
      "+60 mV",
      "0 mV",
    ],
    correct: 0,
    explanation: "E_K = 61.54·log10(5/140) ≈ -89.1 mV.",
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C, [K⁺]i = 140 mM and [K⁺]o = 2.5 mM. E_K is closest to:",
    options: [

      "0 mV",
      "-68 mV",
      "-108 mV",
      "+60 mV",
    ],
    correct: 2,
    explanation: "E_K = 61.54·log10(2.5/140) ≈ -107.6 mV.",
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C, [Na⁺]i = 15 mM and [Na⁺]o = 145 mM. E_Na is closest to:",
    options: [

      "31 mV",
      "+61 mV",
      "−70 mV",
      "+10 mV",
    ],
    correct: 1,
    explanation: "E_Na ≈ +60.6 mV.",
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C (z=2), [Ca²⁺]i = 0.10 µM and [Ca²⁺]o = 2 mM. E_Ca is closest to:",
    options: [

      "+30 mV",
      "+132 mV",
      "0 mV",
      "−70 mV",
    ],
    correct: 1,
    explanation: "E_Ca ≈ +132.3 mV.",
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C (z=2), [Ca²⁺]i = 0.05 µM and [Ca²⁺]o = 1.5 mM. E_Ca is closest to:",
    options: [

      "+30 mV",
      "−70 mV",
      "0 mV",
      "+138 mV",
    ],
    correct: 3,
    explanation: "E_Ca ≈ +137.8 mV.",
  },
  {
    topic: "Goldman Equation",
    question: "With standard K⁺/Na⁺ concentrations and P_K:P_Na = 1:0.05, resting V_m is best described as:",
    options: [

      "Near −65 mV",
      "At E_K (≈ −90 mV) exactly",
      "Exactly 0 mV",
      "Closer to E_Na (+60 mV)",
    ],
    correct: 0,
    explanation: "With typical [K⁺]i/o and [Na⁺]i/o, Goldman at high P_K but finite P_Na gives V_m ≈ −65 mV—not the full Nernst E_K.",
  },
  {
    topic: "Goldman Equation",
    question: "With standard K⁺/Na⁺ concentrations and P_Cl equals P_K with E_Cl negative to rest, resting V_m is best described as:",
    options: [

      "V_m undefined",
      "V_m pulled toward E_Cl if P_Cl high",
      "V_m equals E_Na always",
      "Only electrical synapses set resting potential",
    ],
    correct: 1,
    explanation: "Goldman equation weights ions by permeability.",
  },
  {
    topic: "Cable Properties",
    question: "Passive cable: Doubling R_m with R_i fixed. The expected effect is:",
    options: [

      "τ equals λ",
      "λ halves",
      "λ unchanged",
      "λ increases (√(R_m/R_i))",
    ],
    correct: 3,
    explanation: "λ increases (√(R_m/R_i))",
  },
  {
    topic: "Cable Properties",
    question: "Passive cable: Doubling C_m with fixed g_leak. The expected effect is:",
    options: [

      "No effect on τ",
      "τ halves",
      "λ doubles always",
      "τ = R_m C_m doubles",
    ],
    correct: 3,
    explanation: "τ = R_m C_m doubles",
  },
  {
    topic: "Cable Properties",
    question: "Passive cable: Increased axial resistance R_a. The expected effect is:",
    options: [

      "λ increases",
      "Only τ changes",
      "λ decreases",
      "Spikes fail always",
    ],
    correct: 2,
    explanation: "λ decreases",
  },
  {
    topic: "Pharmacology",
    question: "Application of TTX on squid giant axon produces which outcome?",
    options: [

      "Blocks voltage-gated Na⁺; no action potentials",
      "Depolarizes to +60 mV",
      "Blocks K⁺ only",
      "Opens Cl⁻ channels",
    ],
    correct: 0,
    explanation: "Blocks voltage-gated Na⁺; no action potentials",
  },
  {
    topic: "Pharmacology",
    question: "Application of TEA during an action potential produces which outcome?",
    options: [

      "Slows repolarization; broadens spike",
      "Hyperpolarizes to E_K instantly",
      "Blocks Na⁺ inactivation",
      "Prevents AP initiation only at AIS",
    ],
    correct: 0,
    explanation: "Slows repolarization; broadens spike",
  },
  {
    topic: "Pharmacology",
    question: "Application of Ouabain on a neuron produces which outcome?",
    options: [

      "Instant hyperpolarization",
      "Selective GABA block",
      "Blocks synaptic vesicle fusion",
      "Stops Na⁺/K⁺ pump; gradual depolarization",
    ],
    correct: 3,
    explanation: "Stops Na⁺/K⁺ pump; gradual depolarization",
  },
  {
    topic: "Pharmacology",
    question: "Application of 4-AP (K⁺ channel blocker) produces which outcome?",
    options: [

      "Eliminates EPSPs",
      "Mimics myelin",
      "Blocks Na⁺ entry",
      "Prolongs repolarization / increases firing",
    ],
    correct: 3,
    explanation: "Prolongs repolarization / increases firing",
  },
  {
    topic: "Synaptic Transmission",
    question: "In AMPA receptor activation at rest Mg²⁺, the best description is:",
    options: [

      "Requires presynaptic effect",
      "Ionotropic Cl⁻ influx",
      "Fast EPSC; NMDA still blocked by Mg²⁺",
      "Requires g-protein signaling",
    ],
    correct: 2,
    explanation: "Fast EPSC; NMDA still blocked by Mg²⁺",
  },
  {
    topic: "Synaptic Transmission",
    question: "In NMDA receptor with strong depolarization, the best description is:",
    options: [

      "Always closed at rest",
      "Requires metabotropic",
      "Blocks all LTP",
      "Mg²⁺ block relieved; Ca²⁺ entry possible",
    ],
    correct: 3,
    explanation: "Mg²⁺ block relieved; Ca²⁺ entry possible",
  },
  {
    topic: "Synaptic Transmission",
    question: "In GABA<sub>A</sub> at rest when E_Cl ≈ −70 mV, the best description is:",
    options: [

      "Cl⁻ influx; inhibition/shunting",
      "Always excitatory",
      "Requires presynaptic",
      "Light raises cGMP and keeps CNG channels open",
    ],
    correct: 0,
    explanation: "Cl⁻ influx; inhibition/shunting",
  },
  {
    topic: "Synaptic Transmission",
    question: "In GABA<sub>B</sub> receptor activation, the best description is:",
    options: [

      "G-protein; often opens K⁺ / closes Ca²⁺",
      "Requires in retina",
      "Fast ionotropic Cl⁻",
      "Na⁺ channel opening",
    ],
    correct: 0,
    explanation: "G-protein; often opens K⁺ / closes Ca²⁺",
  },
  {
    topic: "Synaptic Transmission",
    question: "In Nicotinic ACh at NMJ, the best description is:",
    options: [

      "Fast cationic EPSP leading to endplate potential",
      "Glutamate release only",
      "Metabotropic only",
      "Pure hyperpolarization",
    ],
    correct: 0,
    explanation: "Fast cationic EPSP leading to endplate potential",
  },
  {
    topic: "Synaptic Transmission",
    question: "In Botulinum toxin at motor synapse, the best description is:",
    options: [

      "Postsynaptic receptor block",
      "Myelin damage",
      "Cleaves SNAREs; blocks vesicle fusion",
      "Na⁺ channel toxin",
    ],
    correct: 2,
    explanation: "Cleaves SNAREs; blocks vesicle fusion",
  },
  {
    topic: "Synaptic Transmission",
    question: "In α-Latrotoxin (excess release), the best description is:",
    options: [

      "Requires inhibits GABA",
      "Blocks Ca²⁺ channels",
      "Massive vesicle release; depletion possible",
      "Prevents AP propagation",
    ],
    correct: 2,
    explanation: "Massive vesicle release; depletion possible",
  },
  {
    topic: "Synaptic Transmission",
    question: "In Strengthening an synapse via LTP protocol, the best description is:",
    options: [

      "Requires in photoreceptors",
      "Requires presynaptic Na⁺ increase",
      "Light raises cGMP and keeps CNG channels open",
      "Postsynaptic Ca²⁺ via NMDA + AMPA cooperation",
    ],
    correct: 3,
    explanation: "Postsynaptic Ca²⁺ via NMDA + AMPA cooperation",
  },
  {
    topic: "Synaptic Integration",
    question: "Two EPSPs 5 ms apart at one synapse:",
    options: [

      "Requires inhibition possible",
      "No summation ever",
      "Temporal summation if within τ",
      "Requires spatial summation",
    ],
    correct: 2,
    explanation: "Temporal summation if within τ",
  },
  {
    topic: "Synaptic Integration",
    question: "EPSP at dendrite vs soma (same amplitude locally):",
    options: [

      "Distal EPSP smaller at soma (cable filter)",
      "Distal always larger",
      "Identical at AIS always",
      "Requires gap junctions matter",
    ],
    correct: 0,
    explanation: "Distal EPSP smaller at soma (cable filter)",
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition during an EPSP:",
    options: [

      "Increased EPSP always",
      "Reduced EPSP amplitude via increased conductance",
      "Only hyperpolarization without conductance change",
      "Blocks all spikes permanently",
    ],
    correct: 1,
    explanation: "Reduced EPSP amplitude via increased conductance",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Left optic nerve transection. Expected deficit:",
    options: [

      "Blindness in left eye",
      "Bitemporal hemianopia",
      "Right homonymous hemianopia",
      "Left superior quadrantanopia",
    ],
    correct: 0,
    explanation: "Left optic nerve transection → Blindness in left eye.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Optic chiasm midline compression. Expected deficit:",
    options: [

      "Right homonymous hemianopia",
      "Bitemporal hemianopia",
      "Macular sparing only",
      "Left monocular blindness",
    ],
    correct: 1,
    explanation: "Optic chiasm midline compression → Bitemporal hemianopia.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Right optic tract lesion. Expected deficit:",
    options: [

      "Ipsilateral quadrantanopia",
      "Right monocular blindness",
      "Bitemporal loss",
      "Left homonymous hemianopia",
    ],
    correct: 3,
    explanation: "Right optic tract lesion → Left homonymous hemianopia.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Left Meyer's loop (temporal lobe) damage. Expected deficit:",
    options: [

      "Bitemporal hemianopia",
      "Left superior quadrantanopia",
      "Right monocular blindness",
      "Right superior quadrantanopia",
    ],
    correct: 3,
    explanation: "Left Meyer's loop (temporal lobe) damage → Right superior quadrantanopia.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Right occipital lobe (V1) lesion. Expected deficit:",
    options: [

      "Pure alexia only",
      "Right monocular blindness",
      "Left homonymous hemianopia",
      "Bitemporal hemianopia",
    ],
    correct: 2,
    explanation: "Right occipital lobe (V1) lesion → Left homonymous hemianopia.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Complete left medial lemniscus in medulla. Expected deficit:",
    options: [

      "Contralateral loss of touch/proprioception",
      "Bilateral blindness",
      "Ipsilateral face pain loss",
      "Pure aphasia",
    ],
    correct: 0,
    explanation: "Complete left medial lemniscus in medulla → Contralateral loss of touch/proprioception.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Left spinothalamic tract at T8. Expected deficit:",
    options: [

      "Deafness",
      "Ipsilateral proprioception loss",
      "Bilateral UMN weakness only",
      "Contralateral pain/temperature loss below lesion",
    ],
    correct: 3,
    explanation: "Left spinothalamic tract at T8 → Contralateral pain/temperature loss below lesion.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Brown-Séquard hemisection at T10 (right). Expected deficit:",
    options: [

      "Ipsilateral UMN weakness + DCML loss",
      "Pure cerebellar ataxia",
      "Requires autonomic loss",
      "Only bilateral flaccid paralysis",
    ],
    correct: 0,
    explanation: "Brown-Séquard hemisection at T10 (right) → Ipsilateral UMN weakness + DCML loss; contralateral pain loss.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Anterior spinal artery infarct. Expected deficit:",
    options: [

      "Isolated proprioception loss only",
      "Pure ataxia",
      "Requires autonomic symptoms",
      "Bilateral motor + spinothalamic loss",
    ],
    correct: 3,
    explanation: "Anterior spinal artery infarct → Bilateral motor + spinothalamic loss; dorsal columns spared.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Right cerebellar hemisphere lesion. Expected deficit:",
    options: [

      "Contralateral hemiparesis",
      "Bitemporal hemianopia",
      "Ipsilateral limb ataxia (planning/timing)",
      "Broca aphasia",
    ],
    correct: 2,
    explanation: "Right cerebellar hemisphere lesion → Ipsilateral limb ataxia (planning/timing).",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Cerebellar vermis lesion. Expected deficit:",
    options: [

      "Truncal/gait ataxia",
      "Ipsilateral arm intention tremor only",
      "Homonymous hemianopia",
      "Hyperreflexia with Babinski",
    ],
    correct: 0,
    explanation: "Cerebellar vermis lesion → Truncal/gait ataxia.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Bilateral hippocampal damage. Expected deficit:",
    options: [

      "Deafness",
      "Anterograde declarative memory impairment",
      "Color blindness",
      "Pure motor weakness",
    ],
    correct: 1,
    explanation: "Bilateral hippocampal damage → Anterograde declarative memory impairment.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Substantia nigra dopamine loss. Expected deficit:",
    options: [

      "Pure sensory neglect",
      "Bradykinesia and rigidity",
      "Hyperreflexia only",
      "Homonymous hemianopia",
    ],
    correct: 1,
    explanation: "Substantia nigra dopamine loss → Bradykinesia and rigidity.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Left Broca area damage. Expected deficit:",
    options: [

      "Pure alexia",
      "Nonfluent aphasia; comprehension relatively spared",
      "Fluent nonsense speech",
      "Right hemianopia only",
    ],
    correct: 1,
    explanation: "Left Broca area damage → Nonfluent aphasia; comprehension relatively spared.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Left Wernicke area damage. Expected deficit:",
    options: [

      "Deafness",
      "Pure motor neglect",
      "Nonfluent speech",
      "Fluent but impaired comprehension",
    ],
    correct: 3,
    explanation: "Left Wernicke area damage → Fluent but impaired comprehension.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: MLF lesion (left). Expected deficit:",
    options: [

      "Monocular blindness",
      "Internuclear ophthalmoplegia",
      "Facial paralysis only",
      "Bitemporal hemianopia",
    ],
    correct: 1,
    explanation: "MLF lesion (left) → Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus).",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Right CN VI nucleus lesion. Expected deficit:",
    options: [

      "Optic chiasm syndrome",
      "Pure aphasia",
      "Horizontal gaze palsy toward lesion side / ipsilateral abduction deficit",
      "Requires hearing loss",
    ],
    correct: 2,
    explanation: "Right CN VI nucleus lesion → Horizontal gaze palsy toward lesion side / ipsilateral abduction deficit.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Unilateral vestibular nerve lesion. Expected deficit:",
    options: [

      "Vertigo and imbalance toward lesion",
      "Homonymous hemianopia",
      "Spastic paralysis only",
      "Pure aphasia",
    ],
    correct: 0,
    explanation: "Unilateral vestibular nerve lesion → Vertigo and imbalance toward lesion; nystagmus.",
  },
  {
    topic: "Clinical Neuroanatomy",
    question: "Lesion: Left lateral pontine syndrome (AICA). Expected deficit:",
    options: [

      "Ipsilateral face pain/temp + cerebellar signs",
      "Pure motor weakness only",
      "Bitemporal hemianopia",
      "Broca aphasia",
    ],
    correct: 0,
    explanation: "Left lateral pontine syndrome (AICA) → Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss.",
  },
  {
    topic: "Sensory Systems",
    question: "Photoreceptor in darkness:",
    options: [

      "Spiking at 100 Hz",
      "Releases ACh only",
      "Hyperpolarized like bipolar ON cells always",
      "Relatively depolarized; glutamate release ongoing",
    ],
    correct: 3,
    explanation: "Relatively depolarized; glutamate release ongoing",
  },
  {
    topic: "Sensory Systems",
    question: "Hair cell stereocilia deflection toward tallest row:",
    options: [

      "Complete silence always",
      "Increased firing rate in auditory nerve",
      "Requires na⁺ pump stops",
      "Requires pain fibers activate",
    ],
    correct: 1,
    explanation: "Increased firing rate in auditory nerve",
  },
  {
    topic: "Sensory Systems",
    question: "Olfactory receptor binding odorant:",
    options: [

      "Requires electrical synapse",
      "Requires in cerebellum",
      "G-protein cascade → cAMP → channel opening",
      "Direct gap junction to cortex",
    ],
    correct: 2,
    explanation: "G-protein cascade → cAMP → channel opening",
  },
  {
    topic: "Sensory Systems",
    question: "Pacinian corpuscle high-frequency vibration:",
    options: [

      "Slow adaptation only",
      "Requires in retina",
      "Requires nociceptor response",
      "Rapid adaptation; phasic firing",
    ],
    correct: 3,
    explanation: "Rapid adaptation; phasic firing",
  },
  {
    topic: "Methods",
    question: "Voltage clamp at −40 mV with TTX and K⁺ channels available:",
    options: [

      "Mostly K⁺ current isolated if Na⁺ blocked",
      "Photoreceptor current only",
      "Requires capacitive current forever",
      "Requires cl⁻ without gradient",
    ],
    correct: 0,
    explanation: "Mostly K⁺ current isolated if Na⁺ blocked",
  },
  {
    topic: "Methods",
    question: "Current clamp with brief hyperpolarizing step:",
    options: [

      "Subthreshold voltage change without spikes",
      "Requires cochlear amplification",
      "Requires synaptic vesicle fusion",
      "Always full AP train",
    ],
    correct: 0,
    explanation: "Subthreshold voltage change without spikes",
  },
  {
    topic: "Methods",
    question: "Dual whole-cell recording of connected cells:",
    options: [

      "Can measure gap junction coupling or monosynaptic latency",
      "Requires measures bone density",
      "Requires measures myelin thickness",
      "Requires measures glomeruli size",
    ],
    correct: 0,
    explanation: "Can measure gap junction coupling or monosynaptic latency",
  },
  {
    topic: "Action Potentials",
    question: "Inactivation of Na⁺ channels during a long train:",
    options: [

      "Spike amplitude may decline; frequency adaptation",
      "Resting potential becomes +60 mV",
      "Requires photoreceptors fire",
      "Spikes grow without bound",
    ],
    correct: 0,
    explanation: "Spike amplitude may decline; frequency adaptation",
  },
  {
    topic: "Action Potentials",
    question: "Hyperpolarized resting V_m near E_K:",
    options: [

      "More Na⁺ channels always open",
      "Requires k⁺ channels disappear",
      "Fewer Na⁺ channels available from closed state",
      "Requires cl⁻ channels open",
    ],
    correct: 2,
    explanation: "Fewer Na⁺ channels available from closed state",
  },
  {
    topic: "Action Potentials",
    question: "Ectopic spike initiation in demyelinated axon:",
    options: [

      "Requires in dendrites always",
      "Requires in glomeruli",
      "Impossible without nodes",
      "Can occur where excitability is high along axon",
    ],
    correct: 3,
    explanation: "Can occur where excitability is high along axon",
  },
  {
    topic: "Action Potentials",
    question: "Antidromic vs orthodromic propagation:",
    options: [

      "Same biophysics; direction follows refractory tail",
      "Orthodromic only in retina",
      "Antidromic",
      "Requires gap junctions propagate",
    ],
    correct: 0,
    explanation: "Same biophysics; direction follows refractory tail",
  },
  {
    topic: "Action Potentials",
    question: "Absolute refractory period primarily reflects:",
    options: [

      "Requires photopigment recovery",
      "Na⁺ inactivation preventing immediate re-firing",
      "Requires synaptic depression",
      "Requires k⁺ leak",
    ],
    correct: 1,
    explanation: "Na⁺ inactivation preventing immediate re-firing",
  },
  {
    topic: "Action Potentials",
    question: "Relative refractory period:",
    options: [

      "Requires muscle spindle stretch",
      "No stimulus can fire cell",
      "Requires cl⁻ influx",
      "Stronger stimulus needed; K⁺ still elevated",
    ],
    correct: 3,
    explanation: "Stronger stimulus needed; K⁺ still elevated",
  },
  {
    topic: "Action Potentials",
    question: "Anode break excitation after hyperpolarization:",
    options: [

      "Requires gABA release",
      "Requires cochlear tuning",
      "Permanent silence",
      "Na⁺ channels recover from inactivation",
    ],
    correct: 3,
    explanation: "Na⁺ channels recover from inactivation; can fire on repolarization",
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best defined as:",
    options: [

      "Voltage where net inward current triggers regenerative Na⁺ activation",
      "Fixed at 0 mV always",
      "Rod outer segments generate all-or-none spikes in darkness",
      "Same as E_K always",
    ],
    correct: 0,
    explanation: "Voltage where net inward current triggers regenerative Na⁺ activation",
  },
  {
    topic: "Action Potentials",
    question: "Safety factor for propagation in myelinated axon:",
    options: [

      "Myelin blocks all current",
      "Requires dendrites propagate",
      "Exactly one node required always",
      "Multiple nodes can support propagation if one fails",
    ],
    correct: 3,
    explanation: "Multiple nodes can support propagation if one fails",
  },
  {
    topic: "Action Potentials",
    question: "Temperature increase on squid axon:",
    options: [

      "Resting potential fixed at 0 mV",
      "Kinetics faster; shorter AP width often",
      "Requires photoreceptors change",
      "AP width always doubles",
    ],
    correct: 1,
    explanation: "Kinetics faster; shorter AP width often",
  },
  {
    topic: "Action Potentials",
    question: "Local anesthetic block of small vs large fibers:",
    options: [

      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Large fibers always blocked first",
      "Small myelinated/C fibers often blocked at lower exposure (use-dependent)",
      "No use dependence",
    ],
    correct: 2,
    explanation: "Small myelinated/C fibers often blocked at lower exposure (use-dependent)",
  },
  {
    topic: "Action Potentials",
    question: "Accommodation during slow depolarizing ramp:",
    options: [

      "Requires affects cochlea basilar membrane",
      "Requires affects glomeruli",
      "Inactivation reduces firing despite depolarization",
      "Increases firing without limit",
    ],
    correct: 2,
    explanation: "Inactivation reduces firing despite depolarization",
  },
  {
    topic: "Action Potentials",
    question: "Post-tetanic potentiation (short-term):",
    options: [

      "Requires gap junction opening",
      "Postsynaptic Na⁺ deletion",
      "Presynaptic Ca²⁺ buildup increases release briefly",
      "Requires lTP in hippocampus forever",
    ],
    correct: 2,
    explanation: "Presynaptic Ca²⁺ buildup increases release briefly",
  },
  {
    topic: "Action Potentials",
    question: "Synaptic fatigue after high-frequency stimulation:",
    options: [

      "Depletion of readily releasable vesicles",
      "Requires myelin loss",
      "Unlimited vesicle supply always",
      "Requires photopigment bleaching",
    ],
    correct: 0,
    explanation: "Depletion of readily releasable vesicles",
  },
  {
    topic: "Action Potentials",
    question: "Dendritic Na⁺ spike in some pyramidal neurons:",
    options: [

      "Can boost distal signal toward soma",
      "Never occurs in CNS",
      "Requires in olfactory bulb",
      "Requires in NMJ",
    ],
    correct: 0,
    explanation: "Can boost distal signal toward soma",
  },
  {
    topic: "Action Potentials",
    question: "Backpropagating action potential into dendrites:",
    options: [

      "Blocked by myelin on dendrites",
      "Requires in muscle spindles",
      "Requires in photoreceptors",
      "Can activate dendritic channels and plasticity rules",
    ],
    correct: 3,
    explanation: "Can activate dendritic channels and plasticity rules",
  },
  {
    topic: "Action Potentials",
    question: "Ephaptic coupling between unmyelinated fibers:",
    options: [

      "Requires in retina exclusively",
      "Requires in cerebellum exclusively",
      "Extracellular fields can influence neighbors weakly",
      "Stronger than gap junctions always",
    ],
    correct: 2,
    explanation: "Extracellular fields can influence neighbors weakly",
  },
  {
    topic: "Pharmacology",
    question: "Bicuculline applied to a CNS slice blocks which effect?",
    options: [

      "Myelin compaction",
      "GABA_A-mediated fast IPSPs",
      "Voltage-gated Na⁺ inactivation",
      "Nicotinic EPSPs only",
    ],
    correct: 1,
    explanation: "GABA_A-mediated fast IPSPs",
  },
  {
    topic: "Pharmacology",
    question: "Picrotoxin and bicuculline both disrupt inhibition primarily by targeting:",
    options: [

      "Glutamate transporters",
      "GABA_A receptor–channel function",
      "Voltage-gated Ca²⁺ channels",
      "GABA_B Gi/o coupling only",
    ],
    correct: 1,
    explanation: "GABA_A receptor–channel function",
  },
  {
    topic: "Pharmacology",
    question: "Strychnine causes convulsions mainly by blocking:",
    options: [

      "Glycine receptors in spinal cord",
      "Dopamine reuptake transporters",
      "Muscarinic receptors in heart",
      "AMPA receptors in cortex",
    ],
    correct: 0,
    explanation: "Glycine receptors in spinal cord",
  },
  {
    topic: "Pharmacology",
    question: "Benzodiazepines enhance GABAergic inhibition by:",
    options: [

      "Inactivating Na⁺ channels irreversibly",
      "Increasing GABA_A channel open frequency (allosteric)",
      "Opening KCNQ channels directly",
      "Blocking GABA reuptake",
    ],
    correct: 1,
    explanation: "Increasing GABA_A channel open frequency (allosteric)",
  },
  {
    topic: "Pharmacology",
    question: "Barbiturates at anesthetic doses differ from benzodiazepines because they can:",
    options: [

      "Selectively block NMDA only at all doses",
      "Activate dopamine D1 receptors",
      "Prolong GABA_A channel open time directly at high dose",
      "Prevent all K⁺ flux",
    ],
    correct: 2,
    explanation: "Prolong GABA_A channel open time directly at high dose",
  },
  {
    topic: "Pharmacology",
    question: "Atropine blocks muscarinic receptors; expected peripheral effect includes:",
    options: [

      "Bradycardia and miosis",
      "Tachycardia and reduced salivation",
      "Bronchoconstriction",
      "Increased gastric motility",
    ],
    correct: 1,
    explanation: "Tachycardia and reduced salivation",
  },
  {
    topic: "Pharmacology",
    question: "Neostigmine reverses neuromuscular blockade by:",
    options: [

      "Blocking nicotinic receptors",
      "Opening voltage-gated K⁺ channels",
      "Cleaving SNARE proteins",
      "Inhibiting acetylcholinesterase at the NMJ",
    ],
    correct: 3,
    explanation: "Inhibiting acetylcholinesterase at the NMJ",
  },
  {
    topic: "Pharmacology",
    question: "Succinylcholine produces initial fasciculations because it:",
    options: [

      "Hyperpolarizes muscle to E_K",
      "Depolarizes the motor endplate (nicotinic agonist)",
      "Inhibits ryanodine receptors only",
      "Blocks acetylcholine release",
    ],
    correct: 1,
    explanation: "Depolarizes the motor endplate (nicotinic agonist)",
  },
  {
    topic: "Pharmacology",
    question: "Dantrolene treats malignant hyperthermia by reducing:",
    options: [

      "Central dopamine synthesis",
      "Na⁺ channel density in neurons",
      "Ca²⁺ release from sarcoplasmic reticulum in muscle",
      "Glutamate release in hippocampus",
    ],
    correct: 2,
    explanation: "Ca²⁺ release from sarcoplasmic reticulum in muscle",
  },
  {
    topic: "Pharmacology",
    question: "Reserpine depletes monoamine stores by inhibiting:",
    options: [

      "COMT in synaptic cleft",
      "Dopamine β-hydroxylase only",
      "MAO-A in mitochondria only",
      "Vesicular monoamine transporter (VMAT)",
    ],
    correct: 3,
    explanation: "Vesicular monoamine transporter (VMAT)",
  },
  {
    topic: "Pharmacology",
    question: "Amphetamine increases synaptic catecholamines primarily by:",
    options: [

      "Reversing DAT/NET transporters and promoting release",
      "Blocking all voltage-gated Na⁺ channels",
      "Opening GABA_A receptors",
      "Inhibiting acetylcholinesterase",
    ],
    correct: 0,
    explanation: "Reversing DAT/NET transporters and promoting release",
  },
  {
    topic: "Pharmacology",
    question: "Cocaine's acute psychoactive motor effect is linked most to:",
    options: [

      "GABA_B activation in striatum",
      "Blockade of dopamine reuptake (DAT)",
      "Permanent Na⁺ channel destruction",
      "Muscarinic blockade in spinal cord",
    ],
    correct: 1,
    explanation: "Blockade of dopamine reuptake (DAT)",
  },
  {
    topic: "Pharmacology",
    question: "Haloperidol treats psychosis mainly through:",
    options: [

      "D2 dopamine receptor antagonism",
      "Nicotinic agonism in cortex",
      "Glycine transporter blockade",
      "NMDA receptor potentiation",
    ],
    correct: 0,
    explanation: "D2 dopamine receptor antagonism",
  },
  {
    topic: "Pharmacology",
    question: "L-DOPA helps Parkinsonism because it:",
    options: [

      "Blocks subthalamic nucleus firing permanently",
      "Directly activates all serotonin receptors",
      "Replaces lost acetylcholine at NMJ",
      "Crosses the BBB and is converted to dopamine in striatum",
    ],
    correct: 3,
    explanation: "Crosses the BBB and is converted to dopamine in striatum",
  },
  {
    topic: "Pharmacology",
    question: "Carbidopa is co-administered with L-DOPA to:",
    options: [

      "Inhibit peripheral DOPA decarboxylase",
      "Cross the BBB faster than L-DOPA",
      "Open K_ATP channels in pancreas",
      "Block MAO-B in all tissues equally",
    ],
    correct: 0,
    explanation: "Inhibit peripheral DOPA decarboxylase",
  },
  {
    topic: "Pharmacology",
    question: "Selegiline (low dose) can augment L-DOPA by inhibiting:",
    options: [

      "Acetylcholinesterase at NMJ",
      "GABA transaminase",
      "VMAT2 in all neurons",
      "MAO-B in brain, slowing dopamine breakdown",
    ],
    correct: 3,
    explanation: "MAO-B in brain, slowing dopamine breakdown",
  },
  {
    topic: "Pharmacology",
    question: "SSRIs increase serotonin signaling chiefly by:",
    options: [

      "Opening 5-HT3 channels directly",
      "Blocking SERT reuptake",
      "Blocking all dopamine receptors",
      "Depleting vesicular 5-HT",
    ],
    correct: 1,
    explanation: "Blocking SERT reuptake",
  },
  {
    topic: "Pharmacology",
    question: "Ketamine's rapid antidepressant actions are often attributed to:",
    options: [

      "Requires mu-opioid receptor agonism",
      "Permanent GABA_A blockade",
      "Irreversible MAO inhibition",
      "NMDA receptor antagonism and downstream synaptic effects",
    ],
    correct: 3,
    explanation: "NMDA receptor antagonism and downstream synaptic effects",
  },
  {
    topic: "Pharmacology",
    question: "Morphine analgesia in the spinal dorsal horn involves:",
    options: [

      "Blocking all K⁺ channels in DRG",
      "AMPA receptor potentiation on nociceptors",
      "Mu-opioid receptor–mediated inhibition of pain transmission",
      "Opening TRPV1 channels",
    ],
    correct: 2,
    explanation: "Mu-opioid receptor–mediated inhibition of pain transmission",
  },
  {
    topic: "Pharmacology",
    question: "Naloxone reverses opioid overdose by:",
    options: [

      "Inhibiting COX enzymes",
      "Activating GABA_B in VTA",
      "Blocking Na⁺ channels like TTX",
      "Competitive antagonism at opioid receptors",
    ],
    correct: 3,
    explanation: "Competitive antagonism at opioid receptors",
  },
  {
    topic: "Pharmacology",
    question: "Caffeine opposes sleepiness largely by antagonizing:",
    options: [

      "Nicotinic receptors at NMJ",
      "Adenosine A1/A2A receptors",
      "Voltage-gated Ca²⁺ channels in SNARE release",
      "Glycine receptors in cord",
    ],
    correct: 1,
    explanation: "Adenosine A1/A2A receptors",
  },
  {
    topic: "Pharmacology",
    question: "Ethanol potentiates GABA_A and inhibits NMDA; at high dose this tends to:",
    options: [

      "Cause generalized seizures via NMDA potentiation",
      "Depress CNS function (sedation, ataxia)",
      "Selectively enhance dopamine only in cortex",
      "Increase REM without change to slow waves",
    ],
    correct: 1,
    explanation: "Depress CNS function (sedation, ataxia)",
  },
  {
    topic: "Pharmacology",
    question: "Phenylephrine as an alpha-1 agonist typically causes:",
    options: [

      "Hyperpolarization of all neurons to E_K",
      "Bronchodilation via β2 receptors",
      "Bradycardia via M2 receptors",
      "Vasoconstriction and increased blood pressure",
    ],
    correct: 3,
    explanation: "Vasoconstriction and increased blood pressure",
  },
  {
    topic: "Pharmacology",
    question: "Propranolol reduces tremor and tachycardia by blocking:",
    options: [

      "Alpha-1 receptors exclusively",
      "D2 receptors in striatum",
      "Beta-adrenergic receptors",
      "Muscarinic receptors in heart only",
    ],
    correct: 2,
    explanation: "Beta-adrenergic receptors",
  },
  {
    topic: "Pharmacology",
    question: "Nifedipine lowers blood pressure primarily by blocking:",
    options: [

      "Kir channels in glia only",
      "T-type Ca²⁺ in thalamus only",
      "L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
      "Na⁺ channels in cardiac pacemaker only",
    ],
    correct: 2,
    explanation: "L-type voltage-gated Ca²⁺ channels in vascular smooth muscle",
  },
  {
    topic: "Pharmacology",
    question: "Verapamil differs from nifedipine partly because verapamil also:",
    options: [

      "Blocks all glutamate receptors",
      "Activates VMAT",
      "Slows AV conduction",
      "Permanently opens KCNQ channels",
    ],
    correct: 2,
    explanation: "Slows AV conduction (cardiac L-type Ca²⁺ block)",
  },
  {
    topic: "Pharmacology",
    question: "Zolpidem aids sleep mainly through:",
    options: [

      "Irreversible NMDA blockade",
      "Serotonin reuptake inhibition",
      "GABA_A α1-subunit–preferring positive modulation",
      "D2 receptor agonism",
    ],
    correct: 2,
    explanation: "GABA_A α1-subunit–preferring positive modulation",
  },
  {
    topic: "Pharmacology",
    question: "Memantine in Alzheimer's disease is thought to act by:",
    options: [

      "Depleting acetylcholine stores",
      "Blocking all AMPA receptors",
      "Opening L-type Ca²⁺ channels",
      "Uncompetitive NMDA antagonism (moderate channel block)",
    ],
    correct: 3,
    explanation: "Uncompetitive NMDA antagonism (moderate channel block)",
  },
  {
    topic: "Pharmacology",
    question: "Donepezil improves cognition in Alzheimer's by inhibiting:",
    options: [

      "Butyrylcholinesterase only in muscle",
      "VMAT2",
      "Acetylcholinesterase",
      "GABA transaminase",
    ],
    correct: 2,
    explanation: "Acetylcholinesterase",
  },
  {
    topic: "Pharmacology",
    question: "Riluzole in ALS may prolong survival partly by reducing:",
    options: [

      "Myelin basic protein expression",
      "Cochlear outer hair cell motility",
      "Glutamate excitotoxicity",
      "All dopamine synthesis",
    ],
    correct: 2,
    explanation: "Glutamate excitotoxicity (e.g., Na⁺ channel effects on release)",
  },
  {
    topic: "Pharmacology",
    question: "Tetrabenazine reduces chorea in Huntington's by depleting:",
    options: [

      "Monoamines via VMAT2 inhibition",
      "GABA via GAD blockade",
      "Glutamate via EAAT overactivation",
      "Acetylcholine via hemicholinium",
    ],
    correct: 0,
    explanation: "Monoamines via VMAT2 inhibition",
  },
  {
    topic: "Pharmacology",
    question: "Levetiracetam binds SV2A; this antiseizure action likely alters:",
    options: [

      "Muscarinic M1 exclusively in heart",
      "Synaptic vesicle release probability",
      "GABA_A benzodiazepine site only",
      "Ryanodine receptors in muscle only",
    ],
    correct: 1,
    explanation: "Synaptic vesicle release probability",
  },
  {
    topic: "Pharmacology",
    question: "Carbamazepine treats trigeminal neuralgia partly by:",
    options: [

      "Stabilizing inactivated Na⁺ channels (use-dependent block)",
      "Opening KCNQ channels irreversibly",
      "Blocking all Ca²⁺ channels equally",
      "Activating glycine receptors",
    ],
    correct: 0,
    explanation: "Stabilizing inactivated Na⁺ channels (use-dependent block)",
  },
  {
    topic: "Pharmacology",
    question: "Phenytoin reduces seizure spread primarily through:",
    options: [

      "Permanent NMDA removal",
      "GABA transporter inhibition only",
      "Na⁺ channel block limiting high-frequency firing",
      "NMJ acetylcholinesterase inhibition",
    ],
    correct: 2,
    explanation: "Na⁺ channel block limiting high-frequency firing",
  },
  {
    topic: "Pharmacology",
    question: "Valproate has multiple mechanisms including:",
    options: [

      "Increased GABA tone and Na⁺/Ca²⁺ channel effects",
      "Requires dopamine reuptake blockade",
      "Irreversible VMAT blockade only",
      "Requires aMPA potentiation",
    ],
    correct: 0,
    explanation: "Increased GABA tone and Na⁺/Ca²⁺ channel effects",
  },
  {
    topic: "Pharmacology",
    question: "Baclofen reduces spasticity mainly by activating:",
    options: [

      "GABA_B receptors (Gi/o) in spinal cord",
      "AMPA on Ia afferents exclusively",
      "Nicotinic receptors on interneurons",
      "GABA_A receptors on muscle fibers",
    ],
    correct: 0,
    explanation: "GABA_B receptors (Gi/o) in spinal cord",
  },
  {
    topic: "Pharmacology",
    question: "Gabapentinoids bind alpha-2-delta subunits of:",
    options: [

      "Ryanodine receptor",
      "Voltage-gated Ca²⁺ channels (modulating release)",
      "D2 receptor",
      "SERT transporter",
    ],
    correct: 1,
    explanation: "Voltage-gated Ca²⁺ channels (modulating release)",
  },
  {
    topic: "Pharmacology",
    question: "Local anesthetic use-dependence means block is stronger when:",
    options: [

      "Channels open frequently during firing",
      "Only glial K⁺ channels open",
      "Myelin thickness doubles",
      "Membrane is hyperpolarized for minutes",
    ],
    correct: 0,
    explanation: "Channels open frequently during firing",
  },
  {
    topic: "Pharmacology",
    question: "Capsaicin desensitization reduces pain by:",
    options: [

      "Overactivating TRPV1 leading to nociceptor defunctionalization",
      "Blocking all Na⁺ channels permanently",
      "Opening GABA_A on muscle spindles",
      "Preventing all glutamate release in DCML",
    ],
    correct: 0,
    explanation: "Overactivating TRPV1 leading to nociceptor defunctionalization",
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin and saxitoxin both block:",
    options: [

      "GABA transporters",
      "Voltage-gated Na⁺ channels",
      "Nicotinic receptors at NMJ only",
      "KCNQ channels exclusively",
    ],
    correct: 1,
    explanation: "Voltage-gated Na⁺ channels",
  },
  {
    topic: "Pharmacology",
    question: "Apamin blocks SK channels; expected neuronal effect:",
    options: [

      "Increased excitability and altered spike timing",
      "Requires photoreceptor hyperpolarization",
      "Requires myelination loss",
      "Complete inability to depolarize",
    ],
    correct: 0,
    explanation: "Increased excitability and altered spike timing",
  },
  {
    topic: "Pharmacology",
    question: "D-AP5 blocks NMDA receptors; pairing-induced hippocampal LTP is:",
    options: [

      "Enhanced regardless of voltage",
      "Blocked only in cerebellum",
      "Impaired when NMDA-dependent Ca²⁺ influx is required",
      "Unchanged because only AMPA matters always",
    ],
    correct: 2,
    explanation: "Impaired when NMDA-dependent Ca²⁺ influx is required",
  },
  {
    topic: "Pharmacology",
    question: "CNQX blocks AMPA/kainate; fast EPSCs at many glutamatergic synapses:",
    options: [

      "Are unchanged because NMDA carries all fast current",
      "Are greatly reduced or abolished",
      "Depend on gap junctions only",
      "Become pure GABA_B responses",
    ],
    correct: 1,
    explanation: "Are greatly reduced or abolished",
  },
  {
    topic: "Pharmacology",
    question: "Diazoxide opens K_ATP channels in beta cells, causing:",
    options: [

      "Requires glucagon release",
      "Depolarization and insulin surge",
      "Permanent Na⁺ channel opening",
      "Hyperpolarization and reduced insulin release",
    ],
    correct: 3,
    explanation: "Hyperpolarization and reduced insulin release",
  },
  {
    topic: "Pharmacology",
    question: "Sulfonylureas stimulate insulin release by:",
    options: [

      "Opening all GABA_A channels in pancreas",
      "Activating D2 receptors in liver",
      "Closing K_ATP → beta-cell depolarization → Ca²⁺ influx",
      "Blocking VMAT in islets",
    ],
    correct: 2,
    explanation: "Closing K_ATP → beta-cell depolarization → Ca²⁺ influx",
  },
  {
    topic: "Neural Circuits",
    question: "In the direct pathway of basal ganglia, striatal D1 MSNs tend to:",
    options: [

      "Hyperpolarize motor cortex directly",
      "Excite STN to increase GPi output",
      "Block all cerebellar output",
      "Inhibit GPi/SNr, disinhibiting thalamus (facilitate movement)",
    ],
    correct: 3,
    explanation: "Inhibit GPi/SNr, disinhibiting thalamus (facilitate movement)",
  },
  {
    topic: "Neural Circuits",
    question: "The indirect pathway (D2 MSNs) promotes motor suppression by:",
    options: [

      "Eliminating dopamine release permanently",
      "Directly opening Na⁺ channels in muscle",
      "Disinhibiting STN → increased GPi/SNr inhibition of thalamus",
      "Blocking all sensory thalamus relay",
    ],
    correct: 2,
    explanation: "Disinhibiting STN → increased GPi/SNr inhibition of thalamus",
  },
  {
    topic: "Neural Circuits",
    question: "Dopamine loss in Parkinson's shifts basal ganglia balance toward:",
    options: [

      "Pure cerebellar ataxia only",
      "Complete loss of thalamus",
      "Enhanced direct pathway only",
      "Increased indirect pathway activity and bradykinesia",
    ],
    correct: 3,
    explanation: "Increased indirect pathway activity and bradykinesia",
  },
  {
    topic: "Neural Circuits",
    question: "STN deep brain stimulation often improves Parkinsonian symptoms by:",
    options: [

      "Replacing lost dopamine in substantia nigra",
      "Blocking all sensory input to M1",
      "Myelinating corticospinal axons",
      "Disrupting pathological basal ganglia–thalamus oscillations",
    ],
    correct: 3,
    explanation: "Disrupting pathological basal ganglia–thalamus oscillations",
  },
  {
    topic: "Neural Circuits",
    question: "Climbing fiber input to Purkinje cells primarily:",
    options: [

      "Carries proprioception from muscle spindles only",
      "Is the sole driver of simple spikes always",
      "Releases dopamine in deep nuclei",
      "Delivers powerful excitation and error-related signals",
    ],
    correct: 3,
    explanation: "Delivers powerful excitation and error-related signals",
  },
  {
    topic: "Neural Circuits",
    question: "Mossy fiber input to cerebellum carries:",
    options: [

      "Requires retinal ON/OFF channels",
      "Diverse sensory and motor-related information to granule cells",
      "Requires pain from spinothalamic tract",
      "Requires olfactory cAMP signals",
    ],
    correct: 1,
    explanation: "Diverse sensory and motor-related information to granule cells",
  },
  {
    topic: "Neural Circuits",
    question: "Purkinje cell simple spikes are driven mainly by:",
    options: [

      "Parallel fiber synaptic input",
      "Dopamine from VTA only",
      "Direct monosynaptic Ia afferents only",
      "Cochlear inner hair cells",
    ],
    correct: 0,
    explanation: "Parallel fiber synaptic input",
  },
  {
    topic: "Neural Circuits",
    question: "Cerebellar deep nuclei are the primary output because:",
    options: [

      "Climbing fibers bypass Purkinje cells entirely",
      "Vestibular nuclei have no connection",
      "Purkinje cells inhibit deep nuclei, gating cerebellar output",
      "Granule cells project directly to alpha motor neurons only",
    ],
    correct: 2,
    explanation: "Purkinje cells inhibit deep nuclei, gating cerebellar output",
  },
  {
    topic: "Neural Circuits",
    question: "The trisynaptic hippocampal circuit order is:",
    options: [

      "CA1 → dentate → subiculum → thalamus only",
      "Entorhinal cortex → dentate gyrus → CA3 → CA1",
      "Cerebellum → M1 → CA3",
      "Amygdala → hypothalamus → CA3 directly",
    ],
    correct: 1,
    explanation: "Entorhinal cortex → dentate gyrus → CA3 → CA1",
  },
  {
    topic: "Neural Circuits",
    question: "Place cells in CA1 fire maximally when:",
    options: [

      "Muscle spindle is silent only",
      "Basilar membrane is at cochlear apex only",
      "The animal occupies a specific location",
      "Retinal image motion is purely horizontal",
    ],
    correct: 2,
    explanation: "The animal occupies a specific location",
  },
  {
    topic: "Neural Circuits",
    question: "Grid cells in entorhinal cortex show:",
    options: [

      "Periodic firing fields tiling space hexagonally",
      "Orientation tuning like V1 simple cells only",
      "Pure frequency tuning like A1 only",
      "Requires nociceptive heat tuning",
    ],
    correct: 0,
    explanation: "Periodic firing fields tiling space hexagonally",
  },
  {
    topic: "Neural Circuits",
    question: "LGN relay cells carry:",
    options: [

      "Requires olfactory glomerular maps",
      "Visual information to primary visual cortex",
      "Requires nMJ endplate potentials",
      "Requires proprioception to cerebellum",
    ],
    correct: 1,
    explanation: "Visual information to primary visual cortex",
  },
  {
    topic: "Neural Circuits",
    question: "Thalamic reticular nucleus (TRN) provides:",
    options: [

      "Myelin to optic nerve",
      "Direct dopamine to striatum",
      "Excitatory drive to ventral horn only",
      "Inhibitory feedback/feedforward to relay nuclei",
    ],
    correct: 3,
    explanation: "Inhibitory feedback/feedforward to relay nuclei",
  },
  {
    topic: "Neural Circuits",
    question: "Corticothalamic feedback to sensory thalamus can:",
    options: [

      "Replace all peripheral transduction",
      "Eliminate need for Na⁺ channels",
      "Modulate relay gain and receptive fields",
      "Convert all EPSPs to Cl⁻-only events",
    ],
    correct: 2,
    explanation: "Modulate relay gain and receptive fields",
  },
  {
    topic: "Neural Circuits",
    question: "Superior colliculus deep layers are important for:",
    options: [

      "Orienting eye/head movements toward stimuli",
      "Glomerular odor discrimination only",
      "Cochlear amplification only",
      "Color constancy only in V4",
    ],
    correct: 0,
    explanation: "Orienting eye/head movements toward stimuli",
  },
  {
    topic: "Neural Circuits",
    question: "Default mode network is most active during:",
    options: [

      "Maximal stretch reflex activation",
      "Pure photoreceptor transduction",
      "NMJ blockade",
      "Rest and internally directed thought",
    ],
    correct: 3,
    explanation: "Rest and internally directed thought",
  },
  {
    topic: "Neural Circuits",
    question: "Layer 5 pyramidal neurons often:",
    options: [

      "Project subcortically and intracortically",
      "Fire only at 200 Hz without adaptation",
      "Are the only cells with gap junctions",
      "Receive only olfactory receptor input",
    ],
    correct: 0,
    explanation: "Project subcortically and intracortically",
  },
  {
    topic: "Neural Circuits",
    question: "Parvalbumin interneurons in cortex typically:",
    options: [

      "Are identical to Purkinje cells",
      "Carry proprioception to DCML",
      "Release glutamate at NMJ",
      "Provide fast perisomatic inhibition to pyramidal cells",
    ],
    correct: 3,
    explanation: "Provide fast perisomatic inhibition to pyramidal cells",
  },
  {
    topic: "Neural Circuits",
    question: "VTA → nucleus accumbens dopamine mediates:",
    options: [

      "Reward prediction and motivational salience",
      "Cochlear tuning only",
      "Purely conjugate eye movements only",
      "Requires cerebellar LTD",
    ],
    correct: 0,
    explanation: "Reward prediction and motivational salience",
  },
  {
    topic: "Neural Circuits",
    question: "Hypothalamic PVN neurons:",
    options: [

      "Release oxytocin/vasopressin and regulate autonomic/endocrine function",
      "Generate otoacoustic emissions",
      "Are sole source of NMJ acetylcholine",
      "Encode retinal receptive fields only",
    ],
    correct: 0,
    explanation: "Release oxytocin/vasopressin and regulate autonomic/endocrine function",
  },
  {
    topic: "Neural Circuits",
    question: "SCN circadian pacemaker synchronizes via:",
    options: [

      "Requires olfactory bulb oscillations",
      "Retinohypothalamic light input and internal gene loops",
      "Direct muscle spindle afferents",
      "Requires gap junctions in liver",
    ],
    correct: 1,
    explanation: "Retinohypothalamic light input and internal gene loops",
  },
  {
    topic: "Neural Circuits",
    question: "Amygdala lateral nucleus is critical for:",
    options: [

      "Generating AIS spikes exclusively",
      "Associating sensory cues with emotional significance",
      "Motor unit recruitment order only",
      "Computing E_K from concentrations",
    ],
    correct: 1,
    explanation: "Associating sensory cues with emotional significance",
  },
  {
    topic: "Neural Circuits",
    question: "Cerebellar flocculus is involved in:",
    options: [

      "Pain crossing in cord only",
      "VOR adaptation",
      "NMJ ACh packaging only",
      "Color opponency in retina only",
    ],
    correct: 1,
    explanation: "VOR adaptation",
  },
  {
    topic: "Neural Circuits",
    question: "Inferior olive climbing fibers are linked to:",
    options: [

      "Timing errors and cerebellar motor learning",
      "Photoreceptor bleaching only",
      "Requires glomerular OR binding",
      "Requires k⁺ Nernst potential",
    ],
    correct: 0,
    explanation: "Timing errors and cerebellar motor learning",
  },
  {
    topic: "Neural Circuits",
    question: "Red nucleus participates in:",
    options: [

      "Rubrospinal influence on limb flexor tone",
      "Purely visual stereopsis only",
      "Adult hippocampal neurogenesis always",
      "Requires inner ear endolymph production",
    ],
    correct: 0,
    explanation: "Rubrospinal influence on limb flexor tone",
  },
  {
    topic: "Neural Circuits",
    question: "Raphe serotonergic projections modulate:",
    options: [

      "Mood, sleep, and sensory gain broadly",
      "Requires rod disk shedding",
      "Requires outer hair cell length",
      "Requires nMJ quantal size",
    ],
    correct: 0,
    explanation: "Mood, sleep, and sensory gain broadly",
  },
  {
    topic: "Neural Circuits",
    question: "Locus coeruleus norepinephrine increases:",
    options: [

      "Only photoreceptor dark current elimination",
      "Arousal and signal-to-noise in many circuits",
      "Only glycine at NMJ",
      "Permanent hyperpolarization to E_K everywhere",
    ],
    correct: 1,
    explanation: "Arousal and signal-to-noise in many circuits",
  },
  {
    topic: "Neural Circuits",
    question: "Basal forebrain cholinergic neurons promote:",
    options: [

      "Requires spinal reflex reversal",
      "Cochlear map inversion",
      "Cortical arousal and attention",
      "Requires cerebellar simple spikes",
    ],
    correct: 2,
    explanation: "Cortical arousal and attention",
  },
  {
    topic: "Neural Circuits",
    question: "Internal capsule corticospinal lesion causes:",
    options: [

      "Pure Wernicke aphasia always",
      "Bitemporal hemianopia",
      "Ipsilateral proprioception loss only",
      "Contralateral UMN signs",
    ],
    correct: 3,
    explanation: "Contralateral UMN signs",
  },
  {
    topic: "Neural Circuits",
    question: "DCML pathway carries:",
    options: [

      "Fine touch, vibration, and proprioception to S1",
      "Requires nMJ EPSPs",
      "Pain and temperature only",
      "Requires smell to amygdala",
    ],
    correct: 0,
    explanation: "Fine touch, vibration, and proprioception to S1",
  },
  {
    topic: "Neural Circuits",
    question: "Spinoreticular tract contributes to:",
    options: [

      "Arousal and affective aspects of pain",
      "Fine two-point discrimination",
      "VOR slow phase only",
      "Photoreceptor glutamate in dark",
    ],
    correct: 0,
    explanation: "Arousal and affective aspects of pain",
  },
  {
    topic: "Neural Circuits",
    question: "Cuneate vs gracile nuclei divide:",
    options: [

      "High vs low sound frequency only",
      "Left vs right visual hemifields",
      "D1 vs D2 receptors",
      "Upper limb vs lower limb DCML input",
    ],
    correct: 3,
    explanation: "Upper limb vs lower limb DCML input",
  },
  {
    topic: "Neural Circuits",
    question: "Trigeminal lemniscus carries:",
    options: [

      "Ia afferents to motor neurons only",
      "Olfactory axons to cortex directly",
      "Retinal axons to LGN",
      "Face touch/proprioception to VPM thalamus",
    ],
    correct: 3,
    explanation: "Face touch/proprioception to VPM thalamus",
  },
  {
    topic: "Neural Circuits",
    question: "Hypoglossal nucleus damage causes:",
    options: [

      "Pure ataxia without weakness",
      "Contralateral hemianopia",
      "Deafness",
      "Ipsilateral tongue weakness/deviation toward lesion",
    ],
    correct: 3,
    explanation: "Ipsilateral tongue weakness/deviation toward lesion",
  },
  {
    topic: "Neural Circuits",
    question: "Facial nerve lesion with forehead sparing suggests:",
    options: [

      "Peripheral Bell's palsy whole hemiface",
      "Complete DCML loss",
      "Central (UMN) facial weakness",
      "Optic chiasm compression",
    ],
    correct: 2,
    explanation: "Central (UMN) facial weakness",
  },
  {
    topic: "Neural Circuits",
    question: "Medial longitudinal fasciculus coordinates:",
    options: [

      "Requires ia discharge",
      "Cochlear amplification only",
      "Horizontal eye movements linking CN VI and III",
      "Requires hippocampal ripples",
    ],
    correct: 2,
    explanation: "Horizontal eye movements linking CN VI and III",
  },
  {
    topic: "Neural Circuits",
    question: "Nucleus ambiguus motor fibers innervate:",
    options: [

      "Dorsal root ganglion only",
      "Corticospinal tract only",
      "Pharynx/larynx via CN IX, X (XI component)",
      "Optic nerve only",
    ],
    correct: 2,
    explanation: "Pharynx/larynx via CN IX, X (XI component)",
  },
  {
    topic: "Neural Circuits",
    question: "Area postrema detects emetic toxins because it:",
    options: [

      "Has no synapses",
      "Is sole site of Na⁺ pump",
      "Lacks a complete blood–brain barrier",
      "Contains only photoreceptors",
    ],
    correct: 2,
    explanation: "Lacks a complete blood–brain barrier",
  },
  {
    topic: "Neural Circuits",
    question: "Nucleus tractus solitarius receives:",
    options: [

      "Requires motor cortex commands",
      "Requires ia fibers directly",
      "Requires oN bipolar input",
      "Visceral sensory input (taste, baroreceptors)",
    ],
    correct: 3,
    explanation: "Visceral sensory input (taste, baroreceptors)",
  },
  {
    topic: "Neural Circuits",
    question: "PAG stimulation can produce:",
    options: [

      "Analgesia via descending pain-modulation",
      "Pure cerebellar intention tremor",
      "Complete loss of K⁺ channels",
      "Permanent blindness",
    ],
    correct: 0,
    explanation: "Analgesia via descending pain-modulation",
  },
  {
    topic: "Neural Circuits",
    question: "Rostral ventrolateral medulla is important for:",
    options: [

      "Sympathetic vasomotor tone",
      "Color opponency only",
      "Cochlear map only",
      "Place field remapping only",
    ],
    correct: 0,
    explanation: "Sympathetic vasomotor tone",
  },
  {
    topic: "Neural Circuits",
    question: "Solitary nucleus baroreceptor afferents regulate:",
    options: [

      "NMJ quantal content only",
      "Photopigment regeneration",
      "Blood pressure via brainstem autonomic centers",
      "Olfactory cAMP exclusively",
    ],
    correct: 2,
    explanation: "Blood pressure via brainstem autonomic centers",
  },
  {
    topic: "Neural Circuits",
    question: "Cortico-pontine-cerebellar pathway carries:",
    options: [

      "Requires lamina I pain",
      "Efference copy of planned motor signals",
      "Requires renshaw glycine to muscle",
      "Requires rod signals",
    ],
    correct: 1,
    explanation: "Efference copy of planned motor signals",
  },
  {
    topic: "Neural Circuits",
    question: "Cerebello-thalamo-cortical loop returns to:",
    options: [

      "NMJ only",
      "Olfactory epithelium only",
      "Retinal bipolar cells only",
      "Motor/premotor cortex to adjust movement",
    ],
    correct: 3,
    explanation: "Motor/premotor cortex to adjust movement",
  },
  {
    topic: "Neural Circuits",
    question: "CA3 recurrent collaterals support:",
    options: [

      "Pattern completion and autoassociation",
      "Otoacoustic emissions",
      "Photoreceptor dark current",
      "Requires monosynaptic reflex",
    ],
    correct: 0,
    explanation: "Pattern completion and autoassociation",
  },
  {
    topic: "Sensory Systems",
    question: "Photoreceptors hyperpolarize to light because:",
    options: [

      "Glutamate release increases in light always",
      "cGMP-gated channels close → photoreceptor depolarization in dark reverses",
      "Action potentials propagate along the photoreceptor outer segment",
      "Na⁺ channels open maximally in light",
    ],
    correct: 1,
    explanation: "cGMP-gated channels close → photoreceptor depolarization in dark reverses",
  },
  {
    topic: "Sensory Systems",
    question: "ON bipolar cells depolarize to light via:",
    options: [

      "ON pathway sign inversion (e.g., mGluR6 cascade)",
      "Requires muscarinic receptors",
      "Requires na⁺ spikes in bipolar axons always",
      "Direct electrical coupling to rods only",
    ],
    correct: 0,
    explanation: "ON pathway sign inversion (e.g., mGluR6 cascade)",
  },
  {
    topic: "Sensory Systems",
    question: "Horizontal cells contribute to center-surround by:",
    options: [

      "Generating cochlear traveling wave",
      "Releasing ACh at NMJ",
      "Lateral inhibition in outer retina",
      "Driving Ia afferents in muscle",
    ],
    correct: 2,
    explanation: "Lateral inhibition in outer retina",
  },
  {
    topic: "Sensory Systems",
    question: "Ganglion cell receptive fields often show center-surround because:",
    options: [

      "Bipolar/amacrine circuits create antagonistic surrounds",
      "Requires muscle spindles create surround",
      "Requires olfactory glomeruli create surround",
      "Requires thalamus adds surround later",
    ],
    correct: 0,
    explanation: "Bipolar/amacrine circuits create antagonistic surrounds",
  },
  {
    topic: "Sensory Systems",
    question: "M pathway (parvocellular) vs P pathway (magnocellular) in primates:",
    options: [

      "M: only smell; P: only proprioception",
      "P carries only pain from cord",
      "M: motion/depth transient; P: color/fine detail (classic division)",
      "Both are identical in LGN layers only in fish",
    ],
    correct: 2,
    explanation: "M: motion/depth transient; P: color/fine detail (classic division)",
  },
  {
    topic: "Sensory Systems",
    question: "Cochlear tonotopy maps frequency because:",
    options: [

      "Requires outer hair cells encode frequency",
      "All hair cells identical tuning",
      "Basilar membrane stiffness varies along length (high at base)",
      "Requires vestibular otoliths encode pitch",
    ],
    correct: 2,
    explanation: "Basilar membrane stiffness varies along length (high at base)",
  },
  {
    topic: "Sensory Systems",
    question: "Outer hair cell electromotility contributes to:",
    options: [

      "Requires dCML vibration sense",
      "Cochlear amplification and sharp tuning",
      "Photoreceptor dark current",
      "NMJ endplate potential",
    ],
    correct: 1,
    explanation: "Cochlear amplification and sharp tuning",
  },
  {
    topic: "Sensory Systems",
    question: "Tip links in hair cells transduce sound by:",
    options: [

      "Requires gap junction coupling",
      "Opening mechanotransduction channels when stereocilia shear",
      "Releasing dopamine in cochlear nucleus",
      "Closing all K⁺ channels permanently",
    ],
    correct: 1,
    explanation: "Opening mechanotransduction channels when stereocilia shear",
  },
  {
    topic: "Sensory Systems",
    question: "Semicircular canals detect:",
    options: [

      "Angular acceleration of the head",
      "Skin vibration only",
      "Retinal image slip only",
      "Linear translation only (otolith job)",
    ],
    correct: 0,
    explanation: "Angular acceleration of the head",
  },
  {
    topic: "Sensory Systems",
    question: "Utricle and saccule detect:",
    options: [

      "Linear acceleration and head tilt (gravity)",
      "Color opponency",
      "Olfactory concentration only",
      "Angular acceleration only",
    ],
    correct: 0,
    explanation: "Linear acceleration and head tilt (gravity)",
  },
  {
    topic: "Sensory Systems",
    question: "VOR stabilizes gaze by:",
    options: [

      "Blocking all CN III output",
      "Generating eye movements opposite to head movement",
      "Requires hippocampal place fields",
      "Requires pain withdrawal reflex",
    ],
    correct: 1,
    explanation: "Generating eye movements opposite to head movement",
  },
  {
    topic: "Sensory Systems",
    question: "Two-point discrimination is finest on fingertips because:",
    options: [

      "Requires spinothalamic input is used",
      "High receptor density and large cortical representation",
      "No cortical map exists for fingers",
      "Requires pacinian corpuscles exist there",
    ],
    correct: 1,
    explanation: "High receptor density and large cortical representation",
  },
  {
    topic: "Sensory Systems",
    question: "Merkel discs are well suited for:",
    options: [

      "Fine texture and sustained touch (SA I)",
      "Proprioception from muscle spindles only",
      "Pain temperature only",
      "High-frequency vibration only (PC)",
    ],
    correct: 0,
    explanation: "Fine texture and sustained touch (SA I)",
  },
  {
    topic: "Sensory Systems",
    question: "Pacinian corpuscles encode:",
    options: [

      "Retinal contrast only",
      "Olfactory identity only",
      "Sustained pressure only",
      "High-frequency vibration (rapidly adapting)",
    ],
    correct: 3,
    explanation: "High-frequency vibration (rapidly adapting)",
  },
  {
    topic: "Sensory Systems",
    question: "Ruffini endings detect:",
    options: [

      "Sound frequency at cochlear apex only",
      "Skin stretch and sustained deformation",
      "Photons in rods only",
      "Requires visceral baroreceptors",
    ],
    correct: 1,
    explanation: "Skin stretch and sustained deformation",
  },
  {
    topic: "Sensory Systems",
    question: "Free nerve endings often mediate:",
    options: [

      "Requires cochlear tuning",
      "Pain and temperature (among other signals)",
      "Requires proprioception to DCML",
      "Requires nMJ transmission",
    ],
    correct: 1,
    explanation: "Pain and temperature (among other signals)",
  },
  {
    topic: "Sensory Systems",
    question: "Gate control theory of pain emphasizes:",
    options: [

      "Requires photoreceptor bleaching",
      "Only horizontal cells hyperpolarize rods when cGMP is high",
      "Spinal modulation where touch and pain pathways interact",
      "Requires cortical blindness",
    ],
    correct: 2,
    explanation: "Spinal modulation where touch and pain pathways interact",
  },
  {
    topic: "Sensory Systems",
    question: "Referred pain from heart is often felt in left arm because:",
    options: [

      "Requires cochlear nucleus convergence",
      "Convergence of visceral and somatic pain pathways in CNS",
      "Requires retina maps heart",
      "DCML carries cardiac pain only",
    ],
    correct: 1,
    explanation: "Convergence of visceral and somatic pain pathways in CNS",
  },
  {
    topic: "Sensory Systems",
    question: "Capsaicin activates TRPV1 on:",
    options: [

      "Nociceptors sensing noxious heat/pH",
      "Alpha motor neurons only",
      "Photoreceptors in fovea only",
      "Inner hair cells only",
    ],
    correct: 0,
    explanation: "Nociceptors sensing noxious heat/pH",
  },
  {
    topic: "Sensory Systems",
    question: "Cooling menthol sensation uses:",
    options: [

      "Rod cGMP channels",
      "TRPM8 channels on cold-sensitive fibers",
      "Nicotinic NMJ receptors",
      "Requires nMDA in CA1",
    ],
    correct: 1,
    explanation: "TRPM8 channels on cold-sensitive fibers",
  },
  {
    topic: "Sensory Systems",
    question: "Olfactory receptor neurons use:",
    options: [

      "Only cerebellar parallel fibers",
      "Direct gap junctions to cortex only",
      "G-protein / cAMP cascade to open cation channels",
      "Only electrical synapses in glomeruli exclusively forever",
    ],
    correct: 2,
    explanation: "G-protein / cAMP cascade to open cation channels",
  },
  {
    topic: "Sensory Systems",
    question: "Glomeruli in olfactory bulb represent:",
    options: [

      "Inputs from ORNs expressing the same receptor type (roughly)",
      "Single retinal photoreceptors only",
      "Single cochlear frequencies only",
      "Individual muscle motor units",
    ],
    correct: 0,
    explanation: "Inputs from ORNs expressing the same receptor type (roughly)",
  },
  {
    topic: "Sensory Systems",
    question: "Taste sweet stimuli often act through:",
    options: [

      "T1R2/T1R3 G-protein coupled receptors",
      "Only NMDA on CN VII",
      "Only TRPV1 on fungiform papillae exclusively",
      "Nicotinic receptors on tongue muscle only",
    ],
    correct: 0,
    explanation: "T1R2/T1R3 G-protein coupled receptors",
  },
  {
    topic: "Sensory Systems",
    question: "Umami taste is primarily:",
    options: [

      "Only NaCl epithelial sodium channels",
      "Only sour proton block of K⁺ always",
      "Only bitter T2R always",
      "Glutamate sensing (e.g., T1R1/T1R3)",
    ],
    correct: 3,
    explanation: "Glutamate sensing (e.g., T1R1/T1R3)",
  },
  {
    topic: "Sensory Systems",
    question: "Bitter taste uses T2R receptors to:",
    options: [

      "Encode sound localization only",
      "Detect potentially toxic compounds",
      "Encode retinal direction selectivity",
      "Encode muscle length only",
    ],
    correct: 1,
    explanation: "Detect potentially toxic compounds",
  },
  {
    topic: "Sensory Systems",
    question: "Sour taste transduction often involves:",
    options: [

      "Requires cochlear tip links",
      "Proton entry/acid sensing depolarizing taste cells",
      "Requires ia afferents",
      "Requires cGMP in photoreceptors",
    ],
    correct: 1,
    explanation: "Proton entry/acid sensing depolarizing taste cells",
  },
  {
    topic: "Sensory Systems",
    question: "Primary somatosensory cortex (S1) is organized:",
    options: [

      "Without any spatial map",
      "Somatotopically (homunculus)",
      "Retinotopically like V1 only",
      "Tonotopically like A1 only",
    ],
    correct: 1,
    explanation: "Somatotopically (homunculus)",
  },
  {
    topic: "Sensory Systems",
    question: "Receptive field size in S1 is smaller for:",
    options: [

      "Trunk vs fingers always larger on fingers",
      "Only vestibular nuclei",
      "Only olfactory bulb",
      "Digits vs proximal limb",
    ],
    correct: 3,
    explanation: "Digits vs proximal limb (more cortical territory per area)",
  },
  {
    topic: "Sensory Systems",
    question: "Cortical blindness with V1 damage occurs because:",
    options: [

      "Optic nerve transection always",
      "No conscious visual perception despite intact eyes",
      "Requires nMJ block",
      "Requires cochlear damage",
    ],
    correct: 1,
    explanation: "No conscious visual perception despite intact eyes",
  },
  {
    topic: "Sensory Systems",
    question: "Blindsight suggests:",
    options: [

      "Complete loss of all retina function",
      "Requires proprioception remains",
      "Some visual processing without conscious V1 perception",
      "Requires hippocampal maps remain",
    ],
    correct: 2,
    explanation: "Some visual processing without conscious V1 perception",
  },
  {
    topic: "Sensory Systems",
    question: "Prosopagnosia typically reflects:",
    options: [

      "Requires alpha motor neuron loss",
      "Pure cochlear apex lesion",
      "Requires dCML lesion",
      "Fusiform face area / ventral stream dysfunction",
    ],
    correct: 3,
    explanation: "Fusiform face area / ventral stream dysfunction",
  },
  {
    topic: "Sensory Systems",
    question: "Akinetopsia (motion blindness) links to:",
    options: [

      "Requires nMJ myasthenia",
      "Requires spinal shock",
      "MT/V5 or dorsal stream motion processing lesions",
      "Requires olfactory bulb removal",
    ],
    correct: 2,
    explanation: "MT/V5 or dorsal stream motion processing lesions",
  },
  {
    topic: "Sensory Systems",
    question: "Stereopsis depends on:",
    options: [

      "Requires muscle spindle Ia",
      "Requires vestibular otoliths",
      "Binocular disparity processed in visual cortex",
      "Requires monocular luminance",
    ],
    correct: 2,
    explanation: "Binocular disparity processed in visual cortex",
  },
  {
    topic: "Sensory Systems",
    question: "Color opponency (red-green) arises partly from:",
    options: [

      "Requires cochlear outer hair cells",
      "Requires spinothalamic lamina I",
      "Requires cerebellar climbing fibers",
      "P ganglion/on-off midget opponent pathways",
    ],
    correct: 3,
    explanation: "P ganglion/on-off midget opponent pathways",
  },
  {
    topic: "Sensory Systems",
    question: "Auditory brainstem response (ABR) reflects:",
    options: [

      "Requires hippocampal theta only",
      "Synchronized activity in auditory nerve/brainstem nuclei",
      "Requires cortical alpha rhythm",
      "Requires eMG from muscle",
    ],
    correct: 1,
    explanation: "Synchronized activity in auditory nerve/brainstem nuclei",
  },
  {
    topic: "Sensory Systems",
    question: "Interaural time differences localize:",
    options: [

      "Only visual bars in V1",
      "Only olfactory glomeruli",
      "Low-frequency sounds (phase timing)",
      "All frequencies via pinna only always",
    ],
    correct: 2,
    explanation: "Low-frequency sounds (phase timing)",
  },
  {
    topic: "Sensory Systems",
    question: "Interaural level differences localize:",
    options: [

      "Requires retinal rods",
      "Requires nMJ quanta",
      "Requires dCML vibration",
      "High-frequency sounds (head shadow)",
    ],
    correct: 3,
    explanation: "High-frequency sounds (head shadow)",
  },
  {
    topic: "Sensory Systems",
    question: "Visual afterimages relate to:",
    options: [

      "Photopigment/bleaching and adaptation in retina",
      "Requires lTP in CA3 exclusively",
      "Requires cochlear amplification",
      "Requires spinal gate control",
    ],
    correct: 0,
    explanation: "Photopigment/bleaching and adaptation in retina",
  },
  {
    topic: "Sensory Systems",
    question: "Dark adaptation curve inflection reflects:",
    options: [

      "Requires olfactory fatigue only",
      "Rod system taking over from cones in dim light",
      "Requires muscle spindle adaptation",
      "Requires k⁺ Nernst shift",
    ],
    correct: 1,
    explanation: "Rod system taking over from cones in dim light",
  },
  {
    topic: "Sensory Systems",
    question: "Conduction aphasia (arcuate) often shows:",
    options: [

      "Nonfluent Broca speech only always",
      "Impaired repetition with fluent speech/comprehension relatively spared",
      "Bitemporal hemianopia",
      "Pure alexia without writing issues always",
    ],
    correct: 1,
    explanation: "Impaired repetition with fluent speech/comprehension relatively spared",
  },
  {
    topic: "Motor Systems",
    question: "Alpha motor neurons innervate:",
    options: [

      "Extrafusal skeletal muscle fibers",
      "All smooth muscle in gut",
      "Photoreceptors",
      "Intrafusal muscle spindle fibers only",
    ],
    correct: 0,
    explanation: "Extrafusal skeletal muscle fibers",
  },
  {
    topic: "Motor Systems",
    question: "Gamma motor neurons adjust:",
    options: [

      "Retinal gain only",
      "Requires nMJ acetylcholinesterase",
      "Cochlear tuning only",
      "Muscle spindle sensitivity by innervating intrafusal fibers",
    ],
    correct: 3,
    explanation: "Muscle spindle sensitivity by innervating intrafusal fibers",
  },
  {
    topic: "Motor Systems",
    question: "Coactivation of alpha and gamma during contraction:",
    options: [

      "Maintains spindle sensitivity during muscle shortening",
      "Requires affects cerebellum",
      "Requires affects olfactory bulb",
      "Eliminates stretch reflex entirely",
    ],
    correct: 0,
    explanation: "Maintains spindle sensitivity during muscle shortening",
  },
  {
    topic: "Motor Systems",
    question: "Stretch reflex (myotatic) is:",
    options: [

      "Polysynaptic pain withdrawal always",
      "Monosynaptic Ia → alpha motor neuron excitation",
      "Requires corticospinal volitional",
      "Requires vestibular otolith",
    ],
    correct: 1,
    explanation: "Monosynaptic Ia → alpha motor neuron excitation",
  },
  {
    topic: "Motor Systems",
    question: "Golgi tendon organ Ib afferents mediate:",
    options: [

      "Photoreceptor transduction",
      "Cochlear amplification",
      "Stretch reflex facilitation always",
      "Autogenic inhibition when tendon tension is high",
    ],
    correct: 3,
    explanation: "Autogenic inhibition when tendon tension is high",
  },
  {
    topic: "Motor Systems",
    question: "Reciprocal inhibition during stretch reflex:",
    options: [

      "Requires occurs in retina",
      "Excites antagonist always",
      "Inhibits antagonist alpha motor neurons via Ia interneurons",
      "Requires in olfactory glomeruli",
    ],
    correct: 2,
    explanation: "Inhibits antagonist alpha motor neurons via Ia interneurons",
  },
  {
    topic: "Motor Systems",
    question: "Renshaw cells provide:",
    options: [

      "Requires dopamine to striatum",
      "Requires cerebellar climbing input",
      "Recurrent inhibition of alpha motor neurons",
      "Excitation of all Ia afferents always",
    ],
    correct: 2,
    explanation: "Recurrent inhibition of alpha motor neurons",
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neuron lesion signs include:",
    options: [

      "Flaccid paralysis with fasciculations typically",
      "Blindness always",
      "Immediate muscle atrophy within hours only",
      "Hyperreflexia, spasticity, Babinski",
    ],
    correct: 3,
    explanation: "Hyperreflexia, spasticity, Babinski",
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neuron lesion signs include:",
    options: [

      "Homonymous hemianopia",
      "Hyperreflexia always",
      "Babinski positive always",
      "Weakness, atrophy, fasciculations, hyporeflexia",
    ],
    correct: 3,
    explanation: "Weakness, atrophy, fasciculations, hyporeflexia",
  },
  {
    topic: "Motor Systems",
    question: "Decorticate posturing (flexor arms) suggests:",
    options: [

      "Requires cochlear lesion",
      "Damage above red nucleus (cortex/thalamus)",
      "Requires peripheral nerve cut",
      "Requires olfactory bulb removal",
    ],
    correct: 1,
    explanation: "Damage above red nucleus (cortex/thalamus)",
  },
  {
    topic: "Motor Systems",
    question: "Decerebrate posturing (extensor) suggests:",
    options: [

      "Requires retinal detachment",
      "Brainstem lesion below red nucleus level",
      "Requires hippocampal lesion",
      "Pure NMJ myasthenia only",
    ],
    correct: 1,
    explanation: "Brainstem lesion below red nucleus level",
  },
  {
    topic: "Motor Systems",
    question: "Corticospinal tract primarily decussates in:",
    options: [

      "Optic chiasm",
      "Pyramids of medulla (most fibers)",
      "Requires cerebellar vermis",
      "Requires spinal lamina II",
    ],
    correct: 1,
    explanation: "Pyramids of medulla (most fibers)",
  },
  {
    topic: "Motor Systems",
    question: "Voluntary fine finger movement relies heavily on:",
    options: [

      "Requires photoreceptors",
      "Requires autonomic ganglia",
      "Requires olfactory receptor neurons",
      "Corticospinal (and associated) control of distal muscles",
    ],
    correct: 3,
    explanation: "Corticospinal (and associated) control of distal muscles",
  },
  {
    topic: "Motor Systems",
    question: "Basal ganglia motor role is often described as:",
    options: [

      "Transducing odorants",
      "Generating cochlear traveling waves",
      "Computing retinal receptive fields only",
      "Selecting/inhibiting movement programs and enabling initiation",
    ],
    correct: 3,
    explanation: "Selecting/inhibiting movement programs and enabling initiation",
  },
  {
    topic: "Motor Systems",
    question: "Cerebellar motor role emphasizes:",
    options: [

      "Requires hormone release from PVN",
      "Requires pain/temperature crossing",
      "Error correction, timing, and coordination",
      "Primary conscious proprioception only",
    ],
    correct: 2,
    explanation: "Error correction, timing, and coordination",
  },
  {
    topic: "Motor Systems",
    question: "Intention tremor suggests:",
    options: [

      "Pure UMN corticospinal lesion only",
      "Cerebellar or cerebellar outflow dysfunction",
      "Requires amygdala lesion",
      "Optic nerve transection",
    ],
    correct: 1,
    explanation: "Cerebellar or cerebellar outflow dysfunction",
  },
  {
    topic: "Motor Systems",
    question: "Dysmetria on finger-nose testing indicates:",
    options: [

      "Requires dCML loss",
      "Requires blindness",
      "Cerebellar inaccuracy of movement endpoint",
      "Pure LMN facial weakness",
    ],
    correct: 2,
    explanation: "Cerebellar inaccuracy of movement endpoint",
  },
  {
    topic: "Motor Systems",
    question: "Chorea (Huntington's) reflects:",
    options: [

      "Requires spinal shock",
      "Dysregulated basal ganglia leading to random movements",
      "Pure cerebellar vermis agenesis only",
      "Requires cochlear damage",
    ],
    correct: 1,
    explanation: "Dysregulated basal ganglia leading to random movements",
  },
  {
    topic: "Motor Systems",
    question: "Dystonia involves:",
    options: [

      "Requires nMJ blockade always",
      "Requires hippocampal place cells",
      "Sustained abnormal postures from motor program dysfunction",
      "Requires photoreceptor degeneration",
    ],
    correct: 2,
    explanation: "Sustained abnormal postures from motor program dysfunction",
  },
  {
    topic: "Motor Systems",
    question: "Myasthenia gravis fatigability is due to:",
    options: [

      "Requires retinal bipolar dysfunction",
      "Autoimmune reduction of functional nicotinic receptors at NMJ",
      "Dopamine loss in SNc",
      "Requires tTX on axons",
    ],
    correct: 1,
    explanation: "Autoimmune reduction of functional nicotinic receptors at NMJ",
  },
  {
    topic: "Motor Systems",
    question: "Lambert-Eaton syndrome differs from myasthenia because:",
    options: [

      "Postsynaptic AChR destruction always",
      "Presynaptic Ca²⁺ channel autoimmunity reduces ACh release",
      "Requires muscle spindle Ia loss",
      "Requires cochlear hair cell loss",
    ],
    correct: 1,
    explanation: "Presynaptic Ca²⁺ channel autoimmunity reduces ACh release",
  },
  {
    topic: "Motor Systems",
    question: "Botulism causes weakness by:",
    options: [

      "Opening all Na⁺ channels",
      "Destroying cerebellar Purkinje cells",
      "Blocking all K⁺ channels",
      "Cleaving SNARE proteins → blocked vesicle fusion",
    ],
    correct: 3,
    explanation: "Cleaving SNARE proteins → blocked vesicle fusion",
  },
  {
    topic: "Motor Systems",
    question: "End-plate potential is graded because:",
    options: [

      "Only photoreceptor response",
      "Always regenerative Na⁺ along entire muscle instantly",
      "Only olfactory cAMP",
      "Local depolarization from NMJ ion flux",
    ],
    correct: 3,
    explanation: "Local depolarization from NMJ ion flux (not full AP in muscle yet)",
  },
  {
    topic: "Motor Systems",
    question: "Muscle fiber types (slow vs fast) differ partly in:",
    options: [

      "Requires cochlear position",
      "Requires glomerular OR type",
      "Requires retinal opsin type",
      "Myosin ATPase isoforms and metabolic profile",
    ],
    correct: 3,
    explanation: "Myosin ATPase isoforms and metabolic profile",
  },
  {
    topic: "Motor Systems",
    question: "Motor unit size is larger in:",
    options: [

      "Retina vs cochlea",
      "Proximal muscles vs small hand muscles typically",
      "Fingers vs back always smaller in back",
      "Requires olfactory epithelium",
    ],
    correct: 1,
    explanation: "Proximal muscles vs small hand muscles typically",
  },
  {
    topic: "Motor Systems",
    question: "Size principle of motor unit recruitment:",
    options: [

      "Smaller units recruited before larger units for graded force",
      "Random order always",
      "Requires applies to photoreceptors",
      "Largest units always fire first at any force",
    ],
    correct: 0,
    explanation: "Smaller units recruited before larger units for graded force",
  },
  {
    topic: "Motor Systems",
    question: "Spinal shock after transection initially shows:",
    options: [

      "Pure aphasia",
      "Flaccid paralysis and areflexia below lesion",
      "Bitemporal hemianopia",
      "Immediate spastic hyperreflexia always",
    ],
    correct: 1,
    explanation: "Flaccid paralysis and areflexia below lesion",
  },
  {
    topic: "Motor Systems",
    question: "After spinal shock, chronic SCI often shows:",
    options: [

      "Spasticity and hyperreflexia below lesion",
      "Only deafness",
      "Permanent flaccidity without change always",
      "Only blindness",
    ],
    correct: 0,
    explanation: "Spasticity and hyperreflexia below lesion",
  },
  {
    topic: "Motor Systems",
    question: "Central pattern generators in spinal cord can:",
    options: [

      "Only compute Goldman equation",
      "Produce rhythmic locomotor-like activity",
      "Only encode color opponency",
      "Only generate olfactory maps exclusively",
    ],
    correct: 1,
    explanation: "Produce rhythmic locomotor-like activity",
  },
  {
    topic: "Motor Systems",
    question: "Rubrospinal tract generally facilitates:",
    options: [

      "Flexor muscle tone in upper limb (with other pathways)",
      "Requires retinal ON bipolar cells",
      "Requires hypothalamic SCN",
      "Requires cochlear inner hair cells",
    ],
    correct: 0,
    explanation: "Flexor muscle tone in upper limb (with other pathways)",
  },
  {
    topic: "Motor Systems",
    question: "Reticulospinal pathways influence:",
    options: [

      "Requires hippocampal grids exclusively",
      "Posture, locomotion, and autonomic-motor integration",
      "Requires photopigment bleaching",
      "Requires nMJ quantal size exclusively",
    ],
    correct: 1,
    explanation: "Posture, locomotion, and autonomic-motor integration",
  },
  {
    topic: "Motor Systems",
    question: "Vestibulospinal tract helps:",
    options: [

      "Postural adjustments to maintain balance",
      "Requires lTP induction",
      "Color vision only",
      "Olfactory adaptation only",
    ],
    correct: 0,
    explanation: "Postural adjustments to maintain balance",
  },
  {
    topic: "Motor Systems",
    question: "Tectospinal tract contributes to:",
    options: [

      "Requires dCML fine touch",
      "Requires insulin release",
      "Requires pain gate control",
      "Orienting head/eye movements with colliculus",
    ],
    correct: 3,
    explanation: "Orienting head/eye movements with colliculus",
  },
  {
    topic: "Motor Systems",
    question: "ALS typically involves:",
    options: [

      "Only Wernicke aphasia",
      "Combined UMN and LMN degeneration",
      "Only retinal detachment",
      "Only pure sensory neuropathy always",
    ],
    correct: 1,
    explanation: "Combined UMN and LMN degeneration",
  },
  {
    topic: "Motor Systems",
    question: "Multiple sclerosis motor signs can include:",
    options: [

      "Requires pure agnosia always",
      "Requires peripheral LMN pattern always",
      "UMN weakness/spasticity from demyelination",
      "Requires homonymous hemianopia always",
    ],
    correct: 2,
    explanation: "UMN weakness/spasticity from demyelination",
  },
  {
    topic: "Motor Systems",
    question: "Parkinsonian rigidity is often:",
    options: [

      "Only NMJ fatigability",
      "Lead-pipe or cogwheel",
      "Flaccid with fasciculations always",
      "Only cerebellar intention tremor",
    ],
    correct: 1,
    explanation: "Lead-pipe or cogwheel (basal ganglia/bradykinesia context)",
  },
  {
    topic: "Motor Systems",
    question: "Essential tremor often improves with:",
    options: [

      "Requires tTX",
      "Requires strychnine",
      "Requires l-DOPA always required",
      "Beta-blockers (e.g., propranolol) or alcohol transiently",
    ],
    correct: 3,
    explanation: "Beta-blockers (e.g., propranolol) or alcohol transiently",
  },
  {
    topic: "Motor Systems",
    question: "Hemiballismus classically follows:",
    options: [

      "Optic chiasm compression",
      "Only cochlear nucleus lesion",
      "Only olfactory bulb lesion",
      "Subthalamic nucleus lesion",
    ],
    correct: 3,
    explanation: "Subthalamic nucleus lesion (contralateral violent movements)",
  },
  {
    topic: "Motor Systems",
    question: "Focal dystonia in musicians may relate to:",
    options: [

      "Maladaptive cortical sensorimotor plasticity",
      "Requires hippocampal sclerosis always",
      "Requires photoreceptor loss",
      "Requires spinal shock forever",
    ],
    correct: 0,
    explanation: "Maladaptive cortical sensorimotor plasticity",
  },
  {
    topic: "Motor Systems",
    question: "Mirror neurons (premotor/parietal) fire when:",
    options: [

      "Performing or observing similar actions",
      "Requires in photoreceptors",
      "Requires during REM sleep exclusively",
      "Requires in olfactory ORNs",
    ],
    correct: 0,
    explanation: "Performing or observing similar actions",
  },
  {
    topic: "Memory & Learning",
    question: "Declarative memory depends critically on:",
    options: [

      "Medial temporal lobe structures (hippocampus and related)",
      "Requires cerebellar cortex exclusively",
      "Requires cochlear nucleus",
      "Requires nMJ",
    ],
    correct: 0,
    explanation: "Medial temporal lobe structures (hippocampus and related)",
  },
  {
    topic: "Memory & Learning",
    question: "Procedural memory (skills/habits) involves:",
    options: [

      "Requires spinal lamina I exclusively",
      "Basal ganglia and cerebellum among other circuits",
      "Requires hippocampus CA1 exclusively always",
      "Requires retina exclusively",
    ],
    correct: 1,
    explanation: "Basal ganglia and cerebellum among other circuits",
  },
  {
    topic: "Memory & Learning",
    question: "Patient H.M. after bilateral hippocampal damage showed:",
    options: [

      "Loss of pain sensation only",
      "Severe anterograde declarative amnesia",
      "Loss of all motor skills immediately",
      "Blindness",
    ],
    correct: 1,
    explanation: "Severe anterograde declarative amnesia",
  },
  {
    topic: "Memory & Learning",
    question: "Consolidation of declarative memories is thought to require:",
    options: [

      "Hippocampal-cortical dialogue over time",
      "Requires photoreceptor bleaching",
      "Requires nMJ facilitation",
      "Requires immediate cerebellar LTD once",
    ],
    correct: 0,
    explanation: "Hippocampal-cortical dialogue over time",
  },
  {
    topic: "Memory & Learning",
    question: "Systems consolidation proposes:",
    options: [

      "Requires cochlea stores facts",
      "All memories stay only in DG forever",
      "Gradual redistribution of memory traces to cortex",
      "Requires olfactory bulb stores episodic memory",
    ],
    correct: 2,
    explanation: "Gradual redistribution of memory traces to cortex",
  },
  {
    topic: "Memory & Learning",
    question: "Working memory prefrontal activity often shows:",
    options: [

      "Requires ia afferent silence",
      "Sustained delay-period firing for held information",
      "Requires insulin pulses",
      "Requires photoreceptor dark current",
    ],
    correct: 1,
    explanation: "Sustained delay-period firing for held information",
  },
  {
    topic: "Memory & Learning",
    question: "NMDA receptor-dependent LTP at CA3–CA1 Schaffer collateral synapses requires:",
    options: [

      "under standard whole-cell recording conditions.",
      "under standard whole-cell recording conditions.",
      "Requires presynaptic Na⁺ increase",
      "Postsynaptic depolarization to relieve Mg²⁺ block with glutamate",
    ],
    correct: 3,
    explanation: "Postsynaptic depolarization to relieve Mg²⁺ block with glutamate",
  },
  {
    topic: "Memory & Learning",
    question: "LTD at cerebellar parallel fiber–Purkinje synapses is often:",
    options: [

      "Only at NMJ",
      "Climbing fiber–dependent",
      "Identical to hippocampal NMDA LTP always",
      "Only in retina",
    ],
    correct: 1,
    explanation: "Climbing fiber–dependent (calcium signaling context)",
  },
  {
    topic: "Memory & Learning",
    question: "Differential conditioning requires:",
    options: [

      "Requires one stimulus ever presented",
      "Requires muscle spindle stretch",
      "Requires photoreceptor adaptation",
      "Learning difference between CS+ and CS−",
    ],
    correct: 3,
    explanation: "Learning difference between CS+ and CS−",
  },
  {
    topic: "Memory & Learning",
    question: "Extinction of conditioned response involves:",
    options: [

      "Permanent deletion of all hippocampal neurons",
      "Nernst potential is independent of ion concentration gradients",
      "Requires cochlear damage",
      "New inhibitory learning, not erasure of original trace always",
    ],
    correct: 3,
    explanation: "New inhibitory learning, not erasure of original trace always",
  },
  {
    topic: "Memory & Learning",
    question: "Kandel Aplysia sensitization involves:",
    options: [

      "Requires photoreceptors",
      "Requires nMDA LTP in CA1 always",
      "Presynaptic facilitation via serotonin and cAMP/PKA",
      "Requires cerebellar climbing fibers",
    ],
    correct: 2,
    explanation: "Presynaptic facilitation via serotonin and cAMP/PKA",
  },
  {
    topic: "Memory & Learning",
    question: "Hebbian plasticity is summarized as:",
    options: [

      "Only myelin thickness determines synapses",
      "Only olfactory OR choice",
      "Cells that fire together wire together",
      "Only gap junctions form always",
    ],
    correct: 2,
    explanation: "Cells that fire together wire together (correlated activity strengthens synapses)",
  },
  {
    topic: "Memory & Learning",
    question: "Spike-timing-dependent plasticity (STDP) depends on:",
    options: [

      "Requires cochlear frequency alone",
      "Requires retinal luminance alone",
      "Requires muscle length",
      "Relative timing of pre- and postsynaptic spikes",
    ],
    correct: 3,
    explanation: "Relative timing of pre- and postsynaptic spikes",
  },
  {
    topic: "Memory & Learning",
    question: "Reconsolidation theory suggests retrieved memories:",
    options: [

      "Can become labile and require restabilization",
      "Exist only in muscle spindles",
      "Exist only in rods",
      "Are immutable once formed always",
    ],
    correct: 0,
    explanation: "Can become labile and require restabilization",
  },
  {
    topic: "Memory & Learning",
    question: "Morris water maze tests:",
    options: [

      "Spatial learning dependent on hippocampus (in rodents)",
      "Requires color vision in V1",
      "Requires nMJ quantal content",
      "Requires olfactory glomeruli size",
    ],
    correct: 0,
    explanation: "Spatial learning dependent on hippocampus (in rodents)",
  },
  {
    topic: "Memory & Learning",
    question: "Eyeblink classical conditioning in rabbits involves:",
    options: [

      "Requires dCML nuclei exclusively",
      "Requires primary visual cortex",
      "Requires hypothalamic SCN",
      "Cerebellum and associated brainstem nuclei",
    ],
    correct: 3,
    explanation: "Cerebellum and associated brainstem nuclei",
  },
  {
    topic: "Memory & Learning",
    question: "Fear conditioning to tone often requires:",
    options: [

      "Amygdala (lateral/basal nuclei) for acquisition",
      "Requires alpha motor neurons",
      "Requires cochlear outer hair cells",
      "Requires retina exclusively",
    ],
    correct: 0,
    explanation: "Amygdala (lateral/basal nuclei) for acquisition",
  },
  {
    topic: "Memory & Learning",
    question: "Contextual fear conditioning to chamber requires:",
    options: [

      "Requires proprioception loss",
      "Requires wernicke area",
      "Hippocampus for context representation with amygdala",
      "Rod outer segments generate all-or-none spikes in darkness",
    ],
    correct: 2,
    explanation: "Hippocampus for context representation with amygdala",
  },
  {
    topic: "Memory & Learning",
    question: "Retrograde amnesia after hippocampal damage is often:",
    options: [

      "Only for motor skills",
      "Only for pain",
      "Temporally graded (recent > remote)",
      "Complete for all lifetime memories always",
    ],
    correct: 2,
    explanation: "Temporally graded (recent > remote)",
  },
  {
    topic: "Memory & Learning",
    question: "Semantic vs episodic memory distinction:",
    options: [

      "Both identical to procedural always",
      "Both require NMJ",
      "Both stored only in cochlea",
      "Episodic: personal events; semantic: facts/knowledge",
    ],
    correct: 3,
    explanation: "Episodic: personal events; semantic: facts/knowledge",
  },
  {
    topic: "Memory & Learning",
    question: "Priming is a form of:",
    options: [

      "Only photoreceptor adaptation",
      "Implicit memory",
      "Only stretch reflex",
      "Declarative episodic memory only",
    ],
    correct: 1,
    explanation: "Implicit memory (facilitated processing without conscious recall)",
  },
  {
    topic: "Memory & Learning",
    question: "Korsakoff syndrome memory deficits link to:",
    options: [

      "Requires peripheral neuropathy only always",
      "Thiamine deficiency affecting diencephalon (mammillary bodies etc.)",
      "Only Müller glia pass inward cation current in darkness",
      "Requires cochlear lesion",
    ],
    correct: 1,
    explanation: "Thiamine deficiency affecting diencephalon (mammillary bodies etc.)",
  },
  {
    topic: "Memory & Learning",
    question: "Alzheimer's early hippocampal involvement explains:",
    options: [

      "Deafness always",
      "Early episodic memory impairment",
      "Pure motor flaccidity always",
      "Bitemporal hemianopia always",
    ],
    correct: 1,
    explanation: "Early episodic memory impairment",
  },
  {
    topic: "Memory & Learning",
    question: "Long-term potentiation maintenance phases may involve:",
    options: [

      "Structural synaptic changes and protein synthesis",
      "Requires golgi tendon silence",
      "Requires photopigment regeneration",
      "Requires immediate Na⁺ block",
    ],
    correct: 0,
    explanation: "Structural synaptic changes and protein synthesis",
  },
  {
    topic: "Memory & Learning",
    question: "Sharp-wave ripples in hippocampus are associated with:",
    options: [

      "Cochlear otoacoustic emissions",
      "NMJ endplate only",
      "Requires retinal ON responses",
      "Offline replay and memory consolidation processes",
    ],
    correct: 3,
    explanation: "Offline replay and memory consolidation processes",
  },
  {
    topic: "Memory & Learning",
    question: "Place field remapping occurs when:",
    options: [

      "Requires muscle spindle length changes",
      "Requires cN VI fires once",
      "Requires insulin is released",
      "Environment context changes substantially",
    ],
    correct: 3,
    explanation: "Environment context changes substantially",
  },
  {
    topic: "Memory & Learning",
    question: "Object recognition memory (perirhinal cortex) tests:",
    options: [

      "Requires pain withdrawal latency only",
      "Only sound frequency discrimination",
      "Requires vestibular nystagmus",
      "Familiarity discrimination for objects",
    ],
    correct: 3,
    explanation: "Familiarity discrimination for objects",
  },
  {
    topic: "Memory & Learning",
    question: "Delayed non-match to sample tasks probe:",
    options: [

      "Requires photoreceptor bleaching rate",
      "Working memory and recognition in prefrontal/temporal networks",
      "Gap junctions relay dark current from cones to rods exclusively",
      "Requires ia afferent frequency",
    ],
    correct: 1,
    explanation: "Working memory and recognition in prefrontal/temporal networks",
  },
  {
    topic: "Memory & Learning",
    question: "Medial temporal lobe amnesia spares:",
    options: [

      "Requires vision always lost",
      "Often procedural and priming (depending on lesion)",
      "Requires hearing always lost",
      "All memory types always impaired equally",
    ],
    correct: 1,
    explanation: "Often procedural and priming (depending on lesion)",
  },
  {
    topic: "Memory & Learning",
    question: "Cognitive map concept (Tolman) refers to:",
    options: [

      "Requires motor unit map in muscle",
      "Requires cochlear frequency map",
      "Only retinotopic map exclusively same thing",
      "Internal spatial representation of environment",
    ],
    correct: 3,
    explanation: "Internal spatial representation of environment",
  },
  {
    topic: "Memory & Learning",
    question: "Engram cells refer to:",
    options: [

      "Requires muscle fibers always",
      "Requires photoreceptors always",
      "Requires glial cells always",
      "Neurons allocated to storing a specific memory trace",
    ],
    correct: 3,
    explanation: "Neurons allocated to storing a specific memory trace",
  },
  {
    topic: "Memory & Learning",
    question: "Optogenetic reactivation of engram cells can:",
    options: [

      "Only silence cochlea always",
      "Only block NMJ always",
      "Evoke memory-associated behavior in rodents",
      "Only bleach photopigment in humans clinically always",
    ],
    correct: 2,
    explanation: "Evoke memory-associated behavior in rodents",
  },
  {
    topic: "Memory & Learning",
    question: "Sleep slow-wave activity supports memory by:",
    options: [

      "under standard whole-cell recording conditions.",
      "under standard whole-cell recording conditions.",
      "Facilitating hippocampal-cortical transfer and synaptic homeostasis theories",
      "under standard whole-cell recording conditions.",
    ],
    correct: 2,
    explanation: "Facilitating hippocampal-cortical transfer and synaptic homeostasis theories",
  },
  {
    topic: "Memory & Learning",
    question: "REM sleep is associated with:",
    options: [

      "Vivid dreaming and cortical activation with muscle atonia",
      "Requires cochlear amplification exclusively",
      "Requires spinal monosynaptic reflex exclusively",
      "Purely DCML transmission only",
    ],
    correct: 0,
    explanation: "Vivid dreaming and cortical activation with muscle atonia",
  },
  {
    topic: "Memory & Learning",
    question: "Transcranial magnetic stimulation (TMS) can:",
    options: [

      "Measure E_K directly in vivo always without electrodes",
      "Replace all fMRI always",
      "Transiently disrupt or facilitate focal cortical processing",
      "Permanently lesion all hippocampus always in one pulse clinically safe context",
    ],
    correct: 2,
    explanation: "Transiently disrupt or facilitate focal cortical processing",
  },
  {
    topic: "Methods",
    question: "Patch-clamp gigaohm seal enables:",
    options: [

      "Requires eEG scalp averaging without contact",
      "High-resolution measurement of single-channel or whole-cell currents",
      "Requires mRI BOLD without magnet",
      "Glutamate release dominates in the dark in all vertebrate photoreceptors",
    ],
    correct: 1,
    explanation: "High-resolution measurement of single-channel or whole-cell currents",
  },
  {
    topic: "Methods",
    question: "Voltage-clamp mode holds membrane potential fixed to:",
    options: [

      "Measure unlimited action potentials freely",
      "Requires measure olfactory OR mRNA only",
      "Measure currents required to maintain command voltage",
      "Requires measure bone density",
    ],
    correct: 2,
    explanation: "Measure currents required to maintain command voltage",
  },
  {
    topic: "Methods",
    question: "Current-clamp records:",
    options: [

      "Only insulin in blood only always",
      "Only cochlear basilar stiffness directly always",
      "Only magnetic field of Earth",
      "Voltage changes evoked by injected current",
    ],
    correct: 3,
    explanation: "Voltage changes evoked by injected current",
  },
  {
    topic: "Methods",
    question: "Whole-cell patch clamp dialyzes cytoplasm, which can:",
    options: [

      "Wash out second messengers over time (run-down concern)",
      "Increase seal resistance to infinity always harmful zero",
      "Only record from extracellular space",
      "Prevent all channel recording",
    ],
    correct: 0,
    explanation: "Wash out second messengers over time (run-down concern)",
  },
  {
    topic: "Methods",
    question: "Cell-attached patch can record:",
    options: [

      "Only population spikes from whole brain always without electrodes",
      "Only EM synapse count only always",
      "Only fMRI signal",
      "Single-channel activity without breaking into cell",
    ],
    correct: 3,
    explanation: "Single-channel activity without breaking into cell",
  },
  {
    topic: "Methods",
    question: "Sharp electrode intracellular recording differs from patch in:",
    options: [

      "Higher access resistance; can impale without seal",
      "Only measures LFP always",
      "Always requires TTX",
      "Only used in retina in vivo humans routinely for diagnosis always",
    ],
    correct: 0,
    explanation: "Higher access resistance; can impale without seal",
  },
  {
    topic: "Methods",
    question: "Local field potential (LFP) reflects:",
    options: [

      "Single Na⁺ channel openings only always isolated",
      "Summed synaptic currents near electrode",
      "Only DCML fiber conduction only",
      "Only action potentials from one axon always exclusively",
    ],
    correct: 1,
    explanation: "Summed synaptic currents near electrode",
  },
  {
    topic: "Methods",
    question: "Multi-unit activity is:",
    options: [

      "Only olfactory OR binding",
      "Identical to patch clamp single channel always",
      "Only EEG alpha always",
      "Mixed spikes from nearby neurons",
    ],
    correct: 3,
    explanation: "Mixed spikes from nearby neurons (not isolated single units)",
  },
  {
    topic: "Methods",
    question: "Calcium imaging with GCaMP reports:",
    options: [

      "Fluorescence changes tied to calcium influx/activity",
      "Permanent membrane voltage without indicator change always",
      "Only myelin thickness",
      "Only blood pressure only",
    ],
    correct: 0,
    explanation: "Fluorescence changes tied to calcium influx/activity",
  },
  {
    topic: "Methods",
    question: "Optogenetics Channelrhodopsin-2 typically:",
    options: [

      "Hyperpolarizes always with any opsin",
      "Requires works without light if ATP high",
      "Requires works in glia exclusively always",
      "Depolarizes neurons when exposed to blue light",
    ],
    correct: 3,
    explanation: "Depolarizes neurons when exposed to blue light",
  },
  {
    topic: "Methods",
    question: "Halorhodopsin or archaerhodopsin often:",
    options: [

      "Requires binds glutamate",
      "Hyperpolarizes/inhibits neurons with light",
      "Always excites like ChR2",
      "Requires opens NMJ nicotinic receptors",
    ],
    correct: 1,
    explanation: "Hyperpolarizes/inhibits neurons with light",
  },
  {
    topic: "Methods",
    question: "DREADDs (hM3Dq) activate neurons when exposed to:",
    options: [

      "under standard whole-cell recording conditions.",
      "under standard whole-cell recording conditions.",
      "Requires tTX",
      "Designer ligand (e.g., CNO/clozapine-N-oxide) not endogenous ligand at low dose context",
    ],
    correct: 3,
    explanation: "Designer ligand (e.g., CNO/clozapine-N-oxide) not endogenous ligand at low dose context",
  },
  {
    topic: "Methods",
    question: "Chemogenetic silencing Gi DREADDs typically:",
    options: [

      "Always cause LTP",
      "Always bleach photopigment",
      "Open all Na⁺ channels",
      "Reduce neuronal firing via Gi/o pathways when ligand present",
    ],
    correct: 3,
    explanation: "Reduce neuronal firing via Gi/o pathways when ligand present",
  },
  {
    topic: "Methods",
    question: "fMRI BOLD signal is best interpreted as:",
    options: [

      "Direct measure of each synaptic vesicle fusion",
      "Measure of E_K precisely",
      "Measure of NMJ quantal size directly always",
      "Indirect hemodynamic correlate of neural activity",
    ],
    correct: 3,
    explanation: "Indirect hemodynamic correlate of neural activity",
  },
  {
    topic: "Methods",
    question: "EEG alpha rhythm (8–13 Hz) prominent when:",
    options: [

      "Only during cochlear damage always",
      "Only during maximal pain always",
      "Deep anesthesia stage with burst suppression only always",
      "Relaxed wakefulness with eyes closed (classically)",
    ],
    correct: 3,
    explanation: "Relaxed wakefulness with eyes closed (classically)",
  },
  {
    topic: "Methods",
    question: "MEG primarily detects:",
    options: [

      "Magnetic fields from synchronized post-synaptic currents",
      "Requires photopigment bleaching",
      "Requires muscle spindle length directly",
      "Requires bone conduction of sound always",
    ],
    correct: 0,
    explanation: "Magnetic fields from synchronized post-synaptic currents",
  },
  {
    topic: "Methods",
    question: "Event-related potential (ERP) P300 often relates to:",
    options: [

      "Requires ia afferent silence",
      "Requires rod dark current",
      "Attention/target detection in oddball paradigms",
      "Requires insulin release",
    ],
    correct: 2,
    explanation: "Attention/target detection in oddball paradigms",
  },
  {
    topic: "Methods",
    question: "Two-photon microscopy advantage in brain:",
    options: [

      "Only measures BOLD",
      "Deep scattering tissue imaging with localized excitation",
      "Non-invasive whole human brain without skull always clinically routine",
      "Only images myelin without stain always",
    ],
    correct: 1,
    explanation: "Deep scattering tissue imaging with localized excitation",
  },
  {
    topic: "Methods",
    question: "Optical intrinsic signal imaging maps:",
    options: [

      "Activity-related changes in light reflectance/absorption",
      "Requires olfactory OR gene sequences",
      "Requires single ion channel conductance directly always",
      "Requires nMJ ultrastructure without EM",
    ],
    correct: 0,
    explanation: "Activity-related changes in light reflectance/absorption",
  },
  {
    topic: "Methods",
    question: "Unit recording with tetrodes helps:",
    options: [

      "Replace all behavior experiments always",
      "Sort spikes from multiple nearby neurons",
      "Only measure EEG without scalp contact",
      "Measure Goldman equation directly",
    ],
    correct: 1,
    explanation: "Sort spikes from multiple nearby neurons",
  },
  {
    topic: "Methods",
    question: "Antidromic activation in tract tracing stimulation means:",
    options: [

      "Action potential propagated toward axon terminals from stimulation site",
      "under standard whole-cell recording conditions.",
      "under standard whole-cell recording conditions.",
      "under standard whole-cell recording conditions.",
    ],
    correct: 0,
    explanation: "Action potential propagated toward axon terminals from stimulation site",
  },
  {
    topic: "Methods",
    question: "Retrograde tracer (e.g., cholera toxin B) labels:",
    options: [

      "Neurons projecting to injection site",
      "Only glia always",
      "Only muscle spindles",
      "Only postsynaptic targets of injection exclusively always wrong direction",
    ],
    correct: 0,
    explanation: "Neurons projecting to injection site",
  },
  {
    topic: "Methods",
    question: "Anterograde tracer (e.g., Phaseolus) labels:",
    options: [

      "Only cerebrospinal fluid only",
      "Only blood vessels always",
      "Only cell bodies at injection exclusively always",
      "Axons projecting away from injection site",
    ],
    correct: 3,
    explanation: "Axons projecting away from injection site",
  },
  {
    topic: "Methods",
    question: "Lesion study limitation includes:",
    options: [

      "Lack of specificity and compensation over time",
      "Requires affects glia never neurons",
      "No plasticity ever after lesion",
      "Perfect cell-type specificity always",
    ],
    correct: 0,
    explanation: "Lack of specificity and compensation over time",
  },
  {
    topic: "Methods",
    question: "Transcranial electrical stimulation (tES) modulates:",
    options: [

      "Only myelin gene expression always permanently in one session",
      "Only cochlear fluids always",
      "Only photoreceptors exclusively",
      "Neural excitability non-invasively (mechanisms debated)",
    ],
    correct: 3,
    explanation: "Neural excitability non-invasively (mechanisms debated)",
  },
  {
    topic: "Methods",
    question: "Brain-computer interface decode algorithms often use:",
    options: [

      "Population activity patterns from motor cortex (e.g., for prosthetics)",
      "under standard whole-cell recording conditions.",
      "under standard whole-cell recording conditions.",
      "Requires golgi tendon silence always",
    ],
    correct: 0,
    explanation: "Population activity patterns from motor cortex (e.g., for prosthetics)",
  },
  {
    topic: "Methods",
    question: "Miniscope calcium imaging in freely moving rodents allows:",
    options: [

      "Only measures blood pressure",
      "Mobile neural activity imaging",
      "Only human clinical diagnosis standard always",
      "Only fixed-head patch clamp always required",
    ],
    correct: 1,
    explanation: "Mobile neural activity imaging",
  }
];
