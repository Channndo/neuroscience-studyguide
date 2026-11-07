/**
 * Question review pipeline stages (compatible with existing q objects).
 */
(function (root) {
  const STAGES = {
    DRAFT: "draft",
    AUTOMATED: "automated_validation",
    NEEDS_CURRICULUM: "needs_curriculum",
    NEEDS_SCIENTIFIC: "needs_scientific",
    APPROVED_PRACTICE: "approved_practice",
    APPROVED_EXAM: "approved_exam",
    QUARANTINED: "quarantined",
    RETIRED: "retired",
  };

  const SCORED_ELIGIBLE = new Set([STAGES.APPROVED_PRACTICE, STAGES.APPROVED_EXAM]);

  function normalizeStage(q) {
    const s = q?.pipelineStage || q?.reviewStatus;
    if (s === "verified") return STAGES.APPROVED_PRACTICE;
    if (s === "needs-review") return STAGES.NEEDS_SCIENTIFIC;
    if (Object.values(STAGES).includes(s)) return s;
    return STAGES.AUTOMATED;
  }

  function isEligibleForScoredDraw(q, options) {
    if (!q) return false;
    const strict = options?.strict === true;
    if (q.reviewStatus === "needs-review") return false;
    if (q.pipelineStage === STAGES.QUARANTINED || q.pipelineStage === STAGES.RETIRED) return false;
    if (strict && q.reviewStatus !== "verified") return false;
    return true;
  }

  root.MCB80XPipeline = { STAGES, SCORED_ELIGIBLE, normalizeStage, isEligibleForScoredDraw };
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);
