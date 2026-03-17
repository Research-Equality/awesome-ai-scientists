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
        url: "https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf",
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
    id: "e2b",
    name: "E2B",
    url: "https://e2b.dev/",
    links: [
      { kind: "homepage", url: "https://e2b.dev/" },
      { kind: "docs", url: "https://e2b.dev/docs" },
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
    links: [{ kind: "paper", url: "https://openai.com/index/paperbench/" }],
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
