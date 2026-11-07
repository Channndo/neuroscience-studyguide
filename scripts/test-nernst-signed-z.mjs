#!/usr/bin/env node
/** Reference Nernst/GHK tests — signed ionic valence (anion Cl⁻). */
const RT_F_LOG10 = 61.54;

function nernstMv(out, inn, z) {
  if (!out || !inn || out <= 0 || inn <= 0 || !z) return null;
  return (RT_F_LOG10 / z) * Math.log10(out / inn);
}

function nernstAbsWrong(out, inn, z) {
  return (RT_F_LOG10 / Math.abs(z)) * Math.log10(out / inn);
}

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed++;
  }
}

function near(a, b, tol = 1.2) {
  return Math.abs(a - b) <= tol;
}

const k = nernstMv(4, 140, 1);
assert(near(k, -96), `K+ ~ -96 mV (got ${k})`);

const na = nernstMv(145, 15, 1);
assert(near(na, 61), `Na+ ~ +61 mV (got ${na})`);

const cl = nernstMv(110, 10, -1);
assert(cl < 0, `Cl- must be negative with z=-1 (got ${cl})`);
assert(near(cl, -64.1), `Cl- reference [110]/[10] mM (got ${cl})`);
assert(nernstAbsWrong(110, 10, -1) > 0, "Math.abs(z) must not be used for anions (wrong sign)");
assert(Math.sign(nernstMv(110, 10, -1)) !== Math.sign(nernstAbsWrong(110, 10, -1)), "signed vs abs(z) differ for Cl-");

if (failed) process.exit(1);
console.log("signed Nernst reference tests: OK");
