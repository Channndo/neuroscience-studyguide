// MCB80x conceptual-variation pools — append-only; wire via index.html (see file footer comment).
// Variation themes: parameter swap, circuit inversion, pharmacology/blocks, clinical reverse-engineering.

const PART1_VARIATION_POOL = [
  {
    topic: "Nernst Equation",
    question: "Using the values stated below, which answer is correct: A giant axon is perfused so that [K⁺]_out = 140 mM and [K⁺]_in = 4 mM (inverted from normal). At 37°C, E_K is approximately?",
    options: [




      "About, 96 mV (positive inside relative to standard sign convention)",
      "About −96 mV, identical to normal K⁺ gradients",
      "0 mV because channels are closed",
      "Equal to E_Na regardless of potassium",
    ],
    correct: 0,
    explanation: "E_K = (RT/F) log([K⁺]_out/[K⁺]_in). Inverting inside/outside flips the log ratio sign, making E_K strongly positive instead of negative.",
    wrongExplanations: [
      "",
      "−96 mV assumes the normal inside-high/outside-low K⁺ gradient, not the inverted perfusion in the stem.",
      "0 mV requires equal concentrations or zero permeability relevance; here concentrations are unequal and K⁺ is permeant.",
      "E_Na is set by sodium gradients and has a different Nernst value; it does not replace E_K.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the values stated below, which answer is correct: Extracellular Na⁺ is increased tenfold while intracellular Na⁺ is held constant. E_Na should?",
    options: [




      "Shift to a more positive value",
      "Shift toward 0 mV (less positive)",
      "Become identical to E_K",
      "Remain unchanged because the pump compensates instantly",
    ],
    correct: 0,
    explanation: "Raising [Na⁺]_out increases log([Na⁺]_out/[Na⁺]_in), making E_Na more positive per the Nernst equation.",
    wrongExplanations: [
      "",
      "A higher outside Na⁺ increases, not decreases, the equilibrium potential for Na⁺.",
      "E_K depends on potassium concentrations; changing Na⁺ does not set E_K.",
      "The pump maintains gradients over time but the Nernst potential is defined by instantaneous concentrations in the stem.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Using the values stated below, which answer is correct: At rest, P_K : P_Na : P_Cl = 1 : 0.05 : 0.45 with normal mammalian concentrations. If P_Na is suddenly raised to equal P_K (while concentrations unchanged), V_m will?",
    options: [




      "Depolarize toward a value between E_K and E_Na, closer to the midpoint weighted by comparable permeabilities",
      "Hyperpolarize to E_K exactly",
      "Clamp to E_Na (, 60 mV) instantly with no K⁺ influence",
      "Remain unchanged because pumps set V_m directly",
    ],
    correct: 0,
    explanation: "Goldman potential shifts toward ions with higher relative permeability; equal P_K and P_Na pulls V_m between E_K and E_Na.",
    wrongExplanations: [
      "",
      "Equal Na⁺ and K⁺ permeability prevents V_m from staying at E_K alone.",
      "Even with equal permeabilities, K⁺ conductance still contributes; V_m is weighted, not pinned to E_Na unless P_Na dominates completely.",
      "Pumps maintain gradients but resting V_m in the stem is set by ion conductances through the Goldman relation.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Which description best applies to Ouabain blocks the Na⁺/K⁺ ATPase. Over tens of minutes, with K⁺ leak still open, the most likely outcome?",
    options: [




      "Gradual dissipation of ion gradients and drift of V_m toward 0 mV as leaks equilibrate ions",
      "Immediate hyperpolarization to −120 mV",
      "Persistent clamp at E_Na without gradient change",
      "No change because leak channels do not conduct",
    ],
    correct: 0,
    explanation: "Without active transport, concentration gradients run down; combined with leak conductances, V_m depolarizes toward zero.",
    wrongExplanations: [
      "",
      "Without maintained gradients, the membrane does not hyperpolarize beyond normal E_K; it typically depolarizes toward 0 mV.",
      "E_Na requires maintained Na⁺ gradients; pump block undermines that over time.",
      "Leak channels still pass ions down their electrochemical gradients; they are not inactivated by ouabain.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Which description best applies to Tetrodotoxin (TTX) is applied during a depolarizing current step that normally reaches threshold. The expected change?",
    options: [




      "Subthreshold responses may remain, but no all-or-none action potential",
      "Faster spike firing with larger amplitude",
      "Block of K⁺ repolarization",
      "Immediate elimination of resting potential",
    ],
    correct: 0,
    explanation: "TTX blocks voltage-gated Na⁺ channels required for regenerative spikes; passive responses can persist.",
    wrongExplanations: [
      "",
      "TTX prevents Na⁺-mediated regeneration; it does not enhance spiking.",
      "K⁺ channel block is characteristic of TEA, not TTX.",
      "Resting potential depends on leak and gradients; TTX does not abolish V_m instantly.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Which description best applies to Tetraethylammonium (TEA) is applied during an evoked action potential. The most direct effect?",
    options: [




      "Prolonged repolarization and broadened spike because voltage-gated K⁺ channels are blocked",
      "Failure of Na⁺ channel activation",
      "Block of presynaptic Ca²⁺ influx",
      "Hyperpolarization below rest before any stimulus",
    ],
    correct: 0,
    explanation: "TEA blocks many voltage-gated K⁺ channels, slowing repolarization and widening the action potential.",
    wrongExplanations: [
      "",
      "Na⁺ activation block is the primary action of TTX, not TEA.",
      "Presynaptic Ca²⁺ channels are not the primary target of TEA in classic axon spike experiments.",
      "TEA block delays repolarization; it does not hyperpolarize the cell at rest by itself.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Using the values stated below, which answer is correct: A novel cation X⁺ has E_X = +20 mV. At rest V_m = −70 mV, opening X⁺-selective leak channels will?",
    options: [




      "Depolarize V_m toward, 20 mV",
      "Hyperpolarize V_m toward −90 mV",
      "Have no effect because X⁺ is not Na⁺ or K⁺",
      "Often clamp V_m to 0 mV",
    ],
    correct: 0,
    explanation: "Any permeant ion pulls V_m toward its equilibrium potential; positive E_X depolarizes from rest.",
    wrongExplanations: [
      "",
      "Depolarization toward a positive E_X cannot hyperpolarize the cell from −70 mV.",
      "Goldman weighting applies to any permeant ion, not only Na⁺ and K⁺.",
      "V_m moves toward E_X (+20 mV), not necessarily to 0 mV.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Using the values stated below, which answer is correct: A dendrite receives simultaneous EPSPs at two branches equidistant from the soma. Compared with a single branch EPSP, somatic V_m peak is expected to?",
    options: [




      "Increase if both inputs arrive within the membrane time constant (spatial summation)",
      "Decrease because signals cancel by reflection",
      "Stay identical because distance cancels amplitude",
      "Often trigger an action potential in the dendrite",
    ],
    correct: 0,
    explanation: "Spatial summation adds passive depolarizations from multiple synaptic sites reaching the soma around the same time.",
    wrongExplanations: [
      "",
      "Passive EPSPs from separate branches add; they do not cancel unless one is hyperpolarizing.",
      "Two inputs typically produce a larger peak than one unless they are separated in time beyond τ.",
      "Dendritic EPSPs are usually subthreshold; summation must reach AIS threshold to fire.",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "What does During voltage clamp, holding V_m at −40 mV when E_K = −90 mV and g_K is substantial produce?",
    options: [




      "Outward K⁺ current (positive outward convention) because V_m is depolarized above E_K",
      "Inward K⁺ current because V_m is negative on an absolute scale",
      "Zero current because the cell is clamped",
      "Requires capacitive current with no ionic component at steady state",
    ],
    correct: 0,
    explanation: "I_K = g_K(V − E_K); at −40 mV with E_K = −90 mV, (V − E_K) > 0, driving outward K⁺ current that the clamp must sink.",
    wrongExplanations: [
      "",
      "Sign of current is relative to E_K, not whether V_m is negative in absolute terms.",
      "Steady-state clamp holds V but requires continuous ionic current to oppose leak and open channels.",
      "Ionic currents persist at steady clamp potentials; capacitive current is transient at steps.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "If voltage-gated Na⁺ channels are inactivated but delayed-rectifier K⁺ channels are held open, V_m will tend to move toward?",
    options: [




      "E_K (hyperpolarized relative to typical rest)",
      "E_Na",
      "30 mV regardless of gradients",
      "The reversal potential of the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Dominant K⁺ conductance pulls V_m toward E_K; inactivated Na⁺ cannot drive the upstroke.",
    wrongExplanations: [
      "",
      "Without functional Na⁺ conductance, V_m cannot be pulled toward E_Na.",
      "V_m follows equilibrium potentials of permeant ions, not an arbitrary +30 mV.",
      "The electrogenic pump sets gradients but does not define the instantaneous reversal potential for open channels.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Using the values stated below, which answer is correct: Intracellular Cl⁻ is raised (more negative inside charge balance) while extracellular Cl⁻ is unchanged. If Cl⁻ is permeant, E_Cl shifts?",
    options: [




      "Toward a less negative (more positive) value because [Cl⁻]_in/[Cl⁻]_out increases in the log term",
      "Toward a more negative value",
      "To E_K automatically",
      "To 0 mV if K⁺ channels close",
    ],
    correct: 0,
    explanation: "For anions, higher intracellular concentration reduces the magnitude of the inside-negative equilibrium potential (E_Cl becomes less negative).",
    wrongExplanations: [
      "",
      "Increasing [Cl⁻]_in makes the inside/outside ratio for Cl⁻ less extreme, not more negative E_Cl.",
      "Chloride equilibrium is independent of E_K unless channels couple; the stem asks about E_Cl.",
      "E_Cl is defined by Cl⁻ concentrations, not by K⁺ channel state alone.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Using the values stated below, which answer is correct: A cell has zero Na⁺ permeability, finite K⁺ and Cl⁻ permeability, with E_K = −90 mV and E_Cl = −70 mV. V_m will lie?",
    options: [




      "Between −90 mV and −70 mV, weighted by relative P_K and P_Cl",
      "Exactly at −80 mV",
      "At E_Na",
      "At 0 mV if the pump is off",
    ],
    correct: 0,
    explanation: "With only K⁺ and Cl⁻ permeant, Goldman predicts V_m between E_K and E_Cl according to their permeabilities.",
    wrongExplanations: [
      "",
      "The exact value depends on P_K/P_Cl, not a fixed midpoint for all cells.",
      "Na⁺ is impermeant in the stem, so E_Na does not anchor V_m.",
      "0 mV would require collapsed gradients or equal ion contributions; two negative equilibria pull V_m negative.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Using the values stated below, which answer is correct: Membrane capacitance C_m is doubled while R_m stays the same. The membrane time constant τ?",
    options: [




      "Doubles (τ = R_m C_m)",
      "Halves",
      "Is unchanged because λ changes instead",
      "Becomes infinite",
    ],
    correct: 0,
    explanation: "τ = R_m C_m; more capacitance slows voltage changes for a given conductance.",
    wrongExplanations: [
      "",
      "τ increases with C_m, it does not decrease.",
      "λ depends on R_m and R_i; τ and λ are related but τ directly scales with C_m here.",
      "Finite R_m and C_m give finite τ.",
    ]
  },
  {
    topic: "Electrical Signaling",
    question: "Using the values stated below, which answer is correct: At V_m = −65 mV, E_K = −90 mV, E_Na = +60 mV. Opening only Na⁺ channels (no K⁺ change) will initially drive V_m?",
    options: [




      "Toward E_Na (depolarizing)",
      "Toward E_K (hyperpolarizing)",
      "To 0 mV in one step",
      "Below −100 mV",
    ],
    correct: 0,
    explanation: "Depolarizing conductance toward E_Na pulls V_m in the positive direction from rest.",
    wrongExplanations: [
      "",
      "Na⁺ conductance dominates in the stem, not additional K⁺ leak toward E_K.",
      "V_m moves toward the equilibrium of the newly opened conductance, not instantaneously to 0 mV.",
      "Opening depolarizing Na⁺ channels cannot hyperpolarize below E_K from −65 mV.",
    ]
  }
];

const PART2_VARIATION_POOL = [
  {
    topic: "Neural Circuits",
    question: "Using the values stated below, which answer is correct: Circuit A: neuron R excites neuron T, and T inhibits neuron S (feedforward inhibition). Circuit B: R excites both T and S directly, and T also inhibits S (same net inhibition on S). If R fires briefly, S typically receives?",
    options: [




      "In both designs, delayed disynaptic inhibition from T can sharpen timing of S output relative to direct excitation alone",
      "No inhibition in either design because T is excitatory",
      "Uses steady-state Nernst for one ion while multiple conductances change in time",
      "Identical firing rates in S regardless of wiring",
    ],
    correct: 0,
    explanation: "Feedforward inhibition (R→T→S) creates a window that can limit when S can fire after R activity, shaping temporal precision.",
    wrongExplanations: [
      "",
      "T is defined as inhibitory onto S in both described circuits.",
      "Circuit B still includes T→S inhibition; the difference is additional R→S excitation.",
      "Wiring changes integration at S; rates generally differ from a direct-only excitatory path.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Using the values stated below, which answer is correct: A reciprocal inhibitory circuit alternates activity between pool A and pool B (each excites the other’s inhibitor). Swapping to mutual excitation between A and B with no inhibition would most likely?",
    options: [




      "Allow simultaneous high activity in both pools instead of alternating suppression",
      "Guarantee silence in both pools",
      "Convert the circuit into a pure feedforward chain",
      "Eliminate the need for synaptic integration",
    ],
    correct: 0,
    explanation: "Reciprocal inhibition supports winner-take-all/alternation; mutual excitation tends toward co-activation or runaway without balancing inhibition.",
    wrongExplanations: [
      "",
      "Mutual excitation tends to increase, not silence, co-active populations.",
      "Feedforward chains are serial; this stem describes changing lateral connectivity between two pools.",
      "Integration rules still apply; connectivity change alters dynamics, not the existence of summation.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Using the values stated below, which answer is correct: A neuron receives EPSPs from pathway X and IPSPs from pathway Y onto the same soma. If inhibitory interneurons in Y are silenced (disinhibition), somatic firing rate will?",
    options: [




      "Increase if net excitation from X was previously suppressed by Y",
      "Often decrease because inhibition was removed",
      "Stay fixed because IPSPs do not affect rate",
      "Drop to zero because disinhibition is hyperpolarizing",
    ],
    correct: 0,
    explanation: "Removing inhibitory input (disinhibition) increases net depolarization and typically raises firing if X is active.",
    wrongExplanations: [
      "",
      "Removing IPSPs reduces hyperpolarizing/clamping influence, which increases, not decreases, excitability.",
      "IPSPs strongly shape rate by shunting and hyperpolarizing.",
      "Disinhibition means less inhibition, not additional hyperpolarization.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Using the values stated below, which answer is correct: Presynaptic voltage-gated Ca²⁺ channels are blocked, but action potentials still invade the terminal. Quantal release will?",
    options: [




      "Fail or drop drastically because Ca²⁺ influx triggers vesicle fusion",
      "Increase because Na⁺ replaces Ca²⁺ in fusion (describes the wrong synaptic structure or transmission step)",
      "Continue unchanged via SNARE activation alone (describes the wrong synaptic structure or transmission step)",
      "Switch to purely electrical transmission (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "Chemical synaptic release requires Ca²⁺ entry to trigger exocytosis; without Ca²⁺ channels, fusion is not triggered normally.",
    wrongExplanations: [
      "",
      "Na⁺ does not substitute for Ca²⁺ in synaptotagmin/SNARE timing of fusion.",
      "SNARE machinery still needs Ca²⁺ binding for fast synchronized release.",
      "Electrical synapses require gap junctions; blocking Ca²⁺ does not create them.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "Using the values stated below, which answer is correct: Postsynaptic NMDA receptors are blocked with Mg²⁺ clamp maintained, but AMPA receptors remain functional. Typical consequence for LTP induction protocols?",
    options: [




      "LTP induction is impaired because NMDA coincidence detection and Ca²⁺ entry are blocked",
      "LTP strengthens immediately via AMPA alone",
      "Main mechanism: short-term facilitation is blocked, LTP unchanged",
      "Synaptic vesicles fail to release transmitter",
    ],
    correct: 0,
    explanation: "NMDA receptors provide voltage-dependent Ca²⁺ entry needed for many LTP induction pathways; AMPA alone often suffices for baseline EPSCs but not induction.",
    wrongExplanations: [
      "",
      "AMPA mediates fast transmission but standard NMDA-dependent LTP needs NMDA opening.",
      "LTP induction, not just STP, is commonly NMDA-dependent in classic protocols.",
      "Presynaptic release remains; the block is postsynaptic receptor level.",
    ]
  },
  {
    topic: "Inhibitory Circuits",
    question: "Using the values stated below, which answer is correct: A feedforward inhibitory interneuron is converted in silico to feedforward excitatory onto the same principal cell (same input timing). Threshold crossing for the principal cell will generally?",
    options: [




      "Become easier (lower threshold effective) because inhibition is replaced by excitation",
      "Become harder because excitation is slower than inhibition",
      "Be unchanged because excitation and inhibition are equivalent",
      "Prevent all spikes because of shunting",
    ],
    correct: 0,
    explanation: "Replacing feedforward IPSPs with EPSPs adds depolarization instead of hyperpolarization/shunting, lowering the effective threshold.",
    wrongExplanations: [
      "",
      "Excitation aids, not hinders, reaching threshold compared with inhibition.",
      "IPSPs and EPSPs have opposite effects on membrane potential.",
      "Shunting is associated with inhibitory conductance near E_Cl, not added excitation.",
    ]
  },
  {
    topic: "Short-Term Plasticity",
    question: "Using the values stated below, which answer is correct: Presynaptic residual Ca²⁺ after one spike normally facilitates release. If Ca²⁺ buffers in the terminal are increased (faster Ca²⁺ clearance), paired-pulse facilitation will?",
    options: [




      "Decrease because less Ca²⁺ remains to boost the second spike’s release",
      "Increase because buffering adds more Ca²⁺",
      "Convert immediately to LTP",
      "Abolish all action potentials",
    ],
    correct: 0,
    explanation: "Facilitation depends on residual Ca²⁺; faster buffering reduces the Ca²⁺ tail and weakens facilitation.",
    wrongExplanations: [
      "",
      "Buffers remove free Ca²⁺; they do not increase residual signal.",
      "LTP is a long-term postsynaptic change, not a direct result of faster presynaptic buffering alone.",
      "Action potentials depend on Na⁺ channels; Ca²⁺ buffering affects release probability, not axonal propagation directly.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Using the values stated below, which answer is correct: Two excitatory inputs A and B each alone produce 3 mV EPSPs at the soma. If B is replaced by an inhibitory input of equal conductance magnitude with E_rev = −75 mV at rest V_m = −65 mV, simultaneous A+B will?",
    options: [




      "Produce less somatic depolarization than A alone (subtractive/shunting effect)",
      "Often sum to 6 mV depolarization",
      "Hyperpolarize to −90 mV regardless of A",
      "Have no effect because inhibition is shunting mainly at threshold",
    ],
    correct: 0,
    explanation: "Concurrent inhibition opposes excitation via hyperpolarization and shunt, reducing peak depolarization from A.",
    wrongExplanations: [
      "",
      "Inhibitory and excitatory inputs do not add as simple linear EPSP sums.",
      "Peak voltage depends on relative conductances and E_rev; it is not fixed at −90 mV without specifying magnitudes.",
      "Shunting inhibition affects subthreshold integration, not only at threshold.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Using the values stated below, which answer is correct: A circuit has excitatory drive to a motor pool. Adding neuromodulator that closes K⁺ leak channels on those motor neurons will?",
    options: [




      "Increase excitability (depolarize toward threshold) and increase firing for the same synaptic input",
      "Decrease firing by hyperpolarizing toward E_K",
      "Block all voltage-gated Na⁺ channels",
      "Convert EPSPs into IPSPs",
    ],
    correct: 0,
    explanation: "Reducing K⁺ leak conductance depolarizes V_m and increases gain for a given excitatory input.",
    wrongExplanations: [
      "",
      "Closing K⁺ leak depolarizes, not hyperpolarizes, the cell.",
      "K⁺ leak modulation is distinct from Na⁺ channel block.",
      "Receptor identity determines EPSP sign; leak conductance changes input–output gain.",
    ]
  },
  {
    topic: "Chemical Synapses",
    question: "Which description best applies to Botulinum toxin cleaves SNARE proteins presynaptically. The immediate physiological consequence?",
    options: [




      "Reduced or abolished quantal transmitter release despite intact action potentials",
      "Enhanced release because SNAREs are activated (describes the wrong synaptic structure or transmission step)",
      "Block of postsynaptic GABA<sub>A</sub> receptors (describes the wrong synaptic structure or transmission step)",
      "Persistent opening of voltage-gated Na⁺ channels (describes the wrong synaptic structure or transmission step)",
    ],
    correct: 0,
    explanation: "SNARE complexes mediate vesicle fusion; their cleavage prevents exocytosis even if Ca²⁺ enters.",
    wrongExplanations: [
      "",
      "SNARE cleavage prevents, not enhances, fusion.",
      "Botulinum acts presynaptically on release machinery, not on GABA<sub>A</sub> receptors.",
      "Na⁺ channels remain functional; failure is downstream at fusion.",
    ]
  },
  {
    topic: "Synaptic Plasticity Rules",
    question: "In a Hebbian STDP rule, presynaptic spike 10 ms before postsynaptic spike strengthens the synapse. If the order is reversed (post before pre), the same rule typically?",
    options: [




      "Weakens the synapse",
      "Strengthens the synapse equally",
      "Has no effect because timing is irrelevant",
      "Eliminates all AMPA receptors instantly",
    ],
    correct: 0,
    explanation: "Classic STDP is asymmetric: pre→post within a window potentiates; post→pre depresses.",
    wrongExplanations: [
      "",
      "STDP is directionally asymmetric; reversed order does not produce the same LTP.",
      "Timing order is the defining feature of STDP.",
      "Depression is graded, not instantaneous receptor elimination.",
    ]
  },
  {
    topic: "Neural Circuits",
    question: "Using the values stated below, which answer is correct: A central pattern generator normally produces alternating left/right bursts via reciprocal inhibition. If reciprocal inhibitory synapses are blocked but excitatory coupling remains, the pattern will most likely?",
    options: [




      "Lose strict alternation and may show synchronous or irregular co-activation",
      "Speed up perfect alternation",
      "Stop all rhythmic output permanently",
      "Switch to photoreceptor-driven oscillations",
    ],
    correct: 0,
    explanation: "Reciprocal inhibition enforces anti-phase firing; removing it allows both sides to fire together or compete without structured alternation.",
    wrongExplanations: [
      "",
      "Alternation requires inhibitory coupling; blocking it does not improve alternation.",
      "Rhythmic activity may persist from intrinsic properties and excitation, but pattern structure changes.",
      "CPG rhythm is spinal/neural circuit based, not photoreceptor driven.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Using the values stated below, which answer is correct: A metabotropic GABA<sub>B</sub> agonist is applied. Compared with GABA<sub>A</sub> activation, the effect on postsynaptic V_m is typically?",
    options: [




      "Slower onset with longer-lasting modulation via G-protein coupled K⁺ or Ca²⁺ channel changes",
      "Instantaneous large depolarization identical to AMPA",
      "Persistent block of all synaptic release",
      "Direct opening of a cation channel with 1 ms decay",
    ],
    correct: 0,
    explanation: "GABA<sub>B</sub> receptors are G-protein coupled, producing slower, prolonged effects unlike fast ionotropic GABA<sub>A</sub> currents.",
    wrongExplanations: [
      "",
      "GABA<sub>B</sub> is inhibitory/modulatory, not fast excitatory like AMPA.",
      "GABA<sub>B</sub> modulates conductances; it does not globally block presynaptic release by itself.",
      "Millisecond cation channel opening describes ionotropic receptors, not GABA<sub>B</sub>.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Using the values stated below, which answer is correct: An inhibitory interneuron makes perisomatic synapses onto a pyramidal cell. Moving the same synapses to distal dendrites (same strength) will usually?",
    options: [




      "Reduce the inhibitory impact on somatic spike generation (location-dependent attenuation)",
      "Increase somatic inhibition because dendrites amplify IPSPs",
      "Have identical somatic effect regardless of location",
      "Convert IPSPs to EPSPs automatically",
    ],
    correct: 0,
    explanation: "Distal dendritic IPSPs attenuate passively toward the soma, weakening their control over AIS spike output compared with perisomatic inhibition.",
    wrongExplanations: [
      "",
      "Passive dendritic filtering reduces, not amplifies, distal influence at the soma.",
      "Synapse location strongly affects effectiveness on spike output.",
      "IPSP sign is set by E_rev, not by dendritic distance alone.",
    ]
  }
];

const PART3_VARIATION_POOL = [
  {
    topic: "Clinical Correlates",
    question: "Which description best applies to A patient produces fluent, grammatical speech with normal articulation but frequent neologisms and poor comprehension; repetition is impaired. The most likely primary lesion site?",
    options: [




      "Posterior superior temporal / Wernicke’s area",
      "Primary motor cortex leg area",
      "Cerebellar vermis",
      "Optic chiasm",
    ],
    correct: 0,
    explanation: "Fluent speech with impaired comprehension and paraphasic errors fits Wernicke (receptive) aphasia from posterior temporal language cortex.",
    wrongExplanations: [
      "",
      "Motor cortex leg area causes contralateral weakness, not fluent aphasia with comprehension loss.",
      "Cerebellar vermis lesions cause ataxia, not receptive language deficits.",
      "Chiasm lesions produce visual field defects, not aphasia.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Using the values stated below, which answer is correct: A patient cannot repeat phrases, speech is nonfluent and effortful, but comprehension is relatively preserved. Damage is most likely in?",
    options: [




      "Broca’s area / inferior frontal gyrus (left) or adjacent arcuate connectivity",
      "Primary visual cortex (V1) bilaterally",
      "Cochlear nucleus",
      "Dorsal root ganglion",
    ],
    correct: 0,
    explanation: "Nonfluent speech with relatively spared comprehension suggests Broca (expressive) aphasia or connected subcortical white matter.",
    wrongExplanations: [
      "",
      "Bilateral V1 loss causes cortical blindness, not motor aphasia.",
      "Cochlear nucleus damage affects hearing, not expressive language production.",
      "Peripheral sensory ganglia do not produce aphasia.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which description best applies to A patient reports numbness and loss of fine touch/vibration on the right body below the neck, with no facial weakness. Pain and temperature on the right are intact. The most likely lesion?",
    options: [




      "Right dorsal column (fasciculus gracilis/cuneatus) in the spinal cord",
      "Right spinothalamic tract at the same spinal level",
      "Left optic tract",
      "Right facial nerve",
    ],
    correct: 0,
    explanation: "Fine touch and vibration travel in dorsal columns ipsilaterally in the cord, then cross in the medulla; a right-sided DCML spinal lesion or post-decussation left ML lesion can produce right-sided DCML loss with spared spinothalamic pain/temp.",
    wrongExplanations: [
      "",
      "Spinothalamic tract lesions reduce contralateral pain/temperature, not isolated ipsilateral fine touch loss with intact pain/temp on the same side.",
      "Optic tract lesions produce visual field loss, not body somatosensory dissociation.",
      "Facial nerve lesions cause facial motor deficits, not hemibody DCML signs.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which clinical presentation is most consistent with After a stroke, a patient neglects the left side of space, collides with doorframes on the left, and fails to eat food on the left half of the plate. Vision and primary sensation are intact. Likely damage?",
    options: [




      "Right parietal / right posterior association cortex",
      "Left primary motor cortex hand area",
      "Right cochlear nucleus",
      "Left cerebellar hemisphere",
    ],
    correct: 0,
    explanation: "Hemispatial neglect commonly follows right parietal/posterior cortical lesions affecting attention allocation to contralateral space.",
    wrongExplanations: [
      "",
      "Left motor cortex causes right-sided weakness, not spatial neglect with intact strength.",
      "Cochlear lesions cause hearing loss, not visuospatial neglect.",
      "Cerebellar lesions cause ataxia, not typical hemineglect.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Using the values stated below, which answer is correct: A patient recognizes objects and reads text but cannot recognize familiar faces, including their own in a mirror. Visual fields and acuity are normal. Most likely site?",
    options: [




      "Fusiform face area / ventral occipitotemporal cortex",
      "Primary auditory cortex",
      "Substantia nigra pars compacta",
      "Dorsal column nuclei",
    ],
    correct: 0,
    explanation: "Prosopagnosia is selective face recognition failure with preserved generic object vision, linked to ventral temporal face areas.",
    wrongExplanations: [
      "",
      "Auditory cortex does not mediate face recognition.",
      "Substantia nigra damage causes parkinsonism, not prosopagnosia.",
      "DCML nuclei process somatosensation, not visual face identity.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which clinical presentation is most consistent with A patient has bitemporal hemianopia (cannot see temporal visual fields in either eye). The lesion is most likely at the?",
    options: [




      "Optic chiasm",
      "Left optic tract",
      "Right occipital lobe",
      "Left lateral geniculate nucleus",
    ],
    correct: 0,
    explanation: "Nasal retinal fibers cross at the chiasm; midline chiasm compression produces bitemporal field loss.",
    wrongExplanations: [
      "",
      "Optic tract lesions cause homonymous hemianopia, not bitemporal.",
      "Occipital lobe lesions cause homonymous defects respecting vertical meridian.",
      "LGN lesions also produce homonymous patterns, not classic bitemporal loss.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Using the values stated below, which answer is correct: Resting tremor, cogwheel rigidity, bradykinesia, and improved mobility after levodopa suggest pathology primarily in?",
    options: [




      "Nigrostriatal dopamine pathway (substantia nigra → striatum)",
      "Upper motor neuron corticospinal tract alone (maps the lesion to the wrong motor pathway or reflex)",
      "Neuromuscular junction acetylcholine receptors (maps the lesion to the wrong motor pathway or reflex)",
      "Inner hair cells of the cochlea (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Parkinsonian syndrome with levodopa response implicates dopamine loss in the basal ganglia loop.",
    wrongExplanations: [
      "",
      "UMN lesions cause spasticity and weakness patterns, not classic resting tremor with levodopa response.",
      "NMJ disorders cause fatigable weakness (e.g., myasthenia), not parkinsonian rigidity.",
      "Cochlear hair cells mediate hearing, not movement initiation.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Using the values stated below, which answer is correct: A patient overshoots finger-to-nose targets, shows intention tremor, and has dysmetria with normal strength. The dysfunction localizes most strongly to?",
    options: [




      "Cerebellum or its input/output pathways",
      "Anterior horn cells (maps the lesion to the wrong motor pathway or reflex)",
      "Optic chiasm (maps the lesion to the wrong motor pathway or reflex)",
      "Hippocampus alone (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "Dysmetria and intention tremor with preserved strength are hallmark cerebellar motor signs.",
    wrongExplanations: [
      "",
      "Anterior horn cell loss causes weakness and atrophy, not intention tremor with normal strength.",
      "Chiasm lesions affect vision, not limb coordination testing.",
      "Hippocampal damage affects memory, not coordinated movement precision.",
    ]
  },
  {
    topic: "Visual System",
    question: "Which clinical presentation is most consistent with A patient sees double when looking to the left; the left eye fails to adduct and shows nystagmus of the abducting eye. The lesion is in?",
    options: [




      "Left medial longitudinal fasciculus (MLF) or associated brainstem internuclear pathway",
      "Right optic nerve",
      "Left primary somatosensory cortex",
      "Cervical dorsal roots",
    ],
    correct: 0,
    explanation: "Internuclear ophthalmoplegia (impaired adduction + abducting nystagmus) localizes to MLF connecting CN VI and CN III nuclei.",
    wrongExplanations: [
      "",
      "Optic nerve lesions reduce vision and afferent pupillary responses, not conjugate adduction failure pattern.",
      "Somatosensory cortex does not control eye movements.",
      "Cervical dorsal roots affect limb sensation, not conjugate gaze.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Using the values stated below, which answer is correct: A patient cannot understand speech in noisy environments but hears tones normally; audiogram shows poor word discrimination disproportionate to threshold loss. Likely dysfunction?",
    options: [




      "Cochlear inner hair cell / auditory nerve synaptic integrity",
      "Middle ear ossicle fixation",
      "Primary visual cortex",
      "Dorsal column nuclei",
    ],
    correct: 0,
    explanation: "Disproportionate speech discrimination difficulty suggests cochlear/neural processing deficits beyond simple conductive loss.",
    wrongExplanations: [
      "",
      "Pure conductive loss typically preserves discrimination at adequate loudness.",
      "Visual cortex is unrelated to auditory speech discrimination.",
      "DCML nuclei process somatosensation, not hearing.",
    ]
  },
  {
    topic: "Vestibular System",
    question: "Using the values stated below, which answer is correct: A patient experiences spinning vertigo, horizontal nystagmus, and vomiting lasting days after a viral illness, without focal limb weakness. Hearing is mildly reduced on the same side. Most likely?",
    options: [




      "Peripheral vestibular labyrinth or vestibular nerve",
      "Bilateral occipital lobe infarct",
      "Parkinson disease",
      "Hippocampal CA1 lesion",
    ],
    correct: 0,
    explanation: "Acute prolonged vertigo with unilateral hearing change and no other focal signs suggests peripheral vestibular pathology.",
    wrongExplanations: [
      "",
      "Bilateral occipital damage causes cortical blindness, not isolated vertigo with peripheral nystagmus pattern.",
      "Parkinson disease causes bradykinesia/rigidity, not acute days-long vertigo.",
      "Hippocampal lesions affect memory, not acute vestibular syndrome.",
    ]
  },
  {
    topic: "Language",
    question: "Which anatomic lesion best explains A patient can sing familiar songs fluently but cannot speak prose or name objects (mixed nonfluent output with preserved melody). This pattern?",
    options: [




      "Aphasia with relative sparing of right-hemisphere or subcortical prosody/melody routes vs left language cortex",
      "Pure hearing loss",
      "Prosopagnosia",
      "Dorsal column demyelination",
    ],
    correct: 0,
    explanation: "Dissociation between sung prosody and propositional speech fits lateralized language vs melody/prosody networks.",
    wrongExplanations: [
      "",
      "Hearing loss would impair both song and speech perception similarly at input level.",
      "Prosopagnosia is face recognition deficit, not speech-melody dissociation.",
      "DCML lesions do not explain language production patterns.",
    ]
  },
  {
    topic: "Thalamus",
    question: "Which clinical presentation is most consistent with A patient has loss of pain/temperature on the left face, loss of pain/temperature on the right arm and leg, left-sided Horner’s syndrome, and ataxia of the left limbs. The lesion is most likely in the?",
    options: [




      "Left lateral medulla",
      "Right primary motor cortex hand area",
      "Optic chiasm midline",
      "Left hippocampus",
    ],
    correct: 0,
    explanation: "Classic lateral medullary syndrome: ipsilateral face (trigeminal) and contralateral body spinothalamic loss, plus ipsilateral Horner’s and cerebellar ataxia.",
    wrongExplanations: [
      "",
      "Motor cortex lesions cause contralateral weakness without brainstem cranial nerve–autonomic constellation.",
      "Chiasm lesions affect vision, not hemibody pain with Horner’s.",
      "Hippocampal damage does not produce lateral medullary signs.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Using the values stated below, which answer is correct: A patient can learn a mirror-drawing skill over days but cannot recall meeting the examiner an hour ago. MRI suggests bilateral medial temporal lobe damage. Deficit profile fits?",
    options: [




      "Disproportionate anterograde declarative memory loss with relatively preserved procedural learning",
      "Global loss of all learning including motor skills",
      "Pure motor weakness",
      "Photoreceptor degeneration",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampal systems support declarative memory; procedural skills can remain intact (e.g., H.M.-like pattern).",
    wrongExplanations: [
      "",
      "Procedural learning can persist despite declarative amnesia in classic MTL lesions.",
      "Memory disorders without motor cortex involvement do not cause primary weakness.",
      "Retinal photoreceptor loss affects vision, not declarative vs procedural dissociation.",
    ]
  }
];
