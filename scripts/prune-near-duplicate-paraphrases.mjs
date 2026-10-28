#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function normalizeStem(s) {
  return String(s)
    .toLowerCase()
    .replace(/^suppose that\s+/i, "")
    .replace(/^in this case,\s+/i, "")
    .replace(/^given:\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadQuestionsFromFile(file) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const names = [...code.matchAll(/const ([A-Z0-9_]+) = \[/g)].map(m => m[1]);
  if (!names.length) return [];
  try {
    const bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
    const out = [];
    for (const n of names) (bag[n] || []).forEach(q => out.push({ ...q, _file: file }));
    return out;
  } catch {
    return [];
  }
}

const parPath = path.join(root, "questions-exam-paraphrases.js");
const parCode = fs.readFileSync(parPath, "utf8");
const parBag = new Function(
  `${parCode}\nreturn { PART1_EXAM_PARAPHRASE_POOL, PART2_EXAM_PARAPHRASE_POOL, PART3_EXAM_PARAPHRASE_POOL };`
)();

const sourceFiles = [
  "questions-bank.js",
  "questions-extra-pools.js",
  "questions-fresh-pools.js",
  "questions-expansion.js"
];
const known = new Set();
for (const f of sourceFiles) {
  for (const q of loadQuestionsFromFile(f)) {
    if (q.question) known.add(normalizeStem(q.question));
  }
}

// Core PART arrays live in index.html
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const name of ["PART1", "PART2", "PART3"]) {
  const token = `const ${name} = [`;
  const start = html.indexOf(token);
  if (start < 0) continue;
  const from = start + token.length - 1;
  let depth = 0;
  for (let i = from; i < html.length; i++) {
    if (html[i] === "[") depth++;
    else if (html[i] === "]") {
      depth--;
      if (depth === 0) {
        try {
          const list = new Function(`return ${html.slice(from, i + 1)}`)();
          list.forEach(q => q?.question && known.add(normalizeStem(q.question)));
        } catch { /* ignore */ }
        break;
      }
    }
  }
}

let removed = 0;
const pools = ["PART1_EXAM_PARAPHRASE_POOL", "PART2_EXAM_PARAPHRASE_POOL", "PART3_EXAM_PARAPHRASE_POOL"];
const kept = {};
for (const pool of pools) {
  kept[pool] = (parBag[pool] || []).filter(q => {
    const n = normalizeStem(q.question);
    if (known.has(n)) {
      removed++;
      return false;
    }
    known.add(n);
    return true;
  });
}

function serializePool(name, list) {
  const body = list
    .map(q => {
      const opts = q.options.map(o => JSON.stringify(o)).join(",\n      ");
      return `  {
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: [
      ${opts}
    ],
    correct: ${q.correct},
    explanation: ${JSON.stringify(q.explanation)},
  }`;
    })
    .join(",\n");
  return `const ${name} = [\n${body}\n];\n`;
}

let out = "// Exam-style paraphrases — pruned of near-duplicates of core/supplemental stems\n\n";
for (const pool of pools) out += serializePool(pool, kept[pool]) + "\n";
fs.writeFileSync(parPath, out);
console.log("removed near-duplicate paraphrases:", removed);
