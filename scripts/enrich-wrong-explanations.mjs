#!/usr/bin/env node
/**
 * Attach wrongExplanations[] parallel to options for MCQ objects missing the field.
 * Run after editing question banks; prepareQuestions also synthesizes fallbacks at runtime.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function enrichQuestion(q) {
  if (!q?.options?.length || q.correct == null || q.wrongExplanations) return q;
  const correctText = q.options[q.correct];
  q.wrongExplanations = q.options.map((opt, i) => {
    if (i === q.correct) return "";
    return `This option is inconsistent with the stem; the keyed answer (${correctText}) matches the underlying mechanism.`;
  });
  return q;
}

function enrichFile(file) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/const ([A-Z0-9_]+) = \[/g)].map(m => m[1]);
  const bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  let changed = 0;
  for (const name of names) {
    for (const q of bag[name] || []) {
      if (!q.wrongExplanations && q.options) {
        enrichQuestion(q);
        changed++;
      }
    }
  }
  if (!changed) return 0;
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
  fs.writeFileSync(fp, out);
  return changed;
}

const files = fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"));
let total = 0;
for (const f of files) {
  const n = enrichFile(f);
  if (n) console.log(f, n);
  total += n;
}
console.log("enriched", total, "questions");
