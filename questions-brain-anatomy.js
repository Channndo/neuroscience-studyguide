// Brain structure identification — requires brain-anatomy-diagrams.js (BRAIN_ANATOMY_DIAGRAM).

(function () {
  const D = typeof BRAIN_ANATOMY_DIAGRAM !== "undefined" ? BRAIN_ANATOMY_DIAGRAM : null;

  const BRAIN_DIFFICULTY_1 = new Set([
    "thalamus", "hypothalamus", "corpus_callosum", "cerebellum", "pons", "medulla", "midbrain",
    "frontal_cortex", "occipital_cortex", "parietal_cortex", "temporal_cortex",
    "frontal_lobe", "parietal_lobe", "temporal_lobe", "occipital_lobe",
    "brainstem", "spinal_cord", "pituitary"
  ]);
  const BRAIN_DIFFICULTY_3 = new Set([
    "fornix", "third_ventricle", "mammillary_bodies", "optic_chiasm", "superior_colliculus",
    "cerebral_peduncle", "fourth_ventricle", "central_sulcus", "lateral_sulcus",
    "pineal_gland", "primary_auditory_cortex",
    "primary_visual_cortex", "amygdala", "hippocampus", "lateral_ventricle"
  ]);

  function difficultyFor(highlight) {
    if (BRAIN_DIFFICULTY_1.has(highlight)) return 1;
    if (BRAIN_DIFFICULTY_3.has(highlight)) return 3;
    return 2;
  }

  function mk(view, highlight, question, options, correct, explanation, wrongExplanations) {
    return {
      topic: "Neuroanatomy",
      module: "part3",
      anatomyDiagram: true,
      anatomyView: view,
      highlightKey: highlight,
      difficulty: difficultyFor(highlight),
      diagram: D ? D.diagram(view, highlight) : "",
      question,
      options,
      correct,
      explanation,
      wrongExplanations
    };
  }

  /** @type {Array<[string, string, string, string[], number, string, string[]]>} */
  const SPECS = [
    ["sagittal", "thalamus", "In this midsagittal section, the highlighted mass ventral to the corpus callosum is the:", ["Thalamus", "Hypothalamus", "Pons", "Cerebellum"], 0, "The thalamus is the major diencephalic relay nucleus — ventral to the corpus callosum and rostral to the midbrain.", ["", "The hypothalamus lies ventral to the thalamus, not in its place.", "The pons is caudal hindbrain.", "The cerebellum is posterior to the brainstem."],],
    ["sagittal", "hypothalamus", "The highlighted ventral diencephalic region inferior to the thalamus is the:", ["Hypothalamus", "Thalamus", "Corpus callosum", "Medulla oblongata"], 0, "The hypothalamus regulates autonomic, endocrine, and homeostatic functions.", ["", "The thalamus is dorsal to this highlight.", "The corpus callosum is dorsal white matter.", "The medulla is caudal brainstem, not forebrain."],],
    ["sagittal", "corpus_callosum", "The highlighted C-shaped white-matter bridge connecting the cerebral hemispheres is the:", ["Corpus callosum", "Internal capsule", "Fornix", "Corticospinal tract"], 0, "The corpus callosum is the largest commissure — visible as the arched band on midsagittal section.", ["", "The internal capsule is seen on coronal sections lateral to the thalamus.", "The fornix is a smaller limbic tract ventral to the corpus callosum.", "Corticospinal fibers descend through the internal capsule and brainstem, not this arch."],],
    ["sagittal", "fornix", "The highlighted limbic tract arching beneath the corpus callosum (toward mammillary bodies) is the:", ["Fornix", "Corpus callosum", "Internal capsule", "Optic radiation only"], 0, "The fornix connects the hippocampus to the mammillary bodies and related diencephalic targets.", ["", "The corpus callosum is the larger commissural arch above.", "The internal capsule is lateral projection white matter on coronal cuts.", "Optic radiations are visual fibers, not this hippocampal output tract."],],
    ["sagittal", "third_ventricle", "The highlighted narrow CSF space between the walls of the thalamus is the:", ["Third ventricle", "Lateral ventricle", "Fourth ventricle", "Central canal"], 0, "The third ventricle is the midline ventricle between the thalami and hypothalamus.", ["", "Lateral ventricles lie within each cerebral hemisphere.", "The fourth ventricle is between pons/medulla and cerebellum.", "The central canal is within the spinal cord caudal to the medulla."],],
    ["sagittal", "lateral_ventricle", "The highlighted CSF-filled space within the cerebral hemisphere (under the corpus callosum) is the:", ["Lateral ventricle", "Third ventricle", "Fourth ventricle", "Subarachnoid space only"], 0, "Each lateral ventricle lies within a hemisphere and connects to the third ventricle via the interventricular foramen.", ["", "The third ventricle is midline between thalami.", "The fourth ventricle is in the hindbrain.", "Subarachnoid space surrounds the brain externally; this is an internal ventricle."],],
    ["sagittal", "pineal_gland", "The highlighted small gland on the dorsal midbrain (posterior to the thalamus) is the:", ["Pineal gland", "Pituitary gland", "Amygdala", "Olfactory bulb"], 0, "The pineal gland (epiphysis) secretes melatonin and sits in the diencephalic roof.", ["", "The pituitary is ventral, attached to the hypothalamus.", "The amygdala is anteromedial temporal lobe gray matter.", "The olfactory bulb is rostral ventral forebrain on lateral view."],],
    ["sagittal", "optic_chiasm", "The highlighted X-shaped structure where optic nerves partially cross is the:", ["Optic chiasm", "Corpus callosum", "Pons", "Fornix"], 0, "The optic chiasm lies at the ventral diencephalon; nasal retinal fibers decussate here.", ["", "The corpus callosum is dorsal commissural white matter.", "The pons is hindbrain.", "The fornix is a limbic tract, not visual."],],
    ["sagittal", "mammillary_bodies", "The highlighted paired bulges on the ventral posterior hypothalamus are the:", ["Mammillary bodies", "Amygdala", "Superior colliculi", "Caudate nucleus"], 0, "Mammillary bodies are limbic-related hypothalamic nuclei receiving fornix input.", ["", "The amygdala is rostral medial temporal lobe.", "Superior colliculi are dorsal midbrain (visual reflexes).", "The caudate is striatum on coronal sections."],],
    ["sagittal", "pituitary", "The highlighted gland suspended from the hypothalamus via the infundibulum is the:", ["Pituitary gland (hypophysis)", "Pineal gland", "Thalamus", "Putamen"], 0, "The pituitary has anterior (adenohypophysis) and posterior (neurohypophysis) components.", ["", "Pineal is dorsal midbrain.", "Thalamus is dorsal diencephalon mass.", "Putamen is lateral basal ganglia."],],
    ["sagittal", "superior_colliculus", "The highlighted dorsal midbrain structure (visual orienting / tectum) is the:", ["Superior colliculus", "Inferior colliculus", "Cerebral peduncle", "Pons"], 0, "The superior colliculus is part of the tectum — involved in saccadic eye movements and orienting.", ["", "The inferior colliculus is more caudal in the tectum (auditory); this highlight is the rostral tectal bump.", "Cerebral peduncles are ventral midbrain.", "The pons is caudal to the midbrain."],],
    ["sagittal", "cerebral_peduncle", "The highlighted ventral midbrain fiber bundles (corticospinal/corticobulbar) are the:", ["Cerebral peduncles", "Superior colliculus", "Corpus callosum", "Internal capsule"], 0, "Cerebral peduncles contain descending cortical fibers entering the brainstem.", ["", "Superior colliculus is dorsal midbrain.", "Corpus callosum is commissural.", "Internal capsule is forebrain white matter lateral to thalamus."],],
    ["sagittal", "midbrain", "The highlighted rostral brainstem segment between diencephalon and pons is the:", ["Midbrain (mesencephalon)", "Medulla oblongata", "Cerebellum", "Frontal lobe"], 0, "The midbrain contains tectum (dorsal) and cerebral peduncles (ventral).", ["", "Medulla is caudal hindbrain.", "Cerebellum is posterior.", "Frontal lobe is rostral cerebrum."],],
    ["sagittal", "pons", "The highlighted middle brainstem bulge ventral to the cerebellum is the:", ["Pons", "Midbrain", "Medulla oblongata", "Thalamus"], 0, "The pons bridges cerebellum and cerebrum and contains pontine nuclei and transverse fibers.", ["", "Midbrain is rostral.", "Medulla is caudal.", "Thalamus is forebrain diencephalon."],],
    ["sagittal", "medulla", "The highlighted caudal brainstem segment continuous with the spinal cord is the:", ["Medulla oblongata", "Pons", "Midbrain", "Hypothalamus"], 0, "The medulla contains vital centers (respiration, cardiovascular) and decussating tracts.", ["", "Pons is rostral.", "Midbrain is more rostral.", "Hypothalamus is diencephalon."],],
    ["sagittal", "brainstem", "The entire highlighted column (midbrain + pons + medulla) is the:", ["Brainstem", "Corpus callosum", "Basal ganglia", "Lateral ventricle"], 0, "Brainstem = midbrain, pons, and medulla oblongata — excluding cerebellum.", ["", "Corpus callosum is telencephalic commissure.", "Basal ganglia are deep gray matter of cerebrum.", "Lateral ventricle is CSF space in hemisphere."],],
    ["sagittal", "fourth_ventricle", "The highlighted CSF space between the brainstem and cerebellum is the:", ["Fourth ventricle", "Third ventricle", "Lateral ventricle", "Central canal (at this rostral level only)"], 0, "The fourth ventricle lies in the hindbrain between pons/medulla and cerebellum.", ["", "Third ventricle is between thalami.", "Lateral ventricles are supratentorial.", "Central canal is in spinal cord; fourth ventricle continues into it caudally."],],
    ["sagittal", "cerebellum", "The highlighted foliated hindbrain structure posterior to the pons is the:", ["Cerebellum", "Occipital lobe alone", "Thalamus", "Corpus callosum"], 0, "The cerebellum coordinates movement, balance, and motor learning.", ["", "Occipital cortex is dorsal cerebrum, separate from this hindbrain structure.", "Thalamus is diencephalon.", "Corpus callosum is white matter commissure."],],
    ["sagittal", "hippocampus", "The highlighted seahorse-shaped medial temporal gray matter is the:", ["Hippocampus", "Caudate nucleus", "Thalamus", "Putamen"], 0, "The hippocampus supports declarative/episodic memory formation.", ["", "Caudate is striatum adjacent to lateral ventricle on coronal cuts.", "Thalamus is diencephalon.", "Putamen is lateral striatum."],],
    ["sagittal", "amygdala", "The highlighted anteromedial temporal lobe gray matter (emotion/salience) is the:", ["Amygdala", "Cerebellum", "Pineal gland", "Medulla oblongata"], 0, "The amygdala is almond-shaped limbic gray matter rostral to the hippocampus.", ["", "Cerebellum is hindbrain.", "Pineal is dorsal midbrain.", "Medulla is caudal brainstem."],],
    ["sagittal", "spinal_cord", "The highlighted structure continuing caudally from the medulla through the foramen magnum is the:", ["Spinal cord", "Corpus callosum", "Fornix", "Optic nerve (CN II)"], 0, "The spinal cord begins where the medulla transitions at the foramen magnum.", ["", "Corpus callosum is supratentorial.", "Fornix is limbic tract.", "Optic nerve is rostral visual pathway."],],
    ["sagittal", "frontal_cortex", "The highlighted rostral dorsal cerebrum is the:", ["Frontal lobe (frontal cortex)", "Occipital lobe", "Cerebellum", "Medulla oblongata"], 0, "The frontal lobe includes primary motor cortex and executive areas — rostral in sagittal view.", ["", "Occipital lobe is caudal.", "Cerebellum is hindbrain.", "Medulla is brainstem caudal."],],
    ["sagittal", "parietal_cortex", "The highlighted cortex between frontal and occipital lobes (dorsal) is the:", ["Parietal lobe", "Temporal lobe", "Pons", "Amygdala"], 0, "The parietal lobe integrates somatosensation and spatial processing.", ["", "Temporal lobe is ventral.", "Pons is brainstem.", "Amygdala is medial temporal deep gray."],],
    ["sagittal", "occipital_cortex", "The highlighted caudal cerebrum (primary visual cortex location) is the:", ["Occipital lobe", "Frontal lobe", "Hypothalamus", "Pons"], 0, "Primary visual (striate) cortex lies in the occipital lobe at the caudal pole.", ["", "Frontal lobe is rostral.", "Hypothalamus is ventral diencephalon.", "Pons is brainstem."],],
    ["sagittal", "temporal_cortex", "The highlighted ventral cerebrum inferior to the sylvian region is the:", ["Temporal lobe", "Parietal lobe", "Corpus callosum", "Superior colliculus"], 0, "The temporal lobe includes auditory cortex and medial limbic structures.", ["", "Parietal lobe is dorsal.", "Corpus callosum is midline white matter.", "Superior colliculus is midbrain tectum."],],

    ["lateral", "frontal_lobe", "On this left lateral view, the highlighted rostral lobe is the:", ["Frontal lobe", "Occipital lobe", "Cerebellum", "Medulla oblongata"], 0, "The frontal lobe lies rostral to the central sulcus.", ["", "Occipital lobe is caudal.", "Cerebellum is infratentorial posterior.", "Medulla is not this expansive cortical lobe."],],
    ["lateral", "parietal_lobe", "The highlighted lobe between the central sulcus and occipital lobe (dorsal surface) is the:", ["Parietal lobe", "Temporal lobe", "Olfactory bulb", "Spinal cord"], 0, "The parietal lobe is posterior to the central sulcus on the lateral convexity.", ["", "Temporal lobe is ventral.", "Olfactory bulb is small rostral ventral structure.", "Spinal cord is not shown as a cortical lobe."],],
    ["lateral", "temporal_lobe", "The highlighted ventral lobe inferior to the lateral sulcus is the:", ["Temporal lobe", "Frontal lobe", "Parietal lobe only (no temporal)", "Thalamus"], 0, "The temporal lobe contains superior temporal auditory cortex and medial limbic structures.", ["", "Frontal lobe is rostral/dorsal to the sulcus.", "Parietal is superior, not this ventral highlight.", "Thalamus is deep gray, not a lobe on surface."],],
    ["lateral", "occipital_lobe", "The highlighted caudal lobe on the lateral surface is the:", ["Occipital lobe", "Frontal lobe", "Pons", "Putamen"], 0, "The occipital lobe hosts primary visual cortex at the pole.", ["", "Frontal lobe is rostral.", "Pons is brainstem.", "Putamen is deep gray on coronal sections."],],
    ["lateral", "central_sulcus", "The highlighted groove separating precentral and postcentral gyri is the:", ["Central sulcus (Rolando)", "Lateral sulcus (Sylvian)", "Calcarine sulcus", "Longitudinal fissure"], 0, "The central sulcus divides primary motor (precentral) from primary somatosensory (postcentral) cortex.", ["", "Lateral sulcus separates temporal from frontal/parietal lobes.", "Calcarine sulcus is in occipital lobe (visual).", "Longitudinal fissure separates hemispheres at midline."],],
    ["lateral", "lateral_sulcus", "The highlighted fissure separating the temporal lobe from frontal/parietal lobes is the:", ["Lateral sulcus (Sylvian fissure)", "Central sulcus", "Central canal", "Fourth ventricle"], 0, "The lateral (Sylvian) sulcus is the major landmark for temporal lobe boundaries.", ["", "Central sulcus is rostral-dorsal between motor and somatosensory gyri.", "Central canal is spinal.", "Fourth ventricle is hindbrain CSF space."],],
    ["lateral", "precentral_gyrus", "The highlighted gyrus immediately rostral to the central sulcus is the:", ["Precentral gyrus (primary motor cortex)", "Postcentral gyrus (primary somatosensory cortex)", "Superior temporal gyrus", "Cingulate gyrus"], 0, "Primary motor cortex (Brodmann area 4) occupies the precentral gyrus.", ["", "Postcentral gyrus is caudal to the central sulcus.", "Superior temporal gyrus is auditory association area.", "Cingulate gyrus is medial surface."],],
    ["lateral", "postcentral_gyrus", "The highlighted gyrus immediately caudal to the central sulcus is the:", ["Postcentral gyrus (primary somatosensory cortex)", "Precentral gyrus (primary motor cortex)", "Primary visual cortex", "Cerebellar cortex"], 0, "Primary somatosensory cortex (areas 3-1-2) lies in the postcentral gyrus.", ["", "Precentral gyrus is rostral to the sulcus.", "Primary visual cortex is occipital.", "Cerebellar cortex is hindbrain."],],
    ["lateral", "primary_auditory_cortex", "The highlighted cortex on the superior temporal gyrus (Heschl region) is primary:", ["Auditory cortex", "Visual cortex", "Motor cortex", "Olfactory cortex"], 0, "Primary auditory cortex lies on the superior temporal gyrus (transverse temporal gyrus of Heschl).", ["", "Visual cortex is occipital.", "Motor cortex is precentral.", "Primary olfactory cortex is medial temporal/ventral (piriform), not this lateral STG highlight."],],
    ["lateral", "primary_visual_cortex", "The highlighted occipital cortex at the pole corresponds to primary:", ["Visual cortex (striate cortex, area 17)", "Auditory cortex", "Somatosensory cortex", "Motor cortex"], 0, "Primary visual cortex occupies the occipital pole (calcarine/striate region).", ["", "Auditory cortex is temporal.", "Somatosensory is postcentral.", "Motor is precentral."],],
    ["lateral", "olfactory_bulb", "The highlighted rostral ventral structure processing smell is the:", ["Olfactory bulb", "Optic chiasm", "Pituitary gland", "Cerebellum"], 0, "Olfactory bulb receives olfactory receptor neuron input (cranial nerve I).", ["", "Optic chiasm is CN II pathway.", "Pituitary is ventral diencephalon.", "Cerebellum is caudal hindbrain."],],
    ["lateral", "cerebellum", "The highlighted infratentorial structure caudal to the cerebrum is the:", ["Cerebellum", "Frontal lobe", "Thalamus", "Corpus callosum"], 0, "The cerebellum is visible inferior/posterior to the occipital/temporal lobes.", ["", "Frontal lobe is rostral.", "Thalamus is deep diencephalon.", "Corpus callosum is midline white matter."],],
    ["lateral", "midbrain", "The highlighted rostral brainstem segment beneath the thalamus is the:", ["Midbrain", "Pons", "Medulla oblongata", "Corpus callosum"], 0, "Midbrain connects diencephalon to pons on lateral brainstem profile.", ["", "Pons is caudal to midbrain.", "Medulla is most caudal.", "Corpus callosum is dorsal cerebrum."],],
    ["lateral", "pons", "The highlighted brainstem bulge caudal to the midbrain is the:", ["Pons", "Midbrain", "Thalamus", "Hippocampus"], 0, "The pons is the prominent ventral bulge of the hindbrain.", ["", "Midbrain is rostral.", "Thalamus is forebrain.", "Hippocampus is medial temporal."],],
    ["lateral", "medulla", "The highlighted caudal brainstem tapering toward the spinal cord is the:", ["Medulla oblongata", "Pons", "Midbrain", "Caudate nucleus"], 0, "Medulla oblongata is continuous with the spinal cord caudally.", ["", "Pons is rostral.", "Midbrain is more rostral.", "Caudate is striatum."],],
  ];

  const BRAIN_ANATOMY_POOL = SPECS.map(([view, highlight, question, options, correct, explanation, wrongExplanations]) =>
    mk(view, highlight, question, options, correct, explanation, wrongExplanations)
  );

  if (typeof globalThis !== "undefined") {
    globalThis.BRAIN_ANATOMY_POOL = BRAIN_ANATOMY_POOL;
  }
})();
