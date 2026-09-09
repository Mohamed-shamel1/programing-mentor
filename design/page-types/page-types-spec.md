# Educational Page Types Specification
## The Mentor — المُرشد الذكي

### Architectural Philosophy: Composition Over Rigidity
Lessons are **not** forced into identical rigid molds. Instead, each lesson selects an intentional sequence of educational page types based on its pedagogical goals.

---

### Validated Page Types (Foundation Phase)

#### 1. Mission / Hook (`MISSION_HOOK`)
- **Stitch Reference**: Cover & Hook Prototyping
- **Pedagogical Function**: Engages student curiosity with a real-world Egyptian computational scenario, declares Bloom-taxonomy learning objectives, and poses the Mentor's opening dilemma.
- **Key Modules**: Mission Badge, Lesson Title, Context Scenario Card, Objectives Card, Mentor Prompt Box.

#### 2. Concept + Visual (`CONCEPT_VISUAL`)
- **Stitch Reference**: Edge Computing Visual Prototype
- **Pedagogical Function**: Introduces core technical and algorithmic definitions paired with an authoritative, high-contrast visual diagram.
- **Key Modules**: Concept Summary, Diagram Container (`DiagramContainer`), Core Takeaway Points, Mentor Technical Insight.

#### 3. Comparison (`COMPARISON`)
- **Stitch Reference**: AR vs VR Comparison Prototype
- **Pedagogical Function**: Fosters critical thinking and trade-off analysis between two competing technologies, paradigms, or algorithmic approaches.
- **Key Modules**: Side-by-Side Dual Cards (`ComparisonGrid`), Multi-Criteria Comparison Table, Synthesis Callout.

#### 4. Activity / Decision (`ACTIVITY_DECISION`)
- **Stitch Reference**: Stakeholder Decision Prototype
- **Pedagogical Function**: Transforms theoretical knowledge into practical decision-making. Presents multi-stakeholder trade-offs and provides structured student response lines.
- **Key Modules**: Case Study Card, Stakeholder Perspective Matrix, Student Written Response Lines, Decision Reflection Callout.

#### 5. Revision (`REVISION`)
- **Pedagogical Function**: Closes the lesson loop with systematic summarization, standardized terminology definitions, and self-assessment questions.
- **Key Modules**: Key Terms Glossary Table, Recap Cards, Self-Check Quiz Prompts, Mentor Closing Remark.

---

### Future Extended Page Types (Deferred to Later Phases)
- `DISCOVERY`: Interactive guided inquiry.
- `TIMELINE_PROCESS`: Historical milestone or pipeline progression.
- `SCENARIO`: Extended branching case study.
- `CHALLENGE`: Advanced programming problem or debugging puzzle.
