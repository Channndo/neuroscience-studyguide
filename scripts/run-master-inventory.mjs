#!/usr/bin/env node
/** Phase 1 — full repository question inventory (read-only). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  buildInventory,
  inventorySummary,
  writeDefectsCsv,
} from "./lib/inventory-core.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataDir = path.join(root, "data");
fs.mkdirSync(dataDir, { recursive: true });

console.log("Building question inventory…");
const inv = buildInventory();
const summary = inventorySummary(inv);

fs.writeFileSync(path.join(dataDir, "question-inventory.json"), JSON.stringify(inv, null, 0));
fs.writeFileSync(path.join(dataDir, "inventory-summary.json"), JSON.stringify(summary, null, 2));

const defectRows = writeDefectsCsv(inv, path.join(root, "QUESTION_BANK_DEFECTS.csv"));

console.log(JSON.stringify({ ...summary, defectRows, inventoryPath: "data/question-inventory.json" }, null, 2));
