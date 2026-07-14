# Phase 1 - Analyse und MVP-Empfehlung

Stand: 14. Juli 2026

## 1. Entscheidung in Kürze

Die erste Version sollte eine schnelle, statisch ausgelieferte Bewerbungs-Web-App werden: eine prägnante Startseite für den 30-Sekunden-Einstieg, eine kuratierte Projektübersicht, eigenständig teilbare Projektseiten und ein klarer Kontaktabschluss.

Empfohlen wird **React mit TypeScript auf Basis von Next.js als Static Export**, nicht als Server-Anwendung. Der klare Vorteil gegenüber einer reinen Vite-SPA liegt hier in den Anforderungen: jede Projektseite kann als eigenes HTML mit eigenem Titel, eigener Beschreibung und eigener Open-Graph-Vorschau erzeugt werden. Mit `basePath: "/job"`, `output: "export"` und `trailingSlash: true` entstehen Dateien, die ein klassischer Apache-Webspace direkt aus `/job/` ausliefern kann. Ein Node.js-Prozess auf dem Server ist nicht erforderlich.

Die Umsetzung startet erst nach Freigabe dieser Phase.

## 2. Geprüfter Ausgangszustand

- Das GitHub-Repository `LEECHER1/job` ist öffentlich, leer und beschreibbar.
- Der FTP-Zielordner `/job` existiert und ist leer.
- Der Webspace läuft über Apache; die Hauptwebsite ist WordPress-basiert.
- `https://www.theblackpixel.at/job/` leitet auf `https://theblackpixel.at/job/` weiter. Dort erscheint derzeit erwartungsgemäß die WordPress-404-Seite.
- Das analysierte PDF umfasst sieben A4-Seiten, wurde mit Adobe InDesign erstellt und ist nicht als barrierefreies PDF getaggt.

Konsequenz: Als kanonische URL sollte in der App vorerst `https://theblackpixel.at/job/` verwendet werden. Falls ausdrücklich `www` gewünscht ist, müsste zuerst die bestehende Domain-Weiterleitung geändert werden.

## 3. Analyse des PDFs

### Schwarz-Weiß-Gestaltung

Das PDF ist kein reines Schwarz-Weiß-Portfolio. Schwarz und Weiß bilden die ruhige, hochwertige Oberfläche; die Projekt- und Fotografiearbeiten liefern die Farbe. Diese Trennung ist ein starkes Markenzeichen und sollte digital erhalten bleiben:

- schwarze oder fast schwarze Grundfläche;
- weiße bis leicht graue Typografie;
- dünne, kontrastreiche Trennlinien;
- farbige Originalarbeiten als inhaltliche Akzente;
- keine zusätzlichen Markenfarben, Verläufe oder Neon-Effekte.

Die Bilder sollten deshalb nicht pauschal in Graustufen umgewandelt werden. Die reduzierte Oberfläche gibt ihnen bereits genügend visuelle Führung.

### Typografie

Das PDF verwendet überwiegend **Proxima Nova** in Light, Regular, Medium, Bold und Extra Bold. Charakteristisch sind:

- geometrische, offene Buchstabenformen;
- sehr deutlicher Gewichtskontrast;
- weit gesperrte Labels und Rollenbezeichnungen;
- große Versalien für Name und Portfolio-Kapitel;
- kompakte, sachliche Fließtexte.

Empfehlung für das Web: **Manrope Variable**, lokal als WOFF2 eingebunden. Manrope kommt der klaren, geometrischen Wirkung näher als Inter, wirkt weniger plakativ als Montserrat und bleibt in kleinen Größen gut lesbar. Eine einzige variable Schriftfamilie reduziert Ladezeit und hält die Hierarchie konsistent. Proxima Nova sollte nur verwendet werden, wenn die vorhandene Lizenz Webfont-Nutzung ausdrücklich abdeckt.

### Abstände

Seite 1 ist für Papier effizient, digital aber zu dicht: Die linke Kompetenzspalte, Laufbahn, Ausbildung und Projektliste konkurrieren stark. Die Portfolioseiten arbeiten dagegen mit großzügigen Bildflächen und sehr schmalen Fugen.

Digitale Übersetzung:

- deutlich größere vertikale Abschnittsabstände;
- begrenzte Textbreite statt langer Desktop-Zeilen;
- kompakte Fugen nur innerhalb von Bildcollagen;
- mobile Außenabstände ab etwa 20 px, auf größeren Viewports stufenweise mehr;
- keine verkleinerte A4-Doppelsäule auf dem Smartphone.

### Bildraster

Die Portfolioseiten verwenden asymmetrische, redaktionelle Collagen: breite und schmale Motive, wechselnde Seitenverhältnisse, harte Kanten und weiße Fugen. Das ist das stärkste wiederkehrende Gestaltungsmotiv.

Für das Web bedeutet das:

- CSS-Grid mit kuratierten Bildgrößen statt gleichförmiger Karten;
- pro Projekt ein dominantes Leitbild und unterstützende Detailbilder;
- feste Seitenverhältnisse und definierte Fokuspositionen gegen unkontrollierte Crops;
- auf Mobilgeräten eine bewusst gesetzte lineare Bildfolge, nicht das zusammengeschrumpfte Desktop-Mosaik;
- Galerien erst unterhalb der verständlichen Projektzusammenfassung.

### Hierarchie

Die visuelle Hierarchie funktioniert über Gewicht, Maßstab, Kontrast und Linien - nicht über Farbe oder Dekoration:

1. Name bzw. Projektname;
2. Rolle oder Kategorie in leichter, gesperrter Schrift;
3. kurze Einordnung;
4. Abschnittstitel in Bold;
5. Belege, Details und Bildmaterial.

Diese Logik eignet sich gut für das Web. Schwächer ist die inhaltliche Hierarchie der ersten PDF-Seite: Software und Kompetenzen erhalten relativ früh viel Raum, während Nutzen und ausgewählte Projekte zu spät erscheinen. Digital sollte die Reihenfolge deshalb lauten: Positionierung, Nutzen, Projekte, Arbeitsweise, Erfahrung, Tools.

### Lebenslaufstruktur

Stärken des PDFs:

- vollständige Chronologie;
- nachvollziehbare Entwicklung von Fotografie zu Design, 3D und Automatisierung;
- klare Trennung von Anstellung, unternehmerischer Erfahrung und Ausbildung;
- konkrete Projektbeispiele statt reiner Kompetenzliste.

Für die Website sollte der Lebenslauf nicht vollständig auf der Startseite wiederholt werden. Eine kurze Laufbahn-Zusammenfassung liefert Vertrauen; die vollständige, mobile Timeline erhält einen eigenen Bereich. Tools bleiben sekundär. Der PDF-Download ist ein eigener, jederzeit erreichbarer Weg.

### Projektkategorien

Das PDF zeigt vier erkennbare Gruppen:

- Fotografie;
- Grafikdesign;
- Grafikdesign und 3D-Visualisierung;
- Prototyping und Workflow-Automation.

Für digitale Filter ist eine schärfere, aber kleine Taxonomie sinnvoll:

- Produktkommunikation;
- Fotografie;
- 3D-Visualisierung;
- Automatisierung;
- Prototyping.

`Visual Design` bleibt die übergeordnete Positionierung und muss kein Filter sein. `Web`, Software und konkrete Tools werden als Disziplinen oder Tags geführt. Ein zusätzlicher Filter `Produktentwicklung` sollte erst verwendet werden, wenn genügend freigegebene Projekte diese Kategorie tatsächlich tragen.

### Wiederkehrende Gestaltungselemente

- schwarze Kapitel- und Seitenflächen;
- weit gesperrte Kapitelbezeichnungen;
- dünne horizontale und vertikale Linien;
- Timeline-Punkte;
- harte Bildkanten mit schmalen Fugen;
- starker Wechsel aus Light und Bold;
- asymmetrische Bildcollagen;
- diagonaler Anschnitt des Porträts auf der Lebenslaufseite.

Digitale Verwendung: Linien als Layoutgerüst, Punkte für Laufbahn und Prozess, Collagen für Projekte, gesperrte Labels als Kicker. Der diagonale Porträtanschnitt kann einmal im Hero zitiert werden, sollte aber kein überall wiederholter Effekt werden.

## 4. Responsives Designsystem - Richtung für Phase 2

Das Designsystem soll nicht A4 skalieren, sondern die Rollen des PDFs in responsive Bausteine übertragen:

| PDF-Prinzip | Digitale Entsprechung |
| --- | --- |
| schwarze Seitenleiste | kompakte, dauerhaft erreichbare Navigation und dunkler Seitenrahmen |
| weiße Inhaltsseite | helle Belegflächen oder klar abgegrenzte Content-Module innerhalb der überwiegend dunklen Website |
| Portfolio-Mosaik | kuratiertes CSS-Grid mit Leitbild und Details |
| Abschnittslinien | Grid-Linien, Modultrenner und Fokusrahmen |
| Timeline-Punkte | zugängliche, lineare Laufbahn und Projektprozess-Darstellung |
| gesperrte Labels | kurze Kicker und Metadaten, nicht für Fließtext |
| Light/Bold-Kontrast | primäres Mittel für Hierarchie statt zusätzlicher Farben |

Vorgesehene visuelle Regeln:

- Oberfläche: Schwarz, Off-Black, Off-White und zwei Graustufen;
- Farbe: ausschließlich durch echte Projektmedien;
- Ecken: überwiegend kantig, kleine Radien nur bei funktionalen Controls;
- Bewegung: kurze CSS-Übergänge, kein Scroll-Jacking, vollständige `prefers-reduced-motion`-Variante;
- Fokus: gut sichtbare invertierte oder umrahmte Zustände;
- Raster: mobile Einspaltigkeit, ab Tablet flexible 6/12-Spalten-Logik, maximale Inhaltsbreite statt Vollbreiten-Text;
- Typografie: selbst gehostete Manrope Variable, flüssige Größen, normale Laufweite für längere Texte;
- Kontrast: für längere Texte leicht gebrochenes Weiß auf Off-Black, dennoch WCAG-konform.

Die exakten Tokens, Breakpoints und Komponentenwerte gehören in Phase 2.

## 5. Kritische Bewertung und Risiken

### Inhaltliche Risiken

1. **Fallstudien sind noch unvollständig.** Das PDF belegt Aufgaben und Disziplinen, aber nicht bei jedem Projekt Ausgangssituation, Ergebnis, Jahr, Auftraggeber oder genaue Eigenleistung. Diese Felder müssen optional bleiben, bis sie bestätigt sind.
2. **Beitrag versus Eigentümerschaft.** Beim Intex-PureSpa-Projekt nennt das PDF ausdrücklich Mitarbeit. Die Website darf daraus kein allein entwickeltes Projekt machen.
3. **Prototyp versus Produkt.** Beim Smart Water Analyzer müssen umgesetzte Funktionen klar von Konzept, Ausblick oder noch nicht fertiggestellten Teilen getrennt werden.
4. **Vertraulichkeit und Bildrechte.** Firmen- und Kundenarbeiten benötigen eine Freigabe oder Anonymisierung. Öffentlich sichtbare Bilder sollten nicht automatisch als frei lizenzierte Repository-Inhalte verstanden werden.
5. **Öffentliches Repository.** `LEECHER1/job` ist derzeit öffentlich. Lebenslauf, Kontaktdaten, Firmeninhalte und hochauflösende Medien wären damit dauerhaft in der Git-Historie sichtbar. Vor dem ersten Medien-Commit ist eine bewusste Entscheidung über die Sichtbarkeit nötig.

### Datenschutz- und PDF-Risiken

Das aktuelle PDF enthält eine Privatadresse. Die Zertifikatsseite enthält außerdem personenbezogene Dokumentdaten, darunter das Geburtsdatum. Diese Datei sollte nicht unverändert in das öffentliche Repository oder als indexierbarer Download gelangen.

Empfehlung: eine web-sichere Lebenslaufversion ohne Privatadresse und ohne vollständige Zeugnisabbildungen erzeugen; Nachweise nur gezielt und bei Bedarf bereitstellen. Zusätzlich sollte der Download als barriereärmeres, getaggtes PDF exportiert werden.

### UX- und Umfangsrisiken

- Sechs gleichwertige Hauptbereiche plus FAQ, PWA, Offline-Modus, Filter, Kontaktformular und Animationen wären für Version 1 zu viel.
- Zu viele Projektfilter erzeugen eine Datenbankwirkung, obwohl zunächst nur wenige echte Fallstudien vorliegen.
- Eine vollwertige PWA bringt Recruitern kaum Nutzen, erhöht aber Cache- und Aktualisierungsrisiken.
- Ein Kontaktformular benötigt serverseitige Verarbeitung, Spam-Schutz und Datenschutztexte. E-Mail-, Telefon- und LinkedIn-Links reichen für das MVP.
- Der Begriff `Creative Engineer` muss direkt und nüchtern erklärt werden, damit er weder nach reinem Softwareprofil noch nach akademischem Ingenieurstitel klingt.

## 6. Priorisiertes MVP

### Muss enthalten

1. **Startseite** mit Name, Rolle, zentraler Aussage, kurzem Beleg der Erfahrung und drei klaren Aktionen.
2. **Nutzenbereich** mit vier realen Problemfeldern, jeweils mit belegbaren Leistungen und passenden Projekten.
3. **Projektübersicht** mit wenigen klaren Kategorien.
4. **Drei belastbare Projektseiten** mit bestätigter Eigenleistung; welche drei das sind, wird vor Phase 4 festgelegt.
5. **Profil/Arbeitsweise** als nachvollziehbare Entwicklung von Fotografie über Design und 3D zu Automatisierung und Prototyping.
6. **Werdegang** als responsive Timeline.
7. **Kontaktabschluss** mit E-Mail, Telefon, LinkedIn und Lebenslauf-Download.
8. **Impressum, Datenschutz, 404**, Canonical, Sitemap, robots.txt und projektbezogene Metadaten.
9. **Barrierefreiheit und Performance** als Basis, nicht als nachträgliche Zusatzaufgabe.

### Sollte enthalten, falls Inhalte rechtzeitig freigegeben sind

- weitere Projektkarten ohne vollständige Fallstudie;
- ruhige Prozessdarstellung mit echten Zwischenständen;
- einfache Projektfilter ab etwa sechs sichtbaren Projekten;
- GitHub-Links an den passenden Projekten;
- redaktionelle Fotografie-, Grafik- und 3D-Galerien.

### Zunächst weglassen

- PWA-Installation und komplexe Offline-Caches;
- Kontaktformular und CAPTCHA;
- Analytics und Cookie-Banner;
- FAQ als eigener Hauptbereich;
- Video auf der Startseite;
- 3D-Viewer;
- Chatbot, Job-Matching oder Skill-Prozentwerte;
- Framer Motion oder andere große Animationsbibliotheken;
- Volltextsuche und komplexe Filterlogik;
- CMS, Benutzerkonto oder Backend;
- automatisch eingebettete Drittanbieterinhalte.

## 7. Empfohlene Seiten- und Navigationsstruktur

Die Startseite übernimmt den schnellen Bewerbungsflow; Detailinhalte erhalten eigene URLs.

```text
/job/
  #start
  #loesungen
  #projekte
  #profil
  #werdegang
  #kontakt

/job/projekte/
/job/projekte/smart-water-analyzer/
/job/projekte/supertranslator-pro/
/job/projekte/poolwelt/             (erst nach Inhaltsfreigabe)
/job/ueber-mich/
/job/werdegang/
/job/kontakt/
/job/impressum/
/job/datenschutz/
/job/404.html
```

Navigation: Start, Lösungen, Projekte, Profil, Werdegang, Kontakt. Auf Desktop bleibt sie sichtbar; mobil wird ein vollständig beschriftetes, tastaturbedienbares Menü verwendet. Projektseiten führen immer sichtbar zurück zur Übersicht und direkt zum Kontakt.

## 8. Empfohlene Projekt- und Content-Struktur

```text
job/
  docs/
  public/
    documents/
    media/
      profile/
      projects/
        smart-water-analyzer/
        supertranslator-pro/
        poolwelt/
        photography/
        graphic-design/
        3d-visualization/
    icons/
  src/
    app/
      projekte/
      ueber-mich/
      werdegang/
      kontakt/
      impressum/
      datenschutz/
    components/
      layout/
      navigation/
      projects/
      timeline/
      media/
      ui/
    content/
      projects/
      profile.ts
      career.ts
      solutions.ts
      faq.ts
    styles/
      tokens.css
      globals.css
    types/
    lib/
  scripts/
    media/
  .github/
    workflows/
```

Für das MVP werden **TypeScript-Inhaltsmodule** empfohlen. Sie halten Text und Darstellung getrennt, benötigen kein CMS und validieren Felder bereits beim Build. Lange Freitexte oder ein größerer redaktioneller Umfang können später in Markdown/MDX ausgelagert werden.

Das Projektmodell sollte zusätzlich zum vorgeschlagenen Grundmodell enthalten:

- `status`: Konzept, Prototyp, veröffentlicht oder abgeschlossen;
- `contribution`: genaue Eigenleistung;
- `collaboration`: beteiligte Personen/Projekte und korrekte Zuschreibung;
- `visibility`: öffentlich, anonymisiert oder intern;
- `result` als optionales Feld;
- Medien mit `alt`, Breite, Höhe, Seitenverhältnis und Fokuspunkt;
- externe Links mit Typ und verständlicher Beschriftung.

So erzwingt die Datenstruktur keine erfundenen Ergebnisse und schützt vor unklaren Eigentumsbehauptungen.

## 9. Hosting- und Deployment-Empfehlung

### Build

- Next.js Static Export erzeugt einen rein statischen Ausgabeordner.
- `basePath` wird beim Build auf `/job` festgelegt.
- `trailingSlash: true` erzeugt pro Route ein Verzeichnis mit `index.html`.
- Bilder werden vor dem Build in AVIF/WebP plus Fallback konvertiert; kein serverseitiger Image-Optimizer.
- Manrope wird lokal ausgeliefert; keine Google-Font-Anfrage im Browser.

### GitHub

- `main` bleibt der veröffentlichte Stand.
- Änderungen erfolgen auf kurzen Feature-Branches und über Pull Requests.
- CI prüft Typen, Linting, Tests, statischen Build und interne Links.
- Keine FTP-Zugangsdaten oder privaten Dokumente im Repository.

### Deployment auf World4You

Empfohlener Ablauf nach dem MVP:

1. GitHub Actions baut die App bei Freigabe von `main`.
2. Der Ausgabeordner wird als Build-Artefakt gespeichert.
3. Ein geschützter Production-Job überträgt den Inhalt per FTPS in `/job/`.
4. Server, Benutzer und Passwort liegen ausschließlich in GitHub Environments/Secrets.
5. Vor dem ersten automatischen Upload wird mit einer Testdatei geprüft, ob WordPress vorhandene Dateien und Unterverzeichnisse in `/job/` unangetastet ausliefert.
6. Nach Deployment werden Startseite, direkte Projekt-URLs, 404, Assets und Canonical geprüft.

Für die erste Veröffentlichung ist ein kontrollierter manueller Upload über das bereits eingerichtete FileZilla vertretbar. Danach sollte das reproduzierbare GitHub-Deployment folgen. Drittanbieter-Actions werden vermieden oder auf einen festen Commit-Pin beschränkt.

## 10. Offene Fragen vor Phase 2/3

### Blockierend

1. Soll das Repository öffentlich bleiben? Wenn ja: Welche Medien dürfen dauerhaft in einer öffentlichen Git-Historie liegen?
2. Welche drei Projekte sind für vollständige Fallstudien freigegeben und verfügen über bestätigte Angaben zu Problem, Aufgabe, Vorgehen, Ergebnis, Jahr und Eigenleistung?
3. Welche Funktionen des Smart Water Analyzer sind bereits umgesetzt, welche sind Konzept oder Ausblick?
4. Welche konkrete Rolle und welche veröffentlichbaren Resultate gelten für Poolwelt?
5. Welche Bilder aus Firmen-/Kundenprojekten dürfen öffentlich und in hoher Auflösung verwendet werden?
6. Soll eine neue web-sichere PDF-Version ohne Privatadresse und Zeugnisabbildungen erstellt werden?

### Wichtig, aber nicht blockierend für das Grundgerüst

7. Soll die Website dauerhaft nur Deutsch bleiben oder später Englisch unterstützen?
8. Sollen Telefonnummer und E-Mail wie im Briefing öffentlich erscheinen?
9. Wird das vorhandene Impressum der Hauptseite verlinkt oder soll `/job/impressum/` einen eigenen, abgestimmten Inhalt erhalten?
10. Ist für Version 1 ein Kontaktformular wirklich erforderlich? Falls ja, welcher serverseitige Endpunkt ist auf dem Webspace möglich?
11. Ist das vorhandene Porträt das bevorzugte Hero-Bild?
12. Sollen die Auszeichnungen auf Seite 7 erwähnt werden, ohne die vollständigen Urkunden öffentlich zu zeigen?
13. Soll `www.theblackpixel.at/job/` zukünftig die kanonische URL sein, oder bleibt die bestehende Weiterleitung auf die Non-www-Domain bestehen?

## 11. Freigabevorschlag

Mit der Freigabe von Phase 1 werden für Phase 2 noch keine fertigen Screens gebaut. Phase 2 konkretisiert Informationsarchitektur, Komponenten, Datenmodell, Design-Tokens, Typografie, Breakpoints, Animation und Accessibility. Anschließend folgt eine visuelle Richtung zur Auswahl, bevor das Basisprojekt implementiert wird.

## Technische Referenzen

- [Next.js: Static Exports](https://nextjs.org/docs/pages/guides/static-exports)
- [Next.js: basePath](https://nextjs.org/docs/pages/api-reference/config/next-config-js/basePath)
- [Next.js: trailingSlash](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash)
- [Vite: base option](https://vite.dev/config/shared-options#base)
