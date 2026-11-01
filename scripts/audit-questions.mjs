#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const all = JSON.parse(execSync("node _extract_bank_questions.mjs", { cwd: root, encoding: "utf8" }));

const flags = [];

function flag(q, category, reason) {
  flags.push({ category, reason, topic: q.topic, question: q.question?.slice(0, 120) });
}

const PART1 = new Set([
  "Resting Potential", "Nernst Equation", "Goldman Equation", "Passive Membrane Properties",
  "Action Potential", "Action Potential Propagation", "Electrical Signaling", "Voltage Clamp",
  "Pharmacology", "Cable Theory"
]);
const PART2 = new Set([
  "Chemical Synapses", "Synaptic Transmission", "Synaptic Integration", "Receptor Types",
  "Second Messengers", "Long-Term Plasticity", "Short-Term Plasticity", "Neuromodulation",
  "Neural Circuits", "Synaptic Plasticity Rules", "Motor Systems", "Learning & Memory"
]);

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
    flag(q, "clarity", "Broken grammar from exam paraphrase rule (During the → In the phase of the).");
  }
  if (/Ca⁺(?!-activated)/.test(stem + expl) && !/Ca²⁺/.test(stem + expl)) {
    flag(q, "clarity", "Uses Ca⁺ where Ca²⁺ is meant.");
  }
  if (/photoreceptor|glomerul|cochlea|NMJ/i.test(q.options.filter((_, i) => i !== q.correct).join(" ")) &&
      !/photoreceptor|olfactory|cochlea|NMJ|visual|auditory/i.test(stem)) {
    const wrongs = q.options.filter((_, i) => i !== q.correct);
    const absurd = wrongs.filter(o => /photoreceptor|Only outer hair cell|Only taste bud|gap junction loss in NMJ exclusively/i.test(o));
  }
  const absurd = q.options.filter((o, i) => i !== q.correct && /photoreceptor|Only outer hair cell|Only taste bud|gap junction loss in NMJ exclusively always/i.test(o));
  if (absurd.length >= 2 && !/retina|cochlea|olfact|NMJ|muscle/i.test(stem)) {
    flag(q, "clarity", "≥2 joke distractors (photoreceptor/cochlea/NMJ) on unrelated stem.");
  }

  if (PART1.has(q.topic) && /prosopagnosia|basilar|olfactory glomer/i.test(stem)) {
    flag(q, "alignment", "Part 1 topic label but Part 3 content.");
  }
  if (q.topic === "Goldman Equation" && /weighted equilibrium of permeant ions \(not a single/i.test(correct)) {
    flag(q, "accuracy", "Vague Goldman key where E_K or specific weighted answer expected.");
  }
  if (/depends on prior activity/i.test(correct) && /10 Hz|40 Hz|100 Hz/i.test(stem)) {
    flag(q, "accuracy", "Frequency-specific plasticity keyed to vague depression/facilitation.");
  }

  const cw = String(correct).split(/\s+/).length;
  const maxWrong = Math.max(...q.options.map((o, i) => (i === q.correct ? 0 : String(o).split(/\s+/).length)));
  if (cw >= 12 && maxWrong <= 4) {
    flag(q, "clarity", "Correct option much longer than all distractors (length giveaway).");
  }
}

// duplicates
const stems = new Map();
for (const q of all) {
  const k = q.question?.trim();
  if (!k) continue;
  stems.set(k, (stems.get(k) || 0) + 1);
}
const dups = [...stems.entries()].filter(([, n]) => n > 1);
console.log(JSON.stringify({
  totalMcq: all.length,
  flagCount: flags.length,
  duplicateStems: dups.length,
  byCategory: {
    accuracy: flags.filter(f => f.category === "accuracy").length,
    clarity: flags.filter(f => f.category === "clarity").length,
    alignment: flags.filter(f => f.category === "alignment").length,
  },
  sample: flags.slice(0, 35),
  duplicates: dups.slice(0, 10).map(([q, n]) => ({ n, q: q.slice(0, 90) }))
}, null, 2));
