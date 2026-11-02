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

v2.1.0 is released: the monochrome visual release. [TODO.md](TODO.md) records its scope;
detailed tasks and verification are in
[issue #5](https://github.com/dileepadev/links-dileepa-dev/issues/5).
Brand provenance is recorded in
[docs/brand-source.md](docs/brand-source.md).

## Layout

| Path                                | Status                                                                                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src/pages/index.astro`             | **Built.** The whole site - one page, links grouped by category                                                                     |
| `src/pages/404.astro`               | **Built.**                                                                                                                          |
| `src/layouts/Layout.astro`          | **Built.** SEO: canonical, Open Graph, Twitter cards, JSON-LD                                                                       |
| `src/components/LinkCard.astro`     | **Built.** Link destinations, copy and QR actions                                                                                   |
| `src/components/ProfilePanel.astro` | **Built.** The website's profile-panel pattern: sticky at desktop, compact above the links on mobile                                |
| `src/components/ThemeToggle.astro`  | **Built.** Radial spotlight transition, matching `dileepa-dev`                                                                      |
| `src/components/BackToTop.astro`    | **Built.** Floating scroll control and reading-progress ring on both pages                                                          |
| `src/components/QrModal.astro`      | **Built.** One shared preview, zoom from 50% to the largest size the window fits, opens large, contained scrolling and focus return |
| `src/data/links.json`               | **Built.** Grouped: `{ group, links: [{ name, handle, url, icon }] }`                                                               |
| `src/icons/link-icons.ts`           | **Built.** SVG markup keyed by `links.json`'s `icon` field                                                                          |
| `src/scripts/qr.ts`                 | **Built.** Client-side QR rendering via `qrcode-generator`                                                                          |
| `src/styles/`                       | **Built.** `global.css`, `brand-tokens.css`, plus per-component CSS                                                                 |
| `public/images/`                    | **Built.** portrait; favicon set and `og.png` at `public/` root                                                                     |
| `DESIGN.md`                         | **Vendored.** Platform design contract - agent-facing synthesis                                                                     |
| `docs/`                             | **Vendored.** Brand guide, design system, mirrored tokens, brand assets                                                             |

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

## Brand rules — v2.1.0

These are the **v2.1.0** rules (dileepadev#4).

- **No brand hue.** The accent is the text colour — `--brand` is Ink 100 `#F1F1F1` on Carbon and
  Paper 900 `#131313` on Paper. Colour appears only as a state: `--success`, `--error`,
  `--warning`. Never add a hue as an accent.
- Components use semantic tokens only — never a hex, never a raw ramp token.
- Three text steps: `--fg` for titles, `--fg-body` for running text, `--fg-muted` for metadata.
- Manrope for display and UI, JetBrains Mono for code and data. No third family.
- Weights 400, 500, 700 only. No 600. Every heading is 500; 700 is the display line and
  `<strong>` only. Nothing smaller than 13px (`--text-label`).
- Corners are fixed (panel, tile, block, inline), capsule (every control and field), or
  concentric (a row inside a tile). Never invent a radius.
- An edge means it acts: buttons, selects and interactive chips take `--border-strong`, fields
  take `--border-input`, labels take none.
- Every text link carries an arrow — `→` on the site, `↗` off it.
- The logo is the handle, `@dileepadev`: the `@` in `--fg-muted`, the wordmark in `--fg`, both
  Manrope 500, no gap. Black and white only.
- Sentence case everywhere — headings, buttons, nav, labels.
- Banned words, without exception: _passionate about, leveraging, cutting-edge, revolutionize,
  game-changing, unlock, seamless, AI enthusiast, thought leader, journey, humbled to announce,
  10x._

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
  was given. v2.1.0 work traces to `refs #5`.
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
- **The profile panel follows `dileepa-dev`'s `ProfileRail.tsx` and final soft-panel CSS.** At
  1024px it becomes a sticky 21rem column with a square, edge-to-edge portrait; below that it
  stacks above the links with a compact portrait. The footer stays in the content column.
- **The header and profile panel both render a theme switch; CSS exposes one at a time.**
  `ThemeToggle.astro` binds every `.theme-toggle` once, without a shared ID, so either placement
  works and the radial transition starts from the button that was actually pressed.
- **`links.dileepa.dev` does not move.** It's printed on profiles and slides. Every entry that
  resolved before v2.0.0 still resolves - none were dropped in the redesign.
- **The `<a>` in `.link-card-hit` is the card's real click target, not the whole `.link-card`
  div.** A `<button>` (the copy button) can't legally nest inside an `<a>` in HTML, so the card
  is a `div` with an absolutely-positioned overlay link underneath the button, and `:has()`
  drives the card's hover/focus visuals off that inner link.
- **One theme storage key across the platform:** `dileepa-theme`, keyed off `data-theme` on
  `<html>` - not the `.dark`/`.light` class the v1 page used. Matches `dileepa-dev`'s key, but the
  two sites are different origins, so each remembers its own choice.

- **The footer version links to that version's release,** matching `dileepa-dev`, rather than
  a branch or `/releases/latest`. The label comes from `package.json`; its release page is
  expected only after publication. Do not fetch GitHub from the build to populate this link.
- **Footer UI follows the main site's actual footer,** including Manrope metadata (15px,
  1.55 line height), 24px link gaps, the legal/meta row and SVG arrow masks. The main site's
  local mono alias resolves to Manrope; do not infer a monospace footer from that alias.
- **The profile's Get in touch button opens the main site's `/#contact` section.** Its origin
  comes from the Website entry in `links.json`; the separate Email card remains a mailto link.
- **QR zoom changes display size only.** Keep the SVG payload and its white scan field intact,
  reset to 100% on each open, and keep enlarged codes inside the scrollable preview. Close must
  still restore the launcher's focus.
- **Back to top follows the main site's control.** Show after 400px, with a clockwise ring
  calculated from the current document height, 40px desktop/36px mobile sizing and an instant
  return under reduced motion. Hidden controls must stay out of the keyboard focus order.
- **Copy feedback follows `dileepa-dev`'s `useCopy`.** The pressed button shows a success tick
  and a Copied label for two seconds, with one polite live announcement. Success has no toast;
  failure shows the address in a toast. Keep the textarea fallback for missing Clipboard API,
  restore focus after it and reset each card's feedback independently.

## Brand vendoring and release review

- `docs/brand-tokens.css`, `docs/brand-guide.md`, `docs/design-system.md` and
  `DESIGN.md` are exact canonical copies. Re-copy; never tune a copy in place.
- The runtime token sheet removes only the Google Fonts import. Its header
  records the source and how fonts load. Application-specific styles
  use semantic tokens in global/component CSS.
- [docs/brand-source.md](docs/brand-source.md) records the source and the
  refresh procedure.
- Detailed checklists belong in the GitHub issue, not in `TODO.md`.
- Merge, tag and GitHub release each require owner approval.
- **The QR preview never outgrows the window.** Zoom runs from 50% to the largest size the whole
  code fits at, measured on open and on resize; a cropped code will not scan.
