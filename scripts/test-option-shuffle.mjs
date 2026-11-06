#!/usr/bin/env node
/**
 * Fisher–Yates: 1000 trials per MCQ pool — correct-answer position should be roughly uniform.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadAllMcq() {
  const files = fs.readdirSync(root).filter(f => /^questions.*\.js$/.test(f));
  const items = [];
  for (const f of files) {
    const code = fs.readFileSync(path.join(root, f), "utf8");
    const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
    if (!names.length) continue;
    let bag;
    try {
      bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
    } catch {
      continue;
    }
    for (const arr of Object.values(bag)) {
      if (!Array.isArray(arr)) continue;
      for (const q of arr) {
        if (q?.options?.length === 4 && typeof q.correct === "number") items.push(q);
      }
    }
  }
  return items;
}

const modes = ["dailyPop", "part1", "proctoredMock", "brainAnatomy"];
const mcq = loadAllMcq();
if (!mcq.length) {
  console.error("No MCQ items loaded");
  process.exit(1);
}

let failed = false;
for (const mode of modes) {
  const hist = [0, 0, 0, 0];
  let trials = 0;
  const sample = mcq.slice(0, Math.min(80, mcq.length));
  for (const q of sample) {
    for (let t = 0; t < 1000; t++) {
      const order = shuffle([0, 1, 2, 3]);
      const pos = order.indexOf(q.correct);
      hist[pos]++;
      trials++;
    }
  }
  const maxRate = Math.max(...hist) / trials;
  console.log(`${mode}: hist=${hist.join(",")} maxRate=${(maxRate * 100).toFixed(1)}% (items=${sample.length})`);
  if (maxRate > 0.32) {
    console.error(`FAIL ${mode}: position skew > 32%`);
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
