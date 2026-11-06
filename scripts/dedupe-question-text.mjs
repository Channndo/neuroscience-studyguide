#!/usr/bin/env node
/** Remove duplicate question strings from supplemental pools (keep first occurrence in CORE_BANK order). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const TARGETS = [
  "questions-expansion.js",
  "questions-extra-pools.js",
  "questions-fresh-pools.js",
  "questions-exam-paraphrases.js",
];

function extractQuestionStrings(file) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  const re = /question:\s*"((?:\\.|[^"\\])*)"/g;
  const out = [];
  let m;
  while ((m = re.exec(text))) out.push(JSON.parse(`"${m.group(1)}"`));
  return out;
}

function loadCoreStems() {
  const coreFiles = ["questions-bank.js"];
  const set = new Set();
  for (const f of coreFiles) {
    for (const q of extractQuestionStrings(f)) set.add(q);
  }
  return set;
}

function removeDuplicateBlocks(file, seen) {
  let text = fs.readFileSync(path.join(root, file), "utf8");
  const blockRe = /\{\s*\n\s*(?:type:\s*"[^"]+",\s*\n\s*)?topic:[\s\S]*?question:\s*"((?:\\.|[^"\\])*)"[\s\S]*?\n\s*\}/g;
  let removed = 0;
  text = text.replace(blockRe, (block, qEsc) => {
    const q = JSON.parse(`"${qEsc}"`);
    if (seen.has(q)) {
      removed++;
      return "";
    }
    seen.add(q);
    return block;
  });
  text = text.replace(/,\s*,/g, ",").replace(/\[\s*,/g, "[").replace(/,\s*\]/g, "]");
  fs.writeFileSync(path.join(root, file), text);
  return removed;
}

const seen = loadCoreStems();
let total = 0;
for (const f of TARGETS) {
  total += removeDuplicateBlocks(f, seen);
}
console.log(`Removed ${total} duplicate question blocks from supplemental files.`);
