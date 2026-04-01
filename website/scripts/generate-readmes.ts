import fs from "node:fs";
import path from "node:path";
import {
  getGitHubStarsBadgeUrl,
  getGitHubStarsPageUrl,
  getResourceGitHubRepo,
  resources,
  type Layer,
  type Resource,
} from "../src/data/resources";
import { locales, type Language } from "../src/locales";

type ReadmeOverride = Partial<Pick<Resource, "level" | "stage" | "loop" | "domain" | "openness">>;

type ReadmeEntry =
  | string
  | {
      id: string;
      override?: ReadmeOverride;
    };

type ReadmeSection = {
  heading: string;
  entries: ReadonlyArray<ReadmeEntry>;
};

type ReadmeLayer = {
  emoji: string;
  layer: Layer;
  sections: ReadonlyArray<ReadmeSection>;
};

type ReadmeCopy = {
  intro: string;
  websiteLabel: string;
  contentsTitle: string;
  contents: ReadonlyArray<string>;
  howToTitle: string;
  howToBullets: ReadonlyArray<string>;
  feedbackTitle: string;
  feedbackBody: string;
  surveyLabel: string;
  surveyText: string;
  tagSystemTitle: string;
  tagSystemIntro: string;
  tagSystemBody: string;
  contributingTitle: string;
  contributingBody: string;
  standardsTitle: string;
  standards: ReadonlyArray<string>;
  licenseTitle: string;
};

const websiteUrl = "https://research-equality.github.io/Awesome-AI-Research/";
const surveyUrl = "https://my.feishu.cn/share/base/form/shrcnnGoTojyKyJ3MYWi15b13Ns";

const readmeStructure = [
  {
    emoji: "🧠",
    layer: "Autonomous Research Systems",
    sections: [
      {
        heading: "End-to-End AI Scientist Systems",
        entries: [
          "the-ai-scientist",
          "ai-researcher",
          "autoresearchclaw",
          "nanoresearch",
          "openags-auto-research",
          "agent-laboratory",
          "mlr-copilot",
          "robin",
        ],
      },
      {
        heading: "Self-Improving / Self-Evolving Research Systems",
        entries: [
          "the-ai-scientist-v2",
          "evoscientist",
          "scientify",
          "autoresearch-sibylsystem",
          "hyperspace-agi",
        ],
      },
      {
        heading: "Closed-Loop Discovery Systems",
        entries: ["coscientist", "piflow"],
      },
      {
        heading: "Domain-Specific Autonomous Discovery Systems",
        entries: ["chemcrow", "biomni", "ml-agent"],
      },
    ],
  },
  {
    emoji: "🏗",
    layer: "Research Infrastructure & Platforms",
    sections: [
      {
        heading: "Research Platforms",
        entries: ["futurehouse", "agentrxiv", "research-claw", "researchclaw"],
      },
      {
        heading: "Agent Runtimes & Orchestration",
        entries: ["langgraph", "autogen", "agentscope", "clawteam", "ldp"],
      },
      {
        heading: "Research Workflow Orchestration",
        entries: ["aris", "ai-research-skills"],
      },
      {
        heading: "Tool-Use & Execution Infrastructure",
        entries: ["e2b"],
      },
      {
        heading: "Evaluation & Training Environments",
        entries: ["aviary"],
      },
      {
        heading: "Memory / Observability / Collaboration Layers",
        entries: ["wandb"],
      },
    ],
  },
  {
    emoji: "🔬",
    layer: "Workflow Modules",
    sections: [
      {
        heading: "Literature Discovery & Review",
        entries: [
          "elicit",
          "paperqa2",
          "lattereview",
          "litllm",
          "autoresearcher",
          "research-rabbit",
          "litmaps",
          "connected-papers",
          "scite",
          "scispace-literature-review",
        ],
      },
      {
        heading: "Research Ideation & Hypothesis Generation",
        entries: [
          {
            id: "ai-co-scientist",
            override: { level: "Module", stage: "Ideation" },
          },
          "researchagent",
          "consensus",
        ],
      },
      {
        heading: "Planning & Experimental Design",
        entries: [
          {
            id: "chemcrow",
            override: { level: "Module", stage: "Planning" },
          },
          {
            id: "coscientist",
            override: { level: "Module", stage: "Planning" },
          },
        ],
      },
      {
        heading: "Data, Environment & Tool Use",
        entries: [
          {
            id: "e2b",
            override: { level: "Module", stage: "Data", openness: "Open-source" },
          },
          "geneagent",
        ],
      },
      {
        heading: "Method Development & Research Coding",
        entries: [
          {
            id: "autogen",
            override: { level: "Module", stage: "Coding" },
          },
          {
            id: "openhands",
            override: {
              level: "Module",
              stage: "Coding",
              domain: "General",
              openness: "Open-source",
            },
          },
        ],
      },
      {
        heading: "Experiment Execution & Optimization",
        entries: [
          "optuna",
          "aideml",
          {
            id: "piflow",
            override: { level: "Module", stage: "Experiment" },
          },
        ],
      },
      {
        heading: "Analysis, Evaluation & Interpretation",
        entries: [
          "paperbench",
          {
            id: "wandb",
            override: { level: "Module", stage: "Analysis" },
          },
        ],
      },
      {
        heading: "Writing, Publication & Communication",
        entries: ["overleaf-ai", "storm"],
      },
    ],
  },
  {
    emoji: "📚",
    layer: "Benchmarks, Surveys & Meta-Resources",
    sections: [
      {
        heading: "Surveys & Taxonomies",
        entries: [
          "survey-ai-scientists",
          "ai4research",
          "ai-for-research",
          "awesome-deep-research-agent",
          "llm-agent-optimization",
          "awesome-llm-scientific-discovery",
        ],
      },
      {
        heading: "Benchmarks & Evaluation Suites",
        entries: [
          "frontiers-in-science",
          "paperbench",
          "sciencebench",
          "airs-bench",
          "mlagentbench",
          "ml-bench",
          "mle-bench",
          "mlr-bench",
          "lab-bench",
          "agentbench",
        ],
      },
      {
        heading: "Datasets",
        entries: ["openalex", "semantic-scholar-api"],
      },
      {
        heading: "Other Awesome Lists",
        entries: [
          "awesome-research",
          "awesome-ai-scientists",
          "awesome-papers-on-agents-for-science",
          "awesome-ai-scientist-papers",
          "awesome-autoresearch",
        ],
      },
    ],
  },
] as const satisfies ReadonlyArray<ReadmeLayer>;

const readmeCopy: Record<Language, ReadmeCopy> = {
  en: {
    intro:
      "Awesome-AI-Research is a curated repository for the AI-for-Research ecosystem. It groups autonomous research systems, infrastructure, workflow modules, benchmarks, surveys, datasets, and meta-resources into one layered structure.",
    websiteLabel: "Website",
    contentsTitle: "Contents",
    contents: [
      "- [How to Use This List](#how-to-use-this-list)",
      "- [Feedback & Community](#feedback--community)",
      "- [Tag System](#tag-system)",
      "- [🧠 Autonomous Research Systems](#-autonomous-research-systems)",
      "- [🏗 Research Infrastructure & Platforms](#-research-infrastructure--platforms)",
      "- [🔬 Workflow Modules](#-workflow-modules)",
      "- [📚 Benchmarks, Surveys & Meta-Resources](#-benchmarks-surveys--meta-resources)",
      "- [Contributing](#contributing)",
      "- [License](#license)",
    ],
    howToTitle: "How to Use This List",
    howToBullets: [
      "Start with `Autonomous Research Systems` if you want loop-spanning AI scientist systems.",
      "Jump to `Research Infrastructure & Platforms` for orchestration, runtimes, sandboxes, and observability layers.",
      "Use `Workflow Modules` when you need stage-specific tools for literature, ideation, coding, experiments, analysis, or writing.",
      "Use `Benchmarks, Surveys & Meta-Resources` when you need evaluation suites, datasets, or landscape overviews.",
      "This list is curated for signal, not exhaustiveness: representative projects beat near-duplicate wrappers.",
    ],
    feedbackTitle: "Feedback & Community",
    feedbackBody:
      "Share how often you use these AI research tools, how useful they feel in real research workflows, and where they still fall short. We are collecting responses to understand actual usage patterns, identify high-value tools, and improve the curation priorities of this repository.",
    surveyLabel: "Feishu Form",
    surveyText: "AI Research Tools Usage Survey",
    tagSystemTitle: "Tag System",
    tagSystemIntro: "README entries use a compact five-tag ribbon:",
    tagSystemBody:
      "The full curation model still tracks `Scope` and `Maturity`; full definitions live in [docs/tag-system.md](./docs/tag-system.md).",
    contributingTitle: "Contributing",
    contributingBody:
      "Please read [CONTRIBUTING.md](./CONTRIBUTING.md), [docs/inclusion-criteria.md](./docs/inclusion-criteria.md), and [docs/tag-system.md](./docs/tag-system.md) before submitting new entries.",
    standardsTitle: "Recommended inclusion standards:",
    standards: [
      "The project should be clearly relevant to scientific research or AI-for-Research workflows.",
      "Prefer official project pages, official GitHub repositories, or papers over secondary summaries.",
      "Avoid adding generic AI tools unless they are widely used as research-native infrastructure or workflow components.",
      "Prefer representative systems over near-duplicate wrappers.",
    ],
    licenseTitle: "License",
  },
  zh: {
    intro:
      "Awesome-AI-Research 是一个面向 AI-for-Research 生态的策展型仓库，将自主研究系统、基础设施、工作流模块、基准、综述、数据集和元资源放进同一个分层结构中。",
    websiteLabel: "网站",
    contentsTitle: "目录",
    contents: [
      "- [如何使用这份清单](#如何使用这份清单)",
      "- [反馈与社区](#反馈与社区)",
      "- [标签系统](#标签系统)",
      "- [🧠 Autonomous Research Systems](#-autonomous-research-systems)",
      "- [🏗 Research Infrastructure & Platforms](#-research-infrastructure--platforms)",
      "- [🔬 Workflow Modules](#-workflow-modules)",
      "- [📚 Benchmarks, Surveys & Meta-Resources](#-benchmarks-surveys--meta-resources)",
      "- [参与贡献](#参与贡献)",
      "- [许可证](#许可证)",
    ],
    howToTitle: "如何使用这份清单",
    howToBullets: [
      "如果你想先看覆盖科研闭环的系统，从 `Autonomous Research Systems` 开始。",
      "如果你更关心运行时、编排、沙箱和协作层，直接看 `Research Infrastructure & Platforms`。",
      "如果你想按研究阶段找组件，就看 `Workflow Modules`。",
      "如果你要找基准、综述、数据集或其它导航型资源，就看 `Benchmarks, Surveys & Meta-Resources`。",
      "这份清单强调高信号而非穷举式收录，优先保留有代表性的项目，而不是近似重复的包装层。",
    ],
    feedbackTitle: "反馈与社区",
    feedbackBody:
      "欢迎填写你使用这些 AI 科研工具的频率、真实感受，以及它们在哪些研究环节真正有帮助、哪些地方仍然不好用。我们收集这些反馈，是为了理解真实使用模式、识别高价值工具，并据此持续优化本仓库的策展重点。",
    surveyLabel: "飞书问卷",
    surveyText: "AI 科研工具使用情况问卷",
    tagSystemTitle: "标签系统",
    tagSystemIntro: "README 可见标签采用 5 项紧凑结构：",
    tagSystemBody:
      "完整策展模型仍然包含 `Scope` 和 `Maturity`；完整定义见 [docs/tag-system.md](./docs/tag-system.md)。",
    contributingTitle: "参与贡献",
    contributingBody:
      "新增条目前，请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)、[docs/inclusion-criteria.md](./docs/inclusion-criteria.md) 和 [docs/tag-system.md](./docs/tag-system.md)。",
    standardsTitle: "推荐收录标准：",
    standards: [
      "项目应当与科学研究或 AI-for-Research 工作流有明确关联。",
      "优先收录官方项目主页、官方 GitHub 仓库或论文页，而不是二手总结。",
      "除非是被广泛用作研究基础设施或工作流模块，否则尽量避免收录泛用型 AI 工具。",
      "优先选择具有代表性的系统，而不是近似重复的包装项目。",
    ],
    licenseTitle: "许可证",
  },
};

const resourceMap = new Map(resources.map((resource) => [resource.id, resource]));

function getEntryId(entry: ReadmeEntry): string {
  return typeof entry === "string" ? entry : entry.id;
}

function getEntryOverride(entry: ReadmeEntry): ReadmeOverride | undefined {
  return typeof entry === "string" ? undefined : entry.override;
}

function assertConfigConsistency(): void {
  const missingIds = new Set<string>();
  const usedIds = new Set<string>();

  for (const layer of readmeStructure) {
    for (const section of layer.sections) {
      for (const entry of section.entries) {
        const id = getEntryId(entry);
        if (!resourceMap.has(id)) {
          missingIds.add(id);
        }
        usedIds.add(id);
      }
    }
  }

  if (missingIds.size > 0) {
    throw new Error(
      `README generator references missing resources: ${Array.from(missingIds).sort().join(", ")}`,
    );
  }

  const unusedIds = resources
    .map((resource) => resource.id)
    .filter((id) => !usedIds.has(id))
    .sort();

  if (unusedIds.length > 0) {
    throw new Error(
      `README generator leaves resources unused: ${unusedIds.join(", ")}`,
    );
  }
}

function renderLink(kind: Resource["links"][number]["kind"], url: string, language: Language): string {
  return `[${locales[language].linkKinds[kind]}](${url})`;
}

function resolveResource(resource: Resource, override?: ReadmeOverride): Resource {
  if (!override) {
    return resource;
  }

  return {
    ...resource,
    ...override,
  };
}

function renderTags(resource: Resource): string {
  return [
    `Level: ${resource.level}`,
    `Stage: ${resource.stage}`,
    `Loop: ${resource.loop}`,
    `Domain: ${resource.domain}`,
    `Openness: ${resource.openness}`,
  ]
    .map((tag) => `\`${tag}\``)
    .join(" · ");
}

function renderResource(entry: ReadmeEntry, language: Language): string {
  const id = getEntryId(entry);
  const baseResource = resourceMap.get(id);

  if (!baseResource) {
    throw new Error(`Missing resource for README entry: ${id}`);
  }

  const resource = resolveResource(baseResource, getEntryOverride(entry));
  const description = locales[language].resourceDescriptions[id] ?? baseResource.description;
  const renderedLinks = resource.links.map((link) => renderLink(link.kind, link.url, language));
  const githubRepo = getResourceGitHubRepo(baseResource);

  if (githubRepo) {
    renderedLinks.push(
      `[![GitHub stars](${getGitHubStarsBadgeUrl(githubRepo)})](${getGitHubStarsPageUrl(githubRepo)})`,
    );
  }

  return [
    `- [${baseResource.name}](${baseResource.url}) - ${description}<br>`,
    `  ${renderedLinks.join(" · ")}<br>`,
    `  ${renderTags(resource)}`,
  ].join("\n");
}

function renderLayer(layer: ReadmeLayer, language: Language): string {
  const copy = locales[language];
  const sections = layer.sections
    .map((section) =>
      [
        `### ${section.heading}`,
        "",
        section.entries.map((entry) => renderResource(entry, language)).join("\n\n"),
      ].join("\n"),
    )
    .join("\n\n");

  return [
    `## ${layer.emoji} ${layer.layer}`,
    "",
    copy.layerDescriptions[layer.layer],
    "",
    sections,
  ].join("\n");
}

function renderReadme(language: Language): string {
  const copy = readmeCopy[language];
  const locale = locales[language];
  const layers = readmeStructure.map((layer) => renderLayer(layer, language)).join("\n\n");
  const contributingList = copy.standards.map((item) => `- ${item}`).join("\n");
  const separator = language === "zh" ? "：" : ":";

  return [
    "<!--lint disable awesome-heading awesome-github awesome-license awesome-toc double-link-->",
    "<!-- markdownlint-disable MD041 -->",
    "<!-- This file is auto-generated by website/scripts/generate-readmes.ts. Do not edit by hand. -->",
    "",
    '<div align="center">',
    '  <img src="./images/logo.png" alt="Awesome-AI-Research logo" width="320">',
    "  <h1>Awesome-AI-Research</h1>",
    "  <p>",
    '    <a href="./README.md">English</a> · <a href="./README.zh-CN.md">中文</a>',
    "  </p>",
    "  <p>",
    '    <a href="https://awesome.re">',
    '      <img src="https://awesome.re/badge.svg" alt="Awesome">',
    "    </a>",
    `    <a href="${websiteUrl}">`,
    '      <img src="https://img.shields.io/badge/Website-live-2563eb.svg?style=flat-square" alt="Website">',
    "    </a>",
    '    <img src="https://img.shields.io/badge/PRs-welcome-2ea043.svg?style=flat-square" alt="PRs Welcome">',
    '    <img src="https://img.shields.io/badge/License-MIT-111827.svg?style=flat-square" alt="License: MIT">',
    "  </p>",
    `  <p><strong>${locale.hero.subtitle}</strong></p>`,
    "</div>",
    "",
    copy.intro,
    "",
    `${copy.websiteLabel}${separator} [Awesome-AI-Research](${websiteUrl})`,
    "",
    `## ${copy.contentsTitle}`,
    "",
    copy.contents.join("\n"),
    "",
    `## ${copy.howToTitle}`,
    "",
    copy.howToBullets.map((item) => `- ${item}`).join("\n"),
    "",
    `## ${copy.feedbackTitle}`,
    "",
    copy.feedbackBody,
    "",
    `${copy.surveyLabel}${separator} [${copy.surveyText}](${surveyUrl})`,
    "",
    `## ${copy.tagSystemTitle}`,
    "",
    copy.tagSystemIntro,
    "",
    "`Level` · `Stage` · `Loop` · `Domain` · `Openness`",
    "",
    copy.tagSystemBody,
    "",
    "<!--lint disable awesome-list-item-->",
    "",
    layers,
    "",
    "<!--lint enable awesome-list-item-->",
    "",
    `## ${copy.contributingTitle}`,
    "",
    copy.contributingBody,
    "",
    copy.standardsTitle,
    "",
    contributingList,
    "",
    `## ${copy.licenseTitle}`,
    "",
    "[MIT](./LICENSE)",
    "",
  ].join("\n");
}

function writeReadmes(): void {
  assertConfigConsistency();

  const repoRoot = path.resolve(__dirname, "../../..");
  const outputs: Array<{ language: Language; filename: string }> = [
    { language: "en", filename: "README.md" },
    { language: "zh", filename: "README.zh-CN.md" },
  ];

  for (const output of outputs) {
    const absolutePath = path.join(repoRoot, output.filename);
    fs.writeFileSync(absolutePath, renderReadme(output.language), "utf8");
  }
}

writeReadmes();
