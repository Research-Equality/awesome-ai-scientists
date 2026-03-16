import { useEffect, useState } from "react";
import {
  layerNotes,
  resources,
  workflowNotes,
  type Stage,
} from "./data/resources";
import { locales, type Copy, type Language } from "./locales";

const repositoryUrl = "https://github.com/Research-Equality/Awesome-AI-Research";
const websiteUrl = "https://research-equality.github.io/Awesome-AI-Research/";

const sectionIds = [
  "hero",
  "difference",
  "layers",
  "workflow",
  "featured",
  "tags",
] as const;

const tagDimensions = [
  {
    key: "level",
    values: [
      "System",
      "Platform",
      "Module",
      "Benchmark",
      "Survey",
      "Dataset",
      "Meta",
    ] as const,
  },
  {
    key: "stage",
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
    ] as const,
  },
  {
    key: "loop",
    values: ["Open-loop", "Human-in-the-loop", "Closed-loop"] as const,
  },
  {
    key: "scope",
    values: ["General", "Domain-specific"] as const,
  },
  {
    key: "domain",
    values: [
      "General",
      "Biology",
      "Chemistry",
      "Materials",
      "Physics",
      "Medicine",
      "CS",
      "Math",
      "Multi-domain",
    ] as const,
  },
  {
    key: "openness",
    values: [
      "Open-source",
      "Partially Open",
      "Closed-source",
      "Paper-only",
    ] as const,
  },
  {
    key: "maturity",
    values: [
      "Research Prototype",
      "Active Project",
      "Production-like",
      "Archived",
    ] as const,
  },
] as const;

const workflowStages = workflowNotes.filter(
  (item): item is (typeof workflowNotes)[number] & {
    stage: Exclude<Stage, "End-to-end">;
  } => item.stage !== "End-to-end",
);

const featuredResources = resources.filter((resource) => resource.featured).slice(0, 8);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem("awesome-ai-research-language");
  if (saved === "en" || saved === "zh") {
    return saved;
  }

  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [activeSection, setActiveSection] =
    useState<(typeof sectionIds)[number]>("hero");
  const [selectedStage, setSelectedStage] = useState<Exclude<Stage, "End-to-end">>(
    workflowStages[0].stage,
  );

  const copy = locales[language];

  const navigation = [
    { id: "hero", label: copy.nav.overview },
    { id: "difference", label: copy.nav.why },
    { id: "layers", label: copy.nav.layers },
    { id: "workflow", label: copy.nav.workflow },
    { id: "featured", label: copy.nav.featured },
    { id: "tags", label: copy.nav.tags },
  ] as const;

  useEffect(() => {
    window.localStorage.setItem("awesome-ai-research-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = copy.documentTitle;
  }, [copy.documentTitle, language]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id as (typeof sectionIds)[number]);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-15% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const selectedWorkflow = copy.workflow.stages[selectedStage];
  const selectedStageResources = resources
    .filter((resource) => resource.stage === selectedStage)
    .slice(0, 4);
  const sampleTagResource =
    featuredResources.find((resource) => resource.id === "the-ai-scientist") ??
    featuredResources[0];

  const scrollToSection = (id: (typeof sectionIds)[number]) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const getResourceDescription = (id: string, fallback: string) =>
    copy.resourceDescriptions[id] ?? fallback;

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header-inner">
          <a
            className="brand"
            href="#hero"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span className="brand-mark">AIR</span>
            <span className="brand-copy">
              <strong>Awesome-AI-Research</strong>
              <small>{copy.hero.eyebrow}</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Sections">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-actions">
            <div
              className="language-switch"
              role="group"
              aria-label={copy.switcher.label}
            >
              <button
                className={language === "zh" ? "is-active" : ""}
                type="button"
                onClick={() => setLanguage("zh")}
              >
                {copy.switcher.zh}
              </button>
              <button
                className={language === "en" ? "is-active" : ""}
                type="button"
                onClick={() => setLanguage("en")}
              >
                {copy.switcher.en}
              </button>
            </div>

            <a
              className="button button-ghost"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.nav.github}
            </a>
          </div>
        </div>
      </header>

      <main className="page">
        <section className="hero section-anchor" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1>Awesome-AI-Research</h1>
              <p className="hero-subtitle">{copy.hero.subtitle}</p>
              <p className="section-text hero-text">{copy.hero.body}</p>

              <div className="hero-actions">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => scrollToSection("layers")}
                >
                  {copy.hero.explore}
                </button>
                <a
                  className="button button-secondary"
                  href={repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.hero.github}
                </a>
              </div>
            </div>

            <div className="hero-diagram" aria-label={copy.hero.diagramTitle}>
              <div className="diagram-header">
                <strong>{copy.hero.diagramTitle}</strong>
                <p>{copy.hero.diagramBody}</p>
              </div>

              <div className="diagram-stack">
                {layerNotes.map((layer, index) => (
                  <div className="diagram-layer" key={layer.title}>
                    <span className="diagram-index">{`0${index + 1}`}</span>
                    <span>{copy.names.layers[layer.title]}</span>
                  </div>
                ))}
              </div>

              <div className="diagram-flow">
                {workflowStages.map((item) => (
                  <span key={item.stage}>{copy.names.stages[item.stage]}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-anchor" id="difference">
          <div className="container">
            <SectionHeader
              eyebrow={copy.why.eyebrow}
              title={copy.why.title}
              text={copy.why.text}
            />

            <div className="difference-grid">
              {copy.why.items.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-anchor" id="layers">
          <div className="container">
            <SectionHeader
              eyebrow={copy.layers.eyebrow}
              title={copy.layers.title}
              text={copy.layers.text}
            />

            <div className="layer-grid">
              {layerNotes.map((layer, index) => {
                const layerResources = resources.filter(
                  (resource) => resource.layer === layer.title,
                );
                const layerLevels = Array.from(
                  new Set(layerResources.map((resource) => resource.level)),
                ).slice(0, 4);

                return (
                  <article className="layer-card" key={layer.title}>
                    <div className="layer-card-top">
                      <span className="layer-index">{`0${index + 1}`}</span>
                      <h3>{copy.layers.items[layer.title].title}</h3>
                    </div>

                    <p>{copy.layers.items[layer.title].body}</p>

                    <div className="layer-meta">
                      <div>
                        <span>{copy.layers.stats.resources}</span>
                        <strong>{layerResources.length}</strong>
                      </div>
                      <div>
                        <span>{copy.layers.stats.types}</span>
                        <div className="chip-list">
                          {layerLevels.map((level) => (
                            <span className="chip" key={level}>
                              {copy.names.levels[level]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-anchor" id="workflow">
          <div className="container">
            <SectionHeader
              eyebrow={copy.workflow.eyebrow}
              title={copy.workflow.title}
              text={copy.workflow.text}
            />

            <div className="workflow-shell">
              <div className="workflow-stages" role="tablist" aria-label={copy.workflow.title}>
                {workflowStages.map((item, index) => (
                  <button
                    key={item.stage}
                    className={selectedStage === item.stage ? "workflow-stage is-active" : "workflow-stage"}
                    type="button"
                    onClick={() => setSelectedStage(item.stage)}
                  >
                    <span className="workflow-stage-index">{`0${index + 1}`}</span>
                    <strong>{copy.workflow.stages[item.stage].title}</strong>
                  </button>
                ))}
              </div>

              <div className="workflow-panel">
                <div className="workflow-copy">
                  <h3>{selectedWorkflow.title}</h3>
                  <p>{selectedWorkflow.note}</p>
                  <small>{copy.workflow.helper}</small>
                </div>

                <div className="workflow-links">
                  <span className="workflow-links-label">{copy.workflow.related}</span>
                  {selectedStageResources.map((resource) => (
                    <a
                      key={resource.id}
                      className="resource-link"
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{resource.name}</strong>
                      <span>{copy.names.layers[resource.layer]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-anchor" id="featured">
          <div className="container">
            <SectionHeader
              eyebrow={copy.featured.eyebrow}
              title={copy.featured.title}
              text={copy.featured.text}
            />

            <div className="featured-grid">
              {featuredResources.map((resource) => (
                <article className="featured-card" key={resource.id}>
                  <div className="featured-card-top">
                    <span className="resource-layer">
                      {copy.names.layers[resource.layer]}
                    </span>
                    <h3>{resource.name}</h3>
                  </div>

                  <p>{getResourceDescription(resource.id, resource.description)}</p>

                  <div className="tag-ribbon">
                    <span>{`${copy.tags.labels.level}: ${copy.names.levels[resource.level]}`}</span>
                    <span>{`${copy.tags.labels.stage}: ${copy.names.stages[resource.stage]}`}</span>
                    <span>{`${copy.tags.labels.loop}: ${copy.names.loops[resource.loop]}`}</span>
                    <span>{`${copy.tags.labels.domain}: ${copy.names.domains[resource.domain]}`}</span>
                  </div>

                  <a
                    className="text-link"
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.featured.open}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-anchor" id="tags">
          <div className="container">
            <SectionHeader
              eyebrow={copy.tags.eyebrow}
              title={copy.tags.title}
              text={copy.tags.text}
            />

            <div className="tag-layout">
              <div className="tag-dimensions">
                {tagDimensions.map((dimension) => (
                  <article className="tag-card" key={dimension.key}>
                    <h3>{copy.tags.labels[dimension.key]}</h3>
                    <div className="chip-list">
                      {dimension.values.map((value) => (
                        <span className="chip" key={value}>
                          {getValueName(copy, dimension.key, value)}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <aside className="tag-example">
                <p className="eyebrow eyebrow-small">{copy.tags.exampleEyebrow}</p>
                <h3>{copy.tags.exampleTitle}</h3>
                <p>{copy.tags.exampleBody}</p>

                <div className="tag-example-card">
                  <strong>{sampleTagResource.name}</strong>
                  <p>
                    {getResourceDescription(
                      sampleTagResource.id,
                      sampleTagResource.description,
                    )}
                  </p>

                  <div className="tag-ribbon">
                    <span>{`${copy.tags.labels.level}: ${copy.names.levels[sampleTagResource.level]}`}</span>
                    <span>{`${copy.tags.labels.stage}: ${copy.names.stages[sampleTagResource.stage]}`}</span>
                    <span>{`${copy.tags.labels.loop}: ${copy.names.loops[sampleTagResource.loop]}`}</span>
                    <span>{`${copy.tags.labels.scope}: ${copy.names.scopes[sampleTagResource.scope]}`}</span>
                    <span>{`${copy.tags.labels.domain}: ${copy.names.domains[sampleTagResource.domain]}`}</span>
                    <span>{`${copy.tags.labels.openness}: ${copy.names.openness[sampleTagResource.openness]}`}</span>
                    <span>{`${copy.tags.labels.maturity}: ${copy.names.maturity[sampleTagResource.maturity]}`}</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Awesome-AI-Research</strong>
            <p>{copy.footer.summary}</p>
          </div>

          <div className="footer-links">
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.contributing}
            </a>
            <a
              href={`${repositoryUrl}/blob/main/LICENSE`}
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.license}
            </a>
            <a
              href={`${repositoryUrl}/blob/main/README.md`}
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.englishReadme}
            </a>
            <a
              href={`${repositoryUrl}/blob/main/README.zh-CN.md`}
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.chineseReadme}
            </a>
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              Website
            </a>
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("hero");
              }}
            >
              {copy.footer.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader(props: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{props.eyebrow}</p>
      <h2>{props.title}</h2>
      <p className="section-text">{props.text}</p>
    </div>
  );
}

function getValueName(
  copy: Copy,
  dimension: (typeof tagDimensions)[number]["key"],
  value: string,
) {
  switch (dimension) {
    case "level":
      return copy.names.levels[value as keyof typeof copy.names.levels];
    case "stage":
      return copy.names.stages[value as keyof typeof copy.names.stages];
    case "loop":
      return copy.names.loops[value as keyof typeof copy.names.loops];
    case "scope":
      return copy.names.scopes[value as keyof typeof copy.names.scopes];
    case "domain":
      return copy.names.domains[value as keyof typeof copy.names.domains];
    case "openness":
      return copy.names.openness[value as keyof typeof copy.names.openness];
    case "maturity":
      return copy.names.maturity[value as keyof typeof copy.names.maturity];
    default:
      return value;
  }
}

export default App;
