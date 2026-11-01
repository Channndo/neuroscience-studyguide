#!/usr/bin/env node
/**
 * Recompute Nernst/Goldman numeric answers from stated concentrations (37°C, 61.54 mV/decade)
 * and flag MCQ keys that disagree.
 */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(__dirname);
const raw = execSync("node _extract_bank_questions.mjs", { cwd: root, encoding: "utf8" });
const questions = JSON.parse(raw);

const RT_F_LOG10 = 61.54; // mV per decade at ~37°C (monovalent Nernst)

function nernstLog10Mv(z, out, inn) {
  if (!out || !inn || out <= 0 || inn <= 0 || !z) return null;
  return (RT_F_LOG10 / Math.abs(z)) * Math.log10(out / inn);
}

function parseOptionMv(opt) {
  const s = String(opt).replace(/\u2212/g, "-").replace(/−/g, "-");
  const m = s.match(/([+-]?\s*~?\s*(\d+(?:\.\d+)?))\s*mV/i);
  if (!m) return null;
  const sign = /-\s*\d/.test(m[1].replace(/\s/g, "")) ? -1 : 1;
  return sign * parseFloat(m[2]);
}

function parseConcentrations(stem) {
  const out = {};
  const patterns = [
    { ion: "K", outRe: /(?:extracellular|\[K(?:\+|\u207a)?\]_?(?:out|o)|K(?:\+|\u207a)? out)[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i, inRe: /(?:intracellular|\[K(?:\+|\u207a)?\]_?(?:in|i)|K(?:\+|\u207a)? in)[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i },
    { ion: "Na", outRe: /(?:extracellular|\[Na(?:\+|\u207a)?\]_?(?:out|o)|Na(?:\+|\u207a)? out)[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i, inRe: /(?:intracellular|\[Na(?:\+|\u207a)?\]_?(?:in|i)|Na(?:\+|\u207a)? in)[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i },
    { ion: "Cl", outRe: /(?:extracellular|\[Cl(?:⁻|\u207b)?\]_?(?:out|o))[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i, inRe: /(?:intracellular|\[Cl(?:⁻|\u207b)?\]_?(?:in|i))[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i },
    { ion: "Ca", outRe: /(?:extracellular|\[Ca(?:²⁺|2\+|\u00b2)?\]_?(?:out|o)|external Ca)[^0-9=]*(\d+(?:\.\d+)?)\s*mM/i, inRe: /(?:intracellular|\[Ca(?:²⁺|2\+|\u00b2)?\]_?(?:in|i)|free Ca[^0-9]*)[^0-9=]*(\d+(?:\.\d+)?)\s*(?:mM|µM|uM)/i },
  ];
  for (const p of patterns) {
    const o = stem.match(p.outRe);
    const i = stem.match(p.inRe);
    if (o && i) {
      let inn = parseFloat(i[1]);
      let outv = parseFloat(o[1]);
      if (p.ion === "Ca" && /µM|uM/i.test(i[0])) inn /= 1000;
      out[p.ion] = { out: outv, in: inn };
    }
  }
  const bracketPairs = [...stem.matchAll(/\[(K|Na|Cl|Ca)(?:\+|⁻|²⁺|2\+)?\]_?(?:in|i)\s*=\s*(\d+(?:\.\d+)?)[^;]*;\s*\[(?:\1)(?:\+|⁻|²⁺|2\+)?\]_?(?:out|o)\s*=\s*(\d+(?:\.\d+)?)\s*mM/gi)];
  for (const m of bracketPairs) {
    const ion = m[1] === "Ca" ? "Ca" : m[1];
    const z = ion === "Ca" ? 2 : ion === "Cl" ? -1 : 1;
    if (!out[ion]) out[ion] = { in: parseFloat(m[2]), out: parseFloat(m[3]) };
    void z;
  }
  const givenBlock = stem.match(/\[K[^\]]*\][^;]*;\s*\[Na[^\]]*\][^;]*;\s*\[Na[^\]]*\][^;]*;\s*\[Na[^\]]*\]/i);
  if (/Given \[K/.test(stem)) {
    const kin = stem.match(/\[K(?:\+|\u207a)?\]_?in\s*=\s*(\d+(?:\.\d+)?)/i);
    const kout = stem.match(/\[K(?:\+|\u207a)?\]_?out\s*=\s*(\d+(?:\.\d+)?)/i);
    const nain = stem.match(/\[Na(?:\+|\u207a)?\]_?in\s*=\s*(\d+(?:\.\d+)?)/i);
    const naout = stem.match(/\[Na(?:\+|\u207a)?\]_?out\s*=\s*(\d+(?:\.\d+)?)/i);
    if (kin && kout) out.K = { in: parseFloat(kin[1]), out: parseFloat(kout[1]) };
    if (nain && naout) out.Na = { in: parseFloat(nain[1]), out: parseFloat(naout[1]) };
  }
  return out;
}

function parsePermRatio(stem) {
  const m = stem.match(/P_K\s*:\s*P_Na\s*=\s*(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)/i);
  if (m) return { pK: parseFloat(m[1]), pNa: parseFloat(m[2]) };
  const m2 = stem.match(/P_K:P_Na\s*=\s*1:0\.(\d+)/i);
  if (m2) return { pK: 1, pNa: parseFloat(`0.${m2[1]}`) };
  return null;
}

function goldmanVmMv(conc, pK, pNa) {
  if (!conc.K || !conc.Na) return null;
  const { out: ko, in: ki } = conc.K;
  const { out: no, in: ni } = conc.Na;
  const num = pK * ko + pNa * no;
  const den = pK * ki + pNa * ni;
  if (num <= 0 || den <= 0) return null;
  return RT_F_LOG10 * Math.log10(num / den);
}

function expectedConcentrationShift(z = 1, fold = 4) {
  return (RT_F_LOG10 / Math.abs(z)) * Math.log10(fold);
}

const issues = [];
const TOL_MV = 6;

for (const q of questions) {
  const stem = q.question || "";
  const correctOpt = q.options?.[q.correct];
  if (!correctOpt) continue;

  if (/extracellular Na(?:\+|\u207a)? is doubled|Na(?:\+|\u207a)? out.*doubled|doubled.*extracellular Na/i.test(stem)) {
    if (/less positive|toward 0/i.test(correctOpt)) {
      issues.push({ type: "Na_doubled_direction", stem: stem.slice(0, 120), keyed: correctOpt });
    }
  }

  if (/fourfold.*extracellular K|extracellular K.*fourfold|raised fourfold while intracellular K/i.test(stem)) {
    const exp = expectedConcentrationShift(1, 4);
    const keyed = parseOptionMv(correctOpt);
    if (keyed != null && Math.abs(Math.abs(keyed) - exp) > 4 && /mV/.test(correctOpt)) {
      issues.push({ type: "fourfold_K_EK", stem: stem.slice(0, 100), keyed, expected: Math.round(exp * 10) / 10 });
    }
  }

  if (/fourfold.*external Ca|fourfold increase in external Ca|extracellular Ca.*fourfold/i.test(stem)) {
    const exp = expectedConcentrationShift(2, 4);
    const keyed = parseOptionMv(correctOpt);
    if (keyed != null && Math.abs(Math.abs(keyed) - exp) > 4 && /mV/.test(correctOpt)) {
      issues.push({ type: "fourfold_Ca_ECa", stem: stem.slice(0, 100), keyed, expected: Math.round(exp * 10) / 10 });
    }
  }

  if (/extracellular Na(?:\+|\u207a)? is doubled|Na(?:\+|\u207a)? out.*doubled while intracellular Na/i.test(stem)) {
    const exp = expectedConcentrationShift(1, 2);
    const keyed = parseOptionMv(correctOpt);
    if (keyed != null && /more positive|less positive/i.test(correctOpt)) {
      const wantsMore = /more positive/i.test(correctOpt);
      if (!wantsMore && Math.abs(keyed - exp) < 8) {
        issues.push({ type: "Na_doubled_shift", stem: stem.slice(0, 100), keyed, expected: Math.round(exp * 10) / 10 });
      }
    }
  }

  if (/intracellular Ca.*buffering lowers free Ca|E_Ca becomes more negative/i.test(stem + correctOpt)) {
    if (/more negative/i.test(correctOpt) && /E_Ca/i.test(stem + correctOpt)) {
      issues.push({ type: "Ca_buffer_direction", stem: stem.slice(0, 100), note: "E_Ca should become more positive when [Ca]in falls" });
    }
  }

  const conc = parseConcentrations(stem);

  if (conc.K && /E_K is approximately|E_K ≈|equilibrium potential for K|estimate E_K/i.test(stem)) {
    const e = nernstLog10Mv(1, conc.K.out, conc.K.in);
    const keyed = parseOptionMv(correctOpt);
    if (e != null && keyed != null && Math.abs(keyed - e) > TOL_MV) {
      issues.push({ type: "nernst_K", stem: stem.slice(0, 100), keyed, expected: Math.round(e * 10) / 10 });
    }
  }

  if (conc.Na && /E_Na is approximately|E_Na ≈|equilibrium potential for Na/i.test(stem)) {
    const e = nernstLog10Mv(1, conc.Na.out, conc.Na.in);
    const keyed = parseOptionMv(correctOpt);
    if (e != null && keyed != null && Math.abs(keyed - e) > TOL_MV) {
      issues.push({ type: "nernst_Na", stem: stem.slice(0, 100), keyed, expected: Math.round(e * 10) / 10 });
    }
  }

  if (conc.Cl && /E_Cl is approximately|E_Cl ≈/i.test(stem)) {
    const e = nernstLog10Mv(-1, conc.Cl.out, conc.Cl.in);
    const keyed = parseOptionMv(correctOpt);
    if (e != null && keyed != null && Math.abs(keyed - e) > TOL_MV) {
      issues.push({ type: "nernst_Cl", stem: stem.slice(0, 100), keyed, expected: Math.round(e * 10) / 10 });
    }
  }

  const pr = parsePermRatio(stem);
  if (pr && conc.K && conc.Na && /resting V_m|estimate resting|Goldman|V_m if P/i.test(stem)) {
    const vm = goldmanVmMv(conc, pr.pK, pr.pNa);
    const keyed = parseOptionMv(correctOpt);
    if (vm != null && keyed != null && Math.abs(keyed - vm) > TOL_MV + 4) {
      issues.push({ type: "goldman_vm", stem: stem.slice(0, 100), keyed, expected: Math.round(vm * 10) / 10 });
    }
  }
}

console.log(JSON.stringify({ questionCount: questions.length, issueCount: issues.length, issues }, null, 2));
process.exit(issues.length ? 1 : 0);
