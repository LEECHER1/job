import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowDownRight, ArrowsOutSimple, EnvelopeSimple, MapPin, X } from "@phosphor-icons/react";
import {
  career,
  companyFit,
  disciplines,
  heroProcess,
  navigation,
  projects,
  site,
  valueIntro,
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

function ProjectCard({ project, onOpen }) {
  const base = import.meta.env.BASE_URL;
  const interactive = Boolean(project.embedUrl);

  return (
    <article className="project-card">
      <button
        type="button"
        className={`project-image project-image-button${project.fit === "contain" ? " is-contained" : ""}`}
        onClick={() => onOpen(project)}
        aria-label={`${project.title} ${interactive ? "interaktiv" : "vergrößert"} ansehen`}
      >
        <img src={`${base}images/${project.image}`} alt={project.alt} loading="lazy" />
        <span><ArrowsOutSimple size={18} weight="bold" aria-hidden="true" /> {interactive ? "Interaktiv ansehen" : "Projekt ansehen"}</span>
      </button>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <span>{project.disciplines}</span>
      </div>
    </article>
  );
}

function PlaceholderCard({ discipline }) {
  const base = import.meta.env.BASE_URL;

  return (
    <article className="project-card project-placeholder" aria-label={`Platzhalter für eine weitere Arbeit aus ${discipline.label}`}>
      <div className="project-image placeholder-image" aria-hidden="true">
        <img src={`${base}favicon.svg`} alt="" />
      </div>
      <div className="project-copy">
        <p className="eyebrow">In Vorbereitung</p>
        <h3>Projekt folgt</h3>
        <p>Hier wird eine weitere ausgewählte Arbeit aus dem Bereich {discipline.label} ergänzt.</p>
        <span>Platzhalter · Inhalt folgt</span>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const base = import.meta.env.BASE_URL;
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll("button, a[href], iframe");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        className="project-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <button ref={closeRef} type="button" className="project-modal-close" onClick={onClose} aria-label="Projektansicht schließen">
          <X size={24} weight="bold" aria-hidden="true" />
        </button>
        <div className={`project-modal-image${project.fit === "contain" ? " is-contained" : ""}${project.embedUrl ? " is-interactive" : ""}`}>
          {project.embedUrl ? (
            <iframe
              src={project.embedUrl}
              title={`${project.title} – interaktives Portfolio`}
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <img src={`${base}images/${project.image}`} alt={project.alt} />
          )}
        </div>
        <div className="project-modal-copy">
          <p className="eyebrow">{project.eyebrow}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p id="project-modal-description">{project.text}</p>
          {project.externalUrl && (
            <a className="project-modal-link" href={project.externalUrl} target="_blank" rel="noreferrer">
              In voller Größe öffnen ↗
            </a>
          )}
          <span>{project.disciplines}</span>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video }) {
  const base = import.meta.env.BASE_URL;
  const [playing, setPlaying] = useState(false);

  return (
    <article className="project-card video-project-card">
      <div className="project-image video-media">
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
      <div className="project-copy">
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
  const [activeProject, setActiveProject] = useState(null);
  const closeProject = useCallback(() => setActiveProject(null), []);
  const openProcessStep = useCallback((disciplineId) => {
    setSelectedDiscipline(disciplineId);
    requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("arbeiten")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  }, []);
  const selected = disciplines.find((item) => item.id === selectedDiscipline) ?? disciplines[0];
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.tags.includes(selectedDiscipline)),
    [selectedDiscipline],
  );
  const filteredVideos = useMemo(
    () => videos.filter((video) => video.tags.includes(selectedDiscipline)),
    [selectedDiscipline],
  );
  const visibleWorks = useMemo(
    () => [
      ...filteredProjects.map((project) => ({ type: "project", item: project })),
      ...filteredVideos.map((video) => ({ type: "video", item: video })),
    ].slice(0, 4),
    [filteredProjects, filteredVideos],
  );
  const selectedWorkCount = visibleWorks.length;

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
            <p className="eyebrow hero-location">
              <span className="hero-location-place"><MapPin size={15} weight="bold" aria-hidden="true" />{site.location}</span>
              <a href={`tel:${site.phoneHref}`}>Tel.: {site.phoneLabel}</a>
              <a href={`mailto:${site.email}`}><EnvelopeSimple size={15} weight="bold" aria-hidden="true" />{site.email}</a>
            </p>
            <h1 id="hero-title"><span>Andreas</span><strong>Schwarz</strong></h1>
            <p className="hero-role">Visual Designer <i>|</i> Creative Engineer</p>
            <p className="hero-lead">Ich verbinde Design, Technik und Umsetzung –<br />damit aus komplexen Produkten klare Kommunikation und aus Ideen greifbare Lösungen werden.</p>
            <p className="hero-disciplines">Grafikdesign · Fotografie & Video · 3D-Visualisierung ·<br />Produktdesign & Prototyping · IT & Workflow-Automatisierung</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#arbeiten">Projekte entdecken</a>
              <a className="button button-secondary" href={`${base}${site.documentPdf}`} target="_blank" rel="noreferrer">Lebenslauf & Portfolio als PDF</a>
            </div>
          </div>
          <figure className="hero-image">
            <img src={`${base}images/andreas-schwarz.jpg`} alt="Andreas Schwarz im schwarzen Sakko vor moderner Architektur" />
            <figcaption><b>Erfahrung aus</b><span>Design, Technik<br />und Umsetzung</span></figcaption>
          </figure>
          <div className="hero-index" aria-label="Interaktive Einstiege in das Kompetenzprofil">
            {heroProcess.map((step) => (
              <button
                key={step.number}
                type="button"
                onClick={() => openProcessStep(step.discipline)}
                aria-label={`${step.label}: ${step.description}. Passende Arbeiten anzeigen`}
              >
                <span>{step.number}</span>
                <span className="hero-index-copy"><b>{step.label}</b><small>{step.description}</small></span>
                <ArrowDownRight size={17} weight="bold" aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>

        <section className="profile-section" id="profil" aria-labelledby="profile-title">
          <SectionHeading
            kicker="Profil & Lebenslauf"
            title="Eine Laufbahn, die Disziplinen verbindet."
            text="Fotografie war der Ausgangspunkt. Danach kamen Grafikdesign, Produktkommunikation und 3D – später IT, Automatisierung, Elektronik und Prototyping."
            id="profile-title"
          />
          <div className="profile-layout" data-reveal>
            <aside>
              <p className="eyebrow">Creative Engineer</p>
              <p>Ich gestalte nicht nur die Oberfläche. Ich verbinde visuelle Systeme mit IT, automatisiere Abläufe und mache Produktideen als Bild, 3D-Modell oder funktionalen Prototyp greifbar.</p>
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
            kicker="Kompetenzfelder"
            title="Sechs Kompetenzen. Eine Verbindung."
            text="Die Schwerpunkte stehen nicht nebeneinander: Sie greifen dort ineinander, wo Gestaltung, Produktverständnis und IT gemeinsam eine Lösung ergeben."
            id="work-title"
          />
          <div className="competence-explorer" data-reveal>
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
                  <span className="discipline-label"><b>{discipline.label}</b><small>{discipline.short}</small></span>
                </button>
              ))}
            </div>
            <div className="discipline-panel">
              <div className="discipline-summary" aria-live="polite">
                <div><p className="eyebrow">{selected.label}</p><p>{selected.text}</p></div>
                <span>{selectedWorkCount} {selectedWorkCount === 1 ? "ausgewählte Arbeit" : "ausgewählte Arbeiten"}</span>
              </div>
              <div className="project-grid project-grid-animated" key={selectedDiscipline} id="project-panel" role="tabpanel">
                {Array.from({ length: 4 }, (_, index) => {
                  const work = visibleWorks[index];
                  if (!work) return <PlaceholderCard key={`${selectedDiscipline}-placeholder-${index}`} discipline={selected} />;
                  if (work.type === "video") return <VideoCard key={work.item.youtubeId} video={work.item} />;
                  return <ProjectCard key={work.item.title} project={work.item} onOpen={setActiveProject} />;
                })}
              </div>
            </div>
          </div>
          <p className="portfolio-note">Die Website zeigt eine fokussierte Auswahl. Lebenslauf und vollständiges visuelles Portfolio finden Sie im <a href={`${base}${site.documentPdf}`} target="_blank" rel="noreferrer">gemeinsamen PDF ↗</a>.</p>
        </section>

        <section className="value-section" id="mehrwert" aria-labelledby="value-title">
          <SectionHeading
            kicker={valueIntro.kicker}
            title={valueIntro.title}
            text={valueIntro.text}
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
      {activeProject && <ProjectModal project={activeProject} onClose={closeProject} />}
    </>
  );
}
