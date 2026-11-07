# MCB80X Curriculum Map

**Authority:** [MCB80x lessons](https://www.mcb80x.org/lessons) (site unreachable at audit time — verify manually)

## Course alignment (application modules)

| App module | HarvardX course | Primary domains in this repo |
|------------|-----------------|----------------------------|
| `part1` | MCB80.1x — Electrical Properties of the Neuron | Resting potential, Nernst/Goldman, AP, cable, clamp |
| `part2` | MCB80.2x — Neurons and Networks | Synapses, receptors, plasticity, circuits |
| `part3` | MCB80.3x — The Brain | Sensory systems, neuroanatomy, motor, cognition |

## Question distribution (inventoried)

```json
{
  "MCB80.1x": 265,
  "MCB80.2x": 267,
  "MCB80.3x": 322,
  "MCB80.1x (supplemental pool)": 198,
  "MCB80.2x (supplemental pool)": 166,
  "MCB80.3x (supplemental pool)": 272
}
```

## Gaps (unresolved)

- **Lesson IDs:** Not present on most items — do not fabricate; mark `lesson: null` until mapped.
- **Learning objectives:** Only `topic` field (~102 unique); not equivalent to edX objectives.
- **Supplemental / elite tiers:** Pinnacle and advanced finals include stretch content — label `supplemental: true` when rehabilitating.
- **Clinical vignettes:** Appropriate at MCB80.3x level; flag cross-listed Part 1 items with clinical stems.

## Objective-weighting target (exam blueprint)

| Course | Comprehensive final share | Timed mock (50) share |
|--------|-------------------------:|---------------------:|
| MCB80.1x | ~34% | ~17 items |
| MCB80.2x | ~33% | ~17 items |
| MCB80.3x | ~33% | ~16 items |

Implementation: `drawQuizQuestionSet('proctoredMock')` uses part-stratified sampling.
