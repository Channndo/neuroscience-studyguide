// Schematic neuroanatomy for identification quizzes (standard orientation: dorsal up; sagittal = anterior left).
(function (global) {
  const STROKE = "#2a2a2a";
  const FILL = "#ddd6cc";
  const HI = "rgba(164, 16, 52, 0.62)";
  const HI_STROKE = "#8b0a2a";
  const CSF = "#b8d4e8";

  const VIEW_TITLES = {
    sagittal: "Midsagittal section (schematic)",
    lateral: "Lateral view (left hemisphere, schematic)",
    coronal: "Coronal section (through diencephalon & basal ganglia)"
  };

  /** @type {Record<string, Record<string, { d: string, kind?: string }>>} */
  const REGIONS = {
    sagittal: {
      frontal_cortex: { d: "M 52 92 C 52 42 118 22 198 28 C 258 30 292 52 298 92 L 282 128 L 118 122 Z" },
      parietal_cortex: { d: "M 118 122 L 282 128 L 298 92 C 312 118 318 152 278 172 L 198 165 Z" },
      occipital_cortex: { d: "M 198 165 L 278 172 C 298 192 292 228 248 242 L 212 232 Z" },
      temporal_cortex: { d: "M 118 122 L 198 165 L 212 232 L 168 248 L 92 208 L 98 152 Z" },
      corpus_callosum: { d: "M 128 132 Q 198 112 268 132 Q 198 152 128 132 Z" },
      fornix: { d: "M 148 148 Q 168 128 188 142 Q 178 158 158 162 Q 148 155 148 148 Z" },
      lateral_ventricle: { d: "M 142 142 Q 198 132 254 142 Q 198 152 142 142 Z", kind: "csf" },
      third_ventricle: { d: "M 196 168 L 204 168 L 203 202 L 197 202 Z", kind: "csf" },
      thalamus: { d: "M 172 172 L 228 172 L 232 204 L 168 204 Z" },
      hypothalamus: { d: "M 174 206 L 224 206 L 220 226 L 178 226 Z" },
      mammillary_bodies: { d: "M 182 224 a 6 5 0 1 1 12 0 a 6 5 0 1 1 -12 0 M 206 224 a 6 5 0 1 1 12 0 a 6 5 0 1 1 -12 0" },
      optic_chiasm: { d: "M 168 228 L 232 228 L 228 238 L 172 238 Z" },
      pituitary: { d: "M 192 238 a 9 11 0 1 1 18 0 a 9 11 0 1 1 -18 0" },
      superior_colliculus: { d: "M 188 232 L 212 232 L 210 248 L 186 246 Z" },
      cerebral_peduncle: { d: "M 178 248 L 222 248 L 220 268 L 180 268 Z" },
      midbrain: { d: "M 182 232 L 218 232 L 216 268 L 184 268 Z" },
      pons: { d: "M 162 268 Q 200 284 238 268 L 232 298 L 168 298 Z" },
      medulla: { d: "M 176 298 L 224 298 L 220 334 L 180 334 Z" },
      fourth_ventricle: { d: "M 198 274 L 214 280 L 198 286 L 182 280 Z", kind: "csf" },
      cerebellum: { d: "M 232 258 C 278 242 338 262 352 302 C 362 332 318 348 268 338 C 242 322 228 288 232 258 Z" },
      hippocampus: { d: "M 152 208 Q 172 222 192 212 Q 172 198 152 208 Z" },
      amygdala: { d: "M 162 196 a 11 9 0 1 1 22 0 a 11 9 0 1 1 -22 0" },
      pineal_gland: { d: "M 194 218 a 7 6 0 1 1 14 0 a 7 6 0 1 1 -14 0" },
      spinal_cord: { d: "M 192 334 L 208 334 L 206 352 L 194 352 Z" },
      brainstem: { d: "M 160 232 L 240 232 L 232 334 L 168 334 Z" }
    },
    lateral: {
      frontal_lobe: { d: "M 42 68 C 48 28 128 18 208 32 C 242 40 258 68 252 108 L 228 138 L 88 128 Z" },
      parietal_lobe: { d: "M 88 128 L 228 138 L 252 108 C 266 138 262 172 218 188 L 128 182 Z" },
      occipital_lobe: { d: "M 128 182 L 218 188 C 232 212 222 248 182 258 L 142 242 Z" },
      temporal_lobe: { d: "M 88 128 L 128 182 L 142 242 L 92 252 L 52 198 L 58 148 Z" },
      lateral_sulcus: { d: "M 118 148 Q 155 168 175 210 Q 140 175 105 165 Z", kind: "sulcus" },
      precentral_gyrus: { d: "M 92 92 L 112 92 L 115 168 L 95 168 Z" },
      postcentral_gyrus: { d: "M 115 92 L 135 92 L 132 168 L 112 168 Z" },
      central_sulcus: { d: "M 106 86 L 110 172", kind: "sulcus" },
      primary_auditory_cortex: { d: "M 168 218 L 198 218 L 195 248 L 165 245 Z" },
      primary_visual_cortex: { d: "M 152 228 L 188 232 L 182 258 L 148 252 Z" },
      olfactory_bulb: { d: "M 32 112 a 14 18 0 1 1 28 0 a 14 18 0 1 1 -28 0" },
      cerebellum: { d: "M 252 208 C 298 192 352 218 362 262 C 368 298 328 318 282 308 C 258 292 246 238 252 208 Z" },
      midbrain: { d: "M 228 198 L 252 198 L 248 228 L 226 228 Z" },
      pons: { d: "M 224 228 L 256 228 L 252 258 L 222 258 Z" },
      medulla: { d: "M 226 258 L 252 258 L 248 288 L 224 288 Z" },
      brainstem: { d: "M 222 198 L 258 198 L 252 288 L 220 288 Z" }
    },
    coronal: {
      corpus_callosum: { d: "M 128 92 L 272 92 L 268 112 L 132 112 Z" },
      lateral_ventricle: { d: "M 118 78 Q 200 58 282 78 Q 200 98 118 78 Z", kind: "csf" },
      caudate: { d: "M 152 112 L 192 112 L 188 172 L 148 168 Z" },
      putamen: { d: "M 208 128 L 258 128 L 252 198 L 202 192 Z" },
      globus_pallidus: { d: "M 192 148 L 208 148 L 206 188 L 190 186 Z" },
      internal_capsule: { d: "M 198 112 L 208 112 L 203 248 L 193 248 Z" },
      thalamus: { d: "M 162 182 L 238 182 L 232 248 L 168 248 Z" },
      third_ventricle: { d: "M 196 168 L 204 168 L 203 192 L 197 192 Z", kind: "csf" },
      amygdala: { d: "M 148 228 L 172 228 L 168 252 L 144 248 Z" },
      hippocampus: { d: "M 118 248 Q 138 268 158 252 Q 138 238 118 248 Z" }
    }
  };

  function orientationLabels(view) {
    if (view === "sagittal") {
      return `<text x="28" y="200" font-size="10" fill="#666" font-family="system-ui,sans-serif">Anterior</text>
        <text x="330" y="200" font-size="10" fill="#666" font-family="system-ui,sans-serif">Posterior</text>
        <text x="200" y="42" text-anchor="middle" font-size="10" fill="#666">Dorsal</text>
        <text x="200" y="348" text-anchor="middle" font-size="10" fill="#666">Ventral</text>`;
    }
    if (view === "lateral") {
      return `<text x="28" y="200" font-size="10" fill="#666">Rostral (anterior)</text>
        <text x="300" y="200" font-size="10" fill="#666">Caudal</text>
        <text x="200" y="42" text-anchor="middle" font-size="10" fill="#666">Dorsal</text>
        <text x="200" y="348" text-anchor="middle" font-size="10" fill="#666">Ventral</text>`;
    }
    return `<text x="200" y="42" text-anchor="middle" font-size="10" fill="#666">Dorsal (superior)</text>
      <text x="200" y="348" text-anchor="middle" font-size="10" fill="#666">Ventral (inferior)</text>
      <text x="36" y="200" font-size="10" fill="#666">Right hemisphere</text>
      <text x="300" y="200" font-size="10" fill="#666">Left hemisphere</text>`;
  }

  function outlineForView(view) {
    if (view === "sagittal") {
      return `<path d="M 48 88 C 42 38 128 12 208 18 C 308 22 338 68 332 128 C 326 198 296 258 246 278 L 236 338 L 208 352 L 188 338 L 178 278 C 118 258 68 198 52 128 Z" fill="none" stroke="${STROKE}" stroke-width="2"/>`;
    }
    if (view === "lateral") {
      return `<path d="M 38 62 C 32 22 118 8 208 22 C 278 36 298 78 292 128 C 286 198 256 258 206 272 C 166 282 126 268 96 228 C 66 188 42 128 38 62 Z" fill="none" stroke="${STROKE}" stroke-width="2"/>`;
    }
    return `<ellipse cx="200" cy="178" rx="168" ry="158" fill="none" stroke="${STROKE}" stroke-width="2"/>`;
  }

  function keysForView(view, highlight) {
    const all = Object.keys(REGIONS[view] || {});
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
    const rest = keys.filter(k => k !== highlight);
    if (highlight && keys.includes(highlight)) return [...rest, highlight];
    return keys;
  }

  function renderRegion(key, reg, highlight) {
    const on = key === highlight;
    if (reg.kind === "sulcus") {
      return `<path d="${reg.d}" fill="none" stroke="${on ? HI_STROKE : "#777"}" stroke-width="${on ? 4 : 2}" stroke-dasharray="${on ? "none" : "5 4"}"/>`;
    }
    const fill = reg.kind === "csf" ? (on ? "rgba(164,16,52,0.35)" : CSF) : on ? HI : FILL;
    return `<path d="${reg.d}" fill="${fill}" stroke="${on ? HI_STROKE : STROKE}" stroke-width="${on ? 2.5 : 1}"/>`;
  }

  function diagram(view, highlight) {
    const regions = REGIONS[view] || REGIONS.sagittal;
    const title = VIEW_TITLES[view] || VIEW_TITLES.sagittal;
    let paths = outlineForView(view);
    for (const key of keysForView(view, highlight)) {
      const reg = regions[key];
      if (reg) paths += renderRegion(key, reg, highlight);
    }
    const cap =
      view === "sagittal"
        ? "Midsagittal schematic · anterior left, posterior right, dorsal up. Highlight = structure to name."
        : view === "lateral"
          ? "Left lateral surface · rostral left, caudal right. Highlight = structure to name."
          : "Coronal section at level of thalamus & basal ganglia. Highlight = structure to name.";
    return `<figure class="brain-anatomy-figure"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" role="img" aria-label="${title}"><title>${title}</title>${paths}${orientationLabels(view)}<text x="200" y="24" text-anchor="middle" font-size="11" fill="#444" font-family="system-ui,sans-serif">${title}</text></svg><figcaption>${cap}</figcaption></figure>`;
  }

  global.BRAIN_ANATOMY_VIEW_TITLES = VIEW_TITLES;
  global.BRAIN_ANATOMY_DIAGRAM = { diagram, REGIONS };
})(typeof window !== "undefined" ? window : globalThis);
