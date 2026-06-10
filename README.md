# Onspace Software LTD - Website

Marketing site for **Onspace Software LTD**, a custom software development &amp; AI
automation agency. Built with Next.js (App Router) + TypeScript, a white / sky
blue / blue premium theme, the Geist typeface, and four React Bits components
(ShapeGrid, LogoLoop, StarBorder, ClickSpark).

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** (strict)
- **CSS Modules** + global design tokens (no CSS framework)
- **react-icons** for iconography
- **react-simple-maps** for the interactive world map
- **geist** font package

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx          # root layout, Geist font, global ClickSpark effect
    page.tsx            # landing page section composition
    globals.css         # design tokens + shared utilities
  components/
    reactbits/          # ShapeGrid, LogoLoop, StarBorder, ClickSpark (TS ports)
    layout/             # Navbar, Footer
    sections/           # Hero, TrustedBy, Products, Globe, Services,
                        # TechStack, About, Reviews, Blogs, Contact
    ui/                 # SectionHeader and other shared primitives
  lib/
    site.ts             # site config, nav, countries, about pillars
    content.tsx         # services, products, tech, reviews, blog data (with icons)
    types.ts            # shared TypeScript types
```

## Sections

Navbar - Hero (ShapeGrid bg + rotating word) - Trusted by (LogoLoop) -
Products &amp; custom CTA - Interactive world map - Services bento (StarBorder) -
Tech stack tabs - About (interactive pillars) - Reviews - Blogs -
Talk to an expert - Footer.

## Notes

- The world map loads its topology from the `world-atlas` CDN at runtime.
- Replace placeholder copy, product names and company logos in `src/lib/`.
- `next/font` self-hosts Geist; the CSS fallback is `Geist, sans-serif`.
