# neuroscience-studyguide

HarvardX MCB80x practice quiz suite (static SPA — open `index.html` locally or deploy to any static host).

## GitHub Pages (intended URL)

**https://channndo.github.io/neuroscience-studyguide/**

### If you see a 404

GitHub Pages is **not active** until all of the following are true:

1. **Repository visibility is Public** — on the free GitHub plan, Pages does **not** publish from private repos (`422` when enabling Pages).
2. **Pages is turned on** — repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (this repo includes `.github/workflows/deploy-pages.yml`).
3. Wait 1–3 minutes after a successful workflow run, then hard-refresh the site.

### Local use (no GitHub needed)

From this folder:

```bash
python3 -m http.server 8080
```

Then open **http://localhost:8080/** (required so `questions-bank.js` loads correctly).

Progress and settings stay in **localStorage** on whichever origin you use.

### Regenerate large expansion banks

```bash
python3 _generate_expansion.py
```

Writes `questions-expansion.js` (700+ part-aligned items; skips stems already in other bank files).
