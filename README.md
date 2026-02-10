# links.dileepa.dev

A small, fast static site that consolidates my social profiles and useful links in one place.

## Features ✅

- Minimal, accessible design built with **Astro** and **Tailwind CSS**
- Social links and quick contact actions
- SEO-friendly meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- Lightweight, single-page layout optimized for mobile and desktop

## Demo 🌐

Visit: [https://links.dileepa.dev](https://links.dileepa.dev)

## Technologies 🔧

- Astro (static site generator)
- Tailwind CSS
- Vanilla JS for small UI interactions

## Getting Started — Local Development 🚀

### Prerequisites

- Node.js 18 or later
- npm, yarn, or pnpm

### Clone & Install

```bash
git clone https://github.com/dileepadev/links-dileepa-dev.git
cd links-dileepa-dev
npm install
```

### Run Dev Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Build & Preview 📦

```bash
npm run build
npm run preview
```

Static output will be in the `dist/` directory after `npm run build`.

## Deployment 📤

This site is a static site and can be deployed to Vercel, Netlify, GitHub Pages, or any static host. The `site` URL can be set via the `SITE` environment variable if needed.

## Development Notes 💡

- SEO is configured in `src/layouts/Layout.astro` (canonical, OG/Twitter tags, JSON-LD).
- Links are managed in `src/data/links.json` for easy updates.

## Contributing 🤝

Contributions are welcome — please open an issue or a PR. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT © Dileepa Bandara
