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
  survey: {
    title: string;
    description: string;
    cta: string;
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
  survey: {
    title: "Usage Survey",
    description:
      "Share how often you use these AI research tools, how useful they feel in real research workflows, and where they still fall short. The responses will help us understand actual usage patterns, identify high-value tools, and improve the curation priorities of this repository.",
    cta: "Fill in the survey",
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
    "Evaluation & Training Environments": "Evaluation & Training Environments",
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
    "ai-researcher":
      "Open-source autonomous research system for end-to-end scientific innovation, covering idea generation, implementation, experimentation, and paper writing.",
    autoresearchclaw:
      "Fully autonomous research pipeline that turns a single research idea into literature-grounded experiments, analysis, and a conference-ready paper with OpenClaw-compatible execution.",
    nanoresearch:
      "End-to-end autonomous research engine that turns a topic into planned experiments, executed jobs, grounded analysis, and paper drafts backed by real run outputs.",
    "agent-laboratory":
      "End-to-end autonomous research workflow with specialized agents for literature review, experimentation, and report writing, with optional co-pilot mode and AgentRxiv support.",
    "mlr-copilot":
      "Autonomous machine learning research framework that generates research ideas, implements experiments, and executes them with iterative debugging and human feedback.",
    robin:
      "Multi-agent system from FutureHouse for automating scientific discovery, including candidate generation, assay planning, and optional experimental data analysis.",
    coscientist:
      "Chemistry agent that plans syntheses, searches documentation, controls instruments, and iterates through experimental workflows.",
    piflow:
      "Principle-aware multi-agent framework for iterative scientific discovery across nanomaterials, biomolecules, and superconductors.",
    "the-ai-scientist-v2":
      "Agentic-tree-search successor designed for workshop-level automated scientific discovery and higher-quality research trajectories.",
    evoscientist:
      "Self-evolving AI scientist framework for end-to-end scientific discovery with iterative improvement and human oversight.",
    scientify:
      "AI-native scientific research system built around OpenClaw for automated literature review, experimentation, writing, and iterative research workflows.",
    chemcrow:
      "Tool-augmented chemistry agent that combines LLM reasoning with scientific software for synthesis and discovery tasks.",
    biomni:
      "General-purpose biomedical AI agent designed to autonomously execute a wide range of research tasks across biomedical subfields.",
    futurehouse:
      "Research-native platform focused on automating scientific discovery with agentic systems and domain-aware tooling.",
    "research-claw":
      "Local-first academic research workspace with a dashboard, literature management, writing, experiment workflows, and OpenClaw-based extensions for always-on research assistance.",
    researchclaw:
      "Local-first AI research assistant for literature discovery, notes, experiment tracking, and paper writing across the scientific workflow.",
    autogen:
      "Multi-agent programming framework widely used to build research copilots, literature agents, and evaluation pipelines.",
    langgraph:
      "Stateful graph runtime for long-running agent workflows with branching, memory, recovery, and explicit control flow.",
    ldp: "Framework for modular interchange of language agents, environments, and optimizers.",
    openhands:
      "Agent runtime for repo-level coding, execution, and issue-driven engineering that adapts well to research coding workflows.",
    agentscope:
      "Agent-oriented programming framework for composing multi-agent workflows with explicit roles, collaboration patterns, and tool integration.",
    aris:
      "Lightweight Markdown-only research workflow kit for idea discovery, cross-model review loops, experiment automation, and paper writing across Claude Code, Codex, OpenClaw, and similar agents.",
    e2b:
      "Sandboxed execution layer for code, browser, and desktop-style tool use inside AI-driven research workflows.",
    aviary:
      "Language-agent gym with built-in scientific task environments, including scientific literature search and protein stability.",
    wandb:
      "Experiment tracking and collaboration layer for instrumenting long-running research agents, ablations, and benchmark runs.",
    elicit:
      "AI research assistant for literature search, evidence extraction, and structured review workflows.",
    paperqa2:
      "Open-source literature QA and evidence-synthesis stack optimized for scientific documents and citation-grounded answers.",
    lattereview:
      "Multi-agent literature review framework for title and abstract screening, evidence abstraction, multimodal review, and customizable reviewer workflows.",
    litllm:
      "AI-powered literature review assistant that combines hybrid retrieval, re-ranking, and structured generation for related-work drafting.",
    "research-rabbit":
      "Visual citation-graph exploration tool for expanding seed papers into neighborhoods of related work.",
    litmaps:
      "Literature discovery and monitoring tool built around citation-network exploration, visualization, and alerts.",
    "connected-papers":
      "Visual paper exploration tool for finding related academic work around a seed paper.",
    scite:
      "Research discovery and evaluation platform centered on Smart Citations, showing whether studies support, contrast, or mention prior work.",
    "scispace-literature-review":
      "AI literature review workspace for finding, analyzing, organizing, and comparing scientific papers.",
    consensus:
      "Scientific search engine geared toward claim-grounded answers, useful for scoping evidence and framing candidate hypotheses.",
    researchagent:
      "Iterative research idea generation system that retrieves scientific literature and refines candidate problems, methods, and experiment designs with LLM reviewer feedback.",
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
    "airs-bench":
      "Benchmark for quantifying the end-to-end AI research abilities of LLM agents on machine learning tasks drawn from recent papers.",
    mlagentbench:
      "Suite of end-to-end machine learning experimentation tasks where agents autonomously develop and improve models from dataset and task descriptions.",
    "mle-bench":
      "Benchmark for machine learning engineering agents, including task construction, evaluation logic, and reference agent implementations.",
    "mlr-bench":
      "Benchmark for open-ended machine learning research with 201 tasks, together with agent and judge baselines for evaluation.",
    "lab-bench":
      "Biology benchmark for capabilities foundational to scientific research in biology.",
    ai4research:
      "Living survey site mapping AI for scientific research across domains, tasks, and papers.",
    "ai-for-research":
      "Repository accompanying a survey on AI support across the research lifecycle from hypothesis generation to publication.",
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
    "awesome-papers-on-agents-for-science":
      "Curated bibliography of agents-for-science papers across domains, task types, and benchmarks.",
    "autoresearch-sibylsystem":
      "Fully autonomous AI scientist with 20+ agents and a dual-loop architecture for end-to-end ML research, GPU experiment execution, paper writing, and cross-project self-evolution.",
    "hyperspace-agi":
      "Distributed peer-to-peer research network where autonomous agents run experiments, share results, synthesize papers, and compound discoveries across shared leaderboards.",
    "openags-auto-research":
      "Prototype autonomous generalist scientist framework spanning literature review, proposal generation, experimentation, writing, submission, and review workflows.",
    "ml-agent":
      "7B reinforcement-trained agent for end-to-end machine learning engineering that learns from interactive experimentation on MLAgentBench and MLE-bench tasks.",
    agentrxiv:
      "Collaborative autonomous research framework and preprint layer where agent laboratories can publish, retrieve, and build on each other's findings.",
    clawteam:
      "Swarm-intelligence orchestration layer where leader agents spawn specialized workers across worktrees, tmux sessions, and GPUs for autonomous research and engineering workflows.",
    "ai-research-skills":
      "Open-source skills library plus autoresearch orchestration layer that gives coding agents reusable research skills spanning literature survey, experimentation, and paper writing.",
    autoresearcher:
      "Early-stage open-source Python package for automating scientific workflows, currently focused on literature reviews with a longer-term goal of autonomous discovery.",
    aideml:
      "Tree-search machine learning engineering agent that iteratively drafts, debugs, benchmarks, and improves code against a target metric.",
    "ml-bench":
      "Benchmark for large language models and agents on end-to-end machine learning workflows over repository-level code, including ML-LLM-Bench and ML-Agent-Bench tracks.",
    agentbench:
      "General benchmark for evaluating LLMs as agents across diverse interactive environments such as operating systems, databases, web tasks, and knowledge graphs.",
    "awesome-deep-research-agent":
      "Curated map of deep research agent papers, architectures, tool-use methods, and benchmarks, anchored by a dedicated survey and roadmap.",
    "llm-agent-optimization":
      "Reading list for a survey on optimizing LLM-based agents, covering fine-tuning, reflection, tool use, datasets, and real-world applications.",
    "awesome-llm-scientific-discovery":
      "Curated list and taxonomy for LLMs in scientific discovery, organized by autonomy level from tool to analyst to scientist.",
    "awesome-ai-scientist-papers":
      "Curated bibliography of AI Scientist and Robot Scientist papers, surveys, benchmarks, timelines, and community resources.",
    "awesome-autoresearch":
      "Curated list of autoresearch use cases, implementations, and optimization traces for keep-or-revert research loops across domains.",
  },
};

export type Language = "en" | "zh";
