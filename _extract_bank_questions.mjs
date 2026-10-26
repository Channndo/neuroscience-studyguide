#!/usr/bin/env node
/** Extract question objects from bank JS + index.html for paraphrase generation. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;

function loadBank() {
  const code = fs.readFileSync(path.join(root, "questions-bank.js"), "utf8");
  const bag = new Function(`${code}
    return {
      PART1_VARIANTS,
      PART2_VARIANTS,
      PART3_VARIANTS,
      NEW_TIER1,
      NEW_TIER2,
      NEW_TIER3,
      NEW_TIER4,
    };
  `)();
  const out = [];
  const add = (list, module) => {
    (list || []).forEach((q) => {
      if (q?.question && q?.options?.length) out.push({ ...q, module });
    });
  };
  add(bag.PART1_VARIANTS, "part1");
  add(bag.PART2_VARIANTS, "part2");
  add(bag.PART3_VARIANTS, "part3");
  add(bag.NEW_TIER1, "part1");
  add(bag.NEW_TIER2, "part2");
  add(bag.NEW_TIER3, "part3");
  add(bag.NEW_TIER4, "part3");
  return out;
}

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

function loadCore() {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const out = [];
  const add = (list, module) => {
    (list || []).forEach((q) => {
      if (q?.question && q?.options?.length) out.push({ ...q, module });
    });
  };
  add(sliceConstArray(html, "PART1"), "part1");
  add(sliceConstArray(html, "PART2"), "part2");
  add(sliceConstArray(html, "PART3"), "part3");
  return out;
}

function loadFreshExpansion() {
  const out = [];
  const files = [
    ["questions-fresh-pools.js", [
      ["PART1_FRESH_POOL", "part1"],
      ["PART1_FRESH_POOL_2", "part1"],
      ["PART2_FRESH_POOL", "part2"],
      ["PART2_FRESH_POOL_2", "part2"],
      ["PART3_FRESH_POOL", "part3"],
      ["PART3_FRESH_POOL_2", "part3"],
    ]],
    ["questions-expansion.js", [
      ["PART1_EXPANSION_POOL", "part1"],
      ["PART2_EXPANSION_POOL", "part2"],
      ["PART3_EXPANSION_POOL", "part3"],
    ]],
    ["questions-extra-pools.js", [
      ["PART1_EXTRA_POOL", "part1"],
      ["PART2_EXTRA_POOL", "part2"],
      ["PART3_EXTRA_POOL", "part3"],
    ]],
  ];
  for (const [file, pairs] of files) {
    const code = fs.readFileSync(path.join(root, file), "utf8");
    let bag;
    try {
      const returns = pairs.map(([name]) => name).join(", ");
      bag = new Function(`${code}\nreturn { ${returns} };`)();
    } catch {
      continue;
    }
    for (const [name, module] of pairs) {
      (bag[name] || []).forEach((q) => {
        if (q?.question && q?.options?.length) out.push({ ...q, module });
      });
    }
  }
  return out;
}

const all = [...loadCore(), ...loadBank(), ...loadFreshExpansion()];
process.stdout.write(JSON.stringify(all));
