# Contributing

This repository is curated, not exhaustive. The goal is to improve the map, sharpen the taxonomy, and keep the signal high.

Before contributing, read:

- [docs/inclusion-criteria.md](docs/inclusion-criteria.md)
- [docs/tag-system.md](docs/tag-system.md)
- [docs/curation-principles.md](docs/curation-principles.md)

## What belongs here

We prioritize:

- Autonomous research systems that cover a meaningful portion of the scientific loop.
- Research-native platforms, runtimes, orchestration layers, and execution infrastructure.
- Workflow modules that support literature review, ideation, planning, experimentation, analysis, or writing.
- Benchmarks, surveys, datasets, and meta-resources that make the ecosystem easier to evaluate and navigate.

## What usually does not belong here

We usually do not include:

- General-purpose AI tools with no direct research role.
- Marketing pages with no real product, paper, demo, or repository behind them.
- Duplicate entries that do not add a genuinely different view.
- Dead links or abandoned pages with no archival value.
- Repositories whose purpose cannot be understood from the public materials.

## Entry format

Each entry must include:

1. A canonical link.
2. A one-sentence description.
3. A tag ribbon using the repository format.

Use this format:

```md
- [**Project Name**](https://example.com/) — One-sentence description of what it does and why it matters.
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Domain: General` · `Openness: Open-source`
```

Notes:

- Prefer English naming in the visible label.
- Keep descriptions concrete and functional.
- Put the resource in the most specific subsection possible.
- Avoid duplicating the same project across sections unless the second placement is clearly justified by the map.

## Choosing tags

The README uses the compact five-tag ribbon:

- `Level`
- `Stage`
- `Loop`
- `Domain`
- `Openness`

The full tag model also includes `Scope` and `Maturity`, which can be proposed in PRs and issues. See [docs/tag-system.md](docs/tag-system.md) for the full definitions.

## Preferred source order

Use the most canonical public reference available:

1. Official repository.
2. Official project or product page.
3. Official documentation page.
4. Official paper page.

If no official source exists, the item usually does not meet the bar for inclusion.

## Pull request checklist

Before opening a PR, make sure:

- The resource fits the repository scope.
- The link is live and points to an official or canonical page.
- The description is clear and written in one sentence.
- The category placement is correct.
- The tags are complete and consistent.
- The addition does not create unnecessary duplication.

## Local validation

If you want to run the same baseline checks as CI:

```bash
npx awesome-lint README.md
npx markdownlint-cli README.md CONTRIBUTING.md docs .github
```

## Maintenance-minded contributions

High-value contributions include:

- Moving entries into better sections.
- Tightening descriptions.
- Fixing stale links.
- Proposing tag-system improvements.
- Adding benchmarks, surveys, and datasets that make the map easier to reason about.

Low-value contributions include:

- Adding many loosely related links at once.
- Repeating the same project in multiple places without explanation.
- Replacing concise descriptions with hype language.

Use the issue templates if you want to discuss a resource before opening a PR.
