# QA Audit Report

**Status:** Phase 0 — not started (awaiting Phase 1 scientific audit)  
**Branch:** `qa/comprehensive-remediation`  
**Baseline SHA:** `229331922d2576f841e3d050c97465d06f65b437`

This report will track every defect with: severity, file, question id/index, original behavior, corrected behavior, validation method, test result.

## Pre-registered critical findings (to verify in Phase 1)

| ID | Sev | File | Location | Summary |
|----|-----|------|----------|---------|
| Q-001 | Critical | `questions-proctored-mock.js` | `PROCTORED_SATA_POOL` indices 38–49 | `correctIndices: [0,1,2,3]` marks false statements as correct |
| Q-002 | High | `questions-proctored-mock.js` | `PROCTORED_SATA_POOL` indices 0–11 | Under-inclusive keys per remediation checklist |
| Q-003 | High | `questions-proctored-mock.js` | `PROCTORED_MOCK_EXAM_POOL` ~EPSP item | Explanation contradicts subthreshold math (−60 vs −50 mV) |
| Q-004 | High | `questions-expansion.js` | `PART1_EXPANSION_POOL` | Na⁺ doubling key / duplicate distractors (per spec) |
| Q-005 | Medium | `questions-pinnacle-megabank.js` | `PINNACLE_MEGA_POOL` 244, 270, 284, 293, 298 | Placeholder distractors |

## Engine & security (Phase 2–3)

See `QA_BASELINE.md` §6 and `SECURITY_AUDIT.md`.
