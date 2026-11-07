# Remediation Changelog

## Phase 0 — 2025-11-07

- Created branch `qa/comprehensive-remediation` from `229331922d2576f841e3d050c97465d06f65b437`.
- Added baseline documentation: `QA_BASELINE.md`, audit scaffolds, `SECURITY_AUDIT.md`, `KNOWN_LIMITATIONS.md`, `TEST_RESULTS.md`.
- **No product code changes** in Phase 0 (documentation and branch only).
- **Not pushed** to `origin` (per remediation approval gate).

## 2025-11-07 — notation / course copy (qa branch)

- `markMathFractions`: keep literal `/` for course phrases (`outside/inside`, `pain/temp`, etc.) instead of stacking them as fractions.
- `question-copy-polish.js`: stop expanding `pain/temp` slashes; use `;` between `+` list items only.
- Header aligned to **Fundamentals of Neuroscience**; part line uses `/` between MCB80x modules.
- Banks: restored `pain/temp` shorthand where batch polish had expanded it.

## Phase 1 batch 2 — 2025-11-07

- SATA `PROCTORED_SATA_POOL` indices 12–37: corrected keys + explanations
- Expansion Nernst defects (Na⁺ double, Cl⁻, Ca buffering); `reviewStatus: verified` on those items
- Pinnacle: replaced 21 placeholder whole-cell recording distractors
- `index.html`: `filterPoolForScoredDraw` for high-stakes quiz IDs

## Upcoming (not started)

- Phase 1: SATA key corrections, expansion/pinnacle fixes, metadata migration start.
- Phase 2: Timer persistence, timed mock naming/sampling.
- Phase 3: Secret removal, GAS/sheets-sync protocol.
- Phase 4: Unified loader, deploy gate, signed Nernst tests.
