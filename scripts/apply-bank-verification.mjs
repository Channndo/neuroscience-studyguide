#!/usr/bin/env node
/**
 * Persist reviewStatus: "verified" on every deployed question passing the full automated gate.
 * Keeps the full bank — marks needs-review only on scientific accuracy flags.
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { buildInventory, normStem } from "./lib/inventory-core.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const DEPLOYED_BANK_FILES = fs
  .readdirSync(root)
  .filter(f => /^questions.*\.js$/.test(f) && f !== "questions-variation-pools.js");

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
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  return new Set(data.accuracyStems || []);
}

function passesFullGate(q, stem, accuracyStems) {
  if (accuracyStems.has(stem)) return false;
  if (q.reviewStatus === "needs-review") return false;
  if (q.pipelineStage === "quarantined") return false;
  const defects = (q.defects || []).filter(d => !IGNORE_DEFECTS.has(d.defect));
  if (defects.some(d => d.severity === "critical")) return false;
  if (defects.some(d => d.defect === "filler_distractors")) return false;
  if (defects.some(d => d.defect === "invalid_correct_index" || d.defect === "invalid_sata_key")) return false;
  if (defects.some(d => d.defect === "generic_stem" || d.defect === "malformed_applies_to_if")) return false;
  if ((q.qualityScore ?? 0) < 72) return false;
  if (!stem || stem.length < 10) return false;
  if (q.format === "multiple_choice" && !(q.explanationLength > 20)) return false;
  return true;
}

const accuracyStems = loadAccuracyStems();
const inv = buildInventory();
const invById = new Map(inv.questions.map(q => [q.id, q]));

const raw = execSync("node _extract_bank_questions.mjs", {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 128 * 1024 * 1024,
});
const bank = JSON.parse(raw);

const verifiedStems = new Set();
const needsReviewStems = new Set();
let pass = 0;
let fail = 0;

for (const bq of bank) {
  const q = invById.get(bq.canonicalId);
  if (!q) continue;
  const stem = normStem(bq.question);
  if (accuracyStems.has(stem)) {
    needsReviewStems.add(stem);
    fail++;
    continue;
  }
  if (passesFullGate(q, stem, accuracyStems)) {
    verifiedStems.add(stem);
    pass++;
  } else fail++;
}

const VERIFIED_BLOCK = `reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice"`;

const NEEDS_LINE = `reviewStatus: "needs-review",
    scientificReview: "accuracy_audit_flag"`;

function stampFile(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  let changed = 0;
  let searchFrom = 0;

  const re = /question:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  const inserts = [];
  while ((m = re.exec(code))) {
    const stem = normStem(m[1].replace(/\\"/g, '"'));
    const tail = code.slice(m.index, m.index + 1200);
    if (/reviewStatus:\s*"/.test(tail)) continue;
    if (verifiedStems.has(stem)) {
      inserts.push({ index: m.index + m[0].length, text: `,\n    ${VERIFIED_BLOCK},\n    ` });
      changed++;
    } else if (needsReviewStems.has(stem)) {
      inserts.push({ index: m.index + m[0].length, text: `,\n    ${NEEDS_LINE.replace(/,\s*$/, "")},\n    ` });
      changed++;
    }
  }
  inserts.sort((a, b) => b.index - a.index).forEach(ins => {
    code = code.slice(0, ins.index) + ins.text + code.slice(ins.index);
  });

  if (changed) fs.writeFileSync(filePath, code);
  return changed;
}

let fileUpdates = 0;
for (const f of DEPLOYED_BANK_FILES) {
  fileUpdates += stampFile(path.join(root, f));
}

function stampIndexPart(partName) {
  const htmlPath = path.join(root, "index.html");
  let html = fs.readFileSync(htmlPath, "utf8");
  const token = `const ${partName} = [`;
  const start = html.indexOf(token);
  if (start < 0) return 0;
  const end = html.indexOf("];", start + token.length);
  if (end < 0) return 0;
  let section = html.slice(start, end + 2);
  let n = 0;
  section = section.replace(/question:\s*"((?:[^"\\]|\\.)*)"/g, (match, inner) => {
    const stem = normStem(inner.replace(/\\"/g, '"'));
    const before = section.slice(0, section.indexOf(match));
    if (/reviewStatus:\s*"/.test(before.slice(-400))) return match;
    if (verifiedStems.has(stem)) {
      n++;
      return `${match},\n        ${VERIFIED_BLOCK.replace(/^    /gm, "        ")},\n        `;
    }
    if (needsReviewStems.has(stem)) {
      n++;
      return `${match},\n        ${NEEDS_LINE.replace(/^    /gm, "        ")},\n        `;
    }
    return match;
  });
  if (n) {
    html = html.slice(0, start) + section + html.slice(end + 2);
    fs.writeFileSync(htmlPath, html);
  }
  return n;
}

fileUpdates += stampIndexPart("PART1") + stampIndexPart("PART2") + stampIndexPart("PART3");

console.log(
  JSON.stringify(
    {
      total: bank.length,
      verified: pass,
      needsReviewAccuracy: needsReviewStems.size,
      notVerified: fail - needsReviewStems.size,
      fileInsertions: fileUpdates,
    },
    null,
    2
  )
);
