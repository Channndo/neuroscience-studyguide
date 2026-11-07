# Question verification status

**Last full pass:** `node scripts/verify-full-bank.mjs` (+ `verify-remaining-questions.mjs` if needed)

## What “verified” means here

| Label | Meaning |
|-------|---------|
| `reviewStatus: "verified"` | Passed **automated MCB80x gate v1** (valid keys, no critical defects, explanation present, Nernst spot-checks clean, no accuracy-audit hits) |
| `scientificReview: "automated_mcb80x_gate_v1"` | **Not** Harvard/edX expert review — honest automated batch |

## Commands

```bash
node scripts/verify-full-bank.mjs      # audit + stamp + registry
node scripts/verify-remaining-questions.mjs  # tag any stragglers
node scripts/build-verified-registry.mjs
node scripts/run-scientific-audit.mjs  # accuracy stem blocklist
```

## Counts

Re-run:

```bash
rg -c 'reviewStatus: "verified"' questions-*.js index.html | awk -F: '{s+=$2} END {print s}'
```

Target deployed MCQ pool: **~1,490** items (all `questions-*.js` loaded in `index.html`).

## Scored draws

`proctoredMock` and `final` require `reviewStatus: "verified"`. With full-bank tagging, chapter quizzes and pinnacle pools use the same verified corpus at runtime via `mcb80x-verified-registry.js`.
