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
      "“The Na⁺ equilibrium potential” does not match the mechanism (topic: Resting Potential). Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K. The correct choice—“The K⁺ equilibrium potential”—fits that description.",
      "",
      "“0 mV exactly” does not match the mechanism (topic: Resting Potential). Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K. The correct choice—“The K⁺ equilibrium potential”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Resting potential is weighted toward the equilibrium potential of the ion with highest permeability; dominant K⁺ leak channels place V_m near E_K.",
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
      "“Becomes more negative” does not match the mechanism (topic: Nernst Equation). The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV. The correct choice—“Becomes less negative (moves toward 0 mV)”—fits that description.",
      "",
      "“Becomes exactly 0 mV regardless of concentration” does not match the mechanism (topic: Nernst Equation). The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV. The correct choice—“Becomes less negative (moves toward 0 mV)”—fits that description.",
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
      "“Speed up voltage changes for a given current” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m; larger capacitance requires more charge to change voltage, slowing the membrane's response to injected current. The correct choice—“Slow down voltage changes for a given current”—fits that description.",
      "",
      "“Eliminate passive decay along dendrites (misstates how R_m, C_m, or geometry set τ o…” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m; larger capacitance requires more charge to change voltage, slowing the membrane's response to injected current. The correct choice—“Slow down voltage changes for a given current”—fits that description.",
      "“Prevent voltage-gated channel activation (misstates how R_m, C_m, or geometry set τ …” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m; larger capacitance requires more charge to change voltage, slowing the membrane's response to injected current. The correct choice—“Slow down voltage changes for a given current”—fits that description.",
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
      "“Increase λ and extend passive spread” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m / R_i); higher axial resistance impedes longitudinal current flow, shortening the distance over which subthreshold signals spread. The correct choice—“Decrease λ and shorten passive spread”—fits that description.",
      "",
      "“Have no effect on passive spread” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m / R_i); higher axial resistance impedes longitudinal current flow, shortening the distance over which subthreshold signals spread. The correct choice—“Decrease λ and shorten passive spread”—fits that description.",
      "“Directly open voltage-gated Na channels” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m / R_i); higher axial resistance impedes longitudinal current flow, shortening the distance over which subthreshold signals spread. The correct choice—“Decrease λ and shorten passive spread”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "During the relative refractory period, a larger-than-normal depolarizing stimulus may still trigger a spike because:",
    options: [
      "Inactivated Na⁺ channels are recovering and fewer channels are available",
      "All K⁺ channels are permanently closed",
      "Myelin is absent at the axon hillock",
      "The Na⁺/K⁺ pump stops functioning",
    ],
    correct: 0,
    explanation: "Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold.",
    wrongExplanations: [
      "",
      "“All K⁺ channels are permanently closed” does not match the mechanism (topic: Action Potentials). Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold. The correct choice—“Inactivated Na⁺ channels are recovering and fewer channels are available”—fits that description.",
      "“Myelin is absent at the axon hillock” does not match the mechanism (topic: Action Potentials). Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold. The correct choice—“Inactivated Na⁺ channels are recovering and fewer channels are available”—fits that description.",
      "“The Na⁺/K⁺ pump stops functioning” does not match the mechanism (topic: Action Potentials). Partial recovery of Na⁺ channels from inactivation during the relative refractory period requires stronger stimulation to reach threshold. The correct choice—“Inactivated Na⁺ channels are recovering and fewer channels are available”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The falling phase of the action potential is driven primarily by delayed-rectifier K⁺ channels because they:",
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
      "“Permit massive Na⁺ influx” does not match the mechanism (topic: Action Potentials). Delayed-rectifier K⁺ channels activate during the spike and repolarize the membrane through K⁺ efflux. The correct choice—“Open with slower kinetics than the initial Na⁺ surge and carry outward current”—fits that description.",
      "“Block all Cl⁻ conductance permanently” does not match the mechanism (topic: Action Potentials). Delayed-rectifier K⁺ channels activate during the spike and repolarize the membrane through K⁺ efflux. The correct choice—“Open with slower kinetics than the initial Na⁺ surge and carry outward current”—fits that description.",
      "“Pump Ca²⁺ into the cytosol” does not match the mechanism (topic: Action Potentials). Delayed-rectifier K⁺ channels activate during the spike and repolarize the membrane through K⁺ efflux. The correct choice—“Open with slower kinetics than the initial Na⁺ surge and carry outward current”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The absolute refractory period is defined by the state of voltage-gated Na⁺ channels in which:",
    options: [
      "Activation gates are open and inactivation gates are closed",
      "Inactivation gates remain closed even if the activation gate opens",
      "Both gates are permanently removed from the membrane",
      "Channels are converted to ligand-gated receptors",
    ],
    correct: 1,
    explanation: "Inactivation of Na⁺ channels prevents re-opening during the absolute refractory period, enforcing a minimum inter-spike interval.",
    wrongExplanations: [
      "“Activation gates are open and inactivation gates are closed” does not match the mechanism (topic: Action Potentials). Inactivation of Na⁺ channels prevents re-opening during the absolute refractory period, enforcing a minimum inter-spike interval. The correct choice—“Inactivation gates remain closed even if the activation gate opens”—fits that description.",
      "",
      "“Both gates are permanently removed from the membrane” does not match the mechanism (topic: Action Potentials). Inactivation of Na⁺ channels prevents re-opening during the absolute refractory period, enforcing a minimum inter-spike interval. The correct choice—“Inactivation gates remain closed even if the activation gate opens”—fits that description.",
      "“Channels are converted to ligand-gated receptors” does not match the mechanism (topic: Action Potentials). Inactivation of Na⁺ channels prevents re-opening during the absolute refractory period, enforcing a minimum inter-spike interval. The correct choice—“Inactivation gates remain closed even if the activation gate opens”—fits that description.",
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
      "“Net outward current exceeding inward current” does not match the mechanism (topic: Action Potentials). At threshold, positive feedback from Na⁺ influx overcomes opposing outward currents, triggering the all-or-none spike. The correct choice—“Net inward current exceeding outward current”—fits that description.",
      "",
      "“Complete closure of all ion channels” does not match the mechanism (topic: Action Potentials). At threshold, positive feedback from Na⁺ influx overcomes opposing outward currents, triggering the all-or-none spike. The correct choice—“Net inward current exceeding outward current”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At threshold, positive feedback from Na⁺ influx overcomes opposing outward currents, triggering the all-or-none spike.",
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
      "“Myelin contains voltage-gated channels (misapplies how active propagation uses local…” does not match the mechanism (topic: Action Potential Propagation). Current passively spreads under myelin between nodes; voltage-gated channels at nodes regenerate the action potential (saltatory conduction). The correct choice—“Internodal membrane capacitance is charged passively while active regeneration occur…”—fits that description.",
      "",
      "“Action potentials are generated continuously along the entire axon” does not match the mechanism (topic: Action Potential Propagation). Current passively spreads under myelin between nodes; voltage-gated channels at nodes regenerate the action potential (saltatory conduction). The correct choice—“Internodal membrane capacitance is charged passively while active regeneration occur…”—fits that description.",
      "“Saltatory conduction requires no ion channels (misapplies how active propagation use…” does not match the mechanism (topic: Action Potential Propagation). Current passively spreads under myelin between nodes; voltage-gated channels at nodes regenerate the action potential (saltatory conduction). The correct choice—“Internodal membrane capacitance is charged passively while active regeneration occur…”—fits that description.",
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
      "“Increasing the number of voltage-gated channels per unit length” does not match the mechanism (topic: Action Potential Propagation). Myelin insulation lowers capacitive load and confines ion channel activity to nodes, enabling faster saltatory propagation. The correct choice—“Reducing effective membrane capacitance and limiting active regeneration to nodes”—fits that description.",
      "",
      "“Raising the resting membrane potential above 0 mV (misapplies how active propagation…” does not match the mechanism (topic: Action Potential Propagation). Myelin insulation lowers capacitive load and confines ion channel activity to nodes, enabling faster saltatory propagation. The correct choice—“Reducing effective membrane capacitance and limiting active regeneration to nodes”—fits that description.",
      "“Blocking all passive current flow (misapplies how active propagation uses local circ…” does not match the mechanism (topic: Action Potential Propagation). Myelin insulation lowers capacitive load and confines ion channel activity to nodes, enabling faster saltatory propagation. The correct choice—“Reducing effective membrane capacitance and limiting active regeneration to nodes”—fits that description.",
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
      "“More negative than at rest (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Depolarization is a shift to a less negative membrane potential relative to rest. The correct choice—“Less negative than at rest (moves toward 0 mV or above)”—fits that description.",
      "",
      "“Exactly equal to E_K (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Depolarization is a shift to a less negative membrane potential relative to rest. The correct choice—“Less negative than at rest (moves toward 0 mV or above)”—fits that description.",
      "“Fixed regardless of ion flux (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Depolarization is a shift to a less negative membrane potential relative to rest. The correct choice—“Less negative than at rest (moves toward 0 mV or above)”—fits that description.",
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
      "“The potassium reversal potential (E_K), as if K⁺ were the dominant permeant ion” does not match the mechanism (topic: Electrical Signaling). The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na. The correct choice—“The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na.",
      "“The reversal potential of gap junction channels, not voltage-gated cation channels” does not match the mechanism (topic: Electrical Signaling). The Goldman equation weights each ion's equilibrium potential by relative permeability; high P_Na drives V_m toward E_Na. The correct choice—“The sodium reversal potential (E_Na), weighted by high relative Na⁺ permeability”—fits that description.",
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
      "“Opens voltage-gated Na⁺ channels directly (ignores which ion dominates resting perme…” does not match the mechanism (topic: Resting Potential). The 3:2 stoichiometry of the Na⁺/K⁺ pump moves net positive charge out of the cell, slightly hyperpolarizing the membrane. The correct choice—“Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive charge…”—fits that description.",
      "“Releases glutamate into the synaptic cleft (ignores which ion dominates resting perm…” does not match the mechanism (topic: Resting Potential). The 3:2 stoichiometry of the Na⁺/K⁺ pump moves net positive charge out of the cell, slightly hyperpolarizing the membrane. The correct choice—“Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive charge…”—fits that description.",
      "“Phosphorylates AMPA receptors at the synapse (ignores which ion dominates resting pe…” does not match the mechanism (topic: Resting Potential). The 3:2 stoichiometry of the Na⁺/K⁺ pump moves net positive charge out of the cell, slightly hyperpolarizing the membrane. The correct choice—“Transports 3 Na⁺ out and 2 K⁺ in per cycle, contributing net outward positive charge…”—fits that description.",
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
      "“A faster rise to steady-state voltage” does not match the mechanism (topic: Passive Membrane Properties). A larger τ (R_m × C_m) slows the charging of the membrane capacitance, delaying voltage change. The correct choice—“A slower rise to steady-state voltage”—fits that description.",
      "",
      "“No change in voltage over time” does not match the mechanism (topic: Passive Membrane Properties). A larger τ (R_m × C_m) slows the charging of the membrane capacitance, delaying voltage change. The correct choice—“A slower rise to steady-state voltage”—fits that description.",
      "“Immediate action potential firing at all stimulus amplitudes” does not match the mechanism (topic: Passive Membrane Properties). A larger τ (R_m × C_m) slows the charging of the membrane capacitance, delaying voltage change. The correct choice—“A slower rise to steady-state voltage”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Subthreshold depolarizing stimuli differ from suprathreshold stimuli in that subthreshold stimuli:",
    options: [
      "Produce graded potentials that decay without triggering an all-or-none spike",
      "Always produce full-amplitude action potentials",
      "Permanently inactivate all Na channels",
      "Only horizontal cells hyperpolarize rods when cGMP is high",
    ],
    correct: 0,
    explanation: "Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
      "“Permanently inactivate all Na channels” does not match the mechanism (topic: Action Potentials). Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential. The correct choice—“Produce graded potentials that decay without triggering an all-or-none spike”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Subthreshold inputs produce graded, decremental responses; only suprathreshold stimuli trigger the regenerative all-or-none action potential.",
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
      "“Na⁺ efflux through leak channels (describes the wrong synaptic structure or transmis…” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ entry into the presynaptic terminal binds synaptic vesicle release machinery and drives exocytosis. The correct choice—“Ca²⁺ influx via voltage-gated calcium channels”—fits that description.",
      "“Postsynaptic NMDA receptor opening (describes the wrong synaptic structure or transm…” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ entry into the presynaptic terminal binds synaptic vesicle release machinery and drives exocytosis. The correct choice—“Ca²⁺ influx via voltage-gated calcium channels”—fits that description.",
      "“Passive hyperpolarization of the axon hillock” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ entry into the presynaptic terminal binds synaptic vesicle release machinery and drives exocytosis. The correct choice—“Ca²⁺ influx via voltage-gated calcium channels”—fits that description.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold.",
      "",
      "“Blocked all ligand-gated channels (mixes up presynaptic release with postsynaptic re…” does not match the mechanism (topic: Synaptic Transmission). EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold. The correct choice—“Depolarized the cell closer to spike threshold”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs are depolarizing; moving from −70 mV toward 0 mV reduces the distance to threshold.",
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
      "“E_Cl⁻ equals +40 mV (mixes up presynaptic release with postsynaptic receptor logic)” does not match the mechanism (topic: Synaptic Transmission). When E_Cl⁻ lies below rest, Cl⁻ influx hyperpolarizes the postsynaptic membrane. The correct choice—“E_Cl⁻ is more negative than the resting membrane potential”—fits that description.",
      "“No neurotransmitter is released (mixes up presynaptic release with postsynaptic rece…” does not match the mechanism (topic: Synaptic Transmission). When E_Cl⁻ lies below rest, Cl⁻ influx hyperpolarizes the postsynaptic membrane. The correct choice—“E_Cl⁻ is more negative than the resting membrane potential”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When E_Cl⁻ lies below rest, Cl⁻ influx hyperpolarizes the postsynaptic membrane.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Ionotropic glutamate receptors produce fast synaptic responses because:",
    options: [
      "They require G-protein activation before any ion flow",
      "Neurotransmitter binding directly opens an ion channel pore",
      "They always act exclusively in the nucleus",
      "They convert cAMP to ATP instantly",
    ],
    correct: 1,
    explanation: "Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
    wrongExplanations: [
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents.",
      "“They convert cAMP to ATP instantly” does not match the mechanism (topic: Receptor Types). Ionotropic receptors contain an ion channel pore that opens upon neurotransmitter binding, producing rapid postsynaptic currents. The correct choice—“Neurotransmitter binding directly opens an ion channel pore”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptor signaling is typically slower than ionotropic signaling because it involves:",
    options: [
      "Direct ion flux through the receptor pore",
      "G-protein activation and second-messenger cascades before channel modulation",
      "Immediate fusion of synaptic vesicles",
      "Saltatory conduction in the dendrite",
    ],
    correct: 1,
    explanation: "Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation.",
    wrongExplanations: [
      "“Direct ion flux through the receptor pore” does not match the mechanism (topic: Receptor Types). Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation. The correct choice—“G-protein activation and second-messenger cascades before channel modulation”—fits that description.",
      "",
      "“Immediate fusion of synaptic vesicles” does not match the mechanism (topic: Receptor Types). Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation. The correct choice—“G-protein activation and second-messenger cascades before channel modulation”—fits that description.",
      "“Saltatory conduction in the dendrite” does not match the mechanism (topic: Receptor Types). Metabotropic pathways require G-protein and second-messenger steps, producing slower but longer-lasting modulation. The correct choice—“G-protein activation and second-messenger cascades before channel modulation”—fits that description.",
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
      "“Hydrolysis of cAMP to AMP” does not match the mechanism (topic: Second Messengers). Adenylyl cyclase synthesizes cAMP from ATP, activating downstream kinases such as PKA. The correct choice—“Conversion of ATP to cAMP in the cytosol”—fits that description.",
      "",
      "“Direct opening of voltage-gated Na channels” does not match the mechanism (topic: Second Messengers). Adenylyl cyclase synthesizes cAMP from ATP, activating downstream kinases such as PKA. The correct choice—“Conversion of ATP to cAMP in the cytosol”—fits that description.",
      "“Immediate degradation of all IP3” does not match the mechanism (topic: Second Messengers). Adenylyl cyclase synthesizes cAMP from ATP, activating downstream kinases such as PKA. The correct choice—“Conversion of ATP to cAMP in the cytosol”—fits that description.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ signaling raises cytosolic Ca²⁺ primarily by:",
    options: [
      "Opening plasmalemmal Na⁺ channels",
      "Releasing Ca²⁺ from endoplasmic reticulum stores",
      "Blocking all K⁺ channels permanently",
      "Stopping vesicle endocytosis",
    ],
    correct: 1,
    explanation: "IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades.",
    wrongExplanations: [
      "“Opening plasmalemmal Na⁺ channels” does not match the mechanism (topic: Second Messengers). IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades. The correct choice—“Releasing Ca²⁺ from endoplasmic reticulum stores”—fits that description.",
      "",
      "“Blocking all K⁺ channels permanently” does not match the mechanism (topic: Second Messengers). IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades. The correct choice—“Releasing Ca²⁺ from endoplasmic reticulum stores”—fits that description.",
      "“Stopping vesicle endocytosis” does not match the mechanism (topic: Second Messengers). IP₃ binds ER receptors and releases stored Ca²⁺ into the cytosol as part of metabotropic cascades. The correct choice—“Releasing Ca²⁺ from endoplasmic reticulum stores”—fits that description.",
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
      "“Two EPSPs from different dendritic branches arrive simultaneously” does not match the mechanism (topic: Synaptic Integration). Temporal summation adds successive inputs at one synapse before the membrane returns to baseline. The correct choice—“Repeated EPSPs arrive at the same synapse before previous ones decay”—fits that description.",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Temporal summation adds successive inputs at one synapse before the membrane returns to baseline.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Temporal summation adds successive inputs at one synapse before the membrane returns to baseline.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Spatial summation combines simultaneous synaptic inputs from different locations on the same postsynaptic cell.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators often differ from point-to-point neurotransmission because they:",
    options: [
      "Act only at gap junctions with zero delay",
      "Can diffuse broadly and alter neuronal gain or excitability over many synapses",
      "Always produce millisecond-scale EPSPs only",
      "Are released exclusively at the neuromuscular junction",
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
    question: "Dale's principle implies that a single neuron:",
    options: [
      "Randomly switches neurotransmitters at each synapse",
      "Releases the same primary neurotransmitter(s) from all its synaptic terminals",
      "Can only form electrical synapses",
      "Must co-release glutamate and GABA at every terminal",
    ],
    correct: 1,
    explanation: "Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites.",
    wrongExplanations: [
      "“Randomly switches neurotransmitters at each synapse” does not match the mechanism (topic: Neural Circuits). Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites. The correct choice—“Releases the same primary neurotransmitter(s) from all its synaptic terminals”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites.",
      "“Must co-release glutamate and GABA at every terminal” does not match the mechanism (topic: Neural Circuits). Each neuron maintains a consistent neurotransmitter phenotype across its synaptic release sites. The correct choice—“Releases the same primary neurotransmitter(s) from all its synaptic terminals”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition shapes neural responses by:",
    options: [
      "Delaying the inhibitory interneuron until long after output firing",
      "Activating an interneuron in parallel with the excitatory pathway to limit output timing",
      "Removing all excitatory input to the circuit",
      "Converting chemical synapses to electrical synapses",
    ],
    correct: 1,
    explanation: "Feedforward inhibition activates inhibitory interneurons alongside excitation, constraining when the output neuron can fire.",
    wrongExplanations: [
      "“Delaying the inhibitory interneuron until long after output firing” does not match the mechanism (topic: Neural Circuits). Feedforward inhibition activates inhibitory interneurons alongside excitation, constraining when the output neuron can fire. The correct choice—“Activating an interneuron in parallel with the excitatory pathway to limit output ti…”—fits that description.",
      "",
      "“Removing all excitatory input to the circuit” does not match the mechanism (topic: Neural Circuits). Feedforward inhibition activates inhibitory interneurons alongside excitation, constraining when the output neuron can fire. The correct choice—“Activating an interneuron in parallel with the excitatory pathway to limit output ti…”—fits that description.",
      "“Converting chemical synapses to electrical synapses” does not match the mechanism (topic: Neural Circuits). Feedforward inhibition activates inhibitory interneurons alongside excitation, constraining when the output neuron can fire. The correct choice—“Activating an interneuron in parallel with the excitatory pathway to limit output ti…”—fits that description.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses allow bidirectional current flow because:",
    options: [
      "They use SNARE-mediated vesicle release",
      "Gap junction channels connect the cytoplasm of coupled cells",
      "They require G-protein second messengers",
      "They exist only in the peripheral nervous system myelin",
    ],
    correct: 1,
    explanation: "Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells.",
    wrongExplanations: [
      "“They use SNARE-mediated vesicle release” does not match the mechanism (topic: Electrical Synapses). Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells. The correct choice—“Gap junction channels connect the cytoplasm of coupled cells”—fits that description.",
      "",
      "“They require G-protein second messengers” does not match the mechanism (topic: Electrical Synapses). Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells. The correct choice—“Gap junction channels connect the cytoplasm of coupled cells”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Connexin-based gap junctions provide a low-resistance pathway for ionic current between coupled cells.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
      "“Mg²⁺ out of the cell” does not match the mechanism (topic: Synaptic Transmission). AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest. The correct choice—“Na⁺ and some K⁺ at resting potentials”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA receptors are largely permeable to cations including Na⁺, producing rapid depolarizing currents at rest.",
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
      "“Opening Na⁺ channels at the axon hillock (mixes up presynaptic release with postsyna…” does not match the mechanism (topic: Synaptic Transmission). GABAA receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane. The correct choice—“Increasing Cl⁻ conductance when E_Cl⁻ is below rest”—fits that description.",
      "Fast synaptic inhibition at many CNS synapses is dominated by GABA_A Cl⁻ flux. Metabotropic GABA_B signaling is slower and works through G-proteins, not direct ligand-gated Cl⁻ pores. GABAA receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABAA receptors are Cl⁻ channels; when E_Cl⁻ is negative to rest, opening them hyperpolarizes or shunts the membrane.",
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
      "“Light opens voltage-gated Na channels throughout the outer segment” does not match the mechanism (topic: Visual System). In darkness, cGMP keeps channels open; light activates phosphodiesterase, lowers cGMP, closes channels, and hyperpolarizes the cell. The correct choice—“Light closes cGMP-gated cation channels”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Light directly pumps K out of the cell” does not match the mechanism (topic: Visual System). In darkness, cGMP keeps channels open; light activates phosphodiesterase, lowers cGMP, closes channels, and hyperpolarizes the cell. The correct choice—“Light closes cGMP-gated cation channels”—fits that description.",
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
      "“Identical ON responses in center and surround” does not match the mechanism (topic: Visual System). Antagonistic surround responses sharpen edges by subtracting uniform illumination across the receptive field. The correct choice—“Antagonistic center and surround responses”—fits that description.",
      "",
      "“No lateral interactions in the retina” does not match the mechanism (topic: Visual System). Antagonistic surround responses sharpen edges by subtracting uniform illumination across the receptive field. The correct choice—“Antagonistic center and surround responses”—fits that description.",
      "“Tonotopic mapping along the basilar membrane” does not match the mechanism (topic: Visual System). Antagonistic surround responses sharpen edges by subtracting uniform illumination across the receptive field. The correct choice—“Antagonistic center and surround responses”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Tonotopic organization of the cochlea means that:",
    options: [
      "All frequencies activate the same hair cell row",
      "Different sound frequencies maximally stimulate different basilar membrane locations",
      "Pitch is encoded only by olfactory receptor choice",
      "The apex responds best to high frequencies only",
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
      "The number of olfactory glomeruli",
    ],
    correct: 1,
    explanation: "Hands and face occupy disproportionately large S1 territory because of high receptor density and fine discriminative capacity.",
    wrongExplanations: [
      "“Absolute body segment volume” does not match the mechanism (topic: Somatosensation). Hands and face occupy disproportionately large S1 territory because of high receptor density and fine discriminative capacity. The correct choice—“Sensory receptor density and acuity of the body region”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hands and face occupy disproportionately large S1 territory because of high receptor density and fine discriminative capacity.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles are specialized for detecting:",
    options: [
      "Static deep pressure over minutes",
      "High-frequency vibration and rapid mechanical transients",
      "Bitter taste molecules on the tongue",
      "Low spatial frequency visual edges only",
    ],
    correct: 1,
    explanation: "Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes.",
    wrongExplanations: [
      "“Static deep pressure over minutes” does not match the mechanism (topic: Somatosensation). Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes. The correct choice—“High-frequency vibration and rapid mechanical transients”—fits that description.",
      "",
      "“Bitter taste molecules on the tongue” does not match the mechanism (topic: Somatosensation). Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes. The correct choice—“High-frequency vibration and rapid mechanical transients”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pacinian corpuscles are rapidly adapting mechanoreceptors tuned to vibration and sudden pressure changes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Combinatorial odor coding in the olfactory bulb relies on:",
    options: [
      "Every sensory neuron expressing all receptor types",
      "Each olfactory sensory neuron expressing one receptor type and projecting to specific glomeruli",
      "Direct monosynaptic links from OSNs to motor neurons only",
      "Identical receptor expression in all glomeruli",
    ],
    correct: 1,
    explanation: "The one-neuron–one-receptor rule and glomerular targeting allow distinct odor patterns to activate specific bulb maps.",
    wrongExplanations: [
      "“Every sensory neuron expressing all receptor types” does not match the mechanism (topic: Olfactory System). The one-neuron–one-receptor rule and glomerular targeting allow distinct odor patterns to activate specific bulb maps. The correct choice—“Each olfactory sensory neuron expressing one receptor type and projecting to specifi…”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The one-neuron–one-receptor rule and glomerular targeting allow distinct odor patterns to activate specific bulb maps.",
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
      "“Allowing free paracellular diffusion of all solutes (localizes the function to the w…” does not match the mechanism (topic: Neuroanatomy). Tight junctions between endothelial cells limit paracellular diffusion, requiring selective transporters for brain entry. The correct choice—“Restricting paracellular passage of polar molecules into brain parenchyma”—fits that description.",
      "",
      "“Forming myelin around axons in cortex (localizes the function to the wrong brain reg…” does not match the mechanism (topic: Neuroanatomy). Tight junctions between endothelial cells limit paracellular diffusion, requiring selective transporters for brain entry. The correct choice—“Restricting paracellular passage of polar molecules into brain parenchyma”—fits that description.",
      "“Replacing all astrocytic endfeet (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). Tight junctions between endothelial cells limit paracellular diffusion, requiring selective transporters for brain entry. The correct choice—“Restricting paracellular passage of polar molecules into brain parenchyma”—fits that description.",
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
      "“Connects spinal segments within one side of the cord (localizes the function to the …” does not match the mechanism (topic: Neuroanatomy). Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres. The correct choice—“Connects corresponding areas of the left and right cerebral hemispheres”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Commissural fibers cross the midline; the corpus callosum links homologous cortical regions across hemispheres.",
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
      "“Transduction of photons in rods” does not match the mechanism (topic: Neuroanatomy). The hippocampus is critical for encoding new declarative memories while leaving many procedural memories intact. The correct choice—“Consolidation of new declarative (episodic) memories”—fits that description.",
      "“Saltatory conduction in peripheral nerves” does not match the mechanism (topic: Neuroanatomy). The hippocampus is critical for encoding new declarative memories while leaving many procedural memories intact. The correct choice—“Consolidation of new declarative (episodic) memories”—fits that description.",
      "“Release of acetylcholine at the neuromuscular junction” does not match the mechanism (topic: Neuroanatomy). The hippocampus is critical for encoding new declarative memories while leaving many procedural memories intact. The correct choice—“Consolidation of new declarative (episodic) memories”—fits that description.",
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
      "“Retinal bipolar cell layer” does not match the mechanism (topic: Motor Systems). The nigrostriatal pathway delivers dopamine to the striatum, modulating basal ganglia motor circuits. The correct choice—“Striatum (caudate and putamen)”—fits that description.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory epithelium directly” does not match the mechanism (topic: Motor Systems). The nigrostriatal pathway delivers dopamine to the striatum, modulating basal ganglia motor circuits. The correct choice—“Striatum (caudate and putamen)”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "NMDA receptor-dependent LTP at CA1 synapses requires coincident:",
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
      "“Complete removal of AMPA receptors” does not match the mechanism (topic: Learning & Memory). NMDA receptors act as coincidence detectors: depolarization removes Mg²⁺ block while glutamate is bound, allowing Ca²⁺ influx. The correct choice—“Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block”—fits that description.",
      "“Exclusive GABAB receptor activation” does not match the mechanism (topic: Learning & Memory). NMDA receptors act as coincidence detectors: depolarization removes Mg²⁺ block while glutamate is bound, allowing Ca²⁺ influx. The correct choice—“Glutamate binding and postsynaptic depolarization relieving Mg²⁺ block”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Hebbian synaptic plasticity strengthens a synapse when:",
    options: [
      "Presynaptic activity consistently contributes to postsynaptic firing",
      "Pre- and postsynaptic activity are always anti-correlated",
      "The synapse is never used",
      "Requires inhibitory interneurons fire in isolation",
    ],
    correct: 0,
    explanation: "Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.'",
      "“Requires inhibitory interneurons fire in isolation” does not match the mechanism (topic: Learning & Memory). Correlated pre- and postsynaptic activity drives strengthening—'cells that fire together, wire together.' The correct choice—“Presynaptic activity consistently contributes to postsynaptic firing”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "CREB-dependent transcription supports long-term memory by:",
    options: [
      "Directly opening voltage-gated Na channels at the synapse",
      "Regulating gene expression for proteins that stabilize synaptic changes",
      "Degrading all cAMP within seconds",
      "Blocking protein synthesis in the soma permanently",
    ],
    correct: 1,
    explanation: "Phosphorylated CREB activates transcription of genes needed for enduring synaptic modification.",
    wrongExplanations: [
      "“Directly opening voltage-gated Na channels at the synapse” does not match the mechanism (topic: Learning & Memory). Phosphorylated CREB activates transcription of genes needed for enduring synaptic modification. The correct choice—“Regulating gene expression for proteins that stabilize synaptic changes”—fits that description.",
      "",
      "“Degrading all cAMP within seconds” does not match the mechanism (topic: Learning & Memory). Phosphorylated CREB activates transcription of genes needed for enduring synaptic modification. The correct choice—“Regulating gene expression for proteins that stabilize synaptic changes”—fits that description.",
      "“Blocking protein synthesis in the soma permanently” does not match the mechanism (topic: Learning & Memory). Phosphorylated CREB activates transcription of genes needed for enduring synaptic modification. The correct choice—“Regulating gene expression for proteins that stabilize synaptic changes”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "The immediate early gene c-fos is induced rapidly after strong synaptic activity because:",
    options: [
      "It is constitutively expressed at equal levels in all silent neurons",
      "Calcium and activity-dependent signaling activate its transcription quickly",
      "It encodes the NMDA receptor pore directly",
      "It permanently closes all K channels",
    ],
    correct: 1,
    explanation: "Activity-driven calcium and kinase signaling rapidly induces c-fos as a marker of recent neuronal activation.",
    wrongExplanations: [
      "“It is constitutively expressed at equal levels in all silent neurons” does not match the mechanism (topic: Learning & Memory). Activity-driven calcium and kinase signaling rapidly induces c-fos as a marker of recent neuronal activation. The correct choice—“Calcium and activity-dependent signaling activate its transcription quickly”—fits that description.",
      "",
      "“It encodes the NMDA receptor pore directly” does not match the mechanism (topic: Learning & Memory). Activity-driven calcium and kinase signaling rapidly induces c-fos as a marker of recent neuronal activation. The correct choice—“Calcium and activity-dependent signaling activate its transcription quickly”—fits that description.",
      "“It permanently closes all K channels” does not match the mechanism (topic: Learning & Memory). Activity-driven calcium and kinase signaling rapidly induces c-fos as a marker of recent neuronal activation. The correct choice—“Calcium and activity-dependent signaling activate its transcription quickly”—fits that description.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Topographic sensory maps in cortex mean that:",
    options: [
      "Neighboring cortical neurons represent neighboring sensory receptor locations",
      "All sensory modalities share one random map with no structure",
      "Motor neurons are arranged by gene family only",
      "Tonotopy exists only in the retina, not in cortex",
    ],
    correct: 0,
    explanation: "Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
    wrongExplanations: [
      "",
      "“All sensory modalities share one random map with no structure” does not match the mechanism (topic: Brain Function). Topographic maps preserve spatial relationships from the sensory periphery in cortical organization. The correct choice—“Neighboring cortical neurons represent neighboring sensory receptor locations”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Topographic maps preserve spatial relationships from the sensory periphery in cortical organization.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
      "“Synaptic vesicle recycling (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest. The correct choice—“The Na⁺/K⁺ ATPase maintaining Na⁺ and K⁺ gradients”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux.",
      "“Concentration gradients without any electrical component” does not match the mechanism (topic: Resting Potential). Ions flow through leak channels until driving force (V_m − E_ion) balances passive flux. The correct choice—“Their electrochemical gradients toward respective equilibrium potentials”—fits that description.",
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
      "“Axon diameter and myelination thickness (contradicts the Nernst dependence on inside…” does not match the mechanism (topic: Nernst Equation). E_ion depends on the ratio of internal to external ion concentration. The correct choice—“Intracellular and extracellular concentrations of that ion”—fits that description.",
      "“Synaptic release probability (contradicts the Nernst dependence on inside/outside co…” does not match the mechanism (topic: Nernst Equation). E_ion depends on the ratio of internal to external ion concentration. The correct choice—“Intracellular and extracellular concentrations of that ion”—fits that description.",
      "“Receptor subtype in the postsynaptic density (contradicts the Nernst dependence on i…” does not match the mechanism (topic: Nernst Equation). E_ion depends on the ratio of internal to external ion concentration. The correct choice—“Intracellular and extracellular concentrations of that ion”—fits that description.",
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
      "“The minimum interval between action potentials (misstates how R_m, C_m, or geometry …” does not match the mechanism (topic: Passive Membrane Properties). λ quantifies spatial decay of passive signals along a cable. The correct choice—“How far a subthreshold voltage spreads before decaying”—fits that description.",
      "“The equilibrium potential for chloride (misstates how R_m, C_m, or geometry set τ or…” does not match the mechanism (topic: Passive Membrane Properties). λ quantifies spatial decay of passive signals along a cable. The correct choice—“How far a subthreshold voltage spreads before decaying”—fits that description.",
      "“The rate of neurotransmitter reuptake (misstates how R_m, C_m, or geometry set τ or …” does not match the mechanism (topic: Passive Membrane Properties). λ quantifies spatial decay of passive signals along a cable. The correct choice—“How far a subthreshold voltage spreads before decaying”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Voltage-gated Na⁺ channels contribute to the rising phase because they:",
    options: [
      "Allow Na⁺ influx when the membrane depolarizes past activation threshold",
      "Pump K⁺ into the cell",
      "Open only after all K⁺ channels close permanently",
      "Are ligand-gated by glutamate only",
    ],
    correct: 0,
    explanation: "Na⁺ influx drives the upswing of the action potential.",
    wrongExplanations: [
      "",
      "“Pump K⁺ into the cell” does not match the mechanism (topic: Action Potentials). Na⁺ influx drives the upswing of the action potential. The correct choice—“Allow Na⁺ influx when the membrane depolarizes past activation threshold”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ influx drives the upswing of the action potential.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Na⁺ influx drives the upswing of the action potential.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: In unmyelinated fibers, active regeneration occurs sequentially along the membrane.",
      "“It requires no voltage-gated channels (misapplies how active propagation uses local …” does not match the mechanism (topic: Action Potential Propagation). In unmyelinated fibers, active regeneration occurs sequentially along the membrane. The correct choice—“The action potential regenerates along every patch of membrane”—fits that description.",
      "“It is purely passive without active currents (misapplies how active propagation uses…” does not match the mechanism (topic: Action Potential Propagation). In unmyelinated fibers, active regeneration occurs sequentially along the membrane. The correct choice—“The action potential regenerates along every patch of membrane”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman combines contributions of all permeant ions weighted by permeability.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman combines contributions of all permeant ions weighted by permeability.",
      "“Synaptic vesicles are depleted (uses the wrong sign or driving force for ionic curre…” does not match the mechanism (topic: Electrical Signaling). Goldman combines contributions of all permeant ions weighted by permeability. The correct choice—“Multiple ions are permeant with different equilibrium potentials”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺-triggered SNARE complex assembly drives vesicle fusion and release.",
      "“Direct opening of voltage-gated Na⁺ channels in the cleft” does not match the mechanism (topic: Chemical Synapses). Ca²⁺-triggered SNARE complex assembly drives vesicle fusion and release. The correct choice—“SNARE-mediated exocytosis triggered by calcium”—fits that description.",
      "“Retrograde transport in dendrites” does not match the mechanism (topic: Chemical Synapses). Ca²⁺-triggered SNARE complex assembly drives vesicle fusion and release. The correct choice—“SNARE-mediated exocytosis triggered by calcium”—fits that description.",
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
      "“Myelin wraps around dendrites at every micron (describes the wrong synaptic structur…” does not match the mechanism (topic: Chemical Synapses). The PSD organizes receptors and scaffolding for synaptic signaling. The correct choice—“Concentrated receptors and signaling proteins opposite the active zone”—fits that description.",
      "“Photopigment molecules for scotopic vision (describes the wrong synaptic structure o…” does not match the mechanism (topic: Chemical Synapses). The PSD organizes receptors and scaffolding for synaptic signaling. The correct choice—“Concentrated receptors and signaling proteins opposite the active zone”—fits that description.",
      "“Basilar membrane collagen fibers (describes the wrong synaptic structure or transmis…” does not match the mechanism (topic: Chemical Synapses). The PSD organizes receptors and scaffolding for synaptic signaling. The correct choice—“Concentrated receptors and signaling proteins opposite the active zone”—fits that description.",
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
      "“Continuous analog waves without discrete units (mixes up presynaptic release with po…” does not match the mechanism (topic: Synaptic Transmission). Each vesicle fusion event contributes a quantal unit of postsynaptic response. The correct choice—“Discrete steps corresponding to fusion of vesicles”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each vesicle fusion event contributes a quantal unit of postsynaptic response.",
      "“Purely passive cable responses without receptors” does not match the mechanism (topic: Synaptic Transmission). Each vesicle fusion event contributes a quantal unit of postsynaptic response. The correct choice—“Discrete steps corresponding to fusion of vesicles”—fits that description.",
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
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Nicotinic ACh receptors are classic ionotropic receptors mediating fast EPSPs/EPCs.",
      "“Electrical synapses via connexins” does not match the mechanism (topic: Receptor Types). Nicotinic ACh receptors are classic ionotropic receptors mediating fast EPSPs/EPCs. The correct choice—“Ionotropic”—fits that description.",
      "“Voltage-gated chloride channels” does not match the mechanism (topic: Receptor Types). Nicotinic ACh receptors are classic ionotropic receptors mediating fast EPSPs/EPCs. The correct choice—“Ionotropic”—fits that description.",
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
      "“Is completely myelinated along its entire length (ignores how EPSPs/IPSPs sum in tim…” does not match the mechanism (topic: Synaptic Integration). Channel density and geometry make the AIS the spike trigger zone. The correct choice—“Has a high density of voltage-gated Na⁺ channels and low threshold”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Channel density and geometry make the AIS the spike trigger zone.",
      "“Lacks voltage-gated channels entirely (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Channel density and geometry make the AIS the spike trigger zone. The correct choice—“Has a high density of voltage-gated Na⁺ channels and low threshold”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Recurrent inhibition occurs when:",
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
      "“Myelin thickness alone determines saltatory conduction velocity” does not match the mechanism (topic: Neural Circuits). Recurrent loops regulate excitability and stabilize network activity. The correct choice—“An output neuron activates an interneuron that feeds back onto itself or its pool”—fits that description.",
      "“Electrical synapses replace all chemical synapses” does not match the mechanism (topic: Neural Circuits). Recurrent loops regulate excitability and stabilize network activity. The correct choice—“An output neuron activates an interneuron that feeds back onto itself or its pool”—fits that description.",
      "“The circuit contains no interneurons” does not match the mechanism (topic: Neural Circuits). Recurrent loops regulate excitability and stabilize network activity. The correct choice—“An output neuron activates an interneuron that feeds back onto itself or its pool”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates striatal circuits primarily through:",
    options: [
      "Metabotropic D1 and D2 receptors altering cAMP and channel activity",
      "Direct ionotropic pores with millisecond kinetics only",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rod convergence and high photopigment density support scotopic vision.",
      "“They lack cGMP-gated channels” does not match the mechanism (topic: Visual System). Rod convergence and high photopigment density support scotopic vision. The correct choice—“They express higher levels of photopigment and converge on bipolar cells”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rod convergence and high photopigment density support scotopic vision.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cones support photopic, color vision with high spatial resolution in the fovea.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cones support photopic, color vision with high spatial resolution in the fovea.",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Tip-link coupling opens mechanotransduction channels in hair cells.",
      "“Expressing olfactory receptors” does not match the mechanism (topic: Auditory System). Tip-link coupling opens mechanotransduction channels in hair cells. The correct choice—“Mechanically gating ion channels via stereocilia deflection”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The tectorial membrane in the cochlea:",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Merkel endings provide high spatial acuity for sustained touch.",
      "“Photons of light” does not match the mechanism (topic: Somatosensation). Merkel endings provide high spatial acuity for sustained touch. The correct choice—“Sustained pressure and texture (slowly adapting)”—fits that description.",
      "“Odorant molecules in the nasal epithelium” does not match the mechanism (topic: Somatosensation). Merkel endings provide high spatial acuity for sustained touch. The correct choice—“Sustained pressure and texture (slowly adapting)”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gray matter is rich in neuronal somata and synaptic neuropil.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gray matter is rich in neuronal somata and synaptic neuropil.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Choroid plexus secretes CSF into the ventricular system.",
      "“Synaptic vesicles in the cleft (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). Choroid plexus secretes CSF into the ventricular system. The correct choice—“Choroid plexus epithelium in the ventricles”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Declarative (explicit) memory depends on hippocampal and related cortical systems.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Declarative (explicit) memory depends on hippocampal and related cortical systems.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory temporarily maintains information through:",
    options: [
      "Sustained activity in prefrontal and related cortical circuits",
      "Permanent structural changes in muscle spindles only",
      "Photoreceptor bleaching exclusively",
      "Elimination of all synaptic connections within seconds",
    ],
    correct: 0,
    explanation: "Persistent firing and recurrent circuits support short-term maintenance.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Persistent firing and recurrent circuits support short-term maintenance.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Elimination of all synaptic connections within seconds” does not match the mechanism (topic: Learning & Memory). Persistent firing and recurrent circuits support short-term maintenance. The correct choice—“Sustained activity in prefrontal and related cortical circuits”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Olfactory sensory neurons regenerate throughout life in mammals because:",
    options: [
      "They are continually replaced from basal stem cells in the epithelium",
      "They are identical to cortical pyramidal cells",
      "They never express receptors",
      "They are myelinated peripheral axons only",
    ],
    correct: 0,
    explanation: "OSN turnover maintains the olfactory epithelium despite environmental damage.",
    wrongExplanations: [
      "",
      "“They are identical to cortical pyramidal cells” does not match the mechanism (topic: Olfactory System). OSN turnover maintains the olfactory epithelium despite environmental damage. The correct choice—“They are continually replaced from basal stem cells in the epithelium”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OSN turnover maintains the olfactory epithelium despite environmental damage.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OSN turnover maintains the olfactory epithelium despite environmental damage.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Corticospinal and related pathways carry commands from cortex to lower motor neurons.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Corticospinal and related pathways carry commands from cortex to lower motor neurons.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most sensory and motor pathways decussate, mapping contralateral body sides.",
      "“No decussation occurs in any pathway” does not match the mechanism (topic: Brain Function). Most sensory and motor pathways decussate, mapping contralateral body sides. The correct choice—“Left body side projects largely to right hemisphere”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most sensory and motor pathways decussate, mapping contralateral body sides.",
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
      "“Na⁺” does not match the mechanism (topic: Resting Potential). Dominant K⁺ leak conductance makes resting V_m lie near E_K in typical neurons. The correct choice—“K⁺”—fits that description.",
      "“Ca²⁺” does not match the mechanism (topic: Resting Potential). Dominant K⁺ leak conductance makes resting V_m lie near E_K in typical neurons. The correct choice—“K⁺”—fits that description.",
      "“Mg²⁺” does not match the mechanism (topic: Resting Potential). Dominant K⁺ leak conductance makes resting V_m lie near E_K in typical neurons. The correct choice—“K⁺”—fits that description.",
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
      "“Negative (inside relative to outside)” does not match the mechanism (topic: Nernst Equation). A concentration gradient favoring inward flux for a cation yields a positive equilibrium potential. The correct choice—“Positive (inside relative to outside)”—fits that description.",
      "Equilibrium potentials depend on concentrations; they are not fixed at 0 mV for every ion.",
      "“Undefined without temperature” does not match the mechanism (topic: Nernst Equation). A concentration gradient favoring inward flux for a cation yields a positive equilibrium potential. The correct choice—“Positive (inside relative to outside)”—fits that description.",
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
      "“Pump ions against gradients” does not match the mechanism (topic: Passive Membrane Properties). The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m. The correct choice—“Store charge across the lipid bilayer”—fits that description.",
      "“Generate action potentials without channels” does not match the mechanism (topic: Passive Membrane Properties). The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m. The correct choice—“Store charge across the lipid bilayer”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m.",
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
      "“Subthreshold stimuli produce larger spikes than threshold stimuli” does not match the mechanism (topic: Action Potentials). Once threshold is reached, regenerative Na⁺ current produces a stereotyped full spike. The correct choice—“Suprathreshold stimuli produce full-amplitude spikes”—fits that description.",
      "“Spike amplitude scales linearly with stimulus strength above threshold” does not match the mechanism (topic: Action Potentials). Once threshold is reached, regenerative Na⁺ current produces a stereotyped full spike. The correct choice—“Suprathreshold stimuli produce full-amplitude spikes”—fits that description.",
      "“Each channel opens partially in proportion to stimulus” does not match the mechanism (topic: Action Potentials). Once threshold is reached, regenerative Na⁺ current produces a stereotyped full spike. The correct choice—“Suprathreshold stimuli produce full-amplitude spikes”—fits that description.",
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
      "“Passive spread alone carries the full spike amplitude indefinitely” does not match the mechanism (topic: Action Potential Propagation). Active regeneration at each point along the axon maintains spike amplitude during propagation. The correct choice—“Each depolarized segment actively regenerates the spike in adjacent membrane”—fits that description.",
      "“Myelin eliminates the need for ion channels (misapplies how active propagation uses …” does not match the mechanism (topic: Action Potential Propagation). Active regeneration at each point along the axon maintains spike amplitude during propagation. The correct choice—“Each depolarized segment actively regenerates the spike in adjacent membrane”—fits that description.",
      "“The Na⁺/K⁺ pump propagates voltage directly (misapplies how active propagation uses …” does not match the mechanism (topic: Action Potential Propagation). Active regeneration at each point along the axon maintains spike amplitude during propagation. The correct choice—“Each depolarized segment actively regenerates the spike in adjacent membrane”—fits that description.",
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
      "“Less negative than at rest” does not match the mechanism (topic: Electrical Signaling). Hyperpolarization is a shift to a more negative V_m relative to rest. The correct choice—“More negative than at rest”—fits that description.",
      "“Exactly 0 mV” does not match the mechanism (topic: Electrical Signaling). Hyperpolarization is a shift to a more negative V_m relative to rest. The correct choice—“More negative than at rest”—fits that description.",
      "“Equal to E_Na” does not match the mechanism (topic: Electrical Signaling). Hyperpolarization is a shift to a more negative V_m relative to rest. The correct choice—“More negative than at rest”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Chemical synapses transmit via neurotransmitter diffusion across the cleft to postsynaptic receptors.",
      "“Two dendrites connected by connexins” does not match the mechanism (topic: Chemical Synapses). Chemical synapses transmit via neurotransmitter diffusion across the cleft to postsynaptic receptors. The correct choice—“Presynaptic terminal and postsynaptic membrane”—fits that description.",
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
      "“An action potential in the postsynaptic cell (mixes up presynaptic release with post…” does not match the mechanism (topic: Synaptic Transmission). Spontaneous quantal release produces discrete mEPSPs corresponding to single vesicle events. The correct choice—“Postsynaptic response to spontaneous release of one vesicle”—fits that description.",
      "“Passive spread from a neighboring axon without receptors” does not match the mechanism (topic: Synaptic Transmission). Spontaneous quantal release produces discrete mEPSPs corresponding to single vesicle events. The correct choice—“Postsynaptic response to spontaneous release of one vesicle”—fits that description.",
      "“Pump activity in the presynaptic terminal (mixes up presynaptic release with postsyn…” does not match the mechanism (topic: Synaptic Transmission). Spontaneous quantal release produces discrete mEPSPs corresponding to single vesicle events. The correct choice—“Postsynaptic response to spontaneous release of one vesicle”—fits that description.",
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
      "“Direct ion pore opening without intermediates” does not match the mechanism (topic: Receptor Types). Metabotropic receptors activate G proteins that modulate channels and enzymes via second messengers. The correct choice—“G proteins and second-messenger cascades”—fits that description.",
      "“Voltage sensors in the S4 segment” does not match the mechanism (topic: Receptor Types). Metabotropic receptors activate G proteins that modulate channels and enzymes via second messengers. The correct choice—“G proteins and second-messenger cascades”—fits that description.",
      "“SNARE proteins for exocytosis” does not match the mechanism (topic: Receptor Types). Metabotropic receptors activate G proteins that modulate channels and enzymes via second messengers. The correct choice—“G proteins and second-messenger cascades”—fits that description.",
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
      "“Opening Na⁺ channels at the axon hillock (ignores how EPSPs/IPSPs sum in time or spa…” does not match the mechanism (topic: Synaptic Integration). Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs. The correct choice—“Lowering input resistance and diverting current”—fits that description.",
      "“Increasing length constant indefinitely (ignores how EPSPs/IPSPs sum in time or spac…” does not match the mechanism (topic: Synaptic Integration). Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs. The correct choice—“Lowering input resistance and diverting current”—fits that description.",
      "“Blocking the Na⁺/K⁺ pump (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs. The correct choice—“Lowering input resistance and diverting current”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Lateral inhibition in sensory systems serves to:",
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
      "“Eliminate all spontaneous activity” does not match the mechanism (topic: Neural Circuits). Lateral inhibition sharpens stimulus representation by suppressing adjacent channels or cells. The correct choice—“Enhance contrast between active and neighboring regions”—fits that description.",
      "“Convert chemical to electrical synapses” does not match the mechanism (topic: Neural Circuits). Lateral inhibition sharpens stimulus representation by suppressing adjacent channels or cells. The correct choice—“Enhance contrast between active and neighboring regions”—fits that description.",
      "“Block all feedforward input” does not match the mechanism (topic: Neural Circuits). Lateral inhibition sharpens stimulus representation by suppressing adjacent channels or cells. The correct choice—“Enhance contrast between active and neighboring regions”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Volume transmission describes neuromodulator signaling that:",
    options: [
      "Diffuses broadly rather than point-to-point across a single cleft",
      "Requires electrical synapses exclusively",
      "Occurs only at the neuromuscular junction",
      "Uses voltage-gated Na⁺ channels as receptors",
    ],
    correct: 0,
    explanation: "Neuromodulators can act on many targets via diffuse extracellular spread.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators can act on many targets via diffuse extracellular spread.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Neuromodulators can act on many targets via diffuse extracellular spread.",
      "“Uses voltage-gated Na⁺ channels as receptors” does not match the mechanism (topic: Neuromodulation). Neuromodulators can act on many targets via diffuse extracellular spread. The correct choice—“Diffuses broadly rather than point-to-point across a single cleft”—fits that description.",
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
      "“Myelin wraps for saltatory conduction” does not match the mechanism (topic: Visual System). Rod and cone outer segments house photopigment in stacked membranous disks for light capture. The correct choice—“Membrane disks with photopigment molecules”—fits that description.",
      "“Voltage-gated Na⁺ channels for spiking” does not match the mechanism (topic: Visual System). Rod and cone outer segments house photopigment in stacked membranous disks for light capture. The correct choice—“Membrane disks with photopigment molecules”—fits that description.",
      "“Hair cell stereocilia and tip links” does not match the mechanism (topic: Visual System). Rod and cone outer segments house photopigment in stacked membranous disks for light capture. The correct choice—“Membrane disks with photopigment molecules”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The basilar membrane in the cochlea is tonotopically organized such that:",
    options: [
      "High frequencies peak near the base and low frequencies near the apex",
      "All frequencies activate the same location equally",
      "Low frequencies peak at the base only",
      "Sound intensity alone determines location without frequency",
    ],
    correct: 0,
    explanation: "Mechanical properties vary along the cochlea, mapping frequency to position (tonotopy).",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Sound intensity alone determines location without frequency” does not match the mechanism (topic: Auditory System). Mechanical properties vary along the cochlea, mapping frequency to position (tonotopy). The correct choice—“High frequencies peak near the base and low frequencies near the apex”—fits that description.",
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
      "“High-frequency vibration at Pacinian frequency” does not match the mechanism (topic: Somatosensation). Free nerve endings are nociceptors and thermoreceptors for pain and temperature. The correct choice—“Pain and temperature”—fits that description.",
      "“Sustained pressure with Merkel-like precision” does not match the mechanism (topic: Somatosensation). Free nerve endings are nociceptors and thermoreceptors for pain and temperature. The correct choice—“Pain and temperature”—fits that description.",
      "“Photons of visible light” does not match the mechanism (topic: Somatosensation). Free nerve endings are nociceptors and thermoreceptors for pain and temperature. The correct choice—“Pain and temperature”—fits that description.",
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
      "“All receptor genes simultaneously” does not match the mechanism (topic: Olfactory System). One-receptor-per-neuron rule supports combinatorial odor coding in the bulb. The correct choice—“One functional odor receptor type”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
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
      "“Neuronal cell bodies and dendrites” does not match the mechanism (topic: Neuroanatomy). White matter is dominated by myelinated axon bundles connecting brain regions. The correct choice—“Myelinated axons”—fits that description.",
      "“Synaptic cleft fluid” does not match the mechanism (topic: Neuroanatomy). White matter is dominated by myelinated axon bundles connecting brain regions. The correct choice—“Myelinated axons”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower motor neurons in brainstem and spinal cord synapse on skeletal muscle.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory bulb mitral cells” does not match the mechanism (topic: Motor Systems). Lower motor neurons in brainstem and spinal cord synapse on skeletal muscle. The correct choice—“Skeletal muscle fibers”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor and procedural learning engages basal ganglia and cerebellar circuits.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The thalamus functions primarily as:",
    options: [
      "A relay station for sensory information to cortex",
      "The sole site of phototransduction",
      "The origin of cerebrospinal fluid",
      "The only location of action potential initiation",
    ],
    correct: 0,
    explanation: "Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex.",
    wrongExplanations: [
      "",
      "“The sole site of phototransduction” does not match the mechanism (topic: Brain Function). Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex. The correct choice—“A relay station for sensory information to cortex”—fits that description.",
      "“The origin of cerebrospinal fluid” does not match the mechanism (topic: Brain Function). Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex. The correct choice—“A relay station for sensory information to cortex”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexons in gap junctions are composed of:",
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
      "“SNARE complexes for vesicle fusion” does not match the mechanism (topic: Electrical Synapses). Six connexins assemble into a connexon hemichannel that aligns with a partner cell. The correct choice—“Connexin proteins forming intercellular pores”—fits that description.",
      "“Rhodopsin molecules” does not match the mechanism (topic: Electrical Synapses). Six connexins assemble into a connexon hemichannel that aligns with a partner cell. The correct choice—“Connexin proteins forming intercellular pores”—fits that description.",
      "“Voltage-gated Na⁺ channel alpha subunits” does not match the mechanism (topic: Electrical Synapses). Six connexins assemble into a connexon hemichannel that aligns with a partner cell. The correct choice—“Connexin proteins forming intercellular pores”—fits that description.",
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
      "“Adenylyl cyclase” does not match the mechanism (topic: Second Messengers). Phosphodiesterase breaks down cAMP, terminating G-protein-coupled signaling. The correct choice—“Phosphodiesterase”—fits that description.",
      "“Protein kinase A directly without enzymes” does not match the mechanism (topic: Second Messengers). Phosphodiesterase breaks down cAMP, terminating G-protein-coupled signaling. The correct choice—“Phosphodiesterase”—fits that description.",
      "“Voltage-gated K⁺ channels” does not match the mechanism (topic: Second Messengers). Phosphodiesterase breaks down cAMP, terminating G-protein-coupled signaling. The correct choice—“Phosphodiesterase”—fits that description.",
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
      "“Cl⁻ is impermeant at all times (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Cl⁻ transporters and leak conductance often place E_Cl close to resting potential. The correct choice—“Cl⁻ channels passively set V_Cl near rest via transporter activity”—fits that description.",
      "“The Na⁺/K⁺ pump excludes all Cl⁻ from the cell (ignores which ion dominates resting …” does not match the mechanism (topic: Resting Potential). Cl⁻ transporters and leak conductance often place E_Cl close to resting potential. The correct choice—“Cl⁻ channels passively set V_Cl near rest via transporter activity”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cl⁻ transporters and leak conductance often place E_Cl close to resting potential.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: TTX selectively blocks the pore of voltage-gated Na⁺ channels.",
      "“Nicotinic receptors at the neuromuscular junction” does not match the mechanism (topic: Action Potentials). TTX selectively blocks the pore of voltage-gated Na⁺ channels. The correct choice—“Voltage-gated Na⁺ channels”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively blocks the pore of voltage-gated Na⁺ channels.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool.",
      "“Postsynaptic receptors into the cleft (mixes up presynaptic release with postsynapti…” does not match the mechanism (topic: Synaptic Transmission). Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool. The correct choice—“Membrane and vesicle components after exocytosis”—fits that description.",
      "“Myelin wraps from adjacent internodes (mixes up presynaptic release with postsynapti…” does not match the mechanism (topic: Synaptic Transmission). Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool. The correct choice—“Membrane and vesicle components after exocytosis”—fits that description.",
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
      "“Saltatory conduction in optic nerve” does not match the mechanism (topic: Visual System). Horizontal cells mediate lateral inhibition between photoreceptors and bipolar cells. The correct choice—“Lateral inhibition and contrast enhancement”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory combinatorial coding” does not match the mechanism (topic: Visual System). Horizontal cells mediate lateral inhibition between photoreceptors and bipolar cells. The correct choice—“Lateral inhibition and contrast enhancement”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outer hair cell electromotility actively boosts cochlear amplification.",
      "“Expressing rhodopsin for dim-light hearing” does not match the mechanism (topic: Auditory System). Outer hair cell electromotility actively boosts cochlear amplification. The correct choice—“Electromotility that amplifies basilar membrane motion”—fits that description.",
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
      "“Nodes of Ranvier in peripheral nerve (localizes the function to the wrong brain regi…” does not match the mechanism (topic: Neuroanatomy). Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue. The correct choice—“CNS capillary endothelial tight junctions”—fits that description.",
      "“Synaptic clefts of all chemical synapses” does not match the mechanism (topic: Neuroanatomy). Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue. The correct choice—“CNS capillary endothelial tight junctions”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Long-term potentiation (LTP) is defined as:",
    options: [
      "A persistent increase in synaptic strength after high-frequency stimulation",
      "Permanent elimination of all inhibitory synapses",
      "A decrease in quantal size after one mEPSP",
      "Passive decay of EPSPs along dendrites only",
    ],
    correct: 0,
    explanation: "LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses.",
    wrongExplanations: [
      "",
      "“Permanent elimination of all inhibitory synapses” does not match the mechanism (topic: Learning & Memory). LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses. The correct choice—“A persistent increase in synaptic strength after high-frequency stimulation”—fits that description.",
      "“A decrease in quantal size after one mEPSP” does not match the mechanism (topic: Learning & Memory). LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses. The correct choice—“A persistent increase in synaptic strength after high-frequency stimulation”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses.",
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
      "“Become more negative indefinitely without limit” does not match the mechanism (topic: Resting Potential). Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV. The correct choice—“Move toward 0 mV as gradients collapse”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV.",
      "“Prevent all action potentials by hyperpolarizing above 0 mV” does not match the mechanism (topic: Resting Potential). Without active transport, Na⁺ and K⁺ gradients dissipate and V_m drifts toward 0 mV. The correct choice—“Move toward 0 mV as gradients collapse”—fits that description.",
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
      "“+60 mV (positive inside)” does not match the mechanism (topic: Nernst Equation). A large inward K⁺ gradient yields a strongly negative E_K. The correct choice—“−95 mV (negative inside)”—fits that description.",
      "“0 mV” does not match the mechanism (topic: Nernst Equation). A large inward K⁺ gradient yields a strongly negative E_K. The correct choice—“−95 mV (negative inside)”—fits that description.",
      "“+120 mV” does not match the mechanism (topic: Nernst Equation). A large inward K⁺ gradient yields a strongly negative E_K. The correct choice—“−95 mV (negative inside)”—fits that description.",
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
      "“Decrease λ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); larger diameter lowers R_i and lengthens λ. The correct choice—“Increase λ and extend passive spread”—fits that description.",
      "“Prevent all EPSP summation (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); larger diameter lowers R_i and lengthens λ. The correct choice—“Increase λ and extend passive spread”—fits that description.",
      "“Block voltage-gated channels (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); larger diameter lowers R_i and lengthens λ. The correct choice—“Increase λ and extend passive spread”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High input resistance yields larger voltage deflections for a given current.",
      "“The number of olfactory glomeruli activated (misstates how R_m, C_m, or geometry set…” does not match the mechanism (topic: Passive Membrane Properties). High input resistance yields larger voltage deflections for a given current. The correct choice—“The voltage change per unit injected current (inverse of conductance)”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. High input resistance yields larger voltage deflections for a given current.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The relative refractory period follows the absolute refractory period and is characterized by:",
    options: [
      "Higher threshold and reduced spike amplitude possible",
      "Complete inability to fire under any stimulus",
      "Permanent channel removal",
      "Requires hyperpolarization below −120 mV",
    ],
    correct: 0,
    explanation: "Partial recovery of Na channels requires stronger stimuli and can yield smaller spikes.",
    wrongExplanations: [
      "",
      "“Complete inability to fire under any stimulus” does not match the mechanism (topic: Action Potentials). Partial recovery of Na channels requires stronger stimuli and can yield smaller spikes. The correct choice—“Higher threshold and reduced spike amplitude possible”—fits that description.",
      "“Permanent channel removal” does not match the mechanism (topic: Action Potentials). Partial recovery of Na channels requires stronger stimuli and can yield smaller spikes. The correct choice—“Higher threshold and reduced spike amplitude possible”—fits that description.",
      "“Requires hyperpolarization below −120 mV” does not match the mechanism (topic: Action Potentials). Partial recovery of Na channels requires stronger stimuli and can yield smaller spikes. The correct choice—“Higher threshold and reduced spike amplitude possible”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Smaller diameter raises R_i, slowing passive and active propagation.",
      "“Has no effect on conduction (misapplies how active propagation uses local circuit cu…” does not match the mechanism (topic: Action Potential Propagation). Smaller diameter raises R_i, slowing passive and active propagation. The correct choice—“Slows conduction velocity by increasing internal resistance”—fits that description.",
      "“Converts saltatory to continuous conduction (misapplies how active propagation uses …” does not match the mechanism (topic: Action Potential Propagation). Smaller diameter raises R_i, slowing passive and active propagation. The correct choice—“Slows conduction velocity by increasing internal resistance”—fits that description.",
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
      "“Postsynaptic AMPA receptor density (describes the wrong synaptic structure or transm…” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ influx is the immediate trigger for vesicle fusion. The correct choice—“Neurotransmitter release probability”—fits that description.",
      "“Axonal myelin thickness (describes the wrong synaptic structure or transmission step)” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ influx is the immediate trigger for vesicle fusion. The correct choice—“Neurotransmitter release probability”—fits that description.",
      "“Retinal phototransduction (describes the wrong synaptic structure or transmission st…” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ influx is the immediate trigger for vesicle fusion. The correct choice—“Neurotransmitter release probability”—fits that description.",
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
      "“Open voltage-gated Na⁺ channels in the cleft (mixes up presynaptic release with post…” does not match the mechanism (topic: Synaptic Transmission). Reuptake limits spillover and resets the synapse for subsequent release. The correct choice—“Terminate synaptic signaling by clearing transmitter from the cleft”—fits that description.",
      "“Phosphorylate CREB in the nucleus directly (mixes up presynaptic release with postsy…” does not match the mechanism (topic: Synaptic Transmission). Reuptake limits spillover and resets the synapse for subsequent release. The correct choice—“Terminate synaptic signaling by clearing transmitter from the cleft”—fits that description.",
      "“Generate myelin around the synapse (mixes up presynaptic release with postsynaptic r…” does not match the mechanism (topic: Synaptic Transmission). Reuptake limits spillover and resets the synapse for subsequent release. The correct choice—“Terminate synaptic signaling by clearing transmitter from the cleft”—fits that description.",
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
      "“Directly form a cation pore with no G-proteins” does not match the mechanism (topic: Receptor Types). Muscarinic receptors act through G-proteins to modulate channel activity and second messengers. The correct choice—“Modulate K or Ca channels via G-proteins”—fits that description.",
      "“Replace SNARE proteins in vesicle fusion” does not match the mechanism (topic: Receptor Types). Muscarinic receptors act through G-proteins to modulate channel activity and second messengers. The correct choice—“Modulate K or Ca channels via G-proteins”—fits that description.",
      "“Generate saltatory conduction” does not match the mechanism (topic: Receptor Types). Muscarinic receptors act through G-proteins to modulate channel activity and second messengers. The correct choice—“Modulate K or Ca channels via G-proteins”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "IPSPs mediated by K⁺ channels opened via G-proteins occur when:",
    options: [
      "E_K is below rest and opening channels hyperpolarizes or stabilizes V_m",
      "E_K is above rest always",
      "No G-proteins exist in neurons",
      "Requires photoreceptors express G-proteins",
    ],
    correct: 0,
    explanation: "G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
      "“No G-proteins exist in neurons” does not match the mechanism (topic: Receptor Types). G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition. The correct choice—“E_K is below rest and opening channels hyperpolarizes or stabilizes V_m”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. G-protein–gated K⁺ channels pass K⁺ outward when E_K is negative to V_m, producing inhibition.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Increased conductance (shunting) reduces the voltage response to a given synaptic current.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Lateral inhibition in sensory systems enhances contrast by:",
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
      "“Amplifying uniform background equally everywhere” does not match the mechanism (topic: Neural Circuits). Lateral inhibition sharpens stimulus boundaries by suppressing adjacent inactive regions. The correct choice—“Suppressing neighboring channels when one is strongly activated”—fits that description.",
      "“Eliminating all inhibition in the circuit” does not match the mechanism (topic: Neural Circuits). Lateral inhibition sharpens stimulus boundaries by suppressing adjacent inactive regions. The correct choice—“Suppressing neighboring channels when one is strongly activated”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Lateral inhibition sharpens stimulus boundaries by suppressing adjacent inactive regions.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulatory effects can persist longer than fast synaptic potentials because:",
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
      "“Ionotropic channels remain open indefinitely” does not match the mechanism (topic: Neuromodulation). Metabotropic signaling engages biochemical cascades with slower decay kinetics. The correct choice—“Second-messenger cascades and kinase activity outlast the initial signal”—fits that description.",
      "“Action potentials stop permanently” does not match the mechanism (topic: Neuromodulation). Metabotropic signaling engages biochemical cascades with slower decay kinetics. The correct choice—“Second-messenger cascades and kinase activity outlast the initial signal”—fits that description.",
      "“Myelin is degraded after each spike” does not match the mechanism (topic: Neuromodulation). Metabotropic signaling engages biochemical cascades with slower decay kinetics. The correct choice—“Second-messenger cascades and kinase activity outlast the initial signal”—fits that description.",
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
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization.",
      "“They are electrically coupled to Pacinian corpuscles” does not match the mechanism (topic: Visual System). Sign-inverting metabotropic signaling in ON bipolars inverts photoreceptor hyperpolarization. The correct choice—“They express metabotropic glutamate receptors that close TRPM1 channels in ON pathwa…”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The organ of Corti sits on the basilar membrane, which vibrates maximally at:",
    options: [
      "Different positions for different sound frequencies",
      "One fixed position for all frequencies",
      "The olfactory epithelium",
      "The corpus callosum exclusively",
    ],
    correct: 0,
    explanation: "Mechanical properties vary along the cochlea, creating tonotopy.",
    wrongExplanations: [
      "",
      "“One fixed position for all frequencies” does not match the mechanism (topic: Auditory System). Mechanical properties vary along the cochlea, creating tonotopy. The correct choice—“Different positions for different sound frequencies”—fits that description.",
      "“The olfactory epithelium” does not match the mechanism (topic: Auditory System). Mechanical properties vary along the cochlea, creating tonotopy. The correct choice—“Different positions for different sound frequencies”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Mechanical properties vary along the cochlea, creating tonotopy.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Polymodal nociceptors and thermoreceptors use free nerve endings.",
      "“Auditory frequency place coding” does not match the mechanism (topic: Somatosensation). Polymodal nociceptors and thermoreceptors use free nerve endings. The correct choice—“Pain and temperature”—fits that description.",
      "“Declarative memory consolidation” does not match the mechanism (topic: Somatosensation). Polymodal nociceptors and thermoreceptors use free nerve endings. The correct choice—“Pain and temperature”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Anterolateral pathways convey nociceptive and thermal information.",
      "“Visual information from retina” does not match the mechanism (topic: Somatosensation). Anterolateral pathways convey nociceptive and thermal information. The correct choice—“Pain and temperature to the thalamus”—fits that description.",
      "“Dopamine from substantia nigra to striatum” does not match the mechanism (topic: Somatosensation). Anterolateral pathways convey nociceptive and thermal information. The correct choice—“Pain and temperature to the thalamus”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lipid-rich myelin gives white matter its light appearance.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lipid-rich myelin gives white matter its light appearance.",
      "“Photopigments absorb all wavelengths (localizes the function to the wrong brain regi…” does not match the mechanism (topic: Neuroanatomy). Lipid-rich myelin gives white matter its light appearance. The correct choice—“Myelin sheaths around axons scatter light”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (e.g., riding a bicycle) relies more on:",
    options: [
      "Basal ganglia and cerebellum among other motor circuits",
      "The optic disc exclusively",
      "Olfactory glomeruli only",
      "The node of Ranvier exclusively",
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
    question: "Glomeruli in the olfactory bulb represent:",
    options: [
      "Convergence of OSNs expressing the same receptor type",
      "Tonotopic frequency bands from the cochlea",
      "Center-surround retinal ganglion fields only",
      "Nodes of Ranvier in peripheral nerves",
    ],
    correct: 0,
    explanation: "Each glomerulus receives input from OSNs expressing one receptor type.",
    wrongExplanations: [
      "",
      "“Tonotopic frequency bands from the cochlea” does not match the mechanism (topic: Olfactory System). Each glomerulus receives input from OSNs expressing one receptor type. The correct choice—“Convergence of OSNs expressing the same receptor type”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each glomerulus receives input from OSNs expressing one receptor type.",
      "“Nodes of Ranvier in peripheral nerves” does not match the mechanism (topic: Olfactory System). Each glomerulus receives input from OSNs expressing one receptor type. The correct choice—“Convergence of OSNs expressing the same receptor type”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower motor neurons form the final common path to muscle.",
      "“Transduce sound in the cochlea (maps the lesion to the wrong motor pathway or reflex)” does not match the mechanism (topic: Motor Systems). Lower motor neurons form the final common path to muscle. The correct choice—“Directly innervate skeletal muscle fibers”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower motor neurons form the final common path to muscle.",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input.",
      "“Olfactory sensory neurons with one receptor each” does not match the mechanism (topic: Motor Systems). Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input. The correct choice—“Purkinje cells, granule cells, and parallel fibers”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar microcircuitry includes Purkinje cells receiving parallel fiber input.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Prefrontal circuits support working memory, planning, and cognitive control.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Prefrontal circuits support working memory, planning, and cognitive control.",
      "“Direct release of ACh at the neuromuscular junction from OSNs” does not match the mechanism (topic: Brain Function). Prefrontal circuits support working memory, planning, and cognitive control. The correct choice—“Working memory and executive control of behavior”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Amygdalar circuits associate stimuli with emotional significance.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Amygdalar circuits associate stimuli with emotional significance.",
      "“Saltatory conduction velocity measurement” does not match the mechanism (topic: Brain Function). Amygdalar circuits associate stimuli with emotional significance. The correct choice—“Emotional processing and fear learning”—fits that description.",
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
      "“Toward E_K (more negative)” does not match the mechanism (topic: Resting Potential). Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability. The correct choice—“Toward E_Na (less negative)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability.",
      "“Away from both equilibrium potentials equally” does not match the mechanism (topic: Resting Potential). Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability. The correct choice—“Toward E_Na (less negative)”—fits that description.",
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
      "“More positive (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). Higher internal Na⁺ reduces the inward driving force, lowering E_Na. The correct choice—“Less positive (closer to 0 mV)”—fits that description.",
      "“Equal to E_K (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). Higher internal Na⁺ reduces the inward driving force, lowering E_Na. The correct choice—“Less positive (closer to 0 mV)”—fits that description.",
      "“Independent of Na⁺ gradients (contradicts the Nernst dependence on inside/outside co…” does not match the mechanism (topic: Nernst Equation). Higher internal Na⁺ reduces the inward driving force, lowering E_Na. The correct choice—“Less positive (closer to 0 mV)”—fits that description.",
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
      "“Halve the time constant τ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m and input resistance scale with R_m. The correct choice—“Double the time constant τ and increase input resistance”—fits that description.",
      "“Have no effect on passive properties (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m and input resistance scale with R_m. The correct choice—“Double the time constant τ and increase input resistance”—fits that description.",
      "“Prevent spatial summation entirely (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m and input resistance scale with R_m. The correct choice—“Double the time constant τ and increase input resistance”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is driven mainly by:",
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
      "“Continued Na⁺ influx” does not match the mechanism (topic: Action Potentials). Delayed-rectifier (n-type) K⁺ efflux plus Ca²⁺-activated K⁺ channels (after Ca²⁺ influx) hyperpolarize the membrane below rest. The correct choice—“Delayed-rectifier K⁺ channels and Ca²⁺-activated K⁺ channels”—fits that description.",
      "“Opening of ligand-gated AMPA receptors” does not match the mechanism (topic: Action Potentials). Delayed-rectifier (n-type) K⁺ efflux plus Ca²⁺-activated K⁺ channels (after Ca²⁺ influx) hyperpolarize the membrane below rest. The correct choice—“Delayed-rectifier K⁺ channels and Ca²⁺-activated K⁺ channels”—fits that description.",
      "“Electrogenic pump reversal” does not match the mechanism (topic: Action Potentials). Delayed-rectifier (n-type) K⁺ efflux plus Ca²⁺-activated K⁺ channels (after Ca²⁺ influx) hyperpolarize the membrane below rest. The correct choice—“Delayed-rectifier K⁺ channels and Ca²⁺-activated K⁺ channels”—fits that description.",
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
      "“Internodal myelin wraps” does not match the mechanism (topic: Action Potential Propagation). Na⁺ channels cluster at nodes where action potentials are actively regenerated. The correct choice—“Nodes of Ranvier”—fits that description.",
      "“Dendritic spines” does not match the mechanism (topic: Action Potential Propagation). Na⁺ channels cluster at nodes where action potentials are actively regenerated. The correct choice—“Nodes of Ranvier”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Na⁺ channels cluster at nodes where action potentials are actively regenerated.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
      "“Reverse sign without changing magnitude” does not match the mechanism (topic: Electrical Signaling). Ohmic ion current scales with conductance times driving force (V_m − E_ion). The correct choice—“Increase in magnitude if V_m ≠ E_Na”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ohmic ion current scales with conductance times driving force (V_m − E_ion).",
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
      "“Voltage-gated Na⁺ channel subunit (describes the wrong synaptic structure or transmi…” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ binding to synaptotagmin triggers SNARE-mediated fusion. The correct choice—“Ca²⁺ sensor triggering fast exocytosis”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ binding to synaptotagmin triggers SNARE-mediated fusion.",
      "“Myelin structural protein (describes the wrong synaptic structure or transmission st…” does not match the mechanism (topic: Chemical Synapses). Ca²⁺ binding to synaptotagmin triggers SNARE-mediated fusion. The correct choice—“Ca²⁺ sensor triggering fast exocytosis”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release probability is steeply dependent on presynaptic Ca²⁺ concentration.",
      "“Postsynaptic receptor number to increase instantly” does not match the mechanism (topic: Synaptic Transmission). Release probability is steeply dependent on presynaptic Ca²⁺ concentration. The correct choice—“Lower probability of vesicle release”—fits that description.",
      "“Conversion of IPSPs to action potentials in the axon” does not match the mechanism (topic: Synaptic Transmission). Release probability is steeply dependent on presynaptic Ca²⁺ concentration. The correct choice—“Lower probability of vesicle release”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Glycine receptors at spinal inhibitory synapses are:",
    options: [
      "Ionotropic Cl⁻ channels producing fast IPSPs",
      "Metabotropic G-protein receptors only",
      "Voltage-gated Na⁺ channels",
      "Electrical synapses via connexins",
    ],
    correct: 0,
    explanation: "Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord.",
    wrongExplanations: [
      "",
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord.",
      "“Voltage-gated Na⁺ channels” does not match the mechanism (topic: Receptor Types). Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord. The correct choice—“Ionotropic Cl⁻ channels producing fast IPSPs”—fits that description.",
      "“Electrical synapses via connexins” does not match the mechanism (topic: Receptor Types). Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord. The correct choice—“Ionotropic Cl⁻ channels producing fast IPSPs”—fits that description.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors for Hebbian plasticity.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors for Hebbian plasticity.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. NMDA receptors act as coincidence detectors for Hebbian plasticity.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Disynaptic inhibition refers to:",
    options: [
      "An inhibitory interneuron interposed between excitatory input and target",
      "Direct monosynaptic excitation only",
      "Electrical coupling without chemical synapses",
      "Recurrent excitation without inhibition",
    ],
    correct: 0,
    explanation: "Disynaptic pathways include an intermediate inhibitory neuron.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disynaptic pathways include an intermediate inhibitory neuron.",
      "“Electrical coupling without chemical synapses” does not match the mechanism (topic: Neural Circuits). Disynaptic pathways include an intermediate inhibitory neuron. The correct choice—“An inhibitory interneuron interposed between excitatory input and target”—fits that description.",
      "“Recurrent excitation without inhibition” does not match the mechanism (topic: Neural Circuits). Disynaptic pathways include an intermediate inhibitory neuron. The correct choice—“An inhibitory interneuron interposed between excitatory input and target”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: 5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. 5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
      "“Tip-link gating in hair cells” does not match the mechanism (topic: Neuromodulation). 5-HT acts through diverse metabotropic receptors altering excitability and plasticity. The correct choice—“Multiple G-protein-coupled receptor subtypes”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: ON-center cells are excited by center illumination and often inhibited by surround light.",
      "“The cochlea is stimulated by sound” does not match the mechanism (topic: Visual System). ON-center cells are excited by center illumination and often inhibited by surround light. The correct choice—“Light hits the receptive field center”—fits that description.",
      "“Odorants bind glomerular receptors” does not match the mechanism (topic: Visual System). ON-center cells are excited by center illumination and often inhibited by surround light. The correct choice—“Light hits the receptive field center”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rate coding in auditory nerve fibers conveys stimulus intensity.",
      "“Switching from rods to cones” does not match the mechanism (topic: Auditory System). Rate coding in auditory nerve fibers conveys stimulus intensity. The correct choice—“Increasing firing rate with louder stimuli”—fits that description.",
      "“Eliminating all spontaneous activity at threshold” does not match the mechanism (topic: Auditory System). Rate coding in auditory nerve fibers conveys stimulus intensity. The correct choice—“Increasing firing rate with louder stimuli”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Meissner corpuscles are rapidly adapting receptors for light touch and texture.",
      "“Light photons in scotopic conditions” does not match the mechanism (topic: Somatosensation). Meissner corpuscles are rapidly adapting receptors for light touch and texture. The correct choice—“Low-frequency flutter and texture”—fits that description.",
      "“Odorant concentration gradients” does not match the mechanism (topic: Somatosensation). Meissner corpuscles are rapidly adapting receptors for light touch and texture. The correct choice—“Low-frequency flutter and texture”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral cells in the olfactory bulb receive input from:",
    options: [
      "Olfactory sensory neuron axons in glomeruli",
      "Inner hair cells of the cochlea",
      "Retinal bipolar cells exclusively",
      "Upper motor neurons in cortex",
    ],
    correct: 0,
    explanation: "OSN axons synapse in glomeruli onto mitral/tufted cell dendrites.",
    wrongExplanations: [
      "",
      "“Inner hair cells of the cochlea” does not match the mechanism (topic: Olfactory System). OSN axons synapse in glomeruli onto mitral/tufted cell dendrites. The correct choice—“Olfactory sensory neuron axons in glomeruli”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: OSN axons synapse in glomeruli onto mitral/tufted cell dendrites.",
      "“Upper motor neurons in cortex” does not match the mechanism (topic: Olfactory System). OSN axons synapse in glomeruli onto mitral/tufted cell dendrites. The correct choice—“Olfactory sensory neuron axons in glomeruli”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most corticospinal axons cross in the medullary pyramids.",
      "“The olfactory epithelium” does not match the mechanism (topic: Neuroanatomy). Most corticospinal axons cross in the medullary pyramids. The correct choice—“The medulla (pyramids)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most corticospinal axons cross in the medullary pyramids.",
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
      "“Light intensity in the fovea” does not match the mechanism (topic: Motor Systems). Intrafusal fibers in spindles transduce stretch for proprioceptive feedback. The correct choice—“Muscle stretch and length changes”—fits that description.",
      "“Sound frequency at the cochlear base” does not match the mechanism (topic: Motor Systems). Intrafusal fibers in spindles transduce stretch for proprioceptive feedback. The correct choice—“Muscle stretch and length changes”—fits that description.",
      "“Odor identity in glomeruli” does not match the mechanism (topic: Motor Systems). Intrafusal fibers in spindles transduce stretch for proprioceptive feedback. The correct choice—“Muscle stretch and length changes”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "LTD (long-term depression) is characterized by:",
    options: [
      "Persistent decrease in synaptic strength after specific stimulation patterns",
      "Permanent block of all Na⁺ channels",
      "Increased photopigment bleaching",
      "Loss of all cochlear amplification",
    ],
    correct: 0,
    explanation: "LTD is activity-dependent weakening of synaptic efficacy, complementing LTP.",
    wrongExplanations: [
      "",
      "“Permanent block of all Na⁺ channels” does not match the mechanism (topic: Learning & Memory). LTD is activity-dependent weakening of synaptic efficacy, complementing LTP. The correct choice—“Persistent decrease in synaptic strength after specific stimulation patterns”—fits that description.",
      "“Increased photopigment bleaching” does not match the mechanism (topic: Learning & Memory). LTD is activity-dependent weakening of synaptic efficacy, complementing LTP. The correct choice—“Persistent decrease in synaptic strength after specific stimulation patterns”—fits that description.",
      "“Loss of all cochlear amplification” does not match the mechanism (topic: Learning & Memory). LTD is activity-dependent weakening of synaptic efficacy, complementing LTP. The correct choice—“Persistent decrease in synaptic strength after specific stimulation patterns”—fits that description.",
    ]
  },
  {
    topic: "Brain Function",
    question: "The primary visual cortex (V1) is organized such that:",
    options: [
      "Neighboring columns represent neighboring regions of visual space",
      "All orientations are represented in one cell only",
      "Tonotopy maps frequency to position",
      "Odor types map one-to-one to single glomeruli without overlap",
    ],
    correct: 0,
    explanation: "Retinotopic and columnar organization in V1 preserves spatial relationships from the retina.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Retinotopic and columnar organization in V1 preserves spatial relationships from the retina.",
      "“Tonotopy maps frequency to position” does not match the mechanism (topic: Brain Function). Retinotopic and columnar organization in V1 preserves spatial relationships from the retina. The correct choice—“Neighboring columns represent neighboring regions of visual space”—fits that description.",
      "“Odor types map one-to-one to single glomeruli without overlap” does not match the mechanism (topic: Brain Function). Retinotopic and columnar organization in V1 preserves spatial relationships from the retina. The correct choice—“Neighboring columns represent neighboring regions of visual space”—fits that description.",
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
      "“Ability to store long-term memories without protein synthesis” does not match the mechanism (topic: Electrical Synapses). Gap junctions pass current directly with very short latency. The correct choice—“Faster, bidirectional signaling with minimal synaptic delay”—fits that description.",
      "“Exclusive use of second messengers for amplification” does not match the mechanism (topic: Electrical Synapses). Gap junctions pass current directly with very short latency. The correct choice—“Faster, bidirectional signaling with minimal synaptic delay”—fits that description.",
      "“Requirement for Ca²⁺-triggered exocytosis” does not match the mechanism (topic: Electrical Synapses). Gap junctions pass current directly with very short latency. The correct choice—“Faster, bidirectional signaling with minimal synaptic delay”—fits that description.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Protein kinase A (PKA) is activated when:",
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
      "“IP₃ directly opens the Na⁺ channel pore” does not match the mechanism (topic: Second Messengers). cAMP binding to PKA regulatory subunits frees active catalytic subunits. The correct choice—“cAMP binds regulatory subunits releasing catalytic subunits”—fits that description.",
      "“Glutamate binds AMPA receptors without Na⁺ flux” does not match the mechanism (topic: Second Messengers). cAMP binding to PKA regulatory subunits frees active catalytic subunits. The correct choice—“cAMP binds regulatory subunits releasing catalytic subunits”—fits that description.",
      "“Photopigment is bleached in darkness” does not match the mechanism (topic: Second Messengers). cAMP binding to PKA regulatory subunits frees active catalytic subunits. The correct choice—“cAMP binds regulatory subunits releasing catalytic subunits”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to voltage-gated K⁺ channels typically:",
    options: [
      "Prolongs repolarization and broadens the action potential",
      "Blocks Na⁺ channels and prevents initiation",
      "Hyperpolarizes photoreceptors in light",
      "Closes gap junction connexons exclusively",
    ],
    correct: 0,
    explanation: "K⁺ channel block slows repolarization, widening the spike.",
    wrongExplanations: [
      "",
      "“Blocks Na⁺ channels and prevents initiation” does not match the mechanism (topic: Action Potentials). K⁺ channel block slows repolarization, widening the spike. The correct choice—“Prolongs repolarization and broadens the action potential”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. K⁺ channel block slows repolarization, widening the spike.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. K⁺ channel block slows repolarization, widening the spike.",
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
      "“Active regeneration in dendrites identical to axons” does not match the mechanism (topic: Passive Membrane Properties). Subthreshold signals decrement with distance due to leak and axial resistance. The correct choice—“Passive cable attenuation along dendrites”—fits that description.",
      "“Elimination of all ion gradients” does not match the mechanism (topic: Passive Membrane Properties). Subthreshold signals decrement with distance due to leak and axial resistance. The correct choice—“Passive cable attenuation along dendrites”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold signals decrement with distance due to leak and axial resistance.",
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
      "“Vesicle pool is permanently depleted in one trial (mixes up presynaptic release with…” does not match the mechanism (topic: Synaptic Transmission). Desensitized receptors fail to open even when neurotransmitter remains bound. The correct choice—“Receptors enter a closed state despite ligand binding”—fits that description.",
      "“Myelin is removed from the presynaptic axon (mixes up presynaptic release with posts…” does not match the mechanism (topic: Synaptic Transmission). Desensitized receptors fail to open even when neurotransmitter remains bound. The correct choice—“Receptors enter a closed state despite ligand binding”—fits that description.",
      "“The Na⁺/K⁺ pump reverses direction (mixes up presynaptic release with postsynaptic r…” does not match the mechanism (topic: Synaptic Transmission). Desensitized receptors fail to open even when neurotransmitter remains bound. The correct choice—“Receptors enter a closed state despite ligand binding”—fits that description.",
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
      "“Toward E_K (more negative)” does not match the mechanism (topic: Resting Potential). Resting V_m is a conductance-weighted average of equilibrium potentials; added Na⁺ leak pulls V_m toward E_Na. The correct choice—“Toward E_Na (less negative)”—fits that description.",
      "“To exactly 0 mV instantly” does not match the mechanism (topic: Resting Potential). Resting V_m is a conductance-weighted average of equilibrium potentials; added Na⁺ leak pulls V_m toward E_Na. The correct choice—“Toward E_Na (less negative)”—fits that description.",
      "“Away from both equilibrium potentials equally with no shift” does not match the mechanism (topic: Resting Potential). Resting V_m is a conductance-weighted average of equilibrium potentials; added Na⁺ leak pulls V_m toward E_Na. The correct choice—“Toward E_Na (less negative)”—fits that description.",
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
      "“−90 mV” does not match the mechanism (topic: Nernst Equation). When [inside]=[outside], the logarithmic term is zero and E_ion = 0 mV. The correct choice—“0 mV”—fits that description.",
      "“+60 mV” does not match the mechanism (topic: Nernst Equation). When [inside]=[outside], the logarithmic term is zero and E_ion = 0 mV. The correct choice—“0 mV”—fits that description.",
      "“Undefined because z=0” does not match the mechanism (topic: Nernst Equation). When [inside]=[outside], the logarithmic term is zero and E_ion = 0 mV. The correct choice—“0 mV”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone.",
      "“Unchanged regardless of distance” does not match the mechanism (topic: Passive Membrane Properties). Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone. The correct choice—“Smaller due to greater attenuation”—fits that description.",
      "“Converted directly to action potentials without decay” does not match the mechanism (topic: Passive Membrane Properties). Passive decrement limits the impact of distant synaptic inputs on the spike initiation zone. The correct choice—“Smaller due to greater attenuation”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Local anesthetics that block voltage-gated Na⁺ channels prevent action potentials by:",
    options: [
      "Reducing regenerative Na⁺ current needed for propagation",
      "Opening all K⁺ leak channels only",
      "Increasing myelin thickness",
      "Blocking gap junction connexins",
    ],
    correct: 0,
    explanation: "Without Na⁺ channel activation, regenerative depolarization cannot occur.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Without Na⁺ channel activation, regenerative depolarization cannot occur.",
      "“Increasing myelin thickness” does not match the mechanism (topic: Action Potentials). Without Na⁺ channel activation, regenerative depolarization cannot occur. The correct choice—“Reducing regenerative Na⁺ current needed for propagation”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Without Na⁺ channel activation, regenerative depolarization cannot occur.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Clustered Na⁺ channels at nodes regenerate the action potential.",
      "“Ligand-gated Cl⁻ channels” does not match the mechanism (topic: Action Potential Propagation). Clustered Na⁺ channels at nodes regenerate the action potential. The correct choice—“Voltage-gated Na⁺ channels”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Clustered Na⁺ channels at nodes regenerate the action potential.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Driving force is V_m − E_ion; negative values indicate inward current for cations.",
      "“Zero because the cell is at rest (uses the wrong sign or driving force for ionic cur…” does not match the mechanism (topic: Electrical Signaling). Driving force is V_m − E_ion; negative values indicate inward current for cations. The correct choice—“120 mV inward (V_m − E_ion = −120 mV)”—fits that description.",
      "“50 mV with no direction (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). Driving force is V_m − E_ion; negative values indicate inward current for cations. The correct choice—“120 mV inward (V_m − E_ion = −120 mV)”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: E_rev is determined by relative permeabilities of ions passing through the channel pore.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: E_rev is determined by relative permeabilities of ions passing through the channel pore.",
      "“The voltage at which the pump stops (uses the wrong sign or driving force for ionic …” does not match the mechanism (topic: Electrical Signaling). E_rev is determined by relative permeabilities of ions passing through the channel pore. The correct choice—“The potential at which net ion flux through the open channel is zero”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission.",
      "“Electrical coupling through myelin (describes the wrong synaptic structure or transm…” does not match the mechanism (topic: Chemical Synapses). mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission. The correct choice—“Spontaneous single-vesicle release without action potentials”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: mEPSCs arise from spontaneous fusion of single vesicles, revealing quantal transmission.",
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
      "“No neurotransmitter is present” does not match the mechanism (topic: Synaptic Transmission). Conformational desensitization lowers channel open probability despite bound agonist. The correct choice—“Neurotransmitter remains bound”—fits that description.",
      "“The cell is at E_K exactly” does not match the mechanism (topic: Synaptic Transmission). Conformational desensitization lowers channel open probability despite bound agonist. The correct choice—“Neurotransmitter remains bound”—fits that description.",
      "“Gap junctions are open” does not match the mechanism (topic: Synaptic Transmission). Conformational desensitization lowers channel open probability despite bound agonist. The correct choice—“Neurotransmitter remains bound”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "NMDA receptors require both glutamate binding and:",
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
      "“Exclusive presynaptic GABA release” does not match the mechanism (topic: Receptor Types). Voltage-dependent Mg²⁺ block makes NMDA receptors coincidence detectors for LTP. The correct choice—“Postsynaptic depolarization to relieve Mg block”—fits that description.",
      "“Complete absence of AMPA receptors” does not match the mechanism (topic: Receptor Types). Voltage-dependent Mg²⁺ block makes NMDA receptors coincidence detectors for LTP. The correct choice—“Postsynaptic depolarization to relieve Mg block”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NMDA receptors require both glutamate and depolarization to pass Ca²⁺ current.",
      "“Electrical synapses in the retina” does not match the mechanism (topic: Synaptic Integration). NMDA receptors require both glutamate and depolarization to pass Ca²⁺ current. The correct choice—“NMDA receptor voltage-dependent Mg block”—fits that description.",
      "“Pacinian corpuscle adaptation” does not match the mechanism (topic: Synaptic Integration). NMDA receptors require both glutamate and depolarization to pass Ca²⁺ current. The correct choice—“NMDA receptor voltage-dependent Mg block”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
      "“Saltatory conduction in dendrites” does not match the mechanism (topic: Synaptic Integration). Electrotonic decay reduces distal synaptic impact at the soma/AIS. The correct choice—“Passive cable attenuation along dendrites”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Disinhibition refers to:",
    options: [
      "Removal of inhibitory input onto a neuron, effectively increasing its excitability",
      "Adding extra GABAergic synapses permanently",
      "Blocking all excitatory glutamate release only",
      "Myelinating inhibitory interneurons",
    ],
    correct: 0,
    explanation: "Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron.",
    wrongExplanations: [
      "",
      "“Adding extra GABAergic synapses permanently” does not match the mechanism (topic: Neural Circuits). Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron. The correct choice—“Removal of inhibitory input onto a neuron, effectively increasing its excitability”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron.",
      "“Myelinating inhibitory interneurons” does not match the mechanism (topic: Neural Circuits). Disinhibition occurs when an inhibitory interneuron is itself inhibited, releasing the target neuron. The correct choice—“Removal of inhibitory input onto a neuron, effectively increasing its excitability”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Volume transmission describes:",
    options: [
      "Diffusion of neuromodulators through extracellular fluid to distant targets",
      "Saltatory conduction exclusively",
      "Direct cytoplasmic coupling via connexins only",
      "Transduction of sound in the basilar membrane",
    ],
    correct: 0,
    explanation: "Some modulators act beyond the synaptic cleft through extracellular diffusion.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Some modulators act beyond the synaptic cleft through extracellular diffusion.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Some modulators act beyond the synaptic cleft through extracellular diffusion.",
      "“Transduction of sound in the basilar membrane” does not match the mechanism (topic: Neuromodulation). Some modulators act beyond the synaptic cleft through extracellular diffusion. The correct choice—“Diffusion of neuromodulators through extracellular fluid to distant targets”—fits that description.",
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
      "“The fovea with highest acuity” does not match the mechanism (topic: Visual System). No photoreceptors lie over the optic disc, creating a scotoma compensated by filling-in. The correct choice—“The optic disc where ganglion cell axons exit and photoreceptors are absent”—fits that description.",
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
      "“Tonotopic mapping on the basilar membrane” does not match the mechanism (topic: Visual System). Opponent color circuits compare L, M, and S cone inputs. The correct choice—“Antagonistic inputs from different cone types”—fits that description.",
      "“One OSN-one receptor rule in the bulb” does not match the mechanism (topic: Visual System). Opponent color circuits compare L, M, and S cone inputs. The correct choice—“Antagonistic inputs from different cone types”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Opponent color circuits compare L, M, and S cone inputs.",
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
      "“Changing the amino acid sequence of rhodopsin” does not match the mechanism (topic: Auditory System). Rate coding complements place coding for intensity and temporal features. The correct choice—“Increased action potential firing rate”—fits that description.",
      "“Shifting the visual receptive field center” does not match the mechanism (topic: Auditory System). Rate coding complements place coding for intensity and temporal features. The correct choice—“Increased action potential firing rate”—fits that description.",
      "“Blocking all K⁺ leak channels permanently” does not match the mechanism (topic: Auditory System). Rate coding complements place coding for intensity and temporal features. The correct choice—“Increased action potential firing rate”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DCML carries discriminative touch and proprioception for somatosensory cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: DCML carries discriminative touch and proprioception for somatosensory cortex.",
      "“Olfactory signals from bulb to cortex directly without relay” does not match the mechanism (topic: Somatosensation). DCML carries discriminative touch and proprioception for somatosensory cortex. The correct choice—“Fine touch and proprioceptive information to the thalamus”—fits that description.",
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
      "“The primary site of phototransduction” does not match the mechanism (topic: Neuroanatomy). Thalamic nuclei relay and modulate sensory and motor signals to cortex. The correct choice—“A relay and gate for sensory information to cortex”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei relay and modulate sensory and motor signals to cortex.",
      "“The exclusive source of cerebrospinal fluid production without other roles” does not match the mechanism (topic: Neuroanatomy). Thalamic nuclei relay and modulate sensory and motor signals to cortex. The correct choice—“A relay and gate for sensory information to cortex”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ventricular CSF circulates through interconnected cavities.",
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
      "Removal of the Na⁺/K⁺ pump from the AIS",
    ],
    correct: 0,
    explanation: "Cerebellar LTD weakens parallel fiber inputs following climbing fiber pairing.",
    wrongExplanations: [
      "",
      "“Exclusive NMDA-independent phototransduction” does not match the mechanism (topic: Learning & Memory). Cerebellar LTD weakens parallel fiber inputs following climbing fiber pairing. The correct choice—“Climbing fiber co-activation and Ca signaling leading to AMPA receptor internalizati…”—fits that description.",
      "“Permanent closure of all gap junctions in retina” does not match the mechanism (topic: Learning & Memory). Cerebellar LTD weakens parallel fiber inputs following climbing fiber pairing. The correct choice—“Climbing fiber co-activation and Ca signaling leading to AMPA receptor internalizati…”—fits that description.",
      "“Removal of the Na⁺/K⁺ pump from the AIS” does not match the mechanism (topic: Learning & Memory). Cerebellar LTD weakens parallel fiber inputs following climbing fiber pairing. The correct choice—“Climbing fiber co-activation and Ca signaling leading to AMPA receptor internalizati…”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Low-frequency protocols can weaken synapses via receptor internalization and phosphatase activity.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Opening all gap junctions in the retina” does not match the mechanism (topic: Learning & Memory). Low-frequency protocols can weaken synapses via receptor internalization and phosphatase activity. The correct choice—“Low-frequency stimulation leading to reduced AMPA receptor insertion”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral/tufted cells in the olfactory bulb:",
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
      "“Transduce photons in the outer segment” does not match the mechanism (topic: Olfactory System). Bulb output neurons relay processed odor information centrally. The correct choice—“Project olfactory information to higher brain areas”—fits that description.",
      "“Form the blood-brain barrier endothelial layer” does not match the mechanism (topic: Olfactory System). Bulb output neurons relay processed odor information centrally. The correct choice—“Project olfactory information to higher brain areas”—fits that description.",
      "“Are the primary mechanoreceptors in skin” does not match the mechanism (topic: Olfactory System). Bulb output neurons relay processed odor information centrally. The correct choice—“Project olfactory information to higher brain areas”—fits that description.",
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
      "“Transduce light in rods and cones (maps the lesion to the wrong motor pathway or ref…” does not match the mechanism (topic: Motor Systems). Basal ganglia circuits gate and select motor actions. The correct choice—“Select and initiate appropriate motor programs”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia circuits gate and select motor actions.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Basal ganglia circuits gate and select motor actions.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Brain lateralization includes:",
    options: [
      "Specialization of language functions often in the left hemisphere",
      "Identical olfactory maps in every glomerulus for all odors",
      "Absence of any commissural connections",
      "Exclusive use of electrical synapses in cortex",
    ],
    correct: 0,
    explanation: "Many cognitive functions show hemispheric specialization, notably language in most individuals.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Absence of any commissural connections” does not match the mechanism (topic: Brain Function). Many cognitive functions show hemispheric specialization, notably language in most individuals. The correct choice—“Specialization of language functions often in the left hemisphere”—fits that description.",
      "“Exclusive use of electrical synapses in cortex” does not match the mechanism (topic: Brain Function). Many cognitive functions show hemispheric specialization, notably language in most individuals. The correct choice—“Specialization of language functions often in the left hemisphere”—fits that description.",
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
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly.",
      "“No change because pumps do not affect voltage (ignores which ion dominates resting p…” does not match the mechanism (topic: Resting Potential). Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly. The correct choice—“Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange”—fits that description.",
      "“Shift to E_Cl regardless of Cl⁻ conductance (ignores which ion dominates resting per…” does not match the mechanism (topic: Resting Potential). Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly. The correct choice—“Slight hyperpolarization due to electrogenic 3Na⁺/2K⁺ exchange”—fits that description.",
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
      "“−61 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). A tenfold change in concentration ratio changes E_ion by about 61 mV at body temperature. The correct choice—“+61 mV (toward 0 mV)”—fits that description.",
      "“0 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). A tenfold change in concentration ratio changes E_ion by about 61 mV at body temperature. The correct choice—“+61 mV (toward 0 mV)”—fits that description.",
      "“+120 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). A tenfold change in concentration ratio changes E_ion by about 61 mV at body temperature. The correct choice—“+61 mV (toward 0 mV)”—fits that description.",
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
      "“Doubles (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Proportional changes in R_m and R_i cancel in the ratio under the square root. The correct choice—“Remains unchanged because λ = √(R_m/R_i)”—fits that description.",
      "“Halves (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Proportional changes in R_m and R_i cancel in the ratio under the square root. The correct choice—“Remains unchanged because λ = √(R_m/R_i)”—fits that description.",
      "“Becomes zero (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Proportional changes in R_m and R_i cancel in the ratio under the square root. The correct choice—“Remains unchanged because λ = √(R_m/R_i)”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The positive feedback loop during the rising phase ends when:",
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
      "“The pump stops entirely” does not match the mechanism (topic: Action Potentials). Inactivation of Na⁺ channels and activation of K⁺ channels terminate the upswing. The correct choice—“Na⁺ channel inactivation dominates and K⁺ efflux increases”—fits that description.",
      "“Cl⁻ conductance goes to zero” does not match the mechanism (topic: Action Potentials). Inactivation of Na⁺ channels and activation of K⁺ channels terminate the upswing. The correct choice—“Na⁺ channel inactivation dominates and K⁺ efflux increases”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Inactivation of Na⁺ channels and activation of K⁺ channels terminate the upswing.",
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
      "“Increasing myelin thickness (misapplies how active propagation uses local circuit cu…” does not match the mechanism (topic: Action Potential Propagation). Temperature affects channel gating rates and ion mobility, slowing propagation. The correct choice—“Slowing voltage-gated channel kinetics and ion diffusion”—fits that description.",
      "“Raising E_Na above +100 mV (misapplies how active propagation uses local circuit cur…” does not match the mechanism (topic: Action Potential Propagation). Temperature affects channel gating rates and ion mobility, slowing propagation. The correct choice—“Slowing voltage-gated channel kinetics and ion diffusion”—fits that description.",
      "“Eliminating passive spread between nodes (misapplies how active propagation uses loc…” does not match the mechanism (topic: Action Potential Propagation). Temperature affects channel gating rates and ion mobility, slowing propagation. The correct choice—“Slowing voltage-gated channel kinetics and ion diffusion”—fits that description.",
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
      "“Maximal inward (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero. The correct choice—“Zero (no net electrochemical driving force)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m equals E_ion, (V_m − E_ion) = 0 and net ion flux at equilibrium is zero.",
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
      "“Opening all postsynaptic Cl⁻ channels” does not match the mechanism (topic: Chemical Synapses). SNARE cleavage prevents Ca²⁺-triggered exocytosis of neurotransmitter. The correct choice—“Cleaving SNARE proteins required for vesicle fusion”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Increasing rhodopsin activation in light” does not match the mechanism (topic: Chemical Synapses). SNARE cleavage prevents Ca²⁺-triggered exocytosis of neurotransmitter. The correct choice—“Cleaving SNARE proteins required for vesicle fusion”—fits that description.",
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
      "“Immediate postsynaptic receptor insertion without activity” does not match the mechanism (topic: Synaptic Transmission). Leftover Ca²⁺ from prior spikes increases probability of subsequent release. The correct choice—“Residual presynaptic Ca²⁺ elevating release probability”—fits that description.",
      "“Permanent myelin loss” does not match the mechanism (topic: Synaptic Transmission). Leftover Ca²⁺ from prior spikes increases probability of subsequent release. The correct choice—“Residual presynaptic Ca²⁺ elevating release probability”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors inhibit neurons primarily by:",
    options: [
      "Opening K⁺ channels via G-proteins and reducing Ca²⁺ channel activity",
      "Producing fast Cl⁻ influx through the same pore as GABA<sub>A</sub> receptors",
      "Opening voltage-gated Na⁺ channels to trigger regenerative spikes",
      "Hyperpolarizing only by pumping Cl⁻ into the cell against its gradient",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
      "“Eliminating all passive membrane properties” does not match the mechanism (topic: Synaptic Integration). Divisive normalization divides a neuron's response by a common factor, controlling gain across the population. The correct choice—“Scaling activity relative to pooled network activity”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
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
      "“Elimination of all inhibitory interneurons” does not match the mechanism (topic: Neural Circuits). Lateral inhibition suppresses non-selected units, sharpening competition. The correct choice—“Recurrent lateral inhibition among excitatory units”—fits that description.",
      "“Exclusive electrical synapses without thresholds” does not match the mechanism (topic: Neural Circuits). Lateral inhibition suppresses non-selected units, sharpening competition. The correct choice—“Recurrent lateral inhibition among excitatory units”—fits that description.",
      "“Assigns an unrelated sensory or synaptic mechanism to this context” does not match the mechanism (topic: Neural Circuits). Lateral inhibition suppresses non-selected units, sharpening competition. The correct choice—“Recurrent lateral inhibition among excitatory units”—fits that description.",
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
      "“Directly gating nicotinic ACh pores at the neuromuscular junction” does not match the mechanism (topic: Neuromodulation). NE modulates intrinsic excitability and synaptic gain through metabotropic pathways. The correct choice—“Modulating HCN and other channels via β-adrenergic receptors”—fits that description.",
      "“Mechanically deflecting inner hair cell stereocilia” does not match the mechanism (topic: Neuromodulation). NE modulates intrinsic excitability and synaptic gain through metabotropic pathways. The correct choice—“Modulating HCN and other channels via β-adrenergic receptors”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: NE modulates intrinsic excitability and synaptic gain through metabotropic pathways.",
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
      "“Tonotopic mapping of sound frequency” does not match the mechanism (topic: Visual System). Simple cells respond best to edges at a preferred orientation due to elongated ON/OFF zones. The correct choice—“Specific arrangements of ON and OFF subregions in space”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Exclusive input from rods without cones” does not match the mechanism (topic: Visual System). Simple cells respond best to edges at a preferred orientation due to elongated ON/OFF zones. The correct choice—“Specific arrangements of ON and OFF subregions in space”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Phase locking in auditory brainstem neurons helps encode:",
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
    question: "Two-point discrimination acuity is highest on fingertips because:",
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
      "“Pacinian corpuscles are absent in glabrous skin” does not match the mechanism (topic: Somatosensation). High receptor density and large somatosensory cortical representation improve spatial acuity. The correct choice—“Receptor density and cortical magnification are greatest there”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory receptors line the glabrous surface” does not match the mechanism (topic: Somatosensation). High receptor density and large somatosensory cortical representation improve spatial acuity. The correct choice—“Receptor density and cortical magnification are greatest there”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Granule cells in the olfactory bulb provide:",
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
      "“Direct transduction of odorants to action potentials” does not match the mechanism (topic: Olfactory System). Granule cell inhibition shapes mitral cell output and odor discrimination. The correct choice—“Recurrent inhibition onto mitral cells via dendrodendritic synapses”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Saltatory conduction in the optic nerve” does not match the mechanism (topic: Olfactory System). Granule cell inhibition shapes mitral cell output and odor discrimination. The correct choice—“Recurrent inhibition onto mitral cells via dendrodendritic synapses”—fits that description.",
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
      "“Exclusive control of phototransduction” does not match the mechanism (topic: Neuroanatomy). Limbic structures (e.g., amygdala, hippocampus) integrate affect and memory. The correct choice—“Emotion, memory, and motivated behavior”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Direct generation of CSF in muscle spindles” does not match the mechanism (topic: Neuroanatomy). Limbic structures (e.g., amygdala, hippocampus) integrate affect and memory. The correct choice—“Emotion, memory, and motivated behavior”—fits that description.",
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
      "“Encoding color opponency in blobs (maps the lesion to the wrong motor pathway or ref…” does not match the mechanism (topic: Motor Systems). Cerebellar circuits compare intended and actual movement for fine coordination. The correct choice—“Error correction and timing of movements via mossy and climbing fiber input”—fits that description.",
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
      "“Immediate early genes alone permanently store memory without translation” does not match the mechanism (topic: Learning & Memory). Consolidation engages transcription and translation to stabilize synaptic changes. The correct choice—“Persistent synaptic changes require new proteins for structural plasticity”—fits that description.",
      "“Photopigment regeneration depends on ribosomes in outer segments” does not match the mechanism (topic: Learning & Memory). Consolidation engages transcription and translation to stabilize synaptic changes. The correct choice—“Persistent synaptic changes require new proteins for structural plasticity”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation engages transcription and translation to stabilize synaptic changes.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Default mode network activity is most prominent during:",
    options: [
      "Internally directed cognition when not engaged in a task",
      "Active phototransduction in bright light only",
      "Cochlear resonance at high frequencies exclusively",
      "Muscle spindle stretch during maximal contraction only",
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
    question: "Electrical coupling strength between cells can be modulated by:",
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
      "“SNARE-mediated vesicle fusion in the cleft” does not match the mechanism (topic: Electrical Synapses). Connexin phosphorylation and trafficking regulate gap junction permeability. The correct choice—“Phosphorylation state of connexins altering gap junction conductance”—fits that description.",
      "“Photopigment bleaching in rods” does not match the mechanism (topic: Electrical Synapses). Connexin phosphorylation and trafficking regulate gap junction permeability. The correct choice—“Phosphorylation state of connexins altering gap junction conductance”—fits that description.",
      "“Tip-link tension in stereocilia” does not match the mechanism (topic: Electrical Synapses). Connexin phosphorylation and trafficking regulate gap junction permeability. The correct choice—“Phosphorylation state of connexins altering gap junction conductance”—fits that description.",
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
      "“Voltage-gated Na⁺ channels directly without lipids” does not match the mechanism (topic: Second Messengers). PLC cleavage of PIP₂ yields DAG, which activates PKC alongside Ca²⁺. The correct choice—“Protein kinase C at the membrane”—fits that description.",
      "“Rhodopsin in the dark” does not match the mechanism (topic: Second Messengers). PLC cleavage of PIP₂ yields DAG, which activates PKC alongside Ca²⁺. The correct choice—“Protein kinase C at the membrane”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PLC cleavage of PIP₂ yields DAG, which activates PKC alongside Ca²⁺.",
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
      "“Lower threshold and faster rising phase” does not match the mechanism (topic: Action Potentials). Fewer Na⁺ channels require stronger depolarization and slow regenerative upswing. The correct choice—“Higher threshold and slower rising phase”—fits that description.",
      "“No change in excitability” does not match the mechanism (topic: Action Potentials). Fewer Na⁺ channels require stronger depolarization and slow regenerative upswing. The correct choice—“Higher threshold and slower rising phase”—fits that description.",
      "“Permanent hyperpolarization to E_K without stimulation” does not match the mechanism (topic: Action Potentials). Fewer Na⁺ channels require stronger depolarization and slow regenerative upswing. The correct choice—“Higher threshold and slower rising phase”—fits that description.",
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
      "“Resting potential without clamp (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). More conductance demands more compensatory current to hold V_m fixed. The correct choice—“Clamp current required to maintain the set voltage”—fits that description.",
      "“Length constant without changing resistance (misstates how R_m, C_m, or geometry set…” does not match the mechanism (topic: Passive Membrane Properties). More conductance demands more compensatory current to hold V_m fixed. The correct choice—“Clamp current required to maintain the set voltage”—fits that description.",
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
      "“Every spike releases exactly one vesicle with certainty” does not match the mechanism (topic: Synaptic Transmission). Release probability is less than 1, making transmission probabilistic. The correct choice—“Only a fraction of presynaptic spikes trigger vesicle fusion”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Release probability is less than 1, making transmission probabilistic.",
      "“Quantal size varies with action potential amplitude above threshold” does not match the mechanism (topic: Synaptic Transmission). Release probability is less than 1, making transmission probabilistic. The correct choice—“Only a fraction of presynaptic spikes trigger vesicle fusion”—fits that description.",
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
      "“Near +60 mV because E_Na is larger” does not match the mechanism (topic: Resting Potential). Goldman-weighted calculation with dominant K⁺ permeability places rest near E_K. The correct choice—“Near −90 mV because P_K dominates”—fits that description.",
      "“Exactly halfway at −15 mV” does not match the mechanism (topic: Resting Potential). Goldman-weighted calculation with dominant K⁺ permeability places rest near E_K. The correct choice—“Near −90 mV because P_K dominates”—fits that description.",
      "“At 0 mV regardless of permeability” does not match the mechanism (topic: Resting Potential). Goldman-weighted calculation with dominant K⁺ permeability places rest near E_K. The correct choice—“Near −90 mV because P_K dominates”—fits that description.",
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
      "“Move closer to E_Na” does not match the mechanism (topic: Resting Potential). Higher K⁺ conductance increases the weight of E_K in the Goldman equation. The correct choice—“Move closer to E_K”—fits that description.",
      "“Remain unchanged because the pump sets voltage directly” does not match the mechanism (topic: Resting Potential). Higher K⁺ conductance increases the weight of E_K in the Goldman equation. The correct choice—“Move closer to E_K”—fits that description.",
      "“Become exactly 0 mV” does not match the mechanism (topic: Resting Potential). Higher K⁺ conductance increases the weight of E_K in the Goldman equation. The correct choice—“Move closer to E_K”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
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
      "“More negative (closer to 0 mV)” does not match the mechanism (topic: Nernst Equation). Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive. The correct choice—“More positive”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive.",
      "“Equal to E_K” does not match the mechanism (topic: Nernst Equation). Lower internal Na⁺ increases the driving force for inward Na⁺, making E_Na more positive. The correct choice—“More positive”—fits that description.",
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
      "“~5 mV per 10-fold concentration change” does not match the mechanism (topic: Nernst Equation). RT/zF at body temperature gives roughly 62 mV for a 10-fold gradient in a monovalent ion. The correct choice—“~62 mV per 10-fold concentration change”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: RT/zF at body temperature gives roughly 62 mV for a 10-fold gradient in a monovalent ion.",
      "“Independent of valence” does not match the mechanism (topic: Nernst Equation). RT/zF at body temperature gives roughly 62 mV for a 10-fold gradient in a monovalent ion. The correct choice—“~62 mV per 10-fold concentration change”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nernst slope scales as 1/z; divalent ions have halved slope.",
      "“~124 mV regardless of valence (contradicts the Nernst dependence on inside/outside c…” does not match the mechanism (topic: Nernst Equation). Nernst slope scales as 1/z; divalent ions have halved slope. The correct choice—“~31 mV (half that of monovalent due to z=2)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nernst slope scales as 1/z; divalent ions have halved slope.",
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
      "“2 (doubles exactly)” does not match the mechanism (topic: Passive Membrane Properties). λ ∝ √R_m; doubling R_m multiplies λ by √2. The correct choice—“√2 (increases)”—fits that description.",
      "“1/2 (halves)” does not match the mechanism (topic: Passive Membrane Properties). λ ∝ √R_m; doubling R_m multiplies λ by √2. The correct choice—“√2 (increases)”—fits that description.",
      "“4 (quadruples)” does not match the mechanism (topic: Passive Membrane Properties). λ ∝ √R_m; doubling R_m multiplies λ by √2. The correct choice—“√2 (increases)”—fits that description.",
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
      "“Quadruple τ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The product R_m C_m remains the same when one halves and the other doubles. The correct choice—“Leave τ unchanged”—fits that description.",
      "“Halve τ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The product R_m C_m remains the same when one halves and the other doubles. The correct choice—“Leave τ unchanged”—fits that description.",
      "“Set τ to zero (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The product R_m C_m remains the same when one halves and the other doubles. The correct choice—“Leave τ unchanged”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: R_m governs transmembrane leak; R_i governs longitudinal current inside the cell.",
      "“Is identical to input resistance at the soma in all geometries” does not match the mechanism (topic: Passive Membrane Properties). R_m governs transmembrane leak; R_i governs longitudinal current inside the cell. The correct choice—“Relates transmembrane current to voltage across the membrane”—fits that description.",
      "“Determines olfactory receptor choice” does not match the mechanism (topic: Passive Membrane Properties). R_m governs transmembrane leak; R_i governs longitudinal current inside the cell. The correct choice—“Relates transmembrane current to voltage across the membrane”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "After a spike, Na⁺ channel recovery from inactivation requires:",
    options: [
      "Repolarization of the membrane toward rest",
      "Further depolarization above +40 mV",
      "Complete removal of all K⁺ channels",
      "Opening of NMDA receptors only",
    ],
    correct: 0,
    explanation: "Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again.",
    wrongExplanations: [
      "",
      "“Further depolarization above +40 mV” does not match the mechanism (topic: Action Potentials). Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again. The correct choice—“Repolarization of the membrane toward rest”—fits that description.",
      "“Complete removal of all K⁺ channels” does not match the mechanism (topic: Action Potentials). Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again. The correct choice—“Repolarization of the membrane toward rest”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Repolarization resets the inactivation gate, allowing Na⁺ channels to become available again.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated K⁺ channels are pharmacologically blocked during a spike, repolarization will:",
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
      "“Complete instantly with no change” does not match the mechanism (topic: Action Potentials). K⁺ efflux normally repolarizes the membrane; blockade prolongs depolarization. The correct choice—“Be slowed and the action potential may broaden”—fits that description.",
      "“Prevent all Na⁺ channel opening permanently” does not match the mechanism (topic: Action Potentials). K⁺ efflux normally repolarizes the membrane; blockade prolongs depolarization. The correct choice—“Be slowed and the action potential may broaden”—fits that description.",
      "“Eliminate the need for Na⁺ inactivation” does not match the mechanism (topic: Action Potentials). K⁺ efflux normally repolarizes the membrane; blockade prolongs depolarization. The correct choice—“Be slowed and the action potential may broaden”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: TTX binds voltage-gated Na⁺ channel pores, preventing spike generation.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX binds voltage-gated Na⁺ channel pores, preventing spike generation.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin lowers effective capacitance, allowing faster charging at nodes.",
      "“Synaptic vesicle pool size (misapplies how active propagation uses local circuit cur…” does not match the mechanism (topic: Action Potential Propagation). Myelin lowers effective capacitance, allowing faster charging at nodes. The correct choice—“Capacitive charging of the membrane (C_m per unit length)”—fits that description.",
      "“Receptor affinity for GABA (misapplies how active propagation uses local circuit cur…” does not match the mechanism (topic: Action Potential Propagation). Myelin lowers effective capacitance, allowing faster charging at nodes. The correct choice—“Capacitive charging of the membrane (C_m per unit length)”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails.",
      "“Is unaffected by internode distance (misapplies how active propagation uses local ci…” does not match the mechanism (topic: Action Potential Propagation). Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails. The correct choice—“Increases up to a point because fewer regenerative steps are needed”—fits that description.",
      "“Requires elimination of all K⁺ channels (misapplies how active propagation uses loca…” does not match the mechanism (topic: Action Potential Propagation). Longer internodes reduce the number of regeneration steps, increasing velocity until passive spread fails. The correct choice—“Increases up to a point because fewer regenerative steps are needed”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orthodromic propagation follows the natural axonal direction of signaling.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orthodromic propagation follows the natural axonal direction of signaling.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Orthodromic propagation follows the natural axonal direction of signaling.",
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
      "“All K⁺ channels are removed from the membrane (uses the wrong sign or driving force …” does not match the mechanism (topic: Electrical Signaling). At E_K, the chemical gradient for K⁺ efflux equals the opposing electrical gradient. The correct choice—“The electrical and chemical driving forces balance”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At E_K, the chemical gradient for K⁺ efflux equals the opposing electrical gradient.",
      "“The pump stops at E_K (uses the wrong sign or driving force for ionic current)” does not match the mechanism (topic: Electrical Signaling). At E_K, the chemical gradient for K⁺ efflux equals the opposing electrical gradient. The correct choice—“The electrical and chemical driving forces balance”—fits that description.",
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
      "“Decrease current flow proportionally to conductance” does not match the mechanism (topic: Electrical Signaling). I = g(V_m − E_ion); higher conductance increases current at fixed voltage. The correct choice—“Increase current flow for that ion”—fits that description.",
      "“Change E_ion directly” does not match the mechanism (topic: Electrical Signaling). I = g(V_m − E_ion); higher conductance increases current at fixed voltage. The correct choice—“Increase current flow for that ion”—fits that description.",
      "“Eliminate the Nernst potential” does not match the mechanism (topic: Electrical Signaling). I = g(V_m − E_ion); higher conductance increases current at fixed voltage. The correct choice—“Increase current flow for that ion”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outward current hyperpolarizes the membrane.",
      "“To E_Na instantly” does not match the mechanism (topic: Electrical Signaling). Outward current hyperpolarizes the membrane. The correct choice—“Away from 0 mV (more negative)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Outward current hyperpolarizes the membrane.",
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
      "“~2×10³ μm wide” does not match the mechanism (topic: Chemical Synapses). The narrow cleft allows rapid diffusion of neurotransmitter to postsynaptic receptors. The correct choice—“~20–40 nm wide”—fits that description.",
      "“Continuous with the cytoplasm via gap junctions” does not match the mechanism (topic: Chemical Synapses). The narrow cleft allows rapid diffusion of neurotransmitter to postsynaptic receptors. The correct choice—“~20–40 nm wide”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The narrow cleft allows rapid diffusion of neurotransmitter to postsynaptic receptors.",
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
      "“Permanently remove all presynaptic receptors (describes the wrong synaptic structure…” does not match the mechanism (topic: Chemical Synapses). Vesicle recycling sustains ongoing synaptic transmission. The correct choice—“Recycle synaptic vesicle membrane and maintain release capacity”—fits that description.",
      "“Generate action potentials in the postsynaptic cell (describes the wrong synaptic st…” does not match the mechanism (topic: Chemical Synapses). Vesicle recycling sustains ongoing synaptic transmission. The correct choice—“Recycle synaptic vesicle membrane and maintain release capacity”—fits that description.",
      "“Convert ionotropic to metabotropic receptors (describes the wrong synaptic structure…” does not match the mechanism (topic: Chemical Synapses). Vesicle recycling sustains ongoing synaptic transmission. The correct choice—“Recycle synaptic vesicle membrane and maintain release capacity”—fits that description.",
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
      "“Generate myelin around the terminal (describes the wrong synaptic structure or trans…” does not match the mechanism (topic: Chemical Synapses). Active zone scaffolding positions vesicles for Ca-triggered fusion. The correct choice—“Dock and prime vesicles near Ca channels for release”—fits that description.",
      "“Transduce odorants in the nasal epithelium (describes the wrong synaptic structure o…” does not match the mechanism (topic: Chemical Synapses). Active zone scaffolding positions vesicles for Ca-triggered fusion. The correct choice—“Dock and prime vesicles near Ca channels for release”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Co-release of multiple neurotransmitters from one terminal violates Dale's principle only if:",
    options: [
      "The same neuron releases different transmitters from different terminals inconsistently with its phenotype",
      "One vesicle contains glutamate (mixes up presynaptic release with postsynaptic receptor logic)",
      "Postsynaptic cells express receptors (mixes up presynaptic release with postsynaptic receptor logic)",
      "Action potentials arrive at the terminal (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Dale's principle concerns consistent transmitter identity across a neuron's outputs.",
    wrongExplanations: [
      "",
      "“One vesicle contains glutamate (mixes up presynaptic release with postsynaptic recep…” does not match the mechanism (topic: Synaptic Transmission). Dale's principle concerns consistent transmitter identity across a neuron's outputs. The correct choice—“The same neuron releases different transmitters from different terminals inconsisten…”—fits that description.",
      "“Postsynaptic cells express receptors (mixes up presynaptic release with postsynaptic…” does not match the mechanism (topic: Synaptic Transmission). Dale's principle concerns consistent transmitter identity across a neuron's outputs. The correct choice—“The same neuron releases different transmitters from different terminals inconsisten…”—fits that description.",
      "“Action potentials arrive at the terminal (mixes up presynaptic release with postsyna…” does not match the mechanism (topic: Synaptic Transmission). Dale's principle concerns consistent transmitter identity across a neuron's outputs. The correct choice—“The same neuron releases different transmitters from different terminals inconsisten…”—fits that description.",
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
      "“Permanent LTP at all synapses instantly” does not match the mechanism (topic: Synaptic Transmission). Vesicle depletion reduces release probability during sustained high-frequency firing. The correct choice—“Short-term synaptic depression”—fits that description.",
      "“Myelin formation in the cleft” does not match the mechanism (topic: Synaptic Transmission). Vesicle depletion reduces release probability during sustained high-frequency firing. The correct choice—“Short-term synaptic depression”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicle depletion reduces release probability during sustained high-frequency firing.",
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
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Glycine receptors are ligand-gated Cl⁻ channels producing fast IPSPs.",
      "“Voltage-gated Na⁺ channels (mixes up presynaptic release with postsynaptic receptor …” does not match the mechanism (topic: Synaptic Transmission). Glycine receptors are ligand-gated Cl⁻ channels producing fast IPSPs. The correct choice—“Ionotropic Cl⁻ channels mediating fast inhibition”—fits that description.",
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
      "“Must replace neurotransmitter in the primary binding pocket to have any effect” does not match the mechanism (topic: Receptor Types). Allosteric sites tune channel open probability without competing at the agonist site. The correct choice—“Bind sites distinct from the agonist site and alter channel gating”—fits that description.",
      "Metabotropic receptors do not open an ion pore directly; they recruit G-proteins and enzymes. Ionotropic receptors produce fast EPSPs/IPSPs by gating Na⁺, K⁺, or Cl⁻ channels at the membrane. Allosteric sites tune channel open probability without competing at the agonist site.",
      "“Permanently remove receptors from the membrane” does not match the mechanism (topic: Receptor Types). Allosteric sites tune channel open probability without competing at the agonist site. The correct choice—“Bind sites distinct from the agonist site and alter channel gating”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors are metabotropic and typically:",
    options: [
      "Open K⁺ channels or inhibit Ca²⁺ channels via G-proteins",
      "Form fast Cl⁻ channels identical to GABA<sub>A</sub>",
      "Directly fuse synaptic vesicles without a Ca²⁺ trigger",
      "Exist only on rod photoreceptor terminals",
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
    question: "Metabotropic glutamate receptors (mGluRs) on presynaptic terminals can:",
    options: [
      "Inhibit or facilitate transmitter release via G-protein modulation of Ca channels",
      "Directly pass large Na currents at rest always",
      "Replace SNARE proteins entirely",
      "Convert electrical to chemical synapses instantly",
    ],
    correct: 0,
    explanation: "Presynaptic mGluRs modulate release probability through G-protein signaling.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Presynaptic mGluRs modulate release probability through G-protein signaling.",
      "“Replace SNARE proteins entirely” does not match the mechanism (topic: Receptor Types). Presynaptic mGluRs modulate release probability through G-protein signaling. The correct choice—“Inhibit or facilitate transmitter release via G-protein modulation of Ca channels”—fits that description.",
      "“Convert electrical to chemical synapses instantly” does not match the mechanism (topic: Receptor Types). Presynaptic mGluRs modulate release probability through G-protein signaling. The correct choice—“Inhibit or facilitate transmitter release via G-protein modulation of Ca channels”—fits that description.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Integration combines excitatory and inhibitory inputs according to timing, location, and conductance changes.",
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
      "“Fire spontaneously at rest without input” does not match the mechanism (topic: Synaptic Integration). Higher threshold means more integrated excitation is needed to reach spike initiation. The correct choice—“Require greater net depolarization to fire”—fits that description.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Higher threshold means more integrated excitation is needed to reach spike initiation.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Higher threshold means more integrated excitation is needed to reach spike initiation.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Backpropagation allows postsynaptic depolarization to coincide with synaptic input for plasticity.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Backpropagation allows postsynaptic depolarization to coincide with synaptic input for plasticity.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Winner-take-all circuit dynamics can emerge from:",
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
      "“Purely passive membrane properties without synapses” does not match the mechanism (topic: Neural Circuits). Recurrent inhibition allows one active unit to suppress competitors. The correct choice—“Strong recurrent inhibition among competing excitatory units”—fits that description.",
      "“Exclusive electrical coupling with no inhibition” does not match the mechanism (topic: Neural Circuits). Recurrent inhibition allows one active unit to suppress competitors. The correct choice—“Strong recurrent inhibition among competing excitatory units”—fits that description.",
      "“Removal of all voltage-gated channels” does not match the mechanism (topic: Neural Circuits). Recurrent inhibition allows one active unit to suppress competitors. The correct choice—“Strong recurrent inhibition among competing excitatory units”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "An excitatory-inhibitory balance in cortical circuits helps:",
    options: [
      "Maintain stable firing rates and prevent runaway excitation",
      "Eliminate all action potentials at rest",
      "Replace LTP with only LTD permanently",
      "Remove the need for neuromodulators entirely",
    ],
    correct: 0,
    explanation: "Balanced E/I input stabilizes network activity around functional set points.",
    wrongExplanations: [
      "",
      "“Eliminate all action potentials at rest” does not match the mechanism (topic: Neural Circuits). Balanced E/I input stabilizes network activity around functional set points. The correct choice—“Maintain stable firing rates and prevent runaway excitation”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Balanced E/I input stabilizes network activity around functional set points.",
      "“Remove the need for neuromodulators entirely” does not match the mechanism (topic: Neural Circuits). Balanced E/I input stabilizes network activity around functional set points. The correct choice—“Maintain stable firing rates and prevent runaway excitation”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators produce rhythmic motor output:",
    options: [
      "Without requiring continuous sensory input for each cycle",
      "Requires when photoreceptors are illuminated",
      "Exclusively through gap junctions in the retina",
      "By blocking all inhibitory interneurons permanently",
    ],
    correct: 0,
    explanation: "CPGs intrinsically generate coordinated rhythmic activity for locomotion and breathing.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CPGs intrinsically generate coordinated rhythmic activity for locomotion and breathing.",
      "“By blocking all inhibitory interneurons permanently” does not match the mechanism (topic: Neural Circuits). CPGs intrinsically generate coordinated rhythmic activity for locomotion and breathing. The correct choice—“Without requiring continuous sensory input for each cycle”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Noradrenergic modulation of cortex during alert states typically:",
    options: [
      "Increases gain and reduces spontaneous noise in neural responses",
      "Eliminates all synaptic plasticity permanently",
      "Converts all synapses to electrical only",
      "Blocks all Na⁺/K⁺ pump activity",
    ],
    correct: 0,
    explanation: "Norepinephrine adjusts network gain and signal-to-noise for adaptive processing.",
    wrongExplanations: [
      "",
      "“Eliminates all synaptic plasticity permanently” does not match the mechanism (topic: Neuromodulation). Norepinephrine adjusts network gain and signal-to-noise for adaptive processing. The correct choice—“Increases gain and reduces spontaneous noise in neural responses”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Norepinephrine adjusts network gain and signal-to-noise for adaptive processing.",
      "“Blocks all Na⁺/K⁺ pump activity” does not match the mechanism (topic: Neuromodulation). Norepinephrine adjusts network gain and signal-to-noise for adaptive processing. The correct choice—“Increases gain and reduces spontaneous noise in neural responses”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonergic modulation of spinal circuits can:",
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
      "“Directly transduce odorant molecules” does not match the mechanism (topic: Neuromodulation). Serotonin tunes spinal and brainstem circuits involved in movement and mood-related processing. The correct choice—“Alter motor pattern generator excitability and reflex gain”—fits that description.",
      "“Replace hippocampal LTP with phototransduction” does not match the mechanism (topic: Neuromodulation). Serotonin tunes spinal and brainstem circuits involved in movement and mood-related processing. The correct choice—“Alter motor pattern generator excitability and reflex gain”—fits that description.",
      "“Form the blood-brain barrier” does not match the mechanism (topic: Neuromodulation). Serotonin tunes spinal and brainstem circuits involved in movement and mood-related processing. The correct choice—“Alter motor pattern generator excitability and reflex gain”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Acetylcholine in cortex during attention acts through:",
    options: [
      "Both nicotinic (ionotropic) and muscarinic (metabotropic) receptors",
      "Rod outer segments generate all-or-none spikes in darkness",
      "Requires cochlear outer hair cell motors",
      "Tight junction proteins of the BBB exclusively",
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
      "“Massive convergence from hundreds of rods per cell” does not match the mechanism (topic: Visual System). Low convergence preserves fine spatial detail in central vision. The correct choice—“Small receptive field centers with minimal convergence”—fits that description.",
      "“Tonotopic frequency mapping” does not match the mechanism (topic: Visual System). Low convergence preserves fine spatial detail in central vision. The correct choice—“Small receptive field centers with minimal convergence”—fits that description.",
      "“One-neuron-one-receptor rule for odorants” does not match the mechanism (topic: Visual System). Low convergence preserves fine spatial detail in central vision. The correct choice—“Small receptive field centers with minimal convergence”—fits that description.",
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
      "“Place coding on the basilar membrane” does not match the mechanism (topic: Visual System). Asymmetric inhibitory inputs create directional selectivity in retinal circuits. The correct choice—“Asymmetric inhibition from starburst amacrine cells”—fits that description.",
      "“Homunculus magnification of the leg” does not match the mechanism (topic: Visual System). Asymmetric inhibitory inputs create directional selectivity in retinal circuits. The correct choice—“Asymmetric inhibition from starburst amacrine cells”—fits that description.",
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
      "“Encoding pitch on the basilar membrane” does not match the mechanism (topic: Visual System). Horizontal cells spread inhibitory signals laterally to enhance contrast. The correct choice—“Providing feedback/feedforward inhibition to photoreceptors and bipolar cells”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Horizontal cells spread inhibitory signals laterally to enhance contrast.",
      "“Forming the corpus callosum” does not match the mechanism (topic: Visual System). Horizontal cells spread inhibitory signals laterally to enhance contrast. The correct choice—“Providing feedback/feedforward inhibition to photoreceptors and bipolar cells”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Outer hair cells contribute to cochlear amplification through:",
    options: [
      "Electromotility adjusting basilar membrane mechanics",
      "Direct phototransduction of light",
      "Releasing GABA at the neuromuscular junction only",
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
      "“Detecting bitter taste on the tongue” does not match the mechanism (topic: Auditory System). Brainstem circuits compare timing differences between ears for azimuth localization. The correct choice—“Localizing low-frequency sounds in the horizontal plane”—fits that description.",
      "“Encoding color opponency in cones” does not match the mechanism (topic: Auditory System). Brainstem circuits compare timing differences between ears for azimuth localization. The correct choice—“Localizing low-frequency sounds in the horizontal plane”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Brainstem circuits compare timing differences between ears for azimuth localization.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MGN is the thalamic relay for ascending auditory pathways.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Two-point discrimination threshold is finest on:",
    options: [
      "Fingertips due to high receptor density and cortical magnification",
      "Upper arm due to large skin area",
      "Trunk midline due to bilateral representation only",
      "The optic disc due to absence of photoreceptors",
    ],
    correct: 0,
    explanation: "High receptor density and S1 magnification enable fine spatial acuity on fingertips.",
    wrongExplanations: [
      "",
      "“Upper arm due to large skin area” does not match the mechanism (topic: Somatosensation). High receptor density and S1 magnification enable fine spatial acuity on fingertips. The correct choice—“Fingertips due to high receptor density and cortical magnification”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High receptor density and S1 magnification enable fine spatial acuity on fingertips.",
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
      "“Steady sustained pressure without change” does not match the mechanism (topic: Somatosensation). Rapid adaptation emphasizes dynamic mechanical changes. The correct choice—“Onset and offset of mechanical stimuli”—fits that description.",
      "“Constant odorant concentration over minutes” does not match the mechanism (topic: Somatosensation). Rapid adaptation emphasizes dynamic mechanical changes. The correct choice—“Onset and offset of mechanical stimuli”—fits that description.",
      "“Fixed basilar membrane positions for all tones” does not match the mechanism (topic: Somatosensation). Rapid adaptation emphasizes dynamic mechanical changes. The correct choice—“Onset and offset of mechanical stimuli”—fits that description.",
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
      "“Fine discriminative touch with highest conduction velocity” does not match the mechanism (topic: Somatosensation). Thin unmyelinated C fibers mediate slow nociceptive and thermal signals. The correct choice—“Slow pain and temperature (unmyelinated)”—fits that description.",
      "“Photons to retinal ganglion cells” does not match the mechanism (topic: Somatosensation). Thin unmyelinated C fibers mediate slow nociceptive and thermal signals. The correct choice—“Slow pain and temperature (unmyelinated)”—fits that description.",
      "“Dopamine to the striatum” does not match the mechanism (topic: Somatosensation). Thin unmyelinated C fibers mediate slow nociceptive and thermal signals. The correct choice—“Slow pain and temperature (unmyelinated)”—fits that description.",
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
      "“Generating action potentials for saltatory conduction (localizes the function to the…” does not match the mechanism (topic: Neuroanatomy). Astrocytes support and regulate the neurovascular unit at the BBB. The correct choice—“Regulating the extracellular environment and supporting endothelial barrier function”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Encoding frequency on the basilar membrane (localizes the function to the wrong brai…” does not match the mechanism (topic: Neuroanatomy). Astrocytes support and regulate the neurovascular unit at the BBB. The correct choice—“Regulating the extracellular environment and supporting endothelial barrier function”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar circuits refine motor commands and support motor learning.",
      "“Direct control of heart rate without brainstem involvement” does not match the mechanism (topic: Neuroanatomy). Cerebellar circuits refine motor commands and support motor learning. The correct choice—“Coordinating timing and precision of movement (motor learning)”—fits that description.",
      "“Exclusive storage of all episodic memories without hippocampus” does not match the mechanism (topic: Neuroanatomy). Cerebellar circuits refine motor commands and support motor learning. The correct choice—“Coordinating timing and precision of movement (motor learning)”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The internal capsule contains major ascending and descending projection fibers.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Lymph fluid replacing CSF in all ventricles (localizes the function to the wrong bra…” does not match the mechanism (topic: Neuroanatomy). The internal capsule contains major ascending and descending projection fibers. The correct choice—“Corticospinal and thalamocortical fibers between cortex and brainstem/spinal cord”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Protein synthesis inhibition shortly after LTP induction can:",
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
      "“Enhance immediate early gene expression permanently” does not match the mechanism (topic: Learning & Memory). Persistent LTP often requires new protein synthesis for maintenance. The correct choice—“Impair consolidation of long-lasting synaptic changes”—fits that description.",
      "“Convert rods to cones in the retina” does not match the mechanism (topic: Learning & Memory). Persistent LTP often requires new protein synthesis for maintenance. The correct choice—“Impair consolidation of long-lasting synaptic changes”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Systems consolidation proposes that over time declarative memories:",
    options: [
      "Become less dependent on hippocampus and more on neocortex",
      "Are stored exclusively in the cochlear nucleus forever",
      "Require continuous photoreceptor activation",
      "Depend only on gap junction electrical synapses",
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
      "“Saltatory conduction velocity in peripheral nerve directly” does not match the mechanism (topic: Learning & Memory). Hidden-platform spatial learning depends on hippocampal circuitry. The correct choice—“Hippocampal-dependent spatial navigation memory”—fits that description.",
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
      "“Single photons of light” does not match the mechanism (topic: Olfactory System). Olfactory adaptation decreases sensitivity during sustained odor presentation. The correct choice—“Prolonged constant odorant exposure”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Olfactory adaptation decreases sensitivity during sustained odor presentation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Olfactory adaptation decreases sensitivity during sustained odor presentation.",
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
      "“The basilar membrane maps them to different frequencies” does not match the mechanism (topic: Olfactory System). Olfactory receptors discriminate molecular shape, including chirality. The correct choice—“Receptor binding geometry is stereoselective”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Gap junctions invert their charge” does not match the mechanism (topic: Olfactory System). Olfactory receptors discriminate molecular shape, including chirality. The correct choice—“Receptor binding geometry is stereoselective”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Pheromone detection in many mammals involves:",
    options: [
      "The vomeronasal organ projecting to accessory olfactory bulb",
      "The basilar membrane frequency map exclusively",
      "Photoreceptor cGMP channels in the fovea",
      "Nodes of Ranvier in the corpus callosum",
    ],
    correct: 0,
    explanation: "Vomeronasal pathways process social chemical signals separately from main olfaction.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vomeronasal pathways process social chemical signals separately from main olfaction.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Nodes of Ranvier in the corpus callosum” does not match the mechanism (topic: Olfactory System). Vomeronasal pathways process social chemical signals separately from main olfaction. The correct choice—“The vomeronasal organ projecting to accessory olfactory bulb”—fits that description.",
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
      "“Loss of olfactory receptor gene expression” does not match the mechanism (topic: Motor Systems). Most corticospinal fibers decussate, causing contralateral motor deficits. The correct choice—“Contralateral weakness or paralysis of voluntary movement”—fits that description.",
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
      "“Direct dopamine release from substantia nigra to retina” does not match the mechanism (topic: Motor Systems). Stretch-sensitive spindle afferents inform the CNS about muscle length and change. The correct choice—“Group Ia afferents signaling muscle stretch”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rubrospinal pathways modulate limb motor control, especially flexion.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Rubrospinal pathways modulate limb motor control, especially flexion.",
      "“Formation of endothelial tight junctions (maps the lesion to the wrong motor pathway…” does not match the mechanism (topic: Motor Systems). Rubrospinal pathways modulate limb motor control, especially flexion. The correct choice—“Motor coordination via rubrospinal tract influence on limb flexors”—fits that description.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Default mode network activity increases during:",
    options: [
      "Internally directed thought and rest, decreasing during focused external tasks",
      "High-intensity physical exercise of a single muscle spindle only",
      "Photoreceptor hyperpolarization in bright light exclusively",
      "Saltatory conduction at every internode simultaneously",
    ],
    correct: 0,
    explanation: "The DMN is active during introspection and deactivates during externally focused attention.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The DMN is active during introspection and deactivates during externally focused attention.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Saltatory conduction at every internode simultaneously” does not match the mechanism (topic: Brain Function). The DMN is active during introspection and deactivates during externally focused attention. The correct choice—“Internally directed thought and rest, decreasing during focused external tasks”—fits that description.",
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
      "“Direct measurement of every synaptic vesicle fusion event” does not match the mechanism (topic: Brain Function). BOLD contrasts blood oxygenation changes associated with neurovascular coupling. The correct choice—“Local changes in blood oxygenation coupled to neural activity”—fits that description.",
      "“The Nernst potential of individual ions in the cleft” does not match the mechanism (topic: Brain Function). BOLD contrasts blood oxygenation changes associated with neurovascular coupling. The correct choice—“Local changes in blood oxygenation coupled to neural activity”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: BOLD contrasts blood oxygenation changes associated with neurovascular coupling.",
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
      "“Primary visual transduction in rods” does not match the mechanism (topic: Brain Function). Broca's area in frontal cortex supports language production. The correct choice—“Speech production (language output)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Broca's area in frontal cortex supports language production.",
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
      "“Exactly E_Na (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Goldman equation weights each permeant ion; significant Cl⁻ conductance pulls V_m toward E_Cl. The correct choice—“Between E_K and E_Cl, weighted by conductances”—fits that description.",
      "“Exactly 0 mV (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Goldman equation weights each permeant ion; significant Cl⁻ conductance pulls V_m toward E_Cl. The correct choice—“Between E_K and E_Cl, weighted by conductances”—fits that description.",
      "“The average of all three without weighting (ignores which ion dominates resting perm…” does not match the mechanism (topic: Resting Potential). Goldman equation weights each permeant ion; significant Cl⁻ conductance pulls V_m toward E_Cl. The correct choice—“Between E_K and E_Cl, weighted by conductances”—fits that description.",
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
      "“+61 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). For divalent ions the Nernst slope is halved; a fourfold outside change is ~ (61/2)×log10(4) ≈ 18.5 mV at 37°C. The correct choice—“+18.5 mV at 37°C (more positive)”—fits that description.",
      "“0 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). For divalent ions the Nernst slope is halved; a fourfold outside change is ~ (61/2)×log10(4) ≈ 18.5 mV at 37°C. The correct choice—“+18.5 mV at 37°C (more positive)”—fits that description.",
      "“−61 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). For divalent ions the Nernst slope is halved; a fourfold outside change is ~ (61/2)×log10(4) ≈ 18.5 mV at 37°C. The correct choice—“+18.5 mV at 37°C (more positive)”—fits that description.",
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
      "“Increases both λ and τ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i) falls with higher R_i; τ = R_m C_m depends on R_m only. The correct choice—“Decreases λ but leaves τ unchanged if C_m is constant”—fits that description.",
      "“Decreases τ and increases λ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i) falls with higher R_i; τ = R_m C_m depends on R_m only. The correct choice—“Decreases λ but leaves τ unchanged if C_m is constant”—fits that description.",
      "“Affects neither λ nor τ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i) falls with higher R_i; τ = R_m C_m depends on R_m only. The correct choice—“Decreases λ but leaves τ unchanged if C_m is constant”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The minimal stimulus (rheobase) to elicit a spike increases during the relative refractory period because:",
    options: [
      "Fewer Na⁺ channels are available due to inactivation",
      "All K⁺ channels are permanently deleted",
      "Myelin is absent at the AIS",
      "E_Na becomes negative",
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the current needed to reach threshold.",
    wrongExplanations: [
      "",
      "“All K⁺ channels are permanently deleted” does not match the mechanism (topic: Action Potentials). Partial Na⁺ channel inactivation raises the current needed to reach threshold. The correct choice—“Fewer Na⁺ channels are available due to inactivation”—fits that description.",
      "“Myelin is absent at the AIS” does not match the mechanism (topic: Action Potentials). Partial Na⁺ channel inactivation raises the current needed to reach threshold. The correct choice—“Fewer Na⁺ channels are available due to inactivation”—fits that description.",
      "“E_Na becomes negative” does not match the mechanism (topic: Action Potentials). Partial Na⁺ channel inactivation raises the current needed to reach threshold. The correct choice—“Fewer Na⁺ channels are available due to inactivation”—fits that description.",
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
      "“Internodal distance is very short with strong passive spread” does not match the mechanism (topic: Action Potential Propagation). Insufficient nodal regeneration combined with excessive internodal decay blocks propagation. The correct choice—“Internodal distance is long and passive decay is large”—fits that description.",
      "“The axon is unmyelinated” does not match the mechanism (topic: Action Potential Propagation). Insufficient nodal regeneration combined with excessive internodal decay blocks propagation. The correct choice—“Internodal distance is long and passive decay is large”—fits that description.",
      "“Temperature is raised to accelerate kinetics” does not match the mechanism (topic: Action Potential Propagation). Insufficient nodal regeneration combined with excessive internodal decay blocks propagation. The correct choice—“Internodal distance is long and passive decay is large”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher g_K with V_m above E_K increases outward K⁺ current (I_K = g_K(V_m − E_K)).",
      "“Pump flux independent of gradients” does not match the mechanism (topic: Electrical Signaling). Higher g_K with V_m above E_K increases outward K⁺ current (I_K = g_K(V_m − E_K)). The correct choice—“Outward K⁺ current if V_m > E_K”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Vesicle fusion adds membrane to the surface, increasing capacitance.",
      "“Changes in photopigment packing” does not match the mechanism (topic: Chemical Synapses). Vesicle fusion adds membrane to the surface, increasing capacitance. The correct choice—“Increased membrane area as vesicles fuse”—fits that description.",
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
      "“Increases without bound (mixes up presynaptic release with postsynaptic receptor log…” does not match the mechanism (topic: Synaptic Transmission). When release is nearly deterministic, variability from binomial release statistics diminishes. The correct choice—“Decreases toward zero (less trial-to-trial variability)”—fits that description.",
      "“Equals p independent of quantal size (mixes up presynaptic release with postsynaptic…” does not match the mechanism (topic: Synaptic Transmission). When release is nearly deterministic, variability from binomial release statistics diminishes. The correct choice—“Decreases toward zero (less trial-to-trial variability)”—fits that description.",
      "“Is determined solely by mEPSP frequency in darkness (mixes up presynaptic release wi…” does not match the mechanism (topic: Synaptic Transmission). When release is nearly deterministic, variability from binomial release statistics diminishes. The correct choice—“Decreases toward zero (less trial-to-trial variability)”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MK-801 enters the NMDA channel when open and traps inside (use dependence).",
      "“To photopigment retinaldehyde” does not match the mechanism (topic: Receptor Types). MK-801 enters the NMDA channel when open and traps inside (use dependence). The correct choice—“Inside the pore in a use-dependent manner”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MK-801 enters the NMDA channel when open and traps inside (use dependence).",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased conductance on the path shunts EPSP current, reducing somatic signal.",
      "“Inhibition increases λ without bound” does not match the mechanism (topic: Synaptic Integration). Increased conductance on the path shunts EPSP current, reducing somatic signal. The correct choice—“Shunting reduces effective EPSP amplitude at the soma”—fits that description.",
      "“Na⁺ channels cluster on dendrites identically to the AIS” does not match the mechanism (topic: Synaptic Integration). Increased conductance on the path shunts EPSP current, reducing somatic signal. The correct choice—“Shunting reduces effective EPSP amplitude at the soma”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "A feedforward inhibitory circuit that sets a delay line for coincidence detection requires:",
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
      "“Requires electrical synapses without chemical components” does not match the mechanism (topic: Neural Circuits). Precisely timed disynaptic inhibition can create windows for coincident excitation. The correct choice—“Matched timing of excitation and delayed inhibition onto the target”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Elimination of all Na⁺ channels in interneurons” does not match the mechanism (topic: Neural Circuits). Precisely timed disynaptic inhibition can create windows for coincident excitation. The correct choice—“Matched timing of excitation and delayed inhibition onto the target”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Presynaptic inhibition via GABAergic terminals on sensory afferents often acts by:",
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
      "“Increasing tip-link tension in hair cells” does not match the mechanism (topic: Neuromodulation). PAD reduces presynaptic Ca²⁺ entry and transmitter release from sensory terminals. The correct choice—“Depolarizing primary afferents (primary afferent depolarization) reducing Ca²⁺ influx”—fits that description.",
      "“Blocking all postsynaptic AMPA receptors globally” does not match the mechanism (topic: Neuromodulation). PAD reduces presynaptic Ca²⁺ entry and transmitter release from sensory terminals. The correct choice—“Depolarizing primary afferents (primary afferent depolarization) reducing Ca²⁺ influx”—fits that description.",
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
      "“Tonotopic mapping on the basilar membrane” does not match the mechanism (topic: Visual System). Opponent receptive fields compare cone signals to encode color contrast. The correct choice—“Antagonistic cone inputs”—fits that description.",
      "“Olfactory receptor gene choice” does not match the mechanism (topic: Visual System). Opponent receptive fields compare cone signals to encode color contrast. The correct choice—“Antagonistic cone inputs”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Opponent receptive fields compare cone signals to encode color contrast.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The medial superior olive localizes low-frequency sounds using:",
    options: [
      "Interaural time differences via delay lines and coincidence detection",
      "Interaural level differences only above 10 kHz without timing",
      "Photoreceptor convergence in the fovea",
      "Olfactory bulb granule cell inhibition exclusively",
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
    question: "Rapid adaptation in Pacinian corpuscles means they respond best to:",
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
      "“Constant deep pressure without change” does not match the mechanism (topic: Somatosensation). Rapidly adapting receptors encode dynamic stimuli and silence during steady state. The correct choice—“Onset and offset of vibration, not steady pressure”—fits that description.",
      "“Sustained Merkel disk pressure” does not match the mechanism (topic: Somatosensation). Rapidly adapting receptors encode dynamic stimuli and silence during steady state. The correct choice—“Onset and offset of vibration, not steady pressure”—fits that description.",
      "“Steady odor presentation” does not match the mechanism (topic: Somatosensation). Rapidly adapting receptors encode dynamic stimuli and silence during steady state. The correct choice—“Onset and offset of vibration, not steady pressure”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Sparse coding in piriform cortex means:",
    options: [
      "Only a small fraction of neurons fire strongly for a given odor",
      "Every neuron fires identically for all odors",
      "Mitral cells never inhibit granule cells",
      "OSNs express all receptor types simultaneously",
    ],
    correct: 0,
    explanation: "Distributed sparse ensembles represent odor identity in cortex.",
    wrongExplanations: [
      "",
      "“Every neuron fires identically for all odors” does not match the mechanism (topic: Olfactory System). Distributed sparse ensembles represent odor identity in cortex. The correct choice—“Only a small fraction of neurons fire strongly for a given odor”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Distributed sparse ensembles represent odor identity in cortex.",
      "“OSNs express all receptor types simultaneously” does not match the mechanism (topic: Olfactory System). Distributed sparse ensembles represent odor identity in cortex. The correct choice—“Only a small fraction of neurons fire strongly for a given odor”—fits that description.",
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
      "“Retina and transduces photons (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). SNc dopamine neurons in midbrain project to dorsal striatum for motor control and learning. The correct choice—“Midbrain and provides dopaminergic input to striatum”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory epithelium and binds odorants (localizes the function to the wrong brain r…” does not match the mechanism (topic: Neuroanatomy). SNc dopamine neurons in midbrain project to dorsal striatum for motor control and learning. The correct choice—“Midbrain and provides dopaminergic input to striatum”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Gamma efferents adjust spindle sensitivity by contracting intrafusal fibers.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Tagging-and-capture models of synaptic consolidation propose that:",
    options: [
      "Synapses marked by activity capture plasticity-related proteins arriving globally",
      "All synapses strengthen without specificity",
      "Photopigment bleaching stores memory directly",
      "Requires electrical synapses can undergo LTP",
    ],
    correct: 0,
    explanation: "Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation.",
    wrongExplanations: [
      "",
      "“All synapses strengthen without specificity” does not match the mechanism (topic: Learning & Memory). Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation. The correct choice—“Synapses marked by activity capture plasticity-related proteins arriving globally”—fits that description.",
      "“Photopigment bleaching stores memory directly” does not match the mechanism (topic: Learning & Memory). Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation. The correct choice—“Synapses marked by activity capture plasticity-related proteins arriving globally”—fits that description.",
      "“Requires electrical synapses can undergo LTP” does not match the mechanism (topic: Learning & Memory). Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation. The correct choice—“Synapses marked by activity capture plasticity-related proteins arriving globally”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Conflicting monocular inputs alternate in conscious perception during rivalry.",
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
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
      "“Trigger photopigment regeneration” does not match the mechanism (topic: Electrical Synapses). Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case). The correct choice—“Hyperpolarize the coupled partner (if junction is open)”—fits that description.",
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
      "“Permanently open all Na⁺ channels without phosphorylation targets” does not match the mechanism (topic: Second Messengers). Autophosphorylation gives CaMKII memory of recent Ca²⁺ elevation, relevant to LTP maintenance. The correct choice—“Maintain kinase activity after Ca²⁺ returns to baseline”—fits that description.",
      "“Directly cleave SNARE proteins” does not match the mechanism (topic: Second Messengers). Autophosphorylation gives CaMKII memory of recent Ca²⁺ elevation, relevant to LTP maintenance. The correct choice—“Maintain kinase activity after Ca²⁺ returns to baseline”—fits that description.",
      "“Convert rods to cones” does not match the mechanism (topic: Second Messengers). Autophosphorylation gives CaMKII memory of recent Ca²⁺ elevation, relevant to LTP maintenance. The correct choice—“Maintain kinase activity after Ca²⁺ returns to baseline”—fits that description.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Without active transport, ion gradients collapse and V_m drifts toward 0 mV.",
      "“Block of all gap junctions (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Without active transport, ion gradients collapse and V_m drifts toward 0 mV. The correct choice—“Depolarization as Na⁺ and K⁺ gradients run down”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Negative charge and inward concentration gradient yield negative E_Cl.",
      "“Zero regardless of concentrations (contradicts the Nernst dependence on inside/outsi…” does not match the mechanism (topic: Nernst Equation). Negative charge and inward concentration gradient yield negative E_Cl. The correct choice—“Negative (inside relative to outside)”—fits that description.",
      "“Equal to E_Na (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). Negative charge and inward concentration gradient yield negative E_Cl. The correct choice—“Negative (inside relative to outside)”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius).",
      "“Zero (misstates how R_m, C_m, or geometry set τ or λ) — misstates how R_m, C_m, or g…” does not match the mechanism (topic: Passive Membrane Properties). For idealized geometry, R_i falls and R_m area changes can offset; classic result: λ scales with √(radius). The correct choice—“Unchanged if R_i scales inversely with diameter as in uniform geometry”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Persistent Na⁺ current (non-inactivating component) contributes to:",
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
      "“Exclusive repolarization after spikes” does not match the mechanism (topic: Action Potentials). Subthreshold Na⁺ current can boost depolarization and support rhythmic firing. The correct choice—“Subthreshold resonance and repeated firing near threshold”—fits that description.",
      "“Phototransduction in cones” does not match the mechanism (topic: Action Potentials). Subthreshold Na⁺ current can boost depolarization and support rhythmic firing. The correct choice—“Subthreshold resonance and repeated firing near threshold”—fits that description.",
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
      "“The olfactory epithelium during odor binding (misapplies how active propagation uses…” does not match the mechanism (topic: Action Potential Propagation). Abnormal channel redistribution after injury can create ectopic excitable zones. The correct choice—“Damaged axon segments with altered channel density”—fits that description.",
      "“CSF in ventricles without tissue (misapplies how active propagation uses local circu…” does not match the mechanism (topic: Action Potential Propagation). Abnormal channel redistribution after injury can create ectopic excitable zones. The correct choice—“Damaged axon segments with altered channel density”—fits that description.",
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
      "“Inward (influx)” does not match the mechanism (topic: Electrical Signaling). V_m above E_K drives K⁺ outward through open channels. The correct choice—“Outward (efflux)”—fits that description.",
      "“Zero” does not match the mechanism (topic: Electrical Signaling). V_m above E_K drives K⁺ outward through open channels. The correct choice—“Outward (efflux)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m above E_K drives K⁺ outward through open channels.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Endocannabinoids are synthesized postsynaptically and inhibit presynaptic release.",
      "“Opening nicotinic pores at the neuromuscular junction (describes the wrong synaptic …” does not match the mechanism (topic: Chemical Synapses). Endocannabinoids are synthesized postsynaptically and inhibit presynaptic release. The correct choice—“Traveling from postsynaptic to presynaptic terminals to reduce release”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Heterogeneous release sites and Ca²⁺ dynamics spread release timing.",
      "“Block of all voltage-gated Ca²⁺ channels (mixes up presynaptic release with postsyna…” does not match the mechanism (topic: Synaptic Transmission). Heterogeneous release sites and Ca²⁺ dynamics spread release timing. The correct choice—“Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity”—fits that description.",
      "“Direct electrical coupling without vesicles (mixes up presynaptic release with posts…” does not match the mechanism (topic: Synaptic Transmission). Heterogeneous release sites and Ca²⁺ dynamics spread release timing. The correct choice—“Release from distant boutons with slower Ca²⁺ clearance or lower sensitivity”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Inverse agonists of G-protein-coupled receptors:",
    options: [
      "Stabilize inactive receptor conformations below basal activity",
      "Always open ionotropic pores directly",
      "Cleave SNARE proteins at presynaptic terminals",
      "Increase photopigment bleaching in rods",
    ],
    correct: 0,
    explanation: "Inverse agonists reduce constitutive receptor activity by favoring inactive states.",
    wrongExplanations: [
      "",
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Inverse agonists reduce constitutive receptor activity by favoring inactive states.",
      "“Cleave SNARE proteins at presynaptic terminals” does not match the mechanism (topic: Receptor Types). Inverse agonists reduce constitutive receptor activity by favoring inactive states. The correct choice—“Stabilize inactive receptor conformations below basal activity”—fits that description.",
      "“Increase photopigment bleaching in rods” does not match the mechanism (topic: Receptor Types). Inverse agonists reduce constitutive receptor activity by favoring inactive states. The correct choice—“Stabilize inactive receptor conformations below basal activity”—fits that description.",
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
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators produce rhythmic motor output because:",
    options: [
      "Recurrent excitatory and inhibitory connections form pacemaker-like loops",
      "Sensory input is required every cycle without exception",
      "Requires gap junctions exist in the circuit",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
    ],
    correct: 0,
    explanation: "CPGs generate organized rhythms via interconnected interneuron circuits.",
    wrongExplanations: [
      "",
      "“Sensory input is required every cycle without exception” does not match the mechanism (topic: Neural Circuits). CPGs generate organized rhythms via interconnected interneuron circuits. The correct choice—“Recurrent excitatory and inhibitory connections form pacemaker-like loops”—fits that description.",
      "“Requires gap junctions exist in the circuit” does not match the mechanism (topic: Neural Circuits). CPGs generate organized rhythms via interconnected interneuron circuits. The correct choice—“Recurrent excitatory and inhibitory connections form pacemaker-like loops”—fits that description.",
      "“Assigns an unrelated sensory or synaptic mechanism to this context” does not match the mechanism (topic: Neural Circuits). CPGs generate organized rhythms via interconnected interneuron circuits. The correct choice—“Recurrent excitatory and inhibitory connections form pacemaker-like loops”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Acetylcholine in cortex during arousal often:",
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
      "“Closes all nicotinic receptors permanently” does not match the mechanism (topic: Neuromodulation). Cholinergic modulation adjusts gain and intrinsic properties in cortical circuits. The correct choice—“Reduces adaptation in pyramidal cells and enhances signal detection”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Eliminates all IPSPs without receptors” does not match the mechanism (topic: Neuromodulation). Cholinergic modulation adjusts gain and intrinsic properties in cortical circuits. The correct choice—“Reduces adaptation in pyramidal cells and enhances signal detection”—fits that description.",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M pathway cells have transient responses suited for motion and low-contrast detection.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Muscle spindle length without change” does not match the mechanism (topic: Visual System). M pathway cells have transient responses suited for motion and low-contrast detection. The correct choice—“High temporal frequency and motion”—fits that description.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The lateral superior olive uses interaural level differences primarily for:",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated C fibers convey slow pain and temperature.",
      "“Photopic color vision” does not match the mechanism (topic: Somatosensation). Unmyelinated C fibers convey slow pain and temperature. The correct choice—“Slow, dull pain and warm/cold sensations”—fits that description.",
      "“High-frequency auditory pitch via phase locking” does not match the mechanism (topic: Somatosensation). Unmyelinated C fibers convey slow pain and temperature. The correct choice—“Slow, dull pain and warm/cold sensations”—fits that description.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Enantiomers can smell different because:",
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
      "“Mitral cells lack any inhibition” does not match the mechanism (topic: Olfactory System). Stereochemistry affects interaction with odorant receptor binding pockets. The correct choice—“Receptor binding geometry differs despite identical chemical formula”—fits that description.",
      "“OSNs do not express receptors” does not match the mechanism (topic: Olfactory System). Stereochemistry affects interaction with odorant receptor binding pockets. The correct choice—“Receptor binding geometry differs despite identical chemical formula”—fits that description.",
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
      "“Retina to olfactory bulb” does not match the mechanism (topic: Neuroanatomy). Fornix fibers carry hippocampal output to diencephalic and septal regions. The correct choice—“Hippocampus to mammillary bodies and related targets”—fits that description.",
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
      "“Block all movement without exception (maps the lesion to the wrong motor pathway or …” does not match the mechanism (topic: Motor Systems). Striatal direct pathway reduces basal ganglia output, releasing thalamic inhibition. The correct choice—“Facilitate intended movements by disinhibiting thalamocortical activity”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Striatal direct pathway reduces basal ganglia output, releasing thalamic inhibition.",
    ]
  }
];
