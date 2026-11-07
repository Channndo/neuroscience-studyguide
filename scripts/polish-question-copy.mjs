#!/usr/bin/env node
/**
 * Rewrite MCQ stems/options in question banks for full-sentence presentation.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const polishUrl = pathToFileURL(path.join(root, "question-copy-polish.js")).href;
await import(polishUrl);
const { polishQuestion } = globalThis.QuestionCopyPolish;

const files = fs
  .readdirSync(root)
  .filter(f => /^questions.*\.js$/.test(f))
  .sort();

function loadPoolsFromFile(basename) {
  const filePath = path.join(root, basename);
  const code = fs.readFileSync(filePath, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) return { code, pools: {} };
  const retFields = names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(", ");
  try {
    const pools = new Function(`${code}\nreturn { ${retFields} };`)();
    return { code, pools };
  } catch {
    return { code, pools: {} };
  }
}

const questionPolishCache = new Map();

function stemForQuestion(q) {
  return polishQuestion(q).question;
}

function rewriteOptions(code) {
  const optRe = /options:\s*\[([\s\S]*?)\n\s*\],/g;
  let hits = 0;
  const out = code.replace(optRe, (block, inner) => {
    const lines = inner.split("\n");
    const newLines = lines.map(line => {
      const m = line.match(/^(\s*)"((?:\\.|[^"\\])*)"(,?)\s*$/);
      if (!m) return line;
      const raw = JSON.parse(`"${m[2]}"`);
      const polished = globalThis.QuestionCopyPolish.polishOption(raw);
      if (polished === raw) return line;
      hits++;
      return `${m[1]}${JSON.stringify(polished)}${m[3]}`;
    });
    return `options: [\n${newLines.join("\n")}\n    ],`;
  });
  return { out, hits };
}

let totalQ = 0;
let totalO = 0;

for (const file of files) {
  const fp = path.join(root, file);
  const { code, pools } = loadPoolsFromFile(file);
  let codeOut = code;
  for (const arr of Object.values(pools)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (q?.question) questionPolishCache.set(q.question, stemForQuestion(q));
    }
  }
  const qRe = /question:\s*"((?:\\.|[^"\\])*)"/g;
  let qHits = 0;
  codeOut = codeOut.replace(qRe, (match, esc) => {
    const raw = JSON.parse(`"${esc}"`);
    const next = questionPolishCache.get(raw) ?? globalThis.QuestionCopyPolish.polishStem(raw, {
      type: /\bselect all\b/i.test(raw) ? "selectAll" : undefined,
    });
    if (next === raw) return match;
    qHits++;
    return `question: ${JSON.stringify(next)}`;
  });
  const o1 = rewriteOptions(codeOut);
  codeOut = o1.out;
  if (qHits || o1.hits) {
    fs.writeFileSync(fp, codeOut);
    console.log(file, "stems:", qHits, "options:", o1.hits);
    totalQ += qHits;
    totalO += o1.hits;
  }
}

console.log("total stem polish:", totalQ, "option polish:", totalO);
