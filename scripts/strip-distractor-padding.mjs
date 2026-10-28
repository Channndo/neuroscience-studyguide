#!/usr/bin/env node
/**
 * Remove legacy runtime distractor padding phrases if they were copied into bank files.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const TAILS = [
  ", independent of membrane capacitance and leak conductances",
  ", regardless of Nernst equilibrium potential values",
  ", even when voltage-gated channels remain closed",
  ", under typical Hodgkin–Huxley axon assumptions",
  ", throughout the neuron without passive attenuation alone",
  ", relative to standard mammalian CNS recording conditions",
  ", without requiring synaptic input or neuromodulation",
  ", even if the Na⁺/K⁺ ATPase is pharmacologically blocked"
];

const files = fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"));
let total = 0;
for (const file of files) {
  const fp = path.join(root, file);
  let text = fs.readFileSync(fp, "utf8");
  let hits = 0;
  for (const tail of TAILS) {
    const re = new RegExp(tail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    const n = (text.match(re) || []).length;
    if (n) {
      text = text.replace(re, "");
      hits += n;
    }
  }
  if (hits) {
    fs.writeFileSync(fp, text);
    console.log(file, hits);
    total += hits;
  }
}
console.log("stripped", total, "padding phrases");
