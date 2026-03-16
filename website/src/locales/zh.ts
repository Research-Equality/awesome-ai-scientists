import type { Copy } from "./en";

export const zh: Copy = {
  documentTitle: "Awesome-AI-Research",
  switcher: {
    zh: "中文",
    en: "EN",
  },
  header: {
    github: "GitHub",
    englishReadme: "README",
    chineseReadme: "中文 README",
  },
  hero: {
    subtitle: "一个面向 AI 原生科研系统的分层生态地图。",
    purpose:
      "Awesome-AI-Research 用“系统层级”和“科研流程阶段”两个维度整理 AI for Research 生态，让系统、平台、模块、基准、综述和数据资源能在同一结构中被清楚理解。",
    github: "查看 GitHub",
  },
  survey: {
    title: "邀请问卷",
    description:
      "欢迎填写你使用这些 AI 科研工具的频率和真实感受，反馈会帮助我们继续完善这个目录。",
    cta: "填写问卷",
  },
  sections: {
    content: "仓库内容",
  },
  filters: {
    search: "搜索",
    searchPlaceholder: "按名称或简介搜索",
    level: "层级",
    stage: "阶段",
    domain: "领域",
    openness: "开放性",
    all: "全部",
    results: "条结果",
  },
  labels: {
    level: "层级",
    stage: "阶段",
    loop: "闭环方式",
    scope: "范围",
    domain: "领域",
    openness: "开放性",
    maturity: "成熟度",
    link: "链接",
  },
  linkKinds: {
    homepage: "主页",
    code: "代码",
    paper: "论文",
    docs: "文档",
    video: "视频",
    slides: "PPT",
  },
  footer: {
    summary: "面向 Awesome-AI-Research 的极简双语静态目录页。",
  },
  names: {
    layers: {
      "Autonomous Research Systems": "自主研究系统",
      "Research Infrastructure & Platforms": "科研基础设施与平台",
      "Workflow Modules": "工作流模块",
      "Benchmarks, Surveys & Meta-Resources": "基准、综述与元资源",
    },
    levels: {
      System: "系统",
      Platform: "平台",
      Module: "模块",
      Benchmark: "基准",
      Survey: "综述",
      Dataset: "数据集",
      Meta: "元资源",
    },
    stages: {
      Literature: "文献",
      Ideation: "构思",
      Planning: "规划",
      Data: "数据",
      Coding: "编码",
      Experiment: "实验",
      Analysis: "分析",
      Writing: "写作",
      "End-to-end": "端到端",
    },
    loops: {
      "Open-loop": "开环",
      "Human-in-the-loop": "人在环中",
      "Closed-loop": "闭环",
    },
    scopes: {
      General: "通用",
      "Domain-specific": "领域特定",
    },
    domains: {
      General: "通用",
      Biology: "生物",
      Chemistry: "化学",
      Materials: "材料",
      Physics: "物理",
      Medicine: "医学",
      CS: "计算机科学",
      Math: "数学",
      "Multi-domain": "多领域",
    },
    openness: {
      "Open-source": "开源",
      "Partially Open": "部分开放",
      "Closed-source": "闭源",
      "Paper-only": "仅论文",
    },
    maturity: {
      "Research Prototype": "研究原型",
      "Active Project": "活跃项目",
      "Production-like": "接近生产",
      Archived: "已归档",
    },
  },
  layerDescriptions: {
    "Autonomous Research Systems":
      "覆盖科研闭环中关键环节的综合系统，从构思到执行、分析或写作。",
    "Research Infrastructure & Platforms":
      "支撑 AI 原生科研的运行底座，包括编排、执行、记忆、观测与协作能力。",
    "Workflow Modules":
      "服务于文献、构思、规划、编码、实验、分析和写作等阶段的单点能力模块。",
    "Benchmarks, Surveys & Meta-Resources":
      "帮助生态保持可比较、可评估、可导航的基准、综述、数据集与元资源。",
  },
  subgroupNames: {
    "Agent Runtimes for Research": "科研代理运行时",
    "Benchmarks & Evaluation Suites": "基准与评测套件",
    "Closed-Loop Discovery Systems": "闭环发现系统",
    "Data, Environment & Tool Use": "数据、环境与工具使用",
    Datasets: "数据集",
    "Domain-Specific Autonomous Discovery Systems": "领域特定自主发现系统",
    "End-to-End AI Scientist Systems": "端到端 AI Scientist 系统",
    "Experiment Execution & Optimization": "实验执行与优化",
    "Literature Discovery & Review": "文献发现与综述",
    "Memory / Observability / Collaboration Layers": "记忆、观测与协作层",
    "Other Awesome Lists": "其他 Awesome 列表",
    "Research Ideation & Hypothesis Generation": "研究构思与假设生成",
    "Research Platforms": "科研平台",
    "Research Workflow Orchestration": "科研工作流编排",
    "Self-Improving / Self-Evolving Research Systems": "自我改进 / 自我演化研究系统",
    "Surveys & Taxonomies": "综述与分类体系",
    "Tool-Use & Execution Infrastructure": "工具使用与执行基础设施",
    "Writing, Publication & Communication": "写作、发表与传播",
  },
  resourceDescriptions: {
    "ai-co-scientist":
      "Google Research 的多智能体科学协作系统，用于提出、辩论、排序并迭代优化研究假设。",
    "the-ai-scientist":
      "开源的端到端科研系统，可从种子代码库出发生成想法、实验、图表、评审与论文草稿。",
    coscientist:
      "面向化学研究的代理系统，可规划合成路径、检索文档、控制仪器并循环执行实验流程。",
    piflow:
      "面向纳米材料、生物分子和超导体等方向的多智能体迭代式科学发现框架。",
    "the-ai-scientist-v2":
      "The AI Scientist 的树搜索升级版本，面向更高质量的自动科学发现轨迹。",
    evoscientist:
      "自我演化的 AI Scientist 框架，面向端到端科学发现，并强调迭代改进与人在环监督。",
    scientify:
      "基于 OpenClaw 的 AI 原生科研系统，覆盖自动文献综述、实验执行、写作与迭代式研究工作流。",
    chemcrow:
      "结合化学软件与工具调用的研究代理，用于合成与发现任务。",
    futurehouse:
      "以自动化科学发现为核心目标的 research-native 平台，强调代理系统与领域工具结合。",
    researchclaw:
      "本地优先的 AI 科研助手，覆盖文献发现、笔记整理、实验跟踪与论文写作等研究工作流环节。",
    autogen:
      "常用于构建研究助手、文献代理和评测流程的多智能体编程框架。",
    langgraph:
      "适合长流程代理任务的有状态图运行时，支持分支、记忆、恢复与显式控制流。",
    openhands:
      "面向仓库级编码、执行和 issue 驱动工程任务的代理运行时，也适用于研究编码工作流。",
    agentscope:
      "支持显式角色、协作模式和工具集成的 agent-oriented 编程框架。",
    e2b:
      "为 AI 驱动科研流程提供代码、浏览器和桌面式工具调用的沙箱执行层。",
    wandb:
      "用于长流程研究代理、消融实验与基准运行的实验追踪与协作层。",
    elicit:
      "面向文献搜索、证据抽取与结构化综述流程的 AI 研究助手。",
    paperqa2:
      "面向科学文献的开源问答与证据综合工具栈，强调引用支撑。",
    "research-rabbit":
      "用于从种子论文扩展相关工作网络的可视化引用图谱探索工具。",
    consensus:
      "以 claim-grounded answer 为特色的科学搜索引擎，适合构思研究问题与假设。",
    geneagent:
      "面向基因集分析的领域数据库代理，展示了科学工具使用如何接入外部生物医学资源。",
    optuna:
      "用于试验调度、超参数搜索和受控实验迭代的开源优化框架。",
    storm:
      "支持引用支撑提纲与草稿生成的开源长篇研究报告生成系统。",
    "overleaf-ai":
      "集成在协作式 LaTeX 环境中的 AI 写作与编辑功能，适合学术发表流程。",
    paperbench:
      "用于评估代理能否从理解论文主张到运行实验，完整复现前沿 AI 研究流程的基准。",
    "frontiers-in-science":
      "面向奥赛式与研究式科学推理任务的基准套件。",
    sciencebench:
      "面向端到端科学操作与发现、且尽量减少人工介入的自主实验室基准。",
    ai4research:
      "持续更新的 AI for Research 调研站点，覆盖不同领域、任务与论文。",
    "survey-ai-scientists":
      "聚焦自动科学家与端到端 AI 研究流程的综述。",
    openalex:
      "开放的学术作品、作者、机构、期刊与概念索引，是许多研究检索系统的重要底层资源。",
    "semantic-scholar-api":
      "提供论文元数据与图谱接口，可用于检索、论文关联与引用分析。",
    "awesome-research":
      "按研究工作流任务组织的 curated list，可作为本仓库的补充视角。",
    "awesome-ai-scientists":
      "聚焦 AI Scientist 系统的 curated list，与本仓库更广义的分层地图视角互补。",
  },
};
