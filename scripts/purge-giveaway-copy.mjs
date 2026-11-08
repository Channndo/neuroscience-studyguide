#!/usr/bin/env node
/**
 * Strip QA giveaway suffixes from MCQ options and boilerplate wrongExplanations.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  OPTION_GIVEAWAY_RES,
  stripOptionGiveawayText,
  WRONG_EXPLANATION_BOILER_RE,
} from "./lib/strip-option-giveaways.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const files = fs
  .readdirSync(root)
  .filter(f => f.startsWith("questions-") && f.endsWith(".js"));

function cleanWrongExplanation(text) {
  if (!text || typeof text !== "string") return text;
  if (WRONG_EXPLANATION_BOILER_RE.test(text)) return "";
  let t = text;
  for (const re of OPTION_GIVEAWAY_RES) t = t.replace(re, "");
  return t.replace(/\s{2,}/g, " ").trim();
}

let totalOpt = 0;
let totalWrong = 0;
for (const file of files) {
  const fp = path.join(root, file);
  let code = fs.readFileSync(fp, "utf8");
  let optN = 0;
  let wrongN = 0;

  const optRe = /options:\s*\[([\s\S]*?)\n\s*\],/g;
  code = code.replace(optRe, (block, inner) => {
    const newLines = inner.split("\n").map(line => {
      const m = line.match(/^(\s*)"((?:\\.|[^"\\])*)"(,?)\s*$/);
      if (!m) return line;
      const raw = JSON.parse(`"${m[2]}"`);
      const cleaned = stripOptionGiveawayText(raw);
      if (cleaned === raw) return line;
      optN++;
      return `${m[1]}${JSON.stringify(cleaned)}${m[3]}`;
    });
    return `options: [\n${newLines.join("\n")}\n    ],`;
  });

  const wrongRe = /wrongExplanations:\s*\[([\s\S]*?)\n\s*\]/g;
  code = code.replace(wrongRe, (block, inner) => {
    const newInner = inner.replace(/"((?:\\.|[^"\\])*)"/g, (m, esc) => {
      const raw = JSON.parse(`"${esc}"`);
      const next = cleanWrongExplanation(raw);
      if (next === raw) return m;
      wrongN++;
      return JSON.stringify(next);
    });
    return block.replace(inner, newInner);
  });

  if (!optN && !wrongN) continue;
  fs.writeFileSync(fp, code);
  console.log(file, "options:", optN, "wrongExplanations:", wrongN);
  totalOpt += optN;
  totalWrong += wrongN;
}
console.log("total option cleanups:", totalOpt, "wrongExplanations cleared:", totalWrong);
