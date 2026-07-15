# Inhalte und Bilder ändern

Die Website ist so aufgebaut, dass normale Inhaltsänderungen ohne Eingriff in das Layout möglich sind.

## Texte und Links

Alle zentralen Inhalte stehen in `src/content.js`:

- `site`: Name, Rolle, E-Mail, Telefon, LinkedIn, Adresse und PDF-Dateiname
- `navigation`: Menüpunkte und Zielbereiche
- `disciplines`: Filterkategorien mit Kurzbeschreibung
- `projects`: Projektkarten, Bilder, Beschreibungen und Kategoriezuordnung
- `valuePoints`: Mehrwertargumente für Unternehmen
- `companyFit`: typische Aufgaben, bei denen das Profil besonders gut passt
- `career`: beruflicher Werdegang
- `videos`: YouTube-Videos mit Vorschaubild, ID und Beschreibung

Die aktuellen Kategorie-IDs sind `grafikdesign`, `3d-visualisierung`, `produktkommunikation`, `it-automatisierung`, `fotografie` und `video`.

Texte immer innerhalb der Anführungszeichen ändern. Danach mit `npm run build` prüfen.

## Ein Projekt ergänzen

1. Bild nach `public/images/` kopieren, möglichst als JPG oder PNG.
2. In `src/content.js` innerhalb von `projects` einen vorhandenen Eintrag kopieren.
3. `title`, `text`, `image`, `alt` und `tags` anpassen.
4. In `tags` nur IDs verwenden, die in `disciplines` definiert sind.

Mit `fit: "contain"` wird ein Motiv vollständig auf dunklem Grund gezeigt. Ohne `fit` wird das Bild formatfüllend beschnitten.

Pro Kategorie werden automatisch genau vier Karten angezeigt. Solange weniger als vier passende Projekte oder Videos vorhanden sind, füllt die Website die freien Positionen mit neutralen „Projekt folgt“-Platzhaltern. Sobald ein neuer passender Eintrag ergänzt wird, ersetzt er automatisch den nächsten Platzhalter.

## Ein Video ergänzen

1. Ein Vorschaubild im Format 16:9 nach `public/images/` kopieren.
2. In `src/content.js` innerhalb von `videos` den vorhandenen Eintrag kopieren.
3. `title`, `text`, `youtubeId`, `image`, `alt` und `tags` anpassen.
4. Die `youtubeId` ist der Teil der YouTube-Adresse nach `youtu.be/` beziehungsweise hinter `v=`.

Videos sind aktuell der eigenen sechsten Kategorie `video` zugeordnet. Für diese Zuordnung `tags: ["video"]` beibehalten.

Das Video wird erst nach einem Klick geladen. Dadurch bleibt die Seite schnell und es wird nicht sofort eine Verbindung zu YouTube aufgebaut.

## Lebenslauf- und Portfolio-PDF austauschen

Die öffentliche Datei liegt unter `public/Andreas-Schwarz-Lebenslauf-Portfolio.pdf`. Vor dem Austausch prüfen, dass nur die gewünschten Lebenslauf- und Portfolioseiten enthalten sind und keine Zeugnisse, Zertifikate oder nicht für die Veröffentlichung bestimmte Inhalte mitgeliefert werden.

## Farben und Layout

Die wichtigsten Designwerte stehen am Anfang von `src/styles.css` als CSS-Variablen. Der Akzent ist `--accent: #b86f23`.

Die Desktopbreite wird über `--page: min(92vw, 1760px)` gesteuert. Projektbilder öffnen beim Anklicken automatisch den großen, an die Bildschirmgröße gebundenen Projektdialog; dafür ist kein zusätzlicher Inhaltseintrag nötig.
