# 05. AI & Curriculum Content Integration Workflow

### 1. Controlled AI Collaboration Protocol
Artificial Intelligence serves as an **authoring accelerator and structural assistant**, never as an unreviewed source of curriculum truth.

The process of drafting and deploying a lesson follows a strict four-stage pipeline:

```
Stage 1: Official Curriculum Grounding
├── Review official Egyptian Baccalaureate Grade 11 syllabus for Lesson N.
├── Extract exact Bloom-taxonomy learning objectives and official terminology.
└── Map the required visual models and practical scenarios.

Stage 2: Structured Content Composition
├── Format lesson data strictly against `content/curriculum/lesson-schema.json`.
├── Formulate Mentor callouts adhering to `design/mentor/mentor-persona.md`.
└── Select the appropriate sequence of educational page types.

Stage 3: Educational Review & Pedagogical Verification
├── Validate factual accuracy and language purity (Arabic technical terminology).
├── Verify that writing areas in Activity/Decision pages provide adequate space for handwriting on A4 print.
└── Confirm grayscale contrast for all diagrams and visuals.

Stage 4: Automated Ingestion & Rendering
└── Place verified JSON in `content/term-X/` → Renderer automatically renders web & print booklets.
```
