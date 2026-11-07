# Security Remediation — Cloud Backup

## Compromised credential

The previous `syncSecret` (`56895b37833a440783ca84d8e0e7b130215d834b9c10b31c`) appeared in:

- `mcb80x-cloud-config.js` (committed)
- Google Apps Script `checkSecret_` fallback (auto-seeded)
- GitHub Actions `SHEETS_SYNC_SECRET` injection target

**Treat as compromised.** It is removed from the repository default config.

## Required rotation (operator)

1. Generate a new random secret (≥ 32 chars).
2. Apps Script → Project Settings → Script properties → set `SYNC_SECRET` to the new value (or `clasp run setSyncSecret`).
3. GitHub repo → Settings → Secrets → update `SHEETS_SYNC_SECRET`.
4. Redeploy the GAS web app (new deployment ID if URL changes, update `SHEETS_WEBAPP_URL` var).
5. Do **not** commit the new secret to git.

## Client behavior after remediation

| Control | Behavior |
|---------|----------|
| `mcb80x-cloud-config.js` | `syncSecret: ""` in dev/clone — automatic sync **disabled** |
| `MCB80XSheetSync.isConfigured()` | Requires HTTPS web app URL **and** non-empty secret (≥ 16 chars) |
| `pushPost` | No `no-cors` opaque success; failures throw |
| GAS `checkSecret_` | Returns false if `SYNC_SECRET` unset — no default secret |

Local encrypted export/import in Settings remains available without cloud sync.

## Deployment artifact

Production Pages builds may still inject `syncSecret` at CI time into `mcb80x-cloud-config.js`. That value is **public to anyone who loads the site** — it is a shared gate, not user authentication. For stronger assurance, move to per-user tokens or OAuth-bound server validation (out of scope for this pass).
