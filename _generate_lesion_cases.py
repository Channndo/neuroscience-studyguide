#!/usr/bin/env python3
"""Emit JS objects for PROCTORED_LESION_POOL replacement cases (indices 15+)."""
import json

CASES = [
    ("Left optic nerve", "Total blindness in the left eye", "Right homonymous hemianopia", "Bitemporal hemianopia", "Left superior quadrantanopia"),
    ("Right optic nerve", "Total blindness in the right eye", "Left monocular blindness", "Bitemporal hemianopia", "Right homonymous hemianopia"),
    ("Optic chiasm (pituitary adenoma)", "Bitemporal hemianopia", "Right homonymous hemianopia", "Left monocular blindness", "Macular sparing only"),
    ("Right optic tract", "Left homonymous hemianopia", "Right monocular blindness", "Bitemporal hemianopia", "Left superior quadrantanopia"),
    ("Left optic tract", "Right homonymous hemianopia", "Left monocular blindness", "Bitemporal hemianopia", "Right inferior quadrantanopia"),
    ("Right Meyer's loop (temporal lobe)", "Left superior quadrantanopia ('pie in the sky')", "Right superior quadrantanopia", "Bitemporal hemianopia", "Left monocular blindness"),
    ("Left Meyer's loop (temporal lobe)", "Right superior quadrantanopia", "Left superior quadrantanopia", "Right homonymous hemianopia", "Bitemporal hemianopia"),
    ("Right occipital lobe (V1)", "Left homonymous hemianopia with macular involvement", "Right monocular blindness", "Bitemporal hemianopia", "Pure word deafness"),
    ("Left occipital lobe (V1)", "Right homonymous hemianopia", "Left monocular blindness", "Right superior quadrantanopia only", "Broca aphasia"),
    ("Right lateral geniculate nucleus", "Contralateral homonymous visual field defect", "Ipsilateral monocular blindness", "Bitemporal hemianopia", "Pure alexia without field loss"),
    ("Left medial longitudinal fasciculus (MLF)", "Internuclear ophthalmoplegia (impaired adduction + abduction nystagmus)", "Monocular blindness", "Bitemporal hemianopia", "Facial paralysis only"),
    ("Right abducens (CN VI) nucleus", "Horizontal gaze palsy toward lesion; ipsilateral abduction weakness", "Optic chiasm syndrome", "Pure aphasia", "Only hearing loss"),
    ("Left facial nerve (CN VII) peripheral lesion", "Ipsilateral lower face weakness; forehead often spared if UMN spared", "Contralateral arm weakness only", "Homonymous hemianopia", "Deafness only"),
    ("Right hypoglossal (CN XII) nerve", "Tongue deviates to the right on protrusion", "Tongue deviates left", "Bitemporal hemianopia", "Pure ataxia only"),
    ("Unilateral vestibular nerve lesion", "Vertigo, imbalance, nystagmus toward lesion", "Homonymous hemianopia", "Spastic quadriplegia", "Broca aphasia"),
    ("Right medial lemniscus in medulla", "Contralateral loss of touch, vibration, proprioception", "Ipsilateral face pain loss", "Bitemporal hemianopia", "Pure aphasia"),
    ("Left spinothalamic tract at T6", "Contralateral pain and temperature loss below T6", "Ipsilateral proprioception loss below T6", "Bilateral blindness", "Only autonomic loss"),
    ("Right dorsal column at C5", "Ipsilateral loss of fine touch/proprioception below C5", "Contralateral pain loss only", "Bitemporal hemianopia", "Broca aphasia"),
    ("Complete spinal hemisection at T10 (Brown-Séquard)", "Ipsilateral UMN weakness and DCML loss; contralateral spinothalamic loss below lesion", "Bilateral flaccid paralysis only", "Only autonomic symptoms", "Pure cerebellar ataxia"),
    ("Anterior spinal artery syndrome (thoracic)", "Bilateral motor weakness and spinothalamic loss; dorsal columns spared", "Isolated proprioception loss only", "Pure ataxia", "Monocular blindness"),
    ("Central cord syndrome (cervical)", "Greater weakness in upper limbs than lower; variable sensory loss", "Only lower limb weakness with intact arms", "Homonymous hemianopia", "Deafness"),
    ("Cauda equina compression", "Lower motor neuron signs in legs; saddle anesthesia; bowel/bladder issues", "Upper motor neuron spasticity only above lesion", "Bitemporal hemianopia", "Broca aphasia"),
    ("Right cerebellar hemisphere", "Ipsilateral limb ataxia and dysmetria", "Contralateral hemiparesis", "Homonymous hemianopia", "Nonfluent aphasia"),
    ("Cerebellar vermis", "Truncal and gait ataxia", "Ipsilateral arm intention tremor only", "Homonymous hemianopia", "Hyperreflexia with Babinski"),
    ("Left basal ganglia (Parkinsonian pattern)", "Bradykinesia and rigidity (often right body if left hemisphere motor loop)", "Flaccid paralysis only", "Bitemporal hemianopia", "Pure alexia"),
    ("Right thalamic VPL nucleus", "Contralateral hemibody sensory loss", "Ipsilateral sensory loss", "Bitemporal hemianopia", "Broca aphasia only"),
    ("Left thalamic language-related nuclei (dominant)", "Thalamic aphasia or dysfluency with possible memory issues", "Pure deafness", "Homonymous hemianopia only", "Only cerebellar ataxia"),
    ("Bilateral hippocampal damage", "Profound anterograde declarative memory impairment", "Pure motor weakness", "Color blindness only", "Deafness"),
    ("Bilateral amygdala (selective)", "Impaired fear conditioning; altered social fear processing", "Homonymous hemianopia", "Pure motor weakness", "Deafness"),
    ("Left Broca area", "Nonfluent aphasia with relatively preserved comprehension", "Fluent nonsense speech (Wernicke pattern)", "Pure alexia without language loss", "Deafness"),
    ("Left Wernicke area", "Fluent but impaired comprehension (receptive aphasia)", "Nonfluent speech with good comprehension", "Pure motor neglect only", "Monocular blindness"),
    ("Arcuate fasciculus (dominant hemisphere)", "Conduction aphasia: poor repetition with fluent speech", "Pure deafness", "Homonymous hemianopia", "Only ataxia"),
    ("Right parietal neglect syndrome", "Left spatial neglect and anosognosia", "Right neglect", "Bitemporal hemianopia", "Broca aphasia"),
    ("Left primary motor cortex (hand area)", "Contralateral hand/upper limb weakness (UMN)", "Ipsilateral hand weakness", "Bitemporal hemianopia", "Pure alexia"),
    ("Right primary motor cortex (leg area)", "Contralateral leg weakness (UMN)", "Ipsilateral leg weakness only", "Homonymous hemianopia", "Deafness"),
    ("Left lateral pontine (AICA) syndrome", "Ipsilateral face pain/temp + cerebellar signs; contralateral body pain/temp loss", "Pure motor weakness only", "Bitemporal hemianopia", "Broca aphasia"),
    ("Right lateral medullary (PICA) syndrome", "Ipsilateral face pain/temp loss; contralateral body pain/temp loss; ataxia; Horner possible", "Bilateral blindness", "Pure aphasia", "Only deafness"),
    ("Medial medullary syndrome", "Ipsilateral tongue weakness; contralateral UMN weakness; contralateral DCML loss", "Bitemporal hemianopia", "Only cerebellar ataxia", "Pure alexia"),
    ("Right internal capsule (posterior limb)", "Contralateral hemiparesis (face/arm>leg depending on fibers)", "Ipsilateral weakness", "Bitemporal hemianopia", "Deafness"),
    ("Left prefrontal orbitofrontal lesion", "Disinhibition and personality change (varies)", "Homonymous hemianopia", "Pure deafness", "Only ataxia"),
    ("Bilateral auditory cortex (Heschl's)", "Cortical deafness or profound auditory processing deficit", "Monocular blindness", "Bitemporal hemianopia", "Broca aphasia"),
    ("Unilateral cochlear nerve section", "Profound unilateral sensorineural hearing loss", "Bilateral deafness from cortex only", "Homonymous hemianopia", "Pure aphasia"),
    ("Right superior colliculus lesion", "Contralateral visual neglect for orienting; saccade deficits possible", "Bitemporal hemianopia", "Broca aphasia", "Only DCML loss"),
    ("Left red nucleus (combined with nearby pathways)", "Tremor and motor coordination issues; pattern depends on adjacent damage", "Pure blindness", "Only deafness", "Only aphasia without motor signs"),
    ("Cervical cord syrinx expanding centrally", "Cape-like loss of pain/temp in upper limbs; later motor signs", "Only DCML loss in legs first always", "Bitemporal hemianopia", "Broca aphasia"),
    ("Tabes dorsalis (dorsal columns)", "Loss of proprioception/vibration; sensory ataxia; lancinating pains", "Pure motor UMN only", "Homonymous hemianopia", "Deafness only"),
    ("Right middle cerebral artery stroke (left dominant hemisphere)", "Right face/arm weakness; aphasia if language dominant left", "Left hemiparesis with aphasia on right dominant side", "Pure vision loss only", "Only cerebellar signs"),
    ("Left middle cerebral artery stroke (left dominant hemisphere)", "Left face/arm weakness; aphasia (dominant hemisphere language)", "Right hemiparesis with aphasia", "Bitemporal hemianopia", "Only deafness"),
    ("Right middle cerebral artery stroke (right non-dominant hemisphere)", "Left face/arm weakness; possible neglect; typically no aphasia", "Aphasia with intact comprehension", "Bitemporal hemianopia", "Broca-type fluent nonsense speech"),
    ("Left pyramid (medulla) corticospinal lesion before decussation", "Contralateral limb weakness (UMN) below lesion", "Ipsilateral limb weakness below lesion", "Bilateral flaccid paralysis at lesion level only", "Ipsilateral face weakness only (facial nucleus pattern)"),
]

def js_case(lesion, ans, w1, w2, w3):
    return f"""  {{
    topic: "Clinical Neuroanatomy",
    module: "part3",
    question: {json.dumps(f"Lesion: {lesion}. Most likely deficit:")},
    options: [
      {json.dumps(ans)},
      {json.dumps(w1)},
      {json.dumps(w2)},
      {json.dumps(w3)}
    ],
    correct: 0,
    explanation: {json.dumps(f"{lesion} → {ans}.")},
    wrongExplanations: [
      "",
      {json.dumps(f"Incorrect: {w1} does not follow from a {lesion.lower()} lesion.")},
      {json.dumps(f"Incorrect: {w2} is inconsistent with the stated lesion site.")},
      {json.dumps(f"Incorrect: {w3} reflects a different pathway or syndrome.")}
    ]
  }},"""

for c in CASES:
    print(js_case(*c))
