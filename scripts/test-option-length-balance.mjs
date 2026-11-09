#!/usr/bin/env node
/** Fail if keyed MCQ option is longest too often (length giveaway). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function len(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, "")
    .trim()
    .length;
}

let total = 0;
let longest = 0;

for (const f of fs.readdirSync(root).filter(x => x.startsWith("questions-") && x.endsWith(".js"))) {
  const c = fs.readFileSync(path.join(root, f), "utf8");
  const names = [...c.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  let pools;
  try {
    pools = new Function(`${c}\nreturn { ${names.join(", ")} };`)();
  } catch {
    continue;
  }
  for (const arr of Object.values(pools)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.options?.length || q.correct == null || q.type === "selectAll") continue;
      total++;
      const lens = q.options.map(len);
      const cLen = lens[q.correct];
      const maxOther = Math.max(...lens.filter((_, i) => i !== q.correct));
      if (cLen > maxOther) longest++;
    }
  }
}

const rate = total ? longest / total : 0;
console.log(`longest-keyed: ${longest}/${total} (${(rate * 100).toFixed(1)}%)`);
const MAX_RATE = 0.12;
if (rate > MAX_RATE) {
  console.error(`FAIL: longest correct rate ${(rate * 100).toFixed(1)}% > ${MAX_RATE * 100}%`);
  process.exit(1);
}
console.log("option length balance: OK");
