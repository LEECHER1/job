# Design QA

Datum: 15. Juli 2026

## Visuelle Wahrheit

- PDF-Designsystem und bestehende freigegebene Portfolio-Website
- Mehrwert-Referenz: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-6a63843b-46b5-43b5-ab5e-3f608a782521.png`
- Portrait-Claim-Referenz: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-4cd70fe6-b39d-4037-b24a-ab6155c5739d.png`
- Prozessleisten-Referenz: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-c4775d9a-1bd7-4285-a0cb-404ddd2c7083.png`
- Nutzervorgaben: neuer Mehrwert-Text, Ersatz für „18+ Jahre“, funktionale Prozessleiste und dezente Mikroanimationen

## Browsergerenderte Umsetzung

- Desktop-Hero, Chrome, 2048 × 1152: `/tmp/job-micro-focus-desktop2.png`
- Desktop-Mehrwert, Chrome, 2048 × 1152: `/tmp/job-micro-value-updated2.png`
- Mobile Prozessleiste, Chrome, 390 × 844: `/tmp/job-micro-process-mobile.png`
- Live-Desktop nach FTP-Upload, Chrome, 2048 × 1152: `/tmp/job-live-micro-desktop.png`
- Live-Mobile nach FTP-Upload, Chrome, 390 × 844: `/tmp/job-live-micro-mobile.png`
- Gemeinsame Vergleichsansicht: `/tmp/job-qa-comparison.png`

## Direkter Vergleich

Die gemeinsame Vergleichsansicht stellt Referenz und Umsetzung pro Bereich in derselben Bilddatei gegenüber. Die Vollansicht prüft Gesamtkomposition und Hierarchie; die fokussierten Zeilen prüfen Portrait-Claim und Prozessleiste lesbar im Detail.

## Geprüfte Zustände und Interaktionen

- Prozessschritt 01 öffnet `Grafikdesign`.
- Prozessschritt 02 öffnet `IT & Automatisierung`.
- Prozessschritt 03 öffnet `Produktkommunikation`.
- Alle drei Schaltflächen besitzen vollständige zugängliche Namen.
- Tastaturreihenfolge erreicht die Prozessleiste; Fokusdarstellung ist vorhanden.
- Mobile Prozessleiste bei 390 × 844 ohne horizontalen Überlauf.
- Desktop und Mobile jeweils ohne Seitenüberlauf.
- `prefers-reduced-motion: reduce` reduziert Animation und Transition auf `0.00001s` und deaktiviert sanftes Scrollen.
- Browserkonsole während Seitenaufruf und Kerninteraktionen: keine Fehler.
- Live-Domain `https://www.theblackpixel.at/job/`: alle drei Ziele korrekt, kein Überlauf und keine Konsolenfehler.

## Fidelity-Prüfung

- **Typografie:** Manrope, Gewichte, Laufweiten und die großformatige Mehrwert-Hierarchie bleiben im bestehenden System. Der neue Text bricht kontrolliert und bleibt innerhalb des Rasters.
- **Abstände und Layout:** Die Prozessleiste bleibt desktop horizontal; mobil werden die drei Schritte mit dauerhaft lesbaren Kurzbeschreibungen gestapelt. Alle Rahmen schließen bündig.
- **Farben und Tokens:** Papierweiß, Schwarz und Amber bleiben unverändert. Mikrointeraktionen verwenden ausschließlich vorhandene Tokens.
- **Bildqualität:** Das vorhandene Portrait bleibt unverändert und wird nicht gestreckt. Der neue Claim sitzt weiterhin im ruhigen dunklen Bildbereich.
- **Copy:** „18+ Jahre“ ist vollständig entfernt. Der Claim lautet „Design + IT / visuell gedacht / technisch umgesetzt“. Der Mehrwert benennt Gestaltung, Produktverständnis, IT und Umsetzung ohne neue Tätigkeiten oder Ergebnisse zu behaupten.

## Vergleichshistorie

1. Die Nutzerreferenz zeigte eine rein beschriftende Prozessleiste, den Claim „18+ Jahre“ und einen allgemeineren Mehrwert-Text.
2. Die erste Umsetzung machte die drei Schritte funktional, ersetzte den Portrait-Claim und führte die neue Mehrwert-Aussage ein. Die visuelle Prüfung zeigte anschließend noch „18+ Jahre visuelle Praxis“ in der ersten Mehrwert-Karte.
3. Der verbliebene Text wurde in „Breite visuelle Praxis“ geändert. Die erneute Chrome-Prüfung bestätigte die drei Zielkategorien, zugängliche Namen, Tastaturzugriff, reduzierte Bewegung, 390-px-Responsivität und null Konsolenfehler.

## Befund

- P0: keine
- P1: keine
- P2: keine
- P3: keine offenen visuellen Korrekturen aus der aktuellen Anfrage

final result: passed
