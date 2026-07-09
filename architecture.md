# Architecture Specification

## Project Goal

Build a premium cinematic AI Engineer portfolio website for Anish Bhat.

The website must feel like a product launch experience rather than a traditional portfolio.

Visual inspiration:

* Apple product pages
* Linear
* Vercel
* Stripe
* Modern AI startup websites

Core principles:

* Minimal
* Premium
* Smooth
* Cinematic
* Story-driven
* Mobile responsive
* Fast despite heavy animations

---

# Tech Stack

Frontend:

* Next.js 15+
* TypeScript
* TailwindCSS
* Framer Motion
* GSAP ScrollTrigger

Backend:

* Firebase

Firebase Services:

* Firestore
* Firebase Storage
* Firebase Authentication

Deployment:

* Vercel

---

# Animation System

Folder 1:
ezgif-686b020de58bd4b5-png-split

Purpose:
Opening hero animation.

Frames display:

"Building the Future with AI"

Scroll-controlled sequence.

Approx:
72 frames.

---

Folder 2:
Anish Reveal Frames

Purpose:
Identity reveal section.

Contains:

* Animated text
* "Hi, I'm Anish Bhat"
* Right-side portrait reveal

Approx:
54 frames.

---

Animation Requirements

Use canvas-based frame rendering.

Do NOT load all frames immediately.

Implement:

* Preloading
* Lazy loading
* Frame caching

Smooth 60fps experience.

Animation tied directly to scroll position.

No autoplay.

User controls progression through scroll.

---

# Website Structure

1. Hero Section

Animation Folder 1

Message:
Building the Future with AI

Dark premium theme.

Subtle background.

Scroll hint.

---

2. Identity Reveal

Animation Folder 2

Display:
Anish Bhat
AI Engineer

Generative AI
Agents
Automation
Product Development

---

3. About Section

Timeline style.

Generated from resume.txt.

Include:

* Introduction
* Background
* Career story
* Skills

---

4. Experience Section

Timeline layout.

Each experience contains:

* Company
* Role
* Duration
* Description
* Technologies

Managed via admin panel.

---

5. Projects Section

Card based.

Each project contains:

* Title
* Description
* Timeline
* Tech Stack
* Skills Learned
* Tools Used
* 2 Images
* Optional Demo Link
* Optional GitHub Link
* Optional Live URL

If links unavailable:
hide link buttons.

---

6. Skills Section

Grouped:

AI/ML

Backend

Frontend

Cloud

Tools

Databases

---

7. Blog Section

CMS-driven.

Supports:

* Rich text
* Images
* Code blocks
* Tags
* Featured image

Stored in Firebase.

---

8. Connect Section

Contact form.

Social links:

* LinkedIn
* GitHub
* Instagram
* WhatsApp
* Email

Direct clickable icons.

---

9. Footer

Minimal premium footer.

Includes:

* Copyright
* Social links
* Resume download

---

# Admin Dashboard

Protected route.

Authentication required.

Features:

Projects CRUD

Experience CRUD

Blog CRUD

Profile Details CRUD

Social Links CRUD

Resume Upload

Image Upload

---

# Design System

Theme:

Deep Black
Warm Brown
Soft White

Typography:

Headings:
Inter Bold

Body:
Inter Regular

Animations:
Smooth
Slow
Premium

No neon effects.

No generic AI graphics.

No floating robots.

No stock AI imagery.

Everything should feel intentional and product-grade.

---

# Performance

Image optimization.

WebP support.

Lazy loading.

Route splitting.

SEO optimization.

Lighthouse score target:
90+
