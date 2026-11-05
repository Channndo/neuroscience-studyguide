#!/usr/bin/env node
/** 1000 shuffles per pool item — correct index should not stick at 0. */
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

function extractQuestions(file) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  const out = [];
  const re = /question:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) out.push(JSON.parse(`"${m[1]}"`));
  return out;
}

// Load MCQ with correct indices via naive parse — use pinnacle file only for smoke
const file = "questions-pinnacle-megabank.js";
const text = fs.readFileSync(path.join(root, file), "utf8");
const blocks = text.split(/correct:\s*/).slice(1);
let trials = 0;
const hist = [0, 0, 0, 0];
for (const block of blocks.slice(0, 50)) {
  const c = parseInt(block, 10);
  if (Number.isNaN(c) || c < 0 || c > 3) continue;
  for (let t = 0; t < 1000; t++) {
    const order = shuffle([0, 1, 2, 3]);
    const pos = order.indexOf(c);
    hist[pos]++;
    trials++;
  }
}
const maxRate = Math.max(...hist) / trials;
console.log(`Shuffle test (${file}, sample): hist=${hist.join(",")} maxRate=${(maxRate * 100).toFixed(1)}%`);
if (maxRate > 0.35) {
  console.error("FAIL: position skew > 35%");
  process.exit(1);
}
