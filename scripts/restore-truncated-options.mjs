#!/usr/bin/env node
/**
 * Restore MCQ options truncated by trimKeyedOption (rebalance pass).
 * Matches questions to parent git revision by stem + topic + correct index.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const REV = process.argv.find(a => a.startsWith("--rev="))?.slice(6) || "eb30e6a";

function normStem(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadPoolsFromSource(source) {
  const names = [...source.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  if (!names.length) return { names: [], bag: {} };
  const bag = new Function(`${source}\nreturn { ${names.join(", ")} };`)();
  return { names, bag };
}

function isShortenedOption(short, full) {
  const s = String(short ?? "").trim();
  const f = String(full ?? "").trim();
  if (!s || !f || s === f) return false;
  if (f.length < s.length + 2) return false;
  if (!f.startsWith(s)) return false;
  const rest = f.slice(s.length);
  return /^(\s+[\w(/]|[,;:—])/.test(rest);
}

function optionLooksIncomplete(text) {
  const t = String(text ?? "").trim();
  if (!t || t.length < 12) return false;
  if (/[.!?]$/.test(t)) return false;
  if (/mV\.?$/.test(t) || /°C$/.test(t)) return false;
  if (/\b(and|or|the|a|an|to|for|with|that|which|when|where|while|by|via|from|into|than|if|per|each)\s*$/i.test(t))
    return true;
  // word-cap chop: long phrase with no terminal punctuation
  if (t.length >= 32 && t.length <= 48 && !/[;,)]$/.test(t)) {
    const last = t.split(/\s+/).pop() || "";
    if (last.length >= 3 && !/^(mV|Hz|ms|μm|nm)$/i.test(last)) return true;
  }
  return false;
}

function shouldRestoreOptions(curOpts, oldOpts) {
  if (!Array.isArray(curOpts) || !Array.isArray(oldOpts) || curOpts.length !== oldOpts.length) return false;
  for (let i = 0; i < curOpts.length; i++) {
    if (isShortenedOption(curOpts[i], oldOpts[i])) return true;
    if (
      optionLooksIncomplete(curOpts[i]) &&
      String(oldOpts[i]).trim().length > String(curOpts[i]).trim().length + 3
    )
      return true;
  }
  return false;
}

function readGitFile(file, rev) {
  try {
    return execSync(`git show ${rev}:${file}`, { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch {
    return null;
  }
}

function indexQuestions(bag) {
  const map = new Map();
  for (const arr of Object.values(bag)) {
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.options?.length || q.correct == null) continue;
      const key = `${normStem(q.question)}|${normStem(q.topic)}|${q.correct}`;
      if (!map.has(key)) map.set(key, q);
    }
  }
  return map;
}

// Reuse rebalance file writer logic — import replace from rebalance-plain-lengths pattern
function replacePoolInFile(code, name, arr) {
  const startMarker = `const ${name} = [`;
  const start = code.indexOf(startMarker);
  if (start < 0) throw new Error(`Pool ${name} not found`);
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
  const body = arr
    .map(q => {
      const lines = ["  {"];
      if (q.type) lines.push(`    type: ${JSON.stringify(q.type)},`);
      if (q.topic) lines.push(`    topic: ${JSON.stringify(q.topic)},`);
      if (q.module) lines.push(`    module: ${JSON.stringify(q.module)},`);
      if (q.modelAnswer) lines.push(`    modelAnswer: ${JSON.stringify(q.modelAnswer)},`);
      if (q.minChars != null) lines.push(`    minChars: ${q.minChars},`);
      lines.push(`    question: ${JSON.stringify(q.question)},`);
      if (Array.isArray(q.options)) {
        lines.push(`    options: [`);
        for (const o of q.options) lines.push(`      ${JSON.stringify(o)},`);
        lines.push(`    ],`);
      }
      if (q.correctIndices) lines.push(`    correctIndices: ${JSON.stringify(q.correctIndices)},`);
      if (q.correct != null) lines.push(`    correct: ${q.correct},`);
      if (q.scoringRule) lines.push(`    scoringRule: ${JSON.stringify(q.scoringRule)},`);
      if (q.diagram) lines.push(`    diagram: ${JSON.stringify(q.diagram)},`);
      if (q.explanation) lines.push(`    explanation: ${JSON.stringify(q.explanation)},`);
      if (q.wrongExplanations) {
        lines.push(`    wrongExplanations: [`);
        for (const w of q.wrongExplanations) lines.push(`      ${JSON.stringify(w)},`);
        lines.push(`    ]`);
      }
      if (q.formulaHint) lines.push(`    formulaHint: ${JSON.stringify(q.formulaHint)},`);
      if (q.formulaSteps) lines.push(`    formulaSteps: ${JSON.stringify(q.formulaSteps)},`);
      lines.push(`  }`);
      return lines.join("\n");
    })
    .join(",\n");
  return code.slice(0, start) + startMarker + "\n" + body + "\n];" + code.slice(closeIdx + 2);
}

const files = fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"));
let totalRestored = 0;

for (const file of files) {
  const oldSource = readGitFile(file, REV);
  if (!oldSource) continue;
  const curSource = fs.readFileSync(path.join(root, file), "utf8");
  const oldLoad = loadPoolsFromSource(oldSource);
  const curLoad = loadPoolsFromSource(curSource);
  const oldIndex = indexQuestions(oldLoad.bag);
  let fileRestored = 0;
  const touched = new Set();

  for (const name of curLoad.names) {
    const arr = curLoad.bag[name];
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.options?.length || q.correct == null || q.type === "selectAll") continue;
      const key = `${normStem(q.question)}|${normStem(q.topic)}|${q.correct}`;
      const oldQ = oldIndex.get(key);
      if (!oldQ?.options?.length) continue;
      if (shouldRestoreOptions(q.options, oldQ.options)) {
        q.options = oldQ.options.slice();
        fileRestored++;
        touched.add(name);
      }
    }
  }

  if (fileRestored) {
    let out = curSource;
    for (const name of touched) {
      out = replacePoolInFile(out, name, curLoad.bag[name]);
    }
    fs.writeFileSync(path.join(root, file), out);
    console.log(file, "restored option sets:", fileRestored);
    totalRestored += fileRestored;
  }
}

console.log("done, total restored:", totalRestored, "from", REV);