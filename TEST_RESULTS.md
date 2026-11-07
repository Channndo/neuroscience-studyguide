# Test Results

## Phase 0 baseline — 2025-11-07

Environment: local, branch `qa/comprehensive-remediation`, Node (system).

| Test | Command | Result |
|------|---------|--------|
| Question validator | `node scripts/validate-question-banks.mjs` | **FAIL** (exit 1) — longest-correct thresholds; absolutist wrong-option warnings |
| Nernst/Goldman spot check | `node scripts/verify-nernst-goldman.mjs` | **PASS** (exit 0) — 854 items from `_extract_bank_questions.mjs` only |
| Option shuffle bias | `node scripts/test-option-shuffle.mjs` | **PASS** (exit 0) |
| Audit sample | `node scripts/audit-questions.mjs` | **PASS** (exit 0) — limited extractor scope |

## Not yet run

- Full SATA statement audit (manual + script)
- Timer resume integration test (Phase 2)
- Deploy workflow QA gate (Phase 4)
- Cloud sync e2e (Phase 3)
