// Brain Anatomy Lab — figures are exact exports from mcb80x-chart-pack.pdf (pages 1–2).
(function (global) {
  const RING_STROKE = "#a41034";
  const RING_WIDTH = 4;

  const VIEW_TITLES = {
    sagittal: "Brain Anatomy — Reference Chart (midsagittal)",
    lateral: "Cerebral Cortex — Lobes & Functional Areas (lateral)"
  };

  /** Chart pack page 2 — lobes, sulci, and cortical areas only. */
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

  /** Midsagittal lobe labels map to lateral lobe rings on the cortex chart. */
  const CORTEX_TO_LOBE = {
    frontal_cortex: "frontal_lobe",
    parietal_cortex: "parietal_lobe",
    temporal_cortex: "temporal_lobe",
    occipital_cortex: "occipital_lobe"
  };

  /** Exact raster crops from chart pack; coordinates are in native pixels. */
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

  /**
   * Quiz indicator: crimson ring only (no fill) so the chart art stays identical.
   * @type {Record<string, Record<string, { kind: string, [k: string]: number | string }>>}
   */
  const QUIZ_RINGS = {
    sagittal: {
      frontal_cortex: { kind: "ellipse", cx: 360, cy: 300, rx: 230, ry: 210 },
      parietal_cortex: { kind: "ellipse", cx: 720, cy: 250, rx: 190, ry: 165 },
      occipital_cortex: { kind: "ellipse", cx: 990, cy: 310, rx: 165, ry: 175 },
      temporal_cortex: { kind: "ellipse", cx: 510, cy: 610, rx: 210, ry: 145 },
      corpus_callosum: { kind: "ellipse", cx: 720, cy: 595, rx: 210, ry: 38 },
      thalamus: { kind: "circle", cx: 835, cy: 685, r: 58 },
      hypothalamus: { kind: "circle", cx: 775, cy: 825, r: 48 },
      hippocampus: { kind: "circle", cx: 675, cy: 755, r: 52 },
      amygdala: { kind: "circle", cx: 615, cy: 805, r: 42 },
      fornix: { kind: "circle", cx: 715, cy: 715, r: 38 },
      lateral_ventricle: { kind: "ellipse", cx: 675, cy: 575, rx: 185, ry: 42 },
      third_ventricle: { kind: "circle", cx: 835, cy: 655, r: 22 },
      pineal_gland: { kind: "circle", cx: 925, cy: 625, r: 26 },
      optic_chiasm: { kind: "ellipse", cx: 755, cy: 875, rx: 58, ry: 22 },
      mammillary_bodies: { kind: "circle", cx: 735, cy: 855, r: 28 },
      pituitary: { kind: "circle", cx: 778, cy: 925, r: 32 },
      superior_colliculus: { kind: "circle", cx: 818, cy: 958, r: 32 },
      cerebral_peduncle: { kind: "ellipse", cx: 818, cy: 1005, rx: 62, ry: 38 },
      midbrain: { kind: "ellipse", cx: 818, cy: 968, rx: 72, ry: 48 },
      pons: { kind: "ellipse", cx: 818, cy: 1088, rx: 82, ry: 42 },
      medulla: { kind: "ellipse", cx: 818, cy: 1188, rx: 68, ry: 48 },
      fourth_ventricle: { kind: "circle", cx: 878, cy: 1045, r: 24 },
      brainstem: { kind: "ellipse", cx: 818, cy: 1095, rx: 98, ry: 135 },
      cerebellum: { kind: "ellipse", cx: 1125, cy: 965, rx: 205, ry: 155 },
      spinal_cord: { kind: "ellipse", cx: 818, cy: 1325, rx: 38, ry: 85 }
    },
    lateral: {
      frontal_lobe: { kind: "ellipse", cx: 310, cy: 510, rx: 290, ry: 330 },
      parietal_lobe: { kind: "ellipse", cx: 790, cy: 370, rx: 270, ry: 290 },
      temporal_lobe: { kind: "ellipse", cx: 990, cy: 710, rx: 330, ry: 230 },
      occipital_lobe: { kind: "ellipse", cx: 1385, cy: 510, rx: 205, ry: 310 },
      precentral_gyrus: { kind: "ellipse", cx: 715, cy: 470, rx: 48, ry: 265 },
      postcentral_gyrus: { kind: "ellipse", cx: 825, cy: 470, rx: 48, ry: 265 },
      central_sulcus: {
        kind: "path",
        d: "M 768 195 L 772 755"
      },
      lateral_sulcus: {
        kind: "path",
        d: "M 120 820 Q 520 920 1280 780"
      },
      primary_auditory_cortex: { kind: "circle", cx: 1055, cy: 985, r: 58 },
      primary_visual_cortex: { kind: "circle", cx: 1325, cy: 575, r: 58 },
      olfactory_bulb: { kind: "circle", cx: 115, cy: 815, r: 42 }
    }
  };

  function anatomyViewForHighlight(highlightKey) {
    return LATERAL_HIGHLIGHTS.has(highlightKey) ? "lateral" : "sagittal";
  }

  function ringKeyForHighlight(highlightKey, view) {
    if (view === "lateral" && CORTEX_TO_LOBE[highlightKey]) {
      return CORTEX_TO_LOBE[highlightKey];
    }
    return highlightKey;
  }

  function diagramForHighlight(highlightKey) {
    const view = anatomyViewForHighlight(highlightKey);
    const ringKey = ringKeyForHighlight(highlightKey, view);
    return diagram(view, ringKey);
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

  function diagram(view, highlight) {
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
    const cap =
      view === "sagittal"
        ? "Exact midsagittal figure from MCB80x chart pack · crimson ring = structure to name."
        : "Exact lateral figure from MCB80x chart pack · crimson ring = structure to name.";
    return `<figure class="brain-anatomy-figure brain-anatomy-raster brain-anatomy-${view}"><div class="brain-anatomy-stack" style="background:${meta.bg}" role="img" aria-label="${title}"><img class="brain-anatomy-base" src="${imgSrc}" alt="${title}" width="${meta.w}" height="${meta.h}" decoding="async" loading="eager"/><svg class="brain-anatomy-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><title>${title}</title>${rings}</svg></div><figcaption>${cap}</figcaption></figure>`;
  }

  global.BRAIN_ANATOMY_VIEW_TITLES = VIEW_TITLES;
  global.BRAIN_ANATOMY_DIAGRAM = {
    diagram,
    diagramForHighlight,
    anatomyViewForHighlight,
    ringKeyForHighlight,
    QUIZ_RINGS,
    VIEWS,
    resolveAssetUrl
  };
})(typeof window !== "undefined" ? window : globalThis);
