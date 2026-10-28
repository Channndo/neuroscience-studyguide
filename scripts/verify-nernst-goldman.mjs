#!/usr/bin/env node
/**
 * Recompute Nernst/Goldman numeric answers from concentrations in MCQ stems and flag mismatches.
 */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(__dirname);
const raw = execSync("node _extract_bank_questions.mjs", { cwd: root, encoding: "utf8" });
const questions = JSON.parse(raw);

const RT_F_37 = 61.54; // mV for monovalent at ~37°C

function nernstMv(z, out, inn) {
  if (!out || !inn || out <= 0 || inn <= 0) return null;
  return (RT_F_37 / z) * Math.log10(out / inn);
}

function parseNumberMagnitude(text) {
  const m = text.match(/(\d+(?:\.\d+)?)\s*(?:mM|mM|mM)/i);
  return m ? parseFloat(m[1]) : null;
}

function extractConcentrations(question) {
  const outK = question.match(/extracellular K[^0-9]*(\d+(?:\.\d+)?)\s*mM/i);
  const inK = question.match(/intracellular K[^0-9]*(\d+(?:\.\d+)?)\s*mM/i);
  const pairs = {};
  if (outK && inK) pairs.K = { out: parseFloat(outK[1]), in: parseFloat(inK[1]) };
  return pairs;
}

function parseOptionMv(opt) {
  const s = String(opt).replace(/\u2212/g, "-");
  const m = s.match(/([+-]?\s*~?\s*(\d+(?:\.\d+)?))\s*mV/i);
  if (!m) return null;
  const sign = m[1].includes("-") ? -1 : 1;
  return sign * parseFloat(m[2].replace(/\s/g, ""));
}

function expectedFourfoldShift(z = 1) {
  return (RT_F_37 / z) * Math.log10(4);
}

const issues = [];

for (const q of questions) {
  const stem = q.question || "";
  const correctOpt = q.options?.[q.correct];
  if (!correctOpt) continue;

  if (/fourfold.*extracellular K|extracellular K.*fourfold|raised fourfold while intracellular K/i.test(stem)) {
    const exp = expectedFourfoldShift(1);
    const keyed = parseOptionMv(correctOpt);
    if (keyed != null && Math.abs(keyed - exp) > 4) {
      issues.push({
        type: "fourfold_K_EK",
        stem: stem.slice(0, 100),
        keyed,
        expected: Math.round(exp * 10) / 10
      });
    }
  }

  if (/fourfold.*external Ca|fourfold increase in external Ca/i.test(stem)) {
    const exp = expectedFourfoldShift(2);
    const keyed = parseOptionMv(correctOpt);
    if (keyed != null && Math.abs(keyed - exp) > 4) {
      issues.push({
        type: "fourfold_Ca_ECa",
        stem: stem.slice(0, 100),
        keyed,
        expected: Math.round(exp * 10) / 10
      });
    }
  }

  if (/intracellular Ca.*buffering lowers free Ca|E_Ca becomes more negative/i.test(stem + correctOpt)) {
    if (/more negative/i.test(correctOpt)) {
      issues.push({ type: "Ca_buffer_direction", stem: stem.slice(0, 100), note: "E_Ca should become more positive when [Ca]in falls" });
    }
  }

  if (/Holding V_m at 0 mV.*rest.*K|net inward current if rest was dominated by K/i.test(stem + correctOpt)) {
    if (/inward/i.test(correctOpt)) {
      issues.push({ type: "clamp_0_K_leak", stem: stem.slice(0, 100), note: "expect net outward K+ current" });
    }
  }

  const conc = extractConcentrations(stem);
  if (conc.K && /E_K is approximately|E_K ≈|equilibrium potential for K/i.test(stem)) {
    const e = nernstMv(1, conc.K.out, conc.K.in);
    const keyed = parseOptionMv(correctOpt);
    if (e != null && keyed != null && Math.abs(keyed - e) > 8) {
      issues.push({ type: "nernst_K_numeric", stem: stem.slice(0, 100), keyed, expected: Math.round(e) });
    }
  }
}

console.log(JSON.stringify({ issueCount: issues.length, issues }, null, 2));
process.exit(issues.length ? 1 : 0);
