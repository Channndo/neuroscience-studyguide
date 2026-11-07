#!/usr/bin/env node
/** Copy mechanistic SATA explanations from PROCTORED_SATA_POOL to mock exam duplicates. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(root, "questions-proctored-mock.js");
let code = fs.readFileSync(file, "utf8");

const bag = new Function(
  `${code}\nreturn { PROCTORED_SATA_POOL, PROCTORED_MOCK_EXAM_POOL };`
)();

const byTopic = new Map();
for (const q of bag.PROCTORED_SATA_POOL || []) {
  if (!q.topic || !q.explanation) continue;
  if (/Review each statement/i.test(q.explanation)) continue;
  if (q.explanation.length < 50) continue;
  if (!byTopic.has(q.topic)) byTopic.set(q.topic, q.explanation);
}

const generic = /^Review each statement independently/i;
let updates = 0;

const pool = bag.PROCTORED_MOCK_EXAM_POOL || [];
for (const q of pool) {
  if (!generic.test(q.explanation || "")) continue;
  const repl = byTopic.get(q.topic);
  if (!repl) continue;
  const esc = q.explanation.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (code.includes(q.explanation)) {
    code = code.replace(
      new RegExp(`(question:\\s*"${q.question.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").slice(0, 40)}[\\s\\S]*?explanation:\\s*")${esc}`),
      `$1${repl.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}`
    );
    updates++;
  }
}

// Fallback: global replace generic in MOCK pool section only
if (!updates) {
  const start = code.indexOf("const PROCTORED_MOCK_EXAM_POOL");
  const end = code.indexOf("];", start + 500);
  let section = code.slice(start, end);
  let n = 0;
  section = section.replace(
    /explanation:\s*"Review each statement independently; partial selection counts as incorrect for exam-style scoring\."/g,
    () => {
      n++;
      return 'explanation: "Select every true statement about the mechanism named in the stem; leaving out a true statement or selecting a false one scores zero on this SATA item."';
    }
  );
  if (n) {
    code = code.slice(0, start) + section + code.slice(end);
    updates = n;
  }
}

if (updates) fs.writeFileSync(file, code);
console.log(`Mock SATA explanation sync: ${updates} update(s).`);
