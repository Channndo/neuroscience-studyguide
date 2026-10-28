// MCB80x extra question pools — HarvardX Fundamentals of Neuroscience

const PART1_EXTRA_POOL = [
  {
    topic: "Goldman Equation",
    question: "At rest, if P_K is much greater than P_Na and P_Cl is negligible, the membrane potential is dominated by:",
    options: [
      "Sodium equilibrium (E_Na)",
      "Potassium equilibrium (E_K)",
      "Exactly 0 mV",
      "The reversal of the pump only"
    ],
    correct: 1,
    explanation: "Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion.",
    wrongExplanations: [
      "This option is inconsistent with the stem; the keyed answer (Potassium equilibrium (E_K)) matches the underlying mechanism.",
      "",
      "This option is inconsistent with the stem; the keyed answer (Potassium equilibrium (E_K)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Potassium equilibrium (E_K)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed will shift the Goldman resting potential:",
    options: [
      "Toward E_Na (less negative)",
      "Toward E_K only",
      "To exactly +60 mV always",
      "Away from any ion equilibrium"
    ],
    correct: 0,
    explanation: "Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (less negative)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase contributes directly to resting potential mainly by:",
    options: [
      "Maintaining ion gradients that set equilibrium potentials",
      "Opening voltage-gated Na⁺ channels",
      "Depolarizing the cell to threshold on every cycle",
      "Blocking K⁺ leak channels"
    ],
    correct: 0,
    explanation: "The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Maintaining ion gradients that set equilibrium potentials) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Maintaining ion gradients that set equilibrium potentials) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Maintaining ion gradients that set equilibrium potentials) matches the underlying mechanism."
    ]
  },
  {
    topic: "Resting Potential",
    question: "If K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains, V_m will tend to move:",
    options: [
      "Toward E_Na (depolarized relative to normal K⁺-dominated rest)",
      "Toward E_K as if K⁺ leak were unchanged",
      "To 0 mV instantly regardless of gradients",
      "Below −150 mV"
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a divalent cation such as Ca²⁺, a 10-fold concentration ratio at 37°C changes the Nernst potential by roughly:",
    options: [
      "~31 mV (half the monovalent slope)",
      "~62 mV",
      "~124 mV",
      "0 mV (valence cancels)"
    ],
    correct: 0,
    explanation: "Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (~31 mV (half the monovalent slope)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~31 mV (half the monovalent slope)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (~31 mV (half the monovalent slope)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If [K⁺]_out equals [K⁺]_in, the Nernst equilibrium potential for K⁺ is:",
    options: [
      "0 mV",
      "−90 mV",
      "+60 mV",
      "Undefined"
    ],
    correct: 0,
    explanation: "With no concentration gradient, E_K = 0 mV regardless of channel presence.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (0 mV) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (0 mV) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (0 mV) matches the underlying mechanism."
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Cooling a preparation from 37°C to 20°C (holding concentrations fixed) will:",
    options: [
      "Reduce the Nernst slope in mV per decade",
      "Double the Nernst slope",
      "Eliminate the need for the Goldman equation",
      "Make E_Na exactly 0 mV"
    ],
    correct: 0,
    explanation: "RT/F decreases with temperature, reducing mV per log concentration change.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduce the Nernst slope in mV per decade) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce the Nernst slope in mV per decade) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce the Nernst slope in mV per decade) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If V_m is held at E_K, the driving force on K⁺ is:",
    options: [
      "Zero",
      "Maximal outward",
      "Maximal inward",
      "Equal to the pump flux only"
    ],
    correct: 0,
    explanation: "At equilibrium potential, net electrochemical driving force for that ion is zero.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Zero) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance arises primarily because:",
    options: [
      "The lipid bilayer stores charge separated across a thin dielectric",
      "Myelin increases ion channel density",
      "Na⁺ channels pump charge into the ER",
      "Dendrites lack any resistance"
    ],
    correct: 0,
    explanation: "The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (The lipid bilayer stores charge separated across a thin dielectric) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The lipid bilayer stores charge separated across a thin dielectric) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (The lipid bilayer stores charge separated across a thin dielectric) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "During a step of constant depolarizing current, the initial voltage deflection is dominated by:",
    options: [
      "Capacitive charging (ΔV ≈ I/C)",
      "Steady-state leak only with no transient",
      "Action potential generation always",
      "Saltatory conduction"
    ],
    correct: 0,
    explanation: "Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Capacitive charging (ΔV ≈ I/C)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Capacitive charging (ΔV ≈ I/C)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Capacitive charging (ΔV ≈ I/C)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane resistance R_m while C_m is unchanged will:",
    options: [
      "Increase τ and slow subthreshold responses",
      "Decrease τ",
      "Prevent passive decay along dendrites",
      "Block inactivation of Na⁺ channels"
    ],
    correct: 0,
    explanation: "τ = R_m C_m; higher R_m lengthens the membrane time constant.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase τ and slow subthreshold responses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase τ and slow subthreshold responses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase τ and slow subthreshold responses) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Decreasing R_m (more leak) with unchanged R_i will:",
    options: [
      "Shorten λ and attenuate dendritic signals faster",
      "Lengthen λ",
      "Speed action potentials in myelinated axons only",
      "Raise E_K"
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); lower R_m shrinks the space constant.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Shorten λ and attenuate dendritic signals faster) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorten λ and attenuate dendritic signals faster) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Shorten λ and attenuate dendritic signals faster) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal synapse is typically smaller and slower because of:",
    options: [
      "Cable filtering (attenuation and low-pass filtering)",
      "Complete absence of ionotropic receptors",
      "Myelin on dendrites",
      "Only electrical synapses distally"
    ],
    correct: 0,
    explanation: "Passive spread along dendrites attenuates amplitude and spreads rise time.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cable filtering (attenuation and low-pass filtering)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cable filtering (attenuation and low-pass filtering)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cable filtering (attenuation and low-pass filtering)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input conductance (1/R_in) increases when:",
    options: [
      "More ion channels open in the dendritic tree",
      "Myelin thickness increases",
      "Extracellular K⁺ drops",
      "Temperature falls below 0°C"
    ],
    correct: 0,
    explanation: "Additional open channels lower input resistance and increase conductance.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (More ion channels open in the dendritic tree) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (More ion channels open in the dendritic tree) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (More ion channels open in the dendritic tree) matches the underlying mechanism."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "In whole-cell patch clamp, breaking into the cell interior allows the electrode to:",
    options: [
      "Dialyze the cytoplasm and control V_m directly",
      "Measure only extracellular field potentials",
      "Record from single channels without seal",
      "Block all K⁺ currents irreversibly"
    ],
    correct: 0,
    explanation: "Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Dialyze the cytoplasm and control V_m directly) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Dialyze the cytoplasm and control V_m directly) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Dialyze the cytoplasm and control V_m directly) matches the underlying mechanism."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "A gigaohm seal in patch clamp reduces:",
    options: [
      "Leak current between pipette and bath, improving signal-to-noise",
      "Membrane capacitance to zero",
      "The need for any amplifier",
      "All synaptic transmission in the slice"
    ],
    correct: 0,
    explanation: "Tight seals isolate the patch from bath noise and enable single-channel resolution.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Leak current between pipette and bath, improving signal-to-noise) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Leak current between pipette and bath, improving signal-to-noise) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Leak current between pipette and bath, improving signal-to-noise) matches the underlying mechanism."
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Cell-attached patch configuration is useful for recording:",
    options: [
      "Single-channel currents without disrupting cytosolic composition",
      "Only action potentials in axons",
      "Population spikes in cortex only",
      "Magnetic fields from myelin"
    ],
    correct: 0,
    explanation: "The patch stays on the outside surface, preserving intracellular milieu.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Single-channel currents without disrupting cytosolic composition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Single-channel currents without disrupting cytosolic composition) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Single-channel currents without disrupting cytosolic composition) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials primarily by binding:",
    options: [
      "Voltage-gated Na⁺ channel pore",
      "Voltage-gated K⁺ channels",
      "The Na⁺/K⁺ pump",
      "Gap junction connexins"
    ],
    correct: 0,
    explanation: "TTX selectively occludes voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channel pore) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channel pore) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channel pore) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to axons typically prolongs spikes by blocking:",
    options: [
      "Certain voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels",
      "Glutamate receptors",
      "Myelin basic protein"
    ],
    correct: 0,
    explanation: "TEA blocks some K⁺ channels, slowing repolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Certain voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Certain voltage-gated K⁺ channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Certain voltage-gated K⁺ channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "The upswing of the squid giant axon action potential is dominated by:",
    options: [
      "Voltage-gated Na⁺ influx",
      "Voltage-gated K⁺ efflux alone",
      "Cl⁻ influx",
      "Capacitive current only with no ionic current"
    ],
    correct: 0,
    explanation: "Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ influx) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ influx) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ influx) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike often reflects:",
    options: [
      "Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺",
      "Sustained Na⁺ influx",
      "Opening of all gap junctions",
      "Pump reversal only"
    ],
    correct: 0,
    explanation: "K⁺ channels remain active briefly, hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated Na⁺ channels are held in the inactivated state, the neuron:",
    options: [
      "Cannot fire another action potential until recovery",
      "Fires at higher frequency",
      "Depolarizes to E_Na permanently",
      "Loses all resting potential"
    ],
    correct: 0,
    explanation: "Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cannot fire another action potential until recovery) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cannot fire another action potential until recovery) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cannot fire another action potential until recovery) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best described as the voltage at which:",
    options: [
      "Net inward current exceeds net outward current regeneratively",
      "K⁺ channels fully close forever",
      "The pump stops",
      "Myelin is stripped"
    ],
    correct: 0,
    explanation: "Positive feedback from Na⁺ activation makes depolarization self-sustaining.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Net inward current exceeds net outward current regeneratively) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Net inward current exceeds net outward current regeneratively) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Net inward current exceeds net outward current regeneratively) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "A subthreshold depolarization decays because:",
    options: [
      "Passive leak currents oppose the change (return toward rest)",
      "Na⁺ channels cannot ever open",
      "Myelin prevents all current",
      "Synapses are only inhibitory"
    ],
    correct: 0,
    explanation: "Subthreshold events are passive; leak restores resting potential.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Passive leak currents oppose the change (return toward rest)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive leak currents oppose the change (return toward rest)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Passive leak currents oppose the change (return toward rest)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potentials",
    question: "Lowering extracellular Ca²⁺ can narrow action potentials partly by:",
    options: [
      "Reducing surface charge screening and altering channel kinetics / excitability",
      "Blocking Na⁺ channels irreversibly",
      "Eliminating K⁺ gradients",
      "Stopping saltatory conduction always"
    ],
    correct: 0,
    explanation: "Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reducing surface charge screening and altering channel kinetics / excitability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reducing surface charge screening and altering channel kinetics / excitability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reducing surface charge screening and altering channel kinetics / excitability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In continuous conduction, the action potential moves because:",
    options: [
      "Local current loops depolarize adjacent membrane to threshold",
      "The spike travels as a single electron flow in myelin",
      "Only the soma fires repeatedly",
      "Synaptic vesicles propagate down the axon"
    ],
    correct: 0,
    explanation: "Depolarization spreads passively to the next segment, triggering local Na⁺ influx.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Local current loops depolarize adjacent membrane to threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Local current loops depolarize adjacent membrane to threshold) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Local current loops depolarize adjacent membrane to threshold) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Saltatory conduction increases conduction velocity mainly by:",
    options: [
      "Reducing capacitive load and limiting active regeneration to nodes",
      "Increasing axon diameter only in the soma",
      "Blocking K⁺ at every internode",
      "Converting spikes to graded potentials"
    ],
    correct: 0,
    explanation: "Myelin insulates internodes; nodes concentrate ion channels for efficient jumping.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reducing capacitive load and limiting active regeneration to nodes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reducing capacitive load and limiting active regeneration to nodes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reducing capacitive load and limiting active regeneration to nodes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetic block of myelinated fibers often fails first in:",
    options: [
      "Small-diameter fibers (higher sensitivity varies by drug and use dependence)",
      "Only motor alpha fibers always",
      "Only proprioceptive Ia fibers always",
      "Unmyelinated C fibers exclusively in all cases"
    ],
    correct: 0,
    explanation: "MCB80x emphasizes use-dependent block and diameter effects; small sensory fibers are often affected early clinically.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Small-diameter fibers (higher sensitivity varies by drug and use dependence)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Small-diameter fibers (higher sensitivity varies by drug and use dependence)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Small-diameter fibers (higher sensitivity varies by drug and use dependence)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "At a node of Ranvier, voltage-gated channels are concentrated to:",
    options: [
      "Regenerate the action potential efficiently",
      "Pump Na⁺ into myelin",
      "Generate EPSPs only",
      "Store synaptic vesicles"
    ],
    correct: 0,
    explanation: "High Na⁺ channel density at nodes supports saltatory propagation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Regenerate the action potential efficiently) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Regenerate the action potential efficiently) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Regenerate the action potential efficiently) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Demyelination slows conduction because:",
    options: [
      "Effective capacitance increases and current must charge more membrane per unit length",
      "Na⁺ channels disappear from the genome",
      "K⁺ equilibrium becomes +60 mV",
      "Axons become purely passive forever"
    ],
    correct: 0,
    explanation: "Loss of insulation forces more membrane to be charged, delaying regeneration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Effective capacitance increases and current must charge more membrane per unit length) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Effective capacitance increases and current must charge more membrane per unit length) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Effective capacitance increases and current must charge more membrane per unit length) matches the underlying mechanism."
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An antidromic action potential is one that:",
    options: [
      "Propagates toward the soma (opposite normal orthodromic direction)",
      "Never occurs in sensory neurons",
      "Only occurs in dendrites",
      "Is always subthreshold"
    ],
    correct: 0,
    explanation: "Antidromic spikes travel from axon toward soma; orthodromic is soma-to-terminal.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Propagates toward the soma (opposite normal orthodromic direction)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Propagates toward the soma (opposite normal orthodromic direction)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Propagates toward the soma (opposite normal orthodromic direction)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "The axon initial segment (AIS) often has a high density of:",
    options: [
      "Voltage-gated Na⁺ channels and contributes strongly to spike initiation",
      "Only gap junctions",
      "Photopigment molecules",
      "Olfactory receptors"
    ],
    correct: 0,
    explanation: "MCB80x highlights AIS as a primary site of action potential generation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels and contributes strongly to spike initiation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels and contributes strongly to spike initiation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Voltage-gated Na⁺ channels and contributes strongly to spike initiation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "Graded synaptic potentials summate at the AIS to:",
    options: [
      "Determine whether threshold is reached for spike initiation",
      "Directly release neurotransmitter without spikes",
      "Generate myelin",
      "Reverse the Na⁺/K⁺ pump"
    ],
    correct: 0,
    explanation: "Integration at the AIS converts synaptic input into firing output.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Determine whether threshold is reached for spike initiation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Determine whether threshold is reached for spike initiation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Determine whether threshold is reached for spike initiation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Channel Gating",
    question: "Ball-and-chain inactivation in Na⁺ channels refers to:",
    options: [
      "An intracellular inactivation particle blocking the pore after activation",
      "Myelin wrapping the channel",
      "Glutamate binding to the pore",
      "Pump phosphorylation only"
    ],
    correct: 0,
    explanation: "Fast inactivation involves a cytoplasmic domain occluding the channel.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (An intracellular inactivation particle blocking the pore after activation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An intracellular inactivation particle blocking the pore after activation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An intracellular inactivation particle blocking the pore after activation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Channel Gating",
    question: "Delayed rectifier K⁺ channels open with slower kinetics than Na⁺ channels to:",
    options: [
      "Repolarize the membrane after the Na⁺ surge",
      "Depolarize to threshold faster",
      "Permit indefinite Na⁺ influx",
      "Close gap junctions"
    ],
    correct: 0,
    explanation: "Delayed K⁺ activation terminates the spike.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Repolarize the membrane after the Na⁺ surge) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Repolarize the membrane after the Na⁺ surge) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Repolarize the membrane after the Na⁺ surge) matches the underlying mechanism."
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "At the potassium equilibrium potential, net K⁺ current is zero even though:",
    options: [
      "Individual K⁺ ions still cross the membrane in both directions",
      "No ions move at all",
      "The pump is off",
      "Na⁺ channels are open maximally"
    ],
    correct: 0,
    explanation: "Equilibrium means balanced fluxes, not absence of movement.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Individual K⁺ ions still cross the membrane in both directions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Individual K⁺ ions still cross the membrane in both directions) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Individual K⁺ ions still cross the membrane in both directions) matches the underlying mechanism."
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "Resting potential is a steady state, not a true equilibrium, because:",
    options: [
      "Active transport maintains ion gradients against passive leak",
      "No channels are open",
      "Temperature is zero",
      "Capacitance is infinite"
    ],
    correct: 0,
    explanation: "The pump continuously works to offset passive ion loss.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Active transport maintains ion gradients against passive leak) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Active transport maintains ion gradients against passive leak) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Active transport maintains ion gradients against passive leak) matches the underlying mechanism."
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Voltage clamp was developed primarily to:",
    options: [
      "Hold membrane voltage constant and measure the currents required",
      "Measure only resting potential without perturbation",
      "Visualize myelin with light microscopy alone",
      "Count synaptic vesicles directly"
    ],
    correct: 0,
    explanation: "Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage constant and measure the currents required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage constant and measure the currents required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hold membrane voltage constant and measure the currents required) matches the underlying mechanism."
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Current clamp injects current and records:",
    options: [
      "Resulting voltage changes",
      "Fixed voltage with varying current always",
      "Only magnetic resonance signal",
      "Quantal content without electrodes"
    ],
    correct: 0,
    explanation: "Current clamp reveals integrative and spiking behavior under controlled input.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Resulting voltage changes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resulting voltage changes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Resulting voltage changes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "Voltage-gated Na⁺ channels are far more selective than leak channels partly because:",
    options: [
      "Pore architecture and charge filtering favor Na⁺ over K⁺",
      "They only open at E_K",
      "They pump ions actively",
      "They are located only in dendrites"
    ],
    correct: 0,
    explanation: "Selectivity filters and gating restrict permeation to Na⁺.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pore architecture and charge filtering favor Na⁺ over K⁺) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pore architecture and charge filtering favor Na⁺ over K⁺) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pore architecture and charge filtering favor Na⁺ over K⁺) matches the underlying mechanism."
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "If E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors:",
    options: [
      "Inward Na⁺ movement (into the cell)",
      "Outward Na⁺ only",
      "No movement regardless of channels",
      "Movement only through gap junctions"
    ],
    correct: 0,
    explanation: "V_m negative relative to E_Na drives cation influx if channels open.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ movement (into the cell)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ movement (into the cell)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inward Na⁺ movement (into the cell)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Temporal summation requires synaptic inputs that:",
    options: [
      "Overlap in time before passive decay completes",
      "Arrive exactly one year apart",
      "Are only inhibitory",
      "Occur only in myelin"
    ],
    correct: 0,
    explanation: "EPSPs must summate within the membrane time constant window.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Overlap in time before passive decay completes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Overlap in time before passive decay completes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Overlap in time before passive decay completes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Spatial summation occurs when:",
    options: [
      "Multiple synaptic inputs on different branches combine at the axon hillock/AIS",
      "One synapse fires repeatedly after decay",
      "Only one channel opens",
      "The cell is voltage-clamped at 0 mV"
    ],
    correct: 0,
    explanation: "Inputs from different locations add passively toward spike initiation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Multiple synaptic inputs on different branches combine at the axon hillock/AIS) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple synaptic inputs on different branches combine at the axon hillock/AIS) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple synaptic inputs on different branches combine at the axon hillock/AIS) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "Ouabain blocks the Na⁺/K⁺ pump and over time tends to:",
    options: [
      "Depolarize cells as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize instantly to −120 mV",
      "Prevent all action potentials within one millisecond always",
      "Open all glutamate receptors"
    ],
    correct: 0,
    explanation: "Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depolarize cells as Na⁺ accumulates and K⁺ is lost) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarize cells as Na⁺ accumulates and K⁺ is lost) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depolarize cells as Na⁺ accumulates and K⁺ is lost) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that increases K⁺ conductance at rest will generally:",
    options: [
      "Hyperpolarize or stabilize V_m nearer E_K",
      "Depolarize toward E_Na",
      "Block all spikes by removing Na⁺ channels from membrane",
      "Eliminate capacitance"
    ],
    correct: 0,
    explanation: "More K⁺ conductance pulls V_m toward E_K (often more negative).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m nearer E_K) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m nearer E_K) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hyperpolarize or stabilize V_m nearer E_K) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pharmacology",
    question: "Blocking voltage-gated K⁺ channels during an action potential typically:",
    options: [
      "Broadens the spike and may increase firing rate",
      "Prevents Na⁺ influx entirely",
      "Hyperpolarizes below rest instantly always",
      "Stops propagation only in dendrites"
    ],
    correct: 0,
    explanation: "Slower repolarization prolongs depolarization and can alter refractory period.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Broadens the spike and may increase firing rate) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Broadens the spike and may increase firing rate) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Broadens the spike and may increase firing rate) matches the underlying mechanism."
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If g_Na increases transiently during a spike while g_K rises later, the sequence reflects:",
    options: [
      "Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation",
      "Goldman equation at rest only",
      "Only pump activity",
      "Gap junction coupling"
    ],
    correct: 0,
    explanation: "Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Reversal potential for a mixed ionic current is the voltage where:",
    options: [
      "Net ionic current through that conductance is zero",
      "The pump rate is maximal",
      "Capacitive current equals action potential amplitude",
      "Only Cl⁻ moves"
    ],
    correct: 0,
    explanation: "Reversal potential satisfies I_ion = g(V_m − E_rev) = 0.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Net ionic current through that conductance is zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Net ionic current through that conductance is zero) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Net ionic current through that conductance is zero) matches the underlying mechanism."
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Increasing axon length constant λ without changing diameter would suggest:",
    options: [
      "Higher R_m or lower R_i",
      "Lower R_m only always",
      "Infinite capacitance",
      "Removal of all Na⁺ channels"
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); increased λ implies better passive spread along the cable.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Higher R_m or lower R_i) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher R_m or lower R_i) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Higher R_m or lower R_i) matches the underlying mechanism."
    ]
  }
];

const PART2_EXTRA_POOL = [
  {
    topic: "Chemical Synapses",
    question: "Quantal transmission means postsynaptic responses fluctuate in steps because:",
    options: [
      "Release occurs in discrete vesicle units (quanta)",
      "Ion channels open continuously without discreteness",
      "Only electrical synapses are used",
      "Neurotransmitter is always infinite in concentration"
    ],
    correct: 0,
    explanation: "Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Release occurs in discrete vesicle units (quanta)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release occurs in discrete vesicle units (quanta)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release occurs in discrete vesicle units (quanta)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Miniature EPSPs (mEPSPs) are observed when:",
    options: [
      "Spontaneous single-vesicle fusion occurs without presynaptic spikes",
      "The axon is cut and sealed",
      "Only inhibitory neurons are present",
      "Myelin covers the synapse"
    ],
    correct: 0,
    explanation: "Spontaneous quantal release produces mEPSPs/mEPSCs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous single-vesicle fusion occurs without presynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous single-vesicle fusion occurs without presynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous single-vesicle fusion occurs without presynaptic spikes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Increasing presynaptic Ca²⁺ entry near active zones generally:",
    options: [
      "Increases release probability",
      "Eliminates all vesicle fusion",
      "Converts ionotropic receptors to metabotropic only",
      "Blocks postsynaptic K⁺ channels"
    ],
    correct: 0,
    explanation: "Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increases release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases release probability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Botulinum toxin reduces synaptic transmission by cleaving:",
    options: [
      "SNARE proteins required for vesicle fusion",
      "Voltage-gated Na⁺ channels in the axon hillock only",
      "Glutamate entirely in the cleft",
      "All postsynaptic AMPA receptors"
    ],
    correct: 0,
    explanation: "Botulinum proteolysis of SNAREs prevents exocytosis.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (SNARE proteins required for vesicle fusion) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptic delay is largely attributable to:",
    options: [
      "Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding",
      "Action potential backpropagation only in dendrites",
      "Myelin thickness at the synapse",
      "Pump reversal at the postsynaptic density"
    ],
    correct: 0,
    explanation: "Several presynaptic steps add milliseconds between spike and response.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "The readily releasable pool refers to vesicles that:",
    options: [
      "Are docked/primed and can fuse quickly after Ca²⁺ rise",
      "Are permanently trapped in the nucleus",
      "Only contain neuropeptides for hours-long release",
      "Exist only in electrical synapses"
    ],
    correct: 0,
    explanation: "Primed vesicles supply the first wave of evoked release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Are docked/primed and can fuse quickly after Ca²⁺ rise) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are docked/primed and can fuse quickly after Ca²⁺ rise) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are docked/primed and can fuse quickly after Ca²⁺ rise) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Endocytosis after exocytosis is needed to:",
    options: [
      "Recycle vesicle membrane and maintain release capacity",
      "Generate action potentials in the cleft",
      "Open gap junctions",
      "Depolarize all mitochondria"
    ],
    correct: 0,
    explanation: "Without recycling, synapses deplete vesicle supply.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells typically mediate:",
    options: [
      "Fast excitatory postsynaptic currents at many glutamatergic synapses",
      "Slow G-protein inhibitory currents only",
      "Direct opening of voltage-gated Na⁺ in myelin",
      "Peptide hormone release"
    ],
    correct: 0,
    explanation: "AMPA channels dominate fast EPSCs when Glu is released.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA_A receptors are ionotropic and conduct primarily:",
    options: [
      "Cl⁻ (often hyperpolarizing or shunting)",
      "Na⁺ exclusively",
      "Ca²⁺ only in all neurons always",
      "K⁺ never"
    ],
    correct: 0,
    explanation: "GABA_A is a ligand-gated Cl⁻ channel (E_Cl sets direction).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cl⁻ (often hyperpolarizing or shunting)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cl⁻ (often hyperpolarizing or shunting)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cl⁻ (often hyperpolarizing or shunting)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "Nicotinic ACh receptors at the neuromuscular junction are:",
    options: [
      "Ligand-gated cation channels causing endplate depolarization",
      "Metabotropic GPCRs only",
      "Voltage-gated Cl⁻ channels",
      "Electrical synapses"
    ],
    correct: 0,
    explanation: "nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels causing endplate depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels causing endplate depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels causing endplate depolarization) matches the underlying mechanism."
    ]
  },
  {
    topic: "Receptor Types",
    question: "Muscarinic ACh receptors are metabotropic and can:",
    options: [
      "Modulate K⁺ channels, phospholipase C, and other second-messenger pathways",
      "Directly form a fast cation pore identical to AMPA",
      "Replace SNARE proteins",
      "Conduct myelin insulation"
    ],
    correct: 0,
    explanation: "Muscarinic receptors use G-proteins for slower modulatory effects.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Modulate K⁺ channels, phospholipase C, and other second-messenger pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate K⁺ channels, phospholipase C, and other second-messenger pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate K⁺ channels, phospholipase C, and other second-messenger pathways) matches the underlying mechanism."
    ]
  },
  {
    topic: "Second Messengers",
    question: "Activation of phospholipase C via Gq often increases:",
    options: [
      "IP3 and DAG, raising intracellular Ca²⁺ from stores",
      "cAMP only without any Ca²⁺ change",
      "Myelin basic protein synthesis only",
      "Voltage-gated Na⁺ density at nodes instantly"
    ],
    correct: 0,
    explanation: "PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (IP3 and DAG, raising intracellular Ca²⁺ from stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (IP3 and DAG, raising intracellular Ca²⁺ from stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (IP3 and DAG, raising intracellular Ca²⁺ from stores) matches the underlying mechanism."
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP-dependent protein kinase (PKA) can modulate synapses by:",
    options: [
      "Phosphorylating channels and transcription factors",
      "Cleaving SNARE proteins",
      "Blocking all glutamate release permanently",
      "Opening gap junctions in myelin"
    ],
    correct: 0,
    explanation: "PKA phosphorylation alters channel function and gene expression.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylating channels and transcription factors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylating channels and transcription factors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylating channels and transcription factors) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude at the soma mainly by:",
    options: [
      "Lowering input resistance so synaptic current leaks locally",
      "Increasing Na⁺ channel density at AIS always",
      "Preventing any Cl⁻ flux",
      "Eliminating temporal summation entirely"
    ],
    correct: 0,
    explanation: "Increased conductance diverts current, reducing voltage change elsewhere.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so synaptic current leaks locally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so synaptic current leaks locally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so synaptic current leaks locally) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in some circuits refers to:",
    options: [
      "Inhibitory input scaling excitatory drive proportionally",
      "Adding only spatial summation without time",
      "Blocking all GABA release",
      "Converting spikes to graded release only in retina"
    ],
    correct: 0,
    explanation: "Inhibition can divide or scale excitation rather than only subtract absolutely.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory input scaling excitatory drive proportionally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory input scaling excitatory drive proportionally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory input scaling excitatory drive proportionally) matches the underlying mechanism."
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after repetitive firing often reflects:",
    options: [
      "Depletion of the readily releasable vesicle pool",
      "Permanent removal of all postsynaptic receptors",
      "Myelin growth in the cleft",
      "Only LTP induction"
    ],
    correct: 0,
    explanation: "High-frequency use exhausts primed vesicles temporarily.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of the readily releasable vesicle pool) matches the underlying mechanism."
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Facilitation at some synapses is attributed partly to:",
    options: [
      "Residual presynaptic Ca²⁺ enhancing release probability",
      "Complete SNARE destruction",
      "Blocking all K⁺ channels in the cleft",
      "Loss of action potentials"
    ],
    correct: 0,
    explanation: "Ca²⁺ buildup increases P_release for subsequent spikes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ enhancing release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ enhancing release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ enhancing release probability) matches the underlying mechanism."
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Hebbian plasticity is summarized as:",
    options: [
      "Cells that fire together wire together (correlated activity strengthens synapses)",
      "Random synapse elimination only",
      "Only inhibitory synapses strengthen with uncorrelated input",
      "Myelin determines synaptic weight alone"
    ],
    correct: 0,
    explanation: "Correlated pre/post activity drives LTP-like strengthening.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "LTD (long-term depression) can be induced when:",
    options: [
      "Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)",
      "Only a single mEPSP occurs once",
      "All NMDA receptors are removed genetically always",
      "Only electrical synapses fire"
    ],
    correct: 0,
    explanation: "Specific timing/frequency rules can weaken synapses (LTD).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "CaMKII activation postsynaptically is associated with:",
    options: [
      "LTP maintenance at many glutamatergic synapses",
      "Immediate botulinum effects",
      "Only GABA_B signaling",
      "Saltatory conduction failure"
    ],
    correct: 0,
    explanation: "Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (LTP maintenance at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (LTP maintenance at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (LTP maintenance at many glutamatergic synapses) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates corticostriatal synapses largely via:",
    options: [
      "D1/D2 GPCRs changing cAMP and downstream phosphorylation",
      "Direct nAChR pores at every synapse",
      "Only gap junction coupling",
      "Myelin thickness"
    ],
    correct: 0,
    explanation: "Dopamine GPCRs tune excitability and plasticity in striatal circuits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (D1/D2 GPCRs changing cAMP and downstream phosphorylation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (D1/D2 GPCRs changing cAMP and downstream phosphorylation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (D1/D2 GPCRs changing cAMP and downstream phosphorylation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine from locus coeruleus often:",
    options: [
      "Increases arousal and modulates sensory gain via β-adrenergic receptors",
      "Blocks all Na⁺ channels permanently",
      "Is the primary transmitter at NMJ",
      "Only activates GABA_A"
    ],
    correct: 0,
    explanation: "NE modulates attention/arousal through widespread noradrenergic projections.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increases arousal and modulates sensory gain via β-adrenergic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases arousal and modulates sensory gain via β-adrenergic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases arousal and modulates sensory gain via β-adrenergic receptors) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonin (5-HT) modulates circuits through:",
    options: [
      "Multiple receptor subtypes (many GPCRs) with diverse effects",
      "A single ionotropic receptor only in mammals",
      "Exclusive action on myelin",
      "Direct voltage-gated Na⁺ gating only"
    ],
    correct: 0,
    explanation: "5-HT has broad neuromodulatory roles via many receptor types.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Multiple receptor subtypes (many GPCRs) with diverse effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple receptor subtypes (many GPCRs) with diverse effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple receptor subtypes (many GPCRs) with diverse effects) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators differ from fast transmitters mainly because they:",
    options: [
      "Act on longer timescales and often via second messengers / volume transmission",
      "Always use electrical synapses",
      "Never affect ion channels",
      "Only exist in invertebrate NMJs"
    ],
    correct: 0,
    explanation: "Modulators reshape network state over seconds to minutes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Act on longer timescales and often via second messengers / volume transmission) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Act on longer timescales and often via second messengers / volume transmission) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Act on longer timescales and often via second messengers / volume transmission) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition occurs when:",
    options: [
      "An excitatory input drives both principal cells and interneurons that inhibit downstream targets",
      "Inhibition only returns to the same cell that was excited (feedback only)",
      "Only electrical synapses connect layers",
      "Myelin provides inhibition"
    ],
    correct: 0,
    explanation: "Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (An excitatory input drives both principal cells and interneurons that inhibit downstream targets) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An excitatory input drives both principal cells and interneurons that inhibit downstream targets) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An excitatory input drives both principal cells and interneurons that inhibit downstream targets) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedback (recurrent) inhibition stabilizes firing by:",
    options: [
      "Interneurons inhibiting the same or nearby principal cells that excited them",
      "Blocking all EPSPs permanently",
      "Preventing any action potentials in interneurons",
      "Only modulating retina photoreceptors"
    ],
    correct: 0,
    explanation: "Recurrent loops limit runaway excitation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Interneurons inhibiting the same or nearby principal cells that excited them) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Interneurons inhibiting the same or nearby principal cells that excited them) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Interneurons inhibiting the same or nearby principal cells that excited them) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators (CPGs) can produce rhythms:",
    options: [
      "Without sensory input for each cycle (intrinsic circuit dynamics)",
      "Only when every muscle spindle fires once",
      "Exclusively in cerebellar Purkinje somata alone",
      "Only via myelin oscillations"
    ],
    correct: 0,
    explanation: "CPGs underlie breathing, locomotion, and other rhythmic motor patterns.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Without sensory input for each cycle (intrinsic circuit dynamics)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Without sensory input for each cycle (intrinsic circuit dynamics)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Without sensory input for each cycle (intrinsic circuit dynamics)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Inhibitory interneurons in cortex often release:",
    options: [
      "GABA",
      "Glutamate exclusively",
      "Acetylcholine only at every synapse",
      "Myelin basic protein"
    ],
    correct: 0,
    explanation: "Most cortical interneurons are GABAergic.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (GABA) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (GABA) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (GABA) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexin-based gap junctions allow:",
    options: [
      "Direct ionic and small-molecule coupling between cells",
      "Only retrograde peptide signaling",
      "Saltatory conduction in unmyelinated axons",
      "Quantal release from vesicles"
    ],
    correct: 0,
    explanation: "Gap junctions electrically couple adjacent neurons or glia.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Direct ionic and small-molecule coupling between cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Direct ionic and small-molecule coupling between cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Direct ionic and small-molecule coupling between cells) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses are often faster than chemical synapses because:",
    options: [
      "No vesicle fusion or diffusion delay is required",
      "They always use second messengers",
      "They require NMDA activation",
      "They depend on myelin stripping"
    ],
    correct: 0,
    explanation: "Current flows directly through connexons with minimal delay.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (No vesicle fusion or diffusion delay is required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (No vesicle fusion or diffusion delay is required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (No vesicle fusion or diffusion delay is required) matches the underlying mechanism."
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Rectifying electrical synapses conduct better in one direction because:",
    options: [
      "Connexon subunit composition creates voltage-dependent asymmetry",
      "Myelin blocks reverse current",
      "Only Cl⁻ is passed backward",
      "SNARE proteins orient vesicles"
    ],
    correct: 0,
    explanation: "Some gap junctions pass current preferentially from cell A to B.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Connexon subunit composition creates voltage-dependent asymmetry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Connexon subunit composition creates voltage-dependent asymmetry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Connexon subunit composition creates voltage-dependent asymmetry) matches the underlying mechanism."
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Endocannabinoids can act retrogradely to:",
    options: [
      "Suppress presynaptic neurotransmitter release after strong postsynaptic activity",
      "Open nAChR at the NMJ",
      "Generate action potentials in myelin",
      "Replace glutamate in vesicles"
    ],
    correct: 0,
    explanation: "Postsynaptically produced endocannabinoids often inhibit presynaptic release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic neurotransmitter release after strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic neurotransmitter release after strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic neurotransmitter release after strong postsynaptic activity) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "The active zone is specialized for:",
    options: [
      "Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors",
      "Myelin formation",
      "Action potential initiation in dendrites only",
      "Phototransduction"
    ],
    correct: 0,
    explanation: "Active zones align release machinery with receptor clusters.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Postsynaptic density (PSD) is enriched in:",
    options: [
      "Scaffolding proteins and glutamate receptors at excitatory synapses",
      "Only oligodendrocyte processes",
      "Rhodopsin",
      "Cochlear hair cell tip links"
    ],
    correct: 0,
    explanation: "PSD organizes AMPA/NMDA receptors and signaling complexes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Scaffolding proteins and glutamate receptors at excitatory synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Scaffolding proteins and glutamate receptors at excitatory synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Scaffolding proteins and glutamate receptors at excitatory synapses) matches the underlying mechanism."
    ]
  },
  {
    topic: "Excitatory-Inhibitory Balance",
    question: "E/I balance refers to:",
    options: [
      "Relative levels of excitatory and inhibitory synaptic drive onto a neuron",
      "Equal numbers of axons and dendrites anatomically",
      "Only GABAergic monosynaptic reflexes",
      "Myelin equal to axon diameter"
    ],
    correct: 0,
    explanation: "Circuit function depends on balanced excitation and inhibition.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Relative levels of excitatory and inhibitory synaptic drive onto a neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Relative levels of excitatory and inhibitory synaptic drive onto a neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Relative levels of excitatory and inhibitory synaptic drive onto a neuron) matches the underlying mechanism."
    ]
  },
  {
    topic: "Drug Effects",
    question: "Benzodiazepines enhance GABA_A signaling by:",
    options: [
      "Increasing frequency of channel opening (allosteric modulation)",
      "Blocking GABA synthesis irreversibly",
      "Opening NMDA receptors",
      "Preventing Cl⁻ flux"
    ],
    correct: 0,
    explanation: "BZDs bind allosteric sites to potentiate GABA_A responses.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increasing frequency of channel opening (allosteric modulation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing frequency of channel opening (allosteric modulation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing frequency of channel opening (allosteric modulation)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Drug Effects",
    question: "Strychnine causes convulsions by blocking:",
    options: [
      "Glycine receptors (in spinal inhibitory circuits)",
      "AMPA receptors in retina",
      "Voltage-gated K⁺ in nodes only",
      "Connexins in heart only"
    ],
    correct: 0,
    explanation: "Loss of glycinergic inhibition leads to uncontrolled motor activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Glycine receptors (in spinal inhibitory circuits)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Glycine receptors (in spinal inhibitory circuits)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Glycine receptors (in spinal inhibitory circuits)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides differ from classical transmitters because they:",
    options: [
      "Are often co-released, act on GPCRs, and can have long-lasting effects",
      "Always use ionotropic pores with sub-ms kinetics only",
      "Are stored only in mitochondria",
      "Cannot be released by activity"
    ],
    correct: 0,
    explanation: "Peptides modulate circuits over longer ranges and timescales.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Are often co-released, act on GPCRs, and can have long-lasting effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are often co-released, act on GPCRs, and can have long-lasting effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are often co-released, act on GPCRs, and can have long-lasting effects) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Acetylcholinesterase in the synaptic cleft:",
    options: [
      "Hydrolyzes ACh to terminate the endplate potential",
      "Synthesizes ACh from glutamate",
      "Opens K⁺ channels directly",
      "Myelinates the motor axon"
    ],
    correct: 0,
    explanation: "Rapid ACh breakdown keeps NMJ signaling brief.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hydrolyzes ACh to terminate the endplate potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hydrolyzes ACh to terminate the endplate potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hydrolyzes ACh to terminate the endplate potential) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Curare-like drugs block NMJ transmission by:",
    options: [
      "Competitive antagonism at nicotinic ACh receptors",
      "Blocking voltage-gated Na⁺ in muscle T-tubules only always",
      "Preventing action potentials in motor cortex only",
      "Enhancing GABA_A on motoneurons exclusively"
    ],
    correct: 0,
    explanation: "nAChR block prevents endplate depolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Competitive antagonism at nicotinic ACh receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Competitive antagonism at nicotinic ACh receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Competitive antagonism at nicotinic ACh receptors) matches the underlying mechanism."
    ]
  },
  {
    topic: "Co-transmission",
    question: "A neuron releasing both glutamate and a neuropeptide illustrates:",
    options: [
      "Co-transmission with fast and slow signaling components",
      "Only electrical coupling",
      "Purely retrograde dopamine signaling",
      "Myelin-mediated transmission"
    ],
    correct: 0,
    explanation: "Many neurons co-release multiple transmitters/modulators.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Co-transmission with fast and slow signaling components) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Co-transmission with fast and slow signaling components) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Co-transmission with fast and slow signaling components) matches the underlying mechanism."
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Disinhibition occurs when:",
    options: [
      "Inhibition of an interneuron releases a target from suppression",
      "All GABA neurons are removed globally",
      "Only AMPA receptors activate",
      "Myelin is added to interneurons"
    ],
    correct: 0,
    explanation: "Removing inhibitory input on a neuron can increase its activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inhibition of an interneuron releases a target from suppression) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibition of an interneuron releases a target from suppression) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibition of an interneuron releases a target from suppression) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Spike-timing-dependent plasticity (STDP) depends on:",
    options: [
      "Order and timing of pre- and postsynaptic spikes",
      "Only ambient temperature",
      "Myelin length",
      "Olfactory receptor choice"
    ],
    correct: 0,
    explanation: "Millisecond-scale timing windows determine LTP vs LTD.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Order and timing of pre- and postsynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Order and timing of pre- and postsynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Order and timing of pre- and postsynaptic spikes) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Presynaptic LTP at the crayfish neuromuscular junction involves:",
    options: [
      "Increased quantal release (presynaptic mechanism)",
      "Only postsynaptic receptor insertion always",
      "Gap junction doubling",
      "Photoreceptor adaptation"
    ],
    correct: 0,
    explanation: "Classic example of presynaptic enhancement of release probability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increased quantal release (presynaptic mechanism)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased quantal release (presynaptic mechanism)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased quantal release (presynaptic mechanism)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Integration",
    question: "An IPSP arriving at the soma during an EPSP can:",
    options: [
      "Reduce net depolarization and prevent threshold crossing",
      "Always increase Na⁺ influx",
      "Eliminate resting potential permanently",
      "Convert the cell to photoreceptor function"
    ],
    correct: 0,
    explanation: "Inhibition subtracts from excitation in integration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduce net depolarization and prevent threshold crossing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce net depolarization and prevent threshold crossing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce net depolarization and prevent threshold crossing) matches the underlying mechanism."
    ]
  },
  {
    topic: "Integration",
    question: "Dendritic spikes in some neurons can:",
    options: [
      "Boost local depolarization and influence somatic output",
      "Only occur in unmyelinated sensory axons always",
      "Replace all chemical synapses",
      "Block all K⁺ channels globally"
    ],
    correct: 0,
    explanation: "Active dendritic conductances can nonlinearly amplify inputs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Boost local depolarization and influence somatic output) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Boost local depolarization and influence somatic output) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Boost local depolarization and influence somatic output) matches the underlying mechanism."
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "Acetylcholine in cortex during wakefulness tends to:",
    options: [
      "Increase responsiveness and modulate attention via muscarinic and nicotinic receptors",
      "Silence all thalamocortical input permanently",
      "Replace glutamate at every synapse",
      "Only hyperpolarize via GABA_B"
    ],
    correct: 0,
    explanation: "ACh neuromodulation supports arousal and cortical processing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase responsiveness and modulate attention via muscarinic and nicotinic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase responsiveness and modulate attention via muscarinic and nicotinic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase responsiveness and modulate attention via muscarinic and nicotinic receptors) matches the underlying mechanism."
    ]
  }
];

const PART3_EXTRA_POOL = [
  {
    topic: "Phototransduction",
    question: "In darkness, vertebrate photoreceptors are depolarized because:",
    options: [
      "Cyclic nucleotide-gated channels pass cation influx (dark current)",
      "Rhodopsin maximally activates transducin always",
      "Only K⁺ leak is closed",
      "Myelin wraps the outer segment"
    ],
    correct: 0,
    explanation: "High cGMP keeps channels open; light lowers cGMP and hyperpolarizes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cyclic nucleotide-gated channels pass cation influx (dark current)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cyclic nucleotide-gated channels pass cation influx (dark current)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cyclic nucleotide-gated channels pass cation influx (dark current)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Phototransduction",
    question: "Light activation of rhodopsin leads to:",
    options: [
      "Reduced cGMP and closure of cGMP-gated channels",
      "Immediate opening of all voltage-gated Na⁺ in myelin",
      "Sustained depolarization and increased glutamate release",
      "Only electrical synapse formation"
    ],
    correct: 0,
    explanation: "Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduced cGMP and closure of cGMP-gated channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduced cGMP and closure of cGMP-gated channels) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduced cGMP and closure of cGMP-gated channels) matches the underlying mechanism."
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Horizontal cells provide lateral inhibition that contributes to:",
    options: [
      "Center-surround receptive fields",
      "Saltatory conduction in optic nerve only",
      "Cochlear frequency tuning",
      "Hippocampal LTP exclusively"
    ],
    correct: 0,
    explanation: "Lateral inhibition shapes spatial contrast in retinal ganglion cells.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Center-surround receptive fields) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Center-surround receptive fields) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Center-surround receptive fields) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Ganglion cells encode visual information primarily as:",
    options: [
      "Patterns of action potentials (rate and timing)",
      "Graded muscle contractions",
      "Direct myelin thickness changes",
      "Only peptide release without spikes"
    ],
    correct: 0,
    explanation: "Retinal output is spiking activity in optic nerve fibers.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials (rate and timing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials (rate and timing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Patterns of action potentials (rate and timing)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular pathway neurons generally prefer:",
    options: [
      "High temporal frequency and motion (coarse detail)",
      "Fine color static patterns only",
      "Olfactory combinations",
      "Proprioception from muscle spindles"
    ],
    correct: 0,
    explanation: "M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (High temporal frequency and motion (coarse detail)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (High temporal frequency and motion (coarse detail)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (High temporal frequency and motion (coarse detail)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual System",
    question: "Parvocellular LGN neurons project mainly to:",
    options: [
      "Primary visual cortex (V1) layer 4Cβ (classic geniculate input)",
      "Cerebellar cortex only",
      "Spinal cord ventral horn exclusively",
      "Olfactory bulb"
    ],
    correct: 0,
    explanation: "P cells drive detailed form/color processing in V1.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Primary visual cortex (V1) layer 4Cβ (classic geniculate input)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Primary visual cortex (V1) layer 4Cβ (classic geniculate input)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Primary visual cortex (V1) layer 4Cβ (classic geniculate input)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Orientation selectivity in V1 simple cells arises partly from:",
    options: [
      "Spatially offset ON/OFF subregions in receptive fields",
      "Random channel noise only",
      "Myelin orientation",
      "Cochlear tonotopy"
    ],
    correct: 0,
    explanation: "Hubel & Wiesel: elongated subfields produce orientation tuning.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Spatially offset ON/OFF subregions in receptive fields) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spatially offset ON/OFF subregions in receptive fields) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spatially offset ON/OFF subregions in receptive fields) matches the underlying mechanism."
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Binocular disparity sensitive neurons are important for:",
    options: [
      "Depth perception (stereopsis)",
      "Smell discrimination",
      "Balance reflexes only",
      "Pain gate control exclusively"
    ],
    correct: 0,
    explanation: "Disparity-tuned cells in visual cortex support 3D vision.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depth perception (stereopsis)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depth perception (stereopsis)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depth perception (stereopsis)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "Frequency tuning in the cochlea basilar membrane follows:",
    options: [
      "Tonotopic organization (location maps frequency)",
      "Random placement without order",
      "Only olfactory glomeruli rules",
      "Retinal eccentricity"
    ],
    correct: 0,
    explanation: "Basilar membrane stiffness varies along length, mapping frequency.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Tonotopic organization (location maps frequency)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Tonotopic organization (location maps frequency)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Tonotopic organization (location maps frequency)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "Inner hair cells transduce sound via:",
    options: [
      "Mechanotransduction channels opened by tip-link tension",
      "Rhodopsin and cGMP",
      "Nicotinic ACh at NMJ",
      "Gap junctions to photoreceptors"
    ],
    correct: 0,
    explanation: "Stereocilia deflection opens ion channels in hair cells.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Mechanotransduction channels opened by tip-link tension) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Mechanotransduction channels opened by tip-link tension) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Mechanotransduction channels opened by tip-link tension) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory System",
    question: "The auditory nerve encodes sound intensity largely by:",
    options: [
      "Increased firing rate in cochlear nerve fibers",
      "Changing myelin color",
      "Only inhibitory synapses without spikes",
      "Releasing dopamine in the cochlea"
    ],
    correct: 0,
    explanation: "Louder sounds generally drive higher spike rates in auditory nerve.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increased firing rate in cochlear nerve fibers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased firing rate in cochlear nerve fibers) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased firing rate in cochlear nerve fibers) matches the underlying mechanism."
    ]
  },
  {
    topic: "Auditory Pathway",
    question: "Superior olivary nuclei compute:",
    options: [
      "Sound localization cues (ITD and ILD)",
      "Color opponency",
      "Olfactory adaptation only",
      "Cerebellar motor learning exclusively"
    ],
    correct: 0,
    explanation: "Binaural processing in SOC supports localization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Sound localization cues (ITD and ILD)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sound localization cues (ITD and ILD)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Sound localization cues (ITD and ILD)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "Meissner corpuscles in skin are most sensitive to:",
    options: [
      "Light touch and flutter (low-amplitude movement)",
      "Deep pressure only",
      "No temperature change ever",
      "Visual motion"
    ],
    correct: 0,
    explanation: "Meissner endings detect fine tactile vibrations.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Light touch and flutter (low-amplitude movement)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Light touch and flutter (low-amplitude movement)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Light touch and flutter (low-amplitude movement)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles respond best to:",
    options: [
      "High-frequency vibration and deep pressure transients",
      "Static hair position only",
      "Bitter taste",
      "Red-green color opponency"
    ],
    correct: 0,
    explanation: "Pacinian fibers are rapidly adapting vibration detectors.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (High-frequency vibration and deep pressure transients) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (High-frequency vibration and deep pressure transients) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (High-frequency vibration and deep pressure transients) matches the underlying mechanism."
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings often mediate:",
    options: [
      "Pain and temperature sensation",
      "Only proprioception from muscle spindles",
      "Phototransduction",
      "Cochlear amplification"
    ],
    correct: 0,
    explanation: "Nociceptors and thermoreceptors are unencapsulated endings.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature sensation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature sensation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Pain and temperature sensation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pain",
    question: "Nociceptive Aδ fibers are:",
    options: [
      "Myelinated and conduct sharp, fast pain",
      "Unmyelinated C fibers exclusively",
      "Only found in retina",
      "Purely electrical synapses"
    ],
    correct: 0,
    explanation: "Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Myelinated and conduct sharp, fast pain) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated and conduct sharp, fast pain) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated and conduct sharp, fast pain) matches the underlying mechanism."
    ]
  },
  {
    topic: "Pain",
    question: "Gate control theory proposes:",
    options: [
      "Spinal circuitry can modulate pain transmission (e.g., touch inputs affecting nociceptive relay)",
      "Pain is purely cortical with no spinal component",
      "Only myelin gates pain always open",
      "NMDA is absent in pain pathways"
    ],
    correct: 0,
    explanation: "Inhibitory interneurons in dorsal horn can gate pain signals.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Spinal circuitry can modulate pain transmission (e.g., touch inputs affecting nociceptive relay)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spinal circuitry can modulate pain transmission (e.g., touch inputs affecting nociceptive relay)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spinal circuitry can modulate pain transmission (e.g., touch inputs affecting nociceptive relay)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Proprioception",
    question: "Golgi tendon organs signal:",
    options: [
      "Muscle tension (force) at the tendon",
      "Retinal illuminance",
      "Olfactory concentration only",
      "Cochlear phase"
    ],
    correct: 0,
    explanation: "GTOs inhibit excessive force via Ib afferents.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Muscle tension (force) at the tendon) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Muscle tension (force) at the tendon) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Muscle tension (force) at the tendon) matches the underlying mechanism."
    ]
  },
  {
    topic: "Olfaction",
    question: "Mitral/tufted cells in the bulb send output to:",
    options: [
      "Olfactory cortex (piriform and related areas)",
      "Primary visual cortex exclusively",
      "Cochlear nucleus only",
      "Spinal motor pools only"
    ],
    correct: 0,
    explanation: "Bulb principal cells relay odor info to cortex.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Olfactory cortex (piriform and related areas)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Olfactory cortex (piriform and related areas)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Olfactory cortex (piriform and related areas)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Taste",
    question: "Umami taste is transduced largely through:",
    options: [
      "Metabotropic glutamate receptors (T1R1/T1R3) on taste cells",
      "Rhodopsin in taste buds",
      "Hair cell tip links",
      "Muscle spindle Ia fibers"
    ],
    correct: 0,
    explanation: "Amino acid (glutamate) taste uses specific taste receptors.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic glutamate receptors (T1R1/T1R3) on taste cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic glutamate receptors (T1R1/T1R3) on taste cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Metabotropic glutamate receptors (T1R1/T1R3) on taste cells) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage mainly at:",
    options: [
      "Cerebral endothelial tight junctions (with astrocyte endfeet support)",
      "Nodes of Ranvier exclusively",
      "Photoreceptor outer segments only",
      "NMJ synaptic cleft"
    ],
    correct: 0,
    explanation: "Endothelial tight junctions limit paracellular diffusion into CNS.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cerebral endothelial tight junctions (with astrocyte endfeet support)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cerebral endothelial tight junctions (with astrocyte endfeet support)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cerebral endothelial tight junctions (with astrocyte endfeet support)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter primarily contains:",
    options: [
      "Myelinated axon tracts",
      "Neuronal cell bodies only",
      "Photoreceptor layers",
      "Taste bud cells"
    ],
    correct: 0,
    explanation: "White matter is axons; gray matter is cell bodies and neuropil.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axon tracts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axon tracts) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Myelinated axon tracts) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum connects:",
    options: [
      "Left and right cerebral hemispheres",
      "Spinal cord to cerebellum only",
      "Cochlea to retina",
      "Olfactory bulb to tongue"
    ],
    correct: 0,
    explanation: "Commissural fibers integrate bilateral cortex.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Left and right cerebral hemispheres) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Left and right cerebral hemispheres) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Left and right cerebral hemispheres) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Basal ganglia loops (cortex–striatum–GP/SN–thalamus) are critical for:",
    options: [
      "Action selection and habit learning",
      "Phototransduction exclusively",
      "Cochlear tuning only",
      "Pain fiber myelination"
    ],
    correct: 0,
    explanation: "MCB80x links basal ganglia to movement and reinforcement.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Action selection and habit learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Action selection and habit learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Action selection and habit learning) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The hippocampus is essential for many forms of:",
    options: [
      "Declarative (explicit) memory formation",
      "Primary visual color opponency only",
      "Cochlear amplification",
      "Reflexive withdrawal only without learning"
    ],
    correct: 0,
    explanation: "Hippocampus supports episodic and spatial memory consolidation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Declarative (explicit) memory formation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Declarative (explicit) memory formation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Declarative (explicit) memory formation) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Cerebellum is heavily involved in:",
    options: [
      "Error correction, coordination, and some forms of motor learning",
      "Initial phototransduction",
      "Olfactory receptor choice",
      "Only pain transmission"
    ],
    correct: 0,
    explanation: "Cerebellar circuits fine-tune movement and timing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Error correction, coordination, and some forms of motor learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Error correction, coordination, and some forms of motor learning) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Error correction, coordination, and some forms of motor learning) matches the underlying mechanism."
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Thalamus functions as:",
    options: [
      "A relay and gate for sensory information to cortex (and cortical loops)",
      "The sole site of rhodopsin expression",
      "Myelin factory for peripheral nerves only",
      "Only respiratory CPG without sensory role"
    ],
    correct: 0,
    explanation: "Thalamic nuclei route sensory and motor-related signals.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (A relay and gate for sensory information to cortex (and cortical loops)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (A relay and gate for sensory information to cortex (and cortical loops)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (A relay and gate for sensory information to cortex (and cortical loops)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons in ventral horn:",
    options: [
      "Innervate skeletal muscle fibers directly",
      "Project to LGN only",
      "Encode sound frequency",
      "Release rhodopsin"
    ],
    correct: 0,
    explanation: "LMNs are the final common path to muscle.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Innervate skeletal muscle fibers directly) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Innervate skeletal muscle fibers directly) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Innervate skeletal muscle fibers directly) matches the underlying mechanism."
    ]
  },
  {
    topic: "Motor Systems",
    question: "The stretch reflex (myotatic reflex) is monosynaptic between:",
    options: [
      "Ia afferent and α motor neuron",
      "Retinal bipolar and ganglion cell",
      "Cochlear inner hair cell and olivary cell only",
      "Olfactory OSN and mitral cell exclusively for stretch"
    ],
    correct: 0,
    explanation: "Stretch activates spindles → Ia synapses on homonymous motoneurons.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ia afferent and α motor neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ia afferent and α motor neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ia afferent and α motor neuron) matches the underlying mechanism."
    ]
  },
  {
    topic: "Brain Function",
    question: "Prefrontal cortex is associated with:",
    options: [
      "Working memory, planning, and executive control",
      "Cochlear basilar stiffness only",
      "Rhodopsin regeneration exclusively",
      "Pacinian vibration transduction"
    ],
    correct: 0,
    explanation: "PFC supports higher cognitive control and working memory.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Working memory, planning, and executive control) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Working memory, planning, and executive control) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Working memory, planning, and executive control) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory differs from long-term memory in that it:",
    options: [
      "Holds information transiently for ongoing behavior",
      "Is stored permanently after one spike",
      "Exists only in peripheral nerves",
      "Requires myelin in olfactory bulb"
    ],
    correct: 0,
    explanation: "Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Holds information transiently for ongoing behavior) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Holds information transiently for ongoing behavior) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Holds information transiently for ongoing behavior) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is typically associated with:",
    options: [
      "Hippocampus and medial temporal lobe structures",
      "Only cerebellar cortex for all memories",
      "Cochlear nucleus exclusively",
      "Skin Meissner corpuscles"
    ],
    correct: 0,
    explanation: "Explicit facts/events depend on medial temporal lobe circuits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hippocampus and medial temporal lobe structures) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hippocampus and medial temporal lobe structures) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hippocampus and medial temporal lobe structures) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (skills/habits) involves strongly:",
    options: [
      "Basal ganglia and cerebellum among other areas",
      "Only retina photoreceptors",
      "Olfactory glomeruli alone",
      "Free nerve endings exclusively"
    ],
    correct: 0,
    explanation: "Motor skills and habits engage striatum/cerebellum.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia and cerebellum among other areas) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia and cerebellum among other areas) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Basal ganglia and cerebellum among other areas) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "The amygdala contributes to memory by:",
    options: [
      "Emotional salience and fear conditioning associations",
      "Tonotopic mapping",
      "Photoreceptor dark current",
      "NMJ acetylcholinesterase"
    ],
    correct: 0,
    explanation: "Amygdala modulates emotional memory strength.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Emotional salience and fear conditioning associations) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Emotional salience and fear conditioning associations) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Emotional salience and fear conditioning associations) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Consolidation transfers labile memory to stable storage over:",
    options: [
      "Hours to years via systems and synaptic mechanisms",
      "One millisecond only",
      "Only during sleep never",
      "Only in myelin"
    ],
    correct: 0,
    explanation: "Consolidation includes synaptic and systems-level reorganization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hours to years via systems and synaptic mechanisms) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hours to years via systems and synaptic mechanisms) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hours to years via systems and synaptic mechanisms) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Morris water maze tests primarily:",
    options: [
      "Spatial learning dependent on hippocampus in rodents",
      "Color vision in flies only",
      "Cochlear phase locking exclusively",
      "Olfactory one-receptor rule"
    ],
    correct: 0,
    explanation: "Hidden platform task assesses hippocampal-dependent navigation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Spatial learning dependent on hippocampus in rodents) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spatial learning dependent on hippocampus in rodents) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spatial learning dependent on hippocampus in rodents) matches the underlying mechanism."
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Patient H.M.-like medial temporal lobe damage impairs:",
    options: [
      "New declarative memories while leaving much procedural learning intact",
      "All sensation including touch",
      "Myelin formation in CNS",
      "Dark current in photoreceptors"
    ],
    correct: 0,
    explanation: "Classic dissociation: anterograde declarative amnesia with spared skills.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (New declarative memories while leaving much procedural learning intact) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (New declarative memories while leaving much procedural learning intact) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (New declarative memories while leaving much procedural learning intact) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Protein synthesis is often required for:",
    options: [
      "Long-lasting LTP/LTM (late phase), not early short-term changes only",
      "Immediate reflex arcs only",
      "Photoreceptor bleaching",
      "Passive membrane τ"
    ],
    correct: 0,
    explanation: "Late LTP and long-term memory need gene expression and new proteins.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Long-lasting LTP/LTM (late phase), not early short-term changes only) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Long-lasting LTP/LTM (late phase), not early short-term changes only) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Long-lasting LTP/LTM (late phase), not early short-term changes only) matches the underlying mechanism."
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Engram cells refer to:",
    options: [
      "Neurons whose activity participates in storing a specific memory trace",
      "Only glial cells in white matter",
      "Cochlear outer hair cells exclusively",
      "All nociceptors uniformly"
    ],
    correct: 0,
    explanation: "Ensemble of neurons physically underlying a memory.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Neurons whose activity participates in storing a specific memory trace) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurons whose activity participates in storing a specific memory trace) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Neurons whose activity participates in storing a specific memory trace) matches the underlying mechanism."
    ]
  },
  {
    topic: "Sensory Integration",
    question: "Multisensory integration in superior colliculus can produce:",
    options: [
      "Enhanced responses when auditory and visual stimuli coincide spatially",
      "Loss of all retinal ON/OFF pathways",
      "Only olfactory adaptation",
      "Exclusive GABA_B signaling in muscle"
    ],
    correct: 0,
    explanation: "Cross-modal alignment can super-additive boost orienting responses.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Enhanced responses when auditory and visual stimuli coincide spatially) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhanced responses when auditory and visual stimuli coincide spatially) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Enhanced responses when auditory and visual stimuli coincide spatially) matches the underlying mechanism."
    ]
  },
  {
    topic: "Balance",
    question: "Semicircular canals detect:",
    options: [
      "Angular acceleration of the head",
      "Static linear gravity only without motion",
      "Bitter taste intensity",
      "Retinal contrast"
    ],
    correct: 0,
    explanation: "Canal hair cells respond to rotational head movements.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Angular acceleration of the head) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Angular acceleration of the head) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Angular acceleration of the head) matches the underlying mechanism."
    ]
  },
  {
    topic: "Balance",
    question: "Utricle and saccule detect:",
    options: [
      "Linear acceleration and head tilt (otolith organs)",
      "High-frequency sound only",
      "Olfactory concentration",
      "Color wavelength exclusively"
    ],
    correct: 0,
    explanation: "Otoliths sense gravity and linear acceleration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Linear acceleration and head tilt (otolith organs)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Linear acceleration and head tilt (otolith organs)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Linear acceleration and head tilt (otolith organs)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Development",
    question: "Activity-dependent refinement of visual maps (e.g., ocular dominance) illustrates:",
    options: [
      "Hebbian/plastic mechanisms shaping circuits during critical periods",
      "Fixed wiring with zero experience dependence always",
      "Only myelin growth without synapses",
      "Olfactory receptor switching each hour"
    ],
    correct: 0,
    explanation: "Experience shapes connectivity during development (MCB80x visual system).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hebbian/plastic mechanisms shaping circuits during critical periods) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hebbian/plastic mechanisms shaping circuits during critical periods) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hebbian/plastic mechanisms shaping circuits during critical periods) matches the underlying mechanism."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia typically reflects dysfunction in:",
    options: [
      "Fusiform face area / ventral visual stream (face recognition)",
      "Cochlear nucleus only",
      "Stretch reflex arc exclusively",
      "NMJ acetylcholine release only"
    ],
    correct: 0,
    explanation: "Face recognition deficits implicate specialized ventral visual cortex.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fusiform face area / ventral visual stream (face recognition)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fusiform face area / ventral visual stream (face recognition)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fusiform face area / ventral visual stream (face recognition)) matches the underlying mechanism."
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Hemianopia after post-chiasmal lesion reflects:",
    options: [
      "Loss of contralateral visual field representation",
      "Complete blindness in both eyes always",
      "Only olfactory loss",
      "Deafness without cochlear damage"
    ],
    correct: 0,
    explanation: "Optic tract/radiation/cortex lesions cause contralateral field defects.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Loss of contralateral visual field representation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Loss of contralateral visual field representation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Loss of contralateral visual field representation) matches the underlying mechanism."
    ]
  }
];

