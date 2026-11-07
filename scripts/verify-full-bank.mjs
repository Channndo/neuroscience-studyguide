#!/usr/bin/env node
/** One command: scientific audit → inventory → stamp banks → verified registry. */
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function run(script) {
  const r = spawnSync("node", [script], { cwd: root, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
  if (r.status !== 0) {
    console.error(r.stderr || r.stdout);
    process.exit(r.status || 1);
  }
  return r.stdout;
}

console.log("1/4 scientific audit");
run("scripts/run-scientific-audit.mjs");
console.log("2/4 inventory");
run("scripts/run-master-inventory.mjs");
console.log("3/4 apply verification to bank files");
run("scripts/apply-bank-verification.mjs");
console.log("4/4 verified registry");
run("scripts/build-verified-registry.mjs");
console.log("5/5 remaining without tags");
run("scripts/verify-remaining-questions.mjs");
run("scripts/build-verified-registry.mjs");
console.log("Full bank verification pass complete.");
