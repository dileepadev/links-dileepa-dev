# AGENTS.md

Canonical instructions for AI coding agents working in this repository.

> This file is the **single source of truth**. `CLAUDE.md` and
> `.github/copilot-instructions.md` intentionally contain only tool-specific notes and point
> back here. Add shared rules **here only** - duplicating them causes drift and contradictory
> guidance.

## What this is

`links-dileepa-dev` is the link page at **[links.dileepa.dev](https://links.dileepa.dev)** - a
single static Astro page consolidating social profiles and useful links. Deployed to GitHub
Pages.

Smallest surface of the seven repositories, and the most exposed: it is the link people open
from a social bio, so inconsistent branding here undercuts the rebrand everywhere else.

v2.0.0 applied the new design system, upgraded Astro across two majors, and closed the open
question about whether link data should come from the API (static, see Gotchas).

Version `2.0.0`, shipped. [TODO.md](TODO.md) holds this repo's slice. Issue **#2** holds the
full scope. The cross-repository roadmap lives in `dileepadev/TODO.md`.

## Layout

| Path                               | Status                                                                  |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `src/pages/index.astro`            | **Built.** The whole site - one page, links grouped by category         |
| `src/pages/404.astro`              | **Built.**                                                              |
| `src/layouts/Layout.astro`         | **Built.** SEO: canonical, Open Graph, Twitter cards, JSON-LD           |
| `src/components/LinkCard.astro`    | **Built.** The one real component - link, copy, and QR actions          |
| `src/components/ThemeToggle.astro` | **Built.** Radial spotlight transition, matching `dileepa-dev`          |
| `src/components/QrModal.astro`     | **Built.** One shared instance, filled in per click                     |
| `src/data/links.json`              | **Built.** Grouped: `{ group, links: [{ name, handle, url, icon }] }`   |
| `src/icons/link-icons.ts`          | **Built.** SVG markup keyed by `links.json`'s `icon` field              |
| `src/scripts/qr.ts`                | **Built.** Client-side QR rendering via `qrcode-generator`              |
| `src/styles/`                      | **Built.** `global.css`, `brand-tokens.css`, plus per-component CSS     |
| `public/images/`                   | **Built.** portrait; favicon set and `og.png` at `public/` root         |
| `DESIGN.md`                        | **Vendored.** Platform design contract - agent-facing synthesis         |
| `docs/`                            | **Vendored.** Brand guide, design system, mirrored tokens, brand assets |

## Toolchain

- Node 22.12+ (Astro 6+'s minimum) and npm. `npm install`, then `npm run dev`.
- `npm run build` · `npm run preview` · `npm run format` (Prettier, including `.astro`). Static
  output in `dist/`.
- Astro 7 + Tailwind CSS 4 via `@tailwindcss/vite`. Vanilla JS for small interactions - there is
  no UI framework here and there should not be one.
- Deploys to GitHub Pages via `.github/workflows/astro.yml`.

## Coding standards

- Match the style already in the file you're editing.
- Astro components, plain CSS, and vanilla JS. Do not add React, Vue, or Svelte for a page that
  renders a list of links.
- Styles live in `src/styles/` - `global.css` for tokens and base, `components/*.css` per
  component. Keep that split.
- Comments explain _why_, not _what_.
- Link data belongs in `src/data/links.json`, never inline in a template.

## Brand rules - v2.0.0

Tokens come from `dileepadev/docs/brand/brand-tokens.css`, vendored here as
`src/styles/brand-tokens.css` - imported into `src/styles/global.css` and wired into
Tailwind 4's `@theme` - and mirrored for the doc set as `docs/brand-tokens.css`. Import them;
never re-declare values.

The vendored doc set - `DESIGN.md`, `docs/brand-guide.md`, `docs/design-system.md`,
`docs/brand-tokens.css`, and the `docs/brand/` assets - is copied from `dileepa-dev` and run
through Prettier, with no content edits. When a canonical file changes, re-copy it and run
`npm run format`; never patch a copy in place. The single permitted deviation is the one
recorded in `src/styles/brand-tokens.css`'s header: the Google Fonts `@import` is dropped,
because an `@import` is invalid inside the `@layer` that sheet is imported into, and the fonts
load from a `<link>` in `Layout.astro` instead.

> [!IMPORTANT]
> The HTML design reference still carries **v1.0 tokens** - `--cyan`, `--gold`, a different
> neutral ramp, Manrope aliased as the mono font, weights 600/800. Layout and structure only.
> Every colour and type value comes from `brand-tokens.css`.

- Emerald is the only accent. No second hue.
- Never Emerald Deep on Carbon. Never Emerald Bright on Paper.
- Manrope (UI) and JetBrains Mono (handles, metadata). Weights **400, 500, 700 only**.
- Sentence case throughout.
- **One emerald accent per surface.** This page is entirely a list of cards - the temptation to
  tint every one is exactly what the rule exists to prevent.
- `LinkCard` matches the platform card contract: same radius, hairline border, surface colour,
  hover treatment, and focus ring as `dileepa.dev`.
- The favicon is the portrait, at every size - brand-guide.md §3.2 - matching `dileepa-dev`
  rather than the reduced `/.` mark, which stays reserved for in-product square placements.
- Portrait background is `--ink-800` (the token, not a literal hex - it moved between guide
  revisions and will again).
- No hard-coded hex.

`dileepa-dev` is the reference implementation. Match it rather than designing independently.

## Testing

There is no test suite. Before calling a change done:

- `npm run build` clean, with no deprecation warnings.
- Every link resolves - click through all of them, they are the entire product.
- Both themes, and mobile width first. Most visitors arrive from a phone.
- Verify the social preview card still renders after any change to `Layout.astro` - the Open
  Graph tags and JSON-LD are easy to break silently during an Astro major upgrade.

## Docs

- `README.md` is user-facing and stays minimal: stack, features, getting started, deployment.
  Brand and design-system detail belongs in this file (AGENTS.md), not there.
- `CHANGELOG.md` gets categorised entries at release time.

## Git workflow

- Branches: [BRANCH_NAMING_GUIDELINES.md](BRANCH_NAMING_GUIDELINES.md). `main` is protected.
- Commits: [COMMIT_MESSAGE_GUIDELINES.md](COMMIT_MESSAGE_GUIDELINES.md) - if the work traces to
  a GitHub issue, reference it (`fixes #12`, `refs #12`); don't invent an issue number if none
  was given. v2.0.0 work traces to `refs #2`.
- PRs: [PULL_REQUEST_GUIDELINES.md](PULL_REQUEST_GUIDELINES.md)
- Versioning: [VERSIONING.md](VERSIONING.md) - SemVer.

## Secrets

None. This is a fully static site with no API calls and no credentials. `site` in
`astro.config.mjs` is `https://links.dileepa.dev`, and it is not secret.

## Gotchas

- **There is no API integration, by decision.** `links.json` is the only data source, and that's
  final for v2.0.0 - not a placeholder. The data changes about twice a year, so a build-time API
  call would trade a real failure mode (the build breaking because an endpoint is down) for no
  benefit over a committed file. Revisit only if that cadence changes materially; the
  alternative (a `/links` FastAPI resource, an admin screen, a rebuild trigger) is recorded in
  `dileepadev/docs/architecture/platform-overview.md` if it's ever needed.
- **The Blog entry now points at `dileepa.dev/blog`,** not `blog.dileepa.dev` - that host is
  retired rather than redirected, so this had to move before the old host went away. Both `url`
  and the displayed `handle` were updated. Closed [#3](https://github.com/dileepadev/links-dileepa-dev/issues/3).
- **Icons are keyed, not inlined.** `links.json` holds an `icon` string per entry; the actual SVG
  markup lives in `src/icons/link-icons.ts`, keyed the same way. Add a new link by adding both an
  entry and, if the icon doesn't already exist, a key in that file.
- **`links.dileepa.dev` does not move.** It's printed on profiles and slides. Every entry that
  resolved before v2.0.0 still resolves - none were dropped in the redesign.
- **The `<a>` in `.link-card-hit` is the card's real click target, not the whole `.link-card`
  div.** A `<button>` (the copy button) can't legally nest inside an `<a>` in HTML, so the card
  is a `div` with an absolutely-positioned overlay link underneath the button, and `:has()`
  drives the card's hover/focus visuals off that inner link.
- **One theme storage key across the platform:** `dileepa-theme`, keyed off `data-theme` on
  `<html>` - not the `.dark`/`.light` class the v1 page used. Matches `dileepa-dev` exactly, so
  a visitor's choice follows them between the two.
