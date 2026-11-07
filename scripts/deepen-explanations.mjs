#!/usr/bin/env node
/**
 * Persist rich wrongExplanations into question banks (uses explanation-feedback.js rules).
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SKIP_FILES = new Set(["questions-formula-drills.js", "questions-written-final.js"]);

const engineCode = fs.readFileSync(path.join(root, "explanation-feedback.js"), "utf8");
const sandbox = { globalThis: {} };
vm.runInNewContext(engineCode, sandbox);
const { isBoilerplate, resolveWrong } = sandbox.globalThis.ExplanationFeedback;

function serializeQuestion(q) {
  const keyOrder = [
    "type",
    "topic",
    "module",
    "difficulty",
    "question",
    "options",
    "correct",
    "correctIndices",
    "scoringRule",
    "diagram",
    "formulaHint",
    "formulaSteps",
    "calcType",
    "explanation",
    "wrongExplanations",
    "modelAnswer",
    "minChars",
    "anatomyDiagram",
    "highlightKey",
    "anatomyView",
    "partialCredit",
    "selectAll",
  ];
  const seen = new Set();
  const lines = ["  {"];
  const emit = (key, val) => {
    if (val === undefined) return;
    seen.add(key);
    if (key === "options" && Array.isArray(val)) {
      lines.push(`    options: [`);
      for (const o of val) lines.push(`      ${JSON.stringify(o)},`);
      lines.push(`    ],`);
    } else if (key === "wrongExplanations" && Array.isArray(val)) {
      lines.push(`    wrongExplanations: [`);
      for (const w of val) lines.push(`      ${JSON.stringify(w)},`);
      lines.push(`    ]`);
    } else if (typeof val === "string") {
      lines.push(`    ${key}: ${JSON.stringify(val)},`);
    } else if (typeof val === "number" || typeof val === "boolean") {
      lines.push(`    ${key}: ${val},`);
    } else if (Array.isArray(val) || (val && typeof val === "object")) {
      lines.push(`    ${key}: ${JSON.stringify(val)},`);
    }
  };
  for (const key of keyOrder) emit(key, q[key]);
  for (const key of Object.keys(q)) {
    if (!seen.has(key)) emit(key, q[key]);
  }
  lines.push(`  }`);
  return lines.join("\n");
}

function replacePoolInFile(code, name, arr) {
  const startMarker = `const ${name} = [`;
  const start = code.indexOf(startMarker);
  if (start < 0) throw new Error(`Pool ${name} not found in file`);
  const afterStart = start + startMarker.length;
  const nextConst = code.indexOf("\nconst ", afterStart);
  const searchEnd = nextConst > 0 ? nextConst : code.length;
  let closeIdx = -1;
  for (let i = afterStart; i < searchEnd; ) {
    const p = code.indexOf("];", i);
    if (p < 0 || p >= searchEnd) break;
    closeIdx = p;
    i = p + 2;
  }
  if (closeIdx < afterStart) throw new Error(`Pool ${name} closing not found`);
  const body = arr.map(serializeQuestion).join(",\n");
  return code.slice(0, start) + startMarker + "\n" + body + "\n];\n" + code.slice(closeIdx + 3);
}

function deepenQuestion(q) {
  if (!q?.options?.length || q.correct == null || q.type === "shortAnswer" || q.selectAll) return false;
  const wrongExplanations = q.options.map((_, i) => {
    if (i === q.correct) return "";
    const stored = q.wrongExplanations?.[i];
    if (stored && !isBoilerplate(stored)) return stored;
    return resolveWrong(q, i);
  });
  const changed =
    !q.wrongExplanations ||
    wrongExplanations.some((w, i) => w !== (q.wrongExplanations?.[i] ?? ""));
  if (changed) q.wrongExplanations = wrongExplanations;
  return changed;
}

let totalQuestions = 0;
let totalFiles = 0;

for (const file of fs
  .readdirSync(root)
  .filter(f => /^questions-.*\.js$/.test(f) && !SKIP_FILES.has(f))) {
  const fp = path.join(root, file);
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) continue;
  let bag;
  try {
    bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  } catch (e) {
    console.warn("skip parse", file, e.message);
    continue;
  }
  const touched = new Set();
  let fileCount = 0;
  for (const name of names) {
    const arr = bag[name];
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (deepenQuestion(q)) {
        touched.add(name);
        fileCount++;
      }
    }
  }
  if (!fileCount) continue;
  let out = code;
  for (const name of touched) {
    out = replacePoolInFile(out, name, bag[name]);
  }
  fs.writeFileSync(fp, out);
  totalQuestions += fileCount;
  totalFiles++;
  console.log(file, fileCount, "questions");
}

console.log("deepened", totalQuestions, "questions in", totalFiles, "files");
