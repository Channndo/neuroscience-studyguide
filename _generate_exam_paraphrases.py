#!/usr/bin/env python3
"""Build questions-exam-paraphrases.js — reworded stems for exams/reviews."""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "questions-exam-paraphrases.js"
EXTRACT = ROOT / "_extract_bank_questions.mjs"


def load_existing_stems() -> set[str]:
    stems: set[str] = set()
    for path in ROOT.glob("*.js"):
        if path.resolve() == OUT.resolve():
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for m in re.finditer(r'question:\s*"((?:\\.|[^"\\])*)"', text):
            stems.add(json.loads(f'"{m.group(1)}"'))
    html = (ROOT / "index.html").read_text(encoding="utf-8", errors="ignore")
    for m in re.finditer(r'question:\s*"((?:\\.|[^"\\])*)"', html):
        stems.add(json.loads(f'"{m.group(1)}"'))
    return stems


def paraphrase_stem(stem: str, salt: int) -> str | None:
    s = stem.strip()
    if len(s) < 20 or len(s) > 220:
        return None

    rules: list[tuple[int, callable]] = [
        (0, lambda t: t.replace(" best describes ", " most accurately describes ") if " best describes " in t else None),
        (1, lambda t: t.replace(" primarily ", " mainly ") if " primarily " in t else None),
        (2, lambda t: t.replace(" typically ", " usually ") if " typically " in t else None),
        (3, lambda t: t.replace(" is defined as ", " can be described as ") if " is defined as " in t else None),
        (4, lambda t: t.replace(" will ", " would be expected to ") if " will " in t else None),
        (5, lambda t: re.sub(r"^Which of the following ", "Which statement ", t) if t.startswith("Which of the following ") else None),
        (6, lambda t: re.sub(r"^What is the ", "Which option best identifies the ", t) if t.startswith("What is the ") else None),
        (7, lambda t: re.sub(r"^During the ", "In the phase associated with the ", t) if t.startswith("During the ") else None),
        (8, lambda t: re.sub(r"^If ", "Suppose that ", t, count=1) if t.startswith("If ") else None),
        (9, lambda t: t.replace(" most consistent with ", " best aligned with ") if " most consistent with " in t else None),
        (10, lambda t: t.replace(" is responsible for ", " accounts for ") if " is responsible for " in t else None),
        (11, lambda t: re.sub(r"^The (.+?) is ", r"In this case, the \1 is ", t, count=1) if t.startswith("The ") and " is " in t[4:40] else None),
        (12, lambda t: t.replace(" results in ", " leads to ") if " results in " in t else None),
        (13, lambda t: t.replace(" compared with ", " relative to ") if " compared with " in t else None),
        (14, lambda t: re.sub(r"^How does ", "In what way does ", t) if t.startswith("How does ") else None),
        (15, lambda t: t.replace(" mechanism ", " process ") if " mechanism " in t else None),
    ]

    for attempt in range(len(rules)):
        idx = (salt + attempt) % len(rules)
        _, fn = rules[idx]
        out = fn(s)
        if out and out != s:
            return out
    return None


def format_js(name: str, items: list[dict]) -> str:
    lines = [f"const {name} = ["]
    for item in items:
        lines.append("  {")
        lines.append(f"    topic: {json.dumps(item['topic'], ensure_ascii=False)},")
        lines.append(f"    question: {json.dumps(item['question'], ensure_ascii=False)},")
        lines.append("    options: [")
        for opt in item["options"]:
            lines.append(f"      {json.dumps(opt, ensure_ascii=False)},")
        lines.append("    ],")
        lines.append(f"    correct: {item['correct']},")
        lines.append(f"    explanation: {json.dumps(item['explanation'], ensure_ascii=False)},")
        lines.append("  },")
    lines.append("];")
    return "\n".join(lines)


def main() -> None:
    raw = subprocess.check_output(["node", str(EXTRACT)], cwd=ROOT, text=True)
    sources: list[dict] = json.loads(raw)
    existing = load_existing_stems()

    by_module: dict[str, list[dict]] = {"part1": [], "part2": [], "part3": []}
    seen_stems: set[str] = set()

    for i, q in enumerate(sources):
        module = q.get("module") or "part3"
        if module not in by_module:
            module = "part3"
        stem = q.get("question", "")
        if not stem or stem in seen_stems:
            continue
        new_stem = None
        for salt in range(12):
            candidate = paraphrase_stem(stem, i + salt)
            if not candidate:
                continue
            if candidate in existing or candidate in seen_stems:
                continue
            new_stem = candidate
            break
        if not new_stem:
            continue
        seen_stems.add(new_stem)
        existing.add(new_stem)
        by_module[module].append(
            {
                "topic": q.get("topic") or "General",
                "question": new_stem,
                "options": q["options"],
                "correct": q["correct"],
                "explanation": q.get("explanation") or "",
            }
        )

    body = (
        "// Exam/review paraphrase pools — regenerate: python3 _generate_exam_paraphrases.py\n\n"
        + format_js("PART1_EXAM_PARAPHRASE_POOL", by_module["part1"])
        + "\n\n"
        + format_js("PART2_EXAM_PARAPHRASE_POOL", by_module["part2"])
        + "\n\n"
        + format_js("PART3_EXAM_PARAPHRASE_POOL", by_module["part3"])
        + "\n"
    )
    OUT.write_text(body, encoding="utf-8")
    total = sum(len(v) for v in by_module.values())
    print(f"Wrote {OUT}: p1={len(by_module['part1'])} p2={len(by_module['part2'])} p3={len(by_module['part3'])} total={total}")


if __name__ == "__main__":
    main()
