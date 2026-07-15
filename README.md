# Andreas Schwarz – Portfolio-Website

Responsive Bewerbungs- und Portfolio-Website für:

- `https://theblackpixel.at/job/`
- Positionierung: Visual Designer | Creative Engineer
- Sprache der ersten Version: Deutsch

Die Website übersetzt den Schwarz-Weiß-Charakter des PDF-Portfolios in ein responsives digitales Designsystem mit dezentem Amber-Akzent, echten Projektbildern und einem interaktiven Kompetenznavigator. IT & Automatisierung ist als verbindende Kompetenz sichtbar; Video ist gemeinsam mit Fotografie organisiert.

## Lokal starten

```bash
cd prototype
npm install
npm run dev
```

Der Produktions-Build wird mit `npm run build` erzeugt und ist für den Unterordner `/job/` konfiguriert.

## Inhalte ändern

- Texte, Navigation, Projekte, Kategorien, Werdegang und Links: `prototype/src/content.js`
- Bilder: `prototype/public/images/`
- Öffentliches Lebenslauf- und Portfolio-PDF: `prototype/public/Andreas-Schwarz-Lebenslauf-Portfolio.pdf`
- Ausführliche Anleitung: `prototype/docs/inhalte-aendern.md`

## Aktueller Stand

- [Phase 1: Analyse und MVP-Empfehlung](docs/phase-1-analyse.md)
- Phase 2: Konzept und Designsystem – umgesetzt
- Phase 3: Responsive React/Vite-Website – umgesetzt
- Phase 4: Inhalte und Originalbilder – umgesetzt
- Phase 5: Qualität und responsive Prüfung – abgeschlossen

Inhalt und Gestaltung sind aus dem freigegebenen Lebenslauf/Portfolio und den bereitgestellten Originaldaten abgeleitet. Nicht belegte Tätigkeiten, Ergebnisse oder Kennzahlen werden nicht ergänzt. Das gemeinsame öffentliche PDF enthält die Lebenslauf- und Portfolioseiten, jedoch keine Zeugnisse oder Zertifikatsseite.
