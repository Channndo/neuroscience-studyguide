// Brain Anatomy Lab — figures match mcb80x-chart-pack.pdf; rings sit on printed chart numbers where available.
(function (global) {
  const RING_STROKE = "#a41034";
  const RING_WIDTH = 4;

  const VIEW_TITLES = {
    sagittal: "Brain Anatomy — Reference Chart (midsagittal)",
    lateral: "Cerebral Cortex — Lobes & Functional Areas (lateral)"
  };

  const LATERAL_HIGHLIGHTS = new Set([
    "frontal_lobe",
    "parietal_lobe",
    "temporal_lobe",
    "occipital_lobe",
    "frontal_cortex",
    "parietal_cortex",
    "temporal_cortex",
    "occipital_cortex",
    "central_sulcus",
    "lateral_sulcus",
    "precentral_gyrus",
    "postcentral_gyrus",
    "primary_auditory_cortex",
    "primary_visual_cortex",
    "olfactory_bulb"
  ]);

  const CORTEX_TO_LOBE = {
    frontal_cortex: "frontal_lobe",
    parietal_cortex: "parietal_lobe",
    temporal_cortex: "temporal_lobe",
    occipital_cortex: "occipital_lobe"
  };

  const VIEWS = {
    sagittal: {
      src: "assets/brain-anatomy/sagittal-base.png",
      w: 1700,
      h: 1658,
      bg: "#000000"
    },
    lateral: {
      src: "assets/brain-anatomy/lateral-base.png",
      w: 1770,
      h: 1580,
      bg: "#ffffff"
    }
  };

  /** Printed chart label (MCB80x chart pack) per structure — rings centered on the badge. */
  const CHART_REF = {
    sagittal: {
      frontal_cortex: "1",
      parietal_cortex: "1",
      temporal_cortex: "1",
      occipital_cortex: "1",
      thalamus: "2",
      corpus_callosum: "3",
      pineal_gland: "3",
      hypothalamus: "4",
      optic_chiasm: "5",
      pituitary: "6",
      midbrain: "7",
      pons: "8",
      medulla: "9",
      brainstem: "10",
      spinal_cord: "11",
      cerebellum: "12"
    },
    lateral: {
      frontal_lobe: "1",
      frontal_cortex: "1",
      parietal_lobe: "2",
      parietal_cortex: "2",
      temporal_lobe: "3",
      temporal_cortex: "3",
      occipital_lobe: "4",
      occipital_cortex: "4",
      precentral_gyrus: "A",
      postcentral_gyrus: "B",
      primary_auditory_cortex: "E",
      primary_visual_cortex: "F"
    }
  };

  function toShape(entry) {
    if (entry.kind === "path") return { kind: "path", d: entry.d };
    if (entry.kind === "ellipse") {
      return { kind: "ellipse", cx: entry.cx, cy: entry.cy, rx: entry.rx, ry: entry.ry };
    }
    return { kind: "circle", cx: entry.cx, cy: entry.cy, r: entry.r };
  }

  /**
   * Coordinates tuned to the white number/letter badges on the chart raster exports.
   * @type {Record<string, Record<string, object>>}
   */
  const LABEL_POSITIONS = {
    sagittal: {
      frontal_cortex: { cx: 378, cy: 342, r: 88 },
      parietal_cortex: { cx: 562, cy: 298, r: 72 },
      occipital_cortex: { cx: 938, cy: 328, r: 70 },
      temporal_cortex: { cx: 488, cy: 602, r: 68 },
      corpus_callosum: { cx: 808, cy: 552, r: 48 },
      thalamus: { cx: 752, cy: 692, r: 40 },
      third_ventricle: { cx: 752, cy: 668, r: 22 },
      pineal_gland: { cx: 868, cy: 602, r: 30 },
      fornix: { cx: 668, cy: 678, r: 32 },
      hippocampus: { cx: 598, cy: 792, r: 44 },
      amygdala: { cx: 558, cy: 758, r: 36 },
      lateral_ventricle: { kind: "ellipse", cx: 662, cy: 578, rx: 128, ry: 30 },
      hypothalamus: { cx: 702, cy: 808, r: 36 },
      mammillary_bodies: { cx: 712, cy: 848, r: 26 },
      optic_chiasm: { cx: 678, cy: 868, r: 30 },
      pituitary: { cx: 692, cy: 932, r: 32 },
      superior_colliculus: { cx: 758, cy: 968, r: 30 },
      midbrain: { cx: 728, cy: 996, r: 42 },
      cerebral_peduncle: { kind: "ellipse", cx: 728, cy: 1028, rx: 52, ry: 34 },
      pons: { cx: 735, cy: 1085, r: 42 },
      fourth_ventricle: { cx: 808, cy: 1042, r: 26 },
      medulla: { cx: 738, cy: 1182, r: 40 },
      brainstem: { kind: "ellipse", cx: 735, cy: 1090, rx: 72, ry: 118 },
      cerebellum: { kind: "ellipse", cx: 1168, cy: 1008, rx: 158, ry: 118 },
      spinal_cord: { kind: "ellipse", cx: 738, cy: 1352, rx: 34, ry: 78 }
    },
    lateral: {
      frontal_lobe: { cx: 268, cy: 408, r: 50 },
      parietal_lobe: { cx: 718, cy: 308, r: 50 },
      temporal_lobe: { cx: 988, cy: 698, r: 50 },
      occipital_lobe: { cx: 1368, cy: 478, r: 50 },
      precentral_gyrus: { kind: "ellipse", cx: 688, cy: 508, rx: 30, ry: 178 },
      postcentral_gyrus: { kind: "ellipse", cx: 788, cy: 508, rx: 30, ry: 178 },
      central_sulcus: {
        kind: "path",
        d: "M 738 168 L 742 748"
      },
      lateral_sulcus: {
        kind: "path",
        d: "M 108 798 Q 488 898 1268 758"
      },
      primary_auditory_cortex: { cx: 1018, cy: 928, r: 44 },
      primary_visual_cortex: { cx: 1338, cy: 548, r: 44 },
      olfactory_bulb: { cx: 108, cy: 798, r: 38 }
    }
  };

  const QUIZ_RINGS = { sagittal: {}, lateral: {} };
  for (const view of ["sagittal", "lateral"]) {
    for (const [key, pos] of Object.entries(LABEL_POSITIONS[view])) {
      QUIZ_RINGS[view][key] = toShape(pos);
    }
  }

  function anatomyViewForHighlight(highlightKey) {
    return LATERAL_HIGHLIGHTS.has(highlightKey) ? "lateral" : "sagittal";
  }

  function ringKeyForHighlight(highlightKey, view) {
    if (view === "lateral" && CORTEX_TO_LOBE[highlightKey]) {
      return CORTEX_TO_LOBE[highlightKey];
    }
    return highlightKey;
  }

  function chartRefForHighlight(highlightKey) {
    const view = anatomyViewForHighlight(highlightKey);
    const ringKey = ringKeyForHighlight(highlightKey, view);
    return CHART_REF[view]?.[ringKey] || CHART_REF[view]?.[highlightKey] || null;
  }

  function diagramForHighlight(highlightKey) {
    const view = anatomyViewForHighlight(highlightKey);
    const ringKey = ringKeyForHighlight(highlightKey, view);
    return diagram(view, ringKey, highlightKey);
  }

  function resolveAssetUrl(relativePath) {
    if (typeof window === "undefined" || !window.location?.origin) return relativePath;
    const pathname = window.location.pathname || "/";
    const basePath = pathname.replace(/[^/]*$/, "");
    const base = basePath.endsWith("/") ? basePath : `${basePath}/`;
    return `${window.location.origin}${base}${relativePath.replace(/^\//, "")}`;
  }

  function keysForView(view, highlight) {
    const all = Object.keys(QUIZ_RINGS[view] || {});
    const skip = new Set();
    if (view === "sagittal" || view === "lateral") {
      if (highlight === "brainstem") {
        skip.add("midbrain");
        skip.add("pons");
        skip.add("medulla");
        if (view === "sagittal") {
          skip.add("superior_colliculus");
          skip.add("cerebral_peduncle");
        }
      } else {
        skip.add("brainstem");
        if (view === "sagittal") {
          if (highlight === "midbrain") {
            skip.add("superior_colliculus");
            skip.add("cerebral_peduncle");
          } else if (highlight === "superior_colliculus") {
            skip.add("midbrain");
            skip.add("cerebral_peduncle");
          } else if (highlight === "cerebral_peduncle") {
            skip.add("midbrain");
            skip.add("superior_colliculus");
          }
        }
      }
    }
    return all.filter(k => !skip.has(k));
  }

  function renderRing(shape, active) {
    if (!active) return "";
    const sw = RING_WIDTH;
    const stroke = RING_STROKE;
    if (shape.kind === "path") {
      return `<path d="${shape.d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;
    }
    if (shape.kind === "circle") {
      return `<circle cx="${shape.cx}" cy="${shape.cy}" r="${shape.r}" fill="none" stroke="${stroke}" stroke-width="${sw}"/>`;
    }
    if (shape.kind === "ellipse") {
      return `<ellipse cx="${shape.cx}" cy="${shape.cy}" rx="${shape.rx}" ry="${shape.ry}" fill="none" stroke="${stroke}" stroke-width="${sw}"/>`;
    }
    return "";
  }

  function diagram(view, highlight, highlightOriginal) {
    const meta = VIEWS[view];
    if (!meta) return "";
    const title = VIEW_TITLES[view] || "Brain anatomy";
    const imgSrc = resolveAssetUrl(meta.src);
    const vb = `0 0 ${meta.w} ${meta.h}`;
    let rings = "";
    for (const key of keysForView(view, highlight)) {
      const shape = QUIZ_RINGS[view][key];
      if (shape) rings += renderRing(shape, key === highlight);
    }
    const ref = chartRefForHighlight(highlightOriginal || highlight);
    const refLine = ref
      ? `Crimson ring on chart label <strong>${ref}</strong> (MCB80x chart pack).`
      : "Crimson ring marks the structure named in the question (see chart art).";
    const cap =
      view === "sagittal"
        ? `Midsagittal figure — ${refLine}`
        : `Lateral hemisphere figure — ${refLine}`;
    return `<figure class="brain-anatomy-figure brain-anatomy-raster brain-anatomy-${view}"><div class="brain-anatomy-stack" style="background:${meta.bg}" role="img" aria-label="${title}"><img class="brain-anatomy-base" src="${imgSrc}" alt="${title}" width="${meta.w}" height="${meta.h}" decoding="async" loading="eager"/><svg class="brain-anatomy-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><title>${title}</title>${rings}</svg></div><figcaption>${cap}</figcaption></figure>`;
  }

  global.BRAIN_ANATOMY_VIEW_TITLES = VIEW_TITLES;
  global.BRAIN_ANATOMY_CHART_REF = CHART_REF;
  global.BRAIN_ANATOMY_DIAGRAM = {
    diagram,
    diagramForHighlight,
    anatomyViewForHighlight,
    ringKeyForHighlight,
    chartRefForHighlight,
    QUIZ_RINGS,
    VIEWS,
    CHART_REF,
    resolveAssetUrl
  };
})(typeof window !== "undefined" ? window : globalThis);
