#!/usr/bin/env node
/**
 * QA gate for question pools. Exit 1 on failure.
 * Run: node scripts/validate-question-banks.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const POOL_FILES = fs
  .readdirSync(root)
  .filter(f => /^questions.*\.js$/.test(f))
  .sort();

const BANNED = /variant|placeholder|Clinical vignette \d|Pinnacle calc|Pinnacle gating|mastery variant/i;
const FILLER =
  /\(does not follow|inconsistent with the mechanism|not the best match|wrong visual pathway stage|wrong … stage|— inconsistent with the mechanism|does not follow from the mechanism implied/i;
const RT_F_LOG10 = 61.54;

function skeleton(stem) {
  return String(stem)
    .replace(/\b(cortex|hippocampus|amygdala|thalamus|cerebellum|brainstem|pons|medulla|temporal|parietal|frontal|occipital)\b/gi, "")
    .replace(/\d+/g, "")
    .replace(/#/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadPoolsFromFile(basename) {
  const filePath = path.join(root, basename);
  const code = fs.readFileSync(filePath, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) return {};
  const retFields = names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(", ");
  try {
    return new Function(`${code}\nreturn { ${retFields} };`)();
  } catch (e) {
    console.error(`WARN: could not parse ${basename}: ${e.message}`);
    return {};
  }
}

function nernstMv(out, inn, z = 1) {
  if (!out || !inn || out <= 0 || inn <= 0) return null;
  return (RT_F_LOG10 / Math.abs(z)) * Math.log10(out / inn);
}

function parseConcentrations(stem) {
  const out = {};
  const kin = stem.match(/\[K(?:\+|\u207a)?\]_?(?:in|i)\s*=\s*(\d+(?:\.\d+)?)/i);
  const kout = stem.match(/\[K(?:\+|\u207a)?\]_?(?:out|o)\s*=\s*(\d+(?:\.\d+)?)/i);
  const nain = stem.match(/\[Na(?:\+|\u207a)?\]_?(?:in|i)\s*=\s*(\d+(?:\.\d+)?)/i);
  const naout = stem.match(/\[Na(?:\+|\u207a)?\]_?(?:out|o)\s*=\s*(\d+(?:\.\d+)?)/i);
  if (kin && kout) out.K = { in: parseFloat(kin[1]), out: parseFloat(kout[1]) };
  if (nain && naout) out.Na = { in: parseFloat(nain[1]), out: parseFloat(naout[1]) };
  const k140 = stem.match(/140 mM.*4 mM|140\/4|\[K[^\]]*\]_?in=140[^;]*4 mM/i);
  if (k140 && !out.K) out.K = { in: 140, out: 4 };
  return out;
}

function parsePermRatio(stem) {
  const m = stem.match(/P_K\s*:\s*P_Na\s*=\s*(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)/i);
  if (m) return { pK: parseFloat(m[1]), pNa: parseFloat(m[2]) };
  return null;
}

function goldmanVm(conc, pK, pNa) {
  if (!conc.K || !conc.Na) return null;
  const { out: ko, in: ki } = conc.K;
  const { out: no, in: ni } = conc.Na;
  const num = pK * ko + pNa * no;
  const den = pK * ki + pNa * ni;
  if (!den) return null;
  return RT_F_LOG10 * Math.log10(num / den);
}

function parseOptionMv(opt) {
  const s = String(opt).replace(/\u2212/g, "-").replace(/−/g, "-");
  const m = s.match(/(-?\s*~?\s*(\d+(?:\.\d+)?))\s*mV/i);
  if (!m) return null;
  return parseFloat(m[2].replace(/\s/g, "")) * (m[1].includes("-") ? -1 : 1);
}

let failed = false;
const report = [];

const allPools = {};
for (const f of POOL_FILES) {
  const loaded = loadPoolsFromFile(f);
  for (const [name, arr] of Object.entries(loaded)) {
    if (Array.isArray(arr)) allPools[`${f}:${name}`] = arr;
  }
}

for (const [name, arr] of Object.entries(allPools)) {
  const stems = arr.map(q => q?.question).filter(Boolean);
  const sk = new Set(stems.map(skeleton));
  report.push(`${name}: ${stems.length} items, ${sk.size} unique skeletons`);
}

const pin = allPools["questions-pinnacle-megabank.js:PINNACLE_MEGA_POOL"];
if (pin) {
  const sk = pin.map(q => skeleton(q.question));
  const uniq = new Set(sk);
  if (uniq.size < 250) {
    failed = true;
    report.push(`FAIL: PINNACLE_MEGA_POOL has only ${uniq.size} unique skeletons (need ≥250)`);
  }
  if (uniq.size !== sk.length) {
    failed = true;
    report.push("FAIL: PINNACLE_MEGA_POOL has duplicate skeletons");
  }
}

for (const [name, arr] of Object.entries(allPools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    for (const opt of q.options || []) {
      if (opt != null && !String(opt).trim()) {
        failed = true;
        report.push(`FAIL: empty option in ${name}: ${String(q.question).slice(0, 55)}…`);
        break;
      }
    }
    for (const opt of q.options || []) {
      if (FILLER.test(String(opt))) {
        failed = true;
        report.push(`FAIL: filler suffix in ${name} option: ${String(opt).slice(0, 70)}…`);
        break;
      }
    }
  }
}

for (const [name, arr] of Object.entries(allPools)) {
  if (!Array.isArray(arr) || !arr.length) continue;
  let n = 0;
  let longestCorrect = 0;
  for (const q of arr) {
    if (!q?.options || q.type === "selectAll") continue;
    if (typeof q.correct !== "number") continue;
    n++;
    const lens = q.options.map(o => String(o).length);
    const maxLen = Math.max(...lens);
    if (lens[q.correct] === maxLen && lens.filter(l => l === maxLen).length === 1) longestCorrect++;
  }
  if (n >= 10) {
    const rate = longestCorrect / n;
    report.push(`${name} longest-correct rate: ${(rate * 100).toFixed(1)}% (n=${n})`);
    if (rate > 0.4) {
      failed = true;
      report.push(`FAIL: ${name} longest-correct ${(rate * 100).toFixed(1)}% > 40%`);
    }
  }
}

const sata = allPools["questions-proctored-mock.js:PROCTORED_SATA_POOL"];
if (sata) {
  const dist = {};
  for (const q of sata) {
    const n = (q.correctIndices || []).length;
    dist[n] = (dist[n] || 0) + 1;
  }
  report.push(`PROCTORED_SATA_POOL correct-count distribution: ${JSON.stringify(dist)}`);
  if ((dist[3] || 0) > 20) {
    failed = true;
    report.push("FAIL: too many SATA items with exactly 3 correct statements");
  }
}

for (const [name, arr] of Object.entries(allPools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    const stem = String(q?.question || "");
    if (!/Nernst|Goldman|E_K|E_Na|37°C.*mM|\[K/i.test(stem)) continue;
    const conc = parseConcentrations(stem);
    const keyed = q.options?.[q.correct];
    const keyedMv = keyed ? parseOptionMv(keyed) : null;
    const asksEk =
      /\bE_K\b|equilibrium potential for K|Nernst.*K⁺|K⁺.*Nernst/i.test(stem) &&
      !/Goldman|constant-field|resting V_m|P_K/i.test(stem);
    if (asksEk && conc.K && keyedMv != null) {
      const ek = nernstMv(conc.K.out, conc.K.in, 1);
      if (ek != null && Math.abs(keyedMv - ek) > 4) {
        failed = true;
        report.push(`FAIL: ${name} E_K key ${keyedMv} vs computed ${ek.toFixed(1)}: ${stem.slice(0, 55)}…`);
      }
    }
    const pr = parsePermRatio(stem);
    if (pr && conc.K && conc.Na && keyedMv != null && /Goldman|constant-field|P_K/i.test(stem)) {
      const vm = goldmanVm(conc, pr.pK, pr.pNa);
      if (vm != null && Math.abs(keyedMv - vm) > 8) {
        failed = true;
        report.push(`FAIL: ${name} Goldman key ${keyedMv} vs computed ${vm.toFixed(1)}`);
      }
    }
  }
}

for (const [name, arr] of Object.entries(allPools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    const blob = [q.question, ...(q.options || [])].filter(Boolean).join(" ");
    if (BANNED.test(blob)) {
      failed = true;
      report.push(`FAIL: banned placeholder text in ${name}: ${String(q.question).slice(0, 60)}…`);
      break;
    }
  }
}

const exam = allPools["questions-proctored-mock.js:PROCTORED_MOCK_EXAM_POOL"];
if (!exam || exam.length < 50) {
  failed = true;
  report.push("FAIL: PROCTORED_MOCK_EXAM_POOL must have at least 50 items");
}

console.log(report.join("\n"));
if (failed) {
  console.error("\nValidation FAILED");
  process.exit(1);
}
console.log("\nValidation passed (with warnings above if any).");
