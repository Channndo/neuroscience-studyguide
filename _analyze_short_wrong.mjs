#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = execSync("node _extract_bank_questions.mjs", { cwd: __dirname, encoding: "utf8" });
const all = JSON.parse(raw);

function wc(s) {
  return String(s).trim().split(/\s+/).filter(Boolean).length;
}

let n = 0;
for (const q of all) {
  const c = q.correct;
  if (c == null || !q.options) continue;
  const cw = wc(q.options[c]);
  for (let i = 0; i < q.options.length; i++) {
    if (i === c) continue;
    const ow = wc(q.options[i]);
    if (cw >= 8 && ow <= 3) {
      n++;
      if (n <= 12) {
        console.log("---", q.question.slice(0, 72));
        console.log("  wrong:", q.options[i]);
        console.log("  correct:", String(q.options[c]).slice(0, 72));
      }
    }
  }
}
console.log("short wrong count", n);
