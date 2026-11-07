#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { normStem } from "./lib/inventory-core.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const auditPath = path.join(root, "scripts", "audit-questions.mjs");

const raw = execSync("node _extract_bank_questions.mjs", {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 128 * 1024 * 1024,
});

const all = JSON.parse(raw);
const flags = [];

const PART1 = new Set([
  "Resting Potential", "Nernst Equation", "Goldman Equation", "Passive Membrane Properties",
  "Action Potential", "Action Potentials", "Action Potential Propagation", "Electrical Signaling",
  "Voltage Clamp", "Pharmacology", "Cable Theory", "Formula Lab", "Passive Properties",
]);
const PART2 = new Set([
  "Chemical Synapses", "Synaptic Transmission", "Synaptic Integration", "Receptor Types",
  "Second Messengers", "Long-Term Plasticity", "Short-Term Plasticity", "Neuromodulation",
  "Neural Circuits", "Synaptic Plasticity Rules", "Motor Systems", "Learning & Memory",
]);

function flag(q, category, reason) {
  flags.push({ category, reason, stem: normStem(q.question), topic: q.topic, canonicalId: q.canonicalId });
}

for (const q of all) {
  if (!q.options?.length || q.correct == null) continue;
  const stem = q.question || "";
  const correct = q.options[q.correct];
  const expl = q.explanation || "";

  if (/Na\+.*lowers E_Na|lowers E_Na/i.test(expl)) {
    flag(q, "accuracy", "Explanation says raising external Na+ lowers E_Na (should be more positive).");
  }
  if (/E_Ca becomes more negative/i.test(correct + expl) && /buffer|lower.*intracellular.*Ca/i.test(stem)) {
    flag(q, "accuracy", "Lowering [Ca2+]in should make E_Ca more positive, not more negative.");
  }
  if (/fourfold.*K|K.*fourfold/i.test(stem) && /~?\s*24\s*mV/i.test(correct + q.options.join(" "))) {
    flag(q, "accuracy", "Fourfold extracellular K+ shift still shows ~24 mV (expect ~37 mV).");
  }
  if (/fourfold.*Ca|external Ca.*fourfold/i.test(stem) && /\+30\s*mV/i.test(correct + q.options.join(" "))) {
    flag(q, "accuracy", "Fourfold external Ca2+ shift still shows +30 mV (expect ~18.5 mV for z=2).");
  }
  if (/net inward current.*K.*leak|inward current if rest was dominated by K/i.test(correct)) {
    flag(q, "accuracy", "Clamp at 0 mV from K+-dominated rest: net outward K+ current, not inward.");
  }
  if (/Face recognition deficit/i.test(correct) && /prosopagnosia|Prosopagnosia/i.test(stem) && !/fusiform|ventral|temporal/i.test(correct)) {
    flag(q, "accuracy", "Prosopagnosia keyed to symptom not neural basis (fusiform/ventral stream).");
  }
  if (/In the phase of the/i.test(stem)) {
    flag(q, "clarity", "Broken grammar from exam paraphrase rule.");
  }
  if (/Ca⁺(?!-activated)/.test(stem + expl) && !/Ca²⁺/.test(stem + expl)) {
    flag(q, "clarity", "Uses Ca⁺ where Ca²⁺ is meant.");
  }
  const absurd = q.options.filter(
    (o, i) => i !== q.correct && /photoreceptor|Only outer hair cell|Only taste bud|gap junction loss in NMJ exclusively always/i.test(o)
  );
  if (absurd.length >= 2 && !/retina|cochlea|olfact|NMJ|muscle/i.test(stem)) {
    flag(q, "clarity", "≥2 joke distractors on unrelated stem.");
  }
  if (PART1.has(q.topic) && /prosopagnosia|basilar|olfactory glomer/i.test(stem)) {
    flag(q, "alignment", "Part 1 topic label but Part 3 content.");
  }
  if (q.topic === "Goldman Equation" && /weighted equilibrium of permeant ions \(not a single/i.test(correct)) {
    flag(q, "accuracy", "Vague Goldman key where specific E_K or numeric answer expected.");
  }
}

const accuracyStems = new Set(flags.filter(f => f.category === "accuracy").map(f => f.stem));
const out = {
  generatedAt: new Date().toISOString(),
  totalMcq: all.length,
  flagCount: flags.length,
  accuracyFlags: flags.filter(f => f.category === "accuracy").length,
  accuracyStems: [...accuracyStems],
  flags,
};

fs.mkdirSync(path.join(root, "data"), { recursive: true });
fs.writeFileSync(path.join(root, "data", "scientific-flags.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ totalMcq: out.totalMcq, flags: out.flagCount, accuracy: out.accuracyFlags }, null, 2));
