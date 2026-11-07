// MCB80x extra question pools — HarvardX Fundamentals of Neuroscience

const PART1_EXTRA_POOL = [
  {
    topic: "Goldman Equation",
    question: "At rest, if P_K is much greater than P_Na and P_Cl is negligible, the membrane potential is dominated by:",
    options: [
      "Sodium equilibrium (E_Na)",
      "Potassium equilibrium (E_K)",
      "Exactly 0 mV",
      "The reversal of the pump only",
    ],
    correct: 1,
    explanation: "Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion.",
    wrongExplanations: [
      "Unlike the keyed answer (Potassium equilibrium (E_K)), this option misstates the mechanism or direction described in the stem.",
      "",
      "This choice (Exactly 0 mV) does not match the keyed answer’s mechanism for Goldman Equation.",
      "Unlike the keyed answer (Potassium equilibrium (E_K)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed will shift the Goldman resting potential:",
    options: [
      "Toward E_Na (less negative)",
      "Toward E_K only",
      "To exactly +60 mV always",
      "Away from any ion equilibrium",
    ],
    correct: 0,
    explanation: "Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
    wrongExplanations: [
      "",
      "This choice (Toward E_K only) does not match the keyed answer’s mechanism for Goldman Equation.",
      "This choice (To exactly +60 mV always) does not match the keyed answer’s mechanism for Goldman Equation.",
      "Unlike the keyed answer (Toward E_Na (less negative)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase contributes directly to resting potential mainly by:",
    options: [
      "Maintaining ion gradients that set equilibrium potentials",
      "Opening voltage-gated Na⁺ channels (ignores which ion dominates resting permeability)",
      "Depolarizing the cell to threshold on every cycle (ignores which ion dominates resting permeability)",
      "Blocking K⁺ leak channels (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Maintaining ion gradients that set equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintaining ion gradients that set equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Maintaining ion gradients that set equilibrium potentials), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains, V_m will tend to move:",
    options: [
      "Toward E_Na (depolarized relative to normal K⁺-dominated rest)",
      "Toward E_K as if K⁺ leak were unchanged (ignores which ion dominates resting permeability)",
      "To 0 mV instantly regardless of gradients (ignores which ion dominates resting permeability)",
      "Below −150 mV (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Toward E_Na (depolarized relative to normal K⁺-dominated rest)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a divalent cation such as Ca²⁺, a 10-fold concentration ratio at 37°C changes the Nernst potential by roughly:",
    options: [
      "~31 mV (half the monovalent slope)",
      "~62 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "~124 mV (contradicts the Nernst dependence on inside/outside concentrations)",
      "0 mV (valence cancels) — contradicts the Nernst dependence on inside/outside concentrations.",
    ],
    correct: 0,
    explanation: "Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (~31 mV (half the monovalent slope)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~31 mV (half the monovalent slope)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (~31 mV (half the monovalent slope)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "If [K⁺]_out equals [K⁺]_in, the Nernst equilibrium potential for K⁺ is:",
    options: [
      "0 mV",
      "−90 mV",
      "+60 mV",
      "Undefined",
    ],
    correct: 0,
    explanation: "With no concentration gradient, E_K = 0 mV regardless of channel presence.",
    wrongExplanations: [
      "",
      "This choice (−90 mV) does not match the keyed answer’s mechanism for Nernst Equation.",
      "This choice (+60 mV) does not match the keyed answer’s mechanism for Nernst Equation.",
      "This choice (Undefined) does not match the keyed answer’s mechanism for Nernst Equation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Cooling a preparation from 37°C to 20°C (holding concentrations fixed) will:",
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
      "This choice (Double the Nernst slope) does not match the keyed answer’s mechanism for Nernst Equation.",
      "Unlike the keyed answer (Reduce the Nernst slope in mV per decade), this option misstates the mechanism or direction described in the stem.",
      "This choice (Make E_Na exactly 0 mV) does not match the keyed answer’s mechanism for Nernst Equation.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If V_m is held at E_K, the driving force on K⁺ is:",
    options: [
      "Zero",
      "Maximal outward",
      "Maximal inward",
      "Equal to the pump flux only",
    ],
    correct: 0,
    explanation: "At equilibrium potential, net electrochemical driving force for that ion is zero.",
    wrongExplanations: [
      "",
      "This choice (Maximal outward) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "This choice (Maximal inward) does not match the keyed answer’s mechanism for Electrical Signaling.",
      "Unlike the keyed answer (Zero), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance arises primarily because:",
    options: [
      "The lipid bilayer stores charge separated across a thin dielectric",
      "Myelin increases ion channel density (misstates how R_m, C_m, or geometry set τ or λ)",
      "Na⁺ channels pump charge into the ER (misstates how R_m, C_m, or geometry set τ or λ)",
      "Dendrites lack any resistance (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (The lipid bilayer stores charge separated across a thin dielectric), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The lipid bilayer stores charge separated across a thin dielectric), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (The lipid bilayer stores charge separated across a thin dielectric), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "During a step of constant depolarizing current, the initial voltage deflection is dominated by:",
    options: [
      "Capacitive charging (ΔV ≈ I/C)",
      "Steady-state leak only with no transient",
      "Action potential generation always",
      "Saltatory conduction",
    ],
    correct: 0,
    explanation: "Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Capacitive charging (ΔV ≈ I/C)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Capacitive charging (ΔV ≈ I/C)), this option misstates the mechanism or direction described in the stem.",
      "This choice (Saltatory conduction) does not match the keyed answer’s mechanism for Passive Membrane Properties.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane resistance R_m while C_m is unchanged will:",
    options: [
      "Increase τ and slow subthreshold responses",
      "Decrease τ (misstates how R_m, C_m, or geometry set τ or λ)",
      "Prevent passive decay along dendrites (misstates how R_m, C_m, or geometry set τ or λ)",
      "Block inactivation of Na⁺ channels (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "τ = R_m C_m; higher R_m lengthens the membrane time constant.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Increase τ and slow subthreshold responses), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increase τ and slow subthreshold responses), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Increase τ and slow subthreshold responses), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Decreasing R_m (more leak) with unchanged R_i will:",
    options: [
      "Shorten λ and attenuate dendritic signals faster",
      "Lengthen λ",
      "Speed action potentials in myelinated axons only",
      "Raise E_K",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); lower R_m shrinks the space constant.",
    wrongExplanations: [
      "",
      "This choice (Lengthen λ) does not match the keyed answer’s mechanism for Passive Membrane Properties.",
      "Unlike the keyed answer (Shorten λ and attenuate dendritic signals faster), this option misstates the mechanism or direction described in the stem.",
      "This choice (Raise E_K) does not match the keyed answer’s mechanism for Passive Membrane Properties.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal synapse is typically smaller and slower because of:",
    options: [
      "Cable filtering (attenuation and low-pass filtering)",
      "Complete absence of ionotropic receptors (misstates how R_m, C_m, or geometry set τ or λ)",
      "Myelin on dendrites (misstates how R_m, C_m, or geometry set τ or λ)",
      "Only electrical synapses distally (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Passive spread along dendrites attenuates amplitude and spreads rise time.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Cable filtering (attenuation and low-pass filtering)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cable filtering (attenuation and low-pass filtering)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cable filtering (attenuation and low-pass filtering)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input conductance (1/R_in) increases when:",
    options: [
      "More ion channels open in the dendritic tree",
      "Myelin thickness increases (misstates how R_m, C_m, or geometry set τ or λ)",
      "Extracellular K⁺ drops (misstates how R_m, C_m, or geometry set τ or λ)",
      "Temperature falls below 0°C (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Additional open channels lower input resistance and increase conductance.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (More ion channels open in the dendritic tree), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (More ion channels open in the dendritic tree), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (More ion channels open in the dendritic tree), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "In whole-cell patch clamp, breaking into the cell interior allows the electrode to:",
    options: [
      "Dialyze the cytoplasm and control V_m directly",
      "Measure only extracellular field potentials",
      "Record from single channels without seal",
      "Block all K⁺ currents irreversibly when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Dialyze the cytoplasm and control V_m directly), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Dialyze the cytoplasm and control V_m directly), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Dialyze the cytoplasm and control V_m directly), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "A gigaohm seal in patch clamp reduces:",
    options: [
      "Leak current between pipette and bath, improving signal-to-noise",
      "Membrane capacitance to zero",
      "The need for any amplifier when temperature is near 37 °C. during normal resting permeability conditions.",
      "All synaptic transmission in the slice when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Tight seals isolate the patch from bath noise and enable single-channel resolution.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Leak current between pipette and bath, improving signal-to-noise), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Leak current between pipette and bath, improving signal-to-noise), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Leak current between pipette and bath, improving signal-to-noise), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Cell-attached patch configuration is useful for recording:",
    options: [
      "Single-channel currents without disrupting cytosolic composition",
      "Requires action potentials in axons exclusively in this context",
      "Population spikes in cortex only",
      "Magnetic fields from myelin during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "The patch stays on the outside surface, preserving intracellular milieu.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Single-channel currents without disrupting cytosolic composition), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Single-channel currents without disrupting cytosolic composition), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Single-channel currents without disrupting cytosolic composition), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials primarily by binding:",
    options: [
      "Voltage-gated Na⁺ channel pore",
      "Voltage-gated K⁺ channels in a typical mammalian central neuron.",
      "The Na⁺/K⁺ pump during normal resting permeability conditions.",
      "Gap junction connexins when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "TTX selectively occludes voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated Na⁺ channel pore), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channel pore), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channel pore), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to axons typically prolongs spikes by blocking:",
    options: [
      "Certain voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels when temperature is near 37 °C.",
      "Glutamate receptors during normal resting permeability conditions.",
      "Myelin basic protein",
    ],
    correct: 0,
    explanation: "TEA blocks some K⁺ channels, slowing repolarization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Certain voltage-gated K⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Certain voltage-gated K⁺ channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Certain voltage-gated K⁺ channels), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The upswing of the squid giant axon action potential is dominated by:",
    options: [
      "Voltage-gated Na⁺ influx",
      "Voltage-gated K⁺ efflux alone",
      "Cl⁻ influx",
      "Capacitive current only with no ionic current",
    ],
    correct: 0,
    explanation: "Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated Na⁺ influx), this option misstates the mechanism or direction described in the stem.",
      "This choice (Cl⁻ influx) does not match the keyed answer’s mechanism for Action Potentials.",
      "Unlike the keyed answer (Voltage-gated Na⁺ influx), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike often reflects:",
    options: [
      "Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺",
      "Sustained Na⁺ influx",
      "Opening of all gap junctions",
      "Pump reversal only when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "K⁺ channels remain active briefly, hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated Na⁺ channels are held in the inactivated state, the neuron:",
    options: [
      "Cannot fire another action potential until recovery",
      "Fires at higher frequency in a typical mammalian central neuron.",
      "Depolarizes to E_Na permanently during normal resting permeability conditions.",
      "Loses all resting potential during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Cannot fire another action potential until recovery), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cannot fire another action potential until recovery), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cannot fire another action potential until recovery), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best described as the voltage at which:",
    options: [
      "Net inward current exceeds net outward current regeneratively",
      "K⁺ channels fully close forever during normal resting permeability conditions.",
      "The pump stops when temperature is near 37 °C. during normal resting permeability conditions.",
      "Myelin is stripped when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Positive feedback from Na⁺ activation makes depolarization self-sustaining.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Net inward current exceeds net outward current regeneratively), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Net inward current exceeds net outward current regeneratively), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Net inward current exceeds net outward current regeneratively), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A subthreshold depolarization decays because:",
    options: [
      "Passive leak currents oppose the change (return toward rest)",
      "Na⁺ channels cannot ever open in a typical mammalian central neuron.",
      "Myelin prevents all current during normal resting permeability conditions.",
      "Synapses are only inhibitory",
    ],
    correct: 0,
    explanation: "Subthreshold events are passive; leak restores resting potential.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Passive leak currents oppose the change (return toward rest)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Passive leak currents oppose the change (return toward rest)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Passive leak currents oppose the change (return toward rest)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Lowering extracellular Ca²⁺ can narrow action potentials partly by:",
    options: [
      "Reducing surface charge screening and altering channel kinetics / excitability",
      "Blocking Na⁺ channels irreversibly when temperature is near 37 °C. during normal resting permeability conditions.",
      "Eliminating K⁺ gradients in a typical mammalian central neuron.",
      "Stopping saltatory conduction always",
    ],
    correct: 0,
    explanation: "Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reducing surface charge screening and altering channel kinetics / excitability), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing surface charge screening and altering channel kinetics / excitability), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing surface charge screening and altering channel kinetics / excitability), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In continuous conduction, the action potential moves because:",
    options: [
      "Local current loops depolarize adjacent membrane to threshold",
      "The spike travels as a single electron flow in myelin (misapplies how active propagation uses local circuit currents)",
      "Only the soma fires repeatedly (misapplies how active propagation uses local circuit currents)",
      "Synaptic vesicles propagate down the axon (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Depolarization spreads passively to the next segment, triggering local Na⁺ influx.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Local current loops depolarize adjacent membrane to threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Local current loops depolarize adjacent membrane to threshold), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Local current loops depolarize adjacent membrane to threshold), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Saltatory conduction increases conduction velocity mainly by:",
    options: [
      "Reducing capacitive load and limiting active regeneration to nodes",
      "Increasing axon diameter only in the soma (misapplies how active propagation uses local circuit currents)",
      "Blocking K⁺ at every internode (misapplies how active propagation uses local circuit currents)",
      "Converting spikes to graded potentials (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Myelin insulates internodes; nodes concentrate ion channels for efficient jumping.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reducing capacitive load and limiting active regeneration to nodes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing capacitive load and limiting active regeneration to nodes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reducing capacitive load and limiting active regeneration to nodes), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetic block of myelinated fibers often fails first in:",
    options: [
      "Small-diameter fibers",
      "Only motor alpha fibers always (misapplies how active propagation uses local circuit currents)",
      "Only proprioceptive Ia fibers always",
      "Unmyelinated C fibers exclusively in all cases",
    ],
    correct: 0,
    explanation: "MCB80x emphasizes use-dependent block and diameter effects; small sensory fibers are often affected early clinically.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Small-diameter fibers), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Small-diameter fibers), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Small-diameter fibers), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "At a node of Ranvier, voltage-gated channels are concentrated to:",
    options: [
      "Regenerate the action potential efficiently",
      "Pump Na⁺ into myelin (misapplies how active propagation uses local circuit currents)",
      "Generate EPSPs only (misapplies how active propagation uses local circuit currents)",
      "Store synaptic vesicles (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "High Na⁺ channel density at nodes supports saltatory propagation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Regenerate the action potential efficiently), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Regenerate the action potential efficiently), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Regenerate the action potential efficiently), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Demyelination slows conduction because:",
    options: [
      "Effective capacitance increases and current must charge more membrane per unit length",
      "Na⁺ channels disappear from the genome (misapplies how active propagation uses local circuit currents)",
      "K⁺ equilibrium becomes +60 mV (misapplies how active propagation uses local circuit currents)",
      "Axons become purely passive forever (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Loss of insulation forces more membrane to be charged, delaying regeneration.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Effective capacitance increases and current must charge more membrane per unit l), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Effective capacitance increases and current must charge more membrane per unit l), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Effective capacitance increases and current must charge more membrane per unit l), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An antidromic action potential is one that:",
    options: [
      "Propagates toward the soma (opposite normal orthodromic direction)",
      "Never occurs in sensory neurons (misapplies how active propagation uses local circuit currents)",
      "Only occurs in dendrites (misapplies how active propagation uses local circuit currents)",
      "Is always subthreshold (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 0,
    explanation: "Antidromic spikes travel from axon toward soma; orthodromic is soma-to-terminal.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Propagates toward the soma (opposite normal orthodromic direction)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Propagates toward the soma (opposite normal orthodromic direction)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Propagates toward the soma (opposite normal orthodromic direction)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "The axon initial segment (AIS) often has a high density of:",
    options: [
      "Voltage-gated Na⁺ channels and contributes strongly to spike initiation",
      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Photopigment molecules when temperature is near 37 °C. during normal resting permeability conditions.",
      "Olfactory receptors during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "MCB80x highlights AIS as a primary site of action potential generation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels and contributes strongly to spike initiation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels and contributes strongly to spike initiation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Voltage-gated Na⁺ channels and contributes strongly to spike initiation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "Graded synaptic potentials summate at the AIS to:",
    options: [
      "Determine whether threshold is reached for spike initiation",
      "Directly release neurotransmitter without spikes",
      "Generate myelin during normal resting permeability conditions.",
      "Reverse the Na⁺/K⁺ pump during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Integration at the AIS converts synaptic input into firing output.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Determine whether threshold is reached for spike initiation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Determine whether threshold is reached for spike initiation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Determine whether threshold is reached for spike initiation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Ball-and-chain inactivation in Na⁺ channels refers to:",
    options: [
      "An intracellular inactivation particle blocking the pore after activation",
      "Myelin wrapping the channel during normal resting permeability conditions.",
      "Glutamate binding to the pore in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Pump phosphorylation only in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Fast inactivation involves a cytoplasmic domain occluding the channel.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (An intracellular inactivation particle blocking the pore after activation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (An intracellular inactivation particle blocking the pore after activation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (An intracellular inactivation particle blocking the pore after activation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Delayed rectifier K⁺ channels open with slower kinetics than Na⁺ channels to:",
    options: [
      "Repolarize the membrane after the Na⁺ surge",
      "Depolarize to threshold faster when temperature is near 37 °C.",
      "Permit indefinite Na⁺ influx",
      "Close gap junctions during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Delayed K⁺ activation terminates the spike.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Repolarize the membrane after the Na⁺ surge), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Repolarize the membrane after the Na⁺ surge), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Repolarize the membrane after the Na⁺ surge), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "At the potassium equilibrium potential, net K⁺ current is zero even though:",
    options: [
      "Individual K⁺ ions still cross the membrane in both directions",
      "No ions move at all during normal resting permeability conditions.",
      "The pump is off during normal resting permeability conditions.",
      "Na⁺ channels are open maximally during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Equilibrium means balanced fluxes, not absence of movement.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Individual K⁺ ions still cross the membrane in both directions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Individual K⁺ ions still cross the membrane in both directions), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Individual K⁺ ions still cross the membrane in both directions), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "Resting potential is a steady state, not a true equilibrium, because:",
    options: [
      "Active transport maintains ion gradients against passive leak",
      "No channels are open",
      "Temperature is zero during normal resting permeability conditions.",
      "Capacitance is infinite during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "The pump continuously works to offset passive ion loss.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Active transport maintains ion gradients against passive leak), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Active transport maintains ion gradients against passive leak), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Active transport maintains ion gradients against passive leak), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Voltage clamp was developed primarily to:",
    options: [
      "Hold membrane voltage constant and measure the currents required",
      "Measure only resting potential without perturbation during normal resting permeability conditions.",
      "Visualize myelin with light microscopy alone",
      "Count synaptic vesicles directly",
    ],
    correct: 0,
    explanation: "Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hold membrane voltage constant and measure the currents required), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hold membrane voltage constant and measure the currents required), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hold membrane voltage constant and measure the currents required), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Current clamp injects current and records:",
    options: [
      "Resulting voltage changes",
      "Fixed voltage with varying current always",
      "Only magnetic resonance signal",
      "Quantal content without electrodes",
    ],
    correct: 0,
    explanation: "Current clamp reveals integrative and spiking behavior under controlled input.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Resulting voltage changes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Resulting voltage changes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Resulting voltage changes), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "Voltage-gated Na⁺ channels are far more selective than leak channels partly because:",
    options: [
      "Pore architecture and charge filtering favor Na⁺ over K⁺",
      "They only open at E_K in a typical mammalian central neuron.",
      "They pump ions actively during normal resting permeability conditions.",
      "They are located only in dendrites when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Selectivity filters and gating restrict permeation to Na⁺.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Pore architecture and charge filtering favor Na⁺ over K⁺), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Pore architecture and charge filtering favor Na⁺ over K⁺), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Pore architecture and charge filtering favor Na⁺ over K⁺), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "If E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors:",
    options: [
      "Inward Na⁺ movement (into the cell)",
      "Outward Na⁺ only",
      "No movement regardless of channels",
      "Movement only through gap junctions",
    ],
    correct: 0,
    explanation: "V_m negative relative to E_Na drives cation influx if channels open.",
    wrongExplanations: [
      "",
      "This choice (Outward Na⁺ only) does not match the keyed answer’s mechanism for Ion Selectivity.",
      "Unlike the keyed answer (Inward Na⁺ movement (into the cell)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Inward Na⁺ movement (into the cell)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Temporal summation requires synaptic inputs that:",
    options: [
      "Overlap in time before passive decay completes",
      "Arrive exactly one year apart in a typical mammalian central neuron.",
      "Are only inhibitory during normal resting permeability conditions.",
      "Occur only in myelin",
    ],
    correct: 0,
    explanation: "EPSPs must summate within the membrane time constant window.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Overlap in time before passive decay completes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Overlap in time before passive decay completes), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Overlap in time before passive decay completes), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Spatial summation occurs when:",
    options: [
      "Multiple synaptic inputs on different branches combine at the axon hillock/AIS",
      "One synapse fires repeatedly after decay",
      "K⁺ channels alone set the photoreceptor resting potential in light",
      "The cell is voltage-clamped at 0 mV during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Inputs from different locations add passively toward spike initiation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Multiple synaptic inputs on different branches combine at the axon hillock/AIS), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Multiple synaptic inputs on different branches combine at the axon hillock/AIS), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Multiple synaptic inputs on different branches combine at the axon hillock/AIS), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Ouabain blocks the Na⁺/K⁺ pump and over time tends to:",
    options: [
      "Depolarize cells as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize instantly to −120 mV",
      "Prevent all action potentials within one millisecond always",
      "Open all glutamate receptors",
    ],
    correct: 0,
    explanation: "Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Depolarize cells as Na⁺ accumulates and K⁺ is lost), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize cells as Na⁺ accumulates and K⁺ is lost), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Depolarize cells as Na⁺ accumulates and K⁺ is lost), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that increases K⁺ conductance at rest will generally:",
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
      "This choice (Depolarize toward E_Na) does not match the keyed answer’s mechanism for Pharmacology.",
      "Unlike the keyed answer (Hyperpolarize or stabilize V_m nearer E_K), this option misstates the mechanism or direction described in the stem.",
      "This choice (Eliminate capacitance) does not match the keyed answer’s mechanism for Pharmacology.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Blocking voltage-gated K⁺ channels during an action potential typically:",
    options: [
      "Broadens the spike and may increase firing rate",
      "Prevents Na⁺ influx entirely",
      "Hyperpolarizes below rest instantly always when temperature is near 37 °C.",
      "Stops propagation only in dendrites during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Slower repolarization prolongs depolarization and can alter refractory period.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Broadens the spike and may increase firing rate), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Broadens the spike and may increase firing rate), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Broadens the spike and may increase firing rate), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If g_Na increases transiently during a spike while g_K rises later, the sequence reflects:",
    options: [
      "Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation",
      "Goldman equation at rest only in a typical mammalian central neuron.",
      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Gap junction coupling in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Classic HH model: fast Na⁺ conductance rise, slower K⁺ rise for repolarization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Reversal potential for a mixed ionic current is the voltage where:",
    options: [
      "Net ionic current through that conductance is zero",
      "The pump rate is maximal",
      "Capacitive current equals action potential amplitude",
      "Only Cl⁻ moves",
    ],
    correct: 0,
    explanation: "Reversal potential satisfies I_ion = g(V_m − E_rev) = 0.",
    wrongExplanations: [
      "",
      "This choice (The pump rate is maximal) does not match the keyed answer’s mechanism for Quantitative Physiology.",
      "Unlike the keyed answer (Net ionic current through that conductance is zero), this option misstates the mechanism or direction described in the stem.",
      "This choice (Only Cl⁻ moves) does not match the keyed answer’s mechanism for Quantitative Physiology.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Increasing axon length constant λ without changing diameter would suggest:",
    options: [
      "Higher R_m or lower R_i",
      "Lower R_m only always",
      "Infinite capacitance",
      "Removal of all Na⁺ channels",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); increased λ implies better passive spread along the cable.",
    wrongExplanations: [
      "",
      "This choice (Lower R_m only always) does not match the keyed answer’s mechanism for Quantitative Physiology.",
      "This choice (Infinite capacitance) does not match the keyed answer’s mechanism for Quantitative Physiology.",
      "Unlike the keyed answer (Higher R_m or lower R_i), this option misstates the mechanism or direction described in the stem.",
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
      "Neurotransmitter is always infinite in concentration",
    ],
    correct: 0,
    explanation: "Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Release occurs in discrete vesicle units (quanta)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release occurs in discrete vesicle units (quanta)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Release occurs in discrete vesicle units (quanta)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Miniature EPSPs (mEPSPs) are observed when:",
    options: [
      "Spontaneous single-vesicle fusion occurs without presynaptic spikes",
      "The axon is cut and sealed (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only inhibitory neurons are present (mixes up presynaptic release with postsynaptic receptor logic)",
      "Myelin covers the synapse (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Spontaneous quantal release produces mEPSPs/mEPSCs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous single-vesicle fusion occurs without presynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous single-vesicle fusion occurs without presynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Spontaneous single-vesicle fusion occurs without presynaptic spikes) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Increasing presynaptic Ca²⁺ entry near active zones generally:",
    options: [
      "Increases release probability",
      "Eliminates all vesicle fusion",
      "Converts ionotropic receptors to metabotropic only",
      "Blocks postsynaptic K⁺ channels",
    ],
    correct: 0,
    explanation: "Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increases release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases release probability) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Botulinum toxin reduces synaptic transmission by cleaving:",
    options: [
      "SNARE proteins required for vesicle fusion",
      "Voltage-gated Na⁺ channels in the axon hillock only",
      "Glutamate entirely in the cleft",
      "All postsynaptic AMPA receptors",
    ],
    correct: 0,
    explanation: "Botulinum proteolysis of SNAREs prevents exocytosis.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (SNARE proteins required for vesicle fusion) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptic delay is largely attributable to:",
    options: [
      "Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding",
      "Action potential backpropagation only in dendrites (mixes up presynaptic release with postsynaptic receptor logic)",
      "Myelin thickness at the synapse (mixes up presynaptic release with postsynaptic receptor logic)",
      "Pump reversal at the postsynaptic density (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 0,
    explanation: "Several presynaptic steps add milliseconds between spike and response.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "The readily releasable pool refers to vesicles that:",
    options: [
      "Are docked/primed and can fuse quickly after Ca²⁺ rise",
      "Are permanently trapped in the nucleus when temperature is near 37 °C.",
      "Requires contain neuropeptides for hours-long release exclusively in this context",
      "Exist only in electrical synapses in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Primed vesicles supply the first wave of evoked release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Are docked/primed and can fuse quickly after Ca²⁺ rise) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are docked/primed and can fuse quickly after Ca²⁺ rise) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are docked/primed and can fuse quickly after Ca²⁺ rise) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Endocytosis after exocytosis is needed to:",
    options: [
      "Recycle vesicle membrane and maintain release capacity",
      "Generate action potentials in the cleft during normal resting permeability conditions.",
      "Open gap junctions when temperature is near 37 °C.",
      "Depolarize all mitochondria during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Without recycling, synapses deplete vesicle supply.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Recycle vesicle membrane and maintain release capacity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells typically mediate:",
    options: [
      "Fast excitatory postsynaptic currents at many glutamatergic synapses",
      "Slow G-protein inhibitory currents only during normal resting permeability conditions.",
      "Direct opening of voltage-gated Na⁺ in myelin in a typical mammalian central neuron.",
      "Peptide hormone release during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "AMPA channels dominate fast EPSCs when Glu is released.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Fast excitatory postsynaptic currents at many glutamatergic synapses) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>A</sub> receptors are ionotropic and conduct primarily:",
    options: [
      "Cl⁻",
      "Na⁺ exclusively",
      "Ca²⁺ only in all neurons always",
      "K⁺ never",
    ],
    correct: 0,
    explanation: "GABA<sub>A</sub> is a ligand-gated Cl⁻ channel (E_Cl sets direction).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cl⁻ (often hyperpolarizing or shunting)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cl⁻ (often hyperpolarizing or shunting)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cl⁻ (often hyperpolarizing or shunting)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Nicotinic ACh receptors at the neuromuscular junction are:",
    options: [
      "Ligand-gated cation channels causing endplate depolarization",
      "Metabotropic GPCRs only during normal resting permeability conditions.",
      "Voltage-gated Cl⁻ channels when temperature is near 37 °C.",
      "Electrical synapses during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels causing endplate depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels causing endplate depolarization) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Ligand-gated cation channels causing endplate depolarization) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Muscarinic ACh receptors are metabotropic and can:",
    options: [
      "Modulate K⁺ channels, phospholipase C, and other second-messenger pathways",
      "Directly form a fast cation pore identical to AMPA when temperature is near 37 °C.",
      "Replace SNARE proteins when temperature is near 37 °C. during normal resting permeability conditions.",
      "Conduct myelin insulation in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Muscarinic receptors use G-proteins for slower modulatory effects.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Modulate K⁺ channels, phospholipase C, and other second-messenger pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate K⁺ channels, phospholipase C, and other second-messenger pathways) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Modulate K⁺ channels, phospholipase C, and other second-messenger pathways) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Activation of phospholipase C via Gq often increases:",
    options: [
      "IP3 and DAG, raising intracellular Ca²⁺ from stores",
      "cAMP only without any Ca²⁺ change in a typical mammalian central neuron.",
      "Myelin basic protein synthesis only during normal resting permeability conditions.",
      "Voltage-gated Na⁺ density at nodes instantly",
    ],
    correct: 0,
    explanation: "PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (IP3 and DAG, raising intracellular Ca²⁺ from stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (IP3 and DAG, raising intracellular Ca²⁺ from stores) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (IP3 and DAG, raising intracellular Ca²⁺ from stores) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP-dependent protein kinase (PKA) can modulate synapses by:",
    options: [
      "Phosphorylating channels and transcription factors",
      "Cleaving SNARE proteins during normal resting permeability conditions.",
      "Blocking all glutamate release permanently when temperature is near 37 °C.",
      "Opening gap junctions in myelin during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "PKA phosphorylation alters channel function and gene expression.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylating channels and transcription factors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylating channels and transcription factors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Phosphorylating channels and transcription factors) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude at the soma mainly by:",
    options: [
      "Lowering input resistance so synaptic current leaks locally",
      "Increasing Na⁺ channel density at AIS always (ignores how EPSPs/IPSPs sum in time or space)",
      "Preventing any Cl⁻ flux (ignores how EPSPs/IPSPs sum in time or space)",
      "Eliminating temporal summation entirely (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Increased conductance diverts current, reducing voltage change elsewhere.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so synaptic current leaks locally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so synaptic current leaks locally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Lowering input resistance so synaptic current leaks locally) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in some circuits refers to:",
    options: [
      "Inhibitory input scaling excitatory drive proportionally",
      "Adding only spatial summation without time (ignores how EPSPs/IPSPs sum in time or space)",
      "Blocking all GABA release (ignores how EPSPs/IPSPs sum in time or space)",
      "Converting spikes to graded release only in retina (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Inhibition can divide or scale excitation rather than only subtract absolutely.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory input scaling excitatory drive proportionally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory input scaling excitatory drive proportionally) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibitory input scaling excitatory drive proportionally) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after repetitive firing often reflects:",
    options: [
      "Depletion of the readily releasable vesicle pool",
      "Permanent removal of all postsynaptic receptors",
      "Myelin growth in the cleft when temperature is near 37 °C.",
      "Requires lTP induction exclusively in this context",
    ],
    correct: 0,
    explanation: "High-frequency use exhausts primed vesicles temporarily.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Depletion of the readily releasable vesicle pool) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Facilitation at some synapses is attributed partly to:",
    options: [
      "Residual presynaptic Ca²⁺ enhancing release probability",
      "Complete SNARE destruction when temperature is near 37 °C.",
      "Blocking all K⁺ channels in the cleft in a typical mammalian central neuron.",
      "Loss of action potentials in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Ca²⁺ buildup increases P_release for subsequent spikes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ enhancing release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ enhancing release probability) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Residual presynaptic Ca²⁺ enhancing release probability) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Hebbian plasticity is summarized as:",
    options: [
      "Cells that fire together wire together",
      "Random synapse elimination only (states the wrong induction requirement for LTP/LTD)",
      "Only inhibitory synapses strengthen with uncorrelated input",
      "Myelin determines synaptic weight alone",
    ],
    correct: 0,
    explanation: "Correlated pre/post activity drives LTP-like strengthening.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Cells that fire together wire together (correlated activity strengthens synapses)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "LTD (long-term depression) can be induced when:",
    options: [
      "Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)",
      "Only a single mEPSP occurs once (states the wrong induction requirement for LTP/LTD)",
      "All NMDA receptors are removed genetically always (states the wrong induction requirement for LTP/LTD)",
      "Only electrical synapses fire (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "Specific timing/frequency rules can weaken synapses (LTD).",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "CaMKII activation postsynaptically is associated with:",
    options: [
      "LTP maintenance at many glutamatergic synapses",
      "Immediate botulinum effects (states the wrong induction requirement for LTP/LTD)",
      "Only GABA<sub>B</sub> signaling (states the wrong induction requirement for LTP/LTD)",
      "Saltatory conduction failure (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (LTP maintenance at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (LTP maintenance at many glutamatergic synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (LTP maintenance at many glutamatergic synapses) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates corticostriatal synapses largely via:",
    options: [
      "D1/D2 GPCRs changing cAMP and downstream phosphorylation",
      "Direct nAChR pores at every synapse during normal resting permeability conditions.",
      "Requires gap junction coupling exclusively in this context",
      "Myelin thickness",
    ],
    correct: 0,
    explanation: "Dopamine GPCRs tune excitability and plasticity in striatal circuits.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (D1/D2 GPCRs changing cAMP and downstream phosphorylation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (D1/D2 GPCRs changing cAMP and downstream phosphorylation) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (D1/D2 GPCRs changing cAMP and downstream phosphorylation) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine from locus coeruleus often:",
    options: [
      "Increases arousal and modulates sensory gain via β-adrenergic receptors",
      "Blocks all Na⁺ channels permanently during normal resting permeability conditions.",
      "Is the primary transmitter at NMJ in a typical mammalian central neuron.",
      "Requires activates GABA<sub>A</sub> exclusively in this context",
    ],
    correct: 0,
    explanation: "NE modulates attention/arousal through widespread noradrenergic projections.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increases arousal and modulates sensory gain via β-adrenergic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases arousal and modulates sensory gain via β-adrenergic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increases arousal and modulates sensory gain via β-adrenergic receptors) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonin (5-HT) modulates circuits through:",
    options: [
      "Multiple receptor subtypes (many GPCRs) with diverse effects",
      "A single ionotropic receptor only in mammals",
      "Exclusive action on myelin when temperature is near 37 °C.",
      "Direct voltage-gated Na⁺ gating only",
    ],
    correct: 0,
    explanation: "5-HT has broad neuromodulatory roles via many receptor types.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Multiple receptor subtypes (many GPCRs) with diverse effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple receptor subtypes (many GPCRs) with diverse effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Multiple receptor subtypes (many GPCRs) with diverse effects) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators differ from fast transmitters mainly because they:",
    options: [
      "Act on longer timescales and often via second messengers / volume transmission",
      "Always use electrical synapses when temperature is near 37 °C. during normal resting permeability conditions.",
      "Never affect ion channels in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Only Müller glia pass inward cation current in darkness",
    ],
    correct: 0,
    explanation: "Modulators reshape network state over seconds to minutes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Act on longer timescales and often via second messengers / volume transmission) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Act on longer timescales and often via second messengers / volume transmission) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Act on longer timescales and often via second messengers / volume transmission) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedforward inhibition occurs when:",
    options: [
      "An excitatory input drives both principal cells and interneurons that inhibit downstream targets",
      "Inhibition only returns to the same cell that was excited (feedback only) in a typical mammalian central neuron.",
      "HCN channels are silent while cGMP keeps CNG channels open",
      "Myelin provides inhibition when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (An excitatory input drives both principal cells and interneurons that inhibit downstream targets) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An excitatory input drives both principal cells and interneurons that inhibit downstream targets) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (An excitatory input drives both principal cells and interneurons that inhibit downstream targets) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedback (recurrent) inhibition stabilizes firing by:",
    options: [
      "Interneurons inhibiting the same or nearby principal cells that excited them",
      "Blocking all EPSPs permanently when temperature is near 37 °C. during normal resting permeability conditions.",
      "Preventing any action potentials in interneurons",
      "Electrical synapses replace chemical transmission at the NMJ",
    ],
    correct: 0,
    explanation: "Recurrent loops limit runaway excitation.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Interneurons inhibiting the same or nearby principal cells that excited them) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Interneurons inhibiting the same or nearby principal cells that excited them) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Interneurons inhibiting the same or nearby principal cells that excited them) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators (CPGs) can produce rhythms:",
    options: [
      "Without sensory input for each cycle",
      "Only when every muscle spindle fires once",
      "Exclusively in cerebellar Purkinje somata alone",
      "Only via myelin oscillations",
    ],
    correct: 0,
    explanation: "CPGs underlie breathing, locomotion, and other rhythmic motor patterns.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Without sensory input for each cycle (intrinsic circuit dynamics)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Without sensory input for each cycle (intrinsic circuit dynamics)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Without sensory input for each cycle (intrinsic circuit dynamics)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Inhibitory interneurons in cortex often release:",
    options: [
      "GABA",
      "Glutamate exclusively",
      "Acetylcholine only at every synapse",
      "Myelin basic protein",
    ],
    correct: 0,
    explanation: "Most cortical interneurons are GABAergic.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (GABA) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (GABA) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (GABA) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexin-based gap junctions allow:",
    options: [
      "Direct ionic and small-molecule coupling between cells",
      "Requires retrograde peptide signaling exclusively in this context",
      "Saltatory conduction in unmyelinated axons when temperature is near 37 °C.",
      "Quantal release from vesicles in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Gap junctions electrically couple adjacent neurons or glia.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Direct ionic and small-molecule coupling between cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Direct ionic and small-molecule coupling between cells) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Direct ionic and small-molecule coupling between cells) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses are often faster than chemical synapses because:",
    options: [
      "No vesicle fusion or diffusion delay is required",
      "They always use second messengers in a typical mammalian central neuron.",
      "They require NMDA activation",
      "They depend on myelin stripping during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Current flows directly through connexons with minimal delay.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (No vesicle fusion or diffusion delay is required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (No vesicle fusion or diffusion delay is required) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (No vesicle fusion or diffusion delay is required) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Rectifying electrical synapses conduct better in one direction because:",
    options: [
      "Connexon subunit composition creates voltage-dependent asymmetry",
      "Myelin blocks reverse current in a typical mammalian central neuron.",
      "Myelin thickness alone determines saltatory conduction velocity",
      "SNARE proteins orient vesicles when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Some gap junctions pass current preferentially from cell A to B.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Connexon subunit composition creates voltage-dependent asymmetry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Connexon subunit composition creates voltage-dependent asymmetry) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Connexon subunit composition creates voltage-dependent asymmetry) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Endocannabinoids can act retrogradely to:",
    options: [
      "Suppress presynaptic neurotransmitter release after strong postsynaptic activity",
      "Open nAChR at the NMJ in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Generate action potentials in myelin",
      "Replace glutamate in vesicles in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Postsynaptically produced endocannabinoids often inhibit presynaptic release.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic neurotransmitter release after strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic neurotransmitter release after strong postsynaptic activity) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Suppress presynaptic neurotransmitter release after strong postsynaptic activity) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "The active zone is specialized for:",
    options: [
      "Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors",
      "Myelin formation in a typical mammalian central neuron.",
      "Action potential initiation in dendrites only in a typical mammalian central neuron.",
      "Phototransduction in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Active zones align release machinery with receptor clusters.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Postsynaptic density (PSD) is enriched in:",
    options: [
      "Scaffolding proteins and glutamate receptors at excitatory synapses",
      "Gap junctions relay dark current from cones to rods exclusively",
      "Rhodopsin in a typical mammalian central neuron. when temperature is near 37 °C.",
      "Cochlear hair cell tip links",
    ],
    correct: 0,
    explanation: "PSD organizes AMPA/NMDA receptors and signaling complexes.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Scaffolding proteins and glutamate receptors at excitatory synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Scaffolding proteins and glutamate receptors at excitatory synapses) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Scaffolding proteins and glutamate receptors at excitatory synapses) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Excitatory-Inhibitory Balance",
    question: "E/I balance refers to:",
    options: [
      "Relative levels of excitatory and inhibitory synaptic drive onto a neuron",
      "Equal numbers of axons and dendrites anatomically in a typical mammalian central neuron.",
      "Requires gABAergic monosynaptic reflexes exclusively in this context",
      "Myelin equal to axon diameter in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Circuit function depends on balanced excitation and inhibition.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Relative levels of excitatory and inhibitory synaptic drive onto a neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Relative levels of excitatory and inhibitory synaptic drive onto a neuron) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Relative levels of excitatory and inhibitory synaptic drive onto a neuron) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Benzodiazepines enhance GABA<sub>A</sub> signaling by:",
    options: [
      "Increasing frequency of channel opening (allosteric modulation)",
      "Blocking GABA synthesis irreversibly",
      "Opening NMDA receptors when temperature is near 37 °C. during normal resting permeability conditions.",
      "Preventing Cl⁻ flux during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "BZDs bind allosteric sites to potentiate GABA<sub>A</sub> responses.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increasing frequency of channel opening (allosteric modulation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing frequency of channel opening (allosteric modulation)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increasing frequency of channel opening (allosteric modulation)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Strychnine causes convulsions by blocking:",
    options: [
      "Glycine receptors",
      "AMPA receptors in retina",
      "Voltage-gated K⁺ in nodes only",
      "Connexins in heart only",
    ],
    correct: 0,
    explanation: "Loss of glycinergic inhibition leads to uncontrolled motor activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Glycine receptors (in spinal inhibitory circuits)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Glycine receptors (in spinal inhibitory circuits)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Glycine receptors (in spinal inhibitory circuits)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides differ from classical transmitters because they:",
    options: [
      "Are often co-released, act on GPCRs, and can have long-lasting effects",
      "Always use ionotropic pores with sub-ms kinetics only in a typical mammalian central neuron.",
      "Are stored only in mitochondria during normal resting permeability conditions.",
      "Cannot be released by activity when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Peptides modulate circuits over longer ranges and timescales.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Are often co-released, act on GPCRs, and can have long-lasting effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are often co-released, act on GPCRs, and can have long-lasting effects) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Are often co-released, act on GPCRs, and can have long-lasting effects) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Acetylcholinesterase in the synaptic cleft:",
    options: [
      "Hydrolyzes ACh to terminate the endplate potential",
      "Synthesizes ACh from glutamate when temperature is near 37 °C.",
      "Opens K⁺ channels directly when temperature is near 37 °C.",
      "Myelinates the motor axon",
    ],
    correct: 0,
    explanation: "Rapid ACh breakdown keeps NMJ signaling brief.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Hydrolyzes ACh to terminate the endplate potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hydrolyzes ACh to terminate the endplate potential) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Hydrolyzes ACh to terminate the endplate potential) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Curare-like drugs block NMJ transmission by:",
    options: [
      "Competitive antagonism at nicotinic ACh receptors",
      "Blocking voltage-gated Na⁺ in muscle T-tubules only always",
      "Preventing action potentials in motor cortex only",
      "Enhancing GABA<sub>A</sub> on motoneurons exclusively",
    ],
    correct: 0,
    explanation: "nAChR block prevents endplate depolarization.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Competitive antagonism at nicotinic ACh receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Competitive antagonism at nicotinic ACh receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Competitive antagonism at nicotinic ACh receptors) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Co-transmission",
    question: "A neuron releasing both glutamate and a neuropeptide illustrates:",
    options: [
      "Co-transmission with fast and slow signaling components",
      "Requires electrical coupling exclusively in this context",
      "Purely retrograde dopamine signaling",
      "Myelin-mediated transmission",
    ],
    correct: 0,
    explanation: "Many neurons co-release multiple transmitters/modulators.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Co-transmission with fast and slow signaling components) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Co-transmission with fast and slow signaling components) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Co-transmission with fast and slow signaling components) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Disinhibition occurs when:",
    options: [
      "Inhibition of an interneuron releases a target from suppression",
      "All GABA neurons are removed globally in a typical mammalian central neuron.",
      "Requires aMPA receptors activate exclusively in this context",
      "Myelin is added to interneurons during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Removing inhibitory input on a neuron can increase its activity.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Inhibition of an interneuron releases a target from suppression) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibition of an interneuron releases a target from suppression) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Inhibition of an interneuron releases a target from suppression) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Spike-timing-dependent plasticity (STDP) depends on:",
    options: [
      "Order and timing of pre- and postsynaptic spikes",
      "Requires ambient temperature exclusively in this context",
      "Myelin length in a typical mammalian central neuron.",
      "Olfactory receptor choice in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Millisecond-scale timing windows determine LTP vs LTD.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Order and timing of pre- and postsynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Order and timing of pre- and postsynaptic spikes) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Order and timing of pre- and postsynaptic spikes) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Presynaptic LTP at the crayfish neuromuscular junction involves:",
    options: [
      "Increased quantal release (presynaptic mechanism)",
      "Requires postsynaptic receptor insertion always exclusively in this context",
      "Gap junction doubling in a typical mammalian central neuron.",
      "Photoreceptor adaptation",
    ],
    correct: 0,
    explanation: "Classic example of presynaptic enhancement of release probability.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increased quantal release (presynaptic mechanism)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased quantal release (presynaptic mechanism)) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increased quantal release (presynaptic mechanism)) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Integration",
    question: "An IPSP arriving at the soma during an EPSP can:",
    options: [
      "Reduce net depolarization and prevent threshold crossing",
      "Always increase Na⁺ influx when temperature is near 37 °C.",
      "Eliminate resting potential permanently during normal resting permeability conditions.",
      "Convert the cell to photoreceptor function when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Inhibition subtracts from excitation in integration.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Reduce net depolarization and prevent threshold crossing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce net depolarization and prevent threshold crossing) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Reduce net depolarization and prevent threshold crossing) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Integration",
    question: "Dendritic spikes in some neurons can:",
    options: [
      "Boost local depolarization and influence somatic output",
      "Requires occur in unmyelinated sensory axons always exclusively in this context",
      "Replace all chemical synapses in a typical mammalian central neuron.",
      "Block all K⁺ channels globally when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Active dendritic conductances can nonlinearly amplify inputs.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Boost local depolarization and influence somatic output) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Boost local depolarization and influence somatic output) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Boost local depolarization and influence somatic output) matches the underlying mechanism.",
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "Acetylcholine in cortex during wakefulness tends to:",
    options: [
      "Increase responsiveness and modulate attention via muscarinic and nicotinic receptors",
      "Silence all thalamocortical input permanently in a typical mammalian central neuron.",
      "Replace glutamate at every synapse when temperature is near 37 °C. during normal resting permeability conditions.",
      "Requires hyperpolarize via GABA<sub>B</sub> exclusively in this context",
    ],
    correct: 0,
    explanation: "ACh neuromodulation supports arousal and cortical processing.",
    wrongExplanations: [
      "",
      "This option is inconsistent with the stem; the keyed answer (Increase responsiveness and modulate attention via muscarinic and nicotinic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase responsiveness and modulate attention via muscarinic and nicotinic receptors) matches the underlying mechanism.",
      "This option is inconsistent with the stem; the keyed answer (Increase responsiveness and modulate attention via muscarinic and nicotinic receptors) matches the underlying mechanism.",
    ]
  }
];

const PART3_EXTRA_POOL = [
  {
    topic: "Phototransduction",
    question: "In darkness, vertebrate photoreceptors are depolarized because:",
    options: [
      "Cyclic nucleotide-gated channels pass cation influx (dark current)",
      "Rhodopsin maximally activates transducin always during normal resting permeability conditions.",
      "Voltage-gated Na⁺ channels drive the photoreceptor dark current",
      "Myelin wraps the outer segment when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "High cGMP keeps channels open; light lowers cGMP and hyperpolarizes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Cyclic nucleotide-gated channels pass cation influx (dark current)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cyclic nucleotide-gated channels pass cation influx (dark current)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Cyclic nucleotide-gated channels pass cation influx (dark current)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Light activation of rhodopsin leads to:",
    options: [
      "Reduced cGMP and closure of cGMP-gated channels",
      "Immediate opening of all voltage-gated Na⁺ in myelin",
      "Sustained depolarization and increased glutamate release",
      "Only electrical synapse formation",
    ],
    correct: 0,
    explanation: "Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Reduced cGMP and closure of cGMP-gated channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reduced cGMP and closure of cGMP-gated channels), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Reduced cGMP and closure of cGMP-gated channels), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Horizontal cells provide lateral inhibition that contributes to:",
    options: [
      "Center-surround receptive fields",
      "Saltatory conduction in optic nerve only",
      "Cochlear frequency tuning",
      "Hippocampal LTP exclusively",
    ],
    correct: 0,
    explanation: "Lateral inhibition shapes spatial contrast in retinal ganglion cells.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Center-surround receptive fields), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Center-surround receptive fields), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Ganglion cells encode visual information primarily as:",
    options: [
      "Patterns of action potentials (rate and timing)",
      "Graded muscle contractions",
      "Direct myelin thickness changes",
      "Requires peptide release without spikes exclusively in this context",
    ],
    correct: 0,
    explanation: "Retinal output is spiking activity in optic nerve fibers.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Patterns of action potentials (rate and timing)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Patterns of action potentials (rate and timing)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Patterns of action potentials (rate and timing)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular pathway neurons generally prefer:",
    options: [
      "High temporal frequency and motion (coarse detail)",
      "Fine color static patterns only",
      "Olfactory combinations",
      "Proprioception from muscle spindles",
    ],
    correct: 0,
    explanation: "M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (High temporal frequency and motion (coarse detail)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High temporal frequency and motion (coarse detail)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High temporal frequency and motion (coarse detail)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual System",
    question: "Parvocellular LGN neurons project mainly to:",
    options: [
      "Primary visual cortex (V1) layer 4Cβ",
      "Cerebellar cortex only",
      "Spinal cord ventral horn exclusively",
      "Olfactory bulb",
    ],
    correct: 0,
    explanation: "P cells drive detailed form/color processing in V1.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Primary visual cortex (V1) layer 4Cβ (classic geniculate input)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Primary visual cortex (V1) layer 4Cβ (classic geniculate input)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Primary visual cortex (V1) layer 4Cβ (classic geniculate input)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Orientation selectivity in V1 simple cells arises partly from:",
    options: [
      "Spatially offset ON/OFF subregions in receptive fields",
      "Random channel noise only",
      "Myelin orientation",
      "Cochlear tonotopy",
    ],
    correct: 0,
    explanation: "Hubel & Wiesel: elongated subfields produce orientation tuning.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spatially offset ON/OFF subregions in receptive fields), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spatially offset ON/OFF subregions in receptive fields), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Binocular disparity sensitive neurons are important for:",
    options: [
      "Depth perception (stereopsis)",
      "Smell discrimination",
      "Balance reflexes only",
      "Pain gate control exclusively",
    ],
    correct: 0,
    explanation: "Disparity-tuned cells in visual cortex support 3D vision.",
    wrongExplanations: [
      "",
      "This choice (Smell discrimination) does not match the keyed answer’s mechanism for Visual Cortex.",
      "This choice (Balance reflexes only) does not match the keyed answer’s mechanism for Visual Cortex.",
      "Unlike the keyed answer (Depth perception (stereopsis)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Frequency tuning in the cochlea basilar membrane follows:",
    options: [
      "Tonotopic organization (location maps frequency)",
      "Random placement without order when temperature is near 37 °C.",
      "Requires olfactory glomeruli rules exclusively in this context",
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
    question: "Inner hair cells transduce sound via:",
    options: [
      "Mechanotransduction channels opened by tip-link tension",
      "Rhodopsin and cGMP when temperature is near 37 °C. during normal resting permeability conditions.",
      "Nicotinic ACh at NMJ",
      "Gap junctions to photoreceptors during normal resting permeability conditions.",
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
    question: "The auditory nerve encodes sound intensity largely by:",
    options: [
      "Increased firing rate in cochlear nerve fibers",
      "Changing myelin color in a typical mammalian central neuron.",
      "Requires inhibitory synapses without spikes exclusively in this context",
      "Releasing dopamine in the cochlea in a typical mammalian central neuron.",
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
    question: "Superior olivary nuclei compute:",
    options: [
      "Sound localization cues (ITD and ILD)",
      "Color opponency",
      "Olfactory adaptation only",
      "Cerebellar motor learning exclusively",
    ],
    correct: 0,
    explanation: "Binaural processing in SOC supports localization.",
    wrongExplanations: [
      "",
      "This choice (Color opponency) does not match the keyed answer’s mechanism for Auditory Pathway.",
      "Unlike the keyed answer (Sound localization cues (ITD and ILD)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Sound localization cues (ITD and ILD)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Meissner corpuscles in skin are most sensitive to:",
    options: [
      "Light touch and flutter (low-amplitude movement)",
      "Deep pressure only when temperature is near 37 °C.",
      "No temperature change ever when temperature is near 37 °C.",
      "Visual motion",
    ],
    correct: 0,
    explanation: "Meissner endings detect fine tactile vibrations.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Light touch and flutter (low-amplitude movement)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Light touch and flutter (low-amplitude movement)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Light touch and flutter (low-amplitude movement)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles respond best to:",
    options: [
      "High-frequency vibration and deep pressure transients",
      "Static hair position only in a typical mammalian central neuron.",
      "Bitter taste",
      "Red-green color opponency in a typical mammalian central neuron.",
    ],
    correct: 0,
    explanation: "Pacinian fibers are rapidly adapting vibration detectors.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (High-frequency vibration and deep pressure transients), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High-frequency vibration and deep pressure transients), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (High-frequency vibration and deep pressure transients), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings often mediate:",
    options: [
      "Pain and temperature sensation",
      "Only proprioception from muscle spindles",
      "Phototransduction",
      "Cochlear amplification",
    ],
    correct: 0,
    explanation: "Nociceptors and thermoreceptors are unencapsulated endings.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Pain and temperature sensation), this option misstates the mechanism or direction described in the stem.",
      "This choice (Phototransduction) does not match the keyed answer’s mechanism for Somatosensation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pain",
    question: "Nociceptive Aδ fibers are:",
    options: [
      "Myelinated and conduct sharp, fast pain",
      "Unmyelinated C fibers exclusively in a typical mammalian central neuron.",
      "Requires found in retina exclusively in this context",
      "Purely electrical synapses when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Myelinated and conduct sharp, fast pain), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Myelinated and conduct sharp, fast pain), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Myelinated and conduct sharp, fast pain), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Pain",
    question: "Gate control theory proposes:",
    options: [
      "Spinal circuitry can modulate pain transmission",
      "Pain is purely cortical with no spinal component",
      "Only myelin gates pain always open",
      "NMDA is absent in pain pathways",
    ],
    correct: 0,
    explanation: "Inhibitory interneurons in dorsal horn can gate pain signals.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spinal circuitry can modulate pain transmission), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spinal circuitry can modulate pain transmission), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Spinal circuitry can modulate pain transmission), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Proprioception",
    question: "Golgi tendon organs signal:",
    options: [
      "Muscle tension (force) at the tendon",
      "Retinal illuminance during normal resting permeability conditions.",
      "Olfactory concentration only",
      "Cochlear phase when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "GTOs inhibit excessive force via Ib afferents.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Muscle tension (force) at the tendon), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Muscle tension (force) at the tendon), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral/tufted cells in the bulb send output to:",
    options: [
      "Olfactory cortex",
      "Primary visual cortex exclusively",
      "Cochlear nucleus only",
      "Spinal motor pools only",
    ],
    correct: 0,
    explanation: "Bulb principal cells relay odor info to cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Olfactory cortex (piriform and related areas)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Olfactory cortex (piriform and related areas)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Gustation",
    question: "Umami taste is transduced largely through:",
    options: [
      "T1R1/T1R3 heterodimer taste GPCRs on taste receptor cells",
      "Metabotropic glutamate receptors (mGluRs) in cortex during normal resting permeability conditions.",
      "Rhodopsin in taste buds during normal resting permeability conditions.",
      "Hair cell tip links during normal resting permeability conditions.",
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
    question: "The blood-brain barrier restricts passage mainly at:",
    options: [
      "Cerebral endothelial tight junctions (with astrocyte endfeet support)",
      "Nodes of Ranvier exclusively (localizes the function to the wrong brain region)",
      "Photoreceptor outer segments only (localizes the function to the wrong brain region)",
      "NMJ synaptic cleft (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Endothelial tight junctions limit paracellular diffusion into CNS.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Cerebral endothelial tight junctions (with astrocyte endfeet support)), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Cerebral endothelial tight junctions (with astrocyte endfeet support)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter primarily contains:",
    options: [
      "Myelinated axon tracts",
      "Neuronal cell bodies only",
      "Photoreceptor layers",
      "Taste bud cells",
    ],
    correct: 0,
    explanation: "White matter is axons; gray matter is cell bodies and neuropil.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Myelinated axon tracts), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This choice (Taste bud cells) does not match the keyed answer’s mechanism for Neuroanatomy.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum connects:",
    options: [
      "Left and right cerebral hemispheres",
      "Spinal cord to cerebellum only (localizes the function to the wrong brain region)",
      "Cochlea to retina (localizes the function to the wrong brain region)",
      "Olfactory bulb to tongue (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Commissural fibers integrate bilateral cortex.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Left and right cerebral hemispheres), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Left and right cerebral hemispheres), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Basal ganglia loops (cortex–striatum–GP/SN–thalamus) are critical for:",
    options: [
      "Action selection and habit learning",
      "Phototransduction exclusively (localizes the function to the wrong brain region)",
      "Cochlear tuning only (localizes the function to the wrong brain region)",
      "Pain fiber myelination (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "MCB80x links basal ganglia to movement and reinforcement.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Action selection and habit learning), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Action selection and habit learning), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The hippocampus is essential for many forms of:",
    options: [
      "Declarative (explicit) memory formation",
      "Primary visual color opponency only",
      "Cochlear amplification",
      "Reflexive withdrawal only without learning",
    ],
    correct: 0,
    explanation: "Hippocampus supports episodic and spatial memory consolidation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Declarative (explicit) memory formation), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Declarative (explicit) memory formation), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Cerebellum is heavily involved in:",
    options: [
      "Error correction, coordination, and some forms of motor learning",
      "Initial phototransduction (localizes the function to the wrong brain region)",
      "Olfactory receptor choice (localizes the function to the wrong brain region)",
      "Only pain transmission (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Cerebellar circuits fine-tune movement and timing.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Error correction, coordination, and some forms of motor learning), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Error correction, coordination, and some forms of motor learning), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Error correction, coordination, and some forms of motor learning), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Thalamus functions as:",
    options: [
      "A relay and gate for sensory information to cortex (and cortical loops)",
      "The sole site of rhodopsin expression (localizes the function to the wrong brain region)",
      "Myelin factory for peripheral nerves only (localizes the function to the wrong brain region)",
      "Only respiratory CPG without sensory role (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Thalamic nuclei route sensory and motor-related signals.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (A relay and gate for sensory information to cortex (and cortical loops)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A relay and gate for sensory information to cortex (and cortical loops)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (A relay and gate for sensory information to cortex (and cortical loops)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons in ventral horn:",
    options: [
      "Innervate skeletal muscle fibers directly",
      "Project to LGN only (maps the lesion to the wrong motor pathway or reflex)",
      "Encode sound frequency (maps the lesion to the wrong motor pathway or reflex)",
      "Release rhodopsin (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "LMNs are the final common path to muscle.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Innervate skeletal muscle fibers directly), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Innervate skeletal muscle fibers directly), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Innervate skeletal muscle fibers directly), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The stretch reflex (myotatic reflex) is monosynaptic between:",
    options: [
      "Ia afferent and α motor neuron",
      "Retinal bipolar and ganglion cell",
      "Cochlear inner hair cell and olivary cell only",
      "Olfactory OSN and mitral cell exclusively for stretch",
    ],
    correct: 0,
    explanation: "Stretch activates spindles → Ia synapses on homonymous motoneurons.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Ia afferent and α motor neuron), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Ia afferent and α motor neuron), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Prefrontal cortex is associated with:",
    options: [
      "Working memory, planning, and executive control",
      "Cochlear basilar stiffness only during normal resting permeability conditions.",
      "Rhodopsin regeneration exclusively when temperature is near 37 °C.",
      "Pacinian vibration transduction during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "PFC supports higher cognitive control and working memory.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Working memory, planning, and executive control), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Working memory, planning, and executive control), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory differs from long-term memory in that it:",
    options: [
      "Holds information transiently for ongoing behavior",
      "Is stored permanently after one spike in a typical mammalian central neuron.",
      "Exists only in peripheral nerves",
      "HCN channels are silent while cGMP keeps CNG channels open",
    ],
    correct: 0,
    explanation: "Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Holds information transiently for ongoing behavior), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Holds information transiently for ongoing behavior), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Holds information transiently for ongoing behavior), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is typically associated with:",
    options: [
      "Hippocampus and medial temporal lobe structures",
      "Requires cerebellar cortex for all memories exclusively in this context",
      "Cochlear nucleus exclusively",
      "Skin Meissner corpuscles",
    ],
    correct: 0,
    explanation: "Explicit facts/events depend on medial temporal lobe circuits.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hippocampus and medial temporal lobe structures), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Hippocampus and medial temporal lobe structures), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (skills/habits) involves strongly:",
    options: [
      "Basal ganglia and cerebellum among other areas",
      "Requires retina photoreceptors exclusively in this context",
      "Olfactory glomeruli alone in a typical mammalian central neuron.",
      "Free nerve endings exclusively when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Motor skills and habits engage striatum/cerebellum.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Basal ganglia and cerebellum among other areas), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "The amygdala contributes to memory by:",
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
      "Unlike the keyed answer (Emotional salience and fear conditioning associations), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Emotional salience and fear conditioning associations), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Emotional salience and fear conditioning associations), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Consolidation transfers labile memory to stable storage over:",
    options: [
      "Hours to years via systems and synaptic mechanisms",
      "One millisecond only",
      "Requires during sleep never exclusively in this context",
      "Requires in myelin exclusively in this context",
    ],
    correct: 0,
    explanation: "Consolidation includes synaptic and systems-level reorganization.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hours to years via systems and synaptic mechanisms), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hours to years via systems and synaptic mechanisms), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hours to years via systems and synaptic mechanisms), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Morris water maze tests primarily:",
    options: [
      "Spatial learning dependent on hippocampus in rodents",
      "Color vision in flies only when temperature is near 37 °C.",
      "Cochlear phase locking exclusively when temperature is near 37 °C.",
      "Olfactory one-receptor rule during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Hidden platform task assesses hippocampal-dependent navigation.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Spatial learning dependent on hippocampus in rodents), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Spatial learning dependent on hippocampus in rodents), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Patient H.M.-like medial temporal lobe damage impairs:",
    options: [
      "New declarative memories while leaving much procedural learning intact",
      "All sensation including touch in a typical mammalian central neuron.",
      "Myelin formation in CNS during normal resting permeability conditions.",
      "Dark current in photoreceptors when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Classic dissociation: anterograde declarative amnesia with spared skills.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (New declarative memories while leaving much procedural learning intact), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (New declarative memories while leaving much procedural learning intact), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Protein synthesis is often required for:",
    options: [
      "Long-lasting LTP/LTM (late phase), not early short-term changes only",
      "Immediate reflex arcs only when temperature is near 37 °C. during normal resting permeability conditions.",
      "Photoreceptor bleaching during normal resting permeability conditions.",
      "Passive membrane τ when temperature is near 37 °C. during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Late LTP and long-term memory need gene expression and new proteins.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Long-lasting LTP/LTM (late phase), not early short-term changes only), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Long-lasting LTP/LTM (late phase), not early short-term changes only), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Engram cells refer to:",
    options: [
      "Neurons whose activity participates in storing a specific memory trace",
      "Requires glial cells in white matter exclusively in this context",
      "Cochlear outer hair cells exclusively in a typical mammalian central neuron.",
      "All nociceptors uniformly in a typical mammalian central neuron. when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Ensemble of neurons physically underlying a memory.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Neurons whose activity participates in storing a specific memory trace), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Neurons whose activity participates in storing a specific memory trace), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Sensory Integration",
    question: "Multisensory integration in superior colliculus can produce:",
    options: [
      "Enhanced responses when auditory and visual stimuli coincide spatially",
      "Loss of all retinal ON/OFF pathways during normal resting permeability conditions.",
      "IPSPs from bipolar cells depolarize rods in darkness",
      "Exclusive GABA<sub>B</sub> signaling in muscle during normal resting permeability conditions.",
    ],
    correct: 0,
    explanation: "Cross-modal alignment can super-additive boost orienting responses.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Enhanced responses when auditory and visual stimuli coincide spatially), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Enhanced responses when auditory and visual stimuli coincide spatially), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Enhanced responses when auditory and visual stimuli coincide spatially), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Balance",
    question: "Semicircular canals detect:",
    options: [
      "Angular acceleration of the head",
      "Static linear gravity only without motion",
      "Bitter taste intensity",
      "Retinal contrast",
    ],
    correct: 0,
    explanation: "Canal hair cells respond to rotational head movements.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Angular acceleration of the head), this option misstates the mechanism or direction described in the stem.",
      "This choice (Bitter taste intensity) does not match the keyed answer’s mechanism for Balance.",
      "This choice (Retinal contrast) does not match the keyed answer’s mechanism for Balance.",
    ]
  },
  {
    topic: "Balance",
    question: "Utricle and saccule detect:",
    options: [
      "Linear acceleration and head tilt (otolith organs)",
      "High-frequency sound only in a typical mammalian central neuron.",
      "Olfactory concentration during normal resting permeability conditions.",
      "Color wavelength exclusively",
    ],
    correct: 0,
    explanation: "Otoliths sense gravity and linear acceleration.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Linear acceleration and head tilt (otolith organs)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Linear acceleration and head tilt (otolith organs)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Linear acceleration and head tilt (otolith organs)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Development",
    question: "Activity-dependent refinement of visual maps (e.g., ocular dominance) illustrates:",
    options: [
      "Hebbian/plastic mechanisms shaping circuits during critical periods",
      "Fixed wiring with zero experience dependence always during normal resting permeability conditions.",
      "Requires myelin growth without synapses exclusively in this context",
      "Olfactory receptor switching each hour when temperature is near 37 °C.",
    ],
    correct: 0,
    explanation: "Experience shapes connectivity during development (MCB80x visual system).",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Hebbian/plastic mechanisms shaping circuits during critical periods), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hebbian/plastic mechanisms shaping circuits during critical periods), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Hebbian/plastic mechanisms shaping circuits during critical periods), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia typically reflects dysfunction in:",
    options: [
      "Fusiform face area / ventral visual stream",
      "Cochlear nucleus only",
      "Stretch reflex arc exclusively",
      "NMJ acetylcholine release only",
    ],
    correct: 0,
    explanation: "Face recognition deficits implicate specialized ventral visual cortex.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "Unlike the keyed answer (Fusiform face area / ventral visual stream (face recognition)), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Fusiform face area / ventral visual stream (face recognition)), this option misstates the mechanism or direction described in the stem.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Hemianopia after post-chiasmal lesion reflects:",
    options: [
      "Loss of contralateral visual field representation",
      "Complete blindness in both eyes always",
      "Requires olfactory loss exclusively in this context",
      "Deafness without cochlear damage",
    ],
    correct: 0,
    explanation: "Optic tract/radiation/cortex lesions cause contralateral field defects.",
    wrongExplanations: [
      "",
      "Unlike the keyed answer (Loss of contralateral visual field representation), this option misstates the mechanism or direction described in the stem.",
      "Unlike the keyed answer (Loss of contralateral visual field representation), this option misstates the mechanism or direction described in the stem.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  }
];
