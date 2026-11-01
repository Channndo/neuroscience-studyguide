#!/usr/bin/env node
/** Fix Ca⁺→Ca²⁺, Mg⁺→Mg²⁺, GABA_A/B subscripts; Na+/K+ in PART1_FRESH_POOL_2. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const files = fs.readdirSync(root).filter(f => /^questions.*\.js$/.test(f));

function fixText(s) {
  if (typeof s !== "string") return s;
  let t = s;
  t = t.replace(/Ca⁺/g, "Ca²⁺");
  t = t.replace(/Mg⁺/g, "Mg²⁺");
  t = t.replace(/GABA_A/g, "GABA<sub>A</sub>");
  t = t.replace(/GABA_B/g, "GABA<sub>B</sub>");
  return t;
}

function fixFreshPool2IonSuperscripts(code) {
  const start = code.indexOf("const PART1_FRESH_POOL_2 = [");
  if (start < 0) return code;
  const end = code.indexOf("\nconst PART2_FRESH_POOL", start);
  const slice = code.slice(start, end > start ? end : undefined);
  const fixed = slice
    .replace(/Na\+/g, "Na⁺")
    .replace(/K\+/g, "K⁺");
  return code.slice(0, start) + fixed + code.slice(end > start ? end : code.length);
}

let total = 0;
for (const file of files) {
  const fp = path.join(root, file);
  let code = fs.readFileSync(fp, "utf8");
  const before = code;
  code = fixFreshPool2IonSuperscripts(code);
  code = fixText(code);
  if (code !== before) {
    fs.writeFileSync(fp, code);
    total++;
    console.log("updated", file);
  }
}
console.log("files changed:", total);
