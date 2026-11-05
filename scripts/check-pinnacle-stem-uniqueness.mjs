#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(root, "questions-pinnacle-megabank.js");

function skeleton(stem) {
  return String(stem)
    .replace(/\d+/g, "")
    .replace(/#/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const text = fs.readFileSync(file, "utf8");
const re = /question:\s*"((?:\\.|[^"\\])*)"/g;
const bySk = new Map();
let m;
while ((m = re.exec(text))) {
  const q = JSON.parse(`"${m[1]}"`);
  const sk = skeleton(q);
  if (!bySk.has(sk)) bySk.set(sk, []);
  bySk.get(sk).push(q.slice(0, 70));
}

const dupes = [...bySk.entries()].filter(([, a]) => a.length > 1);
if (dupes.length) {
  console.error("PINNACLE_MEGA_POOL duplicate skeletons:", dupes.length);
  dupes.slice(0, 10).forEach(([sk, arr]) => console.error(sk, arr.length));
  process.exit(1);
}
const count = [...bySk.values()].reduce((n, a) => n + a.length, 0);
console.log(`PINNACLE_MEGA_POOL OK: ${count} questions, ${bySk.size} unique skeletons.`);
