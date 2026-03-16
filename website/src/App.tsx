import { startTransition, useDeferredValue, useEffect, useState } from "react";
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

const repositoryUrl = "https://github.com/Research-Equality/Awesome-AI-Research";
const liveSiteUrl = "https://research-equality.github.io/Awesome-AI-Research/";

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
const stageCount = new Set(resources.map((resource) => resource.stage)).size;

const levelSignals = levels
  .filter((level): level is Level => level !== "All")
  .map((level) => ({
    label: level,
    value: resources.filter((resource) => resource.level === level).length,
  }));

const stageSignals = workflowNotes.map((note) => ({
  label: note.stage,
  value: resources.filter((resource) => resource.stage === note.stage).length,
}));

const opennessSignals = opennessValues
  .filter((openness): openness is Openness => openness !== "All")
  .map((openness) => ({
    label: openness,
    value: resources.filter((resource) => resource.openness === openness).length,
  }));

const layerSignals = layerNotes.map((layer) => ({
  label: layer.title.replace("Research Infrastructure & Platforms", "Infrastructure & Platforms"),
  value: resources.filter((resource) => resource.layer === layer.title).length,
}));

function App() {
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<Level | "All">("All");
  const [stageFilter, setStageFilter] = useState<Stage | "All">("All");
  const [domainFilter, setDomainFilter] = useState<Domain | "All">("All");
  const [opennessFilter, setOpennessFilter] = useState<Openness | "All">("All");
  const [selectedResourceId, setSelectedResourceId] = useState<string>(
    featuredResources[0]?.id ?? resources[0]?.id ?? "",
  );

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
        resource.openness,
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

  useEffect(() => {
    if (filteredResources.length === 0) {
      return;
    }

    const selectionStillVisible = filteredResources.some(
      (resource) => resource.id === selectedResourceId,
    );

    if (!selectionStillVisible) {
      setSelectedResourceId(filteredResources[0].id);
    }
  }, [filteredResources, selectedResourceId]);

  const selectedResource = filteredResources.find(
    (resource) => resource.id === selectedResourceId,
  );

  const relatedResources = selectedResource
    ? resources
        .filter((resource) => {
          if (resource.id === selectedResource.id) {
            return false;
          }

          return (
            resource.subgroup === selectedResource.subgroup ||
            (resource.layer === selectedResource.layer &&
              resource.stage === selectedResource.stage)
          );
        })
        .slice(0, 3)
    : [];

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

  const focusResource = (resource: Resource) => {
    startTransition(() => {
      setSelectedResourceId(resource.id);
    });
  };

  const focusSubgroup = (resource: Resource) => {
    startTransition(() => {
      setQuery(resource.subgroup);
      setSelectedResourceId(resource.id);
    });
  };

  const applyLevelFilter = (value: Level | "All") => {
    startTransition(() => {
      setLevelFilter(value);
    });
  };

  const applyStageFilter = (value: Stage | "All") => {
    startTransition(() => {
      setStageFilter(value);
    });
  };

  const applyDomainFilter = (value: Domain | "All") => {
    startTransition(() => {
      setDomainFilter(value);
    });
  };

  const applyOpennessFilter = (value: Openness | "All") => {
    startTransition(() => {
      setOpennessFilter(value);
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
            <a href="#signals">Signals</a>
            <a href="#explorer">Explorer</a>
            <a href="#contribute">Ops</a>
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
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
              This site turns the repository into a more legible map: layers,
              workflow stages, curated signals, filterable resources, and a
              detail inspector that makes each entry easier to place in the
              stack.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#explorer">
                Explore the map
              </a>
              <a
                className="button button-secondary"
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub repo
              </a>
              <a
                className="button button-ghost"
                href="https://github.com/Research-Equality/Awesome-AI-Research/blob/main/docs/publishing.md"
                target="_blank"
                rel="noreferrer"
              >
                Publishing guide
              </a>
            </div>

            <div className="hero-stats">
              <StatCard value={resources.length} label="Curated resources" />
              <StatCard value={layerCount} label="Ecosystem layers" />
              <StatCard value={levelsCount} label="Object types" />
              <StatCard value={stageCount} label="Workflow stages" />
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
                  title="Inspectable, not just searchable"
                  text="The site adds a live inspector so each resource can be read as part of the map, not just a list of links."
                />
                <DifferenceCard
                  title="Operationally complete"
                  text="Pages deployment, release notes, changelog discipline, and social preview assets are all part of the repository."
                />
              </div>

              <div className="live-site-callout">
                <span className="panel-chip">Website</span>
                <div>
                  <strong>GitHub Pages deployment ready</strong>
                  <p>
                    The production site is meant to live at{" "}
                    <a href={liveSiteUrl} target="_blank" rel="noreferrer">
                      research-equality.github.io/Awesome-AI-Research
                    </a>
                    .
                  </p>
                </div>
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
            text="The site keeps the repository's layered ecosystem view, while making the workflow-stage perspective explicit."
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
                  Modules sit on particular stages; systems and platforms span
                  across them. This is the second axis that keeps the map
                  legible.
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
            title="Representative resources that anchor the map"
            text="These entries are featured because they help define important slices of the ecosystem, not because they are universally 'best'."
          />

          <div className="featured-grid">
            {featuredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                featured
                selected={resource.id === selectedResourceId}
                onInspect={() => focusResource(resource)}
              />
            ))}
          </div>
        </section>

        <section className="section" id="signals">
          <SectionHeader
            eyebrow="Signals"
            title="A quick structural read of the current map"
            text="These distributions make the curation stance visible: what kinds of objects dominate, which workflow stages are denser, and where openness is strongest or thin."
          />

          <div className="signal-grid">
            <SignalCard title="By object type" accent="cyan" items={levelSignals} />
            <SignalCard title="By workflow stage" accent="amber" items={stageSignals} />
            <SignalCard title="By openness" accent="violet" items={opennessSignals} />
            <SignalCard title="By layer" accent="teal" items={layerSignals} />
          </div>
        </section>

        <section className="section" id="explorer">
          <SectionHeader
            eyebrow="Explorer"
            title="Filter the ecosystem, then inspect a single resource in context"
            text="Search by function, then narrow by level, stage, domain, or openness. The inspector panel keeps the selected entry legible."
          />

          <div className="explorer-layout">
            <div className="explorer-main">
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
                    onChange={(value) => applyLevelFilter(value as Level | "All")}
                  />
                  <FilterSelect
                    label="Stage"
                    value={stageFilter}
                    options={stages}
                    onChange={(value) => applyStageFilter(value as Stage | "All")}
                  />
                  <FilterSelect
                    label="Domain"
                    value={domainFilter}
                    options={domains}
                    onChange={(value) => applyDomainFilter(value as Domain | "All")}
                  />
                  <FilterSelect
                    label="Openness"
                    value={opennessFilter}
                    options={opennessValues}
                    onChange={(value) =>
                      applyOpennessFilter(value as Openness | "All")
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
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      selected={resource.id === selectedResourceId}
                      onInspect={() => focusResource(resource)}
                    />
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

            <aside className="inspector-panel">
              {selectedResource ? (
                <ResourceInspector
                  resource={selectedResource}
                  relatedResources={relatedResources}
                  onFocusResource={focusResource}
                  onLevelFilter={applyLevelFilter}
                  onStageFilter={applyStageFilter}
                  onDomainFilter={applyDomainFilter}
                  onOpennessFilter={applyOpennessFilter}
                  onFocusSubgroup={focusSubgroup}
                />
              ) : (
                <div className="inspector-empty">
                  <span className="panel-chip">Inspector</span>
                  <h3>No resource selected</h3>
                  <p>
                    Restore at least one result to inspect its layer placement,
                    tags, and nearby resources.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </section>

        <section className="section" id="contribute">
          <SectionHeader
            eyebrow="Operations"
            title="Repository governance, website publishing, and release discipline"
            text="The site is only part of the project. The repository now carries the operational documents needed to keep it maintainable."
          />

          <div className="contribute-grid">
            <article className="policy-card">
              <h3>Tag system</h3>
              <p>
                Every entry exposes the compact curation ribbon used by the
                repository and the site inspector.
              </p>
              <code className="tag-example">
                Level: System · Stage: End-to-end · Loop: Closed-loop · Domain:
                General · Openness: Open-source
              </code>
              <a
                href={`${repositoryUrl}/blob/main/docs/tag-system.md`}
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
                href={`${repositoryUrl}/blob/main/docs/inclusion-criteria.md`}
                target="_blank"
                rel="noreferrer"
              >
                Read the inclusion criteria
              </a>
            </article>

            <article className="policy-card">
              <h3>Website publishing</h3>
              <p>
                GitHub Pages deployment, social preview assets, and metadata
                are now documented and versioned with the repository.
              </p>
              <div className="policy-actions">
                <a
                  className="button button-primary"
                  href={`${repositoryUrl}/blob/main/docs/publishing.md`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open publishing guide
                </a>
                <a
                  className="button button-secondary"
                  href={`${repositoryUrl}/blob/main/.github/workflows/deploy-website.yml`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Pages workflow
                </a>
              </div>
            </article>

            <article className="policy-card">
              <h3>Release management</h3>
              <p>
                Change history and release note categories now live alongside
                the codebase so the project can evolve without drifting.
              </p>
              <div className="policy-actions">
                <a
                  className="button button-primary"
                  href={`${repositoryUrl}/blob/main/CHANGELOG.md`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read changelog
                </a>
                <a
                  className="button button-secondary"
                  href={`${repositoryUrl}/blob/main/.github/release.yml`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View release config
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-tight">
          <SectionHeader
            eyebrow="Inspirations"
            title="Reference points"
            text="The visual and editorial approach borrows rigor from mature GitHub projects without copying their surface."
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
          <a href={repositoryUrl}>Repository</a>
          <a href={`${repositoryUrl}/blob/main/README.md`}>README</a>
          <a href={`${repositoryUrl}/blob/main/CHANGELOG.md`}>Changelog</a>
          <a href={liveSiteUrl}>Live site</a>
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

function SignalCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: Array<{ label: string; value: number }>;
  accent: "cyan" | "amber" | "violet" | "teal";
}) {
  const maxValue = Math.max(...items.map((item) => item.value), 1);

  return (
    <article className={`signal-card signal-${accent}`}>
      <h3>{title}</h3>
      <div className="bar-list">
        {items.map((item) => (
          <div className="bar-row" key={item.label}>
            <div className="bar-labels">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function ResourceCard({
  resource,
  selected,
  onInspect,
  featured = false,
}: {
  resource: Resource;
  selected: boolean;
  onInspect: () => void;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "resource-card",
        featured ? "featured-card" : "",
        selected ? "resource-card-selected" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
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
      <div className="resource-actions">
        <button className="button button-ghost" type="button" onClick={onInspect}>
          Inspect
        </button>
        <a href={resource.url} target="_blank" rel="noreferrer">
          Open reference
        </a>
      </div>
    </article>
  );
}

function ResourceInspector({
  resource,
  relatedResources,
  onFocusResource,
  onLevelFilter,
  onStageFilter,
  onDomainFilter,
  onOpennessFilter,
  onFocusSubgroup,
}: {
  resource: Resource;
  relatedResources: Resource[];
  onFocusResource: (resource: Resource) => void;
  onLevelFilter: (value: Level | "All") => void;
  onStageFilter: (value: Stage | "All") => void;
  onDomainFilter: (value: Domain | "All") => void;
  onOpennessFilter: (value: Openness | "All") => void;
  onFocusSubgroup: (resource: Resource) => void;
}) {
  return (
    <div className="inspector-card">
      <span className="panel-chip">Selected resource</span>
      <div className="inspector-heading">
        <div>
          <h3>{resource.name}</h3>
          <p>{resource.description}</p>
        </div>
        <a href={resource.url} target="_blank" rel="noreferrer">
          Open reference
        </a>
      </div>

      <div className="inspector-summary">
        <span>{resource.layer}</span>
        <span>{resource.subgroup}</span>
      </div>

      <div className="inspector-metadata">
        <MetadataRow label="Level" value={resource.level} />
        <MetadataRow label="Stage" value={resource.stage} />
        <MetadataRow label="Loop" value={resource.loop} />
        <MetadataRow label="Scope" value={resource.scope} />
        <MetadataRow label="Domain" value={resource.domain} />
        <MetadataRow label="Openness" value={resource.openness} />
        <MetadataRow label="Maturity" value={resource.maturity} />
      </div>

      <div className="inspector-tools">
        <strong>Use this resource as a filter lens</strong>
        <div className="inspector-tool-grid">
          <button type="button" onClick={() => onLevelFilter(resource.level)}>
            {`Level: ${resource.level}`}
          </button>
          <button type="button" onClick={() => onStageFilter(resource.stage)}>
            {`Stage: ${resource.stage}`}
          </button>
          <button type="button" onClick={() => onDomainFilter(resource.domain)}>
            {`Domain: ${resource.domain}`}
          </button>
          <button
            type="button"
            onClick={() => onOpennessFilter(resource.openness)}
          >
            {`Openness: ${resource.openness}`}
          </button>
        </div>
      </div>

      <div className="inspector-actions-panel">
        <button
          className="button button-secondary"
          type="button"
          onClick={() => onFocusSubgroup(resource)}
        >
          Focus same subgroup
        </button>
        <a
          className="button button-ghost"
          href={`${repositoryUrl}/blob/main/docs/tag-system.md`}
          target="_blank"
          rel="noreferrer"
        >
          Read tag guide
        </a>
      </div>

      <div className="related-panel">
        <strong>Nearby resources</strong>
        <p>
          Entries that share the same subgroup or sit close on the same
          workflow-layer intersection.
        </p>
        <div className="related-list">
          {relatedResources.length > 0 ? (
            relatedResources.map((item) => (
              <button
                className="related-item"
                type="button"
                key={item.id}
                onClick={() => onFocusResource(item)}
              >
                <span>{item.name}</span>
                <small>{item.subgroup}</small>
              </button>
            ))
          ) : (
            <div className="related-empty">No nearby resources in the current map.</div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetadataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="metadata-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default App;
