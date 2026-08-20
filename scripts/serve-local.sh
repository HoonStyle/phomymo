#!/usr/bin/env bash
set -euo pipefail

PHOMYMO_PORT="${PHOMYMO_PORT:-8080}"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
WEB_DIR="${PROJECT_DIR}/src/web"

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required to run the local server." >&2
  exit 1
fi

echo "Phomymo: http://localhost:${PHOMYMO_PORT}"
exec python3 -m http.server "${PHOMYMO_PORT}" --bind 127.0.0.1 --directory "${WEB_DIR}"
