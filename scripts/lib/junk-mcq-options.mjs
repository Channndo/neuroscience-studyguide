import { stripOptionGiveawayText } from "./strip-option-giveaways.mjs";

export function isJunkMcqOption(text) {
  const raw = String(text ?? "").trim();
  let t = stripOptionGiveawayText(raw);
  if (!t) return true;
  if (/^Main mechanism:/i.test(raw) || /^Main mechanism:/i.test(t)) return true;
  if (/maps the lesion|not implied by the circuit wiring|localizes the function to the wrong brain region/i.test(t))
    return true;
  if (/Incorrect mechanism for this stem/i.test(t)) return true;
  if (/(following presynaptic Ca²⁺ influx).*\1/i.test(t)) return true;
  if (/^Requires\s+/i.test(t) && /photoreceptor|NMJ|glomerul/i.test(t)) return true;
  if (/primarily forever$/i.test(t)) return true;
  return false;
}