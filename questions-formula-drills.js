// MCB80x Formula Lab — Nernst, Goldman, I = g(V−E), τ, λ

const FORMULA_DRILL_POOL = [
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[K⁺]_in = 140 mM, [K⁺]_out = 5 mM at 37 °C. E_K ≈",
    options: [
      "-89.1 mV",
      "-52.1 mV",
      "+60 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_K = 61.54·log10(5/140) ≈ -89.1 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[K⁺]_in = 140 mM, [K⁺]_out = 4 mM at 37 °C. E_K ≈",
    options: [
      "-95 mV",
      "-58 mV",
      "+60 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_K = 61.54·log10(4/140) ≈ -95 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[K⁺]_in = 120 mM, [K⁺]_out = 4 mM at 37 °C. E_K ≈",
    options: [
      "-90.9 mV",
      "-53.9 mV",
      "+60 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_K = 61.54·log10(4/120) ≈ -90.9 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[K⁺]_in = 140 mM, [K⁺]_out = 10 mM at 37 °C. E_K ≈",
    options: [
      "-70.5 mV",
      "-33.5 mV",
      "+60 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_K = 61.54·log10(10/140) ≈ -70.5 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[K⁺]_in = 100 mM, [K⁺]_out = 5 mM at 37 °C. E_K ≈",
    options: [
      "-80.1 mV",
      "-43.1 mV",
      "+60 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_K = 61.54·log10(5/100) ≈ -80.1 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[K⁺]_in = 140 mM, [K⁺]_out = 20 mM at 37 °C. E_K ≈",
    options: [
      "-52 mV",
      "-15 mV",
      "+60 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_K = 61.54·log10(20/140) ≈ -52 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[Na⁺]_in = 15 mM, [Na⁺]_out = 145 mM. E_Na ≈",
    options: [
      "+60.6 mV",
      "−60 mV",
      "0 mV",
      "+30 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_Na ≈ +60.6 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[Na⁺]_in = 12 mM, [Na⁺]_out = 120 mM. E_Na ≈",
    options: [
      "+61.5 mV",
      "−60 mV",
      "0 mV",
      "+30 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_Na ≈ +61.5 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[Na⁺]_in = 20 mM, [Na⁺]_out = 140 mM. E_Na ≈",
    options: [
      "+52 mV",
      "−60 mV",
      "0 mV",
      "+30 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_Na ≈ +52 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "nernst",
    question: "[Ca²⁺]_out = 2 mM, [Ca²⁺]_in = 0.0002 mM (z = 2). E_Ca ≈",
    options: [
      "+123.1 mV",
      "+61.5 mV",
      "−123 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
    formulaSteps: [
      "Write [out] and [in] for the ion in the ratio.",
      "Apply E_ion = (61.54/z) · log10([out]/[in]).",
      "Pick the closest mV."
    ],
    explanation: "E_Ca = (61.54/2)·log10(2/0.0002) ≈ +123 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Goldman Equation",
    calcType: "goldman",
    question: "Standard ions: K⁺ 140/5, Na⁺ 15/145 mM; P_K:P_Na = 1:0.05. Resting V_m ≈",
    options: [
      "-65.3 mV",
      "−89.1 mV",
      "+67.7 mV",
      "0 mV"
    ],
    correct: 0,
    formulaHint: "Use: Goldman — V_m = 61.54 · log10((P_K·K_o + P_Na·Na_o) / (P_K·K_i + P_Na·Na_i))",
    formulaSteps: [
      "Numerator: P_K·K_o + P_Na·Na_o  ·  Denominator: P_K·K_i + P_Na·Na_i.",
      "V_m = 61.54 · log10(numerator / denominator).",
      "Compare to E_K and E_Na."
    ],
    explanation: "Goldman ≈ -65.3 mV (weighted toward E_K).",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Goldman Equation",
    calcType: "goldman",
    question: "Same concentrations; P_K:P_Na = 1:0.1. V_m closest to:",
    options: [
      "-53 mV",
      "−89.1 mV",
      "+67.7 mV",
      "−40 mV"
    ],
    correct: 0,
    formulaHint: "Use: Goldman — V_m = 61.54 · log10((P_K·K_o + P_Na·Na_o) / (P_K·K_i + P_Na·Na_i))",
    formulaSteps: [
      "Numerator: P_K·K_o + P_Na·Na_o  ·  Denominator: P_K·K_i + P_Na·Na_i.",
      "V_m = 61.54 · log10(numerator / denominator).",
      "Compare to E_K and E_Na."
    ],
    explanation: "Higher P_Na depolarizes V_m → ≈ -53 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Goldman Equation",
    calcType: "goldman",
    question: "Same concentrations; P_K:P_Na = 1:0.2. V_m closest to:",
    options: [
      "-38.4 mV",
      "−89.1 mV",
      "+67.7 mV",
      "−40 mV"
    ],
    correct: 0,
    formulaHint: "Use: Goldman — V_m = 61.54 · log10((P_K·K_o + P_Na·Na_o) / (P_K·K_i + P_Na·Na_i))",
    formulaSteps: [
      "Numerator: P_K·K_o + P_Na·Na_o  ·  Denominator: P_K·K_i + P_Na·Na_i.",
      "V_m = 61.54 · log10(numerator / denominator).",
      "Compare to E_K and E_Na."
    ],
    explanation: "Higher P_Na depolarizes V_m → ≈ -38.4 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Goldman Equation",
    calcType: "goldman",
    question: "Same concentrations; P_K:P_Na = 1:0.02. V_m closest to:",
    options: [
      "-76.9 mV",
      "−89.1 mV",
      "+67.7 mV",
      "−40 mV"
    ],
    correct: 0,
    formulaHint: "Use: Goldman — V_m = 61.54 · log10((P_K·K_o + P_Na·Na_o) / (P_K·K_i + P_Na·Na_i))",
    formulaSteps: [
      "Numerator: P_K·K_o + P_Na·Na_o  ·  Denominator: P_K·K_i + P_Na·Na_i.",
      "V_m = 61.54 · log10(numerator / denominator).",
      "Compare to E_K and E_Na."
    ],
    explanation: "Higher P_Na depolarizes V_m → ≈ -76.9 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "current",
    question: "g_Na = 50 nS, V_m = −10 mV, E_Na = +60 mV. Na⁺ current (outward +) ≈",
    options: [
      "−3.5 nA",
      "+3.5 nA",
      "−3.5 µA",
      "0 nA"
    ],
    correct: 0,
    formulaHint: "Use: I = g · (V_m − E_ion)  (outward current positive; nS × mV → nA)",
    formulaSteps: [
      "Driving force = V_m − E_ion (mV).",
      "I = g (nS) × driving force → nA.",
      "Check outward (+) vs inward (−)."
    ],
    explanation: "I = 50 × (−70 mV) = −3.5 nA (inward).",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "current",
    question: "g = 10 nS, V_m = −60 mV, E = −70 mV. Current ≈",
    options: [
      "+100 pA",
      "−100 pA",
      "+1 nA",
      "0 pA"
    ],
    correct: 0,
    formulaHint: "Use: I = g · (V_m − E_ion)  (outward current positive; nS × mV → nA)",
    formulaSteps: [
      "Driving force = V_m − E_ion (mV).",
      "I = g (nS) × driving force → nA.",
      "Check outward (+) vs inward (−)."
    ],
    explanation: "I = 10 × (+10 mV) = +100 pA outward.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "current",
    question: "g_K = 20 nS, V_m = −80 mV, E_K = −90 mV. K⁺ current ≈",
    options: [
      "+200 pA",
      "−200 pA",
      "+2 nA",
      "0 pA"
    ],
    correct: 0,
    formulaHint: "Use: I = g · (V_m − E_ion)  (outward current positive; nS × mV → nA)",
    formulaSteps: [
      "Driving force = V_m − E_ion (mV).",
      "I = g (nS) × driving force → nA.",
      "Check outward (+) vs inward (−)."
    ],
    explanation: "I = 20 × (+10 mV) = +200 pA outward.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "fold",
    question: "Extracellular Na⁺ doubled (intracellular fixed). E_Na shifts ≈",
    options: [
      "+18.5 mV",
      "Opposite direction",
      "No change",
      "Always exactly 0 mV"
    ],
    correct: 0,
    formulaHint: "Use: ΔE ≈ (61.54/z) · log10(fold) for concentration ratio changes",
    formulaSteps: [
      "Write [out] and [in] for the ion.",
      "Apply E = (61.54/z)·log10(out/in).",
      "Pick the closest mV."
    ],
    explanation: "Correct: +18.5 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "fold",
    question: "Extracellular K⁺ raised fourfold. E_K shifts ≈",
    options: [
      "+37 mV (less negative)",
      "Opposite direction",
      "No change",
      "Always exactly 0 mV"
    ],
    correct: 0,
    formulaHint: "Use: ΔE ≈ (61.54/z) · log10(fold) for concentration ratio changes",
    formulaSteps: [
      "Write [out] and [in] for the ion.",
      "Apply E = (61.54/z)·log10(out/in).",
      "Pick the closest mV."
    ],
    explanation: "Correct: +37 mV (less negative).",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Nernst Equation",
    calcType: "fold",
    question: "Extracellular Ca²⁺ quadrupled (z=2). E_Ca shifts ≈",
    options: [
      "+18.5 mV",
      "Opposite direction",
      "No change",
      "Always exactly 0 mV"
    ],
    correct: 0,
    formulaHint: "Use: ΔE ≈ (61.54/z) · log10(fold) for concentration ratio changes",
    formulaSteps: [
      "Write [out] and [in] for the ion.",
      "Apply E = (61.54/z)·log10(out/in).",
      "Pick the closest mV."
    ],
    explanation: "Correct: +18.5 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "sign",
    question: "At V_m = E_K, net K⁺ driving force is:",
    options: [
      "Zero",
      "Opposite direction",
      "No change",
      "Always exactly 0 mV"
    ],
    correct: 0,
    formulaHint: "Use: reversal potential direction and driving force V_m − E_ion",
    formulaSteps: [
      "Compare V_m to E_K.",
      "Driving force ∝ V_m − E_ion."
    ],
    explanation: "Correct: Zero.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "fold",
    question: "At V_m = −65 mV and E_Na = +60 mV, opening Na⁺ channels pulls V_m:",
    options: [
      "Toward +60 mV",
      "Opposite direction",
      "No change",
      "Always exactly 0 mV"
    ],
    correct: 0,
    formulaHint: "Use: reversal potential direction and driving force V_m − E_ion",
    formulaSteps: [
      "Identify E_Na.",
      "Current direction depolarizes toward E_Na."
    ],
    explanation: "Correct: Toward +60 mV.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Electrical Signaling",
    calcType: "sign",
    question: "Hyperpolarizing past E_K makes K⁺ current:",
    options: [
      "Outward (positive by convention)",
      "Opposite direction",
      "No change",
      "Always exactly 0 mV"
    ],
    correct: 0,
    formulaHint: "Use: reversal potential direction and driving force V_m − E_ion",
    formulaSteps: [
      "Sign of (V_m − E_K).",
      "Outward when V_m > E_K."
    ],
    explanation: "Correct: Outward (positive by convention).",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    calcType: "tau",
    question: "τ = R_m · C_m. R_m doubles, C_m fixed. τ:",
    options: [
      "Doubles",
      "Halves",
      "Unchanged",
      "Becomes zero"
    ],
    correct: 0,
    formulaHint: "Use: τ = R_m · C_m  and  steady V = I · R_in",
    formulaSteps: [
      "Use τ = R_m C_m, V = I R, or λ = √(R_m/R_i).",
      "Track which parameter changed."
    ],
    explanation: "Doubles.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    calcType: "tau",
    question: "Fixed current injection; R_m doubles. Steady ΔV:",
    options: [
      "Doubles",
      "Halves",
      "Unchanged",
      "Becomes zero"
    ],
    correct: 0,
    formulaHint: "Use: τ = R_m · C_m  and  steady V = I · R_in",
    formulaSteps: [
      "Use τ = R_m C_m, V = I R, or λ = √(R_m/R_i).",
      "Track which parameter changed."
    ],
    explanation: "Doubles.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    calcType: "lambda",
    question: "Higher leak conductance (lower R_m), λ:",
    options: [
      "Becomes shorter",
      "Halves",
      "Unchanged",
      "Becomes zero"
    ],
    correct: 0,
    formulaHint: "Use: λ = √(R_m / R_i)",
    formulaSteps: [
      "Use τ = R_m C_m, V = I R, or λ = √(R_m/R_i).",
      "Track which parameter changed."
    ],
    explanation: "Becomes shorter.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    calcType: "lambda",
    question: "Larger axon diameter (lower R_i), λ:",
    options: [
      "Increases",
      "Halves",
      "Unchanged",
      "Becomes zero"
    ],
    correct: 0,
    formulaHint: "Use: λ = √(R_m / R_i)",
    formulaSteps: [
      "Use τ = R_m C_m, V = I R, or λ = √(R_m/R_i).",
      "Track which parameter changed."
    ],
    explanation: "Increases.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  },
  {
    topic: "Passive Membrane Properties",
    calcType: "lambda",
    question: "Myelin increases effective R_m; λ along axon:",
    options: [
      "Increases",
      "Halves",
      "Unchanged",
      "Becomes zero"
    ],
    correct: 0,
    formulaHint: "Use: λ = √(R_m / R_i)",
    formulaSteps: [
      "Use τ = R_m C_m, V = I R, or λ = √(R_m/R_i).",
      "Track which parameter changed."
    ],
    explanation: "Increases.",
    wrongExplanations: [
      "",
      "Recheck the formula and units.",
      "Recheck the formula and units.",
      "Recheck the formula and units."
    ]
  }
];
