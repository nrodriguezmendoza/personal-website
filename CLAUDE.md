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

- `src/app/` — Next.js App Router. `layout.tsx` holds the root HTML shell, metadata, and imports `globals.css`; `page.tsx` is the home page.
- Styling is plain CSS: global resets and base typography in `src/app/globals.css`, per-page styles in CSS Modules (`page.module.css`).
- Responsive approach: `flex-wrap` + `clamp()` for fluid sizing, with a single `max-width: 480px` media query that stacks the nav buttons vertically on phones. Verify layout at both mobile (375px) and desktop widths when changing page structure.
