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
const NERNST_K = (out, inn) => 61.54 * Math.log10(out / inn);

function skeleton(stem) {
  return String(stem)
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
  if (new Set(sk).size !== sk.length) {
    failed = true;
    report.push("FAIL: PINNACLE_MEGA_POOL has duplicate skeletons");
  }
}

const globalSk = new Map();
for (const [name, arr] of Object.entries(allPools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    if (!q?.question) continue;
    const sk = skeleton(q.question);
    if (!globalSk.has(sk)) globalSk.set(sk, []);
    globalSk.get(sk).push(name);
  }
}
const nearDupes = [...globalSk.entries()].filter(([, locs]) => locs.length > 1);
if (nearDupes.length) {
  report.push(`WARN: ${nearDupes.length} skeleton collisions across pools (first: ${nearDupes[0][0].slice(0, 50)}…)`);
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
    if ((name.includes("PINNACLE") || name.includes("CIRCUIT") || name.includes("CLAMP")) && rate > 0.45) {
      failed = true;
      report.push(`FAIL: ${name} longest-correct ${(rate * 100).toFixed(1)}% > 45%`);
    }
  }
}

function simShuffleCorrectPosition(options, correct) {
  const indexed = options.map((text, i) => ({ text, originalIndex: i }));
  const shuffled = shuffle(indexed);
  return shuffled.findIndex(o => o.originalIndex === correct);
}

const posHist = [0, 0, 0, 0];
let simN = 0;
for (const arr of Object.values(allPools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    if (!q?.options || q.options.length !== 4 || typeof q.correct !== "number") continue;
    for (let t = 0; t < 50; t++) {
      const pos = simShuffleCorrectPosition(q.options, q.correct);
      if (pos >= 0 && pos < 4) posHist[pos]++;
      simN++;
    }
  }
}
if (simN) {
  const max = Math.max(...posHist);
  report.push(`Shuffle sim positions A-D counts: ${posHist.join(", ")} (trials=${simN})`);
  if (max / simN > 0.4) {
    failed = true;
    report.push("FAIL: shuffle simulation skewed (>40% in one position)");
  }
}

for (const [name, arr] of Object.entries(allPools)) {
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    const stem = String(q?.question || "");
    if (!/140.*4.*E_K|140 mM.*4 mM.*E_K/i.test(stem)) continue;
    if (/inverted|perfus/i.test(stem)) continue;
    const keyed = q.options?.[q.correct];
    if (keyed && /96/.test(String(keyed)) && !/95/.test(String(keyed))) {
      failed = true;
      report.push(`FAIL: ${name} E_K 140/4 should be ~-95 mV, not -96: ${stem.slice(0, 50)}`);
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
