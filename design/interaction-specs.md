# Interaction & Animation Specs

Principles

- Subtle, purposeful motion; avoid distraction. Always respect `prefers-reduced-motion`.

Components

- Parallax Hero: background translateY up to 12–16px at scroll depth; disabled for PRM.
- Quote Slider: fade/slide 300–400ms easing-out; auto-advance 6–8s; pause on hover/focus; keyboard arrows; aria-live polite.
- Hover Effects: image scale up to 1.03–1.05 with shadow; for keyboard focus, show caption and focus ring without scale.
- Lightbox: fade-in overlay 200ms; image zoom 1.02; ESC closes; focus trapped.
- Sticky Nav: shadow appears after 16–24px scroll; maintains contrast and focus visibility.

Focus & States

- Visible focus ring: 2px outline using `ocean-blue` on light backgrounds; maintain 3:1 contrast to adjacent colors.
