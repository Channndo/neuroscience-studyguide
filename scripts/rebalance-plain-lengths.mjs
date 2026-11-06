#!/usr/bin/env node
/**
 * Reduce "longest option = correct" giveaway without filler suffixes.
 * Trims verbose keyed options; lengthens distractors with plain clinical/mechanistic phrases.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const TARGET_FILES = /^questions.*\.js$/;

const CLINICAL_PADS = [
  " with contralateral sensory findings",
  " without cortical language involvement",
  " matching a peripheral nerve distribution",
  " suggesting brainstem rather than hemispheric origin",
  " with preserved proprioception and vibration sense",
  " and no homonymous visual field defect",
];

const MECH_PADS = [
  " under standard whole-cell recording conditions",
  " in a typical mammalian central neuron",
  " when temperature is near 37 °C",
  " during normal resting permeability conditions",
];

function len(s) {
  return String(s || "").replace(/<[^>]+>/g, "").trim().length;
}

function isLongestCorrect(q) {
  const lens = q.options.map(len);
  const cLen = lens[q.correct];
  const maxLen = Math.max(...lens);
  return cLen === maxLen && lens.filter(l => l === maxLen).length === 1;
}

function trimCorrectText(opt) {
  let t = String(opt).trim();
  const parts = t.split(/\s*;\s*/);
  if (parts.length > 1 && len(parts[0]) >= 22) t = parts[0];
  if (len(t) > 48 && /,/.test(t)) t = t.split(",")[0].trim();
  t = t.replace(/\s*\([^)]{15,}\)\s*$/, "").trim();
  t = t.replace(/\s*—[^—]{12,}$/, "").trim();
  return t;
}

function padWrongPlain(opt, topic, targetLen) {
  let t = String(opt).trim();
  if (len(t) >= targetLen) return t;
  if (/^Only /i.test(t)) {
    t = t.replace(/^Only /i, "").replace(/\.$/, "");
    t = `Requires ${t.charAt(0).toLowerCase()}${t.slice(1)} exclusively in this context`;
  }
  const pads = /lesion|stroke|weakness|aphasia|hemianopia|ataxia|Motor|Visual|Neuroanatomy|Clinical/i.test(
    `${topic} ${opt}`
  )
    ? CLINICAL_PADS
    : MECH_PADS;
  let i = len(t) % pads.length;
  while (len(t) < targetLen && i < pads.length + 6) {
    t = `${t}${pads[i % pads.length]}.`.replace(/\.\./g, ".");
    i++;
  }
  return t.replace(/\s{2,}/g, " ").trim();
}

function normalizeMvOptions(options, correct) {
  const mvRe = /^[−-]?\s*~?\s*(\d+(?:\.\d+)?)\s*mV/i;
  if (!options.every(o => mvRe.test(String(o).trim()))) return null;
  const target = Math.max(...options.map(len));
  return options.map((o, i) => {
    if (i === correct) return String(o).trim();
    const m = String(o).match(mvRe);
    if (!m) return o;
    const padded = `≈ ${String(o).trim().replace(/^≈\s*/, "")}`;
    if (len(padded) < target - 2) return `${padded} (same units as E_ion)`;
    return padded;
  });
}

function swapCorrectWithShorterDistractor(q) {
  if (!isLongestCorrect(q)) return false;
  let minI = -1;
  let minL = Infinity;
  for (let i = 0; i < q.options.length; i++) {
    if (i === q.correct) continue;
    const l = len(q.options[i]);
    if (l < minL) {
      minL = l;
      minI = i;
    }
  }
  if (minI < 0) return false;
  const ci = q.correct;
  [q.options[ci], q.options[minI]] = [q.options[minI], q.options[ci]];
  q.correct = minI;
  if (Array.isArray(q.wrongExplanations)) {
    [q.wrongExplanations[ci], q.wrongExplanations[minI]] = [
      q.wrongExplanations[minI] || "",
      q.wrongExplanations[ci] || "",
    ];
  }
  return true;
}

function rebalanceQuestion(q) {
  if (!q?.options?.length || q.correct == null || q.type === "selectAll") return false;
  if (!isLongestCorrect(q)) return false;

  let changed = false;
  const mvNorm = normalizeMvOptions(q.options, q.correct);
  if (mvNorm) {
    q.options = mvNorm;
    changed = true;
    if (!isLongestCorrect(q)) return changed;
  }

  const trimmed = trimCorrectText(q.options[q.correct]);
  if (trimmed !== q.options[q.correct]) {
    q.options[q.correct] = trimmed;
    changed = true;
  }

  if (!isLongestCorrect(q)) return changed;

  const target = Math.max(len(q.options[q.correct]) - 4, 32);
  q.options = q.options.map((opt, i) => {
    if (i === q.correct) return opt;
    if (len(opt) >= target) return opt;
    const next = padWrongPlain(opt, q.topic, target);
    if (next !== opt) changed = true;
    return next;
  });
  if (isLongestCorrect(q) && swapCorrectWithShorterDistractor(q)) changed = true;
  return changed;
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
