#!/usr/bin/env node
/**
 * Unified validation pipeline (schema + scientific refs + existing gates).
 */
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { buildInventory, inventorySummary } from "./lib/inventory-core.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function run(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return { ok: r.status === 0, out: (r.stdout || "") + (r.stderr || ""), status: r.status };
}

let failed = 0;

const steps = [
  ["copy-polish", ["node", "scripts/test-question-copy-polish.mjs"]],
  ["prose-slashes", ["node", "scripts/test-prose-slashes.mjs"]],
  ["nernst-signed", ["node", "scripts/test-nernst-signed-z.mjs"]],
  ["timer-logic", ["node", "scripts/test-quiz-timer-logic.mjs"]],
  ["nernst-goldman-bank", ["node", "scripts/verify-nernst-goldman.mjs"]],
];

for (const [name, args] of steps) {
  const r = run(args[0], args.slice(1));
  console.log(r.ok ? `PASS ${name}` : `FAIL ${name}`);
  if (!r.ok) {
    failed++;
    console.log(r.out.slice(-800));
  }
}

console.log("Inventory gate (critical defects in scored-eligible items)…");
const inv = buildInventory();
const summary = inventorySummary(inv);
const criticalInPractice = inv.questions.filter(
  q =>
    q.qualityScore >= 80 &&
    q.defects.some(d => d.severity === "critical") &&
    q.disposition !== "quarantine_scored"
).length;

if (criticalInPractice > 0) {
  console.error(`FAIL: ${criticalInPractice} items have critical defects but are not quarantined`);
  failed++;
} else {
  console.log("PASS inventory critical quarantine check");
}

const quarantineRate = summary.quarantined / summary.total;
console.log(
  `Bank health: total=${summary.total} quarantined=${summary.quarantined} (${Math.round(quarantineRate * 100)}%) avgScore=${summary.avgQualityScore}`
);

const structural = run("node", ["scripts/validate-question-banks.mjs"]);
if (!structural.ok) {
  console.log("WARN/FAIL structural validate-question-banks (heuristic)");
  failed++;
} else {
  console.log("PASS validate-question-banks");
}

if (failed) {
  console.error(`\nPipeline FAILED (${failed} gate(s))`);
  process.exit(1);
}
console.log("\nPipeline PASSED");
