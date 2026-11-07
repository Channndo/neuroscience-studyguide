# MCB80X Master Audit

**Phase:** 1 complete (inventory); Phases 2–6 in progress on branch `qa/master-overhaul`  
**Generated:** 2026-11-07T22:41:38.583Z

## Executive summary

| Metric | Value |
|--------|------:|
| Questions inventoried | 1490 |
| Avg heuristic quality score | 84.7 / 100 |
| Pipeline-quarantined (score < 80 or critical) | 170 |
| Approved for practice (verified + score ≥ 90) | 3 |
| Missing explanations | 0 |
| Unique topics (metadata) | 102 |
| Unique objective/topic keys | 185 |

## Root cause (why prior cleanups failed)

1. **Content factory without gates** — Python/`mjs` generators and copy-polish scripts modified stems without curriculum IDs or scientific sign-off.
2. **No canonical question IDs** — duplicates and near-duplicates across `questions-*.js` files.
3. **Validation ≠ science** — structural scripts (longest-option, SATA distribution) caught symptoms, not key/explanation correctness.
4. **Scored draws used unreviewed pools** — only partial `reviewStatus` filtering on some quizzes.
5. **Metadata drift** — `topic` labels often accurate; `lesson` / `objective` / `source` largely absent.

## Repository components audited

| Area | Files / notes |
|------|----------------|
| Question banks | 12 `questions-*.js` + inline PART1–3 in `index.html` |
| Generation | `_build_bank.py`, `_generate_*.py`, `_expansion_variety.py` |
| Rewriters | `question-copy-polish.js`, `scripts/polish-question-copy.mjs`, dedupe/enrich scripts |
| Assessment | `index.html` quiz engine, timer v2, proctored pool |
| Analytics | `mcb80x_analytics` localStorage (module/topic stats) |
| QC tests | `scripts/validate-question-banks.mjs`, `verify-nernst-goldman.mjs`, new inventory |

## Highest-risk defects (counts)

```json
{
  "missing_wrong_explanations": 45,
  "missing_objective_mapping": 1490,
  "missing_source": 1490,
  "short_stem": 23,
  "duplicate_stem": 49,
  "near_duplicate_stem": 88,
  "short_explanation": 277,
  "filler_distractors": 13,
  "duplicate_options": 1
}
```

## Resolution status

| Workstream | Status |
|------------|--------|
| Phase 1 inventory + CSV | **Done** — `data/question-inventory.json`, `QUESTION_BANK_DEFECTS.csv` |
| Phase 2 schema + pipeline | **Started** — `mcb80x-pipeline.js`, rubric, `validate-question-pipeline.mjs` |
| Phase 3 bank rehabilitation | **Not started** (per-question human/scientific review required) |
| Phase 4 exam blueprint + reports | **Partial** — balanced mock draw, results breakdown |
| Phase 5 adaptive mastery | **Partial** — objective-level stats extension |
| Phase 6 release | **Blocked** — structural validator still fails |

## Official curriculum fetch

`https://www.mcb80x.org/lessons` returned HTTP 500 during audit — lesson IDs must be filled manually from edX when available (see `MCB80X_CURRICULUM_MAP.md`).
