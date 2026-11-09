/** Trim verbose keyed options; lengthen distractors with plain academic phrasing (no QA tags). */

export function optionLen(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, "")
    .trim()
    .length;
}

export function isKeyedLongest(q) {
  if (!q?.options?.length || q.correct == null) return false;
  const lens = q.options.map(optionLen);
  const cLen = lens[q.correct];
  const maxOther = Math.max(...lens.filter((_, i) => i !== q.correct));
  return cLen > maxOther;
}

export function trimKeyedOption(text) {
  let t = String(text ?? "").trim();
  if (!t || optionLen(t) <= 40) return t;

  const parts = t.split(/\s*;\s*/);
  if (parts.length > 1 && optionLen(parts[0]) >= 18) return parts[0].trim();

  const comma = t.match(/^(.{18,}?),/);
  if (comma) return comma[1].trim();

  const em = t.match(/^(.{16,}?)—/);
  if (em) return em[1].trim();

  const whileSplit = t.split(/\s+while\s+/i);
  if (whileSplit.length > 1 && optionLen(whileSplit[0]) >= 16) return whileSplit[0].trim();

  const andSplit = t.split(/\s+and\s+/i);
  if (andSplit.length > 1 && optionLen(andSplit[0]) >= 20) return andSplit[0].trim();

  t = t.replace(/\s*\([^)]{10,}\)\s*$/, "").trim();
  if (optionLen(t) <= 42) return t;

  const words = t.split(/\s+/);
  let out = "";
  for (const w of words) {
    if (optionLen(out + " " + w) > 42) break;
    out = out ? `${out} ${w}` : w;
  }
  return out || t.slice(0, 42).trim();
}

function topicContextPads(topic, optionText) {
  const t = `${topic || ""} ${optionText || ""}`.toLowerCase();
  if (/\bmv\b|nernst|goldman|membrane potential|v_m|driving force|permeab|ion channel|leak/.test(t)) {
    return [
      " at mammalian body temperature",
      " with dominant K⁺ permeability at rest",
      " if voltage-gated Na⁺ channels are inactivated",
    ];
  }
  if (/action potential|spike|axon|myelin|saltatory|hodgkin|depolariz|repolariz|threshold/.test(t)) {
    return [
      " during the rising phase of the spike",
      " when Na⁺ inactivation has progressed",
      " along a uniformly leaky cable",
    ];
  }
  if (/synap|neurotrans|receptor|epsp|ipsp|glutamat|gaba|ach|dopamin|serotonin/.test(t)) {
    return [
      " at fast chemical synapses",
      " following presynaptic Ca²⁺ influx",
      " when ligand-gated channels are open",
    ];
  }
  if (/visual|retina|lgn|v1|cochlea|auditory|somatosens|pain|propriocept|taste|olfact/.test(t)) {
    return [
      " in the primary sensory pathway named",
      " contralateral to monocular stimulation",
      " before cortical association areas",
    ];
  }
  if (/cortex|cerebell|basal ganglia|thalamus|hippocamp|amygdala|brainstem|spinal|nucleus|tract/.test(t)) {
    return [
      " in the adult human CNS",
      " bilaterally at the level described",
      " via major descending or ascending tracts",
    ];
  }
  if (/sleep|arousal|circadian|neuromod|norepinephrine|acetylcholine system/.test(t)) {
    return [
      " during quiet wakefulness",
      " with diffuse forebrain projections",
      " when brainstem arousal nuclei are active",
    ];
  }
  if (/plasticity|ltp|ltd|learning|memory/.test(t)) {
    return [
      " after repeated synaptic activation",
      " when NMDA receptors are co-activated",
      " without changes in presynaptic release probability",
    ];
  }
  return [
    " under typical experimental conditions",
    " at steady state in normoxic tissue",
    " when homeostatic mechanisms are intact",
  ];
}

export function padDistractor(opt, topic, targetLen) {
  let t = String(opt ?? "").trim();
  if (optionLen(t) >= targetLen) return t;
  if (/^Only\s+/i.test(t)) {
    t = t.replace(/^Only\s+/i, "").trim();
    if (t) t = `Primarily ${t.charAt(0).toLowerCase()}${t.slice(1)}`;
  }
  const pads = topicContextPads(topic, t);
  let i = (optionLen(t) + String(topic || "").length) % pads.length;
  for (let guard = 0; optionLen(t) < targetLen && guard < 4; guard++) {
    const suffix = pads[i % pads.length];
    if (t.endsWith(suffix.trim()) || t.includes(suffix.trim())) {
      i++;
      continue;
    }
    t = `${t}${suffix}`.replace(/\s+/g, " ").trim();
    i++;
    if (optionLen(t) >= targetLen) break;
  }
  return t;
}

export function balanceMcqOptions(q) {
  if (!q?.options?.length || q.correct == null || q.type === "selectAll") return q;

  const opts = q.options.slice();
  const ci = q.correct;
  const trimmed = trimKeyedOption(opts[ci]);
  if (trimmed !== opts[ci]) opts[ci] = trimmed;

  if (!isKeyedLongest({ ...q, options: opts })) {
    return { ...q, options: opts };
  }

  const cLen = optionLen(opts[ci]);
  const maxWrong = Math.max(...opts.map((o, i) => (i === ci ? 0 : optionLen(o))));
  const target = Math.max(Math.min(cLen - 2, maxWrong + 2), Math.min(cLen - 4, 28));

  const next = opts.map((o, i) =>
    i === ci ? o : padDistractor(o, q.topic, Math.max(target, optionLen(o) + 1))
  );

  return { ...q, options: next };
}
