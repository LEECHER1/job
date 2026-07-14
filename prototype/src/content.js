// ZENTRALE INHALTSDATEI
// Texte, Links, Kategorien und Bilddateien der Website werden hier gepflegt.
// Neue Bilder kommen nach: public/images/

export const site = {
  name: "Andreas Schwarz",
  role: "Visual Designer | Creative Engineer",
  email: "schwarz.andreas@liwest.at",
  phoneLabel: "+43 650 24 19 890",
  phoneHref: "+436502419890",
  linkedin: "https://www.linkedin.com/in/andreas-schwarz1989",
  documentPdf: "Andreas-Schwarz-Lebenslauf-Portfolio.pdf",
  address: ["Bruno-Gallée-Weg 8/19", "4060 Leonding", "Österreich"],
};

export const navigation = [
  ["Start", "start"],
  ["Profil", "profil"],
  ["Arbeiten", "arbeiten"],
  ["Video", "video"],
  ["Mehrwert", "mehrwert"],
  ["Kontakt", "kontakt"],
];

export const disciplines = [
  {
    id: "visual-design",
    label: "Visual Design",
    short: "Visuelle Systeme",
    text: "Klare Gestaltung für Produkte, Kampagnen und Markenauftritte – von der Idee bis zur druck- oder digitalfertigen Umsetzung.",
  },
  {
    id: "3d-visualisierung",
    label: "3D-Visualisierung",
    short: "Räume & Produkte",
    text: "Produkte und technische Ideen werden sichtbar, bevor sie fotografiert, produziert oder präsentiert werden.",
  },
  {
    id: "produktkommunikation",
    label: "Produktkommunikation",
    short: "Komplexes erklären",
    text: "Bild, Layout und Produktverständnis greifen ineinander, damit Nutzen und Funktion schneller erfassbar werden.",
  },
  {
    id: "pim-workflows",
    label: "PIM & Workflows",
    short: "Abläufe vereinfachen",
    text: "Strukturierte Daten, Layoutautomatisierung und eigene Werkzeuge reduzieren wiederkehrende manuelle Arbeit.",
  },
  {
    id: "fotografie",
    label: "Fotografie",
    short: "Menschen & Produkte",
    text: "Produkt-, Business-, Portrait-, Event-, Architektur- und Drohnenfotografie mit einer klaren Bildaussage.",
  },
];

export const projects = [
  {
    title: "Smart Water Analyzer",
    eyebrow: "Eigener Prototyp",
    text: "Digitale Wasseranalyse von der Idee über das 3D-Gehäuse und die technische Konzeption bis zur Auswertung.",
    disciplines: "Produktidee · Sensorik · 3D · Prototyping",
    image: "smart-water-analyzer.png",
    alt: "Smart-Water-Analyzer-Prototyp mit zwei Messkammern und geöffnetem Gehäuse",
    tags: ["3d-visualisierung", "produktkommunikation"],
    fit: "contain",
  },
  {
    title: "SuperTranslator Pro",
    eyebrow: "Eigenentwickeltes InDesign-Werkzeug",
    text: "Automatisierte Übersetzung mehrsprachiger Layouts bei möglichst weitgehendem Erhalt von Formatierung und Struktur.",
    disciplines: "InDesign · Automatisierung · Übersetzung",
    image: "supertranslator-pro.png",
    alt: "Mehrsprachige Ausschnitte einer übersetzten Bedienungsanleitung",
    tags: ["visual-design", "pim-workflows"],
    fit: "contain",
  },
  {
    title: "Helden des Sommers",
    eyebrow: "Kampagnenvisualisierung",
    text: "Eine inszenierte Produktwelt für Poolroboter, aufgebaut als aufmerksamkeitsstarkes Kampagnenmotiv.",
    disciplines: "3D · Rendering · Produktinszenierung",
    image: "helden-des-sommers.jpg",
    alt: "Mehrere Poolroboter in einer blau inszenierten Unterwasserwelt",
    tags: ["visual-design", "3d-visualisierung", "produktkommunikation"],
  },
  {
    title: "3D & Produktkommunikation",
    eyebrow: "Visualisierung",
    text: "Technische Produkte und Produktwelten verständlich inszeniert – von Cinema 4D bis zur Kombination aus 3D und KI.",
    disciplines: "Cinema 4D · Rendering · Produktinszenierung",
    image: "product-visualization.jpg",
    alt: "Visualisierte Wasserpflegeprodukte vor einem Swimmingpool",
    tags: ["3d-visualisierung", "produktkommunikation"],
  },
  {
    title: "Technikbox",
    eyebrow: "3D-Produktstudie",
    text: "Technisches Gehäuse als reduzierte 3D-Visualisierung mit Fokus auf Form, Material und Funktion.",
    disciplines: "3D · Material · Rendering",
    image: "technikbox.jpg",
    alt: "Dunkle 3D-Visualisierung einer technischen Steinbach Box",
    tags: ["3d-visualisierung", "produktkommunikation"],
  },
  {
    title: "Business & Employer Branding",
    eyebrow: "Fotografie",
    text: "Menschen in glaubwürdigen Arbeitssituationen und Markenwelten – geplant, fotografiert und für die Kommunikation aufbereitet.",
    disciplines: "Fotografie · Licht · Retusche",
    image: "employer-branding.jpg",
    alt: "Drei Menschen im Gespräch am Rand eines Swimmingpools",
    tags: ["visual-design", "fotografie"],
  },
];

// Neue Videos können hier ergänzt werden. Benötigt werden YouTube-ID,
// Vorschaubild unter public/images/ sowie Titel und kurzer Beschreibungstext.
export const videos = [
  {
    title: "Gelsendiele",
    eyebrow: "Video",
    text: "Bewegtbild ergänzt das Portfolio um Atmosphäre, Rhythmus und Raum.",
    youtubeId: "24dl-1U2Dco",
    image: "gelsendiele-video.jpg",
    alt: "Gelsendiele mit Garten und Sitzbereich in der Abendsonne",
  },
];

export const valuePoints = [
  {
    number: "01",
    title: "18+ Jahre visuelle Praxis",
    text: "Fotografie, Grafikdesign, 3D und Produktkommunikation bilden eine belastbare Basis – nicht nur Toolwissen.",
  },
  {
    number: "02",
    title: "Brücke zwischen Design und Technik",
    text: "Gestaltung, strukturierte Daten, Automatisierung und Prototyping werden als zusammenhängende Aufgabe gedacht.",
  },
  {
    number: "03",
    title: "Vom Konzept bis zum Test",
    text: "Ideen werden nicht nur präsentiert, sondern als Visualisierung, Werkzeug oder funktionaler Prototyp greifbar gemacht.",
  },
  {
    number: "04",
    title: "Weniger Übergaben im Prozess",
    text: "Eine breite Umsetzungskompetenz kann Schnittstellen zwischen Kreation, Produkt, Daten und Produktion vereinfachen.",
  },
];

export const companyFit = [
  "Technische Produkte verständlich kommunizieren",
  "Visuelle Qualität über Kanäle hinweg sichern",
  "Wiederkehrende Layoutarbeit automatisieren",
  "Neue Produktideen schnell sichtbar machen",
];

export const career = [
  {
    years: "2017 – heute",
    company: "Steinbach International GmbH",
    role: "Visual Designer · Grafikdesign · Fotografie · 3D-Design · Workflow-Automatisierung",
  },
  {
    years: "2011 – 2017",
    company: "BHD-International GmbH / Recons GmbH",
    role: "Grafiker · Fotograf · Medienproduktion",
  },
  {
    years: "2010 – 2011",
    company: "Satori GmbH",
    role: "Fotograf · Grafiker",
  },
  {
    years: "2008 – 2009",
    company: "Lang & Lang GmbH",
    role: "Fotograf",
  },
  {
    years: "2004 – 2008",
    company: "Lang & Lang GmbH",
    role: "Lehre als Fotograf",
  },
];
