// MCB80x question bank — HarvardX Fundamentals of Neuroscience

const PART1_VARIANTS = [
  {
    topic: "Resting Potential",
    question: "If a neuron has high K⁺ leak conductance and only minimal Na⁺ leak conductance, its resting membrane potential will lie closest to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The Na⁺ equilibrium potential",
      "The K⁺ equilibrium potential",
      "0 mV exactly",
      "The Cl⁻ equilibrium potential",
    ],
    correct: 1,
    explanation: "Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If extracellular K⁺ concentration is increased while intracellular K⁺ is held constant, the K⁺ equilibrium potential (E_K)?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Becomes more negative",
      "Becomes less negative (moves toward 0 mV)",
      "Becomes exactly 0 mV regardless of concentration",
      "Is unaffected by concentration changes",
    ],
    correct: 1,
    explanation: "The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "Changing inside/outside concentrations shifts Nernst equilibrium potentials.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The membrane time constant (τ) equals R_m × C_m. Increasing membrane capacitance while holding R_m constant will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Speed up voltage changes for a given current",
      "Slow down voltage changes for a given current",
      "Eliminate passive decay along dendrites",
      "Prevent voltage-gated channel activation",
    ],
    correct: 1,
    explanation: "τ = R_m C_m; larger capacitance requires more charge to change voltage, slowing the membrane's response to injected current.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The length constant (λ) depends on both membrane resistance and internal (axial) resistance. Increasing internal resistance (R_i) while R_m is unchanged will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increase λ and extend passive spread",
      "Decrease λ and shorten passive spread",
      "Have no effect on passive spread",
      "Directly open voltage-gated Na channels",
    ],
    correct: 1,
    explanation: "λ = √(R_m / R_i); higher axial resistance impedes longitudinal current flow, shortening the distance over which subthreshold signals spread.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a larger-than-normal depolarizing stimulus may still trigger a spike because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inactivated Na⁺ channels are recovering and fewer channels are available",
      "Most K⁺ channels are permanently closed",
      "Myelin is absent at the axon hillock",
      "The Na⁺/K⁺ pump stops functioning",
    ],
    correct: 0,
    explanation: "Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The falling phase of the action potential is driven primarily by delayed-rectifier K⁺ channels because they?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Open with slower kinetics than the initial Na⁺ surge and carry outward current",
      "Permit massive Na⁺ influx",
      "Block all Cl⁻ conductance permanently",
      "Pump Ca²⁺ into the cytosol",
    ],
    correct: 0,
    explanation: "Delayed-rectifier K⁺ channels activate during the spike and repolarize the membrane through K⁺ efflux.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The absolute refractory period is defined by the state of voltage-gated Na⁺ channels in which?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Activation gates are open and inactivation gates are closed",
      "Inactivation gates remain closed even if the activation gate opens",
      "Both gates are permanently removed from the membrane",
      "Channels are converted to ligand-gated receptors",
    ],
    correct: 1,
    explanation: "Inactivation of Na⁺ channels prevents re-opening during the absolute refractory period, enforcing a minimum inter-spike interval.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "What does Threshold is reached when regenerative Na⁺ channel opening produce?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Net outward current exceeding inward current",
      "Net inward current exceeding outward current",
      "Complete closure of all ion channels",
      "Direct activation of the Na/K pump",
    ],
    correct: 1,
    explanation: "At threshold, positive feedback from Na⁺ influx overcomes opposing outward currents, triggering the all-or-none spike.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At threshold, positive feedback from Na⁺ influx overcomes opposing outward currents, triggering the all-or-none spike.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In a myelinated axon, the passive spread of depolarization between nodes of Ranvier occurs because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Myelin contains voltage-gated channels",
      "Internodal membrane capacitance is charged passively while active regeneration occurs at nodes",
      "Action potentials are generated continuously along the entire axon",
      "Saltatory conduction requires no ion channels",
    ],
    correct: 1,
    explanation: "Current passively spreads under myelin between nodes; voltage-gated channels at nodes regenerate the action potential (saltatory conduction).",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Myelin increases conduction velocity primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increasing the number of voltage-gated channels per unit length",
      "Reducing effective membrane capacitance and limiting active regeneration to nodes",
      "Raising the resting membrane potential above 0 mV",
      "Blocking all passive current flow",
    ],
    correct: 1,
    explanation: "Myelin insulation lowers capacitive load and confines ion channel activity to nodes, enabling faster saltatory propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Depolarization of the membrane means the membrane potential becomes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "More negative than at rest",
      "Less negative than at rest (moves toward 0 mV or above)",
      "Exactly equal to E_K",
      "Fixed regardless of ion flux",
    ],
    correct: 1,
    explanation: "Depolarization is a shift to a less negative membrane potential relative to rest.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The Goldman equation predicts that if membrane permeability to Na⁺ greatly exceeds permeability to K⁺, V_m will approach?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The potassium reversal potential (E_K), as if K⁺ were the dominant permeant ion",
      "The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability",
      "0 mV if all monovalent gradients were abolished and Cl⁻ is impermeant",
      "The reversal potential of gap junction channels, not voltage-gated cation channels",
    ],
    correct: 1,
    explanation: "The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na.",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase is electrogenic because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive charge movement",
      "Opens voltage-gated Na⁺ channels directly",
      "Releases glutamate into the synaptic cleft",
      "Phosphorylates AMPA receptors at the synapse",
    ],
    correct: 0,
    explanation: "The 3:2 stoichiometry of the Na⁺/K⁺ pump moves net positive charge out of the cell, slightly hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "For a given constant current injection, a neuron with a larger membrane time constant will show?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "A faster rise to steady-state voltage",
      "A slower rise to steady-state voltage",
      "No change in voltage over time",
      "Immediate action potential firing at all stimulus amplitudes",
    ],
    correct: 1,
    explanation: "A larger τ (R_m × C_m) slows the charging of the membrane capacitance, delaying voltage change.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Subthreshold depolarizing stimuli differ from suprathreshold stimuli in that subthreshold stimuli?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Produce graded potentials that decay without triggering an all-or-none spike",
      "Often produce full-amplitude action potentials",
      "Permanently inactivate all Na channels",
      "Treats passive cable properties as sufficient for regenerative action potentials",
    ],
    correct: 0,
    explanation: "Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
    ]
  }
];

const PART2_VARIANTS = [
  {
    topic: "Chemical Synapses",
    question: "Presynaptic action potentials trigger neurotransmitter release most directly through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ca²⁺ influx via voltage-gated calcium channels",
      "Na⁺ efflux through leak channels",
      "Postsynaptic NMDA receptor opening",
      "Passive hyperpolarization of the axon hillock",
    ],
    correct: 0,
    explanation: "Ca²⁺ entry into the presynaptic terminal binds synaptic vesicle release machinery and drives exocytosis.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "An EPSP that brings the postsynaptic membrane from −70 mV to −55 mV has?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hyperpolarized the cell away from threshold",
      "Depolarized the cell closer to spike threshold",
      "Blocked all ligand-gated channels",
      "Activated the Na/K pump primarily",
    ],
    correct: 1,
    explanation: "EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold.",
    wrongExplanations: [
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold.",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "An IPSP mediated by open Cl⁻ channels is hyperpolarizing when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "E_Cl⁻ is more negative than the resting membrane potential",
      "E_Cl⁻ equals, 40 mV",
      "No neurotransmitter is released",
      "Main mechanism: electrical synapses are active",
    ],
    correct: 0,
    explanation: "When E_Cl⁻ lies below rest, Cl⁻ influx hyperpolarizes the postsynaptic membrane.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When E_Cl⁻ lies below rest, Cl⁻ influx hyperpolarizes the postsynaptic membrane.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Ionotropic glutamate receptors produce fast synaptic responses because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "They require G-protein activation before any ion flow",
      "Neurotransmitter binding directly opens an ion channel pore",
      "They act primarily in the nucleus",
      "They convert cAMP to ATP instantly",
    ],
    correct: 1,
    explanation: "Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
    wrongExplanations: [
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptor signaling is typically slower than ionotropic signaling because it involves?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Direct ion flux through the receptor pore",
      "G-protein activation and second-messenger cascades before channel modulation",
      "Immediate fusion of synaptic vesicles",
      "Saltatory conduction in the dendrite",
    ],
    correct: 1,
    explanation: "Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Activation of adenylyl cyclase by a Gαs-coupled receptor leads to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hydrolysis of cAMP to AMP",
      "Conversion of ATP to cAMP in the cytosol",
      "Direct opening of voltage-gated Na channels",
      "Immediate degradation of all IP3",
    ],
    correct: 1,
    explanation: "Adenylyl cyclase synthesizes cAMP from ATP, activating downstream kinases such as PKA.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ signaling raises cytosolic Ca²⁺ primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Opening plasmalemmal Na⁺ channels",
      "Releasing Ca²⁺ from endoplasmic reticulum stores",
      "Blocking all K⁺ channels permanently",
      "Stopping vesicle endocytosis",
    ],
    correct: 1,
    explanation: "IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Temporal summation is most likely when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Two EPSPs from different dendritic branches arrive simultaneously",
      "Repeated EPSPs arrive at the same synapse before previous ones decay",
      "Main mechanism: iPSPs are generated",
      "The axon is broadly myelinated",
    ],
    correct: 1,
    explanation: "Temporal summation adds successive inputs at one synapse before the membrane returns to baseline.",
    wrongExplanations: [
      "",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Temporal summation adds successive inputs at one synapse before the membrane returns to baseline.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Temporal summation adds successive inputs at one synapse before the membrane returns to baseline.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Spatial summation requires?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inputs at a single synapse over a long interval",
      "Simultaneous EPSPs from multiple synapses converging on the same neuron",
      "Complete blockade of the axon hillock",
      "Removal of all inhibitory interneurons",
    ],
    correct: 1,
    explanation: "Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
    wrongExplanations: [
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators often differ from point-to-point neurotransmission because they?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Act mainly at gap junctions with zero delay",
      "Can diffuse broadly and alter neuronal gain or excitability over many synapses",
      "Often produce millisecond-scale EPSPs",
      "Are released primarily at the neuromuscular junction",
    ],
    correct: 1,
    explanation: "Neuromodulators tune circuit properties over extended regions rather than mediating fast synaptic transmission at one synapse.",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators tune circuit properties over extended regions rather than mediating fast synaptic transmission at one synapse.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators tune circuit properties over extended regions rather than mediating fast synaptic transmission at one synapse.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators tune circuit properties over extended regions rather than mediating fast synaptic transmission at one synapse.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Dale's principle implies that a single neuron?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Randomly switches neurotransmitters at typical synapse",
      "Releases the same primary neurotransmitter(s) from all its synaptic terminals",
      "Can form electrical synapses",
      "Would need to co-release glutamate and GABA at many terminal",
    ],
    correct: 1,
    explanation: "Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites.",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition shapes neural responses by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Delaying the inhibitory interneuron until long after output firing",
      "Activating an interneuron in parallel with the excitatory pathway to limit output timing",
      "Removing all excitatory input to the circuit",
      "Converting chemical synapses to electrical synapses",
    ],
    correct: 1,
    explanation: "Feedforward inhibition activates inhibitory interneurons alongside excitation, constraining when the output neuron can fire.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses allow bidirectional current flow because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "They use SNARE-mediated vesicle release",
      "Gap junction channels connect the cytoplasm of coupled cells",
      "They require G-protein second messengers",
      "They exist mainly in the peripheral nervous system myelin",
    ],
    correct: 1,
    explanation: "Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "AMPA receptors mediate fast EPSCs at glutamatergic synapses primarily by passing?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Na⁺ and some K⁺ at resting potentials",
      "Cl⁻",
      "Mg²⁺ out of the cell",
      "Current when the cell is hyperpolarized below −90 mV",
    ],
    correct: 0,
    explanation: "AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "GABA<sub>A</sub> receptor activation typically produces inhibition by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increasing Cl⁻ conductance when E_Cl⁻ is below rest",
      "Opening Na⁺ channels at the axon hillock",
      "Blocking all metabotropic signaling permanently",
      "Releasing Ca²⁺ from mitochondria",
    ],
    correct: 0,
    explanation: "GABA<sub>A</sub> receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
    wrongExplanations: [
      "",
      "",
      "Fast synaptic inhibition at many CNS synapses is dominated by GABA_A Cl⁻ flux. Metabotropic GABA_B signaling is slower and works through G-proteins, not direct ligand-gated Cl⁻ pores. GABAA receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABAA receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
    ]
  }
];

const PART3_VARIANTS = [
  {
    topic: "Visual System",
    question: "Vertebrate photoreceptors hyperpolarize in response to light because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Light closes cGMP-gated cation channels",
      "Light opens voltage-gated Na channels throughout the outer segment",
      "Photoreceptors depolarize whenever cGMP increases",
      "Light directly pumps K out of the cell",
    ],
    correct: 0,
    explanation: "In darkness, cGMP keeps channels open; light activates phosphodiesterase, lowers cGMP, closes channels, and hyperpolarizes the cell.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Center-surround receptive fields in retinal ganglion cells enhance contrast through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Identical ON responses in center and surround",
      "Antagonistic center and surround responses",
      "No lateral interactions in the retina",
      "Tonotopic mapping along the basilar membrane",
    ],
    correct: 1,
    explanation: "Antagonistic surround responses sharpen edges by subtracting uniform illumination across the receptive field.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Tonotopic organization of the cochlea means that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Most frequencies activate the same hair cell row",
      "Different sound frequencies maximally stimulate different basilar membrane locations",
      "Pitch is encoded by olfactory receptor choice",
      "The apex responds best to high frequencies",
    ],
    correct: 1,
    explanation: "The basilar membrane is stiffer at the base (high frequencies) and more compliant at the apex (low frequencies).",
    wrongExplanations: [
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "The somatosensory homunculus illustrates that cortical area is determined mainly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Absolute body segment volume",
      "Sensory receptor density and acuity of the body region",
      "Motor neuron count in the spinal ventral horn",
      "The number of olfactory glomeruli",
    ],
    correct: 1,
    explanation: "Hands and face occupy disproportionately large S1 territory because of high receptor density and fine discriminative capacity.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hands and face occupy disproportionately large S1 territory because of high receptor density and fine discriminative capacity.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles are specialized for detecting?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Static deep pressure over minutes",
      "High-frequency vibration and rapid mechanical transients",
      "Bitter taste molecules on the tongue",
      "Low spatial frequency visual edges",
    ],
    correct: 1,
    explanation: "Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Combinatorial odor coding in the olfactory bulb relies on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Many sensory neuron expressing all receptor types",
      "Each olfactory sensory neuron expressing one receptor type and projecting to specific glomeruli",
      "Direct monosynaptic links from OSNs to motor neurons",
      "Identical receptor expression in all glomeruli",
    ],
    correct: 1,
    explanation: "The one-neuron–one-receptor rule and glomerular targeting allow distinct odor patterns to activate specific bulb maps.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The one-neuron–one-receptor rule and glomerular targeting allow distinct odor patterns to activate specific bulb maps.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "CNS capillary endothelial tight junctions contribute to the blood-brain barrier by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Allowing free paracellular diffusion of all solutes (localizes the function to the wrong brain region)",
      "Restricting paracellular passage of polar molecules into brain parenchyma",
      "Forming myelin around axons in cortex (localizes the function to the wrong brain region)",
      "Replacing all astrocytic endfeet (localizes the function to the wrong brain region)",
    ],
    correct: 1,
    explanation: "Tight junctions between endothelial cells limit paracellular diffusion, requiring selective transporters for brain entry.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Which clinical presentation is most consistent with The corpus callosum is classified as a commissural tract because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Connects spinal segments within one side of the cord (localizes the function to the wrong brain region)",
      "Connects corresponding areas of the left and right cerebral hemispheres",
      "Links the cerebellum primarily to the medulla (localizes the function to the wrong brain region)",
      "Carries proprioceptive information from muscle spindles",
    ],
    correct: 1,
    explanation: "Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Hippocampal damage most specifically impairs?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Consolidation of new declarative (episodic) memories",
      "Transduction of photons in rods",
      "Saltatory conduction in peripheral nerves",
      "Release of acetylcholine at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "The hippocampus is critical for encoding new declarative memories while leaving many procedural memories intact.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Dopaminergic neurons of the substantia nigra pars compacta target the?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Retinal bipolar cell layer",
      "Striatum (caudate and putamen)",
      "Cochlear outer hair cells",
      "Olfactory epithelium directly",
    ],
    correct: 1,
    explanation: "The nigrostriatal pathway delivers dopamine to the striatum, modulating basal ganglia motor circuits.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "NMDA receptor-dependent LTP at CA1 synapses requires coincident?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block",
      "Cl⁻ influx and hyperpolarization below −90 mV",
      "Complete removal of AMPA receptors",
      "Exclusive GABA<sub>B</sub> receptor activation",
    ],
    correct: 0,
    explanation: "NMDA receptors act as coincidence detectors: depolarization removes Mg²⁺ block while glutamate is bound, allowing Ca²⁺ influx.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors: depolarization removes Mg²⁺ block while glutamate is bound, allowing Ca²⁺ influx.",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Hebbian synaptic plasticity strengthens a synapse when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Presynaptic activity consistently contributes to postsynaptic firing",
      "Pre- and postsynaptic activity are anti-correlated",
      "The synapse is seldom used",
      "Requires inhibitory interneurons fire in isolation",
    ],
    correct: 0,
    explanation: "Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "CREB-dependent transcription supports long-term memory by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Directly opening voltage-gated Na channels at the synapse",
      "Regulating gene expression for proteins that stabilize synaptic changes",
      "Degrading all cAMP within seconds",
      "Blocking protein synthesis in the soma permanently",
    ],
    correct: 1,
    explanation: "Phosphorylated CREB activates transcription of genes needed for enduring synaptic modification.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "The immediate early gene c-fos is induced rapidly after strong synaptic activity because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "It is constitutively expressed at equal levels in all silent neurons",
      "Calcium and activity-dependent signaling activate its transcription quickly",
      "It encodes the NMDA receptor pore directly",
      "It permanently closes all K channels",
    ],
    correct: 1,
    explanation: "Activity-driven calcium and kinase signaling rapidly induces c-fos as a marker of recent neuronal activation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Brain Function",
    question: "Topographic sensory maps in cortex mean that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neighboring cortical neurons represent neighboring sensory receptor locations",
      "Most sensory modalities share one random map with no structure",
      "Motor neurons are arranged by gene family",
      "Tonotopy exists mainly in the retina, not in cortex",
    ],
    correct: 0,
    explanation: "Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
    ]
  }
];

const NEW_TIER1 = [
  {
    topic: "Resting Potential",
    question: "What primarily sets the ion concentration gradients that establish the resting potential?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients",
      "Voltage-gated channels at the axon hillock",
      "Synaptic vesicle recycling",
      "Photoreceptor cGMP channels",
    ],
    correct: 0,
    explanation: "The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Leak channels passively allow ions to move down?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Their electrochemical gradients toward respective equilibrium potentials",
      "Main mechanism: the direction set by the Na⁺/K⁺ pump cycling rate primarily",
      "Gradients perpendicular to the membrane",
      "Concentration gradients without any electrical component",
    ],
    correct: 0,
    explanation: "Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "The Nernst equation calculates the equilibrium potential for an ion based on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Intracellular and extracellular concentrations of that ion",
      "Axon diameter and myelination thickness",
      "Synaptic release probability",
      "Receptor subtype in the postsynaptic density",
    ],
    correct: 0,
    explanation: "E_ion depends on the ratio of internal to external ion concentration.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The length constant (λ) describes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "How far a subthreshold voltage spreads before decaying",
      "The minimum interval between action potentials",
      "The equilibrium potential for chloride",
      "The rate of neurotransmitter reuptake",
    ],
    correct: 0,
    explanation: "λ quantifies spatial decay of passive signals along a cable.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Voltage-gated Na⁺ channels contribute to the rising phase because they?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Allow Na⁺ influx when the membrane depolarizes past activation threshold",
      "Pump K⁺ into the cell",
      "Open after all K⁺ channels close permanently",
      "Are ligand-gated by glutamate",
    ],
    correct: 0,
    explanation: "Na⁺ influx drives the upswing of the action potential.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ influx drives the upswing of the action potential.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ influx drives the upswing of the action potential.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Unmyelinated axon conduction is called continuous because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The action potential regenerates along every patch of membrane",
      "It occurs mainly at nodes of Ranvier",
      "It requires no voltage-gated channels",
      "It is purely passive without active currents",
    ],
    correct: 0,
    explanation: "In unmyelinated fibers, active regeneration occurs sequentially along the membrane.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: In unmyelinated fibers, active regeneration occurs sequentially along the membrane.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The Goldman equation is needed when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Multiple ions are permeant with different equilibrium potentials",
      "Main mechanism: one ion species exists in the extracellular fluid",
      "The neuron is at absolute refractory period",
      "Synaptic vesicles are depleted",
    ],
    correct: 0,
    explanation: "Goldman combines contributions of all permeant ions weighted by permeability.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman combines contributions of all permeant ions weighted by permeability.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman combines contributions of all permeant ions weighted by permeability.",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Synaptic vesicles fuse with the presynaptic membrane through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "SNARE-mediated exocytosis triggered by calcium",
      "Passive diffusion through gap junctions",
      "Direct opening of voltage-gated Na⁺ channels in the cleft",
      "Retrograde transport in dendrites",
    ],
    correct: 0,
    explanation: "Ca²⁺-triggered SNARE complex assembly drives vesicle fusion and release.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺-triggered SNARE complex assembly drives vesicle fusion and release.",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "The postsynaptic density contains?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Concentrated receptors and signaling proteins opposite the active zone",
      "Myelin wraps around dendrites at many micron",
      "Photopigment molecules for scotopic vision",
      "Basilar membrane collagen fibers",
    ],
    correct: 0,
    explanation: "The PSD organizes receptors and scaffolding for synaptic signaling.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Quantal transmission means that postsynaptic responses occur in?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Discrete steps corresponding to fusion of vesicles",
      "Continuous analog waves without discrete units",
      "All-or-none muscle action potentials",
      "Purely passive cable responses without receptors",
    ],
    correct: 0,
    explanation: "Each vesicle fusion event contributes a quantal unit of postsynaptic response.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each vesicle fusion event contributes a quantal unit of postsynaptic response.",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which description best applies to Nicotinic acetylcholine receptors at the neuromuscular junction?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ionotropic",
      "Metabotropic G-protein-coupled",
      "Electrical synapses via connexins",
      "Voltage-gated chloride channels",
    ],
    correct: 0,
    explanation: "Nicotinic ACh receptors are classic ionotropic receptors mediating fast EPSPs/EPCs.",
    wrongExplanations: [
      "",
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Nicotinic ACh receptors are classic ionotropic receptors mediating fast EPSPs/EPCs.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "The axon initial segment is the preferred site for action potential initiation because it?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Has a high density of voltage-gated Na⁺ channels and low threshold",
      "Is completely myelinated along its entire length",
      "Contains inhibitory synapses",
      "Lacks voltage-gated channels entirely",
    ],
    correct: 0,
    explanation: "Channel density and geometry make the AIS the spike trigger zone.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Channel density and geometry make the AIS the spike trigger zone.",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Recurrent inhibition occurs when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "An output neuron activates an interneuron that feeds back onto itself or its pool",
      "Myelin thickness alone determines saltatory conduction velocity",
      "Electrical synapses replace all chemical synapses",
      "The circuit contains no interneurons",
    ],
    correct: 0,
    explanation: "Recurrent loops regulate excitability and stabilize network activity.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates striatal circuits primarily through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Metabotropic D1 and D2 receptors altering cAMP and channel activity",
      "Direct ionotropic pores with millisecond kinetics",
      "Gap junctions between photoreceptors",
      "Voltage-gated Na⁺ channels in the cochlea",
    ],
    correct: 0,
    explanation: "Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
    wrongExplanations: [
      "",
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Rods are more sensitive than cones primarily because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "They express higher levels of photopigment and converge on bipolar cells",
      "They respond to bright daylight",
      "They lack cGMP-gated channels",
      "They fire action potentials with higher amplitude",
    ],
    correct: 0,
    explanation: "Rod convergence and high photopigment density support scotopic vision.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rod convergence and high photopigment density support scotopic vision.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rod convergence and high photopigment density support scotopic vision.",
    ]
  },
  {
    topic: "Visual System",
    question: "Cones mediate?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Color and high-acuity daylight vision",
      "Main mechanism: scotopic vision in starlight without photopigment",
      "Auditory pitch perception primarily",
      "Olfactory combinatorial coding in glomeruli",
    ],
    correct: 0,
    explanation: "Cones support photopic, color vision with high spatial resolution in the fovea.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cones support photopic, color vision with high spatial resolution in the fovea.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cones support photopic, color vision with high spatial resolution in the fovea.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Inner hair cells transduce sound by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Mechanically gating ion channels via stereocilia deflection",
      "Releasing dopamine into the synaptic cleft of photoreceptors",
      "Hyperpolarizing when cGMP decreases",
      "Expressing olfactory receptors",
    ],
    correct: 0,
    explanation: "Tip-link coupling opens mechanotransduction channels in hair cells.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Tip-link coupling opens mechanotransduction channels in hair cells.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "The tectorial membrane in the cochlea?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Couples mechanical vibration to stereocilia of hair cells",
      "Forms the blood-brain barrier in cortex",
      "Contains rhodopsin for dim-light vision",
      "Is identical to the corpus callosum",
    ],
    correct: 0,
    explanation: "Shearing motion between tectorial membrane and basilar membrane deflects stereocilia.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Merkel cells and associated nerve endings detect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Sustained pressure and texture (slowly adapting)",
      "High-frequency vibration (rapidly adapting)",
      "Photons of light",
      "Odorant molecules in the nasal epithelium",
    ],
    correct: 0,
    explanation: "Merkel endings provide high spatial acuity for sustained touch.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Merkel endings provide high spatial acuity for sustained touch.",
      "",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Gray matter consists primarily of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neuronal cell bodies, dendrites, and synapses",
      "Myelinated axon tracts",
      "Cerebrospinal fluid in the ventricles primarily",
      "Photoreceptor outer segments",
    ],
    correct: 0,
    explanation: "Gray matter is rich in neuronal somata and synaptic neuropil.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gray matter is rich in neuronal somata and synaptic neuropil.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gray matter is rich in neuronal somata and synaptic neuropil.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Cerebrospinal fluid is produced mainly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Choroid plexus epithelium in the ventricles",
      "Photoreceptor outer segments (localizes the function to the wrong brain region)",
      "Nodes of Ranvier primarily (localizes the function to the wrong brain region)",
      "Synaptic vesicles in the cleft (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Choroid plexus secretes CSF into the ventricular system.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Choroid plexus secretes CSF into the ventricular system.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is associated with?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hippocampus and medial temporal lobe structures",
      "Main mechanism: cerebellar Purkinje cells without cortex",
      "Photoreceptor outer segments",
      "Outer hair cell electromotility primarily",
    ],
    correct: 0,
    explanation: "Declarative (explicit) memory depends on hippocampal and related cortical systems.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Declarative (explicit) memory depends on hippocampal and related cortical systems.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Declarative (explicit) memory depends on hippocampal and related cortical systems.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory temporarily maintains information through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Sustained activity in prefrontal and related cortical circuits",
      "Persistent structural changes in muscle spindles",
      "Photoreceptor bleaching primarily",
      "Elimination of all synaptic connections within seconds",
    ],
    correct: 0,
    explanation: "Persistent firing and recurrent circuits support short-term maintenance.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Persistent firing and recurrent circuits support short-term maintenance.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Olfactory sensory neurons regenerate throughout life in mammals because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "They are continually replaced from basal stem cells in the epithelium",
      "They are identical to cortical pyramidal cells",
      "They seldom express receptors",
      "They are myelinated peripheral axons",
    ],
    correct: 0,
    explanation: "OSN turnover maintains the olfactory epithelium despite environmental damage.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OSN turnover maintains the olfactory epithelium despite environmental damage.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OSN turnover maintains the olfactory epithelium despite environmental damage.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate in?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Motor cortex and descend to brainstem or spinal cord",
      "Muscle spindles primarily (maps the lesion to the wrong motor pathway or reflex)",
      "Photoreceptors in the retina (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory sensory neurons (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Corticospinal and related pathways carry commands from cortex to lower motor neurons.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Corticospinal and related pathways carry commands from cortex to lower motor neurons.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Corticospinal and related pathways carry commands from cortex to lower motor neurons.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Contralateral organization of sensory pathways means?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Left body side projects largely to right hemisphere",
      "Both sides project to ipsilateral cortex",
      "No decussation occurs in any pathway",
      "Main mechanism: motor pathways cross the midline",
    ],
    correct: 0,
    explanation: "Most sensory and motor pathways decussate, mapping contralateral body sides.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most sensory and motor pathways decussate, mapping contralateral body sides.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most sensory and motor pathways decussate, mapping contralateral body sides.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Which description best applies to The primary cation with highest permeability at rest in most neurons?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "K⁺",
      "Na⁺",
      "Ca²⁺",
      "Mg²⁺",
    ],
    correct: 0,
    explanation: "Dominant K⁺ leak conductance makes resting V_m lie near E_K in typical neurons.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Which description best applies to For a positively charged ion, if extracellular concentration exceeds intracellular concentration, E_ion?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Positive (inside relative to outside)",
      "Negative (inside relative to outside)",
      "Often exactly 0 mV",
      "Undefined without temperature",
    ],
    correct: 0,
    explanation: "A concentration gradient favoring inward flux for a cation yields a positive equilibrium potential.",
    wrongExplanations: [
      "",
      "",
      "Equilibrium potentials depend on concentrations; they are not fixed at 0 mV for every ion.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance (C_m) represents the ability of the membrane to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Store charge across the lipid bilayer",
      "Pump ions against gradients",
      "Generate action potentials without channels",
      "Conduct current through gap junctions",
    ],
    correct: 0,
    explanation: "The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The all-or-none property of action potentials means that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Suprathreshold stimuli produce full-amplitude spikes",
      "Subthreshold stimuli produce larger spikes than threshold stimuli",
      "Spike amplitude scales linearly with stimulus strength above threshold",
      "Each channel opens partially in proportion to stimulus",
    ],
    correct: 0,
    explanation: "Once threshold is reached, regenerative Na⁺ current produces a stereotyped full spike.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Action potentials propagate without decrement because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Each depolarized segment actively regenerates the spike in adjacent membrane",
      "Passive spread alone carries the full spike amplitude indefinitely",
      "Myelin eliminates the need for ion channels",
      "The Na⁺/K⁺ pump propagates voltage directly",
    ],
    correct: 0,
    explanation: "Active regeneration at each point along the axon maintains spike amplitude during propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Hyperpolarization means the membrane potential becomes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "More negative than at rest",
      "Less negative than at rest",
      "Exactly 0 mV",
      "Equal to E_Na",
    ],
    correct: 0,
    explanation: "Hyperpolarization is a shift to a more negative V_m relative to rest.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "The synaptic cleft separates?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Presynaptic terminal and postsynaptic membrane",
      "Axon hillock and initial segment",
      "Two dendrites connected by connexins",
      "Photoreceptor outer segment and pigment epithelium",
    ],
    correct: 0,
    explanation: "Chemical synapses transmit via neurotransmitter diffusion across the cleft to postsynaptic receptors.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Chemical synapses transmit via neurotransmitter diffusion across the cleft to postsynaptic receptors.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "A miniature EPSP (mEPSP) reflects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Postsynaptic response to spontaneous release of one vesicle",
      "An action potential in the postsynaptic cell",
      "Passive spread from a neighboring axon without receptors",
      "Pump activity in the presynaptic terminal",
    ],
    correct: 0,
    explanation: "Spontaneous quantal release produces discrete mEPSPs corresponding to single vesicle events.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptors are coupled to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "G proteins and second-messenger cascades",
      "Direct ion pore opening without intermediates",
      "Voltage sensors in the S4 segment",
      "SNARE proteins for exocytosis",
    ],
    correct: 0,
    explanation: "Metabotropic receptors activate G proteins that modulate channels and enzymes via second messengers.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Lowering input resistance and diverting current",
      "Opening Na⁺ channels at the axon hillock",
      "Increasing length constant indefinitely",
      "Blocking the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Lateral inhibition in sensory systems serves to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Enhance contrast between active and neighboring regions",
      "Eliminate all spontaneous activity",
      "Convert chemical to electrical synapses",
      "Block all feedforward input",
    ],
    correct: 0,
    explanation: "Lateral inhibition sharpens stimulus representation by suppressing adjacent channels or cells.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Volume transmission describes neuromodulator signaling that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Diffuses broadly rather than point-to-point across a single cleft",
      "Electrical synapses primarily",
      "Occurs mainly at the neuromuscular junction",
      "Uses voltage-gated Na⁺ channels as receptors",
    ],
    correct: 0,
    explanation: "Neuromodulators can act on many targets via diffuse extracellular spread.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators can act on many targets via diffuse extracellular spread.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators can act on many targets via diffuse extracellular spread.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Photoreceptor outer segments contain?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Membrane disks with photopigment molecules",
      "Myelin wraps for saltatory conduction",
      "Voltage-gated Na⁺ channels for spiking",
      "Hair cell stereocilia and tip links",
    ],
    correct: 0,
    explanation: "Rod and cone outer segments house photopigment in stacked membranous disks for light capture.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "The basilar membrane in the cochlea is tonotopically organized such that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "High frequencies peak near the base and low frequencies near the apex",
      "Most frequencies activate the same location equally",
      "Low frequencies peak at the base",
      "Sound intensity alone determines location without frequency",
    ],
    correct: 0,
    explanation: "Mechanical properties vary along the cochlea, mapping frequency to position (tonotopy).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin primarily detect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "pain/temp",
      "High-frequency vibration at Pacinian frequency",
      "Sustained pressure with Merkel-like precision",
      "Photons of visible light",
    ],
    correct: 0,
    explanation: "Free nerve endings are nociceptors and thermoreceptors for pain/temp.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Each olfactory sensory neuron typically expresses?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "One functional odor receptor type",
      "Most receptor genes simultaneously",
      "Main mechanism: photopigment genes",
      "Nicotinic acetylcholine receptors primarily",
    ],
    correct: 0,
    explanation: "One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter tracts consist primarily of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Myelinated axons",
      "Neuronal cell bodies and dendrites",
      "Synaptic cleft fluid",
      "Photoreceptor outer segments",
    ],
    correct: 0,
    explanation: "White matter is dominated by myelinated axon bundles connecting brain regions.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons directly innervate?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Skeletal muscle fibers",
      "Main mechanism: upper motor neurons in cortex",
      "Photoreceptors in the retina",
      "Olfactory bulb mitral cells",
    ],
    correct: 0,
    explanation: "Lower motor neurons in brainstem and spinal cord synapse on skeletal muscle.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower motor neurons in brainstem and spinal cord synapse on skeletal muscle.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory for skills is most associated with?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Basal ganglia and cerebellum",
      "Main mechanism: hippocampal CA1 pyramidal cells",
      "Photoreceptor transduction cascades",
      "Cochlear outer hair cells primarily",
    ],
    correct: 0,
    explanation: "Motor and procedural learning engages basal ganglia and cerebellar circuits.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor and procedural learning engages basal ganglia and cerebellar circuits.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The thalamus functions primarily as?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "A relay station for sensory information to cortex",
      "The sole site of phototransduction",
      "The origin of cerebrospinal fluid",
      "The location of action potential initiation",
    ],
    correct: 0,
    explanation: "Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexons in gap junctions are composed of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Connexin proteins forming intercellular pores",
      "SNARE complexes for vesicle fusion",
      "Rhodopsin molecules",
      "Voltage-gated Na⁺ channel alpha subunits",
    ],
    correct: 0,
    explanation: "Six connexins assemble into a connexon hemichannel that aligns with a partner cell.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP is degraded by the enzyme?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Phosphodiesterase",
      "Adenylyl cyclase",
      "Protein kinase A directly without enzymes",
      "Voltage-gated K⁺ channels",
    ],
    correct: 0,
    explanation: "Phosphodiesterase breaks down cAMP, terminating G-protein-coupled signaling.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Cl⁻ equilibrium potential is often near resting V_m in many neurons because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Cl⁻ channels passively set V_Cl near rest via transporter activity",
      "Cl⁻ is impermeant at all times",
      "The Na⁺/K⁺ pump excludes all Cl⁻ from the cell",
      "Cl⁻ channels open during action potentials",
    ],
    correct: 0,
    explanation: "Cl⁻ transporters and leak conductance often place E_Cl close to resting potential.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cl⁻ transporters and leak conductance often place E_Cl close to resting potential.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials by binding to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated Na⁺ channels",
      "Voltage-gated K⁺ channels",
      "Nicotinic receptors at the neuromuscular junction",
      "Gap junction connexins",
    ],
    correct: 0,
    explanation: "TTX selectively blocks the pore of voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: TTX selectively blocks the pore of voltage-gated Na⁺ channels.",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively blocks the pore of voltage-gated Na⁺ channels.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Endocytosis at the presynaptic terminal recaptures?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Membrane and vesicle components after exocytosis",
      "Main mechanism: neurotransmitter without membrane",
      "Postsynaptic receptors into the cleft",
      "Myelin wraps from adjacent internodes",
    ],
    correct: 0,
    explanation: "Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool.",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Horizontal cells in the retina contribute to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Lateral inhibition and contrast enhancement",
      "Saltatory conduction in optic nerve",
      "Mechanotransduction in the cochlea",
      "Olfactory combinatorial coding",
    ],
    correct: 0,
    explanation: "Horizontal cells mediate lateral inhibition between photoreceptors and bipolar cells.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells in the cochlea enhance sensitivity through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Electromotility that amplifies basilar membrane motion",
      "Releasing glutamate onto photoreceptors",
      "Generating action potentials with higher amplitude than inner hair cells",
      "Expressing rhodopsin for dim-light hearing",
    ],
    correct: 0,
    explanation: "Outer hair cell electromotility actively boosts cochlear amplification.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outer hair cell electromotility actively boosts cochlear amplification.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage of many substances primarily at?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "CNS capillary endothelial tight junctions",
      "Nodes of Ranvier in peripheral nerve (localizes the function to the wrong brain region)",
      "Synaptic clefts of all chemical synapses",
      "Photoreceptor outer segments (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Long-term potentiation (LTP) is defined as?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "A persistent increase in synaptic strength after high-frequency stimulation",
      "Persistent elimination of all inhibitory synapses",
      "A decrease in quantal size after one mEPSP",
      "Passive decay of EPSPs along dendrites",
    ],
    correct: 0,
    explanation: "LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses.",
    ]
  }
];

const NEW_TIER2 = [
  {
    topic: "Resting Potential",
    question: "If the Na⁺/K⁺ pump is blocked, over time the resting potential will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Move toward 0 mV as gradients collapse",
      "Become more negative indefinitely without limit",
      "Lock at the Nernst potential for Cl⁻",
      "Prevent all action potentials by hyperpolarizing above 0 mV",
    ],
    correct: 0,
    explanation: "Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If intracellular K⁺ is 140 mM and extracellular K⁺ is 4 mM, E_K is approximately?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "−95 mV (negative inside)",
      "60 mV (positive inside)",
      "0 mV",
      "120 mV",
    ],
    correct: 0,
    explanation: "A large inward K⁺ gradient yields a strongly negative E_K.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing dendritic diameter (lower R_i) while R_m is constant will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increase λ and extend passive spread",
      "Decrease λ",
      "Prevent all EPSP summation",
      "Block voltage-gated channels",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); larger diameter lowers R_i and lengthens λ.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input resistance measures?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The voltage change per unit injected current (inverse of conductance)",
      "The speed of saltatory conduction",
      "The number of olfactory glomeruli activated",
      "The wavelength of maximal photoreceptor sensitivity primarily",
    ],
    correct: 0,
    explanation: "High input resistance yields larger voltage deflections for a given current.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High input resistance yields larger voltage deflections for a given current.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. High input resistance yields larger voltage deflections for a given current.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The relative refractory period follows the absolute refractory period and is characterized by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Higher threshold and reduced spike amplitude possible",
      "Complete inability to fire under any stimulus",
      "Persistent channel removal",
      "Requires hyperpolarization below −120 mV",
    ],
    correct: 0,
    explanation: "Partial recovery of Na channels requires stronger stimuli and can yield smaller spikes.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Decreasing axon diameter in an unmyelinated fiber generally?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slows conduction velocity by increasing internal resistance",
      "Speeds conduction by reducing capacitance",
      "Has no effect on conduction",
      "Converts saltatory to continuous conduction",
    ],
    correct: 0,
    explanation: "Smaller diameter raises R_i, slowing passive and active propagation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Smaller diameter raises R_i, slowing passive and active propagation.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Under the conditions described in the stem, which value equals membrane potential?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Conductance times driving force (I = g × (V_m − E_ion))",
      "Conductance times voltage alone (I = g × V_m) — uses the wrong sign or driving force for ionic current.",
      "Voltage divided by capacitance",
      "Permeability times Nernst potential squared",
    ],
    correct: 0,
    explanation: "Ionic current through open channels follows I = g(V_m − E_ion); E_ion sets the reversal potential.",
    wrongExplanations: [
      "",
      "I = g×V_m ignores the ion reversal potential; driving force is (V_m − E_ion).",
      "Capacitive current involves dV/dt, not Ohm’s law for ionic conductance.",
      "Permeability and E_ion relate to equilibrium, not a simple I = P×E² form.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Blocking presynaptic voltage-gated Ca²⁺ channels will most directly reduce?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neurotransmitter release probability",
      "Postsynaptic AMPA receptor density",
      "Axonal myelin thickness",
      "Retinal phototransduction",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx is the immediate trigger for vesicle fusion.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Neurotransmitter reuptake transporters on glia or presynaptic terminals serve to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Terminate synaptic signaling by clearing transmitter from the cleft",
      "Open voltage-gated Na⁺ channels in the cleft",
      "Phosphorylate CREB in the nucleus directly",
      "Generate myelin around the synapse",
    ],
    correct: 0,
    explanation: "Reuptake limits spillover and resets the synapse for subsequent release.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which capability best describes Muscarinic acetylcholine receptors are metabotropic and?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Modulate K or Ca channels via G-proteins",
      "Directly form a cation pore with no G-proteins",
      "Replace SNARE proteins in vesicle fusion",
      "Generate saltatory conduction",
    ],
    correct: 0,
    explanation: "Muscarinic receptors act through G-proteins to modulate channel activity and second messengers.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "IPSPs mediated by K⁺ channels opened via G-proteins occur when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "E_K is below rest and opening channels hyperpolarizes or stabilizes V_m",
      "E_K is above rest",
      "No G-proteins exist in neurons",
      "Applies a sensory transduction pathway from a different modality",
    ],
    correct: 0,
    explanation: "G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP efficacy by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Lowering input resistance so depolarizing current produces smaller voltage change",
      "Increasing input resistance maximally",
      "Blocking the Na⁺/K⁺ pump primarily",
      "Preventing all Cl⁻ conductance",
    ],
    correct: 0,
    explanation: "Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Lateral inhibition in sensory systems enhances contrast by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Suppressing neighboring channels when one is strongly activated",
      "Amplifying uniform background equally everywhere",
      "Eliminating all inhibition in the circuit",
      "Converting photoreceptors to mechanoreceptors",
    ],
    correct: 0,
    explanation: "Lateral inhibition sharpens stimulus boundaries by suppressing adjacent inactive regions.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Lateral inhibition sharpens stimulus boundaries by suppressing adjacent inactive regions.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulatory effects can persist longer than fast synaptic potentials because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Second-messenger cascades and kinase activity outlast the initial signal",
      "Ionotropic channels remain open indefinitely",
      "Action potentials stop permanently",
      "Myelin is degraded after each spike",
    ],
    correct: 0,
    explanation: "Metabotropic signaling engages biochemical cascades with slower decay kinetics.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "ON bipolar cells depolarize to light because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "They express metabotropic glutamate receptors that close TRPM1 channels in ON pathways",
      "They use ionotropic AMPA receptors identical to cochlear hair cells",
      "They hyperpolarize whenever cGMP rises",
      "They are electrically coupled to Pacinian corpuscles",
    ],
    correct: 0,
    explanation: "Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization.",
    wrongExplanations: [
      "",
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "The organ of Corti sits on the basilar membrane, which vibrates maximally at?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Different positions for different sound frequencies",
      "One fixed position for all frequencies",
      "The olfactory epithelium",
      "The corpus callosum primarily",
    ],
    correct: 0,
    explanation: "Mechanical properties vary along the cochlea, creating tonotopy.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mechanical properties vary along the cochlea, creating tonotopy.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin primarily signal?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "pain/temp",
      "Main mechanism: fine discriminative touch on glabrous skin",
      "Auditory frequency place coding",
      "Declarative memory consolidation",
    ],
    correct: 0,
    explanation: "Polymodal nociceptors and thermoreceptors use free nerve endings.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Polymodal nociceptors and thermoreceptors use free nerve endings.",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Which clinical presentation is most consistent with The spinothalamic tract carries?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "pain/temp to the thalamus",
      "Main mechanism: fine touch via dorsal columns",
      "Visual information from retina",
      "Dopamine from substantia nigra to striatum",
    ],
    correct: 0,
    explanation: "Anterolateral pathways convey nociceptive and thermal information.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anterolateral pathways convey nociceptive and thermal information.",
      "",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter appears white because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Myelin sheaths around axons scatter light",
      "It contains neuronal cell bodies (localizes the function to the wrong brain region)",
      "It is filled with blood plasma (localizes the function to the wrong brain region)",
      "Photopigments absorb all wavelengths (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Lipid-rich myelin gives white matter its light appearance.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lipid-rich myelin gives white matter its light appearance.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lipid-rich myelin gives white matter its light appearance.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (e.g., riding a bicycle) relies more on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Basal ganglia and cerebellum among other motor circuits",
      "The optic disc primarily",
      "Olfactory glomeruli",
      "The node of Ranvier primarily",
    ],
    correct: 0,
    explanation: "Procedural skills engage motor learning circuits including basal ganglia and cerebellum.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Procedural skills engage motor learning circuits including basal ganglia and cerebellum.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Procedural skills engage motor learning circuits including basal ganglia and cerebellum.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Procedural skills engage motor learning circuits including basal ganglia and cerebellum.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Glomeruli in the olfactory bulb represent?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Convergence of OSNs expressing the same receptor type",
      "Tonotopic frequency bands from the cochlea",
      "Center-surround retinal ganglion fields",
      "Nodes of Ranvier in peripheral nerves",
    ],
    correct: 0,
    explanation: "Each glomerulus receives input from OSNs expressing one receptor type.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each glomerulus receives input from OSNs expressing one receptor type.",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons in the spinal ventral horn?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Directly innervate skeletal muscle fibers",
      "Main mechanism: synapse on thalamic relay cells (maps the lesion to the wrong motor pathway or reflex)",
      "Transduce sound in the cochlea (maps the lesion to the wrong motor pathway or reflex)",
      "Express olfactory receptors primarily",
    ],
    correct: 0,
    explanation: "Lower motor neurons form the final common path to muscle.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower motor neurons form the final common path to muscle.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower motor neurons form the final common path to muscle.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellar cortex contains?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Purkinje cells, granule cells, and parallel fibers",
      "Main mechanism: photoreceptors and horizontal cells",
      "Olfactory sensory neurons with one receptor each",
      "Endothelial tight junctions of the BBB primarily",
    ],
    correct: 0,
    explanation: "Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The prefrontal cortex contributes to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Working memory and executive control of behavior",
      "Phototransduction in rods primarily",
      "Basilar membrane vibration patterns",
      "Direct release of ACh at the neuromuscular junction from OSNs",
    ],
    correct: 0,
    explanation: "Prefrontal circuits support working memory, planning, and cognitive control.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Prefrontal circuits support working memory, planning, and cognitive control.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Prefrontal circuits support working memory, planning, and cognitive control.",
      "",
    ]
  },
  {
    topic: "Brain Function",
    question: "The amygdala is heavily involved in?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Emotional processing and fear learning",
      "Basilar membrane tonotopy primarily",
      "Phototransduction in cones",
      "Saltatory conduction velocity measurement",
    ],
    correct: 0,
    explanation: "Amygdalar circuits associate stimuli with emotional significance.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Amygdalar circuits associate stimuli with emotional significance.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Amygdalar circuits associate stimuli with emotional significance.",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If E_K = −90 mV and E_Na = +60 mV, increasing P_Na/P_K at rest will shift V_m?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Toward E_Na (less negative)",
      "Toward E_K (more negative)",
      "To exactly the arithmetic mean (−15 mV)",
      "Away from both equilibrium potentials equally",
    ],
    correct: 0,
    explanation: "Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Raising intracellular Na⁺ concentration while extracellular Na⁺ is fixed will make E_Na?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Less positive (closer to 0 mV)",
      "More positive",
      "Equal to E_K",
      "Independent of Na⁺ gradients",
    ],
    correct: 0,
    explanation: "Higher internal Na⁺ reduces the inward driving force, lowering E_Na.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling membrane resistance R_m while keeping C_m constant will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Double the time constant τ and increase input resistance",
      "Halve the time constant τ",
      "Have no effect on passive properties",
      "Prevent spatial summation entirely",
    ],
    correct: 0,
    explanation: "τ = R_m C_m and input resistance scale with R_m.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is driven mainly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Delayed-rectifier K⁺ channels and Ca²⁺-activated K⁺ channels",
      "Continued Na⁺ influx",
      "Opening of ligand-gated AMPA receptors",
      "Electrogenic pump reversal",
    ],
    correct: 0,
    explanation: "Delayed-rectifier (n-type) K⁺ efflux plus Ca²⁺-activated K⁺ channels (after Ca²⁺ influx) hyperpolarize the membrane below rest.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In saltatory conduction, the largest density of voltage-gated Na⁺ channels is at?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Nodes of Ranvier",
      "Internodal myelin wraps",
      "Dendritic spines",
      "Photoreceptor outer segments",
    ],
    correct: 0,
    explanation: "Na⁺ channels cluster at nodes where action potentials are actively regenerated.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Na⁺ channels cluster at nodes where action potentials are actively regenerated.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If g_Na increases while V_m is held fixed, the Na⁺ equilibrium current (I_Na) according to I = g(V_m − E_ion) will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increase in magnitude if V_m ≠ E_Na",
      "Often become zero regardless of V_m",
      "Reverse sign without changing magnitude",
      "Depend on the Na⁺/K⁺ pump rate",
    ],
    correct: 0,
    explanation: "Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Synaptotagmin on synaptic vesicles acts as a?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ca²⁺ sensor triggering fast exocytosis",
      "Voltage-gated Na⁺ channel subunit",
      "Postsynaptic scaffold protein",
      "Myelin structural protein",
    ],
    correct: 0,
    explanation: "Ca²⁺ binding to synaptotagmin triggers SNARE-mediated fusion.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ binding to synaptotagmin triggers SNARE-mediated fusion.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "If presynaptic Ca²⁺ influx is reduced, one expects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Lower probability of vesicle release",
      "Larger quantal size per vesicle",
      "Postsynaptic receptor number to increase instantly",
      "Conversion of IPSPs to action potentials in the axon",
    ],
    correct: 0,
    explanation: "Release probability is steeply dependent on presynaptic Ca²⁺ concentration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release probability is steeply dependent on presynaptic Ca²⁺ concentration.",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which description best applies to Glycine receptors at spinal inhibitory synapses?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ionotropic Cl⁻ channels producing fast IPSPs",
      "Metabotropic G-protein receptors",
      "Voltage-gated Na⁺ channels",
      "Electrical synapses via connexins",
    ],
    correct: 0,
    explanation: "Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord.",
    wrongExplanations: [
      "",
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection at a synapse is exemplified by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "NMDA receptor activation requiring presynaptic release and postsynaptic depolarization",
      "AMPA-dominated transmission without voltage dependence",
      "Electrical synapses that lack voltage sensitivity",
      "Passive decay that ignores timing",
    ],
    correct: 0,
    explanation: "NMDA receptors act as coincidence detectors for Hebbian plasticity.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors for Hebbian plasticity.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors for Hebbian plasticity.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors for Hebbian plasticity.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Disynaptic inhibition refers to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "An inhibitory interneuron interposed between excitatory input and target",
      "Direct monosynaptic excitation",
      "Electrical coupling without chemical synapses",
      "Recurrent excitation without inhibition",
    ],
    correct: 0,
    explanation: "Disynaptic pathways include an intermediate inhibitory neuron.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disynaptic pathways include an intermediate inhibitory neuron.",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonin (5-HT) commonly modulates circuits through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Multiple G-protein-coupled receptor subtypes",
      "Direct ligand-gated cation pores mainly at Many synapses",
      "Voltage-gated Na⁺ channels in photoreceptors",
      "Tip-link gating in hair cells",
    ],
    correct: 0,
    explanation: "5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: 5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. 5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "On-center retinal ganglion cells increase firing when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Light hits the receptive field center",
      "Light hits the surround without center stimulation",
      "The cochlea is stimulated by sound",
      "Odorants bind glomerular receptors",
    ],
    correct: 0,
    explanation: "ON-center cells are excited by center illumination and often inhibited by surround light.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ON-center cells are excited by center illumination and often inhibited by surround light.",
      "",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increasing firing rate with louder stimuli",
      "Changing the wavelength of basilar membrane resonance",
      "Switching from rods to cones",
      "Eliminating all spontaneous activity at threshold",
    ],
    correct: 0,
    explanation: "Rate coding in auditory nerve fibers conveys stimulus intensity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rate coding in auditory nerve fibers conveys stimulus intensity.",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Meissner corpuscles in glabrous skin are most sensitive to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Low-frequency flutter and texture",
      "Sustained deep pressure",
      "Light photons in scotopic conditions",
      "Odorant concentration gradients",
    ],
    correct: 0,
    explanation: "Meissner corpuscles are rapidly adapting receptors for light touch and texture.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Meissner corpuscles are rapidly adapting receptors for light touch and texture.",
      "",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral cells in the olfactory bulb receive input from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Olfactory sensory neuron axons in glomeruli",
      "Inner hair cells of the cochlea",
      "Retinal bipolar cells primarily",
      "Upper motor neurons in cortex",
    ],
    correct: 0,
    explanation: "OSN axons synapse in glomeruli onto mitral/tufted cell dendrites.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OSN axons synapse in glomeruli onto mitral/tufted cell dendrites.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Which clinical presentation is most consistent with The decussation of pyramidal tract fibers occurs mainly in?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The medulla (pyramids)",
      "The retina",
      "The olfactory epithelium",
      "The cochlear apex primarily",
    ],
    correct: 0,
    explanation: "Most corticospinal axons cross in the medullary pyramids.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most corticospinal axons cross in the medullary pyramids.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most corticospinal axons cross in the medullary pyramids.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Muscle spindles detect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Muscle stretch and length changes",
      "Light intensity in the fovea",
      "Sound frequency at the cochlear base",
      "Odor identity in glomeruli",
    ],
    correct: 0,
    explanation: "Intrafusal fibers in spindles transduce stretch for proprioceptive feedback.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "LTD (long-term depression) is characterized by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Persistent decrease in synaptic strength after specific stimulation patterns",
      "Persistent block of all Na⁺ channels",
      "Increased photopigment bleaching",
      "Loss of all cochlear amplification",
    ],
    correct: 0,
    explanation: "LTD is activity-dependent weakening of synaptic efficacy, complementing LTP.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Brain Function",
    question: "The primary visual cortex (V1) is organized such that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neighboring columns represent neighboring regions of visual space",
      "Most orientations are represented in one cell",
      "Tonotopy maps frequency to position",
      "Odor types map one-to-one to single glomeruli without overlap",
    ],
    correct: 0,
    explanation: "Retinotopic and columnar organization in V1 preserves spatial relationships from the retina.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Retinotopic and columnar organization in V1 preserves spatial relationships from the retina.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Which description best applies to A major advantage of electrical synapses over chemical synapses?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Faster, bidirectional signaling with minimal synaptic delay",
      "Ability to store long-term memories without protein synthesis",
      "Exclusive use of second messengers for amplification",
      "Requirement for Ca²⁺-triggered exocytosis",
    ],
    correct: 0,
    explanation: "Gap junctions pass current directly with very short latency.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Protein kinase A (PKA) is activated when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "cAMP binds regulatory subunits releasing catalytic subunits",
      "IP₃ directly opens the Na⁺ channel pore",
      "Glutamate binds AMPA receptors without Na⁺ flux",
      "Photopigment is bleached in darkness",
    ],
    correct: 0,
    explanation: "cAMP binding to PKA regulatory subunits frees active catalytic subunits.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to voltage-gated K⁺ channels typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Prolongs repolarization and broadens the action potential",
      "Blocks Na⁺ channels and prevents initiation",
      "Hyperpolarizes photoreceptors in light",
      "Closes gap junction connexons primarily",
    ],
    correct: 0,
    explanation: "K⁺ channel block slows repolarization, widening the spike.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. K⁺ channel block slows repolarization, widening the spike.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. K⁺ channel block slows repolarization, widening the spike.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal dendritic synapse is smaller than at the synapse because of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Passive cable attenuation along dendrites",
      "Active regeneration in dendrites identical to axons",
      "Elimination of all ion gradients",
      "Exclusive Cl⁻ permeability at the soma",
    ],
    correct: 0,
    explanation: "Subthreshold signals decrement with distance due to leak and axial resistance.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold signals decrement with distance due to leak and axial resistance.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors reduces the response because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Receptors enter a closed state despite ligand binding",
      "Vesicle pool is permanently depleted in one trial",
      "Myelin is removed from the presynaptic axon",
      "The Na⁺/K⁺ pump reverses direction",
    ],
    correct: 0,
    explanation: "Desensitized receptors fail to open even when neurotransmitter remains bound.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  }
];

const NEW_TIER3 = [
  {
    topic: "Resting Potential",
    question: "At rest, if K⁺ leak conductance dominates, increasing Na⁺ leak conductance will shift V_m?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Toward E_Na (less negative)",
      "Toward E_K (more negative)",
      "To exactly 0 mV instantly",
      "Away from both equilibrium potentials equally with no shift",
    ],
    correct: 0,
    explanation: "Resting V_m is a conductance-weighted average of equilibrium potentials; added Na⁺ leak pulls V_m toward E_Na.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Which description best applies to For a cation with equal intracellular and extracellular concentrations, the Nernst potential?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "0 mV",
      "−90 mV",
      "60 mV",
      "Undefined because z=0",
    ],
    correct: 0,
    explanation: "When [inside]=[outside], the logarithmic term is zero and E_ion = 0 mV.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If λ is short, EPSPs from distal synapses at the axon hillock will be?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Smaller due to greater attenuation",
      "Larger than proximal EPSPs",
      "Unchanged regardless of distance",
      "Converted directly to action potentials without decay",
    ],
    correct: 0,
    explanation: "Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Local anesthetics that block voltage-gated Na⁺ channels prevent action potentials by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Reducing regenerative Na⁺ current needed for propagation",
      "Opening all K⁺ leak channels",
      "Increasing myelin thickness",
      "Blocking gap junction connexins",
    ],
    correct: 0,
    explanation: "Without Na⁺ channel activation, regenerative depolarization cannot occur.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Without Na⁺ channel activation, regenerative depolarization cannot occur.",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Without Na⁺ channel activation, regenerative depolarization cannot occur.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "At a node of Ranvier, the inward current during an action potential is carried mainly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated Na⁺ channels",
      "K⁺ leak channels",
      "Ligand-gated Cl⁻ channels",
      "Gap junction hemichannels primarily",
    ],
    correct: 0,
    explanation: "Clustered Na⁺ channels at nodes regenerate the action potential.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Clustered Na⁺ channels at nodes regenerate the action potential.",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Clustered Na⁺ channels at nodes regenerate the action potential.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If E_ion for a permeant cation is +50 mV and V_m is −70 mV, the driving force for that ion?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "120 mV inward (V_m − E_ion = −120 mV)",
      "20 mV outward",
      "Zero because the cell is at rest",
      "50 mV with no direction",
    ],
    correct: 0,
    explanation: "Driving force is V_m − E_ion; negative values indicate inward current for cations.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Driving force is V_m − E_ion; negative values indicate inward current for cations.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Under the conditions described in the stem, which value equals membrane potential?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The potential at which net ion flux through the open channel is zero",
      "Often −90 mV for all receptors",
      "The Nernst potential of sodium regardless of permeabilities",
      "The voltage at which the pump stops",
    ],
    correct: 0,
    explanation: "E_rev is determined by relative permeabilities of ions passing through the channel pore.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: E_rev is determined by relative permeabilities of ions passing through the channel pore.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: E_rev is determined by relative permeabilities of ions passing through the channel pore.",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Miniature EPSCs (mEPSCs) reflect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Spontaneous single-vesicle release without action potentials",
      "Action-potential-evoked multivesicular release",
      "Electrical coupling through myelin",
      "Retrograde nitric oxide signaling primarily",
    ],
    correct: 0,
    explanation: "mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors reduces postsynaptic current even when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Neurotransmitter remains bound",
      "No neurotransmitter is present",
      "The cell is at E_K exactly",
      "Gap junctions are open",
    ],
    correct: 0,
    explanation: "Conformational desensitization lowers channel open probability despite bound agonist.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "NMDA receptors require both glutamate binding and?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Postsynaptic depolarization to relieve Mg block",
      "Hyperpolarization below −120 mV",
      "Exclusive presynaptic GABA release",
      "Complete absence of AMPA receptors",
    ],
    correct: 0,
    explanation: "Voltage-dependent Mg²⁺ block makes NMDA receptors coincidence detectors for LTP.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Voltage-dependent Mg²⁺ block makes NMDA receptors coincidence detectors for LTP.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection at CA1 synapses is implemented by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "NMDA receptor voltage-dependent Mg block",
      "AMPA receptors at hyperpolarized potentials",
      "Electrical synapses in the retina",
      "Pacinian corpuscle adaptation",
    ],
    correct: 0,
    explanation: "NMDA receptors require both glutamate and depolarization to pass Ca²⁺ current.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NMDA receptors require both glutamate and depolarization to pass Ca²⁺ current.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "EPSP amplitude at the soma is reduced for distal synapses primarily due to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Passive cable attenuation along dendrites",
      "Complete absence of receptors at distal sites",
      "Saltatory conduction in dendrites",
      "Photoreceptor convergence",
    ],
    correct: 0,
    explanation: "Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Disinhibition refers to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Removal of inhibitory input onto a neuron, effectively increasing its excitability",
      "Adding extra GABAergic synapses permanently",
      "Blocking all excitatory glutamate release",
      "Myelinating inhibitory interneurons",
    ],
    correct: 0,
    explanation: "Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron.",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Volume transmission describes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Diffusion of neuromodulators through extracellular fluid to distant targets",
      "Saltatory conduction primarily",
      "Direct cytoplasmic coupling via connexins",
      "Transduction of sound in the basilar membrane",
    ],
    correct: 0,
    explanation: "Some modulators act beyond the synaptic cleft through extracellular diffusion.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Some modulators act beyond the synaptic cleft through extracellular diffusion.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Some modulators act beyond the synaptic cleft through extracellular diffusion.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "The blind spot corresponds to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The optic disc where ganglion cell axons exit and photoreceptors are absent",
      "The fovea with highest acuity",
      "The cochlear apex",
      "The olfactory bulb glomerular layer",
    ],
    correct: 0,
    explanation: "No photoreceptors lie over the optic disc, creating a scotoma compensated by filling-in.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Color opponency in retinal ganglion cells arises from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Antagonistic inputs from different cone types",
      "Tonotopic mapping on the basilar membrane",
      "One OSN-one receptor rule in the bulb",
      "Muscle spindle Ia afferents primarily",
    ],
    correct: 0,
    explanation: "Opponent color circuits compare L, M, and S cone inputs.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Opponent color circuits compare L, M, and S cone inputs.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity primarily through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increased action potential firing rate",
      "Changing the amino acid sequence of rhodopsin",
      "Shifting the visual receptive field center",
      "Blocking all K⁺ leak channels permanently",
    ],
    correct: 0,
    explanation: "Rate coding complements place coding for intensity and temporal features.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "The dorsal column-medial lemniscus pathway carries?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Fine touch and proprioceptive information to the thalamus",
      "Main mechanism: pain/temp via spinothalamic tract",
      "Visual information from retina to V1",
      "Olfactory signals from bulb to cortex directly without relay",
    ],
    correct: 0,
    explanation: "DCML carries discriminative touch and proprioception for somatosensory cortex.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DCML carries discriminative touch and proprioception for somatosensory cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DCML carries discriminative touch and proprioception for somatosensory cortex.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The thalamus functions mainly as?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "A relay and gate for sensory information to cortex",
      "The primary site of phototransduction",
      "The location of cerebellar Purkinje cells",
      "The exclusive source of cerebrospinal fluid production without other roles",
    ],
    correct: 0,
    explanation: "Thalamic nuclei relay and modulate sensory and motor signals to cortex.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei relay and modulate sensory and motor signals to cortex.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The ventricular system contains?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "CSF-filled cavities lined by ependyma connecting brain regions",
      "Myelinated axons primarily with no fluid (localizes the function to the wrong brain region)",
      "Photoreceptor layers of the retina (localizes the function to the wrong brain region)",
      "Glomeruli for odorant coding (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Ventricular CSF circulates through interconnected cavities.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ventricular CSF circulates through interconnected cavities.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Long-term depression (LTD) at cerebellar parallel fiber-Purkinje synapses involves?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Climbing fiber co-activation and Ca signaling leading to AMPA receptor internalization",
      "Exclusive NMDA-independent phototransduction",
      "Persistent closure of all gap junctions in retina",
      "Removal of the Na⁺/K⁺ pump from the AIS",
    ],
    correct: 0,
    explanation: "Cerebellar LTD weakens parallel fiber inputs following climbing fiber pairing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "LTD in hippocampus can be induced by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Low-frequency stimulation leading to reduced AMPA receptor insertion",
      "Exclusive high-frequency tetanic stimulation causing LTP",
      "Photoreceptor bleaching in bright light",
      "Opening all gap junctions in the retina",
    ],
    correct: 0,
    explanation: "Low-frequency protocols can weaken synapses via receptor internalization and phosphatase activity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency protocols can weaken synapses via receptor internalization and phosphatase activity.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral/tufted cells in the olfactory bulb?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Project olfactory information to higher brain areas",
      "Transduce photons in the outer segment",
      "Form the blood-brain barrier endothelial layer",
      "Are the primary mechanoreceptors in skin",
    ],
    correct: 0,
    explanation: "Bulb output neurons relay processed odor information centrally.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The basal ganglia loop through the striatum helps?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Select and initiate appropriate motor programs",
      "Transduce light in rods and cones (maps the lesion to the wrong motor pathway or reflex)",
      "Encode pitch on the basilar membrane (maps the lesion to the wrong motor pathway or reflex)",
      "Form tight junctions at the BBB primarily (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Basal ganglia circuits gate and select motor actions.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia circuits gate and select motor actions.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia circuits gate and select motor actions.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Brain lateralization includes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Specialization of language functions in the left hemisphere",
      "Identical olfactory maps in most glomerulus for all odors",
      "Absence of any commissural connections",
      "Exclusive use of electrical synapses in cortex",
    ],
    correct: 0,
    explanation: "Many cognitive functions show hemispheric specialization, notably language in most individuals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If the Na⁺/K⁺ pump rate doubles but relative leak conductances are unchanged, the immediate effect on V_m?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange",
      "Immediate depolarization to E_Na",
      "No change because pumps do not affect voltage",
      "Shift to E_Cl regardless of Cl⁻ conductance",
    ],
    correct: 0,
    explanation: "Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly.",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C, a tenfold increase in external K⁺ (with fixed internal K⁺) shifts E_K by approximately?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "61 mV (toward 0 mV)",
      "−61 mV",
      "0 mV",
      "120 mV",
    ],
    correct: 0,
    explanation: "A tenfold change in concentration ratio changes E_ion by about 61 mV at body temperature.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If both R_m and R_i double while C_m is constant, the length constant λ?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Remains unchanged because λ = √(R_m/R_i)",
      "Doubles",
      "Halves",
      "Becomes zero",
    ],
    correct: 0,
    explanation: "Proportional changes in R_m and R_i cancel in the ratio under the square root.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The positive feedback loop during the rising phase ends when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Na⁺ channel inactivation dominates and K⁺ efflux increases",
      "The pump stops entirely",
      "Cl⁻ conductance goes to zero",
      "Gap junctions close permanently",
    ],
    correct: 0,
    explanation: "Inactivation of Na⁺ channels and activation of K⁺ channels terminate the upswing.",
    wrongExplanations: [
      "",
      "",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Inactivation of Na⁺ channels and activation of K⁺ channels terminate the upswing.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Cooling an axon reduces conduction velocity primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slowing voltage-gated channel kinetics and ion diffusion",
      "Increasing myelin thickness",
      "Raising E_Na above, 100 mV",
      "Eliminating passive spread between nodes",
    ],
    correct: 0,
    explanation: "Temperature affects channel gating rates and ion mobility, slowing propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If V_m is clamped at E_K, the driving force on K⁺ ions?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Zero (no net electrochemical driving force)",
      "Maximal inward",
      "Maximal outward",
      "Determined by the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Botulinum toxin reduces synaptic transmission by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Cleaving SNARE proteins required for vesicle fusion",
      "Opening all postsynaptic Cl⁻ channels",
      "Blocking voltage-gated K⁺ channels in photoreceptors",
      "Increasing rhodopsin activation in light",
    ],
    correct: 0,
    explanation: "SNARE cleavage prevents Ca²⁺-triggered exocytosis of neurotransmitter.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Facilitation at a synapse after a short train of presynaptic spikes is often due to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Residual presynaptic Ca²⁺ elevating release probability",
      "Immediate postsynaptic receptor insertion without activity",
      "Persistent myelin loss",
      "Photoreceptor dark current increase",
    ],
    correct: 0,
    explanation: "Leftover Ca²⁺ from prior spikes increases probability of subsequent release.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors inhibit neurons primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Opening K⁺ channels via G-proteins and reducing Ca²⁺ channel activity",
      "Producing fast Cl⁻ influx through the same pore as GABA<sub>A</sub> receptors",
      "Opening voltage-gated Na⁺ channels to trigger regenerative spikes",
      "Hyperpolarizing by pumping Cl⁻ into the cell against its gradient",
    ],
    correct: 0,
    explanation: "GABA<sub>B</sub> is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry, slowing the cell and curbing transmitter release.",
    wrongExplanations: [
      "",
      "GABA<sub>A</sub> is ionotropic and conducts Cl⁻ rapidly; GABA<sub>B</sub> acts slowly through G-proteins.",
      "GABA<sub>B</sub> signaling is inhibitory and does not activate voltage-gated Na⁺ channels.",
      "GABA<sub>B</sub> inhibition works mainly through K⁺ and Ca²⁺ channel modulation, not active Cl⁻ pumping.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in neural circuits adjusts responses by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Scaling activity relative to pooled network activity",
      "Adding excitatory inputs without inhibition",
      "Eliminating all passive membrane properties",
      "Converting chemical synapses to gap junctions primarily",
    ],
    correct: 0,
    explanation: "Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all dynamics in a network can arise from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Recurrent lateral inhibition among excitatory units",
      "Elimination of all inhibitory interneurons",
      "Exclusive electrical synapses without thresholds",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "Lateral inhibition suppresses non-selected units, sharpening competition.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine increases cortical arousal partly by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Modulating HCN and other channels via β-adrenergic receptors",
      "Directly gating nicotinic ACh pores at the neuromuscular junction",
      "Mechanically deflecting inner hair cell stereocilia",
      "Increasing photopigment synthesis in cones",
    ],
    correct: 0,
    explanation: "NE modulates intrinsic excitability and synaptic gain through metabotropic pathways.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NE modulates intrinsic excitability and synaptic gain through metabotropic pathways.",
    ]
  },
  {
    topic: "Visual System",
    question: "Receptive field orientation selectivity in V1 simple cells reflects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Specific arrangements of ON and OFF subregions in space",
      "Tonotopic mapping of sound frequency",
      "Olfactory glomerular identity alone",
      "Exclusive input from rods without cones",
    ],
    correct: 0,
    explanation: "Simple cells respond best to edges at a preferred orientation due to elongated ON/OFF zones.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Phase locking in auditory brainstem neurons helps encode?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Low-frequency pitch via precise spike timing to waveform phase",
      "Color opponency in the fovea",
      "Odor concentration without temporal structure",
      "Muscle spindle length without frequency information",
    ],
    correct: 0,
    explanation: "At low frequencies, timing of spikes to stimulus phase carries pitch information.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Two-point discrimination acuity is highest on fingertips because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Receptor density and cortical magnification are greatest there",
      "Pacinian corpuscles are absent in glabrous skin",
      "Photoreceptors are packed in the fingertip epidermis",
      "Olfactory receptors line the glabrous surface",
    ],
    correct: 0,
    explanation: "High receptor density and large somatosensory cortical representation improve spatial acuity.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Granule cells in the olfactory bulb provide?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Recurrent inhibition onto mitral cells via dendrodendritic synapses",
      "Direct transduction of odorants to action potentials",
      "Mechanotransduction of sound in the cochlea",
      "Saltatory conduction in the optic nerve",
    ],
    correct: 0,
    explanation: "Granule cell inhibition shapes mitral cell output and odor discrimination.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The limbic system is functionally linked to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Emotion, memory, and motivated behavior",
      "Exclusive control of phototransduction",
      "Cochlear amplification by outer hair cells",
      "Direct generation of CSF in muscle spindles",
    ],
    correct: 0,
    explanation: "Limbic structures (e.g., amygdala, hippocampus) integrate affect and memory.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellum contributes to motor control primarily by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Error correction and timing of movements via mossy and climbing fiber input",
      "Transducing odorants in glomeruli (maps the lesion to the wrong motor pathway or reflex)",
      "Encoding color opponency in blobs (maps the lesion to the wrong motor pathway or reflex)",
      "Generating the cochlear traveling wave (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Cerebellar circuits compare intended and actual movement for fine coordination.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis is required for long-term memory because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Persistent synaptic changes require new proteins for structural plasticity",
      "Immediate early genes alone permanently store memory without translation",
      "Photopigment regeneration depends on ribosomes in outer segments",
      "Action potentials is unlikely without new ion channel genes each second",
    ],
    correct: 0,
    explanation: "Consolidation engages transcription and translation to stabilize synaptic changes.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation engages transcription and translation to stabilize synaptic changes.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Default mode network activity is most prominent during?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Internally directed cognition when not engaged in a task",
      "Active phototransduction in bright light",
      "Cochlear resonance at high frequencies primarily",
      "Muscle spindle stretch during maximal contraction",
    ],
    correct: 0,
    explanation: "DMN regions are active during rest, mind-wandering, and self-referential thought.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DMN regions are active during rest, mind-wandering, and self-referential thought.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DMN regions are active during rest, mind-wandering, and self-referential thought.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical coupling strength between cells can be modulated by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Phosphorylation state of connexins altering gap junction conductance",
      "SNARE-mediated vesicle fusion in the cleft",
      "Photopigment bleaching in rods",
      "Tip-link tension in stereocilia",
    ],
    correct: 0,
    explanation: "Connexin phosphorylation and trafficking regulate gap junction permeability.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "DAG (diacylglycerol) activates?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Protein kinase C at the membrane",
      "Voltage-gated Na⁺ channels directly without lipids",
      "Rhodopsin in the dark",
      "The Na⁺/K⁺ pump primarily",
    ],
    correct: 0,
    explanation: "PLC cleavage of PIP₂ yields DAG, which activates PKC alongside Ca²⁺.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PLC cleavage of PIP₂ yields DAG, which activates PKC alongside Ca²⁺.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A neuron with reduced Na⁺ channel density will likely show?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Higher threshold and slower rising phase",
      "Lower threshold and faster rising phase",
      "No change in excitability",
      "Persistent hyperpolarization to E_K without stimulation",
    ],
    correct: 0,
    explanation: "Fewer Na⁺ channels require stronger depolarization and slow regenerative upswing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Under voltage clamp, increasing membrane conductance while holding voltage constant increases?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Clamp current required to maintain the set voltage",
      "Resting potential without clamp",
      "Length constant without changing resistance",
      "Photoreceptor sensitivity to light",
    ],
    correct: 0,
    explanation: "More conductance demands more compensatory current to hold V_m fixed.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Stochastic release at a synapse means?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Only a fraction of presynaptic spikes trigger vesicle fusion",
      "Every spike releases exactly one vesicle with certainty",
      "Postsynaptic receptors are seldom activated",
      "Quantal size varies with action potential amplitude above threshold",
    ],
    correct: 0,
    explanation: "Release probability is less than 1, making transmission probabilistic.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release probability is less than 1, making transmission probabilistic.",
      "",
    ]
  }
];

const NEW_TIER4 = [
  {
    topic: "Resting Potential",
    question: "Given E_K = −90 mV, E_Na = +60 mV, and P_K : P_Na = 40 : 1 at rest, V_m is best approximated as?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Near −90 mV because P_K dominates",
      "Near, 60 mV because E_Na is larger",
      "Exactly halfway at −15 mV",
      "At 0 mV regardless of permeability",
    ],
    correct: 0,
    explanation: "Goldman-weighted calculation with dominant K⁺ permeability places rest near E_K.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If a drug doubles K⁺ leak conductance without changing the pump, the new resting potential will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Move closer to E_K",
      "Move closer to E_Na",
      "Remain unchanged because the pump sets voltage directly",
      "Become exactly 0 mV",
    ],
    correct: 0,
    explanation: "Higher K⁺ conductance increases the weight of E_K in the Goldman equation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If P_Cl increases while E_Cl remains −70 mV and rest is −65 mV, V_m will shift toward?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "E_Cl (more negative)",
      "E_Na primarily",
      "0 mV",
      "The photoreceptor dark current",
    ],
    correct: 0,
    explanation: "Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Halving intracellular Na⁺ while keeping extracellular Na⁺ constant will make E_Na?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "More positive",
      "More negative (closer to 0 mV)",
      "Exactly 0 mV",
      "Equal to E_K",
    ],
    correct: 0,
    explanation: "Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "The Nernst slope for a monovalent cation at 37°C is approximately?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "~62 mV per 10-fold concentration change",
      "~5 mV per 10-fold concentration change",
      "~120 mV per 2-fold change mainly at 0°C with no temperature effect",
      "Independent of valence",
    ],
    correct: 0,
    explanation: "RT/zF at body temperature gives roughly 62 mV for a 10-fold gradient in a monovalent ion.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RT/zF at body temperature gives roughly 62 mV for a 10-fold gradient in a monovalent ion.",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a divalent cation such as Ca²⁺, a 10-fold concentration gradient at 37°C yields a Nernst potential with magnitude?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "~31 mV (half that of monovalent due to z=2)",
      "~62 mV identical to monovalent",
      "~124 mV regardless of valence",
      "0 mV",
    ],
    correct: 0,
    explanation: "Nernst slope scales as 1/z; divalent ions have halved slope.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nernst slope scales as 1/z; divalent ions have halved slope.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nernst slope scales as 1/z; divalent ions have halved slope.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "For a passive dendrite, doubling R_m while holding R_i constant changes λ by a factor of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "√2 (increases)",
      "2 (doubles exactly)",
      "1/2 (halves)",
      "4 (quadruples)",
    ],
    correct: 0,
    explanation: "λ ∝ √R_m; doubling R_m multiplies λ by √2.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The time constant τ = R_m C_m implies that halving R_m while doubling C_m will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Leave τ unchanged",
      "Quadruple τ",
      "Halve τ",
      "Set τ to zero",
    ],
    correct: 0,
    explanation: "The product R_m C_m remains the same when one halves and the other doubles.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Specific membrane resistance (R_m) differs from axial resistance (R_i) in that R_m?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Relates transmembrane current to voltage across the membrane",
      "Measures intracellular cytoplasmic resistivity along the axon",
      "Is identical to input resistance at the soma in all geometries",
      "Determines olfactory receptor choice",
    ],
    correct: 0,
    explanation: "R_m governs transmembrane leak; R_i governs longitudinal current inside the cell.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: R_m governs transmembrane leak; R_i governs longitudinal current inside the cell.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "After a spike, Na⁺ channel recovery from inactivation requires?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Repolarization of the membrane toward rest",
      "Further depolarization above, 40 mV",
      "Complete removal of all K⁺ channels",
      "Opening of NMDA receptors",
    ],
    correct: 0,
    explanation: "Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated K⁺ channels are pharmacologically blocked during a spike, repolarization will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Be slowed and the action potential may broaden",
      "Complete instantly with no change",
      "Prevent all Na⁺ channel opening permanently",
      "Eliminate the need for Na⁺ inactivation",
    ],
    correct: 0,
    explanation: "K⁺ efflux normally repolarizes the membrane; blockade prolongs depolarization.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) selectively blocks?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated Na⁺ channels",
      "K⁺ leak channels",
      "Most gap junctions",
      "Photoreceptor cGMP phosphodiesterase",
    ],
    correct: 0,
    explanation: "TTX binds voltage-gated Na⁺ channel pores, preventing spike generation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: TTX binds voltage-gated Na⁺ channel pores, preventing spike generation.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX binds voltage-gated Na⁺ channel pores, preventing spike generation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Internodal myelin reduces what component of the membrane that slows voltage changes?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Capacitive charging of the membrane (C_m per unit length)",
      "Intracellular resistance mainly with no capacitive effect",
      "Synaptic vesicle pool size",
      "Receptor affinity for GABA",
    ],
    correct: 0,
    explanation: "Myelin lowers effective capacitance, allowing faster charging at nodes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin lowers effective capacitance, allowing faster charging at nodes.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "If nodes of Ranvier are spaced farther apart in a myelinated axon, conduction velocity typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increases up to a point because fewer regenerative steps are needed",
      "Decreases to zero",
      "Is unaffected by internode distance",
      "Elimination of all K⁺ channels",
    ],
    correct: 0,
    explanation: "Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Orthodromic conduction refers to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Action potentials traveling in the normal direction from soma toward axon terminals",
      "Backpropagation from terminals to soma primarily called antidromic",
      "Passive spread mainly in dendrites with no active component",
      "Synaptic transmission at electrical synapses",
    ],
    correct: 0,
    explanation: "Orthodromic propagation follows the natural axonal direction of signaling.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orthodromic propagation follows the natural axonal direction of signaling.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orthodromic propagation follows the natural axonal direction of signaling.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orthodromic propagation follows the natural axonal direction of signaling.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "At V_m = E_K, net K⁺ current is zero because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The electrical and chemical driving forces balance",
      "Most K⁺ channels are removed from the membrane",
      "Na⁺ influx cancels K⁺ efflux mainly at threshold",
      "The pump stops at E_K",
    ],
    correct: 0,
    explanation: "At E_K, the chemical gradient for K⁺ efflux equals the opposing electrical gradient.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At E_K, the chemical gradient for K⁺ efflux equals the opposing electrical gradient.",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Increasing membrane conductance to an ion while V_m is held fixed will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increase current flow for that ion",
      "Decrease current flow proportionally to conductance",
      "Change E_ion directly",
      "Eliminate the Nernst potential",
    ],
    correct: 0,
    explanation: "I = g(V_m − E_ion); higher conductance increases current at fixed voltage.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Hyperpolarizing current injection moves V_m?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Away from 0 mV (more negative)",
      "Toward 0 mV",
      "To E_Na instantly",
      "To the reversal potential of AMPA",
    ],
    correct: 0,
    explanation: "Outward current hyperpolarizes the membrane.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outward current hyperpolarizes the membrane.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outward current hyperpolarizes the membrane.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "The synaptic cleft is typically on the order of?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "~20–40 nm wide",
      "~2×10³ μm wide",
      "Continuous with the cytoplasm via gap junctions",
      "Identical in width to the axon initial segment",
    ],
    correct: 0,
    explanation: "The narrow cleft allows rapid diffusion of neurotransmitter to postsynaptic receptors.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The narrow cleft allows rapid diffusion of neurotransmitter to postsynaptic receptors.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Endocytosis following exocytosis serves to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Recycle synaptic vesicle membrane and maintain release capacity",
      "Permanently remove all presynaptic receptors",
      "Generate action potentials in the postsynaptic cell",
      "Convert ionotropic to metabotropic receptors",
    ],
    correct: 0,
    explanation: "Vesicle recycling sustains ongoing synaptic transmission.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Active zone proteins (e.g., RIM, Munc13) function to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Dock and prime vesicles near Ca channels for release",
      "Generate myelin around the terminal",
      "Transduce odorants in the nasal epithelium",
      "Encode frequency in the cochlear apex",
    ],
    correct: 0,
    explanation: "Active zone scaffolding positions vesicles for Ca-triggered fusion.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Co-release of multiple neurotransmitters from one terminal violates Dale's principle only if?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The same neuron releases different transmitters from different terminals inconsistently with its phenotype",
      "One vesicle contains glutamate",
      "Postsynaptic cells express receptors",
      "Action potentials arrive at the terminal",
    ],
    correct: 0,
    explanation: "Dale's principle concerns consistent transmitter identity across a neuron's outputs.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "High-frequency stimulation can deplete the readily releasable vesicle pool, causing?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Short-term synaptic depression",
      "Persistent LTP at Many synapses instantly",
      "Myelin formation in the cleft",
      "Conversion of EPSPs to IPSPs by Nernst shift",
    ],
    correct: 0,
    explanation: "Vesicle depletion reduces release probability during sustained high-frequency firing.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicle depletion reduces release probability during sustained high-frequency firing.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Which description best applies to Glycine receptors in spinal circuits?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Ionotropic Cl⁻ channels mediating fast inhibition",
      "Metabotropic mainly with no ion pore",
      "Voltage-gated Na⁺ channels",
      "Photoreceptor channels gated by cGMP",
    ],
    correct: 0,
    explanation: "Glycine receptors are ligand-gated Cl⁻ channels producing fast IPSPs.",
    wrongExplanations: [
      "",
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Glycine receptors are ligand-gated Cl⁻ channels producing fast IPSPs.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Allosteric modulators of ionotropic receptors?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Bind sites distinct from the agonist site and alter channel gating",
      "Would need to replace neurotransmitter in the primary binding pocket to have any effect",
      "Main mechanism: act on metabotropic GPCRs",
      "Permanently remove receptors from the membrane",
    ],
    correct: 0,
    explanation: "Allosteric sites tune channel open probability without competing at the agonist site.",
    wrongExplanations: [
      "",
      "",
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Allosteric sites tune channel open probability without competing at the agonist site.",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors are metabotropic and typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Open K⁺ channels or inhibit Ca²⁺ channels via G-proteins",
      "Form fast Cl⁻ channels identical to GABA<sub>A</sub>",
      "Directly fuse synaptic vesicles without a Ca²⁺ trigger",
      "Exist on rod photoreceptor terminals",
    ],
    correct: 0,
    explanation: "GABA<sub>B</sub> receptors mediate slow inhibition through G-protein modulation of channels.",
    wrongExplanations: [
      "",
      "GABA<sub>A</sub> receptors are ionotropic Cl⁻ channels; GABA<sub>B</sub> acts through G-proteins on K⁺ and Ca²⁺ channels.",
      "GABA<sub>B</sub> modulates channels and signaling; it does not directly drive exocytosis.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which capability best describes Metabotropic glutamate receptors (mGluRs) on presynaptic terminals?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inhibit or facilitate transmitter release via G-protein modulation of Ca channels",
      "Directly pass large Na currents at rest",
      "Replace SNARE proteins entirely",
      "Convert electrical to chemical synapses instantly",
    ],
    correct: 0,
    explanation: "Presynaptic mGluRs modulate release probability through G-protein signaling.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Presynaptic mGluRs modulate release probability through G-protein signaling.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "If EPSPs and IPSPs arrive simultaneously at the axon hillock, the net effect depends on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing and location",
      "Main mechanism: the largest EPSP regardless of IPSPs",
      "The myelin thickness primarily",
      "The olfactory receptor expressed by the neuron",
    ],
    correct: 0,
    explanation: "Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "A neuron with a high firing threshold compared to resting potential will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Require greater net depolarization to fire",
      "Fire spontaneously at rest without input",
      "Cannot receive synaptic input",
      "Convert all IPSPs to EPSPs",
    ],
    correct: 0,
    explanation: "Higher threshold means more integrated excitation is needed to reach spike initiation.",
    wrongExplanations: [
      "",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Higher threshold means more integrated excitation is needed to reach spike initiation.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Higher threshold means more integrated excitation is needed to reach spike initiation.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Which capability best describes Backpropagating action potentials into dendrites?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Provide a depolarization signal for coincidence-dependent plasticity",
      "Occur mainly in photoreceptors",
      "Require myelin on dendrites",
      "Eliminate all IPSPs permanently",
    ],
    correct: 0,
    explanation: "Backpropagation allows postsynaptic depolarization to coincide with synaptic input for plasticity.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Backpropagation allows postsynaptic depolarization to coincide with synaptic input for plasticity.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Backpropagation allows postsynaptic depolarization to coincide with synaptic input for plasticity.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all circuit dynamics can emerge from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Strong recurrent inhibition among competing excitatory units",
      "Purely passive membrane properties without synapses",
      "Exclusive electrical coupling with no inhibition",
      "Removal of all voltage-gated channels",
    ],
    correct: 0,
    explanation: "Recurrent inhibition allows one active unit to suppress competitors.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "An excitatory-inhibitory balance in cortical circuits helps?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Maintain stable firing rates and prevent runaway excitation",
      "Eliminate all action potentials at rest",
      "Replace LTP with LTD permanently",
      "Remove the need for neuromodulators entirely",
    ],
    correct: 0,
    explanation: "Balanced E/I input stabilizes network activity around functional set points.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Balanced E/I input stabilizes network activity around functional set points.",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators produce rhythmic motor output?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Without requiring continuous sensory input for each cycle",
      "Requires when photoreceptors are illuminated",
      "Primarily through gap junctions in the retina",
      "By blocking all inhibitory interneurons permanently",
    ],
    correct: 0,
    explanation: "CPGs intrinsically generate coordinated rhythmic activity for locomotion and breathing.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CPGs intrinsically generate coordinated rhythmic activity for locomotion and breathing.",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Noradrenergic modulation of cortex during alert states typically?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increases gain and reduces spontaneous noise in neural responses",
      "Eliminates all synaptic plasticity permanently",
      "Converts Many synapses to electrical",
      "Blocks all Na⁺/K⁺ pump activity",
    ],
    correct: 0,
    explanation: "Norepinephrine adjusts network gain and signal-to-noise for adaptive processing.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Norepinephrine adjusts network gain and signal-to-noise for adaptive processing.",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Which capability best describes Serotonergic modulation of spinal circuits?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Alter motor pattern generator excitability and reflex gain",
      "Directly transduce odorant molecules",
      "Replace hippocampal LTP with phototransduction",
      "Form the blood-brain barrier",
    ],
    correct: 0,
    explanation: "Serotonin tunes spinal and brainstem circuits involved in movement and mood-related processing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Acetylcholine in cortex during attention acts through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Both nicotinic (ionotropic) and muscarinic (metabotropic) receptors",
      "Rod outer segments generate all-or-none spikes in darkness",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Tight junction proteins of the BBB primarily",
    ],
    correct: 0,
    explanation: "ACh modulates cortical circuits through diverse receptor subtypes.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ACh modulates cortical circuits through diverse receptor subtypes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Midget ganglion cells in the fovea support high acuity through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Small receptive field centers with minimal convergence",
      "Massive convergence from hundreds of rods per cell",
      "Tonotopic frequency mapping",
      "One-neuron-one-receptor rule for odorants",
    ],
    correct: 0,
    explanation: "Low convergence preserves fine spatial detail in central vision.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Direction-selective ganglion cells encode motion direction using?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Asymmetric inhibition from starburst amacrine cells",
      "Place coding on the basilar membrane",
      "Homunculus magnification of the leg",
      "CREB phosphorylation in the cochlea",
    ],
    correct: 0,
    explanation: "Asymmetric inhibitory inputs create directional selectivity in retinal circuits.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Horizontal cells mediate lateral inhibition in retina by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Providing feedback/feedforward inhibition to photoreceptors and bipolar cells",
      "Encoding pitch on the basilar membrane",
      "Releasing dopamine into the striatum",
      "Forming the corpus callosum",
    ],
    correct: 0,
    explanation: "Horizontal cells spread inhibitory signals laterally to enhance contrast.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Horizontal cells spread inhibitory signals laterally to enhance contrast.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells contribute to cochlear amplification through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Electromotility adjusting basilar membrane mechanics",
      "Direct phototransduction of light",
      "Releasing GABA at the neuromuscular junction",
      "Forming tight junctions of the BBB",
    ],
    correct: 0,
    explanation: "Outer hair cell motility actively sharpens frequency tuning.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Interaural time differences are used for?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Localizing low-frequency sounds in the horizontal plane",
      "Detecting bitter taste on the tongue",
      "Encoding color opponency in cones",
      "Consolidating declarative memory in the hippocampus",
    ],
    correct: 0,
    explanation: "Brainstem circuits compare timing differences between ears for azimuth localization.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Brainstem circuits compare timing differences between ears for azimuth localization.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The medial geniculate nucleus of thalamus relays?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Auditory information to primary auditory cortex",
      "Olfactory glomerular maps directly to muscle",
      "Photoreceptor signals to the fovea",
      "CSF from choroid plexus to ventricles primarily",
    ],
    correct: 0,
    explanation: "MGN is the thalamic relay for ascending auditory pathways.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MGN is the thalamic relay for ascending auditory pathways.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Two-point discrimination threshold is finest on?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Fingertips due to high receptor density and cortical magnification",
      "Upper arm due to large skin area",
      "Trunk midline due to bilateral representation",
      "The optic disc due to absence of photoreceptors",
    ],
    correct: 0,
    explanation: "High receptor density and S1 magnification enable fine spatial acuity on fingertips.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High receptor density and S1 magnification enable fine spatial acuity on fingertips.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Rapidly adapting mechanoreceptors fire mainly at?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Onset and offset of mechanical stimuli",
      "Steady sustained pressure without change",
      "Constant odorant concentration over minutes",
      "Fixed basilar membrane positions for all tones",
    ],
    correct: 0,
    explanation: "Rapid adaptation emphasizes dynamic mechanical changes.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "C fibers typically convey?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slow pain/temp (unmyelinated)",
      "Fine discriminative touch with highest conduction velocity",
      "Photons to retinal ganglion cells",
      "Dopamine to the striatum",
    ],
    correct: 0,
    explanation: "Thin unmyelinated C fibers mediate slow nociceptive and thermal signals.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier astrocytic endfeet contribute by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Regulating the extracellular environment and supporting endothelial barrier function",
      "Generating action potentials for saltatory conduction (localizes the function to the wrong brain region)",
      "Replacing all photoreceptors in the retina (localizes the function to the wrong brain region)",
      "Encoding frequency on the basilar membrane (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Astrocytes support and regulate the neurovascular unit at the BBB.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The cerebellum is critical for?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Coordinating timing and precision of movement (motor learning)",
      "Initial transduction of olfactory odorants",
      "Direct control of heart rate without brainstem involvement",
      "Exclusive storage of all episodic memories without hippocampus",
    ],
    correct: 0,
    explanation: "Cerebellar circuits refine motor commands and support motor learning.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar circuits refine motor commands and support motor learning.",
      "",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The internal capsule carries?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Corticospinal and thalamocortical fibers between cortex and brainstem/spinal cord",
      "Main mechanism: olfactory fila from epithelium to bulb (localizes the function to the wrong brain region)",
      "Photoreceptor axons primarily (localizes the function to the wrong brain region)",
      "Lymph fluid replacing CSF in all ventricles (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "The internal capsule contains major ascending and descending projection fibers.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The internal capsule contains major ascending and descending projection fibers.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Which capability best describes Protein synthesis inhibition shortly after LTP induction?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Impair consolidation of long-lasting synaptic changes",
      "Enhance immediate early gene expression permanently",
      "Convert rods to cones in the retina",
      "Eliminate tonotopy in the cochlea",
    ],
    correct: 0,
    explanation: "Persistent LTP often requires new protein synthesis for maintenance.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Systems consolidation proposes that over time declarative memories?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Become less dependent on hippocampus and more on neocortex",
      "Are stored primarily in the cochlear nucleus forever",
      "Require continuous photoreceptor activation",
      "Depend on gap junction electrical synapses",
    ],
    correct: 0,
    explanation: "Memory traces gradually redistribute from hippocampus to distributed cortical storage.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Memory traces gradually redistribute from hippocampus to distributed cortical storage.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Morris water maze testing in rodents assesses?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hippocampal-dependent spatial navigation memory",
      "Photoreceptor spectral sensitivity primarily",
      "Cochlear place theory without behavior",
      "Saltatory conduction velocity in peripheral nerve directly",
    ],
    correct: 0,
    explanation: "Hidden-platform spatial learning depends on hippocampal circuitry.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Adaptation in olfactory receptor neurons reduces response to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Prolonged constant odorant exposure",
      "Single photons of light",
      "Initial mechanical touch mainly at the fovea",
      "First action potential at the AIS",
    ],
    correct: 0,
    explanation: "Olfactory adaptation decreases sensitivity during sustained odor presentation.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Olfactory adaptation decreases sensitivity during sustained odor presentation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Olfactory adaptation decreases sensitivity during sustained odor presentation.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Enantiomers (mirror-image odor molecules) can smell different because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Receptor binding geometry is stereoselective",
      "The basilar membrane maps them to different frequencies",
      "Photoreceptors use different opsins for each enantiomer",
      "Gap junctions invert their charge",
    ],
    correct: 0,
    explanation: "Olfactory receptors discriminate molecular shape, including chirality.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Pheromone detection in many mammals involves?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "The vomeronasal organ projecting to accessory olfactory bulb",
      "The basilar membrane frequency map primarily",
      "Photoreceptor cGMP channels in the fovea",
      "Nodes of Ranvier in the corpus callosum",
    ],
    correct: 0,
    explanation: "Vomeronasal pathways process social chemical signals separately from main olfaction.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vomeronasal pathways process social chemical signals separately from main olfaction.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Corticospinal tract lesions typically produce?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Contralateral weakness or paralysis of voluntary movement",
      "Loss of olfactory receptor gene expression",
      "Elimination of all photoreceptor responses",
      "Persistent hyperpolarization of all photoreceptors in light",
    ],
    correct: 0,
    explanation: "Most corticospinal fibers decussate, causing contralateral motor deficits.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Muscle spindles provide proprioceptive feedback through?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Group Ia afferents signaling muscle stretch",
      "Direct dopamine release from substantia nigra to retina",
      "Olfactory receptor activation in glomeruli",
      "cGMP hydrolysis in photoreceptors",
    ],
    correct: 0,
    explanation: "Stretch-sensitive spindle afferents inform the CNS about muscle length and change.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The red nucleus contributes to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Motor coordination via rubrospinal tract influence on limb flexors",
      "Phototransduction primarily (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory combinatorial coding (maps the lesion to the wrong motor pathway or reflex)",
      "Formation of endothelial tight junctions (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Rubrospinal pathways modulate limb motor control, especially flexion.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rubrospinal pathways modulate limb motor control, especially flexion.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rubrospinal pathways modulate limb motor control, especially flexion.",
      "",
    ]
  },
  {
    topic: "Brain Function",
    question: "Default mode network activity increases during?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Internally directed thought and rest, decreasing during focused external tasks",
      "High-intensity physical exercise of a single muscle spindle",
      "Photoreceptor hyperpolarization in bright light primarily",
      "Saltatory conduction at many internode simultaneously",
    ],
    correct: 0,
    explanation: "The DMN is active during introspection and deactivates during externally focused attention.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The DMN is active during introspection and deactivates during externally focused attention.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Brain Function",
    question: "Functional magnetic resonance imaging (fMRI) BOLD signal reflects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Local changes in blood oxygenation coupled to neural activity",
      "Direct measurement of every synaptic vesicle fusion event",
      "The Nernst potential of individual ions in the cleft",
      "Mechanotransduction in outer hair cells",
    ],
    correct: 0,
    explanation: "BOLD contrasts blood oxygenation changes associated with neurovascular coupling.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: BOLD contrasts blood oxygenation changes associated with neurovascular coupling.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Broca's area is associated with?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Speech production (language output)",
      "Primary visual transduction in rods",
      "Basilar membrane resonance primarily",
      "Direct control of photoreceptor bleaching",
    ],
    correct: 0,
    explanation: "Broca's area in frontal cortex supports language production.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Broca's area in frontal cortex supports language production.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "With E_K = −90 mV, E_Na = +60 mV, E_Cl = −70 mV, and P_K:P_Na:P_Cl = 1:0.05:0.45 at rest, V_m is closest to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Between E_K and E_Cl, weighted by conductances",
      "Exactly E_Na",
      "Exactly 0 mV",
      "The average of all three without weighting",
    ],
    correct: 0,
    explanation: "Goldman equation weights each permeant ion; significant Cl⁻ conductance pulls V_m toward E_Cl.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If z = +2 for Ca²⁺, a fourfold increase in external Ca²⁺ (fixed internal) changes E_Ca by approximately?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Treats passive cable properties as sufficient for regenerative action potentials",
      "61 mV",
      "0 mV",
      "−61 mV",
    ],
    correct: 0,
    explanation: "For divalent ions the Nernst slope is halved; a fourfold outside change is ~ (61/2)×log10(4) ≈ 18.5 mV at 37°C.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Separating R_m and R_i effects: increasing R_m alone increases both λ and τ, whereas increasing R_i alone?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Decreases λ but leaves τ unchanged if C_m is constant",
      "Increases both λ and τ",
      "Decreases τ and increases λ",
      "Affects neither λ nor τ",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i) falls with higher R_i; τ = R_m C_m depends on R_m only.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The minimal stimulus (rheobase) to elicit a spike increases during the relative refractory period because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Fewer Na⁺ channels are available due to inactivation",
      "Most K⁺ channels are permanently deleted",
      "Myelin is absent at the AIS",
      "E_Na becomes negative",
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the current needed to reach threshold.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "If nodal Na⁺ channel density is halved in a myelinated axon, conduction failure is most likely when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Internodal distance is long and passive decay is large",
      "Internodal distance is very short with strong passive spread",
      "The axon is unmyelinated",
      "Temperature is raised to accelerate kinetics",
    ],
    correct: 0,
    explanation: "Insufficient nodal regeneration combined with excessive internodal decay blocks propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Under conditions of constant total conductance, shifting relative g_K upward while holding V_m fixed increases?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Outward K⁺ current if V_m > E_K",
      "Inward Na⁺ current if V_m < E_Na",
      "Pump flux independent of gradients",
      "Photoreceptor cGMP concentration",
    ],
    correct: 0,
    explanation: "Higher g_K with V_m above E_K increases outward K⁺ current (I_K = g_K(V_m − E_K)).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher g_K with V_m above E_K increases outward K⁺ current (I_K = g_K(V_m − E_K)).",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Capacitance measurements at presynaptic terminals during exocytosis detect?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Increased membrane area as vesicles fuse",
      "Decreased area due to endocytosis during release",
      "Changes in photopigment packing",
      "Cochlear basilar membrane stiffness",
    ],
    correct: 0,
    explanation: "Vesicle fusion adds membrane to the surface, increasing capacitance.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicle fusion adds membrane to the surface, increasing capacitance.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "If release probability p approaches 1, the coefficient of variation (CV) of EPSC amplitude across trials?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Decreases toward zero (less trial-to-trial variability)",
      "Increases without bound",
      "Equals p independent of quantal size",
      "Is determined solely by mEPSP frequency in darkness",
    ],
    correct: 0,
    explanation: "When release is nearly deterministic, variability from binomial release statistics diminishes.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "MK-801 blocks NMDA receptors by binding?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Inside the pore in a use-dependent manner",
      "Main mechanism: to AMPA receptors at the neuromuscular junction",
      "To photopigment retinaldehyde",
      "To connexin hemichannels primarily",
    ],
    correct: 0,
    explanation: "MK-801 enters the NMDA channel when open and traps inside (use dependence).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MK-801 enters the NMDA channel when open and traps inside (use dependence).",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MK-801 enters the NMDA channel when open and traps inside (use dependence).",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "A dendritic EPSP is attenuated more at the soma if an inhibitory synapse on the same dendritic branch opens Cl⁻ channels because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Shunting reduces effective EPSP amplitude at the soma",
      "Cl⁻ channels depolarize above 0 mV",
      "Inhibition increases λ without bound",
      "Na⁺ channels cluster on dendrites identically to the AIS",
    ],
    correct: 0,
    explanation: "Increased conductance on the path shunts EPSP current, reducing somatic signal.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased conductance on the path shunts EPSP current, reducing somatic signal.",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "A feedforward inhibitory circuit that sets a delay line for coincidence detection requires?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Matched timing of excitation and delayed inhibition onto the target",
      "Requires electrical synapses without chemical components",
      "Exclusive photoreceptor input",
      "Elimination of all Na⁺ channels in interneurons",
    ],
    correct: 0,
    explanation: "Precisely timed disynaptic inhibition can create windows for coincident excitation.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Presynaptic inhibition via GABAergic terminals on sensory afferents often acts by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depolarizing primary afferents (primary afferent depolarization) reducing Ca²⁺ influx",
      "Opening voltage-gated Na⁺ channels in photoreceptors",
      "Increasing tip-link tension in hair cells",
      "Blocking all postsynaptic AMPA receptors globally",
    ],
    correct: 0,
    explanation: "PAD reduces presynaptic Ca²⁺ entry and transmitter release from sensory terminals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Color opponency in parvocellular pathway cells arises from?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Antagonistic cone inputs",
      "Tonotopic mapping on the basilar membrane",
      "Olfactory receptor gene choice",
      "Muscle spindle Ia afferent convergence",
    ],
    correct: 0,
    explanation: "Opponent receptive fields compare cone signals to encode color contrast.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Opponent receptive fields compare cone signals to encode color contrast.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The medial superior olive localizes low-frequency sounds using?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Interaural time differences via delay lines and coincidence detection",
      "Interaural level differences above 10 kHz without timing",
      "Photoreceptor convergence in the fovea",
      "Olfactory bulb granule cell inhibition primarily",
    ],
    correct: 0,
    explanation: "MSO neurons compare arrival times of sounds at the two ears for azimuth cues.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MSO neurons compare arrival times of sounds at the two ears for azimuth cues.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Rapid adaptation in Pacinian corpuscles means they respond best to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Onset and offset of vibration, not steady pressure",
      "Constant deep pressure without change",
      "Sustained Merkel disk pressure",
      "Steady odor presentation",
    ],
    correct: 0,
    explanation: "Rapidly adapting receptors encode dynamic stimuli and silence during steady state.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Sparse coding in piriform cortex means?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Only a small fraction of neurons fire strongly for a given odor",
      "Most neuron fires identically for all odors",
      "Mitral cells seldom inhibit granule cells",
      "OSNs express all receptor types simultaneously",
    ],
    correct: 0,
    explanation: "Distributed sparse ensembles represent odor identity in cortex.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Distributed sparse ensembles represent odor identity in cortex.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The substantia nigra pars compacta is located in the?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Midbrain and provides dopaminergic input to striatum",
      "Retina and transduces photons (localizes the function to the wrong brain region)",
      "Cochlear apex and encodes low frequencies (localizes the function to the wrong brain region)",
      "Olfactory epithelium and binds odorants (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "SNc dopamine neurons in midbrain project to dorsal striatum for motor control and learning.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Alpha motor neurons and gamma motor neurons differ in that gamma neurons?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Innervate intrafusal muscle fibers in spindles",
      "Innervate extrafusal fibers producing force",
      "Transduce sound in the cochlea",
      "Release glutamate onto photoreceptors",
    ],
    correct: 0,
    explanation: "Gamma efferents adjust spindle sensitivity by contracting intrafusal fibers.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gamma efferents adjust spindle sensitivity by contracting intrafusal fibers.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Tagging-and-capture models of synaptic consolidation propose that?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Synapses marked by activity capture plasticity-related proteins arriving globally",
      "Many synapses strengthen without specificity",
      "Photopigment bleaching stores memory directly",
      "Requires electrical synapses can undergo LTP",
    ],
    correct: 0,
    explanation: "Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Brain Function",
    question: "Binocular rivalry occurs when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Different images to each eye compete for perceptual dominance",
      "Both eyes fuse images without competition",
      "Cochlear nuclei encode interaural timing",
      "Olfactory bulb glomeruli merge all odors into one percept",
    ],
    correct: 0,
    explanation: "Conflicting monocular inputs alternate in conscious perception during rivalry.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Conflicting monocular inputs alternate in conscious perception during rivalry.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "If two neurons are coupled by gap junctions, injecting hyperpolarizing current into one will?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hyperpolarize the coupled partner (if junction is open)",
      "Depolarize the partner regardless of polarity",
      "Have no effect because gap junctions are rectifying",
      "Trigger photopigment regeneration",
    ],
    correct: 0,
    explanation: "Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Which capability best describes CaMKII autophosphorylation after Ca²⁺ influx?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Maintain kinase activity after Ca²⁺ returns to baseline",
      "Permanently open all Na⁺ channels without phosphorylation targets",
      "Directly cleave SNARE proteins",
      "Convert rods to cones",
    ],
    correct: 0,
    explanation: "Autophosphorylation gives CaMKII memory of recent Ca²⁺ elevation, relevant to LTP maintenance.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Which outcome is most likely when Ouabain inhibition of Na⁺/K⁺ ATPase eventually occurs?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Depolarization as Na⁺ and K⁺ gradients run down",
      "Immediate hyperpolarization to −120 mV",
      "Block of all gap junctions",
      "Increased photoreceptor sensitivity in light",
    ],
    correct: 0,
    explanation: "Without active transport, ion gradients collapse and V_m drifts toward 0 mV.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Without active transport, ion gradients collapse and V_m drifts toward 0 mV.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Which description best applies to For an anion like Cl⁻ with higher internal than external concentration, E_Cl?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Negative (inside relative to outside)",
      "Positive",
      "Zero regardless of concentrations",
      "Equal to E_Na",
    ],
    correct: 0,
    explanation: "Negative charge and inward concentration gradient yield negative E_Cl.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Negative charge and inward concentration gradient yield negative E_Cl.",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "In a passive cable, doubling both diameter and R_m per unit area leaves λ?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Unchanged if R_i scales inversely with diameter as in uniform geometry",
      "Doubled",
      "Halved",
      "Zero",
    ],
    correct: 0,
    explanation: "For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius).",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Persistent Na⁺ current (non-inactivating component) contributes to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Subthreshold resonance and repeated firing near threshold",
      "Exclusive repolarization after spikes",
      "Phototransduction in cones",
      "Cochlear electromotility",
    ],
    correct: 0,
    explanation: "Subthreshold Na⁺ current can boost depolarization and support rhythmic firing.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Ectopic spike initiation can occur at?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Damaged axon segments with altered channel density",
      "Photoreceptor outer segments primarily in dark",
      "The olfactory epithelium during odor binding",
      "CSF in ventricles without tissue",
    ],
    correct: 0,
    explanation: "Abnormal channel redistribution after injury can create ectopic excitable zones.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If E_K is −90 mV and V_m is −60 mV, net K⁺ current through open K⁺ channels?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Outward (efflux)",
      "Inward (influx)",
      "Zero",
      "Determined by the pump without channels",
    ],
    correct: 0,
    explanation: "V_m above E_K drives K⁺ outward through open channels.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m above E_K drives K⁺ outward through open channels.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Retrograde messengers such as endocannabinoids act by?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Traveling from postsynaptic to presynaptic terminals to reduce release",
      "Often anterograde from photoreceptors to bipolar cells",
      "Diffusing within the synaptic cleft without receptors",
      "Opening nicotinic pores at the neuromuscular junction",
    ],
    correct: 0,
    explanation: "Endocannabinoids are synthesized postsynaptically and inhibit presynaptic release.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Endocannabinoids are synthesized postsynaptically and inhibit presynaptic release.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Which anatomic lesion best explains Asynchronous release after a presynaptic spike?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity",
      "Exclusive quantal release at exactly 0 ms delay",
      "Block of all voltage-gated Ca²⁺ channels",
      "Direct electrical coupling without vesicles",
    ],
    correct: 0,
    explanation: "Heterogeneous release sites and Ca²⁺ dynamics spread release timing.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Heterogeneous release sites and Ca²⁺ dynamics spread release timing.",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Inverse agonists of G-protein-coupled receptors?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Stabilize inactive receptor conformations below basal activity",
      "Often open ionotropic pores directly",
      "Cleave SNARE proteins at presynaptic terminals",
      "Increase photopigment bleaching in rods",
    ],
    correct: 0,
    explanation: "Inverse agonists reduce constitutive receptor activity by favoring inactive states.",
    wrongExplanations: [
      "",
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Inverse agonists reduce constitutive receptor activity by favoring inactive states.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Plateau potentials in dendrites can sustain firing when?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Voltage-gated Ca²⁺ and Na⁺ channels produce regenerative depolarization locally",
      "Main mechanism: passive decay occurs without channels",
      "Most K⁺ channels are removed genetically",
      "Photoreceptors are hyperpolarized by light",
    ],
    correct: 0,
    explanation: "Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators produce rhythmic motor output because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Recurrent excitatory and inhibitory connections form pacemaker-like loops",
      "Sensory input is required most cycle in most recordings",
      "Requires gap junctions exist in the circuit",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "CPGs generate organized rhythms via interconnected interneuron circuits.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Acetylcholine in cortex during arousal often?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Reduces adaptation in pyramidal cells and enhances signal detection",
      "Closes all nicotinic receptors permanently",
      "Converts cochlear inner hair cells to photoreceptors",
      "Eliminates all IPSPs without receptors",
    ],
    correct: 0,
    explanation: "Cholinergic modulation adjusts gain and intrinsic properties in cortical circuits.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular pathway neurons preferentially respond to?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "High temporal frequency and motion",
      "Fine color borders requiring parvocellular input",
      "Odorant identity in glomeruli",
      "Muscle spindle length without change",
    ],
    correct: 0,
    explanation: "M pathway cells have transient responses suited for motion and low-contrast detection.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M pathway cells have transient responses suited for motion and low-contrast detection.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Auditory System",
    question: "The lateral superior olive uses interaural level differences primarily for?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "High-frequency localization via intensity cues",
      "Low-frequency phase locking without level",
      "Color processing in V1",
      "Olfactory discrimination in piriform cortex",
    ],
    correct: 0,
    explanation: "LSO compares sound level at the two ears, effective at higher frequencies.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "C fibers mediate?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Slow, dull pain and warm/cold sensations",
      "Fine touch with Meissner corpuscles primarily",
      "Photopic color vision",
      "High-frequency auditory pitch via phase locking",
    ],
    correct: 0,
    explanation: "Unmyelinated C fibers convey slow pain/temp.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated C fibers convey slow pain/temp.",
      "",
      "",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Enantiomers can smell different because?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Receptor binding geometry differs despite identical chemical formula",
      "Mitral cells lack any inhibition",
      "OSNs do not express receptors",
      "Odorants bypass glomeruli entirely",
    ],
    correct: 0,
    explanation: "Stereochemistry affects interaction with odorant receptor binding pockets.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The fornix connects?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Hippocampus to mammillary bodies and related targets",
      "Cochlea to inferior colliculus directly without synapses",
      "Retina to olfactory bulb",
      "Muscle spindles to photoreceptors",
    ],
    correct: 0,
    explanation: "Fornix fibers carry hippocampal output to diencephalic and septal regions.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "When Basal ganglia direct pathway activity, which effect on membrane potential is most likely?",
    reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice",
    options: [





      "Facilitate intended movements by disinhibiting thalamocortical activity",
      "Block all movement in most recordings (maps the lesion to the wrong motor pathway or reflex)",
      "Transduce sound in the cochlea (maps the lesion to the wrong motor pathway or reflex)",
      "Encode color opponency primarily (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Striatal direct pathway reduces basal ganglia output, releasing thalamic inhibition.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Striatal direct pathway reduces basal ganglia output, releasing thalamic inhibition.",
    ]
  }
];
