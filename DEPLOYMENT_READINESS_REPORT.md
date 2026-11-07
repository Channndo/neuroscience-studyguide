# Deployment Readiness Report

| Gate | Status |
|------|--------|
| Copy-polish regression | PASS |
| Prose slash notation | PASS |
| Nernst reference | PASS |
| Structural bank QA | **FAIL** |
| Scientific review coverage | **FAIL** — majority `reviewStatus` unset |
| Cloud sync secret | Rotated out of repo; operator rotation pending |
| GitHub Pages | Do not deploy until approval + gates green |
| Live site | Build 20251107l (per prior audit) |

## Blockers

1. Bulk questions below quality threshold (170 quarantined by heuristic).
2. `validate-question-banks.mjs` failures.
3. Missing verified curriculum mappings for scored exams.
