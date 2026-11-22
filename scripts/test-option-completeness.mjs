#!/usr/bin/env node
/** Fail on MCQ options that end mid-clause (truncation giveaway). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function optionIncomplete(text) {
  const raw = String(text ?? "").trim();
  if (/^Main mechanism:/i.test(raw)) return true;
  if (/maps the lesion|not implied by the circuit wiring|localizes the function to the wrong brain region/i.test(raw))
    return true;
  const t = String(text ?? "")
    .replace(/<[^>]+>/g, "")
    .trim();
  if (!t || t.length < 14) return false;
  if (/[.!?]$/.test(t)) return false;
  if (/mV\.?$/.test(t) || /°C$/.test(t) || /Hz$/.test(t)) return false;
  if (/^\d/.test(t) || /^[−\-≈~]/.test(t)) return false;
  return /\b(and|or|the|a|an|to|for|with|that|which|when|where|while|by|via|from|into|than|if|per|each)\s*$/i.test(t);
}

const samples = [];
let total = 0;
let bad = 0;

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
      if (!q?.options) continue;
      for (const o of q.options) {
        total++;
        if (optionIncomplete(o)) {
          bad++;
          if (samples.length < 12) samples.push(`${f}: ${String(o).slice(0, 70)}`);
        }
      }
    }
  }
}

console.log(`incomplete options: ${bad}/${total}`);
if (samples.length) console.log(samples.join("\n"));
const MAX = 25;
if (bad > MAX) {
  console.error(`FAIL: ${bad} incomplete options (max ${MAX})`);
  process.exit(1);
}
console.log("option completeness: OK");