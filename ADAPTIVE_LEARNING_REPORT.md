# Adaptive Learning Report

## Implemented

| Feature | Location |
|---------|----------|
| Module/topic attempt stats | `getAnalytics()` in `index.html` |
| Objective-key stats (new) | `mcb80x-learning.js` + `recordQuizAttempt` |
| Weakness → flashcards | `saveWeaknessFlashcards` |
| Readiness score | Dashboard readiness tiers |
| Post-quiz remediation text | `renderResultsBreakdown()` |

## Not yet implemented

- Lesson-level mastery thresholds with spaced repetition per objective
- Alternate items per objective after misses (needs ID-stable objective map)
- Server-side analytics

## Mastery rule (documented)

Objective `mastery` = ≥3 attempts, ≥75% correct in rolling window — see `MCB80XLearning.estimateMastery`.
