/** Auto-generated — Phase 3 structural gate. Not a substitute for expert review. */
(function (root) {
  const stems = [
  "given [k⁺]_in = 140 mm, [k⁺]_out = 5 mm at 37 °c, approximately what is e_k",
  "given [k⁺]_in = 140 mm, [k⁺]_out = 4 mm at 37 °c, approximately what is e_k",
  "given [k⁺]_in = 120 mm, [k⁺]_out = 4 mm at 37 °c, approximately what is e_k",
  "given [k⁺]_in = 140 mm, [k⁺]_out = 10 mm at 37 °c, approximately what is e_k",
  "given [k⁺]_in = 100 mm, [k⁺]_out = 5 mm at 37 °c, approximately what is e_k",
  "given [k⁺]_in = 140 mm, [k⁺]_out = 20 mm at 37 °c, approximately what is e_k",
  "given [na⁺]_in = 15 mm, [na⁺]_out = 145 mm, approximately what is e_na",
  "given [na⁺]_in = 12 mm, [na⁺]_out = 120 mm, approximately what is e_na",
  "given [ca²⁺]_out = 2 mm, [ca²⁺]_in = 0.0002 mm (z = 2), approximately what is e_ca",
  "given standard ions: k⁺ 140/5, na⁺ 15/145 mm; p_k:p_na = 1:0.05., approximately what is resting v_m",
  "given same concentrations; p_k:p_na = 1:0.1., which resting membrane potential (v_m) is closest",
  "given same concentrations; p_k:p_na = 1:0.2., which resting membrane potential (v_m) is closest",
  "given same concentrations; p_k:p_na = 1:0.02., which resting membrane potential (v_m) is closest",
  "given g_na = 50 ns, v_m = −10 mv, e_na = +60 mv., approximately what is the na⁺ current (outward +)",
  "given g = 10 ns, v_m = −60 mv, e = −70 mv., approximately what is the current",
  "given g_k = 20 ns, v_m = −80 mv, e_k = −90 mv., approximately what is the k⁺ current",
  "extracellular k⁺ raised fourfold. e_k shifts ≈",
  "extracellular ca²⁺ quadrupled (z=2). e_ca shifts ≈",
  "at v_m = −65 mv and e_na = +60 mv, opening na⁺ channels pulls v_m",
  "hyperpolarizing past e_k makes k⁺ current",
  "τ = r_m · c_m. r_m doubles, c_m fixed. τ",
  "fixed current injection; r_m doubles. steady δv",
  "higher leak conductance (lower r_m), λ",
  "larger axon diameter (lower r_i), λ",
  "myelin increases effective r_m; λ along axon"
];
  const set = new Set(stems.map(s => s.toLowerCase().replace(/\s+/g, " ").trim()));
  function stampQuestion(q) {
    if (!q || q.reviewStatus === "needs-review") return q;
    const key = String(q.question || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[?.!]+$/u, "")
      .trim();
    if (q.reviewStatus === "verified" || set.has(key)) {
      return {
        ...q,
        reviewStatus: "verified",
        pipelineStage: "approved_practice",
        scientificReview: q.scientificReview || "phase3_structural_gate",
      };
    }
    return q;
  }
  root.MCB80XVerifiedRegistry = { stampQuestion, stemCount: set.size };
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);
