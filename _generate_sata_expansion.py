#!/usr/bin/env python3
"""Append 30 unique select-all items and rebalance a few existing SATA keys."""
import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TARGET = ROOT / "questions-proctored-mock.js"

NEW_ITEMS = [
    {
        "topic": "Ion Channels",
        "module": "part1",
        "question": "Voltage-gated Na⁺ channel gating: select all that apply.",
        "options": [
            "Activation opens the pore on depolarization",
            "Inactivation can close the pore during sustained depolarization",
            "They are equally permeable to Ca²⁺ and Na⁺ at peak open probability",
            "Tetrodotoxin blocks many neuronal isoforms from the extracellular side",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Peak Na⁺ selectivity excludes meaningful Ca²⁺ flux through these channels.", ""],
    },
    {
        "topic": "Passive Properties",
        "module": "part1",
        "question": "Cable equation / length constant: select all correct.",
        "options": [
            "λ = √(R_m / R_i)",
            "Doubling R_m with fixed R_i increases λ",
            "λ is unchanged if only C_m changes",
            "Distal synaptic EPSPs decay more when λ is short",
        ],
        "correctIndices": [0, 1, 2, 3],
        "wrongExplanations": ["", "", "", ""],
    },
    {
        "topic": "Synaptic Plasticity",
        "module": "part2",
        "question": "Hebbian LTP at CA3–CA1 synapses: select all supported statements.",
        "options": [
            "Coincident pre- and postsynaptic activity can strengthen AMPA responses",
            "NMDA receptors act as coincidence detectors via voltage-dependent Mg²⁺ block",
            "LTP requires immediate permanent silencing of all inhibitory interneurons",
            "Ca²⁺ entry through NMDA receptors can trigger kinase cascades",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Inhibition modulates induction but is not abolished globally for LTP.", ""],
    },
    {
        "topic": "Sensory Transduction",
        "module": "part3",
        "question": "Photoreceptor responses to light: select all true.",
        "options": [
            "Rods hyperpolarize because light closes cGMP-gated channels",
            "Reduced glutamate release from photoreceptors depolarizes ON bipolar cells",
            "Light increases cGMP in the outer segment",
            "Dark current is carried partly by Na⁺ and Ca²⁺ influx",
        ],
        "correctIndices": [0, 3],
        "wrongExplanations": ["", "ON bipolars depolarize when glutamate falls; that statement alone is false as written.", "Light lowers, not raises, cGMP.", ""],
    },
    {
        "topic": "Motor Systems",
        "module": "part3",
        "question": "Upper vs lower motor neuron signs: select all correct pairings.",
        "options": [
            "UMN lesion → increased deep tendon reflexes",
            "LMN lesion → flaccid weakness with atrophy",
            "UMN lesion → fasciculations as the primary sign",
            "LMN lesion → reduced tone early",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Fasciculations point to LMN or anterior horn pathology, not classic UMN lesions.", ""],
    },
    {
        "topic": "Basal Ganglia",
        "module": "part3",
        "question": "Direct vs indirect pathway (simplified): select all accurate.",
        "options": [
            "Direct pathway striatal cells are D1-like and facilitate thalamocortical drive",
            "Indirect pathway striatal cells are D2-like and tend to suppress movement",
            "Substantia nigra pars compacta dopamine loss favors indirect pathway activity in Parkinsonism",
            "Globus pallidus interna inhibition of thalamus is the only output of basal ganglia",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "GPi and SNr both provide inhibitory output; GPi is not the sole output nucleus."],
    },
    {
        "topic": "Autonomic Neuroscience",
        "module": "part2",
        "question": "Sympathetic vs parasympathetic ganglia: select all true.",
        "options": [
            "Preganglionic sympathetic fibers can be myelinated and relatively short to the chain ganglia",
            "Parasympathetic preganglionic fibers are long and synapse near or in target organs",
            "All autonomic postganglionic neurons release ACh onto smooth muscle",
            "Nicotinic receptors mediate fast EPSPs in autonomic ganglia",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Most sympathetic postganglionic neurons release norepinephrine, not ACh (exceptions exist).", ""],
    },
    {
        "topic": "Neurotransmitters",
        "module": "part2",
        "question": "GABAergic signaling: select all correct.",
        "options": [
            "GABA_A receptors are ligand-gated Cl⁻ channels",
            "GABA_B receptors are metabotropic and can open K⁺ channels",
            "GABA always depolarizes mature CNS neurons because E_Cl is above rest",
            "Benzodiazepines positive-modulate many GABA_A receptors",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "In many mature neurons E_Cl is below rest, so GABA_A activation hyperpolarizes.", ""],
    },
    {
        "topic": "Development",
        "module": "part2",
        "question": "Activity-dependent refinement: select all that apply.",
        "options": [
            "Binocular competition shapes ocular dominance columns",
            "Spontaneous retinal waves can drive wiring before vision",
            "Critical periods never close in sensory cortex",
            "Myelination timing can influence conduction delays in circuits",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Critical periods close or narrow for many sensory systems after experience.", ""],
    },
    {
        "topic": "Methods",
        "module": "part3",
        "question": "fMRI BOLD signal basics: select all accurate.",
        "options": [
            "BOLD reflects blood oxygenation changes coupled to metabolism",
            "Increased neural activity locally can increase oxygenated hemoglobin relative to deoxyhemoglobin",
            "BOLD directly counts action potentials one-for-one",
            "Vascular dynamics blur temporal resolution compared to electrophysiology",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "BOLD is hemodynamic and indirect, not a spike counter.", ""],
    },
    {
        "topic": "Hearing",
        "module": "part3",
        "question": "Cochlear tuning: select all true.",
        "options": [
            "Basilar membrane is stiffer at the base (high-frequency place)",
            "Outer hair cells provide active amplification",
            "All frequencies map to the apex only",
            "Inner hair cells primarily synapse onto afferents",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Tonotopy maps low frequencies to the apex and high to the base.", ""],
    },
    {
        "topic": "Sleep",
        "module": "part3",
        "question": "REM vs NREM physiology: select all correct.",
        "options": [
            "REM shows muscle atonia in normal subjects",
            "NREM slow-wave sleep shows large-amplitude delta EEG",
            "REM EEG resembles quiet wakefulness in some bands",
            "Dreaming occurs exclusively in NREM stage 3",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "Vivid dreaming is classically linked to REM, not exclusively to NREM3."],
    },
    {
        "topic": "Pain",
        "module": "part3",
        "question": "Nociceptive pathways: select all accurate.",
        "options": [
            "First-order nociceptors can synapse in dorsal horn laminae I–II",
            "Spinothalamic tract carries pain and temperature",
            "All fast touch and pain share identical thickly myelinated fibers",
            "Central sensitization can widen receptive fields after injury",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Fast touch uses Aβ fibers; pain uses Aδ and C fibers.", ""],
    },
    {
        "topic": "Cerebellum",
        "module": "part3",
        "question": "Cerebellar motor learning signs: select all that apply.",
        "options": [
            "Lateral cerebellar lesions can cause intention tremor",
            "Medial vermis lesions relate to truncal ataxia",
            "Cerebellar output is exclusively excitatory to spinal motor neurons",
            "Purkinje cells inhibit deep nuclei",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Deep nuclei are inhibited by Purkinje cells; final output is disynaptic and not direct excitation of LMNs.", ""],
    },
    {
        "topic": "Memory",
        "module": "part3",
        "question": "Hippocampal role in memory: select all supported.",
        "options": [
            "Declarative/episodic encoding depends on hippocampal circuits",
            "Procedural skills like riding a bike rely primarily on hippocampus alone",
            "Bilateral medial temporal damage can cause anterograde amnesia",
            "Place cells fire when an animal occupies specific locations",
        ],
        "correctIndices": [0, 2, 3],
        "wrongExplanations": ["", "Procedural memory involves striatum/cerebellum among other structures, not hippocampus alone.", "", ""],
    },
    {
        "topic": "Neuroendocrine",
        "module": "part3",
        "question": "Hypothalamic–pituitary control: select all true.",
        "options": [
            "Oxytocin is synthesized in hypothalamic neurons and released from posterior pituitary",
            "CRH from hypothalamus drives ACTH release from anterior pituitary",
            "Posterior pituitary secretes peptide hormones made locally in the gland",
            "Dopamine from hypothalamus inhibits prolactin release",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Posterior pituitary stores and releases hypothalamic peptides; it does not synthesize them.", ""],
    },
    {
        "topic": "Glial Cells",
        "module": "part2",
        "question": "Astrocyte functions: select all that apply.",
        "options": [
            "K⁺ spatial buffering after neuronal firing",
            "Uptake of glutamate from synaptic cleft",
            "Generation of action potentials for long-range signaling like axons",
            "Formation of the glial limitans at the blood–brain barrier",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Astrocytes use graded calcium waves, not classic long-range APs in axons.", ""],
    },
    {
        "topic": "Retina",
        "module": "part3",
        "question": "Retinal circuitry: select all correct.",
        "options": [
            "Horizontal cells provide lateral inhibition in the outer plexiform layer",
            "Amacrine cells modulate bipolar–ganglion synapses",
            "Ganglion cells are the output neurons of the retina",
            "Rods and cones both depolarize strongly to light",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "Photoreceptors hyperpolarize to light; the statement reverses their response."],
    },
    {
        "topic": "Epilepsy",
        "module": "part3",
        "question": "Seizure mechanisms (conceptual): select all accurate.",
        "options": [
            "Imbalance of excitation and inhibition can promote hypersynchrony",
            "Spread can involve thalamocortical loops",
            "All seizures require visible tonic–clonic movements",
            "Gap junction coupling can contribute to synchrony in some models",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Absence and focal impaired-awareness seizures may lack dramatic motor signs.", ""],
    },
    {
        "topic": "Neurodegeneration",
        "module": "part3",
        "question": "Alzheimer disease pathology: select all true.",
        "options": [
            "Extracellular amyloid-β plaques are a hallmark",
            "Intracellular neurofibrillary tangles contain hyperphosphorylated tau",
            "Cholinergic basal forebrain neurons are vulnerable early",
            "Motor neuron loss in anterior horn is the primary lesion",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "Anterior horn motor neuron loss defines ALS, not typical Alzheimer pathology."],
    },
    {
        "topic": "Language",
        "module": "part3",
        "question": "Aphasia profiles: select all correct pairings.",
        "options": [
            "Broca → nonfluent speech with relatively preserved comprehension",
            "Wernicke → fluent but paraphasic speech with poor comprehension",
            "Conduction aphasia → impaired repetition with fluent speech",
            "Global aphasia → isolated dysarthria only",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "Global aphasia affects fluency and comprehension broadly, not dysarthria alone."],
    },
    {
        "topic": "Vestibular",
        "module": "part3",
        "question": "Semicircular canal physiology: select all true.",
        "options": [
            "Endolymph displacement deflects cupula and hair bundles",
            "Horizontal canal pairs detect yaw head rotation",
            "Canals directly measure linear translation like otolith organs",
            "Canal plane aligns with complementary contralateral canal",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Otolith organs detect linear acceleration and head tilt; canals detect angular acceleration.", ""],
    },
    {
        "topic": "Spinal Cord",
        "module": "part3",
        "question": "Brown-Séquard hemisection: select all expected below the lesion.",
        "options": [
            "Ipsilateral loss of proprioception/vibration (dorsal columns)",
            "Contralateral loss of pain/temperature (spinothalamic)",
            "Ipsilateral UMN weakness",
            "Contralateral dorsal column loss",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "Dorsal column fibers decussate in the medulla; loss is ipsilateral to the cord lesion."],
    },
    {
        "topic": "Neuromuscular",
        "module": "part2",
        "question": "Neuromuscular junction pharmacology: select all accurate.",
        "options": [
            "Botulinum toxin cleaves SNARE proteins reducing ACh release",
            "Neostigmine inhibits acetylcholinesterase",
            "Curare-like agents block postsynaptic nicotinic receptors",
            "Lambert–Eaton syndrome increases quantal release via presynaptic Ca²⁺ channel antibodies",
        ],
        "correctIndices": [0, 1, 2],
        "wrongExplanations": ["", "", "", "Lambert–Eaton reduces release; myasthenia targets postsynaptic receptors."],
    },
    {
        "topic": "Rhythmic Motor",
        "module": "part2",
        "question": "Central pattern generators: select all true.",
        "options": [
            "Can produce locomotor rhythms without sensory feedback",
            "Reciprocal inhibition helps alternate flexor/extensor bursts",
            "Require continuous cortical spiking for each muscle twitch in all species",
            "Can be modulated by descending and sensory inputs",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "CPGs can run subcortically; cortex modulates but does not drive every twitch.", ""],
    },
    {
        "topic": "Ion Homeostasis",
        "module": "part1",
        "question": "Na⁺/K⁺-ATPase: select all correct.",
        "options": [
            "Exports 3 Na⁺ and imports 2 K⁺ per ATP hydrolyzed cycle (classic stoichiometry)",
            "Is electrogenic and contributes to resting potential",
            "Is the sole determinant of action potential peak amplitude",
            "Can be inhibited by cardiac glycosides like ouabain",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Peak amplitude is set mainly by Na⁺ channel gating and Na⁺ driving force, not pump stoichiometry alone.", ""],
    },
    {
        "topic": "Receptors",
        "module": "part2",
        "question": "Metabotropic glutamate receptors (group I example): select all true.",
        "options": [
            "Often couple to Gq and can raise postsynaptic Ca²⁺",
            "Can modulate ionotropic receptor function",
            "Are always ligand-gated ion channels like AMPA",
            "Slow EPSPs/IPSPs can outlast fast ionotropic events",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Group I mGluRs are GPCRs, not ionotropic AMPA-like channels.", ""],
    },
    {
        "topic": "Olfaction",
        "module": "part3",
        "question": "Olfactory transduction: select all accurate.",
        "options": [
            "Odorants bind receptors on cilia of olfactory sensory neurons",
            "Golf activates adenylyl cyclase raising cAMP",
            "All olfactory receptor neurons express the same single receptor gene",
            "CNG channels admit Na⁺ and Ca²⁺ depolarizing the neuron",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Each OSN typically expresses one receptor type from a large gene family.", ""],
    },
    {
        "topic": "Gustation",
        "module": "part3",
        "question": "Taste coding: select all true.",
        "options": [
            "Different taste qualities engage partially overlapping peripheral pathways",
            "Umami is often signaled by glutamate binding metabotropic receptors",
            "Sweet and bitter always share identical labeled lines with no overlap",
            "Brainstem gustatory nuclei receive primary afferents from VII, IX, and X",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Peripheral and central populations show overlap and combinatorial coding.", ""],
    },
    {
        "topic": "Computational",
        "module": "part1",
        "question": "Integrate-and-fire simplifications: select all that apply.",
        "options": [
            "Threshold crossing triggers a stereotyped spike event",
            "Subthreshold dynamics often follow RC membrane properties",
            "Every dendritic branch is modeled with full Hodgkin–Huxley kinetics always",
            "Refractory period limits maximal firing rate",
        ],
        "correctIndices": [0, 1, 3],
        "wrongExplanations": ["", "", "Integrate-and-fire models deliberately omit full HH kinetics in dendrites.", ""],
    },
]

REBALANCE = {
    "Quantal release: select all true.": [0],
    "EPSP/IPSP integration: select all.": [0, 1],
    "Feedforward inhibition: select all.": [0, 1],
    "Goldman/constant-field resting potential: select all.": [1],
    "During a typical squid axon action potential, which are true? (Select all.)": [0],
}


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def render_sata(item):
    opts = ",\n      ".join(js_str(o) for o in item["options"])
    ci = ", ".join(str(i) for i in item["correctIndices"])
    we = ",\n      ".join(js_str(w) for w in item["wrongExplanations"])
    return f"""  {{
    type: "selectAll",
    topic: {js_str(item["topic"])},
    module: {js_str(item["module"])},
    question: {js_str(item["question"])},
    options: [
      {opts}
    ],
    correctIndices: [{ci}],
    scoringRule: "All-or-nothing: every correct statement must be checked and no incorrect statement checked.",
    explanation: "Review each statement independently; partial selection counts as incorrect for exam-style scoring.",
    wrongExplanations: [
      {we}
    ]
  }}"""


def main():
    text = TARGET.read_text(encoding="utf-8")
    for stem, indices in REBALANCE.items():
        pat = re.compile(
            r'(question: "' + re.escape(stem) + r'".*?correctIndices: )\[[^\]]+\]',
            re.S,
        )
        new = "[" + ", ".join(str(i) for i in indices) + "]"
        text, n = pat.subn(r"\1" + new, text, count=1)
        if not n:
            print("warn: rebalance miss", stem)

    insert_at = text.index("];\n\nconst PROCTORED_LESION_POOL")
    block = ",\n".join(render_sata(it) for it in NEW_ITEMS)
    text = text[:insert_at] + ",\n" + block + text[insert_at:]

    TARGET.write_text(text, encoding="utf-8")
    print(f"Appended {len(NEW_ITEMS)} SATA items; file updated.")


if __name__ == "__main__":
    main()
