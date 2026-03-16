import {
  startTransition,
  useEffect,
  useState,
  type CSSProperties,
} from "react";
import {
  layerNotes,
  resources,
  workflowNotes,
  type Layer,
  type Stage,
} from "./data/resources";

const repositoryUrl = "https://github.com/Research-Equality/Awesome-AI-Research";

const navigation = [
  { id: "hero", label: "Overview" },
  { id: "difference", label: "Why Different" },
  { id: "layers", label: "Layers" },
  { id: "workflow", label: "Workflow" },
  { id: "featured", label: "Featured" },
  { id: "tags", label: "Tags" },
  { id: "browse", label: "Browse" },
] as const;

const differenceCards = [
  {
    title: "Not just papers",
    body: "Papers only appear when they are the canonical reference for a meaningful system, benchmark, or survey.",
  },
  {
    title: "Not just tools",
    body: "Each resource is placed by its role in the stack, not by vague product-language categories.",
  },
  {
    title: "Not just AI Scientist projects",
    body: "The map includes the platforms, workflow modules, and meta-resources that make the ecosystem understandable.",
  },
  {
    title: "A layered map",
    body: "The project combines system level and workflow stage into one research-native view of the field.",
  },
] as const;

const layerMarks: Record<Layer, string> = {
  "Autonomous Research Systems": "01",
  "Research Infrastructure & Platforms": "02",
  "Workflow Modules": "03",
  "Benchmarks, Surveys & Meta-Resources": "04",
};

const layerReadmeAnchors: Record<Layer, string> = {
  "Autonomous Research Systems": "#-autonomous-research-systems",
  "Research Infrastructure & Platforms": "#-research-infrastructure--platforms",
  "Workflow Modules": "#-workflow-modules",
  "Benchmarks, Surveys & Meta-Resources": "#-benchmarks-surveys--meta-resources",
};

const layerDescriptions: Record<Layer, string> = {
  "Autonomous Research Systems":
    "Integrated research systems that attempt to span substantial parts of the scientific loop.",
  "Research Infrastructure & Platforms":
    "The runtime substrate for agentic research: orchestration, execution, memory, observability, and collaboration.",
  "Workflow Modules":
    "Stage-specific building blocks that plug into literature review, ideation, planning, coding, experiment, analysis, or writing.",
  "Benchmarks, Surveys & Meta-Resources":
    "The evaluation and context layer that keeps the ecosystem measurable, comparable, and easier to navigate.",
};

const tagDimensions = [
  {
    name: "Level",
    values: ["System", "Platform", "Module", "Benchmark", "Survey", "Dataset", "Meta"],
  },
  {
    name: "Stage",
    values: [
      "Literature",
      "Ideation",
      "Planning",
      "Data",
      "Coding",
      "Experiment",
      "Analysis",
      "Writing",
      "End-to-end",
    ],
  },
  {
    name: "Loop",
    values: ["Open-loop", "Human-in-the-loop", "Closed-loop"],
  },
  {
    name: "Scope",
    values: ["General", "Domain-specific"],
  },
  {
    name: "Domain",
    values: ["General", "Biology", "Chemistry", "Materials", "Physics", "Medicine", "CS", "Math", "Multi-domain"],
  },
  {
    name: "Openness",
    values: ["Open-source", "Partially Open", "Closed-source", "Paper-only"],
  },
  {
    name: "Maturity",
    values: ["Research Prototype", "Active Project", "Production-like", "Archived"],
  },
] as const;

const workflowModules = workflowNotes.filter(
  (item): item is (typeof workflowNotes)[number] & { stage: Exclude<Stage, "End-to-end"> } =>
    item.stage !== "End-to-end",
);

const featuredResources = resources.filter((resource) => resource.featured).slice(0, 8);
const layerTitles = layerNotes.map((layer) => layer.title as Layer);

function App() {
  const [activeSection, setActiveSection] =
    useState<(typeof navigation)[number]["id"]>("hero");
  const [selectedLayer, setSelectedLayer] = useState<Layer>(layerTitles[0]);
  const [selectedStage, setSelectedStage] = useState<Exclude<Stage, "End-to-end">>(
    workflowModules[0].stage,
  );
  const [featuredLayer, setFeaturedLayer] = useState<Layer | "All">("All");
  const [selectedResourceId, setSelectedResourceId] = useState<string>(
    featuredResources[0]?.id ?? resources[0]?.id ?? "",
  );
  const [showBackToTop, setShowBackToTop] = useState(false);

  const featuredItems =
    featuredLayer === "All"
      ? featuredResources
      : featuredResources.filter((resource) => resource.layer === featuredLayer);

  useEffect(() => {
    if (featuredItems.some((resource) => resource.id === selectedResourceId)) {
      return;
    }

    if (featuredItems[0]) {
      setSelectedResourceId(featuredItems[0].id);
    }
  }, [featuredItems, selectedResourceId]);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealElements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
      revealObserver.observe(element);
    });

    const sectionElements = navigation
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id as (typeof navigation)[number]["id"]);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -52% 0px",
      },
    );

    sectionElements.forEach((element) => sectionObserver.observe(element));

    const onScroll = () => {
      setShowBackToTop(window.scrollY > 540);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const selectedLayerResources = resources.filter(
    (resource) => resource.layer === selectedLayer,
  );

  const selectedLayerExamples = selectedLayerResources.slice(0, 4);
  const selectedLayerStages = Array.from(
    new Set(selectedLayerResources.map((resource) => resource.stage)),
  ).slice(0, 6);
  const selectedLayerLevels = Array.from(
    new Set(selectedLayerResources.map((resource) => resource.level)),
  );

  const selectedStageMeta = workflowModules.find(
    (item) => item.stage === selectedStage,
  ) ?? workflowModules[0];

  const selectedStageResources = resources
    .filter((resource) => resource.stage === selectedStage)
    .slice(0, 4);

  const selectedFeaturedResource =
    featuredItems.find((resource) => resource.id === selectedResourceId) ??
    featuredItems[0] ??
    featuredResources[0];

  const sampleTagResource =
    featuredResources.find((resource) => resource.id === "the-ai-scientist") ??
    selectedFeaturedResource;

  const browseCategories = layerTitles.map((title) => {
    const items = resources.filter((resource) => resource.layer === title);

    return {
      title,
      count: items.length,
      description: layerDescriptions[title],
      sample: items[0],
    };
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleLayerFocus = (layer: Layer) => {
    startTransition(() => {
      setSelectedLayer(layer);
    });
  };

  const handleStageFocus = (stage: Exclude<Stage, "End-to-end">) => {
    startTransition(() => {
      setSelectedStage(stage);
    });
  };

  const handleBrowseCategory = (layer: Layer) => {
    startTransition(() => {
      setSelectedLayer(layer);
      setFeaturedLayer(layer);
    });

    scrollToSection("featured");
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="site-shell">
      <div className="site-noise" />
      <div className="site-grid" />

      <header className="site-nav">
        <div className="site-nav-inner">
          <a className="brand" href="#hero" onClick={(event) => {
            event.preventDefault();
            handleTop();
          }}>
            <span className="brand-mark">AIR</span>
            <span className="brand-copy">
              <strong>Awesome-AI-Research</strong>
              <small>Layered ecosystem map</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="nav-github"
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="hero scroll-target" id="hero">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">AI-native research systems</p>
            <h1>Awesome-AI-Research</h1>
            <p className="hero-subtitle">一个面向 AI 原生科研系统的分层生态地图</p>
            <p className="hero-body">
              Not a paper dump, not a flat tool directory, and not a narrow AI
              Scientist roundup. This project maps the AI-for-Research ecosystem
              through two axes at once: <strong>system level</strong> and{" "}
              <strong>research workflow stage</strong>.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() => scrollToSection("layers")}
              >
                Explore the Map
              </button>
              <a
                className="button button-secondary"
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>

            <div className="hero-metrics">
              <MetricCard value={resources.length} label="Curated entries" />
              <MetricCard value={layerTitles.length} label="Core layers" />
              <MetricCard value={workflowModules.length} label="Workflow stages" />
              <MetricCard
                value={resources.filter((resource) => resource.openness === "Open-source").length}
                label="Open-source references"
              />
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-map">
              <div className="hero-map-header">
                <span className="map-chip">Layered map</span>
                <p>
                  Systems, platforms, workflow modules, and meta-resources read
                  as one research-native stack.
                </p>
              </div>

              <div className="hero-stack">
                {layerTitles.map((layer, index) => {
                  const examples = resources
                    .filter((resource) => resource.layer === layer)
                    .slice(0, 2);

                  return (
                    <article
                      key={layer}
                      className={`stack-card stack-card-${index + 1}`}
                    >
                      <div className="stack-card-header">
                        <span>{layerMarks[layer]}</span>
                        <strong>{layer}</strong>
                      </div>
                      <div className="stack-card-pills">
                        {examples.map((resource) => (
                          <span key={resource.id}>{resource.name}</span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="hero-flow-rail">
                <span className="rail-label">Workflow</span>
                <div className="rail-stages">
                  {workflowModules.map((item) => (
                    <span key={item.stage}>{item.stage}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section scroll-target" id="difference">
          <SectionIntro
            eyebrow="Why this repo is different"
            title="Built like an ecosystem map, not a generic awesome list"
            text="The project is intentionally opinionated. It uses structure and tags to make AI for Research easier to understand at a glance."
          />

          <div className="difference-grid">
            {differenceCards.map((card) => (
              <article className="difference-card" key={card.title} data-reveal>
                <span className="difference-index" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section scroll-target" id="layers">
          <SectionIntro
            eyebrow="Layered ecosystem"
            title="Four layers, arranged like a research-native stack"
            text="The website treats the ecosystem as a layered knowledge map: higher-level autonomous systems sit on top of infrastructure, reusable workflow modules, and the benchmark-survey-meta layer beneath them."
          />

          <div className="layer-overview">
            <div className="layer-rail" data-reveal>
              {layerTitles.map((layer) => {
                const isSelected = layer === selectedLayer;
                const count = resources.filter((resource) => resource.layer === layer).length;

                return (
                  <button
                    key={layer}
                    className={isSelected ? "layer-button is-selected" : "layer-button"}
                    type="button"
                    onClick={() => handleLayerFocus(layer)}
                  >
                    <div className="layer-button-mark">{layerMarks[layer]}</div>
                    <div className="layer-button-copy">
                      <strong>{layer}</strong>
                      <span>{count} resources</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <article className="layer-detail" data-reveal>
              <div className="layer-detail-top">
                <div>
                  <p className="eyebrow eyebrow-tight">Focused layer</p>
                  <h3>{selectedLayer}</h3>
                </div>
                <a
                  className="subtle-link"
                  href={`${repositoryUrl}/blob/main/README.md${layerReadmeAnchors[selectedLayer]}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open README section
                </a>
              </div>

              <p className="layer-detail-body">{layerDescriptions[selectedLayer]}</p>

              <div className="layer-detail-grid">
                <div className="layer-detail-panel">
                  <span className="detail-label">Typical objects</span>
                  <div className="chip-cloud">
                    {selectedLayerLevels.map((level) => (
                      <span className="soft-chip" key={level}>
                        {level}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="layer-detail-panel">
                  <span className="detail-label">Common stages</span>
                  <div className="chip-cloud">
                    {selectedLayerStages.map((stage) => (
                      <span className="soft-chip" key={stage}>
                        {stage}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="layer-examples">
                {selectedLayerExamples.map((resource) => (
                  <div className="example-row" key={resource.id}>
                    <strong>{resource.name}</strong>
                    <span>{resource.description}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section scroll-target" id="workflow">
          <SectionIntro
            eyebrow="Workflow modules"
            title="A research workflow ribbon instead of a flat module list"
            text="Workflow modules are shown as part of a process map. Hover lifts each node; clicking focuses the stage and reveals representative resources below."
          />

          <div className="workflow-shell" data-reveal>
            <div className="workflow-track" aria-label="Research workflow stages">
              {workflowModules.map((item, index) => {
                const isSelected = item.stage === selectedStage;
                const style = {
                  "--stage-index": `${index}`,
                } as CSSProperties;

                return (
                  <button
                    key={item.stage}
                    className={isSelected ? "workflow-node is-selected" : "workflow-node"}
                    type="button"
                    style={style}
                    title={item.note}
                    onClick={() => handleStageFocus(item.stage)}
                  >
                    <span className="workflow-node-index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.stage}</strong>
                    <small>{item.note}</small>
                  </button>
                );
              })}
            </div>

            <article className="workflow-detail">
              <div className="workflow-detail-top">
                <div>
                  <p className="eyebrow eyebrow-tight">Selected stage</p>
                  <h3>{selectedStageMeta.stage}</h3>
                </div>
                <button
                  className="button button-ghost"
                  type="button"
                  onClick={() => {
                    setFeaturedLayer("Workflow Modules");
                    scrollToSection("featured");
                  }}
                >
                  Browse related resources
                </button>
              </div>

              <p className="workflow-detail-body">{selectedStageMeta.note}</p>

              <div className="workflow-detail-list">
                {selectedStageResources.map((resource) => (
                  <button
                    className="workflow-reference"
                    type="button"
                    key={resource.id}
                    onClick={() => {
                      setFeaturedLayer(resource.layer);
                      setSelectedResourceId(resource.id);
                      scrollToSection("featured");
                    }}
                  >
                    <span>{resource.name}</span>
                    <small>{resource.layer}</small>
                  </button>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section scroll-target" id="featured">
          <SectionIntro
            eyebrow="Featured resources"
            title="A curated sample that reveals the map's breadth"
            text="These entries are distributed across layers so the first scan already communicates scope: autonomous systems, infrastructure, modules, and meta-resources."
          />

          <div className="featured-toolbar" data-reveal>
            <div className="filter-pills">
              {(["All", ...layerTitles] as const).map((item) => (
                <button
                  key={item}
                  className={featuredLayer === item ? "filter-pill is-selected" : "filter-pill"}
                  type="button"
                  onClick={() => startTransition(() => setFeaturedLayer(item))}
                >
                  {item === "All" ? "All layers" : item}
                </button>
              ))}
            </div>
          </div>

          <div className="featured-layout">
            <div className="featured-grid">
              {featuredItems.map((resource) => (
                <article
                  className={
                    resource.id === selectedResourceId
                      ? "featured-card is-selected"
                      : "featured-card"
                  }
                  key={resource.id}
                  data-reveal
                >
                  <div className="featured-card-top">
                    <span className="featured-kicker">{resource.layer}</span>
                    <span className="featured-kicker muted">{resource.level}</span>
                  </div>
                  <h3>{resource.name}</h3>
                  <p>{resource.description}</p>
                  <div className="tag-ribbon">
                    <span>{`Stage: ${resource.stage}`}</span>
                    <span>{`Loop: ${resource.loop}`}</span>
                    <span>{`Domain: ${resource.domain}`}</span>
                  </div>
                  <div className="featured-actions">
                    <button
                      className="button button-ghost"
                      type="button"
                      onClick={() => setSelectedResourceId(resource.id)}
                    >
                      View details
                    </button>
                    <a href={resource.url} target="_blank" rel="noreferrer">
                      Open reference
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {selectedFeaturedResource ? (
              <aside className="resource-spotlight" data-reveal>
                <p className="eyebrow eyebrow-tight">Spotlight</p>
                <h3>{selectedFeaturedResource.name}</h3>
                <p className="spotlight-body">{selectedFeaturedResource.description}</p>

                <div className="spotlight-grid">
                  <Metadata label="Level" value={selectedFeaturedResource.level} />
                  <Metadata label="Stage" value={selectedFeaturedResource.stage} />
                  <Metadata label="Loop" value={selectedFeaturedResource.loop} />
                  <Metadata label="Domain" value={selectedFeaturedResource.domain} />
                </div>

                <div className="spotlight-copy">
                  <span className="detail-label">Why it belongs here</span>
                  <p>
                    This resource helps define the map through its role as a{" "}
                    <strong>{selectedFeaturedResource.level.toLowerCase()}</strong> in the{" "}
                    <strong>{selectedFeaturedResource.layer}</strong> layer.
                  </p>
                </div>

                <div className="spotlight-actions">
                  <a
                    className="button button-primary"
                    href={selectedFeaturedResource.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open reference
                  </a>
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={() => {
                      setSelectedLayer(selectedFeaturedResource.layer);
                      scrollToSection("layers");
                    }}
                  >
                    View its layer
                  </button>
                </div>
              </aside>
            ) : null}
          </div>
        </section>

        <section className="section scroll-target" id="tags">
          <SectionIntro
            eyebrow="Tag system"
            title="Structured metadata is part of the product, not decorative garnish"
            text="The tag system is what makes the repository feel more like a map than a link list. It standardizes object type, workflow role, autonomy pattern, scope, domain, openness, and maturity."
          />

          <div className="tag-layout">
            <div className="tag-dimensions">
              {tagDimensions.map((dimension) => (
                <article className="tag-panel" key={dimension.name} data-reveal>
                  <h3>{dimension.name}</h3>
                  <div className="chip-cloud">
                    {dimension.values.map((value) => (
                      <span className="tag-chip" key={value}>
                        {value}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {sampleTagResource ? (
              <article className="tag-example-card" data-reveal>
                <p className="eyebrow eyebrow-tight">Example resource</p>
                <h3>{sampleTagResource.name}</h3>
                <p>{sampleTagResource.description}</p>

                <div className="tag-example-ribbon">
                  <span>{`Level: ${sampleTagResource.level}`}</span>
                  <span>{`Stage: ${sampleTagResource.stage}`}</span>
                  <span>{`Loop: ${sampleTagResource.loop}`}</span>
                  <span>{`Scope: ${sampleTagResource.scope}`}</span>
                  <span>{`Domain: ${sampleTagResource.domain}`}</span>
                  <span>{`Openness: ${sampleTagResource.openness}`}</span>
                  <span>{`Maturity: ${sampleTagResource.maturity}`}</span>
                </div>

                <div className="tag-example-note">
                  <strong>Why this matters</strong>
                  <p>
                    The same resource can now be read structurally: what it is,
                    where it fits in the workflow, how autonomous it is, which
                    domain it serves, and how inspectable it is.
                  </p>
                </div>
              </article>
            ) : null}
          </div>
        </section>

        <section className="section scroll-target" id="browse">
          <SectionIntro
            eyebrow="Browse by category"
            title="Jump into the ecosystem from whichever layer matters to you"
            text="These category cards are designed as fast entry points. Each one focuses the local map and also links to the corresponding section in the repository."
          />

          <div className="browse-grid">
            {browseCategories.map((category) => (
              <article className="browse-card" key={category.title} data-reveal>
                <span className="browse-mark">{layerMarks[category.title]}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="browse-meta">
                  <span>{category.count} entries in the current map</span>
                  {category.sample ? <strong>{category.sample.name}</strong> : null}
                </div>
                <div className="browse-actions">
                  <button
                    className="button button-primary"
                    type="button"
                    onClick={() => handleBrowseCategory(category.title)}
                  >
                    Open in this site
                  </button>
                  <a
                    className="button button-ghost"
                    href={`${repositoryUrl}/blob/main/README.md${layerReadmeAnchors[category.title]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open README
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-copy">
          <strong>Awesome-AI-Research</strong>
          <p>
            A layered ecosystem map for AI-native research systems, built to be
            more legible and more maintainable than a generic awesome list.
          </p>
        </div>

        <div className="site-footer-links">
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`}
            target="_blank"
            rel="noreferrer"
          >
            Contributing
          </a>
          <a
            href={`${repositoryUrl}/blob/main/LICENSE`}
            target="_blank"
            rel="noreferrer"
          >
            License
          </a>
          <button className="footer-top" type="button" onClick={handleTop}>
            Back to top
          </button>
        </div>
      </footer>

      <button
        className={showBackToTop ? "back-to-top is-visible" : "back-to-top"}
        type="button"
        onClick={handleTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-intro" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function MetricCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Metadata({ label, value }: { label: string; value: string }) {
  return (
    <div className="metadata-chip">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default App;
