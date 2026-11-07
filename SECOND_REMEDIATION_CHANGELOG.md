# Second Remediation Changelog

## `question-copy-polish.js`
- **Was:** Global `+` → `"; "` in options; aggressive SATA topic rewrite; generic scenario wrappers.
- **Now:** `polishListPlus` (clinical lists only); `stripGenericWrappers`; SATA context preservation; no `Using the values stated below…` unless stem has numeric/scenario cues.

## Question bank files (10× `questions-*.js`)
- **Was:** Baked-in generic wrappers and malformed `Which description best applies to If…`.
- **Now:** `scripts/unmangle-question-stems.mjs` applied; audit shows 0 generic / 0 malformed If stems.

## `_extract_bank_questions.mjs`
- **Was:** Core bank + limited pools (~854 items in narrow verify scope).
- **Now:** All deployed `questions*.js` pools + inline PART1–3 — **1,490** items with `canonicalId`.

## `scripts/verify-nernst-goldman.mjs` / `scripts/validate-question-banks.mjs`
- **Was:** `Math.abs(z)` Nernst slope.
- **Now:** Signed `z` (Cl⁻ negative); `scripts/test-nernst-signed-z.mjs`.

## `index.html`
- **Was:** Quiz session v1 without `deadlineTs`; resume did not restore timer; mock described as unique draw.
- **Now:** Session v2 + `startQuizTimerFromDeadline`; auto-submit on expired resume; honest mock pool copy.

## `mcb80x-cloud-config.js` / `sheets-sync.js` / `MCB80xSheetSync.gs`
- **Was:** Public sync secret; GAS default secret; `getRange(row,1,1,n)` overwrite; no-cors push success.
- **Now:** Empty local secret; fail-closed GAS; row-scoped setValues; verified push errors; sync requires secret length ≥ 16.

## `.github/workflows/deploy-pages.yml`
- **Was:** Deploy-only job.
- **Now:** `qa` job gates `deploy`; Pages failure on main run 42418805973 was **artifact metadata** error (not QA).

## New / updated QA scripts
- `scripts/test-question-copy-polish.mjs`
- `scripts/test-nernst-signed-z.mjs`
- `scripts/test-quiz-timer-logic.mjs`
- `scripts/audit-question-bank-defects.mjs` → `QUESTION_BANK_DEFECTS.csv`
- `scripts/unmangle-question-stems.mjs`
