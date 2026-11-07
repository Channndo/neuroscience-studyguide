#!/usr/bin/env node
/**
 * Replace cross-modality filler distractors and padding-only MCQ options.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SKIP_FILES = new Set(["questions-formula-drills.js", "questions-written-final.js"]);

const JUNK_RE =
  /gap junctions relay dark|glutamate release dominates.*dark|depolarize rods|bleaching photopigment|horizontal cells hyperpolarize rods|müller glia pass inward|inner hair cells establish.*rod|transducin hydrolyzes cGMP|only müller glia|ipsp.*bipolar.*rods|37\s*°?c|typical mammalian|during normal resting permeability|gap junction coupling in a typical|goldman equation at rest only in a|opening voltage-gated na.*37|exclusive gaba.*muscle.*resting/i;

const SAFE_DISTRACTORS = [
  "Confuses resting multi-ion equilibrium with time-varying spike conductances",
  "Describes presynaptic vesicle release instead of postsynaptic integration",
  "Applies a peripheral sensory transduction step to unrelated central circuitry",
  "Treats passive cable properties as sufficient for regenerative action potentials",
  "Reverses the direction of ion flow or equilibrium potential for the ion named in the stem",
  "Mixes up temporal versus spatial summation at the postsynaptic membrane",
  "Attributes a cortex-only function to a brainstem or midbrain sensorimotor structure",
  "Equates electrical synapses with chemical quantal transmission at the NMJ",
  "Uses steady-state Nernst for one ion while multiple conductances change in time",
  "Implies myelin alone sets spike threshold without voltage-gated channels",
];

function stemContext(q) {
  return `${q.topic || ""} ${q.question || ""}`.toLowerCase();
}

function visionStem(stem) {
  return /photoreceptor|retina|vision|rod|cone|light|dark adapt|cng|transducin/i.test(stem);
}

function isJunkOption(opt, q) {
  const s = String(opt ?? "").trim();
  if (!s) return true;
  const stem = stemContext(q);
  if (JUNK_RE.test(s)) {
    if (visionStem(stem) && /transducin|cng|glutamate.*dark|photoreceptor/i.test(s)) return false;
    return true;
  }
  if (/^gap junction coupling$/i.test(s)) return true;
  if (/^goldman equation at rest only$/i.test(s)) return true;
  return false;
}

function pickReplacement(q, index) {
  const used = new Set((q.options || []).map(o => String(o).trim().toLowerCase()).filter(Boolean));
  const stem = stemContext(q);
  let h = 0;
  for (let i = 0; i < stem.length; i++) h = (h * 31 + stem.charCodeAt(i)) | 0;
  const seed = Math.abs(h) + index * 997;
  for (let k = 0; k < SAFE_DISTRACTORS.length; k++) {
    const d = SAFE_DISTRACTORS[(seed + k) % SAFE_DISTRACTORS.length];
    if (!used.has(d.toLowerCase())) return d;
  }
  return `Mechanism inconsistent with the stem (${q.topic || "topic"} ${index + 1})`;
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

let total = 0;

for (const file of fs.readdirSync(root).filter(f => /^questions-.*\.js$/.test(f) && !SKIP_FILES.has(f))) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  let bag;
  try {
    bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  } catch (e) {
    console.warn("skip", file, e.message);
    continue;
  }
  const touched = new Set();
  let fileN = 0;
  for (const name of names) {
    const arr = bag[name];
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.options?.length || q.correct == null) continue;
      let changed = false;
      q.options = q.options.map((opt, i) => {
        if (!isJunkOption(opt, q)) return opt;
        changed = true;
        fileN++;
        return pickReplacement(q, i);
      });
      if (changed) touched.add(name);
    }
  }
  if (!fileN) continue;
  let out = code;
  for (const name of touched) {
    out = replacePoolInFile(out, name, bag[name]);
  }
  fs.writeFileSync(fp, out);
  total += fileN;
  console.log(file, fileN, "junk options replaced in", [...touched].join(", "));
}

console.log("total junk options purged:", total);
