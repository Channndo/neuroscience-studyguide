# Google Sheet backup for MCB80x progress

Progress is **encrypted in the browser** with your sync passphrase (AES-GCM + PBKDF2) before it is sent. The sheet only stores ciphertext — not your passphrase and not readable quiz data.

## Deployed project (clasp)

| Resource | Link / ID |
|----------|-----------|
| Google Sheet | https://drive.google.com/open?id=1Zof-OQ1DFISp1ZVfl4iCJ-vvI95s58eMADp-japylhk |
| Script | `1hcfZbn750TqbhWZcbZyVYEBu-qaWL8-vuBH9oM_4Jm1kDm4kAqsHScv3` |
| Web app URL | In repo root `mcb80x-cloud-config.js` |

### Redeploy after code changes

```bash
cd google-apps-script
clasp push --force
clasp deploy --description "MCB80x cloud backup"
```

Update `mcb80x-cloud-config.js` if the deployment ID changes (`…/macros/s/<DEPLOYMENT_ID>/exec`).

### Fresh setup (optional)

1. `clasp create --type sheets --title "MCB80x Study Guide Sync" --rootDir google-apps-script`
2. `clasp push --force && clasp deploy --description "v1"`
3. Copy web app URL + sync secret into `mcb80x-cloud-config.js` (and GitHub `SHEETS_WEBAPP_URL` / `SHEETS_SYNC_SECRET` for Pages builds).

## Sheet columns

| Column | Purpose |
|--------|---------|
| email | Account id (your email until Google Sign-In is wired) |
| google_sub | Reserved for future Google Sign-In |
| display_name | Optional display name |
| updated_at | Last successful push |
| crypto_version | Encryption format version |
| payload_json | Encrypted envelope (salt, iv, ciphertext) |

## Google Sign-In (later)

When you add Sign in with Google, set `google_sub` and `display_name` from the profile and keep using the same encrypted envelope — no passwords stored on the sheet.
