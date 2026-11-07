#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { buildInventory, inventorySummary } from "./lib/inventory-core.mjs";
import { spawnSync } from "child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function runTests() {
  const tests = [
    "scripts/test-question-copy-polish.mjs",
    "scripts/test-prose-slashes.mjs",
    "scripts/test-nernst-signed-z.mjs",
    "scripts/test-quiz-timer-logic.mjs",
  ];
  const results = [];
  for (const t of tests) {
    const r = spawnSync("node", [t], { cwd: root, encoding: "utf8" });
    results.push({ test: t, pass: r.status === 0, output: (r.stdout || r.stderr || "").trim().split("\n").pop() });
  }
  let nernst = { pass: false, items: 0, issues: 0 };
  const v = spawnSync("node", ["scripts/verify-nernst-goldman.mjs"], { cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  if (v.status === 0) {
    nernst.pass = true;
    try {
      const j = JSON.parse(v.stdout);
      nernst.items = j.questionCount;
      nernst.issues = j.issueCount;
    } catch { /* ignore */ }
  }
  let structural = { pass: false };
  const s = spawnSync("node", ["scripts/validate-question-banks.mjs"], { cwd: root, encoding: "utf8" });
  structural.pass = s.status === 0;
  return { unit: results, nernst, structural };
}

const inv = buildInventory();
const summary = inventorySummary(inv);
const tests = runTests();

fs.writeFileSync(
  path.join(root, "data", "inventory-summary.json"),
  JSON.stringify(summary, null, 2)
);

// A. MCB80X_MASTER_AUDIT.md
fs.writeFileSync(
  path.join(root, "MCB80X_MASTER_AUDIT.md"),
  `# MCB80X Master Audit

**Phase:** 1 complete (inventory); Phases 2–6 in progress on branch \`qa/master-overhaul\`  
**Generated:** ${new Date().toISOString()}

## Executive summary

| Metric | Value |
|--------|------:|
| Questions inventoried | ${summary.total} |
| Avg heuristic quality score | ${summary.avgQualityScore} / 100 |
| Pipeline-quarantined (score < 80 or critical) | ${summary.quarantined} |
| Approved for practice (verified + score ≥ 90) | ${summary.approved} |
| Missing explanations | ${summary.missingExpl} |
| Unique topics (metadata) | ${summary.uniqueTopics} |
| Unique objective/topic keys | ${summary.uniqueObjectives} |

## Root cause (why prior cleanups failed)

1. **Content factory without gates** — Python/\`mjs\` generators and copy-polish scripts modified stems without curriculum IDs or scientific sign-off.
2. **No canonical question IDs** — duplicates and near-duplicates across \`questions-*.js\` files.
3. **Validation ≠ science** — structural scripts (longest-option, SATA distribution) caught symptoms, not key/explanation correctness.
4. **Scored draws used unreviewed pools** — only partial \`reviewStatus\` filtering on some quizzes.
5. **Metadata drift** — \`topic\` labels often accurate; \`lesson\` / \`objective\` / \`source\` largely absent.

## Repository components audited

| Area | Files / notes |
|------|----------------|
| Question banks | 12 \`questions-*.js\` + inline PART1–3 in \`index.html\` |
| Generation | \`_build_bank.py\`, \`_generate_*.py\`, \`_expansion_variety.py\` |
| Rewriters | \`question-copy-polish.js\`, \`scripts/polish-question-copy.mjs\`, dedupe/enrich scripts |
| Assessment | \`index.html\` quiz engine, timer v2, proctored pool |
| Analytics | \`mcb80x_analytics\` localStorage (module/topic stats) |
| QC tests | \`scripts/validate-question-banks.mjs\`, \`verify-nernst-goldman.mjs\`, new inventory |

## Highest-risk defects (counts)

\`\`\`json
${JSON.stringify(summary.defectCounts, null, 2)}
\`\`\`

## Resolution status

| Workstream | Status |
|------------|--------|
| Phase 1 inventory + CSV | **Done** — \`data/question-inventory.json\`, \`QUESTION_BANK_DEFECTS.csv\` |
| Phase 2 schema + pipeline | **Started** — \`mcb80x-pipeline.js\`, rubric, \`validate-question-pipeline.mjs\` |
| Phase 3 bank rehabilitation | **Not started** (per-question human/scientific review required) |
| Phase 4 exam blueprint + reports | **Partial** — balanced mock draw, results breakdown |
| Phase 5 adaptive mastery | **Partial** — objective-level stats extension |
| Phase 6 release | **Blocked** — structural validator still fails |

## Official curriculum fetch

\`https://www.mcb80x.org/lessons\` returned HTTP 500 during audit — lesson IDs must be filled manually from edX when available (see \`MCB80X_CURRICULUM_MAP.md\`).
`
);

// B. Curriculum map
fs.writeFileSync(
  path.join(root, "MCB80X_CURRICULUM_MAP.md"),
  `# MCB80X Curriculum Map

**Authority:** [MCB80x lessons](https://www.mcb80x.org/lessons) (site unreachable at audit time — verify manually)

## Course alignment (application modules)

| App module | HarvardX course | Primary domains in this repo |
|------------|-----------------|----------------------------|
| \`part1\` | MCB80.1x — Electrical Properties of the Neuron | Resting potential, Nernst/Goldman, AP, cable, clamp |
| \`part2\` | MCB80.2x — Neurons and Networks | Synapses, receptors, plasticity, circuits |
| \`part3\` | MCB80.3x — The Brain | Sensory systems, neuroanatomy, motor, cognition |

## Question distribution (inventoried)

\`\`\`json
${JSON.stringify(summary.byCourse, null, 2)}
\`\`\`

## Gaps (unresolved)

- **Lesson IDs:** Not present on most items — do not fabricate; mark \`lesson: null\` until mapped.
- **Learning objectives:** Only \`topic\` field (~${summary.uniqueTopics} unique); not equivalent to edX objectives.
- **Supplemental / elite tiers:** Pinnacle and advanced finals include stretch content — label \`supplemental: true\` when rehabilitating.
- **Clinical vignettes:** Appropriate at MCB80.3x level; flag cross-listed Part 1 items with clinical stems.

## Objective-weighting target (exam blueprint)

| Course | Comprehensive final share | Timed mock (50) share |
|--------|-------------------------:|---------------------:|
| MCB80.1x | ~34% | ~17 items |
| MCB80.2x | ~33% | ~17 items |
| MCB80.3x | ~33% | ~16 items |

Implementation: \`drawQuizQuestionSet('proctoredMock')\` uses part-stratified sampling.
`
);

// C. Quality report
fs.writeFileSync(
  path.join(root, "QUESTION_BANK_QUALITY_REPORT.md"),
  `# Question Bank Quality Report

## Quantitative summary

| Metric | Count |
|--------|------:|
| Total questions | ${summary.total} |
| Quarantined (heuristic) | ${summary.quarantined} |
| Eligible practice (verified + ≥90) | ${summary.approved} |
| Duplicate stem flags | ${summary.duplicateStemGroups} |
| Missing explanation | ${summary.missingExpl} |
| Unset/needs review status | ${summary.needsReview} |

### By pipeline stage

\`\`\`json
${JSON.stringify(summary.byStage, null, 2)}
\`\`\`

### By format

\`\`\`json
${JSON.stringify(summary.byFormat, null, 2)}
\`\`\`

## Distinct assessment tasks

- **Questions:** ${summary.total}
- **Topics:** ${summary.uniqueTopics}
- **Course+topic/objective keys:** ${summary.uniqueObjectives}

These are **not** interchangeable — many items repeat the same concept with paraphrased stems.

## Old vs new bank

No separate legacy snapshot — this report baseline is build **20251107p** on \`qa/master-overhaul\`. Re-run \`node scripts/run-master-inventory.mjs\` after rehabilitation to compare deltas.
`
);

// E. Authoring standard
fs.writeFileSync(
  path.join(root, "QUESTION_AUTHORING_STANDARD.md"),
  `# Question Authoring Standard (MCB80x)

## Required fields (extended; backward compatible)

| Field | Required for scored | Notes |
|-------|--------------------|-------|
| \`id\` / \`canonicalId\` | Yes | Stable across edits |
| \`course\` or \`module\` | Yes | Maps to MCB80.1x/2x/3x |
| \`topic\` | Yes | Until \`objective\` verified |
| \`lesson\` | Scored | Official lesson slug when known |
| \`objective\` | Scored | Verbatim from course materials |
| \`reviewStatus\` | Scored | \`verified\` for exams |
| \`pipelineStage\` | Internal | See \`mcb80x-pipeline.js\` |
| \`explanation\` | Yes | Mechanism, not circular |
| \`wrongExplanations[]\` | MCQ strongly recommended | Teaches misconceptions |

## 100-point rubric

See \`scripts/quality-rubric.mjs\`. Thresholds:

- **95–100:** Exam candidate after human sign-off
- **90–94:** Scored practice
- **80–89:** Revision
- **< 80:** Quarantine
- **Critical defect:** Auto-reject

## Distractor rules

Reflect realistic errors (gradient vs driving force, EPSP vs IPSP, etc.). No joke sensory-system fillers on unrelated stems.

## Scientific notation

Use \`applyNeuroFormatting\` rules — preserve Na⁺/K⁺/slashes for prose (ON-center/OFF-surround, pain/temp).

## Pipeline stages

\`draft\` → \`automated_validation\` → \`needs_curriculum\` → \`needs_scientific\` → \`approved_practice\` → \`approved_exam\` → \`retired\`

Never auto-promote to \`approved_exam\`.
`
);

// F. Assessment engine changelog (append new)
const assessLog = `# Assessment Engine Changelog

## ${new Date().toISOString().slice(0, 10)} — Master overhaul (Phase 1–2 partial)

- \`scripts/lib/inventory-core.mjs\` — full question inventory + defects
- \`scripts/quality-rubric.mjs\` — automated 100-pt heuristic
- \`scripts/validate-question-pipeline.mjs\` — unified CI gate
- \`mcb80x-pipeline.js\` — pipeline stage constants
- \`mcb80x-learning.js\` — objective stats + remediation hints
- Proctored mock: part-balanced 50-item draw; title clarified (practice exam, not proctored)
- Results view: course/topic performance breakdown on exam quizzes
- Timer: session v2 absolute deadline (prior branch)
`;
fs.writeFileSync(path.join(root, "ASSESSMENT_ENGINE_CHANGELOG.md"), assessLog);

// G. Scientific validation
fs.writeFileSync(
  path.join(root, "SCIENTIFIC_VALIDATION_REPORT.md"),
  `# Scientific Validation Report

## Equations under test

| Equation | Implementation | Reference test |
|----------|----------------|----------------|
| Nernst | \`verify-nernst-goldman.mjs\`, \`validate-question-banks.mjs\` | \`test-nernst-signed-z.mjs\` (K⁺, Na⁺, Cl⁻) |
| Goldman-Hodgkin-Katz | \`verify-nernst-goldman.mjs\` | Parsed stems with P_K:P_Na |
| Signed valence | \`z\` not \`Math.abs(z)\` | Cl⁻ sign regression |

## Last run (embedded in deliverable generation)

| Check | Result |
|-------|--------|
| test-nernst-signed-z | ${tests.unit.find(t => t.test.includes("nernst-signed"))?.pass ? "PASS" : "FAIL"} |
| verify-nernst-goldman | ${tests.nernst.pass ? `PASS (${tests.nernst.items} items, ${tests.nernst.issues} issues)` : "FAIL"} |
| validate-question-banks | ${tests.structural.pass ? "PASS" : "FAIL (heuristic longest-option / SATA)"} |

**Limitation:** Passing automation does not replace expert review of mechanisms and keys.
`
);

// H. Adaptive learning
fs.writeFileSync(
  path.join(root, "ADAPTIVE_LEARNING_REPORT.md"),
  `# Adaptive Learning Report

## Implemented

| Feature | Location |
|---------|----------|
| Module/topic attempt stats | \`getAnalytics()\` in \`index.html\` |
| Objective-key stats (new) | \`mcb80x-learning.js\` + \`recordQuizAttempt\` |
| Weakness → flashcards | \`saveWeaknessFlashcards\` |
| Readiness score | Dashboard readiness tiers |
| Post-quiz remediation text | \`renderResultsBreakdown()\` |

## Not yet implemented

- Lesson-level mastery thresholds with spaced repetition per objective
- Alternate items per objective after misses (needs ID-stable objective map)
- Server-side analytics

## Mastery rule (documented)

Objective \`mastery\` = ≥3 attempts, ≥75% correct in rolling window — see \`MCB80XLearning.estimateMastery\`.
`
);

// I. Regression
fs.writeFileSync(
  path.join(root, "REGRESSION_TEST_RESULTS.md"),
  `# Regression Test Results

**Generated:** ${new Date().toISOString()}

| Test | Result |
|------|--------|
${tests.unit.map(t => `| \`${t.test}\` | ${t.pass ? "**PASS**" : "**FAIL**"} ${t.output || ""} |`).join("\n")}
| \`verify-nernst-goldman.mjs\` | ${tests.nernst.pass ? `**PASS** (${tests.nernst.items} q, ${tests.nernst.issues} issues)` : "**FAIL**"} |
| \`validate-question-banks.mjs\` | ${tests.structural.pass ? "**PASS**" : "**FAIL**"} |
| \`validate-question-pipeline.mjs\` | Run in CI |

**Release note:** Structural bank validation still fails — deploy blocked until resolved or gate split.
`
);

// J. Deployment readiness
fs.writeFileSync(
  path.join(root, "DEPLOYMENT_READINESS_REPORT.md"),
  `# Deployment Readiness Report

| Gate | Status |
|------|--------|
| Copy-polish regression | ${tests.unit.find(t => t.test.includes("copy-polish"))?.pass ? "PASS" : "FAIL"} |
| Prose slash notation | ${tests.unit.find(t => t.test.includes("prose"))?.pass ? "PASS" : "FAIL"} |
| Nernst reference | ${tests.nernst.pass ? "PASS" : "FAIL"} |
| Structural bank QA | ${tests.structural.pass ? "PASS" : "**FAIL**"} |
| Scientific review coverage | **FAIL** — majority \`reviewStatus\` unset |
| Cloud sync secret | Rotated out of repo; operator rotation pending |
| GitHub Pages | Do not deploy until approval + gates green |
| Live site | Build 20251107l (per prior audit) |

## Blockers

1. Bulk questions below quality threshold (${summary.quarantined} quarantined by heuristic).
2. \`validate-question-banks.mjs\` failures.
3. Missing verified curriculum mappings for scored exams.
`
);

console.log("Deliverables A–J written to repository root.");
