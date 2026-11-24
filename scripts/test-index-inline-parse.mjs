#!/usr/bin/env node
/** Fail if index.html main inline script or required deps do not parse. */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const deps = [
  "question-copy-polish.js",
  "mcb80x-pipeline.js",
  "mcb80x-learning.js",
  "mcb80x-verified-registry.js",
  "explanation-feedback.js",
  "questions-bank.js",
  "questions-extra-pools.js",
  "questions-fresh-pools.js",
  "questions-expansion.js",
  "questions-exam-paraphrases.js",
  "questions-written-final.js",
  "questions-proctored-mock.js",
  "questions-formula-drills.js",
  "questions-pinnacle-megabank.js",
  "brain-anatomy-diagrams.js",
  "questions-brain-anatomy.js",
];

for (const f of deps) {
  try {
    execSync(`node --check ${JSON.stringify(path.join(root, f))}`, { stdio: "pipe" });
  } catch {
    console.error(`FAIL syntax: ${f}`);
    process.exit(1);
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const anchor = html.indexOf("questions-brain-anatomy.js");
const start = html.indexOf("<script>", anchor);
const end = html.indexOf("</script>", start);
const body = html.slice(start + 8, end);
try {
  new Function(body);
} catch (e) {
  console.error("FAIL index inline parse:", e.message);
  process.exit(1);
}
if (!/const QUIZZES = \{/.test(body)) {
  console.error("FAIL: QUIZZES block missing from inline script");
  process.exit(1);
}
console.log("index inline parse: OK");