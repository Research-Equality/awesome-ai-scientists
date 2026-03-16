import { useEffect, useState } from "react";
import { resources } from "./data/resources";
import { locales, type Language } from "./locales";

const repositoryUrl = "https://github.com/Research-Equality/Awesome-AI-Research";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<string>("All");
  const [stage, setStage] = useState<string>("All");
  const [domain, setDomain] = useState<string>("All");
  const [openness, setOpenness] = useState<string>("All");
  const copy = locales[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = copy.documentTitle;
  }, [copy.documentTitle, language]);

  const levelOptions = Array.from(new Set(resources.map((resource) => resource.level)));
  const stageOptions = Array.from(new Set(resources.map((resource) => resource.stage)));
  const domainOptions = Array.from(new Set(resources.map((resource) => resource.domain)));
  const opennessOptions = Array.from(new Set(resources.map((resource) => resource.openness)));

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResources = resources.filter((resource) => {
    const description = copy.resourceDescriptions[resource.id] ?? resource.description;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      resource.name.toLowerCase().includes(normalizedQuery) ||
      description.toLowerCase().includes(normalizedQuery);

    const matchesLevel = level === "All" || resource.level === level;
    const matchesStage = stage === "All" || resource.stage === stage;
    const matchesDomain = domain === "All" || resource.domain === domain;
    const matchesOpenness = openness === "All" || resource.openness === openness;

    return matchesQuery && matchesLevel && matchesStage && matchesDomain && matchesOpenness;
  });

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-row">
          <div className="brand-block">
            <a className="brand-title" href="#top">
              Awesome-AI-Research
            </a>
            <p className="brand-subtitle">{copy.hero.subtitle}</p>
          </div>

          <div className="header-actions">
            <div className="language-switch" role="group" aria-label="Language">
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

            <a className="header-link" href={`${repositoryUrl}/blob/main/README.md`} target="_blank" rel="noreferrer">
              {copy.header.englishReadme}
            </a>
            <a
              className="header-link"
              href={`${repositoryUrl}/blob/main/README.zh-CN.md`}
              target="_blank"
              rel="noreferrer"
            >
              {copy.header.chineseReadme}
            </a>
            <a className="header-link header-link-primary" href={repositoryUrl} target="_blank" rel="noreferrer">
              {copy.header.github}
            </a>
          </div>
        </div>
      </header>

      <main className="container main-content" id="top">
        <section className="intro-block">
          <h1>Awesome-AI-Research</h1>
          <p>{copy.hero.purpose}</p>
        </section>

        <section className="catalog-block">
          <div className="filters-row">
            <label className="filter-field filter-search">
              <span>{copy.filters.search}</span>
              <input
                type="search"
                value={query}
                placeholder={copy.filters.searchPlaceholder}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>

            <label className="filter-field">
              <span>{copy.filters.level}</span>
              <select value={level} onChange={(event) => setLevel(event.target.value)}>
                <option value="All">{copy.filters.all}</option>
                {levelOptions.map((value) => (
                  <option key={value} value={value}>
                    {copy.names.levels[value]}
                  </option>
                ))}
              </select>
            </label>

            <label className="filter-field">
              <span>{copy.filters.stage}</span>
              <select value={stage} onChange={(event) => setStage(event.target.value)}>
                <option value="All">{copy.filters.all}</option>
                {stageOptions.map((value) => (
                  <option key={value} value={value}>
                    {copy.names.stages[value]}
                  </option>
                ))}
              </select>
            </label>

            <label className="filter-field">
              <span>{copy.filters.domain}</span>
              <select value={domain} onChange={(event) => setDomain(event.target.value)}>
                <option value="All">{copy.filters.all}</option>
                {domainOptions.map((value) => (
                  <option key={value} value={value}>
                    {copy.names.domains[value]}
                  </option>
                ))}
              </select>
            </label>

            <label className="filter-field">
              <span>{copy.filters.openness}</span>
              <select value={openness} onChange={(event) => setOpenness(event.target.value)}>
                <option value="All">{copy.filters.all}</option>
                {opennessOptions.map((value) => (
                  <option key={value} value={value}>
                    {copy.names.openness[value]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="catalog-header">
            <span className="results-count">
              {filteredResources.length} {copy.filters.results}
            </span>
          </div>

          <ul className="resource-list">
            {filteredResources.map((resource) => (
              <li className="resource-item" key={resource.id}>
                <p className="resource-line">
                  <a
                    className="resource-name"
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {resource.name}
                  </a>
                  {" — "}
                  {copy.resourceDescriptions[resource.id] ?? resource.description}
                </p>

                <p className="resource-tags">
                  <span>{`${copy.labels.level}: ${copy.names.levels[resource.level]}`}</span>
                  <span>{`${copy.labels.stage}: ${copy.names.stages[resource.stage]}`}</span>
                  <span>{`${copy.labels.loop}: ${copy.names.loops[resource.loop]}`}</span>
                  <span>{`${copy.labels.scope}: ${copy.names.scopes[resource.scope]}`}</span>
                  <span>{`${copy.labels.domain}: ${copy.names.domains[resource.domain]}`}</span>
                  <span>{`${copy.labels.openness}: ${copy.names.openness[resource.openness]}`}</span>
                  <span>{`${copy.labels.maturity}: ${copy.names.maturity[resource.maturity]}`}</span>
                </p>

                <p className="resource-links">
                  {resource.links.map((link, index) => (
                    <span key={`${resource.id}-${link.kind}`}>
                      {index > 0 ? " · " : ""}
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {copy.linkKinds[link.kind]}
                      </a>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <a href="#top">Top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
