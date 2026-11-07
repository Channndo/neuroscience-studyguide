# QA Baseline — MCB80x Neuroscience Study Guide

**Remediation branch:** `qa/comprehensive-remediation`  
**Baseline commit (parent):** `229331922d2576f841e3d050c97465d06f65b437`  
**Recorded:** 2025-11-07 (America/New_York)  
**Live site (at baseline):** https://channndo.github.io/neuroscience-studyguide/  
**Bank build stamp (footer):** `20251107m`

This document satisfies **Phase 0** of the comprehensive engineering remediation. Large-scale fixes are **not** started until this baseline is accepted; work proceeds on `qa/comprehensive-remediation` only (no merge/push without explicit approval).

---

## 1. Architecture overview

| Layer | Role |
|--------|------|
| `index.html` | Single-page app: UI, quiz engine, progress, timer, inline core question arrays `PART1`–`PART3`, pool merging, scoring, flashcards |
| `questions-*.js` | External question pools (loaded via `<script>` tags) |
| `explanation-feedback.js` | Rich wrong/correct explanation resolver |
| `question-copy-polish.js` | Runtime stem/option normalization (`QuestionCopyPolish`) |
| `brain-anatomy-diagrams.js` + `questions-brain-anatomy.js` | Anatomy lab diagrams and items |
| `mcb80x-cloud-config.js` | Cloud backup endpoints and sync secret (client-visible) |
| `sheets-sync.js` | Encrypt/merge/push/pull progress bundles |
| `oauth-client.js`, `password-auth.js`, `biometric-auth.js`, `auth-biometric-ui.js` | Sign-in, OAuth, local/WebAuthn unlock |
| `google-apps-script/MCB80xSheetSync.gs` | Apps Script web app for encrypted row storage |
| `.github/workflows/deploy-pages.yml` | GitHub Pages deploy (optional secret injection) |
| `scripts/*.mjs` | QA, validation, bank maintenance |
| `_generate_*.py`, `_patch_*.py` | Historical generators for megabank / proctored / expansion content |

**Runtime model:** Static GitHub Pages; all scoring and timing are client-side (`localStorage`). No server-side proctoring.

---

## 2. File inventory (deployed vs repo-only)

### 2.1 Loaded by `index.html` (production question + app paths)

| File | Purpose |
|------|---------|
| `question-copy-polish.js` | MCQ copy polish |
| `explanation-feedback.js` | Explanations |
| `questions-bank.js` | Variants + NEW_TIER1–4 |
| `questions-extra-pools.js` | PART*_EXTRA_POOL |
| `questions-fresh-pools.js` | PART*_FRESH_POOL* |
| `questions-expansion.js` | PART*_EXPANSION_POOL |
| `questions-exam-paraphrases.js` | PART*_EXAM_PARAPHRASE_POOL |
| `questions-written-final.js` | WRITTEN_EXAM_POOL |
| `questions-proctored-mock.js` | SATA, lesion, circuit, clamp, PROCTORED_MOCK_EXAM_POOL |
| `questions-formula-drills.js` | FORMULA_DRILL_POOL |
| `questions-pinnacle-megabank.js` | PINNACLE_MEGA_POOL |
| `brain-anatomy-diagrams.js` | Chart overlays |
| `questions-brain-anatomy.js` | BRAIN_ANATOMY_POOL |
| `index.html` | Inline `PART1`, `PART2`, `PART3` (15 MCQs each) |
| `mcb80x-cloud-config.js`, `sheets-sync.js`, auth scripts | Cloud + identity |

### 2.2 In repository but **not** deployed

| File | Notes |
|------|--------|
| `questions-variation-pools.js` | Referenced by maintenance scripts only; **not** in `index.html` |

### 2.3 Generators (not loaded at runtime)

`_build_bank.py`, `_generate_expansion.py`, `_generate_exam_paraphrases.py`, `_generate_pinnacle_megabank.py`, `_generate_proctored_exam_pool.py`, `_generate_sata_expansion.py`, `_generate_lesion_cases.py`, `_generate_circuit_clamp.py`, `_patch_*.py`, `_concept_pool_snippet.py`, `_expansion_variety.py`

### 2.4 Extractor coverage gap

`_extract_bank_questions.mjs` loads:

- Inline `PART1`–`PART3` from `index.html`
- `questions-bank.js` (variants + tiers only)
- Subset of `questions-fresh-pools.js`, `questions-expansion.js`, `questions-extra-pools.js`

It does **not** load: `questions-proctored-mock.js`, `questions-pinnacle-megabank.js`, `questions-formula-drills.js`, `questions-brain-anatomy.js`, `questions-written-final.js`, `questions-exam-paraphrases.js`, `NEW_TIER*` usage beyond bank file, or full `questions-bank.js` pools used only via `index.html` globals.

`scripts/validate-question-banks.mjs` loads **all** `questions*.js` via regex `^const ([A-Z_]*) =` but still **misses** inline `PART1`–`PART3`.

---

## 3. Question-bank inventory (array counts)

Counts from parsing `questions*.js` plus inline parts (2025-11-07).

| Source | Pool | Items | MCQ | SATA | Written |
|--------|------|------:|----:|-----:|--------:|
| `index.html` | PART1 | 15 | 15 | 0 | 0 |
| `index.html` | PART2 | 15 | 15 | 0 | 0 |
| `index.html` | PART3 | 15 | 15 | 0 | 0 |
| `questions-bank.js` | PART*_VARIANTS, NEW_TIER1–4 | 300 | 300 | 0 | 0 |
| `questions-extra-pools.js` | PART*_EXTRA_POOL | 141 | 141 | 0 | 0 |
| `questions-fresh-pools.js` | PART*_FRESH_* | 127 | 127 | 0 | 0 |
| `questions-expansion.js` | PART*_EXPANSION_* | 241 | 241 | 0 | 0 |
| `questions-exam-paraphrases.js` | PART*_EXAM_PARAPHRASE_* | 119 | 119 | 0 | 0 |
| `questions-formula-drills.js` | FORMULA_DRILL_POOL | 28 | 28 | 0 | 0 |
| `questions-pinnacle-megabank.js` | PINNACLE_MEGA_POOL | 300 | 300 | 0 | 0 |
| `questions-proctored-mock.js` | PROCTORED_SATA_POOL | 50 | 0 | 50 | 0 |
| `questions-proctored-mock.js` | PROCTORED_LESION_POOL | 65 | 65 | 0 | 0 |
| `questions-proctored-mock.js` | PROCTORED_CIRCUIT_POOL | 17 | 17 | 0 | 0 |
| `questions-proctored-mock.js` | PROCTORED_CLAMP_TRACE_POOL | 7 | 7 | 0 | 0 |
| `questions-proctored-mock.js` | PROCTORED_MOCK_EXAM_POOL | 50 | 37 | 13 | 0 |
| `questions-brain-anatomy.js` | BRAIN_ANATOMY_POOL | (see file) | — | — | — |
| `questions-written-final.js` | WRITTEN_EXAM_POOL | 30 | 0 | 0 | 30 |
| **Not deployed** | `questions-variation-pools.js` | 42 | 42 | 0 | 0 |

**Deduplicated runtime pools** (see `CORE_BANK`, `buildExamReviewPools`, `buildPinnacleMegaPool` in `index.html`) merge the above by question stem text.

Approximate **unique** stems in validator scope: validator reports per-pool skeleton counts; `scripts/audit-questions.mjs` samples **854** MCQs from extractor scope only.

---

## 4. Quiz → pool mapping

| Quiz ID | Section | Pool / draw logic |
|---------|---------|-------------------|
| `part1`–`part3` | Core | `buildModulePools` → PART + variants + extra + fresh |
| `brainAnatomy*` | Anatomy | `BRAIN_ANATOMY_POOL` filtered by `BRAIN_ANATOMY_DRAW` |
| `mixedReview20`–`50` | Mixed | Stratified part1/2/3 from `buildExamReviewPools` |
| `review10P1`–`P3`, `review10Mix` | Review | Exam-style sample from module pools + paraphrases |
| `writtenReview10`, finals written portion | Written | `WRITTEN_EXAM_POOL` |
| `formulaLabLearn` / `formulaLabExam` | Formula | `FORMULA_DRILL_POOL` |
| `finalReview` | Final | Large sample from `buildExamReviewPools` |
| `proctoredMock` | Final | **`shuffle(PROCTORED_MOCK_EXAM_POOL).slice(0, 50)`** — same 50 items, order only |
| `final`, `final100`–`final200` | Final / Advanced | `buildExamReviewPools` + written attach |
| `pinnacle300`–`pinnacle1000` | Pinnacle | `PINNACLE_MEGA_POOL` + exam + proctored deduped mega pool |
| `dailyPop` | Daily | `CORE_BANK` or full exam pool, date-seeded |

**Product copy mismatch:** `proctoredMock.description` claims “unique draw each attempt”; implementation is shuffle-only on a fixed 50-question pool.

---

## 5. Validation scripts (baseline behavior)

| Script | Command | Baseline result |
|--------|---------|-----------------|
| `scripts/validate-question-banks.mjs` | `node scripts/validate-question-banks.mjs` | **FAIL** — longest-correct rate >40% on multiple pools; absolutist wrong-option warnings; does not exit clean on `main` |
| `scripts/verify-nernst-goldman.mjs` | `node scripts/verify-nernst-goldman.mjs` | **PASS** on extractor subset (854 Q, 0 issues) — scope limited |
| `scripts/test-option-shuffle.mjs` | `node scripts/test-option-shuffle.mjs` | Runs histogram bias check for 4 quiz modes (~25% max position rate) |
| `scripts/audit-questions.mjs` | `node scripts/audit-questions.mjs` | 1 clarity flag sample; 1 duplicate stem in extractor set |
| `scripts/quality-pass.mjs` | (not run in baseline) | Orchestrates multiple fixers |
| `scripts/polish-question-copy.mjs` | batch stem polish | Already applied on `main` before branch |

**Nernst implementation note:** `verify-nernst-goldman.mjs` and `validate-question-banks.mjs` use `Math.abs(z)` in the Nernst slope — remediation spec requires signed `z` for anions (Phase 4).

---

## 6. Known defects (confirmed at baseline)

Severity: **Critical** / **High** / **Medium** / **Low**

### 6.1 Question bank — SATA (`PROCTORED_SATA_POOL`)

| Sev | Issue | Evidence |
|-----|--------|----------|
| **Critical** | Questions **38–49** (0-based) keyed as `correctIndices: [0,1,2,3]` — all four statements marked correct, including known-false statements listed in the remediation prompt | `questions-proctored-mock.js` — e.g. index 38 option 2 “All seizures require visible tonic–clonic movements” |
| **High** | Questions **0–11** (and others) have **under-inclusive** keys (e.g. index 0 key `[0]` only; statements 2–3 may also be true per prompt) | Live dump 2025-11-07 on branch |
| **High** | SATA also used inside `PROCTORED_MOCK_EXAM_POOL` (13 items) — requires same audit | Pool size 50: 37 MCQ + 13 SATA |

### 6.2 Timed exam engine (`index.html`)

| Sev | Issue | Evidence |
|-----|--------|----------|
| **High** | Timer deadline **not persisted** on Save & Exit / resume | `saveQuizSession()` stores `quizId`, `questions`, `answers`, `currentIndex`, `ts` — no `deadlineTs`; `resumeQuizSession()` does not call `startQuizTimer()`; `startQuizTimer()` always sets `quizDeadlineTs = Date.now() + minutes * 60 * 1000` |
| **Medium** | UI title “Proctored Mock Exam” — no actual proctoring | `QUIZZES.proctoredMock.title` |

### 6.3 Mock exam content

| Sev | Issue | Evidence |
|-----|--------|----------|
| **High** | EPSP/threshold explanation inverted | `questions-proctored-mock.js` ~4418–4422: peak −60 mV vs threshold −50 mV; explanation says “still above threshold” (should be **below** / subthreshold) |
| **Medium** | Fixed 50-item pool vs “unique draw” marketing | `drawQuestionsForQuiz` proctored branch |

### 6.4 Expansion / Pinnacle (per remediation brief — to verify in Phase 1)

| Sev | Issue | Status |
|-----|--------|--------|
| **High** | `PART1_EXPANSION_POOL` Na⁺ doubling / duplicate distractors / Ca buffering | **Not re-verified in this baseline pass** — scheduled Phase 1 |
| **Medium** | `PINNACLE_MEGA_POOL` indices 244, 270, 284, 293, 298 placeholder distractors | **Scheduled Phase 1** |

### 6.5 Security & cloud sync

| Sev | Issue | Evidence |
|-----|--------|----------|
| **Critical** | Shared `syncSecret` in public `mcb80x-cloud-config.js` | Line 8 in repo; duplicated in Apps Script `checkSecret_` fallback |
| **Critical** | GitHub Actions can inject `secrets.SHEETS_SYNC_SECRET` into **published** `mcb80x-cloud-config.js` | `.github/workflows/deploy-pages.yml` |
| **High** | Apps Script `getRange(rowIdx, 1, rowIdx, HEADERS.length)` — wrong row height | `MCB80xSheetSync.gs` line 80 |
| **High** | Auth: client-supplied email + shared secret; no server-verified OAuth to backup row | `sheets-sync.js` + GAS `doGet`/`doPost` |
| **High** | WebAuthn challenge client-generated (no server verify) | `biometric-auth.js` — Phase 3 review |
| **Medium** | Deploy workflow **does not run** `validate-question-banks.mjs` before publish | `deploy-pages.yml` |

### 6.6 Metadata model

Questions today use legacy fields: `topic`, `module`, `question`, `options`, `correct` | `correctIndices`, `explanation`, `wrongExplanations`, optional `type`, `difficulty`, `calcType`, diagram fields. **No** `id`, `reviewStatus`, `sourceReferences`, or `cognitiveLevel` — Phase 1G migration planned.

---

## 7. Baseline test log

```
git checkout -b qa/comprehensive-remediation   # from 229331922d2576f841e3d050c97465d06f65b437
git status                                      # clean working tree

node scripts/validate-question-banks.mjs        # exit 1 (longest-correct + absolutist)
node scripts/verify-nernst-goldman.mjs        # exit 0, 854 questions in extractor scope
node scripts/test-option-shuffle.mjs          # exit 0
node scripts/audit-questions.mjs              # exit 0, 1 clarity sample
```

---

## 8. Remediation phase plan (execution order)

| Phase | Focus | Baseline gate |
|-------|--------|----------------|
| **0** | Branch, inventory, this document | **Current** |
| **1** | Full scientific audit, SATA keys, expansion/pinnacle fixes, metadata | After Phase 0 approval |
| **2** | Timer persist, mock sampling/label, scoring tests | After critical bank fixes for scored exams |
| **3** | Remove public secrets, GAS fix, sync protocol, encryption | Parallel where possible; block “secure backup” claims until done |
| **4** | Unified loader, strict validation, signed Nernst, deploy gate | Before merging to `main` |
| **5** | Cognitive levels, feedback, adaptive (incremental) | After accuracy gate |
| **6** | UX/disclaimer/accessibility | Surgical only |

---

## 9. Required deliverables — status

| Document | Phase 0 status |
|----------|----------------|
| `QA_BASELINE.md` | **Complete** (this file) |
| `QA_AUDIT_REPORT.md` | Scaffold — Phase 1 |
| `QUESTION_BANK_REVIEW.md` | Scaffold — Phase 1 |
| `SECURITY_AUDIT.md` | Scaffold — Phase 3 |
| `REMEDIATION_CHANGELOG.md` | Started — records baseline only |
| `TEST_RESULTS.md` | Baseline commands in §7 |
| `KNOWN_LIMITATIONS.md` | Client-side exam limits + extractor scope |

---

## 10. Working rules (from remediation spec)

- No blind regeneration of question banks.
- Uncertain items → `reviewStatus: "needs-review"` and exclude from scored draws until verified.
- **No push/merge** without explicit approval.
- Small, reviewable commits per phase on `qa/comprehensive-remediation`.
