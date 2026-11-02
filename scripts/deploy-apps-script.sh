#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/google-apps-script"
clasp push --force
clasp deploy --description "MCB80x cloud backup $(date +%Y-%m-%d)"
