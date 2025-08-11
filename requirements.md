# Influencer Portfolio Website Requirements

## Overview

Create a vibrant, uplifting, and adventurous influencer portfolio website for a female travel, lifestyle, and mindset influencer.  
She is extroverted, creative, and inspiring. She believes in the law of attraction (inspired by Bob Proctor and _Psycho-Cybernetics_), completed a yoga course in Puerto Rico, has a ballet background, loves to dance, rescued a dog in Sayulita, Mexico, and grew up on a remote Alaskan island (closest US point to Russia). She now lives in Toronto but travels often. Her personality is bright, warm, and adventurous.

## Style & Aesthetic

- Bright, uplifting, feminine, and coastal-inspired with an adventurous tone
- Color palette: warm sandy beige, coral pink, sunrise gold, ocean blue, white
- Typography: script or hand-lettered accents for headings, clean sans serif for body text
- High-quality images with sunlight, nature, and candid moments
- Magazine-style layout with plenty of white space
- Smooth animations (fade, slide, parallax)

## Pages & Structure

### 1. Home

- Full-width hero video or slideshow with clips of travel, dance, yoga, smiling with friends, and nature
- Tagline: _"Manifesting adventures, one moment at a time"_
- Links to Portfolio, About, Work With Me

### 2. About

- Warm storytelling of her journey: Alaska roots, ballet, yoga course in Puerto Rico, travel adventures, dog rescue story
- Philosophy section: law of attraction, mindset growth, manifestation
- Photos: portraits + candid lifestyle shots

### 3. Portfolio

- Grid/masonry layout of collaborations and travel moments
- Filters: Travel, Lifestyle, Wellness, Brand Work
- Each item: image + short descriptive caption

### 4. Work With Me

- Collaboration options:
  - Sponsored Instagram content (posts, reels, stories)
  - Brand ambassadorships
  - Travel & wellness content creation
  - Destination promotion
- Emphasize creative storytelling & audience connection

### 5. Audience & Impact

- Visual summary of demographics (age, location, gender)
- Social stats (followers, engagement rate)
- Optional brand testimonials

### 6. Blog / Journal

- Categories: Travel Diaries, Manifestation & Mindset, Wellness & Movement, Behind-the-Scenes
- Post preview: image, excerpt, "Read More" button

### 7. Press & Features

- Logos of brands/media
- Links to interviews, features, or articles

### 8. Contact

- Friendly collaboration form (Name, Email, Brand, Message)
- Direct email button
- Social media icons
- Optional Instagram feed preview

## Functionality

- Fully responsive (mobile-first)
- Fast load speed with optimized images
- No CMS in initial phase; content is managed statically (MDX/JSON)
- SEO-friendly headings and meta descriptions
- Instagram feed integration
- GDPR-compliant cookie & privacy policy

## Technical Requirements

- Framework: Next.js 14+ (App Router) with TypeScript
- Styling: Tailwind CSS; avoid CSS-in-JS libraries
- Components: Prefer Server Components; use Client Components only when necessary (animations, form interactivity)
- Content: All content is static (MDX/JSON). No CMS in this phase; no custom database
- Forms: No server runtime on GitHub Pages. Use a `mailto:` fallback with native HTML validation and a honeypot. Optionally propose a third-party form endpoint (requires approval).
- Images: Use `next/image` with responsive sizes and lazy loading; configure `images.unoptimized: true` for static export on GitHub Pages. Place assets under `public/images/`.
- SEO: Use Next.js Metadata API for titles, descriptions, OpenGraph, and Twitter cards
- Performance: Aim for Lighthouse ≥ 90 (all categories); Core Web Vitals in "Good" range; code splitting and image optimization
- Accessibility: WCAG 2.1 AA, keyboard navigable, visible focus states, semantic HTML
- Analytics: Google Analytics 4 via script/tag; defer loading to avoid blocking
- Deployment: GitHub Pages via static export (`output: 'export'`), deployed with GitHub Actions
- Browser support: Evergreen browsers, iOS 14+, Android 9+
- Constraints: Do not add dependencies outside Next.js, React, and Tailwind without prior approval. No server-side runtime or database; avoid Next.js API routes

## Accessibility

- Must comply with WCAG 2.1 AA across all pages and interactions.
- Semantic HTML with proper landmarks and meaningful heading hierarchy.
- Keyboard: all interactive elements reachable and operable via keyboard; include a "Skip to content" link.
- Focus: clear visible focus states; manage focus on route changes and in dialogs/lightboxes; avoid focus traps.
- Images/media: descriptive `alt` text; captions/transcripts for video where applicable; no auto-play audio.
- Color and contrast: meet AA contrast ratios (text 4.5:1; large text 3:1; UI components/graphics 3:1); do not convey meaning by color alone.
- Motion: respect `prefers-reduced-motion`; provide reduced or no-motion variant for parallax/animations.
- Forms: accessible labels, descriptions, and error messages (aria-live); do not rely on color alone.
- ARIA: prefer native elements; use ARIA only when necessary and valid.
- QA: Lighthouse Accessibility ≥ 90; keyboard-only and screen reader smoke tests.

## Special Features

- Parallax scrolling hero section
- Animated quote slider with uplifting affirmations
- Hover effects on portfolio images (zoom or caption overlay)
- Sticky navigation bar
- Lightbox for viewing portfolio images

## Content to Provide

- Real images or high-quality placeholders
- Bio text, portfolio captions, and blog articles
- Brand/media logos
- Audience stats and demographics
