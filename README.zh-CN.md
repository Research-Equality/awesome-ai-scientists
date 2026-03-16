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
  <img src="assets/banner.svg" alt="Awesome-AI-Research banner" width="100%">
</div>

Awesome-AI-Research 是一个面向 AI for Research 生态的策展型仓库。它的目标不是平铺论文或工具，而是用清晰、可维护的结构来表达整个生态。

仓库与 GitHub Pages 网站都支持中英文双语：

- 网站：右上角提供 `中文 / EN` 语言切换
- 仓库：英文版在 [README.md](./README.md)，中文版在 [README.zh-CN.md](./README.zh-CN.md)

## 为什么这个仓库不一样

- **不只是论文。** 只有当论文是某个系统、基准或综述的核心参考时，才会作为主要条目出现。
- **不只是工具。** 条目按其在研究栈中的真实角色分类，而不是按模糊的产品标签归类。
- **不只是 AI Scientist 项目。** 仓库同时覆盖基础设施、工作流模块和元资源。
- **它是一张分层地图。** 每个条目都会同时放在对象层级和科研流程阶段两个维度中理解。

## 结构

<div align="center">
  <img src="assets/structure-diagram.svg" alt="Structure diagram for the AI-native research ecosystem" width="100%">
</div>

### 四层结构

- **Autonomous Research Systems**：覆盖科研闭环关键环节的综合型系统
- **Research Infrastructure & Platforms**：编排、执行、记忆、观测与协作等底层能力
- **Workflow Modules**：服务于文献、构思、规划、编码、实验、分析、写作等阶段的单点模块
- **Benchmarks, Surveys & Meta-Resources**：让整个生态保持可评估、可比较、可导航的参考层

### 科研流程阶段

`Literature` · `Ideation` · `Planning` · `Data` · `Coding` · `Experiment` · `Analysis` · `Writing`

## 精选资源

- [The AI Scientist](https://github.com/SakanaAI/AI-Scientist) - 面向端到端科研闭环的开源系统，可生成想法、实验、图表、评审和论文草稿。`Level: System` · `Stage: End-to-end`
- [AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist) - 多智能体科学协作系统，强调假设提出、辩论、排序与迭代优化。`Level: System` · `Stage: End-to-end`
- [FutureHouse](https://www.futurehouse.org/) - 以自动化科学发现为核心叙事的 research-native 平台。`Level: Platform` · `Stage: End-to-end`
- [PaperQA2](https://github.com/Future-House/paper-qa) - 面向科学文献的问答与证据综合模块。`Level: Module` · `Stage: Literature`
- [STORM](https://github.com/stanford-oval/storm) - 用于研究写作流程的引用支撑型长文生成系统。`Level: Module` · `Stage: Writing`
- [PaperBench](https://openai.com/index/paperbench/) - 评估代理是否能复现前沿 AI 研究流程的基准。`Level: Benchmark` · `Stage: End-to-end`
- [AI4Research](https://ai-4-research.github.io/) - 面向 AI for Research 生态的持续更新综述站点。`Level: Survey` · `Stage: End-to-end`

## 标签体系

每个条目都遵循同一套紧凑标签结构：

`Level` · `Stage` · `Loop` · `Scope` · `Domain` · `Openness` · `Maturity`

示例：

`Level: System` · `Stage: End-to-end` · `Loop: Closed-loop` · `Scope: General` · `Domain: General` · `Openness: Open-source` · `Maturity: Active Project`

完整定义见 [docs/tag-system.md](./docs/tag-system.md)。

## 参与贡献

提交 PR 或建议收录资源前，请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

进一步的策展说明：

- [docs/inclusion-criteria.md](./docs/inclusion-criteria.md)
- [docs/curation-principles.md](./docs/curation-principles.md)

## 许可证

[MIT](./LICENSE)
