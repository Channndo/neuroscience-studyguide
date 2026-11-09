#!/usr/bin/env node
/**
 * Reduce "longest option = correct" giveaway without filler suffixes.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { balanceMcqOptions, isKeyedLongest, optionLen } from "./lib/balance-option-lengths.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const TARGET_FILES = /^questions.*\.js$/;

function normalizeMvOptions(options, correct) {
  const mvRe = /^[−-]?\s*~?\s*(\d+(?:\.\d+)?)\s*mV/i;
  if (!options.every(o => mvRe.test(String(o).trim()))) return null;
  const target = Math.max(...options.map(optionLen));
  return options.map((o, i) => {
    if (i === correct) return String(o).trim();
    let t = `≈ ${String(o).trim().replace(/^≈\s*/, "")}`;
    if (optionLen(t) < target - 2) t = `${t} at 37 °C`;
    return t;
  });
}

function rebalanceQuestion(q) {
  if (!q?.options?.length || q.correct == null || q.type === "selectAll") return false;
  if (!isKeyedLongest(q)) return false;

  const mvNorm = normalizeMvOptions(q.options, q.correct);
  if (mvNorm) q.options = mvNorm;

  const before = JSON.stringify(q.options);
  const balanced = balanceMcqOptions(q);
  q.options = balanced.options;
  return before !== JSON.stringify(q.options);
}

function loadFilePools(file) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  const bag = new Function(`${code}\nreturn { ${names.map(n => `${n}`).join(", ")} };`)();
  return { fp, code, names, bag };
}

function replacePoolInFile(code, name, arr) {
  const startMarker = `const ${name} = [`;
  const start = code.indexOf(startMarker);
  if (start < 0) throw new Error(`Pool ${name} not found in file`);
  const afterStart = start + startMarker.length;
  const nextConst = code.indexOf("\nconst ", afterStart);
  const searchEnd = nextConst > 0 ? nextConst : code.length;
  let closeIdx = -1;
  for (let i = afterStart; i < searchEnd; ) {
    const p = code.indexOf("];", i);
    if (p < 0 || p >= searchEnd) break;
    closeIdx = p;
    i = p + 2;
  }
  if (closeIdx < afterStart) throw new Error(`Pool ${name} closing not found`);
  const body = arr
    .map(q => {
      const lines = ["  {"];
      if (q.type) lines.push(`    type: ${JSON.stringify(q.type)},`);
      if (q.topic) lines.push(`    topic: ${JSON.stringify(q.topic)},`);
      if (q.module) lines.push(`    module: ${JSON.stringify(q.module)},`);
      if (q.modelAnswer) lines.push(`    modelAnswer: ${JSON.stringify(q.modelAnswer)},`);
      if (q.minChars != null) lines.push(`    minChars: ${q.minChars},`);
      lines.push(`    question: ${JSON.stringify(q.question)},`);
      if (Array.isArray(q.options)) {
        lines.push(`    options: [`);
        for (const o of q.options) lines.push(`      ${JSON.stringify(o)},`);
        lines.push(`    ],`);
      }
      if (q.correctIndices) lines.push(`    correctIndices: ${JSON.stringify(q.correctIndices)},`);
      if (q.correct != null) lines.push(`    correct: ${q.correct},`);
      if (q.scoringRule) lines.push(`    scoringRule: ${JSON.stringify(q.scoringRule)},`);
      if (q.diagram) lines.push(`    diagram: ${JSON.stringify(q.diagram)},`);
      if (q.explanation) lines.push(`    explanation: ${JSON.stringify(q.explanation)},`);
      if (q.wrongExplanations) {
        lines.push(`    wrongExplanations: [`);
        for (const w of q.wrongExplanations) lines.push(`      ${JSON.stringify(w)},`);
        lines.push(`    ]`);
      }
      if (q.formulaHint) lines.push(`    formulaHint: ${JSON.stringify(q.formulaHint)},`);
      if (q.formulaSteps) lines.push(`    formulaSteps: ${JSON.stringify(q.formulaSteps)},`);
      lines.push(`  }`);
      return lines.join("\n");
    })
    .join(",\n");
  return code.slice(0, start) + startMarker + "\n" + body + "\n];" + code.slice(closeIdx + 2);
}

const fileArg = process.argv.find(a => a.startsWith("--file="))?.slice(7);
const files = fileArg
  ? [fileArg]
  : fs
      .readdirSync(root)
      .filter(f => TARGET_FILES.test(f) && f !== "questions-formula-drills.js" && f !== "questions-written-final.js");
let total = 0;

for (const file of files) {
  const { fp, code, names, bag } = loadFilePools(file);
  let out = code;
  let fileChanged = 0;
  const touched = new Set();
  for (const name of names) {
    if (!Array.isArray(bag[name])) continue;
    for (const q of bag[name]) {
      for (let pass = 0; pass < 4; pass++) {
        if (rebalanceQuestion(q)) {
          fileChanged++;
          touched.add(name);
        } else break;
      }
    }
  }
  for (const name of touched) {
    out = replacePoolInFile(out, name, bag[name]);
  }
  if (fileChanged) {
    fs.writeFileSync(fp, out);
    console.log(file, "rebalance passes:", fileChanged);
    total += fileChanged;
  }
}
console.log("done, total rebalance passes:", total);
