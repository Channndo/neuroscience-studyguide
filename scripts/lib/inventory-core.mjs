/**
 * Phase 1 question inventory — extract, classify, score (no bank mutations).
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { scoreQuestionRubric } from "../quality-rubric.mjs";

const root = path.dirname(path.dirname(path.dirname(fileURLToPath(import.meta.url))));

const COURSE_BY_MODULE = {
  part1: "MCB80.1x",
  "part1-inline": "MCB80.1x",
  part2: "MCB80.2x",
  "part2-inline": "MCB80.2x",
  part3: "MCB80.3x",
  "part3-inline": "MCB80.3x",
};

const PART1_TOPICS = new Set([
  "Resting Potential", "Nernst Equation", "Goldman Equation", "Passive Membrane Properties",
  "Action Potentials", "Action Potential Propagation", "Electrical Signaling",
  "Patch Clamp", "Current Clamp", "Voltage Clamp", "Pharmacology", "Ion Selectivity",
  "Channel Gating", "Axon Initial Segment", "Equilibrium vs Steady State", "Experimental Methods",
  "Quantitative Physiology", "Dendritic Integration", "Cable Properties", "Membrane Biophysics",
  "Action Potential", "Formula Lab",
]);

const PART2_TOPICS = new Set([
  "Chemical Synapses", "Synaptic Transmission", "Receptor Types", "Second Messengers",
  "Synaptic Integration", "Neuromodulation", "Neural Circuits", "Electrical Synapses",
  "Synaptic Vesicles", "Short-Term Plasticity", "Long-Term Plasticity", "Retrograde Signaling",
  "Synaptic Anatomy", "Excitatory-Inhibitory Balance", "Drug Effects", "Peptide Transmitters",
  "Neuromuscular Junction", "Co-transmission", "Inhibitory Circuits", "Synaptic Plasticity Rules",
  "Integration", "Circuit Modulation", "Motor Systems", "Learning & Memory", "Synaptic Plasticity",
]);

const PART3_TOPICS = new Set([
  "Visual System", "Visual Cortex", "Phototransduction", "Retinal Circuitry",
  "Auditory System", "Auditory Pathway", "Olfactory System", "Olfaction", "Taste",
  "Somatosensation", "Pain", "Proprioception", "Neuroanatomy",
  "Synaptic Basis of Memory", "Brain Function", "Language",
  "Sleep & Memory", "Emotion & Memory", "Executive Function", "Neuroimaging",
  "Clinical Correlates", "Sensory Systems", "Vestibular System", "Basal Ganglia",
  "Hippocampus", "Cerebellum", "Thalamus", "Cortex", "Clinical Neuroanatomy", "Brain Anatomy",
]);

export function inferModule(q) {
  const m = q.module || "";
  if (m.startsWith("part1")) return "part1";
  if (m.startsWith("part2")) return "part2";
  if (m.startsWith("part3")) return "part3";
  const topic = q.topic || "";
  if (PART1_TOPICS.has(topic)) return "part1";
  if (PART2_TOPICS.has(topic)) return "part2";
  if (PART3_TOPICS.has(topic)) return "part3";
  if (/nernst|goldman|resting|action potential|clamp|cable|membrane/i.test(topic)) return "part1";
  if (/synap|receptor|plasticity|circuit|neuromod/i.test(topic)) return "part2";
  if (/visual|auditory|motor|brain|clinical|sensory|pain|memory/i.test(topic)) return "part3";
  return "part3";
}

export function inferCourse(q, module) {
  const mod = module || inferModule(q);
  if (mod === "part1") return "MCB80.1x";
  if (mod === "part2") return "MCB80.2x";
  if (mod === "part3") return "MCB80.3x";
  return "MCB80.3x";
}

const SUPPLEMENTAL_SOURCES = /pinnacle|paraphrase|variation|elite|formula-drills|proctored/i;

const GENERIC_STEM =
  /^Using the values stated below|^Which answer best matches this scenario:|^Which description best applies to If\b/i;
const FILLER_OPT =
  /\(does not follow|inconsistent with the mechanism|not the best match|does not follow from the mechanism implied|Requires photons|Requires cochlea|Requires nMJ|typical mammalian/i;
const BOILERPLATE_WRONG =
  /does not match the mechanism \(topic:/i;

export function loadAllQuestions() {
  const raw = execSync("node _extract_bank_questions.mjs", {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(raw);
}

export function normStem(s) {
  return String(s)
    .replace(/\s+/g, " ")
    .replace(/[?.!]+$/u, "")
    .trim()
    .toLowerCase();
}

export function skeletonStem(s) {
  return normStem(s)
    .replace(/\b(cortex|hippocampus|thalamus|cerebellum|brainstem|temporal|parietal|frontal|occipital)\b/gi, "")
    .replace(/\d+/g, "#")
    .replace(/\s+/g, " ")
    .trim();
}

export function inferFormat(q) {
  if (q.type === "selectAll" || q.correctIndices?.length) return "multiple_select";
  if (q.type === "shortAnswer" || q.modelAnswer) return "short_answer";
  if (q.options?.length) return "multiple_choice";
  return "unknown";
}

export function inferPipelineStage(q, defects, rubric) {
  if (defects.some(d => d.severity === "critical")) return "quarantined";
  if (q.pipelineStage) return q.pipelineStage;
  if (q.reviewStatus === "verified" && rubric.total >= 90) return "approved_practice";
  if (q.reviewStatus === "needs-review") return "needs_scientific";
  if (rubric.total < 80) return "quarantined";
  if (rubric.total < 90) return "needs_revision";
  return "automated_validation";
}

export function detectDefects(q, ctx) {
  const defects = [];
  const id = q.canonicalId || q.id || q.source;
  const stem = q.question || "";
  const expl = String(q.explanation || "").trim();

  const push = (defect, severity, detail) => {
    defects.push({ defect, severity, detail, questionId: id, file: q.source || "" });
  };

  if (!stem) push("missing_stem", "critical", "empty question");
  if (GENERIC_STEM.test(stem)) push("generic_stem", "high", stem.slice(0, 100));
  if (stem.length < 25 && inferFormat(q) === "multiple_choice") push("short_stem", "medium", String(stem.length));
  if (!expl && inferFormat(q) !== "short_answer") push("missing_explanation", "high", "");
  if (expl.length > 0 && expl.length < 48) push("short_explanation", "medium", expl.slice(0, 80));
  if (expl.length > 0 && /^["“].*["”] is correct/i.test(expl)) push("circular_explanation", "high", "");

  const fmt = inferFormat(q);
  if (fmt === "multiple_choice") {
    if (q.correct == null || q.correct < 0 || q.correct >= (q.options?.length || 0)) {
      push("invalid_correct_index", "critical", String(q.correct));
    }
    if ((q.options || []).length < 2) push("insufficient_options", "critical", "");
    const opts = (q.options || []).map(o => String(o).trim().toLowerCase());
    if (new Set(opts).size !== opts.length) push("duplicate_options", "high", "");
    if ((q.options || []).filter(o => FILLER_OPT.test(o)).length >= 2) push("filler_distractors", "high", "");
    if (!(q.wrongExplanations?.length) && !(q.wrongExplanation)) {
      const hasPerOption = (q.options || []).some((_, i) => i !== q.correct);
      if (hasPerOption) push("missing_wrong_explanations", "medium", "");
    }
  }

  if (fmt === "multiple_select") {
    const need = q.correctIndices || [];
    if (!need.length) push("invalid_sata_key", "critical", "empty correctIndices");
    if (!/select all/i.test(stem)) push("sata_stem_missing_cue", "medium", "");
  }

  if (!q.topic) push("missing_topic", "medium", "");
  if (!q.lesson && !q.objective) push("missing_objective_mapping", "medium", "");
  if (!q.sourceReference && !q.sourceReferences) push("missing_source", "low", "");
  if (q.reviewStatus === "needs-review") push("needs_scientific_review", "high", "");

  if (ctx.duplicateStemIds?.has(id)) push("duplicate_stem", "medium", ctx.duplicateStemIds.get(id));
  if (ctx.nearDuplicateStemIds?.has(id)) push("near_duplicate_stem", "medium", "");

  return defects;
}

export function buildInventory() {
  const questions = loadAllQuestions();
  const stemGroups = new Map();
  const skGroups = new Map();

  questions.forEach(q => {
    const ns = normStem(q.question);
    if (ns.length >= 15) {
      if (!stemGroups.has(ns)) stemGroups.set(ns, []);
      stemGroups.get(ns).push(q.canonicalId);
    }
    const sk = skeletonStem(q.question);
    if (sk.length >= 12) {
      if (!skGroups.has(sk)) skGroups.set(sk, []);
      skGroups.get(sk).push(q.canonicalId);
    }
  });

  const duplicateStemIds = new Map();
  const nearDuplicateStemIds = new Map();
  for (const [, ids] of stemGroups) {
    if (ids.length > 1) ids.forEach(id => duplicateStemIds.set(id, `group_size=${ids.length}`));
  }
  for (const [, ids] of skGroups) {
    if (ids.length > 1) ids.forEach(id => nearDuplicateStemIds.set(id, `skeleton_group=${ids.length}`));
  }

  const records = questions.map(q => {
    const module = inferModule(q);
    let course = inferCourse(q, module);
    const supplemental = SUPPLEMENTAL_SOURCES.test(q.source || "");
    if (supplemental) course = `${course} (supplemental pool)`;
    const ctx = { duplicateStemIds, nearDuplicateStemIds };
    const defects = detectDefects(q, ctx);
    const rubric = scoreQuestionRubric(q, defects);
    const pipelineStage = inferPipelineStage(q, defects, rubric);

    return {
      id: q.canonicalId || q.id || q.source,
      sourceFile: q.source,
      bankIndex: q.bankIndex,
      course,
      module,
      topic: q.topic || null,
      lesson: q.lesson || null,
      objective: q.objective || null,
      format: inferFormat(q),
      difficulty: q.difficulty ?? null,
      cognitiveLevel: q.cognitiveLevel || q.cognitive_level || null,
      correctAnswer: q.correct ?? q.correctIndices ?? null,
      explanationLength: (q.explanation || "").length,
      hasWrongExplanations: Boolean(q.wrongExplanations?.length || q.wrongExplanation),
      reviewStatus: q.reviewStatus || "unset",
      pipelineStage,
      qualityScore: rubric.total,
      qualityBreakdown: rubric.breakdown,
      scientificConfidence: rubric.scientificConfidence,
      curriculumAlignment: rubric.curriculumAlignment,
      defects,
      supplemental,
      disposition:
        pipelineStage === "quarantined"
          ? "quarantine_scored"
          : pipelineStage === "approved_practice"
            ? "eligible_practice"
            : supplemental
              ? "supplemental_pool"
              : "pending_review",
      stemPreview: (q.question || "").slice(0, 160),
    };
  });

  return { generatedAt: new Date().toISOString(), total: records.length, questions: records };
}

export function inventorySummary(inv) {
  const qs = inv.questions;
  const byStage = {};
  const byCourse = {};
  const byFormat = {};
  let approved = 0;
  let quarantined = 0;
  let missingExpl = 0;
  let needsReview = 0;
  let scoreSum = 0;
  const defectCounts = {};

  for (const q of qs) {
    byStage[q.pipelineStage] = (byStage[q.pipelineStage] || 0) + 1;
    byCourse[q.course] = (byCourse[q.course] || 0) + 1;
    byFormat[q.format] = (byFormat[q.format] || 0) + 1;
    if (q.pipelineStage === "approved_practice" || q.pipelineStage === "approved_exam") approved++;
    if (q.pipelineStage === "quarantined") quarantined++;
    if (q.explanationLength === 0) missingExpl++;
    if (q.reviewStatus === "needs-review" || q.reviewStatus === "unset") needsReview++;
    scoreSum += q.qualityScore;
    for (const d of q.defects) defectCounts[d.defect] = (defectCounts[d.defect] || 0) + 1;
  }

  const uniqueTopics = new Set(qs.map(q => q.topic).filter(Boolean)).size;
  const uniqueObjectives = new Set(qs.map(q => `${q.course}|${q.objective || q.topic}`).filter(Boolean)).size;

  return {
    total: qs.length,
    approved,
    quarantined,
    missingExpl,
    needsReview,
    avgQualityScore: Math.round((scoreSum / qs.length) * 10) / 10,
    duplicateStemGroups: [...new Set(qs.filter(q => q.defects.some(d => d.defect === "duplicate_stem")).map(q => q.id))].length,
    byStage,
    byCourse,
    byFormat,
    uniqueTopics,
    uniqueObjectives,
    defectCounts,
  };
}

export function writeDefectsCsv(inv, outPath) {
  const rows = [];
  for (const q of inv.questions) {
    for (const d of q.defects) {
      rows.push({
        questionId: q.id,
        source: q.sourceFile,
        course: q.course,
        topic: q.topic || "",
        defect: d.defect,
        severity: d.severity,
        disposition: q.disposition,
        qualityScore: q.qualityScore,
        pipelineStage: q.pipelineStage,
        detail: d.detail,
      });
    }
  }
  const header =
    "questionId,source,course,topic,defect,severity,disposition,qualityScore,pipelineStage,detail\n";
  const body = rows
    .map(r =>
      [
        r.questionId,
        r.source,
        r.course,
        `"${String(r.topic).replace(/"/g, '""')}"`,
        r.defect,
        r.severity,
        r.disposition,
        r.qualityScore,
        r.pipelineStage,
        `"${String(r.detail).replace(/"/g, '""')}"`,
      ].join(",")
    )
    .join("\n");
  fs.writeFileSync(outPath, header + body);
  return rows.length;
}
