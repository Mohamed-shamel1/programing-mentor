# Curriculum Data Layer (طبقة بيانات المنهج الرسمي)

## Purpose & Source of Truth

This directory hosts the normalized structural specifications and officially ratified curriculum data for:
**"Programming & AI — البرمجة والذكاء الاصطناعي"**  
Egyptian Baccalaureate — Grade 11 (Academic Year 2026–2027).

### Critical Architectural Principle:
- **The official curriculum is the sole source of truth.**
- AI-generated or invented educational content is strictly prohibited from being treated as canonical curriculum data.
- React presentation components **never** hardcode curriculum facts or lesson texts. All lessons are loaded dynamically from structured data files conforming to `lesson-schema.json`.

### Content Hierarchy:
```
Curriculum (المنهج)
└── Term (الفصل الدراسي)
    └── Chapter (الباب / المحور)
        └── Lesson (الدرس)
            ├── Learning Objectives (مخرجات التعلم المستهدفة)
            ├── Concepts (المفاهيم العلمية والبرمجية)
            ├── Visuals (المخططات المعمارية والنماذج التوضيحية)
            ├── Activities & Case Decisions (أنشطة التفكير واتخاذ القرار)
            └── Revision & Synthesis (المصطلحات والمراجعة الذاتية)
```
