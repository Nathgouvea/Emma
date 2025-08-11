# Home — High-Fidelity Spec

## Hero (Video/Slideshow)

- Layout: full-bleed media with overlay gradient (top to bottom, subtle), keeps text legible.
- Media: 16:9 video or slideshow of 3–5 stills.
- Copy: H1 "Manifesting adventures, one moment at a time" + subcopy optional.
- CTAs: Primary "View Portfolio" (filled coral-pink), Secondary "Work With Me" (outline ocean-blue).
- Motion: parallax on scroll (reduce/disable when `prefers-reduced-motion`).
- Mobile: text centered; buttons stacked; safe area insets respected.

### Sizes

- Mobile: media height ~ 70vh; tablet: ~ 75vh; desktop: ~ 80vh (cap at 900px).
- Text max width: 26–36ch.

### Accessibility

- Provide transcript/captions if using video with meaningful speech (likely not needed for silent B-roll).
- Ensure color contrast for overlay text; add focus styles on CTAs.

## Featured Work

- 3-up grid on desktop, 2-up tablet, 1-up mobile. Cards with subtle hover zoom (reduced for PRM).
- Each card: image, short caption, link to `portfolio`.

## Quote Slider

- 4–6 affirmations; auto-advance paused when focused/hovered; keyboard next/prev; aria-live polite.
- Visible pause/play control.

## Instagram Teaser

- 6 thumbnails; clicking opens Instagram in new tab with appropriate rel attributes.

## Footer

- Contact link, social links, legal links.
