# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal website built with Next.js (App Router), React 19, and TypeScript 5 in strict mode. Migrated from Create React App in July 2026; the CRA scaffold is gone.

## Commands

- `npm run dev` — dev server at http://localhost:3000 (hot reload)
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint via Next.js
- There is no test suite currently.

## Architecture

- `src/app/` — Next.js App Router. `layout.tsx` holds the root HTML shell, metadata, and imports `globals.css`; `page.tsx` is a server component that composes the home page from the `'use client'` components below.
- Client components (each opts in with `'use client'` because it uses browser APIs or hooks):
  - `Nav.tsx` — the header nav. Holds the open/closed state for the mobile menu: below 480px the links collapse behind a hamburger `<button>` that toggles a dropdown; above it they show as a row. Renders `NavLink`s.
  - `NavLink.tsx` — anchor that runs its own `requestAnimationFrame` + easing scroll to the target `id`, rather than relying on CSS `scroll-behavior` (which some engines cancel). Takes an optional `onNavigate` callback (the mobile menu uses it to close on tap).
  - `Gallery.tsx` — CSS-animated photo marquee. `PHOTOS` (src + caption) is the single edit point for gallery content; the list is rendered 4× so the `-25%`-per-loop slide resets seamlessly, and the duplicated copies are `aria-hidden`/`tabIndex={-1}`. Clicking a photo opens a modal.
  - `About.tsx` — reveal-on-scroll section (`id="about"`, the `NavLink` scroll target) using `IntersectionObserver` to toggle a `visible` class once. Bio/facts copy is placeholder — replace the bracketed text.
  - `Projects.tsx` — reveal-on-scroll section (`id="projects"`) mirroring `About`'s IntersectionObserver pattern. `PROJECTS` (src + title + description + details + tech) is the single edit point; each entry renders a card, and clicking one opens a detail modal. The modal is rendered through a `createPortal` to `document.body` — otherwise the section's reveal `transform` becomes the containing block for the `position: fixed` overlay and traps it. Copy/title/tech are placeholder bracketed text; card images are `project1.svg`–`project3.svg` placeholders in `public/images/`.
  - `Experience.tsx` — reveal-on-scroll section (`id="experience"`, the Resume nav target). `EXPERIENCES` is the single edit point; each renders a card on a CSS timeline (a line drawn behind the dots). Ends with a CTA linking to `public/resume.pdf` via a `download` anchor.
- `Footer.tsx` is a plain server component (no hooks): the `id="contact"` section with LinkedIn/GitHub/email icon links (inline SVGs) and the credit line. Edit the profile URLs/email constants at the top of the file.
- Images live in `public/images/` as `.jpg` (referenced with plain `<img>` + an ESLint disable for `@next/next/no-img-element`, not `next/image`).
- Styling is plain CSS: global resets and base typography in `src/app/globals.css`; per-component styles in CSS Modules. `Nav`/`NavLink` reuse `page.module.css`. Sections give the gap between them via top padding only (bottom padding is 0) so stacked padding doesn't double up.
- Responsive approach: `flex-wrap` + `clamp()` for fluid sizing, with a `max-width: 480px` media query that collapses the nav into a hamburger dropdown on phones. Verify layout at both mobile (375px) and desktop widths when changing page structure.
