// Short-answer items for scored finals (compare to model answers on results — not auto-graded)

const WRITTEN_EXAM_POOL = [
  {
    type: "shortAnswer",
    topic: "Resting Potential",
    module: "part1",
    question: "Explain why the resting membrane potential of a typical neuron lies closer to E_K than to E_Na, even though both ions are present.",
    modelAnswer: "At rest, membrane permeability is dominated by K⁺ leak channels, so V_m is weighted toward E_K by the Goldman/constant-field relation; Na⁺ permeability is comparatively low, so E_Na has less influence until depolarization opens Na⁺ channels.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Nernst Equation",
    module: "part1",
    question: "If extracellular K⁺ is raised, predict the direction of change in E_K and in resting V_m (qualitatively). Briefly justify using the Nernst/logic of gradients.",
    modelAnswer: "Raising external K⁺ reduces the K⁺ concentration gradient, shifting E_K toward 0 mV (less negative). Resting V_m depolarizes toward the new E_K because K⁺ still dominates resting permeability.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Action Potentials",
    module: "part1",
    question: "Describe the ionic basis of the rising phase, peak, and falling phase of a single action potential.",
    modelAnswer: "Rising phase: voltage-gated Na⁺ influx. Peak: balance of inward Na⁺ and outward K⁺. Falling phase: delayed-rectifier K⁺ efflux dominates as Na⁺ inactivates, repolarizing the membrane.",
    minChars: 50
  },
  {
    type: "shortAnswer",
    topic: "Action Potential Propagation",
    module: "part1",
    question: "Contrast continuous conduction in unmyelinated axons with saltatory conduction in myelinated axons.",
    modelAnswer: "Unmyelinated: active regeneration sequentially along the axon. Myelinated: depolarization jumps between nodes of Ranvier where Na⁺ channels are concentrated, increasing velocity and saving metabolic cost.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Passive Membrane Properties",
    module: "part1",
    question: "Define membrane time constant (τ) and length constant (λ). What does each constrain for subthreshold signals?",
    modelAnswer: "τ = R_m C_m sets how fast V_m changes (temporal filtering). λ = √(R_m/R_i) sets how far subthreshold signals spread passively along a cable (spatial decay).",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Goldman Equation",
    module: "part1",
    question: "Why does the Goldman equation give a more realistic resting potential than applying the Nernst equation for K⁺ alone?",
    modelAnswer: "Real membranes are permeable to multiple ions simultaneously; Goldman weights each ion’s equilibrium potential by relative permeability, whereas Nernst applies to one ion at a time.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Synaptic Transmission",
    module: "part2",
    question: "Outline the chain of events from presynaptic action potential arrival to quantal neurotransmitter release.",
    modelAnswer: "Terminal depolarization → voltage-gated Ca²⁺ influx → Ca²⁺ sensor on release machinery → SNARE-mediated vesicle fusion → quantal transmitter release into the cleft.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Receptor Types",
    module: "part2",
    question: "Compare ionotropic and metabotropic receptors in terms of speed and typical downstream effects.",
    modelAnswer: "Ionotropic: ligand-gated ion channels, fast ms-scale postsynaptic potentials. Metabotropic: G-protein coupled, slower modulation via second messengers/enzymes affecting channels and gene expression.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Synaptic Integration",
    module: "part2",
    question: "Explain temporal summation versus spatial summation at the axon initial segment.",
    modelAnswer: "Temporal: multiple inputs at one synapse within τ add depolarization. Spatial: simultaneous inputs from different synapses add at the soma/initial segment. Both can bring V_m toward threshold.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Long-Term Plasticity",
    module: "part2",
    question: "Why is NMDA receptor activation often described as a coincidence detector for LTP induction?",
    modelAnswer: "NMDA channels require glutamate binding and postsynaptic depolarization to relieve Mg²⁺ block and admit Ca²⁺, linking presynaptic release with strong postsynaptic activity.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Neuromodulation",
    module: "part2",
    question: "How does neuromodulation differ from fast point-to-point synaptic transmission?",
    modelAnswer: "Neuromodulators often diffuse more broadly, act on many targets, and change excitability/gain over longer timescales rather than producing fast EPSPs/IPSPs at one synapse.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Neural Circuits",
    module: "part2",
    question: "Give an example of lateral inhibition and state what computational role it serves in sensory systems.",
    modelAnswer: "Example: retinal horizontal/amacrine inhibition sharpens center-surround receptive fields, enhancing contrast between stimulated and neighboring regions.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Phototransduction",
    module: "part3",
    question: "Why do vertebrate photoreceptors hyperpolarize to light rather than depolarize?",
    modelAnswer: "In darkness, cGMP keeps channels open (dark current). Light reduces cGMP via rhodopsin/transducin/PDE, closing channels and hyperpolarizing the cell.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Auditory System",
    module: "part3",
    question: "Explain tonotopic organization on the basilar membrane and its relation to place theory of pitch.",
    modelAnswer: "Basilar stiffness/mass varies along the cochlea so each location resonates best at a different frequency; nerve fibers inherit that place code for pitch.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Somatosensation",
    module: "part3",
    question: "Contrast the dorsal column–medial lemniscus pathway with the spinothalamic pathway in terms of modality.",
    modelAnswer: "DCML: discriminative touch, vibration, proprioception. Spinothalamic: pain and temperature. Both reach thalamus/cortex but serve different modalities.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Learning & Memory",
    module: "part3",
    question: "What did patient H.M. teach us about hippocampal function?",
    modelAnswer: "Bilateral medial temporal/hippocampal damage caused profound anterograde declarative amnesia while many procedural/skills could still be learned, dissociating memory systems.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Motor Systems",
    module: "part3",
    question: "Describe the role of the cerebellum in motor control using the idea of error correction.",
    modelAnswer: "Cerebellum compares predicted sensory consequences of movement with actual feedback (and climbing fiber error signals) to adjust timing and accuracy of motor commands.",
    minChars: 45
  },
  {
    type: "shortAnswer",
    topic: "Neuroanatomy",
    module: "part3",
    question: "What is the main function of the thalamus in sensory processing?",
    modelAnswer: "Thalamus relays and gates sensory (and motor) information to cortex via specific nuclei, shaping what reaches conscious perception and cortical processing.",
    minChars: 35
  },
  {
    type: "shortAnswer",
    topic: "Visual System",
    module: "part3",
    question: "What is center-surround antagonism in a retinal ganglion cell receptive field, and why is it useful?",
    modelAnswer: "Excitatory center with inhibitory surround (or reverse) enhances edges/contrast by subtracting neighboring activity, emphasizing spatial differences in the image.",
    minChars: 40
  },
  {
    type: "shortAnswer",
    topic: "Basal Ganglia",
    module: "part3",
    question: "In simplified terms, how does loss of substantia nigra dopamine relate to Parkinson motor symptoms?",
    modelAnswer: "Loss of SNc dopamine disrupts basal ganglia loop balance (direct/indirect pathways), impairing initiation and smooth control of movement → bradykinesia, rigidity, tremor.",
    minChars: 45
  }
];

const WRITTEN_EXAM_COUNTS = {
  final: 5,
  final100: 8,
  final150: 10,
  final200: 12,
  pinnacle300: 15
};
