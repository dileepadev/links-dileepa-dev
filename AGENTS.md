# AGENTS.md

Canonical instructions for AI coding agents working in this repository.

> This file is the **single source of truth**. `CLAUDE.md` and
> `.github/copilot-instructions.md` intentionally contain only tool-specific notes and point
> back here. Add shared rules **here only** — duplicating them causes drift and contradictory
> guidance.

## What this is

`links-dileepa-dev` is the link page at **[links.dileepa.dev](https://links.dileepa.dev)** — a
single static Astro page consolidating social profiles and useful links. Deployed to GitHub
Pages.

Smallest surface of the seven repositories, and the most exposed: it is the link people open
from a social bio, so inconsistent branding here undercuts the rebrand everywhere else.

v2.0.0 applies the new design system, upgrades Astro across two majors, and closes the open
question about whether link data should come from the API.

Currently on branch `feat/v2.0.0`. Version `1.0.0`; the target is `2.0.0`.

[TODO.md](TODO.md) holds this repo's slice. Issue **#2** holds the full scope. The
cross-repository roadmap lives in `dileepadev/TODO.md`.

## Layout

| Path | Status |
| --- | --- |
| `src/pages/index.astro` | **Built.** The whole site — one page |
| `src/pages/404.astro` | **Built.** |
| `src/layouts/Layout.astro` | **Built.** SEO: canonical, Open Graph, Twitter cards, JSON-LD |
| `src/components/LinkCard.astro` | **Built.** The one real component |
| `src/components/ThemeToggle.astro` | **Built.** |
| `src/components/Welcome.astro` | **Probably Astro starter scaffolding.** Confirm before deleting |
| `src/data/links.json` | **Built.** Name, handle, url, and an inline SVG string per entry |
| `src/styles/` | **Built.** `global.css` plus per-component CSS |
| `public/images/` | **Built.** banner, favicon, placeholder, profile |

## Toolchain

- Node 18+ and npm. `npm install`, then `npm run dev`.
- `npm run build` · `npm run preview`. Static output in `dist/`.
- Astro 5.17 + Tailwind CSS 4 via `@tailwindcss/vite`. Vanilla JS for small interactions —
  there is no UI framework here and there should not be one.
- Deploys to GitHub Pages via `.github/workflows/astro.yml`.

Target versions for v2.0.0: Astro **7.x**, Tailwind **4.3.x**.

> [!IMPORTANT]
> Astro 5 → 7 crosses **two majors**. Config, content collections, and integration APIs all
> changed. Read both upgrade guides, and do the upgrade as its **own commit, before the
> rebrand**, so a build break is easy to attribute.

## Coding standards

- Match the style already in the file you're editing.
- Astro components, plain CSS, and vanilla JS. Do not add React, Vue, or Svelte for a page that
  renders a list of links.
- Styles live in `src/styles/` — `global.css` for tokens and base, `components/*.css` per
  component. Keep that split.
- Comments explain *why*, not *what*.
- Link data belongs in `src/data/links.json`, never inline in a template.

## Brand rules — v2.0.0

Tokens come from `dileepadev/docs/brand/brand-tokens.css`, imported into `src/styles/global.css`
and wired into Tailwind 4's `@theme`. Never re-declare values.

> [!IMPORTANT]
> The HTML design reference still carries **v1.0 tokens** — `--cyan`, `--gold`, a different
> neutral ramp, Manrope aliased as the mono font, weights 600/800. Layout and structure only.
> Every colour and type value comes from `brand-tokens.css`.

- Emerald is the only accent. No second hue.
- Never Emerald Deep on Carbon. Never Emerald Bright on Paper.
- Manrope (UI) and JetBrains Mono (handles, metadata). Weights **400, 500, 700 only**.
- Sentence case throughout.
- **One emerald accent per surface.** This page is entirely a list of cards — the temptation to
  tint every one is exactly what the rule exists to prevent.
- `LinkCard` matches the platform card contract: same radius, hairline border, surface colour,
  hover treatment, and focus ring as `dileepa.dev`.
- Portrait background is `ink-800` `#161616`, per the guide.
- No hard-coded hex.

`dileepa-dev` is the reference implementation. Match it rather than designing independently.

## Testing

There is no test suite. Before calling a change done:

- `npm run build` clean, with no deprecation warnings.
- Every link resolves — click through all of them, they are the entire product.
- Both themes, and mobile width first. Most visitors arrive from a phone.
- Verify the social preview card still renders after any change to `Layout.astro` — the Open
  Graph tags and JSON-LD are easy to break silently during an Astro major upgrade.

## Docs

- `README.md` currently describes SEO config and the data file. Keep it accurate through the
  upgrade, and record the API-integration decision there once it is made.
- `CHANGELOG.md` gets categorised entries at release time.

## Git workflow

- Branches: [BRANCH_NAMING_GUIDELINES.md](BRANCH_NAMING_GUIDELINES.md). `main` is protected.
- Commits: [COMMIT_MESSAGE_GUIDELINES.md](COMMIT_MESSAGE_GUIDELINES.md) — if the work traces to
  a GitHub issue, reference it (`fixes #12`, `refs #12`); don't invent an issue number if none
  was given. v2.0.0 work traces to `refs #2`.
- PRs: [PULL_REQUEST_GUIDELINES.md](PULL_REQUEST_GUIDELINES.md)
- Versioning: [VERSIONING.md](VERSIONING.md) — SemVer.

## Secrets

None. This is a fully static site with no API calls and no credentials. `SITE` is the only
environment variable, and it is not secret.

If the API-integration option is taken, a build-time key would be the first secret this repo
has ever held — treat that as a decision, not a detail.

## Gotchas

- **There is no API integration.** Not "minimal" — none. `links.json` is the only data source.
  The platform plan's "review its API integration" refers to something that does not exist.
  The decision is: keep it static (recommended — the data changes about twice a year) or add a
  `/links` resource plus an admin screen plus a rebuild trigger.
- **The Blog entry points at `blog.dileepa.dev`, and nothing will catch it.** That host is being
  **retired rather than redirected** — there is no 301 layer, so once it is switched off this is a
  dead link on the page most likely to be shared. Point `url` *and* the displayed `handle` at
  `dileepa.dev/blog`. Safe to do now: the new URL already serves all 18 posts. Tracked in
  [#3](https://github.com/dileepadev/links-dileepa-dev/issues/3).
- **Inline SVG strings live inside `links.json`.** They bypass any icon system and are painful
  to maintain. Move them to `astro-icon` or a local sprite.
- **`Welcome.astro` and `welcome.css` look like starter scaffolding.** Confirm they are unused
  before deleting — do not assume.
- **`links.dileepa.dev` is printed on profiles and slides.** The domain does not move, and no
  existing link may be dropped during the redesign.
- **Good canary for the design system.** It is the only non-Next.js frontend, so shipping it
  early proves the tokens work outside a Next build.
