// MCB80x question bank — HarvardX Fundamentals of Neuroscience

const PART1_VARIANTS = [
  {
    topic: "Resting Potential",
    question: "If a neuron has high K⁺ leak conductance and only minimal Na⁺ leak conductance, its resting membrane potential will lie closest to:",
    options: [


      "The Na⁺ equilibrium potential",
      "The K⁺ equilibrium potential",
      "0 mV exactly",
      "The Cl⁻ equilibrium potential only",
    ],
    correct: 1,
    explanation: "Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K.",
    wrongExplanations: [
      "Unlike the keyed answer (The K⁺ equilibrium potential), this option misstates the mechanism or direction described in the stem.",
      "",
      "This choice (0 mV exactly) does not match the keyed answer’s mechanism for Resting Potential.",
      "Unlike the keyed answer (The K⁺ equilibrium potential), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If extracellular K⁺ concentration is increased while intracellular K⁺ is held constant, the K⁺ equilibrium potential (E_K):",
    options: [


      "Becomes more negative",
      "Becomes less negative (moves toward 0 mV)",
      "Becomes exactly 0 mV regardless of concentration",
      "Is unaffected by concentration changes",
    ],
    correct: 1,
    explanation: "The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV.",
    wrongExplanations: [
      "This choice (Becomes more negative) does not match the keyed answer’s mechanism for Nernst Equation.",
      "",
      "Unlike the keyed answer (Becomes less negative (moves toward 0 mV)), this option misstates the mechanism or direction described in the stem.",
      "Changing inside/outside concentrations shifts Nernst equilibrium potentials.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The membrane time constant (τ) equals R_m × C_m. Increasing membrane capacitance while holding R_m constant will:",
    options: [


      "Speed up voltage changes for a given current",
      "Slow down voltage changes for a given current",
      "Eliminate passive decay along dendrites (misstates how R_m, C_m, or geometry set τ or λ)",
      "Prevent voltage-gated channel activation (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 1,
    explanation: "τ = R_m C_m; larger capacitance requires more charge to change voltage, slowing the membrane's response to injected current.",
    wrongExplanations: [
      "Unlike the keyed answer (Slow down voltage changes for a given current), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Slow down voltage changes for a given current), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slow down voltage changes for a given current), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The length constant (λ) depends on both membrane resistance and internal (axial) resistance. Increasing internal resistance (R_i) while R_m is unchanged will:",
    options: [


      "Increase λ and extend passive spread",
      "Decrease λ and shorten passive spread",
      "Have no effect on passive spread",
      "Directly open voltage-gated Na channels",
    ],
    correct: 1,
    explanation: "λ = √(R_m / R_i); higher axial resistance impedes longitudinal current flow, shortening the distance over which subthreshold signals spread.",
    wrongExplanations: [
      "Unlike the keyed answer (Decrease λ and shorten passive spread), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Decrease λ and shorten passive spread), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Decrease λ and shorten passive spread), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a larger-than-normal depolarizing stimulus may still trigger a spike because:",
    options: [


      "Inactivated Na⁺ channels are recovering and fewer channels are available",
      "All K⁺ channels are permanently closed when temperature is near 37 °C.",
      "Myelin is absent at the axon hillock",
      "The Na⁺/K⁺ pump stops functioning in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inactivated Na⁺ channels are recovering and fewer channels are available), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inactivated Na⁺ channels are recovering and fewer channels are available), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inactivated Na⁺ channels are recovering and fewer channels are available), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The falling phase of the action potential is driven primarily by delayed-rectifier K⁺ channels because they:",
    options: [


      "Open with slower kinetics than the initial Na⁺ surge and carry outward current",
      "Permit massive Na⁺ influx in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Block all Cl⁻ conductance permanently in a typical mammalian central neuron.",
      "Pump Ca²⁺ into the cytosol when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Delayed-rectifier K⁺ channels activate during the spike and repolarize the membrane through K⁺ efflux.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Open with slower kinetics than the initial Na⁺ surge and carry outward current), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Open with slower kinetics than the initial Na⁺ surge and carry outward current), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Open with slower kinetics than the initial Na⁺ surge and carry outward current), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The absolute refractory period is defined by the state of voltage-gated Na⁺ channels in which:",
    options: [


      "Activation gates are open and inactivation gates are closed during normal resting permeability conditions.",
      "Inactivation gates remain closed even if the activation gate opens",
      "Both gates are permanently removed from the membrane",
      "Channels are converted to ligand-gated receptors",
    ],
    correct: 1,
    explanation: "Inactivation of Na⁺ channels prevents re-opening during the absolute refractory period, enforcing a minimum inter-spike interval.",
    wrongExplanations: [
      "Unlike the keyed answer (Inactivation gates remain closed even if the activation gate opens), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Inactivation gates remain closed even if the activation gate opens), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inactivation gates remain closed even if the activation gate opens), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is reached when regenerative Na⁺ channel opening produces:",
    options: [


      "Net outward current exceeding inward current",
      "Net inward current exceeding outward current",
      "Complete closure of all ion channels",
      "Direct activation of the Na/K pump only",
    ],
    correct: 1,
    explanation: "At threshold, positive feedback from Na⁺ influx overcomes opposing outward currents, triggering the all-or-none spike.",
    wrongExplanations: [
      "Unlike the keyed answer (Net inward current exceeding outward current), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Net inward current exceeding outward current), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Net inward current exceeding outward current), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In a myelinated axon, the passive spread of depolarization between nodes of Ranvier occurs because:",
    options: [


      "Myelin contains voltage-gated channels (misapplies how active propagation uses local circuit currents)",
      "Internodal membrane capacitance is charged passively while active regeneration occurs at nodes",
      "Action potentials are generated continuously along the entire axon",
      "Saltatory conduction requires no ion channels (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 1,
    explanation: "Current passively spreads under myelin between nodes; voltage-gated channels at nodes regenerate the action potential (saltatory conduction).",
    wrongExplanations: [
      "Unlike the keyed answer (Internodal membrane capacitance is charged passively while active regeneration o), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Internodal membrane capacitance is charged passively while active regeneration o), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Internodal membrane capacitance is charged passively while active regeneration o), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Myelin increases conduction velocity primarily by:",
    options: [


      "Increasing the number of voltage-gated channels per unit length",
      "Reducing effective membrane capacitance and limiting active regeneration to nodes",
      "Raising the resting membrane potential above 0 mV (misapplies how active propagation uses local circuit currents)",
      "Blocking all passive current flow (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 1,
    explanation: "Myelin insulation lowers capacitive load and confines ion channel activity to nodes, enabling faster saltatory propagation.",
    wrongExplanations: [
      "Unlike the keyed answer (Reducing effective membrane capacitance and limiting active regeneration to node), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Reducing effective membrane capacitance and limiting active regeneration to node), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing effective membrane capacitance and limiting active regeneration to node), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Depolarization of the membrane means the membrane potential becomes:",
    options: [


      "More negative than at rest (uses the wrong sign or driving force for ionic current)",
      "Less negative than at rest (moves toward 0 mV or above)",
      "Exactly equal to E_K (uses the wrong sign or driving force for ionic current)",
      "Fixed regardless of ion flux (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 1,
    explanation: "Depolarization is a shift to a less negative membrane potential relative to rest.",
    wrongExplanations: [
      "Unlike the keyed answer (Less negative than at rest (moves toward 0 mV or above)), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Less negative than at rest (moves toward 0 mV or above)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Less negative than at rest (moves toward 0 mV or above)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The Goldman equation predicts that if membrane permeability to Na⁺ greatly exceeds permeability to K⁺, V_m will approach:",
    options: [


      "The potassium reversal potential (E_K), as if K⁺ were the dominant permeant ion",
      "The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability",
      "0 mV only if all monovalent gradients were abolished and Cl⁻ is impermeant",
      "The reversal potential of gap junction channels, not voltage-gated cation channels",
    ],
    correct: 1,
    explanation: "The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na.",
    wrongExplanations: [
      "Unlike the keyed answer (The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase is electrogenic because it:",
    options: [


      "Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive charge movement",
      "Opens voltage-gated Na⁺ channels directly (ignores which ion dominates resting permeability)",
      "Releases glutamate into the synaptic cleft (ignores which ion dominates resting permeability)",
      "Phosphorylates AMPA receptors at the synapse (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "The 3:2 stoichiometry of the Na⁺/K⁺ pump moves net positive charge out of the cell, slightly hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive ch), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive ch), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive ch), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "For a given constant current injection, a neuron with a larger membrane time constant will show:",
    options: [


      "A faster rise to steady-state voltage",
      "A slower rise to steady-state voltage",
      "No change in voltage over time",
      "Immediate action potential firing at all stimulus amplitudes",
    ],
    correct: 1,
    explanation: "A larger τ (R_m × C_m) slows the charging of the membrane capacitance, delaying voltage change.",
    wrongExplanations: [
      "Unlike the keyed answer (A slower rise to steady-state voltage), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (A slower rise to steady-state voltage), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A slower rise to steady-state voltage), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Subthreshold depolarizing stimuli differ from suprathreshold stimuli in that subthreshold stimuli:",
    options: [


      "Produce graded potentials that decay without triggering an all-or-none spike",
      "Always produce full-amplitude action potentials during normal resting permeability conditions.",
      "Permanently inactivate all Na channels when temperature is near 37 °C. during normal resting permeability conditions.",
      "",
    ],
    correct: 0,
    explanation: "Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Produce graded potentials that decay without triggering an all-or-none spike), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Produce graded potentials that decay without triggering an all-or-none spike), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Produce graded potentials that decay without triggering an all-or-none spike), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];

const PART2_VARIANTS = [
  {
    topic: "Chemical Synapses",
    question: "Presynaptic action potentials trigger neurotransmitter release most directly through:",
    options: [


      "Ca²⁺ influx via voltage-gated calcium channels",
      "Na⁺ efflux through leak channels (describes the wrong synaptic structure or transmission step)",
      "Postsynaptic NMDA receptor opening (describes the wrong synaptic structure or transmission step)",
      "Passive hyperpolarization of the axon hillock",
    ],
    correct: 0,
    explanation: "Ca²⁺ entry into the presynaptic terminal binds synaptic vesicle release machinery and drives exocytosis.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Ca²⁺ influx via voltage-gated calcium channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ca²⁺ influx via voltage-gated calcium channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ca²⁺ influx via voltage-gated calcium channels), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "An EPSP that brings the postsynaptic membrane from −70 mV to −55 mV has:",
    options: [


      "Hyperpolarized the cell away from threshold (mixes up presynaptic release with postsynaptic receptor logic)",
      "Depolarized the cell closer to spike threshold",
      "Blocked all ligand-gated channels (mixes up presynaptic release with postsynaptic receptor logic)",
      "Activated the Na/K pump exclusively (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 1,
    explanation: "EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold.",
    wrongExplanations: [
      "Unlike the keyed answer (Depolarized the cell closer to spike threshold), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Depolarized the cell closer to spike threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarized the cell closer to spike threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "An IPSP mediated by open Cl⁻ channels is hyperpolarizing when:",
    options: [


      "E_Cl⁻ is more negative than the resting membrane potential",
      "E_Cl⁻ equals +40 mV (mixes up presynaptic release with postsynaptic receptor logic)",
      "No neurotransmitter is released (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only electrical synapses are active (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "When E_Cl⁻ lies below rest, Cl⁻ influx hyperpolarizes the postsynaptic membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (E_Cl⁻ is more negative than the resting membrane potential), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_Cl⁻ is more negative than the resting membrane potential), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (E_Cl⁻ is more negative than the resting membrane potential), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Ionotropic glutamate receptors produce fast synaptic responses because:",
    options: [


      "They require G-protein activation before any ion flow in a typical mammalian central neuron.",
      "Neurotransmitter binding directly opens an ion channel pore",
      "They always act exclusively in the nucleus when temperature is near 37 °C.",
      "They convert cAMP to ATP instantly when temperature is near 37 °C.",
    ],
    correct: 1,
    explanation: "Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
    wrongExplanations: [
      "Unlike the keyed answer (Neurotransmitter binding directly opens an ion channel pore), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Neurotransmitter binding directly opens an ion channel pore), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neurotransmitter binding directly opens an ion channel pore), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptor signaling is typically slower than ionotropic signaling because it involves:",
    options: [


      "Direct ion flux through the receptor pore in a typical mammalian central neuron.",
      "G-protein activation and second-messenger cascades before channel modulation",
      "Immediate fusion of synaptic vesicles in a typical mammalian central neuron.",
      "Saltatory conduction in the dendrite",
    ],
    correct: 1,
    explanation: "Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation.",
    wrongExplanations: [
      "Unlike the keyed answer (G-protein activation and second-messenger cascades before channel modulation), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (G-protein activation and second-messenger cascades before channel modulation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (G-protein activation and second-messenger cascades before channel modulation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Activation of adenylyl cyclase by a Gαs-coupled receptor leads to:",
    options: [


      "Hydrolysis of cAMP to AMP",
      "Conversion of ATP to cAMP in the cytosol",
      "Direct opening of voltage-gated Na channels",
      "Immediate degradation of all IP3",
    ],
    correct: 1,
    explanation: "Adenylyl cyclase synthesizes cAMP from ATP, activating downstream kinases such as PKA.",
    wrongExplanations: [
      "Unlike the keyed answer (Conversion of ATP to cAMP in the cytosol), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Conversion of ATP to cAMP in the cytosol), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Conversion of ATP to cAMP in the cytosol), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ signaling raises cytosolic Ca²⁺ primarily by:",
    options: [


      "Opening plasmalemmal Na⁺ channels in a typical mammalian central neuron.",
      "Releasing Ca²⁺ from endoplasmic reticulum stores",
      "Blocking all K⁺ channels permanently",
      "Stopping vesicle endocytosis",
    ],
    correct: 1,
    explanation: "IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades.",
    wrongExplanations: [
      "Unlike the keyed answer (Releasing Ca²⁺ from endoplasmic reticulum stores), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Releasing Ca²⁺ from endoplasmic reticulum stores), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Releasing Ca²⁺ from endoplasmic reticulum stores), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Temporal summation is most likely when:",
    options: [


      "Two EPSPs from different dendritic branches arrive simultaneously",
      "Repeated EPSPs arrive at the same synapse before previous ones decay",
      "Only IPSPs are generated (ignores how EPSPs/IPSPs sum in time or space)",
      "The axon is uniformly myelinated (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 1,
    explanation: "Temporal summation adds successive inputs at one synapse before the membrane returns to baseline.",
    wrongExplanations: [
      "Unlike the keyed answer (Repeated EPSPs arrive at the same synapse before previous ones decay), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Repeated EPSPs arrive at the same synapse before previous ones decay), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Repeated EPSPs arrive at the same synapse before previous ones decay), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Spatial summation requires:",
    options: [


      "Inputs at a single synapse over a long interval only (ignores how EPSPs/IPSPs sum in time or space)",
      "Simultaneous EPSPs from multiple synapses converging on the same neuron",
      "Complete blockade of the axon hillock (ignores how EPSPs/IPSPs sum in time or space)",
      "Removal of all inhibitory interneurons (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 1,
    explanation: "Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
    wrongExplanations: [
      "Unlike the keyed answer (Simultaneous EPSPs from multiple synapses converging on the same neuron), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Simultaneous EPSPs from multiple synapses converging on the same neuron), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Simultaneous EPSPs from multiple synapses converging on the same neuron), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators often differ from point-to-point neurotransmission because they:",
    options: [


      "Act only at gap junctions with zero delay in a typical mammalian central neuron.",
      "Can diffuse broadly and alter neuronal gain or excitability over many synapses",
      "Always produce millisecond-scale EPSPs only during normal resting permeability conditions.",
      "Are released exclusively at the neuromuscular junction when temperature is near 37 °C.",
    ],
    correct: 1,
    explanation: "Neuromodulators tune circuit properties over extended regions rather than mediating fast synaptic transmission at one synapse.",
    wrongExplanations: [
      "Unlike the keyed answer (Can diffuse broadly and alter neuronal gain or excitability over many synapses), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Can diffuse broadly and alter neuronal gain or excitability over many synapses), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Can diffuse broadly and alter neuronal gain or excitability over many synapses), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Dale's principle implies that a single neuron:",
    options: [


      "Randomly switches neurotransmitters at each synapse during normal resting permeability conditions.",
      "Releases the same primary neurotransmitter(s) from all its synaptic terminals",
      "Can only form electrical synapses in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Must co-release glutamate and GABA at every terminal",
    ],
    correct: 1,
    explanation: "Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites.",
    wrongExplanations: [
      "Unlike the keyed answer (Releases the same primary neurotransmitter(s) from all its synaptic terminals), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Releases the same primary neurotransmitter(s) from all its synaptic terminals), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Releases the same primary neurotransmitter(s) from all its synaptic terminals), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition shapes neural responses by:",
    options: [


      "Delaying the inhibitory interneuron until long after output firing when temperature is near 37 °C.",
      "Activating an interneuron in parallel with the excitatory pathway to limit output timing",
      "Removing all excitatory input to the circuit",
      "Converting chemical synapses to electrical synapses during normal resting permeability conditions.",
    ],
    correct: 1,
    explanation: "Feedforward inhibition activates inhibitory interneurons alongside excitation, constraining when the output neuron can fire.",
    wrongExplanations: [
      "Unlike the keyed answer (Activating an interneuron in parallel with the excitatory pathway to limit outpu), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Activating an interneuron in parallel with the excitatory pathway to limit outpu), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Activating an interneuron in parallel with the excitatory pathway to limit outpu), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses allow bidirectional current flow because:",
    options: [


      "They use SNARE-mediated vesicle release during normal resting permeability conditions.",
      "Gap junction channels connect the cytoplasm of coupled cells",
      "They require G-protein second messengers",
      "They exist only in the peripheral nervous system myelin during normal resting permeability conditions.",
    ],
    correct: 1,
    explanation: "Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells.",
    wrongExplanations: [
      "Unlike the keyed answer (Gap junction channels connect the cytoplasm of coupled cells), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Gap junction channels connect the cytoplasm of coupled cells), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Gap junction channels connect the cytoplasm of coupled cells), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "AMPA receptors mediate fast EPSCs at glutamatergic synapses primarily by passing:",
    options: [


      "Na⁺ and some K⁺ at resting potentials",
      "Cl⁻ only",
      "Mg²⁺ out of the cell",
      "Current only when the cell is hyperpolarized below −90 mV",
    ],
    correct: 0,
    explanation: "AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
    wrongExplanations: [
      "",
      "This choice (Cl⁻ only) does not match the keyed answer’s mechanism for Synaptic Transmission.",
      "This choice (Mg²⁺ out of the cell) does not match the keyed answer’s mechanism for Synaptic Transmission.",
      "Unlike the keyed answer (Na⁺ and some K⁺ at resting potentials), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "GABA<sub>A</sub> receptor activation typically produces inhibition by:",
    options: [


      "Increasing Cl⁻ conductance when E_Cl⁻ is below rest",
      "Opening Na⁺ channels at the axon hillock (mixes up presynaptic release with postsynaptic receptor logic)",
      "Blocking all metabotropic signaling permanently (mixes up presynaptic release with postsynaptic receptor logic)",
      "Releasing Ca²⁺ from mitochondria only (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "GABA<sub>A</sub> receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increasing Cl⁻ conductance when E_Cl⁻ is below rest), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increasing Cl⁻ conductance when E_Cl⁻ is below rest), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increasing Cl⁻ conductance when E_Cl⁻ is below rest), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];

const PART3_VARIANTS = [
  {
    topic: "Visual System",
    question: "Vertebrate photoreceptors hyperpolarize in response to light because:",
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
      "Unlike the keyed answer (Light closes cGMP-gated cation channels, reducing inward current in darkness), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Light closes cGMP-gated cation channels, reducing inward current in darkness), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Center-surround receptive fields in retinal ganglion cells enhance contrast through:",
    options: [

      "Identical ON responses in center and surround",
      "Antagonistic center and surround responses",
      "No lateral interactions in the retina",
      "Tonotopic mapping along the basilar membrane",
    ],
    correct: 1,
    explanation: "Antagonistic surround responses sharpen edges by subtracting uniform illumination across the receptive field.",
    wrongExplanations: [
      "Unlike the keyed answer (Antagonistic center and surround responses (ON/OFF or OFF/ON)), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Antagonistic center and surround responses (ON/OFF or OFF/ON)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Antagonistic center and surround responses (ON/OFF or OFF/ON)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Tonotopic organization of the cochlea means that:",
    options: [

      "All frequencies activate the same hair cell row during normal resting permeability conditions.",
      "Different sound frequencies maximally stimulate different basilar membrane locations",
      "Pitch is encoded only by olfactory receptor choice when temperature is near 37 °C.",
      "The apex responds best to high frequencies only during normal resting permeability conditions.",
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
    question: "The somatosensory homunculus illustrates that cortical area is determined mainly by:",
    options: [

      "Absolute body segment volume",
      "Sensory receptor density and acuity of the body region",
      "Motor neuron count in the spinal ventral horn only",
      "The number of olfactory glomeruli in a typical mammalian central neuron.",
    ],
    correct: 1,
    explanation: "Hands and face occupy disproportionately large S1 territory because of high receptor density and fine discriminative capacity.",
    wrongExplanations: [
      "Unlike the keyed answer (Sensory receptor density and acuity of the body region), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Sensory receptor density and acuity of the body region), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles are specialized for detecting:",
    options: [

      "Static deep pressure over minutes in a typical mammalian central neuron.",
      "High-frequency vibration and rapid mechanical transients",
      "Bitter taste molecules on the tongue",
      "Low spatial frequency visual edges only",
    ],
    correct: 1,
    explanation: "Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes.",
    wrongExplanations: [
      "Unlike the keyed answer (High-frequency vibration and rapid mechanical transients), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (High-frequency vibration and rapid mechanical transients), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High-frequency vibration and rapid mechanical transients), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Combinatorial odor coding in the olfactory bulb relies on:",
    options: [

      "Every sensory neuron expressing all receptor types when temperature is near 37 °C. during normal resting permeability conditions.",
      "Each olfactory sensory neuron expressing one receptor type and projecting to specific glomeruli",
      "Direct monosynaptic links from OSNs to motor neurons only",
      "Identical receptor expression in all glomeruli when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 1,
    explanation: "The one-neuron–one-receptor rule and glomerular targeting allow distinct odor patterns to activate specific bulb maps.",
    wrongExplanations: [
      "Unlike the keyed answer (Each olfactory sensory neuron expressing one receptor type and projecting to spe), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Each olfactory sensory neuron expressing one receptor type and projecting to spe), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "CNS capillary endothelial tight junctions contribute to the blood-brain barrier by:",
    options: [

      "Allowing free paracellular diffusion of all solutes (localizes the function to the wrong brain region)",
      "Restricting paracellular passage of polar molecules into brain parenchyma",
      "Forming myelin around axons in cortex (localizes the function to the wrong brain region)",
      "Replacing all astrocytic endfeet (localizes the function to the wrong brain region)",
    ],
    correct: 1,
    explanation: "Tight junctions between endothelial cells limit paracellular diffusion, requiring selective transporters for brain entry.",
    wrongExplanations: [
      "Unlike the keyed answer (Restricting paracellular passage of polar molecules into brain parenchyma), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Restricting paracellular passage of polar molecules into brain parenchyma), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Restricting paracellular passage of polar molecules into brain parenchyma), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum is classified as a commissural tract because it:",
    options: [

      "Connects spinal segments within one side of the cord (localizes the function to the wrong brain region)",
      "Connects corresponding areas of the left and right cerebral hemispheres",
      "Links the cerebellum exclusively to the medulla (localizes the function to the wrong brain region)",
      "Carries proprioceptive information from muscle spindles only",
    ],
    correct: 1,
    explanation: "Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres.",
    wrongExplanations: [
      "Unlike the keyed answer (Connects corresponding areas of the left and right cerebral hemispheres), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Connects corresponding areas of the left and right cerebral hemispheres), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Connects corresponding areas of the left and right cerebral hemispheres), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Hippocampal damage most specifically impairs:",
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
      "Unlike the keyed answer (Consolidation of new declarative (episodic) memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Consolidation of new declarative (episodic) memories), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Consolidation of new declarative (episodic) memories), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Dopaminergic neurons of the substantia nigra pars compacta target the:",
    options: [

      "Retinal bipolar cell layer",
      "Striatum (caudate and putamen)",
      "Cochlear outer hair cells only",
      "Olfactory epithelium directly",
    ],
    correct: 1,
    explanation: "The nigrostriatal pathway delivers dopamine to the striatum, modulating basal ganglia motor circuits.",
    wrongExplanations: [
      "Unlike the keyed answer (Striatum (caudate and putamen)), this option misstates the mechanism or direction described in the stem.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Striatum (caudate and putamen)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "NMDA receptor-dependent LTP at CA1 synapses requires coincident:",
    options: [

      "Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block",
      "Cl⁻ influx and hyperpolarization below −90 mV in a typical mammalian central neuron.",
      "Complete removal of AMPA receptors when temperature is near 37 °C.",
      "Exclusive GABA<sub>B</sub> receptor activation during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "NMDA receptors act as coincidence detectors: depolarization removes Mg²⁺ block while glutamate is bound, allowing Ca²⁺ influx.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Hebbian synaptic plasticity strengthens a synapse when:",
    options: [

      "Presynaptic activity consistently contributes to postsynaptic firing",
      "Pre- and postsynaptic activity are always anti-correlated in a typical mammalian central neuron.",
      "The synapse is never used in a typical mammalian central neuron.",
      "Requires inhibitory interneurons fire in isolation exclusively in this context",
    ],
    correct: 0,
    explanation: "Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Presynaptic activity consistently contributes to postsynaptic firing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Presynaptic activity consistently contributes to postsynaptic firing), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Presynaptic activity consistently contributes to postsynaptic firing), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "CREB-dependent transcription supports long-term memory by:",
    options: [

      "Directly opening voltage-gated Na channels at the synapse in a typical mammalian central neuron.",
      "Regulating gene expression for proteins that stabilize synaptic changes",
      "Degrading all cAMP within seconds in a typical mammalian central neuron.",
      "Blocking protein synthesis in the soma permanently when temperature is near 37 °C.",
    ],
    correct: 1,
    explanation: "Phosphorylated CREB activates transcription of genes needed for enduring synaptic modification.",
    wrongExplanations: [
      "Unlike the keyed answer (Regulating gene expression for proteins that stabilize synaptic changes), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Regulating gene expression for proteins that stabilize synaptic changes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Regulating gene expression for proteins that stabilize synaptic changes), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "The immediate early gene c-fos is induced rapidly after strong synaptic activity because:",
    options: [

      "It is constitutively expressed at equal levels in all silent neurons",
      "Calcium and activity-dependent signaling activate its transcription quickly",
      "It encodes the NMDA receptor pore directly when temperature is near 37 °C.",
      "It permanently closes all K channels",
    ],
    correct: 1,
    explanation: "Activity-driven calcium and kinase signaling rapidly induces c-fos as a marker of recent neuronal activation.",
    wrongExplanations: [
      "Unlike the keyed answer (Calcium and activity-dependent signaling activate its transcription quickly), this option misstates the mechanism or direction described in the stem.",
      "",
      "Unlike the keyed answer (Calcium and activity-dependent signaling activate its transcription quickly), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Calcium and activity-dependent signaling activate its transcription quickly), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Topographic sensory maps in cortex mean that:",
    options: [

      "Neighboring cortical neurons represent neighboring sensory receptor locations",
      "All sensory modalities share one random map with no structure in a typical mammalian central neuron.",
      "Motor neurons are arranged by gene family only",
      "Tonotopy exists only in the retina, not in cortex in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Neighboring cortical neurons represent neighboring sensory receptor locations), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neighboring cortical neurons represent neighboring sensory receptor locations), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neighboring cortical neurons represent neighboring sensory receptor locations), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];

const NEW_TIER1 = [
  {
    topic: "Resting Potential",
    question: "What primarily sets the ion concentration gradients that establish the resting potential?",
    options: [

      "The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients",
      "Voltage-gated channels at the axon hillock only (ignores which ion dominates resting permeability)",
      "Synaptic vesicle recycling (ignores which ion dominates resting permeability)",
      "Photoreceptor cGMP channels (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Leak channels passively allow ions to move down:",
    options: [

      "Their electrochemical gradients toward respective equilibrium potentials",
      "Only the direction set by the Na⁺/K⁺ pump cycling rate exclusively",
      "Gradients perpendicular to the membrane only (ignores which ion dominates resting permeability)",
      "Concentration gradients without any electrical component",
    ],
    correct: 0,
    explanation: "Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Their electrochemical gradients toward respective equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Their electrochemical gradients toward respective equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Their electrochemical gradients toward respective equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "The Nernst equation calculates the equilibrium potential for an ion based on:",
    options: [

      "Intracellular and extracellular concentrations of that ion",
      "Axon diameter and myelination thickness (contradicts the Nernst dependence on inside/outside concentrations)",
      "Synaptic release probability (contradicts the Nernst dependence on inside/outside concentrations)",
      "Receptor subtype in the postsynaptic density (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "E_ion depends on the ratio of internal to external ion concentration.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Intracellular and extracellular concentrations of that ion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Intracellular and extracellular concentrations of that ion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Intracellular and extracellular concentrations of that ion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The length constant (λ) describes:",
    options: [

      "How far a subthreshold voltage spreads before decaying",
      "The minimum interval between action potentials (misstates how R_m, C_m, or geometry set τ or λ)",
      "The equilibrium potential for chloride (misstates how R_m, C_m, or geometry set τ or λ)",
      "The rate of neurotransmitter reuptake (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "λ quantifies spatial decay of passive signals along a cable.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (How far a subthreshold voltage spreads before decaying), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (How far a subthreshold voltage spreads before decaying), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (How far a subthreshold voltage spreads before decaying), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Voltage-gated Na⁺ channels contribute to the rising phase because they:",
    options: [

      "Allow Na⁺ influx when the membrane depolarizes past activation threshold",
      "Pump K⁺ into the cell in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Open only after all K⁺ channels close permanently in a typical mammalian central neuron.",
      "Are ligand-gated by glutamate only when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Na⁺ influx drives the upswing of the action potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Allow Na⁺ influx when the membrane depolarizes past activation threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Allow Na⁺ influx when the membrane depolarizes past activation threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Allow Na⁺ influx when the membrane depolarizes past activation threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Unmyelinated axon conduction is called continuous because:",
    options: [

      "The action potential regenerates along every patch of membrane",
      "It occurs only at nodes of Ranvier (misapplies how active propagation uses local circuit currents)",
      "It requires no voltage-gated channels (misapplies how active propagation uses local circuit currents)",
      "It is purely passive without active currents (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "In unmyelinated fibers, active regeneration occurs sequentially along the membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The action potential regenerates along every patch of membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The action potential regenerates along every patch of membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The action potential regenerates along every patch of membrane), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "The Goldman equation is needed when:",
    options: [

      "Multiple ions are permeant with different equilibrium potentials",
      "Only one ion species exists in the extracellular fluid (uses the wrong sign or driving force for ionic current)",
      "The neuron is at absolute refractory period only (uses the wrong sign or driving force for ionic current)",
      "Synaptic vesicles are depleted (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Goldman combines contributions of all permeant ions weighted by permeability.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Multiple ions are permeant with different equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Multiple ions are permeant with different equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Multiple ions are permeant with different equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Synaptic vesicles fuse with the presynaptic membrane through:",
    options: [

      "SNARE-mediated exocytosis triggered by calcium",
      "Passive diffusion through gap junctions only",
      "Direct opening of voltage-gated Na⁺ channels in the cleft",
      "Retrograde transport in dendrites",
    ],
    correct: 0,
    explanation: "Ca²⁺-triggered SNARE complex assembly drives vesicle fusion and release.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (SNARE-mediated exocytosis triggered by calcium), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (SNARE-mediated exocytosis triggered by calcium), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (SNARE-mediated exocytosis triggered by calcium), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "The postsynaptic density contains:",
    options: [

      "Concentrated receptors and signaling proteins opposite the active zone",
      "Myelin wraps around dendrites at every micron (describes the wrong synaptic structure or transmission step)",
      "Photopigment molecules for scotopic vision (describes the wrong synaptic structure or transmission step)",
      "Basilar membrane collagen fibers (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "The PSD organizes receptors and scaffolding for synaptic signaling.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Concentrated receptors and signaling proteins opposite the active zone), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Concentrated receptors and signaling proteins opposite the active zone), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Concentrated receptors and signaling proteins opposite the active zone), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Quantal transmission means that postsynaptic responses occur in:",
    options: [

      "Discrete steps corresponding to fusion of vesicles",
      "Continuous analog waves without discrete units (mixes up presynaptic release with postsynaptic receptor logic)",
      "All-or-none muscle action potentials only (mixes up presynaptic release with postsynaptic receptor logic)",
      "Purely passive cable responses without receptors",
    ],
    correct: 0,
    explanation: "Each vesicle fusion event contributes a quantal unit of postsynaptic response.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Discrete steps corresponding to fusion of vesicles), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Discrete steps corresponding to fusion of vesicles), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Discrete steps corresponding to fusion of vesicles), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Nicotinic acetylcholine receptors at the neuromuscular junction are:",
    options: [

      "Ionotropic",
      "Metabotropic G-protein-coupled only",
      "Electrical synapses via connexins",
      "Voltage-gated chloride channels",
    ],
    correct: 0,
    explanation: "Nicotinic ACh receptors are classic ionotropic receptors mediating fast EPSPs/EPCs.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Ionotropic (ligand-gated cation channels)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ionotropic (ligand-gated cation channels)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ionotropic (ligand-gated cation channels)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "The axon initial segment is the preferred site for action potential initiation because it:",
    options: [

      "Has a high density of voltage-gated Na⁺ channels and low threshold",
      "Is completely myelinated along its entire length (ignores how EPSPs/IPSPs sum in time or space)",
      "Contains only inhibitory synapses (ignores how EPSPs/IPSPs sum in time or space)",
      "Lacks voltage-gated channels entirely (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Channel density and geometry make the AIS the spike trigger zone.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Has a high density of voltage-gated Na⁺ channels and low threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Has a high density of voltage-gated Na⁺ channels and low threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Has a high density of voltage-gated Na⁺ channels and low threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Recurrent inhibition occurs when:",
    options: [

      "An output neuron activates an interneuron that feeds back onto itself or its pool",
      "",
      "Electrical synapses replace all chemical synapses in a typical mammalian central neuron.",
      "The circuit contains no interneurons",
    ],
    correct: 0,
    explanation: "Recurrent loops regulate excitability and stabilize network activity.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (An output neuron activates an interneuron that feeds back onto itself or its poo), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (An output neuron activates an interneuron that feeds back onto itself or its poo), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (An output neuron activates an interneuron that feeds back onto itself or its poo), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates striatal circuits primarily through:",
    options: [

      "Metabotropic D1 and D2 receptors altering cAMP and channel activity",
      "Direct ionotropic pores with millisecond kinetics only when temperature is near 37 °C.",
      "Gap junctions between photoreceptors",
      "Voltage-gated Na⁺ channels in the cochlea in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Metabotropic D1 and D2 receptors altering cAMP and channel activity), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Rods are more sensitive than cones primarily because:",
    options: [

      "They express higher levels of photopigment and converge on bipolar cells",
      "They respond only to bright daylight",
      "They lack cGMP-gated channels",
      "They fire action potentials with higher amplitude always",
    ],
    correct: 0,
    explanation: "Rod convergence and high photopigment density support scotopic vision.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (They express higher levels of photopigment and converge on bipolar cells), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (They express higher levels of photopigment and converge on bipolar cells), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (They express higher levels of photopigment and converge on bipolar cells), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Cones mediate:",
    options: [

      "Color and high-acuity daylight vision",
      "Only scotopic vision in starlight without photopigment",
      "Auditory pitch perception exclusively",
      "Olfactory combinatorial coding in glomeruli",
    ],
    correct: 0,
    explanation: "Cones support photopic, color vision with high spatial resolution in the fovea.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Color and high-acuity daylight vision), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Color and high-acuity daylight vision), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Inner hair cells transduce sound by:",
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
      "Unlike the keyed answer (Mechanically gating ion channels via stereocilia deflection), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Mechanically gating ion channels via stereocilia deflection), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The tectorial membrane in the cochlea:",
    options: [

      "Couples mechanical vibration to stereocilia of hair cells",
      "Forms the blood-brain barrier in cortex during normal resting permeability conditions.",
      "Contains rhodopsin for dim-light vision during normal resting permeability conditions.",
      "Is identical to the corpus callosum during normal resting permeability conditions.",
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
    question: "Merkel cells and associated nerve endings detect:",
    options: [

      "Sustained pressure and texture (slowly adapting)",
      "High-frequency vibration only (rapidly adapting)",
      "Photons of light",
      "Odorant molecules in the nasal epithelium",
    ],
    correct: 0,
    explanation: "Merkel endings provide high spatial acuity for sustained touch.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Sustained pressure and texture (slowly adapting)), this option misstates the mechanism or direction described in the stem.",
      "This choice (Photons of light) does not match the keyed answer’s mechanism for Somatosensation.",
      "Unlike the keyed answer (Sustained pressure and texture (slowly adapting)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Gray matter consists primarily of:",
    options: [

      "Neuronal cell bodies, dendrites, and synapses",
      "Myelinated axon tracts only",
      "Cerebrospinal fluid in the ventricles exclusively",
      "Photoreceptor outer segments only",
    ],
    correct: 0,
    explanation: "Gray matter is rich in neuronal somata and synaptic neuropil.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Neuronal cell bodies, dendrites, and synapses), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neuronal cell bodies, dendrites, and synapses), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Cerebrospinal fluid is produced mainly by:",
    options: [

      "Choroid plexus epithelium in the ventricles",
      "Photoreceptor outer segments (localizes the function to the wrong brain region)",
      "Nodes of Ranvier exclusively (localizes the function to the wrong brain region)",
      "Synaptic vesicles in the cleft (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Choroid plexus secretes CSF into the ventricular system.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Choroid plexus epithelium in the ventricles), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Choroid plexus epithelium in the ventricles), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is associated with:",
    options: [

      "Hippocampus and medial temporal lobe structures",
      "Only cerebellar Purkinje cells without cortex",
      "Photoreceptor outer segments",
      "Outer hair cell electromotility exclusively",
    ],
    correct: 0,
    explanation: "Declarative (explicit) memory depends on hippocampal and related cortical systems.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hippocampus and medial temporal lobe structures), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Hippocampus and medial temporal lobe structures), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory temporarily maintains information through:",
    options: [

      "Sustained activity in prefrontal and related cortical circuits",
      "Permanent structural changes in muscle spindles only",
      "Photoreceptor bleaching exclusively during normal resting permeability conditions.",
      "Elimination of all synaptic connections within seconds when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Persistent firing and recurrent circuits support short-term maintenance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Sustained activity in prefrontal and related cortical circuits), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Sustained activity in prefrontal and related cortical circuits), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Olfactory sensory neurons regenerate throughout life in mammals because:",
    options: [

      "They are continually replaced from basal stem cells in the epithelium",
      "They are identical to cortical pyramidal cells when temperature is near 37 °C.",
      "They never express receptors",
      "They are myelinated peripheral axons only in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "OSN turnover maintains the olfactory epithelium despite environmental damage.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (They are continually replaced from basal stem cells in the epithelium), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (They are continually replaced from basal stem cells in the epithelium), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (They are continually replaced from basal stem cells in the epithelium), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate in:",
    options: [

      "Motor cortex and descend to brainstem or spinal cord",
      "Muscle spindles exclusively (maps the lesion to the wrong motor pathway or reflex)",
      "Photoreceptors in the retina (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory sensory neurons only (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Corticospinal and related pathways carry commands from cortex to lower motor neurons.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Motor cortex and descend to brainstem or spinal cord), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Motor cortex and descend to brainstem or spinal cord), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Contralateral organization of sensory pathways means:",
    options: [

      "Left body side projects largely to right hemisphere",
      "Both sides project only to ipsilateral cortex always",
      "No decussation occurs in any pathway",
      "Only motor pathways cross the midline",
    ],
    correct: 0,
    explanation: "Most sensory and motor pathways decussate, mapping contralateral body sides.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Left body side projects largely to right hemisphere), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Left body side projects largely to right hemisphere), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Left body side projects largely to right hemisphere), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The primary cation with highest permeability at rest in most neurons is:",
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
      "This choice (Na⁺) does not match the keyed answer’s mechanism for Resting Potential.",
      "This choice (Ca²⁺) does not match the keyed answer’s mechanism for Resting Potential.",
      "This choice (Mg²⁺) does not match the keyed answer’s mechanism for Resting Potential.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a positively charged ion, if extracellular concentration exceeds intracellular concentration, E_ion is:",
    options: [

      "Positive (inside relative to outside)",
      "Negative (inside relative to outside)",
      "Always exactly 0 mV",
      "Undefined without temperature",
    ],
    correct: 0,
    explanation: "A concentration gradient favoring inward flux for a cation yields a positive equilibrium potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Positive (inside relative to outside)), this option misstates the mechanism or direction described in the stem.",
      "Equilibrium potentials depend on concentrations; they are not fixed at 0 mV for every ion.",
      "Unlike the keyed answer (Positive (inside relative to outside)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance (C_m) represents the ability of the membrane to:",
    options: [

      "Store charge across the lipid bilayer",
      "Pump ions against gradients",
      "Generate action potentials without channels",
      "Conduct current through gap junctions only",
    ],
    correct: 0,
    explanation: "The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Store charge across the lipid bilayer), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Store charge across the lipid bilayer), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Store charge across the lipid bilayer), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The all-or-none property of action potentials means that:",
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
      "Unlike the keyed answer (Suprathreshold stimuli produce full-amplitude spikes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Suprathreshold stimuli produce full-amplitude spikes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Suprathreshold stimuli produce full-amplitude spikes), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Action potentials propagate without decrement because:",
    options: [

      "Each depolarized segment actively regenerates the spike in adjacent membrane",
      "Passive spread alone carries the full spike amplitude indefinitely",
      "Myelin eliminates the need for ion channels (misapplies how active propagation uses local circuit currents)",
      "The Na⁺/K⁺ pump propagates voltage directly (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Active regeneration at each point along the axon maintains spike amplitude during propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Each depolarized segment actively regenerates the spike in adjacent membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Each depolarized segment actively regenerates the spike in adjacent membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Each depolarized segment actively regenerates the spike in adjacent membrane), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Hyperpolarization means the membrane potential becomes:",
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
      "Unlike the keyed answer (More negative than at rest), this option misstates the mechanism or direction described in the stem.",
      "This choice (Exactly 0 mV) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Equal to E_Na) does not match the keyed answer’s mechanism for Electrical Signaling.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "The synaptic cleft separates:",
    options: [

      "Presynaptic terminal and postsynaptic membrane",
      "Axon hillock and initial segment only",
      "Two dendrites connected by connexins",
      "Photoreceptor outer segment and pigment epithelium",
    ],
    correct: 0,
    explanation: "Chemical synapses transmit via neurotransmitter diffusion across the cleft to postsynaptic receptors.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Presynaptic terminal and postsynaptic membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Presynaptic terminal and postsynaptic membrane), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "A miniature EPSP (mEPSP) reflects:",
    options: [

      "Postsynaptic response to spontaneous release of one vesicle",
      "An action potential in the postsynaptic cell (mixes up presynaptic release with postsynaptic receptor logic)",
      "Passive spread from a neighboring axon without receptors",
      "Pump activity in the presynaptic terminal (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Spontaneous quantal release produces discrete mEPSPs corresponding to single vesicle events.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Postsynaptic response to spontaneous release of one vesicle), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Postsynaptic response to spontaneous release of one vesicle), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Postsynaptic response to spontaneous release of one vesicle), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptors are coupled to:",
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
      "Unlike the keyed answer (G proteins and second-messenger cascades), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (G proteins and second-messenger cascades), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (G proteins and second-messenger cascades), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude primarily by:",
    options: [

      "Lowering input resistance and diverting current",
      "Opening Na⁺ channels at the axon hillock (ignores how EPSPs/IPSPs sum in time or space)",
      "Increasing length constant indefinitely (ignores how EPSPs/IPSPs sum in time or space)",
      "Blocking the Na⁺/K⁺ pump (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Lowering input resistance and diverting current), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lowering input resistance and diverting current), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Lowering input resistance and diverting current), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Lateral inhibition in sensory systems serves to:",
    options: [

      "Enhance contrast between active and neighboring regions",
      "Eliminate all spontaneous activity when temperature is near 37 °C.",
      "Convert chemical to electrical synapses during normal resting permeability conditions.",
      "Block all feedforward input during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Lateral inhibition sharpens stimulus representation by suppressing adjacent channels or cells.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Enhance contrast between active and neighboring regions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Enhance contrast between active and neighboring regions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Enhance contrast between active and neighboring regions), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Volume transmission describes neuromodulator signaling that:",
    options: [

      "Diffuses broadly rather than point-to-point across a single cleft",
      "Requires electrical synapses exclusively",
      "Occurs only at the neuromuscular junction in a typical mammalian central neuron.",
      "Uses voltage-gated Na⁺ channels as receptors",
    ],
    correct: 0,
    explanation: "Neuromodulators can act on many targets via diffuse extracellular spread.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Diffuses broadly rather than point-to-point across a single cleft), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Diffuses broadly rather than point-to-point across a single cleft), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Diffuses broadly rather than point-to-point across a single cleft), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Photoreceptor outer segments contain:",
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
      "Unlike the keyed answer (Membrane disks with photopigment molecules), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Membrane disks with photopigment molecules), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Membrane disks with photopigment molecules), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The basilar membrane in the cochlea is tonotopically organized such that:",
    options: [

      "High frequencies peak near the base and low frequencies near the apex",
      "All frequencies activate the same location equally when temperature is near 37 °C.",
      "Low frequencies peak at the base only in a typical mammalian central neuron.",
      "Sound intensity alone determines location without frequency during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Mechanical properties vary along the cochlea, mapping frequency to position (tonotopy).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (High frequencies peak near the base and low frequencies near the apex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin primarily detect:",
    options: [

      "Pain and temperature",
      "High-frequency vibration at Pacinian frequency",
      "Sustained pressure with Merkel-like precision",
      "Photons of visible light",
    ],
    correct: 0,
    explanation: "Free nerve endings are nociceptors and thermoreceptors for pain and temperature.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Pain and temperature), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Pain and temperature), this option misstates the mechanism or direction described in the stem.",
      "This choice (Photons of visible light) does not match the keyed answer’s mechanism for Somatosensation.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Each olfactory sensory neuron typically expresses:",
    options: [

      "One functional odor receptor type",
      "All receptor genes simultaneously",
      "Only photopigment genes",
      "Nicotinic acetylcholine receptors exclusively",
    ],
    correct: 0,
    explanation: "One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (One functional odor receptor type), this option misstates the mechanism or direction described in the stem.",
      "This choice (Only photopigment genes) does not match the keyed answer’s mechanism for Olfaction.",
      "Unlike the keyed answer (One functional odor receptor type), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter tracts consist primarily of:",
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
      "Unlike the keyed answer (Myelinated axons), this option misstates the mechanism or direction described in the stem.",
      "This choice (Synaptic cleft fluid) does not match the keyed answer’s mechanism for Neuroanatomy.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons directly innervate:",
    options: [

      "Skeletal muscle fibers",
      "Only upper motor neurons in cortex",
      "Photoreceptors in the retina",
      "Olfactory bulb mitral cells",
    ],
    correct: 0,
    explanation: "Lower motor neurons in brainstem and spinal cord synapse on skeletal muscle.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Skeletal muscle fibers), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Skeletal muscle fibers), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory for skills is most associated with:",
    options: [

      "Basal ganglia and cerebellum",
      "Only hippocampal CA1 pyramidal cells",
      "Photoreceptor transduction cascades",
      "Cochlear outer hair cells exclusively",
    ],
    correct: 0,
    explanation: "Motor and procedural learning engages basal ganglia and cerebellar circuits.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Basal ganglia and cerebellum), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The thalamus functions primarily as:",
    options: [

      "A relay station for sensory information to cortex",
      "The sole site of phototransduction when temperature is near 37 °C.",
      "The origin of cerebrospinal fluid in a typical mammalian central neuron.",
      "The only location of action potential initiation",
    ],
    correct: 0,
    explanation: "Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A relay station for sensory information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A relay station for sensory information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A relay station for sensory information to cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexons in gap junctions are composed of:",
    options: [

      "Connexin proteins forming intercellular pores",
      "SNARE complexes for vesicle fusion when temperature is near 37 °C.",
      "Rhodopsin molecules during normal resting permeability conditions.",
      "Voltage-gated Na⁺ channel alpha subunits",
    ],
    correct: 0,
    explanation: "Six connexins assemble into a connexon hemichannel that aligns with a partner cell.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Connexin proteins forming intercellular pores), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Connexin proteins forming intercellular pores), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Connexin proteins forming intercellular pores), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP is degraded by the enzyme:",
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
      "This choice (Adenylyl cyclase) does not match the keyed answer’s mechanism for Second Messengers.",
      "Unlike the keyed answer (Phosphodiesterase), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Phosphodiesterase), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Cl⁻ equilibrium potential is often near resting V_m in many neurons because:",
    options: [

      "Cl⁻ channels passively set V_Cl near rest via transporter activity",
      "Cl⁻ is impermeant at all times (ignores which ion dominates resting permeability)",
      "The Na⁺/K⁺ pump excludes all Cl⁻ from the cell (ignores which ion dominates resting permeability)",
      "Cl⁻ channels open only during action potentials (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Cl⁻ transporters and leak conductance often place E_Cl close to resting potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Cl⁻ channels passively set V_Cl near rest via transporter activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cl⁻ channels passively set V_Cl near rest via transporter activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cl⁻ channels passively set V_Cl near rest via transporter activity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials by binding to:",
    options: [

      "Voltage-gated Na⁺ channels",
      "Voltage-gated K⁺ channels only",
      "Nicotinic receptors at the neuromuscular junction",
      "Gap junction connexins",
    ],
    correct: 0,
    explanation: "TTX selectively blocks the pore of voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "This choice (Gap junction connexins) does not match the keyed answer’s mechanism for Action Potentials.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Endocytosis at the presynaptic terminal recaptures:",
    options: [

      "Membrane and vesicle components after exocytosis",
      "Only neurotransmitter without membrane (mixes up presynaptic release with postsynaptic receptor logic)",
      "Postsynaptic receptors into the cleft (mixes up presynaptic release with postsynaptic receptor logic)",
      "Myelin wraps from adjacent internodes (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Membrane and vesicle components after exocytosis), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Membrane and vesicle components after exocytosis), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Membrane and vesicle components after exocytosis), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Horizontal cells in the retina contribute to:",
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
      "Unlike the keyed answer (Lateral inhibition and contrast enhancement), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Lateral inhibition and contrast enhancement), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells in the cochlea enhance sensitivity through:",
    options: [

      "Electromotility that amplifies basilar membrane motion",
      "Releasing glutamate onto photoreceptors",
      "Generating action potentials with higher amplitude than inner hair cells always",
      "Expressing rhodopsin for dim-light hearing",
    ],
    correct: 0,
    explanation: "Outer hair cell electromotility actively boosts cochlear amplification.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Electromotility that amplifies basilar membrane motion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Electromotility that amplifies basilar membrane motion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage of many substances primarily at:",
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
      "Unlike the keyed answer (CNS capillary endothelial tight junctions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (CNS capillary endothelial tight junctions), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Long-term potentiation (LTP) is defined as:",
    options: [

      "A persistent increase in synaptic strength after high-frequency stimulation",
      "Permanent elimination of all inhibitory synapses",
      "A decrease in quantal size after one mEPSP when temperature is near 37 °C.",
      "Passive decay of EPSPs along dendrites only during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A persistent increase in synaptic strength after high-frequency stimulation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A persistent increase in synaptic strength after high-frequency stimulation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A persistent increase in synaptic strength after high-frequency stimulation), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];

const NEW_TIER2 = [
  {
    topic: "Resting Potential",
    question: "If the Na⁺/K⁺ pump is blocked, over time the resting potential will:",
    options: [

      "Move toward 0 mV as gradients collapse",
      "Become more negative indefinitely without limit",
      "Lock at the Nernst potential for Cl⁻ only",
      "Prevent all action potentials by hyperpolarizing above 0 mV",
    ],
    correct: 0,
    explanation: "Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Move toward 0 mV as gradients collapse) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move toward 0 mV as gradients collapse) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Move toward 0 mV as gradients collapse) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If intracellular K⁺ is 140 mM and extracellular K⁺ is 4 mM, E_K is approximately:",
    options: [

      "−95 mV (negative inside)",
      "+60 mV (positive inside)",
      "0 mV",
      "+120 mV",
    ],
    correct: 0,
    explanation: "A large inward K⁺ gradient yields a strongly negative E_K.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (−95 mV (negative inside)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (−95 mV (negative inside)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (−95 mV (negative inside)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing dendritic diameter (lower R_i) while R_m is constant will:",
    options: [

      "Increase λ and extend passive spread",
      "Decrease λ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Prevent all EPSP summation (misstates how R_m, C_m, or geometry set τ or λ)",
      "Block voltage-gated channels (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); larger diameter lowers R_i and lengthens λ.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase λ and extend passive spread) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase λ and extend passive spread) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase λ and extend passive spread) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input resistance measures:",
    options: [

      "The voltage change per unit injected current (inverse of conductance)",
      "The speed of saltatory conduction only (misstates how R_m, C_m, or geometry set τ or λ)",
      "The number of olfactory glomeruli activated (misstates how R_m, C_m, or geometry set τ or λ)",
      "The wavelength of maximal photoreceptor sensitivity exclusively",
    ],
    correct: 0,
    explanation: "High input resistance yields larger voltage deflections for a given current.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The voltage change per unit injected current (inverse of conductance)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The voltage change per unit injected current (inverse of conductance)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The voltage change per unit injected current (inverse of conductance)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The relative refractory period follows the absolute refractory period and is characterized by:",
    options: [

      "Higher threshold and reduced spike amplitude possible",
      "Complete inability to fire under any stimulus in a typical mammalian central neuron.",
      "Permanent channel removal in a typical mammalian central neuron.",
      "Requires hyperpolarization below −120 mV exclusively in this context",
    ],
    correct: 0,
    explanation: "Partial recovery of Na channels requires stronger stimuli and can yield smaller spikes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Higher threshold and reduced spike amplitude possible) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher threshold and reduced spike amplitude possible) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher threshold and reduced spike amplitude possible) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Decreasing axon diameter in an unmyelinated fiber generally:",
    options: [

      "Slows conduction velocity by increasing internal resistance",
      "Speeds conduction by reducing capacitance only (misapplies how active propagation uses local circuit currents)",
      "Has no effect on conduction (misapplies how active propagation uses local circuit currents)",
      "Converts saltatory to continuous conduction (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Smaller diameter raises R_i, slowing passive and active propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Slows conduction velocity by increasing internal resistance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slows conduction velocity by increasing internal resistance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Slows conduction velocity by increasing internal resistance) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Ohm's law applied to a membrane patch states that current equals:",
    options: [

      "Conductance times driving force (I = g × (V_m − E_ion))",
      "Conductance times voltage alone (I = g × V_m) — uses the wrong sign or driving force for ionic current.",
      "Voltage divided by capacitance only (uses the wrong sign or driving force for ionic current)",
      "Permeability times Nernst potential squared (uses the wrong sign or driving force for ionic current)",
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
    question: "Blocking presynaptic voltage-gated Ca²⁺ channels will most directly reduce:",
    options: [

      "Neurotransmitter release probability",
      "Postsynaptic AMPA receptor density (describes the wrong synaptic structure or transmission step)",
      "Axonal myelin thickness (describes the wrong synaptic structure or transmission step)",
      "Retinal phototransduction (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx is the immediate trigger for vesicle fusion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurotransmitter release probability) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Neurotransmitter reuptake transporters on glia or presynaptic terminals serve to:",
    options: [

      "Terminate synaptic signaling by clearing transmitter from the cleft",
      "Open voltage-gated Na⁺ channels in the cleft (mixes up presynaptic release with postsynaptic receptor logic)",
      "Phosphorylate CREB in the nucleus directly (mixes up presynaptic release with postsynaptic receptor logic)",
      "Generate myelin around the synapse (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Reuptake limits spillover and resets the synapse for subsequent release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Terminate synaptic signaling by clearing transmitter from the cleft) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Terminate synaptic signaling by clearing transmitter from the cleft) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Terminate synaptic signaling by clearing transmitter from the cleft) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Muscarinic acetylcholine receptors are metabotropic and can:",
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
      "This option is inconsistent with the stem; the keyed answer (Modulate K or Ca channels via G-proteins) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate K or Ca channels via G-proteins) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate K or Ca channels via G-proteins) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "IPSPs mediated by K⁺ channels opened via G-proteins occur when:",
    options: [

      "E_K is below rest and opening channels hyperpolarizes or stabilizes V_m",
      "E_K is above rest always",
      "No G-proteins exist in neurons when temperature is near 37 °C. during normal resting permeability conditions.",
      "Requires photoreceptors express G-proteins exclusively in this context",
    ],
    correct: 0,
    explanation: "GIRK channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (E_K is below rest and opening channels hyperpolarizes or stabilizes V_m) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (E_K is below rest and opening channels hyperpolarizes or stabilizes V_m) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (E_K is below rest and opening channels hyperpolarizes or stabilizes V_m) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP efficacy by:",
    options: [

      "Lowering input resistance so depolarizing current produces smaller voltage change",
      "Increasing input resistance maximally (ignores how EPSPs/IPSPs sum in time or space)",
      "Blocking the Na⁺/K⁺ pump exclusively (ignores how EPSPs/IPSPs sum in time or space)",
      "Preventing all Cl⁻ conductance (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so depolarizing current produces smaller voltage change) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so depolarizing current produces smaller voltage change) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so depolarizing current produces smaller voltage change) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Lateral inhibition in sensory systems enhances contrast by:",
    options: [

      "Suppressing neighboring channels when one is strongly activated",
      "Amplifying uniform background equally everywhere",
      "Eliminating all inhibition in the circuit in a typical mammalian central neuron.",
      "Converting photoreceptors to mechanoreceptors in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Lateral inhibition sharpens stimulus boundaries by suppressing adjacent inactive regions.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Suppressing neighboring channels when one is strongly activated) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppressing neighboring channels when one is strongly activated) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppressing neighboring channels when one is strongly activated) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulatory effects can persist longer than fast synaptic potentials because:",
    options: [

      "Second-messenger cascades and kinase activity outlast the initial signal",
      "Ionotropic channels remain open indefinitely",
      "Action potentials stop permanently when temperature is near 37 °C. during normal resting permeability conditions.",
      "Myelin is degraded after each spike during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Metabotropic signaling engages biochemical cascades with slower decay kinetics.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Second-messenger cascades and kinase activity outlast the initial signal) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Second-messenger cascades and kinase activity outlast the initial signal) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Second-messenger cascades and kinase activity outlast the initial signal) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Visual System",
    question: "ON bipolar cells depolarize to light because:",
    options: [

      "They express metabotropic glutamate receptors that close TRPM1 channels in ON pathways",
      "They always use ionotropic AMPA receptors identical to cochlear hair cells",
      "They hyperpolarize whenever cGMP rises",
      "They are electrically coupled to Pacinian corpuscles",
    ],
    correct: 0,
    explanation: "Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (They express metabotropic glutamate receptors that close TRPM1 channels in ON pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (They express metabotropic glutamate receptors that close TRPM1 channels in ON pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (They express metabotropic glutamate receptors that close TRPM1 channels in ON pathways) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The organ of Corti sits on the basilar membrane, which vibrates maximally at:",
    options: [

      "Different positions for different sound frequencies",
      "One fixed position for all frequencies when temperature is near 37 °C.",
      "The olfactory epithelium",
      "The corpus callosum exclusively during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Mechanical properties vary along the cochlea, creating tonotopy.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Different positions for different sound frequencies) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Different positions for different sound frequencies) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Different positions for different sound frequencies) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings in skin primarily signal:",
    options: [

      "Pain and temperature",
      "Only fine discriminative touch on glabrous skin",
      "Auditory frequency place coding",
      "Declarative memory consolidation",
    ],
    correct: 0,
    explanation: "Polymodal nociceptors and thermoreceptors use free nerve endings.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature (nociception and thermoreception)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature (nociception and thermoreception)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature (nociception and thermoreception)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "The spinothalamic tract carries:",
    options: [

      "Pain and temperature to the thalamus",
      "Only fine touch via dorsal columns",
      "Visual information from retina",
      "Dopamine from substantia nigra to striatum",
    ],
    correct: 0,
    explanation: "Anterolateral pathways convey nociceptive and thermal information.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature to the thalamus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature to the thalamus) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature to the thalamus) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter appears white because:",
    options: [

      "Myelin sheaths around axons scatter light",
      "It contains only neuronal cell bodies (localizes the function to the wrong brain region)",
      "It is filled with blood plasma only (localizes the function to the wrong brain region)",
      "Photopigments absorb all wavelengths (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Lipid-rich myelin gives white matter its light appearance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Myelin sheaths around axons scatter light) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelin sheaths around axons scatter light) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelin sheaths around axons scatter light) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (e.g., riding a bicycle) relies more on:",
    options: [

      "Basal ganglia and cerebellum among other motor circuits",
      "The optic disc exclusively when temperature is near 37 °C.",
      "Olfactory glomeruli only",
      "The node of Ranvier exclusively during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Procedural skills engage motor learning circuits including basal ganglia and cerebellum.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia and cerebellum among other motor circuits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia and cerebellum among other motor circuits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia and cerebellum among other motor circuits) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Glomeruli in the olfactory bulb represent:",
    options: [

      "Convergence of OSNs expressing the same receptor type",
      "Tonotopic frequency bands from the cochlea when temperature is near 37 °C.",
      "Center-surround retinal ganglion fields only",
      "Nodes of Ranvier in peripheral nerves in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Each glomerulus receives input from OSNs expressing one receptor type.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Convergence of OSNs expressing the same receptor type) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Convergence of OSNs expressing the same receptor type) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Convergence of OSNs expressing the same receptor type) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons in the spinal ventral horn:",
    options: [

      "Directly innervate skeletal muscle fibers",
      "Only synapse on thalamic relay cells (maps the lesion to the wrong motor pathway or reflex)",
      "Transduce sound in the cochlea (maps the lesion to the wrong motor pathway or reflex)",
      "Express olfactory receptors exclusively",
    ],
    correct: 0,
    explanation: "Lower motor neurons form the final common path to muscle.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Directly innervate skeletal muscle fibers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Directly innervate skeletal muscle fibers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Directly innervate skeletal muscle fibers) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellar cortex contains:",
    options: [

      "Purkinje cells, granule cells, and parallel fibers",
      "Only photoreceptors and horizontal cells",
      "Olfactory sensory neurons with one receptor each",
      "Endothelial tight junctions of the BBB exclusively",
    ],
    correct: 0,
    explanation: "Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Purkinje cells, granule cells, and parallel fibers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Purkinje cells, granule cells, and parallel fibers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Purkinje cells, granule cells, and parallel fibers) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The prefrontal cortex contributes to:",
    options: [

      "Working memory and executive control of behavior",
      "Phototransduction in rods exclusively",
      "Basilar membrane vibration patterns only",
      "Direct release of ACh at the neuromuscular junction from OSNs",
    ],
    correct: 0,
    explanation: "Prefrontal circuits support working memory, planning, and cognitive control.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Working memory and executive control of behavior) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Working memory and executive control of behavior) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Working memory and executive control of behavior) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The amygdala is heavily involved in:",
    options: [

      "Emotional processing and fear learning",
      "Basilar membrane tonotopy exclusively",
      "Phototransduction in cones only",
      "Saltatory conduction velocity measurement",
    ],
    correct: 0,
    explanation: "Amygdalar circuits associate stimuli with emotional significance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Emotional processing and fear learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Emotional processing and fear learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Emotional processing and fear learning) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If E_K = −90 mV and E_Na = +60 mV, increasing P_Na/P_K at rest will shift V_m:",
    options: [

      "Toward E_Na (less negative)",
      "Toward E_K (more negative)",
      "To exactly the arithmetic mean (−15 mV) always",
      "Away from both equilibrium potentials equally",
    ],
    correct: 0,
    explanation: "Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Raising intracellular Na⁺ concentration while extracellular Na⁺ is fixed will make E_Na:",
    options: [

      "Less positive (closer to 0 mV)",
      "More positive (contradicts the Nernst dependence on inside/outside concentrations)",
      "Equal to E_K (contradicts the Nernst dependence on inside/outside concentrations)",
      "Independent of Na⁺ gradients (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "Higher internal Na⁺ reduces the inward driving force, lowering E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Less positive (closer to 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Less positive (closer to 0 mV)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Less positive (closer to 0 mV)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Doubling membrane resistance R_m while keeping C_m constant will:",
    options: [

      "Double the time constant τ and increase input resistance",
      "Halve the time constant τ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Have no effect on passive properties (misstates how R_m, C_m, or geometry set τ or λ)",
      "Prevent spatial summation entirely (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "τ = R_m C_m and input resistance scale with R_m.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Double the time constant τ and increase input resistance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Double the time constant τ and increase input resistance) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Double the time constant τ and increase input resistance) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is driven mainly by:",
    options: [

      "Delayed-rectifier K⁺ channels and Ca²⁺-activated K⁺ channels",
      "Continued Na⁺ influx",
      "Opening of ligand-gated AMPA receptors when temperature is near 37 °C.",
      "Electrogenic pump reversal when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Delayed-rectifier (n-type) K⁺ efflux plus Ca²⁺-activated K⁺ channels (after Ca²⁺ influx) hyperpolarize the membrane below rest.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Persistent K⁺ efflux through voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Persistent K⁺ efflux through voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Persistent K⁺ efflux through voltage-gated K⁺ channels) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In saltatory conduction, the largest density of voltage-gated Na⁺ channels is at:",
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
      "This option is inconsistent with the stem; the keyed answer (Nodes of Ranvier) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nodes of Ranvier) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Nodes of Ranvier) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If g_Na increases while V_m is held fixed, the Na⁺ equilibrium current (I_Na) according to I = g(V_m − E_ion) will:",
    options: [

      "Increase in magnitude if V_m ≠ E_Na",
      "Always become zero regardless of V_m",
      "Reverse sign without changing magnitude",
      "Depend only on the Na⁺/K⁺ pump rate",
    ],
    correct: 0,
    explanation: "Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase in magnitude if V_m ≠ E_Na) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase in magnitude if V_m ≠ E_Na) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase in magnitude if V_m ≠ E_Na) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Synaptotagmin on synaptic vesicles acts as a:",
    options: [

      "Ca²⁺ sensor triggering fast exocytosis",
      "Voltage-gated Na⁺ channel subunit (describes the wrong synaptic structure or transmission step)",
      "Postsynaptic scaffold protein only (describes the wrong synaptic structure or transmission step)",
      "Myelin structural protein (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Ca²⁺ binding to synaptotagmin triggers SNARE-mediated fusion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ sensor triggering fast exocytosis) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ sensor triggering fast exocytosis) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ sensor triggering fast exocytosis) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "If presynaptic Ca²⁺ influx is reduced, one expects:",
    options: [

      "Lower probability of vesicle release",
      "Larger quantal size per vesicle always",
      "Postsynaptic receptor number to increase instantly",
      "Conversion of IPSPs to action potentials in the axon",
    ],
    correct: 0,
    explanation: "Release probability is steeply dependent on presynaptic Ca²⁺ concentration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lower probability of vesicle release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lower probability of vesicle release) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lower probability of vesicle release) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Glycine receptors at spinal inhibitory synapses are:",
    options: [

      "Ionotropic Cl⁻ channels producing fast IPSPs",
      "Metabotropic G-protein receptors only in a typical mammalian central neuron.",
      "Voltage-gated Na⁺ channels when temperature is near 37 °C.",
      "Electrical synapses via connexins in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ionotropic Cl⁻ channels producing fast IPSPs) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ionotropic Cl⁻ channels producing fast IPSPs) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ionotropic Cl⁻ channels producing fast IPSPs) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection at a synapse is exemplified by:",
    options: [

      "NMDA receptor activation requiring presynaptic release and postsynaptic depolarization",
      "AMPA-only transmission without voltage dependence (ignores how EPSPs/IPSPs sum in time or space)",
      "Electrical synapses that lack voltage sensitivity (ignores how EPSPs/IPSPs sum in time or space)",
      "Passive decay that ignores timing (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "NMDA receptors act as coincidence detectors for Hebbian plasticity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (NMDA receptor activation requiring presynaptic release and postsynaptic depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (NMDA receptor activation requiring presynaptic release and postsynaptic depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (NMDA receptor activation requiring presynaptic release and postsynaptic depolarization) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Disynaptic inhibition refers to:",
    options: [

      "An inhibitory interneuron interposed between excitatory input and target",
      "Direct monosynaptic excitation only during normal resting permeability conditions.",
      "Electrical coupling without chemical synapses in a typical mammalian central neuron.",
      "Recurrent excitation without inhibition during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Disynaptic pathways include an intermediate inhibitory neuron.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (An inhibitory interneuron interposed between excitatory input and target) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An inhibitory interneuron interposed between excitatory input and target) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An inhibitory interneuron interposed between excitatory input and target) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonin (5-HT) commonly modulates circuits through:",
    options: [

      "Multiple G-protein-coupled receptor subtypes",
      "Direct ligand-gated cation pores only at all synapses",
      "Voltage-gated Na⁺ channels in photoreceptors",
      "Tip-link gating in hair cells",
    ],
    correct: 0,
    explanation: "5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Multiple G-protein-coupled receptor subtypes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple G-protein-coupled receptor subtypes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple G-protein-coupled receptor subtypes) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Visual System",
    question: "On-center retinal ganglion cells increase firing when:",
    options: [

      "Light hits the receptive field center",
      "Light hits only the surround without center stimulation",
      "The cochlea is stimulated by sound",
      "Odorants bind glomerular receptors",
    ],
    correct: 0,
    explanation: "ON-center cells are excited by center illumination and often inhibited by surround light.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Light hits the receptive field center) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Light hits the receptive field center) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Light hits the receptive field center) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity primarily by:",
    options: [

      "Increasing firing rate with louder stimuli",
      "Changing the wavelength of basilar membrane resonance only",
      "Switching from rods to cones",
      "Eliminating all spontaneous activity at threshold",
    ],
    correct: 0,
    explanation: "Rate coding in auditory nerve fibers conveys stimulus intensity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increasing firing rate with louder stimuli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing firing rate with louder stimuli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing firing rate with louder stimuli) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Meissner corpuscles in glabrous skin are most sensitive to:",
    options: [

      "Low-frequency flutter and texture",
      "Sustained deep pressure only",
      "Light photons in scotopic conditions",
      "Odorant concentration gradients",
    ],
    correct: 0,
    explanation: "Meissner corpuscles are rapidly adapting receptors for light touch and texture.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Low-frequency flutter and texture) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Low-frequency flutter and texture) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Low-frequency flutter and texture) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral cells in the olfactory bulb receive input from:",
    options: [

      "Olfactory sensory neuron axons in glomeruli",
      "Inner hair cells of the cochlea during normal resting permeability conditions.",
      "Retinal bipolar cells exclusively in a typical mammalian central neuron.",
      "Upper motor neurons in cortex",
    ],
    correct: 0,
    explanation: "OSN axons synapse in glomeruli onto mitral/tufted cell dendrites.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Olfactory sensory neuron axons in glomeruli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Olfactory sensory neuron axons in glomeruli) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Olfactory sensory neuron axons in glomeruli) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The decussation of pyramidal tract fibers occurs mainly in:",
    options: [

      "The medulla (pyramids)",
      "The retina only",
      "The olfactory epithelium",
      "The cochlear apex exclusively",
    ],
    correct: 0,
    explanation: "Most corticospinal axons cross in the medullary pyramids.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The medulla (pyramids)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The medulla (pyramids)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The medulla (pyramids)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Muscle spindles detect:",
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
      "This option is inconsistent with the stem; the keyed answer (Muscle stretch and length changes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Muscle stretch and length changes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Muscle stretch and length changes) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "LTD (long-term depression) is characterized by:",
    options: [

      "Persistent decrease in synaptic strength after specific stimulation patterns",
      "Permanent block of all Na⁺ channels during normal resting permeability conditions.",
      "Increased photopigment bleaching",
      "Loss of all cochlear amplification when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "LTD is activity-dependent weakening of synaptic efficacy, complementing LTP.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Persistent decrease in synaptic strength after specific stimulation patterns) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Persistent decrease in synaptic strength after specific stimulation patterns) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Persistent decrease in synaptic strength after specific stimulation patterns) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The primary visual cortex (V1) is organized such that:",
    options: [

      "Neighboring columns represent neighboring regions of visual space",
      "All orientations are represented in one cell only in a typical mammalian central neuron.",
      "Tonotopy maps frequency to position during normal resting permeability conditions.",
      "Odor types map one-to-one to single glomeruli without overlap",
    ],
    correct: 0,
    explanation: "Retinotopic and columnar organization in V1 preserves spatial relationships from the retina.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neighboring columns represent neighboring regions of visual space) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neighboring columns represent neighboring regions of visual space) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neighboring columns represent neighboring regions of visual space) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "A major advantage of electrical synapses over chemical synapses is:",
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
      "This option is inconsistent with the stem; the keyed answer (Faster, bidirectional signaling with minimal synaptic delay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Faster, bidirectional signaling with minimal synaptic delay) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Faster, bidirectional signaling with minimal synaptic delay) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Protein kinase A (PKA) is activated when:",
    options: [

      "cAMP binds regulatory subunits releasing catalytic subunits",
      "IP₃ directly opens the Na⁺ channel pore during normal resting permeability conditions.",
      "Glutamate binds AMPA receptors without Na⁺ flux during normal resting permeability conditions.",
      "Photopigment is bleached in darkness",
    ],
    correct: 0,
    explanation: "cAMP binding to PKA regulatory subunits frees active catalytic subunits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (cAMP binds regulatory subunits releasing catalytic subunits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (cAMP binds regulatory subunits releasing catalytic subunits) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (cAMP binds regulatory subunits releasing catalytic subunits) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to voltage-gated K⁺ channels typically:",
    options: [

      "Prolongs repolarization and broadens the action potential",
      "Blocks Na⁺ channels and prevents initiation during normal resting permeability conditions.",
      "Hyperpolarizes photoreceptors in light when temperature is near 37 °C.",
      "Closes gap junction connexons exclusively in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "K⁺ channel block slows repolarization, widening the spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Prolongs repolarization and broadens the action potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolongs repolarization and broadens the action potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Prolongs repolarization and broadens the action potential) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal dendritic synapse is smaller than at the synapse because of:",
    options: [

      "Passive cable attenuation along dendrites",
      "Active regeneration in dendrites identical to axons",
      "Elimination of all ion gradients",
      "Exclusive Cl⁻ permeability at the soma only",
    ],
    correct: 0,
    explanation: "Subthreshold signals decrement with distance due to leak and axial resistance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Passive cable attenuation along dendrites) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive cable attenuation along dendrites) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive cable attenuation along dendrites) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors reduces the response because:",
    options: [

      "Receptors enter a closed state despite ligand binding",
      "Vesicle pool is permanently depleted in one trial (mixes up presynaptic release with postsynaptic receptor logic)",
      "Myelin is removed from the presynaptic axon (mixes up presynaptic release with postsynaptic receptor logic)",
      "The Na⁺/K⁺ pump reverses direction (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Desensitized receptors fail to open even when neurotransmitter remains bound.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Receptors enter a closed state despite ligand binding) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Receptors enter a closed state despite ligand binding) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Receptors enter a closed state despite ligand binding) matches the underlying mechanism.",
    ]
  }
];

const NEW_TIER3 = [
  {
    topic: "Resting Potential",
    question: "At rest, if K⁺ leak conductance dominates, increasing Na⁺ leak conductance will shift V_m:",
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
      "Unlike the keyed answer (Toward E_Na (less negative)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Toward E_Na (less negative)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Toward E_Na (less negative)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a cation with equal intracellular and extracellular concentrations, the Nernst potential is:",
    options: [

      "0 mV",
      "−90 mV",
      "+60 mV",
      "Undefined because z=0",
    ],
    correct: 0,
    explanation: "When [inside]=[outside], the logarithmic term is zero and E_ion = 0 mV.",
    wrongExplanations: [
      "",
      "This choice (−90 mV) does not match the keyed answer’s mechanism for Nernst Equation.",
      "This choice (+60 mV) does not match the keyed answer’s mechanism for Nernst Equation.",
      "This choice (Undefined because z=0) does not match the keyed answer’s mechanism for Nernst Equation.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If λ is short, EPSPs from distal synapses at the axon hillock will be:",
    options: [

      "Smaller due to greater attenuation",
      "Larger than proximal EPSPs always",
      "Unchanged regardless of distance",
      "Converted directly to action potentials without decay",
    ],
    correct: 0,
    explanation: "Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Smaller due to greater attenuation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Smaller due to greater attenuation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Smaller due to greater attenuation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Local anesthetics that block voltage-gated Na⁺ channels prevent action potentials by:",
    options: [

      "Reducing regenerative Na⁺ current needed for propagation",
      "Opening all K⁺ leak channels only in a typical mammalian central neuron.",
      "Increasing myelin thickness during normal resting permeability conditions.",
      "Blocking gap junction connexins during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Without Na⁺ channel activation, regenerative depolarization cannot occur.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reducing regenerative Na⁺ current needed for propagation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing regenerative Na⁺ current needed for propagation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing regenerative Na⁺ current needed for propagation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "At a node of Ranvier, the inward current during an action potential is carried mainly by:",
    options: [

      "Voltage-gated Na⁺ channels",
      "K⁺ leak channels only",
      "Ligand-gated Cl⁻ channels",
      "Gap junction hemichannels exclusively",
    ],
    correct: 0,
    explanation: "Clustered Na⁺ channels at nodes regenerate the action potential.",
    wrongExplanations: [
      "",
      "This choice (K⁺ leak channels only) does not match the keyed answer’s mechanism for Action Potential Propagation.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If E_ion for a permeant cation is +50 mV and V_m is −70 mV, the driving force for that ion is:",
    options: [

      "120 mV inward (V_m − E_ion = −120 mV)",
      "20 mV outward only (uses the wrong sign or driving force for ionic current)",
      "Zero because the cell is at rest (uses the wrong sign or driving force for ionic current)",
      "50 mV with no direction (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "Driving force is V_m − E_ion; negative values indicate inward current for cations.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (120 mV inward (V_m − E_ion = −120 mV)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (120 mV inward (V_m − E_ion = −120 mV)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (120 mV inward (V_m − E_ion = −120 mV)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Reversal potential of an ionotropic receptor channel equals:",
    options: [

      "The potential at which net ion flux through the open channel is zero",
      "Always −90 mV for all receptors (uses the wrong sign or driving force for ionic current)",
      "The Nernst potential of sodium only regardless of permeabilities",
      "The voltage at which the pump stops (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "E_rev is determined by relative permeabilities of ions passing through the channel pore.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The potential at which net ion flux through the open channel is zero), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The potential at which net ion flux through the open channel is zero), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The potential at which net ion flux through the open channel is zero), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Miniature EPSCs (mEPSCs) reflect:",
    options: [

      "Spontaneous single-vesicle release without action potentials",
      "Action-potential-evoked multivesicular release only (describes the wrong synaptic structure or transmission step)",
      "Electrical coupling through myelin (describes the wrong synaptic structure or transmission step)",
      "Retrograde nitric oxide signaling exclusively (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spontaneous single-vesicle release without action potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spontaneous single-vesicle release without action potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spontaneous single-vesicle release without action potentials), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Desensitization of ionotropic receptors reduces postsynaptic current even when:",
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
      "Unlike the keyed answer (Neurotransmitter remains bound), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Neurotransmitter remains bound), this option misstates the mechanism or direction described in the stem.",
      "This choice (Gap junctions are open) does not match the keyed answer’s mechanism for Synaptic Transmission.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "NMDA receptors require both glutamate binding and:",
    options: [

      "Postsynaptic depolarization to relieve Mg block",
      "Hyperpolarization below −120 mV during normal resting permeability conditions.",
      "Exclusive presynaptic GABA release when temperature is near 37 °C.",
      "Complete absence of AMPA receptors when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Voltage-dependent Mg²⁺ block makes NMDA receptors coincidence detectors for LTP.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Postsynaptic depolarization to relieve Mg block), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Postsynaptic depolarization to relieve Mg block), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Postsynaptic depolarization to relieve Mg block), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Coincidence detection at CA1 synapses is implemented by:",
    options: [

      "NMDA receptor voltage-dependent Mg block",
      "AMPA receptors at hyperpolarized potentials only",
      "Electrical synapses in the retina",
      "Pacinian corpuscle adaptation",
    ],
    correct: 0,
    explanation: "NMDA receptors require both glutamate and depolarization to pass Ca²⁺ current.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (NMDA receptor voltage-dependent Mg block), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (NMDA receptor voltage-dependent Mg block), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (NMDA receptor voltage-dependent Mg block), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "EPSP amplitude at the soma is reduced for distal synapses primarily due to:",
    options: [

      "Passive cable attenuation along dendrites",
      "Complete absence of receptors at distal sites always",
      "Saltatory conduction in dendrites",
      "Photoreceptor convergence only",
    ],
    correct: 0,
    explanation: "Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Passive cable attenuation along dendrites), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Passive cable attenuation along dendrites), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Disinhibition refers to:",
    options: [

      "Removal of inhibitory input onto a neuron, effectively increasing its excitability",
      "Adding extra GABAergic synapses permanently during normal resting permeability conditions.",
      "Blocking all excitatory glutamate release only when temperature is near 37 °C.",
      "Myelinating inhibitory interneurons during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Removal of inhibitory input onto a neuron, effectively increasing its excitabili), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Removal of inhibitory input onto a neuron, effectively increasing its excitabili), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Removal of inhibitory input onto a neuron, effectively increasing its excitabili), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Volume transmission describes:",
    options: [

      "Diffusion of neuromodulators through extracellular fluid to distant targets",
      "Saltatory conduction exclusively",
      "Direct cytoplasmic coupling via connexins only when temperature is near 37 °C.",
      "Transduction of sound in the basilar membrane in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Some modulators act beyond the synaptic cleft through extracellular diffusion.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Diffusion of neuromodulators through extracellular fluid to distant targets), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Diffusion of neuromodulators through extracellular fluid to distant targets), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Diffusion of neuromodulators through extracellular fluid to distant targets), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "The blind spot corresponds to:",
    options: [

      "The optic disc where ganglion cell axons exit and photoreceptors are absent",
      "The fovea with highest acuity",
      "The cochlear apex only",
      "The olfactory bulb glomerular layer",
    ],
    correct: 0,
    explanation: "No photoreceptors lie over the optic disc, creating a scotoma compensated by filling-in.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The optic disc where ganglion cell axons exit and photoreceptors are absent), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Color opponency in retinal ganglion cells arises from:",
    options: [

      "Antagonistic inputs from different cone types",
      "Tonotopic mapping on the basilar membrane",
      "One OSN-one receptor rule in the bulb",
      "Muscle spindle Ia afferents exclusively",
    ],
    correct: 0,
    explanation: "Opponent color circuits compare L, M, and S cone inputs.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Antagonistic inputs from different cone types), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Antagonistic inputs from different cone types), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Antagonistic inputs from different cone types), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity primarily through:",
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
      "Unlike the keyed answer (Increased action potential firing rate), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increased action potential firing rate), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increased action potential firing rate), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "The dorsal column-medial lemniscus pathway carries:",
    options: [

      "Fine touch and proprioceptive information to the thalamus",
      "Only pain and temperature via spinothalamic tract",
      "Visual information from retina to V1 only",
      "Olfactory signals from bulb to cortex directly without relay",
    ],
    correct: 0,
    explanation: "DCML carries discriminative touch and proprioception for somatosensory cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Fine touch and proprioceptive information to the thalamus), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fine touch and proprioceptive information to the thalamus), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fine touch and proprioceptive information to the thalamus), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The thalamus functions mainly as:",
    options: [

      "A relay and gate for sensory information to cortex",
      "The primary site of phototransduction",
      "The only location of cerebellar Purkinje cells",
      "The exclusive source of cerebrospinal fluid production without other roles",
    ],
    correct: 0,
    explanation: "Thalamic nuclei relay and modulate sensory and motor signals to cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A relay and gate for sensory information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A relay and gate for sensory information to cortex), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A relay and gate for sensory information to cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The ventricular system contains:",
    options: [

      "CSF-filled cavities lined by ependyma connecting brain regions",
      "Myelinated axons exclusively with no fluid (localizes the function to the wrong brain region)",
      "Photoreceptor layers of the retina (localizes the function to the wrong brain region)",
      "Glomeruli for odorant coding (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Ventricular CSF circulates through interconnected cavities.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (CSF-filled cavities lined by ependyma connecting brain regions), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Long-term depression (LTD) at cerebellar parallel fiber-Purkinje synapses involves:",
    options: [

      "Climbing fiber co-activation and Ca signaling leading to AMPA receptor internalization",
      "Exclusive NMDA-independent phototransduction",
      "Permanent closure of all gap junctions in retina",
      "Removal of the Na⁺/K⁺ pump from the AIS during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Cerebellar LTD weakens parallel fiber inputs following climbing fiber pairing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Climbing fiber co-activation and Ca signaling leading to AMPA receptor internali), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Climbing fiber co-activation and Ca signaling leading to AMPA receptor internali), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Climbing fiber co-activation and Ca signaling leading to AMPA receptor internali), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "LTD in hippocampus can be induced by:",
    options: [

      "Low-frequency stimulation leading to reduced AMPA receptor insertion",
      "Exclusive high-frequency tetanic stimulation only always causing LTP",
      "Photoreceptor bleaching in bright light",
      "Opening all gap junctions in the retina",
    ],
    correct: 0,
    explanation: "Low-frequency protocols can weaken synapses via receptor internalization and phosphatase activity.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Low-frequency stimulation leading to reduced AMPA receptor insertion), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Low-frequency stimulation leading to reduced AMPA receptor insertion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral/tufted cells in the olfactory bulb:",
    options: [

      "Project olfactory information to higher brain areas",
      "Transduce photons in the outer segment when temperature is near 37 °C.",
      "Form the blood-brain barrier endothelial layer when temperature is near 37 °C.",
      "Are the primary mechanoreceptors in skin",
    ],
    correct: 0,
    explanation: "Bulb output neurons relay processed odor information centrally.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Project olfactory information to higher brain areas), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Project olfactory information to higher brain areas), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Project olfactory information to higher brain areas), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The basal ganglia loop through the striatum helps:",
    options: [

      "Select and initiate appropriate motor programs",
      "Transduce light in rods and cones (maps the lesion to the wrong motor pathway or reflex)",
      "Encode pitch on the basilar membrane only (maps the lesion to the wrong motor pathway or reflex)",
      "Form tight junctions at the BBB exclusively (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Basal ganglia circuits gate and select motor actions.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Select and initiate appropriate motor programs), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Select and initiate appropriate motor programs), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Select and initiate appropriate motor programs), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Brain lateralization includes:",
    options: [

      "Specialization of language functions often in the left hemisphere",
      "Identical olfactory maps in every glomerulus for all odors when temperature is near 37 °C.",
      "Absence of any commissural connections when temperature is near 37 °C.",
      "Exclusive use of electrical synapses in cortex when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Many cognitive functions show hemispheric specialization, notably language in most individuals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Specialization of language functions often in the left hemisphere), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Specialization of language functions often in the left hemisphere), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If the Na⁺/K⁺ pump rate doubles but relative leak conductances are unchanged, the immediate effect on V_m is:",
    options: [

      "Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange",
      "Immediate depolarization to E_Na (ignores which ion dominates resting permeability)",
      "No change because pumps do not affect voltage (ignores which ion dominates resting permeability)",
      "Shift to E_Cl regardless of Cl⁻ conductance (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "At 37°C, a tenfold increase in external K⁺ (with fixed internal K⁺) shifts E_K by approximately:",
    options: [

      "+61 mV (toward 0 mV)",
      "−61 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "0 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "+120 mV (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "A tenfold change in concentration ratio changes E_ion by about 61 mV at body temperature.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (+61 mV (toward 0 mV)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (+61 mV (toward 0 mV)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (+61 mV (toward 0 mV)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "If both R_m and R_i double while C_m is constant, the length constant λ:",
    options: [

      "Remains unchanged because λ = √(R_m/R_i)",
      "Doubles (misstates how R_m, C_m, or geometry set τ or λ)",
      "Halves (misstates how R_m, C_m, or geometry set τ or λ)",
      "Becomes zero (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Proportional changes in R_m and R_i cancel in the ratio under the square root.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Remains unchanged because λ = √(R_m/R_i)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Remains unchanged because λ = √(R_m/R_i)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Remains unchanged because λ = √(R_m/R_i)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The positive feedback loop during the rising phase ends when:",
    options: [

      "Na⁺ channel inactivation dominates and K⁺ efflux increases",
      "The pump stops entirely during normal resting permeability conditions.",
      "Cl⁻ conductance goes to zero",
      "Gap junctions close permanently during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Inactivation of Na⁺ channels and activation of K⁺ channels terminate the upswing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Na⁺ channel inactivation dominates and K⁺ efflux increases), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Na⁺ channel inactivation dominates and K⁺ efflux increases), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Na⁺ channel inactivation dominates and K⁺ efflux increases), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Cooling an axon reduces conduction velocity primarily by:",
    options: [

      "Slowing voltage-gated channel kinetics and ion diffusion",
      "Increasing myelin thickness (misapplies how active propagation uses local circuit currents)",
      "Raising E_Na above +100 mV (misapplies how active propagation uses local circuit currents)",
      "Eliminating passive spread between nodes (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Temperature affects channel gating rates and ion mobility, slowing propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Slowing voltage-gated channel kinetics and ion diffusion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slowing voltage-gated channel kinetics and ion diffusion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slowing voltage-gated channel kinetics and ion diffusion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If V_m is clamped at E_K, the driving force on K⁺ ions is:",
    options: [

      "Zero (no net electrochemical driving force)",
      "Maximal inward (uses the wrong sign or driving force for ionic current)",
      "Maximal outward always (uses the wrong sign or driving force for ionic current)",
      "Determined only by the Na⁺/K⁺ pump (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Zero (no net electrochemical driving force)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Zero (no net electrochemical driving force)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Zero (no net electrochemical driving force)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Botulinum toxin reduces synaptic transmission by:",
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
      "Unlike the keyed answer (Cleaving SNARE proteins required for vesicle fusion), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Cleaving SNARE proteins required for vesicle fusion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Facilitation at a synapse after a short train of presynaptic spikes is often due to:",
    options: [

      "Residual presynaptic Ca²⁺ elevating release probability",
      "Immediate postsynaptic receptor insertion without activity",
      "Permanent myelin loss",
      "Photoreceptor dark current increase",
    ],
    correct: 0,
    explanation: "Leftover Ca²⁺ from prior spikes increases probability of subsequent release.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Residual presynaptic Ca²⁺ elevating release probability), this option misstates the mechanism or direction described in the stem.",
      "This choice (Permanent myelin loss) does not match the keyed answer’s mechanism for Synaptic Transmission.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors inhibit neurons primarily by:",
    options: [

      "Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity",
      "Direct fast Cl⁻ influx identical to GABA<sub>A</sub> in a typical mammalian central neuron.",
      "Opening voltage-gated Na⁺ channels when temperature is near 37 °C.",
      "Bleaching photopigment in rods when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Metabotropic GABA<sub>B</sub> signaling opens K⁺ channels and inhibits Ca²⁺ channels.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Activating GIRK K⁺ channels and reducing Ca²⁺ channel activity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in neural circuits adjusts responses by:",
    options: [

      "Scaling activity relative to pooled network activity",
      "Adding only excitatory inputs without inhibition",
      "Eliminating all passive membrane properties",
      "Converting chemical synapses to gap junctions exclusively",
    ],
    correct: 0,
    explanation: "Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Scaling activity relative to pooled network activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Scaling activity relative to pooled network activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Scaling activity relative to pooled network activity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all dynamics in a network can arise from:",
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
      "Unlike the keyed answer (Recurrent lateral inhibition among excitatory units), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recurrent lateral inhibition among excitatory units), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recurrent lateral inhibition among excitatory units), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine increases cortical arousal partly by:",
    options: [

      "Modulating HCN and other channels via β-adrenergic receptors",
      "Directly gating nicotinic ACh pores at the neuromuscular junction",
      "Mechanically deflecting inner hair cell stereocilia",
      "Increasing photopigment synthesis in cones only",
    ],
    correct: 0,
    explanation: "NE modulates intrinsic excitability and synaptic gain through metabotropic pathways.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Modulating HCN and other channels via β-adrenergic receptors), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Modulating HCN and other channels via β-adrenergic receptors), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Modulating HCN and other channels via β-adrenergic receptors), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Receptive field orientation selectivity in V1 simple cells reflects:",
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
      "Unlike the keyed answer (Specific arrangements of ON and OFF subregions in space), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Specific arrangements of ON and OFF subregions in space), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Phase locking in auditory brainstem neurons helps encode:",
    options: [

      "Low-frequency pitch via precise spike timing to waveform phase",
      "Color opponency in the fovea",
      "Odor concentration without temporal structure in a typical mammalian central neuron.",
      "Muscle spindle length without frequency information during normal resting permeability conditions.",
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
    question: "Two-point discrimination acuity is highest on fingertips because:",
    options: [

      "Receptor density and cortical magnification are greatest there",
      "Pacinian corpuscles are absent in glabrous skin during normal resting permeability conditions.",
      "Photoreceptors are packed in the fingertip epidermis",
      "Olfactory receptors line the glabrous surface in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "High receptor density and large somatosensory cortical representation improve spatial acuity.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Receptor density and cortical magnification are greatest there), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Receptor density and cortical magnification are greatest there), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Granule cells in the olfactory bulb provide:",
    options: [

      "Recurrent inhibition onto mitral cells via dendrodendritic synapses",
      "Direct transduction of odorants to action potentials",
      "Mechanotransduction of sound in the cochlea during normal resting permeability conditions.",
      "Saltatory conduction in the optic nerve during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Granule cell inhibition shapes mitral cell output and odor discrimination.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Recurrent inhibition onto mitral cells via dendrodendritic synapses), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Recurrent inhibition onto mitral cells via dendrodendritic synapses), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The limbic system is functionally linked to:",
    options: [

      "Emotion, memory, and motivated behavior",
      "Exclusive control of phototransduction",
      "Cochlear amplification by outer hair cells only",
      "Direct generation of CSF in muscle spindles",
    ],
    correct: 0,
    explanation: "Limbic structures (e.g., amygdala, hippocampus) integrate affect and memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Emotion, memory, and motivated behavior), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Emotion, memory, and motivated behavior), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellum contributes to motor control primarily by:",
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
      "Unlike the keyed answer (Error correction and timing of movements via mossy and climbing fiber input), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis is required for long-term memory because:",
    options: [

      "Persistent synaptic changes require new proteins for structural plasticity",
      "Immediate early genes alone permanently store memory without translation",
      "Photopigment regeneration depends on ribosomes in outer segments",
      "Action potentials cannot occur without new ion channel genes each second",
    ],
    correct: 0,
    explanation: "Consolidation engages transcription and translation to stabilize synaptic changes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Persistent synaptic changes require new proteins for structural plasticity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Persistent synaptic changes require new proteins for structural plasticity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Persistent synaptic changes require new proteins for structural plasticity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Default mode network activity is most prominent during:",
    options: [

      "Internally directed cognition when not engaged in a task",
      "Active phototransduction in bright light only in a typical mammalian central neuron.",
      "Cochlear resonance at high frequencies exclusively when temperature is near 37 °C.",
      "Muscle spindle stretch during maximal contraction only",
    ],
    correct: 0,
    explanation: "DMN regions are active during rest, mind-wandering, and self-referential thought.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Internally directed cognition when not engaged in a task), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Internally directed cognition when not engaged in a task), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical coupling strength between cells can be modulated by:",
    options: [

      "Phosphorylation state of connexins altering gap junction conductance",
      "SNARE-mediated vesicle fusion in the cleft when temperature is near 37 °C.",
      "Photopigment bleaching in rods when temperature is near 37 °C. during normal resting permeability conditions.",
      "Tip-link tension in stereocilia during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Connexin phosphorylation and trafficking regulate gap junction permeability.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Phosphorylation state of connexins altering gap junction conductance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Phosphorylation state of connexins altering gap junction conductance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Phosphorylation state of connexins altering gap junction conductance), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "DAG (diacylglycerol) activates:",
    options: [

      "Protein kinase C at the membrane",
      "Voltage-gated Na⁺ channels directly without lipids",
      "Rhodopsin in the dark",
      "The Na⁺/K⁺ pump exclusively",
    ],
    correct: 0,
    explanation: "PLC cleavage of PIP₂ yields DAG, which activates PKC alongside Ca²⁺.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Protein kinase C at the membrane), this option misstates the mechanism or direction described in the stem.",
      "This choice (Rhodopsin in the dark) does not match the keyed answer’s mechanism for Second Messengers.",
      "Unlike the keyed answer (Protein kinase C at the membrane), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A neuron with reduced Na⁺ channel density will likely show:",
    options: [

      "Higher threshold and slower rising phase",
      "Lower threshold and faster rising phase",
      "No change in excitability",
      "Permanent hyperpolarization to E_K without stimulation",
    ],
    correct: 0,
    explanation: "Fewer Na⁺ channels require stronger depolarization and slow regenerative upswing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Higher threshold and slower rising phase), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Higher threshold and slower rising phase), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Higher threshold and slower rising phase), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Under voltage clamp, increasing membrane conductance while holding voltage constant increases:",
    options: [

      "Clamp current required to maintain the set voltage",
      "Resting potential without clamp (misstates how R_m, C_m, or geometry set τ or λ)",
      "Length constant without changing resistance (misstates how R_m, C_m, or geometry set τ or λ)",
      "Photoreceptor sensitivity to light (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "More conductance demands more compensatory current to hold V_m fixed.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Clamp current required to maintain the set voltage), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Clamp current required to maintain the set voltage), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Stochastic release at a synapse means:",
    options: [

      "Only a fraction of presynaptic spikes trigger vesicle fusion",
      "Every spike releases exactly one vesicle with certainty",
      "Postsynaptic receptors are never activated",
      "Quantal size varies with action potential amplitude above threshold",
    ],
    correct: 0,
    explanation: "Release probability is less than 1, making transmission probabilistic.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Only a fraction of presynaptic spikes trigger vesicle fusion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Only a fraction of presynaptic spikes trigger vesicle fusion), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Only a fraction of presynaptic spikes trigger vesicle fusion), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];

const NEW_TIER4 = [
  {
    topic: "Resting Potential",
    question: "Given E_K = −90 mV, E_Na = +60 mV, and P_K : P_Na = 40 : 1 at rest, V_m is best approximated as:",
    options: [

      "Near −90 mV because P_K dominates",
      "Near +60 mV because E_Na is larger",
      "Exactly halfway at −15 mV",
      "At 0 mV regardless of permeability",
    ],
    correct: 0,
    explanation: "Goldman-weighted calculation with dominant K⁺ permeability places rest near E_K.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Near −90 mV because P_K dominates), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Near −90 mV because P_K dominates), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Near −90 mV because P_K dominates), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If a drug doubles K⁺ leak conductance without changing the pump, the new resting potential will:",
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
      "This choice (Move closer to E_Na) does not match the keyed answer’s mechanism for Resting Potential.",
      "Unlike the keyed answer (Move closer to E_K), this option misstates the mechanism or direction described in the stem.",
      "This choice (Become exactly 0 mV) does not match the keyed answer’s mechanism for Resting Potential.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If P_Cl increases while E_Cl remains −70 mV and rest is −65 mV, V_m will shift toward:",
    options: [

      "E_Cl (more negative)",
      "E_Na exclusively",
      "0 mV always",
      "The photoreceptor dark current",
    ],
    correct: 0,
    explanation: "Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
    wrongExplanations: [
      "",
      "This choice (E_Na exclusively) does not match the keyed answer’s mechanism for Resting Potential.",
      "This choice (0 mV always) does not match the keyed answer’s mechanism for Resting Potential.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Halving intracellular Na⁺ while keeping extracellular Na⁺ constant will make E_Na:",
    options: [

      "More positive",
      "More negative (closer to 0 mV)",
      "Exactly 0 mV always",
      "Equal to E_K",
    ],
    correct: 0,
    explanation: "Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (More positive), this option misstates the mechanism or direction described in the stem.",
      "This choice (Exactly 0 mV always) does not match the keyed answer’s mechanism for Nernst Equation.",
      "This choice (Equal to E_K) does not match the keyed answer’s mechanism for Nernst Equation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "The Nernst slope for a monovalent cation at 37°C is approximately:",
    options: [

      "~62 mV per 10-fold concentration change",
      "~5 mV per 10-fold concentration change",
      "~120 mV per 2-fold change only at 0°C with no temperature effect",
      "Independent of valence",
    ],
    correct: 0,
    explanation: "RT/zF at body temperature gives roughly 62 mV for a 10-fold gradient in a monovalent ion.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (~62 mV per 10-fold concentration change), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~62 mV per 10-fold concentration change), this option misstates the mechanism or direction described in the stem.",
      "This choice (Independent of valence) does not match the keyed answer’s mechanism for Nernst Equation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a divalent cation such as Ca²⁺, a 10-fold concentration gradient at 37°C yields a Nernst potential with magnitude:",
    options: [

      "~31 mV (half that of monovalent due to z=2)",
      "~62 mV identical to monovalent always (contradicts the Nernst dependence on inside/outside concentrations)",
      "~124 mV regardless of valence (contradicts the Nernst dependence on inside/outside concentrations)",
      "0 mV always (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "Nernst slope scales as 1/z; divalent ions have halved slope.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (~31 mV (half that of monovalent due to z=2)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~31 mV (half that of monovalent due to z=2)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~31 mV (half that of monovalent due to z=2)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "For a passive dendrite, doubling R_m while holding R_i constant changes λ by a factor of:",
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
      "This choice (2 (doubles exactly)) does not match the keyed answer’s mechanism for Passive Membrane Properties.",
      "This choice (1/2 (halves)) does not match the keyed answer’s mechanism for Passive Membrane Properties.",
      "This choice (4 (quadruples)) does not match the keyed answer’s mechanism for Passive Membrane Properties.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "The time constant τ = R_m C_m implies that halving R_m while doubling C_m will:",
    options: [

      "Leave τ unchanged",
      "Quadruple τ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Halve τ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Set τ to zero (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "The product R_m C_m remains the same when one halves and the other doubles.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Leave τ unchanged), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Leave τ unchanged), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Leave τ unchanged), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Specific membrane resistance (R_m) differs from axial resistance (R_i) in that R_m:",
    options: [

      "Relates transmembrane current to voltage across the membrane",
      "Measures only intracellular cytoplasmic resistivity along the axon",
      "Is identical to input resistance at the soma in all geometries",
      "Determines olfactory receptor choice",
    ],
    correct: 0,
    explanation: "R_m governs transmembrane leak; R_i governs longitudinal current inside the cell.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Relates transmembrane current to voltage across the membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Relates transmembrane current to voltage across the membrane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Relates transmembrane current to voltage across the membrane), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "After a spike, Na⁺ channel recovery from inactivation requires:",
    options: [

      "Repolarization of the membrane toward rest",
      "Further depolarization above +40 mV during normal resting permeability conditions.",
      "Complete removal of all K⁺ channels during normal resting permeability conditions.",
      "Opening of NMDA receptors only when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Repolarization of the membrane toward rest), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Repolarization of the membrane toward rest), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Repolarization of the membrane toward rest), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated K⁺ channels are pharmacologically blocked during a spike, repolarization will:",
    options: [

      "Be slowed and the action potential may broaden",
      "Complete instantly with no change in a typical mammalian central neuron.",
      "Prevent all Na⁺ channel opening permanently",
      "Eliminate the need for Na⁺ inactivation during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "K⁺ efflux normally repolarizes the membrane; blockade prolongs depolarization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Be slowed and the action potential may broaden), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Be slowed and the action potential may broaden), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Be slowed and the action potential may broaden), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) selectively blocks:",
    options: [

      "Voltage-gated Na⁺ channels",
      "K⁺ leak channels only",
      "All gap junctions",
      "Photoreceptor cGMP phosphodiesterase",
    ],
    correct: 0,
    explanation: "TTX binds voltage-gated Na⁺ channel pores, preventing spike generation.",
    wrongExplanations: [
      "",
      "This choice (K⁺ leak channels only) does not match the keyed answer’s mechanism for Action Potentials.",
      "This choice (All gap junctions) does not match the keyed answer’s mechanism for Action Potentials.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Internodal myelin reduces what component of the membrane that slows voltage changes?",
    options: [

      "Capacitive charging of the membrane (C_m per unit length)",
      "Intracellular resistance only with no capacitive effect",
      "Synaptic vesicle pool size (misapplies how active propagation uses local circuit currents)",
      "Receptor affinity for GABA (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Myelin lowers effective capacitance, allowing faster charging at nodes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Capacitive charging of the membrane (C_m per unit length)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Capacitive charging of the membrane (C_m per unit length)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Capacitive charging of the membrane (C_m per unit length)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "If nodes of Ranvier are spaced farther apart in a myelinated axon, conduction velocity typically:",
    options: [

      "Increases up to a point because fewer regenerative steps are needed",
      "Decreases to zero always (misapplies how active propagation uses local circuit currents)",
      "Is unaffected by internode distance (misapplies how active propagation uses local circuit currents)",
      "Requires elimination of all K⁺ channels (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increases up to a point because fewer regenerative steps are needed), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increases up to a point because fewer regenerative steps are needed), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increases up to a point because fewer regenerative steps are needed), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Orthodromic conduction refers to:",
    options: [

      "Action potentials traveling in the normal direction from soma toward axon terminals",
      "Backpropagation from terminals to soma exclusively always called antidromic",
      "Passive spread only in dendrites with no active component",
      "Synaptic transmission at electrical synapses only (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Orthodromic propagation follows the natural axonal direction of signaling.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Action potentials traveling in the normal direction from soma toward axon termin), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Action potentials traveling in the normal direction from soma toward axon termin), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Action potentials traveling in the normal direction from soma toward axon termin), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "At V_m = E_K, net K⁺ current is zero because:",
    options: [

      "The electrical and chemical driving forces balance",
      "All K⁺ channels are removed from the membrane (uses the wrong sign or driving force for ionic current)",
      "Na⁺ influx cancels K⁺ efflux only at threshold (uses the wrong sign or driving force for ionic current)",
      "The pump stops at E_K (uses the wrong sign or driving force for ionic current)",
    ],
    correct: 0,
    explanation: "At E_K, the chemical gradient for K⁺ efflux equals the opposing electrical gradient.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The electrical and chemical driving forces balance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The electrical and chemical driving forces balance), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The electrical and chemical driving forces balance), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Increasing membrane conductance to an ion while V_m is held fixed will:",
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
      "Unlike the keyed answer (Increase current flow for that ion), this option misstates the mechanism or direction described in the stem.",
      "This choice (Change E_ion directly) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "Unlike the keyed answer (Increase current flow for that ion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Hyperpolarizing current injection moves V_m:",
    options: [

      "Away from 0 mV (more negative)",
      "Toward 0 mV always",
      "To E_Na instantly",
      "To the reversal potential of AMPA only",
    ],
    correct: 0,
    explanation: "Outward current hyperpolarizes the membrane.",
    wrongExplanations: [
      "",
      "This choice (Toward 0 mV always) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (To E_Na instantly) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "Unlike the keyed answer (Away from 0 mV (more negative)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "The synaptic cleft is typically on the order of:",
    options: [

      "~20–40 nm wide",
      "~2×10³ μm wide",
      "Continuous with the cytoplasm via gap junctions",
      "Identical in width to the axon initial segment always",
    ],
    correct: 0,
    explanation: "The narrow cleft allows rapid diffusion of neurotransmitter to postsynaptic receptors.",
    wrongExplanations: [
      "",
      "This choice (~2×10³ μm wide) does not match the keyed answer’s mechanism for Chemical Synapses.",
      "Unlike the keyed answer (~20–40 nm wide), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~20–40 nm wide), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Endocytosis following exocytosis serves to:",
    options: [

      "Recycle synaptic vesicle membrane and maintain release capacity",
      "Permanently remove all presynaptic receptors (describes the wrong synaptic structure or transmission step)",
      "Generate action potentials in the postsynaptic cell (describes the wrong synaptic structure or transmission step)",
      "Convert ionotropic to metabotropic receptors (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Vesicle recycling sustains ongoing synaptic transmission.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Recycle synaptic vesicle membrane and maintain release capacity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recycle synaptic vesicle membrane and maintain release capacity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recycle synaptic vesicle membrane and maintain release capacity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Active zone proteins (e.g., RIM, Munc13) function to:",
    options: [

      "Dock and prime vesicles near Ca channels for release",
      "Generate myelin around the terminal (describes the wrong synaptic structure or transmission step)",
      "Transduce odorants in the nasal epithelium (describes the wrong synaptic structure or transmission step)",
      "Encode frequency in the cochlear apex only (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Active zone scaffolding positions vesicles for Ca-triggered fusion.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Dock and prime vesicles near Ca channels for release), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Dock and prime vesicles near Ca channels for release), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Co-release of multiple neurotransmitters from one terminal violates Dale's principle only if:",
    options: [

      "The same neuron releases different transmitters from different terminals inconsistently with its phenotype",
      "One vesicle contains glutamate (mixes up presynaptic release with postsynaptic receptor logic) when temperature is near 37 °C.",
      "Postsynaptic cells express receptors (mixes up presynaptic release with postsynaptic receptor logic)",
      "Action potentials arrive at the terminal (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Dale's principle concerns consistent transmitter identity across a neuron's outputs.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The same neuron releases different transmitters from different terminals inconsi), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The same neuron releases different transmitters from different terminals inconsi), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The same neuron releases different transmitters from different terminals inconsi), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "High-frequency stimulation can deplete the readily releasable vesicle pool, causing:",
    options: [

      "Short-term synaptic depression",
      "Permanent LTP at all synapses instantly",
      "Myelin formation in the cleft",
      "Conversion of EPSPs to IPSPs by Nernst shift only",
    ],
    correct: 0,
    explanation: "Vesicle depletion reduces release probability during sustained high-frequency firing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Short-term synaptic depression), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Short-term synaptic depression), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Short-term synaptic depression), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Glycine receptors in spinal circuits are:",
    options: [

      "Ionotropic Cl⁻ channels mediating fast inhibition",
      "Metabotropic only with no ion pore (mixes up presynaptic release with postsynaptic receptor logic)",
      "Voltage-gated Na⁺ channels (mixes up presynaptic release with postsynaptic receptor logic)",
      "Photoreceptor channels gated by cGMP (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Glycine receptors are ligand-gated Cl⁻ channels producing fast IPSPs.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Ionotropic Cl⁻ channels mediating fast inhibition), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Ionotropic Cl⁻ channels mediating fast inhibition), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Allosteric modulators of ionotropic receptors:",
    options: [

      "Bind sites distinct from the agonist site and alter channel gating",
      "Must replace neurotransmitter in the primary binding pocket to have any effect",
      "Only act on metabotropic GPCRs",
      "Permanently remove receptors from the membrane",
    ],
    correct: 0,
    explanation: "Allosteric sites tune channel open probability without competing at the agonist site.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Bind sites distinct from the agonist site and alter channel gating), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Bind sites distinct from the agonist site and alter channel gating), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Bind sites distinct from the agonist site and alter channel gating), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors are metabotropic and typically:",
    options: [

      "Open GIRK-type K channels or inhibit Ca channels via G-proteins",
      "Form fast Cl channels identical to GABA<sub>A</sub>",
      "Directly trigger vesicle exocytosis during normal resting permeability conditions.",
      "Are located only on presynaptic photoreceptors when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "GABA<sub>B</sub> receptors mediate slow inhibition through G-protein modulation of channels.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Open GIRK-type K channels or inhibit Ca channels via G-proteins), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Open GIRK-type K channels or inhibit Ca channels via G-proteins), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic glutamate receptors (mGluRs) on presynaptic terminals can:",
    options: [

      "Inhibit or facilitate transmitter release via G-protein modulation of Ca channels",
      "Directly pass large Na currents at rest always when temperature is near 37 °C.",
      "Replace SNARE proteins entirely during normal resting permeability conditions.",
      "Convert electrical to chemical synapses instantly in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Presynaptic mGluRs modulate release probability through G-protein signaling.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inhibit or facilitate transmitter release via G-protein modulation of Ca channel), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inhibit or facilitate transmitter release via G-protein modulation of Ca channel), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inhibit or facilitate transmitter release via G-protein modulation of Ca channel), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "If EPSPs and IPSPs arrive simultaneously at the axon hillock, the net effect depends on:",
    options: [

      "The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing and location",
      "Only the largest EPSP regardless of IPSPs (ignores how EPSPs/IPSPs sum in time or space)",
      "The myelin thickness exclusively (ignores how EPSPs/IPSPs sum in time or space)",
      "The olfactory receptor expressed by the neuron (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing ), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing ), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The algebraic sum of depolarizing and hyperpolarizing inputs weighted by timing ), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "A neuron with a high firing threshold compared to resting potential will:",
    options: [

      "Require greater net depolarization to fire",
      "Fire spontaneously at rest without input",
      "Cannot receive synaptic input (ignores how EPSPs/IPSPs sum in time or space)",
      "Convert all IPSPs to EPSPs (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Higher threshold means more integrated excitation is needed to reach spike initiation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Require greater net depolarization to fire), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Require greater net depolarization to fire), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Require greater net depolarization to fire), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Backpropagating action potentials into dendrites can:",
    options: [

      "Provide a depolarization signal for coincidence-dependent plasticity",
      "Occur only in photoreceptors (ignores how EPSPs/IPSPs sum in time or space)",
      "Require myelin on dendrites (ignores how EPSPs/IPSPs sum in time or space)",
      "Eliminate all IPSPs permanently (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Backpropagation allows postsynaptic depolarization to coincide with synaptic input for plasticity.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Provide a depolarization signal for coincidence-dependent plasticity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Provide a depolarization signal for coincidence-dependent plasticity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all circuit dynamics can emerge from:",
    options: [

      "Strong recurrent inhibition among competing excitatory units",
      "Purely passive membrane properties without synapses during normal resting permeability conditions.",
      "Exclusive electrical coupling with no inhibition",
      "Removal of all voltage-gated channels in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Recurrent inhibition allows one active unit to suppress competitors.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Strong recurrent inhibition among competing excitatory units), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Strong recurrent inhibition among competing excitatory units), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Strong recurrent inhibition among competing excitatory units), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "An excitatory-inhibitory balance in cortical circuits helps:",
    options: [

      "Maintain stable firing rates and prevent runaway excitation",
      "Eliminate all action potentials at rest during normal resting permeability conditions.",
      "Replace LTP with only LTD permanently in a typical mammalian central neuron.",
      "Remove the need for neuromodulators entirely",
    ],
    correct: 0,
    explanation: "Balanced E/I input stabilizes network activity around functional set points.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Maintain stable firing rates and prevent runaway excitation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintain stable firing rates and prevent runaway excitation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintain stable firing rates and prevent runaway excitation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators produce rhythmic motor output:",
    options: [

      "Without requiring continuous sensory input for each cycle",
      "Requires when photoreceptors are illuminated exclusively in this context",
      "Exclusively through gap junctions in the retina during normal resting permeability conditions.",
      "By blocking all inhibitory interneurons permanently during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "CPGs intrinsically generate coordinated rhythmic activity for locomotion and breathing.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Without requiring continuous sensory input for each cycle), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Without requiring continuous sensory input for each cycle), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Noradrenergic modulation of cortex during alert states typically:",
    options: [

      "Increases gain and reduces spontaneous noise in neural responses",
      "Eliminates all synaptic plasticity permanently when temperature is near 37 °C.",
      "Converts all synapses to electrical only",
      "Blocks all Na⁺/K⁺ pump activity during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Norepinephrine adjusts network gain and signal-to-noise for adaptive processing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increases gain and reduces spontaneous noise in neural responses), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increases gain and reduces spontaneous noise in neural responses), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increases gain and reduces spontaneous noise in neural responses), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonergic modulation of spinal circuits can:",
    options: [

      "Alter motor pattern generator excitability and reflex gain",
      "Directly transduce odorant molecules",
      "Replace hippocampal LTP with phototransduction when temperature is near 37 °C.",
      "Form the blood-brain barrier",
    ],
    correct: 0,
    explanation: "Serotonin tunes spinal and brainstem circuits involved in movement and mood-related processing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Alter motor pattern generator excitability and reflex gain), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Alter motor pattern generator excitability and reflex gain), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Alter motor pattern generator excitability and reflex gain), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Acetylcholine in cortex during attention acts through:",
    options: [

      "Both nicotinic (ionotropic) and muscarinic (metabotropic) receptors",
      "",
      "Requires cochlear outer hair cell motors exclusively in this context",
      "Tight junction proteins of the BBB exclusively when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "ACh modulates cortical circuits through diverse receptor subtypes.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Both nicotinic (ionotropic) and muscarinic (metabotropic) receptors), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Midget ganglion cells in the fovea support high acuity through:",
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
      "Unlike the keyed answer (Small receptive field centers with minimal convergence), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Small receptive field centers with minimal convergence), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Small receptive field centers with minimal convergence), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Direction-selective ganglion cells encode motion direction using:",
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
      "Unlike the keyed answer (Asymmetric inhibition from starburst amacrine cells), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Asymmetric inhibition from starburst amacrine cells), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual System",
    question: "Horizontal cells mediate lateral inhibition in retina by:",
    options: [

      "Providing feedback/feedforward inhibition to photoreceptors and bipolar cells",
      "Encoding pitch on the basilar membrane",
      "Releasing dopamine into the striatum only",
      "Forming the corpus callosum",
    ],
    correct: 0,
    explanation: "Horizontal cells spread inhibitory signals laterally to enhance contrast.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Providing feedback/feedforward inhibition to photoreceptors and bipolar cells), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Providing feedback/feedforward inhibition to photoreceptors and bipolar cells), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Providing feedback/feedforward inhibition to photoreceptors and bipolar cells), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells contribute to cochlear amplification through:",
    options: [

      "Electromotility adjusting basilar membrane mechanics",
      "Direct phototransduction of light in a typical mammalian central neuron.",
      "Releasing GABA at the neuromuscular junction only",
      "Forming tight junctions of the BBB when temperature is near 37 °C.",
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
    question: "Interaural time differences are used for:",
    options: [

      "Localizing low-frequency sounds in the horizontal plane",
      "Detecting bitter taste on the tongue",
      "Encoding color opponency in cones",
      "Consolidating declarative memory in the hippocampus only",
    ],
    correct: 0,
    explanation: "Brainstem circuits compare timing differences between ears for azimuth localization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Localizing low-frequency sounds in the horizontal plane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Localizing low-frequency sounds in the horizontal plane), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Localizing low-frequency sounds in the horizontal plane), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The medial geniculate nucleus of thalamus relays:",
    options: [

      "Auditory information to primary auditory cortex",
      "Olfactory glomerular maps directly to muscle",
      "Photoreceptor signals to the fovea only",
      "CSF from choroid plexus to ventricles exclusively",
    ],
    correct: 0,
    explanation: "MGN is the thalamic relay for ascending auditory pathways.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Auditory information to primary auditory cortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Two-point discrimination threshold is finest on:",
    options: [

      "Fingertips due to high receptor density and cortical magnification",
      "Upper arm due to large skin area",
      "Trunk midline due to bilateral representation only when temperature is near 37 °C.",
      "The optic disc due to absence of photoreceptors during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "High receptor density and S1 magnification enable fine spatial acuity on fingertips.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Fingertips due to high receptor density and cortical magnification), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fingertips due to high receptor density and cortical magnification), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Rapidly adapting mechanoreceptors fire mainly at:",
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
      "Unlike the keyed answer (Onset and offset of mechanical stimuli), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Onset and offset of mechanical stimuli), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Onset and offset of mechanical stimuli), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "C fibers typically convey:",
    options: [

      "Slow pain and temperature (unmyelinated)",
      "Fine discriminative touch with highest conduction velocity",
      "Photons to retinal ganglion cells",
      "Dopamine to the striatum",
    ],
    correct: 0,
    explanation: "Thin unmyelinated C fibers mediate slow nociceptive and thermal signals.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Slow pain and temperature (unmyelinated)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Slow pain and temperature (unmyelinated)), this option misstates the mechanism or direction described in the stem.",
      "This choice (Dopamine to the striatum) does not match the keyed answer’s mechanism for Somatosensation.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier astrocytic endfeet contribute by:",
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
      "Unlike the keyed answer (Regulating the extracellular environment and supporting endothelial barrier func), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Regulating the extracellular environment and supporting endothelial barrier func), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The cerebellum is critical for:",
    options: [

      "Coordinating timing and precision of movement (motor learning)",
      "Initial transduction of olfactory odorants only",
      "Direct control of heart rate without brainstem involvement",
      "Exclusive storage of all episodic memories without hippocampus",
    ],
    correct: 0,
    explanation: "Cerebellar circuits refine motor commands and support motor learning.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Coordinating timing and precision of movement (motor learning)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Coordinating timing and precision of movement (motor learning)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Coordinating timing and precision of movement (motor learning)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The internal capsule carries:",
    options: [

      "Corticospinal and thalamocortical fibers between cortex and brainstem/spinal cord",
      "Only olfactory fila from epithelium to bulb (localizes the function to the wrong brain region)",
      "Photoreceptor axons exclusively (localizes the function to the wrong brain region)",
      "Lymph fluid replacing CSF in all ventricles (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "The internal capsule contains major ascending and descending projection fibers.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Corticospinal and thalamocortical fibers between cortex and brainstem/spinal cor), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Corticospinal and thalamocortical fibers between cortex and brainstem/spinal cor), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis inhibition shortly after LTP induction can:",
    options: [

      "Impair consolidation of long-lasting synaptic changes",
      "Enhance immediate early gene expression permanently",
      "Convert rods to cones in the retina during normal resting permeability conditions.",
      "Eliminate tonotopy in the cochlea in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Persistent LTP often requires new protein synthesis for maintenance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Impair consolidation of long-lasting synaptic changes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Impair consolidation of long-lasting synaptic changes), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Systems consolidation proposes that over time declarative memories:",
    options: [

      "Become less dependent on hippocampus and more on neocortex",
      "Are stored exclusively in the cochlear nucleus forever",
      "Require continuous photoreceptor activation during normal resting permeability conditions.",
      "Depend only on gap junction electrical synapses during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Memory traces gradually redistribute from hippocampus to distributed cortical storage.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Become less dependent on hippocampus and more on neocortex), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Morris water maze testing in rodents assesses:",
    options: [

      "Hippocampal-dependent spatial navigation memory",
      "Photoreceptor spectral sensitivity exclusively",
      "Cochlear place theory only without behavior",
      "Saltatory conduction velocity in peripheral nerve directly",
    ],
    correct: 0,
    explanation: "Hidden-platform spatial learning depends on hippocampal circuitry.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Hippocampal-dependent spatial navigation memory), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Adaptation in olfactory receptor neurons reduces response to:",
    options: [

      "Prolonged constant odorant exposure",
      "Single photons of light",
      "Initial mechanical touch only at the fovea",
      "First action potential at the AIS always",
    ],
    correct: 0,
    explanation: "Olfactory adaptation decreases sensitivity during sustained odor presentation.",
    wrongExplanations: [
      "",
      "This choice (Single photons of light) does not match the keyed answer’s mechanism for Olfaction.",
      "Unlike the keyed answer (Prolonged constant odorant exposure), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Prolonged constant odorant exposure), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Enantiomers (mirror-image odor molecules) can smell different because:",
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
      "Unlike the keyed answer (Receptor binding geometry is stereoselective), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Receptor binding geometry is stereoselective), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Pheromone detection in many mammals involves:",
    options: [

      "The vomeronasal organ projecting to accessory olfactory bulb",
      "The basilar membrane frequency map exclusively when temperature is near 37 °C.",
      "Photoreceptor cGMP channels in the fovea",
      "Nodes of Ranvier in the corpus callosum during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Vomeronasal pathways process social chemical signals separately from main olfaction.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The vomeronasal organ projecting to accessory olfactory bulb), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (The vomeronasal organ projecting to accessory olfactory bulb), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Corticospinal tract lesions typically produce:",
    options: [

      "Contralateral weakness or paralysis of voluntary movement",
      "Loss of olfactory receptor gene expression",
      "Elimination of all photoreceptor responses",
      "Permanent hyperpolarization of all photoreceptors in light",
    ],
    correct: 0,
    explanation: "Most corticospinal fibers decussate, causing contralateral motor deficits.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Contralateral weakness or paralysis of voluntary movement), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Muscle spindles provide proprioceptive feedback through:",
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
      "Unlike the keyed answer (Group Ia afferents signaling muscle stretch), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The red nucleus contributes to:",
    options: [

      "Motor coordination via rubrospinal tract influence on limb flexors",
      "Phototransduction exclusively (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory combinatorial coding only (maps the lesion to the wrong motor pathway or reflex)",
      "Formation of endothelial tight junctions (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Rubrospinal pathways modulate limb motor control, especially flexion.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Motor coordination via rubrospinal tract influence on limb flexors), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Motor coordination via rubrospinal tract influence on limb flexors), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Motor coordination via rubrospinal tract influence on limb flexors), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Default mode network activity increases during:",
    options: [

      "Internally directed thought and rest, decreasing during focused external tasks",
      "High-intensity physical exercise of a single muscle spindle only",
      "Photoreceptor hyperpolarization in bright light exclusively during normal resting permeability conditions.",
      "Saltatory conduction at every internode simultaneously when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "The DMN is active during introspection and deactivates during externally focused attention.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Internally directed thought and rest, decreasing during focused external tasks), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Internally directed thought and rest, decreasing during focused external tasks), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Functional magnetic resonance imaging (fMRI) BOLD signal reflects:",
    options: [

      "Local changes in blood oxygenation coupled to neural activity",
      "Direct measurement of every synaptic vesicle fusion event",
      "The Nernst potential of individual ions in the cleft",
      "Mechanotransduction in outer hair cells only",
    ],
    correct: 0,
    explanation: "BOLD contrasts blood oxygenation changes associated with neurovascular coupling.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Local changes in blood oxygenation coupled to neural activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Local changes in blood oxygenation coupled to neural activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Local changes in blood oxygenation coupled to neural activity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Broca's area is associated with:",
    options: [

      "Speech production (language output)",
      "Primary visual transduction in rods",
      "Basilar membrane resonance exclusively",
      "Direct control of photoreceptor bleaching",
    ],
    correct: 0,
    explanation: "Broca's area in frontal cortex supports language production.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Speech production (language output)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Speech production (language output)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "With E_K = −90 mV, E_Na = +60 mV, E_Cl = −70 mV, and P_K:P_Na:P_Cl = 1:0.05:0.45 at rest, V_m is closest to:",
    options: [

      "Between E_K and E_Cl, weighted by conductances",
      "Exactly E_Na (ignores which ion dominates resting permeability)",
      "Exactly 0 mV (ignores which ion dominates resting permeability)",
      "The average of all three without weighting (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Goldman equation weights each permeant ion; significant Cl⁻ conductance pulls V_m toward E_Cl.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Between E_K and E_Cl, weighted by conductances), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Between E_K and E_Cl, weighted by conductances), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Between E_K and E_Cl, weighted by conductances), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If z = +2 for Ca²⁺, a fourfold increase in external Ca²⁺ (fixed internal) changes E_Ca by approximately:",
    options: [

      "+18.5 mV at 37°C (more positive)",
      "+61 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "0 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "−61 mV (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "For divalent ions the Nernst slope is halved; a fourfold outside change is ~ (61/2)×log10(4) ≈ 18.5 mV at 37°C.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (+18.5 mV at 37°C (more positive)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (+18.5 mV at 37°C (more positive)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (+18.5 mV at 37°C (more positive)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Separating R_m and R_i effects: increasing R_m alone increases both λ and τ, whereas increasing R_i alone:",
    options: [

      "Decreases λ but leaves τ unchanged if C_m is constant",
      "Increases both λ and τ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Decreases τ and increases λ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Affects neither λ nor τ (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i) falls with higher R_i; τ = R_m C_m depends on R_m only.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Decreases λ but leaves τ unchanged if C_m is constant), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Decreases λ but leaves τ unchanged if C_m is constant), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Decreases λ but leaves τ unchanged if C_m is constant), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The minimal stimulus (rheobase) to elicit a spike increases during the relative refractory period because:",
    options: [

      "Fewer Na⁺ channels are available due to inactivation",
      "All K⁺ channels are permanently deleted during normal resting permeability conditions.",
      "Myelin is absent at the AIS during normal resting permeability conditions.",
      "E_Na becomes negative in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the current needed to reach threshold.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Fewer Na⁺ channels are available due to inactivation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fewer Na⁺ channels are available due to inactivation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fewer Na⁺ channels are available due to inactivation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "If nodal Na⁺ channel density is halved in a myelinated axon, conduction failure is most likely when:",
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
      "Unlike the keyed answer (Internodal distance is long and passive decay is large), this option misstates the mechanism or direction described in the stem.",
      "This choice (The axon is unmyelinated) does not match the keyed answer’s mechanism for Action Potential Propagation.",
      "Unlike the keyed answer (Internodal distance is long and passive decay is large), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Under conditions of constant total conductance, shifting relative g_K upward while holding V_m fixed increases:",
    options: [

      "Outward K⁺ current if V_m > E_K",
      "Inward Na⁺ current if V_m < E_Na always",
      "Pump flux independent of gradients",
      "Photoreceptor cGMP concentration",
    ],
    correct: 0,
    explanation: "Higher g_K with V_m above E_K increases outward K⁺ current (I_K = g_K(V_m − E_K)).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Outward K⁺ current if V_m > E_K), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Outward K⁺ current if V_m > E_K), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Capacitance measurements at presynaptic terminals during exocytosis detect:",
    options: [

      "Increased membrane area as vesicles fuse",
      "Decreased area due to endocytosis only during release",
      "Changes in photopigment packing",
      "Cochlear basilar membrane stiffness",
    ],
    correct: 0,
    explanation: "Vesicle fusion adds membrane to the surface, increasing capacitance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increased membrane area as vesicles fuse), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increased membrane area as vesicles fuse), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "If release probability p approaches 1, the coefficient of variation (CV) of EPSC amplitude across trials:",
    options: [

      "Decreases toward zero (less trial-to-trial variability)",
      "Increases without bound (mixes up presynaptic release with postsynaptic receptor logic)",
      "Equals p independent of quantal size (mixes up presynaptic release with postsynaptic receptor logic)",
      "Is determined solely by mEPSP frequency in darkness (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "When release is nearly deterministic, variability from binomial release statistics diminishes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Decreases toward zero (less trial-to-trial variability)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Decreases toward zero (less trial-to-trial variability)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Decreases toward zero (less trial-to-trial variability)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "MK-801 blocks NMDA receptors by binding:",
    options: [

      "Inside the pore in a use-dependent manner",
      "Only to AMPA receptors at the neuromuscular junction",
      "To photopigment retinaldehyde",
      "To connexin hemichannels exclusively",
    ],
    correct: 0,
    explanation: "MK-801 enters the NMDA channel when open and traps inside (use dependence).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Inside the pore in a use-dependent manner), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inside the pore in a use-dependent manner), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inside the pore in a use-dependent manner), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "A dendritic EPSP is attenuated more at the soma if an inhibitory synapse on the same dendritic branch opens Cl⁻ channels because:",
    options: [

      "Shunting reduces effective EPSP amplitude at the soma",
      "Cl⁻ channels always depolarize above 0 mV",
      "Inhibition increases λ without bound",
      "Na⁺ channels cluster on dendrites identically to the AIS",
    ],
    correct: 0,
    explanation: "Increased conductance on the path shunts EPSP current, reducing somatic signal.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Shunting reduces effective EPSP amplitude at the soma), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shunting reduces effective EPSP amplitude at the soma), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Shunting reduces effective EPSP amplitude at the soma), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "A feedforward inhibitory circuit that sets a delay line for coincidence detection requires:",
    options: [

      "Matched timing of excitation and delayed inhibition onto the target",
      "Requires electrical synapses without chemical components exclusively in this context",
      "Exclusive photoreceptor input in a typical mammalian central neuron.",
      "Elimination of all Na⁺ channels in interneurons during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Precisely timed disynaptic inhibition can create windows for coincident excitation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Matched timing of excitation and delayed inhibition onto the target), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Matched timing of excitation and delayed inhibition onto the target), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Presynaptic inhibition via GABAergic terminals on sensory afferents often acts by:",
    options: [

      "Depolarizing primary afferents (primary afferent depolarization) reducing Ca²⁺ influx",
      "Opening voltage-gated Na⁺ channels in photoreceptors",
      "Increasing tip-link tension in hair cells in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Blocking all postsynaptic AMPA receptors globally in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "PAD reduces presynaptic Ca²⁺ entry and transmitter release from sensory terminals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Depolarizing primary afferents (primary afferent depolarization) reducing Ca²⁺ i), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarizing primary afferents (primary afferent depolarization) reducing Ca²⁺ i), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Color opponency in parvocellular pathway cells arises from:",
    options: [

      "Antagonistic cone inputs",
      "Tonotopic mapping on the basilar membrane",
      "Olfactory receptor gene choice",
      "Muscle spindle Ia afferent convergence only",
    ],
    correct: 0,
    explanation: "Opponent receptive fields compare cone signals to encode color contrast.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Antagonistic cone inputs (e.g., L vs M cone opposition)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Antagonistic cone inputs (e.g., L vs M cone opposition)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Antagonistic cone inputs (e.g., L vs M cone opposition)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The medial superior olive localizes low-frequency sounds using:",
    options: [

      "Interaural time differences via delay lines and coincidence detection",
      "Interaural level differences only above 10 kHz without timing in a typical mammalian central neuron.",
      "Photoreceptor convergence in the fovea when temperature is near 37 °C.",
      "Olfactory bulb granule cell inhibition exclusively when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "MSO neurons compare arrival times of sounds at the two ears for azimuth cues.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Interaural time differences via delay lines and coincidence detection), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Rapid adaptation in Pacinian corpuscles means they respond best to:",
    options: [

      "Onset and offset of vibration, not steady pressure",
      "Constant deep pressure without change in a typical mammalian central neuron.",
      "Sustained Merkel disk pressure when temperature is near 37 °C.",
      "Steady odor presentation",
    ],
    correct: 0,
    explanation: "Rapidly adapting receptors encode dynamic stimuli and silence during steady state.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Onset and offset of vibration, not steady pressure), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Onset and offset of vibration, not steady pressure), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Onset and offset of vibration, not steady pressure), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Sparse coding in piriform cortex means:",
    options: [

      "Only a small fraction of neurons fire strongly for a given odor",
      "Every neuron fires identically for all odors",
      "Mitral cells never inhibit granule cells",
      "OSNs express all receptor types simultaneously when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Distributed sparse ensembles represent odor identity in cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Only a small fraction of neurons fire strongly for a given odor), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Only a small fraction of neurons fire strongly for a given odor), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Only a small fraction of neurons fire strongly for a given odor), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The substantia nigra pars compacta is located in the:",
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
      "Unlike the keyed answer (Midbrain and provides dopaminergic input to striatum), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Midbrain and provides dopaminergic input to striatum), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Alpha motor neurons and gamma motor neurons differ in that gamma neurons:",
    options: [

      "Innervate intrafusal muscle fibers in spindles",
      "Innervate extrafusal fibers producing force only",
      "Transduce sound in the cochlea",
      "Release glutamate onto photoreceptors",
    ],
    correct: 0,
    explanation: "Gamma efferents adjust spindle sensitivity by contracting intrafusal fibers.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Innervate intrafusal muscle fibers in spindles), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Tagging-and-capture models of synaptic consolidation propose that:",
    options: [

      "Synapses marked by activity capture plasticity-related proteins arriving globally",
      "All synapses strengthen without specificity during normal resting permeability conditions.",
      "Photopigment bleaching stores memory directly in a typical mammalian central neuron.",
      "Requires electrical synapses can undergo LTP exclusively in this context",
    ],
    correct: 0,
    explanation: "Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Synapses marked by activity capture plasticity-related proteins arriving globall), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Synapses marked by activity capture plasticity-related proteins arriving globall), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Synapses marked by activity capture plasticity-related proteins arriving globall), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Binocular rivalry occurs when:",
    options: [

      "Different images to each eye compete for perceptual dominance",
      "Both eyes always fuse images without competition",
      "Cochlear nuclei encode interaural timing",
      "Olfactory bulb glomeruli merge all odors into one percept",
    ],
    correct: 0,
    explanation: "Conflicting monocular inputs alternate in conscious perception during rivalry.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Different images to each eye compete for perceptual dominance), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "If two neurons are coupled by gap junctions, injecting hyperpolarizing current into one will:",
    options: [

      "Hyperpolarize the coupled partner (if junction is open)",
      "Depolarize the partner always regardless of polarity",
      "Have no effect because gap junctions are rectifying always",
      "Trigger photopigment regeneration",
    ],
    correct: 0,
    explanation: "Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hyperpolarize the coupled partner (if junction is open)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hyperpolarize the coupled partner (if junction is open)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hyperpolarize the coupled partner (if junction is open)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "CaMKII autophosphorylation after Ca²⁺ influx can:",
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
      "Unlike the keyed answer (Maintain kinase activity after Ca²⁺ returns to baseline), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintain kinase activity after Ca²⁺ returns to baseline), this option misstates the mechanism or direction described in the stem.",
      "This choice (Convert rods to cones) does not match the keyed answer’s mechanism for Second Messengers.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Ouabain inhibition of Na⁺/K⁺ ATPase eventually causes:",
    options: [

      "Depolarization as Na⁺ and K⁺ gradients run down",
      "Immediate hyperpolarization to −120 mV (ignores which ion dominates resting permeability)",
      "Block of all gap junctions (ignores which ion dominates resting permeability)",
      "Increased photoreceptor sensitivity in light (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Without active transport, ion gradients collapse and V_m drifts toward 0 mV.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarization as Na⁺ and K⁺ gradients run down), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarization as Na⁺ and K⁺ gradients run down), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For an anion like Cl⁻ with higher internal than external concentration, E_Cl is:",
    options: [

      "Negative (inside relative to outside)",
      "Positive always (contradicts the Nernst dependence on inside/outside concentrations)",
      "Zero regardless of concentrations (contradicts the Nernst dependence on inside/outside concentrations)",
      "Equal to E_Na (contradicts the Nernst dependence on inside/outside concentrations)",
    ],
    correct: 0,
    explanation: "Negative charge and inward concentration gradient yield negative E_Cl.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Negative (inside relative to outside)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Negative (inside relative to outside)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Negative (inside relative to outside)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "In a passive cable, doubling both diameter and R_m per unit area leaves λ:",
    options: [

      "Unchanged if R_i scales inversely with diameter as in uniform geometry",
      "Doubled always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Halved always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Zero (misstates how R_m, C_m, or geometry set τ or λ) — misstates how R_m, C_m, or geometry set τ or λ.",
    ],
    correct: 0,
    explanation: "For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Unchanged if R_i scales inversely with diameter as in uniform geometry), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Unchanged if R_i scales inversely with diameter as in uniform geometry), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Unchanged if R_i scales inversely with diameter as in uniform geometry), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Persistent Na⁺ current (non-inactivating component) contributes to:",
    options: [

      "Subthreshold resonance and repeated firing near threshold",
      "Exclusive repolarization after spikes in a typical mammalian central neuron.",
      "Phototransduction in cones when temperature is near 37 °C.",
      "Cochlear electromotility",
    ],
    correct: 0,
    explanation: "Subthreshold Na⁺ current can boost depolarization and support rhythmic firing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Subthreshold resonance and repeated firing near threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Subthreshold resonance and repeated firing near threshold), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Ectopic spike initiation can occur at:",
    options: [

      "Damaged axon segments with altered channel density",
      "Photoreceptor outer segments exclusively in dark",
      "The olfactory epithelium during odor binding (misapplies how active propagation uses local circuit currents)",
      "CSF in ventricles without tissue (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Abnormal channel redistribution after injury can create ectopic excitable zones.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Damaged axon segments with altered channel density), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Damaged axon segments with altered channel density), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If E_K is −90 mV and V_m is −60 mV, net K⁺ current through open K⁺ channels is:",
    options: [

      "Outward (efflux)",
      "Inward (influx)",
      "Zero",
      "Determined only by the pump without channels",
    ],
    correct: 0,
    explanation: "V_m above E_K drives K⁺ outward through open channels.",
    wrongExplanations: [
      "",
      "This choice (Inward (influx)) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Zero) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "Unlike the keyed answer (Outward (efflux)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Retrograde messengers such as endocannabinoids act by:",
    options: [

      "Traveling from postsynaptic to presynaptic terminals to reduce release",
      "Always anterograde from photoreceptors to bipolar cells only",
      "Diffusing only within the synaptic cleft without receptors",
      "Opening nicotinic pores at the neuromuscular junction (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Endocannabinoids are synthesized postsynaptically and inhibit presynaptic release.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Traveling from postsynaptic to presynaptic terminals to reduce release), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Traveling from postsynaptic to presynaptic terminals to reduce release), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Asynchronous release after a presynaptic spike suggests:",
    options: [

      "Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity",
      "Exclusive quantal release at exactly 0 ms delay always (mixes up presynaptic release with postsynaptic receptor logic)",
      "Block of all voltage-gated Ca²⁺ channels (mixes up presynaptic release with postsynaptic receptor logic)",
      "Direct electrical coupling without vesicles (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Heterogeneous release sites and Ca²⁺ dynamics spread release timing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Inverse agonists of G-protein-coupled receptors:",
    options: [

      "Stabilize inactive receptor conformations below basal activity",
      "Always open ionotropic pores directly in a typical mammalian central neuron.",
      "Cleave SNARE proteins at presynaptic terminals when temperature is near 37 °C.",
      "Increase photopigment bleaching in rods during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Inverse agonists reduce constitutive receptor activity by favoring inactive states.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Stabilize inactive receptor conformations below basal activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Stabilize inactive receptor conformations below basal activity), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Stabilize inactive receptor conformations below basal activity), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Plateau potentials in dendrites can sustain firing when:",
    options: [

      "Voltage-gated Ca²⁺ and Na⁺ channels produce regenerative depolarization locally",
      "Only passive decay occurs without channels (ignores how EPSPs/IPSPs sum in time or space)",
      "All K⁺ channels are removed genetically (ignores how EPSPs/IPSPs sum in time or space)",
      "Photoreceptors are hyperpolarized by light (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated Ca²⁺ and Na⁺ channels produce regenerative depolarization locally), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Ca²⁺ and Na⁺ channels produce regenerative depolarization locally), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators produce rhythmic motor output because:",
    options: [

      "Recurrent excitatory and inhibitory connections form pacemaker-like loops",
      "Sensory input is required every cycle without exception during normal resting permeability conditions.",
      "Requires gap junctions exist in the circuit exclusively in this context",
      "Assigns an unrelated sensory or synaptic mechanism to this context when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "CPGs generate organized rhythms via interconnected interneuron circuits.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Recurrent excitatory and inhibitory connections form pacemaker-like loops), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recurrent excitatory and inhibitory connections form pacemaker-like loops), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Recurrent excitatory and inhibitory connections form pacemaker-like loops), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Acetylcholine in cortex during arousal often:",
    options: [

      "Reduces adaptation in pyramidal cells and enhances signal detection",
      "Closes all nicotinic receptors permanently when temperature is near 37 °C.",
      "Converts cochlear inner hair cells to photoreceptors",
      "Eliminates all IPSPs without receptors when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Cholinergic modulation adjusts gain and intrinsic properties in cortical circuits.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reduces adaptation in pyramidal cells and enhances signal detection), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Reduces adaptation in pyramidal cells and enhances signal detection), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular pathway neurons preferentially respond to:",
    options: [

      "High temporal frequency and motion",
      "Fine color borders requiring parvocellular input only",
      "Odorant identity in glomeruli",
      "Muscle spindle length without change",
    ],
    correct: 0,
    explanation: "M pathway cells have transient responses suited for motion and low-contrast detection.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (High temporal frequency and motion), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (High temporal frequency and motion), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The lateral superior olive uses interaural level differences primarily for:",
    options: [

      "High-frequency localization via intensity cues",
      "Low-frequency phase locking without level in a typical mammalian central neuron.",
      "Color processing in V1 when temperature is near 37 °C.",
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
    question: "C fibers mediate:",
    options: [

      "Slow, dull pain and warm/cold sensations",
      "Fine touch with Meissner corpuscles exclusively",
      "Photopic color vision",
      "High-frequency auditory pitch via phase locking",
    ],
    correct: 0,
    explanation: "Unmyelinated C fibers convey slow pain and temperature.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Slow, dull pain and warm/cold sensations), this option misstates the mechanism or direction described in the stem.",
      "This choice (Photopic color vision) does not match the keyed answer’s mechanism for Somatosensation.",
      "Unlike the keyed answer (Slow, dull pain and warm/cold sensations), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Enantiomers can smell different because:",
    options: [

      "Receptor binding geometry differs despite identical chemical formula",
      "Mitral cells lack any inhibition",
      "OSNs do not express receptors in a typical mammalian central neuron.",
      "Odorants bypass glomeruli entirely when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Stereochemistry affects interaction with odorant receptor binding pockets.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Receptor binding geometry differs despite identical chemical formula), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Receptor binding geometry differs despite identical chemical formula), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The fornix connects:",
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
      "This choice (Retina to olfactory bulb) does not match the keyed answer’s mechanism for Neuroanatomy.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Basal ganglia direct pathway activity tends to:",
    options: [

      "Facilitate intended movements by disinhibiting thalamocortical activity",
      "Block all movement without exception (maps the lesion to the wrong motor pathway or reflex)",
      "Transduce sound in the cochlea (maps the lesion to the wrong motor pathway or reflex)",
      "Encode color opponency exclusively (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Striatal direct pathway reduces basal ganglia output, releasing thalamic inhibition.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Facilitate intended movements by disinhibiting thalamocortical activity), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Facilitate intended movements by disinhibiting thalamocortical activity), this option misstates the mechanism or direction described in the stem.",
    ]
  }
];
