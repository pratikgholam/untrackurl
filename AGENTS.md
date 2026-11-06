# AGENTS.md — untrackurl

## Purpose

untrackurl removes tracking parameters (`utm_*`, `fbclid`, `gclid`, etc.) from any URL and returns a clean link. It does not change anything else — path, fragment, and non-tracking query parameters are preserved exactly.

**Privacy by design:** processing happens entirely on the device. Nothing is sent anywhere. No analytics, no logging, no third-party scripts. Rules are bundled at build time, so there are no runtime fetches.

## Scope right now

**Focus: the web part.** Paste a link, get a clean link. Cleaning happens in the browser.

The CLI part comes later, once the core URL-cleaning logic is developed properly.

## How to run

- Web: open `index.html` (or serve the directory locally). No build step required for now.
- The URL-cleaning logic lives in the web app's JavaScript; rules are bundled in the repo.

## What counts as done for the web part

1. Core URL-cleaning logic works: strips known tracking params, preserves everything else.
2. Rules are bundled locally (no runtime fetches).
3. Paste-in / get-clean-link UI works in the browser.

Only then do we start the CLI.

## Conventions

### Commits

- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`.
- Imperative mood, short subject line (`feat: strip utm_source from query`).
- Body explains *why* when it isn't obvious.

### Branches

- Work on feature branches off `development`.
- Merge to `development` when complete.
- `development` is the default branch and tracks `origin/development`.

### Code style

- Plain JS where possible; no framework unless the need proves itself.
- Keep rules in one obvious place so they're easy to audit and extend.
- No network calls, no analytics, no third-party scripts — ever.

## Things agents should not do

- Do not add network fetches or third-party dependencies to the cleaning path.
- Do not change path, fragment, or non-tracking query params.
- Do not build the CLI until the web core is done and reviewed.

## Configuration needed from your side

None. Work entirely inside this repo; no API keys or env files required.
