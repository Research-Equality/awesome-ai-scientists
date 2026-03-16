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
  <p><strong>一个面向 AI 原生科研系统的分层生态地图。</strong></p>
</div>

Awesome-AI-Research 是一个面向 AI-for-Research 生态的策展型仓库，将自主研究系统、基础设施、工作流模块、基准、综述、数据集和元资源放进同一个分层结构中。

网站：[Awesome-AI-Research](https://research-equality.github.io/Awesome-AI-Research/)

## Feedback & Community

欢迎填写你使用这些 AI 科研工具的频率、真实感受，以及它们在哪些研究环节真正有帮助、哪些地方仍然不好用。我们收集这些反馈，是为了理解真实使用模式、识别高价值工具，并据此持续优化本仓库的策展重点。

飞书问卷：[链接](https://my.feishu.cn/share/base/form/shrcnnGoTojyKyJ3MYWi15b13Ns)

## 标签系统

每个条目都遵循同一套标签结构：

`Level` · `Stage` · `Loop` · `Scope` · `Domain` · `Openness` · `Maturity`

完整定义见 [docs/tag-system.md](./docs/tag-system.md)。

## 🧠 Autonomous Research Systems

覆盖科研闭环关键环节的综合型系统。

<!--lint disable awesome-list-item-->

### End-to-End AI Scientist Systems

- [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) - 开源端到端科研系统，可从种子代码库出发生成想法、实验、图表、评审与论文草稿。
  [代码](https://github.com/SakanaAI/AI-Scientist) · [论文](https://arxiv.org/abs/2408.06292) · [![GitHub stars](https://img.shields.io/github/stars/SakanaAI/AI-Scientist?style=flat-square)](https://github.com/SakanaAI/AI-Scientist/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [AI-Researcher](https://github.com/HKUDS/AI-Researcher) - 面向端到端科学创新的开源自主研究系统，覆盖想法生成、实现、实验与论文写作等环节。
  [代码](https://github.com/HKUDS/AI-Researcher) · [论文](https://arxiv.org/abs/2505.18705) · [![GitHub stars](https://img.shields.io/github/stars/HKUDS/AI-Researcher?style=flat-square)](https://github.com/HKUDS/AI-Researcher/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Research Prototype`

- [Robin](https://github.com/Future-House/robin) - FutureHouse 的多智能体系统，目标是自动化科学发现中的关键智力步骤，当前公开材料主要聚焦其代理编排能力。
  [代码](https://github.com/Future-House/robin) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/robin?style=flat-square)](https://github.com/Future-House/robin/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Self-Improving / Self-Evolving Research Systems

- [The AI Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) - 基于 agentic tree search 的后续版本，面向更高质量的自动科学发现轨迹与 workshop 级研究产出。
  [代码](https://github.com/SakanaAI/AI-Scientist-v2) · [论文](https://arxiv.org/abs/2504.08066) · [![GitHub stars](https://img.shields.io/github/stars/SakanaAI/AI-Scientist-v2?style=flat-square)](https://github.com/SakanaAI/AI-Scientist-v2/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [EvoScientist](https://github.com/EvoScientist/EvoScientist) - 自我演化的 AI Scientist 框架，面向端到端科学发现，并强调迭代改进与人在环监督。
  [代码](https://github.com/EvoScientist/EvoScientist) · [文档](https://github.com/EvoScientist/EvoScientist#readme) · [![GitHub stars](https://img.shields.io/github/stars/EvoScientist/EvoScientist?style=flat-square)](https://github.com/EvoScientist/EvoScientist/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [Scientify](https://github.com/tsingyuai/scientify) - 基于 OpenClaw 的 AI 原生科研系统，覆盖自动文献综述、实验执行、写作与迭代式研究工作流。
  [代码](https://github.com/tsingyuai/scientify) · [文档](https://github.com/tsingyuai/scientify#readme) · [![GitHub stars](https://img.shields.io/github/stars/tsingyuai/scientify?style=flat-square)](https://github.com/tsingyuai/scientify/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Closed-Loop Discovery Systems

- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - 面向化学研究的代理系统，可规划合成路径、检索文档、控制仪器并循环执行实验流程。
  [论文](https://www.nature.com/articles/s41586-023-06792-0)
  `Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`

- [PiFlow](https://github.com/amair-lab/PiFlow) - 面向纳米材料、生物分子和超导体等方向的原则感知多智能体迭代科学发现框架。
  [代码](https://github.com/amair-lab/PiFlow) · [论文](https://arxiv.org/abs/2505.15047) · [![GitHub stars](https://img.shields.io/github/stars/amair-lab/PiFlow?style=flat-square)](https://github.com/amair-lab/PiFlow/stargazers)
  `Level: System` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Domain-Specific Autonomous Discovery Systems

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - 结合 LLM 推理、化学软件与工具调用的化学研究代理，用于合成与发现任务。
  [代码](https://github.com/ur-whitelab/chemcrow-public) · [论文](https://arxiv.org/abs/2304.05376) · [![GitHub stars](https://img.shields.io/github/stars/ur-whitelab/chemcrow-public?style=flat-square)](https://github.com/ur-whitelab/chemcrow-public/stargazers)
  `Level: System` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`

- [Biomni](https://github.com/snap-stanford/Biomni) - 通用生物医学 AI 代理，设计目标是在多种生物医学子领域中自主执行研究任务。
  [代码](https://github.com/snap-stanford/Biomni) · [![GitHub stars](https://img.shields.io/github/stars/snap-stanford/Biomni?style=flat-square)](https://github.com/snap-stanford/Biomni/stargazers)
  `Level: System` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

## 🏗 Research Infrastructure & Platforms

让 AI 原生科研系统真正可用的底层能力，包括运行时、编排、执行、评测环境与可观测性。

### Research Platforms

- [ResearchClaw](https://github.com/ymx10086/ResearchClaw) - 本地优先的 AI 科研助手，覆盖文献发现、笔记整理、实验跟踪与论文写作等研究工作流环节。  
  [代码](https://github.com/ymx10086/ResearchClaw) · [文档](https://github.com/ymx10086/ResearchClaw#readme) · [![GitHub stars](https://img.shields.io/github/stars/ymx10086/ResearchClaw?style=flat-square)](https://github.com/ymx10086/ResearchClaw/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Agent Runtimes & Orchestration

- [LangGraph](https://docs.langchain.com/oss/python/langgraph) - 用于构建、管理和部署长流程、有状态代理的底层编排框架。
  [文档](https://docs.langchain.com/oss/python/langgraph) · [代码](https://github.com/langchain-ai/langgraph) · [![GitHub stars](https://img.shields.io/github/stars/langchain-ai/langgraph?style=flat-square)](https://github.com/langchain-ai/langgraph/stargazers)  
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

- [AutoGen](https://github.com/microsoft/autogen) - Microsoft 的多智能体应用框架；项目仍在维护，但官方也在引导新用户关注 Microsoft Agent Framework。
  [代码](https://github.com/microsoft/autogen) · [![GitHub stars](https://img.shields.io/github/stars/microsoft/autogen?style=flat-square)](https://github.com/microsoft/autogen/stargazers)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Maintained Framework`

- [AgentScope](https://github.com/agentscope-ai/agentscope) - 支持显式角色、协作模式和工具集成的 agent-oriented 编程框架。
  [代码](https://github.com/agentscope-ai/agentscope) · [![GitHub stars](https://img.shields.io/github/stars/agentscope-ai/agentscope?style=flat-square)](https://github.com/agentscope-ai/agentscope/stargazers)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [LDP](https://github.com/Future-House/ldp) - 用于语言代理、环境与优化器模块化互换的框架。
  [代码](https://github.com/Future-House/ldp) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/ldp?style=flat-square)](https://github.com/Future-House/ldp/stargazers)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Tool-Use & Execution Infrastructure

- [E2B](https://e2b.dev/) - 用于安全执行代理生成代码、处理数据和运行工具的隔离沙箱基础设施。
  [主页](https://e2b.dev/) · [文档](https://e2b.dev/docs) · [代码](https://github.com/e2b-dev/E2B) · [![GitHub stars](https://img.shields.io/github/stars/e2b-dev/E2B?style=flat-square)](https://github.com/e2b-dev/E2B/stargazers)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

### Evaluation & Training Environments

- [Aviary](https://github.com/Future-House/aviary) - 面向语言代理的 gym 式环境，内置多种科学任务场景，包括科学文献检索与蛋白稳定性任务。
  [代码](https://github.com/Future-House/aviary) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/aviary?style=flat-square)](https://github.com/Future-House/aviary/stargazers)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: General` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Memory / Observability / Collaboration Layers

- [Weights & Biases](https://wandb.ai/) - 面向长流程研究代理、消融实验与基准运行的实验追踪与协作层。
  [主页](https://wandb.ai/) · [文档](https://docs.wandb.ai/)
  `Level: Platform` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

## 🔬 Workflow Modules

按科研流程阶段组织的可复用单点能力模块。

### Literature Discovery & Review

- [Elicit](https://elicit.com/) - 面向文献搜索、证据抽取与结构化综述流程的 AI 研究助手。
  [主页](https://elicit.com/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [PaperQA2](https://github.com/Future-House/paper-qa) - 面向科学文献的开源问答与证据综合工具栈，强调引用支撑和基于证据的回答。
  [代码](https://github.com/Future-House/paper-qa) · [论文](https://arxiv.org/abs/2409.13740) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/paper-qa?style=flat-square)](https://github.com/Future-House/paper-qa/stargazers)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [ResearchRabbit](https://www.researchrabbit.ai/) - 用于从种子论文扩展相关工作网络的可视化发现工具。
  [主页](https://www.researchrabbit.ai/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [Litmaps](https://www.litmaps.com/) - 围绕引用网络探索、可视化与提醒构建的文献发现与监测工具。
  [主页](https://www.litmaps.com/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [Connected Papers](https://www.connectedpapers.com/) - 以种子论文为中心，帮助发现相关学术工作的可视化论文探索工具。
  [主页](https://www.connectedpapers.com/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [Scite](https://scite.ai/) - 以 Smart Citations 为核心的研究发现与评估平台，可显示研究是支持、对比还是仅提及既有工作。
  [主页](https://scite.ai/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [SciSpace Literature Review](https://scispace.com/search) - 用于查找、分析、组织与比较科学论文的 AI 文献综述工作区。
  [主页](https://scispace.com/)
  `Level: Module` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Research Ideation & Hypothesis Generation

- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - Google Research 的多智能体科学协作系统，用于生成、辩论、排序和优化研究假设与研究提案。
  [主页](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) · [论文](https://arxiv.org/abs/2502.18864)
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`

- [Consensus](https://consensus.app/) - 以 claim-grounded answer 为特色的科学搜索引擎，适合构思候选研究问题与假设。
  [主页](https://consensus.app/)
  `Level: Module` · `Stage: Ideation` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

### Planning & Experimental Design

- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - 面向化学任务的工具调用代理，可将高层问题转化为可执行的实验推理与设计。
  [代码](https://github.com/ur-whitelab/chemcrow-public) · [论文](https://arxiv.org/abs/2304.05376) · [![GitHub stars](https://img.shields.io/github/stars/ur-whitelab/chemcrow-public?style=flat-square)](https://github.com/ur-whitelab/chemcrow-public/stargazers)
  `Level: Module` · `Stage: Planning` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Open-source` · `Maturity: Research Prototype`

- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - 面向化学场景的实验规划系统，强调协议搜索、合成推理与实验室编排。
  [论文](https://www.nature.com/articles/s41586-023-06792-0)
  `Level: Module` · `Stage: Planning` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Chemistry` · `Openness: Paper-only` · `Maturity: Research Prototype`

### Data, Environment & Tool Use

- [E2B](https://e2b.dev/) - 为研究代理提供安全代码运行、浏览器控制与可复现实验工具调用能力的执行底座。
  [主页](https://e2b.dev/) · [文档](https://e2b.dev/docs) · [代码](https://github.com/e2b-dev/E2B) · [![GitHub stars](https://img.shields.io/github/stars/e2b-dev/E2B?style=flat-square)](https://github.com/e2b-dev/E2B/stargazers)
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

- [GeneAgent](https://github.com/ncbi-nlp/GeneAgent) - 面向基因集分析的领域数据库代理，依赖外部生物医学资源来完成研究任务。
  [代码](https://github.com/ncbi-nlp/GeneAgent) · [![GitHub stars](https://img.shields.io/github/stars/ncbi-nlp/GeneAgent?style=flat-square)](https://github.com/ncbi-nlp/GeneAgent/stargazers)
  `Level: Module` · `Stage: Data` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Method Development & Research Coding

- [AutoGen](https://github.com/microsoft/autogen) - 适合构建研究型 coding agent 的灵活底座，支持显式角色、工具与审查回路。
  [代码](https://github.com/microsoft/autogen) · [![GitHub stars](https://img.shields.io/github/stars/microsoft/autogen?style=flat-square)](https://github.com/microsoft/autogen/stargazers)
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Maintained Framework`

- [OpenHands](https://github.com/OpenHands/OpenHands) - 面向云端编码代理的开放平台，支持仓库级实现、执行与工程工作流，可用于研究编码但并非研究专用基础设施。
  [代码](https://github.com/OpenHands/OpenHands) · [文档](https://openhands.dev/) · [![GitHub stars](https://img.shields.io/github/stars/OpenHands/OpenHands?style=flat-square)](https://github.com/OpenHands/OpenHands/stargazers)
  `Level: Module` · `Stage: Coding` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Experiment Execution & Optimization

- [Optuna](https://optuna.org/) - 用于试验调度、超参数搜索和受控实验迭代的开源优化框架。
  [主页](https://optuna.org/) · [代码](https://github.com/optuna/optuna) · [![GitHub stars](https://img.shields.io/github/stars/optuna/optuna?style=flat-square)](https://github.com/optuna/optuna/stargazers)
  `Level: Module` · `Stage: Experiment` · `Loop: Open-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Production-like`

- [PiFlow](https://github.com/amair-lab/PiFlow) - 闭环实验执行与迭代科学发现的参考系统。
  [代码](https://github.com/amair-lab/PiFlow) · [论文](https://arxiv.org/abs/2505.15047) · [![GitHub stars](https://img.shields.io/github/stars/amair-lab/PiFlow?style=flat-square)](https://github.com/amair-lab/PiFlow/stargazers)
  `Level: Module` · `Stage: Experiment` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Research Prototype`

### Analysis, Evaluation & Interpretation

- [PaperBench](https://openai.com/index/paperbench/) - 用于评估代理能否从理解论文主张到运行实验，完整复现前沿 AI 研究流程的基准。
  [主页](https://openai.com/index/paperbench/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [Weights & Biases](https://wandb.ai/) - 用于追踪指标、可视化运行结果、比较消融实验和回看长研究轨迹的协作空间。
  [主页](https://wandb.ai/) · [文档](https://docs.wandb.ai/)
  `Level: Module` · `Stage: Analysis` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Partially Open` · `Maturity: Production-like`

### Writing, Publication & Communication

- [Overleaf AI](https://www.overleaf.com/about/ai-features) - 集成在协作式 LaTeX 环境中的 AI 写作与编辑功能，适合学术发表流程。
  [主页](https://www.overleaf.com/about/ai-features)
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Closed-source` · `Maturity: Production-like`

- [STORM](https://github.com/stanford-oval/storm) - 支持引用支撑提纲与草稿生成的开源长篇研究报告生成系统。
  [代码](https://github.com/stanford-oval/storm) · [![GitHub stars](https://img.shields.io/github/stars/stanford-oval/storm?style=flat-square)](https://github.com/stanford-oval/storm/stargazers)
  `Level: Module` · `Stage: Writing` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

## 📚 Benchmarks, Surveys & Meta-Resources

帮助整个生态保持可评估、可比较、可导航的参考层。

### Surveys & Taxonomies

- [A Survey of AI Scientists](https://arxiv.org/abs/2510.23045) - 聚焦自动科学家与端到端 AI 研究流程的综述。
  [论文](https://arxiv.org/abs/2510.23045)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Paper-only` · `Maturity: Research Prototype`

- [AI4Research](https://ai-4-research.github.io/) - 持续更新的 AI for Research 调研站点，覆盖不同领域、任务与论文。
  [主页](https://ai-4-research.github.io/)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: Multi-domain` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Active Project`

- [AI-for-Research](https://github.com/zkzhou126/AI-for-Research) - 对应综述论文的配套仓库，覆盖从假设生成到发表的研究生命周期中 AI 支持能力。
  [代码](https://github.com/zkzhou126/AI-for-Research) · [论文](https://arxiv.org/abs/2503.01424) · [![GitHub stars](https://img.shields.io/github/stars/zkzhou126/AI-for-Research?style=flat-square)](https://github.com/zkzhou126/AI-for-Research/stargazers)
  `Level: Survey` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

### Benchmarks & Evaluation Suites

- [Frontiers in Science](https://openai.com/index/frontierscience/) - 面向奥赛式与研究式科学推理任务的基准套件。
  [主页](https://openai.com/index/frontierscience/)
  `Level: Benchmark` · `Stage: Analysis` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [PaperBench](https://openai.com/index/paperbench/) - 用于评估代理能否端到端复现前沿 AI 研究论文的基准。
  [主页](https://openai.com/index/paperbench/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [ScienceBench](https://sciencebench.com/) - 面向端到端科学操作与发现、且尽量减少人工介入的自主实验室基准。
  [主页](https://sciencebench.com/)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Research Prototype`

- [AIRS-Bench](https://github.com/facebookresearch/airs-bench) - Meta / Facebook Research 提出的基准，用于量化 LLM 代理的端到端 AI 研究能力。
  [代码](https://github.com/facebookresearch/airs-bench) · [![GitHub stars](https://img.shields.io/github/stars/facebookresearch/airs-bench?style=flat-square)](https://github.com/facebookresearch/airs-bench/stargazers)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: CS` · `Openness: Open-source` · `Maturity: Research Prototype`

- [LAB-Bench](https://github.com/Future-House/LAB-Bench) - 面向生物学科学研究基础能力的基准。
  [代码](https://github.com/Future-House/LAB-Bench) · [![GitHub stars](https://img.shields.io/github/stars/Future-House/LAB-Bench?style=flat-square)](https://github.com/Future-House/LAB-Bench/stargazers)
  `Level: Benchmark` · `Stage: End-to-end` · `Loop: Open-loop` · `Scope: Domain-specific` · `Domain: Biology` · `Openness: Open-source` · `Maturity: Research Prototype`

### Datasets

- [OpenAlex](https://openalex.org/) - 开放的学术作品、作者、机构、期刊与概念索引，是许多 research-native 检索系统的重要底层资源。
  [主页](https://openalex.org/) · [文档](https://docs.openalex.org/)
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`

- [Semantic Scholar Academic Graph API](https://www.semanticscholar.org/product/api) - 提供结构化论文元数据与图谱接口，可用于检索、论文关联与引用分析。
  [文档](https://www.semanticscholar.org/product/api)
  `Level: Dataset` · `Stage: Literature` · `Loop: Human-in-the-loop` · `Scope: Domain-specific` · `Domain: Multi-domain` · `Openness: Partially Open` · `Maturity: Production-like`

### Other Awesome Lists

- [awesome-research](https://github.com/emptymalei/awesome-research) - 按研究工作流任务组织的 curated list，可作为本仓库模块视角的补充。
  [代码](https://github.com/emptymalei/awesome-research) · [![GitHub stars](https://img.shields.io/github/stars/emptymalei/awesome-research?style=flat-square)](https://github.com/emptymalei/awesome-research/stargazers)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [Awesome-AI-Scientists](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) - 聚焦 AI Scientist 系统的 curated list，与本仓库更广义的分层地图视角互补。
  [代码](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists) · [![GitHub stars](https://img.shields.io/github/stars/tsinghua-fib-lab/Awesome-AI-Scientists?style=flat-square)](https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists/stargazers)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

- [Awesome Papers on Agents for Science](https://github.com/OSU-NLP-Group/awesome-agents4science) - 覆盖多领域、任务类型与基准的 agents-for-science 论文书目型 curated list。
  [代码](https://github.com/OSU-NLP-Group/awesome-agents4science) · [![GitHub stars](https://img.shields.io/github/stars/OSU-NLP-Group/awesome-agents4science?style=flat-square)](https://github.com/OSU-NLP-Group/awesome-agents4science/stargazers)
  `Level: Meta` · `Stage: End-to-end` · `Loop: Human-in-the-loop` · `Scope: General` · `Domain: Multi-domain` · `Openness: Open-source` · `Maturity: Active Project`

<!--lint enable awesome-list-item-->

## 参与贡献

新增条目前，请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)、[docs/inclusion-criteria.md](./docs/inclusion-criteria.md) 和 [docs/tag-system.md](./docs/tag-system.md)。

推荐收录标准：

- 项目应当与科学研究或 AI-for-Research 工作流有明确关联。
- 优先收录官方项目主页、官方 GitHub 仓库或论文页，而不是二手总结。
- 除非是被广泛用作研究基础设施或工作流模块，否则尽量避免收录泛用型 AI 工具。
- 优先选择具有代表性的系统，而不是近似重复的包装项目。

## 许可证

[MIT](./LICENSE)
