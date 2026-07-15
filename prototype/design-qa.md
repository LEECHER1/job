# Design QA

Datum: 15. Juli 2026

## Visuelle Wahrheit

- PDF-Designsystem und bestehende freigegebene Portfolio-Website
- Hero-Zielscreenshot: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-c7b9f374-1f2d-4939-a1c0-2c66b3b6c67e.png`
- Rahmen-Zielscreenshot: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-41b599ce-ea6f-40e5-9faa-8ca6caa987b9.png`
- Dialog-Zielscreenshot: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-3568fb5f-6b46-4f47-8b84-e29c08fc589b.png`
- Nutzervorgaben: `Portfolio · 2026` entfernen, kontrollierte Zeilenumbrüche, Hero leicht nach oben, Rahmen schließen und Favicon auf ein amberfarbenes `A` reduzieren

## Browsergerenderte Umsetzung

- Desktop-Hero, Chrome, 2048 × 1152: `/tmp/job-chrome-hero-final.png`
- geschlossener Kompetenzrahmen, Chrome, 2048 × 1152: `/tmp/job-chrome-frame-bottom-final.png`
- Projektdialog, Chrome, 2048 × 1152: `/tmp/job-chrome-modal-final.png`
- Mobile-Hero, Chrome, 390 × 844: `/tmp/job-chrome-mobile-hero-final.png`
- Mobile-Dialog, Chrome, 390 × 844: `/tmp/job-chrome-mobile-modal-final.png`

## Direkte Vergleiche

- Hero vorher/nachher: `/tmp/qa-hero-before-after.png`
- Kompetenzrahmen vorher/nachher: `/tmp/qa-frame-before-after.png`
- Projektdialog vorher/nachher: `/tmp/qa-modal-before-after.png`

Die Vollansichten bestätigen die responsive Gesamtkomposition. Die fokussierten Vergleiche waren für Hero-Typografie, untere Rahmenkante und Dialogumbruch erforderlich.

## Geprüfte Zustände und Interaktionen

- Desktop-Hero mit Kontaktzeile, Name, Porträt, CTA und kontrollierten Zeilenumbrüchen
- alle sechs Kompetenz-Tabs; jede Auswahl rendert genau vier Karten
- Platzhalterzustand mit dem vereinfachten amberfarbenen `A`
- Dialog öffnen, vollständig darstellen und mit Escape schließen
- Desktop-Dialog: kein horizontaler oder vertikaler Überlauf; Backdrop ebenfalls ohne Überlauf
- Mobile-Hero und Mobile-Dialog bei 390 × 844 ohne horizontalen Seitenüberlauf
- Mobile-Menü öffnet und aktualisiert `aria-expanded`
- Browserkonsole während Seitenaufruf und Kerninteraktionen: keine Fehler

## Fidelity-Prüfung

- **Typografie:** Manrope-Hierarchie, Gewichte und Laufweiten entsprechen dem bestehenden System. `SuperTranslator` bleibt als Wort ungeteilt und bricht nur vor `Pro` um.
- **Abstände und Layout:** Hero sitzt leicht oberhalb der optischen Mitte. Desktop-Raster bleibt 2 × 2; linke Kategorienleiste und Projektbereich enden auf derselben geschlossenen Rahmenkante.
- **Farben und Tokens:** warmes Papierweiß, Schwarz und Amber `#b86f23` bleiben konsistent. Das Favicon hat transparenten Hintergrund und ausschließlich ein amberfarbenes `A`.
- **Bildqualität:** vorhandene Originalmotive werden ohne Streckung verwendet; große Dialogbilder bleiben innerhalb des verfügbaren Viewports.
- **Copy:** `Portfolio · 2026` ist entfernt. Kontaktangaben, Zeilenumbrüche und Projekttexte entsprechen den Nutzervorgaben; keine zusätzlichen Leistungsbehauptungen ergänzt.

## Vergleichshistorie

1. Nutzer-Screenshots zeigten den offenen unteren Rahmen, die zu tiefe Hero-Position und fehlende kontrollierte Umbrüche. Diese Punkte wurden gezielt korrigiert.
2. Erste Chrome-Prüfung bestätigte Hero und Rahmen, zeigte aber eine Trennung innerhalb von `SuperTranslator`. Die Dialog-Textspalte wurde verbreitert und Worttrennung deaktiviert.
3. Zweite Chrome-Prüfung bestätigte einen einzigen Wort-Umbruchbereich für `SuperTranslator`, keinen Dialogüberlauf, keinen Seitenüberlauf sowie korrekte Desktop- und Mobilzustände.

## Befund

- P0: keine
- P1: keine
- P2: keine
- P3: keine offenen visuellen Korrekturen aus der aktuellen Anfrage

final result: passed
