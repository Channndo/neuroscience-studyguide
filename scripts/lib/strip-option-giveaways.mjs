/** Shared patterns for auto-generated distractor suffixes and QA tags (never show in UI). */

export const OPTION_GIVEAWAY_RES = [
  /\s*\(does not follow from the mechanism implied in the stem\)/gi,
  /\s*\([^)]*does not follow from the mechanism[^)]*\)/gi,
  /\s*\([^)]*inconsistent with the mechanism[^)]*\)/gi,
  /\s*— inconsistent with the mechanism in the stem\.?/gi,
  /\s*— not the best match to the stem\.?/gi,
  /\s*—\s*contradicts the Nernst dependence on inside\/outside concentrations\.?/gi,
  /\s*\(contradicts the Nernst dependence on inside\/outside concentrations\)/gi,
  /\s*\([^)]*contradicts the Nernst dependence[^)]*\)/gi,
  /\s*\(ignores weighted permeabilities in the constant-field equation\)/gi,
  /\s*\([^)]*ignores weighted permeabilities[^)]*\)/gi,
  /\s*\(misstates how R_m, C_m, or geometry set τ or λ\)/gi,
  /\s*\([^)]*misstates how R_m[^)]*\)/gi,
  /\s*\(confuses channel gating timing during spike phases\)/gi,
  /\s*\([^)]*confuses channel gating timing[^)]*\)/gi,
  /\s*\(misapplies how active propagation uses local circuit currents\)/gi,
  /\s*\([^)]*misapplies how active propagation[^)]*\)/gi,
  /\s*\(uses the wrong sign or driving force for ionic current\)/gi,
  /\s*\([^)]*uses the wrong sign or driving force[^)]*\)/gi,
  /\s*\(confuses pump maintenance of gradients with instantaneous V_m clamping\)/gi,
  /\s*\([^)]*describes the wrong synaptic structure[^)]*\)/gi,
  /\s*\([^)]*mixes up presynaptic release[^)]*\)/gi,
  /\s*\([^)]*ignores how EPSPs\/IPSPs sum[^)]*\)/gi,
  /\s*\([^)]*states the wrong induction requirement[^)]*\)/gi,
  /\s*\(assigns the deficit to the wrong visual pathway stage\)/gi,
  /\s*\(confuses cochlear place coding with an unrelated modality\)/gi,
  /\s*\([^)]*wrong visual pathway stage[^)]*\)/gi,
  /\s*\([^)]*wrong pathway or syndrome[^)]*\)/gi,
  /\s*\([^)]*not the best match[^)]*\)/gi,
  /\s*\([^)]*ignores which ion dominates resting permeability[^)]*\)/gi,
  /\s*\([^)]*ignores which ion dominates[^)]*\)/gi,
  /\s*\(same units as E_ion\)/gi,
  /\s+with preserved proprioception and vibration sense\.?/gi,
  /\s+suggesting brainstem rather than hemispheric origin\.?/gi,
  /\s+matching a peripheral nerve distribution\.?/gi,
  /\s+without cortical language involvement\.?/gi,
  /\s+under standard whole-cell recording conditions\.?/gi,
  /\s+with contralateral sensory findings\.?/gi,
  /\s+and no homonymous visual field defect\.?/gi,
  /\s*Requires [^.]+\.$/gi,
  /\s+when temperature is near 37\s*°?C\.?/gi,
  /\s+in a typical mammalian[^.]*\.?/gi,
  /\s+typical mammalian[^.]*\.?/gi,
  /\s+during normal resting permeability conditions\.?/gi,
  /^during normal resting permeability conditions\.?$/gi,
  /\s+exclusively in this context\.?/gi,
  /\s+—\s*misstates how R_m, C_m, or geometry set τ or λ\.?/gi,
];

const REQUIRES_PREFIX =
  /^Requires\s+(photoreceptor|photoreceptors|gABA|GABA|outer hair|taste|cochlea|glomerul|nMJ|NMJ)/i;

const REQUIRES_REPLACEMENTS = [
  "Applies a sensory transduction pathway from a different modality",
  "Describes synaptic machinery unrelated to the membrane process in the stem",
  "References a circuit element that does not control the variable asked about",
];

export function stripOptionGiveawayText(raw) {
  if (raw == null || typeof raw !== "string") return raw;
  let t = raw.trim();
  if (!t) return t;
  for (const re of OPTION_GIVEAWAY_RES) t = t.replace(re, "");
  if (REQUIRES_PREFIX.test(t)) {
    const idx = t.length % REQUIRES_REPLACEMENTS.length;
    t = REQUIRES_REPLACEMENTS[idx];
  }
  t = t.replace(/\s{2,}/g, " ").replace(/\s+\./g, ".").trim();
  if (t.endsWith("—")) t = t.slice(0, -1).trim();
  return t;
}

export const WRONG_EXPLANATION_BOILER_RE =
  /unlike the keyed answer|the correct choice—|the keyed answer—|fits that description|does not match the mechanism \(topic:|This option is inconsistent with the stem/i;
