import { useEffect, useState } from "react";
import { layerNotes, resources, workflowNotes } from "./data/resources";
import { locales, type Language } from "./locales";

const repositoryUrl = "https://github.com/Research-Equality/Awesome-AI-Research";

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
  const copy = locales[language];

  useEffect(() => {
    window.localStorage.setItem("awesome-ai-research-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = copy.documentTitle;
  }, [copy.documentTitle, language]);

  const layerSections = layerNotes.map((layer) => {
    const layerResources = resources.filter((resource) => resource.layer === layer.title);
    const subgroups = Array.from(new Set(layerResources.map((resource) => resource.subgroup)));

    return {
      layer,
      subgroups: subgroups.map((subgroup) => ({
        subgroup,
        items: layerResources.filter((resource) => resource.subgroup === subgroup),
      })),
    };
  });

  const workflowStages = workflowNotes.filter((item) => item.stage !== "End-to-end");
  const sampleResource =
    resources.find((resource) => resource.id === "the-ai-scientist") ?? resources[0];

  const getDescription = (id: string, fallback: string) =>
    copy.resourceDescriptions[id] ?? fallback;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header-inner">
          <a
            className="brand"
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("top");
            }}
          >
            <span className="brand-mark">AIR</span>
            <span className="brand-copy">
              <strong>Awesome-AI-Research</strong>
              <small>{copy.hero.eyebrow}</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Sections">
            {layerSections.map(({ layer }, index) => (
              <a
                key={layer.title}
                href={`#layer-${index + 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(`layer-${index + 1}`);
                }}
              >
                {copy.names.layers[layer.title]}
              </a>
            ))}
          </nav>

          <div className="site-actions">
            <div className="language-switch" role="group" aria-label={copy.switcher.label}>
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

            <a className="button button-ghost" href={repositoryUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="page" id="top">
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <h1>Awesome-AI-Research</h1>
              <p className="hero-subtitle">{copy.hero.subtitle}</p>
              <p className="hero-purpose">{copy.hero.body}</p>

              <div className="hero-actions">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => scrollTo("layer-1")}
                >
                  {copy.content.browse}
                </button>
                <a className="button button-secondary" href={repositoryUrl} target="_blank" rel="noreferrer">
                  {copy.content.openGithub}
                </a>
              </div>
            </div>

            <aside className="hero-side">
              <div className="meta-block">
                <span className="meta-label">{copy.content.layers}</span>
                <div className="chip-row">
                  {layerSections.map(({ layer }) => (
                    <span className="chip" key={layer.title}>
                      {copy.names.layers[layer.title]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="meta-block">
                <span className="meta-label">{copy.content.workflow}</span>
                <div className="chip-row">
                  {workflowStages.map((item) => (
                    <span className="chip" key={item.stage}>
                      {copy.names.stages[item.stage]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="meta-block">
                <span className="meta-label">{copy.content.tags}</span>
                <div className="tag-line">
                  <span>{`${copy.tags.labels.level}: ${copy.names.levels[sampleResource.level]}`}</span>
                  <span>{`${copy.tags.labels.stage}: ${copy.names.stages[sampleResource.stage]}`}</span>
                  <span>{`${copy.tags.labels.loop}: ${copy.names.loops[sampleResource.loop]}`}</span>
                  <span>{`${copy.tags.labels.domain}: ${copy.names.domains[sampleResource.domain]}`}</span>
                  <span>{`${copy.tags.labels.openness}: ${copy.names.openness[sampleResource.openness]}`}</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="section-heading">
              <h2>{copy.content.allResources}</h2>
            </div>

            {layerSections.map(({ layer, subgroups }, index) => (
              <section className="layer-section" id={`layer-${index + 1}`} key={layer.title}>
                <header className="layer-header">
                  <div>
                    <span className="layer-number">{`0${index + 1}`}</span>
                    <h3>{copy.names.layers[layer.title]}</h3>
                  </div>
                  <p>{copy.layers.items[layer.title].body}</p>
                </header>

                <div className="subgroup-list">
                  {subgroups.map(({ subgroup, items }) => (
                    <section className="subgroup-section" key={`${layer.title}-${subgroup}`}>
                      <h4>{copy.subgroupNames[subgroup] ?? subgroup}</h4>

                      <div className="resource-list">
                        {items.map((resource) => (
                          <article className="resource-item" key={resource.id}>
                            <div className="resource-main">
                              <h5>
                                <a href={resource.url} target="_blank" rel="noreferrer">
                                  {resource.name}
                                </a>
                              </h5>
                              <p>{getDescription(resource.id, resource.description)}</p>
                            </div>

                            <div className="resource-meta">
                              <span>{`${copy.tags.labels.level}: ${copy.names.levels[resource.level]}`}</span>
                              <span>{`${copy.tags.labels.stage}: ${copy.names.stages[resource.stage]}`}</span>
                              <span>{`${copy.tags.labels.loop}: ${copy.names.loops[resource.loop]}`}</span>
                              <span>{`${copy.tags.labels.domain}: ${copy.names.domains[resource.domain]}`}</span>
                              <span>{`${copy.tags.labels.openness}: ${copy.names.openness[resource.openness]}`}</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>{copy.footer.summary}</p>
          <div className="footer-links">
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`${repositoryUrl}/blob/main/README.md`} target="_blank" rel="noreferrer">
              {copy.footer.englishReadme}
            </a>
            <a href={`${repositoryUrl}/blob/main/README.zh-CN.md`} target="_blank" rel="noreferrer">
              {copy.footer.chineseReadme}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
