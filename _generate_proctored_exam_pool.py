#!/usr/bin/env python3
"""Build PROCTORED_MOCK_EXAM_POOL — 50 items used only for the timed proctored mock."""
import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MOCK_FILE = ROOT / "questions-proctored-mock.js"


def existing_stems():
    stems = set()
    for p in ROOT.glob("questions*.js"):
        if p.name == MOCK_FILE.name:
            continue
        t = p.read_text(encoding="utf-8", errors="ignore")
        for m in re.finditer(r'question:\s*"((?:\\.|[^"\\])*)"', t):
            stems.add(json.loads(f'"{m.group(1)}"'))
    return stems


def js_str(s):
    return json.dumps(s, ensure_ascii=False)


def balance_lengths(opts, correct):
    if random.random() > 0.65:
        return
    clen = len(opts[correct])
    tail = " — not the best match to the stem."
    for j in range(4):
        if j != correct and len(opts[j]) <= clen + 4:
            opts[j] = opts[j] + tail


def mcq(topic, module, stem, correct, wrongs, expl, wrong_exp=None):
    opts = [correct] + list(wrongs)
    random.shuffle(opts)
    c = opts.index(correct)
    balance_lengths(opts, c)
    we2 = []
    for i, o in enumerate(opts):
        if i == c:
            we2.append("")
        else:
            we2.append(f"This choice ({o.split(' — ')[0]}) does not follow from the stem.")
    return {
        "topic": topic,
        "module": module,
        "question": stem,
        "options": opts,
        "correct": c,
        "explanation": expl,
        "wrongExplanations": we2,
    }


def sata(topic, module, stem, options, correct_indices, wrong_exp):
    return {
        "type": "selectAll",
        "topic": topic,
        "module": module,
        "question": stem,
        "options": options,
        "correctIndices": correct_indices,
        "scoringRule": "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
        "explanation": "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
        "wrongExplanations": wrong_exp,
    }


def render_item(q):
    if q.get("type") == "selectAll":
        opts = ",\n      ".join(js_str(o) for o in q["options"])
        ci = ", ".join(str(i) for i in q["correctIndices"])
        we = ",\n      ".join(js_str(w) for w in q["wrongExplanations"])
        return f"""  {{
    type: "selectAll",
    topic: {js_str(q["topic"])},
    module: {js_str(q["module"])},
    question: {js_str(q["question"])},
    options: [
      {opts}
    ],
    correctIndices: [{ci}],
    scoringRule: {js_str(q["scoringRule"])},
    explanation: {js_str(q["explanation"])},
    wrongExplanations: [
      {we}
    ]
  }}"""
    opts = ",\n      ".join(js_str(o) for o in q["options"])
    we = ",\n      ".join(js_str(w) for w in q["wrongExplanations"])
    return f"""  {{
    topic: {js_str(q["topic"])},
    module: {js_str(q["module"])},
    question: {js_str(q["question"])},
    options: [
      {opts}
    ],
    correct: {q["correct"]},
    explanation: {js_str(q["explanation"])},
    wrongExplanations: [
      {we}
    ]
  }}"""


def build_items():
    random.seed(42)
    items = []

    # 13 select-all exclusive stems
    sata_specs = [
        ("Nernst Equation", "part1", "Proctored mock — Nernst at 37°C (61.54 mV/decade): select all true.", [
            "Raising external K⁺ makes E_K less negative",
            "E_Cl sign in the Nernst equation uses valence in the denominator",
            "Reversal potential is where net current for that ion is zero",
            "E_Na is always below rest in every cell type",
        ], [0, 1, 2], ["", "", "", "E_Na is typically well above rest in neurons."]),
        ("Passive Properties", "part1", "Proctored mock — τ and λ: select all correct.", [
            "τ = R_m C_m",
            "λ increases if R_m rises with R_i fixed",
            "Higher leak conductance lengthens λ",
            "Shorter τ speeds voltage equilibration for a given current",
        ], [0, 1, 3], ["", "", "Higher leak lowers R_m and shortens λ.", ""]),
        ("Action Potentials", "part1", "Proctored mock — spike phases: select all accurate.", [
            "Na⁺ activation drives rapid depolarization",
            "Na⁺ inactivation contributes to repolarization",
            "K⁺ activation typically follows Na⁺ activation",
            "Resting potential is set solely by E_Na",
        ], [0, 1, 2], ["", "", "", "Resting is dominated by K⁺ leak and pump activity, not E_Na alone."]),
        ("Synaptic Transmission", "part2", "Proctored mock — quantal release: select all true.", [
            "Miniature events reflect single vesicles",
            "Evoked release is probabilistic",
            "Every active zone fuses exactly one vesicle per spike",
            "Ca²⁺ couples action potential to fusion",
        ], [0, 1, 3], ["", "", "Release probability and vesicle number vary; not exactly one.", ""]),
        ("Plasticity", "part2", "Proctored mock — LTD/LTP: select all supported.", [
            "Low-frequency pairing can weaken synapses (LTD)",
            "NMDA receptors detect coincident pre/post activity",
            "LTP never requires postsynaptic Ca²⁺",
            "Endocannabinoids can mediate some forms of retrograde signaling",
        ], [0, 1, 3], ["", "", "Postsynaptic Ca²⁺ rise is central to many LTP induction protocols.", ""]),
        ("Visual System", "part3", "Proctored mock — geniculate layers: select all true.", [
            "M and P streams remain partially segregated in LGN",
            "Contralateral eye layers alternate in cats/primates",
            "LGN receives only retinal input with no cortical feedback",
            "Magnocellular layers favor motion/transient responses",
        ], [0, 1, 3], ["", "", "Cortico-thalamic feedback modulates LGN relay cells.", ""]),
        ("Motor Systems", "part3", "Proctored mock — corticospinal tract: select all accurate.", [
            "Most fibers decussate in the medullary pyramids",
            "Lateral corticospinal tract controls skilled distal movement",
            "All corticospinal fibers remain ipsilateral without decussation",
            "Upper motor neuron lesions can increase reflex tone",
        ], [0, 1, 3], ["", "", "A minority (ventral corticospinal) remains ipsilateral.", ""]),
        ("Basal Ganglia", "part3", "Proctored mock — Parkinsonism: select all true.", [
            "Dopamine loss in substantia nigra pars compacta is central",
            "Bradykinesia and rigidity are common",
            "Chorea is the hallmark of untreated Parkinson disease",
            "L-DOPA replaces a dopamine precursor",
        ], [0, 1, 3], ["", "", "Chorea links more to Huntington and other disorders.", ""]),
        ("Autonomic", "part2", "Proctored mock — autonomic outflow: select all correct.", [
            "Sympathetic chain ganglia lie paravertebrally",
            "Parasympathetic preganglionic fibers are long",
            "All postganglionic fibers release ACh on vascular smooth muscle",
            "Sacral outflow contributes to pelvic parasympathetic functions",
        ], [0, 1, 3], ["", "", "Most vascular smooth muscle gets NE from sympathetic fibers.", ""]),
        ("Methods", "part3", "Proctored mock — EEG vs unit recording: select all true.", [
            "Scalp EEG reflects synchronized population activity",
            "Single-unit recording resolves individual spike waveforms",
            "EEG has finer spatial resolution than fMRI always",
            "Local field potentials sit between single units and EEG",
        ], [0, 1, 3], ["", "", "EEG is coarse spatially; fMRI can localize better at millimeter scale.", ""]),
        ("Hearing", "part3", "Proctored mock — auditory brainstem: select all accurate.", [
            "Cochlear nuclei are the first CNS relay for audition",
            "Superior olivary complex computes interaural time differences",
            "Inferior colliculus is part of the tectum in midbrain",
            "Primary auditory cortex is in occipital lobe",
        ], [0, 1, 2], ["", "", "", "Primary auditory cortex is temporal (Heschl gyrus), not occipital."]),
        ("Sleep", "part3", "Proctored mock — orexin/hypocretin: select all true.", [
            "Loss of orexin neurons links to narcolepsy with cataplexy",
            "Orexin stabilizes wakefulness",
            "Orexin is identical to melatonin",
            "Lateral hypothalamus contains orexin-producing neurons",
        ], [0, 1, 3], ["", "", "Melatonin is a pineal hormone with different receptors.", ""]),
        ("Pain", "part3", "Proctored mock — gate control (conceptual): select all supported.", [
            "Non-nociceptive input can modulate pain transmission",
            "Substantia gelatinosa involves interneurons in dorsal horn",
            "Pain is immutable once peripheral nociceptors fire",
            "Descending pathways can inhibit dorsal horn neurons",
        ], [0, 1, 3], ["", "", "Central and descending modulation strongly shape pain.", ""]),
    ]
    for spec in sata_specs:
        items.append(sata(*spec))

    # 8 lesion-style MCQs
    lesions = [
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Right optic tract compression. Expected visual field defect:", "Left homonymous hemianopia", ("Left monocular blindness", "Bitemporal hemianopia", "Right superior quadrantanopia"), "Optic tract carries contralateral visual field information."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Pituitary adenoma compressing optic chiasm.", "Bitemporal hemianopia", ("Right homonymous hemianopia", "Left monocular blindness", "Left inferior quadrantanopia"), "Nasal retinal fibers cross in chiasm; compression knocks out temporal fields."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Right Meyer's loop (temporal lobe) destroyed.", "Left superior quadrantanopia", ("Right homonymous hemianopia", "Bitemporal loss", "Left monocular blindness"), "Meyer's loop carries upper quadrant fibers; temporal lesion → contralateral superior quadrantanopia."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Left medial lemniscus in pons.", "Right loss of vibration/proprioception", ("Left hemiparesis only", "Right hemianopia", "Global aphasia"), "Medial lemniscus carries dorsal column information already decussated."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Right lateral medulla (PICA) syndrome.", "Right Horner + ataxia + pain/temp loss on right face and left body", ("Pure motor hemiplegia only", "Bitemporal hemianopia", "Broca aphasia"), "Classic lateral medullary pattern mixes cranial nerve, cerebellar, and crossed spinothalamic findings."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Anterior spinal artery infarct at thoracic level.", "Bilateral motor weakness with dissociated sensory loss (pain/temp) below lesion", ("Isolated dorsal column loss only", "Pure cerebellar ataxia", "Third nerve palsy"), "ASA supplies anterior cord; motor and spinothalamic tracts affected bilaterally."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Left cerebellar hemisphere stroke.", "Left limb intention tremor and dysmetria", ("Right hemianopia", "Left-sided UMN spasticity pattern", "Bitemporal hemianopia"), "Lateral cerebellum coordinates ipsilateral limb movement."),
        ("Clinical Neuroanatomy", "part3", "Proctored mock — Left Broca area infarct in dominant hemisphere.", "Nonfluent aphasia with relatively preserved comprehension", ("Fluent paraphasic speech with poor comprehension", "Pure alexia without motor deficit", "Bilateral deafness"), "Broca area lesions impair speech production more than comprehension."),
    ]
    for L in lesions:
        items.append(mcq(*L))

    # 3 circuit
    circuits = [
        ("Neural Circuits", "part2", "Proctored mock — Feedforward inhibition: interneuron I inhibits principal P while both receive excitation. Net effect on P spike timing?", "Narrows timing window for P to fire", ("Always prevents P from firing", "Identical to removing I", "Forces P to fire before input arrives"), "Feedforward inhibition delays or suppresses P unless excitation is strong and well timed."),
        ("Neural Circuits", "part2", "Proctored mock — Reciprocal inhibition between flexor and extensor CPG half-centers produces:", "Alternating burst patterns", ("Simultaneous flexor/extensor co-contraction always", "Complete silence", "Random Poisson spikes only"), "Reciprocal inhibition enforces alternation in many CPG models."),
        ("Neural Circuits", "part2", "Proctored mock — Disinhibition: inhibitory interneuron stops another inhibitor targeting P. P becomes:", "More likely to fire (disinhibited)", ("Hyperpolarized below rest always", "Uncoupled from all synaptic input", "Unable to integrate EPSPs"), "Removing inhibition from P is disinhibition and can facilitate firing."),
    ]
    for c in circuits:
        items.append(mcq(*c))

    # 2 clamp/trace conceptual (no duplicate SVG from pool — text + short options)
    clamps = [
        ("Electrophysiology", "part1", "Proctored mock — TTX applied during current-clamp recording of action potential. Expected change?", "Abolishes the Na⁺-dependent upstroke", ("Blocks only afterhyperpolarization", "Increases peak amplitude", "Converts spikes to calcium-only plateaus unchanged"), "TTX blocks voltage-gated Na⁺ channels required for the upstroke."),
        ("Electrophysiology", "part1", "Proctored mock — Voltage clamp at 0 mV with normal gradients. Dominant inward current at peak of voltage step mimicking spike?", "Large transient Na⁺ current", ("Sustained K⁺ current only", "No currents because 0 mV is rest", "Exclusive Cl⁻ current"), "At 0 mV, Na⁺ channels open producing inward current before K⁺ dominates repolarization."),
    ]
    for c in clamps:
        items.append(mcq(*c))

    # Remaining MCQ calc/concept to reach 50 (50 - 13 - 8 - 3 - 2 = 24)
    calcs = [
        ("Nernst Equation", "part1", "Proctored mock — [K⁺]o/[K⁺]i = 0.25 at 37°C. E_K is about:", "−37 mV", ("+37 mV", "0 mV", "−90 mV"), "One decade ratio → ~61.5 mV; 0.25 outside/inside yields less negative than 140/4."),
        ("Nernst Equation", "part1", "Proctored mock — If E_K = −80 mV and V_m = −65 mV, opening K⁺ channels tends to:", "Hyperpolarize toward E_K", ("Depolarize toward 0 mV always", "Have no effect on V_m", "Clamp V_m to E_Na"), "Driving force moves V_m toward E_K when K⁺ conductance rises."),
        ("Goldman Equation", "part1", "Proctored mock — Only K⁺ permeant. V_m equals:", "E_K", ("E_Na", "Average of all ions", "Always 0 mV"), "Goldman reduces to Nernst for a single permeant ion."),
        ("Passive Properties", "part1", "Proctored mock — R_m doubles, C_m unchanged. τ:", "Doubles", ("Halves", "Unchanged", "Quarters"), "τ = R_m C_m."),
        ("Passive Properties", "part1", "Proctored mock — EPSP 5 mV at soma, threshold −50 mV, rest −65 mV. Subthreshold?", "Yes — peak −60 mV", ("No — exceeds threshold", "Cannot tell", "Always triggers spike"), "−65 + 5 = −60 mV, still above threshold −50."),
        ("Synaptic Transmission", "part2", "Proctored mock — Mini amplitude 1 mV; 100 quanta released synchronously (linear sum). Peak EPSP ~", "100 mV (unrealistic saturation ignored)", ("1 mV", "10 mV", "0 mV"), "Linear summation of 100 × 1 mV quanta in this idealized stem."),
        ("Synaptic Transmission", "part2", "Proctored mock — Botulinum at NMJ reduces:", "Quantal ACh release", ("Postsynaptic nicotinic receptors", "Muscle AChE only", "Muscle action potential voltage-gated Na⁺"), "Botulinum cleaves SNAREs presynaptically."),
        ("Plasticity", "part2", "Proctored mock — Blocking NMDA receptors during high-frequency pairing most directly prevents:", "LTP induction", ("Retrograde endocannabinoid release only", "Resting K⁺ leak", "Rod phototransduction"), "NMDA coincidence detection is required for many LTP protocols."),
        ("Sensory Systems", "part3", "Proctored mock — Photoreceptor in dark is:", "Depolarized with steady dark current", ("Hyperpolarized below −80 mV always", "Silent electrically", "Spiking at 100 Hz"), "Dark current through cGMP-gated channels depolarizes photoreceptors."),
        ("Motor Systems", "part3", "Proctored mock — Lower motor neuron lesion causes:", "Flaccid weakness and hyporeflexia", ("Spasticity and hyperreflexia", "Homonymous hemianopia", "Bitemporal hemianopia"), "LMN loss reduces tone and reflexes locally."),
        ("Language", "part3", "Proctored mock — Wernicke area lesion in dominant hemisphere:", "Fluent speech with poor comprehension", ("Nonfluent speech", "Pure motor hemiplegia only", "Deafness"), "Wernicke aphasia is fluent but incomprehensible with poor comprehension."),
        ("Vestibular", "part3", "Proctored mock — Horizontal canal excitatory ampullopetal cupula deflection:", "Increases afferent firing rate", ("Silences all afferents permanently", "Activates photoreceptors", "Opens blood–brain barrier"), "Cupula deflection modulates hair cell transmitter release to vestibular nerve."),
        ("Neuroendocrine", "part3", "Proctored mock — ADH release site:", "Posterior pituitary (from hypothalamic axons)", ("Anterior pituitary somatotropes", "Adrenal medulla", "Pineal gland"), "ADH is made in hypothalamus and released neurohypophysis."),
        ("Glial Cells", "part2", "Proctored mock — Myelin produced by oligodendrocytes in CNS:", "Speeds saltatory conduction", ("Shortens λ in axons always", "Is identical to Schwann cell myelin functionally", "Prevents all K⁺ leak"), "Myelin increases effective membrane resistance and enables saltatory conduction."),
        ("Rhythmic Motor", "part2", "Proctored mock — Central pattern generator for walking can:", "Produce alternating left/right bursts without sensory feedback", ("Require continuous conscious control for each step always", "Only operate in REM sleep", "Not be modulated by brainstem", "Not be modulated by brainstem"), "CPGs generate basic rhythms; descending input modulates them."),
    ]
    # fix duplicate option in last calcs entry
    calcs[-1] = (
        "Rhythmic Motor", "part2", "Proctored mock — Central pattern generator for walking can:",
        "Produce alternating left/right bursts without sensory feedback",
        ("Require continuous conscious control for each step always", "Only operate in REM sleep", "Not be modulated by brainstem"),
        "CPGs generate basic rhythms; descending input modulates them.",
    )
    for c in calcs:
        items.append(mcq(*c))

    # pad to 50 if short
    fillers = [
        ("Integrative", "part2", "Proctored mock — Opening GABA_A channels at rest when E_Cl is below V_m tends to:", "Hyperpolarize or stabilize V_m", ("Depolarize toward E_Na", "Abolish all synaptic release", "Block the Na⁺/K⁺ pump only"), "Inhibitory chloride conductance pulls V_m toward E_Cl."),
        ("Integrative", "part1", "Proctored mock — Increasing membrane capacitance with fixed R_m changes τ by:", "Increasing τ (τ = R_m C_m)", ("Decreasing τ", "Leaving τ unchanged always", "Eliminating λ entirely"), "τ scales with C_m."),
        ("Integrative", "part2", "Proctored mock — Presynaptic metabotropic autoreceptors typically:", "Reduce transmitter release when activated", ("Guarantee maximal release", "Open voltage-gated Na⁺ in postsynaptic spine always", "Convert EPSPs to action potentials in glia"), "Autoreceptors provide negative feedback on release."),
        ("Integrative", "part3", "Proctored mock — Unilateral labyrinthectomy acutely causes:", "Vertigo and nystagmus toward the lesioned side (acute)", ("Bitemporal hemianopia", "Broca aphasia", "Flaccid paralysis of contralateral face only"), "Acute vestibular deafferentation produces vertigo and nystagmus."),
        ("Integrative", "part3", "Proctored mock — Hippocampal place fields fire when:", "The animal occupies a preferred location in an environment", ("Light hits photoreceptors", "Muscle spindles stretch only", "Odorants bind only in glomeruli of cerebellum"), "Place cells encode spatial location."),
        ("Integrative", "part2", "Proctored mock — Electrical synapses (gap junctions) allow:", "Bidirectional ion flow and fast coupling", ("Only retrograde peptide signaling", "Only myelination of axons", "Only Cl⁻ extrusion by NKCC"), "Gap junctions couple cells electrically."),
        ("Integrative", "part1", "Proctored mock — In voltage clamp, holding potential is:", "The command potential the amplifier enforces across the membrane", ("Always +40 mV only", "The same as spike threshold always", "Measured only in muscle spindles"), "The clamp holds V_m at the command potential."),
        ("Integrative", "part3", "Proctored mock — Contralateral hemiparesis with UMN signs suggests:", "Lesion in corticospinal tract above the spinal segment", ("Lesion of optic nerve only", "Pure LMN anterior horn loss only", "Cochlear nucleus infarct only"), "UMN weakness is contralateral to corticospinal tract lesions rostral to decussation."),
        ("Integrative", "part2", "Proctored mock — End-plate potential at NMJ is:", "Graded and suprathreshold for muscle fiber in normal conditions", ("All-or-none in the muscle membrane always before initiation", "Identical to inhibitory IPSP in spinal neuron", "Generated by rods and cones"), "EPP is graded but typically triggers muscle AP."),
    ]
    for f in fillers:
        if len(items) >= 50:
            break
        items.append(mcq(*f))

    return items[:50]


def main():
    taken = existing_stems()
    items = build_items()
    for q in items:
        if q["question"] in taken:
            raise SystemExit(f"Duplicate stem in main banks: {q['question'][:60]}")
    block = ",\n".join(render_item(q) for q in items)
    text = MOCK_FILE.read_text(encoding="utf-8")
    if "const PROCTORED_MOCK_EXAM_POOL" in text:
        text = re.sub(
            r"const PROCTORED_MOCK_EXAM_POOL = \[.*?\];",
            f"const PROCTORED_MOCK_EXAM_POOL = [\n{block}\n];",
            text,
            flags=re.S,
        )
    else:
        text = re.sub(
            r"const PROCTORED_MOCK_POOL = \[.*?\];",
            f"const PROCTORED_MOCK_EXAM_POOL = [\n{block}\n];",
            text,
            flags=re.S,
        )
    MOCK_FILE.write_text(text, encoding="utf-8")
    print(f"Wrote PROCTORED_MOCK_EXAM_POOL with {len(items)} items.")


if __name__ == "__main__":
    main()
