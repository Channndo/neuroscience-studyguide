# Security Audit

**Status:** Phase 0 — findings documented; remediation in Phase 3  
**Branch:** `qa/comprehensive-remediation`

## Summary

The static GitHub Pages app **cannot** provide tamper-proof exams or server-verified backups. Current cloud sync uses a **shared secret visible in the browser** and trusts **client-supplied email**.

## Findings

| ID | Severity | Component | Finding |
|----|----------|-----------|---------|
| SEC-001 | Critical | `mcb80x-cloud-config.js` | `syncSecret` hardcoded in public JS |
| SEC-002 | Critical | `.github/workflows/deploy-pages.yml` | Injects `SHEETS_SYNC_SECRET` into deployed artifact |
| SEC-003 | Critical | `MCB80xSheetSync.gs` | Default/fallback secret in script properties; secret-only auth |
| SEC-004 | High | `sheets-sync.js` | JSONP/pull + `no-cors` push patterns; success not verifiable from browser |
| SEC-005 | High | `biometric-auth.js` | Client-side WebAuthn challenge without server verification |
| SEC-006 | Medium | Encryption | Key derivation from email + public pepper (per spec — inadequate) |

## Required actions (Phase 3)

1. Rotate and invalidate exposed `syncSecret`; remove from all public artifacts.
2. Fail closed in GAS without server-side config; fix `getRange` row read.
3. Disable insecure sync path until authenticated backend exists; keep local export/import.
4. Document honest WebAuthn scope (local unlock vs server-verified).

## Compensating controls today

- Payloads are AES-GCM encrypted client-side (passphrase-dependent).
- Google Sheet stores ciphertext only.
