#!/usr/bin/env node
/** CLI quality dashboard — same metrics as in-app target report. */
import { buildInventory, inventorySummary } from "./lib/inventory-core.mjs";

const inv = buildInventory();
const s = inventorySummary(inv);

console.log("=== MCB80x Question Bank Quality Dashboard ===\n");
console.log(`Total questions:        ${s.total}`);
console.log(`Quarantined (heuristic):  ${s.quarantined}`);
console.log(`Approved practice:      ${s.approved}`);
console.log(`Avg quality score:        ${s.avgQualityScore}`);
console.log(`Unique topics:            ${s.uniqueTopics}`);
console.log(`Unique objective keys:    ${s.uniqueObjectives}`);
console.log(`Missing explanations:     ${s.missingExpl}`);
console.log("\nBy course:", s.byCourse);
console.log("\nBy pipeline stage:", s.byStage);
console.log("\nTop defects:", Object.entries(s.defectCounts).sort((a, b) => b[1] - a[1]).slice(0, 12));
