# Question production scripts (audit inventory)

| Script | Purpose | Risk |
|--------|---------|------|
| `_build_bank.py` | Core bank generation | Template duplication |
| `_generate_expansion.py` | `questions-expansion.js` | Volume without objectives |
| `_generate_exam_paraphrases.py` | Stem paraphrases | Grammar/stem defects |
| `_generate_pinnacle_megabank.py` | Elite tier pool | Supplemental scope |
| `_generate_proctored_exam_pool.py` | Mock exam items | SATA keys |
| `scripts/polish-question-copy.mjs` | Batch stem rewrite | **Deprecated for blind runs** |
| `question-copy-polish.js` | Runtime polish | Conservative mode only |
| `scripts/dedupe-*.mjs` | Dedup stems | May drop intentional variants |
| `scripts/enrich-*.mjs` | Wrong explanations | Boilerplate risk |

**Policy:** No batch rewrite without inventory diff and `validate-question-pipeline` pass.
