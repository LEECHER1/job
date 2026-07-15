# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable project decisions

- The GitHub repository may remain public for the preview.
- The user explicitly approved publishing the home address in the contact area and the combined CV/portfolio PDF. Never commit or publish FTP credentials, birth date, certificates, or other secrets.
- The visual source of truth is `Lebenslauf_Portfolio_AndreasSchwarz.pdf`; translate its editorial system responsively instead of copying the A4 layout.
- Warm white, black, hard rules, Manrope-like geometric typography, restrained amber accents (`#B86F23`), and real colour project imagery define the visual direction.
- Approved composition: interaction/layout from design option 2, navigation/accent from option 3, real portrait with diagonal crop from option 1.
- All ordinary content edits should happen in `src/content.js`; image files live in `public/images/`.
- Videos are maintained centrally in the `videos` array in `src/content.js`; use local thumbnails and privacy-enhanced, click-to-load YouTube embeds.
- Video has its own sixth competence category and is shown inside the same project grid; there is intentionally no separate top-level video navigation item.
- The project area is a compact competence explorer: vertical category navigation beside the selected summary and work on desktop, horizontally scrollable categories above the work on smaller screens.
- `IT & Automatisierung` is an explicit competence grounded in the PDF through PIM, scripting, workflow automation, ESP32/MQTT/Home Assistant and IoT prototyping.
- Positioning is `Visual Designer | Creative Engineer`, supported by the exact bridge statement supplied by the user and a plain-language explanation of `Creative Engineer`.
- `Leonding` with a map-pin icon, the internationally formatted telephone number and the e-mail address must remain directly visible in the hero.
- Every competence category always shows four work cards in a stable 2×2 desktop grid. Empty positions use neutral, clearly labelled placeholders until real projects are added.
- Project images open an accessible, viewport-bound large-format dialog containing the image and the existing project text. The dialog itself must never create horizontal or vertical scrollbars.
- Focus outlines on category tabs, image buttons and the modal close button stay inset so they do not break the editorial frame.
- Desktop content uses a wider but still bounded editorial frame: `92vw` up to `1760px`, centered on ultrawide screens.
- The CV/profile section follows the hero, before project work.
- GitHub and Impressum links are intentionally absent from the public page.
- Content must remain limited to claims supported by the PDF or the user's supplied brief.
