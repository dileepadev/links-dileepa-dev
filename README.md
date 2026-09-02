# links.dileepa.dev

A small, fast static page consolidating my social profiles and useful links in one place — the
link people open from a social bio.

## Stack

- **Astro 7** — static site generator, no client-side framework
- **Tailwind CSS 4** via `@tailwindcss/vite`
- Vanilla JS for the theme toggle and copy-to-clipboard — there is no UI framework here and there
  should not be one

## Brand

Built against the platform's v2.0.0 design system. Tokens are vendored from
[`dileepadev/docs/brand/brand-tokens.css`](https://github.com/dileepadev/dileepadev/blob/main/docs/brand/brand-tokens.css)
into `src/styles/brand-tokens.css` and wired into Tailwind's `@theme` in `src/styles/global.css`.
The layout, lockup, nav, card and theme-toggle CSS is reproduced from `dileepa-dev`, the
platform's reference implementation, so this page reads as the same site rather than a
lookalike of it.

The one deliberate local change to the vendored token sheet is documented at the top of
`src/styles/brand-tokens.css`: the Google Fonts `@import` is invalid inside a CSS `@layer`
block, so it's removed there and the fonts load through a `<link>` in `Layout.astro` instead.

The theme toggle persists under `dileepa-theme` in `localStorage` — the same key `dileepa-dev`
uses — so the choice a visitor makes on one surface follows them to the other.

## Data source

**Static, deliberately.** Link data lives in `src/data/links.json` and nowhere else. There is no
API integration — this was an open decision going into v2.0.0 and it's now closed: the data
changes about twice a year, so a build-time API call would trade a real failure mode (the build
breaking because an endpoint is down) for no benefit over a committed JSON file. If that
cadence changes materially, revisit the FastAPI-resource option recorded in
`dileepadev/docs/architecture/platform-overview.md`.

Icons are keyed by name in `links.json` (`"icon": "github"`) and resolved against
`src/icons/link-icons.ts`, which holds the actual SVG markup in one place — not inline in the
data file, and not a package pulled in to render nine fixed marks.

## Getting started

```bash
npm install
npm run dev
```

Opens at whatever port Astro picks (`http://localhost:4321` by default).

```bash
npm run build     # static output to dist/
npm run preview   # serve the production build locally
npm run format     # prettier, including .astro files
```

## Deployment

Deploys to GitHub Pages via `.github/workflows/astro.yml`, triggered on push to `main`. The
`site` in `astro.config.mjs` is `https://links.dileepa.dev` — the domain doesn't move, since it's
printed on profiles and slides.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT © Dileepa Bandara
