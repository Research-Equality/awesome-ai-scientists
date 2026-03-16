# Publishing

This repository has two outward-facing surfaces:

- the curated repository itself
- the `website/` GitHub Pages site

This document keeps the publishing flow consistent.

## GitHub Pages

The site is deployed through [`.github/workflows/deploy-website.yml`](../.github/workflows/deploy-website.yml).

Required repository setting:

- `Settings > Pages > Source`: `GitHub Actions`

Expected site URL:

- `https://research-equality.github.io/Awesome-AI-Research/`

The workflow builds the Vite app in [`website/`](../website) and uploads the static artifact to GitHub Pages.

## Website metadata

The website includes:

- social preview metadata in [`website/index.html`](../website/index.html)
- public preview assets in [`website/public/`](../website/public)
- a production-friendly image at [`website/public/social-preview.png`](../website/public/social-preview.png)
- a deploy-time base path handled by [`website/vite.config.ts`](../website/vite.config.ts)

## Repository social preview

Repository-level social preview cannot be configured from within the repo itself, but the design asset is included:

- [`assets/social-preview.png`](../assets/social-preview.png)
- [`assets/social-preview.svg`](../assets/social-preview.svg)

Recommended GitHub setting:

- `Settings > Social preview`: upload [`assets/social-preview.png`](../assets/social-preview.png)

Asset size:

- `1280 × 640`

## Release notes

Release notes are structured through:

- [`CHANGELOG.md`](../CHANGELOG.md)
- [`.github/release.yml`](../.github/release.yml)

Suggested release flow:

1. Update `CHANGELOG.md` under `Unreleased`.
2. Merge changes to `main`.
3. Create a Git tag or GitHub Release.
4. Let GitHub generate categorized release notes using `.github/release.yml`.
5. Move the `Unreleased` notes into a dated version section.

## Label conventions for releases

Suggested labels for categorized release notes:

- `website`
- `curation`
- `docs`
- `ci`
- `infra`
- `enhancement`
- `addition`

## Quick checklist

- The README still reflects the main repo positioning.
- The website builds with `npm run build --prefix website`.
- `awesome-lint` and `markdownlint` pass.
- Pages is enabled in repository settings.
- Social preview assets still match the current visual direction.
