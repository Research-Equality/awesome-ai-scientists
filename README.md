<!--lint disable awesome-heading awesome-github awesome-license awesome-toc double-link-->

# Awesome-AI-Research [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](./README.md) · [中文](./README.zh-CN.md)

<div align="center">
  <p>
    <a href="https://research-equality.github.io/Awesome-AI-Research/">
      <img src="https://img.shields.io/badge/Website-live-2563eb.svg?style=flat-square" alt="Website">
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-2ea043.svg?style=flat-square" alt="PRs Welcome">
    <img src="https://img.shields.io/badge/License-MIT-111827.svg?style=flat-square" alt="License: MIT">
  </p>
  <p><strong>A curated, layered map of AI-native research systems.</strong></p>
  <p>Organized through two lenses: system level and research workflow stage.</p>
  <img src="assets/banner.svg" alt="Awesome-AI-Research banner" width="100%">
</div>

Awesome-AI-Research is a curated repository for the AI for Research ecosystem. It is designed as a structured map rather than a flat directory of papers or tools.

The repository and the GitHub Pages website both support bilingual presentation:

<!--lint disable awesome-list-item-->
- Website: language toggle in the top-right corner (`中文 / EN`)
- Repository: [README.md](./README.md) for English, [README.zh-CN.md](./README.zh-CN.md) for Simplified Chinese
<!--lint enable awesome-list-item-->

## Why This Repo Is Different

<!--lint disable awesome-list-item-->
- **Not just papers.** Papers appear when they are the canonical reference for a meaningful system, benchmark, or survey.
- **Not just tools.** Resources are grouped by what they are in the stack, not by vague product labels.
- **Not just AI Scientist projects.** The map includes infrastructure, workflow modules, and meta-resources.
- **A layered map.** Each entry is positioned by both object level and workflow stage.
<!--lint enable awesome-list-item-->

## Structure

<div align="center">
  <img src="assets/structure-diagram.svg" alt="Structure diagram for the AI-native research ecosystem" width="100%">
</div>

### Four Layers

<!--lint disable awesome-list-item-->
- **Autonomous Research Systems**: loop-spanning systems that cover meaningful parts of the scientific workflow
- **Research Infrastructure & Platforms**: orchestration, execution, memory, observability, and collaboration substrate
- **Workflow Modules**: stage-specific capabilities for literature, ideation, planning, coding, experiments, analysis, and writing
- **Benchmarks, Surveys & Meta-Resources**: evaluation and reference layers that keep the ecosystem legible and comparable
<!--lint enable awesome-list-item-->

### Workflow Stages

`Literature` · `Ideation` · `Planning` · `Data` · `Coding` · `Experiment` · `Analysis` · `Writing`

## Featured Resources

- [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) - Open-source end-to-end system for ideas, experiments, figures, reviews, and draft papers. `Level: System` · `Stage: End-to-end`.
- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - Multi-agent scientific collaborator for hypothesis proposal, debate, ranking, and refinement. `Level: System` · `Stage: End-to-end`.
- [FutureHouse](https://www.futurehouse.org/) - Research-native platform focused on automating scientific discovery with agents and domain-aware tooling. `Level: Platform` · `Stage: End-to-end`.
- [PaperQA2](https://github.com/Future-House/paper-qa) - Literature QA and evidence-synthesis stack for scientific documents. `Level: Module` · `Stage: Literature`.
- [STORM](https://github.com/stanford-oval/storm) - Citation-grounded long-form report generation for research writing workflows. `Level: Module` · `Stage: Writing`.
- [PaperBench](https://openai.com/index/paperbench/) - Benchmark for whether agents can reproduce frontier AI research workflows. `Level: Benchmark` · `Stage: End-to-end`.
- [AI4Research](https://ai-4-research.github.io/) - Living survey site for AI in scientific research across tasks and domains. `Level: Survey` · `Stage: End-to-end`.

## Tag System

Each entry follows the same compact schema:

`Level` · `Stage` · `Loop` · `Scope` · `Domain` · `Openness` · `Maturity`

Example:

`Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

Full definitions live in [docs/tag-system.md](./docs/tag-system.md).

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request or suggesting a resource.

Additional curation references:

<!--lint disable awesome-list-item-->
- [docs/inclusion-criteria.md](./docs/inclusion-criteria.md)
- [docs/curation-principles.md](./docs/curation-principles.md)
<!--lint enable awesome-list-item-->

## License

[MIT](./LICENSE)
