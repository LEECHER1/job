# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable project decisions

- The GitHub repository may remain public for the preview.
- Do not publish the unredacted PDF, private address, birth date, certificates, FTP credentials, or other secrets.
- The visual source of truth is `Lebenslauf_Portfolio_AndreasSchwarz.pdf`; translate its editorial system responsively instead of copying the A4 layout.
- Warm white, black, hard rules, Manrope-like geometric typography, restrained amber accents (`#B86F23`), and real colour project imagery define the visual direction.
- Approved composition: interaction/layout from design option 2, navigation/accent from option 3, real portrait with diagonal crop from option 1.
- All ordinary content edits should happen in `src/content.js`; image files live in `public/images/`.
- Content must remain limited to claims supported by the PDF or the user's supplied brief.
