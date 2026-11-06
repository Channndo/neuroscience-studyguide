// Neuroanatomy figures for identification quizzes — bases match MCB80x chart pack (midsagittal + lateral).
(function (global) {
  const HI = "rgba(164, 16, 52, 0.55)";
  const HI_STROKE = "#8b0a2a";
  const STROKE = "#1a1a1a";

  const VIEW_TITLES = {
    sagittal: "Midsagittal section (MCB80x chart reference)",
    lateral: "Left hemisphere, lateral view (MCB80x chart reference)",
    coronal: "Coronal section (through thalamus & basal ganglia)"
  };

  /** Raster bases extracted from mcb80x-chart-pack.pdf */
  const IMAGE_VIEWS = {
    sagittal: {
      src: "assets/brain-anatomy/sagittal-base.png",
      viewBox: "0 0 100 100"
    },
    lateral: {
      src: "assets/brain-anatomy/lateral-base.png",
      viewBox: "0 0 100 100"
    }
  };

  /**
   * Highlight regions in 0–100 coords (same space as viewBox).
   * @type {Record<string, Record<string, { type: string, [k: string]: number | string }>>}
   */
  const HIGHLIGHTS = {
    sagittal: {
      frontal_cortex: { type: "ellipse", cx: 21, cy: 24, rx: 16, ry: 19 },
      parietal_cortex: { type: "ellipse", cx: 39, cy: 19, rx: 14, ry: 16 },
      occipital_cortex: { type: "ellipse", cx: 57, cy: 21, rx: 13, ry: 15 },
      temporal_cortex: { type: "ellipse", cx: 31, cy: 47, rx: 17, ry: 14 },
      corpus_callosum: {
        type: "path",
        d: "M 28 36 Q 48 28 68 36 Q 48 42 28 36 Z"
      },
      fornix: { type: "ellipse", cx: 41, cy: 44, rx: 4.5, ry: 5 },
      lateral_ventricle: { type: "ellipse", cx: 41, cy: 35, rx: 11, ry: 4.5 },
      third_ventricle: { type: "ellipse", cx: 48, cy: 45, rx: 2.2, ry: 4 },
      thalamus: { type: "ellipse", cx: 48, cy: 42, rx: 7, ry: 8.5 },
      hypothalamus: { type: "ellipse", cx: 47, cy: 51, rx: 6, ry: 5 },
      mammillary_bodies: { type: "ellipse", cx: 44, cy: 53, rx: 4, ry: 2.5 },
      optic_chiasm: { type: "ellipse", cx: 46, cy: 54, rx: 5, ry: 2 },
      pituitary: { type: "ellipse", cx: 46, cy: 58, rx: 3.5, ry: 4.5 },
      pineal_gland: { type: "ellipse", cx: 54, cy: 40, rx: 3, ry: 3 },
      hippocampus: { type: "ellipse", cx: 39, cy: 46, rx: 6, ry: 6 },
      amygdala: { type: "ellipse", cx: 35, cy: 49, rx: 5, ry: 5 },
      superior_colliculus: { type: "ellipse", cx: 50, cy: 59, rx: 4, ry: 3 },
      cerebral_peduncle: { type: "ellipse", cx: 50, cy: 62, rx: 6, ry: 4 },
      midbrain: { type: "ellipse", cx: 50, cy: 60, rx: 8, ry: 5.5 },
      pons: { type: "ellipse", cx: 50, cy: 67, rx: 10, ry: 5 },
      medulla: { type: "ellipse", cx: 50, cy: 73, rx: 8, ry: 5 },
      fourth_ventricle: { type: "ellipse", cx: 52, cy: 65, rx: 3, ry: 2.5 },
      brainstem: { type: "ellipse", cx: 50, cy: 66, rx: 11, ry: 14 },
      cerebellum: { type: "ellipse", cx: 67, cy: 57, rx: 19, ry: 15 },
      spinal_cord: { type: "ellipse", cx: 50, cy: 83, rx: 4, ry: 6 }
    },
    lateral: {
      frontal_lobe: { type: "ellipse", cx: 30, cy: 36, rx: 25, ry: 30 },
      parietal_lobe: { type: "ellipse", cx: 52, cy: 28, rx: 21, ry: 25 },
      temporal_lobe: { type: "ellipse", cx: 47, cy: 57, rx: 23, ry: 19 },
      occipital_lobe: { type: "ellipse", cx: 73, cy: 35, rx: 15, ry: 23 },
      central_sulcus: { type: "path", d: "M 43.5 16 L 44.5 64", strokeOnly: true },
      lateral_sulcus: {
        type: "path",
        d: "M 22 50 Q 48 58 82 48",
        strokeOnly: true
      },
      precentral_gyrus: { type: "ellipse", cx: 38, cy: 36, rx: 5, ry: 27 },
      postcentral_gyrus: { type: "ellipse", cx: 46, cy: 36, rx: 5, ry: 27 },
      primary_auditory_cortex: { type: "ellipse", cx: 58, cy: 53, rx: 7, ry: 7 },
      primary_visual_cortex: { type: "ellipse", cx: 78, cy: 39, rx: 7, ry: 9 },
      olfactory_bulb: { type: "ellipse", cx: 16, cy: 45, rx: 5, ry: 7 },
      cerebellum: { type: "ellipse", cx: 77, cy: 73, rx: 13, ry: 11 },
      midbrain: { type: "ellipse", cx: 58, cy: 66, rx: 5, ry: 4 },
      pons: { type: "ellipse", cx: 56, cy: 72, rx: 6, ry: 4 },
      medulla: { type: "ellipse", cx: 54, cy: 78, rx: 5, ry: 4 },
      brainstem: { type: "ellipse", cx: 56, cy: 71, rx: 7, ry: 12 }
    }
  };

  /** Coronal schematic (chart-pack style colors) — vector only */
  const CORONAL = {
    FILL: {
      cortex: "#e8b4bc",
      csf: "#b8d4e8",
      cc: "#e8d878",
      caudate: "#c4a882",
      putamen: "#98c888",
      gp: "#6d9a58",
      capsule: "#f0ebe3",
      thalamus: "#88aac8",
      hippocampus: "#d4a574",
      amygdala: "#c9926a"
    },
    regions: {
      lateral_ventricle: {
        d: "M 118 72 Q 200 52 282 72 Q 200 92 118 72 Z",
        kind: "csf"
      },
      corpus_callosum: { d: "M 118 88 L 282 88 L 278 108 L 122 108 Z", kind: "cc" },
      caudate: { d: "M 148 108 L 192 108 L 188 178 L 142 172 Z", kind: "caudate" },
      putamen: { d: "M 208 122 L 262 122 L 256 202 L 202 196 Z", kind: "putamen" },
      globus_pallidus: { d: "M 192 142 L 208 142 L 206 188 L 188 186 Z", kind: "gp" },
      internal_capsule: { d: "M 198 108 L 208 108 L 203 252 L 193 252 Z", kind: "capsule" },
      thalamus: { d: "M 158 182 L 242 182 L 236 252 L 164 252 Z", kind: "thalamus" },
      third_ventricle: { d: "M 196 162 L 204 162 L 203 188 L 197 188 Z", kind: "csf" },
      amygdala: { d: "M 142 228 L 172 228 L 168 254 L 138 248 Z", kind: "amygdala" },
      hippocampus: { d: "M 108 248 Q 132 272 158 252 Q 132 232 108 248 Z", kind: "hippocampus" }
    },
    outline:
      "M 48 118 C 32 78 88 42 200 38 C 312 42 368 78 352 118 C 368 168 368 228 352 268 C 312 308 248 318 200 318 C 152 318 88 308 48 268 C 32 228 32 168 48 118 Z"
  };

  function keysForView(view, highlight) {
    const all = Object.keys(
      view === "coronal" ? CORONAL.regions : HIGHLIGHTS[view] || {}
    );
    const skip = new Set();

    if (view === "sagittal" || view === "lateral") {
      if (highlight === "brainstem") {
        skip.add("midbrain");
        skip.add("pons");
        skip.add("medulla");
        skip.add("superior_colliculus");
        skip.add("cerebral_peduncle");
      } else {
        skip.add("brainstem");
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

    const keys = all.filter(k => !skip.has(k));
    if (highlight && keys.includes(highlight)) {
      return [...keys.filter(k => k !== highlight), highlight];
    }
    return keys;
  }

  function renderHighlightShape(shape, active) {
    if (shape.strokeOnly) {
      return `<path d="${shape.d}" fill="none" stroke="${active ? HI_STROKE : "transparent"}" stroke-width="${active ? 1.8 : 0}" stroke-linecap="round"/>`;
    }
    if (shape.type === "path") {
      return `<path d="${shape.d}" fill="${active ? HI : "transparent"}" stroke="${active ? HI_STROKE : "transparent"}" stroke-width="${active ? 1.2 : 0}"/>`;
    }
    if (shape.type === "ellipse") {
      return `<ellipse cx="${shape.cx}" cy="${shape.cy}" rx="${shape.rx}" ry="${shape.ry}" fill="${active ? HI : "transparent"}" stroke="${active ? HI_STROKE : "transparent"}" stroke-width="${active ? 1.2 : 0}"/>`;
    }
    return "";
  }

  function orientationLabels(view) {
    if (view === "sagittal") {
      return `<text x="4" y="50" font-size="3.2" fill="#555" font-family="system-ui,sans-serif">Anterior</text>
        <text x="88" y="50" font-size="3.2" fill="#555" font-family="system-ui,sans-serif">Posterior</text>
        <text x="50" y="6" text-anchor="middle" font-size="3.2" fill="#555">Dorsal</text>
        <text x="50" y="97" text-anchor="middle" font-size="3.2" fill="#555">Ventral</text>`;
    }
    if (view === "lateral") {
      return `<text x="4" y="50" font-size="3.2" fill="#555">Anterior</text>
        <text x="86" y="50" font-size="3.2" fill="#555">Posterior</text>
        <text x="50" y="6" text-anchor="middle" font-size="3.2" fill="#555">Dorsal</text>
        <text x="50" y="97" text-anchor="middle" font-size="3.2" fill="#555">Ventral</text>`;
    }
    return `<text x="200" y="28" text-anchor="middle" font-size="11" fill="#555">Dorsal</text>
      <text x="200" y="338" text-anchor="middle" font-size="11" fill="#555">Ventral</text>
      <text x="28" y="178" font-size="11" fill="#555">Right</text>
      <text x="340" y="178" font-size="11" fill="#555">Left</text>`;
  }

  function resolveAssetUrl(relativePath) {
    if (typeof window === "undefined" || !window.location?.origin) return relativePath;
    const pathname = window.location.pathname || "/";
    const basePath = pathname.replace(/[^/]*$/, "");
    const base = basePath.endsWith("/") ? basePath : `${basePath}/`;
    return `${window.location.origin}${base}${relativePath.replace(/^\//, "")}`;
  }

  function diagramFromImage(view, highlight) {
    const meta = IMAGE_VIEWS[view];
    const map = HIGHLIGHTS[view] || {};
    const title = VIEW_TITLES[view];
    const imgSrc = resolveAssetUrl(meta.src);
    let overlay = "";
    for (const key of keysForView(view, highlight)) {
      const shape = map[key];
      if (shape) overlay += renderHighlightShape(shape, key === highlight);
    }
    const cap =
      view === "sagittal"
        ? "Midsagittal · anterior left · highlight = structure to name (from chart pack)."
        : "Left lateral hemisphere · highlight = structure to name (from chart pack).";
    return `<figure class="brain-anatomy-figure brain-anatomy-raster"><div class="brain-anatomy-stack" role="img" aria-label="${title}"><img class="brain-anatomy-base" src="${imgSrc}" alt="${title}" width="520" height="506" decoding="async" loading="eager"/><svg class="brain-anatomy-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="${meta.viewBox}" aria-hidden="true"><title>${title}</title>${overlay}${orientationLabels(view)}</svg></div><figcaption>${cap}</figcaption></figure>`;
  }

  function renderCoronalRegion(key, reg, highlight, fills) {
    const on = key === highlight;
    const base = fills[reg.kind] || fills.cortex;
    const fill = on ? HI : base;
    return `<path d="${reg.d}" fill="${fill}" stroke="${on ? HI_STROKE : STROKE}" stroke-width="${on ? 2 : 0.9}"/>`;
  }

  function diagramCoronal(highlight) {
    const title = VIEW_TITLES.coronal;
    const fills = CORONAL.FILL;
    let paths = `<path d="${CORONAL.outline}" fill="${fills.cortex}" stroke="${STROKE}" stroke-width="1.8"/>`;
    paths += `<path d="M 72 118 C 98 98 128 92 200 90 C 272 92 302 98 328 118 C 302 148 272 158 200 160 C 128 158 98 148 72 118 Z" fill="#f5eef0" stroke="${STROKE}" stroke-width="0.6" opacity="0.85"/>`;
    for (const key of keysForView("coronal", highlight)) {
      const reg = CORONAL.regions[key];
      if (reg) paths += renderCoronalRegion(key, reg, highlight, fills);
    }
    const cap =
      "Coronal section at thalamus & basal ganglia · highlight = structure to name (schematic, chart-pack colors).";
    return `<figure class="brain-anatomy-figure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" role="img" aria-label="${title}"><title>${title}</title>${paths}${orientationLabels("coronal")}<text x="200" y="18" text-anchor="middle" font-size="11" fill="#444" font-family="system-ui,sans-serif">${title}</text></svg><figcaption>${cap}</figcaption></figure>`;
  }

  function diagram(view, highlight) {
    if (view === "coronal") return diagramCoronal(highlight);
    if (IMAGE_VIEWS[view]) return diagramFromImage(view, highlight);
    return diagramFromImage("sagittal", highlight);
  }

  global.BRAIN_ANATOMY_VIEW_TITLES = VIEW_TITLES;
  global.BRAIN_ANATOMY_DIAGRAM = { diagram, HIGHLIGHTS, CORONAL, resolveAssetUrl };
})(typeof window !== "undefined" ? window : globalThis);
