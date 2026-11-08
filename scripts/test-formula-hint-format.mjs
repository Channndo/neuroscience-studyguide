#!/usr/bin/env node
/** Ensure formula drill hints render stacked fractions (no raw Nernst slashes). */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const chunk = html.slice(
  html.indexOf("function renderMathFraction"),
  html.indexOf("const FALLBACK_MCQ_DISTRACTORS")
);
const ctx = {
  escapeHtml: s =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;"),
};
vm.createContext(ctx);
vm.runInContext(chunk, ctx);
const fmt = ctx.formatNeuroscienceText;

const code = fs.readFileSync(path.join(root, "questions-formula-drills.js"), "utf8");
const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
const pools = new Function(`${code}\nreturn { ${names.join(", ")} };`)();

const MUST_STACK_RE =
  /\(61\.54\s*mV\s*\/\s*z\)|\(61\.54\/z\)|\[out\]\/\[in\]|log10\(\d+\/\d+\)|log10\(\[out\]\/\[in\]\)|\(P_K·K_o|R_m\s*\/\s*R_i|61\.54·log10\(\d+\//i;

let failed = 0;
function check(label, raw) {
  if (!MUST_STACK_RE.test(raw)) return;
  const out = fmt(raw);
  if (!out.includes("math-frac")) {
    console.error("FAIL:", label, "— no stacked fraction in output");
    failed++;
    return;
  }
  if (/\(61\.54[^<]*\/[^<]*z\)|\[out\]\/\[in\]/.test(out)) {
    console.error("FAIL:", label, "— raw slash survived:", raw.slice(0, 80));
    failed++;
    return;
  }
  if (/E_ion/.test(out)) {
    console.error("FAIL:", label, "— E_ion not subscripted");
    failed++;
  }
}

for (const arr of Object.values(pools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    if (q.formulaHint) check(`hint:${q.question?.slice(0, 40)}`, q.formulaHint);
    for (const step of q.formulaSteps || []) check(`step:${step.slice(0, 50)}`, step);
    if (q.explanation) check(`expl:${q.question?.slice(0, 40)}`, q.explanation);
  }
}

const must = [
  "Use: Nernst — E_ion = (61.54 mV / z) · log10([out]/[in])",
  "Apply E_ion = (61.54/z) · log10([out]/[in]).",
];
for (const s of must) check("canonical", s);

if (failed) process.exit(1);
console.log("formula hint format: OK");
