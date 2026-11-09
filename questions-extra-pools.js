// MCB80x extra question pools — HarvardX Fundamentals of Neuroscience

const PART1_EXTRA_POOL = [
  {
    topic: "Goldman Equation",
    question: "At rest, if P_K is much greater than P_Na and P_Cl is negligible, the membrane potential is dominated by?",
    options: [
      "Sodium equilibrium (E_Na) if voltage-gated Na⁺ channels are inactivated",
      "Potassium equilibrium (E_K)",
      "Exactly 0 mV with dominant K⁺ permeability at rest",
      "The reversal of the pump with dominant K⁺ permeability at rest",
    ],
    correct: 1,
    explanation: "Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed will shift the Goldman resting potential?",
    options: [
      "Toward E_Na (less negative)",
      "Toward E_K",
      "To exactly, 60 mV",
      "Away from any ion equilibrium",
    ],
    correct: 0,
    explanation: "Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase contributes directly to resting potential mainly by?",
    options: [
      "Maintaining ion gradients that set equilibrium",
      "Opening voltage-gated Na⁺ channels",
      "Depolarizing the cell to threshold on every cycle",
      "Blocking K⁺ leak channels",
    ],
    correct: 0,
    explanation: "The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains, V_m will tend to move?",
    options: [
      "Toward E_Na",
      "Toward E_K as if K⁺ leak were unchanged",
      "To 0 mV instantly regardless of gradients",
      "Below −150 mV",
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a divalent cation such as Ca²⁺, a 10-fold concentration ratio at 37°C changes the Nernst potential by roughly?",
    options: [
      "~31 mV (half the monovalent slope)",
      "≈ ~62 mV at 37 °C if voltage-gated Na⁺ channels are inactivated",
      "≈ ~124 mV at 37 °C at mammalian body temperature",
      "≈ 0 mV (valence cancels) at 37 °C at mammalian body temperature",
    ],
    correct: 0,
    explanation: "Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If [K⁺]_out equals [K⁺]_in, the Nernst equilibrium potential for K⁺?",
    options: [
      "0 mV",
      "−90 mV",
      "60 mV",
      "Undefined",
    ],
    correct: 0,
    explanation: "With no concentration gradient, E_K = 0 mV regardless of channel presence.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Cooling a preparation from 37°C to 20°C (holding concentrations fixed) will?",
    options: [
      "Reduce the Nernst slope in mV per decade",
      "Double the Nernst slope",
      "Eliminate the need for the Goldman equation",
      "Make E_Na exactly 0 mV",
    ],
    correct: 0,
    explanation: "RT/F decreases with temperature, reducing mV per log concentration change.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If V_m is held at E_K, the driving force on K⁺?",
    options: [
      "Zero",
      "Maximal outward",
      "Maximal inward",
      "Equal to the pump flux",
    ],
    correct: 0,
    explanation: "At equilibrium potential, net electrochemical driving force for that ion is zero.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At equilibrium potential, net electrochemical driving force for that ion is zero.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance arises primarily because?",
    options: [
      "The lipid bilayer stores charge separated",
      "Myelin increases ion channel density at mammalian body temperature",
      "Na⁺ channels pump charge into the ER under typical experimental conditions",
      "Dendrites lack any resistance when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "During a step of constant depolarizing current, the initial voltage deflection is dominated by?",
    options: [
      "Capacitive charging (ΔV ≈ I/C)",
      "Steady-state leak mainly with no transient",
      "Action potential generation",
      "Saltatory conduction",
    ],
    correct: 0,
    explanation: "Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane resistance R_m while C_m is unchanged will?",
    options: [
      "Increase τ and slow subthreshold responses",
      "Decrease τ at steady state in normoxic tissue",
      "Prevent passive decay along dendrites at steady state in normoxic tissue",
      "Block inactivation of Na⁺ channels at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "τ = R_m C_m; higher R_m lengthens the membrane time constant.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Decreasing R_m (more leak) with unchanged R_i will?",
    options: [
      "Shorten λ and attenuate dendritic signals",
      "Lengthen λ",
      "Speed action potentials in myelinated axons",
      "Raise E_K",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); lower R_m shrinks the space constant.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ = √(R_m/R_i); lower R_m shrinks the space constant.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal synapse is typically smaller and slower because of?",
    options: [
      "Cable filtering (attenuation",
      "Complete absence of ionotropic receptors",
      "Myelin on dendrites",
      "Main mechanism: electrical synapses distally",
    ],
    correct: 0,
    explanation: "Passive spread along dendrites attenuates amplitude and spreads rise time.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Passive spread along dendrites attenuates amplitude and spreads rise time.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input conductance (1/R_in) increases when?",
    options: [
      "More ion channels open in the dendritic",
      "Myelin thickness increases along a uniformly leaky cable",
      "Extracellular K⁺ drops at steady state in normoxic tissue",
      "Temperature falls below 0°C under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Additional open channels lower input resistance and increase conductance.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "In whole-cell patch clamp, breaking into the cell interior allows the electrode to?",
    options: [
      "Dialyze the cytoplasm",
      "Measure extracellular field potentials",
      "Record from single channels without seal",
      "Block all K⁺ currents irreversibly",
    ],
    correct: 0,
    explanation: "Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules.",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "What does A gigaohm seal in patch clamp reduce?",
    options: [
      "Leak current between pipette and bath",
      "Membrane capacitance to zero",
      "The need for any amplifier",
      "Most synaptic transmission in the slice",
    ],
    correct: 0,
    explanation: "Tight seals isolate the patch from bath noise and enable single-channel resolution.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Cell-attached patch configuration is useful for recording?",
    options: [
      "Single-channel currents without disrupting",
      "Requires action potentials in axons when Na⁺ inactivation has progressed",
      "Population spikes in cortex along a uniformly leaky cable",
      "Magnetic fields from myelin along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "The patch stays on the outside surface, preserving intracellular milieu.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The patch stays on the outside surface, preserving intracellular milieu.",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials primarily by binding?",
    options: [
      "Voltage-gated Na⁺ channel pore",
      "Voltage-gated K⁺ channels during the rising phase of the spike",
      "The Na⁺/K⁺ pump along a uniformly leaky cable",
      "Gap junction connexins during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "TTX selectively occludes voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively occludes voltage-gated Na⁺ channels.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to axons typically prolongs spikes by blocking?",
    options: [
      "Certain voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels when Na⁺ inactivation has progressed",
      "Glutamate receptors during the rising phase of the spike",
      "Myelin basic protein when Na⁺ inactivation has progressed",
    ],
    correct: 0,
    explanation: "TEA blocks some K⁺ channels, slowing repolarization.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The upswing of the squid giant axon action potential is dominated by?",
    options: [
      "Voltage-gated Na⁺ influx",
      "Voltage-gated K⁺ efflux alone",
      "Cl⁻ influx",
      "Capacitive current mainly with no ionic current",
    ],
    correct: 0,
    explanation: "Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike often reflects?",
    options: [
      "Continued K⁺ efflux through delayed",
      "Sustained Na⁺ influx when Na⁺ inactivation has progressed",
      "Opening of all gap junctions during the rising phase of the spike",
      "Pump reversal during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "K⁺ channels remain active briefly, hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. K⁺ channels remain active briefly, hyperpolarizing the membrane.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: K⁺ channels remain active briefly, hyperpolarizing the membrane.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated Na⁺ channels are held in the inactivated state, the neuron?",
    options: [
      "Cannot fire another action potential until",
      "Fires at higher frequency during the rising phase of the spike",
      "Depolarizes to E_Na permanently during the rising phase of the spike",
      "Loses all resting potential along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period).",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best described as the voltage at which?",
    options: [
      "Net inward current exceeds net outward",
      "K⁺ channels fully close forever during the rising phase of the spike",
      "The pump stops when Na⁺ inactivation has progressed",
      "Myelin is stripped along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Positive feedback from Na⁺ activation makes depolarization self-sustaining.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A subthreshold depolarization decays because?",
    options: [
      "Passive leak currents oppose the change",
      "Na⁺ channels cannot ever open when Na⁺ inactivation has progressed",
      "Myelin prevents all current along a uniformly leaky cable",
      "Synapses are inhibitory when Na⁺ inactivation has progressed",
    ],
    correct: 0,
    explanation: "Subthreshold events are passive; leak restores resting potential.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold events are passive; leak restores resting potential.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Lowering extracellular Ca²⁺ can narrow action potentials partly by?",
    options: [
      "Reducing surface charge screening",
      "Blocking Na⁺ channels irreversibly",
      "Eliminating K⁺ gradients",
      "Stopping saltatory conduction",
    ],
    correct: 0,
    explanation: "Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In continuous conduction, the action potential moves because?",
    options: [
      "Local current loops depolarize adjacent membrane",
      "The spike travels as a single electron flow in myelin",
      "Main mechanism: the soma fires repeatedly",
      "Synaptic vesicles propagate down the axon",
    ],
    correct: 0,
    explanation: "Depolarization spreads passively to the next segment, triggering local Na⁺ influx.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depolarization spreads passively to the next segment, triggering local Na⁺ influx.",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Saltatory conduction increases conduction velocity mainly by?",
    options: [
      "Reducing capacitive load",
      "Increasing axon diameter mainly in the soma",
      "Blocking K⁺ at many internode",
      "Converting spikes to graded potentials",
    ],
    correct: 0,
    explanation: "Myelin insulates internodes; nodes concentrate ion channels for efficient jumping.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin insulates internodes; nodes concentrate ion channels for efficient jumping.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetic block of myelinated fibers often fails first in?",
    options: [
      "Small-diameter fibers",
      "Main mechanism: motor alpha fibers",
      "Main mechanism: proprioceptive Ia fibers",
      "Unmyelinated C fibers primarily in many cells",
    ],
    correct: 0,
    explanation: "MCB80x emphasizes use-dependent block and diameter effects; small sensory fibers are often affected early clinically.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MCB80x emphasizes use-dependent block and diameter effects; small sensory fibers are often affected early clinically.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MCB80x emphasizes use-dependent block and diameter effects; small sensory fibers are often affected early clinically.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MCB80x emphasizes use-dependent block and diameter effects; small sensory fibers are often affected early clinically.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "At a node of Ranvier, voltage-gated channels are concentrated to?",
    options: [
      "Regenerate the action potential",
      "Pump Na⁺ into myelin during the rising phase of the spike",
      "Generate EPSPs during the rising phase of the spike",
      "Store synaptic vesicles during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "High Na⁺ channel density at nodes supports saltatory propagation.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High Na⁺ channel density at nodes supports saltatory propagation.",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Demyelination slows conduction because?",
    options: [
      "Effective capacitance increases",
      "Na⁺ channels disappear from the genome",
      "K⁺ equilibrium becomes, 60 mV",
      "Axons become purely passive forever",
    ],
    correct: 0,
    explanation: "Loss of insulation forces more membrane to be charged, delaying regeneration.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An antidromic action potential is one that?",
    options: [
      "Propagates toward the soma",
      "Seldom occurs in sensory neurons",
      "Main mechanism: occurs in dendrites",
      "Is subthreshold",
    ],
    correct: 0,
    explanation: "Antidromic spikes travel from axon toward soma; orthodromic is soma-to-terminal.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Antidromic spikes travel from axon toward soma; orthodromic is soma-to-terminal.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Antidromic spikes travel from axon toward soma; orthodromic is soma-to-terminal.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Antidromic spikes travel from axon toward soma; orthodromic is soma-to-terminal.",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "The axon initial segment (AIS) often has a high density of?",
    options: [
      "Voltage-gated Na⁺ channels",
      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Photopigment molecules",
      "Olfactory receptors",
    ],
    correct: 0,
    explanation: "MCB80x highlights AIS as a primary site of action potential generation.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. MCB80x highlights AIS as a primary site of action potential generation.",
      "",
      "",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "Graded synaptic potentials summate at the AIS to?",
    options: [
      "Determine whether threshold is reached for spike",
      "Directly release neurotransmitter without spikes",
      "Generate myelin",
      "Reverse the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Integration at the AIS converts synaptic input into firing output.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Ball-and-chain inactivation in Na⁺ channels refers to?",
    options: [
      "An intracellular inactivation particle",
      "Myelin wrapping the channel along a uniformly leaky cable",
      "Glutamate binding to the pore following presynaptic Ca²⁺ influx",
      "Pump phosphorylation at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Fast inactivation involves a cytoplasmic domain occluding the channel.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fast inactivation involves a cytoplasmic domain occluding the channel.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Delayed rectifier K⁺ channels open with slower kinetics than Na⁺ channels to?",
    options: [
      "Repolarize the membrane after the Na⁺",
      "Depolarize to threshold faster along a uniformly leaky cable",
      "Permit indefinite Na⁺ influx under typical experimental conditions",
      "Close gap junctions under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Delayed K⁺ activation terminates the spike.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "At the potassium equilibrium potential, net K⁺ current is zero even though?",
    options: [
      "Individual K⁺ ions still cross the",
      "No ions move at all at steady state in normoxic tissue",
      "The pump is off under typical experimental conditions",
      "Na⁺ channels are open maximally at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Equilibrium means balanced fluxes, not absence of movement.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "Resting potential is a steady state, not a true equilibrium, because?",
    options: [
      "Active transport maintains ion gradients",
      "No channels are open when homeostatic mechanisms are intact",
      "Temperature is zero at steady state in normoxic tissue",
      "Capacitance is infinite when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "The pump continuously works to offset passive ion loss.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Voltage clamp was developed primarily to?",
    options: [
      "Hold membrane voltage constant",
      "Measure resting potential without perturbation",
      "Visualize myelin with light microscopy alone",
      "Count synaptic vesicles directly",
    ],
    correct: 0,
    explanation: "Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
      "",
      "",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Current clamp injects current and records?",
    options: [
      "Resulting voltage changes",
      "Fixed voltage with varying current",
      "Main mechanism: magnetic resonance signal",
      "Quantal content without electrodes",
    ],
    correct: 0,
    explanation: "Current clamp reveals integrative and spiking behavior under controlled input.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current clamp reveals integrative and spiking behavior under controlled input.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current clamp reveals integrative and spiking behavior under controlled input.",
      "",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "Voltage-gated Na⁺ channels are far more selective than leak channels partly because?",
    options: [
      "Pore architecture and charge filtering",
      "They open at E_K at steady state in normoxic tissue",
      "They pump ions actively when homeostatic mechanisms are intact",
      "They are located mainly in dendrites under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Selectivity filters and gating restrict permeation to Na⁺.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Selectivity filters and gating restrict permeation to Na⁺.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Selectivity filters and gating restrict permeation to Na⁺.",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "If E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors?",
    options: [
      "Inward Na⁺ movement (into the cell)",
      "Outward Na⁺ when homeostatic mechanisms are intact",
      "No movement regardless of channels at steady state in normoxic tissue",
      "Movement through gap junctions under typical experimental conditions",
    ],
    correct: 0,
    explanation: "V_m negative relative to E_Na drives cation influx if channels open.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m negative relative to E_Na drives cation influx if channels open.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m negative relative to E_Na drives cation influx if channels open.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Temporal summation requires synaptic inputs that?",
    options: [
      "Overlap in time before passive decay",
      "Arrive exactly one year apart when homeostatic mechanisms are intact",
      "Are inhibitory when homeostatic mechanisms are intact",
      "Occur mainly in myelin when Na⁺ inactivation has progressed",
    ],
    correct: 0,
    explanation: "EPSPs must summate within the membrane time constant window.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs must summate within the membrane time constant window.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs must summate within the membrane time constant window.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Spatial summation occurs when?",
    options: [
      "Multiple synaptic inputs on different branches",
      "One synapse fires repeatedly after decay",
      "K⁺ channels alone set the photoreceptor resting potential in light",
      "The cell is voltage-clamped at 0 mV",
    ],
    correct: 0,
    explanation: "Inputs from different locations add passively toward spike initiation.",
    wrongExplanations: [
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Inputs from different locations add passively toward spike initiation.",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "When Ouabain blocks the Na⁺/K⁺ pump and over time, which change in resting membrane potential is most likely over time?",
    options: [
      "Depolarize cells as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize instantly to −120 mV",
      "Prevent all action potentials within one millisecond",
      "Open all glutamate receptors",
    ],
    correct: 0,
    explanation: "Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that increases K⁺ conductance at rest will generally?",
    options: [
      "Hyperpolarize or stabilize V_m nearer E_K",
      "Depolarize toward E_Na",
      "Block all spikes by removing Na⁺ channels from membrane",
      "Eliminate capacitance",
    ],
    correct: 0,
    explanation: "More K⁺ conductance pulls V_m toward E_K (often more negative).",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. More K⁺ conductance pulls V_m toward E_K (often more negative).",
      "",
      "Membrane capacitance stores charge (Q = CV) and slows voltage changes, but capacitive current alone cannot produce the selective Na⁺ influx and delayed K⁺ efflux that underlie spike upstroke and repolarization. More K⁺ conductance pulls V_m toward E_K (often more negative).",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Blocking voltage-gated K⁺ channels during an action potential typically?",
    options: [
      "Broadens the spike and may increase firing",
      "Prevents Na⁺ influx entirely at steady state in normoxic tissue",
      "Hyperpolarizes below rest instantly when homeostatic mechanisms are intact",
      "Stops propagation mainly in dendrites at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "Slower repolarization prolongs depolarization and can alter refractory period.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Slower repolarization prolongs depolarization and can alter refractory period.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Slower repolarization prolongs depolarization and can alter refractory period.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If g_Na increases transiently during a spike while g_K rises later, the sequence reflects?",
    options: [
      "Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation",
      "Goldman equation for multi-ion resting potential (not time-varying spike conductances)",
      "Capacitive charging of the membrane with no voltage-gated conductance changes",
      "Steady-state Nernst equilibrium for a single ion with g_Na and g_K fixed",
    ],
    correct: 0,
    explanation: "Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
    wrongExplanations: [
      "",
      "The Goldman equation combines permeabilities and concentrations to estimate steady resting voltage when multiple ions are relevant. It does not, by itself, describe the fast temporal sequence of rising g_Na and delayed g_K during a single spike—that requires Hodgkin–Huxley (or equivalent) kinetics. Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
      "Membrane capacitance stores charge (Q = CV) and slows voltage changes, but capacitive current alone cannot produce the selective Na⁺ influx and delayed K⁺ efflux that underlie spike upstroke and repolarization. Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
      "The Nernst equation gives the equilibrium potential for one ion when its inside/outside concentrations are fixed. It does not explain coordinated, time-varying changes in Na⁺ and K⁺ conductance during an action potential. Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Reversal potential for a mixed ionic current is the voltage where?",
    options: [
      "Net ionic current through that conductance is zero",
      "The pump rate is maximal",
      "Capacitive current equals action potential amplitude",
      "Main mechanism: cl⁻ moves",
    ],
    correct: 0,
    explanation: "Reversal potential satisfies I_ion = g(V_m − E_rev) = 0.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reversal potential satisfies I_ion = g(V_m − E_rev) = 0.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Increasing axon length constant λ without changing diameter would suggest?",
    options: [
      "Higher R_m or lower R_i",
      "Lower R_m",
      "Infinite capacitance",
      "Removal of all Na⁺ channels",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); increased λ implies better passive spread along the cable.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ = √(R_m/R_i); increased λ implies better passive spread along the cable.",
      "",
      "",
    ]
  }
];

const PART2_EXTRA_POOL = [
  {
    topic: "Chemical Synapses",
    question: "Quantal transmission means postsynaptic responses fluctuate in steps because?",
    options: [
      "Release occurs in discrete vesicle units (quanta)",
      "Ion channels open continuously without discreteness",
      "Main mechanism: electrical synapses are used",
      "Neurotransmitter is infinite in concentration",
    ],
    correct: 0,
    explanation: "Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Miniature EPSPs (mEPSPs) are observed when?",
    options: [
      "Spontaneous single-vesicle fusion occurs",
      "The axon is cut and sealed",
      "Main mechanism: inhibitory neurons are present",
      "Myelin covers the synapse",
    ],
    correct: 0,
    explanation: "Spontaneous quantal release produces mEPSPs/mEPSCs.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spontaneous quantal release produces mEPSPs/mEPSCs.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Increasing presynaptic Ca²⁺ entry near active zones generally?",
    options: [
      "Increases release probability",
      "Eliminates all vesicle fusion",
      "Converts ionotropic receptors to metabotropic",
      "Blocks postsynaptic K⁺ channels",
    ],
    correct: 0,
    explanation: "Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion.",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Botulinum toxin reduces synaptic transmission by cleaving?",
    options: [
      "SNARE proteins required for vesicle fusion",
      "Voltage-gated Na⁺ channels in the axon hillock",
      "Glutamate entirely in the cleft",
      "Most postsynaptic AMPA receptors",
    ],
    correct: 0,
    explanation: "Botulinum proteolysis of SNAREs prevents exocytosis.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Botulinum proteolysis of SNAREs prevents exocytosis.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptic delay is largely attributable to?",
    options: [
      "Ca²⁺ influx, vesicle fusion",
      "Action potential backpropagation mainly in dendrites",
      "Myelin thickness at the synapse",
      "Pump reversal at the postsynaptic density",
    ],
    correct: 0,
    explanation: "Several presynaptic steps add milliseconds between spike and response.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Several presynaptic steps add milliseconds between spike and response.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "The readily releasable pool refers to vesicles that?",
    options: [
      "Are docked/primed and can fuse quickly after",
      "Are permanently trapped in the nucleus",
      "Requires contain neuropeptides for hours-long release",
      "Exist mainly in electrical synapses",
    ],
    correct: 0,
    explanation: "Primed vesicles supply the first wave of evoked release.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Primed vesicles supply the first wave of evoked release.",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Endocytosis after exocytosis is needed to?",
    options: [
      "Recycle vesicle membrane",
      "Generate action potentials in the cleft",
      "Open gap junctions",
      "Depolarize all mitochondria",
    ],
    correct: 0,
    explanation: "Without recycling, synapses deplete vesicle supply.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells typically mediate?",
    options: [
      "Fast excitatory postsynaptic currents at many",
      "Slow G-protein inhibitory currents",
      "Direct opening of voltage-gated Na⁺ in myelin",
      "Peptide hormone release",
    ],
    correct: 0,
    explanation: "AMPA channels dominate fast EPSCs when Glu is released.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA channels dominate fast EPSCs when Glu is released.",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>A</sub> receptors are ionotropic and conduct primarily?",
    options: [
      "Cl⁻",
      "Na⁺ primarily",
      "Ca²⁺ mainly in all neurons",
      "K⁺ seldom",
    ],
    correct: 0,
    explanation: "GABA<sub>A</sub> is a ligand-gated Cl⁻ channel (E_Cl sets direction).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABAA is a ligand-gated Cl⁻ channel (E_Cl sets direction).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABAA is a ligand-gated Cl⁻ channel (E_Cl sets direction).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GABAA is a ligand-gated Cl⁻ channel (E_Cl sets direction).",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which statement best describes Nicotinic ACh receptors at the neuromuscular junction?",
    options: [
      "Ligand-gated cation channels causing",
      "Metabotropic GPCRs when ligand-gated channels are open",
      "Voltage-gated Cl⁻ channels following presynaptic Ca²⁺ influx",
      "Electrical synapses at fast chemical synapses",
    ],
    correct: 0,
    explanation: "nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber.",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Which capability best describes Muscarinic ACh receptors are metabotropic and?",
    options: [
      "Modulate K⁺ channels",
      "Directly form a fast cation pore identical to AMPA",
      "Replace SNARE proteins",
      "Conduct myelin insulation",
    ],
    correct: 0,
    explanation: "Muscarinic receptors use G-proteins for slower modulatory effects.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Activation of phospholipase C via Gq often increases?",
    options: [
      "IP3 and DAG, raising intracellular Ca²⁺ from",
      "CAMP without any Ca²⁺ change",
      "Myelin basic protein synthesis",
      "Voltage-gated Na⁺ density at nodes instantly",
    ],
    correct: 0,
    explanation: "PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP-dependent protein kinase (PKA) can modulate synapses by?",
    options: [
      "Phosphorylating channels",
      "Cleaving SNARE proteins",
      "Blocking all glutamate release permanently",
      "Opening gap junctions in myelin",
    ],
    correct: 0,
    explanation: "PKA phosphorylation alters channel function and gene expression.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude at the soma mainly by?",
    options: [
      "Lowering input resistance so synaptic",
      "Increasing Na⁺ channel density at AIS",
      "Preventing any Cl⁻ flux",
      "Eliminating temporal summation entirely",
    ],
    correct: 0,
    explanation: "Increased conductance diverts current, reducing voltage change elsewhere.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased conductance diverts current, reducing voltage change elsewhere.",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in some circuits refers to?",
    options: [
      "Inhibitory input scaling excitatory drive",
      "Adding spatial summation without time",
      "Blocking all GABA release",
      "Converting spikes to graded release mainly in retina",
    ],
    correct: 0,
    explanation: "Inhibition can divide or scale excitation rather than only subtract absolutely.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition can divide or scale excitation rather than only subtract absolutely.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition can divide or scale excitation rather than only subtract absolutely.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after repetitive firing often reflects?",
    options: [
      "Depletion of the readily releasable vesicle pool",
      "Persistent removal of all postsynaptic receptors",
      "Myelin growth in the cleft",
      "Requires lTP induction",
    ],
    correct: 0,
    explanation: "High-frequency use exhausts primed vesicles temporarily.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Facilitation at some synapses is attributed partly to?",
    options: [
      "Residual presynaptic Ca²⁺ enhancing",
      "Complete SNARE destruction",
      "Blocking all K⁺ channels in the cleft",
      "Loss of action potentials",
    ],
    correct: 0,
    explanation: "Ca²⁺ buildup increases P_release for subsequent spikes.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Hebbian plasticity is summarized as?",
    options: [
      "Cells that fire together wire together",
      "Random synapse elimination",
      "Main mechanism: inhibitory synapses strengthen with uncorrelated input",
      "Myelin determines synaptic weight alone",
    ],
    correct: 0,
    explanation: "Correlated pre/post activity drives LTP-like strengthening.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre/post activity drives LTP-like strengthening.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre/post activity drives LTP-like strengthening.",
      "",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "LTD (long-term depression) can be induced when?",
    options: [
      "Postsynaptic activity is low during",
      "Main mechanism: a single mEPSP occurs once",
      "Most NMDA receptors are removed genetically",
      "Main mechanism: electrical synapses fire",
    ],
    correct: 0,
    explanation: "Specific timing/frequency rules can weaken synapses (LTD).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Specific timing/frequency rules can weaken synapses (LTD).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Specific timing/frequency rules can weaken synapses (LTD).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Specific timing/frequency rules can weaken synapses (LTD).",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "CaMKII activation postsynaptically is associated with?",
    options: [
      "LTP maintenance at many glutamatergic",
      "Immediate botulinum effects without changes in presynaptic release probability",
      "Main mechanism: gABA<sub>B</sub> signaling at fast chemical synapses",
      "Saltatory conduction failure during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength.",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates corticostriatal synapses largely via?",
    options: [
      "D1/D2 GPCRs changing cAMP",
      "Direct nAChR pores at many synapse",
      "Requires gap junction coupling",
      "Myelin thickness",
    ],
    correct: 0,
    explanation: "Dopamine GPCRs tune excitability and plasticity in striatal circuits.",
    wrongExplanations: [
      "",
      "",
      "",
      "Basal ganglia motor control involves dopamine from substantia nigra pars compacta to striatum. Membrane equations or retinal biochemistry do not substitute for that circuit logic. Dopamine GPCRs tune excitability and plasticity in striatal circuits.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine from locus coeruleus often?",
    options: [
      "Increases arousal and modulates sensory",
      "Blocks all Na⁺ channels permanently when brainstem arousal nuclei are active",
      "Is the primary transmitter at NMJ during quiet wakefulness",
      "Requires activates GABA<sub>A</sub> at fast chemical synapses",
    ],
    correct: 0,
    explanation: "NE modulates attention/arousal through widespread noradrenergic projections.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonin (5-HT) modulates circuits through?",
    options: [
      "Multiple receptor subtypes (many GPCRs) with",
      "A single ionotropic receptor mainly in mammals",
      "Exclusive action on myelin",
      "Direct voltage-gated Na⁺ gating",
    ],
    correct: 0,
    explanation: "5-HT has broad neuromodulatory roles via many receptor types.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: 5-HT has broad neuromodulatory roles via many receptor types.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: 5-HT has broad neuromodulatory roles via many receptor types.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators differ from fast transmitters mainly because they?",
    options: [
      "Act on longer timescales and via second messengers / volume transmission",
      "Often use electrical synapses",
      "Seldom affect ion channels",
      "Equates electrical synapses with chemical quantal transmission at the NMJ",
    ],
    correct: 0,
    explanation: "Modulators reshape network state over seconds to minutes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Modulators reshape network state over seconds to minutes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Modulators reshape network state over seconds to minutes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Modulators reshape network state over seconds to minutes.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition occurs when?",
    options: [
      "An excitatory input drives both principal cells",
      "Inhibition returns to the same cell that was excited (feedback)",
      "HCN channels are silent while cGMP keeps CNG channels open",
      "Myelin provides inhibition",
    ],
    correct: 0,
    explanation: "Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedback (recurrent) inhibition stabilizes firing by?",
    options: [
      "Interneurons inhibiting the same or nearby",
      "Blocking all EPSPs permanently",
      "Preventing any action potentials in interneurons",
      "Electrical synapses replace chemical transmission at the NMJ",
    ],
    correct: 0,
    explanation: "Recurrent loops limit runaway excitation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators (CPGs) can produce rhythms?",
    options: [
      "Without sensory input for each cycle",
      "Main mechanism: when most muscle spindle fires once",
      "Primarily in cerebellar Purkinje somata alone",
      "Main mechanism: via myelin oscillations",
    ],
    correct: 0,
    explanation: "CPGs underlie breathing, locomotion, and other rhythmic motor patterns.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CPGs underlie breathing, locomotion, and other rhythmic motor patterns.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CPGs underlie breathing, locomotion, and other rhythmic motor patterns.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: CPGs underlie breathing, locomotion, and other rhythmic motor patterns.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Inhibitory interneurons in cortex often release?",
    options: [
      "GABA",
      "Glutamate primarily",
      "Acetylcholine mainly at most synapse",
      "Myelin basic protein",
    ],
    correct: 0,
    explanation: "Most cortical interneurons are GABAergic.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most cortical interneurons are GABAergic.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Most cortical interneurons are GABAergic.",
      "",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexin-based gap junctions allow?",
    options: [
      "Direct ionic and small-molecule coupling",
      "Requires retrograde peptide signaling",
      "Saltatory conduction in unmyelinated axons",
      "Quantal release from vesicles",
    ],
    correct: 0,
    explanation: "Gap junctions electrically couple adjacent neurons or glia.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses are often faster than chemical synapses because?",
    options: [
      "No vesicle fusion or diffusion delay is",
      "They use second messengers at fast chemical synapses",
      "They require NMDA activation when ligand-gated channels are open",
      "They depend on myelin stripping along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Current flows directly through connexons with minimal delay.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current flows directly through connexons with minimal delay.",
      "",
      "",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Rectifying electrical synapses conduct better in one direction because?",
    options: [
      "Connexon subunit composition creates",
      "Myelin blocks reverse current",
      "Myelin thickness alone determines saltatory conduction velocity",
      "SNARE proteins orient vesicles",
    ],
    correct: 0,
    explanation: "Some gap junctions pass current preferentially from cell A to B.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Endocannabinoids can act retrogradely to?",
    options: [
      "Suppress presynaptic neurotransmitter",
      "Open nAChR at the NMJ when ligand-gated channels are open",
      "Generate action potentials in myelin along a uniformly leaky cable",
      "Replace glutamate in vesicles following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Postsynaptically produced endocannabinoids often inhibit presynaptic release.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "The active zone is specialized for?",
    options: [
      "Vesicle docking and Ca²⁺-triggered fusion",
      "Myelin formation along a uniformly leaky cable",
      "Action potential initiation in dendrites along a uniformly leaky cable",
      "Phototransduction at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Active zones align release machinery with receptor clusters.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active zones align release machinery with receptor clusters.",
      "",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Postsynaptic density (PSD) is enriched in?",
    options: [
      "Scaffolding proteins and glutamate receptors at excitatory synapses",
      "Presynaptic active-zone proteins and synaptic vesicle tethers (CAZ)",
      "Rhodopsin and G-protein transducin in photoreceptor outer segments",
      "Cadherin tip-link proteins between cochlear hair-cell stereocilia",
    ],
    correct: 0,
    explanation: "The PSD is a protein mesh on the postsynaptic side of excitatory synapses. It concentrates glutamate receptors (AMPA, NMDA) and scaffolds such as PSD-95, plus signaling enzymes, so neurotransmitter binding efficiently drives postsynaptic currents.",
    wrongExplanations: [
      "",
      "The cytomatrix of the active zone (CAZ) and vesicle-docking machinery sit on the presynaptic terminal, opposite—but not within—the PSD. PSD is postsynaptic.",
      "Rhodopsin is the photopigment in rod/cone outer segments; it triggers retinal phototransduction, not glutamatergic spine signaling. You would not find rhodopsin enriched at a central excitatory PSD.",
      "Tip links connect stereocilia in the cochlea for auditory mechanotransduction. They are not components of dendritic spine postsynaptic densities.",
    ]
  },
  {
    topic: "Excitatory-Inhibitory Balance",
    question: "E/I balance refers to?",
    options: [
      "Relative levels of excitatory and inhibitory synaptic drive onto a neuron",
      "Equal numbers of axons and dendrites anatomically",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Myelin equal to axon diameter",
    ],
    correct: 0,
    explanation: "Circuit function depends on balanced excitation and inhibition.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Benzodiazepines enhance GABA<sub>A</sub> signaling by?",
    options: [
      "Increasing frequency of channel opening",
      "Blocking GABA synthesis irreversibly at fast chemical synapses",
      "Opening NMDA receptors following presynaptic Ca²⁺ influx",
      "Preventing Cl⁻ flux at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "BZDs bind allosteric sites to potentiate GABA<sub>A</sub> responses.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Strychnine causes convulsions by blocking?",
    options: [
      "Glycine receptors",
      "AMPA receptors in retina",
      "Voltage-gated K⁺ in nodes",
      "Connexins in heart",
    ],
    correct: 0,
    explanation: "Loss of glycinergic inhibition leads to uncontrolled motor activity.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Loss of glycinergic inhibition leads to uncontrolled motor activity.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Loss of glycinergic inhibition leads to uncontrolled motor activity.",
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides differ from classical transmitters because they?",
    options: [
      "Are co-released, act on GPCRs",
      "Often use ionotropic pores with sub-ms kinetics",
      "Are stored mainly in mitochondria",
      "Cannot be released by activity",
    ],
    correct: 0,
    explanation: "Peptides modulate circuits over longer ranges and timescales.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate circuits over longer ranges and timescales.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate circuits over longer ranges and timescales.",
      "",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Acetylcholinesterase in the synaptic cleft?",
    options: [
      "Hydrolyzes ACh to terminate the endplate",
      "Synthesizes ACh from glutamate following presynaptic Ca²⁺ influx",
      "Opens K⁺ channels directly under typical experimental conditions",
      "Myelinates the motor axon along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Rapid ACh breakdown keeps NMJ signaling brief.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Curare-like drugs block NMJ transmission by?",
    options: [
      "Competitive antagonism at nicotinic ACh",
      "Blocking voltage-gated Na⁺ in muscle T-tubules",
      "Preventing action potentials in motor cortex",
      "Enhancing GABA<sub>A</sub> on motoneurons primarily",
    ],
    correct: 0,
    explanation: "nAChR block prevents endplate depolarization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: nAChR block prevents endplate depolarization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: nAChR block prevents endplate depolarization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: nAChR block prevents endplate depolarization.",
    ]
  },
  {
    topic: "Co-transmission",
    question: "A neuron releasing both glutamate and a neuropeptide illustrates?",
    options: [
      "Co-transmission with fast",
      "Requires electrical coupling",
      "Purely retrograde dopamine signaling",
      "Myelin-mediated transmission",
    ],
    correct: 0,
    explanation: "Many neurons co-release multiple transmitters/modulators.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Disinhibition occurs when?",
    options: [
      "Inhibition of an interneuron releases a",
      "Most GABA neurons are removed globally at fast chemical synapses",
      "Requires aMPA receptors activate at fast chemical synapses",
      "Myelin is added to interneurons along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Removing inhibitory input on a neuron can increase its activity.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Spike-timing-dependent plasticity (STDP) depends on?",
    options: [
      "Order and timing of pre- and postsynaptic",
      "Requires ambient temperature when ligand-gated channels are open",
      "Myelin length along a uniformly leaky cable",
      "Olfactory receptor choice when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Millisecond-scale timing windows determine LTP vs LTD.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Presynaptic LTP at the crayfish neuromuscular junction involves?",
    options: [
      "Increased quantal release",
      "Postsynaptic receptor insertion",
      "Gap junction doubling",
      "Photoreceptor adaptation",
    ],
    correct: 0,
    explanation: "Classic example of presynaptic enhancement of release probability.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Classic example of presynaptic enhancement of release probability.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Classic example of presynaptic enhancement of release probability.",
    ]
  },
  {
    topic: "Integration",
    question: "Which capability best describes An IPSP arriving at the soma during an EPSP?",
    options: [
      "Reduce net depolarization",
      "Often increase Na⁺ influx",
      "Eliminate resting potential permanently",
      "Convert the cell to photoreceptor function",
    ],
    correct: 0,
    explanation: "Inhibition subtracts from excitation in integration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition subtracts from excitation in integration.",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Inhibition subtracts from excitation in integration.",
    ]
  },
  {
    topic: "Integration",
    question: "Which capability best describes Dendritic spikes in some neurons?",
    options: [
      "Boost local depolarization",
      "Occur in unmyelinated sensory axons",
      "Replace all chemical synapses",
      "Block all K⁺ channels globally",
    ],
    correct: 0,
    explanation: "Active dendritic conductances can nonlinearly amplify inputs.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active dendritic conductances can nonlinearly amplify inputs.",
      "",
      "",
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "When Acetylcholine is active in cortex during wakefulness, which effect on neural circuit function is most likely?",
    options: [
      "Increase responsiveness",
      "Silence all thalamocortical input permanently",
      "Replace glutamate at many synapse",
      "Requires hyperpolarize via GABA<sub>B</sub>",
    ],
    correct: 0,
    explanation: "ACh neuromodulation supports arousal and cortical processing.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  }
];

const PART3_EXTRA_POOL = [
  {
    topic: "Phototransduction",
    question: "In darkness, vertebrate photoreceptors are depolarized because?",
    options: [
      "Cyclic nucleotide-gated channels pass cation",
      "Rhodopsin maximally activates transducin",
      "Voltage-gated Na⁺ channels drive the photoreceptor dark current",
      "Myelin wraps the outer segment",
    ],
    correct: 0,
    explanation: "High cGMP keeps channels open; light lowers cGMP and hyperpolarizes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High cGMP keeps channels open; light lowers cGMP and hyperpolarizes.",
      "",
      "",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Light activation of rhodopsin leads to?",
    options: [
      "Reduced cGMP and closure of cGMP-gated channels",
      "Immediate opening of all voltage-gated Na⁺ in myelin",
      "Sustained depolarization and increased glutamate release",
      "Main mechanism: electrical synapse formation",
    ],
    correct: 0,
    explanation: "Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Horizontal cells provide lateral inhibition that contributes to?",
    options: [
      "Center-surround receptive fields",
      "Saltatory conduction in optic nerve",
      "Cochlear frequency tuning",
      "Hippocampal LTP primarily",
    ],
    correct: 0,
    explanation: "Lateral inhibition shapes spatial contrast in retinal ganglion cells.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lateral inhibition shapes spatial contrast in retinal ganglion cells.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Lateral inhibition shapes spatial contrast in retinal ganglion cells.",
    ]
  },
  {
    topic: "Visual System",
    question: "Ganglion cells encode visual information primarily as?",
    options: [
      "Patterns of action potentials (rate",
      "Graded muscle contractions",
      "Direct myelin thickness changes",
      "Requires peptide release without spikes",
    ],
    correct: 0,
    explanation: "Retinal output is spiking activity in optic nerve fibers.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular pathway neurons generally prefer?",
    options: [
      "High temporal frequency",
      "Fine color static patterns",
      "Olfactory combinations",
      "Proprioception from muscle spindles",
    ],
    correct: 0,
    explanation: "M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast).",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Parvocellular LGN neurons project mainly to?",
    options: [
      "Primary visual cortex (V1) layer 4Cβ",
      "Cerebellar cortex in the primary sensory pathway named",
      "Spinal cord ventral horn primarily before cortical association areas",
      "Olfactory bulb in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "P cells drive detailed form/color processing in V1.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: P cells drive detailed form/color processing in V1.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: P cells drive detailed form/color processing in V1.",
      "",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Orientation selectivity in V1 simple cells arises partly from?",
    options: [
      "Spatially offset ON/OFF subregions in",
      "Random channel noise in the primary sensory pathway named",
      "Myelin orientation when Na⁺ inactivation has progressed",
      "Cochlear tonotopy in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "Hubel & Wiesel: elongated subfields produce orientation tuning.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hubel & Wiesel: elongated subfields produce orientation tuning.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Binocular disparity sensitive neurons are important for?",
    options: [
      "Depth perception (stereopsis)",
      "Smell discrimination in the primary sensory pathway named",
      "Balance reflexes before cortical association areas",
      "Pain gate control primarily contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "Disparity-tuned cells in visual cortex support 3D vision.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disparity-tuned cells in visual cortex support 3D vision.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disparity-tuned cells in visual cortex support 3D vision.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Frequency tuning in the cochlea basilar membrane follows?",
    options: [
      "Tonotopic organization",
      "Random placement without order",
      "Requires olfactory glomeruli rules",
      "Retinal eccentricity",
    ],
    correct: 0,
    explanation: "Basilar membrane stiffness varies along length, mapping frequency.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Inner hair cells transduce sound via?",
    options: [
      "Mechanotransduction channels opened by",
      "Rhodopsin and cGMP in the primary sensory pathway named",
      "Nicotinic ACh at NMJ when ligand-gated channels are open",
      "Gap junctions to photoreceptors following presynaptic Ca²⁺ influx",
    ],
    correct: 0,
    explanation: "Stereocilia deflection opens ion channels in hair cells.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory System",
    question: "The auditory nerve encodes sound intensity largely by?",
    options: [
      "Increased firing rate in cochlear nerve",
      "Changing myelin color",
      "Requires inhibitory synapses without spikes",
      "Releasing dopamine in the cochlea",
    ],
    correct: 0,
    explanation: "Louder sounds generally drive higher spike rates in auditory nerve.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Superior olivary nuclei compute?",
    options: [
      "Sound localization cues (ITD and ILD)",
      "Color opponency contralateral to monocular stimulation",
      "Olfactory adaptation in the primary sensory pathway named",
      "Cerebellar motor learning primarily in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "Binaural processing in SOC supports localization.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Binaural processing in SOC supports localization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Binaural processing in SOC supports localization.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Meissner corpuscles in skin are most sensitive to?",
    options: [
      "Light touch and flutter",
      "Deep pressure",
      "No temperature change ever",
      "Visual motion",
    ],
    correct: 0,
    explanation: "Meissner endings detect fine tactile vibrations.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Meissner endings detect fine tactile vibrations.",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles respond best to?",
    options: [
      "High-frequency vibration",
      "Static hair position",
      "Bitter taste",
      "Red-green color opponency",
    ],
    correct: 0,
    explanation: "Pacinian fibers are rapidly adapting vibration detectors.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pacinian fibers are rapidly adapting vibration detectors.",
      "",
      "",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings often mediate?",
    options: [
      "pain/temp sensation",
      "Main mechanism: proprioception from muscle spindles",
      "Phototransduction",
      "Cochlear amplification",
    ],
    correct: 0,
    explanation: "Nociceptors and thermoreceptors are unencapsulated endings.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nociceptors and thermoreceptors are unencapsulated endings.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pain",
    question: "Which statement best describes Nociceptive Aδ fibers?",
    options: [
      "Myelinated and conduct sharp, fast pain",
      "Unmyelinated C fibers primarily along a uniformly leaky cable",
      "Requires found in retina contralateral to monocular stimulation",
      "Purely electrical synapses at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain.",
      "",
      "",
    ]
  },
  {
    topic: "Pain",
    question: "Gate control theory proposes?",
    options: [
      "Spinal circuitry can modulate pain transmission",
      "Pain is purely cortical with no spinal component",
      "Main mechanism: myelin gates pain open",
      "NMDA is absent in pain pathways",
    ],
    correct: 0,
    explanation: "Inhibitory interneurons in dorsal horn can gate pain signals.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibitory interneurons in dorsal horn can gate pain signals.",
      "",
    ]
  },
  {
    topic: "Proprioception",
    question: "Golgi tendon organs signal?",
    options: [
      "Muscle tension (force) at the tendon",
      "Retinal illuminance in the primary sensory pathway named",
      "Olfactory concentration contralateral to monocular stimulation",
      "Cochlear phase contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "GTOs inhibit excessive force via Ib afferents.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GTOs inhibit excessive force via Ib afferents.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral/tufted cells in the bulb send output to?",
    options: [
      "Olfactory cortex",
      "Primary visual cortex primarily",
      "Cochlear nucleus",
      "Spinal motor pools",
    ],
    correct: 0,
    explanation: "Bulb principal cells relay odor info to cortex.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Bulb principal cells relay odor info to cortex.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Bulb principal cells relay odor info to cortex.",
    ]
  },
  {
    topic: "Gustation",
    question: "Umami taste is transduced largely through?",
    options: [
      "T1R1/T1R3 heterodimer taste GPCRs on taste",
      "Metabotropic glutamate receptors (mGluRs) in cortex",
      "Rhodopsin in taste buds",
      "Hair cell tip links",
    ],
    correct: 0,
    explanation: "Umami (glutamate/nucleotides) is detected by the T1R1+T1R3 taste GPCR, not by brain mGluRs.",
    wrongExplanations: [
      "",
      "mGluRs are CNS metabotropic glutamate receptors; peripheral umami uses T1R taste GPCRs.",
      "Rhodopsin mediates vision, not taste transduction.",
      "Hair cell tip links transduce sound in the cochlea, not taste.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage mainly at?",
    options: [
      "Cerebral endothelial tight junctions (with astrocyte endfeet support)",
      "Nodes of Ranvier primarily (localizes the function to the wrong brain region)",
      "Photoreceptor outer segments (localizes the function to the wrong brain region)",
      "NMJ synaptic cleft (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Endothelial tight junctions limit paracellular diffusion into CNS.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Endothelial tight junctions limit paracellular diffusion into CNS.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter primarily contains?",
    options: [
      "Myelinated axon tracts",
      "Neuronal cell bodies when homeostatic mechanisms are intact",
      "Photoreceptor layers when ligand-gated channels are open",
      "Taste bud cells in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "White matter is axons; gray matter is cell bodies and neuropil.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: White matter is axons; gray matter is cell bodies and neuropil.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum connects?",
    options: [
      "Left and right cerebral hemispheres",
      "Spinal cord to cerebellum (localizes the function to the wrong brain region)",
      "Cochlea to retina (localizes the function to the wrong brain region)",
      "Olfactory bulb to tongue (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Commissural fibers integrate bilateral cortex.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Commissural fibers integrate bilateral cortex.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Basal ganglia loops (cortex–striatum–GP/SN–thalamus) are critical for?",
    options: [
      "Action selection and habit learning",
      "Phototransduction primarily (localizes the function to the wrong brain region)",
      "Cochlear tuning (localizes the function to the wrong brain region)",
      "Pain fiber myelination (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "MCB80x links basal ganglia to movement and reinforcement.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: MCB80x links basal ganglia to movement and reinforcement.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Basal ganglia motor control involves dopamine from substantia nigra pars compacta to striatum. Membrane equations or retinal biochemistry do not substitute for that circuit logic. MCB80x links basal ganglia to movement and reinforcement.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The hippocampus is essential for many forms of?",
    options: [
      "Declarative (explicit) memory formation",
      "Primary visual color opponency in the primary sensory pathway named",
      "Cochlear amplification contralateral to monocular stimulation",
      "Reflexive withdrawal without learning when NMDA receptors are co-activated",
    ],
    correct: 0,
    explanation: "Hippocampus supports episodic and spatial memory consolidation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hippocampus supports episodic and spatial memory consolidation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hippocampus supports episodic and spatial memory consolidation.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Cerebellum is heavily involved in?",
    options: [
      "Error correction, coordination, and some forms of motor learning",
      "Initial phototransduction (localizes the function to the wrong brain region)",
      "Olfactory receptor choice (localizes the function to the wrong brain region)",
      "Main mechanism: pain transmission (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Cerebellar circuits fine-tune movement and timing.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar circuits fine-tune movement and timing.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Thalamus functions as?",
    options: [
      "A relay and gate for sensory information to cortex (and cortical loops)",
      "The sole site of rhodopsin expression (localizes the function to the wrong brain region)",
      "Myelin factory for peripheral nerves (localizes the function to the wrong brain region)",
      "Main mechanism: respiratory CPG without sensory role (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Thalamic nuclei route sensory and motor-related signals.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei route sensory and motor-related signals.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei route sensory and motor-related signals.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons in ventral horn?",
    options: [
      "Innervate skeletal muscle fibers directly",
      "Project to LGN (maps the lesion to the wrong motor pathway or reflex)",
      "Encode sound frequency (maps the lesion to the wrong motor pathway or reflex)",
      "Release rhodopsin (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "LMNs are the final common path to muscle.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LMNs are the final common path to muscle.",
      "",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The stretch reflex (myotatic reflex) is monosynaptic between?",
    options: [
      "Ia afferent and α motor neuron",
      "Retinal bipolar and ganglion cell",
      "Cochlear inner hair cell and olivary cell",
      "Olfactory OSN and mitral cell primarily for stretch",
    ],
    correct: 0,
    explanation: "Stretch activates spindles → Ia synapses on homonymous motoneurons.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Stretch activates spindles → Ia synapses on homonymous motoneurons.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Prefrontal cortex is associated with?",
    options: [
      "Working memory, planning",
      "Cochlear basilar stiffness",
      "Rhodopsin regeneration primarily",
      "Pacinian vibration transduction",
    ],
    correct: 0,
    explanation: "PFC supports higher cognitive control and working memory.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PFC supports higher cognitive control and working memory.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory differs from long-term memory in that it?",
    options: [
      "Holds information transiently for ongoing behavior",
      "Is stored permanently after one spike",
      "Exists mainly in peripheral nerves",
      "HCN channels are silent while cGMP keeps CNG channels open",
    ],
    correct: 0,
    explanation: "Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is typically associated with?",
    options: [
      "Hippocampus and medial temporal lobe",
      "Cerebellar cortex for all memories in the adult human CNS",
      "Cochlear nucleus primarily contralateral to monocular stimulation",
      "Skin Meissner corpuscles without changes in presynaptic release probability",
    ],
    correct: 0,
    explanation: "Explicit facts/events depend on medial temporal lobe circuits.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (skills/habits) involves strongly?",
    options: [
      "Basal ganglia and cerebellum among other",
      "Requires retina photoreceptors when ligand-gated channels are open",
      "Olfactory glomeruli alone in the primary sensory pathway named",
      "Free nerve endings primarily after repeated synaptic activation",
    ],
    correct: 0,
    explanation: "Motor skills and habits engage striatum/cerebellum.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Motor skills and habits engage striatum/cerebellum.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "The amygdala contributes to memory by?",
    options: [
      "Emotional salience and fear conditioning associations",
      "Tonotopic mapping",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "NMJ acetylcholinesterase",
    ],
    correct: 0,
    explanation: "Amygdala modulates emotional memory strength.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Consolidation transfers labile memory to stable storage over?",
    options: [
      "Hours to years via systems",
      "One millisecond without changes in presynaptic release probability",
      "During sleep seldom during quiet wakefulness",
      "Requires in myelin along a uniformly leaky cable",
    ],
    correct: 0,
    explanation: "Consolidation includes synaptic and systems-level reorganization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation includes synaptic and systems-level reorganization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation includes synaptic and systems-level reorganization.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Morris water maze tests primarily?",
    options: [
      "Spatial learning dependent on hippocampus",
      "Color vision in flies without changes in presynaptic release probability",
      "Cochlear phase locking primarily contralateral to monocular stimulation",
      "Olfactory one-receptor rule when ligand-gated channels are open",
    ],
    correct: 0,
    explanation: "Hidden platform task assesses hippocampal-dependent navigation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hidden platform task assesses hippocampal-dependent navigation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Patient H.M.-like medial temporal lobe damage impairs?",
    options: [
      "New declarative memories",
      "Most sensation including touch",
      "Myelin formation in CNS",
      "Dark current in photoreceptors",
    ],
    correct: 0,
    explanation: "Classic dissociation: anterograde declarative amnesia with spared skills.",
    wrongExplanations: [
      "",
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Protein synthesis is often required for?",
    options: [
      "Long-lasting LTP/LTM (late phase)",
      "Immediate reflex arcs at fast chemical synapses",
      "Photoreceptor bleaching when ligand-gated channels are open",
      "Passive membrane τ at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Late LTP and long-term memory need gene expression and new proteins.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Late LTP and long-term memory need gene expression and new proteins.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Engram cells refer to?",
    options: [
      "Neurons whose activity participates in",
      "Requires glial cells in white matter at fast chemical synapses",
      "Cochlear outer hair cells primarily when ligand-gated channels are open",
      "Most nociceptors broadly at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Ensemble of neurons physically underlying a memory.",
    wrongExplanations: [
      "",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "",
    ]
  },
  {
    topic: "Sensory Integration",
    question: "Multisensory integration in superior colliculus can produce?",
    options: [
      "Enhanced responses when auditory and visual stimuli coincide spatially",
      "Weaker colliculus responses when auditory and visual cues align in space",
      "Multisensory integration confined to primary visual cortex (V1)",
      "Superior colliculus processing of vision and sound without any orienting output",
    ],
    correct: 0,
    explanation: "Superior colliculus neurons combine auditory, visual, and somatosensory maps. When stimuli fall in aligned spatial locations, responses can be super-additive (greater than the sum of unimodal inputs), supporting orienting and eye–head movements toward salient events.",
    wrongExplanations: [
      "",
      "Spatial alignment of cross-modal inputs in the colliculus typically facilitates detection and orienting, not suppression. Suppression is more relevant when cues are misaligned or compete.",
      "V1 is critical for visual perception, but the superior colliculus is a midbrain hub for sensorimotor integration and orienting—not a structure whose multisensory enhancement is replaced by cortex-only processing.",
      "The colliculus drives orienting (saccades, head turns) via brainstem and basal ganglia circuitry. Multisensory integration there directly shapes those motor outputs.",
    ]
  },
  {
    topic: "Balance",
    question: "Semicircular canals detect?",
    options: [
      "Angular acceleration of the head",
      "Static linear gravity without motion",
      "Bitter taste intensity",
      "Retinal contrast",
    ],
    correct: 0,
    explanation: "Canal hair cells respond to rotational head movements.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Canal hair cells respond to rotational head movements.",
      "",
      "",
    ]
  },
  {
    topic: "Balance",
    question: "Utricle and saccule detect?",
    options: [
      "Linear acceleration and head tilt",
      "High-frequency sound under typical experimental conditions",
      "Olfactory concentration in the primary sensory pathway named",
      "Color wavelength primarily under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Otoliths sense gravity and linear acceleration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Otoliths sense gravity and linear acceleration.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Otoliths sense gravity and linear acceleration.",
    ]
  },
  {
    topic: "Development",
    question: "Activity-dependent refinement of visual maps (e.g., ocular dominance) illustrates?",
    options: [
      "Hebbian/plastic mechanisms shaping circuits",
      "Fixed wiring with zero experience dependence",
      "Requires myelin growth without synapses",
      "Olfactory receptor switching each hour",
    ],
    correct: 0,
    explanation: "Experience shapes connectivity during development (MCB80x visual system).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Experience shapes connectivity during development (MCB80x visual system).",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia typically reflects dysfunction in?",
    options: [
      "Fusiform face area / ventral visual stream",
      "Cochlear nucleus before cortical association areas",
      "Stretch reflex arc primarily when homeostatic mechanisms are intact",
      "NMJ acetylcholine release when homeostatic mechanisms are intact",
    ],
    correct: 0,
    explanation: "Face recognition deficits implicate specialized ventral visual cortex.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which clinical presentation is most consistent with Hemianopia after post-chiasmal lesion reflects?",
    options: [
      "Loss of contralateral visual field",
      "Complete blindness in both eyes when homeostatic mechanisms are intact",
      "Requires olfactory loss in the primary sensory pathway named",
      "Deafness without cochlear damage in the primary sensory pathway named",
    ],
    correct: 0,
    explanation: "Optic tract/radiation/cortex lesions cause contralateral field defects.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Optic tract/radiation/cortex lesions cause contralateral field defects.",
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  }
];
