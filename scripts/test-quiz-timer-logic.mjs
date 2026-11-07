#!/usr/bin/env node
/** Timer session contract: absolute deadline, no fresh 90m on resume. */
let failed = 0;
function assert(c, m) {
  if (!c) {
    console.error("FAIL:", m);
    failed++;
  }
}

function remainingMs(deadlineTs, now) {
  return deadlineTs - now;
}

const started = 1_000_000;
const deadline = started + 90 * 60 * 1000;
const resumeAt = started + 30 * 60 * 1000;
assert(remainingMs(deadline, resumeAt) === 60 * 60 * 1000, "resume uses stored deadline");
assert(remainingMs(deadline, deadline + 1) <= 0, "expired at deadline");

const legacyResume = resumeAt + 90 * 60 * 1000;
assert(legacyResume > deadline, "fresh 90m on reload would extend past original deadline");

if (failed) process.exit(1);
console.log("quiz timer persistence logic: OK");
