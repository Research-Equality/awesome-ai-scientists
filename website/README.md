# Website

Interactive showcase site for the Awesome-AI-Research repository.

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
