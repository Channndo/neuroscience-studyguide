#!/usr/bin/env node
/**
 * Ensure descriptive neuroscience slashes stay literal (not stacked fractions).
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const start = html.indexOf("function markMathFractions(s)");
const end = html.indexOf("function applyNeuroFormatting(raw, enableFractions)", start);
if (start < 0 || end < 0) {
  console.error("Could not extract markMathFractions from index.html");
  process.exit(1);
}
let fnBody = html.slice(start, end);
fnBody = fnBody.replace(/^function markMathFractions\(s\)/, "function markMathFractions(s)");

const sandbox = { globalThis: {} };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(`${fnBody}\nthis.markMathFractions = markMathFractions;`, sandbox);

const { markMathFractions } = sandbox;
let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed++;
  }
}

const proseCases = [
  "Antagonistic responses: ON-center/OFF-surround or OFF-center/ON-surround",
  "noting sign (ON/OFF) and retinotopy",
  "Separate planning (cortex), gain/timing (cerebellum), and action selection/inhibition (basal ganglia) roles.",
  "E_K follows the K⁺ outside/inside ratio",
];

for (const c of proseCases) {
  const { text } = markMathFractions(c);
  assert(!text.includes("\x00FRAC"), `no stacked frac placeholder: ${c.slice(0, 50)}…`);
  if (/ON-center\/OFF-surround/.test(c)) assert(text.includes("ON-center/OFF-surround"), "ON-center slash preserved");
  if (/gain\/timing/.test(c)) assert(text.includes("gain/timing"), "gain/timing preserved");
  if (/selection\/inhibition/.test(c)) assert(text.includes("selection/inhibition"), "selection/inhibition preserved");
  if (/outside\/inside/.test(c)) assert(text.includes("outside/inside"), "outside/inside preserved");
}

const { queue: numQ } = markMathFractions("Nernst with 140/4 mM");
assert(numQ.length === 1, "numeric ratio 140/4 still stacks");

if (failed) process.exit(1);
console.log("prose slash fraction guard: OK");
