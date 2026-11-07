/**
 * Heuristic 100-point rubric (automated — not expert scientific review).
 */

const FILLER = /\(does not follow|inconsistent with the mechanism|not the best match|Requires photons|Requires cochlea|typical mammalian/i;
const CLINICAL_OVERSCOPE =
  /\b(Wallenberg|lateral medullary|AICA|PICA|prosopagnosia|Horner|Bitemporal hemianopia)\b/i;

export function scoreQuestionRubric(q, defects = []) {
  const breakdown = {
    scientific_accuracy: 25,
    curriculum_alignment: 20,
    clarity_precision: 15,
    cognitive_value: 15,
    distractor_quality: 10,
    explanation_quality: 10,
    originality: 5,
  };

  const critical = defects.some(d => d.severity === "critical");
  if (critical) {
    return {
      total: 0,
      breakdown,
      scientificConfidence: "low",
      curriculumAlignment: "unverified",
      rejected: true,
      reason: "critical_defect",
    };
  }

  const stem = q.question || "";
  const expl = String(q.explanation || "");
  const opts = q.options || [];

  if (q.reviewStatus === "needs-review") breakdown.scientific_accuracy -= 12;
  if (!q.reviewStatus || q.reviewStatus === "unset") breakdown.scientific_accuracy -= 6;
  if (defects.some(d => d.defect === "circular_explanation")) breakdown.scientific_accuracy -= 8;

  const mod = q.module || "";
  if (!q.topic) breakdown.curriculum_alignment -= 8;
  if (!q.lesson && !q.objective) breakdown.curriculum_alignment -= 6;
  if (mod.startsWith("part1") && CLINICAL_OVERSCOPE.test(stem) && !/clinical/i.test(q.topic || "")) {
    breakdown.curriculum_alignment -= 10;
  }

  if (stem.length < 30) breakdown.clarity_precision -= 6;
  if (/^Which description best applies to If/i.test(stem)) breakdown.clarity_precision -= 10;
  if (defects.some(d => d.defect === "generic_stem")) breakdown.clarity_precision -= 8;

  if (q.difficulty >= 3 || q.cognitiveLevel === "application" || q.cognitiveLevel === "multistep") {
    breakdown.cognitive_value -= 0;
  } else if (/\d+\s*mM|clamp|predict|if .*blocked/i.test(stem)) {
    breakdown.cognitive_value -= 0;
  } else if (stem.length < 40) {
    breakdown.cognitive_value -= 5;
  }

  const wrongCount = opts.filter((o, i) => i !== q.correct && FILLER.test(o)).length;
  breakdown.distractor_quality -= Math.min(10, wrongCount * 3);
  if (defects.some(d => d.defect === "duplicate_options")) breakdown.distractor_quality -= 5;
  if (defects.some(d => d.defect === "filler_distractors")) breakdown.distractor_quality -= 6;

  if (!expl) breakdown.explanation_quality -= 10;
  else if (expl.length < 60) breakdown.explanation_quality -= 5;
  if (!(q.wrongExplanations?.length)) breakdown.explanation_quality -= 3;

  if (defects.some(d => d.defect === "duplicate_stem")) breakdown.originality -= 3;
  if (defects.some(d => d.defect === "near_duplicate_stem")) breakdown.originality -= 2;

  Object.keys(breakdown).forEach(k => {
    breakdown[k] = Math.max(0, Math.min(breakdown[k], k === "scientific_accuracy" ? 25 : k === "curriculum_alignment" ? 20 : k === "clarity_precision" ? 15 : k === "cognitive_value" ? 15 : k === "distractor_quality" ? 10 : k === "explanation_quality" ? 10 : 5));
  });

  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);

  let scientificConfidence = "medium";
  if (q.reviewStatus === "verified") scientificConfidence = "high";
  else if (q.reviewStatus === "needs-review" || total < 70) scientificConfidence = "low";

  let curriculumAlignment = q.lesson || q.objective ? "mapped_partial" : q.topic ? "topic_only" : "unmapped";

  return { total, breakdown, scientificConfidence, curriculumAlignment, rejected: false };
}
