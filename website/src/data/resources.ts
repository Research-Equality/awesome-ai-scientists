export type Level =
  | "System"
  | "Platform"
  | "Module"
  | "Benchmark"
  | "Survey"
  | "Dataset"
  | "Meta";

export type Stage =
  | "Literature"
  | "Ideation"
  | "Planning"
  | "Data"
  | "Coding"
  | "Experiment"
  | "Analysis"
  | "Writing"
  | "End-to-end";

export type Loop = "Open-loop" | "Human-in-the-loop" | "Closed-loop";
export type Scope = "General" | "Domain-specific";
export type Domain =
  | "General"
  | "Biology"
  | "Chemistry"
  | "Materials"
  | "Physics"
  | "Medicine"
  | "CS"
  | "Math"
  | "Multi-domain";
export type Openness =
  | "Open-source"
  | "Partially Open"
  | "Closed-source"
  | "Paper-only";
export type Maturity =
  | "Research Prototype"
  | "Active Project"
  | "Production-like"
  | "Archived";
export type Layer =
  | "Autonomous Research Systems"
  | "Research Infrastructure & Platforms"
  | "Workflow Modules"
  | "Benchmarks, Surveys & Meta-Resources";

export type ResourceLinkKind =
  | "homepage"
  | "code"
  | "paper"
  | "docs"
  | "video"
  | "slides";

export type ResourceLink = {
  kind: ResourceLinkKind;
  url: string;
};

export type Resource = {
  id: string;
  name: string;
  url: string;
  links: ResourceLink[];
  description: string;
  level: Level;
  stage: Stage;
  loop: Loop;
  scope: Scope;
  domain: Domain;
  openness: Openness;
  maturity: Maturity;
  layer: Layer;
  subgroup: string;
  featured?: boolean;
};

const githubRepoPattern = /^https?:\/\/github\.com\/([^/]+\/[^/#?]+?)(?:\.git)?(?:[/?#].*)?$/i;

export function getGitHubRepoFromUrl(url: string): string | null {
  const match = url.match(githubRepoPattern);
  return match ? match[1] : null;
}

export function getResourceGitHubRepo(resource: Resource): string | null {
  const candidateUrls = [resource.url, ...resource.links.map((link) => link.url)];

  for (const url of candidateUrls) {
    const repo = getGitHubRepoFromUrl(url);
    if (repo) {
      return repo;
    }
  }

  return null;
}

export function getGitHubStarsBadgeUrl(repo: string): string {
  return `https://img.shields.io/github/stars/${repo}?style=flat-square&label=stars`;
}

export function getGitHubStarsPageUrl(repo: string): string {
  return `https://github.com/${repo}/stargazers`;
}

export const resources: Resource[] = [
  {
    id: "ai-co-scientist",
    name: "AI co-scientist",
    url: "https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist",
    links: [
      {
        kind: "homepage",
        url: "https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist",
      },
      {
        kind: "paper",
        url: "https://arxiv.org/abs/2502.18864",
      },
    ],
    description:
      "Google Research's multi-agent scientific collaborator for proposing, debating, ranking, and refining hypotheses with human oversight.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Paper-only",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
    featured: true,
  },
  {
    id: "the-ai-scientist",
    name: "The AI Scientist",
    url: "https://github.com/SakanaAI/AI-Scientist",
    links: [
      { kind: "code", url: "https://github.com/SakanaAI/AI-Scientist" },
      { kind: "paper", url: "https://arxiv.org/abs/2408.06292" },
    ],
    description:
      "Open-source end-to-end system that turns a seed codebase into ideas, experiments, figures, reviews, and a draft paper.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
    featured: true,
  },
  {
    id: "ai-researcher",
    name: "AI-Researcher",
    url: "https://github.com/HKUDS/AI-Researcher",
    links: [
      { kind: "code", url: "https://github.com/HKUDS/AI-Researcher" },
      { kind: "paper", url: "https://arxiv.org/abs/2505.18705" },
    ],
    description:
      "Open-source autonomous research system for end-to-end scientific innovation, covering idea generation, implementation, experimentation, and paper writing.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "autoresearchclaw",
    name: "AutoResearchClaw",
    url: "https://github.com/aiming-lab/AutoResearchClaw",
    links: [
      { kind: "code", url: "https://github.com/aiming-lab/AutoResearchClaw" },
      { kind: "docs", url: "https://github.com/aiming-lab/AutoResearchClaw#readme" },
    ],
    description:
      "Fully autonomous research pipeline that turns a single research idea into literature-grounded experiments, analysis, and a conference-ready paper with OpenClaw-compatible execution.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "nanoresearch",
    name: "NanoResearch",
    url: "https://github.com/OpenRaiser/NanoResearch",
    links: [
      { kind: "code", url: "https://github.com/OpenRaiser/NanoResearch" },
      { kind: "docs", url: "https://github.com/OpenRaiser/NanoResearch#readme" },
    ],
    description:
      "End-to-end autonomous research engine that turns a topic into planned experiments, executed jobs, grounded analysis, and paper drafts backed by real run outputs.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "agent-laboratory",
    name: "Agent Laboratory",
    url: "https://github.com/SamuelSchmidgall/AgentLaboratory",
    links: [
      { kind: "code", url: "https://github.com/SamuelSchmidgall/AgentLaboratory" },
      { kind: "paper", url: "https://arxiv.org/abs/2501.04227" },
      { kind: "homepage", url: "https://agentlaboratory.github.io/" },
    ],
    description:
      "End-to-end autonomous research workflow with specialized agents for literature review, experimentation, and report writing, with optional co-pilot mode and AgentRxiv support.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "mlr-copilot",
    name: "MLR-Copilot",
    url: "https://github.com/du-nlp-lab/MLR-Copilot",
    links: [
      { kind: "code", url: "https://github.com/du-nlp-lab/MLR-Copilot" },
      { kind: "paper", url: "https://arxiv.org/abs/2408.14033" },
    ],
    description:
      "Autonomous machine learning research framework that generates research ideas, implements experiments, and executes them with iterative debugging and human feedback.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "robin",
    name: "Robin",
    url: "https://github.com/Future-House/robin",
    links: [{ kind: "code", url: "https://github.com/Future-House/robin" }],
    description:
      "Multi-agent system from FutureHouse for automating scientific discovery, including candidate generation, assay planning, and optional experimental data analysis.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Biology",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "coscientist",
    name: "Coscientist",
    url: "https://www.nature.com/articles/s41586-023-06792-0",
    links: [
      { kind: "paper", url: "https://www.nature.com/articles/s41586-023-06792-0" },
    ],
    description:
      "Chemistry agent that plans syntheses, searches documentation, controls instruments, and iterates through experimental workflows.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "Domain-specific",
    domain: "Chemistry",
    openness: "Paper-only",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "Closed-Loop Discovery Systems",
    featured: true,
  },
  {
    id: "piflow",
    name: "PiFlow",
    url: "https://github.com/amair-lab/PiFlow",
    links: [
      { kind: "code", url: "https://github.com/amair-lab/PiFlow" },
      { kind: "paper", url: "https://arxiv.org/abs/2505.15047" },
    ],
    description:
      "Principle-aware multi-agent framework for iterative scientific discovery across nanomaterials, biomolecules, and superconductors.",
    level: "System",
    stage: "Experiment",
    loop: "Closed-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "Closed-Loop Discovery Systems",
  },
  {
    id: "the-ai-scientist-v2",
    name: "The AI Scientist-v2",
    url: "https://github.com/SakanaAI/AI-Scientist-v2",
    links: [
      { kind: "code", url: "https://github.com/SakanaAI/AI-Scientist-v2" },
      { kind: "paper", url: "https://arxiv.org/abs/2504.08066" },
    ],
    description:
      "Agentic-tree-search successor designed for workshop-level automated scientific discovery and higher-quality research trajectories.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "Self-Improving / Self-Evolving Research Systems",
  },
  {
    id: "evoscientist",
    name: "EvoScientist",
    url: "https://github.com/EvoScientist/EvoScientist",
    links: [
      { kind: "code", url: "https://github.com/EvoScientist/EvoScientist" },
      { kind: "docs", url: "https://github.com/EvoScientist/EvoScientist#readme" },
    ],
    description:
      "Self-evolving AI scientist framework for end-to-end scientific discovery with iterative improvement and human oversight.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "Self-Improving / Self-Evolving Research Systems",
  },
  {
    id: "scientify",
    name: "Scientify",
    url: "https://github.com/tsingyuai/scientify",
    links: [
      { kind: "code", url: "https://github.com/tsingyuai/scientify" },
      { kind: "docs", url: "https://github.com/tsingyuai/scientify#readme" },
    ],
    description:
      "AI-native scientific research system built around OpenClaw for automated literature review, experimentation, writing, and iterative research workflows.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "Self-Improving / Self-Evolving Research Systems",
  },
  {
    id: "chemcrow",
    name: "ChemCrow",
    url: "https://github.com/ur-whitelab/chemcrow-public",
    links: [
      { kind: "code", url: "https://github.com/ur-whitelab/chemcrow-public" },
      { kind: "paper", url: "https://arxiv.org/abs/2304.05376" },
    ],
    description:
      "Tool-augmented chemistry agent that combines LLM reasoning with scientific software for synthesis and discovery tasks.",
    level: "System",
    stage: "Planning",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Chemistry",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "Domain-Specific Autonomous Discovery Systems",
  },
  {
    id: "biomni",
    name: "Biomni",
    url: "https://github.com/snap-stanford/Biomni",
    links: [{ kind: "code", url: "https://github.com/snap-stanford/Biomni" }],
    description:
      "General-purpose biomedical AI agent designed to autonomously execute a wide range of research tasks across biomedical subfields.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Biology",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "Domain-Specific Autonomous Discovery Systems",
  },
  {
    id: "futurehouse",
    name: "FutureHouse",
    url: "https://www.futurehouse.org/",
    links: [{ kind: "homepage", url: "https://www.futurehouse.org/" }],
    description:
      "Research-native platform focused on automating scientific discovery with agentic systems and domain-aware tooling.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Platforms",
    featured: true,
  },
  {
    id: "research-claw",
    name: "Research-Claw",
    url: "https://github.com/wentorai/Research-Claw",
    links: [
      { kind: "code", url: "https://github.com/wentorai/Research-Claw" },
      {
        kind: "docs",
        url: "https://github.com/wentorai/Research-Claw/blob/main/docs/00-reference-map.md",
      },
    ],
    description:
      "Local-first academic research workspace with a dashboard, literature management, writing, experiment workflows, and OpenClaw-based extensions for always-on research assistance.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Partially Open",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Platforms",
  },
  {
    id: "researchclaw",
    name: "ResearchClaw",
    url: "https://github.com/ymx10086/ResearchClaw",
    links: [
      { kind: "code", url: "https://github.com/ymx10086/ResearchClaw" },
      { kind: "docs", url: "https://github.com/ymx10086/ResearchClaw#readme" },
    ],
    description:
      "Local-first AI research assistant for literature discovery, notes, experiment tracking, and paper writing across the scientific workflow.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Platforms",
  },
  {
    id: "autogen",
    name: "AutoGen",
    url: "https://github.com/microsoft/autogen",
    links: [{ kind: "code", url: "https://github.com/microsoft/autogen" }],
    description:
      "Multi-agent programming framework widely used to build research copilots, literature agents, and evaluation pipelines.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Agent Runtimes for Research",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    url: "https://docs.langchain.com/oss/python/langgraph",
    links: [
      { kind: "docs", url: "https://docs.langchain.com/oss/python/langgraph" },
      { kind: "code", url: "https://github.com/langchain-ai/langgraph" },
    ],
    description:
      "Stateful graph runtime for long-running agent workflows with branching, memory, recovery, and explicit control flow.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Production-like",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Agent Runtimes for Research",
  },
  {
    id: "ldp",
    name: "LDP",
    url: "https://github.com/Future-House/ldp",
    links: [{ kind: "code", url: "https://github.com/Future-House/ldp" }],
    description:
      "Framework for modular interchange of language agents, environments, and optimizers.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Agent Runtimes for Research",
  },
  {
    id: "openhands",
    name: "OpenHands",
    url: "https://github.com/All-Hands-AI/OpenHands",
    links: [
      { kind: "code", url: "https://github.com/All-Hands-AI/OpenHands" },
      { kind: "docs", url: "https://docs.all-hands.dev/" },
    ],
    description:
      "Agent runtime for repo-level coding, execution, and issue-driven engineering that adapts well to research coding workflows.",
    level: "Platform",
    stage: "Coding",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Partially Open",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Agent Runtimes for Research",
  },
  {
    id: "agentscope",
    name: "AgentScope",
    url: "https://github.com/agentscope-ai/agentscope",
    links: [{ kind: "code", url: "https://github.com/agentscope-ai/agentscope" }],
    description:
      "Agent-oriented programming framework for composing multi-agent workflows with explicit roles, collaboration patterns, and tool integration.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Workflow Orchestration",
  },
  {
    id: "aris",
    name: "ARIS: Auto-claude-code-research-in-sleep",
    url: "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep",
    links: [
      { kind: "code", url: "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep" },
      { kind: "docs", url: "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep#readme" },
    ],
    description:
      "Lightweight Markdown-only research workflow kit for idea discovery, cross-model review loops, experiment automation, and paper writing across Claude Code, Codex, OpenClaw, and similar agents.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Workflow Orchestration",
  },
  {
    id: "e2b",
    name: "E2B",
    url: "https://e2b.dev/",
    links: [
      { kind: "homepage", url: "https://e2b.dev/" },
      { kind: "docs", url: "https://e2b.dev/docs" },
      { kind: "code", url: "https://github.com/e2b-dev/E2B" },
    ],
    description:
      "Sandboxed execution layer for code, browser, and desktop-style tool use inside AI-driven research workflows.",
    level: "Platform",
    stage: "Data",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Partially Open",
    maturity: "Production-like",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Tool-Use & Execution Infrastructure",
  },
  {
    id: "aviary",
    name: "Aviary",
    url: "https://github.com/Future-House/aviary",
    links: [{ kind: "code", url: "https://github.com/Future-House/aviary" }],
    description:
      "Language-agent gym with built-in scientific task environments, including scientific literature search and protein stability.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Evaluation & Training Environments",
  },
  {
    id: "wandb",
    name: "Weights & Biases",
    url: "https://wandb.ai/",
    links: [
      { kind: "homepage", url: "https://wandb.ai/" },
      { kind: "docs", url: "https://docs.wandb.ai/" },
    ],
    description:
      "Experiment tracking and collaboration layer for instrumenting long-running research agents, ablations, and benchmark runs.",
    level: "Platform",
    stage: "Analysis",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Partially Open",
    maturity: "Production-like",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Memory / Observability / Collaboration Layers",
  },
  {
    id: "elicit",
    name: "Elicit",
    url: "https://elicit.com/",
    links: [{ kind: "homepage", url: "https://elicit.com/" }],
    description:
      "AI research assistant for literature search, evidence extraction, and structured review workflows.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "paperqa2",
    name: "PaperQA2",
    url: "https://github.com/Future-House/paper-qa",
    links: [
      { kind: "code", url: "https://github.com/Future-House/paper-qa" },
      { kind: "paper", url: "https://arxiv.org/abs/2409.13740" },
    ],
    description:
      "Open-source literature QA and evidence-synthesis stack optimized for scientific documents and citation-grounded answers.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
    featured: true,
  },
  {
    id: "lattereview",
    name: "LatteReview",
    url: "https://github.com/PouriaRouzrokh/LatteReview",
    links: [
      { kind: "code", url: "https://github.com/PouriaRouzrokh/LatteReview" },
      { kind: "paper", url: "https://arxiv.org/abs/2501.05468" },
      { kind: "docs", url: "https://pouriarouzrokh.github.io/LatteReview/" },
    ],
    description:
      "Multi-agent literature review framework for title and abstract screening, evidence abstraction, multimodal review, and customizable reviewer workflows.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "litllm",
    name: "LitLLM",
    url: "https://github.com/LitLLM/LitLLM",
    links: [
      { kind: "code", url: "https://github.com/LitLLM/LitLLM" },
      { kind: "paper", url: "https://arxiv.org/abs/2412.15249" },
      { kind: "homepage", url: "https://litllm.onrender.com" },
    ],
    description:
      "AI-powered literature review assistant that combines hybrid retrieval, re-ranking, and structured generation for related-work drafting.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "research-rabbit",
    name: "ResearchRabbit",
    url: "https://www.researchrabbit.ai/",
    links: [{ kind: "homepage", url: "https://www.researchrabbit.ai/" }],
    description:
      "Visual citation-graph exploration tool for expanding seed papers into neighborhoods of related work.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "litmaps",
    name: "Litmaps",
    url: "https://www.litmaps.com/",
    links: [{ kind: "homepage", url: "https://www.litmaps.com/" }],
    description:
      "Literature discovery and monitoring tool built around citation-network exploration, visualization, and alerts.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "connected-papers",
    name: "Connected Papers",
    url: "https://www.connectedpapers.com/",
    links: [{ kind: "homepage", url: "https://www.connectedpapers.com/" }],
    description:
      "Visual paper exploration tool for finding related academic work around a seed paper.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "scite",
    name: "Scite",
    url: "https://scite.ai/",
    links: [{ kind: "homepage", url: "https://scite.ai/" }],
    description:
      "Research discovery and evaluation platform centered on Smart Citations, showing whether studies support, contrast, or mention prior work.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "scispace-literature-review",
    name: "SciSpace Literature Review",
    url: "https://scispace.com/search",
    links: [{ kind: "homepage", url: "https://scispace.com/" }],
    description:
      "AI literature review workspace for finding, analyzing, organizing, and comparing scientific papers.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "consensus",
    name: "Consensus",
    url: "https://consensus.app/",
    links: [{ kind: "homepage", url: "https://consensus.app/" }],
    description:
      "Scientific search engine geared toward claim-grounded answers, useful for scoping evidence and framing candidate hypotheses.",
    level: "Module",
    stage: "Ideation",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Research Ideation & Hypothesis Generation",
  },
  {
    id: "researchagent",
    name: "ResearchAgent",
    url: "https://github.com/JinheonBaek/ResearchAgent",
    links: [
      { kind: "code", url: "https://github.com/JinheonBaek/ResearchAgent" },
      { kind: "paper", url: "https://arxiv.org/abs/2404.07738" },
    ],
    description:
      "Iterative research idea generation system that retrieves scientific literature and refines candidate problems, methods, and experiment designs with LLM reviewer feedback.",
    level: "Module",
    stage: "Ideation",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Workflow Modules",
    subgroup: "Research Ideation & Hypothesis Generation",
  },
  {
    id: "geneagent",
    name: "GeneAgent",
    url: "https://github.com/ncbi-nlp/GeneAgent",
    links: [{ kind: "code", url: "https://github.com/ncbi-nlp/GeneAgent" }],
    description:
      "Domain-database agent for gene set analysis that shows how scientific tool use can be grounded in external biomedical resources.",
    level: "Module",
    stage: "Data",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Biology",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Workflow Modules",
    subgroup: "Data, Environment & Tool Use",
  },
  {
    id: "optuna",
    name: "Optuna",
    url: "https://optuna.org/",
    links: [
      { kind: "homepage", url: "https://optuna.org/" },
      { kind: "code", url: "https://github.com/optuna/optuna" },
    ],
    description:
      "Open-source optimization framework for trial scheduling, hyperparameter search, and controlled experiment iteration.",
    level: "Module",
    stage: "Experiment",
    loop: "Open-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Experiment Execution & Optimization",
  },
  {
    id: "storm",
    name: "STORM",
    url: "https://github.com/stanford-oval/storm",
    links: [{ kind: "code", url: "https://github.com/stanford-oval/storm" }],
    description:
      "Open-source system for grounded long-form report generation with citation-backed outlining and drafting.",
    level: "Module",
    stage: "Writing",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Workflow Modules",
    subgroup: "Writing, Publication & Communication",
    featured: true,
  },
  {
    id: "overleaf-ai",
    name: "Overleaf AI",
    url: "https://www.overleaf.com/about/ai-features",
    links: [{ kind: "homepage", url: "https://www.overleaf.com/about/ai-features" }],
    description:
      "AI-assisted writing and editing features inside a collaborative LaTeX environment used heavily in academic publication workflows.",
    level: "Module",
    stage: "Writing",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Closed-source",
    maturity: "Production-like",
    layer: "Workflow Modules",
    subgroup: "Writing, Publication & Communication",
  },
  {
    id: "paperbench",
    name: "PaperBench",
    url: "https://openai.com/index/paperbench/",
    links: [{ kind: "homepage", url: "https://openai.com/index/paperbench/" }],
    description:
      "Benchmark that evaluates whether agents can reproduce frontier AI research workflows from understanding claims to running experiments.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Partially Open",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
    featured: true,
  },
  {
    id: "frontiers-in-science",
    name: "Frontiers in Science",
    url: "https://openai.com/index/frontierscience/",
    links: [{ kind: "homepage", url: "https://openai.com/index/frontierscience/" }],
    description:
      "Benchmark suite for evaluating scientific reasoning across olympiad-style and research-style tasks.",
    level: "Benchmark",
    stage: "Analysis",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Partially Open",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "sciencebench",
    name: "ScienceBench",
    url: "https://sciencebench.com/",
    links: [{ kind: "homepage", url: "https://sciencebench.com/" }],
    description:
      "Autonomous laboratory benchmark for end-to-end scientific operation and discovery with minimal human oversight.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Partially Open",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "airs-bench",
    name: "AIRS-Bench",
    url: "https://github.com/facebookresearch/airs-bench",
    links: [{ kind: "code", url: "https://github.com/facebookresearch/airs-bench" }],
    description:
      "Benchmark for quantifying the end-to-end AI research abilities of LLM agents on machine learning tasks drawn from recent papers.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "mlagentbench",
    name: "MLAgentBench",
    url: "https://github.com/snap-stanford/MLAgentBench",
    links: [{ kind: "code", url: "https://github.com/snap-stanford/MLAgentBench" }],
    description:
      "Suite of end-to-end machine learning experimentation tasks where agents autonomously develop and improve models from dataset and task descriptions.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "mle-bench",
    name: "MLE-bench",
    url: "https://github.com/openai/mle-bench",
    links: [{ kind: "code", url: "https://github.com/openai/mle-bench" }],
    description:
      "Benchmark for machine learning engineering agents, including task construction, evaluation logic, and reference agent implementations.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "mlr-bench",
    name: "MLR-Bench",
    url: "https://github.com/chchenhui/mlrbench",
    links: [{ kind: "code", url: "https://github.com/chchenhui/mlrbench" }],
    description:
      "Benchmark for open-ended machine learning research with 201 tasks, together with agent and judge baselines for evaluation.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "lab-bench",
    name: "LAB-Bench",
    url: "https://github.com/Future-House/LAB-Bench",
    links: [{ kind: "code", url: "https://github.com/Future-House/LAB-Bench" }],
    description:
      "Biology benchmark for capabilities foundational to scientific research in biology.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Open-loop",
    scope: "Domain-specific",
    domain: "Biology",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "ai4research",
    name: "AI4Research",
    url: "https://ai-4-research.github.io/",
    links: [{ kind: "homepage", url: "https://ai-4-research.github.io/" }],
    description:
      "Living survey site mapping AI for scientific research across domains, tasks, and papers.",
    level: "Survey",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Partially Open",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Surveys & Taxonomies",
    featured: true,
  },
  {
    id: "ai-for-research",
    name: "AI-for-Research",
    url: "https://github.com/zkzhou126/AI-for-Research",
    links: [
      { kind: "code", url: "https://github.com/zkzhou126/AI-for-Research" },
      { kind: "paper", url: "https://arxiv.org/abs/2503.01424" },
    ],
    description:
      "Repository accompanying a survey on AI support across the research lifecycle from hypothesis generation to publication.",
    level: "Survey",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Surveys & Taxonomies",
  },
  {
    id: "survey-ai-scientists",
    name: "A Survey of AI Scientists",
    url: "https://arxiv.org/abs/2510.23045",
    links: [{ kind: "paper", url: "https://arxiv.org/abs/2510.23045" }],
    description:
      "Survey focused on automatic scientists and end-to-end AI research pipelines.",
    level: "Survey",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Paper-only",
    maturity: "Research Prototype",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Surveys & Taxonomies",
  },
  {
    id: "openalex",
    name: "OpenAlex",
    url: "https://openalex.org/",
    links: [
      { kind: "homepage", url: "https://openalex.org/" },
      { kind: "docs", url: "https://docs.openalex.org/" },
    ],
    description:
      "Open index of works, authors, venues, institutions, and concepts that underpins many research-native retrieval systems.",
    level: "Dataset",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Partially Open",
    maturity: "Production-like",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Datasets",
  },
  {
    id: "semantic-scholar-api",
    name: "Semantic Scholar Academic Graph API",
    url: "https://www.semanticscholar.org/product/api",
    links: [{ kind: "docs", url: "https://www.semanticscholar.org/product/api" }],
    description:
      "Structured paper metadata and graph endpoints for retrieval, paper linking, and citation analysis.",
    level: "Dataset",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Partially Open",
    maturity: "Production-like",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Datasets",
  },
  {
    id: "awesome-research",
    name: "awesome-research",
    url: "https://github.com/emptymalei/awesome-research",
    links: [{ kind: "code", url: "https://github.com/emptymalei/awesome-research" }],
    description:
      "Curated collection organized around research workflow tasks, useful as a complementary module-first view.",
    level: "Meta",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Other Awesome Lists",
  },
  {
    id: "awesome-papers-on-agents-for-science",
    name: "Awesome Papers on Agents for Science",
    url: "https://github.com/OSU-NLP-Group/awesome-agents4science",
    links: [
      {
        kind: "code",
        url: "https://github.com/OSU-NLP-Group/awesome-agents4science",
      },
    ],
    description:
      "Curated bibliography of agents-for-science papers across domains, task types, and benchmarks.",
    level: "Meta",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Other Awesome Lists",
  },
  {
    id: "awesome-ai-scientists",
    name: "Awesome-AI-Scientists",
    url: "https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists",
    links: [
      {
        kind: "code",
        url: "https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists",
      },
    ],
    description:
      "Curated list centered on AI Scientist systems, complementary to this repository's broader layered-map perspective.",
    level: "Meta",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Other Awesome Lists",
  },
  {
    id: "autoresearch-sibylsystem",
    name: "AutoResearch-SibylSystem",
    url: "https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem",
    links: [
      { kind: "code", url: "https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem" },
      { kind: "docs", url: "https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem#readme" },
    ],
    description:
      "Fully autonomous AI scientist with 20+ agents and a dual-loop architecture for end-to-end ML research, GPU experiment execution, paper writing, and cross-project self-evolution.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "Self-Improving / Self-Evolving Research Systems",
  },
  {
    id: "hyperspace-agi",
    name: "AGI",
    url: "https://github.com/hyperspaceai/agi",
    links: [{ kind: "code", url: "https://github.com/hyperspaceai/agi" }],
    description:
      "Distributed peer-to-peer research network where autonomous agents run experiments, share results, synthesize papers, and compound discoveries across shared leaderboards.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "General",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Autonomous Research Systems",
    subgroup: "Self-Improving / Self-Evolving Research Systems",
  },
  {
    id: "openags-auto-research",
    name: "Auto-Research",
    url: "https://github.com/openags/Auto-Research",
    links: [{ kind: "code", url: "https://github.com/openags/Auto-Research" }],
    description:
      "Prototype autonomous generalist scientist framework spanning literature review, proposal generation, experimentation, writing, submission, and review workflows.",
    level: "System",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "End-to-End AI Scientist Systems",
  },
  {
    id: "ml-agent",
    name: "ML-Agent",
    url: "https://github.com/MASWorks/ML-Agent",
    links: [
      { kind: "code", url: "https://github.com/MASWorks/ML-Agent" },
      { kind: "paper", url: "https://arxiv.org/abs/2505.23723" },
    ],
    description:
      "7B reinforcement-trained agent for end-to-end machine learning engineering that learns from interactive experimentation on MLAgentBench and MLE-bench tasks.",
    level: "System",
    stage: "End-to-end",
    loop: "Closed-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Partially Open",
    maturity: "Research Prototype",
    layer: "Autonomous Research Systems",
    subgroup: "Domain-Specific Autonomous Discovery Systems",
  },
  {
    id: "agentrxiv",
    name: "AgentRxiv",
    url: "https://agentrxiv.github.io/",
    links: [
      { kind: "homepage", url: "https://agentrxiv.github.io/" },
      { kind: "paper", url: "https://arxiv.org/abs/2503.18102" },
    ],
    description:
      "Collaborative autonomous research framework and preprint layer where agent laboratories can publish, retrieve, and build on each other's findings.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Paper-only",
    maturity: "Research Prototype",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Platforms",
  },
  {
    id: "clawteam",
    name: "ClawTeam",
    url: "https://github.com/HKUDS/ClawTeam",
    links: [{ kind: "code", url: "https://github.com/HKUDS/ClawTeam" }],
    description:
      "Swarm-intelligence orchestration layer where leader agents spawn specialized workers across worktrees, tmux sessions, and GPUs for autonomous research and engineering workflows.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Agent Runtimes for Research",
  },
  {
    id: "ai-research-skills",
    name: "AI Research Skills Library",
    url: "https://github.com/Orchestra-Research/AI-Research-SKILLs",
    links: [{ kind: "code", url: "https://github.com/Orchestra-Research/AI-Research-SKILLs" }],
    description:
      "Open-source skills library plus autoresearch orchestration layer that gives coding agents reusable research skills spanning literature survey, experimentation, and paper writing.",
    level: "Platform",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Research Infrastructure & Platforms",
    subgroup: "Research Workflow Orchestration",
  },
  {
    id: "autoresearcher",
    name: "AutoResearcher",
    url: "https://github.com/eimenhmdt/autoresearcher",
    links: [
      { kind: "code", url: "https://github.com/eimenhmdt/autoresearcher" },
      { kind: "docs", url: "https://eimenhmdt.github.io/autoresearcher/" },
    ],
    description:
      "Early-stage open-source Python package for automating scientific workflows, currently focused on literature reviews with a longer-term goal of autonomous discovery.",
    level: "Module",
    stage: "Literature",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Research Prototype",
    layer: "Workflow Modules",
    subgroup: "Literature Discovery & Review",
  },
  {
    id: "aideml",
    name: "AIDE ML",
    url: "https://github.com/WecoAI/aideml",
    links: [
      { kind: "code", url: "https://github.com/WecoAI/aideml" },
      { kind: "paper", url: "https://arxiv.org/abs/2502.13138" },
    ],
    description:
      "Tree-search machine learning engineering agent that iteratively drafts, debugs, benchmarks, and improves code against a target metric.",
    level: "Module",
    stage: "Experiment",
    loop: "Closed-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Workflow Modules",
    subgroup: "Experiment Execution & Optimization",
  },
  {
    id: "ml-bench",
    name: "ML-Bench",
    url: "https://github.com/gersteinlab/ML-Bench",
    links: [
      { kind: "code", url: "https://github.com/gersteinlab/ML-Bench" },
      { kind: "paper", url: "https://arxiv.org/abs/2311.09835" },
    ],
    description:
      "Benchmark for large language models and agents on end-to-end machine learning workflows over repository-level code, including ML-LLM-Bench and ML-Agent-Bench tracks.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "Domain-specific",
    domain: "CS",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "agentbench",
    name: "AgentBench",
    url: "https://github.com/THUDM/AgentBench",
    links: [
      { kind: "code", url: "https://github.com/THUDM/AgentBench" },
      { kind: "paper", url: "https://arxiv.org/abs/2308.03688" },
    ],
    description:
      "General benchmark for evaluating LLMs as agents across diverse interactive environments such as operating systems, databases, web tasks, and knowledge graphs.",
    level: "Benchmark",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Benchmarks & Evaluation Suites",
  },
  {
    id: "awesome-deep-research-agent",
    name: "Awesome Deep Research Agent",
    url: "https://github.com/ai-agents-2030/awesome-deep-research-agent",
    links: [
      { kind: "code", url: "https://github.com/ai-agents-2030/awesome-deep-research-agent" },
      { kind: "paper", url: "https://arxiv.org/abs/2506.18096" },
    ],
    description:
      "Curated map of deep research agent papers, architectures, tool-use methods, and benchmarks, anchored by a dedicated survey and roadmap.",
    level: "Survey",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Surveys & Taxonomies",
  },
  {
    id: "llm-agent-optimization",
    name: "LLM-Agent-Optimization",
    url: "https://github.com/YoungDubbyDu/LLM-Agent-Optimization",
    links: [{ kind: "code", url: "https://github.com/YoungDubbyDu/LLM-Agent-Optimization" }],
    description:
      "Reading list for a survey on optimizing LLM-based agents, covering fine-tuning, reflection, tool use, datasets, and real-world applications.",
    level: "Survey",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "General",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Surveys & Taxonomies",
  },
  {
    id: "awesome-llm-scientific-discovery",
    name: "Awesome LLM Scientific Discovery",
    url: "https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery",
    links: [
      {
        kind: "code",
        url: "https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery",
      },
      { kind: "paper", url: "https://arxiv.org/abs/2505.13259" },
    ],
    description:
      "Curated list and taxonomy for LLMs in scientific discovery, organized by autonomy level from tool to analyst to scientist.",
    level: "Survey",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Surveys & Taxonomies",
  },
  {
    id: "awesome-ai-scientist-papers",
    name: "Awesome AI Scientist Papers",
    url: "https://github.com/openags/Awesome-AI-Scientist-Papers",
    links: [{ kind: "code", url: "https://github.com/openags/Awesome-AI-Scientist-Papers" }],
    description:
      "Curated bibliography of AI Scientist and Robot Scientist papers, surveys, benchmarks, timelines, and community resources.",
    level: "Meta",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Other Awesome Lists",
  },
  {
    id: "awesome-autoresearch",
    name: "Awesome AutoResearch",
    url: "https://github.com/WecoAI/awesome-autoresearch",
    links: [{ kind: "code", url: "https://github.com/WecoAI/awesome-autoresearch" }],
    description:
      "Curated list of autoresearch use cases, implementations, and optimization traces for keep-or-revert research loops across domains.",
    level: "Meta",
    stage: "End-to-end",
    loop: "Human-in-the-loop",
    scope: "General",
    domain: "Multi-domain",
    openness: "Open-source",
    maturity: "Active Project",
    layer: "Benchmarks, Surveys & Meta-Resources",
    subgroup: "Other Awesome Lists",
  },
];

export const layerNotes = [
  {
    emoji: "🧠",
    title: "Autonomous Research Systems",
    body: "Integrated systems that try to close a meaningful part of the scientific loop, from ideation through experimentation, analysis, or writing.",
  },
  {
    emoji: "🏗",
    title: "Research Infrastructure & Platforms",
    body: "The runtime substrate: orchestration, execution sandboxes, memory, observability, collaboration, and long-running agent control.",
  },
  {
    emoji: "🔬",
    title: "Workflow Modules",
    body: "Stage-specific building blocks for literature review, hypothesis generation, planning, coding, experiments, analysis, and publication.",
  },
  {
    emoji: "📚",
    title: "Benchmarks, Surveys & Meta-Resources",
    body: "The evaluation, dataset, survey, and meta layer that keeps the ecosystem legible, comparable, and easier to extend.",
  },
] as const;

export const workflowNotes: Array<{ stage: Stage; note: string }> = [
  { stage: "Literature", note: "retrieval, synthesis, citation graph, related work" },
  { stage: "Ideation", note: "novelty search, hypothesis generation, gap mining" },
  { stage: "Planning", note: "protocol design, ablations, evaluation setup" },
  { stage: "Data", note: "tool use, data prep, runtimes, scientific execution" },
  { stage: "Coding", note: "research coding agents, prototype implementation" },
  { stage: "Experiment", note: "auto-experiment, optimization, trial scheduling" },
  { stage: "Analysis", note: "benchmarking, interpretation, error analysis" },
  { stage: "Writing", note: "paper drafting, figures, reviewer response" },
  { stage: "End-to-end", note: "resources whose core claim is loop-spanning coverage" },
];

export const inspirations = [
  {
    name: "sindresorhus/awesome",
    url: "https://github.com/sindresorhus/awesome",
    note: "Clear curation norms, ruthless signal-to-noise ratio, and authority through simplicity.",
  },
  {
    name: "matiassingers/awesome-readme",
    url: "https://github.com/matiassingers/awesome-readme",
    note: "Strong README-first presentation patterns that reward scanning.",
  },
  {
    name: "awesome-research",
    url: "https://github.com/emptymalei/awesome-research",
    note: "Workflow-centric organization for research activities rather than raw project type.",
  },
  {
    name: "Awesome-AI-Scientists",
    url: "https://github.com/tsinghua-fib-lab/Awesome-AI-Scientists",
    note: "Breadth in AI Scientist coverage and a useful baseline for ecosystem scope.",
  },
] as const;

export const pagesSetupSteps = [
  {
    title: "Open repository settings",
    body: "Go to GitHub → your repository → Settings. You need admin or maintainer permissions to configure Pages.",
  },
  {
    title: "Set Pages source to GitHub Actions",
    body: "Open Settings → Pages, then under Build and deployment set Source to GitHub Actions.",
  },
  {
    title: "Keep the workflow on the default branch",
    body: "This repository deploys through .github/workflows/deploy-website.yml on pushes to main and on manual runs.",
  },
  {
    title: "Wait for Deploy Website to succeed",
    body: "After you push to main, the Deploy Website workflow builds website/ and publishes the static artifact to GitHub Pages.",
  },
  {
    title: "Open the project site URL",
    body: "For this repository the expected project Pages URL is https://research-equality.github.io/Awesome-AI-Research/.",
  },
] as const;

export const pagesQuickChecks = [
  "Settings → Pages → Source is GitHub Actions.",
  "Actions is enabled for the repository.",
  "The default branch is main.",
  "The Deploy Website workflow is green on the latest main commit.",
  "If you add a custom domain later, update the site URL and metadata.",
] as const;
