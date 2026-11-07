# Scientific Validation Report

## Equations under test

| Equation | Implementation | Reference test |
|----------|----------------|----------------|
| Nernst | `verify-nernst-goldman.mjs`, `validate-question-banks.mjs` | `test-nernst-signed-z.mjs` (K⁺, Na⁺, Cl⁻) |
| Goldman-Hodgkin-Katz | `verify-nernst-goldman.mjs` | Parsed stems with P_K:P_Na |
| Signed valence | `z` not `Math.abs(z)` | Cl⁻ sign regression |

## Last run (embedded in deliverable generation)

| Check | Result |
|-------|--------|
| test-nernst-signed-z | PASS |
| verify-nernst-goldman | PASS (1490 items, 0 issues) |
| validate-question-banks | FAIL (heuristic longest-option / SATA) |

**Limitation:** Passing automation does not replace expert review of mechanisms and keys.
