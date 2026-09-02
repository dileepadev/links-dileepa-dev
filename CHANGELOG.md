# Changelog

All notable changes to this project are documented in this file.

Changes are organized into the following categories:

- **Added:** New features or functionality introduced to the project.
- **Changed:** Modifications to existing functionality that do not add new features.
- **Fixed:** Bug fixes that resolve issues or correct unintended behavior.
- **Removed:** Features or components that have been removed from the project.

## [Unreleased]

- Changes for the next release are available in development branches.

## [v2.0.0] - 2026-09-02

### Added - v2.0.0

- `@astrojs/sitemap`, generating `sitemap-index.xml`
- `robots.txt`
- Prettier with the Astro plugin
- Person and WebSite JSON-LD, matching the shape `dileepa-dev` builds
- `src/icons/link-icons.ts` — a maintainable icon set keyed by name, replacing inline SVG
  strings in the data file

### Changed - v2.0.0

- Astro 5.17.1 → 7.2.10, done as its own commit ahead of the rebrand
- Tailwind CSS 4.1.x → 4.3.x
- Full rebrand against the v2.0.0 design system: brand tokens vendored from
  `dileepadev/docs/brand/brand-tokens.css`, Manrope + JetBrains Mono at weights 400/500/700,
  emerald as the only accent, the platform's lockup, nav, card and theme-toggle treatment
- `src/data/links.json` — inline SVG strings replaced with icon keys; the Blog entry repointed
  from `blog.dileepa.dev` to `dileepa.dev/blog` ahead of the blog's decommission (#3)
- Theme toggle now persists under the shared `dileepa-theme` storage key and keys off
  `data-theme`, matching every other platform surface
- The API-integration question is closed: link data stays static in `links.json` — see the
  README's Data source section

### Removed - v2.0.0

- `src/components/Welcome.astro` and `src/styles/components/welcome.css` — unused Astro
  starter scaffolding
- Microsoft Clarity and Google Analytics tags
- v1 brand assets: navy/silver palette, Inter font, the old profile and banner images

## [v1.0.0] - 2026-03-08

### Added - v1.0.0

- Set up Astro project structure
- Add Tailwind CSS
- Configure layouts and global styles
- Add light and dark theme mode support
- Add brand theme
- Add home page (links landing page)
- Display social media and external links
- Add version to the footer
- Custom 404 page
- Optimize spacing and layout for mobile devices
- Ensure accessible link styles and focus states
- Improve link card hover and active interactions
- Implement reusable link/card components
- Implement basic routing and navigation
- Ensure responsive design across devices
- Respect system theme preference where possible
- Configure SEO basics (meta tags, social preview)
- Add README with setup and usage instructions
- Add analytics and monitoring:
  - Microsoft Clarity
  - Google Analytics
- Add links:
  - Website
  - Blog
  - Links
  - GitHub
  - LinkedIn
  - X (Twitter)
  - Instagram
  - YouTube
  - Facebook
  - Email

<!-- e.g., -->
<!-- Unreleased -->
<!-- v2.0.0 -->
<!-- v1.1.0 -->
<!-- v1.0.0 -->
<!-- v0.0.1 -->

[Unreleased]: https://github.com/dileepadev/links-dileepa-dev/branches
[v2.0.0]: https://github.com/dileepadev/links-dileepa-dev/releases/tag/v2.0.0
[v1.0.0]: https://github.com/dileepadev/links-dileepa-dev/releases/tag/v1.0.0
