# Design QA

Datum: 15. Juli 2026

## Quelle und Implementierung

Visuelle Quelle der freigegebenen Kombination:

- `/Users/andreas.schwarz/.codex/generated_images/019f6237-4aad-7f12-a500-40a70159a8c5/exec-649cda0e-c7c7-40a3-8695-7f5f78b1793e.png`
- Grundlayout und Interaktion aus Variante 2
- Navigation und gedämpfter Amber-Akzent aus Variante 3
- Originalportrait mit harter diagonaler Kante aus Variante 1

Browsergerenderte Implementierung:

- Desktop-Start, 3584 × 2278 px: `/tmp/andreas-it-home.png`
- Desktop-Kompetenznavigator, 3584 × 2278 px: `/tmp/andreas-it-work-final.png`
- IT-Kategorie, 3584 × 2278 px: `/tmp/andreas-it-category-top.png`
- Fotografie & Video, 3584 × 2278 px: `/tmp/andreas-photo-video.png`
- aktives Video, 3584 × 2278 px: `/tmp/andreas-photo-video-playing.png`
- Mobilansicht, 1124 × 2104 px bei 450 × 940 pt Safari-Fenster: `/tmp/andreas-it-mobile-work-final-2.png`

Geprüfte Zustände: Start, Navigation, Visual Design, IT & Automatisierung, Fotografie & Video, Click-to-load-Video und mobile Kategorienavigation.

## Vergleich

Die freigegebene Referenz und die Desktop-Implementierung wurden in einem gemeinsamen Vergleich geöffnet. Ebenso wurden die bisherige Kategorienansicht und der neue Kompetenznavigator gemeinsam verglichen. Browserrahmen und Zuschnitt unterscheiden sich, die relevanten Inhaltsregionen waren jedoch vollständig sichtbar. Ein zusätzlicher Detailausschnitt war nicht nötig, weil Typografie, Regeln, Kategorien, Projektbilder und Zustände in den hochauflösenden Vollansichten lesbar waren.

### Erforderliche Gestaltungsflächen

- Typografie: Manrope, starke Andreas/Schwarz-Hierarchie, klare Versalien und lesbare optische Gewichte entsprechen der freigegebenen Richtung. Die mobile Überschrift wurde nach dem ersten Vergleich verdichtet.
- Abstände und Raster: Das warme, editoriale Großraster bleibt erhalten. Der Navigator verbindet Kategorie, Erklärung und Arbeit kompakter als die vorherige fünfspaltige Kopfzeile.
- Farben und Tokens: Warmweiß, Schwarz, harte Linien und der zurückhaltende Amber-Akzent `#B86F23` sind konsistent.
- Bilder: ausschließlich reale Projektbilder und das Originalportrait; Schärfe, Crop und diagonale Portraitkante sind stimmig. Keine Platzhalter oder nachgebauten Assets.
- Inhalt: Leonding ist im Hero sichtbar. IT & Automatisierung ist durch PDF-Inhalte belegt. Video ist in Fotografie & Video integriert. Es wurden keine Tätigkeiten, Qualifikationen oder Ergebnisse erfunden.

## Interaktion und Technik

- Produktions-Build mit Vite: bestanden
- Desktop-Navigation und aktive Zustände: bestanden
- fünf Kategorien inklusive Beschreibung, Anzahl, Animation und Projektwechsel: bestanden
- IT & Automatisierung zeigt Smart Water Analyzer und SuperTranslator Pro: bestanden
- Fotografie & Video zeigt Fotoarbeit und Video im selben Raster: bestanden
- Click-to-load-Embed über `youtube-nocookie.com`: bestanden
- mobile Navigation mit fünf Zielen: bestanden
- horizontal scrollbare Kategorien ohne sichtbare Scrollbar oder Seitenüberbreite: bestanden
- gemeinsames Lebenslauf- und Portfolio-PDF erreichbar: bestanden
- Kontaktbereich mit E-Mail, Telefon, LinkedIn und Anschrift: bestanden
- reduzierte Bewegung über `prefers-reduced-motion`: umgesetzt
- keine sichtbaren Browserfehler beim Navigieren und Abspielen; ein programmatischer Zugriff auf die Safari-Konsole war in dieser Umgebung deaktiviert

## Vergleichshistorie

1. P2 – Die mobile Einleitung beanspruchte zu viel Höhe, sodass die Kategorien im ersten sichtbaren Bereich noch nicht auftauchten.
2. Fix – Mobile Oberkante, Überschrift, Absatzabstand und Abschlussabstand wurden verdichtet.
3. Nachprüfung – `/tmp/andreas-it-mobile-work-final-2.png` zeigt Überschrift, Erklärung, Kategorieauswahl und den Beginn der Arbeit gemeinsam ohne Überbreite.

## Befund

- P0: keine
- P1: keine
- P2: keine
- Restlücke: Safari-Konsole konnte nicht automatisiert ausgelesen werden; Build, sichtbare Interaktion und Netzwerkziel des Embeds wurden dennoch erfolgreich geprüft.

final result: passed
