import type {
  Domain,
  Layer,
  Level,
  Loop,
  Maturity,
  Openness,
  Scope,
  Stage,
} from "../data/resources";

type WorkflowStage = Exclude<Stage, "End-to-end">;

export type Copy = {
  documentTitle: string;
  switcher: {
    label: string;
    zh: string;
    en: string;
  };
  nav: {
    overview: string;
    why: string;
    layers: string;
    workflow: string;
    featured: string;
    tags: string;
    github: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    body: string;
    explore: string;
    github: string;
    diagramTitle: string;
    diagramBody: string;
  };
  why: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  layers: {
    eyebrow: string;
    title: string;
    text: string;
    stats: {
      resources: string;
      types: string;
    };
    items: Record<Layer, { title: string; body: string }>;
  };
  workflow: {
    eyebrow: string;
    title: string;
    text: string;
    helper: string;
    related: string;
    stages: Record<WorkflowStage, { title: string; note: string }>;
  };
  featured: {
    eyebrow: string;
    title: string;
    text: string;
    open: string;
  };
  tags: {
    eyebrow: string;
    title: string;
    text: string;
    exampleEyebrow: string;
    exampleTitle: string;
    exampleBody: string;
    labels: {
      level: string;
      stage: string;
      loop: string;
      scope: string;
      domain: string;
      openness: string;
      maturity: string;
    };
  };
  footer: {
    summary: string;
    contributing: string;
    license: string;
    englishReadme: string;
    chineseReadme: string;
    backToTop: string;
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
  resourceDescriptions: Record<string, string>;
};

export const en: Copy = {
  documentTitle: "Awesome-AI-Research",
  switcher: {
    label: "Language",
    zh: "中文",
    en: "EN",
  },
  nav: {
    overview: "Overview",
    why: "Why Different",
    layers: "Layers",
    workflow: "Workflow",
    featured: "Featured",
    tags: "Tags",
    github: "GitHub",
  },
  hero: {
    eyebrow: "AI-native research map",
    subtitle: "A layered map of AI-native research systems.",
    body:
      "A curated open-source view of the AI for Research ecosystem, organized by system level and workflow stage.",
    explore: "Explore",
    github: "GitHub",
    diagramTitle: "Structure at a glance",
    diagramBody: "Four layers, read through a workflow-oriented lens.",
  },
  why: {
    eyebrow: "Why this repo is different",
    title: "Structured for clarity, not for hype",
    text:
      "Awesome-AI-Research is meant to be a calm, legible map of the field rather than a flat list of links.",
    items: [
      {
        title: "Not just papers",
        body:
          "Papers appear when they serve as the canonical reference for a meaningful system, benchmark, or survey.",
      },
      {
        title: "Not just tools",
        body:
          "Resources are grouped by what they are in the stack, not by loose product-language categories.",
      },
      {
        title: "Not just AI Scientist projects",
        body:
          "The map includes infrastructure, workflow modules, and meta-resources needed to understand the full ecosystem.",
      },
      {
        title: "A layered map",
        body:
          "Every entry is positioned through both system level and research workflow stage.",
      },
    ],
  },
  layers: {
    eyebrow: "Four-layer overview",
    title: "The ecosystem is easier to read when layers stay distinct",
    text:
      "The repository separates systems, infrastructure, modules, and meta-resources so each resource is easier to place and compare.",
    stats: {
      resources: "Resources",
      types: "Typical objects",
    },
    items: {
      "Autonomous Research Systems": {
        title: "Autonomous Research Systems",
        body:
          "Integrated systems that try to close a meaningful part of the scientific loop.",
      },
      "Research Infrastructure & Platforms": {
        title: "Research Infrastructure & Platforms",
        body:
          "The runtime substrate: orchestration, execution, memory, observability, and collaboration.",
      },
      "Workflow Modules": {
        title: "Workflow Modules",
        body:
          "Stage-specific building blocks for literature, ideation, planning, coding, experiments, analysis, and writing.",
      },
      "Benchmarks, Surveys & Meta-Resources": {
        title: "Benchmarks, Surveys & Meta-Resources",
        body:
          "Evaluation, survey, dataset, and meta layers that keep the landscape legible and comparable.",
      },
    },
  },
  workflow: {
    eyebrow: "Workflow view",
    title: "A second lens: the research workflow",
    text:
      "Modules and systems can also be understood by the stage of research activity they support most directly.",
    helper:
      "Select a stage to see representative coverage from the repository.",
    related: "Representative resources",
    stages: {
      Literature: {
        title: "Literature",
        note: "Retrieval, synthesis, citation graph exploration, and related work support.",
      },
      Ideation: {
        title: "Ideation",
        note: "Hypothesis generation, novelty search, and research gap discovery.",
      },
      Planning: {
        title: "Planning",
        note: "Protocol design, ablations, and evaluation planning.",
      },
      Data: {
        title: "Data",
        note: "Scientific tool use, runtimes, data preparation, and execution environments.",
      },
      Coding: {
        title: "Coding",
        note: "Research coding agents, implementation workflows, and repo-level engineering.",
      },
      Experiment: {
        title: "Experiment",
        note: "Closed-loop experimentation, optimization, and trial scheduling.",
      },
      Analysis: {
        title: "Analysis",
        note: "Benchmarking, result interpretation, error analysis, and observability.",
      },
      Writing: {
        title: "Writing",
        note: "Drafting, figures, reviewer response, and research communication.",
      },
    },
  },
  featured: {
    eyebrow: "Featured resources",
    title: "A small set of representative entries",
    text:
      "Featured resources span the four layers and show how the map covers systems, infrastructure, modules, and meta-resources together.",
    open: "Open resource",
  },
  tags: {
    eyebrow: "Tag system",
    title: "A compact schema for comparison",
    text:
      "Every entry uses the same tag dimensions so mixed objects remain comparable across layers and workflow stages.",
    exampleEyebrow: "Example",
    exampleTitle: "Consistent tags make heterogeneous resources legible",
    exampleBody:
      "A system, a benchmark, and a survey can still be compared when they share a common structure.",
    labels: {
      level: "Level",
      stage: "Stage",
      loop: "Loop",
      scope: "Scope",
      domain: "Domain",
      openness: "Openness",
      maturity: "Maturity",
    },
  },
  footer: {
    summary:
      "A bilingual, structured, long-term-maintainable map of the AI-native research ecosystem.",
    contributing: "Contributing",
    license: "License",
    englishReadme: "English README",
    chineseReadme: "中文 README",
    backToTop: "Back to top",
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
  resourceDescriptions: {
    "ai-co-scientist":
      "Multi-agent scientific collaborator for proposing, debating, ranking, and refining hypotheses with human oversight.",
    "the-ai-scientist":
      "Open-source end-to-end system that turns a seed codebase into ideas, experiments, figures, reviews, and a draft paper.",
    coscientist:
      "Chemistry agent that plans syntheses, searches documentation, controls instruments, and iterates through experimental workflows.",
    futurehouse:
      "Research-native platform focused on automating scientific discovery with agentic systems and domain-aware tooling.",
    paperqa2:
      "Literature QA and evidence-synthesis stack optimized for scientific documents and citation-grounded answers.",
    storm:
      "Grounded long-form report generation system with citation-backed outlining and drafting.",
    paperbench:
      "Benchmark for whether agents can reproduce frontier AI research workflows from understanding claims to running experiments.",
    ai4research:
      "Living survey site mapping AI for scientific research across domains, tasks, and papers.",
  },
};

export type Language = "en" | "zh";
