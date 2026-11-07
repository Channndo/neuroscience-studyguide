# Question Authoring Standard (MCB80x)

## Required fields (extended; backward compatible)

| Field | Required for scored | Notes |
|-------|--------------------|-------|
| `id` / `canonicalId` | Yes | Stable across edits |
| `course` or `module` | Yes | Maps to MCB80.1x/2x/3x |
| `topic` | Yes | Until `objective` verified |
| `lesson` | Scored | Official lesson slug when known |
| `objective` | Scored | Verbatim from course materials |
| `reviewStatus` | Scored | `verified` for exams |
| `pipelineStage` | Internal | See `mcb80x-pipeline.js` |
| `explanation` | Yes | Mechanism, not circular |
| `wrongExplanations[]` | MCQ strongly recommended | Teaches misconceptions |

## 100-point rubric

See `scripts/quality-rubric.mjs`. Thresholds:

- **95–100:** Exam candidate after human sign-off
- **90–94:** Scored practice
- **80–89:** Revision
- **< 80:** Quarantine
- **Critical defect:** Auto-reject

## Distractor rules

Reflect realistic errors (gradient vs driving force, EPSP vs IPSP, etc.). No joke sensory-system fillers on unrelated stems.

## Scientific notation

Use `applyNeuroFormatting` rules — preserve Na⁺/K⁺/slashes for prose (ON-center/OFF-surround, pain/temp).

## Pipeline stages

`draft` → `automated_validation` → `needs_curriculum` → `needs_scientific` → `approved_practice` → `approved_exam` → `retired`

Never auto-promote to `approved_exam`.
