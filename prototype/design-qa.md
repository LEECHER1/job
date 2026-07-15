# Design QA

Datum: 15. Juli 2026

## Quelle

- bestehende freigegebene Portfolio-Website und PDF-Designsystem
- Nutzer-Screenshot zur breiteren Desktopdarstellung: `/var/folders/8j/_vxrcqdx2tbdh10yy10fnqsx25bgq1/T/codex-clipboard-49ec1680-5cfa-4e34-a2bf-04aaf8f79d31.png`
- Nutzer-Screenshots zu Standort, Kategoriebezeichnung und Kompetenznavigator aus der aktuellen Anfrage
- Nutzer-Screenshots vom 15. Juli 2026 zu überbreitem Dialog, uneinheitlicher Kartenanzahl und aus dem Raster ragenden Fokusrahmen
- Nutzer-Screenshots vom 15. Juli 2026 bestätigen den nun scrollfreien Dialog und zeigen als neue Zielkorrekturen den offenen unteren Kategorienrahmen, Hero-Position und gewünschte Zeilenumbrüche

## Aktueller Implementierungsstand

- Desktopfläche auf `92vw` mit maximal `1760px` erweitert
- Favicon mit dem Buchstaben A ergänzt
- Hero zeigt Map-Pin, Leonding, `Tel.: +43 650 24 19 890` und `schwarz.andreas@liwest.at`
- Kategorie 01 in Grafikdesign / Visuelle Designs umbenannt
- Video als eigene sechste Kategorie ergänzt
- jede Kategorie zeigt vier Karten; fehlende Inhalte erscheinen als klar gekennzeichnete Platzhalter
- alle Projektbilder öffnen einen großen Dialog mit Bild und vorhandenem Projekttext
- Dialog besitzt Schließen-Schaltfläche, Escape-Unterstützung, Fokusführung und Seitenscroll-Sperre
- Dialog ist in Breite und Höhe an den Viewport gebunden und besitzt keine eigenen Scrollleisten
- Fokusrahmen von Kategorien, Projektbildern und Schließen-Schaltfläche liegen innerhalb der jeweiligen Komponente
- `Portfolio · 2026` aus der Hero-Kontaktzeile entfernt
- kontrollierte Zeilenumbrüche vor `damit` und `Produktdesign & Prototyping` ergänzt
- Hero-Inhaltsblock auf Desktop leicht nach oben verschoben
- untere Rahmenkante der linken Kategorienleiste geschlossen

## Technische Prüfung

- Produktions-Build mit Vite: bestanden
- öffentliche Dateien per FTP aktualisiert: bestanden
- lokale Vorschau verfügbar: bestanden
- In-App-Browser konnte weder die lokale Vorschau noch die öffentliche Domain öffnen: durch Browser-Sicherheitsrichtlinie blockiert
- deshalb fehlen aktuelle browsergerenderte Screenshots, Interaktionstest, Konsolenprüfung und der visuelle Vergleich der neuen Fassung

## Befund

- P0: keine aus dem Build ableitbar
- P1: browserbasierte Prüfung der neuen Änderungen ausstehend
- P2: visuelle Nachprüfung der neuen Hero-Position, Zeilenumbrüche und geschlossenen Rahmenkante ausstehend

Blocker: Die vorgeschriebene Browseroberfläche verweigert in dieser Umgebung sowohl `localhost` als auch `theblackpixel.at`. Laut Browser-Richtlinie darf nicht auf eine alternative Browseroberfläche ausgewichen werden.

final result: blocked
