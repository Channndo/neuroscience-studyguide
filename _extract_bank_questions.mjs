#!/usr/bin/env node
/** Extract all deployed MCQ objects from bank JS + index.html for QA scripts. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;

function sliceConstArray(html, name) {
  const token = `const ${name} = [`;
  const start = html.indexOf(token);
  if (start < 0) return [];
  const from = start + token.length - 1;
  let depth = 0;
  for (let i = from; i < html.length; i++) {
    const ch = html[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        const snippet = html.slice(from, i + 1);
        try {
          return new Function(`return ${snippet};`)();
        } catch {
          return [];
        }
      }
    }
  }
  return [];
}

function loadFromFile(file, pairs, source) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) return [];
  const code = fs.readFileSync(filePath, "utf8");
  const names = pairs.map(p => p[0]);
  const retFields = names.map(n => `${n}: typeof ${n} !== "undefined" ? ${n} : undefined`).join(", ");
  let bag;
  try {
    bag = new Function(`${code}\nreturn { ${retFields} };`)();
  } catch {
    return [];
  }
  const out = [];
  for (const [name, module] of pairs) {
    const list = bag[name];
    if (!Array.isArray(list)) continue;
    list.forEach((q, i) => {
      if (!q?.question) return;
      if (q.type === "shortAnswer" || (!q.options?.length && q.modelAnswer)) return;
      out.push({
        ...q,
        module,
        source: `${source}:${name}`,
        bankIndex: i,
        canonicalId: q.id || `${source}:${name}:${i}`,
      });
    });
  }
  return out;
}

function inferPoolsFromFile(file) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) return [];
  const code = fs.readFileSync(filePath, "utf8");
  return [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => [m[1], file.replace(/\.js$/, "")]);
}

function loadBankLegacy() {
  return loadFromFile(
    "questions-bank.js",
    [
      ["PART1_VARIANTS", "part1"],
      ["PART2_VARIANTS", "part2"],
      ["PART3_VARIANTS", "part3"],
      ["NEW_TIER1", "part1"],
      ["NEW_TIER2", "part2"],
      ["NEW_TIER3", "part3"],
      ["NEW_TIER4", "part3"],
    ],
    "questions-bank"
  );
}

function loadAllQuestionJs() {
  const files = fs
    .readdirSync(root)
    .filter(f => /^questions.*\.js$/.test(f) && f !== "questions-variation-pools.js")
    .sort();
  const out = [];
  for (const file of files) {
    if (file === "questions-bank.js") continue;
    const pairs = inferPoolsFromFile(file);
    out.push(...loadFromFile(file, pairs, file.replace(/\.js$/, "")));
  }
  return out;
}

function loadCore() {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const out = [];
  for (const [name, module] of [
    ["PART1", "part1-inline"],
    ["PART2", "part2-inline"],
    ["PART3", "part3-inline"],
  ]) {
    sliceConstArray(html, name).forEach((q, i) => {
      if (!q?.question || !q?.options?.length) return;
      out.push({
        ...q,
        module,
        source: `index.html:${name}`,
        bankIndex: i,
        canonicalId: q.id || `inline:${name}:${i}`,
      });
    });
  }
  return out;
}

const all = [...loadCore(), ...loadBankLegacy(), ...loadAllQuestionJs()];
process.stdout.write(JSON.stringify(all));
