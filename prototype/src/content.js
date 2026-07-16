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
  documentPdf: "Andreas-Schwarz-Lebenslauf-Portfolio-2026.pdf",
  location: "Leonding",
  address: ["Bruno-Gallée-Weg 8/19", "4060 Leonding", "Österreich"],
};

export const navigation = [
  ["Start", "start"],
  ["Profil", "profil"],
  ["Arbeiten", "arbeiten"],
  ["Mehrwert", "mehrwert"],
  ["Kontakt", "kontakt"],
];

export const heroProcess = [
  {
    number: "01",
    label: "Gestaltung",
    description: "Visuelle Systeme & klare Kommunikation",
    discipline: "grafikdesign",
  },
  {
    number: "02",
    label: "Technik",
    description: "3D, IT & automatisierte Workflows",
    discipline: "workflow-prototyping",
  },
  {
    number: "03",
    label: "Umsetzung",
    description: "Produkte verständlich & greifbar machen",
    discipline: "workflow-prototyping",
  },
];

export const valueIntro = {
  kicker: "Mehrwert für Unternehmen",
  title: "Wo Gestaltung auf Technik trifft, wird aus Kommunikation eine Lösung.",
  text: "Mein Mehrwert liegt in der Verbindung: Ich denke visuelle Qualität, Produktverständnis, IT und praktische Umsetzung gemeinsam – vom ersten Entwurf bis zum greifbaren Ergebnis.",
};

export const disciplines = [
  {
    id: "grafikdesign",
    label: "Grafikdesign",
    short: "Layout, Marke & Print",
    text: "Gestaltung für Marken, Broschüren, Kataloge und Geschäftsausstattung – strukturiert und bis zur fertigen Anwendung gedacht.",
  },
  {
    id: "fotografie",
    label: "Fotografie",
    short: "Menschen, Produkte & Räume",
    text: "Business-, Lifestyle- und Produktfotografie mit klarer Bildidee, kontrolliertem Licht und sorgfältiger Ausarbeitung.",
  },
  {
    id: "3d-visualisierung",
    label: "3D-Visualisierung",
    short: "Produkte & Inszenierung",
    text: "Produkte und technische Details werden in Cinema 4D visualisiert und als klare Produkt- oder Kampagnenmotive inszeniert.",
  },
  {
    id: "workflow-prototyping",
    label: "Workflow-Automation & Prototyping",
    short: "Werkzeuge, Systeme & Ideen",
    text: "Eigene digitale Werkzeuge und Prototypen verbinden Gestaltung mit IT, vereinfachen wiederkehrende Abläufe und machen Produktideen greifbar.",
  },
  {
    id: "video",
    label: "Videos",
    short: "Bewegtbild & Atmosphäre",
    text: "Bewegtbild ergänzt die statischen Arbeiten um Atmosphäre, Rhythmus, Raum und zeitlichen Ablauf.",
  },
];

export const projects = [
  {
    title: "Business & Employer Branding",
    eyebrow: "Fotografie",
    text: "Menschen in glaubwürdigen Markensituationen – geplant, fotografiert und für die Unternehmenskommunikation aufbereitet.",
    disciplines: "Fotografie · Licht · Retusche",
    image: "photo-employer-branding-87.jpg",
    alt: "Drei Menschen in einer inszenierten Lifestyle-Szene am Pool",
    tags: ["fotografie"],
  },
  {
    title: "Produktfotografie",
    eyebrow: "Fotografie",
    text: "Technische Komponenten übersichtlich angeordnet und mit kontrollierter Lichtführung fotografiert.",
    disciplines: "Produktfotografie · Licht · Retusche",
    image: "photo-product-components-040200.jpg",
    alt: "Explosionsartige Anordnung einer Filteranlage und ihrer technischen Komponenten",
    tags: ["fotografie"],
  },
  {
    title: "Produktdetail & Material",
    eyebrow: "Fotografie",
    text: "Reduzierte Detailaufnahme, die Form, Oberfläche und Markenprägung eines Produkts sichtbar macht.",
    disciplines: "Detailfotografie · Licht · Retusche",
    image: "photo-gate-293.jpg",
    alt: "Dunkle Detailaufnahme eines Metallrahmens mit geprägtem Steinbach-Schriftzug",
    tags: ["fotografie"],
  },
  {
    title: "Lifestyle-Fotografie",
    eyebrow: "Fotografie",
    text: "Natürlich inszenierte Situationen mit Menschen und Produkten für eine lebendige Markenkommunikation.",
    disciplines: "Fotografie · Inszenierung · Retusche",
    image: "photo-lifestyle-14.jpg",
    alt: "Frau auf einer weißen Liege an einem Swimmingpool",
    tags: ["fotografie"],
  },
  {
    title: "Steinbach Testkit",
    eyebrow: "Produktflyer für die Messe",
    text: "Flyer für ein neues Steinbach-Produkt, entwickelt für den Einsatz auf einer Messe.",
    disciplines: "Grafikdesign · Layout · Produktkommunikation",
    image: "graphic-steinbach-testkit-flyer.jpg",
    alt: "Vorder- und Rückseite eines Steinbach-Flyers für das Testkit Water Analyzer",
    tags: ["grafikdesign"],
    order: 4,
  },
  {
    title: "Poolwelt",
    eyebrow: "3D-Visualisierung & Interactive Publishing",
    text: "Technische Produkte als atmosphärische Produktwelt inszeniert – mit einer Kombination aus 3D und KI.",
    disciplines: "Cinema 4D · Rendering · Produktinszenierung · Interactive Publishing",
    image: "3d-poolwelt.jpg",
    alt: "3D-Visualisierung der Poolwelt als großer Steinbach-Messestand",
    tags: ["3d-visualisierung"],
    embedUrl: "https://indd.adobe.com/embed/1902ac46-b541-42a5-8925-5699f81faa4d",
    externalUrl: "https://indd.adobe.com/view/1902ac46-b541-42a5-8925-5699f81faa4d",
  },
  {
    title: "Pool-Technikbox",
    eyebrow: "3D-Kampagnenvisualisierung",
    text: "Die Pool-Technikbox wurde in Cinema 4D als 3D-Motiv für eine Kampagne erstellt.",
    disciplines: "Cinema 4D · Rendering · Kampagnenvisualisierung",
    image: "3d-technikbox.jpg",
    alt: "Dunkle Cinema-4D-Visualisierung einer Pool-Technikbox mit Steinbach-Schriftzug",
    tags: ["3d-visualisierung"],
  },
  {
    title: "Dogius",
    eyebrow: "Grafikdesign & 3D-Visualisierung",
    text: "Gestaltung und Produktdarstellung für ein modulares Hundeschlafplatzsystem.",
    disciplines: "Grafikdesign · Layout · 3D-Visualisierung",
    image: "graphic-dogius.jpg",
    alt: "Dogius-Markenmotiv mit Hund auf einem modularen Schlafplatz",
    tags: [],
    fit: "contain",
  },
  {
    title: "Pool Champion – Action Broschüre",
    eyebrow: "Grafikdesign & Interactive Publishing",
    text: "Interaktive Produktbroschüre mit klarer Angebotsstruktur, Produktdarstellung und sommerlicher Markenwelt.",
    disciplines: "Editorial Design · Produktkommunikation · Interactive Publishing",
    image: "graphic-pool-champion-action.jpg",
    alt: "Geöffnete Pool-Champion-Action-Broschüre mit Poolpflegeprodukten und sommerlichem Bildmotiv",
    tags: ["grafikdesign"],
    order: 2,
    embedUrl: "https://indd.adobe.com/embed/5f0317d3-ac18-45dc-8d0d-f503bcd994a1",
    externalUrl: "https://indd.adobe.com/view/5f0317d3-ac18-45dc-8d0d-f503bcd994a1",
  },
  {
    title: "Edura Katalog",
    eyebrow: "Kataloggestaltung",
    text: "Katalog für Gartenmöbel-Auflagen mit strukturierter Produktübersicht und visueller Materialwelt.",
    disciplines: "Editorial Design · Katalog · Produktdarstellung",
    image: "graphic-edura-catalog.jpg",
    alt: "Mock-up eines Edura-Katalogs für farbige Gartenmöbel-Auflagen",
    tags: ["grafikdesign"],
    order: 3,
  },
  {
    title: "Steinbach App",
    eyebrow: "Werbeeinschaltung",
    text: "Werbung für die neue Steinbach App als klar aufgebaute Einschaltung.",
    disciplines: "Grafikdesign · Werbemittel · App-Kommunikation",
    image: "graphic-steinbach-app-ad.jpg",
    alt: "Werbeeinschaltung für die Steinbach App mit Smartphone und App-Oberfläche",
    tags: ["grafikdesign"],
    fit: "contain",
    order: 1,
  },
  {
    title: "Bietschies",
    eyebrow: "Grafikdesign",
    text: "Marken- und Broschürengestaltung für eine Ledertaschenmarke mit hochwertiger, editorialer Bildsprache.",
    disciplines: "Branding · Broschüre · Layout",
    image: "graphic-bietschies.jpg",
    alt: "Titelseite einer Bietschies-Markenbroschüre für Ledertaschen",
    tags: ["grafikdesign"],
    fit: "contain",
  },
  {
    title: "Selena Home",
    eyebrow: "Grafikdesign",
    text: "Katalog- und Markenauftritt für eine textile Wohnkollektion mit klarer Produkt- und Bildstruktur.",
    disciplines: "Katalog · Layout · Markenauftritt",
    image: "graphic-selena-home.jpg",
    alt: "Selena-Home-Katalogmotiv mit textilen Wohnaccessoires",
    tags: ["grafikdesign"],
    fit: "contain",
  },
  {
    title: "Interpool Geschäftsausstattung",
    eyebrow: "Grafikdesign",
    text: "Reduzierte Geschäftsausstattung mit Logo, Farbwelt und konsistenter Markenanwendung.",
    disciplines: "Corporate Design · Geschäftsausstattung · Print",
    image: "graphic-interpool.jpg",
    alt: "Blaue Interpool-Visitenkarte mit türkisem Wellenmotiv",
    tags: ["grafikdesign"],
    fit: "contain",
  },
  {
    title: "Smart Water Analyzer",
    eyebrow: "Eigener Prototyp",
    text: "Digitale Wasseranalyse von der Idee über das 3D-Gehäuse und die technische Konzeption bis zur Auswertung.",
    disciplines: "Produktidee · Sensorik · 3D · Prototyping",
    image: "smart-water-analyzer.png",
    alt: "Smart-Water-Analyzer-Prototyp mit zwei Messkammern und geöffnetem Gehäuse",
    tags: ["workflow-prototyping"],
    fit: "contain",
  },
  {
    title: "SuperTranslator Pro",
    eyebrow: "Eigenentwickeltes InDesign-Werkzeug",
    text: "Automatisierte Übersetzung mehrsprachiger Layouts bei möglichst weitgehendem Erhalt von Formatierung und Struktur.",
    disciplines: "InDesign · Automatisierung · Übersetzung",
    image: "supertranslator-pro.png",
    alt: "Mehrsprachige Ausschnitte einer übersetzten Bedienungsanleitung",
    tags: ["workflow-prototyping"],
    fit: "contain",
  },
  {
    title: "Helden des Sommers",
    eyebrow: "Kampagnenvisualisierung",
    text: "Eine inszenierte Produktwelt für Poolroboter, aufgebaut als aufmerksamkeitsstarkes Kampagnenmotiv.",
    disciplines: "3D · Rendering · Produktinszenierung",
    image: "helden-des-sommers.jpg",
    alt: "Mehrere Poolroboter in einer blau inszenierten Unterwasserwelt",
    tags: ["3d-visualisierung"],
    videoUrl: "https://www.youtube.com/watch?v=SKylxGNwffY",
  },
  {
    title: "6-Wege-Ventil",
    eyebrow: "3D-Visualisierung",
    text: "Technisches Produktdetail als präzise Cinema-4D-Visualisierung mit Material, Beschriftung und Funktionselementen.",
    disciplines: "Cinema 4D · Redshift · Produktvisualisierung",
    image: "3d-six-way-valve.jpg",
    alt: "3D-Visualisierung eines schwarzen 6-Wege-Ventils mit gelbem Steinbach-Schriftzug",
    tags: ["3d-visualisierung"],
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
    tags: ["video"],
  },
  {
    title: "Thailand Urlaub 2024/2025",
    eyebrow: "Video",
    text: "Reisevideo aus Thailand aus den Jahren 2024 und 2025.",
    youtubeId: "wbqwdW-8GOA",
    image: "video-thailand-2024-2025.jpg",
    alt: "Vorschaubild zum Video Thailand Urlaub 2024/2025",
    tags: ["video"],
  },
  {
    title: "Video – Poolroboter",
    eyebrow: "Video",
    text: "Videoarbeit rund um einen Poolroboter.",
    youtubeId: "HIYCwtnBErs",
    image: "video-poolroboter.jpg",
    alt: "Vorschaubild zum Video über einen Poolroboter",
    tags: ["video"],
  },
  {
    title: "Video – 3D-Roboter",
    eyebrow: "Video",
    text: "Videoarbeit mit einem 3D-Roboter.",
    youtubeId: "SKylxGNwffY",
    image: "video-3d-roboter.jpg",
    alt: "Vorschaubild zum Video mit einem 3D-Roboter",
    tags: ["video"],
  },
];

export const valuePoints = [
  {
    number: "01",
    title: "Breite visuelle Praxis",
    text: "Fotografie, Grafikdesign, 3D und Produktkommunikation bilden eine belastbare Basis – nicht nur Toolwissen.",
  },
  {
    number: "02",
    title: "Brücke zwischen Design und Technik",
    text: "Gestaltung, IT, strukturierte Daten, Automatisierung und Prototyping werden als zusammenhängende Aufgabe gedacht.",
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
