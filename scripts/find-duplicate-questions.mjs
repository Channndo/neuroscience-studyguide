#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const all = JSON.parse(execSync("node _extract_bank_questions.mjs", { cwd: root, encoding: "utf8" }));
const byQ = new Map();
for (const item of all) {
  const k = item.question.trim();
  if (!byQ.has(k)) byQ.set(k, []);
  byQ.get(k).push(item);
}
const dups = [...byQ.entries()].filter(([, v]) => v.length > 1);
console.log("exact duplicate stems:", dups.length);
dups.slice(0, 20).forEach(([q, items]) => {
  console.log("\n---", q.slice(0, 90), `(${items.length})`);
});
