---
name: React image hints
description: Compatibility note for browser image-loading attributes in this project.
---

Browser-only image hints such as `fetchPriority` can be accepted by TypeScript but still produce a React development warning in this project’s runtime. Prefer standard `loading`, `decoding`, `srcSet`, and `sizes` attributes unless the installed React version confirms the hint is supported.

**Why:** The installed React runtime warned about the camel-case hint, while the lowercase DOM spelling failed the project’s TypeScript check.

**How to apply:** When adding image performance attributes, keep the type check and browser console clean; omit a nonessential hint rather than weakening types or suppressing the warning.