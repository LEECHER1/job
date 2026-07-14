# Inhalte und Bilder ändern

Die Website ist so aufgebaut, dass normale Inhaltsänderungen ohne Eingriff in das Layout möglich sind.

## Texte und Links

Alle zentralen Inhalte stehen in `src/content.js`:

- `site`: Name, Rolle, E-Mail, Telefon, LinkedIn, GitHub und PDF-Dateiname
- `navigation`: Menüpunkte und Zielbereiche
- `disciplines`: Filterkategorien mit Kurzbeschreibung
- `projects`: Projektkarten, Bilder, Beschreibungen und Kategoriezuordnung
- `valuePoints`: Mehrwertargumente für Unternehmen
- `companyFit`: typische Aufgaben, bei denen das Profil besonders gut passt
- `career`: beruflicher Werdegang

Texte immer innerhalb der Anführungszeichen ändern. Danach mit `npm run build` prüfen.

## Ein Projekt ergänzen

1. Bild nach `public/images/` kopieren, möglichst als JPG oder PNG.
2. In `src/content.js` innerhalb von `projects` einen vorhandenen Eintrag kopieren.
3. `title`, `text`, `image`, `alt` und `tags` anpassen.
4. In `tags` nur IDs verwenden, die in `disciplines` definiert sind.

Mit `fit: "contain"` wird ein Motiv vollständig auf dunklem Grund gezeigt. Ohne `fit` wird das Bild formatfüllend beschnitten.

## Portfolio-PDF austauschen

Die öffentliche Datei liegt unter `public/Andreas-Schwarz-Portfolio.pdf`. Vor dem Austausch unbedingt prüfen, dass keine private Anschrift, kein Geburtsdatum, keine Zeugnisse oder andere nicht für die Veröffentlichung bestimmte Inhalte enthalten sind.

## Farben und Layout

Die wichtigsten Designwerte stehen am Anfang von `src/styles.css` als CSS-Variablen. Der Akzent ist `--accent: #b86f23`.
