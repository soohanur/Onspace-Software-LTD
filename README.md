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

## Routes

Multi-page site (App Router). Navbar + Footer live in the root layout and wrap
every route.

| Route       | Page                                                        |
| ----------- | ----------------------------------------------------------- |
| `/`         | Home - Hero, TrustedBy, Services, Globe, TechStack, Reviews, CTA |
| `/products` | Products grid + TrustedBy + CTA                             |
| `/services` | Services bento + TechStack + CTA                            |
| `/about`    | About pillars + Globe + Reviews + CTA                      |
| `/blogs`    | Blog listing                                                |
| `/contact`  | Talk-to-an-expert contact form                              |

## Project structure (page-wise)

```
src/
  app/
    layout.tsx              # root layout: Geist, Navbar, Footer, global ClickSpark
    page.tsx                # / (home)
    products/page.tsx
    services/page.tsx
    about/page.tsx
    blogs/page.tsx
    contact/page.tsx
    globals.css             # design tokens + shared utilities
  components/
    reactbits/              # ShapeGrid, LogoLoop, StarBorder, ClickSpark (TS ports)
    layout/                 # Navbar, Footer
    home/                   # Hero (+ RotatingText)
    products/               # Products
    services/               # Services
    about/                  # About
    blogs/                  # Blogs
    contact/                # Contact
    shared/                 # cross-page: SectionHeader, PageHeader, CtaBand,
                            # TrustedBy, Globe, TechStack, Reviews
  lib/
    site.ts                 # site config, nav routes, countries, about pillars
    content.tsx             # services, products, tech, reviews, blog data (with icons)
    types.ts                # shared TypeScript types
```

## Notes

- The world map loads its topology from the `world-atlas` CDN at runtime.
- Replace placeholder copy, product names and company logos in `src/lib/`.
- `next/font` self-hosts Geist; the CSS fallback is `Geist, sans-serif`.
