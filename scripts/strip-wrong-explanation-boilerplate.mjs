#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const fp = path.join(root, "questions-proctored-mock.js");
let text = fs.readFileSync(fp, "utf8");

function simplifyWrong(s) {
  if (!s || typeof s !== "string") return s;
  if (s === "") return s;
  if (/does not follow from a/i.test(s)) {
    return "That pattern fits a different lesion site or pathway than the one named in the stem.";
  }
  if (/is inconsistent with the stated lesion site/i.test(s)) {
    return "That finding is not the classic presentation for this lesion location.";
  }
  if (/This pattern does not match the anatomy of the stated lesion/i.test(s)) {
    return "That deficit pattern is not what this lesion typically produces.";
  }
  if (/This choice \(.*\) does not follow from the stem/i.test(s)) {
    return "That choice does not match the mechanism or anatomy described in the stem.";
  }
  if (/Selecting this contradicts the keyed mechanism/i.test(s)) {
    return "That statement is false for the scenario in the stem.";
  }
  if (/misstates the mechanism/i.test(s)) {
    return "That option misapplies the underlying mechanism.";
  }
  return s;
}

const re = /wrongExplanations:\s*\[([\s\S]*?)\n\s*\]/g;
let count = 0;
text = text.replace(re, (block, inner) => {
  const newInner = inner.replace(/"((?:\\.|[^"\\])*)"/g, (m, esc) => {
    const raw = JSON.parse(`"${esc}"`);
    const next = simplifyWrong(raw);
    if (next !== raw) count++;
    return JSON.stringify(next);
  });
  return block.replace(inner, newInner);
});

fs.writeFileSync(fp, text);
console.log("simplified wrongExplanations:", count);
