#!/usr/bin/env node
/**
 * Persist stem repairs from question-copy-polish across all question banks.
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const polishCode = fs.readFileSync(path.join(root, "question-copy-polish.js"), "utf8");
const sandbox = { window: {}, globalThis: {} };
sandbox.globalThis = sandbox;
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(polishCode, sandbox);
const { polishQuestion } = sandbox.QuestionCopyPolish;

const files = fs
  .readdirSync(root)
  .filter(f => f.startsWith("questions-") && f.endsWith(".js"));

let total = 0;
for (const file of files) {
  const fp = path.join(root, file);
  let code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  const retFields = names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(", ");
  let pools;
  try {
    pools = new Function(`${code}\nreturn { ${retFields} };`)();
  } catch {
    continue;
  }

  const stemMap = new Map();
  for (const arr of Object.values(pools)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.question) continue;
      const polished = polishQuestion(q);
      if (polished.question && polished.question !== q.question) {
        stemMap.set(q.question, polished.question);
      }
    }
  }
  if (!stemMap.size) continue;

  let hits = 0;
  code = code.replace(/question:\s*"((?:\\.|[^"\\])*)"/g, (m, esc) => {
    const raw = JSON.parse(`"${esc}"`);
    const next = stemMap.get(raw);
    if (!next || next === raw) return m;
    hits++;
    return `question: ${JSON.stringify(next)}`;
  });
  fs.writeFileSync(fp, code);
  console.log(file, hits, "stems repaired");
  total += hits;
}

console.log("total stems repaired:", total);
