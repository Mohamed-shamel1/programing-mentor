# 02. Content Architecture & Source of Truth

### 1. The Source of Truth Principle
In an accredited national educational system such as the **Egyptian Baccalaureate (2026–2027)**, accuracy is paramount. 
- **AI is NOT the source of truth.** LLMs and generative systems cannot invent curriculum outcomes, pedagogical sequences, or syllabus regulations.
- The official Ministry of Education curriculum document remains the exclusive authority.
- No lesson data is hardcoded into frontend components.

---

### 2. The Data Hierarchy
The curriculum data is structured hierarchically:
```
Curriculum
 └── Term (1 or 2)
      └── Chapter / Unit (e.g. Fundamental AI Concepts, Python & Algorithmic Problem Solving)
           └── Lesson (1 of 23)
                ├── Meta (ID, Official Title Ar/En, Bloom Objectives, Duration)
                └── Pages (Ordered sequence of page specifications conforming to schema)
```

---

### 3. Dynamic Page Composition
Every lesson has unique pedagogical requirements:
- A conceptual lesson on Edge Computing may require: `MISSION_HOOK` → `CONCEPT_VISUAL` → `ACTIVITY_DECISION` → `REVISION`.
- An analytical lesson comparing AR vs. VR may require: `MISSION_HOOK` → `CONCEPT_VISUAL` → `COMPARISON` → `ACTIVITY_DECISION` → `REVISION`.
- A practical programming lab may require multiple activity and challenge pages.

By decoupling pages into ordered polymorphic JSON entries, the content author determines page composition freely without requiring new code deployments.
