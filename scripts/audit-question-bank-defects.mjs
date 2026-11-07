#!/usr/bin/env node
/**
 * Screen question bank defects → QUESTION_BANK_DEFECTS.csv (and stdout summary).
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const raw = execSync("node _extract_bank_questions.mjs", {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
});
const questions = JSON.parse(raw);

const GENERIC = /^Using the values stated below|^Which answer best matches this scenario:/i;
const MALFORMED_IF = /Which description best applies to If/i;
const FILLER =
  /\(does not follow|inconsistent with the mechanism|not the best match|does not follow from the mechanism implied/i;
const SHORT_EXPL = (s) => String(s || "").trim().length > 0 && String(s).trim().length < 48;

function normStem(s) {
  return String(s)
    .replace(/\s+/g, " ")
    .replace(/[?.!]+$/u, "")
    .trim()
    .toLowerCase();
}

function optionsKey(q) {
  return (q.options || []).map(o => String(o).trim().toLowerCase()).sort().join("|");
}

const rows = [];
const stemMap = new Map();
const optMap = new Map();

for (const q of questions) {
  const id = q.canonicalId || q.id || q.source;
  const stem = q.question || "";
  if (GENERIC.test(stem)) {
    rows.push({
      defect: "generic_wrapper_stem",
      file: q.source,
      questionId: id,
      detail: stem.slice(0, 120),
    });
  }
  if (MALFORMED_IF.test(stem)) {
    rows.push({ defect: "malformed_applies_to_if", file: q.source, questionId: id, detail: stem.slice(0, 120) });
  }
  if ((q.options || []).some(o => FILLER.test(o))) {
    rows.push({ defect: "filler_distractor", file: q.source, questionId: id, detail: "option matches filler pattern" });
  }
  if (SHORT_EXPL(q.explanation) && q.type !== "selectAll") {
    rows.push({
      defect: "short_explanation",
      file: q.source,
      questionId: id,
      detail: String(q.explanation).slice(0, 80),
    });
  }
  if (q.reviewStatus === "needs-review") {
    rows.push({
      defect: "review_status_needs_review",
      file: q.source,
      questionId: id,
      detail: "needs-review",
    });
  }

  const ns = normStem(stem);
  if (ns.length >= 20) {
    if (!stemMap.has(ns)) stemMap.set(ns, []);
    stemMap.get(ns).push(id);
  }
  const ok = optionsKey(q);
  if (ok) {
    if (!optMap.has(ok)) optMap.set(ok, []);
    optMap.get(ok).push({ id, stem: stem.slice(0, 80) });
  }
}

for (const [stem, ids] of stemMap) {
  if (ids.length > 1) {
    rows.push({
      defect: "duplicate_stem_group",
      file: "",
      questionId: ids.join(";"),
      detail: `count=${ids.length} stem="${stem.slice(0, 80)}"`,
    });
  }
}

for (const [_, items] of optMap) {
  const uniqueStems = new Set(items.map(i => i.stem));
  if (items.length > 1 && uniqueStems.size > 1) {
    rows.push({
      defect: "duplicate_option_set",
      file: "",
      questionId: items.map(i => i.id).join(";"),
      detail: `count=${items.length}`,
    });
  }
}

const csvPath = path.join(root, "QUESTION_BANK_DEFECTS.csv");
const header = "defect,file,questionId,detail\n";
const body = rows
  .map(r =>
    [r.defect, r.file, r.questionId, `"${String(r.detail).replace(/"/g, '""')}"`].join(",")
  )
  .join("\n");
fs.writeFileSync(csvPath, header + body);

const summary = {
  totalQuestions: questions.length,
  defectRows: rows.length,
  duplicateStemGroups: [...stemMap.values()].filter(a => a.length > 1).length,
  duplicateOptionSets: [...optMap.values()].filter(a => a.length > 1).length,
  genericWrappers: rows.filter(r => r.defect === "generic_wrapper_stem").length,
  malformedIf: rows.filter(r => r.defect === "malformed_applies_to_if").length,
};
console.log(JSON.stringify(summary, null, 2));
console.log("Wrote", csvPath);

if (process.argv.includes("--gate")) {
  if (rows.some(r => r.defect === "malformed_applies_to_if")) process.exit(1);
}
