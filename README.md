# Nebula AI — Marketing Website

Modern marketing site for a fictional AI SaaS company. Dark theme, blue→violet→pink gradient palette, glassmorphism + bento layout.

## Stack
- **Vite** + **React 18**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **framer-motion** (scroll reveals, count-ups, animation)
- **lucide-react** (icons)
- Fonts: Space Grotesk (display) + Inter (body)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the build
```

## Sections
Navbar · Hero (aurora mesh + glass dashboard mockup) · Logo cloud · Features bento · How it works · Platform/code showcase · Animated stats · Testimonials · Pricing (monthly/annual toggle) · CTA · Footer.

## Design notes
- Palette tokens + keyframes live in `src/index.css` (`@theme`).
- Reusable bits (`Container`, `Reveal`, `Button`, `Badge`, `SectionHeading`) in `src/components/primitives.jsx`.
- Brand logos in `src/components/logos.jsx` (rendered monochrome via `currentColor`).
- Respects `prefers-reduced-motion`; mobile-first responsive; focus-visible rings on CTAs.
