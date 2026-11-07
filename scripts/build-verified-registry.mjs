#!/usr/bin/env node
/**
 * Phase 3: build runtime verified-stem registry for high-stakes draws.
 * Does not modify question banks — stamps at prepareQuestions time.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { buildInventory, normStem } from "./lib/inventory-core.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

/** All pools loaded in index.html (excludes questions-variation-pools.js). */
const DEPLOYED_SOURCE = /^questions-|index\.html:PART/;

const IGNORE_DEFECTS = new Set([
  "missing_objective_mapping",
  "missing_source",
  "missing_wrong_explanations",
  "near_duplicate_stem",
  "duplicate_stem",
  "short_explanation",
]);

function loadAccuracyStems() {
  const p = path.join(root, "data", "scientific-flags.json");
  if (!fs.existsSync(p)) return new Set();
  return new Set(JSON.parse(fs.readFileSync(p, "utf8")).accuracyStems || []);
}

const accuracyStems = loadAccuracyStems();

function passesPhase3Gate(q, stem) {
  if (accuracyStems.has(stem)) return false;
  if (q.reviewStatus === "needs-review") return false;
  if (q.pipelineStage === "quarantined") return false;
  const defects = q.defects.filter(d => !IGNORE_DEFECTS.has(d.defect));
  if (defects.some(d => d.severity === "critical")) return false;
  if (defects.some(d => d.defect === "filler_distractors")) return false;
  if (defects.some(d => d.defect === "invalid_correct_index")) return false;
  if (defects.some(d => d.defect === "invalid_sata_key")) return false;
  if (defects.some(d => d.defect === "generic_stem" || d.defect === "malformed_applies_to_if")) return false;
  if (q.qualityScore < 72) return false;
  if (q.explanationLength < 20 && q.format === "multiple_choice") return false;
  return true;
}

const raw = execSync("node _extract_bank_questions.mjs", {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
});
const bank = JSON.parse(raw);
const inv = buildInventory();
const invById = new Map(inv.questions.map(q => [q.id, q]));

const stems = new Set();
const meta = [];

for (const bq of bank) {
  const src = `${bq.source}`;
  if (!DEPLOYED_SOURCE.test(src)) continue;
  const id = bq.canonicalId || bq.id;
  const q = invById.get(id);
  const stem = normStem(bq.question || "");
  if (stem.length < 10) continue;
  const taggedVerified = bq.reviewStatus === "verified";
  if (!taggedVerified && (!q || !passesPhase3Gate(q, stem))) continue;
  if (taggedVerified && bq.reviewStatus === "needs-review") continue;
  stems.add(stem);
  meta.push({ id, source: src, score: q.qualityScore, topic: q.topic });
}

const outJs = `/** Auto-generated — Phase 3 structural gate. Not a substitute for expert review. */
(function (root) {
  const stems = ${JSON.stringify([...stems], null, 2)};
  const set = new Set(stems.map(s => s.toLowerCase().replace(/\\s+/g, " ").trim()));
  function stampQuestion(q) {
    if (!q || q.reviewStatus === "needs-review") return q;
    const key = String(q.question || "")
      .trim()
      .toLowerCase()
      .replace(/\\s+/g, " ")
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
`;

fs.writeFileSync(path.join(root, "mcb80x-verified-registry.js"), outJs);
fs.writeFileSync(
  path.join(root, "data", "verified-registry-meta.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), count: stems.size, items: meta }, null, 2)
);

console.log(`Verified registry: ${stems.size} stems → mcb80x-verified-registry.js`);
