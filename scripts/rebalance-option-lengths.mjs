#!/usr/bin/env node
/**
 * Lengthen plausible distractors (topic-specific) and trim verbose keyed options
 * when the correct choice is the longest — reduces length giveaway.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BANK_FILES = [
  "questions-bank.js",
  "questions-fresh-pools.js",
  "questions-expansion.js",
  "questions-extra-pools.js",
  "questions-exam-paraphrases.js",
  "questions-variation-pools.js",
];

const JOKE_RE = /photoreceptor dark current|Only outer hair cell|Only taste bud|gap junction loss in NMJ exclusively|Converts dendrites to photoreceptors|Maps odor to glomeruli/i;

const TEMPLATE_DISTRACTORS = new Set([
  "Always exactly 0 mV",
  "Unaffected by concentration",
  "Equal to E_Na for every ion",
  "Equal to E_K regardless of potassium",
]);

const TOPIC_PAD = {
  "Nernst Equation": "contradicts the Nernst dependence on inside/outside concentrations",
  "Goldman Equation": "ignores weighted permeabilities in the constant-field equation",
  "Passive Membrane Properties": "misstates how R_m, C_m, or geometry set τ or λ",
  "Action Potential": "confuses channel gating timing during spike phases",
  "Action Potential Propagation": "misapplies how active propagation uses local circuit currents",
  "Electrical Signaling": "uses the wrong sign or driving force for ionic current",
  "Resting Potential": "ignores which ion dominates resting permeability",
  "Chemical Synapses": "describes the wrong synaptic structure or transmission step",
  "Synaptic Transmission": "mixes up presynaptic release with postsynaptic receptor logic",
  "Synaptic Integration": "ignores how EPSPs/IPSPs sum in time or space",
  "Long-Term Plasticity": "states the wrong induction requirement for LTP/LTD",
  "Visual System": "assigns the deficit to the wrong visual pathway stage",
  "Auditory System": "confuses cochlear place coding with an unrelated modality",
  "Motor Systems": "maps the lesion to the wrong motor pathway or reflex",
  "Neuroanatomy": "localizes the function to the wrong brain region",
  default: "does not follow from the mechanism implied in the stem",
};

const REPLACEMENT_DISTRACTORS = [
  "Applies the right idea to the wrong cell type or preparation",
  "Reverses the direction of ion flow or voltage change",
  "Describes a pharmacology effect on the wrong channel class",
  "Mixes up temporal order of channel activation during signaling",
];

function len(s) {
  return String(s || "").replace(/<[^>]+>/g, "").trim().length;
}

function trimCorrect(opt) {
  let t = String(opt);
  t = t.replace(/\s*\([^)]{40,}\)\s*$/, "").trim();
  t = t.replace(/\s*—[^—]{30,}$/, "").trim();
  return t.length >= 20 ? t : opt;
}

function padWrong(opt, topic) {
  let t = String(opt).trim();
  if (TEMPLATE_DISTRACTORS.has(t)) {
    const i = t.length % REPLACEMENT_DISTRACTORS.length;
    return REPLACEMENT_DISTRACTORS[i];
  }
  if (JOKE_RE.test(t)) {
    return "Assigns an unrelated sensory or synaptic mechanism to this context";
  }
  const pad = TOPIC_PAD[topic] || TOPIC_PAD.default;
  if (len(t) >= 55) return t;
  if (t.endsWith(".") || t.endsWith(")")) return `${t} — ${pad}.`;
  return `${t} (${pad})`;
}

function rebalanceQuestion(q) {
  if (!q?.options?.length || q.correct == null) return false;
  const lengths = q.options.map(len);
  const cLen = lengths[q.correct];
  const maxOther = Math.max(...lengths.filter((_, i) => i !== q.correct));
  if (cLen <= maxOther) return false;

  let changed = false;
  const trimmed = trimCorrect(q.options[q.correct]);
  if (trimmed !== q.options[q.correct]) {
    q.options[q.correct] = trimmed;
    changed = true;
  }

  const newCLen = len(q.options[q.correct]);
  const target = Math.max(newCLen - 2, 35);
  q.options = q.options.map((opt, i) => {
    if (i === q.correct) return opt;
    if (len(opt) >= target) return opt;
    const next = padWrong(opt, q.topic);
    if (next !== opt) changed = true;
    return next;
  });
  return changed;
}

function serializeQuestion(q) {
  const opts = q.options.map(o => JSON.stringify(o)).join(",\n      ");
  const wrong = q.wrongExplanations
    ? `,\n    wrongExplanations: [\n      ${q.wrongExplanations.map(w => JSON.stringify(w)).join(",\n      ")}\n    ]`
    : "";
  const extra = [];
  if (q.type) extra.push(`type: ${JSON.stringify(q.type)}`);
  if (q.selectAll) extra.push(`selectAll: true`);
  if (q.partialCredit) extra.push(`partialCredit: ${JSON.stringify(q.partialCredit)}`);
  const extraBlock = extra.length ? `,\n    ${extra.join(",\n    ")}` : "";
  return `  {
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: [
      ${opts}
    ],
    correct: ${q.correct},
    explanation: ${JSON.stringify(q.explanation)}${wrong}${extraBlock}
  }`;
}

function processFile(file) {
  const fp = path.join(root, file);
  let code = fs.readFileSync(fp, "utf8");
  const names = [...code.matchAll(/const ([A-Z0-9_]+) = \[/g)].map(m => m[1]);
  if (!names.length) return 0;
  const bag = new Function(`${code}\nreturn { ${names.join(", ")} };`)();
  let changed = 0;
  for (const name of names) {
    for (const q of bag[name] || []) {
      if (rebalanceQuestion(q)) changed++;
    }
  }
  if (!changed) return 0;
  let out = code.split(/const [A-Z0-9_]+ = \[/)[0];
  for (const name of names) {
    const list = bag[name];
    out += `const ${name} = [\n${list.map(serializeQuestion).join(",\n")}\n];\n\n`;
  }
  fs.writeFileSync(fp, out.trimEnd() + "\n");
  return changed;
}

let total = 0;
for (const f of BANK_FILES) {
  if (!fs.existsSync(path.join(root, f))) continue;
  const n = processFile(f);
  if (n) console.log(f, n);
  total += n;
}
console.log("questions rebalanced:", total);
execSync("node scripts/check-longest-option.mjs", { cwd: root, stdio: "inherit" });
