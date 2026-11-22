/** Complete-sentence MCQ distractors (no QA prefixes). */

export const MCQ_FALLBACK_DISTRACTORS = [
  "Confuses resting multi-ion equilibrium with active spike conductance changes",
  "Describes synaptic transmission rather than membrane voltage-gated currents",
  "Applies photoreceptor dark current logic to axonal action potentials",
  "Requires gap junction coupling instead of voltage-gated channel gating",
  "Equates capacitive charging with full Hodgkin–Huxley conductance kinetics",
  "Uses steady-state Nernst for one ion while both g_Na and g_K change in time",
  "Implies the Na⁺/K⁺ pump alone produces the spike upswing",
  "Treats myelin length constant as the driver of Na⁺ and K⁺ conductance timing",
  "Assigns the behavior to the wrong CNS nucleus or peripheral ganglion",
  "Confuses dorsal-column touch with spinothalamic pain and temperature",
  "Mixes up ipsilateral cerebellar signs with contralateral corticospinal deficits",
  "Attributes taste transduction to cochlear outer hair cell motility",
  "States that all chemical synapses use electrical coupling for propagation",
  "Claims AMPA receptors mediate inhibitory Cl⁻ flux at the neuromuscular junction",
  "Equates synaptic quantal release with graded muscle spindle stretch signaling",
  "Describes LTP induction without NMDA receptor coincidence requirements",
  "Treats cerebellar parallel fibers as the sole output of the basal ganglia",
  "Localizes declarative memory storage to primary visual cortex area V1",
  "Assumes olfactory glomeruli compute frequency maps like the basilar membrane",
  "Confuses upper motor neuron signs with lower motor neuron flaccid paralysis",
  "States that photoreceptors generate overshooting Na⁺ spikes like axons",
  "Attributes blood–brain barrier tight junctions to muscle endplate ACh receptors",
  "Claims inhibitory GABA_A activation always produces net excitation in adults",
  "Uses passive cable decay alone to explain saltatory conduction at nodes",
  "Equates end-plate potential size with cortical epileptic afterdischarge",
  "Describes vestibular hair-cell signaling as identical to retinal phototransduction",
  "States that dorsal root ganglion neurons cannot regenerate central processes",
  "Confuses nicotinic receptor desensitization with metabotropic second-messenger cascades",
  "Attributes REM atonia solely to hippocampal theta without brainstem REM circuitry",
  "Treats cerebrospinal fluid secretion as the primary driver of cortical γ rhythms",
];

export function optionHashStem(q, optionIndex = 0) {
  const stem = `${q.topic || ""} ${q.question || ""}`;
  let h = Math.abs(optionIndex * 997);
  for (let i = 0; i < stem.length; i++) h = (h * 31 + stem.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function pickMcqFallbackDistractor(q, optionIndex, usedLower = new Set()) {
  const used = new Set(usedLower);
  for (const o of q.options || []) {
    const t = String(o ?? "").trim().toLowerCase();
    if (t) used.add(t);
  }
  const seed = optionHashStem(q, optionIndex);
  for (let k = 0; k < MCQ_FALLBACK_DISTRACTORS.length; k++) {
    const d = MCQ_FALLBACK_DISTRACTORS[(seed + k) % MCQ_FALLBACK_DISTRACTORS.length];
    if (!used.has(d.toLowerCase())) return d;
  }
  return `Misstates the mechanism emphasized in this stem (distractor ${optionIndex + 1})`;
}