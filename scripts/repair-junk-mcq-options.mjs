#!/usr/bin/env node
/**
 * Replace QA junk / fragment MCQ options with complete academic distractors;
 * prefer clean text from git revision when available.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { stripOptionGiveawayText } from "./lib/strip-option-giveaways.mjs";
import { pickMcqFallbackDistractor } from "./lib/mcq-fallback-distractors.mjs";
import { isShortenedOption } from "./lib/restore-option-helpers.mjs";
import { isJunkMcqOption } from "./lib/junk-mcq-options.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const REV = process.argv.find(a => a.startsWith("--rev="))?.slice(6) || "eb30e6a";

function normStem(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadPoolsFromFile(fp) {
  const code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/^const ([A-Z][A-Z0-9_]*) = /gm)].map(m => m[1]);
  const bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  return { fp, code, names, bag };
}

function indexOldOptions(rev) {
  const map = new Map();
  for (const file of fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"))) {
    let source;
    try {
      source = execSync(`git show ${rev}:${file}`, { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
    } catch {
      continue;
    }
    const { bag } = loadPoolsFromFile(path.join(root, file));
    for (const arr of Object.values(bag)) {
      if (!Array.isArray(arr)) continue;
      for (const q of arr) {
        if (!q?.options?.length || q.correct == null) continue;
        const key = `${file}|${normStem(q.question)}|${normStem(q.topic)}|${q.correct}`;
        map.set(key, q.options);
      }
    }
  }
  return map;
}

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

function repairQuestionOptions(q, file, oldOpts) {
  if (!q?.options?.length || q.correct == null || q.type === "selectAll") return 0;
  let fixes = 0;
  const opts = q.options.slice();
  const used = new Set(opts.map(o => String(o).trim().toLowerCase()).filter(Boolean));

  for (let i = 0; i < opts.length; i++) {
    let cur = stripOptionGiveawayText(String(opts[i] ?? "").trim());
    const old = oldOpts?.[i] != null ? stripOptionGiveawayText(String(oldOpts[i]).trim()) : null;

    if (old && !isJunkMcqOption(oldOpts[i]) && (isJunkMcqOption(opts[i]) || isShortenedOption(cur, old))) {
      opts[i] = oldOpts[i];
      fixes++;
      used.add(String(oldOpts[i]).trim().toLowerCase());
      continue;
    }

    if (isJunkMcqOption(opts[i]) || isJunkMcqOption(cur)) {
      const next = pickMcqFallbackDistractor({ ...q, options: opts.map((o, j) => (j === i ? "" : o)) }, i, used);
      opts[i] = next;
      used.add(next.toLowerCase());
      fixes++;
      continue;
    }

    if (cur !== String(opts[i]).trim()) {
      opts[i] = cur;
      fixes++;
    }
  }

  if (fixes) q.options = opts;
  return fixes ? 1 : 0;
}

// shared helpers extracted for restore script reuse
const oldIndex = indexOldOptions(REV);
let total = 0;

for (const file of fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"))) {
  const filePath = path.join(root, file);
  const { code, names, bag } = loadPoolsFromFile(filePath);
  let fileFixes = 0;
  const touched = new Set();

  for (const name of names) {
    const arr = bag[name];
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      const key = `${file}|${normStem(q.question)}|${normStem(q.topic)}|${q.correct}`;
      const oldOpts = oldIndex.get(key);
      if (repairQuestionOptions(q, file, oldOpts)) {
        fileFixes++;
        touched.add(name);
      }
    }
  }

  if (fileFixes) {
    let out = code;
    for (const name of touched) {
      out = replacePoolInFile(out, name, bag[name]);
    }
    fs.writeFileSync(filePath, out);
    console.log(file, "questions repaired:", fileFixes);
    total += fileFixes;
  }
}

console.log("done, questions with option repairs:", total);