#!/usr/bin/env node
/**
 * Replace empty MCQ option strings (artifact of strip/rebalance) with plausible distractors.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SKIP_FILES = new Set(["questions-formula-drills.js", "questions-written-final.js"]);

const POOL_DISTRACTORS = [
  "Goldman equation for multi-ion resting potential only (not time-varying spike conductances)",
  "Capacitive charging of the membrane with no voltage-gated conductance changes",
  "Steady-state Nernst equilibrium for a single ion with g_Na and g_K fixed",
  "Confuses resting multi-ion equilibrium with active spike conductance changes",
  "Describes presynaptic vesicle fusion instead of postsynaptic receptor signaling",
  "Applies cochlear or retinal transduction to unrelated central synaptic integration",
  "Treats electrical synapses as quantal chemical transmission at the NMJ",
  "Reverses whether depolarization moves V_m toward or away from spike threshold",
  "Mixes temporal summation with spatial summation from separate dendritic inputs",
  "Attributes superior colliculus or brainstem orienting to primary visual cortex only",
  "Implies the Na⁺/K⁺ pump alone produces the action potential upstroke",
  "Equates myelin thickness with the Hodgkin–Huxley gating order of Na⁺ then K⁺",
  "Uses a single-ion Nernst potential while multiple conductances change during a spike",
  "Delayed K⁺ channels open throughout the entire action potential without repolarizing",
  "Nernst equilibrium is independent of intracellular versus extracellular concentrations",
];

function pickDistractor(q, index) {
  const used = new Set((q.options || []).map(o => String(o).trim().toLowerCase()).filter(Boolean));
  const stem = `${q.topic || ""} ${q.question || ""}`;
  let h = 0;
  for (let i = 0; i < stem.length; i++) h = (h * 31 + stem.charCodeAt(i)) | 0;
  const seed = Math.abs(h) + index * 997;
  for (let k = 0; k < POOL_DISTRACTORS.length; k++) {
    const d = POOL_DISTRACTORS[(seed + k) % POOL_DISTRACTORS.length];
    if (!used.has(d.toLowerCase())) return d;
  }
  return `Incorrect mechanism for this ${q.topic || "concept"} (${index + 1})`;
}

function serializeQuestion(q) {
  const keyOrder = [
    "type",
    "topic",
    "module",
    "difficulty",
    "question",
    "options",
    "correct",
    "correctIndices",
    "scoringRule",
    "diagram",
    "formulaHint",
    "formulaSteps",
    "calcType",
    "explanation",
    "wrongExplanations",
    "modelAnswer",
    "minChars",
    "anatomyDiagram",
    "highlightKey",
    "anatomyView",
    "partialCredit",
    "selectAll",
  ];
  const seen = new Set();
  const lines = ["  {"];
  const emit = (key, val) => {
    if (val === undefined) return;
    seen.add(key);
    if (key === "options" && Array.isArray(val)) {
      lines.push(`    options: [`);
      for (const o of val) lines.push(`      ${JSON.stringify(o)},`);
      lines.push(`    ],`);
    } else if (key === "wrongExplanations" && Array.isArray(val)) {
      lines.push(`    wrongExplanations: [`);
      for (const w of val) lines.push(`      ${JSON.stringify(w)},`);
      lines.push(`    ]`);
    } else if (typeof val === "string") {
      lines.push(`    ${key}: ${JSON.stringify(val)},`);
    } else if (typeof val === "number" || typeof val === "boolean") {
      lines.push(`    ${key}: ${val},`);
    } else if (Array.isArray(val) || (val && typeof val === "object")) {
      lines.push(`    ${key}: ${JSON.stringify(val)},`);
    }
  };
  for (const key of keyOrder) emit(key, q[key]);
  for (const key of Object.keys(q)) {
    if (!seen.has(key)) emit(key, q[key]);
  }
  lines.push(`  }`);
  return lines.join("\n");
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
  const body = arr.map(serializeQuestion).join(",\n");
  return code.slice(0, start) + startMarker + "\n" + body + "\n];\n" + code.slice(closeIdx + 3);
}

let totalFixed = 0;

for (const file of fs.readdirSync(root).filter(f => /^questions-.*\.js$/.test(f) && !SKIP_FILES.has(f))) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  let bag;
  try {
    bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  } catch (e) {
    console.warn("skip parse", file, e.message);
    continue;
  }
  const touched = new Set();
  let fileFixed = 0;
  for (const name of names) {
    const arr = bag[name];
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.options?.length) continue;
      let changed = false;
      q.options = q.options.map((o, i) => {
        if (String(o || "").trim()) return o;
        changed = true;
        fileFixed++;
        return pickDistractor(q, i);
      });
      if (changed) touched.add(name);
    }
  }
  if (!fileFixed) continue;
  let out = code;
  for (const name of touched) {
    out = replacePoolInFile(out, name, bag[name]);
  }
  fs.writeFileSync(fp, out);
  totalFixed += fileFixed;
  console.log(file, fileFixed, "replacements in", [...touched].join(", "));
}

console.log("total blank options replaced:", totalFixed);
