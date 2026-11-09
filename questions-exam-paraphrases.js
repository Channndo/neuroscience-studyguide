// Exam-style paraphrases — pruned of near-duplicates of core/supplemental stems

const PART1_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Action Potentials",
    question: "In the phase associated with the rising phase of an action potential, which event primarily drives depolarization?",
    options: [
      "Efflux of K⁺ through voltage-gated potassium channels",
      "Influx of Na⁺ through voltage-gated sodium channels",
      "Influx of Cl⁻ through ligand-gated channels",
      "Efflux of Ca²⁺ through voltage-gated calcium channels",
    ],
    correct: 1,
    explanation: "Voltage-gated Na⁺ channels open at threshold, producing rapid Na⁺ influx that drives the upswing of the action potential.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the falling phase of an action potential, which ionic current dominates?",
    options: [
      "Na⁺ influx through open sodium channels along a uniformly leaky cable",
      "K⁺ efflux through voltage-gated potassium",
      "Ca²⁺ influx through N-type channels when Na⁺ inactivation has progressed",
      "Cl⁻ influx through GABA receptors along a uniformly leaky cable",
    ],
    correct: 1,
    explanation: "Voltage-gated K⁺ channels open during repolarization, allowing K⁺ efflux that returns the membrane toward its resting potential.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Myelination of an axon mainly increases?",
    options: [
      "The resting membrane potential with dominant K⁺ permeability at rest",
      "The speed of action potential propagation",
      "The number of synaptic vesicles released along a uniformly leaky cable",
      "The equilibrium potential for Na⁺ when Na⁺ inactivation has progressed",
    ],
    correct: 1,
    explanation: "Myelin reduces membrane capacitance and enables saltatory conduction, allowing faster propagation of action potentials.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If a neuron has high K⁺ leak conductance and only minimal Na⁺ leak conductance, its resting membrane potential would be expected to lie closest to?",
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
    question: "Suppose that extracellular K⁺ concentration is increased while intracellular K⁺ is held constant, the K⁺ equilibrium potential (E_K)?",
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
      "The Nernst potential depends logarithmically on the ratio of external to internal concentration (and on valence and temperature). Changing concentrations must shift E_ion; it is not fixed at 0 mV for all ions. The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period, a larger-than-normal depolarizing stimulus may still trigger a spike because?",
    options: [
      "Inactivated Na⁺ channels are recovering",
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
    question: "The falling phase of the action potential is driven mainly by delayed-rectifier K⁺ channels because they?",
    options: [
      "Open with slower kinetics than the initial",
      "Permit massive Na⁺ influx during the rising phase of the spike",
      "Block all Cl⁻ conductance permanently during the rising phase of the spike",
      "Pump Ca²⁺ into the cytosol when Na⁺ inactivation has progressed",
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
    topic: "Action Potential Propagation",
    question: "Myelin increases conduction velocity mainly by?",
    options: [
      "Increasing the number of voltage-gated channels per unit length",
      "Reducing effective membrane capacitance",
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
    question: "The Goldman equation predicts that if membrane permeability to Na⁺ greatly exceeds permeability to K⁺, V_m would be expected to approach?",
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
    topic: "Passive Membrane Properties",
    question: "For a given constant current injection, a neuron with a larger membrane time constant would be expected to show?",
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
    topic: "Resting Potential",
    question: "What mainly sets the ion concentration gradients that establish the resting potential?",
    options: [
      "The Na⁺/K⁺ ATPase maintaining Na⁺",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates striatal circuits mainly through?",
    options: [
      "Metabotropic D1 and D2 receptors altering cAMP",
      "Direct ionotropic pores with millisecond kinetics",
      "Gap junctions between photoreceptors",
      "Voltage-gated Na⁺ channels in the cochlea",
    ],
    correct: 0,
    explanation: "Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
    wrongExplanations: [
      "",
      "Ionotropic receptors are ligand-gated ion channels: neurotransmitter binding directly changes ion flux. Metabotropic receptors activate G-proteins and intracellular cascades (e.g., cAMP, IP₃, DAG) without opening the pore themselves. Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Rods are more sensitive than cones mainly because?",
    options: [
      "They express higher levels of photopigment",
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
    topic: "Neuroanatomy",
    question: "Gray matter consists mainly of?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Gray matter is rich in neuronal somata and synaptic neuropil.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude mainly by?",
    options: [
      "Lowering input resistance",
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
    topic: "Somatosensation",
    question: "Free nerve endings in skin mainly detect?",
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
    question: "Each olfactory sensory neuron usually expresses?",
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
    question: "White matter tracts consist mainly of?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. White matter is dominated by myelinated axon bundles connecting brain regions.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage of many substances mainly at?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue.",
    ]
  },
  {
    topic: "Current Clamp",
    question: "During a current-clamp experiment, injecting steady hyperpolarizing current would be expected to typically?",
    options: [
      "Move V_m away from threshold",
      "Open voltage-gated Na⁺ channels",
      "Eliminate K⁺ leak conductance",
      "Block the Na⁺/K⁺ pump permanently",
    ],
    correct: 0,
    explanation: "Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin (TTX) applied to an axon prevents action potentials mainly by?",
    options: [
      "Blocking voltage-gated Na⁺ channels",
      "Blocking voltage-gated K⁺ channels at steady state in normoxic tissue",
      "Inhibiting the Na⁺/K⁺ ATPase at steady state in normoxic tissue",
      "Sealing gap junctions under typical experimental conditions",
    ],
    correct: 0,
    explanation: "TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that extracellular K⁺ is raised fourfold while intracellular K⁺ is unchanged, E_K shifts approximately?",
    options: [
      "~37 mV toward 0 mV (less negative)",
      "~37 mV more negative",
      "To exactly, 58 mV",
      "Not at all because K⁺ is impermeant",
    ],
    correct: 0,
    explanation: "The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that τ increases but λ is unchanged, subthreshold signals at the soma will?",
    options: [
      "Reach steady deflection more slowly but",
      "Spread farther along dendrites under typical experimental conditions",
      "Often trigger full spikes when Na⁺ inactivation has progressed",
      "No longer decay passively at steady state in normoxic tissue",
    ],
    correct: 0,
    explanation: "τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will?",
    options: [
      "Tend to hyperpolarize or stabilize V_m",
      "Often depolarize to E_Na",
      "Have no effect because Cl⁻ is not charged",
      "Reverse the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period, a second stimulus must be?",
    options: [
      "Stronger to reach threshold because many",
      "Weaker because K⁺ channels are closed during the rising phase of the spike",
      "Identical in strength along a uniformly leaky cable",
      "Applied to dendrites when Na⁺ inactivation has progressed",
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose that the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will?",
    options: [
      "Make V_m less negative",
      "Make V_m equal E_Na instantly",
      "Hyperpolarize below E_K",
      "Stop all ion movement",
    ],
    correct: 0,
    explanation: "Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
    wrongExplanations: [
      "",
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Cooling an axon usually slows conduction because?",
    options: [
      "Channel kinetics and ion mobility slow",
      "Myelin is converted to cerebrospinal fluid",
      "Resting potential becomes, 40 mV",
      "Na⁺/K⁺ pump reverses direction",
    ],
    correct: 0,
    explanation: "Lower temperature slows gating and diffusion, delaying spike propagation.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that P_K >> P_Na at rest and P_Cl is negligible, increasing P_Na slightly will?",
    options: [
      "Depolarize V_m toward E_Na",
      "Hyperpolarize to E_K instantly",
      "Fix V_m at 0 mV",
      "Stop the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Goldman weighting shifts V_m toward newly permeant ions.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Goldman weighting shifts V_m toward newly permeant ions.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman weighting shifts V_m toward newly permeant ions.",
      "",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Suppose that E_K = -80 mV and E_Na = +60 mV, V_m at rest near -65 mV implies?",
    options: [
      "Resting permeability is dominated by K",
      "Requires na, channels are open when homeostatic mechanisms are intact",
      "V_m equals E_Na if voltage-gated Na⁺ channels are inactivated",
      "No ion gradients exist under typical experimental conditions",
    ],
    correct: 0,
    explanation: "Rest lies closer to E_K when K+ permeability dominates.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~10% (R_m falls) with unchanged geometry, the length constant λ typically?",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long when homeostatic mechanisms are intact",
      "Does not change ever when homeostatic mechanisms are intact",
      "Converts dendrites to photoreceptors at fast chemical synapses",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the threshold period/mechanism?",
    options: [
      "Net inward current exceeds outward current",
      "Myelin is synthesized in the soma",
      "Describes presynaptic vesicle release instead of postsynaptic integration",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    wrongExplanations: [
      "",
      "",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Net inward current exceeds outward current initiating regenerative Na⁺ entry",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the absolute refractory period/mechanism?",
    options: [
      "Many Na⁺ channels inactivated",
      "Myelin is synthesized in the soma",
      "Main mechanism: gABA is released globally",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Many Na⁺ channels inactivated; no new spike possible",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Many Na⁺ channels inactivated; no new spike possible",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Many Na⁺ channels inactivated; no new spike possible",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period/mechanism?",
    options: [
      "Partial recovery requires stronger stimulus",
      "Myelin is synthesized in the soma",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Partial recovery requires stronger stimulus",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Partial recovery requires stronger stimulus",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the afterhyperpolarization period/mechanism?",
    options: [
      "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
      "Myelin is synthesized in the soma",
      "Describes synaptic machinery unrelated to the membrane process in the stem",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Unmyelinated axon), which mechanism and outcome best match the scenario?",
    options: [
      "Active regeneration along membrane",
      "Main mechanism: passive spread forever",
      "Main mechanism: cochlear tuning",
      "Main mechanism: lTP induction",
    ],
    correct: 0,
    explanation: "Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Unmyelinated axon: Active regeneration along membrane → Non-decremental propagation.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Myelinated axon), which mechanism and outcome best match the scenario?",
    options: [
      "Nodes of Ranvier concentrate Na⁺ channels",
      "Main mechanism: passive spread forever during the rising phase of the spike",
      "Main mechanism: cochlear tuning along a uniformly leaky cable",
      "Main mechanism: lTP induction during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelinated axon: Nodes of Ranvier concentrate Na⁺ channels → Saltatory conduction.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Cold temperature), which mechanism and outcome best match the scenario?",
    options: [
      "Slower channel kinetics",
      "Main mechanism: passive spread forever",
      "Main mechanism: cochlear tuning",
      "Main mechanism: lTP induction",
    ],
    correct: 0,
    explanation: "Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Cold temperature: Slower channel kinetics → Reduced conduction velocity.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "For this condition (Local anesthetic), which mechanism and outcome best match the scenario?",
    options: [
      "Na⁺ block in pain fibers",
      "Main mechanism: passive spread forever",
      "Main mechanism: cochlear tuning",
      "Main mechanism: lTP induction",
    ],
    correct: 0,
    explanation: "Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Local anesthetic: Na⁺ block in pain fibers → Loss of sensation in region.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Which statement best describes Suppose that leak conductance rises by 12% (R_m falls) with geometry unchanged, the length constant λ compared with baseline?",
    options: [
      "Shorter — signals attenuate faster with",
      "Longer — signals spread farther",
      "Unchanged — λ seldom depends on R_m",
      "Infinite — passive spread without limit",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Which statement best describes Suppose that membrane capacitance increases by 15% while R_m is held fixed, the time constant τ?",
    options: [
      "~115% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly",
      "Independent of C_m",
      "Determined by myelin thickness",
    ],
    correct: 0,
    explanation: "τ scales with C_m when R_m is held constant.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ scales with C_m when R_m is held constant.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that intracellular Na⁺ rises while extracellular Na⁺ is fixed, E_Na shifts?",
    options: [
      "Less positive (toward 0 mV)",
      "More positive beyond, 100 mV",
      "To match E_K",
      "Not at all — Nernst ignores Na⁺",
    ],
    correct: 0,
    explanation: "Higher inside Na⁺ reduces the driving equilibrium toward outside.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Myelin on an axon mainly increases effective R_m locally, which?",
    options: [
      "Lengthens λ and reduces current leak per unit",
      "Shortens λ by increasing capacitance",
      "Prevents all ion flow at nodes",
      "Converts active to purely graded signals forever",
    ],
    correct: 0,
    explanation: "Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the rising phase of a squid-giant-axon spike, the dominant current?",
    options: [
      "Inward Na⁺ through voltage-gated channels",
      "Outward K⁺ through leak channels with dominant K⁺ permeability at rest",
      "Inward Cl⁻ through GABA receptors along a uniformly leaky cable",
      "Na⁺/K⁺ pump current reversing each ms during the rising phase of the spike",
    ],
    correct: 0,
    explanation: "Voltage-gated Na⁺ entry drives rapid depolarization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-gated Na⁺ entry drives rapid depolarization.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Suppose that voltage-gated K⁺ channels are blocked during a spike, you expect?",
    options: [
      "Prolonged repolarization and broader spikes",
      "No change in spike width",
      "Immediate loss of resting potential",
      "References a circuit element that does not control the variable asked about",
    ],
    correct: 0,
    explanation: "Delayed K⁺ repolarization widens the action potential.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Delayed K⁺ repolarization widens the action potential.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp relative to cell-attached recording?",
    options: [
      "Controls V_m or I_m across the entire cell",
      "Samples one ion species with no pipette access",
      "Measures muscle force transduction",
      "Replaces need for electrodes in cochlea",
    ],
    correct: 0,
    explanation: "Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
      "",
      "",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that selectively increases K⁺ leak conductance at rest would be expected to tend to?",
    options: [
      "Hyperpolarize the cell and shorten λ",
      "Depolarize toward E_Na when Na⁺ inactivation has progressed",
      "Block all synaptic vesicle fusion at fast chemical synapses",
      "Increase cochlear gain contralateral to monocular stimulation",
    ],
    correct: 0,
    explanation: "More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "What does In voltage clamp, a downward step in command potential usually produce?",
    options: [
      "Inward (negative) clamp current if",
      "Zero current because voltage is clamped",
      "Requires mechanical cochlear motion",
      "Irreversible LTP",
    ],
    correct: 0,
    explanation: "Clamp current equals the net ionic current required to hold V constant.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that Cl⁻ channels open with E_Cl below rest, net Cl⁻ current at rest will?",
    options: [
      "Be inward (hyperpolarizing) until V_m",
      "Often be outward if voltage-gated Na⁺ channels are inactivated",
      "Be zero because Cl⁻ is impermeant with dominant K⁺ permeability at rest",
      "Depend on photopigment if voltage-gated Na⁺ channels are inactivated",
    ],
    correct: 0,
    explanation: "When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is mainly due to?",
    options: [
      "Continued/outlasting K⁺ conductance",
      "Reopening of all Na⁺ channels",
      "Cl⁻ influx through AMPA receptors",
      "Photoreceptor hyperpolarization to light",
    ],
    correct: 0,
    explanation: "Delayed K⁺ currents drive V_m below rest briefly.",
    wrongExplanations: [
      "",
      "",
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Delayed K⁺ currents drive V_m below rest briefly.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed would be expected to shift the Goldman resting potential?",
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
    question: "Suppose K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains. V_m will tend to move?",
    options: [
      "Toward E_Na",
      "Toward E_K as if K⁺ leak were unchanged",
      "To 0 mV instantly regardless of gradients",
      "Below −150 mV",
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Which statement best describes Suppose that [K⁺]_out equals [K⁺]_in, the Nernst equilibrium potential for K⁺?",
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
    topic: "Electrical Signaling",
    question: "Which statement best describes Suppose that V_m is held at E_K, the driving force on K⁺?",
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
    question: "Membrane capacitance arises mainly because?",
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
    question: "An EPSP recorded at the soma from a distal synapse is usually smaller and slower because of?",
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
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials mainly by binding?",
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
    question: "Tetraethylammonium (TEA) applied to axons usually prolongs spikes by blocking?",
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
    question: "Suppose that voltage-gated Na⁺ channels are held in the inactivated state, the neuron?",
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
    topic: "Experimental Methods",
    question: "Voltage clamp was developed mainly to?",
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
    topic: "Ion Selectivity",
    question: "Suppose that E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors?",
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
    topic: "Pharmacology",
    question: "A drug that increases K⁺ conductance at rest would be expected to generally?",
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
    topic: "Quantitative Physiology",
    question: "Suppose that g_Na increases transiently during a spike while g_K rises later, the sequence reflects?",
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
  }
];

const PART2_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Synaptic Transmission",
    question: "An excitatory postsynaptic potential (EPSP) can be described as a postsynaptic depolarization that?",
    options: [
      "Often prevents action potential generation",
      "Brings the membrane closer to threshold for",
      "Often hyperpolarizes the postsynaptic cell",
      "Main mechanism: occurs at inhibitory synapses",
    ],
    correct: 1,
    explanation: "EPSPs depolarize the postsynaptic membrane, moving it closer to the threshold needed to trigger an action potential.",
    wrongExplanations: [
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs depolarize the postsynaptic membrane, moving it closer to the threshold needed to trigger an action potential.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs depolarize the postsynaptic membrane, moving it closer to the threshold needed to trigger an action potential.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: EPSPs depolarize the postsynaptic membrane, moving it closer to the threshold needed to trigger an action potential.",
    ]
  },
  {
    topic: "Synaptic Transmission",
    question: "An inhibitory postsynaptic potential (IPSP) can be described as a postsynaptic change that?",
    options: [
      "Depolarizes the membrane toward threshold",
      "Hyperpolarizes the membrane or stabilizes",
      "Often opens voltage-gated Na⁺ channels",
      "Directly triggers neurotransmitter release",
    ],
    correct: 1,
    explanation: "IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
    wrongExplanations: [
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptors usually act by?",
    options: [
      "Opening an ion channel pore directly upon binding",
      "Activating G-proteins that modulate ion channels",
      "Blocking all synaptic transmission permanently",
      "Generating action potentials in the presynaptic terminal",
    ],
    correct: 1,
    explanation: "Metabotropic receptors couple to G-proteins, which activate intracellular signaling cascades such as cAMP or IP₃ pathways.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Second Messengers",
    question: "Which outcome is most likely when IP₃ (inositol trisphosphate) produced during metabotropic signaling mainly occurs?",
    options: [
      "Direct opening of voltage-gated Na⁺ channels",
      "Release of Ca²⁺ from intracellular stores",
      "Immediate repolarization of the axon",
      "Degradation of all cAMP in the cell",
    ],
    correct: 1,
    explanation: "IP₃ binds receptors on the endoplasmic reticulum, releasing stored Ca²⁺ into the cytosol as part of the signaling cascade.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptor signaling is usually slower than ionotropic signaling because it involves?",
    options: [
      "Direct ion flux through the receptor pore",
      "G-protein activation and second-messenger",
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
    question: "IP₃ signaling raises cytosolic Ca²⁺ mainly by?",
    options: [
      "Opening plasmalemmal Na⁺ channels when homeostatic mechanisms are intact",
      "Releasing Ca²⁺ from endoplasmic reticulum",
      "Blocking all K⁺ channels permanently when homeostatic mechanisms are intact",
      "Stopping vesicle endocytosis under typical experimental conditions",
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
    topic: "Synaptic Transmission",
    question: "AMPA receptors mediate fast EPSCs at glutamatergic synapses mainly by passing?",
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
    question: "GABA<sub>A</sub> receptor activation usually produces inhibition by?",
    options: [
      "Increasing Cl⁻ conductance when E_Cl⁻ is below",
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
  },
  {
    topic: "Resting Potential",
    question: "Suppose that the Na⁺/K⁺ pump is blocked, over time the resting potential will?",
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
    question: "Suppose that intracellular K⁺ is 140 mM and extracellular K⁺ is 4 mM, E_K is approximately?",
    options: [
      "−95 mV (negative inside)",
      "≈ 60 mV (positive inside)",
      "≈ 0 mV at 37 °C",
      "≈ 120 mV at 37 °C",
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
    topic: "Chemical Synapses",
    question: "Blocking presynaptic voltage-gated Ca²⁺ channels would be expected to most directly reduce?",
    options: [
      "Neurotransmitter release probability",
      "Postsynaptic AMPA receptor density at fast chemical synapses",
      "Axonal myelin thickness when Na⁺ inactivation has progressed",
      "Retinal phototransduction at fast chemical synapses",
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
    topic: "Somatosensation",
    question: "Free nerve endings in skin mainly signal?",
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
    topic: "Resting Potential",
    question: "If E_K = −90 mV and E_Na = +60 mV, increasing P_Na/P_K at rest would be expected to shift V_m?",
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
    question: "Raising intracellular Na⁺ concentration while extracellular Na⁺ is fixed would be expected to make E_Na?",
    options: [
      "Less positive (closer to 0 mV)",
      "More positive with dominant K⁺ permeability at rest",
      "Equal to E_K at mammalian body temperature",
      "Independent of Na⁺ gradients with dominant K⁺ permeability at rest",
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
    topic: "Electrical Signaling",
    question: "Suppose that g_Na increases while V_m is held fixed, the Na⁺ equilibrium current (I_Na) according to I = g(V_m − E_ion) will?",
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
    topic: "Synaptic Transmission",
    question: "Suppose that presynaptic Ca²⁺ influx is reduced, one expects?",
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
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity mainly by?",
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
    topic: "Peptide Transmitters",
    question: "Neuropeptides usually differ from small transmitters by?",
    options: [
      "Slower synthesis/release",
      "Being stored mainly in mitochondria",
      "Opening voltage-gated Na directly",
      "Existing mainly in retina",
    ],
    correct: 0,
    explanation: "Peptides modulate on slower timescales.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate on slower timescales.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate on slower timescales.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Peptides modulate on slower timescales.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Suppose that E_rev for a GABA<sub>A</sub> synapse is near −70 mV at rest, GABA at rest?",
    options: [
      "Produces little change in V_m",
      "Often massive hyperpolarization to −90 mV",
      "Depolarizes to E_Na",
      "Blocks all quantal release",
    ],
    correct: 0,
    explanation: "Driving force is small when E_rev matches V_m; conductance changes still matter.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Driving force is small when E_rev matches V_m; conductance changes still matter.",
      "",
      "",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine depletion in Parkinson disease mainly affects?",
    options: [
      "Basal ganglia circuits for movement initiation and selection",
      "Cochlear inner hair cell transduction",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "NMJ quantal content primarily",
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia motor loops.",
    wrongExplanations: [
      "",
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNc dopamine loss disrupts basal ganglia motor loops.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells usually mediate?",
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
  }
];

const PART3_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Olfactory System",
    question: "In the olfactory system, each olfactory sensory neuron usually expresses?",
    options: [
      "Most olfactory receptor genes simultaneously",
      "One functional olfactory receptor gene",
      "Main mechanism: voltage-gated Na⁺ channels and no receptors",
      "The same receptors as gustatory taste cells",
    ],
    correct: 1,
    explanation: "The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb.",
      "",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum mainly connects?",
    options: [
      "The spinal cord to the cerebellum (localizes the function to the wrong brain region)",
      "Homologous regions of the left and right cerebral hemispheres",
      "The hippocampus to the hypothalamus (localizes the function to the wrong brain region)",
      "Sensory receptors to motor neurons directly (localizes the function to the wrong brain region)",
    ],
    correct: 1,
    explanation: "The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas.",
    wrongExplanations: [
      "",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas.",
      "",
    ]
  },
  {
    topic: "Resting Potential",
    question: "At rest, if K⁺ leak conductance dominates, increasing Na⁺ leak conductance would be expected to shift V_m?",
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
    topic: "Passive Membrane Properties",
    question: "Suppose that λ is short, EPSPs from distal synapses at the axon hillock will be?",
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
    topic: "Electrical Signaling",
    question: "Which statement best describes Suppose that E_ion for a permeant cation is +50 mV and V_m is −70 mV, the driving force for that ion?",
    options: [
      "120 mV inward (V_m − E_ion = −120 mV)",
      "20 mV outward at mammalian body temperature",
      "Zero because the cell is at rest at steady state in normoxic tissue",
      "50 mV with no direction with dominant K⁺ permeability at rest",
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
    topic: "Synaptic Integration",
    question: "EPSP amplitude at the soma is reduced for distal synapses mainly due to?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity mainly through?",
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
    topic: "Resting Potential",
    question: "Which statement best describes Suppose that the Na⁺/K⁺ pump rate doubles but relative leak conductances are unchanged, the immediate effect on V_m?",
    options: [
      "Slight hyperpolarization due to electrogenic",
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
    topic: "Passive Membrane Properties",
    question: "Suppose that both R_m and R_i double while C_m is constant, the length constant λ?",
    options: [
      "Remains unchanged because λ = √(R_m/R_i)",
      "Doubles at steady state in normoxic tissue",
      "Halves under typical experimental conditions",
      "Becomes zero under typical experimental conditions",
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
    topic: "Action Potential Propagation",
    question: "Cooling an axon reduces conduction velocity mainly by?",
    options: [
      "Slowing voltage-gated channel kinetics",
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
    question: "Which statement best describes Suppose that V_m is clamped at E_K, the driving force on K⁺ ions?",
    options: [
      "Zero",
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
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors inhibit neurons mainly by?",
    options: [
      "Opening K⁺ channels via G-proteins",
      "Producing fast Cl⁻ influx through the same pore as GABA<sub>A</sub> receptors",
      "Opening voltage-gated Na⁺ channels to trigger regenerative spikes",
      "Hyperpolarizing by pumping Cl⁻ into the cell against its gradient",
    ],
    correct: 0,
    explanation: "GABA<sub>B</sub> is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry.",
    wrongExplanations: [
      "",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. GABAB is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry.",
      "",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. GABAB is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellum contributes to motor control mainly by?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Cerebellar circuits compare intended and actual movement for fine coordination.",
      "",
      "",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A neuron with reduced Na⁺ channel density would be expected to likely show?",
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
    topic: "Resting Potential",
    question: "Suppose that a drug doubles K⁺ leak conductance without changing the pump, the new resting potential will?",
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
    question: "Suppose that P_Cl increases while E_Cl remains −70 mV and rest is −65 mV, V_m will shift toward?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Halving intracellular Na⁺ while keeping extracellular Na⁺ constant would be expected to make E_Na?",
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
    topic: "Action Potentials",
    question: "Suppose that voltage-gated K⁺ channels are pharmacologically blocked during a spike, repolarization will?",
    options: [
      "Be slowed and the action potential may",
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
    topic: "Action Potential Propagation",
    question: "Suppose that nodes of Ranvier are spaced farther apart in a myelinated axon, conduction velocity typically?",
    options: [
      "Increases up to a point because fewer",
      "Decreases to zero during the rising phase of the spike",
      "Is unaffected by internode distance during the rising phase of the spike",
      "Elimination of all K⁺ channels when Na⁺ inactivation has progressed",
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
    topic: "Synaptic Integration",
    question: "Suppose that EPSPs and IPSPs arrive simultaneously at the axon hillock, the net effect depends on?",
    options: [
      "The algebraic sum of depolarizing",
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
    topic: "Somatosensation",
    question: "C fibers usually convey?",
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
    topic: "Motor Systems",
    question: "Which clinical presentation is most consistent with Corticospinal tract lesions usually produce?",
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
      "",
      "",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that z = +2 for Ca²⁺, a fourfold increase in external Ca²⁺ (fixed internal) changes E_Ca by approximately?",
    options: [
      "Applies a peripheral sensory transduction",
      "61 mV if voltage-gated Na⁺ channels are inactivated",
      "0 mV with dominant K⁺ permeability at rest",
      "−61 mV at mammalian body temperature",
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
    topic: "Action Potential Propagation",
    question: "Suppose that nodal Na⁺ channel density is halved in a myelinated axon, conduction failure is most likely when?",
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
    topic: "Synaptic Transmission",
    question: "Suppose that release probability p approaches 1, the coefficient of variation (CV) of EPSC amplitude across trials?",
    options: [
      "Decreases toward zero",
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
    topic: "Electrical Synapses",
    question: "Suppose that two neurons are coupled by gap junctions, injecting hyperpolarizing current into one will?",
    options: [
      "Hyperpolarize the coupled partner",
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
    topic: "Electrical Signaling",
    question: "Which statement best describes Suppose that E_K is −90 mV and V_m is −60 mV, net K⁺ current through open K⁺ channels?",
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
    topic: "Auditory System",
    question: "The lateral superior olive uses interaural level differences mainly for?",
    options: [
      "High-frequency localization via intensity",
      "Low-frequency phase locking without level",
      "Color processing in V1",
      "Olfactory discrimination in piriform cortex",
    ],
    correct: 0,
    explanation: "LSO compares sound level at the two ears, effective at higher frequencies.",
    wrongExplanations: [
      "",
      "",
      "Cochlear place coding and hair-cell transduction are auditory. The stem concerns hearing mechanics or pathways, not retinotopy or cortical vision maps. LSO compares sound level at the two ears, effective at higher frequencies.",
      "",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate mainly in?",
    options: [
      "Motor cortex and brainstem descending tracts",
      "Photoreceptors (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory bulb mitral cells (maps the lesion to the wrong motor pathway or reflex)",
      "Cochlear inner hair cells (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "UMNs project to spinal/brainstem motor neurons.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. UMNs project to spinal/brainstem motor neurons.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMNs project to spinal/brainstem motor neurons.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Medial temporal lobe damage producing anterograde amnesia mainly disrupts?",
    options: [
      "Forming new declarative/episodic memories",
      "Most procedural skills such as riding a bike",
      "Most sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal ganglion cells encode visual information mainly as?",
    options: [
      "Patterns of action potentials sent to the",
      "Graded muscle contractions in the primary sensory pathway named",
      "Continuous DC without spikes along a uniformly leaky cable",
      "Direct hormone release into CSF before cortical association areas",
    ],
    correct: 0,
    explanation: "Ganglion cells are the spiking output of the retina.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Which outcome is most likely when Damage to primary visual cortex (V1) usually occurs?",
    options: [
      "Cortical blindness in corresponding visual",
      "Complete loss of all sensation including touch",
      "Deafness for all frequencies",
      "Immediate loss of all procedural memory",
    ],
    correct: 0,
    explanation: "V1 lesions produce scotomas or field loss depending on extent.",
    wrongExplanations: [
      "",
      "",
      "",
      "",
    ]
  },
  {
    topic: "Visual System",
    question: "Ganglion cells encode visual information mainly as?",
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
    topic: "Neuroanatomy",
    question: "White matter mainly contains?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. White matter is axons; gray matter is cell bodies and neuropil.",
      "",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is usually associated with?",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Explicit facts/events depend on medial temporal lobe circuits.",
      "",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia usually reflects dysfunction in?",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
    ]
  }
];
