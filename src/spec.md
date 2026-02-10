# Specification

## Summary
**Goal:** Reduce the vertical spacing under the role title and location in the About page left column so it doesn’t look visually empty.

**Planned changes:**
- Update spacing-related Tailwind classes in `frontend/src/pages/AboutPage.tsx` for the title/location block beneath the profile image (e.g., reduce margins/gaps) without changing any text, fonts, alignment, or layout structure.
- Ensure the adjusted spacing is applied consistently across both desktop and mobile breakpoints without affecting responsiveness.

**User-visible outcome:** On the About page, the role title and location sit closer together and/or closer to the profile image on both desktop and mobile, reducing empty space in the left column while the layout otherwise looks the same.
