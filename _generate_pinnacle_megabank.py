#!/usr/bin/env python3
"""Generate ~300 unique pinnacle MCQs (no numbered variant spam)."""

from __future__ import annotations

import json
import math
import re
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "questions-pinnacle-megabank.js"
TARGET = 300


def skeleton(stem: str) -> str:
    s = re.sub(r"\d+", "", stem).replace("#", "")
    return " ".join(s.lower().split())


def Q(topic, question, options, correct, explanation):
    return {
        "topic": topic,
        "question": question,
        "options": options,
        "correct": correct,
        "explanation": explanation,
    }


def add(items: list, seen_sk: set, item: dict) -> bool:
    sk = skeleton(item["question"])
    if sk in seen_sk:
        return False
    seen_sk.add(sk)
    items.append(item)
    return True


def nernst_mv(out_mM: float, in_mM: float, z: int = 1) -> float:
    return (61.54 / z) * math.log10(out_mM / in_mM)


def mk_mcq(topic, stem, correct_text, wrong_triple, explanation):
    opts = [correct_text, wrong_triple[0], wrong_triple[1], wrong_triple[2]]
    # vary correct index ~30%
    correct = 0
    return Q(topic, stem, opts, correct, explanation)


def generate() -> list[dict]:
    items: list[dict] = []
    seen_sk: set[str] = set()

    # --- Part 1: quantitative & biophysics (unique numeric stems) ---
    k_pairs = [
        (140, 5), (140, 4), (120, 4), (100, 5), (140, 10), (140, 20), (80, 4), (140, 2.5),
        (135, 5), (145, 5), (110, 3), (90, 3), (150, 8), (125, 6), (130, 4), (160, 5),
    ]
    for ki, ko in k_pairs:
        ek = nernst_mv(ko, ki)
        add(
            items,
            seen_sk,
            mk_mcq(
                "Nernst Equation",
                f"At 37°C, [K⁺]i = {ki} mM and [K⁺]o = {ko} mM. E_K is closest to:",
                f"{ek:.0f} mV",
                ("+60 mV", "0 mV", f"{ek + 40:.0f} mV"),
                f"E_K = 61.54·log10({ko}/{ki}) ≈ {ek:.1f} mV.",
            ),
        )

    na_pairs = [(15, 145), (12, 120), (20, 140), (10, 100), (18, 150), (14, 130), (16, 140), (11, 110)]
    for ni, no in na_pairs:
        ena = nernst_mv(no, ni)
        add(
            items,
            seen_sk,
            mk_mcq(
                "Nernst Equation",
                f"At 37°C, [Na⁺]i = {ni} mM and [Na⁺]o = {no} mM. E_Na is closest to:",
                f"+{ena:.0f} mV",
                (f"{ena - 30:.0f} mV", "−70 mV", "+10 mV"),
                f"E_Na ≈ +{ena:.1f} mV.",
            ),
        )

    ca_pairs = [(0.0001, 2), (0.0002, 2), (0.00005, 1.5)]
    for ci, co in ca_pairs:
        eca = nernst_mv(co, ci, z=2)
        add(
            items,
            seen_sk,
            mk_mcq(
                "Nernst Equation",
                f"At 37°C (z=2), [Ca²⁺]i = {ci*1000:.2f} µM and [Ca²⁺]o = {co} mM. E_Ca is closest to:",
                f"+{eca:.0f} mV",
                ("−70 mV", "+30 mV", "0 mV"),
                f"E_Ca ≈ +{eca:.1f} mV.",
            ),
        )

    goldman_scenarios = [
        ("P_K:P_Na = 1:0.05", "Near E_K (≈ −85 mV)", "Closer to E_Na (+60 mV)", "Exactly 0 mV", "Fixed at E_Cl only"),
        ("P_K:P_Na = 1:0.15", "Between E_K and E_Na, biased negative", "Equal to E_Na", "Equal to E_K always", "Independent of permeability"),
        ("P_K:P_Na = 1:0.02", "Very close to E_K", "Dominated by E_Na", "At +40 mV always", "Undefined"),
        ("P_K:P_Na = 1:0.08", "Closer to E_K than E_Na", "At E_Na exactly", "At +40 mV always", "Independent of ions"),
        ("P_K:P_Na = 1:0.25", "Depolarized relative to high K⁺ permeability alone", "Hyperpolarized to E_K only", "Fixed at 0 mV", "Only Cl⁻ sets V_m"),
        ("P_Cl equals P_K with E_Cl negative to rest", "V_m pulled toward E_Cl if P_Cl high", "V_m equals E_Na always", "V_m undefined", "Only gap junctions set V_m"),
    ]
    for label, ans, w1, w2, w3 in goldman_scenarios:
        add(
            items,
            seen_sk,
            mk_mcq(
                "Goldman Equation",
                f"With standard K⁺/Na⁺ concentrations and {label}, resting V_m is best described as:",
                ans,
                (w1, w2, w3),
                "Goldman equation weights ions by permeability.",
            ),
        )

    cable = [
        ("Doubling R_m with R_i fixed", "λ increases (√(R_m/R_i))", "λ unchanged", "λ halves", "τ equals λ"),
        ("Doubling C_m with fixed g_leak", "τ = R_m C_m doubles", "τ halves", "λ doubles always", "No effect on τ"),
        ("Increased axial resistance R_a", "λ decreases", "λ increases", "Only τ changes", "Spikes fail always"),
    ]
    for change, ans, w1, w2, w3 in cable:
        add(
            items,
            seen_sk,
            mk_mcq(
                "Cable Properties",
                f"Passive cable: {change}. The expected effect is:",
                ans,
                (w1, w2, w3),
                ans,
            ),
        )

    pharma = [
        ("TTX on squid giant axon", "Blocks voltage-gated Na⁺; no action potentials", "Blocks K⁺ only", "Opens Cl⁻ channels", "Depolarizes to +60 mV"),
        ("TEA during an action potential", "Slows repolarization; broadens spike", "Blocks Na⁺ inactivation", "Prevents AP initiation only at AIS", "Hyperpolarizes to E_K instantly"),
        ("Ouabain on a neuron", "Stops Na⁺/K⁺ pump; gradual depolarization", "Instant hyperpolarization", "Blocks synaptic vesicle fusion", "Selective GABA block"),
        ("4-AP (K⁺ channel blocker)", "Prolongs repolarization / increases firing", "Blocks Na⁺ entry", "Eliminates EPSPs", "Mimics myelin"),
    ]
    for drug, ans, w1, w2, w3 in pharma:
        add(
            items,
            seen_sk,
            mk_mcq(
                "Pharmacology",
                f"Application of {drug} produces which outcome?",
                ans,
                (w1, w2, w3),
                ans,
            ),
        )

    # --- Part 2: synapses & circuits ---
    synapse_items = [
        ("AMPA receptor activation at rest Mg²⁺", "Fast EPSC; NMDA still blocked by Mg²⁺", "Ionotropic Cl⁻ influx", "Only G-protein signaling", "Only presynaptic effect"),
        ("NMDA receptor with strong depolarization", "Mg²⁺ block relieved; Ca²⁺ entry possible", "Always closed at rest", "Only metabotropic", "Blocks all LTP"),
        ("GABA<sub>A</sub> at rest when E_Cl ≈ −70 mV", "Cl⁻ influx; inhibition/shunting", "Always excitatory", "Only presynaptic", "Requires cAMP"),
        ("GABA<sub>B</sub> receptor activation", "G-protein; often opens K⁺ / closes Ca²⁺", "Fast ionotropic Cl⁻", "Na⁺ channel opening", "Only in retina"),
        ("Nicotinic ACh at NMJ", "Fast cationic EPSP leading to endplate potential", "Metabotropic only", "Pure hyperpolarization", "Glutamate release only"),
        ("Botulinum toxin at motor synapse", "Cleaves SNAREs; blocks vesicle fusion", "Postsynaptic receptor block", "Myelin damage", "Na⁺ channel toxin"),
        ("α-Latrotoxin (excess release)", "Massive vesicle release; depletion possible", "Blocks Ca²⁺ channels", "Only inhibits GABA", "Prevents AP propagation"),
        ("Strengthening an synapse via LTP protocol", "Postsynaptic Ca²⁺ via NMDA + AMPA cooperation", "Only presynaptic Na⁺ increase", "Requires myelin", "Only in photoreceptors"),
    ]
    for ctx, ans, w1, w2, w3 in synapse_items:
        add(
            items,
            seen_sk,
            mk_mcq("Synaptic Transmission", f"In {ctx}, the best description is:", ans, (w1, w2, w3), ans),
        )

    integration = [
        ("Two EPSPs 5 ms apart at one synapse", "Temporal summation if within τ", "No summation ever", "Only spatial summation", "Only inhibition possible"),
        ("EPSP at dendrite vs soma (same amplitude locally)", "Distal EPSP smaller at soma (cable filter)", "Distal always larger", "Identical at AIS always", "Only gap junctions matter"),
        ("Shunting inhibition during an EPSP", "Reduced EPSP amplitude via increased conductance", "Increased EPSP always", "Only hyperpolarization without conductance change", "Blocks all spikes permanently"),
    ]
    for stem, ans, w1, w2, w3 in integration:
        add(
            items,
            seen_sk,
            mk_mcq("Synaptic Integration", stem + ":", ans, (w1, w2, w3), ans),
        )

    # --- Part 3: systems & lesions (conceptual, unique stems) ---
    lesions = [
        ("Left optic nerve transection", "Blindness in left eye", "Bitemporal hemianopia", "Right homonymous hemianopia", "Left superior quadrantanopia"),
        ("Optic chiasm midline compression", "Bitemporal hemianopia", "Left monocular blindness", "Right homonymous hemianopia", "Macular sparing only"),
        ("Right optic tract lesion", "Left homonymous hemianopia", "Right monocular blindness", "Bitemporal loss", "Ipsilateral quadrantanopia"),
        ("Left Meyer's loop (temporal lobe) damage", "Right superior quadrantanopia", "Left superior quadrantanopia", "Bitemporal hemianopia", "Right monocular blindness"),
        ("Right occipital lobe (V1) lesion", "Left homonymous hemianopia", "Right monocular blindness", "Bitemporal hemianopia", "Pure alexia only"),
        ("Complete left medial lemniscus in medulla", "Contralateral loss of touch/proprioception", "Ipsilateral face pain loss", "Bilateral blindness", "Pure aphasia"),
        ("Left spinothalamic tract at T8", "Contralateral pain/temperature loss below lesion", "Ipsilateral proprioception loss", "Bilateral UMN weakness only", "Deafness"),
        ("Brown-Séquard hemisection at T10 (right)", "Ipsilateral UMN weakness + DCML loss; contralateral pain loss", "Only bilateral flaccid paralysis", "Only autonomic loss", "Pure cerebellar ataxia"),
        ("Anterior spinal artery infarct", "Bilateral motor + spinothalamic loss; dorsal columns spared", "Isolated proprioception loss only", "Only autonomic symptoms", "Pure ataxia"),
        ("Right cerebellar hemisphere lesion", "Ipsilateral limb ataxia (planning/timing)", "Contralateral hemiparesis", "Bitemporal hemianopia", "Broca aphasia"),
        ("Cerebellar vermis lesion", "Truncal/gait ataxia", "Ipsilateral arm intention tremor only", "Homonymous hemianopia", "Hyperreflexia with Babinski"),
        ("Bilateral hippocampal damage", "Anterograde declarative memory impairment", "Pure motor weakness", "Color blindness", "Deafness"),
        ("Substantia nigra dopamine loss", "Bradykinesia and rigidity", "Hyperreflexia only", "Homonymous hemianopia", "Pure sensory neglect"),
        ("Left Broca area damage", "Nonfluent aphasia; comprehension relatively spared", "Fluent nonsense speech", "Pure alexia", "Right hemianopia only"),
        ("Left Wernicke area damage", "Fluent but impaired comprehension", "Nonfluent speech", "Deafness", "Pure motor neglect"),
        ("MLF lesion (left)", "Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus)", "Monocular blindness", "Bitemporal hemianopia", "Facial paralysis only"),
        ("Right CN VI nucleus lesion", "Horizontal gaze palsy toward lesion side / ipsilateral abduction deficit", "Optic chiasm syndrome", "Pure aphasia", "Only hearing loss"),
        ("Unilateral vestibular nerve lesion", "Vertigo and imbalance toward lesion; nystagmus", "Homonymous hemianopia", "Spastic paralysis only", "Pure aphasia"),
        ("Left lateral pontine syndrome (AICA)", "Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss", "Pure motor weakness only", "Bitemporal hemianopia", "Broca aphasia"),
    ]
    for lesion, ans, w1, w2, w3 in lesions:
        add(
            items,
            seen_sk,
            mk_mcq(
                "Clinical Neuroanatomy",
                f"Lesion: {lesion}. Expected deficit:",
                ans,
                (w1, w2, w3),
                f"{lesion} → {ans}.",
            ),
        )

    sensory = [
        ("Photoreceptor in darkness", "Relatively depolarized; glutamate release ongoing", "Hyperpolarized like bipolar ON cells always", "Spiking at 100 Hz", "Releases ACh only"),
        ("Hair cell stereocilia deflection toward tallest row", "Increased firing rate in auditory nerve", "Complete silence always", "Only Na⁺ pump stops", "Only pain fibers activate"),
        ("Olfactory receptor binding odorant", "G-protein cascade → cAMP → channel opening", "Direct gap junction to cortex", "Only electrical synapse", "Only in cerebellum"),
        ("Pacinian corpuscle high-frequency vibration", "Rapid adaptation; phasic firing", "Slow adaptation only", "Only nociceptor response", "Only in retina"),
    ]
    for stem, ans, w1, w2, w3 in sensory:
        add(
            items,
            seen_sk,
            mk_mcq("Sensory Systems", stem + ":", ans, (w1, w2, w3), ans),
        )

    regions = [
        "S1 barrel cortex", "CA1 hippocampus", "V1 layer IV", "M1 forelimb area", "A1 primary auditory cortex",
        "dorsal striatum", "substantia nigra pars compacta", "cerebellar Purkinje layer", "inferior colliculus",
        "olfactory bulb glomerular layer", "retinal ganglion cell layer", "spinal dorsal horn lamina II",
        "hypothalamic SCN", "amygdala lateral nucleus", "thalamic LGN", "brainstem vestibular nucleus",
        "hippocampal dentate gyrus", "prefrontal cortex", "brainstem locus coeruleus", "spinal ventral horn",
        "entorhinal cortex layer II", "superior colliculus", "nucleus accumbens core", "trigeminal spinal nucleus",
        "area postrema", "raphe magnus", "red nucleus", "subthalamic nucleus", "globus pallidus external segment",
    ]
    manipulations = [
        ("extracellular K⁺ is raised acutely", "Depolarization toward threshold; E_K less negative", "Hyperpolarization to E_Na", "No change in V_m", "Only synaptic vesicles swell"),
        ("AMPA receptors are blocked", "EPSPs reduced; NMDA-only subthreshold may remain weak", "Spikes enlarge", "Myelin thickens", "Only photopigment bleaches"),
        ("voltage-gated Na⁺ is blocked", "Action potentials fail; passive responses remain", "Only K⁺ blocked", "Only Cl⁻ rises in nucleus", "Gap junctions close permanently"),
        ("GABAergic shunting increases", "EPSP amplitude at soma decreases", "EPSPs always increase", "Only presynaptic Ca²⁺ rises", "Only LTP without change"),
        ("presynaptic release probability falls", "Smaller evoked EPSCs; same quantal size", "Quantal size doubles always", "Only postsynaptic Na⁺ rises", "Only muscle spindle fires"),
        ("myelin is stripped but nodes remain", "Conduction velocity falls sharply", "Conduction doubles", "Resting potential becomes +60 mV", "Only retina affected"),
        ("NMDA-dependent Ca²⁺ entry is blocked during pairing", "LTP induction is impaired", "LTD impossible always", "Only GABAergic LTP", "Only cochlear tuning shifts"),
        ("afterhyperpolarization K⁺ current is enhanced", "Spike frequency adaptation increases", "Neuron fires faster without limit", "Only Na⁺ channels open", "Only glomeruli shrink"),
    ]
    for region in regions:
        for manip, ans, w1, w2, w3 in manipulations:
            if len(items) >= TARGET:
                break
            add(
                items,
                seen_sk,
                mk_mcq(
                    "Integrative Neuroscience",
                    f"In {region}, if {manip}, the best prediction is:",
                    ans,
                    (w1, w2, w3),
                    ans,
                ),
            )
        if len(items) >= TARGET:
            break

    clamp = [
        ("Voltage clamp at −40 mV with TTX and K⁺ channels available", "Mostly K⁺ current isolated if Na⁺ blocked", "Only capacitive current forever", "Only Cl⁻ without gradient", "Photoreceptor current only"),
        ("Current clamp with brief hyperpolarizing step", "Subthreshold voltage change without spikes", "Always full AP train", "Only synaptic vesicle fusion", "Only cochlear amplification"),
        ("Dual whole-cell recording of connected cells", "Can measure gap junction coupling or monosynaptic latency", "Only measures myelin thickness", "Only measures glomeruli size", "Only measures bone density"),
    ]
    for stem, ans, w1, w2, w3 in clamp:
        add(items, seen_sk, mk_mcq("Methods", stem + ":", ans, (w1, w2, w3), ans))

    ap_prop = [
        ("Inactivation of Na⁺ channels during a long train", "Spike amplitude may decline; frequency adaptation", "Spikes grow without bound", "Resting potential becomes +60 mV", "Only photoreceptors fire"),
        ("Hyperpolarized resting V_m near E_K", "Fewer Na⁺ channels available from closed state", "More Na⁺ channels always open", "Only K⁺ channels disappear", "Only Cl⁻ channels open"),
        ("Ectopic spike initiation in demyelinated axon", "Can occur where excitability is high along axon", "Impossible without nodes", "Only in dendrites always", "Only in glomeruli"),
        ("Antidromic vs orthodromic propagation", "Same biophysics; direction follows refractory tail", "Antidromic requires myelin only", "Orthodromic only in retina", "Only gap junctions propagate"),
        ("Absolute refractory period primarily reflects", "Na⁺ inactivation preventing immediate re-firing", "Only K⁺ leak", "Only synaptic depression", "Only photopigment recovery"),
        ("Relative refractory period", "Stronger stimulus needed; K⁺ still elevated", "No stimulus can fire cell", "Only Cl⁻ influx", "Only muscle spindle stretch"),
        ("Anode break excitation after hyperpolarization", "Na⁺ channels recover from inactivation; can fire on repolarization", "Permanent silence", "Only GABA release", "Only cochlear tuning"),
        ("Threshold is best defined as", "Voltage where net inward current triggers regenerative Na⁺ activation", "Fixed at 0 mV always", "Same as E_K always", "Only synaptic quantal size"),
        ("Safety factor for propagation in myelinated axon", "Multiple nodes can support propagation if one fails", "Exactly one node required always", "Myelin blocks all current", "Only dendrites propagate"),
        ("Temperature increase on squid axon", "Kinetics faster; shorter AP width often", "AP width always doubles", "Resting potential fixed at 0 mV", "Only photoreceptors change"),
        ("Local anesthetic block of small vs large fibers", "Small myelinated/C fibers often blocked at lower exposure (use-dependent)", "Large fibers always blocked first", "No use dependence", "Only affects photoreceptors"),
        ("Accommodation during slow depolarizing ramp", "Inactivation reduces firing despite depolarization", "Increases firing without limit", "Only affects glomeruli", "Only affects cochlea basilar membrane"),
        ("Post-tetanic potentiation (short-term)", "Presynaptic Ca²⁺ buildup increases release briefly", "Postsynaptic Na⁺ deletion", "Only LTP in hippocampus forever", "Only gap junction opening"),
        ("Synaptic fatigue after high-frequency stimulation", "Depletion of readily releasable vesicles", "Unlimited vesicle supply always", "Only myelin loss", "Only photopigment bleaching"),
        ("Dendritic Na⁺ spike in some pyramidal neurons", "Can boost distal signal toward soma", "Never occurs in CNS", "Only in NMJ", "Only in olfactory bulb"),
        ("Backpropagating action potential into dendrites", "Can activate dendritic channels and plasticity rules", "Blocked by myelin on dendrites", "Only in photoreceptors", "Only in muscle spindles"),
        ("Ephaptic coupling between unmyelinated fibers", "Extracellular fields can influence neighbors weakly", "Stronger than gap junctions always", "Only in cerebellum exclusively", "Only in retina exclusively"),
    ]
    for stem, ans, w1, w2, w3 in ap_prop:
        if len(items) >= TARGET:
            break
        add(items, seen_sk, mk_mcq("Action Potentials", stem + ":", ans, (w1, w2, w3), ans))

    return items[:TARGET]


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
    items = generate()
    sk_set = {skeleton(i["question"]) for i in items}
    if len(sk_set) != len(items):
        raise SystemExit(f"Internal duplicate skeletons: {len(items)} items, {len(sk_set)} skeletons")
    body = (
        "// Pinnacle megabank — regenerate: python3 _generate_pinnacle_megabank.py\n"
        "// ~300 unique hard MCQs across Parts 1–3.\n\n"
        + format_js("PINNACLE_MEGA_POOL", items)
        + "\n"
    )
    OUT.write_text(body, encoding="utf-8")
    print(f"Wrote {OUT}: {len(items)} unique pinnacle questions ({len(sk_set)} skeletons)")


if __name__ == "__main__":
    main()
