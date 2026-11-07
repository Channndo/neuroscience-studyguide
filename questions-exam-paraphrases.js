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
      "“Efflux of K⁺ through voltage-gated potassium channels” does not match the mechanism (topic: Action Potentials). Voltage-gated Na⁺ channels open at threshold, producing rapid Na⁺ influx that drives the upswing of the action potential. The correct choice—“Influx of Na⁺ through voltage-gated sodium channels”—fits that description.",
      "",
      "“Influx of Cl⁻ through ligand-gated channels” does not match the mechanism (topic: Action Potentials). Voltage-gated Na⁺ channels open at threshold, producing rapid Na⁺ influx that drives the upswing of the action potential. The correct choice—“Influx of Na⁺ through voltage-gated sodium channels”—fits that description.",
      "“Efflux of Ca²⁺ through voltage-gated calcium channels” does not match the mechanism (topic: Action Potentials). Voltage-gated Na⁺ channels open at threshold, producing rapid Na⁺ influx that drives the upswing of the action potential. The correct choice—“Influx of Na⁺ through voltage-gated sodium channels”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the falling phase of an action potential, which ionic current dominates?",
    options: [
      "Na⁺ influx through open sodium channels",
      "K⁺ efflux through voltage-gated potassium channels",
      "Ca²⁺ influx through N-type channels",
      "Cl⁻ influx through GABA receptors",
    ],
    correct: 1,
    explanation: "Voltage-gated K⁺ channels open during repolarization, allowing K⁺ efflux that returns the membrane toward its resting potential.",
    wrongExplanations: [
      "“Na⁺ influx through open sodium channels” does not match the mechanism (topic: Action Potentials). Voltage-gated K⁺ channels open during repolarization, allowing K⁺ efflux that returns the membrane toward its resting potential. The correct choice—“K⁺ efflux through voltage-gated potassium channels”—fits that description.",
      "",
      "“Ca²⁺ influx through N-type channels” does not match the mechanism (topic: Action Potentials). Voltage-gated K⁺ channels open during repolarization, allowing K⁺ efflux that returns the membrane toward its resting potential. The correct choice—“K⁺ efflux through voltage-gated potassium channels”—fits that description.",
      "“Cl⁻ influx through GABA receptors” does not match the mechanism (topic: Action Potentials). Voltage-gated K⁺ channels open during repolarization, allowing K⁺ efflux that returns the membrane toward its resting potential. The correct choice—“K⁺ efflux through voltage-gated potassium channels”—fits that description.",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Myelination of an axon mainly increases:",
    options: [
      "The resting membrane potential (misapplies how active propagation uses local circuit currents)",
      "The speed of action potential propagation",
      "The number of synaptic vesicles released",
      "The equilibrium potential for Na⁺ (misapplies how active propagation uses local circuit currents)",
    ],
    correct: 1,
    explanation: "Myelin reduces membrane capacitance and enables saltatory conduction, allowing faster propagation of action potentials.",
    wrongExplanations: [
      "“The resting membrane potential (misapplies how active propagation uses local circuit…” does not match the mechanism (topic: Action Potential Propagation). Myelin reduces membrane capacitance and enables saltatory conduction, allowing faster propagation of action potentials. The correct choice—“The speed of action potential propagation”—fits that description.",
      "",
      "“The number of synaptic vesicles released” does not match the mechanism (topic: Action Potential Propagation). Myelin reduces membrane capacitance and enables saltatory conduction, allowing faster propagation of action potentials. The correct choice—“The speed of action potential propagation”—fits that description.",
      "“The equilibrium potential for Na⁺ (misapplies how active propagation uses local circ…” does not match the mechanism (topic: Action Potential Propagation). Myelin reduces membrane capacitance and enables saltatory conduction, allowing faster propagation of action potentials. The correct choice—“The speed of action potential propagation”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "If a neuron has high K⁺ leak conductance and only minimal Na⁺ leak conductance, its resting membrane potential would be expected to lie closest to:",
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
    question: "Suppose that extracellular K⁺ concentration is increased while intracellular K⁺ is held constant, the K⁺ equilibrium potential (E_K):",
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
      "The Nernst potential depends logarithmically on the ratio of external to internal concentration (and on valence and temperature). Changing concentrations must shift E_ion; it is not fixed at 0 mV for all ions. The Nernst equation predicts that raising external K⁺ reduces the concentration gradient, shifting E_K toward 0 mV.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period, a larger-than-normal depolarizing stimulus may still trigger a spike because:",
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
    question: "The falling phase of the action potential is driven mainly by delayed-rectifier K⁺ channels because they:",
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
    topic: "Action Potential Propagation",
    question: "Myelin increases conduction velocity mainly by:",
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
    question: "The Goldman equation predicts that if membrane permeability to Na⁺ greatly exceeds permeability to K⁺, V_m would be expected to approach:",
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
    topic: "Passive Membrane Properties",
    question: "For a given constant current injection, a neuron with a larger membrane time constant would be expected to show:",
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
    topic: "Resting Potential",
    question: "What mainly sets the ion concentration gradients that establish the resting potential?",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. The Na⁺/K⁺ pump establishes the concentration gradients that drive passive ion flux at rest.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine modulates striatal circuits mainly through:",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity.",
      "“Voltage-gated Na⁺ channels in the cochlea” does not match the mechanism (topic: Neuromodulation). Dopamine acts through G-protein-coupled receptors to modulate excitability and plasticity. The correct choice—“Metabotropic D1 and D2 receptors altering cAMP and channel activity”—fits that description.",
    ]
  },
  {
    topic: "Visual System",
    question: "Rods are more sensitive than cones mainly because:",
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
    topic: "Neuroanatomy",
    question: "Gray matter consists mainly of:",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Gray matter is rich in neuronal somata and synaptic neuropil.",
    ]
  },
  {
    topic: "Synaptic Integration",
    question: "Shunting inhibition reduces EPSP amplitude mainly by:",
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
    topic: "Somatosensation",
    question: "Free nerve endings in skin mainly detect:",
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
    question: "Each olfactory sensory neuron usually expresses:",
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
    question: "White matter tracts consist mainly of:",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. White matter is dominated by myelinated axon bundles connecting brain regions.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The blood-brain barrier restricts passage of many substances mainly at:",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue.",
    ]
  },
  {
    topic: "Current Clamp",
    question: "During a current-clamp experiment, injecting steady hyperpolarizing current would be expected to typically:",
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
      "“Open voltage-gated Na⁺ channels” does not match the mechanism (topic: Current Clamp). Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold. The correct choice—“Move V_m away from threshold”—fits that description.",
      "“Eliminate K⁺ leak conductance” does not match the mechanism (topic: Current Clamp). Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold. The correct choice—“Move V_m away from threshold”—fits that description.",
      "“Block the Na⁺/K⁺ pump permanently” does not match the mechanism (topic: Current Clamp). Hyperpolarizing current makes the cell more negative, increasing distance to spike threshold. The correct choice—“Move V_m away from threshold”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "Tetrodotoxin (TTX) applied to an axon prevents action potentials mainly by:",
    options: [
      "Blocking voltage-gated Na⁺ channels",
      "Blocking voltage-gated K⁺ channels",
      "Inhibiting the Na⁺/K⁺ ATPase",
      "Sealing gap junctions",
    ],
    correct: 0,
    explanation: "TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    wrongExplanations: [
      "",
      "“Blocking voltage-gated K⁺ channels” does not match the mechanism (topic: Pharmacology). TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation. The correct choice—“Blocking voltage-gated Na⁺ channels”—fits that description.",
      "“Inhibiting the Na⁺/K⁺ ATPase” does not match the mechanism (topic: Pharmacology). TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation. The correct choice—“Blocking voltage-gated Na⁺ channels”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. TTX selectively blocks voltage-gated Na⁺ channels, preventing spike initiation and propagation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that extracellular K⁺ is raised fourfold while intracellular K⁺ is unchanged, E_K shifts approximately:",
    options: [
      "~37 mV toward 0 mV (less negative)",
      "~37 mV more negative",
      "To exactly +58 mV",
      "Not at all because K⁺ is impermeant",
    ],
    correct: 0,
    explanation: "The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0.",
    wrongExplanations: [
      "",
      "“~37 mV more negative” does not match the mechanism (topic: Nernst Equation). The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0. The correct choice—“~37 mV toward 0 mV (less negative)”—fits that description.",
      "“To exactly +58 mV” does not match the mechanism (topic: Nernst Equation). The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0. The correct choice—“~37 mV toward 0 mV (less negative)”—fits that description.",
      "“Not at all because K⁺ is impermeant” does not match the mechanism (topic: Nernst Equation). The Nernst relation includes a log term; a fourfold outside change is about 61 mV × log10(4) ≈ 37 mV toward 0. The correct choice—“~37 mV toward 0 mV (less negative)”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that τ increases but λ is unchanged, subthreshold signals at the soma will:",
    options: [
      "Reach steady deflection more slowly but spread the same distance",
      "Spread farther along dendrites (misstates how R_m, C_m, or geometry set τ or λ)",
      "Always trigger full spikes (misstates how R_m, C_m, or geometry set τ or λ)",
      "No longer decay passively (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
    wrongExplanations: [
      "",
      "“Spread farther along dendrites (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory. The correct choice—“Reach steady deflection more slowly but spread the same distance”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory.",
      "“No longer decay passively (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). τ = R_m C_m sets temporal filtering; λ sets spatial spread independently in idealized cable theory. The correct choice—“Reach steady deflection more slowly but spread the same distance”—fits that description.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that P_Cl becomes significant at rest and E_Cl is more negative than V_m, adding Cl⁻ conductance will:",
    options: [
      "Tend to hyperpolarize or stabilize V_m toward E_Cl",
      "Always depolarize to E_Na (ignores weighted permeabilities in the constant-field equation)",
      "Have no effect because Cl⁻ is not charged (ignores weighted permeabilities in the constant-field equation)",
      "Reverse the Na⁺/K⁺ pump (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest.",
      "“Have no effect because Cl⁻ is not charged (ignores weighted permeabilities in the co…” does not match the mechanism (topic: Goldman Equation). Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest. The correct choice—“Tend to hyperpolarize or stabilize V_m toward E_Cl”—fits that description.",
      "“Reverse the Na⁺/K⁺ pump (ignores weighted permeabilities in the constant-field equat…” does not match the mechanism (topic: Goldman Equation). Opening Cl⁻ conductance pulls V_m toward E_Cl, often hyperpolarizing when E_Cl is negative to rest. The correct choice—“Tend to hyperpolarize or stabilize V_m toward E_Cl”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period, a second stimulus must be:",
    options: [
      "Stronger to reach threshold because many Na⁺ channels remain inactivated",
      "Weaker because K⁺ channels are closed",
      "Identical in strength always",
      "Applied only to dendrites",
    ],
    correct: 0,
    explanation: "Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    wrongExplanations: [
      "",
      "“Weaker because K⁺ channels are closed” does not match the mechanism (topic: Action Potentials). Partial Na⁺ channel inactivation raises the effective threshold for a second spike. The correct choice—“Stronger to reach threshold because many Na⁺ channels remain inactivated”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Partial Na⁺ channel inactivation raises the effective threshold for a second spike.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose that the cell is permeable only to K⁺ at rest, V_m equals E_K. Adding a small Na⁺ leak without changing pump activity will:",
    options: [
      "Make V_m less negative (depolarized relative to E_K)",
      "Make V_m equal E_Na instantly (ignores which ion dominates resting permeability)",
      "Hyperpolarize below E_K always (ignores which ion dominates resting permeability)",
      "Stop all ion movement (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
    wrongExplanations: [
      "",
      "“Make V_m equal E_Na instantly (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest. The correct choice—“Make V_m less negative (depolarized relative to E_K)”—fits that description.",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest.",
      "“Stop all ion movement (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Na⁺ leak pulls resting potential toward E_Na, depolarizing from pure K⁺ rest. The correct choice—“Make V_m less negative (depolarized relative to E_K)”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Cooling an axon usually slows conduction because:",
    options: [
      "Channel kinetics and ion mobility slow",
      "Myelin is converted to cerebrospinal fluid",
      "Resting potential becomes +40 mV",
      "Na⁺/K⁺ pump reverses direction",
    ],
    correct: 0,
    explanation: "Lower temperature slows gating and diffusion, delaying spike propagation.",
    wrongExplanations: [
      "",
      "“Myelin is converted to cerebrospinal fluid” does not match the mechanism (topic: Action Potentials). Lower temperature slows gating and diffusion, delaying spike propagation. The correct choice—“Channel kinetics and ion mobility slow”—fits that description.",
      "“Resting potential becomes +40 mV” does not match the mechanism (topic: Action Potentials). Lower temperature slows gating and diffusion, delaying spike propagation. The correct choice—“Channel kinetics and ion mobility slow”—fits that description.",
      "“Na⁺/K⁺ pump reverses direction” does not match the mechanism (topic: Action Potentials). Lower temperature slows gating and diffusion, delaying spike propagation. The correct choice—“Channel kinetics and ion mobility slow”—fits that description.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that P_K >> P_Na at rest and P_Cl is negligible, increasing P_Na slightly will:",
    options: [
      "Depolarize V_m toward E_Na",
      "Hyperpolarize to E_K instantly",
      "Fix V_m at 0 mV always",
      "Stop the Na⁺/K⁺ pump",
    ],
    correct: 0,
    explanation: "Goldman weighting shifts V_m toward newly permeant ions.",
    wrongExplanations: [
      "",
      "EPSPs are depolarizing (or less hyperpolarized) shifts that move V_m toward spike threshold. Hyperpolarization or clamping toward E_K describes inhibition (IPSPs), not excitation. Goldman weighting shifts V_m toward newly permeant ions.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Goldman weighting shifts V_m toward newly permeant ions.",
      "“Stop the Na⁺/K⁺ pump” does not match the mechanism (topic: Goldman Equation). Goldman weighting shifts V_m toward newly permeant ions. The correct choice—“Depolarize V_m toward E_Na”—fits that description.",
    ]
  },
  {
    topic: "Quantitative Physiology",
    question: "Suppose that E_K = -80 mV and E_Na = +60 mV, V_m at rest near -65 mV implies:",
    options: [
      "Resting permeability is dominated by K+ with some Na+ leak",
      "Requires na+ channels are open",
      "V_m equals E_Na",
      "No ion gradients exist",
    ],
    correct: 0,
    explanation: "Rest lies closer to E_K when K+ permeability dominates.",
    wrongExplanations: [
      "",
      "“Requires na+ channels are open” does not match the mechanism (topic: Quantitative Physiology). Rest lies closer to E_K when K+ permeability dominates. The correct choice—“Resting permeability is dominated by K+ with some Na+ leak”—fits that description.",
      "“V_m equals E_Na” does not match the mechanism (topic: Quantitative Physiology). Rest lies closer to E_K when K+ permeability dominates. The correct choice—“Resting permeability is dominated by K+ with some Na+ leak”—fits that description.",
      "“No ion gradients exist” does not match the mechanism (topic: Quantitative Physiology). Rest lies closer to E_K when K+ permeability dominates. The correct choice—“Resting permeability is dominated by K+ with some Na+ leak”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane leak conductance increases by ~10% (R_m falls) with unchanged geometry, the length constant λ typically:",
    options: [
      "Becomes shorter (less spatial spread)",
      "Becomes infinitely long (misstates how R_m, C_m, or geometry set τ or λ)",
      "Does not change ever (misstates how R_m, C_m, or geometry set τ or λ)",
      "Converts dendrites to photoreceptors",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    wrongExplanations: [
      "",
      "“Becomes infinitely long (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Higher leak (lower R_m) shortens λ, attenuating signals faster with distance. The correct choice—“Becomes shorter (less spatial spread)”—fits that description.",
      "“Does not change ever (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Higher leak (lower R_m) shortens λ, attenuating signals faster with distance. The correct choice—“Becomes shorter (less spatial spread)”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Higher leak (lower R_m) shortens λ, attenuating signals faster with distance.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the threshold period/mechanism:",
    options: [
      "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
      "Myelin is synthesized in the soma",
      "Gap junctions relay dark current from cones to rods exclusively",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    wrongExplanations: [
      "",
      "“Myelin is synthesized in the soma” does not match the mechanism (topic: Action Potentials). Net inward current exceeds outward current initiating regenerative Na⁺ entry The correct choice—“Net inward current exceeds outward current initiating regenerative Na⁺ entry”—fits that description.",
      "Gap junctions pass current directly between coupled cells (electrical synapses); they do not implement the timed opening of voltage-gated Na⁺ and K⁺ conductances that shapes an action potential. Net inward current exceeds outward current initiating regenerative Na⁺ entry",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Net inward current exceeds outward current initiating regenerative Na⁺ entry",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the absolute refractory period/mechanism:",
    options: [
      "Many Na⁺ channels inactivated",
      "Myelin is synthesized in the soma",
      "Only GABA is released globally",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Many Na⁺ channels inactivated; no new spike possible",
    wrongExplanations: [
      "",
      "“Myelin is synthesized in the soma” does not match the mechanism (topic: Action Potentials). Many Na⁺ channels inactivated; no new spike possible The correct choice—“Many Na⁺ channels inactivated”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Many Na⁺ channels inactivated; no new spike possible",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Many Na⁺ channels inactivated; no new spike possible",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the relative refractory period/mechanism:",
    options: [
      "Partial recovery requires stronger stimulus",
      "Myelin is synthesized in the soma",
      "Requires gABA is released globally",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Partial recovery requires stronger stimulus",
    wrongExplanations: [
      "",
      "“Myelin is synthesized in the soma” does not match the mechanism (topic: Action Potentials). Partial recovery requires stronger stimulus The correct choice—“Partial recovery requires stronger stimulus”—fits that description.",
      "“Requires gABA is released globally” does not match the mechanism (topic: Action Potentials). Partial recovery requires stronger stimulus The correct choice—“Partial recovery requires stronger stimulus”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Partial recovery requires stronger stimulus",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the afterhyperpolarization period/mechanism:",
    options: [
      "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
      "Myelin is synthesized in the soma",
      "Requires gABA is released globally",
      "Photoreceptors depolarize to light",
    ],
    correct: 0,
    explanation: "Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    wrongExplanations: [
      "",
      "“Myelin is synthesized in the soma” does not match the mechanism (topic: Action Potentials). Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest The correct choice—“Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest”—fits that description.",
      "“Requires gABA is released globally” does not match the mechanism (topic: Action Potentials). Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest The correct choice—“Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Delayed K⁺ (and sometimes Ca²⁺-activated K⁺) drives V_m below rest",
    ]
  },
  {
    topic: "Action Potential Propagation",
    question: "Structure/condition: Unmyelinated axon. Key process and outcome:",
    options: [
      "Active regeneration along membrane; Non-decremental propagation",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
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
    question: "Structure/condition: Myelinated axon. Key process and outcome:",
    options: [
      "Nodes of Ranvier concentrate Na⁺ channels; Saltatory conduction",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
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
    question: "Structure/condition: Cold temperature. Key process and outcome:",
    options: [
      "Slower channel kinetics; Reduced conduction velocity",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
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
    question: "Structure/condition: Local anesthetic. Key process and outcome:",
    options: [
      "Na⁺ block in pain fibers; Loss of sensation in region",
      "Only passive spread forever (misapplies how active propagation uses local circuit currents)",
      "Only cochlear tuning (misapplies how active propagation uses local circuit currents)",
      "Only LTP induction (misapplies how active propagation uses local circuit currents)",
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
    question: "Suppose that leak conductance rises by 12% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
    options: [
      "Shorter — signals attenuate faster with distance",
      "Longer — signals spread farther always (misstates how R_m, C_m, or geometry set τ or λ)",
      "Unchanged — λ never depends on R_m (misstates how R_m, C_m, or geometry set τ or λ)",
      "Infinite — passive spread without limit (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Higher leak (lower R_m) shortens λ in passive cable models.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher leak (lower R_m) shortens λ in passive cable models.",
      "“Infinite — passive spread without limit (misstates how R_m, C_m, or geometry set τ o…” does not match the mechanism (topic: Passive Membrane Properties). Higher leak (lower R_m) shortens λ in passive cable models. The correct choice—“Shorter — signals attenuate faster with distance”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Suppose that membrane capacitance increases by 15% while R_m is held fixed, the time constant τ is:",
    options: [
      "~115% of baseline (τ = R_m C_m)",
      "Zero — voltage changes instantly always",
      "Independent of C_m always",
      "Determined only by myelin thickness",
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
    question: "Suppose that intracellular Na⁺ rises while extracellular Na⁺ is fixed, E_Na shifts:",
    options: [
      "Less positive (toward 0 mV)",
      "More positive beyond +100 mV",
      "To match E_K",
      "Not at all — Nernst ignores Na⁺",
    ],
    correct: 0,
    explanation: "Higher inside Na⁺ reduces the driving equilibrium toward outside.",
    wrongExplanations: [
      "",
      "“More positive beyond +100 mV” does not match the mechanism (topic: Nernst Equation). Higher inside Na⁺ reduces the driving equilibrium toward outside. The correct choice—“Less positive (toward 0 mV)”—fits that description.",
      "“To match E_K” does not match the mechanism (topic: Nernst Equation). Higher inside Na⁺ reduces the driving equilibrium toward outside. The correct choice—“Less positive (toward 0 mV)”—fits that description.",
      "“Not at all — Nernst ignores Na⁺” does not match the mechanism (topic: Nernst Equation). Higher inside Na⁺ reduces the driving equilibrium toward outside. The correct choice—“Less positive (toward 0 mV)”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Myelin on an axon mainly increases effective R_m locally, which:",
    options: [
      "Lengthens λ and reduces current leak per unit length",
      "Shortens λ by increasing capacitance only (misstates how R_m, C_m, or geometry set τ or λ)",
      "Prevents all ion flow at nodes (misstates how R_m, C_m, or geometry set τ or λ)",
      "Converts active to purely graded signals forever (misstates how R_m, C_m, or geometry set τ or λ)",
    ],
    correct: 0,
    explanation: "Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Myelin reduces membrane leak between nodes, improving passive spread to the next node.",
      "“Prevents all ion flow at nodes (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Myelin reduces membrane leak between nodes, improving passive spread to the next node. The correct choice—“Lengthens λ and reduces current leak per unit length”—fits that description.",
      "“Converts active to purely graded signals forever (misstates how R_m, C_m, or geometr…” does not match the mechanism (topic: Passive Membrane Properties). Myelin reduces membrane leak between nodes, improving passive spread to the next node. The correct choice—“Lengthens λ and reduces current leak per unit length”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "In the phase associated with the rising phase of a squid-giant-axon spike, the dominant current is:",
    options: [
      "Inward Na⁺ through voltage-gated channels",
      "Outward K⁺ through leak channels only",
      "Inward Cl⁻ through GABA receptors",
      "Na⁺/K⁺ pump current reversing each ms",
    ],
    correct: 0,
    explanation: "Voltage-gated Na⁺ entry drives rapid depolarization.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Voltage-gated Na⁺ entry drives rapid depolarization.",
      "“Inward Cl⁻ through GABA receptors” does not match the mechanism (topic: Action Potentials). Voltage-gated Na⁺ entry drives rapid depolarization. The correct choice—“Inward Na⁺ through voltage-gated channels”—fits that description.",
      "“Na⁺/K⁺ pump current reversing each ms” does not match the mechanism (topic: Action Potentials). Voltage-gated Na⁺ entry drives rapid depolarization. The correct choice—“Inward Na⁺ through voltage-gated channels”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Suppose that voltage-gated K⁺ channels are blocked during a spike, you expect:",
    options: [
      "Prolonged repolarization and broader spikes",
      "No change in spike width",
      "Immediate loss of resting potential",
      "Requires photoreceptor responses",
    ],
    correct: 0,
    explanation: "Delayed K⁺ repolarization widens the action potential.",
    wrongExplanations: [
      "",
      "“No change in spike width” does not match the mechanism (topic: Action Potentials). Delayed K⁺ repolarization widens the action potential. The correct choice—“Prolonged repolarization and broader spikes”—fits that description.",
      "“Immediate loss of resting potential” does not match the mechanism (topic: Action Potentials). Delayed K⁺ repolarization widens the action potential. The correct choice—“Prolonged repolarization and broader spikes”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Delayed K⁺ repolarization widens the action potential.",
    ]
  },
  {
    topic: "Patch Clamp",
    question: "Whole-cell patch clamp relative to cell-attached recording:",
    options: [
      "Controls V_m or I_m across the entire cell interior",
      "Samples only one ion species with no pipette access",
      "Measures muscle force transduction",
      "Replaces need for electrodes in cochlea",
    ],
    correct: 0,
    explanation: "Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane.",
      "“Measures muscle force transduction” does not match the mechanism (topic: Patch Clamp). Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane. The correct choice—“Controls V_m or I_m across the entire cell interior”—fits that description.",
      "“Replaces need for electrodes in cochlea” does not match the mechanism (topic: Patch Clamp). Whole-cell dialyzes the cytoplasm and clamps the entire cell membrane. The correct choice—“Controls V_m or I_m across the entire cell interior”—fits that description.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that selectively increases K⁺ leak conductance at rest would be expected to tend to:",
    options: [
      "Hyperpolarize the cell and shorten λ",
      "Depolarize toward E_Na",
      "Block all synaptic vesicle fusion",
      "Increase cochlear gain only",
    ],
    correct: 0,
    explanation: "More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    wrongExplanations: [
      "",
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
      "“Block all synaptic vesicle fusion” does not match the mechanism (topic: Pharmacology). More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ. The correct choice—“Hyperpolarize the cell and shorten λ”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: More leak conductance lowers R_m, hyperpolarizing toward E_K and shortening λ.",
    ]
  },
  {
    topic: "Voltage Clamp",
    question: "In voltage clamp, a downward step in command potential usually produces:",
    options: [
      "Inward (negative) clamp current if channels open during the step",
      "Zero current because voltage is clamped",
      "Requires mechanical cochlear motion",
      "Irreversible LTP",
    ],
    correct: 0,
    explanation: "Clamp current equals the net ionic current required to hold V constant.",
    wrongExplanations: [
      "",
      "“Zero current because voltage is clamped” does not match the mechanism (topic: Voltage Clamp). Clamp current equals the net ionic current required to hold V constant. The correct choice—“Inward (negative) clamp current if channels open during the step”—fits that description.",
      "“Requires mechanical cochlear motion” does not match the mechanism (topic: Voltage Clamp). Clamp current equals the net ionic current required to hold V constant. The correct choice—“Inward (negative) clamp current if channels open during the step”—fits that description.",
      "“Irreversible LTP” does not match the mechanism (topic: Voltage Clamp). Clamp current equals the net ionic current required to hold V constant. The correct choice—“Inward (negative) clamp current if channels open during the step”—fits that description.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Suppose that Cl⁻ channels open with E_Cl below rest, net Cl⁻ current at rest will:",
    options: [
      "Be inward (hyperpolarizing) until V_m approaches E_Cl",
      "Always be outward (ignores weighted permeabilities in the constant-field equation)",
      "Be zero because Cl⁻ is impermeant (ignores weighted permeabilities in the constant-field equation)",
      "Depend only on photopigment (ignores weighted permeabilities in the constant-field equation)",
    ],
    correct: 0,
    explanation: "When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
      "“Be zero because Cl⁻ is impermeant (ignores weighted permeabilities in the constant-f…” does not match the mechanism (topic: Goldman Equation). When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes. The correct choice—“Be inward (hyperpolarizing) until V_m approaches E_Cl”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: When V_m is above E_Cl, Cl⁻ enters and hyperpolarizes.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Afterhyperpolarization following a spike is mainly due to:",
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
      "“Reopening of all Na⁺ channels” does not match the mechanism (topic: Action Potentials). Delayed K⁺ currents drive V_m below rest briefly. The correct choice—“Continued/outlasting K⁺ conductance”—fits that description.",
      "“Cl⁻ influx through AMPA receptors” does not match the mechanism (topic: Action Potentials). Delayed K⁺ currents drive V_m below rest briefly. The correct choice—“Continued/outlasting K⁺ conductance”—fits that description.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Delayed K⁺ currents drive V_m below rest briefly.",
    ]
  },
  {
    topic: "Goldman Equation",
    question: "Increasing extracellular Na⁺ while holding intracellular Na⁺ fixed would be expected to shift the Goldman resting potential:",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na.",
      "“Away from any ion equilibrium” does not match the mechanism (topic: Goldman Equation). Higher external Na⁺ makes E_Na more positive; if a small Na⁺ leak exists at rest, V_m shifts slightly toward E_Na. The correct choice—“Toward E_Na (less negative)”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "Suppose K⁺ leak conductance is blocked but the Na⁺/K⁺ pump keeps gradients intact and a small resting Na⁺ leak remains. V_m will tend to move:",
    options: [
      "Toward E_Na (depolarized relative to normal K⁺-dominated rest)",
      "Toward E_K as if K⁺ leak were unchanged (ignores which ion dominates resting permeability)",
      "To 0 mV instantly regardless of gradients (ignores which ion dominates resting permeability)",
      "Below −150 mV (ignores which ion dominates resting permeability)",
    ],
    correct: 0,
    explanation: "Removing dominant K⁺ leak leaves remaining Na⁺ conductances to set V_m closer to E_Na.",
    wrongExplanations: [
      "",
      "“Toward E_K as if K⁺ leak were unchanged (ignores which ion dominates resting permeab…” does not match the mechanism (topic: Resting Potential). Removing dominant K⁺ leak leaves remaining Na⁺ conductances to set V_m closer to E_Na. The correct choice—“Toward E_Na (depolarized relative to normal K⁺-dominated rest)”—fits that description.",
      "“To 0 mV instantly regardless of gradients (ignores which ion dominates resting perme…” does not match the mechanism (topic: Resting Potential). Removing dominant K⁺ leak leaves remaining Na⁺ conductances to set V_m closer to E_Na. The correct choice—“Toward E_Na (depolarized relative to normal K⁺-dominated rest)”—fits that description.",
      "“Below −150 mV (ignores which ion dominates resting permeability)” does not match the mechanism (topic: Resting Potential). Removing dominant K⁺ leak leaves remaining Na⁺ conductances to set V_m closer to E_Na. The correct choice—“Toward E_Na (depolarized relative to normal K⁺-dominated rest)”—fits that description.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that [K⁺]_out equals [K⁺]_in, the Nernst equilibrium potential for K⁺ is:",
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
    topic: "Electrical Signaling",
    question: "Suppose that V_m is held at E_K, the driving force on K⁺ is:",
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
      "“Maximal outward” does not match the mechanism (topic: Electrical Signaling). At equilibrium potential, net electrochemical driving force for that ion is zero. The correct choice—“Zero”—fits that description.",
      "“Maximal inward” does not match the mechanism (topic: Electrical Signaling). At equilibrium potential, net electrochemical driving force for that ion is zero. The correct choice—“Zero”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: At equilibrium potential, net electrochemical driving force for that ion is zero.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "Membrane capacitance arises mainly because:",
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
      "“Myelin increases ion channel density (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets. The correct choice—“The lipid bilayer stores charge separated across a thin dielectric”—fits that description.",
      "“Na⁺ channels pump charge into the ER (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets. The correct choice—“The lipid bilayer stores charge separated across a thin dielectric”—fits that description.",
      "“Dendrites lack any resistance (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). The bilayer acts as a capacitor; charge accumulates on inner and outer leaflets. The correct choice—“The lipid bilayer stores charge separated across a thin dielectric”—fits that description.",
    ]
  },
  {
    topic: "Passive Membrane Properties",
    question: "An EPSP recorded at the soma from a distal synapse is usually smaller and slower because of:",
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
      "“Complete absence of ionotropic receptors (misstates how R_m, C_m, or geometry set τ …” does not match the mechanism (topic: Passive Membrane Properties). Passive spread along dendrites attenuates amplitude and spreads rise time. The correct choice—“Cable filtering (attenuation and low-pass filtering)”—fits that description.",
      "“Myelin on dendrites (misstates how R_m, C_m, or geometry set τ or λ)” does not match the mechanism (topic: Passive Membrane Properties). Passive spread along dendrites attenuates amplitude and spreads rise time. The correct choice—“Cable filtering (attenuation and low-pass filtering)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Passive spread along dendrites attenuates amplitude and spreads rise time.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "Tetrodotoxin (TTX) blocks action potentials mainly by binding:",
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
    question: "Tetraethylammonium (TEA) applied to axons usually prolongs spikes by blocking:",
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
    question: "Suppose that voltage-gated Na⁺ channels are held in the inactivated state, the neuron:",
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
    topic: "Experimental Methods",
    question: "Voltage clamp was developed mainly to:",
    options: [
      "Hold membrane voltage constant and measure the currents required",
      "Measure only resting potential without perturbation",
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
    topic: "Ion Selectivity",
    question: "Suppose that E_Na is +60 mV and V_m is −65 mV, the electrochemical driving force on Na⁺ favors:",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m negative relative to E_Na drives cation influx if channels open.",
      "“No movement regardless of channels” does not match the mechanism (topic: Ion Selectivity). V_m negative relative to E_Na drives cation influx if channels open. The correct choice—“Inward Na⁺ movement (into the cell)”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: V_m negative relative to E_Na drives cation influx if channels open.",
    ]
  },
  {
    topic: "Pharmacology",
    question: "A drug that increases K⁺ conductance at rest would be expected to generally:",
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
    topic: "Quantitative Physiology",
    question: "Suppose that g_Na increases transiently during a spike while g_K rises later, the sequence reflects:",
    options: [
      "Hodgkin–Huxley separation of Na⁺ activation and K⁺ delayed activation",
      "Goldman equation for multi-ion resting potential only (not time-varying spike conductances)",
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
    question: "An excitatory postsynaptic potential (EPSP) can be described as a postsynaptic depolarization that:",
    options: [
      "Always prevents action potential generation (mixes up presynaptic release with postsynaptic receptor logic)",
      "Brings the membrane closer to threshold for firing",
      "Always hyperpolarizes the postsynaptic cell (mixes up presynaptic release with postsynaptic receptor logic)",
      "Only occurs at inhibitory synapses (mixes up presynaptic release with postsynaptic receptor logic)",
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
    question: "An inhibitory postsynaptic potential (IPSP) can be described as a postsynaptic change that:",
    options: [
      "Depolarizes the membrane toward threshold (mixes up presynaptic release with postsynaptic receptor logic)",
      "Hyperpolarizes the membrane or stabilizes it away from threshold",
      "Always opens voltage-gated Na⁺ channels (mixes up presynaptic release with postsynaptic receptor logic)",
      "Directly triggers neurotransmitter release (mixes up presynaptic release with postsynaptic receptor logic)",
    ],
    correct: 1,
    explanation: "IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
    wrongExplanations: [
      "IPSPs make firing less likely by hyperpolarizing the cell or shunting depolarizing current. Depolarizing EPSPs bring the membrane closer to threshold—that is the opposite direction. IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold.",
      "“Directly triggers neurotransmitter release (mixes up presynaptic release with postsy…” does not match the mechanism (topic: Synaptic Transmission). IPSPs hyperpolarize the postsynaptic cell or clamp the membrane potential, making it harder to reach threshold. The correct choice—“Hyperpolarizes the membrane or stabilizes it away from threshold”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptors usually act by:",
    options: [
      "Opening an ion channel pore directly upon binding",
      "Activating G-proteins that modulate ion channels or second-messenger systems",
      "Blocking all synaptic transmission permanently",
      "Generating action potentials in the presynaptic terminal",
    ],
    correct: 1,
    explanation: "Metabotropic receptors couple to G-proteins, which activate intracellular signaling cascades such as cAMP or IP₃ pathways.",
    wrongExplanations: [
      "“Opening an ion channel pore directly upon binding” does not match the mechanism (topic: Receptor Types). Metabotropic receptors couple to G-proteins, which activate intracellular signaling cascades such as cAMP or IP₃ pathways. The correct choice—“Activating G-proteins that modulate ion channels or second-messenger systems”—fits that description.",
      "",
      "“Blocking all synaptic transmission permanently” does not match the mechanism (topic: Receptor Types). Metabotropic receptors couple to G-proteins, which activate intracellular signaling cascades such as cAMP or IP₃ pathways. The correct choice—“Activating G-proteins that modulate ion channels or second-messenger systems”—fits that description.",
      "“Generating action potentials in the presynaptic terminal” does not match the mechanism (topic: Receptor Types). Metabotropic receptors couple to G-proteins, which activate intracellular signaling cascades such as cAMP or IP₃ pathways. The correct choice—“Activating G-proteins that modulate ion channels or second-messenger systems”—fits that description.",
    ]
  },
  {
    topic: "Second Messengers",
    question: "IP₃ (inositol trisphosphate) produced during metabotropic signaling mainly causes:",
    options: [
      "Direct opening of voltage-gated Na⁺ channels",
      "Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum",
      "Immediate repolarization of the axon",
      "Degradation of all cAMP in the cell",
    ],
    correct: 1,
    explanation: "IP₃ binds receptors on the endoplasmic reticulum, releasing stored Ca²⁺ into the cytosol as part of the signaling cascade.",
    wrongExplanations: [
      "“Direct opening of voltage-gated Na⁺ channels” does not match the mechanism (topic: Second Messengers). IP₃ binds receptors on the endoplasmic reticulum, releasing stored Ca²⁺ into the cytosol as part of the signaling cascade. The correct choice—“Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum”—fits that description.",
      "",
      "“Immediate repolarization of the axon” does not match the mechanism (topic: Second Messengers). IP₃ binds receptors on the endoplasmic reticulum, releasing stored Ca²⁺ into the cytosol as part of the signaling cascade. The correct choice—“Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum”—fits that description.",
      "“Degradation of all cAMP in the cell” does not match the mechanism (topic: Second Messengers). IP₃ binds receptors on the endoplasmic reticulum, releasing stored Ca²⁺ into the cytosol as part of the signaling cascade. The correct choice—“Release of Ca²⁺ from intracellular stores in the endoplasmic reticulum”—fits that description.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "Metabotropic receptor signaling is usually slower than ionotropic signaling because it involves:",
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
    question: "IP₃ signaling raises cytosolic Ca²⁺ mainly by:",
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
    topic: "Synaptic Transmission",
    question: "AMPA receptors mediate fast EPSCs at glutamatergic synapses mainly by passing:",
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
    question: "GABA<sub>A</sub> receptor activation usually produces inhibition by:",
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
  },
  {
    topic: "Resting Potential",
    question: "Suppose that the Na⁺/K⁺ pump is blocked, over time the resting potential will:",
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
    question: "Suppose that intracellular K⁺ is 140 mM and extracellular K⁺ is 4 mM, E_K is approximately:",
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
    topic: "Chemical Synapses",
    question: "Blocking presynaptic voltage-gated Ca²⁺ channels would be expected to most directly reduce:",
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
    topic: "Somatosensation",
    question: "Free nerve endings in skin mainly signal:",
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
    topic: "Resting Potential",
    question: "If E_K = −90 mV and E_Na = +60 mV, increasing P_Na/P_K at rest would be expected to shift V_m:",
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
    question: "Raising intracellular Na⁺ concentration while extracellular Na⁺ is fixed would be expected to make E_Na:",
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
    topic: "Electrical Signaling",
    question: "Suppose that g_Na increases while V_m is held fixed, the Na⁺ equilibrium current (I_Na) according to I = g(V_m − E_ion) will:",
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
    topic: "Synaptic Transmission",
    question: "Suppose that presynaptic Ca²⁺ influx is reduced, one expects:",
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
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity mainly by:",
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
    topic: "Peptide Transmitters",
    question: "Neuropeptides usually differ from small transmitters by:",
    options: [
      "Slower synthesis/release and longer-range/modulatory actions",
      "Being stored only in mitochondria",
      "Opening voltage-gated Na directly always",
      "Existing only in retina",
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
    question: "Suppose that E_rev for a GABA<sub>A</sub> synapse is near −70 mV at rest, GABA at rest:",
    options: [
      "Produces little change in V_m (shunting may still occur)",
      "Always massive hyperpolarization to −90 mV (ignores how EPSPs/IPSPs sum in time or space)",
      "Depolarizes to E_Na (ignores how EPSPs/IPSPs sum in time or space)",
      "Blocks all quantal release (ignores how EPSPs/IPSPs sum in time or space)",
    ],
    correct: 0,
    explanation: "Driving force is small when E_rev matches V_m; conductance changes still matter.",
    wrongExplanations: [
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Driving force is small when E_rev matches V_m; conductance changes still matter.",
      "“Depolarizes to E_Na (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Driving force is small when E_rev matches V_m; conductance changes still matter. The correct choice—“Produces little change in V_m (shunting may still occur)”—fits that description.",
      "“Blocks all quantal release (ignores how EPSPs/IPSPs sum in time or space)” does not match the mechanism (topic: Synaptic Integration). Driving force is small when E_rev matches V_m; conductance changes still matter. The correct choice—“Produces little change in V_m (shunting may still occur)”—fits that description.",
    ]
  },
  {
    topic: "Neuromodulation",
    question: "Dopamine depletion in Parkinson disease mainly affects:",
    options: [
      "Basal ganglia circuits for movement initiation and selection",
      "Cochlear inner hair cell transduction",
      "Assigns an unrelated sensory or synaptic mechanism to this context",
      "NMJ quantal content exclusively",
    ],
    correct: 0,
    explanation: "SNc dopamine loss disrupts basal ganglia motor loops.",
    wrongExplanations: [
      "",
      "“Cochlear inner hair cell transduction” does not match the mechanism (topic: Neuromodulation). SNc dopamine loss disrupts basal ganglia motor loops. The correct choice—“Basal ganglia circuits for movement initiation and selection”—fits that description.",
      "“Assigns an unrelated sensory or synaptic mechanism to this context” does not match the mechanism (topic: Neuromodulation). SNc dopamine loss disrupts basal ganglia motor loops. The correct choice—“Basal ganglia circuits for movement initiation and selection”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: SNc dopamine loss disrupts basal ganglia motor loops.",
    ]
  },
  {
    topic: "Receptor Types",
    question: "AMPA receptors on hippocampal pyramidal cells usually mediate:",
    options: [
      "Fast excitatory postsynaptic currents at many glutamatergic synapses",
      "Slow G-protein inhibitory currents only",
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
  }
];

const PART3_EXAM_PARAPHRASE_POOL = [
  {
    topic: "Olfactory System",
    question: "In the olfactory system, each olfactory sensory neuron usually expresses:",
    options: [
      "All olfactory receptor genes simultaneously",
      "One functional olfactory receptor gene",
      "Only voltage-gated Na⁺ channels and no receptors",
      "The same receptors as gustatory taste cells",
    ],
    correct: 1,
    explanation: "The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb.",
    wrongExplanations: [
      "“All olfactory receptor genes simultaneously” does not match the mechanism (topic: Olfactory System). The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb. The correct choice—“One functional olfactory receptor gene”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb.",
      "“The same receptors as gustatory taste cells” does not match the mechanism (topic: Olfactory System). The one neuron–one receptor rule ensures each OSN responds to a defined subset of odorants for combinatorial coding in the bulb. The correct choice—“One functional olfactory receptor gene”—fits that description.",
    ]
  },
  {
    topic: "Neuroanatomy",
    question: "The corpus callosum mainly connects:",
    options: [
      "The spinal cord to the cerebellum (localizes the function to the wrong brain region)",
      "Homologous regions of the left and right cerebral hemispheres",
      "The hippocampus to the hypothalamus only (localizes the function to the wrong brain region)",
      "Sensory receptors to motor neurons directly (localizes the function to the wrong brain region)",
    ],
    correct: 1,
    explanation: "The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas.",
    wrongExplanations: [
      "“The spinal cord to the cerebellum (localizes the function to the wrong brain region)” does not match the mechanism (topic: Neuroanatomy). The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas. The correct choice—“Homologous regions of the left and right cerebral hemispheres”—fits that description.",
      "",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas.",
      "“Sensory receptors to motor neurons directly (localizes the function to the wrong bra…” does not match the mechanism (topic: Neuroanatomy). The corpus callosum is the largest commissural tract, enabling interhemispheric communication between corresponding cortical areas. The correct choice—“Homologous regions of the left and right cerebral hemispheres”—fits that description.",
    ]
  },
  {
    topic: "Resting Potential",
    question: "At rest, if K⁺ leak conductance dominates, increasing Na⁺ leak conductance would be expected to shift V_m:",
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
    topic: "Passive Membrane Properties",
    question: "Suppose that λ is short, EPSPs from distal synapses at the axon hillock will be:",
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
    topic: "Electrical Signaling",
    question: "Suppose that E_ion for a permeant cation is +50 mV and V_m is −70 mV, the driving force for that ion is:",
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
    topic: "Synaptic Integration",
    question: "EPSP amplitude at the soma is reduced for distal synapses mainly due to:",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Electrotonic decay reduces distal synaptic impact at the soma/AIS.",
    ]
  },
  {
    topic: "Auditory System",
    question: "Auditory nerve fibers encode sound intensity mainly through:",
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
    topic: "Resting Potential",
    question: "Suppose that the Na⁺/K⁺ pump rate doubles but relative leak conductances are unchanged, the immediate effect on V_m is:",
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
    topic: "Passive Membrane Properties",
    question: "Suppose that both R_m and R_i double while C_m is constant, the length constant λ:",
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
    topic: "Action Potential Propagation",
    question: "Cooling an axon reduces conduction velocity mainly by:",
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
    question: "Suppose that V_m is clamped at E_K, the driving force on K⁺ ions is:",
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
    topic: "Receptor Types",
    question: "GABA<sub>B</sub> receptors inhibit neurons mainly by:",
    options: [
      "Opening K⁺ channels via G-proteins and reducing Ca²⁺ channel activity",
      "Producing fast Cl⁻ influx through the same pore as GABA<sub>A</sub> receptors",
      "Opening voltage-gated Na⁺ channels to trigger regenerative spikes",
      "Hyperpolarizing only by pumping Cl⁻ into the cell against its gradient",
    ],
    correct: 0,
    explanation: "GABA<sub>B</sub> is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry.",
    wrongExplanations: [
      "",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. GABAB is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry.",
      "“Opening voltage-gated Na⁺ channels to trigger regenerative spikes” does not match the mechanism (topic: Receptor Types). GABAB is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry. The correct choice—“Opening K⁺ channels via G-proteins and reducing Ca²⁺ channel activity”—fits that description.",
      "GABA_A receptors are ionotropic: GABA binding opens a Cl⁻ channel and produces a fast IPSP (often hyperpolarizing or shunting). GABA_B is metabotropic (Gᵢ/o-coupled), typically opening K⁺ channels and reducing presynaptic Ca²⁺—slower, indirect inhibition. GABAB is metabotropic (Gi/o): it opens G-protein-gated K⁺ channels and can reduce Ca²⁺ entry.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "The cerebellum contributes to motor control mainly by:",
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
      "“Encoding color opponency in blobs (maps the lesion to the wrong motor pathway or ref…” does not match the mechanism (topic: Motor Systems). Cerebellar circuits compare intended and actual movement for fine coordination. The correct choice—“Error correction and timing of movements via mossy and climbing fiber input”—fits that description.",
      "“Generating the cochlear traveling wave (maps the lesion to the wrong motor pathway o…” does not match the mechanism (topic: Motor Systems). Cerebellar circuits compare intended and actual movement for fine coordination. The correct choice—“Error correction and timing of movements via mossy and climbing fiber input”—fits that description.",
    ]
  },
  {
    topic: "Action Potentials",
    question: "A neuron with reduced Na⁺ channel density would be expected to likely show:",
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
    topic: "Resting Potential",
    question: "Suppose that a drug doubles K⁺ leak conductance without changing the pump, the new resting potential will:",
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
    question: "Suppose that P_Cl increases while E_Cl remains −70 mV and rest is −65 mV, V_m will shift toward:",
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
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. Increased Cl⁻ conductance pulls V_m toward E_Cl in the Goldman equation.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Halving intracellular Na⁺ while keeping extracellular Na⁺ constant would be expected to make E_Na:",
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
    topic: "Action Potentials",
    question: "Suppose that voltage-gated K⁺ channels are pharmacologically blocked during a spike, repolarization will:",
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
    topic: "Action Potential Propagation",
    question: "Suppose that nodes of Ranvier are spaced farther apart in a myelinated axon, conduction velocity typically:",
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
    topic: "Synaptic Integration",
    question: "Suppose that EPSPs and IPSPs arrive simultaneously at the axon hillock, the net effect depends on:",
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
    topic: "Somatosensation",
    question: "C fibers usually convey:",
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
    topic: "Motor Systems",
    question: "Corticospinal tract lesions usually produce:",
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
      "“Elimination of all photoreceptor responses” does not match the mechanism (topic: Motor Systems). Most corticospinal fibers decussate, causing contralateral motor deficits. The correct choice—“Contralateral weakness or paralysis of voluntary movement”—fits that description.",
      "“Permanent hyperpolarization of all photoreceptors in light” does not match the mechanism (topic: Motor Systems). Most corticospinal fibers decussate, causing contralateral motor deficits. The correct choice—“Contralateral weakness or paralysis of voluntary movement”—fits that description.",
    ]
  },
  {
    topic: "Nernst Equation",
    question: "Suppose that z = +2 for Ca²⁺, a fourfold increase in external Ca²⁺ (fixed internal) changes E_Ca by approximately:",
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
    topic: "Action Potential Propagation",
    question: "Suppose that nodal Na⁺ channel density is halved in a myelinated axon, conduction failure is most likely when:",
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
    topic: "Synaptic Transmission",
    question: "Suppose that release probability p approaches 1, the coefficient of variation (CV) of EPSC amplitude across trials:",
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
    topic: "Electrical Synapses",
    question: "Suppose that two neurons are coupled by gap junctions, injecting hyperpolarizing current into one will:",
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
    topic: "Electrical Signaling",
    question: "Suppose that E_K is −90 mV and V_m is −60 mV, net K⁺ current through open K⁺ channels is:",
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
    topic: "Auditory System",
    question: "The lateral superior olive uses interaural level differences mainly for:",
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
      "“Low-frequency phase locking without level” does not match the mechanism (topic: Auditory System). LSO compares sound level at the two ears, effective at higher frequencies. The correct choice—“High-frequency localization via intensity cues”—fits that description.",
      "Cochlear place coding and hair-cell transduction are auditory. The stem concerns hearing mechanics or pathways, not retinotopy or cortical vision maps. LSO compares sound level at the two ears, effective at higher frequencies.",
      "“Olfactory discrimination in piriform cortex” does not match the mechanism (topic: Auditory System). LSO compares sound level at the two ears, effective at higher frequencies. The correct choice—“High-frequency localization via intensity cues”—fits that description.",
    ]
  },
  {
    topic: "Motor Systems",
    question: "Upper motor neurons originate mainly in:",
    options: [
      "Motor cortex and brainstem descending tracts",
      "Photoreceptors (maps the lesion to the wrong motor pathway or reflex)",
      "Olfactory bulb mitral cells only (maps the lesion to the wrong motor pathway or reflex)",
      "Cochlear inner hair cells (maps the lesion to the wrong motor pathway or reflex)",
    ],
    correct: 0,
    explanation: "UMNs project to spinal/brainstem motor neurons.",
    wrongExplanations: [
      "",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. UMNs project to spinal/brainstem motor neurons.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: UMNs project to spinal/brainstem motor neurons.",
      "“Cochlear inner hair cells (maps the lesion to the wrong motor pathway or reflex)” does not match the mechanism (topic: Motor Systems). UMNs project to spinal/brainstem motor neurons. The correct choice—“Motor cortex and brainstem descending tracts”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Medial temporal lobe damage producing anterograde amnesia mainly disrupts:",
    options: [
      "Forming new declarative/episodic memories",
      "All procedural skills such as riding a bike",
      "All sensation including touch",
      "Phototransduction in rods",
    ],
    correct: 0,
    explanation: "Medial temporal lobe/hippocampus is critical for new declarative memory.",
    wrongExplanations: [
      "",
      "“All procedural skills such as riding a bike” does not match the mechanism (topic: Learning & Memory). Medial temporal lobe/hippocampus is critical for new declarative memory. The correct choice—“Forming new declarative/episodic memories”—fits that description.",
      "“All sensation including touch” does not match the mechanism (topic: Learning & Memory). Medial temporal lobe/hippocampus is critical for new declarative memory. The correct choice—“Forming new declarative/episodic memories”—fits that description.",
      "“Phototransduction in rods” does not match the mechanism (topic: Learning & Memory). Medial temporal lobe/hippocampus is critical for new declarative memory. The correct choice—“Forming new declarative/episodic memories”—fits that description.",
    ]
  },
  {
    topic: "Visual System",
    question: "Retinal ganglion cells encode visual information mainly as:",
    options: [
      "Patterns of action potentials sent to the brain",
      "Graded muscle contractions",
      "Continuous DC without spikes",
      "Direct hormone release into CSF",
    ],
    correct: 0,
    explanation: "Ganglion cells are the spiking output of the retina.",
    wrongExplanations: [
      "",
      "“Graded muscle contractions” does not match the mechanism (topic: Visual System). Ganglion cells are the spiking output of the retina. The correct choice—“Patterns of action potentials sent to the brain”—fits that description.",
      "“Continuous DC without spikes” does not match the mechanism (topic: Visual System). Ganglion cells are the spiking output of the retina. The correct choice—“Patterns of action potentials sent to the brain”—fits that description.",
      "“Direct hormone release into CSF” does not match the mechanism (topic: Visual System). Ganglion cells are the spiking output of the retina. The correct choice—“Patterns of action potentials sent to the brain”—fits that description.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Damage to primary visual cortex (V1) usually causes:",
    options: [
      "Cortical blindness in corresponding visual field regions",
      "Complete loss of all sensation including touch",
      "Deafness for all frequencies",
      "Immediate loss of all procedural memory",
    ],
    correct: 0,
    explanation: "V1 lesions produce scotomas or field loss depending on extent.",
    wrongExplanations: [
      "",
      "“Complete loss of all sensation including touch” does not match the mechanism (topic: Clinical Correlates). V1 lesions produce scotomas or field loss depending on extent. The correct choice—“Cortical blindness in corresponding visual field regions”—fits that description.",
      "“Deafness for all frequencies” does not match the mechanism (topic: Clinical Correlates). V1 lesions produce scotomas or field loss depending on extent. The correct choice—“Cortical blindness in corresponding visual field regions”—fits that description.",
      "“Immediate loss of all procedural memory” does not match the mechanism (topic: Clinical Correlates). V1 lesions produce scotomas or field loss depending on extent. The correct choice—“Cortical blindness in corresponding visual field regions”—fits that description.",
    ]
  },
  {
    topic: "Visual System",
    question: "Ganglion cells encode visual information mainly as:",
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
    topic: "Neuroanatomy",
    question: "White matter mainly contains:",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: White matter is axons; gray matter is cell bodies and neuropil.",
      "This option describes retinal phototransduction (cGMP, transducin, or outer-segment currents), which is a specialized sensory pathway—not the membrane, synaptic, or systems mechanism asked about here. White matter is axons; gray matter is cell bodies and neuropil.",
      "“Taste bud cells” does not match the mechanism (topic: Neuroanatomy). White matter is axons; gray matter is cell bodies and neuropil. The correct choice—“Myelinated axon tracts”—fits that description.",
    ]
  },
  {
    topic: "Learning & Memory",
    question: "Declarative memory is usually associated with:",
    options: [
      "Hippocampus and medial temporal lobe structures",
      "Requires cerebellar cortex for all memories",
      "Cochlear nucleus exclusively",
      "Skin Meissner corpuscles",
    ],
    correct: 0,
    explanation: "Explicit facts/events depend on medial temporal lobe circuits.",
    wrongExplanations: [
      "",
      "“Requires cerebellar cortex for all memories” does not match the mechanism (topic: Learning & Memory). Explicit facts/events depend on medial temporal lobe circuits. The correct choice—“Hippocampus and medial temporal lobe structures”—fits that description.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Explicit facts/events depend on medial temporal lobe circuits.",
      "“Skin Meissner corpuscles” does not match the mechanism (topic: Learning & Memory). Explicit facts/events depend on medial temporal lobe circuits. The correct choice—“Hippocampus and medial temporal lobe structures”—fits that description.",
    ]
  },
  {
    topic: "Clinical Correlates",
    question: "Prosopagnosia usually reflects dysfunction in:",
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
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
      "MCB80x answers rarely hinge on absolute \"always/never\" claims—biology has exceptions. This option overstates a rule: Face recognition deficits implicate specialized ventral visual cortex.",
    ]
  }
];
