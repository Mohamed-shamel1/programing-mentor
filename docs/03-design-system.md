# 03. Design System & Print Engineering Foundation

### 1. Aesthetic Identity: Textbook + Workbook + Teacher's Guide
The visual identity is deliberately engineered away from ephemeral web trends (such as glassy SaaS dashboards or playful elementary school cartoon portals) toward an authoritative, focused academic companion:
- **Authoritative Backbone**: Deep Navy tones (`--color-navy-950`, `--color-navy-900`) create grounded structural bars and headers.
- **Cognitive Clarity**: Controlled elevations (`--shadow-sm`, `--shadow-md`) and crisp 1px borders (`--border-subtle`) prevent eye fatigue during lengthy reading sessions.
- **Pedagogical Accents**: Warm Amber (`--color-amber-500`) highlights Mentor prompts, while Teal (`--color-teal-600`) highlights computing insights.

---

### 2. RTL-First Architecture
Because the primary audience is Egyptian Grade 11 students and educators:
- The entire application roots with `<html lang="ar" dir="rtl">`.
- Layout primitives strictly utilize CSS logical properties (`margin-inline-start`, `padding-inline-end`, `border-inline-start`).
- Typography pairs Cairo/Alexandria for bold, architectural Arabic headers with Noto Sans Arabic/IBM Plex Sans Arabic for highly legible body paragraphs.
- Code blocks embed `direction: ltr; unicode-bidi: embed;` using Fira Code to maintain standard left-to-right code readability within right-to-left paragraphs.

---

### 3. Print-First A4 Engineering
Printed educational booklets are first-class deliverables alongside the web interface:
1. **DOM-Embedded Headers & Footers**: Rather than relying on fragile browser margin boxes (`@top-center`, `@bottom-center`), page headers and footers are real DOM components inside each `PageShell`. This guarantees uniform rendering across Chromium, Firefox, and PDF export engines.
2. **Deterministic Page Breaks**:
   - Every `PageShell` enforces `page-break-after: always; break-after: page;`.
   - Cards, callout blocks, and diagram frames enforce `page-break-inside: avoid; break-inside: avoid;` to prevent awkward mid-card breaks across printed sheets.
3. **Toner-Conscious / Grayscale Safety**:
   - Print media rules eliminate heavy black fills, replacing them with crisp 1pt borders and gentle 5% background tints to ensure clear legibility on standard school laser printers.
