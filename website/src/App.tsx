import { useEffect, useState } from "react";
import { layerNotes, resources } from "./data/resources";
import { locales, type Language } from "./locales";

const repositoryUrl = "https://github.com/Research-Equality/Awesome-AI-Research";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = locales[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = copy.documentTitle;
  }, [copy.documentTitle, language]);

  const layers = layerNotes.map((layer) => {
    const items = resources.filter((resource) => resource.layer === layer.title);
    const subgroups = Array.from(new Set(items.map((resource) => resource.subgroup))).map(
      (subgroup) => ({
        subgroup,
        items: items.filter((resource) => resource.subgroup === subgroup),
      }),
    );

    return { layer, subgroups };
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
          <nav className="layer-nav" aria-label="Repository categories">
            {layers.map(({ layer }, index) => (
              <a key={layer.title} href={`#layer-${index + 1}`}>
                {copy.names.layers[layer.title]}
              </a>
            ))}
          </nav>
        </section>

        <section className="catalog-block">
          <h2>{copy.sections.content}</h2>

          {layers.map(({ layer, subgroups }, index) => (
            <section className="layer-section" id={`layer-${index + 1}`} key={layer.title}>
              <header className="layer-header">
                <span className="layer-index">{`0${index + 1}`}</span>
                <div>
                  <h3>{copy.names.layers[layer.title]}</h3>
                  <p>{copy.layerDescriptions[layer.title]}</p>
                </div>
              </header>

              {subgroups.map(({ subgroup, items }) => (
                <section className="subgroup-section" key={`${layer.title}-${subgroup}`}>
                  <h4>{copy.subgroupNames[subgroup] ?? subgroup}</h4>

                  <div className="resource-list">
                    {items.map((resource) => (
                      <article className="resource-card" key={resource.id}>
                        <div className="resource-head">
                          <h5>{resource.name}</h5>
                          <a href={resource.url} target="_blank" rel="noreferrer">
                            {copy.labels.link}
                          </a>
                        </div>

                        <p className="resource-description">
                          {copy.resourceDescriptions[resource.id] ?? resource.description}
                        </p>

                        <div className="resource-tags">
                          <span>{`${copy.labels.level}: ${copy.names.levels[resource.level]}`}</span>
                          <span>{`${copy.labels.stage}: ${copy.names.stages[resource.stage]}`}</span>
                          <span>{`${copy.labels.loop}: ${copy.names.loops[resource.loop]}`}</span>
                          <span>{`${copy.labels.scope}: ${copy.names.scopes[resource.scope]}`}</span>
                          <span>{`${copy.labels.domain}: ${copy.names.domains[resource.domain]}`}</span>
                          <span>{`${copy.labels.openness}: ${copy.names.openness[resource.openness]}`}</span>
                          <span>{`${copy.labels.maturity}: ${copy.names.maturity[resource.maturity]}`}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </section>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>{copy.footer.summary}</p>
          <a href="#top">Top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
