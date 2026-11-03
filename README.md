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

### Cloud backup (Google Sheet)

1. Deploy `google-apps-script/MCB80xSheetSync.gs` to your Google Sheet (see `google-apps-script/README.md`).
2. Set `sheetsWebAppUrl` (and optional `syncSecret`) in `mcb80x-cloud-config.js`, or inject via GitHub Actions repository variables.
3. In the app **Settings**, set your **account email** and a **sync passphrase** (≥ 8 characters).

Progress is **encrypted in the browser** before upload (AES-GCM; key derived with PBKDF2). The sheet stores ciphertext only — **not your passphrase**. A one-way hash on this device helps detect typos; it is not your password stored in the cloud. **Sign in with Google** can be added later and will fill the email / `google_sub` columns.

You can also **export / import** an encrypted JSON backup file from Settings without using the sheet.

### Sign in (email or social)

Open **Sign in** in the app header (`sign-in.html`). **Create an account** at `sign-up.html` with email and password (12+ chars with letter, number, and symbol) plus two security questions for new-device verification. Social buttons use Syntrix OAuth (`mcb80x`); Amazon uses Square1 when configured. After sign-in your email links to encrypted cloud backup and auto-sync when OAuth-derived keys apply.

**Amazon** uses the same Login with Amazon app as **Square1** (`square1OAuthBase` in `mcb80x-cloud-config.js`). The study guide merges Square1’s provider list with Syntrix’s, so you do **not** need Amazon credentials on Render. Deploy the latest **Square1** site (external `return_to` + CORS for GitHub Pages) and ensure `OAUTH_AMAZON_*` remains set on Square1/Netlify.

### Regenerate large expansion banks

```bash
python3 _generate_expansion.py
```

Writes `questions-expansion.js` (700+ part-aligned items; skips stems already in other bank files).
