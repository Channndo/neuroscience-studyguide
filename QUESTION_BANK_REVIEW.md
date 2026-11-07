# Question Bank Review

**Status:** Phase 1 in progress on `qa/comprehensive-remediation`

- `PROCTORED_SATA_POOL`: keys corrected 0–49 (batch 2025-11-07)
- `PROCTORED_MOCK_EXAM_POOL`: EPSP subthreshold explanation fixed
- `PART1_EXPANSION_POOL`: Na⁺/Cl⁻/Ca²⁺ Nernst items fixed + `reviewStatus: verified`
- `PINNACLE_MEGA_POOL`: removed `under standard whole-cell recording conditions.` junk options (21)
- Scored draws exclude `reviewStatus: "needs-review"` (timed mock, finals, pinnacle, review10, formula exam)  
**Reviewer workflow:** Independent verification per statement (SATA) and per MCQ key; `reviewStatus` + `sourceReferences` on migration.

## Scope (deployed sources)

All pools listed in `QA_BASELINE.md` §2–3.

## SATA audit queue (`PROCTORED_SATA_POOL`)

Standalone pool: 50 items (`questions-proctored-mock.js`).

Remediation prompt indices 0–11 and 38–49 are **confirmed structurally defective** at baseline (see `QA_BASELINE.md` §6.1). Indices 12–37 require full statement-by-statement review in Phase 1.

## MCQ audit queue

- `PROCTORED_MOCK_EXAM_POOL` (50 items) — full key review
- Inline `PART1`–`PART3` (45 items)
- Scored exam draws: finals, pinnacle, mixed review (via deduped mega pools)

## Excluded until reviewed

*(None formally tagged yet — Phase 1 will mark `reviewStatus: "needs-review"` and gate draws.)*
