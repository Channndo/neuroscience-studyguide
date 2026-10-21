#!/usr/bin/env python3
"""Generate questions-expansion.js — large MCB80x-aligned pools (Part 1/2/3)."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "questions-expansion.js"


def load_existing_stems() -> set[str]:
    stems: set[str] = set()
    for path in ROOT.glob("*.js"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        for m in re.finditer(r'question:\s*"((?:\\.|[^"\\])*)"', text):
            stems.add(json.loads(f'"{m.group(1)}"'))
    html = (ROOT / "index.html").read_text(encoding="utf-8", errors="ignore")
    for m in re.finditer(r'question:\s*"((?:\\.|[^"\\])*)"', html):
        stems.add(json.loads(f'"{m.group(1)}"'))
    return stems


def Q(topic, question, options, correct, explanation):
    return {
        "topic": topic,
        "question": question,
        "options": options,
        "correct": correct,
        "explanation": explanation,
    }


def add_unique(items, existing, batch):
    for item in batch:
        if item["question"] in existing:
            continue
        existing.add(item["question"])
        items.append(item)


def part1_bank(existing: set[str]) -> list[dict]:
    items: list[dict] = []
    ions = [
        ("K\u207a", "intracellular K\u207a is doubled", "E_K becomes more negative", 0),
        ("Na\u207a", "extracellular Na\u207a is doubled", "E_Na becomes less positive (toward 0 mV)", 0),
        ("Cl\u207b", "extracellular Cl\u207b is increased", "E_Cl shifts according to the anion Nernst relation", 0),
        ("Ca\u00b2\u207a", "intracellular Ca\u00b2\u207a buffering lowers free Ca\u00b2\u207a", "E_Ca becomes more negative", 0),
    ]
    for ion, scenario, ans, correct in ions:
        add_unique(items, existing, [Q(
            "Nernst Equation",
            f"Nernst scenario: {scenario}. Expected change in equilibrium potential:",
            [ans, "Always exactly 0 mV", "Unaffected by concentration", "Equal to E_Na for every ion"],
            correct,
            f"Concentration changes for {ion} shift its equilibrium potential per the Nernst equation.",
        )])

    for pct in (10, 25, 40, 60, 80):
        add_unique(items, existing, [Q(
            "Passive Membrane Properties",
            f"If membrane leak conductance increases by ~{pct}% (R_m falls) with unchanged geometry, the length constant \u03bb typically:",
            ["Becomes shorter (less spatial spread)", "Becomes infinitely long", "Does not change ever", "Converts dendrites to photoreceptors"],
            0,
            "Higher leak (lower R_m) shortens \u03bb, attenuating signals faster with distance.",
        )])

    drugs = [
        ("TTX", "Blocks voltage-gated Na\u207a channels", "Action potentials fail"),
        ("TEA", "Blocks many voltage-gated K\u207a channels", "Repolarization slows; spikes broaden"),
        ("Ouabain", "Inhibits Na\u207a/K\u207a ATPase", "Gradients run down; eventual depolarization"),
        ("Lidocaine (use-dependent)", "Preferentially blocks inactivated Na\u207a channels", "Firing fibers blocked more strongly"),
    ]
    for drug, mech, outcome in drugs:
        add_unique(items, existing, [Q(
            "Pharmacology",
            f"Drug: {drug}. Mechanism \u2192 outcome:",
            [f"{mech}; {outcome}", "Opens photopigment", "Forms gap junctions in retina", "Maps odor to glomeruli"],
            0,
            f"{drug}: {mech}, leading to {outcome}.",
        )])

    clamp_modes = [
        ("voltage clamp", "hold V_m constant and measure required current"),
        ("current clamp", "inject current and record V_m changes"),
        ("cell-attached patch", "record single-channel openings in a membrane patch"),
    ]
    for mode, desc in clamp_modes:
        add_unique(items, existing, [Q(
            "Patch Clamp",
            f"The {mode} configuration is especially useful because it allows experimenters to:",
            [desc, "Measure only muscle force", "Transduce sound in cochlea", "Label glomeruli directly"],
            0,
            f"{mode.title()} enables {desc}.",
        )])

    for mv in (5, 8, 12, 15, 20):
        add_unique(items, existing, [Q(
            "Electrical Signaling",
            f"A neuron at -70 mV receives a +{mv} mV EPSP that remains subthreshold. Approximate peak V_m:",
            [f"-{70 - mv} mV", "+40 mV always", "Exactly E_Na", "Exactly E_K always"],
            0,
            "Subthreshold EPSPs shift V_m approximately by the EPSP amplitude.",
        )])

    ap_facts = [
        ("Threshold", "Net inward current exceeds outward current initiating regenerative Na\u207a entry"),
        ("Absolute refractory", "Many Na\u207a channels inactivated; no new spike possible"),
        ("Relative refractory", "Partial recovery requires stronger stimulus"),
        ("Afterhyperpolarization", "Delayed K\u207a (and sometimes Ca\u207a-activated K\u207a) drives V_m below rest"),
    ]
    for label, fact in ap_facts:
        add_unique(items, existing, [Q(
            "Action Potentials",
            f"During the {label.lower()} period/mechanism:",
            [fact, "Myelin is synthesized in the soma", "Only GABA is released globally", "Photoreceptors depolarize to light"],
            0,
            fact,
        )])

    prop = [
        ("Unmyelinated axon", "Active regeneration along membrane", "Non-decremental propagation"),
        ("Myelinated axon", "Nodes of Ranvier concentrate Na\u207a channels", "Saltatory conduction"),
        ("Cold temperature", "Slower channel kinetics", "Reduced conduction velocity"),
        ("Local anesthetic", "Na\u207a block in pain fibers", "Loss of sensation in region"),
    ]
    for structure, mechanism, result in prop:
        add_unique(items, existing, [Q(
            "Action Potential Propagation",
            f"Structure/condition: {structure}. Key mechanism and outcome:",
            [f"{mechanism}; {result}", "Only passive spread forever", "Only cochlear tuning", "Only LTP induction"],
            0,
            f"{structure}: {mechanism} \u2192 {result}.",
        )])

    goldman_scenarios = [
        "Only K\u207a leak channels open",
        "Brief opening of Na\u207a channels during synaptic depolarization",
        "Increased Cl\u207b conductance with E_Cl below rest",
        "Elevated extracellular K\u207a with unchanged intracellular K\u207a",
    ]
    for i, scen in enumerate(goldman_scenarios):
        add_unique(items, existing, [Q(
            "Goldman Equation",
            f"Given: {scen}. In the Goldman (constant-field) relation, V_m is pulled toward:",
            ["The weighted equilibrium of permeant ions (not a single fixed value for all cases)", "Always +100 mV", "Always 0 mV regardless of gradients", "Only the pump reversal potential with no leaks"],
            0,
            "Multi-ion permeability sets V_m via weighted equilibria (Goldman equation).",
        )])

    part1_combinatorial(existing, items)
    return items


def part1_combinatorial(existing: set[str], items: list[dict]) -> None:
    """Unique numeric scenarios for Part 1 (electrical properties)."""
    for n in range(1, 101):
        leak_pct = 5 + (n % 45)
        add_unique(items, existing, [Q(
            "Passive Membrane Properties",
            f"If leak conductance rises by {leak_pct}% (R_m falls) with geometry unchanged, the length constant λ compared with baseline is:",
            ["Shorter — signals attenuate faster with distance", "Longer — signals spread farther always", "Unchanged — λ never depends on R_m", "Infinite — passive spread without limit"],
            0,
            "Higher leak (lower R_m) shortens λ in passive cable models.",
        )])
        tau_pct = 10 + (n % 50)
        add_unique(items, existing, [Q(
            "Passive Membrane Properties",
            f"If membrane capacitance increases by {tau_pct}% while R_m is held fixed, the time constant τ is:",
            [f"~{100 + tau_pct}% of baseline (τ = R_m C_m)", "Zero — voltage changes instantly always", "Independent of C_m always", "Determined only by myelin thickness"],
            0,
            "τ scales with C_m when R_m is held constant.",
        )])
        dep = 3 + (n % 17)
        add_unique(items, existing, [Q(
            "Electrical Signaling",
            f"Resting V_m is −70 mV. A subthreshold EPSP peaks at −70 + {dep} mV. This EPSP is:",
            [f"Depolarizing by about {dep} mV without reaching threshold", f"Hyperpolarizing by {dep} mV always", "At E_Na (+60 mV)", "Blocked by photopigment"],
            0,
            "EPSP amplitude adds to resting potential until threshold mechanisms engage.",
        )])


def part2_bank(existing: set[str]) -> list[dict]:
    items: list[dict] = []
    release_steps = [
        ("AP invades terminal", "Depolarization opens presynaptic Ca\u207a channels"),
        ("Ca\u207a influx", "Triggers SNARE-mediated vesicle fusion"),
        ("Vesicle fusion", "Quantal transmitter release into cleft"),
        ("Transmitter binding", "Postsynaptic receptor opening/conformation change"),
    ]
    for step, next_step in release_steps:
        add_unique(items, existing, [Q(
            "Synaptic Transmission",
            f"Sequence step: {step}. Immediate consequence:",
            [next_step, "Photopigment isomerization", "Basilar membrane vibration only", "Permanent DNA transcription in muscle"],
            0,
            f"{step} leads to {next_step} in chemical synaptic transmission.",
        )])

    nt_pairs = [
        ("Glutamate", "Fast excitatory ionotropic signaling (often AMPA/NMDA)", "Synaptic Transmission"),
        ("GABA", "Fast inhibitory Cl\u207b conductance (GABA_A)", "Synaptic Transmission"),
        ("Acetylcholine", "Nicotinic ionotropic at NMJ; muscarinic modulatory in CNS", "Chemical Synapses"),
        ("Dopamine", "Neuromodulation of motivation/movement circuits", "Neuromodulation"),
    ]
    for nt, role, topic in nt_pairs:
        add_unique(items, existing, [Q(
            topic,
            f"Transmitter: {nt}. Typical role:",
            [role, "Only phototransduction", "Only cochlear outer hair motility", "Only cerebrospinal fluid secretion"],
            0,
            f"{nt} primarily mediates {role}.",
        )])

    plasticity = [
        ("NMDA-dependent LTP", "Postsynaptic Ca\u207a entry during strong depolarization", "Long-Term Plasticity"),
        ("Homosynaptic LTD", "Prolonged low-frequency stimulation", "Long-Term Plasticity"),
        ("STDP potentiation", "Presynaptic spike shortly before postsynaptic spike", "Synaptic Plasticity Rules"),
        ("Facilitation", "Residual presynaptic Ca\u207a increases release probability", "Short-Term Plasticity"),
    ]
    for name, req, topic in plasticity:
        add_unique(items, existing, [Q(
            topic,
            f"Plasticity form: {name}. Induction requirement:",
            [req, "Only muscle stretch", "Only rod dark current", "Only olfactory adaptation"],
            0,
            f"{name} requires {req}.",
        )])

    circuits = [
        ("Feedforward inhibition", "Limits spread and sharpens timing of excitation", "Neural Circuits"),
        ("Feedback inhibition", "Stabilizes firing rate after activity", "Neural Circuits"),
        ("Lateral inhibition", "Enhances contrast between active and surround", "Neural Circuits"),
        ("Disinhibition", "Removing inhibition from a target increases net excitation", "Inhibitory Circuits"),
    ]
    for motif, effect, topic in circuits:
        add_unique(items, existing, [Q(
            topic,
            f"Circuit motif: {motif}. Functional effect:",
            [effect, "Eliminates all spikes globally", "Only maps sound frequency", "Only stores declarative memory in NMJ"],
            0,
            f"{motif}: {effect}.",
        )])

    messengers = [
        ("cAMP \u2192 PKA", "Phosphorylation of channels/transporters", "Second Messengers"),
        ("IP\u2083", "Ca\u207a release from ER stores", "Second Messengers"),
        ("DAG", "Can activate PKC at membrane", "Second Messengers"),
    ]
    for pathway, action, topic in messengers:
        add_unique(items, existing, [Q(
            topic,
            f"Second-messenger pathway: {pathway}. Common action:",
            [action, "Direct opening of rhodopsin", "Saltatory conduction in dendrites", "Only Cl\u207b pumping at NMJ"],
            0,
            f"{pathway} typically causes {action}.",
        )])

    for mv in (3, 6, 9, 12, 15, 18):
        add_unique(items, existing, [Q(
            "Synaptic Integration",
            f"Two simultaneous EPSPs of +{mv} mV each (spatial summation at soma) from rest (-70 mV) yield approximate peak:",
            [f"-{70 - 2 * mv} mV if approximately linear", "Always threshold crossed", "Always hyperpolarization", "Exactly E_Na"],
            0,
            "Spatial summation combines depolarizations at the integration zone.",
        )])

    nmj = [
        ("End-plate potential", "Graded depolarization of muscle membrane", "Neuromuscular Junction"),
        ("AChE in cleft", "Clears ACh to terminate signal", "Neuromuscular Junction"),
        ("Curare-like antagonists", "Block nicotinic receptors", "Drug Effects"),
    ]
    for term, desc, topic in nmj:
        add_unique(items, existing, [Q(
            topic,
            f"NMJ concept: {term}. Description:",
            [desc, "Photoreceptor hyperpolarization to light", "Cochlear phase locking only", "Glomerular one-receptor rule only"],
            0,
            f"{term}: {desc}.",
        )])

    part2_combinatorial(existing, items)
    return items


def part2_combinatorial(existing: set[str], items: list[dict]) -> None:
    for n in range(1, 101):
        freq = 5 + (n % 95)
        add_unique(items, existing, [Q(
            "Short-Term Plasticity",
            f"After brief presynaptic stimulation at {freq} Hz, a common short-term synaptic change is:",
            ["Synaptic depression or facilitation depending on prior activity", "Permanent loss of all receptors", "Conversion to electrical synapses only", "Photoreceptor dark current increase"],
            0,
            "High-frequency use changes release probability and vesicle availability.",
        )])
        epsp = 1 + (n % 12)
        add_unique(items, existing, [Q(
            "Synaptic Integration",
            f"Two EPSPs (+{epsp} mV each) arrive 5 ms apart at one synapse (temporal summation). Compared with one EPSP alone, peak depolarization tends to be:",
            ["Larger if within τ of the membrane", "Smaller always", "Unchanged always", "Exactly at E_K"],
            0,
            "Temporal summation combines inputs within the membrane time window.",
        )])


def part3_bank(existing: set[str]) -> list[dict]:
    items: list[dict] = []
    retina = [
        ("Photoreceptor", "Transduces photons; releases glutamate continuously in darkness", "Phototransduction"),
        ("Bipolar cell", "Sign-inverting or sign-conserving pathway element", "Retinal Circuitry"),
        ("Amacrine cell", "Lateral processing in inner plexiform layer", "Retinal Circuitry"),
        ("Ganglion cell", "Output spike trains to brain via optic nerve", "Visual System"),
    ]
    for cell, role, topic in retina:
        add_unique(items, existing, [Q(
            topic,
            f"Retinal cell class: {cell}. Role:",
            [role, "Only cochlear amplification", "Only NMJ ACh release", "Only CSF production"],
            0,
            f"{cell}: {role}.",
        )])

    cochlea = [
        ("Basilar base", "Encodes high frequencies", "Auditory System"),
        ("Basilar apex", "Encodes low frequencies", "Auditory System"),
        ("Inner hair cell", "Primary sensory transduction to afferents", "Auditory System"),
        ("Outer hair cell", "Active cochlear amplification/tuning", "Auditory System"),
    ]
    for part, role, topic in cochlea:
        add_unique(items, existing, [Q(
            topic,
            f"Cochlear structure: {part}. Function:",
            [role, "Olfactory combinatorial coding", "Photopigment regeneration only", "Cerebellar climbing fiber error"],
            0,
            f"{part}: {role}.",
        )])

    somatic = [
        ("Dorsal column pathway", "Fine touch, vibration, proprioception", "Somatosensation"),
        ("Spinothalamic tract", "Pain and temperature", "Pain"),
        ("Meissner corpuscle", "Light touch and flutter", "Somatosensation"),
        ("Muscle spindle", "Muscle length/stretch", "Proprioception"),
    ]
    for pathway, sense, topic in somatic:
        add_unique(items, existing, [Q(
            topic,
            f"Sensory pathway/receptor: {pathway}. Conveys:",
            [sense, "Color opponency only", "Saltatory node formation", "Only declarative memory storage"],
            0,
            f"{pathway} signals {sense}.",
        )])

    regions = [
        ("Hippocampus", "Spatial/episodic memory and navigation", "Hippocampus"),
        ("Amygdala", "Emotional learning and salience", "Emotion & Memory"),
        ("Cerebellum", "Timing and error correction in movement", "Cerebellum"),
        ("Basal ganglia", "Action selection and reinforcement learning", "Basal Ganglia"),
        ("Thalamus", "Sensory/motor relay and gating to cortex", "Thalamus"),
        ("Prefrontal cortex", "Working memory and executive control", "Executive Function"),
    ]
    for area, func, topic in regions:
        add_unique(items, existing, [Q(
            topic,
            f"CNS region: {area}. Best-known function:",
            [func, "Only phototransduction", "Only NMJ maintenance", "Only cochlear fluid secretion"],
            0,
            f"{area}: {func}.",
        )])

    memory = [
        ("LTP at CA3\u2013CA1", "Long-lasting increase in synaptic strength after strong activation", "Synaptic Basis of Memory"),
        ("Consolidation", "Transfer/stabilization of memory over hours to years", "Learning & Memory"),
        ("H.M.", "Profound anterograde declarative amnesia", "Learning & Memory"),
        ("Morris water maze", "Tests hippocampal-dependent spatial learning", "Learning & Memory"),
    ]
    for model, outcome, topic in memory:
        add_unique(items, existing, [Q(
            topic,
            f"Memory paradigm/structure: {model}. Key lesson:",
            [outcome, "Eliminates all sensation", "Blocks only photopigment", "Prevents only Na\u207a gating"],
            0,
            f"{model}: {outcome}.",
        )])

    clinical = [
        ("Parkinson disease", "Loss of SNc dopamine neurons", "Clinical Correlates"),
        ("Multiple sclerosis", "CNS demyelination", "Clinical Correlates"),
        ("Prosopagnosia", "Face recognition deficit", "Clinical Correlates"),
        ("Hemianopia (post-chiasmal)", "Contralateral visual field loss", "Clinical Correlates"),
    ]
    for disorder, cause, topic in clinical:
        add_unique(items, existing, [Q(
            topic,
            f"Clinical correlate: {disorder}. Typical neural basis:",
            [cause, "Only outer hair cell loss in cochlea", "Only taste bud apoptosis", "Only gap junction loss in NMJ exclusively always"],
            0,
            f"{disorder} linked to {cause}.",
        )])

    for band in ("low", "mid", "high"):
        add_unique(items, existing, [Q(
            "Auditory Pathway",
            f"Binaural hearing uses interaural cues; for {band} frequencies, which cue is especially important?",
            [
                "ITD for low, ILD for high (classic MCB80x split)" if band == "mid" else (
                    "Interaural time differences (ITD)" if band == "low" else "Interaural level differences (ILD)"
                ),
                "Only retinal eccentricity",
                "Only glomerular identity",
                "Only muscle spindle length",
            ],
            0,
            "Sound localization combines ITD and ILD depending on frequency.",
        )])

    part3_combinatorial(existing, items)
    return items


def part3_combinatorial(existing: set[str], items: list[dict]) -> None:
    for n in range(1, 101):
        hz = 200 + (n % 800)
        add_unique(items, existing, [Q(
            "Auditory System",
            f"A basilar membrane region with peak sensitivity near {hz} Hz best reflects:",
            ["Tonotopic organization — frequency mapped to location", "Random wiring without frequency order", "Only olfactory receptor choice", "Only NMJ ACh release"],
            0,
            "Cochlear mechanics map frequency to position (place theory).",
        )])
        hippocampus_stems = [
            "Bilateral hippocampal system damage in humans most consistently impairs:",
            "Profound medial temporal lobe damage in humans most consistently impairs:",
            "Following extensive hippocampal injury in adults, the ability to form new memories is:",
            "After bilateral hippocampal loss, which learning is most impaired in typical cases?",
            "Medial temporal lobe damage producing anterograde amnesia primarily disrupts:",
        ]
        add_unique(items, existing, [Q(
            "Learning & Memory",
            hippocampus_stems[n % len(hippocampus_stems)],
            ["Forming new declarative/episodic memories", "All procedural skills such as riding a bike", "All sensation including touch", "Phototransduction in rods"],
            0,
            "Medial temporal lobe/hippocampus is critical for new declarative memory.",
        )])


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
    existing = load_existing_stems()
    p1 = part1_bank(set(existing))
    p2 = part2_bank(set(existing) | {q["question"] for q in p1})
    p3 = part3_bank(set(existing) | {q["question"] for q in p1} | {q["question"] for q in p2})

    body = (
        "// MCB80x expansion pools — regenerate with: python3 _generate_expansion.py\n\n"
        + format_js("PART1_EXPANSION_POOL", p1)
        + "\n\n"
        + format_js("PART2_EXPANSION_POOL", p2)
        + "\n\n"
        + format_js("PART3_EXPANSION_POOL", p3)
        + "\n"
    )
    OUT.write_text(body, encoding="utf-8")
    total = len(p1) + len(p2) + len(p3)
    print(f"Wrote {OUT}: p1={len(p1)} p2={len(p2)} p3={len(p3)} total={total}")


if __name__ == "__main__":
    main()
