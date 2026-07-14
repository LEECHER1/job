# Design QA

Datum: 15. Juli 2026

## Referenz

Freigegebene Kombinationsvorlage aus den drei Designrichtungen:

- Grundlayout und interaktiver Disziplinfilter aus Variante 2
- Navigation und gedämpfter Amber-Akzent aus Variante 3
- Originalportrait mit harter diagonaler Kante aus Variante 1

## Visueller Vergleich

Die freigegebene Referenz und die Desktop-Implementierung wurden gemeinsam in einer breiten Ansicht geprüft. Zusätzliche Screenshots decken Profil, Projektfilter, Video, Kontakt und die Mobilansicht ab.

- warmweißer, editorialer Grundcharakter: getroffen
- große Andreas/Schwarz-Typohierarchie: getroffen
- echtes farbiges Portrait mit diagonaler Trennung: getroffen
- schwarze Linien, rasterbasierter Aufbau und dezenter Amber-Akzent: getroffen
- klare Primär- und Sekundäraktion: getroffen
- Lebenslauf direkt nach dem Einstieg: umgesetzt
- gleichmäßiger fünfspaltiger Disziplinfilter: umgesetzt
- Videobereich im bestehenden Designsystem: umgesetzt

## Funktionsprüfung

- Produktions-Build mit Vite: bestanden
- Desktop-Navigation und aktive Zustände: bestanden
- Disziplinfilter inklusive Text, Anzahl, Animation und Projektwechsel: bestanden
- gemeinsames Lebenslauf- und Portfolio-PDF über HTTP erreichbar: bestanden
- Video-Vorschaubild und Click-to-load-Embed über `youtube-nocookie.com`: bestanden
- Mobile Navigation mit allen sechs Zielen: bestanden
- responsive Typografie, Portraitdarstellung und diagonaler Übergang: bestanden
- Kontaktbereich mit E-Mail, Telefon, LinkedIn und Anschrift: bestanden
- keine horizontale Überbreite in der Mobilansicht: bestanden
- reduzierte Bewegung über `prefers-reduced-motion`: umgesetzt

## Inhalt und Datenschutz

- keine erfundenen Tätigkeiten, Qualifikationen oder messbaren Projektergebnisse ergänzt
- Mehrwertargumentation ohne unbelegte Gehalts- oder ROI-Behauptung
- GitHub- und Impressum-Links entfernt
- gemeinsames öffentliches PDF enthält Lebenslauf und Portfolio auf sechs Seiten
- Zertifikatsseite mit Geburtsdatum ausgeschlossen
- FTP-Zugangsdaten nicht im Repository oder Build gespeichert

## Offene Fehler

- P0: keine
- P1: keine
- P2: keine

final result: passed
