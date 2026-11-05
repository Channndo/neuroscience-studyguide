#!/usr/bin/env node
/** Fail if any two question stems match after stripping digits and "#". */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function skeleton(stem) {
  return String(stem)
    .replace(/\d+/g, "")
    .replace(/#/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function extractQuestions(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const out = [];
  const re = /question:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    try {
      out.push(JSON.parse(`"${m[1]}"`));
    } catch {
      /* skip */
    }
  }
  return out;
}

const poolFiles = fs.readdirSync(root).filter(f => /^questions.*\.js$/.test(f));
const bySk = new Map();
for (const f of poolFiles) {
  for (const q of extractQuestions(path.join(root, f))) {
    const sk = skeleton(q);
    if (!bySk.has(sk)) bySk.set(sk, []);
    bySk.get(sk).push({ file: f, question: q.slice(0, 80) });
  }
}

const dupes = [...bySk.entries()].filter(([, arr]) => arr.length > 1);
if (dupes.length) {
  console.error("Duplicate stems after digit/# strip:", dupes.length);
  for (const [sk, arr] of dupes.slice(0, 20)) {
    console.error(`\n[${arr.length}x] ${sk.slice(0, 120)}`);
    arr.slice(0, 3).forEach(a => console.error(`  - ${a.file}: ${a.question}…`));
  }
  process.exit(1);
}
console.log("Stem uniqueness OK across", poolFiles.length, "pool files,", bySk.size, "unique skeletons.");
