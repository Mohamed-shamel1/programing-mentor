# Design System & Token Specifications
## The Mentor — المُرشد الذكي (Grade 11 Programming & AI)

### 1. Visual Philosophy
The design language is engineered as a hybrid of:
1. **Authoritative Egyptian Textbook**: Clear hierarchy, academic rigor, formal typography.
2. **Interactive Student Workbook**: Dedicated reflection blocks, guided decision exercises, response lines.
3. **Teacher's Master Guide**: Structured callouts, taxonomy badges, pedagogical insights.

> **Explicit Negative Constraints:**
> - NO SaaS dashboard aesthetics.
> - NO glassmorphism / blurred translucencies.
> - NO juvenile or cartoonish styling.
> - NO excessive rainbow color palettes.

---

### 2. Color Palette & Hierarchy

| Token Group | Primary CSS Variable | Hex Code | Pedagogical Purpose |
|---|---|---|---|
| **Deep Navy** | `--color-navy-900` | `#0B152F` | Textbook spine, headers, structural cards |
| **Deep Navy 950** | `--color-navy-950` | `#060C1A` | Main document headings, high-contrast ink |
| **Cobalt Blue** | `--color-cobalt-600`| `#1D4ED8` | Active focus, unit anchors, primary badges |
| **Teal** | `--color-teal-600` | `#0D9488` | AI & Computer Science accent, data models |
| **Amber** | `--color-amber-500` | `#F59E0B` | Mentor challenge callouts, attention anchors |
| **Success** | `--color-success-600`| `#059669` | Correct solutions, self-check verification |
| **Danger** | `--color-danger-600` | `#DC2626` | Syntax errors, algorithmic anti-patterns |
| **Neutral Surface**| `--surface-sheet` | `#FFFFFF` | A4 crisp white paper background |
| **Neutral Subdued**| `--color-neutral-100`| `#F1F5F9` | Subtle background tint for contrast |

---

### 3. Typography Rules (RTL First)

- **Headings**: Cairo (Primary) / Alexandria (Secondary)
  - `h1`: 36px / Black (Bold 900)
  - `h2`: 30px / Bold (700)
  - `h3`: 24px / Bold (700)
  - `h4`: 20px / Medium (500)
- **Body Text**: Noto Sans Arabic / IBM Plex Sans Arabic
  - Font size: 16px (Base on screen) / 11pt (Print)
  - Line height: 1.6
- **Code & Technical Notation**: Fira Code / JetBrains Mono
  - Explicit `direction: ltr; unicode-bidi: embed;`

---

### 4. Spacing & Elevation
- Spacing: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px.
- Shadows: Subtle, non-diffuse, print-safe (`0 1px 2px rgba(15,23,42,0.05)`).
- Borders: `1px solid var(--color-neutral-200)` for cards.
