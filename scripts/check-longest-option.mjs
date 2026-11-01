#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const all = JSON.parse(execSync("node _extract_bank_questions.mjs", { cwd: root, encoding: "utf8" }));

function len(s) {
  return String(s || "").replace(/<[^>]+>/g, "").trim().length;
}

const byPart = { part1: { total: 0, longestCorrect: 0 }, part2: { total: 0, longestCorrect: 0 }, part3: { total: 0, longestCorrect: 0 } };

for (const q of all) {
  if (!q.options?.length || q.correct == null) continue;
  const mod = q.module || "part1";
  if (!byPart[mod]) continue;
  byPart[mod].total++;
  const lengths = q.options.map(len);
  const cLen = lengths[q.correct];
  const maxOther = Math.max(...lengths.filter((_, i) => i !== q.correct));
  if (cLen > maxOther) byPart[mod].longestCorrect++;
}

const summary = {};
let total = 0;
let lc = 0;
for (const [mod, s] of Object.entries(byPart)) {
  summary[mod] = {
    mcqs: s.total,
    longestCorrect: s.longestCorrect,
    ratePct: s.total ? Math.round((100 * s.longestCorrect) / s.total) : 0
  };
  total += s.total;
  lc += s.longestCorrect;
}
summary.all = {
  mcqs: total,
  longestCorrect: lc,
  ratePct: total ? Math.round((100 * lc) / total) : 0,
  target: "25–35%"
};
console.log(JSON.stringify(summary, null, 2));
