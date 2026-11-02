# Brand source

Brand version **2.1.0**, vendored from `dileepadev` commit
[`cd5f365`](https://github.com/dileepadev/dileepadev/commit/cd5f365162d39af98a40628e072f74ab56622d96).
The root imported the contract from the website's `v2.1.0` tag (`7c484f3`).
The owner authorised local adoption before the root release. **The root `v2.1.0`
tag is pending; these copies must be checked against it before this app is released.**

| Canonical source in `dileepadev` | Copy here | Adaptation |
| --- | --- | --- |
| `docs/brand/brand-tokens.css` | `src/styles/brand-tokens.css` | Remove only the Google Fonts import; load the same faces and weights through the font link in src/layouts/Layout.astro |
| `docs/brand/brand-tokens.css` | `docs/brand-tokens.css` | None |
| `docs/brand/brand-guide.md` | `docs/brand-guide.md` | None |
| `docs/brand/design-system.md` | `docs/design-system.md` | None |
| `DESIGN.md` | `DESIGN.md` | None |
| `docs/brand/favicon/` | Public favicon/app icons and manifests | None |
| `docs/brand/og.png` | `public/og.png` | None |

Canonical token SHA-256: `df57c8ad86d947839a9643355359bfee3d8775bc1023aa562eafc58203c9fc71`.

The runtime sheet's vendor header records the source and sole font-loading
adaptation. Components use semantic variables; do not patch either copy or
copy palette values into components. Application layout rules belong in the
app's global styles. Both themes use Manrope 400/500/700 and JetBrains Mono
400/500.

The profile layout follows `dileepa-dev/components/sections/ProfileRail.tsx`
and the final soft-panel rules in that app's `app/globals.css`: a sticky 21rem
column at 1024px, a square portrait, panel surfaces and capsule navigation.
The Astro implementation lives in `src/components/ProfilePanel.astro` and
`src/styles/components/profile-panel.css`; these are local layout rules,
not changes to the imported brand contract.

To refresh, copy the files from the published root tag, preserve only the
documented font-loading adaptation, record its resolved commit here and in the
runtime header, and run the app's checks and both-theme browser review. The
root owns the originals; these vendored files are not another asset host.
