#!/usr/bin/env python3
from pathlib import Path
import subprocess

ROOT = Path(__file__).parent
MOCK = ROOT / "questions-proctored-mock.js"
text = MOCK.read_text(encoding="utf-8")
new_block = subprocess.check_output(["python3", str(ROOT / "_generate_circuit_clamp.py")], text=True)
start = text.index("const PROCTORED_CIRCUIT_POOL")
end = text.index("const PROCTORED_MOCK_EXAM_POOL")
text = text[:start] + new_block + "\n\n" + text[end:]
MOCK.write_text(text, encoding="utf-8")
print("Replaced circuit and clamp pools")
