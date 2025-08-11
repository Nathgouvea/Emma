# Portfolio — High-Fidelity Spec

## Filters

- Categories: Travel, Lifestyle, Wellness, Brand Work.
- Control type: segmented buttons (ARIA: role=tablist or button group with aria-pressed).
- States: default, hover, active, focus-visible.

## Grid

- Masonry-like layout using responsive columns.
- Breakpoints: mobile 1–2 col, tablet 2–3 col, desktop 3–4 col.
- Gutters: 16px mobile, 24px tablet/desktop.

## Cards

- Image with caption overlay on hover/focus (caption visible for keyboard focus as well).
- Caption: title + 1–2 sentence description.

## Lightbox

- Modal overlay with dim background and centered image.
- Controls: Close (ESC + button), Next/Prev (buttons + arrow keys), caption region.
- Focus trap inside modal; return focus to trigger on close; aria-modal="true".
- Respect `prefers-reduced-motion` (no heavy transitions).
