#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { isJunkMcqOption } from "./lib/junk-mcq-options.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let main = 0;
let junk = 0;
for (const f of fs.readdirSync(root).filter(x => x.startsWith("questions-") && x.endsWith(".js"))) {
  const code = fs.readFileSync(path.join(root, f), "utf8");
  const mainN = (code.match(/Main mechanism:/g) || []).length;
  main += mainN;
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  let pools;
  try {
    pools = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  } catch {
    continue;
  }
  for (const arr of Object.values(pools)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      for (const o of q.options || []) {
        if (isJunkMcqOption(o)) junk++;
      }
    }
  }
}
if (main > 0 || junk > 0) {
  console.error(`FAIL: Main mechanism=${main}, junk options=${junk}`);
  process.exit(1);
}
console.log("mcq junk scan: OK");