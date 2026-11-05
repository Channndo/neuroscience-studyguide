#!/usr/bin/env python3
"""Replace placeholder lesion vignettes and fix LESION[3]/[6] in questions-proctored-mock.js."""
from pathlib import Path
import subprocess
import re

ROOT = Path(__file__).parent
MOCK = ROOT / "questions-proctored-mock.js"
text = MOCK.read_text(encoding="utf-8")

# Fix LESION[3] and [6]
text = text.replace(
    "question: \"Left lateral corticospinal tract in medulla — expected deficit?\"",
    "question: \"Left medullary pyramid (corticospinal fibers before decussation). Most likely deficit:\"",
)
text = text.replace(
    "question: \"Right middle cerebral artery stroke (dominant hemisphere) — expected deficit?\"",
    "question: \"Right middle cerebral artery stroke (non-dominant hemisphere). Most likely deficit:\"",
)
text = text.replace(
    "Contralateral face/arm weakness; language deficit if dominant",
    "Contralateral (left) face/arm weakness; spatial neglect possible; aphasia unlikely",
)
text = text.replace(
    "explanation: \"Left hemiparesis and aphasia if dominant\"",
    "explanation: \"Right MCA supplies left body motor cortex; non-dominant right hemisphere → left hemiparesis without classic aphasia.\"",
    1,
)

# Remove placeholder vignettes block
start = text.index('    question: "Clinical vignette 1:')
end = text.index("const PROCTORED_CIRCUIT_POOL")
new_cases = subprocess.check_output(["python3", str(ROOT / "_generate_lesion_cases.py")], text=True)
text = text[:start] + new_cases + "\n" + text[end:]

# Clean " — expected deficit?" on remaining lesion questions in pool header section
lesion_start = text.index("const PROCTORED_LESION_POOL")
circuit_start = text.index("const PROCTORED_CIRCUIT_POOL")
head = text[lesion_start:circuit_start]
head = head.replace(" — expected deficit?", ".")
text = text[:lesion_start] + head + text[circuit_start:]

MOCK.write_text(text, encoding="utf-8")
count = len(re.findall(r'question:', text[lesion_start:circuit_start]))
print(f"Patched lesion pool; ~{count} lesion questions")
