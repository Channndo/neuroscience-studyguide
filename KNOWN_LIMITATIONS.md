# Known Limitations

## Examination integrity

- All quizzes run in the browser. Users can inspect source, pause timers (until fixed), or modify local storage.
- “Proctored Mock Exam” is a **timed practice** assessment, not remote proctoring.

## Question coverage vs validation

- `_extract_bank_questions.mjs` covers a **subset** of deployed banks; `validate-question-banks.mjs` loads external JS pools but **not** inline `PART1`–`PART3`.
- `questions-variation-pools.js` is not deployed.

## Cloud backup

- Requires shared secret + email identification; **not** suitable as a secure account boundary.
- Client cannot cryptographically prove server persistence after `no-cors` POST.

## Scientific review

- Many items lack `reviewStatus` / bibliographic `sourceReferences`; baseline audit found SATA scoring errors in proctored pools.
- Written responses are self-graded.

## Biometric / OAuth

- WebAuthn (if enabled) is not server-attested in this static deployment.

See `QA_BASELINE.md` for the full defect register and phase plan.
