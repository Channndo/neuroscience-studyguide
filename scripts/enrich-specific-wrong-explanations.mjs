#!/usr/bin/env node
/** Replace boilerplate wrongExplanations with one-sentence option-specific reasons. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BOILER = /This option is inconsistent with the stem/i;

function specificReason(opt, correct, topic) {
  const o = String(opt).slice(0, 80);
  const c = String(correct).slice(0, 80);
  if (/^always exactly 0/i.test(o)) return "Equilibrium potentials depend on concentrations; they are not fixed at 0 mV for every ion.";
  if (/unaffected by concentration/i.test(o)) return "Changing inside/outside concentrations shifts Nernst equilibrium potentials.";
  if (/photoreceptor|cochlea|glomerul|NMJ exclusively/i.test(o)) return "This mechanism belongs to a different sensory or synaptic system than the stem describes.";
  if (o.length < 25) return `This choice (${o}) does not match the keyed answer’s mechanism for ${topic || "this topic"}.`;
  return `Unlike the keyed answer (${c}), this option misstates the mechanism or direction described in the stem.`;
}

function enrichQuestion(q) {
  if (!q?.options?.length || q.correct == null || !q.wrongExplanations) return 0;
  let n = 0;
  q.wrongExplanations = q.wrongExplanations.map((w, i) => {
    if (i === q.correct || !BOILER.test(w || "")) return w;
    n++;
    return specificReason(q.options[i], q.options[q.correct], q.topic);
  });
  return n;
}

function processIndexPartArrays() {
  const fp = path.join(root, "index.html");
  let html = fs.readFileSync(fp, "utf8");
  let total = 0;
  for (const name of ["PART1", "PART3"]) {
    const token = `const ${name} = [`;
    const start = html.indexOf(token);
    if (start < 0) continue;
    const from = start + token.length - 1;
    let depth = 0;
    let end = -1;
    for (let i = from; i < html.length; i++) {
      if (html[i] === "[") depth++;
      else if (html[i] === "]") {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    if (end < 0) continue;
    const snippet = html.slice(from, end);
    let list;
    try {
      list = new Function(`return ${snippet};`)();
    } catch {
      continue;
    }
    for (const q of list) total += enrichQuestion(q);
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
    const replacement = `const ${name} = [\n${body}\n]`;
    html = html.slice(0, start) + replacement + html.slice(end + (html[end + 1] === ";" ? 2 : 1));
  }
  if (total) fs.writeFileSync(fp, html);
  return total;
}

function processBankFile(file, poolNames) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const allNames = [...code.matchAll(/const ([A-Z0-9_]+) = \[/g)].map(m => m[1]);
  const bag = new Function(`${code}\nreturn { ${allNames.join(", ")} };`)();
  let total = 0;
  for (const name of poolNames) {
    for (const q of bag[name] || []) total += enrichQuestion(q);
  }
  if (!total) return 0;
  let out = code.split(/const [A-Z0-9_]+ = \[/)[0];
  for (const name of allNames) {
    const list = bag[name];
    if (!Array.isArray(list)) throw new Error(`${file}: missing array ${name}`);
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
  return total;
}

let total = processIndexPartArrays();
total += processBankFile("questions-bank.js", ["PART1_VARIANTS", "PART2_VARIANTS", "PART3_VARIANTS", "NEW_TIER1", "NEW_TIER3", "NEW_TIER4"]);
total += processBankFile("questions-expansion.js", ["PART1_EXPANSION_POOL", "PART3_EXPANSION_POOL"]);
total += processBankFile("questions-fresh-pools.js", ["PART1_FRESH_POOL", "PART3_FRESH_POOL"]);
total += processBankFile("questions-extra-pools.js", ["PART1_EXTRA_POOL", "PART3_EXTRA_POOL"]);
total += processBankFile("questions-exam-paraphrases.js", [
  "PART1_EXAM_PARAPHRASE_POOL",
  "PART3_EXAM_PARAPHRASE_POOL"
]);
console.log("enriched wrong explanations:", total);
