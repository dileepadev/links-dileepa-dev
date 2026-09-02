# links.dileepa.dev

A small, fast static page consolidating my social profiles and useful links in one place, the
link people open from a social bio.

## Stack

- Astro 7, no client-side framework
- Tailwind CSS 4 via `@tailwindcss/vite`
- Vanilla JS for the theme toggle, copy-to-clipboard, and the QR code modal

## Features

- Links grouped by category (Site, Social, Contact) in `src/data/links.json`
- Click the QR icon on any link to see it as a scannable code
- Copy any link to the clipboard with one click
- Dark and light themes, synced with `dileepa.dev` via a shared storage key
- No API calls. Link data is a static file, updated by editing `links.json` directly

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321` by default.

```bash
npm run build     # static output to dist/
npm run preview   # serve the production build locally
npm run format     # prettier, including .astro files
```

## Deployment

Deploys to GitHub Pages via `.github/workflows/astro.yml`, triggered on push to `main`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT, Dileepa Bandara
