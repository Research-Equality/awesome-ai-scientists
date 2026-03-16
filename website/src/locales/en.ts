import type {
  Domain,
  Layer,
  Level,
  Loop,
  Maturity,
  Openness,
  ResourceLinkKind,
  Scope,
  Stage,
} from "../data/resources";

export type Copy = {
  documentTitle: string;
  switcher: {
    zh: string;
    en: string;
  };
  header: {
    github: string;
    englishReadme: string;
    chineseReadme: string;
  };
  hero: {
    subtitle: string;
    purpose: string;
    github: string;
  };
  sections: {
    content: string;
  };
  filters: {
    search: string;
    searchPlaceholder: string;
    level: string;
    stage: string;
    domain: string;
    openness: string;
    all: string;
    results: string;
  };
  labels: {
    level: string;
    stage: string;
    loop: string;
    scope: string;
    domain: string;
    openness: string;
    maturity: string;
    link: string;
  };
  linkKinds: Record<ResourceLinkKind, string>;
  footer: {
    summary: string;
  };
  names: {
    layers: Record<Layer, string>;
    levels: Record<Level, string>;
    stages: Record<Stage, string>;
    loops: Record<Loop, string>;
    scopes: Record<Scope, string>;
    domains: Record<Domain, string>;
    openness: Record<Openness, string>;
    maturity: Record<Maturity, string>;
  };
  layerDescriptions: Record<Layer, string>;
  subgroupNames: Record<string, string>;
  resourceDescriptions: Record<string, string>;
};

export const en: Copy = {
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
    subtitle: "A curated, layered map of AI-native research systems.",
    purpose:
      "Awesome-AI-Research organizes the AI for Research ecosystem by system level and research workflow stage, so systems, platforms, modules, benchmarks, surveys, and datasets can be read in one structure.",
    github: "View on GitHub",
  },
  sections: {
    content: "Repository Content",
  },
  filters: {
    search: "Search",
    searchPlaceholder: "Search by name or description",
    level: "Level",
    stage: "Stage",
    domain: "Domain",
    openness: "Openness",
    all: "All",
    results: "results",
  },
  labels: {
    level: "Level",
    stage: "Stage",
    loop: "Loop",
    scope: "Scope",
    domain: "Domain",
    openness: "Openness",
    maturity: "Maturity",
    link: "Link",
  },
  linkKinds: {
    homepage: "Homepage",
    code: "Code",
    paper: "Paper",
    docs: "Docs",
    video: "Video",
    slides: "Slides",
  },
  footer: {
    summary: "Minimal bilingual catalog for the Awesome-AI-Research repository.",
  },
  names: {
    layers: {
      "Autonomous Research Systems": "Autonomous Research Systems",
      "Research Infrastructure & Platforms":
        "Research Infrastructure & Platforms",
      "Workflow Modules": "Workflow Modules",
      "Benchmarks, Surveys & Meta-Resources":
        "Benchmarks, Surveys & Meta-Resources",
    },
    levels: {
      System: "System",
      Platform: "Platform",
      Module: "Module",
      Benchmark: "Benchmark",
      Survey: "Survey",
      Dataset: "Dataset",
      Meta: "Meta",
    },
    stages: {
      Literature: "Literature",
      Ideation: "Ideation",
      Planning: "Planning",
      Data: "Data",
      Coding: "Coding",
      Experiment: "Experiment",
      Analysis: "Analysis",
      Writing: "Writing",
      "End-to-end": "End-to-end",
    },
    loops: {
      "Open-loop": "Open-loop",
      "Human-in-the-loop": "Human-in-the-loop",
      "Closed-loop": "Closed-loop",
    },
    scopes: {
      General: "General",
      "Domain-specific": "Domain-specific",
    },
    domains: {
      General: "General",
      Biology: "Biology",
      Chemistry: "Chemistry",
      Materials: "Materials",
      Physics: "Physics",
      Medicine: "Medicine",
      CS: "CS",
      Math: "Math",
      "Multi-domain": "Multi-domain",
    },
    openness: {
      "Open-source": "Open-source",
      "Partially Open": "Partially Open",
      "Closed-source": "Closed-source",
      "Paper-only": "Paper-only",
    },
    maturity: {
      "Research Prototype": "Research Prototype",
      "Active Project": "Active Project",
      "Production-like": "Production-like",
      Archived: "Archived",
    },
  },
  layerDescriptions: {
    "Autonomous Research Systems":
      "Systems that attempt to cover meaningful parts of the scientific loop, from ideation to execution, analysis, or writing.",
    "Research Infrastructure & Platforms":
      "The runtime substrate for AI-native research: orchestration, execution, memory, observability, and collaboration.",
    "Workflow Modules":
      "Stage-specific building blocks for literature review, ideation, planning, coding, experimentation, analysis, and writing.",
    "Benchmarks, Surveys & Meta-Resources":
      "Benchmarks, surveys, datasets, and other reference layers that keep the ecosystem legible and comparable.",
  },
  subgroupNames: {
    "Agent Runtimes for Research": "Agent Runtimes for Research",
    "Benchmarks & Evaluation Suites": "Benchmarks & Evaluation Suites",
    "Closed-Loop Discovery Systems": "Closed-Loop Discovery Systems",
    "Data, Environment & Tool Use": "Data, Environment & Tool Use",
    Datasets: "Datasets",
    "Domain-Specific Autonomous Discovery Systems":
      "Domain-Specific Autonomous Discovery Systems",
    "End-to-End AI Scientist Systems": "End-to-End AI Scientist Systems",
    "Experiment Execution & Optimization":
      "Experiment Execution & Optimization",
    "Literature Discovery & Review": "Literature Discovery & Review",
    "Memory / Observability / Collaboration Layers":
      "Memory / Observability / Collaboration Layers",
    "Other Awesome Lists": "Other Awesome Lists",
    "Research Ideation & Hypothesis Generation":
      "Research Ideation & Hypothesis Generation",
    "Research Platforms": "Research Platforms",
    "Research Workflow Orchestration": "Research Workflow Orchestration",
    "Self-Improving / Self-Evolving Research Systems":
      "Self-Improving / Self-Evolving Research Systems",
    "Surveys & Taxonomies": "Surveys & Taxonomies",
    "Tool-Use & Execution Infrastructure":
      "Tool-Use & Execution Infrastructure",
    "Writing, Publication & Communication":
      "Writing, Publication & Communication",
  },
  resourceDescriptions: {
    "ai-co-scientist":
      "Google Research's multi-agent scientific collaborator for proposing, debating, ranking, and refining hypotheses with human oversight.",
    "the-ai-scientist":
      "Open-source end-to-end system that turns a seed codebase into ideas, experiments, figures, reviews, and a draft paper.",
    coscientist:
      "Chemistry agent that plans syntheses, searches documentation, controls instruments, and iterates through experimental workflows.",
    piflow:
      "Principle-aware multi-agent framework for iterative scientific discovery across nanomaterials, biomolecules, and superconductors.",
    "the-ai-scientist-v2":
      "Agentic-tree-search successor designed for workshop-level automated scientific discovery and higher-quality research trajectories.",
    chemcrow:
      "Tool-augmented chemistry agent that combines LLM reasoning with scientific software for synthesis and discovery tasks.",
    futurehouse:
      "Research-native platform focused on automating scientific discovery with agentic systems and domain-aware tooling.",
    researchclaw:
      "Local-first AI research assistant for literature discovery, notes, experiment tracking, and paper writing across the scientific workflow.",
    autogen:
      "Multi-agent programming framework widely used to build research copilots, literature agents, and evaluation pipelines.",
    langgraph:
      "Stateful graph runtime for long-running agent workflows with branching, memory, recovery, and explicit control flow.",
    openhands:
      "Agent runtime for repo-level coding, execution, and issue-driven engineering that adapts well to research coding workflows.",
    agentscope:
      "Agent-oriented programming framework for composing multi-agent workflows with explicit roles, collaboration patterns, and tool integration.",
    e2b:
      "Sandboxed execution layer for code, browser, and desktop-style tool use inside AI-driven research workflows.",
    wandb:
      "Experiment tracking and collaboration layer for instrumenting long-running research agents, ablations, and benchmark runs.",
    elicit:
      "AI research assistant for literature search, evidence extraction, and structured review workflows.",
    paperqa2:
      "Open-source literature QA and evidence-synthesis stack optimized for scientific documents and citation-grounded answers.",
    "research-rabbit":
      "Visual citation-graph exploration tool for expanding seed papers into neighborhoods of related work.",
    consensus:
      "Scientific search engine geared toward claim-grounded answers, useful for scoping evidence and framing candidate hypotheses.",
    geneagent:
      "Domain-database agent for gene set analysis that shows how scientific tool use can be grounded in external biomedical resources.",
    optuna:
      "Open-source optimization framework for trial scheduling, hyperparameter search, and controlled experiment iteration.",
    storm:
      "Open-source system for grounded long-form report generation with citation-backed outlining and drafting.",
    "overleaf-ai":
      "AI-assisted writing and editing features inside a collaborative LaTeX environment used heavily in academic publication workflows.",
    paperbench:
      "Benchmark that evaluates whether agents can reproduce frontier AI research workflows from understanding claims to running experiments.",
    "frontiers-in-science":
      "Benchmark suite for evaluating scientific reasoning across olympiad-style and research-style tasks.",
    sciencebench:
      "Autonomous laboratory benchmark for end-to-end scientific operation and discovery with minimal human oversight.",
    ai4research:
      "Living survey site mapping AI for scientific research across domains, tasks, and papers.",
    "survey-ai-scientists":
      "Survey focused on automatic scientists and end-to-end AI research pipelines.",
    openalex:
      "Open index of works, authors, venues, institutions, and concepts that underpins many research-native retrieval systems.",
    "semantic-scholar-api":
      "Structured paper metadata and graph endpoints for retrieval, paper linking, and citation analysis.",
    "awesome-research":
      "Curated collection organized around research workflow tasks, useful as a complementary module-first view.",
    "awesome-ai-scientists":
      "Curated list centered on AI Scientist systems, complementary to this repository's broader layered-map perspective.",
  },
};

export type Language = "en" | "zh";
