# Website

Interactive showcase site for the Awesome-AI-Research repository.

The site is designed as a presentation layer for the repository, not a README clone. It includes:

- a layered ecosystem overview
- featured resources
- signal snapshots for the current curation
- a filterable explorer
- a detail inspector for the selected resource
- publishing-aware metadata and social preview assets

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

The repository includes [`.github/workflows/deploy-website.yml`](../.github/workflows/deploy-website.yml), which follows the current GitHub Pages custom-workflow pattern documented by GitHub and builds the Vite app before uploading the static artifact.

For a project Pages URL such as `https://research-equality.github.io/Awesome-AI-Research/`, Vite needs the repository base path. This is handled via `VITE_BASE_PATH` in the workflow and in [vite.config.ts](./vite.config.ts).
