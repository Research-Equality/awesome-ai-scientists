import { startTransition, useDeferredValue, useState } from "react";
import {
  inspirations,
  layerNotes,
  resources,
  workflowNotes,
  type Domain,
  type Level,
  type Openness,
  type Resource,
  type Stage,
} from "./data/resources";

const levels: Array<Level | "All"> = [
  "All",
  "System",
  "Platform",
  "Module",
  "Benchmark",
  "Survey",
  "Dataset",
  "Meta",
];

const stages: Array<Stage | "All"> = [
  "All",
  "End-to-end",
  "Literature",
  "Ideation",
  "Planning",
  "Data",
  "Coding",
  "Experiment",
  "Analysis",
  "Writing",
];

const domains: Array<Domain | "All"> = [
  "All",
  "General",
  "Multi-domain",
  "Biology",
  "Chemistry",
  "Materials",
  "Physics",
  "Medicine",
  "CS",
  "Math",
];

const opennessValues: Array<Openness | "All"> = [
  "All",
  "Open-source",
  "Partially Open",
  "Closed-source",
  "Paper-only",
];

const featuredResources = resources.filter((resource) => resource.featured);
const levelsCount = new Set(resources.map((resource) => resource.level)).size;
const openSourceCount = resources.filter(
  (resource) => resource.openness === "Open-source",
).length;
const layerCount = new Set(resources.map((resource) => resource.layer)).size;

function App() {
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<Level | "All">("All");
  const [stageFilter, setStageFilter] = useState<Stage | "All">("All");
  const [domainFilter, setDomainFilter] = useState<Domain | "All">("All");
  const [opennessFilter, setOpennessFilter] = useState<Openness | "All">("All");

  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredResources = resources.filter((resource) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [
        resource.name,
        resource.description,
        resource.layer,
        resource.subgroup,
        resource.level,
        resource.stage,
        resource.domain,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    const matchesLevel =
      levelFilter === "All" || resource.level === levelFilter;
    const matchesStage =
      stageFilter === "All" || resource.stage === stageFilter;
    const matchesDomain =
      domainFilter === "All" || resource.domain === domainFilter;
    const matchesOpenness =
      opennessFilter === "All" || resource.openness === opennessFilter;

    return (
      matchesQuery &&
      matchesLevel &&
      matchesStage &&
      matchesDomain &&
      matchesOpenness
    );
  });

  const activeFilterCount = [
    levelFilter,
    stageFilter,
    domainFilter,
    opennessFilter,
  ].filter((value) => value !== "All").length + (normalizedQuery ? 1 : 0);

  const clearFilters = () => {
    startTransition(() => {
      setQuery("");
      setLevelFilter("All");
      setStageFilter("All");
      setDomainFilter("All");
      setOpennessFilter("All");
    });
  };

  return (
    <div className="site-shell">
      <div className="site-noise" />
      <header className="hero" id="top">
        <nav className="topbar">
          <a className="brand" href="#top">
            <span className="brand-mark">AIR</span>
            <span className="brand-copy">
              <strong>Awesome-AI-Research</strong>
              <small>Layered ecosystem map</small>
            </span>
          </a>
          <div className="topbar-links">
            <a href="#layers">Layers</a>
            <a href="#featured">Featured</a>
            <a href="#explorer">Explorer</a>
            <a href="#contribute">Contribute</a>
            <a
              href="https://github.com/Research-Equality/Awesome-AI-Research"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI-native research systems</p>
            <h1>
              A curated front-end for the
              <span> layered AI research ecosystem.</span>
            </h1>
            <p className="hero-text">
              This is not a flat directory of papers or tools. It is a
              structured map of systems, platforms, workflow modules, and
              meta-resources, organized so researchers can see both the stack
              and the workflow at once.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#explorer">
                Explore the map
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
              >
                Read the canonical README
              </a>
            </div>

            <div className="hero-stats">
              <StatCard value={resources.length} label="Curated resources" />
              <StatCard value={layerCount} label="Ecosystem layers" />
              <StatCard value={levelsCount} label="Object types" />
              <StatCard value={openSourceCount} label="Open-source entries" />
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-surface">
              <div className="panel-head">
                <span className="panel-chip">Why this repo is different</span>
                <h2>Not just papers. Not just tools. Not just AI Scientist demos.</h2>
              </div>
              <div className="difference-grid">
                <DifferenceCard
                  title="Layered by object type"
                  text="Systems, platforms, modules, benchmarks, surveys, datasets, and meta-resources stay separate on purpose."
                />
                <DifferenceCard
                  title="Mapped to workflow"
                  text="Every resource is placed against literature, ideation, planning, data, coding, experiment, analysis, writing, or end-to-end coverage."
                />
                <DifferenceCard
                  title="Tag-driven curation"
                  text="Compact ribbons make scope, loop behavior, domain, and openness legible at a glance."
                />
                <DifferenceCard
                  title="Built for long-term navigation"
                  text="The goal is a maintainable map with opinion, not a temporary trend list."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="layers">
          <SectionHeader
            eyebrow="Structure"
            title="Four layers, one research workflow"
            text="The site combines the repo's layered ecosystem view with a workflow-first reading of AI for Research."
          />

          <div className="layer-layout">
            <div className="layer-stack">
              {layerNotes.map((layer, index) => {
                const count = resources.filter(
                  (resource) => resource.layer === layer.title,
                ).length;

                return (
                  <article className="layer-card" key={layer.title}>
                    <div className="layer-index">Layer {index + 1}</div>
                    <div className="layer-title-row">
                      <span className="layer-emoji">{layer.emoji}</span>
                      <div>
                        <h3>{layer.title}</h3>
                        <p>{layer.body}</p>
                      </div>
                    </div>
                    <div className="layer-meta">{count} curated entries</div>
                  </article>
                );
              })}
            </div>

            <div className="workflow-panel">
              <div className="workflow-header">
                <span className="panel-chip">Workflow stages</span>
                <h3>Stage-aware by design</h3>
                <p>
                  Modules live on particular parts of the loop, while systems
                  and platforms span across it.
                </p>
              </div>
              <div className="workflow-grid">
                {workflowNotes.map((item) => {
                  const count = resources.filter(
                    (resource) => resource.stage === item.stage,
                  ).length;

                  return (
                    <div className="workflow-card" key={item.stage}>
                      <strong>{item.stage}</strong>
                      <span>{item.note}</span>
                      <em>{count} entries</em>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="featured">
          <SectionHeader
            eyebrow="Featured"
            title="Representative resources to anchor the map"
            text="These are not ranked as 'best overall'. They are featured because they clarify important parts of the ecosystem."
          />

          <div className="featured-grid">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} featured />
            ))}
          </div>
        </section>

        <section className="section" id="explorer">
          <SectionHeader
            eyebrow="Explorer"
            title="Filter the ecosystem"
            text="Search by name or function, then narrow by object type, stage, domain, or openness."
          />

          <div className="explorer-shell">
            <div className="filters">
              <label className="search">
                <span>Search</span>
                <input
                  type="search"
                  placeholder="Search systems, benchmarks, domains, or workflow stages"
                  value={query}
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    startTransition(() => {
                      setQuery(nextValue);
                    });
                  }}
                />
              </label>

              <div className="filter-grid">
                <FilterSelect
                  label="Level"
                  value={levelFilter}
                  options={levels}
                  onChange={(value) =>
                    startTransition(() =>
                      setLevelFilter(value as Level | "All"),
                    )
                  }
                />
                <FilterSelect
                  label="Stage"
                  value={stageFilter}
                  options={stages}
                  onChange={(value) =>
                    startTransition(() =>
                      setStageFilter(value as Stage | "All"),
                    )
                  }
                />
                <FilterSelect
                  label="Domain"
                  value={domainFilter}
                  options={domains}
                  onChange={(value) =>
                    startTransition(() =>
                      setDomainFilter(value as Domain | "All"),
                    )
                  }
                />
                <FilterSelect
                  label="Openness"
                  value={opennessFilter}
                  options={opennessValues}
                  onChange={(value) =>
                    startTransition(() =>
                      setOpennessFilter(value as Openness | "All"),
                    )
                  }
                />
              </div>

              <div className="filter-footer">
                <div className="results-copy">
                  <strong>{filteredResources.length}</strong>
                  <span>results</span>
                  {activeFilterCount > 0 ? (
                    <small>{activeFilterCount} active filters</small>
                  ) : (
                    <small>No filters applied</small>
                  )}
                </div>
                <button
                  className="button button-ghost"
                  type="button"
                  onClick={clearFilters}
                >
                  Reset filters
                </button>
              </div>
            </div>

            <div className="results-grid">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))
              ) : (
                <div className="empty-state">
                  <h3>No matching resources</h3>
                  <p>
                    Try broadening the search or clearing one of the active
                    filters.
                  </p>
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={clearFilters}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="contribute">
          <SectionHeader
            eyebrow="Curation"
            title="Designed like a serious map, not a dump"
            text="The website follows the same editorial rules as the repository: canonical links, one-sentence descriptions, and explicit tags."
          />

          <div className="contribute-grid">
            <article className="policy-card">
              <h3>Tag system</h3>
              <p>
                Every entry exposes the compact curation ribbon used by the
                repository.
              </p>
              <code className="tag-example">
                Level: System · Stage: End-to-end · Loop: Closed-loop · Domain:
                General · Openness: Open-source
              </code>
              <a
                href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/docs/tag-system.md"
                target="_blank"
                rel="noreferrer"
              >
                Read the full tag system
              </a>
            </article>

            <article className="policy-card">
              <h3>Inclusion criteria</h3>
              <ul>
                <li>Directly relevant to AI-native research activity.</li>
                <li>Publicly accessible via a canonical source.</li>
                <li>Clear functional role in the ecosystem.</li>
                <li>Representative, novel, or structurally useful.</li>
              </ul>
              <a
                href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/docs/inclusion-criteria.md"
                target="_blank"
                rel="noreferrer"
              >
                Read the inclusion criteria
              </a>
            </article>

            <article className="policy-card">
              <h3>Contribute a resource</h3>
              <p>
                Additions should improve the map, not just increase the count.
                The issue and PR templates already ask for name, URL, category,
                short description, tags, and justification.
              </p>
              <div className="policy-actions">
                <a
                  className="button button-primary"
                  href="https://github.com/Research-Equality/Awesome-AI-Research/issues/new/choose"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open an issue
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read contribution guide
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-tight">
          <SectionHeader
            eyebrow="Inspirations"
            title="Reference points"
            text="The site borrows the rigor of mature GitHub curation projects without copying their surface."
          />
          <div className="inspiration-grid">
            {inspirations.map((item) => (
              <a
                className="inspiration-card"
                href={item.url}
                key={item.name}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Awesome-AI-Research</strong>
          <p>
            A curated, layered map of AI-native research systems, platforms,
            modules, and meta-resources.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Research-Equality/Awesome-AI-Research">
            Repository
          </a>
          <a href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/README.md">
            README
          </a>
          <a href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/docs/roadmap.md">
            Roadmap
          </a>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function DifferenceCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="difference-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="select-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ResourceCard({
  resource,
  featured = false,
}: {
  resource: Resource;
  featured?: boolean;
}) {
  return (
    <article className={featured ? "resource-card featured-card" : "resource-card"}>
      <div className="resource-topline">
        <span className="resource-level">{resource.level}</span>
        <span className="resource-layer">{resource.layer}</span>
      </div>
      <h3>
        <a href={resource.url} target="_blank" rel="noreferrer">
          {resource.name}
        </a>
      </h3>
      <p>{resource.description}</p>
      <div className="resource-subgroup">{resource.subgroup}</div>
      <div className="tag-ribbon">
        <span>{`Level: ${resource.level}`}</span>
        <span>{`Stage: ${resource.stage}`}</span>
        <span>{`Loop: ${resource.loop}`}</span>
        <span>{`Domain: ${resource.domain}`}</span>
        <span>{`Openness: ${resource.openness}`}</span>
      </div>
    </article>
  );
}

export default App;
