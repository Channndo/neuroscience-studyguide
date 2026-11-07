#!/usr/bin/env node
/**
 * Remove "always/only/never/exclusively" giveaway wording from WRONG MCQ options.
 * Correct answers are left unchanged unless they are clearly auto-padded junk.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SKIP_FILES = new Set(["questions-formula-drills.js", "questions-written-final.js"]);

const GIVEAWAY_RE =
  /\b(always|never|exclusively|only|every neuron|all cases|without exception|cannot occur|impossible to|in every|uniformly)\b/i;

const STRIP_TAIL =
  /\s*[\(\—]\s*(misapplies|mixes up|ignores|contradicts|does not follow|wrong pathway)[^)\—]*[\)\.]?\s*$/i;

function needsSoften(t) {
  return (
    GIVEAWAY_RE.test(t) ||
    /\b(Must|All |Permanent|Always exactly|NMJ-only)\b/i.test(t) ||
    /\bat (every|each)\b/i.test(t)
  );
}

function softenWrongOption(text) {
  let t = String(text ?? "").trim();
  if (!t) return text;
  if (!needsSoften(t)) {
    const stripped = t.replace(STRIP_TAIL, "").trim();
    return stripped === t ? text : stripped;
  }

  t = t.replace(/^Requires\s+/i, "");
  t = t.replace(/\s+exclusively in this context\.?$/i, "");
  t = t.replace(STRIP_TAIL, "");

  t = t.replace(/\bAlways\b/g, "Often");
  t = t.replace(/\balways\b/g, "often");
  t = t.replace(/\bNever\b/g, "Seldom");
  t = t.replace(/\bnever\b/g, "seldom");
  t = t.replace(/\bexclusively\b/gi, "primarily");
  t = t.replace(/\bin all cases\b/gi, "in many cells");
  t = t.replace(/\bwithout exception\b/gi, "in most recordings");
  t = t.replace(/\buniformly\b/gi, "broadly");
  t = t.replace(/\bat every\b/gi, "at many");
  t = t.replace(/\bevery\b/gi, "many");
  t = t.replace(/\bMust\b/g, "Would need to");
  t = t.replace(/\bevery\b/gi, "many");
  t = t.replace(/\beach\b/gi, "typical");
  t = t.replace(/\bcannot occur\b/gi, "is unlikely");
  t = t.replace(/\bAll synapses\b/gi, "Many synapses");
  t = t.replace(/\bAll /g, "Most ");
  t = t.replace(/-only\b/gi, "-dominated");
  t = t.replace(/\bPermanent\b/g, "Persistent");
  t = t.replace(/\bAlways exactly\b/gi, "Often near");

  if (/^Only\s+/i.test(t)) {
    const rest = t.replace(/^Only\s+/i, "").trim();
    t = rest ? `Main mechanism: ${rest.charAt(0).toLowerCase()}${rest.slice(1)}` : t;
  }

  t = t.replace(/\s+only\s+with\b/gi, " mainly with");
  t = t.replace(/\s+only\s+in\b/gi, " mainly in");
  t = t.replace(/\s+only\s+at\b/gi, " mainly at");
  t = t.replace(/\s+only\b/gi, " as the primary route");
  t = t.replace(/\bonly\s*$/gi, "");

  t = t.replace(/\s{2,}/g, " ").replace(/\s+\./g, ".").trim();
  if (t && t[0] === t[0]?.toLowerCase() && /^Main mechanism:/.test(t)) {
    /* keep */
  } else if (t) {
    t = t.charAt(0).toUpperCase() + t.slice(1);
  }
  return t || String(text ?? "").trim();
}

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

let total = 0;

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
    console.warn("skip", file, e.message);
    continue;
  }
  const touched = new Set();
  let fileN = 0;
  for (const name of names) {
    const arr = bag[name];
    if (!Array.isArray(arr)) continue;
    for (const q of arr) {
      if (!q?.options?.length || q.correct == null || q.selectAll) continue;
      let changed = false;
      q.options = q.options.map((opt, i) => {
        if (i === q.correct) return opt;
        const next = softenWrongOption(opt);
        if (next !== opt) {
          changed = true;
          fileN++;
        }
        return next;
      });
      if (changed) touched.add(name);
    }
  }
  if (!fileN) continue;
  let out = code;
  for (const name of touched) {
    out = replacePoolInFile(out, name, bag[name]);
  }
  fs.writeFileSync(fp, out);
  total += fileN;
  console.log(file, fileN, "options softened");
}

console.log("total wrong options softened:", total);
