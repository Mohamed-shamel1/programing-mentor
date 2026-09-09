# 04. Educational Page Types & Pedagogical Registry

### 1. Pedagogical Rationale
A lesson is not a single scrollable blog post; it is an orchestrated educational experience designed around pedagogical cognitive phases:

```
[ Hook / Curiosity ] → [ Technical Concept ] → [ Critical Analysis ] → [ Practical Decision ] → [ Synthesis & Review ]
      MISSION                CONCEPT               COMPARISON                 ACTIVITY                 REVISION
```

---

### 2. Registry Architecture (`src/renderer/pageTypeRegistry.js`)
The renderer resolves page components via an open-closed registry pattern:
```javascript
export const PAGE_TYPES = {
  MISSION_HOOK: 'MISSION_HOOK',
  CONCEPT_VISUAL: 'CONCEPT_VISUAL',
  COMPARISON: 'COMPARISON',
  ACTIVITY_DECISION: 'ACTIVITY_DECISION',
  REVISION: 'REVISION',
};
```
When a lesson page declares `"type": "CONCEPT_VISUAL"`, `PageRenderer` resolves the component dynamically and injects the typed payload into its props, encapsulated within `PageShell`.

---

### 3. Expansion Path
When future lessons introduce new pedagogical requirements (e.g. interactive coding environments, multi-stage timelines, or branching lab protocols), developers create a new page component in `src/components/educational/` and register it in `pageTypeRegistry.js`. Existing lesson files and components remain completely untouched.
