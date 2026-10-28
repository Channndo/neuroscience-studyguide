#!/usr/bin/env node
/** Remove MCQ objects whose question stem already exists in an earlier-loaded pool file. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ORDER = ["questions-bank.js", "questions-extra-pools.js", "questions-fresh-pools.js", "questions-expansion.js"];

function loadFile(file) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const names = [...code.matchAll(/const ([A-Z0-9_]+) = \[/g)].map(m => m[1]);
  const bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  return { code, names, bag };
}

const seen = new Set();
let removed = 0;

for (const file of ORDER) {
  const { code, names, bag } = loadFile(file);
  let changed = false;
  const nextBag = {};
  for (const name of names) {
    nextBag[name] = [];
    for (const q of bag[name] || []) {
      const stem = q?.question?.trim();
      if (!stem || !q.options) {
        nextBag[name].push(q);
        continue;
      }
      if (seen.has(stem) && file !== "questions-bank.js") {
        removed++;
        changed = true;
        continue;
      }
      seen.add(stem);
      nextBag[name].push(q);
    }
  }
  if (!changed) continue;
  let out = code.split(/const [A-Z0-9_]+ = \[/)[0];
  for (const name of names) {
    const list = nextBag[name];
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
    out += `const ${name} = [\n${body}\n];\n\n`;
  }
  fs.writeFileSync(path.join(root, file), out);
  console.log("deduped", file);
}
console.log("removed duplicate stems:", removed);
