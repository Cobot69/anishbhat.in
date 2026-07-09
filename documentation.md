# Development Documentation

## 2026-05-31

### Completed

* Initialized Next.js 15 App Router project with Tailwind CSS and TypeScript.
* Implemented GSAP ScrollTrigger Canvas Sequence for Hero (`components/HeroSequence.tsx`).
* Implemented GSAP ScrollTrigger Canvas Sequence for Intro (`components/IntroSequence.tsx`).
* Created UI Components (About, Experience, Projects, Skills, Blog, Contact, Footer) using Framer Motion.
* Created Firebase configuration (`lib/firebase.ts`) and Admin Login flow.
* Created Admin Dashboard layout with CRUD tabs.
* Wrote deployment and setup instructions (`instructions.md`).

### Decisions

* **Asset Strategy**: Created a `copy-assets` npm script using `copyfiles` to ensure original image sequences (`ezgif-*`) are copied to `public/` on build/dev without modifying the project root structure.
* **Canvas GSAP**: Used canvas rendering instead of DOM image elements for the scroll sequences to ensure 60fps performance and minimal memory overhead.

### Pending

* Connect Firebase CRUD operations to the Admin Dashboard (requires actual Firebase config).
