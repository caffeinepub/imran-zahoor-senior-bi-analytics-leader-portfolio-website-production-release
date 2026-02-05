# Specification

## Summary
**Goal:** Make the About page the default landing experience, update the About hero content and layout, improve mobile responsiveness site-wide, and replace booking CTAs with a persistent WhatsApp chat entry point (draft only).

**Planned changes:**
- Route the root path (`/`) to show the About page content by default while keeping existing direct routes working.
- Reorder global navigation (header desktop, mobile menu, and footer quick links) so “About” appears first.
- Update the About page to remove “About Me” everywhere and start the page directly with the provided 4-line hero introduction text (exact wording and punctuation).
- Adjust the About layout so the title appears immediately below the profile picture.
- Remove all booking/scheduling CTAs and any remaining links to the external calendar URL across the entire site UI.
- Add a persistent, non-obstructive WhatsApp chat button on all pages that deep-links to +923315166680 with the pre-filled message “Hi Imran, I’d like to discuss analytics or BI consulting.”
- Perform a mobile responsiveness pass across the website to improve typography readability, navigation usability, touch target sizing, and prevent layout breaks on small/medium screens.
- Prepare these updates as a draft-only build for review, with no publishing/deployment to production.

**User-visible outcome:** Visiting the domain loads the About page by default with the new hero intro and adjusted layout, navigation shows About first, booking CTAs are gone, a WhatsApp chat button is always available across pages, and the site reads and functions well on mobile—delivered as a draft for approval.
