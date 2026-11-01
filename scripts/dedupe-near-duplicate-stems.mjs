#!/usr/bin/env node
/** Drop near-duplicate MCQ stems (one-word paraphrases) keeping the first occurrence. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const TARGETS = [
  "questions-exam-paraphrases.js",
  "questions-fresh-pools.js",
  "questions-expansion.js",
  "questions-extra-pools.js",
  "questions-bank.js",
];

function normalizeStem(s) {
  return String(s)
    .toLowerCase()
    .replace(/^suppose that\s+/i, "")
    .replace(/^in this case,\s+/i, "")
    .replace(/^given:\s+/i, "")
    .replace(/\bprimarily\b/g, "mainly")
    .replace(/\bmainly\b/g, "mainly")
    .replace(/\bif\b/g, "if")
    .replace(/\bwhen\b/g, "when")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(stem) {
  return new Set(normalizeStem(stem).split(" ").filter(w => w.length > 2));
}

function nearDup(a, b) {
  const na = normalizeStem(a);
  const nb = normalizeStem(b);
  if (na === nb) return true;
  const ta = tokenSet(a);
  const tb = tokenSet(b);
  if (!ta.size || !tb.size) return false;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter++;
  const union = ta.size + tb.size - inter;
  const jaccard = inter / union;
  return jaccard >= 0.88 && Math.abs(ta.size - tb.size) <= 3;
}

function processFile(file) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/const ([A-Z0-9_]+) = \[/g)].map(m => m[1]);
  const bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  for (const name of names) {
    if (!Array.isArray(bag[name])) throw new Error(`${file}: missing array ${name}`);
  }
  const seen = [];
  let removed = 0;
  for (const name of names) {
    const kept = [];
    for (const q of bag[name] || []) {
      if (!q?.question) {
        kept.push(q);
        continue;
      }
      if (seen.some(s => nearDup(s, q.question))) {
        removed++;
        continue;
      }
      seen.push(q.question);
      kept.push(q);
    }
    bag[name] = kept;
  }
  if (!removed) return 0;
  let out = code.split(/const [A-Z0-9_]+ = \[/)[0];
  for (const name of names) {
    const list = bag[name];
    const body = list
      .map(q => {
        const opts = q.options.map(o => JSON.stringify(o)).join(",\n      ");
        const wrong = q.wrongExplanations
          ? `,\n    wrongExplanations: [\n      ${q.wrongExplanations.map(w => JSON.stringify(w)).join(",\n      ")}\n    ]`
          : "";
        return `  {
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: [
      ${opts}
    ],
    correct: ${q.correct},
    explanation: ${JSON.stringify(q.explanation)}${wrong}
  }`;
      })
      .join(",\n");
    out += `const ${name} = [\n${body}\n];\n\n`;
  }
  fs.writeFileSync(fp, out.trimEnd() + "\n");
  return removed;
}

let total = 0;
for (const f of TARGETS) total += processFile(f);
console.log("near-duplicate stems removed:", total);
