#!/usr/bin/env node
/**
 * Remove auto-generated distractor suffixes from MCQ option strings in question banks.
 */
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const files = fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"));

const GARBLED = [
  [
    /Only gap junction loss in NMJ exclusively always/gi,
    "Gap junction blockade at the neuromuscular junction"
  ],
  [
    /Only gap junctions set V_m/gi,
    "Only electrical synapses set resting potential"
  ]
];

const STRIP_RES = [
  /\s*\(does not follow from the mechanism implied in the stem\)/gi,
  /\s*\([^)]*does not follow from the mechanism[^)]*\)/gi,
  /\s*\([^)]*inconsistent with the mechanism[^)]*\)/gi,
  /\s*— inconsistent with the mechanism in the stem\./gi,
  /\s*— not the best match to the stem\.?/gi,
  /\s*\(assigns the deficit to the wrong visual pathway stage\)/gi,
  /\s*\(confuses cochlear place coding with an unrelated modality\)/gi,
  /\s*\([^)]*not the best match[^)]*\)/gi,
  /\s*\([^)]*wrong visual pathway stage[^)]*\)/gi,
  /\s*\([^)]*wrong pathway or syndrome[^)]*\)/gi,
  /\s+with preserved proprioception and vibration sense\.?/gi,
  /\s+suggesting brainstem rather than hemispheric origin\.?/gi,
  /\s+matching a peripheral nerve distribution\.?/gi,
  /\s+without cortical language involvement\.?/gi,
  /\s+under standard whole-cell recording conditions\.?/gi,
  /\s+with contralateral sensory findings\.?/gi,
  /\s+and no homonymous visual field defect\.?/gi,
  /\s*Requires [^.]+\.$/gi,
  /\s+when temperature is near 37\s*°?C\.?/gi,
  /\s+in a typical mammalian[^.]*\.?/gi,
  /\s+typical mammalian[^.]*\.?/gi,
  /\s+during normal resting permeability conditions\.?/gi,
  /^during normal resting permeability conditions\.?$/gi,
  /\s+exclusively in this context\.?/gi,
  /\s*\([^)]*ignores which ion dominates resting permeability[^)]*\)/gi,
  /\s*\([^)]*ignores which ion dominates[^)]*\)/gi,
  /\s*\([^)]*misstates how R_m[^)]*\)/gi,
  /\s*\([^)]*misapplies how active propagation[^)]*\)/gi,
  /\s*\([^)]*mixes up presynaptic release[^)]*\)/gi,
  /\s*\([^)]*contradicts the Nernst dependence[^)]*\)/gi,
  /\s*\([^)]*confuses channel gating timing[^)]*\)/gi,
  /\s*\([^)]*uses the wrong sign or driving force[^)]*\)/gi,
];

function cleanOptionString(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const [re, rep] of GARBLED) t = t.replace(re, rep);
  for (const re of STRIP_RES) t = t.replace(re, "");
  t = t.replace(/\s{2,}/g, " ").trim();
  if (t.endsWith("—")) t = t.slice(0, -1).trim();
  if (!t && typeof s === "string" && s.trim()) {
    const fallback = s
      .trim()
      .replace(/\s+during normal resting permeability conditions\.?/gi, "")
      .replace(/\s+when temperature is near 37\s*°?C\.?/gi, "")
      .replace(/\s+in a typical mammalian central neuron\.?/gi, "")
      .trim();
    if (fallback) return fallback;
    return "Mechanism that does not apply to the process described in the stem";
  }
  return t;
}

function walkAndClean(obj) {
  let n = 0;
  if (!obj || typeof obj !== "object") return n;
  if (Array.isArray(obj.options)) {
    obj.options = obj.options.map(o => {
      const c = cleanOptionString(o);
      if (c !== o) n++;
      return c;
    });
  }
  return n;
}

let total = 0;
for (const file of files) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  const retFields = names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(", ");
  let pools;
  try {
    pools = new Function(`${code}\nreturn { ${retFields} };`)();
  } catch {
    continue;
  }
  let hits = 0;
  for (const arr of Object.values(pools)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) hits += walkAndClean(q);
  }
  if (!hits) continue;
  let out = code;
  const optRe = /options:\s*\[([\s\S]*?)\n\s*\],/g;
  out = out.replace(optRe, (block, inner) => {
    const lines = inner.split("\n");
    const newLines = lines.map(line => {
      const m = line.match(/^(\s*)"((?:\\.|[^"\\])*)"(,?)\s*$/);
      if (!m) return line;
      const raw = JSON.parse(`"${m[2]}"`);
      const cleaned = cleanOptionString(raw);
      if (cleaned === raw) return line;
      return `${m[1]}${JSON.stringify(cleaned)}${m[3]}`;
    });
    return `options: [\n${newLines.join("\n")}\n    ],`;
  });
  fs.writeFileSync(fp, out);
  console.log(file, hits, "options cleaned");
  total += hits;
}
console.log("total option cleanups:", total);

for (const script of ["scripts/purge-junk-distractors.mjs", "scripts/fix-blank-options.mjs"]) {
  const fix = spawnSync(process.execPath, [script], { cwd: root, stdio: "inherit" });
  if (fix.status !== 0) process.exit(fix.status ?? 1);
}
