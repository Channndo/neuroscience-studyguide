// MCB80x extra question pools — HarvardX Fundamentals of Neuroscience

const PART1_EXTRA_POOL = [
  {
    topic: "Goldman Equation",
    question: "At rest, if P_K is much greater than P_Na and P_Cl is negligible, the membrane potential is dominated by:",
    options: [

      "Sodium equilibrium (E_Na)",
      "Potassium equilibrium (E_K)",
      "Exactly 0 mV",
      "The reversal of the pump as the primary route",
    ],
    correct: 1,
    explanation: "Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion.",
    wrongExplanations: [
      "“Sodium equilibrium (E_Na)” does not match the mechanism (topic: Goldman Equation). Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion. The correct choice—“Potassium equilibrium (E_K)”—fits that description.",
      "",
      "“Exactly 0 mV” does not match the mechanism (topic: Goldman Equation). Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion. The correct choice—“Potassium equilibrium (E_K)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman (constant-field) weighting makes V_m approach the equilibrium potential of the most permeant ion.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed will shift the Goldman resting potential:",
    options: [

      "Toward E_Na (less negative)",
      "Toward E_K as the primary route",
      "To exactly +60 mV often",
      "Away from any ion equilibrium",
    ],
    correct: 0,
    explanation: "Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
      "“Away from any ion equilibrium” does not match the mechanism (topic: Goldman Equation). Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na. The correct choice—“Toward E_Na (less negative)”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "The Na⁺/K⁺ ATPase contributes directly to resting potential mainly by:",
    options: [

      "Maintaining ion gradients that set equilibrium potentials",
      "Opening voltage-gated Na⁺ channels",
      "Depolarizing the cell to threshold on every cycle",
      "Blocking K⁺ leak channels",
    ],
    correct: 0,
    explanation: "The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients.",
    wrongExplanations: [
      "",
      "“Opening voltage-gated Na⁺ channels (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients. The correct choice—“Maintaining ion gradients that set equilibrium potentials”—fits that description.",
      "“Depolarizing the cell to threshold on every cycle (ignores which ion dominates resti…” does not match the mechanism (topic: Resting Potential). The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients. The correct choice—“Maintaining ion gradients that set equilibrium potentials”—fits that description.",
      "“Blocking K⁺ leak channels (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). The electrogenic pump maintains gradients; resting V_m is set by leak conductances and those gradients. The correct choice—“Maintaining ion gradients that set equilibrium potentials”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains, V_m will tend to move:",
    options: [

      "Toward E_Na (depolarized relative to normal K⁺-dominated rest)",
      "Toward E_K as if K⁺ leak were unchanged",
      "To 0 mV instantly regardless of gradients",
      "Below −150 mV",
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "“Toward E_K as if K⁺ leak were unchanged (ignores which ion dominates resting permeab…” does not match the mechanism (topic: Resting Potential). Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na. The correct choice—“Toward E_Na (depolarized relative to normal K⁺-dominated rest)”—fits that description.",
      "“To 0 mV instantly regardless of gradients (ignores which ion dominates resting perme…” does not match the mechanism (topic: Resting Potential). Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na. The correct choice—“Toward E_Na (depolarized relative to normal K⁺-dominated rest)”—fits that description.",
      "“Below −150 mV (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Removing dominant K⁺ leak leaves remaining Na⁺ (and other) conductances to set V_m closer to E_Na. The correct choice—“Toward E_Na (depolarized relative to normal K⁺-dominated rest)”—fits that description.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "For a divalent cation such as Ca²⁺, a 10-fold concentration ratio at 37°C changes the Nernst potential by roughly:",
    options: [

      "~31 mV (half the monovalent slope)",
      "~62 mV",
      "~124 mV",
      "0 mV (valence cancels)",
    ],
    correct: 0,
    explanation: "Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion.",
    wrongExplanations: [
      "",
      "“~62 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion. The correct choice—“~31 mV (half the monovalent slope)”—fits that description.",
      "“~124 mV (contradicts the Nernst dependence on inside/outside concentrations)” does not match the mechanism (topic: Nernst Equation). Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion. The correct choice—“~31 mV (half the monovalent slope)”—fits that description.",
      "“0 mV (valence cancels) — contradicts the Nernst dependence on inside/outside concent…” does not match the mechanism (topic: Nernst Equation). Nernst slope scales as RT/zF; divalent ions use half the mV per decade of a monovalent ion. The correct choice—“~31 mV (half the monovalent slope)”—fits that description.",
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
      "“−90 mV” does not match the mechanism (topic: Nernst Equation). With no concentration gradient, E_K = 0 mV regardless of channel presence. The correct choice—“0 mV”—fits that description.",
      "“+60 mV” does not match the mechanism (topic: Nernst Equation). With no concentration gradient, E_K = 0 mV regardless of channel presence. The correct choice—“0 mV”—fits that description.",
      "“Undefined” does not match the mechanism (topic: Nernst Equation). With no concentration gradient, E_K = 0 mV regardless of channel presence. The correct choice—“0 mV”—fits that description.",
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
      "“Double the Nernst slope” does not match the mechanism (topic: Nernst Equation). RT/F decreases with temperature, reducing mV per log concentration change. The correct choice—“Reduce the Nernst slope in mV per decade”—fits that description.",
      "“Eliminate the need for the Goldman equation” does not match the mechanism (topic: Nernst Equation). RT/F decreases with temperature, reducing mV per log concentration change. The correct choice—“Reduce the Nernst slope in mV per decade”—fits that description.",
      "“Make E_Na exactly 0 mV” does not match the mechanism (topic: Nernst Equation). RT/F decreases with temperature, reducing mV per log concentration change. The correct choice—“Reduce the Nernst slope in mV per decade”—fits that description.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "If V_m is held at E_K, the driving force on K⁺ is:",
    options: [

      "Zero",
      "Maximal outward",
      "Maximal inward",
      "Equal to the pump flux as the primary route",
    ],
    correct: 0,
    explanation: "At equilibrium potential, net electrochemical driving force for that ion is zero.",
    wrongExplanations: [
      "",
      "“Maximal outward” does not match the mechanism (topic: Electrical Signaling). At equilibrium potential, net electrochemical driving force for that ion is zero. The correct choice—“Zero”—fits that description.",
      "“Maximal inward” does not match the mechanism (topic: Electrical Signaling). At equilibrium potential, net electrochemical driving force for that ion is zero. The correct choice—“Zero”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At equilibrium potential, net electrochemical driving force for that ion is zero.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance arises primarily because:",
    options: [

      "The lipid bilayer stores charge separated across a thin dielectric",
      "Myelin increases ion channel density",
      "Na⁺ channels pump charge into the ER",
      "Dendrites lack any resistance",
    ],
    correct: 0,
    explanation: "The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets.",
    wrongExplanations: [
      "",
      "“Myelin increases ion channel density (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets. The correct choice—“The lipid bilayer stores charge separated across a thin dielectric”—fits that description.",
      "“Na⁺ channels pump charge into the ER (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets. The correct choice—“The lipid bilayer stores charge separated across a thin dielectric”—fits that description.",
      "“Dendrites lack any resistance (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets. The correct choice—“The lipid bilayer stores charge separated across a thin dielectric”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "During a step of constant depolarizing current, the initial voltage deflection is dominated by:",
    options: [

      "Capacitive charging (ΔV ≈ I/C)",
      "Steady-state leak mainly with no transient",
      "Action potential generation often",
      "Saltatory conduction",
    ],
    correct: 0,
    explanation: "Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Immediately after current onset, I charges C_m before reaching the steady ohmic response.",
      "“Saltatory conduction” does not match the mechanism (topic: Passive Membrane Properties). Immediately after current onset, I charges C_m before reaching the steady ohmic response. The correct choice—“Capacitive charging (ΔV ≈ I/C)”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Increasing membrane resistance R_m while C_m is unchanged will:",
    options: [

      "Increase τ and slow subthreshold responses",
      "Decrease τ",
      "Prevent passive decay along dendrites",
      "Block inactivation of Na⁺ channels",
    ],
    correct: 0,
    explanation: "τ = R_m C_m; higher R_m lengthens the membrane time constant.",
    wrongExplanations: [
      "",
      "“Decrease τ (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m; higher R_m lengthens the membrane time constant. The correct choice—“Increase τ and slow subthreshold responses”—fits that description.",
      "“Prevent passive decay along dendrites (misstates how R_m, C_m, or geometry set τ or …” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m; higher R_m lengthens the membrane time constant. The correct choice—“Increase τ and slow subthreshold responses”—fits that description.",
      "“Block inactivation of Na⁺ channels (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m; higher R_m lengthens the membrane time constant. The correct choice—“Increase τ and slow subthreshold responses”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Decreasing R_m (more leak) with unchanged R_i will:",
    options: [

      "Shorten λ and attenuate dendritic signals faster",
      "Lengthen λ",
      "Speed action potentials in myelinated axons as the primary route",
      "Raise E_K",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); lower R_m shrinks the space constant.",
    wrongExplanations: [
      "",
      "“Lengthen λ” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); lower R_m shrinks the space constant. The correct choice—“Shorten λ and attenuate dendritic signals faster”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ = √(R_m/R_i); lower R_m shrinks the space constant.",
      "“Raise E_K” does not match the mechanism (topic: Passive Membrane Properties). λ = √(R_m/R_i); lower R_m shrinks the space constant. The correct choice—“Shorten λ and attenuate dendritic signals faster”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal synapse is typically smaller and slower because of:",
    options: [

      "Cable filtering (attenuation and low-pass filtering)",
      "Complete absence of ionotropic receptors",
      "Myelin on dendrites",
      "Main mechanism: electrical synapses distally",
    ],
    correct: 0,
    explanation: "Passive spread along dendrites attenuates amplitude and spreads rise time.",
    wrongExplanations: [
      "",
      "“Complete absence of ionotropic receptors (misstates how R_m, C_m, or geometry set τ …” does not match the mechanism (topic: Passive Membrane Properties). Passive spread along dendrites attenuates amplitude and spreads rise time. The correct choice—“Cable filtering (attenuation and low-pass filtering)”—fits that description.",
      "“Myelin on dendrites (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Passive spread along dendrites attenuates amplitude and spreads rise time. The correct choice—“Cable filtering (attenuation and low-pass filtering)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Passive spread along dendrites attenuates amplitude and spreads rise time.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Input conductance (1/R_in) increases when:",
    options: [

      "More ion channels open in the dendritic tree",
      "Myelin thickness increases",
      "Extracellular K⁺ drops",
      "Temperature falls below 0°C",
    ],
    correct: 0,
    explanation: "Additional open channels lower input resistance and increase conductance.",
    wrongExplanations: [
      "",
      "“Myelin thickness increases (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Additional open channels lower input resistance and increase conductance. The correct choice—“More ion channels open in the dendritic tree”—fits that description.",
      "“Extracellular K⁺ drops (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Additional open channels lower input resistance and increase conductance. The correct choice—“More ion channels open in the dendritic tree”—fits that description.",
      "“Temperature falls below 0°C (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Additional open channels lower input resistance and increase conductance. The correct choice—“More ion channels open in the dendritic tree”—fits that description.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "In whole-cell patch clamp, breaking into the cell interior allows the electrode to:",
    options: [

      "Dialyze the cytoplasm and control V_m directly",
      "Measure as the primary route extracellular field potentials",
      "Record from single channels without seal",
      "Block all K⁺ currents irreversibly",
    ],
    correct: 0,
    explanation: "Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules.",
      "“Record from single channels without seal” does not match the mechanism (topic: Patch Clamp). Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules. The correct choice—“Dialyze the cytoplasm and control V_m directly”—fits that description.",
      "“Block all K⁺ currents irreversibly” does not match the mechanism (topic: Patch Clamp). Whole-cell mode electrically couples the pipette to the soma and can exchange small molecules. The correct choice—“Dialyze the cytoplasm and control V_m directly”—fits that description.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "A gigaohm seal in patch clamp reduces:",
    options: [

      "Leak current between pipette and bath, improving signal-to-noise",
      "Membrane capacitance to zero",
      "The need for any amplifier",
      "Most synaptic transmission in the slice",
    ],
    correct: 0,
    explanation: "Tight seals isolate the patch from bath noise and enable single-channel resolution.",
    wrongExplanations: [
      "",
      "“Membrane capacitance to zero” does not match the mechanism (topic: Patch Clamp). Tight seals isolate the patch from bath noise and enable single-channel resolution. The correct choice—“Leak current between pipette and bath, improving signal-to-noise”—fits that description.",
      "“The need for any amplifier” does not match the mechanism (topic: Patch Clamp). Tight seals isolate the patch from bath noise and enable single-channel resolution. The correct choice—“Leak current between pipette and bath, improving signal-to-noise”—fits that description.",
      "“All synaptic transmission in the slice” does not match the mechanism (topic: Patch Clamp). Tight seals isolate the patch from bath noise and enable single-channel resolution. The correct choice—“Leak current between pipette and bath, improving signal-to-noise”—fits that description.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Cell-attached patch configuration is useful for recording:",
    options: [

      "Single-channel currents without disrupting cytosolic composition",
      "Requires action potentials in axons",
      "Population spikes in cortex as the primary route",
      "Magnetic fields from myelin",
    ],
    correct: 0,
    explanation: "The patch stays on the outside surface, preserving intracellular milieu.",
    wrongExplanations: [
      "",
      "“Requires action potentials in axons” does not match the mechanism (topic: Patch Clamp). The patch stays on the outside surface, preserving intracellular milieu. The correct choice—“Single-channel currents without disrupting cytosolic composition”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The patch stays on the outside surface, preserving intracellular milieu.",
      "“Magnetic fields from myelin” does not match the mechanism (topic: Patch Clamp). The patch stays on the outside surface, preserving intracellular milieu. The correct choice—“Single-channel currents without disrupting cytosolic composition”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials primarily by binding:",
    options: [

      "Voltage-gated Na⁺ channel pore",
      "Voltage-gated K⁺ channels",
      "The Na⁺/K⁺ pump",
      "Gap junction connexins",
    ],
    correct: 0,
    explanation: "TTX selectively occludes voltage-gated Na⁺ channels.",
    wrongExplanations: [
      "",
      "“Voltage-gated K⁺ channels” does not match the mechanism (topic: Action Potentials). TTX selectively occludes voltage-gated Na⁺ channels. The correct choice—“Voltage-gated Na⁺ channel pore”—fits that description.",
      "“The Na⁺/K⁺ pump” does not match the mechanism (topic: Action Potentials). TTX selectively occludes voltage-gated Na⁺ channels. The correct choice—“Voltage-gated Na⁺ channel pore”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively occludes voltage-gated Na⁺ channels.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetraethylammonium (TEA) applied to axons typically prolongs spikes by blocking:",
    options: [

      "Certain voltage-gated K⁺ channels",
      "Voltage-gated Na⁺ channels",
      "Glutamate receptors",
      "Myelin basic protein",
    ],
    correct: 0,
    explanation: "TEA blocks some K⁺ channels, slowing repolarization.",
    wrongExplanations: [
      "",
      "“Voltage-gated Na⁺ channels” does not match the mechanism (topic: Action Potentials). TEA blocks some K⁺ channels, slowing repolarization. The correct choice—“Certain voltage-gated K⁺ channels”—fits that description.",
      "“Glutamate receptors” does not match the mechanism (topic: Action Potentials). TEA blocks some K⁺ channels, slowing repolarization. The correct choice—“Certain voltage-gated K⁺ channels”—fits that description.",
      "“Myelin basic protein” does not match the mechanism (topic: Action Potentials). TEA blocks some K⁺ channels, slowing repolarization. The correct choice—“Certain voltage-gated K⁺ channels”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "The upswing of the squid giant axon action potential is dominated by:",
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
      "“Voltage-gated K⁺ efflux alone” does not match the mechanism (topic: Action Potentials). Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization. The correct choice—“Voltage-gated Na⁺ influx”—fits that description.",
      "“Cl⁻ influx” does not match the mechanism (topic: Action Potentials). Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization. The correct choice—“Voltage-gated Na⁺ influx”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hodgkin–Huxley dynamics: rapid Na⁺ entry drives depolarization.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike often reflects:",
    options: [

      "Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺",
      "Sustained Na⁺ influx",
      "Opening of all gap junctions",
      "Pump reversal as the primary route",
    ],
    correct: 0,
    explanation: "K⁺ channels remain active briefly, hyperpolarizing the membrane.",
    wrongExplanations: [
      "",
      "“Sustained Na⁺ influx” does not match the mechanism (topic: Action Potentials). K⁺ channels remain active briefly, hyperpolarizing the membrane. The correct choice—“Continued K⁺ efflux through delayed rectifiers and/or Ca²⁺-activated K⁺”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. K⁺ channels remain active briefly, hyperpolarizing the membrane.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: K⁺ channels remain active briefly, hyperpolarizing the membrane.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated Na⁺ channels are held in the inactivated state, the neuron:",
    options: [

      "Cannot fire another action potential until recovery",
      "Fires at higher frequency",
      "Depolarizes to E_Na permanently",
      "Loses all resting potential",
    ],
    correct: 0,
    explanation: "Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period).",
    wrongExplanations: [
      "",
      "“Fires at higher frequency” does not match the mechanism (topic: Action Potentials). Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period). The correct choice—“Cannot fire another action potential until recovery”—fits that description.",
      "“Depolarizes to E_Na permanently” does not match the mechanism (topic: Action Potentials). Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period). The correct choice—“Cannot fire another action potential until recovery”—fits that description.",
      "“Loses all resting potential” does not match the mechanism (topic: Action Potentials). Inactivation gate closure prevents repeated Na⁺ opening (absolute refractory period). The correct choice—“Cannot fire another action potential until recovery”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Threshold is best described as the voltage at which:",
    options: [

      "Net inward current exceeds net outward current regeneratively",
      "K⁺ channels fully close forever",
      "The pump stops",
      "Myelin is stripped",
    ],
    correct: 0,
    explanation: "Positive feedback from Na⁺ activation makes depolarization self-sustaining.",
    wrongExplanations: [
      "",
      "“K⁺ channels fully close forever” does not match the mechanism (topic: Action Potentials). Positive feedback from Na⁺ activation makes depolarization self-sustaining. The correct choice—“Net inward current exceeds net outward current regeneratively”—fits that description.",
      "“The pump stops” does not match the mechanism (topic: Action Potentials). Positive feedback from Na⁺ activation makes depolarization self-sustaining. The correct choice—“Net inward current exceeds net outward current regeneratively”—fits that description.",
      "“Myelin is stripped” does not match the mechanism (topic: Action Potentials). Positive feedback from Na⁺ activation makes depolarization self-sustaining. The correct choice—“Net inward current exceeds net outward current regeneratively”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A subthreshold depolarization decays because:",
    options: [

      "Passive leak currents oppose the change (return toward rest)",
      "Na⁺ channels cannot ever open",
      "Myelin prevents all current",
      "Synapses are as the primary route inhibitory",
    ],
    correct: 0,
    explanation: "Subthreshold events are passive; leak restores resting potential.",
    wrongExplanations: [
      "",
      "“Na⁺ channels cannot ever open” does not match the mechanism (topic: Action Potentials). Subthreshold events are passive; leak restores resting potential. The correct choice—“Passive leak currents oppose the change (return toward rest)”—fits that description.",
      "“Myelin prevents all current” does not match the mechanism (topic: Action Potentials). Subthreshold events are passive; leak restores resting potential. The correct choice—“Passive leak currents oppose the change (return toward rest)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Subthreshold events are passive; leak restores resting potential.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Lowering extracellular Ca²⁺ can narrow action potentials partly by:",
    options: [

      "Reducing surface charge screening and altering channel kinetics / excitability",
      "Blocking Na⁺ channels irreversibly",
      "Eliminating K⁺ gradients",
      "Stopping saltatory conduction often",
    ],
    correct: 0,
    explanation: "Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width.",
    wrongExplanations: [
      "",
      "“Blocking Na⁺ channels irreversibly” does not match the mechanism (topic: Action Potentials). Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width. The correct choice—“Reducing surface charge screening and altering channel kinetics / excitability”—fits that description.",
      "“Eliminating K⁺ gradients” does not match the mechanism (topic: Action Potentials). Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width. The correct choice—“Reducing surface charge screening and altering channel kinetics / excitability”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ affects gating and excitability; extreme lowering has complex effects on spike width.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "In continuous conduction, the action potential moves because:",
    options: [

      "Local current loops depolarize adjacent membrane to threshold",
      "The spike travels as a single electron flow in myelin",
      "Main mechanism: the soma fires repeatedly",
      "Synaptic vesicles propagate down the axon",
    ],
    correct: 0,
    explanation: "Depolarization spreads passively to the next segment, triggering local Na⁺ influx.",
    wrongExplanations: [
      "",
      "“The spike travels as a single electron flow in myelin (misapplies how active propaga…” does not match the mechanism (topic: Action Potential Propagation). Depolarization spreads passively to the next segment, triggering local Na⁺ influx. The correct choice—“Local current loops depolarize adjacent membrane to threshold”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Depolarization spreads passively to the next segment, triggering local Na⁺ influx.",
      "“Synaptic vesicles propagate down the axon (misapplies how active propagation uses lo…” does not match the mechanism (topic: Action Potential Propagation). Depolarization spreads passively to the next segment, triggering local Na⁺ influx. The correct choice—“Local current loops depolarize adjacent membrane to threshold”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Saltatory conduction increases conduction velocity mainly by:",
    options: [

      "Reducing capacitive load and limiting active regeneration to nodes",
      "Increasing axon diameter mainly in the soma",
      "Blocking K⁺ at many internode",
      "Converting spikes to graded potentials",
    ],
    correct: 0,
    explanation: "Myelin insulates internodes; nodes concentrate ion channels for efficient jumping.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin insulates internodes; nodes concentrate ion channels for efficient jumping.",
      "“Blocking K⁺ at every internode (misapplies how active propagation uses local circuit…” does not match the mechanism (topic: Action Potential Propagation). Myelin insulates internodes; nodes concentrate ion channels for efficient jumping. The correct choice—“Reducing capacitive load and limiting active regeneration to nodes”—fits that description.",
      "“Converting spikes to graded potentials (misapplies how active propagation uses local…” does not match the mechanism (topic: Action Potential Propagation). Myelin insulates internodes; nodes concentrate ion channels for efficient jumping. The correct choice—“Reducing capacitive load and limiting active regeneration to nodes”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Local anesthetic block of myelinated fibers often fails first in:",
    options: [

      "Small-diameter fibers",
      "Main mechanism: motor alpha fibers often",
      "Main mechanism: proprioceptive Ia fibers often",
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
    question: "At a node of Ranvier, voltage-gated channels are concentrated to:",
    options: [

      "Regenerate the action potential efficiently",
      "Pump Na⁺ into myelin",
      "Generate EPSPs as the primary route",
      "Store synaptic vesicles",
    ],
    correct: 0,
    explanation: "High Na⁺ channel density at nodes supports saltatory propagation.",
    wrongExplanations: [
      "",
      "“Pump Na⁺ into myelin (misapplies how active propagation uses local circuit currents)” does not match the mechanism (topic: Action Potential Propagation). High Na⁺ channel density at nodes supports saltatory propagation. The correct choice—“Regenerate the action potential efficiently”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High Na⁺ channel density at nodes supports saltatory propagation.",
      "“Store synaptic vesicles (misapplies how active propagation uses local circuit curren…” does not match the mechanism (topic: Action Potential Propagation). High Na⁺ channel density at nodes supports saltatory propagation. The correct choice—“Regenerate the action potential efficiently”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Demyelination slows conduction because:",
    options: [

      "Effective capacitance increases and current must charge more membrane per unit length",
      "Na⁺ channels disappear from the genome",
      "K⁺ equilibrium becomes +60 mV",
      "Axons become purely passive forever",
    ],
    correct: 0,
    explanation: "Loss of insulation forces more membrane to be charged, delaying regeneration.",
    wrongExplanations: [
      "",
      "“Na⁺ channels disappear from the genome (misapplies how active propagation uses local…” does not match the mechanism (topic: Action Potential Propagation). Loss of insulation forces more membrane to be charged, delaying regeneration. The correct choice—“Effective capacitance increases and current must charge more membrane per unit length”—fits that description.",
      "“K⁺ equilibrium becomes +60 mV (misapplies how active propagation uses local circuit …” does not match the mechanism (topic: Action Potential Propagation). Loss of insulation forces more membrane to be charged, delaying regeneration. The correct choice—“Effective capacitance increases and current must charge more membrane per unit length”—fits that description.",
      "“Axons become purely passive forever (misapplies how active propagation uses local ci…” does not match the mechanism (topic: Action Potential Propagation). Loss of insulation forces more membrane to be charged, delaying regeneration. The correct choice—“Effective capacitance increases and current must charge more membrane per unit length”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "An antidromic action potential is one that:",
    options: [

      "Propagates toward the soma (opposite normal orthodromic direction)",
      "Seldom occurs in sensory neurons",
      "Main mechanism: occurs in dendrites",
      "Is often subthreshold",
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
    question: "The axon initial segment (AIS) often has a high density of:",
    options: [

      "Voltage-gated Na⁺ channels and contributes strongly to spike initiation",
      "Dopamine from amacrine cells opens CNG channels in the dark",
      "Photopigment molecules",
      "Olfactory receptors",
    ],
    correct: 0,
    explanation: "MCB80x highlights AIS as a primary site of action potential generation.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. MCB80x highlights AIS as a primary site of action potential generation.",
      "“Photopigment molecules” does not match the mechanism (topic: Axon Initial Segment). MCB80x highlights AIS as a primary site of action potential generation. The correct choice—“Voltage-gated Na⁺ channels and contributes strongly to spike initiation”—fits that description.",
      "“Olfactory receptors” does not match the mechanism (topic: Axon Initial Segment). MCB80x highlights AIS as a primary site of action potential generation. The correct choice—“Voltage-gated Na⁺ channels and contributes strongly to spike initiation”—fits that description.",
    ]
  },
  {
    topic: "Axon Initial Segment",
    question: "Graded synaptic potentials summate at the AIS to:",
    options: [

      "Determine whether threshold is reached for spike initiation",
      "Directly release neurotransmitter without spikes",
      "Generate myelin",
      "Reverse the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Integration at the AIS converts synaptic input into firing output.",
    wrongExplanations: [
      "",
      "“Directly release neurotransmitter without spikes” does not match the mechanism (topic: Axon Initial Segment). Integration at the AIS converts synaptic input into firing output. The correct choice—“Determine whether threshold is reached for spike initiation”—fits that description.",
      "“Generate myelin” does not match the mechanism (topic: Axon Initial Segment). Integration at the AIS converts synaptic input into firing output. The correct choice—“Determine whether threshold is reached for spike initiation”—fits that description.",
      "“Reverse the Na⁺/K⁺ pump” does not match the mechanism (topic: Axon Initial Segment). Integration at the AIS converts synaptic input into firing output. The correct choice—“Determine whether threshold is reached for spike initiation”—fits that description.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Ball-and-chain inactivation in Na⁺ channels refers to:",
    options: [

      "An intracellular inactivation particle blocking the pore after activation",
      "Myelin wrapping the channel",
      "Glutamate binding to the pore",
      "Pump phosphorylation as the primary route",
    ],
    correct: 0,
    explanation: "Fast inactivation involves a cytoplasmic domain occluding the channel.",
    wrongExplanations: [
      "",
      "“Myelin wrapping the channel” does not match the mechanism (topic: Channel Gating). Fast inactivation involves a cytoplasmic domain occluding the channel. The correct choice—“An intracellular inactivation particle blocking the pore after activation”—fits that description.",
      "“Glutamate binding to the pore” does not match the mechanism (topic: Channel Gating). Fast inactivation involves a cytoplasmic domain occluding the channel. The correct choice—“An intracellular inactivation particle blocking the pore after activation”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Fast inactivation involves a cytoplasmic domain occluding the channel.",
    ]
  },
  {
    topic: "Channel Gating",
    question: "Delayed rectifier K⁺ channels open with slower kinetics than Na⁺ channels to:",
    options: [

      "Repolarize the membrane after the Na⁺ surge",
      "Depolarize to threshold faster",
      "Permit indefinite Na⁺ influx",
      "Close gap junctions",
    ],
    correct: 0,
    explanation: "Delayed K⁺ activation terminates the spike.",
    wrongExplanations: [
      "",
      "“Depolarize to threshold faster” does not match the mechanism (topic: Channel Gating). Delayed K⁺ activation terminates the spike. The correct choice—“Repolarize the membrane after the Na⁺ surge”—fits that description.",
      "“Permit indefinite Na⁺ influx” does not match the mechanism (topic: Channel Gating). Delayed K⁺ activation terminates the spike. The correct choice—“Repolarize the membrane after the Na⁺ surge”—fits that description.",
      "“Close gap junctions” does not match the mechanism (topic: Channel Gating). Delayed K⁺ activation terminates the spike. The correct choice—“Repolarize the membrane after the Na⁺ surge”—fits that description.",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "At the potassium equilibrium potential, net K⁺ current is zero even though:",
    options: [

      "Individual K⁺ ions still cross the membrane in both directions",
      "No ions move at all",
      "The pump is off",
      "Na⁺ channels are open maximally",
    ],
    correct: 0,
    explanation: "Equilibrium means balanced fluxes, not absence of movement.",
    wrongExplanations: [
      "",
      "“No ions move at all” does not match the mechanism (topic: Equilibrium vs Steady State). Equilibrium means balanced fluxes, not absence of movement. The correct choice—“Individual K⁺ ions still cross the membrane in both directions”—fits that description.",
      "“The pump is off” does not match the mechanism (topic: Equilibrium vs Steady State). Equilibrium means balanced fluxes, not absence of movement. The correct choice—“Individual K⁺ ions still cross the membrane in both directions”—fits that description.",
      "“Na⁺ channels are open maximally” does not match the mechanism (topic: Equilibrium vs Steady State). Equilibrium means balanced fluxes, not absence of movement. The correct choice—“Individual K⁺ ions still cross the membrane in both directions”—fits that description.",
    ]
  },
  {
    topic: "Equilibrium vs Steady State",
    question: "Resting potential is a steady state, not a true equilibrium, because:",
    options: [

      "Active transport maintains ion gradients against passive leak",
      "No channels are open",
      "Temperature is zero",
      "Capacitance is infinite",
    ],
    correct: 0,
    explanation: "The pump continuously works to offset passive ion loss.",
    wrongExplanations: [
      "",
      "“No channels are open” does not match the mechanism (topic: Equilibrium vs Steady State). The pump continuously works to offset passive ion loss. The correct choice—“Active transport maintains ion gradients against passive leak”—fits that description.",
      "“Temperature is zero” does not match the mechanism (topic: Equilibrium vs Steady State). The pump continuously works to offset passive ion loss. The correct choice—“Active transport maintains ion gradients against passive leak”—fits that description.",
      "“Capacitance is infinite” does not match the mechanism (topic: Equilibrium vs Steady State). The pump continuously works to offset passive ion loss. The correct choice—“Active transport maintains ion gradients against passive leak”—fits that description.",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Voltage clamp was developed primarily to:",
    options: [

      "Hold membrane voltage constant and measure the currents required",
      "Measure as the primary route resting potential without perturbation",
      "Visualize myelin with light microscopy alone",
      "Count synaptic vesicles directly",
    ],
    correct: 0,
    explanation: "Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hodgkin and Huxley clamped voltage to dissect underlying ionic currents.",
      "“Visualize myelin with light microscopy alone” does not match the mechanism (topic: Experimental Methods). Hodgkin and Huxley clamped voltage to dissect underlying ionic currents. The correct choice—“Hold membrane voltage constant and measure the currents required”—fits that description.",
      "“Count synaptic vesicles directly” does not match the mechanism (topic: Experimental Methods). Hodgkin and Huxley clamped voltage to dissect underlying ionic currents. The correct choice—“Hold membrane voltage constant and measure the currents required”—fits that description.",
    ]
  },
  {
    topic: "Experimental Methods",
    question: "Current clamp injects current and records:",
    options: [

      "Resulting voltage changes",
      "Fixed voltage with varying current often",
      "Main mechanism: magnetic resonance signal",
      "Quantal content without electrodes",
    ],
    correct: 0,
    explanation: "Current clamp reveals integrative and spiking behavior under controlled input.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current clamp reveals integrative and spiking behavior under controlled input.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current clamp reveals integrative and spiking behavior under controlled input.",
      "“Quantal content without electrodes” does not match the mechanism (topic: Experimental Methods). Current clamp reveals integrative and spiking behavior under controlled input. The correct choice—“Resulting voltage changes”—fits that description.",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "Voltage-gated Na⁺ channels are far more selective than leak channels partly because:",
    options: [

      "Pore architecture and charge filtering favor Na⁺ over K⁺",
      "They as the primary route open at E_K",
      "They pump ions actively",
      "They are located mainly in dendrites",
    ],
    correct: 0,
    explanation: "Selectivity filters and gating restrict permeation to Na⁺.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Selectivity filters and gating restrict permeation to Na⁺.",
      "“They pump ions actively” does not match the mechanism (topic: Ion Selectivity). Selectivity filters and gating restrict permeation to Na⁺. The correct choice—“Pore architecture and charge filtering favor Na⁺ over K⁺”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Selectivity filters and gating restrict permeation to Na⁺.",
    ]
  },
  {
    topic: "Ion Selectivity",
    question: "If E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors:",
    options: [

      "Inward Na⁺ movement (into the cell)",
      "Outward Na⁺ as the primary route",
      "No movement regardless of channels",
      "Movement as the primary route through gap junctions",
    ],
    correct: 0,
    explanation: "V_m negative relative to E_Na drives cation influx if channels open.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m negative relative to E_Na drives cation influx if channels open.",
      "“No movement regardless of channels” does not match the mechanism (topic: Ion Selectivity). V_m negative relative to E_Na drives cation influx if channels open. The correct choice—“Inward Na⁺ movement (into the cell)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m negative relative to E_Na drives cation influx if channels open.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Temporal summation requires synaptic inputs that:",
    options: [

      "Overlap in time before passive decay completes",
      "Arrive exactly one year apart",
      "Are as the primary route inhibitory",
      "Occur mainly in myelin",
    ],
    correct: 0,
    explanation: "EPSPs must summate within the membrane time constant window.",
    wrongExplanations: [
      "",
      "“Arrive exactly one year apart” does not match the mechanism (topic: Dendritic Integration). EPSPs must summate within the membrane time constant window. The correct choice—“Overlap in time before passive decay completes”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs must summate within the membrane time constant window.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs must summate within the membrane time constant window.",
    ]
  },
  {
    topic: "Dendritic Integration",
    question: "Spatial summation occurs when:",
    options: [

      "Multiple synaptic inputs on different branches combine at the axon hillock/AIS",
      "One synapse fires repeatedly after decay",
      "K⁺ channels alone set the photoreceptor resting potential in light",
      "The cell is voltage-clamped at 0 mV",
    ],
    correct: 0,
    explanation: "Inputs from different locations add passively toward spike initiation.",
    wrongExplanations: [
      "",
      "“One synapse fires repeatedly after decay” does not match the mechanism (topic: Dendritic Integration). Inputs from different locations add passively toward spike initiation. The correct choice—“Multiple synaptic inputs on different branches combine at the axon hillock/AIS”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Inputs from different locations add passively toward spike initiation.",
      "“The cell is voltage-clamped at 0 mV” does not match the mechanism (topic: Dendritic Integration). Inputs from different locations add passively toward spike initiation. The correct choice—“Multiple synaptic inputs on different branches combine at the axon hillock/AIS”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Ouabain blocks the Na⁺/K⁺ pump and over time tends to:",
    options: [

      "Depolarize cells as Na⁺ accumulates and K⁺ is lost",
      "Hyperpolarize instantly to −120 mV",
      "Prevent all action potentials within one millisecond often",
      "Open all glutamate receptors",
    ],
    correct: 0,
    explanation: "Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure.",
      "“Open all glutamate receptors” does not match the mechanism (topic: Pharmacology). Pump inhibition collapses gradients, raising [Na⁺]_i and depolarizing toward failure. The correct choice—“Depolarize cells as Na⁺ accumulates and K⁺ is lost”—fits that description.",
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
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. More K⁺ conductance pulls V_m toward E_K (often more negative).",
      "“Block all spikes by removing Na⁺ channels from membrane” does not match the mechanism (topic: Pharmacology). More K⁺ conductance pulls V_m toward E_K (often more negative). The correct choice—“Hyperpolarize or stabilize V_m nearer E_K”—fits that description.",
      "Membrane capacitance stores charge (Q = CV) and slows voltage changes, but capacitive current alone cannot produce the selective Na⁺ influx and delayed K⁺ efflux that underlie spike upstroke and repolarization. More K⁺ conductance pulls V_m toward E_K (often more negative).",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Blocking voltage-gated K⁺ channels during an action potential typically:",
    options: [

      "Broadens the spike and may increase firing rate",
      "Prevents Na⁺ influx entirely",
      "Hyperpolarizes below rest instantly often",
      "Stops propagation mainly in dendrites",
    ],
    correct: 0,
    explanation: "Slower repolarization prolongs depolarization and can alter refractory period.",
    wrongExplanations: [
      "",
      "“Prevents Na⁺ influx entirely” does not match the mechanism (topic: Pharmacology). Slower repolarization prolongs depolarization and can alter refractory period. The correct choice—“Broadens the spike and may increase firing rate”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Slower repolarization prolongs depolarization and can alter refractory period.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Slower repolarization prolongs depolarization and can alter refractory period.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "If g_Na increases transiently during a spike while g_K rises later, the sequence reflects:",
    options: [

      "Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation",
      "Goldman equation for multi-ion resting potential as the primary route (not time-varying spike conductances)",
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
    question: "Reversal potential for a mixed ionic current is the voltage where:",
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
      "“The pump rate is maximal” does not match the mechanism (topic: Quantitative Physiology). Reversal potential satisfies I_ion = g(V_m − E_rev) = 0. The correct choice—“Net ionic current through that conductance is zero”—fits that description.",
      "“Capacitive current equals action potential amplitude” does not match the mechanism (topic: Quantitative Physiology). Reversal potential satisfies I_ion = g(V_m − E_rev) = 0. The correct choice—“Net ionic current through that conductance is zero”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Reversal potential satisfies I_ion = g(V_m − E_rev) = 0.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Increasing axon length constant λ without changing diameter would suggest:",
    options: [

      "Higher R_m or lower R_i",
      "Lower R_m as the primary route often",
      "Infinite capacitance",
      "Removal of all Na⁺ channels",
    ],
    correct: 0,
    explanation: "λ = √(R_m/R_i); increased λ implies better passive spread along the cable.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: λ = √(R_m/R_i); increased λ implies better passive spread along the cable.",
      "“Infinite capacitance” does not match the mechanism (topic: Quantitative Physiology). λ = √(R_m/R_i); increased λ implies better passive spread along the cable. The correct choice—“Higher R_m or lower R_i”—fits that description.",
      "“Removal of all Na⁺ channels” does not match the mechanism (topic: Quantitative Physiology). λ = √(R_m/R_i); increased λ implies better passive spread along the cable. The correct choice—“Higher R_m or lower R_i”—fits that description.",
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
      "Main mechanism: electrical synapses are used",
      "Neurotransmitter is often infinite in concentration",
    ],
    correct: 0,
    explanation: "Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
    wrongExplanations: [
      "",
      "“Ion channels open continuously without discreteness” does not match the mechanism (topic: Chemical Synapses). Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude. The correct choice—“Release occurs in discrete vesicle units (quanta)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Each vesicle contributes a miniature EPSC/IPSC of roughly fixed amplitude.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Miniature EPSPs (mEPSPs) are observed when:",
    options: [

      "Spontaneous single-vesicle fusion occurs without presynaptic spikes",
      "The axon is cut and sealed",
      "Main mechanism: inhibitory neurons are present",
      "Myelin covers the synapse",
    ],
    correct: 0,
    explanation: "Spontaneous quantal release produces mEPSPs/mEPSCs.",
    wrongExplanations: [
      "",
      "“The axon is cut and sealed (mixes up presynaptic release with postsynaptic receptor …” does not match the mechanism (topic: Synaptic Transmission). Spontaneous quantal release produces mEPSPs/mEPSCs. The correct choice—“Spontaneous single-vesicle fusion occurs without presynaptic spikes”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Spontaneous quantal release produces mEPSPs/mEPSCs.",
      "“Myelin covers the synapse (mixes up presynaptic release with postsynaptic receptor l…” does not match the mechanism (topic: Synaptic Transmission). Spontaneous quantal release produces mEPSPs/mEPSCs. The correct choice—“Spontaneous single-vesicle fusion occurs without presynaptic spikes”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Increasing presynaptic Ca²⁺ entry near active zones generally:",
    options: [

      "Increases release probability",
      "Eliminates all vesicle fusion",
      "Converts ionotropic receptors to metabotropic as the primary route",
      "Blocks postsynaptic K⁺ channels",
    ],
    correct: 0,
    explanation: "Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion.",
    wrongExplanations: [
      "",
      "“Eliminates all vesicle fusion” does not match the mechanism (topic: Synaptic Transmission). Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion. The correct choice—“Increases release probability”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion.",
      "“Blocks postsynaptic K⁺ channels” does not match the mechanism (topic: Synaptic Transmission). Ca²⁺ triggers synaptotagmin and SNARE-mediated fusion. The correct choice—“Increases release probability”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Botulinum toxin reduces synaptic transmission by cleaving:",
    options: [

      "SNARE proteins required for vesicle fusion",
      "Voltage-gated Na⁺ channels in the axon hillock as the primary route",
      "Glutamate entirely in the cleft",
      "Most postsynaptic AMPA receptors",
    ],
    correct: 0,
    explanation: "Botulinum proteolysis of SNAREs prevents exocytosis.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Botulinum proteolysis of SNAREs prevents exocytosis.",
      "“Glutamate entirely in the cleft” does not match the mechanism (topic: Synaptic Transmission). Botulinum proteolysis of SNAREs prevents exocytosis. The correct choice—“SNARE proteins required for vesicle fusion”—fits that description.",
      "“All postsynaptic AMPA receptors” does not match the mechanism (topic: Synaptic Transmission). Botulinum proteolysis of SNAREs prevents exocytosis. The correct choice—“SNARE proteins required for vesicle fusion”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Synaptic delay is largely attributable to:",
    options: [

      "Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding",
      "Action potential backpropagation mainly in dendrites",
      "Myelin thickness at the synapse",
      "Pump reversal at the postsynaptic density",
    ],
    correct: 0,
    explanation: "Several presynaptic steps add milliseconds between spike and response.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Several presynaptic steps add milliseconds between spike and response.",
      "“Myelin thickness at the synapse (mixes up presynaptic release with postsynaptic rece…” does not match the mechanism (topic: Synaptic Transmission). Several presynaptic steps add milliseconds between spike and response. The correct choice—“Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding”—fits that description.",
      "“Pump reversal at the postsynaptic density (mixes up presynaptic release with postsyn…” does not match the mechanism (topic: Synaptic Transmission). Several presynaptic steps add milliseconds between spike and response. The correct choice—“Ca²⁺ influx, vesicle fusion, and transmitter diffusion/binding”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "The readily releasable pool refers to vesicles that:",
    options: [

      "Are docked/primed and can fuse quickly after Ca²⁺ rise",
      "Are permanently trapped in the nucleus",
      "Requires contain neuropeptides for hours-long release",
      "Exist mainly in electrical synapses",
    ],
    correct: 0,
    explanation: "Primed vesicles supply the first wave of evoked release.",
    wrongExplanations: [
      "",
      "“Are permanently trapped in the nucleus” does not match the mechanism (topic: Synaptic Vesicles). Primed vesicles supply the first wave of evoked release. The correct choice—“Are docked/primed and can fuse quickly after Ca²⁺ rise”—fits that description.",
      "“Requires contain neuropeptides for hours-long release” does not match the mechanism (topic: Synaptic Vesicles). Primed vesicles supply the first wave of evoked release. The correct choice—“Are docked/primed and can fuse quickly after Ca²⁺ rise”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Primed vesicles supply the first wave of evoked release.",
    ]
  },
  {
    topic: "Synaptic Vesicles",
    question: "Endocytosis after exocytosis is needed to:",
    options: [

      "Recycle vesicle membrane and maintain release capacity",
      "Generate action potentials in the cleft",
      "Open gap junctions",
      "Depolarize all mitochondria",
    ],
    correct: 0,
    explanation: "Without recycling, synapses deplete vesicle supply.",
    wrongExplanations: [
      "",
      "“Generate action potentials in the cleft” does not match the mechanism (topic: Synaptic Vesicles). Without recycling, synapses deplete vesicle supply. The correct choice—“Recycle vesicle membrane and maintain release capacity”—fits that description.",
      "“Open gap junctions” does not match the mechanism (topic: Synaptic Vesicles). Without recycling, synapses deplete vesicle supply. The correct choice—“Recycle vesicle membrane and maintain release capacity”—fits that description.",
      "“Depolarize all mitochondria” does not match the mechanism (topic: Synaptic Vesicles). Without recycling, synapses deplete vesicle supply. The correct choice—“Recycle vesicle membrane and maintain release capacity”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells typically mediate:",
    options: [

      "Fast excitatory postsynaptic currents at many glutamatergic synapses",
      "Slow G-protein inhibitory currents as the primary route",
      "Direct opening of voltage-gated Na⁺ in myelin",
      "Peptide hormone release",
    ],
    correct: 0,
    explanation: "AMPA channels dominate fast EPSCs when Glu is released.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: AMPA channels dominate fast EPSCs when Glu is released.",
      "“Direct opening of voltage-gated Na⁺ in myelin” does not match the mechanism (topic: Receptor Types). AMPA channels dominate fast EPSCs when Glu is released. The correct choice—“Fast excitatory postsynaptic currents at many glutamatergic synapses”—fits that description.",
      "“Peptide hormone release” does not match the mechanism (topic: Receptor Types). AMPA channels dominate fast EPSCs when Glu is released. The correct choice—“Fast excitatory postsynaptic currents at many glutamatergic synapses”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "GABA<sub>A</sub> receptors are ionotropic and conduct primarily:",
    options: [

      "Cl⁻",
      "Na⁺ primarily",
      "Ca²⁺ mainly in all neurons often",
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
    question: "Nicotinic ACh receptors at the neuromuscular junction are:",
    options: [

      "Ligand-gated cation channels causing endplate depolarization",
      "Metabotropic GPCRs as the primary route",
      "Voltage-gated Cl⁻ channels",
      "Electrical synapses",
    ],
    correct: 0,
    explanation: "nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber.",
      "“Voltage-gated Cl⁻ channels” does not match the mechanism (topic: Receptor Types). nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber. The correct choice—“Ligand-gated cation channels causing endplate depolarization”—fits that description.",
      "“Electrical synapses” does not match the mechanism (topic: Receptor Types). nAChR permits Na⁺/K⁺ flux, depolarizing the muscle fiber. The correct choice—“Ligand-gated cation channels causing endplate depolarization”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Muscarinic ACh receptors are metabotropic and can:",
    options: [

      "Modulate K⁺ channels, phospholipase C, and other second-messenger pathways",
      "Directly form a fast cation pore identical to AMPA",
      "Replace SNARE proteins",
      "Conduct myelin insulation",
    ],
    correct: 0,
    explanation: "Muscarinic receptors use G-proteins for slower modulatory effects.",
    wrongExplanations: [
      "",
      "“Directly form a fast cation pore identical to AMPA” does not match the mechanism (topic: Receptor Types). Muscarinic receptors use G-proteins for slower modulatory effects. The correct choice—“Modulate K⁺ channels, phospholipase C, and other second-messenger pathways”—fits that description.",
      "“Replace SNARE proteins” does not match the mechanism (topic: Receptor Types). Muscarinic receptors use G-proteins for slower modulatory effects. The correct choice—“Modulate K⁺ channels, phospholipase C, and other second-messenger pathways”—fits that description.",
      "“Conduct myelin insulation” does not match the mechanism (topic: Receptor Types). Muscarinic receptors use G-proteins for slower modulatory effects. The correct choice—“Modulate K⁺ channels, phospholipase C, and other second-messenger pathways”—fits that description.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Activation of phospholipase C via Gq often increases:",
    options: [

      "IP3 and DAG, raising intracellular Ca²⁺ from stores",
      "CAMP as the primary route without any Ca²⁺ change",
      "Myelin basic protein synthesis as the primary route",
      "Voltage-gated Na⁺ density at nodes instantly",
    ],
    correct: 0,
    explanation: "PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation).",
      "“Voltage-gated Na⁺ density at nodes instantly” does not match the mechanism (topic: Second Messengers). PLC splits PIP2 into IP3 (Ca²⁺ release) and DAG (PKC activation). The correct choice—“IP3 and DAG, raising intracellular Ca²⁺ from stores”—fits that description.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "cAMP-dependent protein kinase (PKA) can modulate synapses by:",
    options: [

      "Phosphorylating channels and transcription factors",
      "Cleaving SNARE proteins",
      "Blocking all glutamate release permanently",
      "Opening gap junctions in myelin",
    ],
    correct: 0,
    explanation: "PKA phosphorylation alters channel function and gene expression.",
    wrongExplanations: [
      "",
      "“Cleaving SNARE proteins” does not match the mechanism (topic: Second Messengers). PKA phosphorylation alters channel function and gene expression. The correct choice—“Phosphorylating channels and transcription factors”—fits that description.",
      "“Blocking all glutamate release permanently” does not match the mechanism (topic: Second Messengers). PKA phosphorylation alters channel function and gene expression. The correct choice—“Phosphorylating channels and transcription factors”—fits that description.",
      "“Opening gap junctions in myelin” does not match the mechanism (topic: Second Messengers). PKA phosphorylation alters channel function and gene expression. The correct choice—“Phosphorylating channels and transcription factors”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude at the soma mainly by:",
    options: [

      "Lowering input resistance so synaptic current leaks locally",
      "Increasing Na⁺ channel density at AIS often",
      "Preventing any Cl⁻ flux",
      "Eliminating temporal summation entirely",
    ],
    correct: 0,
    explanation: "Increased conductance diverts current, reducing voltage change elsewhere.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Increased conductance diverts current, reducing voltage change elsewhere.",
      "“Preventing any Cl⁻ flux (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Increased conductance diverts current, reducing voltage change elsewhere. The correct choice—“Lowering input resistance so synaptic current leaks locally”—fits that description.",
      "“Eliminating temporal summation entirely (ignores how EPSPs/IPSPs sum in time or spac…” does not match the mechanism (topic: Synaptic Integration). Increased conductance diverts current, reducing voltage change elsewhere. The correct choice—“Lowering input resistance so synaptic current leaks locally”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Divisive normalization in some circuits refers to:",
    options: [

      "Inhibitory input scaling excitatory drive proportionally",
      "Adding as the primary route spatial summation without time",
      "Blocking all GABA release",
      "Converting spikes to graded release mainly in retina",
    ],
    correct: 0,
    explanation: "Inhibition can divide or scale excitation rather than only subtract absolutely.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition can divide or scale excitation rather than only subtract absolutely.",
      "“Blocking all GABA release (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Inhibition can divide or scale excitation rather than only subtract absolutely. The correct choice—“Inhibitory input scaling excitatory drive proportionally”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition can divide or scale excitation rather than only subtract absolutely.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Synaptic depression after repetitive firing often reflects:",
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
      "“Permanent removal of all postsynaptic receptors” does not match the mechanism (topic: Short-Term Plasticity). High-frequency use exhausts primed vesicles temporarily. The correct choice—“Depletion of the readily releasable vesicle pool”—fits that description.",
      "“Myelin growth in the cleft” does not match the mechanism (topic: Short-Term Plasticity). High-frequency use exhausts primed vesicles temporarily. The correct choice—“Depletion of the readily releasable vesicle pool”—fits that description.",
      "“Requires lTP induction” does not match the mechanism (topic: Short-Term Plasticity). High-frequency use exhausts primed vesicles temporarily. The correct choice—“Depletion of the readily releasable vesicle pool”—fits that description.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Facilitation at some synapses is attributed partly to:",
    options: [

      "Residual presynaptic Ca²⁺ enhancing release probability",
      "Complete SNARE destruction",
      "Blocking all K⁺ channels in the cleft",
      "Loss of action potentials",
    ],
    correct: 0,
    explanation: "Ca²⁺ buildup increases P_release for subsequent spikes.",
    wrongExplanations: [
      "",
      "“Complete SNARE destruction” does not match the mechanism (topic: Short-Term Plasticity). Ca²⁺ buildup increases P_release for subsequent spikes. The correct choice—“Residual presynaptic Ca²⁺ enhancing release probability”—fits that description.",
      "“Blocking all K⁺ channels in the cleft” does not match the mechanism (topic: Short-Term Plasticity). Ca²⁺ buildup increases P_release for subsequent spikes. The correct choice—“Residual presynaptic Ca²⁺ enhancing release probability”—fits that description.",
      "“Loss of action potentials” does not match the mechanism (topic: Short-Term Plasticity). Ca²⁺ buildup increases P_release for subsequent spikes. The correct choice—“Residual presynaptic Ca²⁺ enhancing release probability”—fits that description.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "Hebbian plasticity is summarized as:",
    options: [

      "Cells that fire together wire together",
      "Random synapse elimination as the primary route (states the wrong induction requirement for LTP/LTD)",
      "Main mechanism: inhibitory synapses strengthen with uncorrelated input",
      "Myelin determines synaptic weight alone",
    ],
    correct: 0,
    explanation: "Correlated pre/post activity drives LTP-like strengthening.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre/post activity drives LTP-like strengthening.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Correlated pre/post activity drives LTP-like strengthening.",
      "“Myelin determines synaptic weight alone” does not match the mechanism (topic: Long-Term Plasticity). Correlated pre/post activity drives LTP-like strengthening. The correct choice—“Cells that fire together wire together”—fits that description.",
    ]
  },
  {
    topic: "Long-Term Plasticity",
    question: "LTD (long-term depression) can be induced when:",
    options: [

      "Postsynaptic activity is low during presynaptic input (e.g., low-frequency pairing)",
      "Main mechanism: a single mEPSP occurs once (states the wrong induction requirement for LTP/LTD)",
      "Most NMDA receptors are removed genetically often (states the wrong induction requirement for LTP/LTD)",
      "Main mechanism: electrical synapses fire (states the wrong induction requirement for LTP/LTD)",
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
    question: "CaMKII activation postsynaptically is associated with:",
    options: [

      "LTP maintenance at many glutamatergic synapses",
      "Immediate botulinum effects (states the wrong induction requirement for LTP/LTD)",
      "Main mechanism: gABA<sub>B</sub> signaling (states the wrong induction requirement for LTP/LTD)",
      "Saltatory conduction failure (states the wrong induction requirement for LTP/LTD)",
    ],
    correct: 0,
    explanation: "Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength.",
    wrongExplanations: [
      "",
      "“Immediate botulinum effects (states the wrong induction requirement for LTP/LTD)” does not match the mechanism (topic: Long-Term Plasticity). Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength. The correct choice—“LTP maintenance at many glutamatergic synapses”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength.",
      "“Saltatory conduction failure (states the wrong induction requirement for LTP/LTD)” does not match the mechanism (topic: Long-Term Plasticity). Ca²⁺ influx through NMDA activates CaMKII, reinforcing synaptic strength. The correct choice—“LTP maintenance at many glutamatergic synapses”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates corticostriatal synapses largely via:",
    options: [

      "D1/D2 GPCRs changing cAMP and downstream phosphorylation",
      "Direct nAChR pores at many synapse",
      "Requires gap junction coupling",
      "Myelin thickness",
    ],
    correct: 0,
    explanation: "Dopamine GPCRs tune excitability and plasticity in striatal circuits.",
    wrongExplanations: [
      "",
      "“Direct nAChR pores at every synapse” does not match the mechanism (topic: Neuromodulation). Dopamine GPCRs tune excitability and plasticity in striatal circuits. The correct choice—“D1/D2 GPCRs changing cAMP and downstream phosphorylation”—fits that description.",
      "“Requires gap junction coupling” does not match the mechanism (topic: Neuromodulation). Dopamine GPCRs tune excitability and plasticity in striatal circuits. The correct choice—“D1/D2 GPCRs changing cAMP and downstream phosphorylation”—fits that description.",
      "Basal ganglia motor control involves dopamine from substantia nigra pars compacta to striatum. Membrane equations or retinal biochemistry do not substitute for that circuit logic. Dopamine GPCRs tune excitability and plasticity in striatal circuits.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Norepinephrine from locus coeruleus often:",
    options: [

      "Increases arousal and modulates sensory gain via β-adrenergic receptors",
      "Blocks all Na⁺ channels permanently",
      "Is the primary transmitter at NMJ",
      "Requires activates GABA<sub>A</sub>",
    ],
    correct: 0,
    explanation: "NE modulates attention/arousal through widespread noradrenergic projections.",
    wrongExplanations: [
      "",
      "“Blocks all Na⁺ channels permanently” does not match the mechanism (topic: Neuromodulation). NE modulates attention/arousal through widespread noradrenergic projections. The correct choice—“Increases arousal and modulates sensory gain via β-adrenergic receptors”—fits that description.",
      "“Is the primary transmitter at NMJ” does not match the mechanism (topic: Neuromodulation). NE modulates attention/arousal through widespread noradrenergic projections. The correct choice—“Increases arousal and modulates sensory gain via β-adrenergic receptors”—fits that description.",
      "“Requires activates GABAA” does not match the mechanism (topic: Neuromodulation). NE modulates attention/arousal through widespread noradrenergic projections. The correct choice—“Increases arousal and modulates sensory gain via β-adrenergic receptors”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Serotonin (5-HT) modulates circuits through:",
    options: [

      "Multiple receptor subtypes (many GPCRs) with diverse effects",
      "A single ionotropic receptor mainly in mammals",
      "Exclusive action on myelin",
      "Direct voltage-gated Na⁺ gating as the primary route",
    ],
    correct: 0,
    explanation: "5-HT has broad neuromodulatory roles via many receptor types.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: 5-HT has broad neuromodulatory roles via many receptor types.",
      "“Exclusive action on myelin” does not match the mechanism (topic: Neuromodulation). 5-HT has broad neuromodulatory roles via many receptor types. The correct choice—“Multiple receptor subtypes (many GPCRs) with diverse effects”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: 5-HT has broad neuromodulatory roles via many receptor types.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Neuromodulators differ from fast transmitters mainly because they:",
    options: [

      "Act on longer timescales and often via second messengers / volume transmission",
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
    question: "Feedforward inhibition occurs when:",
    options: [

      "An excitatory input drives both principal cells and interneurons that inhibit downstream targets",
      "Inhibition as the primary route returns to the same cell that was excited (feedback as the primary route)",
      "HCN channels are silent while cGMP keeps CNG channels open",
      "Myelin provides inhibition",
    ],
    correct: 0,
    explanation: "Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Feedforward: excitation recruits interneurons that inhibit other principal neurons.",
      "“Myelin provides inhibition” does not match the mechanism (topic: Neural Circuits). Feedforward: excitation recruits interneurons that inhibit other principal neurons. The correct choice—“An excitatory input drives both principal cells and interneurons that inhibit downst…”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Feedback (recurrent) inhibition stabilizes firing by:",
    options: [

      "Interneurons inhibiting the same or nearby principal cells that excited them",
      "Blocking all EPSPs permanently",
      "Preventing any action potentials in interneurons",
      "Electrical synapses replace chemical transmission at the NMJ",
    ],
    correct: 0,
    explanation: "Recurrent loops limit runaway excitation.",
    wrongExplanations: [
      "",
      "“Blocking all EPSPs permanently” does not match the mechanism (topic: Neural Circuits). Recurrent loops limit runaway excitation. The correct choice—“Interneurons inhibiting the same or nearby principal cells that excited them”—fits that description.",
      "“Preventing any action potentials in interneurons” does not match the mechanism (topic: Neural Circuits). Recurrent loops limit runaway excitation. The correct choice—“Interneurons inhibiting the same or nearby principal cells that excited them”—fits that description.",
      "“Electrical synapses replace chemical transmission at the NMJ” does not match the mechanism (topic: Neural Circuits). Recurrent loops limit runaway excitation. The correct choice—“Interneurons inhibiting the same or nearby principal cells that excited them”—fits that description.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Central pattern generators (CPGs) can produce rhythms:",
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
    question: "Inhibitory interneurons in cortex often release:",
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
      "“Myelin basic protein” does not match the mechanism (topic: Neural Circuits). Most cortical interneurons are GABAergic. The correct choice—“GABA”—fits that description.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Connexin-based gap junctions allow:",
    options: [

      "Direct ionic and small-molecule coupling between cells",
      "Requires retrograde peptide signaling",
      "Saltatory conduction in unmyelinated axons",
      "Quantal release from vesicles",
    ],
    correct: 0,
    explanation: "Gap junctions electrically couple adjacent neurons or glia.",
    wrongExplanations: [
      "",
      "“Requires retrograde peptide signaling” does not match the mechanism (topic: Electrical Synapses). Gap junctions electrically couple adjacent neurons or glia. The correct choice—“Direct ionic and small-molecule coupling between cells”—fits that description.",
      "“Saltatory conduction in unmyelinated axons” does not match the mechanism (topic: Electrical Synapses). Gap junctions electrically couple adjacent neurons or glia. The correct choice—“Direct ionic and small-molecule coupling between cells”—fits that description.",
      "“Quantal release from vesicles” does not match the mechanism (topic: Electrical Synapses). Gap junctions electrically couple adjacent neurons or glia. The correct choice—“Direct ionic and small-molecule coupling between cells”—fits that description.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Electrical synapses are often faster than chemical synapses because:",
    options: [

      "No vesicle fusion or diffusion delay is required",
      "They often use second messengers",
      "They require NMDA activation",
      "They depend on myelin stripping",
    ],
    correct: 0,
    explanation: "Current flows directly through connexons with minimal delay.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Current flows directly through connexons with minimal delay.",
      "“They require NMDA activation” does not match the mechanism (topic: Electrical Synapses). Current flows directly through connexons with minimal delay. The correct choice—“No vesicle fusion or diffusion delay is required”—fits that description.",
      "“They depend on myelin stripping” does not match the mechanism (topic: Electrical Synapses). Current flows directly through connexons with minimal delay. The correct choice—“No vesicle fusion or diffusion delay is required”—fits that description.",
    ]
  },
  {
    topic: "Electrical Synapses",
    question: "Rectifying electrical synapses conduct better in one direction because:",
    options: [

      "Connexon subunit composition creates voltage-dependent asymmetry",
      "Myelin blocks reverse current",
      "Myelin thickness alone determines saltatory conduction velocity",
      "SNARE proteins orient vesicles",
    ],
    correct: 0,
    explanation: "Some gap junctions pass current preferentially from cell A to B.",
    wrongExplanations: [
      "",
      "“Myelin blocks reverse current” does not match the mechanism (topic: Electrical Synapses). Some gap junctions pass current preferentially from cell A to B. The correct choice—“Connexon subunit composition creates voltage-dependent asymmetry”—fits that description.",
      "“Myelin thickness alone determines saltatory conduction velocity” does not match the mechanism (topic: Electrical Synapses). Some gap junctions pass current preferentially from cell A to B. The correct choice—“Connexon subunit composition creates voltage-dependent asymmetry”—fits that description.",
      "“SNARE proteins orient vesicles” does not match the mechanism (topic: Electrical Synapses). Some gap junctions pass current preferentially from cell A to B. The correct choice—“Connexon subunit composition creates voltage-dependent asymmetry”—fits that description.",
    ]
  },
  {
    topic: "Retrograde Signaling",
    question: "Endocannabinoids can act retrogradely to:",
    options: [

      "Suppress presynaptic neurotransmitter release after strong postsynaptic activity",
      "Open nAChR at the NMJ",
      "Generate action potentials in myelin",
      "Replace glutamate in vesicles",
    ],
    correct: 0,
    explanation: "Postsynaptically produced endocannabinoids often inhibit presynaptic release.",
    wrongExplanations: [
      "",
      "“Open nAChR at the NMJ” does not match the mechanism (topic: Retrograde Signaling). Postsynaptically produced endocannabinoids often inhibit presynaptic release. The correct choice—“Suppress presynaptic neurotransmitter release after strong postsynaptic activity”—fits that description.",
      "“Generate action potentials in myelin” does not match the mechanism (topic: Retrograde Signaling). Postsynaptically produced endocannabinoids often inhibit presynaptic release. The correct choice—“Suppress presynaptic neurotransmitter release after strong postsynaptic activity”—fits that description.",
      "“Replace glutamate in vesicles” does not match the mechanism (topic: Retrograde Signaling). Postsynaptically produced endocannabinoids often inhibit presynaptic release. The correct choice—“Suppress presynaptic neurotransmitter release after strong postsynaptic activity”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "The active zone is specialized for:",
    options: [

      "Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors",
      "Myelin formation",
      "Action potential initiation in dendrites as the primary route",
      "Phototransduction",
    ],
    correct: 0,
    explanation: "Active zones align release machinery with receptor clusters.",
    wrongExplanations: [
      "",
      "“Myelin formation” does not match the mechanism (topic: Synaptic Anatomy). Active zones align release machinery with receptor clusters. The correct choice—“Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active zones align release machinery with receptor clusters.",
      "“Phototransduction” does not match the mechanism (topic: Synaptic Anatomy). Active zones align release machinery with receptor clusters. The correct choice—“Vesicle docking and Ca²⁺-triggered fusion opposite postsynaptic receptors”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Anatomy",
    question: "Postsynaptic density (PSD) is enriched in:",
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
    question: "E/I balance refers to:",
    options: [

      "Relative levels of excitatory and inhibitory synaptic drive onto a neuron",
      "Equal numbers of axons and dendrites anatomically",
      "Requires gABAergic monosynaptic reflexes",
      "Myelin equal to axon diameter",
    ],
    correct: 0,
    explanation: "Circuit function depends on balanced excitation and inhibition.",
    wrongExplanations: [
      "",
      "“Equal numbers of axons and dendrites anatomically” does not match the mechanism (topic: Excitatory-Inhibitory Balance). Circuit function depends on balanced excitation and inhibition. The correct choice—“Relative levels of excitatory and inhibitory synaptic drive onto a neuron”—fits that description.",
      "“Requires gABAergic monosynaptic reflexes” does not match the mechanism (topic: Excitatory-Inhibitory Balance). Circuit function depends on balanced excitation and inhibition. The correct choice—“Relative levels of excitatory and inhibitory synaptic drive onto a neuron”—fits that description.",
      "“Myelin equal to axon diameter” does not match the mechanism (topic: Excitatory-Inhibitory Balance). Circuit function depends on balanced excitation and inhibition. The correct choice—“Relative levels of excitatory and inhibitory synaptic drive onto a neuron”—fits that description.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Benzodiazepines enhance GABA<sub>A</sub> signaling by:",
    options: [

      "Increasing frequency of channel opening (allosteric modulation)",
      "Blocking GABA synthesis irreversibly",
      "Opening NMDA receptors",
      "Preventing Cl⁻ flux",
    ],
    correct: 0,
    explanation: "BZDs bind allosteric sites to potentiate GABA<sub>A</sub> responses.",
    wrongExplanations: [
      "",
      "“Blocking GABA synthesis irreversibly” does not match the mechanism (topic: Drug Effects). BZDs bind allosteric sites to potentiate GABAA responses. The correct choice—“Increasing frequency of channel opening (allosteric modulation)”—fits that description.",
      "“Opening NMDA receptors” does not match the mechanism (topic: Drug Effects). BZDs bind allosteric sites to potentiate GABAA responses. The correct choice—“Increasing frequency of channel opening (allosteric modulation)”—fits that description.",
      "“Preventing Cl⁻ flux” does not match the mechanism (topic: Drug Effects). BZDs bind allosteric sites to potentiate GABAA responses. The correct choice—“Increasing frequency of channel opening (allosteric modulation)”—fits that description.",
    ]
  },
  {
    topic: "Drug Effects",
    question: "Strychnine causes convulsions by blocking:",
    options: [

      "Glycine receptors",
      "AMPA receptors in retina",
      "Voltage-gated K⁺ in nodes as the primary route",
      "Connexins in heart as the primary route",
    ],
    correct: 0,
    explanation: "Loss of glycinergic inhibition leads to uncontrolled motor activity.",
    wrongExplanations: [
      "",
      "“AMPA receptors in retina” does not match the mechanism (topic: Drug Effects). Loss of glycinergic inhibition leads to uncontrolled motor activity. The correct choice—“Glycine receptors”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Loss of glycinergic inhibition leads to uncontrolled motor activity.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Loss of glycinergic inhibition leads to uncontrolled motor activity.",
    ]
  },
  {
    topic: "Peptide Transmitters",
    question: "Neuropeptides differ from classical transmitters because they:",
    options: [

      "Are often co-released, act on GPCRs, and can have long-lasting effects",
      "Often use ionotropic pores with sub-ms kinetics as the primary route",
      "Are stored mainly in mitochondria",
      "Cannot be released by activity",
    ],
    correct: 0,
    explanation: "Peptides modulate circuits over longer ranges and timescales.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate circuits over longer ranges and timescales.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate circuits over longer ranges and timescales.",
      "“Cannot be released by activity” does not match the mechanism (topic: Peptide Transmitters). Peptides modulate circuits over longer ranges and timescales. The correct choice—“Are often co-released, act on GPCRs, and can have long-lasting effects”—fits that description.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Acetylcholinesterase in the synaptic cleft:",
    options: [

      "Hydrolyzes ACh to terminate the endplate potential",
      "Synthesizes ACh from glutamate",
      "Opens K⁺ channels directly",
      "Myelinates the motor axon",
    ],
    correct: 0,
    explanation: "Rapid ACh breakdown keeps NMJ signaling brief.",
    wrongExplanations: [
      "",
      "“Synthesizes ACh from glutamate” does not match the mechanism (topic: Neuromuscular Junction). Rapid ACh breakdown keeps NMJ signaling brief. The correct choice—“Hydrolyzes ACh to terminate the endplate potential”—fits that description.",
      "“Opens K⁺ channels directly” does not match the mechanism (topic: Neuromuscular Junction). Rapid ACh breakdown keeps NMJ signaling brief. The correct choice—“Hydrolyzes ACh to terminate the endplate potential”—fits that description.",
      "“Myelinates the motor axon” does not match the mechanism (topic: Neuromuscular Junction). Rapid ACh breakdown keeps NMJ signaling brief. The correct choice—“Hydrolyzes ACh to terminate the endplate potential”—fits that description.",
    ]
  },
  {
    topic: "Neuromuscular Junction",
    question: "Curare-like drugs block NMJ transmission by:",
    options: [

      "Competitive antagonism at nicotinic ACh receptors",
      "Blocking voltage-gated Na⁺ in muscle T-tubules as the primary route often",
      "Preventing action potentials in motor cortex as the primary route",
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
    question: "A neuron releasing both glutamate and a neuropeptide illustrates:",
    options: [

      "Co-transmission with fast and slow signaling components",
      "Requires electrical coupling",
      "Purely retrograde dopamine signaling",
      "Myelin-mediated transmission",
    ],
    correct: 0,
    explanation: "Many neurons co-release multiple transmitters/modulators.",
    wrongExplanations: [
      "",
      "“Requires electrical coupling” does not match the mechanism (topic: Co-transmission). Many neurons co-release multiple transmitters/modulators. The correct choice—“Co-transmission with fast and slow signaling components”—fits that description.",
      "“Purely retrograde dopamine signaling” does not match the mechanism (topic: Co-transmission). Many neurons co-release multiple transmitters/modulators. The correct choice—“Co-transmission with fast and slow signaling components”—fits that description.",
      "“Myelin-mediated transmission” does not match the mechanism (topic: Co-transmission). Many neurons co-release multiple transmitters/modulators. The correct choice—“Co-transmission with fast and slow signaling components”—fits that description.",
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Disinhibition occurs when:",
    options: [

      "Inhibition of an interneuron releases a target from suppression",
      "Most GABA neurons are removed globally",
      "Requires aMPA receptors activate",
      "Myelin is added to interneurons",
    ],
    correct: 0,
    explanation: "Removing inhibitory input on a neuron can increase its activity.",
    wrongExplanations: [
      "",
      "“All GABA neurons are removed globally” does not match the mechanism (topic: Inhibitory Circuits). Removing inhibitory input on a neuron can increase its activity. The correct choice—“Inhibition of an interneuron releases a target from suppression”—fits that description.",
      "“Requires aMPA receptors activate” does not match the mechanism (topic: Inhibitory Circuits). Removing inhibitory input on a neuron can increase its activity. The correct choice—“Inhibition of an interneuron releases a target from suppression”—fits that description.",
      "“Myelin is added to interneurons” does not match the mechanism (topic: Inhibitory Circuits). Removing inhibitory input on a neuron can increase its activity. The correct choice—“Inhibition of an interneuron releases a target from suppression”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Spike-timing-dependent plasticity (STDP) depends on:",
    options: [

      "Order and timing of pre- and postsynaptic spikes",
      "Requires ambient temperature",
      "Myelin length",
      "Olfactory receptor choice",
    ],
    correct: 0,
    explanation: "Millisecond-scale timing windows determine LTP vs LTD.",
    wrongExplanations: [
      "",
      "“Requires ambient temperature” does not match the mechanism (topic: Synaptic Plasticity Rules). Millisecond-scale timing windows determine LTP vs LTD. The correct choice—“Order and timing of pre- and postsynaptic spikes”—fits that description.",
      "“Myelin length” does not match the mechanism (topic: Synaptic Plasticity Rules). Millisecond-scale timing windows determine LTP vs LTD. The correct choice—“Order and timing of pre- and postsynaptic spikes”—fits that description.",
      "“Olfactory receptor choice” does not match the mechanism (topic: Synaptic Plasticity Rules). Millisecond-scale timing windows determine LTP vs LTD. The correct choice—“Order and timing of pre- and postsynaptic spikes”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "Presynaptic LTP at the crayfish neuromuscular junction involves:",
    options: [

      "Increased quantal release (presynaptic mechanism)",
      "Postsynaptic receptor insertion often",
      "Gap junction doubling",
      "Photoreceptor adaptation",
    ],
    correct: 0,
    explanation: "Classic example of presynaptic enhancement of release probability.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Classic example of presynaptic enhancement of release probability.",
      "“Gap junction doubling” does not match the mechanism (topic: Synaptic Plasticity Rules). Classic example of presynaptic enhancement of release probability. The correct choice—“Increased quantal release (presynaptic mechanism)”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Classic example of presynaptic enhancement of release probability.",
    ]
  },
  {
    topic: "Integration",
    question: "An IPSP arriving at the soma during an EPSP can:",
    options: [

      "Reduce net depolarization and prevent threshold crossing",
      "Often increase Na⁺ influx",
      "Eliminate resting potential permanently",
      "Convert the cell to photoreceptor function",
    ],
    correct: 0,
    explanation: "Inhibition subtracts from excitation in integration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibition subtracts from excitation in integration.",
      "“Eliminate resting potential permanently” does not match the mechanism (topic: Integration). Inhibition subtracts from excitation in integration. The correct choice—“Reduce net depolarization and prevent threshold crossing”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Inhibition subtracts from excitation in integration.",
    ]
  },
  {
    topic: "Integration",
    question: "Dendritic spikes in some neurons can:",
    options: [

      "Boost local depolarization and influence somatic output",
      "Occur in unmyelinated sensory axons often",
      "Replace all chemical synapses",
      "Block all K⁺ channels globally",
    ],
    correct: 0,
    explanation: "Active dendritic conductances can nonlinearly amplify inputs.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Active dendritic conductances can nonlinearly amplify inputs.",
      "“Replace all chemical synapses” does not match the mechanism (topic: Integration). Active dendritic conductances can nonlinearly amplify inputs. The correct choice—“Boost local depolarization and influence somatic output”—fits that description.",
      "“Block all K⁺ channels globally” does not match the mechanism (topic: Integration). Active dendritic conductances can nonlinearly amplify inputs. The correct choice—“Boost local depolarization and influence somatic output”—fits that description.",
    ]
  },
  {
    topic: "Circuit Modulation",
    question: "Acetylcholine in cortex during wakefulness tends to:",
    options: [

      "Increase responsiveness and modulate attention via muscarinic and nicotinic receptors",
      "Silence all thalamocortical input permanently",
      "Replace glutamate at many synapse",
      "Requires hyperpolarize via GABA<sub>B</sub>",
    ],
    correct: 0,
    explanation: "ACh neuromodulation supports arousal and cortical processing.",
    wrongExplanations: [
      "",
      "“Silence all thalamocortical input permanently” does not match the mechanism (topic: Circuit Modulation). ACh neuromodulation supports arousal and cortical processing. The correct choice—“Increase responsiveness and modulate attention via muscarinic and nicotinic receptors”—fits that description.",
      "“Replace glutamate at every synapse” does not match the mechanism (topic: Circuit Modulation). ACh neuromodulation supports arousal and cortical processing. The correct choice—“Increase responsiveness and modulate attention via muscarinic and nicotinic receptors”—fits that description.",
      "“Requires hyperpolarize via GABAB” does not match the mechanism (topic: Circuit Modulation). ACh neuromodulation supports arousal and cortical processing. The correct choice—“Increase responsiveness and modulate attention via muscarinic and nicotinic receptors”—fits that description.",
    ]
  }
];

const PART3_EXTRA_POOL = [
  {
    topic: "Phototransduction",
    question: "In darkness, vertebrate photoreceptors are depolarized because:",
    options: [

      "Cyclic nucleotide-gated channels pass cation influx (dark current)",
      "Rhodopsin maximally activates transducin often",
      "Voltage-gated Na⁺ channels drive the photoreceptor dark current",
      "Myelin wraps the outer segment",
    ],
    correct: 0,
    explanation: "High cGMP keeps channels open; light lowers cGMP and hyperpolarizes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: High cGMP keeps channels open; light lowers cGMP and hyperpolarizes.",
      "“Voltage-gated Na⁺ channels drive the photoreceptor dark current” does not match the mechanism (topic: Phototransduction). High cGMP keeps channels open; light lowers cGMP and hyperpolarizes. The correct choice—“Cyclic nucleotide-gated channels pass cation influx (dark current)”—fits that description.",
      "“Myelin wraps the outer segment” does not match the mechanism (topic: Phototransduction). High cGMP keeps channels open; light lowers cGMP and hyperpolarizes. The correct choice—“Cyclic nucleotide-gated channels pass cation influx (dark current)”—fits that description.",
    ]
  },
  {
    topic: "Phototransduction",
    question: "Light activation of rhodopsin leads to:",
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
      "“Immediate opening of all voltage-gated Na⁺ in myelin” does not match the mechanism (topic: Phototransduction). Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell. The correct choice—“Reduced cGMP and closure of cGMP-gated channels”—fits that description.",
      "“Sustained depolarization and increased glutamate release” does not match the mechanism (topic: Phototransduction). Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell. The correct choice—“Reduced cGMP and closure of cGMP-gated channels”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Photon absorption activates transducin/phosphodiesterase, dropping cGMP and hyperpolarizing the cell.",
    ]
  },
  {
    topic: "Retinal Circuitry",
    question: "Horizontal cells provide lateral inhibition that contributes to:",
    options: [

      "Center-surround receptive fields",
      "Saltatory conduction in optic nerve as the primary route",
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
    question: "Ganglion cells encode visual information primarily as:",
    options: [

      "Patterns of action potentials (rate and timing)",
      "Graded muscle contractions",
      "Direct myelin thickness changes",
      "Requires peptide release without spikes",
    ],
    correct: 0,
    explanation: "Retinal output is spiking activity in optic nerve fibers.",
    wrongExplanations: [
      "",
      "“Graded muscle contractions” does not match the mechanism (topic: Visual System). Retinal output is spiking activity in optic nerve fibers. The correct choice—“Patterns of action potentials (rate and timing)”—fits that description.",
      "“Direct myelin thickness changes” does not match the mechanism (topic: Visual System). Retinal output is spiking activity in optic nerve fibers. The correct choice—“Patterns of action potentials (rate and timing)”—fits that description.",
      "“Requires peptide release without spikes” does not match the mechanism (topic: Visual System). Retinal output is spiking activity in optic nerve fibers. The correct choice—“Patterns of action potentials (rate and timing)”—fits that description.",
    ]
  },
  {
    topic: "Visual System",
    question: "Magnocellular pathway neurons generally prefer:",
    options: [

      "High temporal frequency and motion (coarse detail)",
      "Fine color static patterns as the primary route",
      "Olfactory combinations",
      "Proprioception from muscle spindles",
    ],
    correct: 0,
    explanation: "M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast).",
      "“Olfactory combinations” does not match the mechanism (topic: Visual System). M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast). The correct choice—“High temporal frequency and motion (coarse detail)”—fits that description.",
      "“Proprioception from muscle spindles” does not match the mechanism (topic: Visual System). M pathway: motion/transient; P pathway: color/fine detail (MCB80x contrast). The correct choice—“High temporal frequency and motion (coarse detail)”—fits that description.",
    ]
  },
  {
    topic: "Visual System",
    question: "Parvocellular LGN neurons project mainly to:",
    options: [

      "Primary visual cortex (V1) layer 4Cβ",
      "Cerebellar cortex as the primary route",
      "Spinal cord ventral horn primarily",
      "Olfactory bulb",
    ],
    correct: 0,
    explanation: "P cells drive detailed form/color processing in V1.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: P cells drive detailed form/color processing in V1.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: P cells drive detailed form/color processing in V1.",
      "“Olfactory bulb” does not match the mechanism (topic: Visual System). P cells drive detailed form/color processing in V1. The correct choice—“Primary visual cortex (V1) layer 4Cβ”—fits that description.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Orientation selectivity in V1 simple cells arises partly from:",
    options: [

      "Spatially offset ON/OFF subregions in receptive fields",
      "Random channel noise as the primary route",
      "Myelin orientation",
      "Cochlear tonotopy",
    ],
    correct: 0,
    explanation: "Hubel & Wiesel: elongated subfields produce orientation tuning.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hubel & Wiesel: elongated subfields produce orientation tuning.",
      "“Myelin orientation” does not match the mechanism (topic: Visual Cortex). Hubel & Wiesel: elongated subfields produce orientation tuning. The correct choice—“Spatially offset ON/OFF subregions in receptive fields”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Visual Cortex",
    question: "Binocular disparity sensitive neurons are important for:",
    options: [

      "Depth perception (stereopsis)",
      "Smell discrimination",
      "Balance reflexes as the primary route",
      "Pain gate control primarily",
    ],
    correct: 0,
    explanation: "Disparity-tuned cells in visual cortex support 3D vision.",
    wrongExplanations: [
      "",
      "“Smell discrimination” does not match the mechanism (topic: Visual Cortex). Disparity-tuned cells in visual cortex support 3D vision. The correct choice—“Depth perception (stereopsis)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disparity-tuned cells in visual cortex support 3D vision.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Disparity-tuned cells in visual cortex support 3D vision.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Frequency tuning in the cochlea basilar membrane follows:",
    options: [

      "Tonotopic organization (location maps frequency)",
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
    question: "Inner hair cells transduce sound via:",
    options: [

      "Mechanotransduction channels opened by tip-link tension",
      "Rhodopsin and cGMP",
      "Nicotinic ACh at NMJ",
      "Gap junctions to photoreceptors",
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
    question: "Superior olivary nuclei compute:",
    options: [

      "Sound localization cues (ITD and ILD)",
      "Color opponency",
      "Olfactory adaptation as the primary route",
      "Cerebellar motor learning primarily",
    ],
    correct: 0,
    explanation: "Binaural processing in SOC supports localization.",
    wrongExplanations: [
      "",
      "“Color opponency” does not match the mechanism (topic: Auditory Pathway). Binaural processing in SOC supports localization. The correct choice—“Sound localization cues (ITD and ILD)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Binaural processing in SOC supports localization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Binaural processing in SOC supports localization.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Meissner corpuscles in skin are most sensitive to:",
    options: [

      "Light touch and flutter (low-amplitude movement)",
      "Deep pressure as the primary route",
      "No temperature change ever",
      "Visual motion",
    ],
    correct: 0,
    explanation: "Meissner endings detect fine tactile vibrations.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Meissner endings detect fine tactile vibrations.",
      "“No temperature change ever” does not match the mechanism (topic: Somatosensation). Meissner endings detect fine tactile vibrations. The correct choice—“Light touch and flutter (low-amplitude movement)”—fits that description.",
      "“Visual motion” does not match the mechanism (topic: Somatosensation). Meissner endings detect fine tactile vibrations. The correct choice—“Light touch and flutter (low-amplitude movement)”—fits that description.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Pacinian corpuscles respond best to:",
    options: [

      "High-frequency vibration and deep pressure transients",
      "Static hair position as the primary route",
      "Bitter taste",
      "Red-green color opponency",
    ],
    correct: 0,
    explanation: "Pacinian fibers are rapidly adapting vibration detectors.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Pacinian fibers are rapidly adapting vibration detectors.",
      "“Bitter taste” does not match the mechanism (topic: Somatosensation). Pacinian fibers are rapidly adapting vibration detectors. The correct choice—“High-frequency vibration and deep pressure transients”—fits that description.",
      "“Red-green color opponency” does not match the mechanism (topic: Somatosensation). Pacinian fibers are rapidly adapting vibration detectors. The correct choice—“High-frequency vibration and deep pressure transients”—fits that description.",
    ]
  },
  {
    topic: "Somatosensation",
    question: "Free nerve endings often mediate:",
    options: [

      "Pain and temperature sensation",
      "Main mechanism: proprioception from muscle spindles",
      "Phototransduction",
      "Cochlear amplification",
    ],
    correct: 0,
    explanation: "Nociceptors and thermoreceptors are unencapsulated endings.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Nociceptors and thermoreceptors are unencapsulated endings.",
      "“Phototransduction” does not match the mechanism (topic: Somatosensation). Nociceptors and thermoreceptors are unencapsulated endings. The correct choice—“Pain and temperature sensation”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Pain",
    question: "Nociceptive Aδ fibers are:",
    options: [

      "Myelinated and conduct sharp, fast pain",
      "Unmyelinated C fibers primarily",
      "Requires found in retina",
      "Purely electrical synapses",
    ],
    correct: 0,
    explanation: "Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain.",
      "“Requires found in retina” does not match the mechanism (topic: Pain). Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain. The correct choice—“Myelinated and conduct sharp, fast pain”—fits that description.",
      "“Purely electrical synapses” does not match the mechanism (topic: Pain). Aδ fibers mediate first, localized pain; C fibers mediate slow burning pain. The correct choice—“Myelinated and conduct sharp, fast pain”—fits that description.",
    ]
  },
  {
    topic: "Pain",
    question: "Gate control theory proposes:",
    options: [

      "Spinal circuitry can modulate pain transmission",
      "Pain is purely cortical with no spinal component",
      "Main mechanism: myelin gates pain often open",
      "NMDA is absent in pain pathways",
    ],
    correct: 0,
    explanation: "Inhibitory interneurons in dorsal horn can gate pain signals.",
    wrongExplanations: [
      "",
      "“Pain is purely cortical with no spinal component” does not match the mechanism (topic: Pain). Inhibitory interneurons in dorsal horn can gate pain signals. The correct choice—“Spinal circuitry can modulate pain transmission”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Inhibitory interneurons in dorsal horn can gate pain signals.",
      "“NMDA is absent in pain pathways” does not match the mechanism (topic: Pain). Inhibitory interneurons in dorsal horn can gate pain signals. The correct choice—“Spinal circuitry can modulate pain transmission”—fits that description.",
    ]
  },
  {
    topic: "Proprioception",
    question: "Golgi tendon organs signal:",
    options: [

      "Muscle tension (force) at the tendon",
      "Retinal illuminance",
      "Olfactory concentration as the primary route",
      "Cochlear phase",
    ],
    correct: 0,
    explanation: "GTOs inhibit excessive force via Ib afferents.",
    wrongExplanations: [
      "",
      "“Retinal illuminance” does not match the mechanism (topic: Proprioception). GTOs inhibit excessive force via Ib afferents. The correct choice—“Muscle tension (force) at the tendon”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: GTOs inhibit excessive force via Ib afferents.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Olfactory System",
    question: "Mitral/tufted cells in the bulb send output to:",
    options: [

      "Olfactory cortex",
      "Primary visual cortex primarily",
      "Cochlear nucleus as the primary route",
      "Spinal motor pools as the primary route",
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
    question: "Umami taste is transduced largely through:",
    options: [

      "T1R1/T1R3 heterodimer taste GPCRs on taste receptor cells",
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
    question: "The blood-brain barrier restricts passage mainly at:",
    options: [

      "Cerebral endothelial tight junctions (with astrocyte endfeet support)",
      "Nodes of Ranvier primarily (localizes the function to the wrong brain region)",
      "Photoreceptor outer segments as the primary route (localizes the function to the wrong brain region)",
      "NMJ synaptic cleft (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Endothelial tight junctions limit paracellular diffusion into CNS.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Endothelial tight junctions limit paracellular diffusion into CNS.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“NMJ synaptic cleft (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). Endothelial tight junctions limit paracellular diffusion into CNS. The correct choice—“Cerebral endothelial tight junctions (with astrocyte endfeet support)”—fits that description.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "White matter primarily contains:",
    options: [

      "Myelinated axon tracts",
      "Neuronal cell bodies as the primary route",
      "Photoreceptor layers",
      "Taste bud cells",
    ],
    correct: 0,
    explanation: "White matter is axons; gray matter is cell bodies and neuropil.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: White matter is axons; gray matter is cell bodies and neuropil.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Taste bud cells” does not match the mechanism (topic: Neuroanatomy). White matter is axons; gray matter is cell bodies and neuropil. The correct choice—“Myelinated axon tracts”—fits that description.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum connects:",
    options: [

      "Left and right cerebral hemispheres",
      "Spinal cord to cerebellum as the primary route (localizes the function to the wrong brain region)",
      "Cochlea to retina (localizes the function to the wrong brain region)",
      "Olfactory bulb to tongue (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Commissural fibers integrate bilateral cortex.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Commissural fibers integrate bilateral cortex.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory bulb to tongue (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). Commissural fibers integrate bilateral cortex. The correct choice—“Left and right cerebral hemispheres”—fits that description.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Basal ganglia loops (cortex–striatum–GP/SN–thalamus) are critical for:",
    options: [

      "Action selection and habit learning",
      "Phototransduction primarily (localizes the function to the wrong brain region)",
      "Cochlear tuning as the primary route (localizes the function to the wrong brain region)",
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
    question: "The hippocampus is essential for many forms of:",
    options: [

      "Declarative (explicit) memory formation",
      "Primary visual color opponency as the primary route",
      "Cochlear amplification",
      "Reflexive withdrawal as the primary route without learning",
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
    question: "Cerebellum is heavily involved in:",
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
      "“Initial phototransduction (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). Cerebellar circuits fine-tune movement and timing. The correct choice—“Error correction, coordination, and some forms of motor learning”—fits that description.",
      "“Olfactory receptor choice (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). Cerebellar circuits fine-tune movement and timing. The correct choice—“Error correction, coordination, and some forms of motor learning”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cerebellar circuits fine-tune movement and timing.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "Thalamus functions as:",
    options: [

      "A relay and gate for sensory information to cortex (and cortical loops)",
      "The sole site of rhodopsin expression (localizes the function to the wrong brain region)",
      "Myelin factory for peripheral nerves as the primary route (localizes the function to the wrong brain region)",
      "Main mechanism: respiratory CPG without sensory role (localizes the function to the wrong brain region)",
    ],
    correct: 0,
    explanation: "Thalamic nuclei route sensory and motor-related signals.",
    wrongExplanations: [
      "",
      "“The sole site of rhodopsin expression (localizes the function to the wrong brain reg…” does not match the mechanism (topic: Neuroanatomy). Thalamic nuclei route sensory and motor-related signals. The correct choice—“A relay and gate for sensory information to cortex (and cortical loops)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei route sensory and motor-related signals.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Thalamic nuclei route sensory and motor-related signals.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Lower motor neurons in ventral horn:",
    options: [

      "Innervate skeletal muscle fibers directly",
      "Project to LGN as the primary route (maps the lesion to the wrong motor pathway or reflex)",
      "Encode sound frequency (maps the lesion to the wrong motor pathway or reflex)",
      "Release rhodopsin (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "LMNs are the final common path to muscle.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: LMNs are the final common path to muscle.",
      "“Encode sound frequency (maps the lesion to the wrong motor pathway or reflex)” does not match the mechanism (topic: Motor Systems). LMNs are the final common path to muscle. The correct choice—“Innervate skeletal muscle fibers directly”—fits that description.",
      "“Release rhodopsin (maps the lesion to the wrong motor pathway or reflex)” does not match the mechanism (topic: Motor Systems). LMNs are the final common path to muscle. The correct choice—“Innervate skeletal muscle fibers directly”—fits that description.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The stretch reflex (myotatic reflex) is monosynaptic between:",
    options: [

      "Ia afferent and α motor neuron",
      "Retinal bipolar and ganglion cell",
      "Cochlear inner hair cell and olivary cell as the primary route",
      "Olfactory OSN and mitral cell primarily for stretch",
    ],
    correct: 0,
    explanation: "Stretch activates spindles → Ia synapses on homonymous motoneurons.",
    wrongExplanations: [
      "",
      "“Retinal bipolar and ganglion cell” does not match the mechanism (topic: Motor Systems). Stretch activates spindles → Ia synapses on homonymous motoneurons. The correct choice—“Ia afferent and α motor neuron”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Stretch activates spindles → Ia synapses on homonymous motoneurons.",
    ]
  },
  {
    topic: "Brain Function",
    question: "Prefrontal cortex is associated with:",
    options: [

      "Working memory, planning, and executive control",
      "Cochlear basilar stiffness as the primary route",
      "Rhodopsin regeneration primarily",
      "Pacinian vibration transduction",
    ],
    correct: 0,
    explanation: "PFC supports higher cognitive control and working memory.",
    wrongExplanations: [
      "",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: PFC supports higher cognitive control and working memory.",
      "“Pacinian vibration transduction” does not match the mechanism (topic: Brain Function). PFC supports higher cognitive control and working memory. The correct choice—“Working memory, planning, and executive control”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Working memory differs from long-term memory in that it:",
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
      "“Is stored permanently after one spike” does not match the mechanism (topic: Learning & Memory). Working memory is temporary; LTM involves lasting synaptic/anatomic changes. The correct choice—“Holds information transiently for ongoing behavior”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Working memory is temporary; LTM involves lasting synaptic/anatomic changes.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is typically associated with:",
    options: [

      "Hippocampus and medial temporal lobe structures",
      "Cerebellar cortex for all memories",
      "Cochlear nucleus primarily",
      "Skin Meissner corpuscles",
    ],
    correct: 0,
    explanation: "Explicit facts/events depend on medial temporal lobe circuits.",
    wrongExplanations: [
      "",
      "“Requires cerebellar cortex for all memories” does not match the mechanism (topic: Learning & Memory). Explicit facts/events depend on medial temporal lobe circuits. The correct choice—“Hippocampus and medial temporal lobe structures”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Skin Meissner corpuscles” does not match the mechanism (topic: Learning & Memory). Explicit facts/events depend on medial temporal lobe circuits. The correct choice—“Hippocampus and medial temporal lobe structures”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Procedural memory (skills/habits) involves strongly:",
    options: [

      "Basal ganglia and cerebellum among other areas",
      "Requires retina photoreceptors",
      "Olfactory glomeruli alone",
      "Free nerve endings primarily",
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
      "“Tonotopic mapping” does not match the mechanism (topic: Learning & Memory). Amygdala modulates emotional memory strength. The correct choice—“Emotional salience and fear conditioning associations”—fits that description.",
      "“Assigns an unrelated sensory or synaptic mechanism to this context” does not match the mechanism (topic: Learning & Memory). Amygdala modulates emotional memory strength. The correct choice—“Emotional salience and fear conditioning associations”—fits that description.",
      "“NMJ acetylcholinesterase” does not match the mechanism (topic: Learning & Memory). Amygdala modulates emotional memory strength. The correct choice—“Emotional salience and fear conditioning associations”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Consolidation transfers labile memory to stable storage over:",
    options: [

      "Hours to years via systems and synaptic mechanisms",
      "One millisecond as the primary route",
      "During sleep seldom",
      "Requires in myelin",
    ],
    correct: 0,
    explanation: "Consolidation includes synaptic and systems-level reorganization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation includes synaptic and systems-level reorganization.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Consolidation includes synaptic and systems-level reorganization.",
      "“Requires in myelin” does not match the mechanism (topic: Learning & Memory). Consolidation includes synaptic and systems-level reorganization. The correct choice—“Hours to years via systems and synaptic mechanisms”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Morris water maze tests primarily:",
    options: [

      "Spatial learning dependent on hippocampus in rodents",
      "Color vision in flies as the primary route",
      "Cochlear phase locking primarily",
      "Olfactory one-receptor rule",
    ],
    correct: 0,
    explanation: "Hidden platform task assesses hippocampal-dependent navigation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Hidden platform task assesses hippocampal-dependent navigation.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Olfactory one-receptor rule” does not match the mechanism (topic: Learning & Memory). Hidden platform task assesses hippocampal-dependent navigation. The correct choice—“Spatial learning dependent on hippocampus in rodents”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Patient H.M.-like medial temporal lobe damage impairs:",
    options: [

      "New declarative memories while leaving much procedural learning intact",
      "Most sensation including touch",
      "Myelin formation in CNS",
      "Dark current in photoreceptors",
    ],
    correct: 0,
    explanation: "Classic dissociation: anterograde declarative amnesia with spared skills.",
    wrongExplanations: [
      "",
      "“All sensation including touch” does not match the mechanism (topic: Learning & Memory). Classic dissociation: anterograde declarative amnesia with spared skills. The correct choice—“New declarative memories while leaving much procedural learning intact”—fits that description.",
      "“Myelin formation in CNS” does not match the mechanism (topic: Learning & Memory). Classic dissociation: anterograde declarative amnesia with spared skills. The correct choice—“New declarative memories while leaving much procedural learning intact”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Protein synthesis is often required for:",
    options: [

      "Long-lasting LTP/LTM (late phase), not early short-term changes only",
      "Immediate reflex arcs as the primary route",
      "Photoreceptor bleaching",
      "Passive membrane τ",
    ],
    correct: 0,
    explanation: "Late LTP and long-term memory need gene expression and new proteins.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Late LTP and long-term memory need gene expression and new proteins.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“Passive membrane τ” does not match the mechanism (topic: Synaptic Basis of Memory). Late LTP and long-term memory need gene expression and new proteins. The correct choice—“Long-lasting LTP/LTM (late phase), not early short-term changes only”—fits that description.",
    ]
  },
  {
    topic: "Synaptic Basis of Memory",
    question: "Engram cells refer to:",
    options: [

      "Neurons whose activity participates in storing a specific memory trace",
      "Requires glial cells in white matter",
      "Cochlear outer hair cells primarily",
      "Most nociceptors broadly",
    ],
    correct: 0,
    explanation: "Ensemble of neurons physically underlying a memory.",
    wrongExplanations: [
      "",
      "“Requires glial cells in white matter” does not match the mechanism (topic: Synaptic Basis of Memory). Ensemble of neurons physically underlying a memory. The correct choice—“Neurons whose activity participates in storing a specific memory trace”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
      "“All nociceptors uniformly” does not match the mechanism (topic: Synaptic Basis of Memory). Ensemble of neurons physically underlying a memory. The correct choice—“Neurons whose activity participates in storing a specific memory trace”—fits that description.",
    ]
  },
  {
    topic: "Sensory Integration",
    question: "Multisensory integration in superior colliculus can produce:",
    options: [

      "Enhanced responses when auditory and visual stimuli coincide spatially",
      "Weaker colliculus responses when auditory and visual cues align in space",
      "Multisensory integration confined to primary visual cortex (V1) as the primary route",
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
    question: "Semicircular canals detect:",
    options: [

      "Angular acceleration of the head",
      "Static linear gravity as the primary route without motion",
      "Bitter taste intensity",
      "Retinal contrast",
    ],
    correct: 0,
    explanation: "Canal hair cells respond to rotational head movements.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Canal hair cells respond to rotational head movements.",
      "“Bitter taste intensity” does not match the mechanism (topic: Balance). Canal hair cells respond to rotational head movements. The correct choice—“Angular acceleration of the head”—fits that description.",
      "“Retinal contrast” does not match the mechanism (topic: Balance). Canal hair cells respond to rotational head movements. The correct choice—“Angular acceleration of the head”—fits that description.",
    ]
  },
  {
    topic: "Balance",
    question: "Utricle and saccule detect:",
    options: [

      "Linear acceleration and head tilt (otolith organs)",
      "High-frequency sound as the primary route",
      "Olfactory concentration",
      "Color wavelength primarily",
    ],
    correct: 0,
    explanation: "Otoliths sense gravity and linear acceleration.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Otoliths sense gravity and linear acceleration.",
      "“Olfactory concentration” does not match the mechanism (topic: Balance). Otoliths sense gravity and linear acceleration. The correct choice—“Linear acceleration and head tilt (otolith organs)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Otoliths sense gravity and linear acceleration.",
    ]
  },
  {
    topic: "Development",
    question: "Activity-dependent refinement of visual maps (e.g., ocular dominance) illustrates:",
    options: [

      "Hebbian/plastic mechanisms shaping circuits during critical periods",
      "Fixed wiring with zero experience dependence often",
      "Requires myelin growth without synapses",
      "Olfactory receptor switching each hour",
    ],
    correct: 0,
    explanation: "Experience shapes connectivity during development (MCB80x visual system).",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Experience shapes connectivity during development (MCB80x visual system).",
      "“Requires myelin growth without synapses” does not match the mechanism (topic: Development). Experience shapes connectivity during development (MCB80x visual system). The correct choice—“Hebbian/plastic mechanisms shaping circuits during critical periods”—fits that description.",
      "“Olfactory receptor switching each hour” does not match the mechanism (topic: Development). Experience shapes connectivity during development (MCB80x visual system). The correct choice—“Hebbian/plastic mechanisms shaping circuits during critical periods”—fits that description.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia typically reflects dysfunction in:",
    options: [

      "Fusiform face area / ventral visual stream",
      "Cochlear nucleus as the primary route",
      "Stretch reflex arc primarily",
      "NMJ acetylcholine release as the primary route",
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
    question: "Hemianopia after post-chiasmal lesion reflects:",
    options: [

      "Loss of contralateral visual field representation",
      "Complete blindness in both eyes often",
      "Requires olfactory loss",
      "Deafness without cochlear damage",
    ],
    correct: 0,
    explanation: "Optic tract/radiation/cortex lesions cause contralateral field defects.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Optic tract/radiation/cortex lesions cause contralateral field defects.",
      "“Requires olfactory loss” does not match the mechanism (topic: Clinical Correlates). Optic tract/radiation/cortex lesions cause contralateral field defects. The correct choice—“Loss of contralateral visual field representation”—fits that description.",
      "This mechanism belongs to a different sensory or synaptic system than the stem describes.",
    ]
  }
];
