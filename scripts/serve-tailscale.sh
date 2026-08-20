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
if ! command -v tailscale >/dev/null 2>&1; then
  echo "tailscale is not installed or is not on PATH." >&2
  exit 1
fi
if ! tailscale status >/dev/null 2>&1; then
  echo "Tailscale is not connected. Run 'tailscale up' first." >&2
  exit 1
fi

python3 -m http.server "${PHOMYMO_PORT}" --bind 127.0.0.1 --directory "${WEB_DIR}" &
SERVER_PID=$!

cleanup() {
  kill "${SERVER_PID}" 2>/dev/null || true
  wait "${SERVER_PID}" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "Starting tailnet-only HTTPS access to Phomymo..."
echo "Press Ctrl+C to stop."
tailscale serve "http://127.0.0.1:${PHOMYMO_PORT}"
