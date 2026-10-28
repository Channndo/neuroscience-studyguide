#!/usr/bin/env node
/**
 * Expand implausibly short wrong MCQ options so they are closer in length to the keyed answer.
 * Skips the old runtime padding phrases (see strip-distractor-padding.mjs).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const EXPANSIONS = {
  "E_K": "The potassium reversal potential (E_K) alone, ignoring other permeant ions",
  "E_Na": "The sodium reversal potential (E_Na) alone, ignoring other permeant ions",
  "E_Ca": "The calcium reversal potential (E_Ca) alone, ignoring other permeant ions",
  "0 mV": "0 mV, as if all ion gradients were abolished",
  "0 mV always": "0 mV under every concentration condition, regardless of valence",
  "Toward E_K only": "Toward E_K exclusively, with no contribution from other ion conductances",
  "Toward E_K": "Toward E_K, assuming K⁺ is the only permeant ion at rest",
  "Toward E_Na": "Toward E_Na, assuming Na⁺ dominates membrane permeability",
  "Olfactory odorant molecules": "Olfactory odorant molecules transduced in the nasal epithelium",
  "Photoreceptor cGMP channels": "Opening of photoreceptor cGMP-gated channels in the retina",
  "Synaptic vesicle recycling": "Synaptic vesicle endocytosis and recycling at nerve terminals",
  "Muscle spindles exclusively": "Stretch-sensitive muscle spindle afferents in the periphery",
  "Olfactory glomeruli only": "Processing confined to olfactory bulb glomeruli",
  "Increased photopigment bleaching": "Increased photopigment bleaching in retinal rods and cones",
  "Myelinating inhibitory interneurons": "Myelination of inhibitory interneurons in cortex",
  "Saltatory conduction exclusively": "Saltatory conduction along myelinated axons only",
  "Photoreceptor axons exclusively": "Bundled photoreceptor axons in the optic nerve head"
};

function wc(s) {
  return String(s).trim().split(/\s+/).filter(Boolean).length;
}

function maybeExpand(wrong, correct) {
  const w = String(wrong).trim();
  const cw = wc(correct);
  const ow = wc(w);
  if (cw < 8 || ow > 4) return wrong;
  if (EXPANSIONS[w]) return EXPANSIONS[w];
  if (ow <= 3 && w.length < correct.length * 0.35) {
    const base = w.replace(/[.!?]+$/, "");
    return `${base}, which is not the best description for the scenario in the stem`;
  }
  return wrong;
}

function patchFile(filePath) {
  let text = fs.readFileSync(filePath, "utf8");
  const objRe = /\{\s*topic:[\s\S]*?correct:\s*\d+\s*\}/g;
  let changed = 0;
  text = text.replace(objRe, block => {
    try {
      const q = new Function(`return (${block});`)();
      if (!q.options || q.correct == null) return block;
      const correct = q.options[q.correct];
      let local = 0;
      q.options = q.options.map((opt, i) => {
        if (i === q.correct) return opt;
        const next = maybeExpand(opt, correct);
        if (next !== opt) local++;
        return next;
      });
      if (!local) return block;
      changed += local;
      const opts = q.options.map(o => JSON.stringify(o)).join(",\n      ");
      return block.replace(
        /options:\s*\[[\s\S]*?\]/,
        `options: [\n      ${opts}\n    ]`
      );
    } catch {
      return block;
    }
  });
  if (changed) fs.writeFileSync(filePath, text);
  return changed;
}

const files = fs.readdirSync(root).filter(f => f.startsWith("questions-") && f.endsWith(".js"));
let total = 0;
for (const f of files) {
  const n = patchFile(path.join(root, f));
  if (n) console.log(f, n);
  total += n;
}
console.log("expanded", total, "short distractors");
