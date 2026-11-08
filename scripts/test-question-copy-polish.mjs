#!/usr/bin/env node
/**
 * Regression tests for question-copy-polish.js (no global + mangling).
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const code = fs.readFileSync(path.join(root, "question-copy-polish.js"), "utf8");
const sandbox = { window: {}, globalThis: {} };
sandbox.globalThis = sandbox;
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const { polishOption, polishListPlus, polishStem, stripGenericWrappers } =
  sandbox.QuestionCopyPolish;

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed++;
  }
}

for (const inOpt of [
  "Na+ entry",
  "K+ channels",
  "Ca2+ influx",
  "E_K ≈ +12 mV",
  "2 + 2",
  "+35 mV",
  "[Na+]_out/[Na+]_in",
]) {
  const out = polishOption(inOpt);
  assert(out.includes("+"), `option must preserve +: "${inOpt}" -> "${out}"`);
}

assert(polishOption("Horner + ataxia + diplopia").includes(";"), "clinical list uses semicolons");
assert(!polishOption("Na+ and K+").includes(";"), "ions not semicolonized");

assert(
  !polishOption("No change (does not follow from the mechanism implied in the stem)").includes("does not follow"),
  "strip filler suffix from option"
);
assert(
  !polishOption("Always 0 mV (contradicts the Nernst dependence on inside/outside concentrations)").includes(
    "contradicts the Nernst"
  ),
  "strip Nernst filler tag"
);

assert(stripGenericWrappers("Using the values stated below, which answer is correct: x").startsWith("x"), "strip generic wrapper");

const malformed = polishStem("Which description best applies to If TTX blocks Na+ channels?");
assert(!/^Which description best applies to If/.test(malformed), "fix malformed If stem");

const sataCtx =
  "During voltage clamp at −65 mV, [K+]in = 140 mM, [K+]out = 4 mM. Which statements about E_K are correct? (select all)";
const polishedSata = polishStem(sataCtx, { type: "selectAll" });
assert(polishedSata.includes("140 mM"), "SATA preserves experimental context");
assert(polishedSata.toLowerCase().includes("select all"), "SATA keeps select-all cue");

const shortTopic = polishStem("receptor signaling", { type: "selectAll", topic: "receptor signaling" });
assert(shortTopic.includes("receptor signaling"), "short SATA may use topic");

if (failed) {
  console.error(`\n${failed} assertion(s) failed.`);
  process.exit(1);
}
console.log("question-copy-polish regression tests: OK");
