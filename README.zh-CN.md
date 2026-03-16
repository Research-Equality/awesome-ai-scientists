# Awesome-AI-Research [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[中文](./README.zh-CN.md) · [English](./README.md)

<div align="center">
  <p>
    <a href="https://research-equality.github.io/Awesome-AI-Research/">
      <img src="https://img.shields.io/badge/Website-live-2563eb.svg?style=flat-square" alt="Website">
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-2ea043.svg?style=flat-square" alt="PRs Welcome">
    <img src="https://img.shields.io/badge/License-MIT-111827.svg?style=flat-square" alt="License: MIT">
  </p>
  <p><strong>一个面向 AI 原生科研系统的分层生态地图。</strong></p>
  <p>通过“系统层级”和“科研流程阶段”两个维度组织 AI for Research 生态。</p>
</div>

Awesome-AI-Research 是一个面向 AI for Research 生态的策展型仓库，用一套统一结构整理系统、平台、模块、基准、综述、数据集和元资源。

网站：[research-equality.github.io/Awesome-AI-Research](https://research-equality.github.io/Awesome-AI-Research/)

## 标签系统

每个条目都遵循同一套标签结构：

`Level` · `Stage` · `Loop` · `Scope` · `Domain` · `Openness` · `Maturity`

完整定义见 [docs/tag-system.md](./docs/tag-system.md)。

## 🧠 Autonomous Research Systems

覆盖科研闭环关键环节的综合型系统。

### End-to-End AI Scientist Systems

- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - Google Research 的多智能体科学协作系统，用于提出、辩论、排序并优化研究假设。
  链接：[主页](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) · [论文](https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf)
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) - 开源端到端科研系统，可从种子代码库出发生成想法、实验、图表、评审与论文草稿。
  链接：[代码](https://github.com/SakanaAI/AI-Scientist) · [论文](https://arxiv.org/abs/2408.06292)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Closed-Loop Discovery Systems

- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - 面向化学研究的代理系统，可规划合成路径、检索文档、控制仪器并循环执行实验流程。
  链接：[论文](https://www.nature.com/articles/s41586-023-06792-0)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [PiFlow](https://github.com/amair-lab/PiFlow) - 面向纳米材料、生物分子和超导体等方向的多智能体迭代式科学发现框架。
  链接：[代码](https://github.com/amair-lab/PiFlow) · [论文](https://arxiv.org/abs/2505.15047)
  `Level: System` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Self-Improving / Self-Evolving Research Systems

- [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) - The AI Scientist 的树搜索升级版本，面向更高质量的自动科学发现轨迹。
  链接：[代码](https://github.com/SakanaAI/AI-Scientist-v2) · [论文](https://arxiv.org/abs/2504.08066)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Domain-Specific Autonomous Discovery Systems

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - 结合化学软件与工具调用的研究代理，用于合成与发现任务。
  链接：[代码](https://github.com/ur-whitelab/chemcrow-public) · [论文](https://arxiv.org/abs/2304.05376)
  `Level: System` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`

## 🏗 Research Infrastructure & Platforms

支撑 AI 原生科研系统运行的底层能力，包括运行时、编排、执行、观测与协作。

### Research Platforms

- [FutureHouse](https://www.futurehouse.org/) - 以自动化科学发现为核心目标的 research-native 平台，强调代理系统与领域工具结合。
  链接：[主页](https://www.futurehouse.org/)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Closed-source` · `Maturity: Production-like`

### Agent Runtimes for Research

- [AutoGen](https://github.com/microsoft/autogen) - 常用于构建研究助手、文献代理和评测流程的多智能体编程框架。
  链接：[代码](https://github.com/microsoft/autogen)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [LangGraph](https://docs.langchain.com/oss/python/langgraph) - 适合长流程代理任务的有状态图运行时，支持分支、记忆、恢复与显式控制流。
  链接：[文档](https://docs.langchain.com/oss/python/langgraph) · [代码](https://github.com/langchain-ai/langgraph)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - 面向仓库级编码、执行和 issue 驱动工程任务的代理运行时，也适用于研究编码工作流。
  链接：[代码](https://github.com/All-Hands-AI/OpenHands) · [文档](https://docs.all-hands.dev/)
  `Level: Platform` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Active Project`

### Research Workflow Orchestration

- [AgentScope](https://github.com/agentscope-ai/agentscope) - 支持显式角色、协作模式和工具集成的 agent-oriented 编程框架。
  链接：[代码](https://github.com/agentscope-ai/agentscope)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Tool-Use & Execution Infrastructure

- [E2B](https://e2b.dev/) - 为 AI 驱动科研流程提供代码、浏览器和桌面式工具调用的沙箱执行层。
  链接：[主页](https://e2b.dev/) · [文档](https://e2b.dev/docs)
  `Level: Platform` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

### Memory / Observability / Collaboration Layers

- [Weights & Biases](https://wandb.ai/) - 用于长流程研究代理、消融实验与基准运行的实验追踪与协作层。
  链接：[主页](https://wandb.ai/) · [文档](https://docs.wandb.ai/)
  `Level: Platform` · `Stage: Analysis` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

## 🔬 Workflow Modules

按科研流程阶段组织的单点能力模块。

### Literature Discovery & Review

- [Elicit](https://elicit.com/) - 面向文献搜索、证据抽取与结构化综述流程的 AI 研究助手。
  链接：[主页](https://elicit.com/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`
- [PaperQA2](https://github.com/Future-House/paper-qa) - 面向科学文献的开源问答与证据综合工具栈，强调引用支撑。
  链接：[代码](https://github.com/Future-House/paper-qa) · [论文](https://arxiv.org/abs/2409.13740)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [ResearchRabbit](https://www.researchrabbit.ai/) - 用于从种子论文扩展相关工作网络的可视化引用图谱探索工具。
  链接：[主页](https://www.researchrabbit.ai/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Research Ideation & Hypothesis Generation

- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - 以提出、辩论、排序和优化为核心的研究假设生成系统。
  链接：[主页](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) · [论文](https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf)
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [Consensus](https://consensus.app/) - 以 claim-grounded answer 为特色的科学搜索引擎，适合构思研究问题与假设。
  链接：[主页](https://consensus.app/)
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Planning & Experimental Design

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - 面向化学任务的工具调用代理，可将高层问题转化为可执行的实验设计。
  链接：[代码](https://github.com/ur-whitelab/chemcrow-public) · [论文](https://arxiv.org/abs/2304.05376)
  `Level: Module` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`
- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - 面向化学场景的实验规划系统，强调协议搜索、合成推理与实验室编排。
  链接：[论文](https://www.nature.com/articles/s41586-023-06792-0)
  `Level: Module` · `Stage: Planning` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`

### Data, Environment & Tool Use

- [E2B](https://e2b.dev/) - 为研究代理提供安全代码运行、浏览器控制与可复现实验工具调用能力。
  链接：[主页](https://e2b.dev/) · [文档](https://e2b.dev/docs)
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`
- [GeneAgent](https://github.com/ncbi-nlp/GeneAgent) - 面向基因集分析的领域数据库代理，展示了科学工具使用如何接入外部生物医学资源。
  链接：[代码](https://github.com/ncbi-nlp/GeneAgent)
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Method Development & Research Coding

- [AutoGen](https://github.com/microsoft/autogen) - 适合构建研究型 coding agent 的灵活底座，支持显式角色、工具和审查回路。
  链接：[代码](https://github.com/microsoft/autogen)
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - 面向仓库级研究编码、代码修改与执行验证的代理系统。
  链接：[代码](https://github.com/All-Hands-AI/OpenHands) · [文档](https://docs.all-hands.dev/)
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Active Project`

### Experiment Execution & Optimization

- [Optuna](https://optuna.org/) - 用于试验调度、超参数搜索和受控实验迭代的开源优化框架。
  链接：[主页](https://optuna.org/) · [代码](https://github.com/optuna/optuna)
  `Level: Module` · `Stage: Experiment` · `Loop: Open-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`
- [PiFlow](https://github.com/amair-lab/PiFlow) - 适合作为闭环实验执行与迭代科学发现的参考系统。
  链接：[代码](https://github.com/amair-lab/PiFlow) · [论文](https://arxiv.org/abs/2505.15047)
  `Level: Module` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Analysis, Evaluation & Interpretation

- [PaperBench](https://openai.com/index/paperbench/) - 用于评估代理能否从理解论文主张到运行实验，完整复现前沿 AI 研究流程的基准。
  链接：[论文](https://openai.com/index/paperbench/)
  `Level: Benchmark` · `Stage: Analysis` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`
- [Weights & Biases](https://wandb.ai/) - 用于追踪指标、可视化运行结果、比较消融实验和回看长研究轨迹的协作空间。
  链接：[主页](https://wandb.ai/) · [文档](https://docs.wandb.ai/)
  `Level: Module` · `Stage: Analysis` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

### Writing, Publication & Communication

- [Overleaf AI](https://www.overleaf.com/about/ai-features) - 集成在协作式 LaTeX 环境中的 AI 写作与编辑功能，适合学术发表流程。
  链接：[主页](https://www.overleaf.com/about/ai-features)
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`
- [STORM](https://github.com/stanford-oval/storm) - 支持引用支撑提纲与草稿生成的开源长篇研究报告生成系统。
  链接：[代码](https://github.com/stanford-oval/storm)
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

## 📚 Benchmarks, Surveys & Meta-Resources

帮助整个生态保持可评估、可比较、可导航的参考层。

### Surveys & Taxonomies

- [A Survey of AI Scientists](https://arxiv.org/abs/2510.23045) - 聚焦自动科学家与端到端 AI 研究流程的综述。
  链接：[论文](https://arxiv.org/abs/2510.23045)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`
- [AI4Research](https://ai-4-research.github.io/) - 持续更新的 AI for Research 调研站点，覆盖不同领域、任务与论文。
  链接：[主页](https://ai-4-research.github.io/)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Active Project`

### Benchmarks & Evaluation Suites

- [Frontiers in Science](https://openai.com/index/frontierscience/) - 面向奥赛式与研究式科学推理任务的基准套件。
  链接：[主页](https://openai.com/index/frontierscience/)
  `Level: Benchmark` · `Stage: Analysis` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`
- [PaperBench](https://openai.com/index/paperbench/) - 用于评估代理能否端到端复现前沿 AI 研究论文的基准。
  链接：[论文](https://openai.com/index/paperbench/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`
- [ScienceBench](https://sciencebench.com/) - 面向端到端科学操作与发现、且尽量减少人工介入的自主实验室基准。
  链接：[主页](https://sciencebench.com/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`

### Datasets

- [OpenAlex](https://openalex.org/) - 开放的学术作品、作者、机构、期刊与概念索引，是许多研究检索系统的重要底层资源。
  链接：[主页](https://openalex.org/) · [文档](https://docs.openalex.org/)
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`
- [Semantic Scholar Academic Graph API](https://www.semanticscholar.org/product/api) - 提供论文元数据与图谱接口，可用于检索、论文关联与引用分析。
  链接：[文档](https://www.semanticscholar.org/product/api)
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`

### Other Awesome Lists

- [awesome-research](https://github.com/emptymalei/awesome-research) - 按研究工作流任务组织的 curated list，可作为本仓库的补充视角。
  链接：[代码](https://github.com/emptymalei/awesome-research)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`
- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) - 聚焦 AI Scientist 系统的 curated list，与本仓库更广义的分层地图视角互补。
  链接：[代码](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

## 参与贡献

新增条目前，请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)、[docs/inclusion-criteria.md](./docs/inclusion-criteria.md) 和 [docs/tag-system.md](./docs/tag-system.md)。

## 许可证

[MIT](./LICENSE)
