<!--lint disable awesome-heading awesome-github awesome-license awesome-toc double-link-->
<!-- markdownlint-disable MD041 -->

<div align="center">
  <h1>Awesome-AI-Research</h1>
  <p>
    <a href="./README.md">English</a> · <a href="./README.zh-CN.md">中文</a>
  </p>
  <p>
    <a href="https://awesome.re">
      <img src="https://awesome.re/badge.svg" alt="Awesome">
    </a>
    <a href="https://research-equality.github.io/Awesome-AI-Research/">
      <img src="https://img.shields.io/badge/Website-live-2563eb.svg?style=flat-square" alt="Website">
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-2ea043.svg?style=flat-square" alt="PRs Welcome">
    <img src="https://img.shields.io/badge/License-MIT-111827.svg?style=flat-square" alt="License: MIT">
  </p>
  <p><strong>A curated, layered map of AI-native research systems.</strong></p>
  <p>Organized by system level and research workflow stage.</p>
</div>

Awesome-AI-Research is a curated repository for the AI for Research ecosystem. It groups systems, platforms, modules, benchmarks, surveys, datasets, and meta-resources in one structure.

Website: [research-equality.GitHub.io/Awesome-AI-Research](https://research-equality.github.io/Awesome-AI-Research/)

## Tag System

Each entry follows the same schema:

`Level` · `Stage` · `Loop` · `Scope` · `Domain` · `Openness` · `Maturity`

Full definitions live in [docs/tag-system.md](./docs/tag-system.md).

## 🧠 Autonomous Research Systems

Integrated systems that try to cover meaningful parts of the scientific loop.

<!--lint disable awesome-list-item-->

### End-to-End AI Scientist Systems

- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - Multi-agent scientific collaborator from Google Research that proposes, debates, ranks, and refines hypotheses with scientist oversight.
  [Homepage](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) · [Paper](https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf)
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) - Open-source end-to-end system that turns a seed codebase into ideas, experiments, figures, reviews, and a draft paper.
  [Code](https://github.com/SakanaAI/AI-Scientist) · [Paper](https://arxiv.org/abs/2408.06292)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Closed-Loop Discovery Systems

- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - Chemistry agent that plans syntheses, searches documentation, controls instruments, and iterates through experimental workflows.
  [Paper](https://www.nature.com/articles/s41586-023-06792-0)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [PiFlow](https://github.com/amair-lab/PiFlow) - Principle-aware multi-agent framework for iterative scientific discovery across nanomaterials, biomolecules, and superconductors.
  [Code](https://github.com/amair-lab/PiFlow) · [Paper](https://arxiv.org/abs/2505.15047)
  `Level: System` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Self-Improving / Self-Evolving Research Systems

- [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) - Agentic-tree-search successor designed for workshop-level automated scientific discovery and higher-quality research trajectories.
  [Code](https://github.com/SakanaAI/AI-Scientist-v2) · [Paper](https://arxiv.org/abs/2504.08066)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Domain-Specific Autonomous Discovery Systems

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - Tool-augmented chemistry agent that combines LLM reasoning with scientific software for synthesis and discovery tasks.
  [Code](https://github.com/ur-whitelab/chemcrow-public) · [Paper](https://arxiv.org/abs/2304.05376)
  `Level: System` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`

## 🏗 Research Infrastructure & Platforms

The substrate that makes AI-native research systems practical: runtimes, orchestration, execution, observability, and collaboration.

### Research Platforms

- [FutureHouse](https://www.futurehouse.org/) - Research-native platform focused on automating scientific discovery with agentic systems and domain-aware tooling.
  [Homepage](https://www.futurehouse.org/)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Closed-source` · `Maturity: Production-like`

### Agent Runtimes for Research

- [AutoGen](https://github.com/microsoft/autogen) - Multi-agent programming framework widely used to build research copilots, literature agents, and evaluation pipelines.
  [Code](https://github.com/microsoft/autogen)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [LangGraph](https://docs.langchain.com/oss/python/langgraph) - Stateful graph runtime for long-running agent workflows with branching, memory, recovery, and explicit control flow.
  [Docs](https://docs.langchain.com/oss/python/langgraph) · [Code](https://github.com/langchain-ai/langgraph)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - Agent runtime for repo-level coding, execution, and issue-driven engineering that adapts well to research coding workflows.
  [Code](https://github.com/All-Hands-AI/OpenHands) · [Docs](https://docs.all-hands.dev/)
  `Level: Platform` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Active Project`

### Research Workflow Orchestration

- [AgentScope](https://github.com/agentscope-ai/agentscope) - Agent-oriented programming framework for composing multi-agent workflows with explicit roles, collaboration patterns, and tool integration.
  [Code](https://github.com/agentscope-ai/agentscope)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Tool-Use & Execution Infrastructure

- [E2B](https://e2b.dev/) - Sandboxed execution layer for code, browser, and desktop-style tool use inside AI-driven research workflows.
  [Homepage](https://e2b.dev/) · [Docs](https://e2b.dev/docs)
  `Level: Platform` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

### Memory / Observability / Collaboration Layers

- [Weights & Biases](https://wandb.ai/) - Experiment tracking and collaboration layer for instrumenting long-running research agents, ablations, and benchmark runs.
  [Homepage](https://wandb.ai/) · [Docs](https://docs.wandb.ai/)
  `Level: Platform` · `Stage: Analysis` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

## 🔬 Workflow Modules

Reusable units in the research workflow, organized by stage.

### Literature Discovery & Review

- [Elicit](https://elicit.com/) - AI research assistant for literature search, evidence extraction, and structured review workflows.
  [Homepage](https://elicit.com/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`
- [PaperQA2](https://github.com/Future-House/paper-qa) - Open-source literature QA and evidence-synthesis stack optimized for scientific documents and citation-grounded answers.
  [Code](https://github.com/Future-House/paper-qa) · [Paper](https://arxiv.org/abs/2409.13740)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [ResearchRabbit](https://www.researchrabbit.ai/) - Visual citation-graph exploration tool for expanding seed papers into neighborhoods of related work.
  [Homepage](https://www.researchrabbit.ai/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Research Ideation & Hypothesis Generation

- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - A hypothesis-generation system based on proposal, debate, ranking, and refinement.
  [Homepage](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) · [Paper](https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf)
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [Consensus](https://consensus.app/) - Scientific search engine geared toward claim-grounded answers and useful for framing candidate hypotheses.
  [Homepage](https://consensus.app/)
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Planning & Experimental Design

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - Chemistry tool-use agent for turning high-level questions into actionable experimental reasoning and design.
  [Code](https://github.com/ur-whitelab/chemcrow-public) · [Paper](https://arxiv.org/abs/2304.05376)
  `Level: Module` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`
- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - Chemistry planning system for protocol search, synthesis reasoning, and lab orchestration.
  [Paper](https://www.nature.com/articles/s41586-023-06792-0)
  `Level: Module` · `Stage: Planning` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`

### Data, Environment & Tool Use

- [E2B](https://e2b.dev/) - Execution substrate for safe code runs, browser control, and reproducible tool use by research agents.
  [Homepage](https://e2b.dev/) · [Docs](https://e2b.dev/docs)
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`
- [GeneAgent](https://github.com/ncbi-nlp/GeneAgent) - Domain-database agent for gene set analysis grounded in external biomedical resources.
  [Code](https://github.com/ncbi-nlp/GeneAgent)
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Method Development & Research Coding

- [AutoGen](https://github.com/microsoft/autogen) - Flexible substrate for custom research coding agents with explicit roles, tools, and review loops.
  [Code](https://github.com/microsoft/autogen)
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - Repo-level coding agent for implementing research ideas, modifying codebases, and validating changes through execution.
  [Code](https://github.com/All-Hands-AI/OpenHands) · [Docs](https://docs.all-hands.dev/)
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Active Project`

### Experiment Execution & Optimization

- [Optuna](https://optuna.org/) - Open-source optimization framework for trial scheduling, hyperparameter search, and controlled experiment iteration.
  [Homepage](https://optuna.org/) · [Code](https://github.com/optuna/optuna)
  `Level: Module` · `Stage: Experiment` · `Loop: Open-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`
- [PiFlow](https://github.com/amair-lab/PiFlow) - Closed-loop reference for iterative scientific discovery with experiment execution inside the discovery process.
  [Code](https://github.com/amair-lab/PiFlow) · [Paper](https://arxiv.org/abs/2505.15047)
  `Level: Module` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Analysis, Evaluation & Interpretation

- [PaperBench](https://openai.com/index/paperbench/) - Benchmark for whether agents can reproduce frontier AI research workflows from understanding claims to running experiments.
  [Paper](https://openai.com/index/paperbench/)
  `Level: Benchmark` · `Stage: Analysis` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`
- [Weights & Biases](https://wandb.ai/) - Shared workspace for tracking metrics, visualizing runs, comparing ablations, and reviewing long research trajectories.
  [Homepage](https://wandb.ai/) · [Docs](https://docs.wandb.ai/)
  `Level: Module` · `Stage: Analysis` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

### Writing, Publication & Communication

- [Overleaf AI](https://www.overleaf.com/about/ai-features) - AI-assisted writing and editing features inside a collaborative LaTeX environment used in academic publication workflows.
  [Homepage](https://www.overleaf.com/about/ai-features)
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`
- [STORM](https://github.com/stanford-oval/storm) - Open-source system for grounded long-form report generation with citation-backed outlining and drafting.
  [Code](https://github.com/stanford-oval/storm)
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

## 📚 Benchmarks, Surveys & Meta-Resources

Reference resources that make the ecosystem easier to evaluate and navigate.

### Surveys & Taxonomies

- [A Survey of AI Scientists](https://arxiv.org/abs/2510.23045) - Survey focused on automatic scientists and end-to-end AI research pipelines.
  [Paper](https://arxiv.org/abs/2510.23045)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [AI4Research](https://ai-4-research.github.io/) - Living survey site mapping AI for scientific research across domains, tasks, and papers.
  [Homepage](https://ai-4-research.github.io/)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Active Project`

### Benchmarks & Evaluation Suites

- [Frontiers in Science](https://openai.com/index/frontierscience/) - Benchmark suite for evaluating scientific reasoning across olympiad-style and research-style tasks.
  [Homepage](https://openai.com/index/frontierscience/)
  `Level: Benchmark` · `Stage: Analysis` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`
- [PaperBench](https://openai.com/index/paperbench/) - Evaluates whether agents can replicate frontier AI research papers end-to-end, from understanding claims to executing experiments.
  [Paper](https://openai.com/index/paperbench/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`
- [ScienceBench](https://sciencebench.com/) - Autonomous laboratory benchmark for end-to-end scientific operation and discovery with minimal human oversight.
  [Homepage](https://sciencebench.com/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`

### Datasets

- [OpenAlex](https://openalex.org/) - Open index of works, authors, venues, institutions, and concepts that underpins many research-native retrieval systems.
  [Homepage](https://openalex.org/) · [Docs](https://docs.openalex.org/)
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`
- [Semantic Scholar Academic Graph API](https://www.semanticscholar.org/product/api) - Structured paper metadata and graph endpoints for retrieval, paper linking, and citation analysis.
  [Docs](https://www.semanticscholar.org/product/api)
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`

### Other Awesome Lists

- [awesome-research](https://github.com/emptymalei/awesome-research) - Curated collection organized around research workflow tasks and useful as a complementary module-first view.
  [Code](https://github.com/emptymalei/awesome-research)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) - Curated list centered on AI Scientist systems and complementary to this repository's broader layered-map perspective.
  [Code](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

<!--lint enable awesome-list-item-->

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md), [docs/inclusion-criteria.md](./docs/inclusion-criteria.md), and [docs/tag-system.md](./docs/tag-system.md) before submitting new entries.

## License

[MIT](./LICENSE)
