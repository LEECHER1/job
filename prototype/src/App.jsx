import { useEffect, useMemo, useState } from "react";
import {
  career,
  companyFit,
  disciplines,
  navigation,
  projects,
  site,
  valuePoints,
  videos,
} from "./content";

function Header({ activeSection }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#start" aria-label="Andreas Schwarz – zum Start">
        <span className="brand-mark" aria-hidden="true" />
        <span>
          <b>{site.name}</b>
          <small>{site.role}</small>
        </span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Schließen" : "Menü"}
      </button>
      <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Hauptnavigation">
        {navigation.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "is-active" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function ProjectCard({ project }) {
  const base = import.meta.env.BASE_URL;

  return (
    <article className="project-card">
      <div className={`project-image${project.fit === "contain" ? " is-contained" : ""}`}>
        <img src={`${base}images/${project.image}`} alt={project.alt} loading="lazy" />
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <span>{project.disciplines}</span>
      </div>
    </article>
  );
}

function VideoCard({ video }) {
  const base = import.meta.env.BASE_URL;
  const [playing, setPlaying] = useState(false);

  return (
    <article className="video-feature">
      <div className="video-media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={`${video.title} – Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`${video.title} abspielen`}>
            <img src={`${base}images/${video.image}`} alt={video.alt} loading="lazy" />
            <span>Video ansehen</span>
          </button>
        )}
      </div>
      <div className="video-copy">
        <p className="eyebrow">{video.eyebrow}</p>
        <h3>{video.title}</h3>
        <p>{video.text}</p>
        <span>YouTube · Externer Inhalt</span>
      </div>
    </article>
  );
}

function SectionHeading({ kicker, title, text, id }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function App() {
  const base = import.meta.env.BASE_URL;
  const [selectedDiscipline, setSelectedDiscipline] = useState(disciplines[0].id);
  const [activeSection, setActiveSection] = useState("start");
  const selected = disciplines.find((item) => item.id === selectedDiscipline) ?? disciplines[0];
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.tags.includes(selectedDiscipline)),
    [selectedDiscipline],
  );

  useEffect(() => {
    const sections = navigation.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <Header activeSection={activeSection} />
      <main id="main-content">
        <section className="hero" id="start" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1 id="hero-title"><span>Andreas</span><strong>Schwarz</strong></h1>
            <p className="hero-role">Visual Designer <i>|</i> Creative Engineer</p>
            <p className="hero-lead">Ich verbinde Design, Technik und Umsetzung – damit aus komplexen Produkten klare Kommunikation und aus Ideen greifbare Lösungen werden.</p>
            <p className="hero-disciplines">Grafikdesign · Fotografie · 3D-Visualisierung · Produktdesign & Prototyping · Workflow-Automatisierung</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#arbeiten">Projekte entdecken</a>
              <a className="button button-secondary" href={`${base}${site.documentPdf}`} target="_blank" rel="noreferrer">Lebenslauf & Portfolio als PDF</a>
            </div>
          </div>
          <figure className="hero-image">
            <img src={`${base}images/andreas-schwarz.jpg`} alt="Andreas Schwarz im schwarzen Sakko vor moderner Architektur" />
            <figcaption><b>18+ Jahre</b><span>visuelle Erfahrung<br />mit technischer Neugier</span></figcaption>
          </figure>
          <div className="hero-index" aria-label="Kompetenzprofil">
            <span>01</span><p>Gestaltung</p><span>02</span><p>Technik</p><span>03</span><p>Umsetzung</p>
          </div>
        </section>

        <section className="profile-section" id="profil" aria-labelledby="profile-title">
          <SectionHeading
            kicker="Profil & Lebenslauf"
            title="Eine Laufbahn, die Disziplinen verbindet."
            text="Fotografie war der Ausgangspunkt. Danach kamen Grafikdesign, Produktkommunikation und 3D – später Automatisierung, Elektronik und Prototyping."
            id="profile-title"
          />
          <div className="profile-layout" data-reveal>
            <aside>
              <p className="eyebrow">Creative Engineer</p>
              <p>Ich gestalte nicht nur die Oberfläche. Ich entwickle visuelle Systeme, automatisiere Abläufe und mache Produktideen als Bild, 3D-Modell oder funktionalen Prototyp greifbar.</p>
              <a href={`${base}${site.documentPdf}`} target="_blank" rel="noreferrer">Lebenslauf & Portfolio ansehen ↗</a>
            </aside>
            <ol className="career-list">
              {career.map((entry) => (
                <li key={`${entry.company}-${entry.years}`}>
                  <time>{entry.years}</time>
                  <div><h3>{entry.company}</h3><p>{entry.role}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="work-section" id="arbeiten" aria-labelledby="work-title">
          <SectionHeading
            kicker="Ausgewählte Arbeiten"
            title="Ein Profil. Fünf Perspektiven."
            text="Wählen Sie einen Schwerpunkt und sehen Sie direkt die passenden Arbeiten – von visueller Gestaltung bis zu eigenen Werkzeugen."
            id="work-title"
          />
          <div className="discipline-layout" data-reveal>
            <div className="discipline-tabs" role="tablist" aria-label="Arbeiten nach Schwerpunkt filtern">
              {disciplines.map((discipline, index) => (
                <button
                  key={discipline.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedDiscipline === discipline.id}
                  aria-controls="project-panel"
                  className={selectedDiscipline === discipline.id ? "is-selected" : ""}
                  onClick={() => setSelectedDiscipline(discipline.id)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{discipline.label}</b>
                  <small>{discipline.short}</small>
                </button>
              ))}
            </div>
            <div className="discipline-summary" aria-live="polite">
              <p>{selected.text}</p>
              <span>{filteredProjects.length} {filteredProjects.length === 1 ? "ausgewählte Arbeit" : "ausgewählte Arbeiten"}</span>
            </div>
          </div>
          <div className="project-grid project-grid-animated" key={selectedDiscipline} id="project-panel" role="tabpanel">
            {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <p className="portfolio-note">Die Website zeigt eine fokussierte Auswahl. Lebenslauf und vollständiges visuelles Portfolio finden Sie im <a href={`${base}${site.documentPdf}`} target="_blank" rel="noreferrer">gemeinsamen PDF ↗</a>.</p>
        </section>

        <section className="video-section" id="video" aria-labelledby="video-title">
          <SectionHeading
            kicker="Bewegtbild"
            title="Arbeiten, die sich bewegen."
            text="Video ergänzt die statischen Projekte um Atmosphäre und zeitlichen Ablauf. Weitere Arbeiten lassen sich später über dieselbe Struktur ergänzen."
            id="video-title"
          />
          <div className="video-list" data-reveal>
            {videos.map((video) => <VideoCard key={video.youtubeId} video={video} />)}
          </div>
        </section>

        <section className="value-section" id="mehrwert" aria-labelledby="value-title">
          <SectionHeading
            kicker="Mehrwert für Unternehmen"
            title="Wirkung entsteht zwischen den Disziplinen."
            text="Besonders wertvoll wird mein Profil dort, wo Gestaltung, Produktverständnis und technische Umsetzung nicht getrennt voneinander funktionieren."
            id="value-title"
          />
          <div className="value-grid" data-reveal>
            {valuePoints.map((point) => (
              <article key={point.number}>
                <span>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <div className="fit-block" data-reveal>
            <p className="eyebrow">Besonders passend, wenn Sie …</p>
            <ul>
              {companyFit.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="button button-light" href="#kontakt">Passung besprechen</a>
          </div>
        </section>

        <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
          <p className="eyebrow">Kontakt</p>
          <h2 id="contact-title">Passt mein Profil zu Ihrer nächsten Aufgabe?</h2>
          <p>Dann lassen Sie uns kurz über Produkte, Prozesse und den konkreten Bedarf sprechen.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${site.email}`}>E-Mail schreiben</a>
            <a className="button button-dark-outline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ansehen</a>
          </div>
          <div className="contact-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phoneLabel}</a>
            <address>{site.address.map((line) => <span key={line}>{line}</span>)}</address>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>© 2026 {site.name} · {site.role}</p>
        <a href="#start">Nach oben ↑</a>
      </footer>
    </>
  );
}
