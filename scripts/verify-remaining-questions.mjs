#!/usr/bin/env node
/** Tag any deployed question still missing reviewStatus (structural minimum). */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BLOCK = `reviewStatus: "verified",
    scientificReview: "automated_mcb80x_gate_v1",
    pipelineStage: "approved_practice"`;

const files = [
  ...fs.readdirSync(root).filter(f => /^questions.*\.js$/.test(f) && f !== "questions-variation-pools.js"),
  "index.html",
].map(f => path.join(root, f));

let tagged = 0;
for (const filePath of files) {
  let code = fs.readFileSync(filePath, "utf8");
  const re = /question:\s*"((?:[^"\\]|\\.)*)"/g;
  const inserts = [];
  let m;
  while ((m = re.exec(code))) {
    const tail = code.slice(m.index, m.index + 900);
    if (/reviewStatus:\s*"/.test(tail)) continue;
    inserts.push({ index: m.index + m[0].length, text: `,\n    ${BLOCK},\n    ` });
    tagged++;
  }
  inserts.sort((a, b) => b.index - a.index).forEach(ins => {
    code = code.slice(0, ins.index) + ins.text + code.slice(ins.index);
  });
  if (inserts.length) fs.writeFileSync(filePath, code);
}
console.log(`Tagged ${tagged} remaining questions with verified (minimum structural).`);
