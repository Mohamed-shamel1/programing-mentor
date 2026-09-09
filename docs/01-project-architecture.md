# 01. Project Architecture & Conceptual Layers
## The Mentor — المُرشد الذكي (Grade 11 Programming & AI)

### 1. Executive Architectural Rationale
The primary failure mode of digital textbook and educational platforms is tight coupling between **educational facts** and **frontend presentation code**. When developers build:
```
Lesson01.jsx
Lesson02.jsx
...
Lesson23.jsx
```
The codebase rapidly deteriorates into unmaintainable, copy-pasted JSX where typographical updates, curriculum amendments, or print layout refinements require touching dozens of React files.

**The Mentor** eliminates this architectural antipattern by introducing a clean, decoupled compilation pipeline:

```
Curriculum Content (content/)
       ↓
Normalized Lesson Specification (JSON / Data Contract)
       ↓
LessonRenderer (src/renderer/LessonRenderer.jsx)
       ↓
PageRenderer (src/renderer/PageRenderer.jsx)
       ↓
Educational Page Type Components (src/components/educational/)
       ↓
Reusable Design System Primitives (src/components/ui/ & layout/)
       ↓
Dual Output Target: Interactive Web View & A4 Printable Booklet
```

---

### 2. The Core Architectural Layers

1. **Content Layer (`content/`)**:
   - Strictly isolated from React and JavaScript execution.
   - Contains curriculum taxonomy, schemas, and lesson data payloads.
   - The official Egyptian Ministry syllabus is the sole source of truth.

2. **Design System & Tokens Layer (`src/styles/` & `design/`)**:
   - Implemented via pure CSS Custom Properties (CSS variables).
   - Establishes a cohesive palette (Deep Navy, Cobalt Blue, Teal, Amber) and strict typography standards (Cairo, Alexandria, Noto Sans Arabic, Fira Code).
   - RTL-first and Print-first by design.

3. **Layout & Shell System (`src/components/layout/`)**:
   - `PageShell` enforces standardized A4 portrait sheet geometry.
   - `PageHeader` and `PageFooter` are embedded DOM structures, ensuring that page numbers and curriculum headers appear consistently on paper and screen.

4. **Educational Page Types (`src/components/educational/`)**:
   - Reusable pedagogical templates validated by Stitch prototypes: Mission/Hook, Concept+Visual, Comparison, Activity/Decision, and Revision.
   - Contain zero hardcoded educational facts; all content is received through typed props.

5. **Renderer Pipeline (`src/renderer/`)**:
   - Decouples page selection from lesson definitions.
   - Any lesson can dynamically declare any sequence of educational pages.

6. **Application Views (`src/pages/` & `src/app/`)**:
   - Lightweight view routing (`routes.js`) without the overhead of heavy third-party routing libraries.
   - Allows instant switching between overview, curriculum roadmap, interactive reading, and A4 print preview.
