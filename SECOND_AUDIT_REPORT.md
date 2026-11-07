# Second Audit Report (MCB80x)

**Branch:** `qa/second-audit-remediation` (local; not pushed)  
**Baseline cited:** `229331922d2576f841e3d050c97465d06f65b437` (main)  
**Live site:** build **20251107l** — repository has advanced past that; **do not deploy build 20251107m** until polish regressions are cleared and QA gate passes.

## Deployment / CI (separate from content QA)

| Item | Finding |
|------|---------|
| GitHub Pages workflow | Run `42418805973` on main (commit "Polish MCQ copy…") **failed** — distinct from question-bank validation; inspect Actions before any redeploy. |
| QA gate | `deploy-pages.yml` now runs copy-polish, Nernst, `verify-nernst-goldman`, `validate-question-banks`, and defect `--gate` **before** artifact upload. |

## Copy polish (`question-copy-polish.js`)

| Defect | Remediation | Test |
|--------|-------------|------|
| Global `\s+\+\s+` → `"; "` mangled Na⁺/K⁺/Ca²⁺, math, voltages | Context-aware `polishListPlus`; ions and numeric `+` preserved | `scripts/test-question-copy-polish.mjs` |
| Generic wrappers baked into banks | `stripGenericWrappers` + `scripts/unmangle-question-stems.mjs` on 10 bank files | Audit: `genericWrappers: 0` |
| `"Which description best applies to If…"` | Malformed prefix repair + skip `is/are` template for `If/At/Given/…` subjects | Regression test + audit `malformedIf: 0` |
| SATA stems stripped of experimental context | Preserve stems ≥100 chars or with clamp/mM/lesion context | Regression SATA case |

## Question bank screening (1,490 extracted MCQs; inline PART arrays included)

| Screening metric | Count | Notes |
|------------------|-------|-------|
| Total external + inline objects | 1,490 | `_extract_bank_questions.mjs` expanded to all `questions*.js` (excl. undeployed variation pools) |
| Duplicate stem groups | 23 | Canonical IDs in CSV — intentional reuse requires manual review |
| Duplicate option sets | 119 | Many reflect templated calc items — not auto-deleted |
| Generic wrapper stems | **0** after unmangle | Was ~1,057 on build m |
| Malformed If-applies stems | **0** after unmangle | Was 12 |
| Defect rows in CSV | 415 | See `QUESTION_BANK_DEFECTS.csv` |

**Scientific validation:** Structural QA and Nernst recompute do **not** constitute independent scientific sign-off. Items without `reviewStatus: "verified"` remain excluded from high-stakes draws via `filterPoolForScoredDraw` (wired on prior branch).

## Numerical science

| Defect | Correction | Test |
|--------|------------|------|
| `Math.abs(z)` in Nernst | Signed valence in `validate-question-banks.mjs`, `verify-nernst-goldman.mjs` | `scripts/test-nernst-signed-z.mjs` (K⁺, Na⁺, Cl⁻) |
| GHK / membrane checks | Unchanged Goldman routine; extractor widened | `verify-nernst-goldman.mjs`: 1490 items, 0 issues |

## Exam persistence (`index.html`)

| Defect | Correction |
|--------|------------|
| Timer reset on reload | Session `version: 2` stores `deadlineTs`; `startQuizTimerFromDeadline` on resume |
| Expired exam | Resume path auto-`showResults()` when `deadlineTs <= now` |
| Mock exam copy | Description states shuffle from **fixed** 50-item pool (not unique generation) |

## Cloud backup

| Defect | Correction |
|--------|------------|
| Compromised `syncSecret` in repo | Removed from `mcb80x-cloud-config.js`; CI inject only |
| GAS hardcoded fallback secret | `checkSecret_` fails closed without `SYNC_SECRET` property |
| Row overwrite bug | `getRange(rowIdx, 1, rowIdx, n)` |
| `no-cors` false success | Removed; push errors surface |
| Auto sync without secret | `isConfigured()` requires `syncSecret` length ≥ 16 |

**Operator action required:** Rotate `SYNC_SECRET` in Apps Script properties and GitHub `SHEETS_SYNC_SECRET`; redeploy GAS web app.

## Remaining failures (not complete)

`node scripts/validate-question-banks.mjs` still **FAILs** (longest-correct heuristic, SATA key distribution). Full regression suite is **not green** for production deploy.

Undocumented scientific items: majority of bank lacks `reviewStatus: "verified"` — scored assessments must treat these as unverified until reviewed.
