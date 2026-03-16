<!--lint disable awesome-heading awesome-github awesome-license awesome-toc double-link-->
<!-- markdownlint-disable MD041 -->

<div align="center">
  <img src="./images/logo.png" alt="Awesome-AI-Research logo" width="320">
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
</div>

Awesome-AI-Research is a curated repository for the AI-for-Research ecosystem. It groups autonomous research systems, infrastructure, workflow modules, benchmarks, surveys, datasets, and meta-resources into one layered structure.

Website: [Awesome-AI-Research](https://research-equality.github.io/Awesome-AI-Research/)

## Feedback & Community

Share how often you use these AI research tools, how useful they feel in real research workflows, and where they still fall short. We are collecting responses to understand actual usage patterns, identify high-value tools, and improve the curation priorities of this repository.

Feishu Form: [Link](https://my.feishu.cn/share/base/form/shrcnnGoTojyKyJ3MYWi15b13Ns)

## Tag System

Each entry follows the same schema:

`Level` · `Stage` · `Loop` · `Scope` · `Domain` · `Openness` · `Maturity`

Full definitions live in [docs/tag-system.md](./docs/tag-system.md).

## 🧠 Autonomous Research Systems

Integrated systems that try to cover meaningful parts of the scientific loop.

<!--lint disable awesome-list-item-->

### End-to-End AI Scientist Systems

- [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) - Open-source end-to-end system that turns a seed codebase into ideas, experiments, figures, reviews, and a draft paper.  
  [Code](https://github.com/SakanaAI/AI-Scientist) · [Paper](https://arxiv.org/abs/2408.06292) · [![GitHub stars](https://img.shields.io/github/stars/SakanaAI/AI-Scientist?style=flat-square)](https://github.com/SakanaAI/AI-Scientist/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [AI-Researcher](https://github.com/HKUDS/AI-Researcher) - Open-source autonomous research system for end-to-end scientific innovation, covering idea generation, implementation, experimentation, and paper writing.  
  [Code](https://github.com/HKUDS/AI-Researcher) · [Paper](https://arxiv.org/abs/2505.18705) · [![GitHub stars](https://img.shields.io/github/stars/HKUDS/AI-Researcher?style=flat-square)](https://github.com/HKUDS/AI-Researcher/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Research Prototype`

- [Robin](https://github.com/Future-House/robin) - Multi-agent system from FutureHouse for automating scientific discovery; public materials describe it as orchestrating agents to automate key intellectual steps of the scientific process.  
  [Code](https://github.com/Future-House/robin) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/robin?style=flat-square)](https://github.com/Future-House/robin/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Self-Improving / Self-Evolving Research Systems

- [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) - Agentic-tree-search successor designed for workshop-level automated scientific discovery and higher-quality research trajectories.  
  [Code](https://github.com/SakanaAI/AI-Scientist-v2) · [Paper](https://arxiv.org/abs/2504.08066) · [![GitHub stars](https://img.shields.io/github/stars/SakanaAI/AI-Scientist-v2?style=flat-square)](https://github.com/SakanaAI/AI-Scientist-v2/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [EvoScientist](https://github.com/EvoScientist/EvoScientist) - Self-evolving AI scientist framework for end-to-end scientific discovery with iterative improvement and human oversight.  
  [Code](https://github.com/EvoScientist/EvoScientist) · [Docs](https://github.com/EvoScientist/EvoScientist#readme) · [![GitHub stars](https://img.shields.io/github/stars/EvoScientist/EvoScientist?style=flat-square)](https://github.com/EvoScientist/EvoScientist/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [Scientify](https://github.com/tsingyuai/scientify) - AI-native scientific research system built around OpenClaw for automated literature review, experimentation, writing, and iterative research workflows.  
  [Code](https://github.com/tsingyuai/scientify) · [Docs](https://github.com/tsingyuai/scientify#readme) · [![GitHub stars](https://img.shields.io/github/stars/tsingyuai/scientify?style=flat-square)](https://github.com/tsingyuai/scientify/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Closed-Loop Discovery Systems

- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - Chemistry agent that plans syntheses, searches documentation, controls instruments, and iterates through experimental workflows.  
  [Paper](https://www.nature.com/articles/s41586-023-06792-0)  
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`

- [PiFlow](https://github.com/amair-lab/PiFlow) - Principle-aware multi-agent framework for iterative scientific discovery across nanomaterials, biomolecules, and superconductors.  
  [Code](https://github.com/amair-lab/PiFlow) · [Paper](https://arxiv.org/abs/2505.15047) · [![GitHub stars](https://img.shields.io/github/stars/amair-lab/PiFlow?style=flat-square)](https://github.com/amair-lab/PiFlow/stargazers)  
  `Level: System` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Domain-Specific Autonomous Discovery Systems

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - Tool-augmented chemistry agent that combines LLM reasoning with scientific software for synthesis and discovery tasks.  
  [Code](https://github.com/ur-whitelab/chemcrow-public) · [Paper](https://arxiv.org/abs/2304.05376) · [![GitHub stars](https://img.shields.io/github/stars/ur-whitelab/chemcrow-public?style=flat-square)](https://github.com/ur-whitelab/chemcrow-public/stargazers)  
  `Level: System` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`

- [Biomni](https://github.com/snap-stanford/Biomni) - General-purpose biomedical AI agent designed to autonomously execute research tasks across diverse biomedical subfields.  
  [Code](https://github.com/snap-stanford/Biomni) · [![GitHub stars](https://img.shields.io/github/stars/snap-stanford/Biomni?style=flat-square)](https://github.com/snap-stanford/Biomni/stargazers)  
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

## 🏗 Research Infrastructure & Platforms

The substrate that makes AI-native research systems practical: runtimes, orchestration, execution, evaluation environments, and observability.

### Research Platforms

- [ResearchClaw](https://github.com/ymx10086/ResearchClaw) - Local-first AI research assistant for literature discovery, note-taking, experiment tracking, and paper writing across the scientific workflow.  
  [Code](https://github.com/ymx10086/ResearchClaw) · [Docs](https://github.com/ymx10086/ResearchClaw#readme) · [![GitHub stars](https://img.shields.io/github/stars/ymx10086/ResearchClaw?style=flat-square)](https://github.com/ymx10086/ResearchClaw/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Agent Runtimes & Orchestration

- [LangGraph](https://docs.langchain.com/oss/python/langgraph) - Low-level orchestration framework for building, managing, and deploying long-running, stateful agents.  
  [Docs](https://docs.langchain.com/oss/python/langgraph) · [Code](https://github.com/langchain-ai/langgraph) · [![GitHub stars](https://img.shields.io/github/stars/langchain-ai/langgraph?style=flat-square)](https://github.com/langchain-ai/langgraph/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

- [AutoGen](https://github.com/microsoft/autogen) - Multi-agent application framework from Microsoft; the project is still maintained, though new users are directed to Microsoft Agent Framework.  
  [Code](https://github.com/microsoft/autogen) · [![GitHub stars](https://img.shields.io/github/stars/microsoft/autogen?style=flat-square)](https://github.com/microsoft/autogen/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Maintained Framework`

- [AgentScope](https://github.com/agentscope-ai/agentscope) - Agent-oriented programming framework for composing multi-agent workflows with explicit roles, collaboration patterns, and tool integration.  
  [Code](https://github.com/agentscope-ai/agentscope) · [![GitHub stars](https://img.shields.io/github/stars/agentscope-ai/agentscope?style=flat-square)](https://github.com/agentscope-ai/agentscope/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [LDP](https://github.com/Future-House/ldp) - Framework for modular interchange of language agents, environments, and optimizers.  
  [Code](https://github.com/Future-House/ldp) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/ldp?style=flat-square)](https://github.com/Future-House/ldp/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Tool-Use & Execution Infrastructure

- [E2B](https://e2b.dev/) - Isolated sandbox infrastructure for safely executing agent-generated code, processing data, and running tools.  
  [Homepage](https://e2b.dev/) · [Docs](https://e2b.dev/docs) · [Code](https://github.com/e2b-dev/E2B) · [![GitHub stars](https://img.shields.io/github/stars/e2b-dev/E2B?style=flat-square)](https://github.com/e2b-dev/E2B/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

### Evaluation & Training Environments

- [Aviary](https://github.com/Future-House/aviary) - Language-agent gym with built-in scientific task environments, including scientific literature search and protein stability.  
  [Code](https://github.com/Future-House/aviary) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/aviary?style=flat-square)](https://github.com/Future-House/aviary/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: General` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Memory / Observability / Collaboration Layers

- [Weights & Biases](https://wandb.ai/) - Experiment tracking and collaboration layer for instrumenting long-running research agents, ablations, and benchmark runs.  
  [Homepage](https://wandb.ai/) · [Docs](https://docs.wandb.ai/)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

## 🔬 Workflow Modules

Reusable units in the research workflow, organized by stage.

### Literature Discovery & Review

- [Elicit](https://elicit.com/) - AI research assistant for literature search, evidence extraction, and structured review workflows.  
  [Homepage](https://elicit.com/)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [PaperQA2](https://github.com/Future-House/paper-qa) - Open-source literature QA and evidence-synthesis stack optimized for scientific documents and citation-grounded answers.  
  [Code](https://github.com/Future-House/paper-qa) · [Paper](https://arxiv.org/abs/2409.13740) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/paper-qa?style=flat-square)](https://github.com/Future-House/paper-qa/stargazers)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [ResearchRabbit](https://www.researchrabbit.ai/) - Visual discovery tool for expanding seed papers into neighborhoods of related work.  
  [Homepage](https://www.researchrabbit.ai/)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [Litmaps](https://www.litmaps.com/) - Literature discovery and monitoring tool built around citation-network exploration, visualization, and alerts.  
  [Homepage](https://www.litmaps.com/)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [Connected Papers](https://www.connectedpapers.com/) - Visual paper exploration tool for finding related academic work around a seed paper.  
  [Homepage](https://www.connectedpapers.com/)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [Scite](https://scite.ai/) - Research discovery and evaluation platform centered on Smart Citations, showing whether studies support, contrast, or mention prior work.  
  [Homepage](https://scite.ai/)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [SciSpace Literature Review](https://scispace.com/search) - AI literature review workspace for finding, analyzing, organizing, and comparing scientific papers.  
  [Homepage](https://scispace.com/)  
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Research Ideation & Hypothesis Generation

- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - Multi-agent scientific collaborator from Google Research for generating, debating, ranking, and refining hypotheses and research proposals with scientist oversight.  
  [Homepage](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) · [Paper](https://arxiv.org/abs/2502.18864)  
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`

- [Consensus](https://consensus.app/) - Scientific search engine geared toward claim-grounded answers and useful for framing candidate hypotheses.  
  [Homepage](https://consensus.app/)  
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Planning & Experimental Design

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - Chemistry tool-use agent for turning high-level questions into actionable experimental reasoning and design.  
  [Code](https://github.com/ur-whitelab/chemcrow-public) · [Paper](https://arxiv.org/abs/2304.05376) · [![GitHub stars](https://img.shields.io/github/stars/ur-whitelab/chemcrow-public?style=flat-square)](https://github.com/ur-whitelab/chemcrow-public/stargazers)  
  `Level: Module` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`

- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - Chemistry planning system for protocol search, synthesis reasoning, and lab orchestration.  
  [Paper](https://www.nature.com/articles/s41586-023-06792-0)  
  `Level: Module` · `Stage: Planning` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`

### Data, Environment & Tool Use

- [E2B](https://e2b.dev/) - Execution substrate for safe code runs, browser control, and reproducible tool use by research agents.  
  [Homepage](https://e2b.dev/) · [Docs](https://e2b.dev/docs) · [Code](https://github.com/e2b-dev/E2B) · [![GitHub stars](https://img.shields.io/github/stars/e2b-dev/E2B?style=flat-square)](https://github.com/e2b-dev/E2B/stargazers)  
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

- [GeneAgent](https://github.com/ncbi-nlp/GeneAgent) - Domain-database agent for gene set analysis grounded in external biomedical resources.  
  [Code](https://github.com/ncbi-nlp/GeneAgent) · [![GitHub stars](https://img.shields.io/github/stars/ncbi-nlp/GeneAgent?style=flat-square)](https://github.com/ncbi-nlp/GeneAgent/stargazers)  
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Method Development & Research Coding

- [AutoGen](https://github.com/microsoft/autogen) - Flexible substrate for custom research coding agents with explicit roles, tools, and review loops.  
  [Code](https://github.com/microsoft/autogen) · [![GitHub stars](https://img.shields.io/github/stars/microsoft/autogen?style=flat-square)](https://github.com/microsoft/autogen/stargazers)  
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Maintained Framework`

- [OpenHands](https://github.com/OpenHands/OpenHands) - Open platform for cloud coding agents that supports repo-level implementation, execution, and engineering workflows. It is useful for research coding, but it is not research-specific infrastructure.  
  [Code](https://github.com/OpenHands/OpenHands) · [Docs](https://openhands.dev/) · [![GitHub stars](https://img.shields.io/github/stars/OpenHands/OpenHands?style=flat-square)](https://github.com/OpenHands/OpenHands/stargazers)  
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Experiment Execution & Optimization

- [Optuna](https://optuna.org/) - Open-source optimization framework for trial scheduling, hyperparameter search, and controlled experiment iteration.  
  [Homepage](https://optuna.org/) · [Code](https://github.com/optuna/optuna) · [![GitHub stars](https://img.shields.io/github/stars/optuna/optuna?style=flat-square)](https://github.com/optuna/optuna/stargazers)  
  `Level: Module` · `Stage: Experiment` · `Loop: Open-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

- [PiFlow](https://github.com/amair-lab/PiFlow) - Closed-loop reference for iterative scientific discovery with experiment execution inside the discovery process.  
  [Code](https://github.com/amair-lab/PiFlow) · [Paper](https://arxiv.org/abs/2505.15047) · [![GitHub stars](https://img.shields.io/github/stars/amair-lab/PiFlow?style=flat-square)](https://github.com/amair-lab/PiFlow/stargazers)  
  `Level: Module` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Analysis, Evaluation & Interpretation

- [PaperBench](https://openai.com/index/paperbench/) - Benchmark for whether agents can reproduce frontier AI research workflows from understanding claims to running experiments.  
  [Homepage](https://openai.com/index/paperbench/)  
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [Weights & Biases](https://wandb.ai/) - Shared workspace for tracking metrics, visualizing runs, comparing ablations, and reviewing long research trajectories.  
  [Homepage](https://wandb.ai/) · [Docs](https://docs.wandb.ai/)  
  `Level: Module` · `Stage: Analysis` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

### Writing, Publication & Communication

- [Overleaf AI](https://www.overleaf.com/about/ai-features) - AI-assisted writing and editing features inside a collaborative LaTeX environment used in academic publication workflows.  
  [Homepage](https://www.overleaf.com/about/ai-features)  
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [STORM](https://github.com/stanford-oval/storm) - Open-source system for grounded long-form report generation with citation-backed outlining and drafting.  
  [Code](https://github.com/stanford-oval/storm) · [![GitHub stars](https://img.shields.io/github/stars/stanford-oval/storm?style=flat-square)](https://github.com/stanford-oval/storm/stargazers)  
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

## 📚 Benchmarks, Surveys & Meta-Resources

Reference resources that make the ecosystem easier to evaluate and navigate.

### Surveys & Taxonomies

- [A Survey of AI Scientists](https://arxiv.org/abs/2510.23045) - Survey focused on automatic scientists and end-to-end AI research pipelines.  
  [Paper](https://arxiv.org/abs/2510.23045)  
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`

- [AI4Research](https://ai-4-research.github.io/) - Living survey site mapping AI for scientific research across domains, tasks, and papers.  
  [Homepage](https://ai-4-research.github.io/)  
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Multi-domain` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Active Project`

- [AI-for-Research](https://github.com/zkzhou126/AI-for-Research) - Repository accompanying a survey on AI support across the research lifecycle from hypothesis to publication.  
  [Code](https://github.com/zkzhou126/AI-for-Research) · [Paper](https://arxiv.org/abs/2503.01424) · [![GitHub stars](https://img.shields.io/github/stars/zkzhou126/AI-for-Research?style=flat-square)](https://github.com/zkzhou126/AI-for-Research/stargazers)  
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Benchmarks & Evaluation Suites

- [Frontiers in Science](https://openai.com/index/frontierscience/) - Benchmark suite for evaluating scientific reasoning across olympiad-style and research-style tasks.  
  [Homepage](https://openai.com/index/frontierscience/)  
  `Level: Benchmark` · `Stage: Analysis` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [PaperBench](https://openai.com/index/paperbench/) - Evaluates whether agents can replicate frontier AI research papers end-to-end, from understanding claims to executing experiments.  
  [Homepage](https://openai.com/index/paperbench/)  
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [ScienceBench](https://sciencebench.com/) - Autonomous laboratory benchmark for end-to-end scientific operation and discovery with minimal human oversight.  
  [Homepage](https://sciencebench.com/)  
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [AIRS-Bench](https://github.com/facebookresearch/airs-bench) - Benchmark from Meta / Facebook Research for quantifying the end-to-end AI research abilities of LLM agents.  
  [Code](https://github.com/facebookresearch/airs-bench) · [![GitHub stars](https://img.shields.io/github/stars/facebookresearch/airs-bench?style=flat-square)](https://github.com/facebookresearch/airs-bench/stargazers)  
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Open-source` · `Maturity: Research Prototype`

- [LAB-Bench](https://github.com/Future-House/LAB-Bench) - Biology benchmark for capabilities foundational to scientific research in biology.  
  [Code](https://github.com/Future-House/LAB-Bench) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/LAB-Bench?style=flat-square)](https://github.com/Future-House/LAB-Bench/stargazers)  
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Datasets

- [OpenAlex](https://openalex.org/) - Open index of works, authors, venues, institutions, and concepts that underpins many research-native retrieval systems.  
  [Homepage](https://openalex.org/) · [Docs](https://docs.openalex.org/)  
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`

- [Semantic Scholar Academic Graph API](https://www.semanticscholar.org/product/api) - Structured paper metadata and graph endpoints for retrieval, paper linking, and citation analysis.  
  [Docs](https://www.semanticscholar.org/product/api)  
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`

### Other Awesome Lists

- [awesome-research](https://github.com/emptymalei/awesome-research) - Curated collection organized around research workflow tasks and useful as a complementary module-first view.  
  [Code](https://github.com/emptymalei/awesome-research) · [![GitHub stars](https://img.shields.io/github/stars/emptymalei/awesome-research?style=flat-square)](https://github.com/emptymalei/awesome-research/stargazers)  
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) - Curated list centered on AI Scientist systems and complementary to this repository's broader layered-map perspective.  
  [Code](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) · [![GitHub stars](https://img.shields.io/github/stars/tsinghua-fib-lab/Awesome-AI-Scientists?style=flat-square)](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists/stargazers)  
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [Awesome Papers on Agents for Science](https://github.com/OSU-NLP-Group/awesome-agents4science) - Curated bibliography of agents-for-science papers across domains, task types, and benchmarks.  
  [Code](https://github.com/OSU-NLP-Group/awesome-agents4science) · [![GitHub stars](https://img.shields.io/github/stars/OSU-NLP-Group/awesome-agents4science?style=flat-square)](https://github.com/OSU-NLP-Group/awesome-agents4science/stargazers)  
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Active Project`

<!--lint enable awesome-list-item-->

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md), [docs/inclusion-criteria.md](./docs/inclusion-criteria.md), and [docs/tag-system.md](./docs/tag-system.md) before submitting new entries.

Recommended inclusion standards:

- The project should be clearly relevant to scientific research or AI-for-Research workflows.
- Prefer official project pages, official GitHub repositories, or papers over secondary summaries.
- Avoid adding generic AI tools unless they are widely used as research-native infrastructure or workflow components.
- Prefer representative systems over near-duplicate wrappers.

## License

[MIT](./LICENSE)
