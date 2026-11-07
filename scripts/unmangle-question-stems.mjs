#!/usr/bin/env node
/** Strip first-pass copy-polish wrappers baked into question bank strings. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const files = fs.readdirSync(root).filter(f => /^questions.*\.js$/.test(f));

const replacements = [
  [/Using the values stated below, which answer is correct:\s*/gi, ""],
  [/Which answer best matches this scenario:\s*/gi, ""],
  [/Which description best applies to If\b/gi, "If"],
  [/Which description best applies to At\b/gi, "At"],
  [/Which description best applies to Given\b/gi, "Given"],
  [/Which description best applies to During\b/gi, "During"],
  [/Which description best applies to In\b/gi, "In"],
];

let touched = 0;
for (const f of files) {
  const p = path.join(root, f);
  let code = fs.readFileSync(p, "utf8");
  let next = code;
  for (const [re, sub] of replacements) next = next.replace(re, sub);
  if (next !== code) {
    fs.writeFileSync(p, next);
    touched++;
    console.log("unmangled:", f);
  }
}
console.log(touched ? `Updated ${touched} file(s).` : "No mangled prefixes found.");
