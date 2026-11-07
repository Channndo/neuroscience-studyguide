# Assessment Engine Changelog

## 2026-11-07 — Phase 3 high-stakes vetting

- `scripts/build-verified-registry.mjs` → `mcb80x-verified-registry.js` (280+ stems)
- **Strict verified draw** for `proctoredMock` and `final` (`STRICT_VERIFIED_DRAW_QUIZ_IDS`)
- Mock exam pool: fixed Goldman stem, τ/Botulinum/place-field explanations; SATA explanation sync
- 49/50 mock exam items in verified registry after rebuild

## 2026-11-07 — Master overhaul (Phase 1–2 partial)

- `scripts/lib/inventory-core.mjs` — full question inventory + defects
- `scripts/quality-rubric.mjs` — automated 100-pt heuristic
- `scripts/validate-question-pipeline.mjs` — unified CI gate
- `mcb80x-pipeline.js` — pipeline stage constants
- `mcb80x-learning.js` — objective stats + remediation hints
- Proctored mock: part-balanced 50-item draw; title clarified (practice exam, not proctored)
- Results view: course/topic performance breakdown on exam quizzes
- Timer: session v2 absolute deadline (prior branch)
