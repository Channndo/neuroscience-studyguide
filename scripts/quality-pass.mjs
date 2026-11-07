#!/usr/bin/env node
/** strip filler → purge junk distractors → fix blanks → validate empty/junk */
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const steps = [
  "scripts/strip-filler-suffixes.mjs",
  "scripts/purge-junk-distractors.mjs",
  "scripts/fix-blank-options.mjs",
];

for (const script of steps) {
  console.log("\n==>", script);
  const r = spawnSync(process.execPath, [script], { cwd: root, stdio: "inherit" });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

console.log("\n==> validate (junk + empty options)");
const v = spawnSync(process.execPath, ["scripts/validate-question-banks.mjs"], {
  cwd: root,
  stdio: "inherit",
});
if (v.status !== 0) process.exit(v.status ?? 1);
