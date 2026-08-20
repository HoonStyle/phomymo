# CLAUDE.md

Guidance for AI agents working in this repository.

## Judgment rules (non-negotiable)

These exist because each one was violated here and caused real damage
(wrong-diagnosis PRs, wasted label prints):

1. **Reproduce before diagnosing.** Never name a root cause for a reported
   bug until you have reproduced the symptom — a failing test, a decoded
   raster, a screenshot that shows the same defect. If you cannot reproduce
   it, say so; do not ship a fix for an unverified theory.
2. **Ambiguous numbers/settings: ask first.** When the user references a
   value ("I set it to 2 and 5") without naming the setting, confirm which
   setting before doing anything. Do not pick the interpretation that best
   fits your current hypothesis.
3. **Physical print issues: one-line diagnosis → user confirms → then fix.**
   The agent cannot see the printer. State the suspected cause in one
   sentence and get confirmation before changing code.
4. **When corrected, restart — don't patch the hypothesis.** If the user
   says your framing is wrong, discard the hypothesis entirely and re-read
   the original report from scratch.
5. **Don't bundle unrequested changes.** Fix what was reported. Improvements
   nobody asked for go in a separate proposal, not into the fix PR.

## Architecture

- Static web app in `src/web/` — no build step, no server. ES modules:
  `app.js` (UI wiring), `canvas.js` (renderer + raster generation),
  `elements.js`, `gallery.js` (template gallery), `templates.js`,
  `printer.js` (protocols), `ble.js`, `storage.js`, `constants.js`,
  `template-library.json` (built-in templates), `printers.json`.
- Design space is **8 px/mm** (203 DPI). Label coordinates are pixels at
  this base resolution.
- Print pipeline: `getRasterData` (M-series; renders into a
  print-head-width canvas, e.g. 384 dots for M110, so print offset shifts
  the label within the head without clipping) / `getRasterDataRaw`
  (D-series) → `printer.js` protocol handlers.
- BLE UUIDs in `constants.js` must stay **canonical 128-bit strings** —
  numeric shorthand (0xff00) breaks iOS/Bluefy.

## Cache busters — the #1 recurring mistake

Module imports carry `?v=N` query strings. **Every importer of a module
must use the identical version**, or the browser loads the module twice
(two module instances, broken state). When you touch a module:

- Bump its `?v=` in **all** importers: `canvas.js` is imported by both
  `app.js` and `gallery.js`; `app.js` is loaded from `index.html`.
- Always bump **forward**, even when reverting.
- Verify with: `grep -rn "?v=" src/web/*.js src/web/index.html`

## Testing

- Playwright suite in `tests/`, run against a static file server.
- The full suite must pass before any push. Helpers in `tests/helpers/app.ts`
  (`waitForAppReady` dismisses the compatibility overlay — required in
  headless, where Web Bluetooth is absent).
- For print/raster bugs, follow `tests/09-print-offset-raster.spec.ts`:
  decode the packed raster bytes and assert on dot positions. This is how
  print symptoms are reproduced digitally.

## Workflow

- Feature work on a branch → PR to `master` → squash merge (the user
  drives merges; do not merge without their go-ahead unless they already
  told you to proceed).
- After a squash merge, reset the working branch onto `origin/master`
  (`git checkout -B <branch> origin/master` + force-with-lease push).
- Deploys: pushing `master` triggers `.github/workflows/deploy-pages.yml`,
  which publishes `src/web/` to the `gh-pages` branch →
  https://hoonstyle.github.io/phomymo/
- Repo Issues tab is disabled — known problems are tracked in README
  "Known Issues" (e.g. M110 prints shifted ~2-3mm left; workaround is the
  horizontal Print Offset).

## User context

- The user prints from an iPhone via the Bluefy browser to a Phomemo M110.
- Communicate in Korean. Keep reports short and lead with the conclusion.
