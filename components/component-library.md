# Component Library (Planned)

List of components to implement per requirements. Server Components by default; mark Client where interactivity is needed.

## Foundations

- SkipToContent (Server)
- NavigationBar (sticky; Server)
- Footer (Server)
- Button variants (Server)
- SectionHeader (Server)
- Card (image + caption; Server)

## Home / Shared

- HeroParallax (Client)
- QuoteSlider (Client; keyboard navigable, pause/resume)
- InstagramFeed (Server → possibly Client fetch fallback)

## Portfolio

- PortfolioGrid (Server)
- PortfolioFilters (Client for interactions; with aria-controls/pressed)
- Lightbox (Client; focus trap, ESC to close, next/prev, aria-modal)

## Forms

- ContactForm (Client for validation messaging; native validation; honeypot)
- FormField (labeled inputs with description/error region)

## A11y Utilities

- VisuallyHidden
- FocusRing helper classes (Tailwind)

Notes

- Prefer RSC; move to Client only when necessary for interactions.
- Respect `prefers-reduced-motion` in animated components.


