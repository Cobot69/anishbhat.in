# 🛠️ Portfolio Manual Editing Guide

Welcome to your Developer Guide! This portfolio is built with **Next.js 14**, **Tailwind CSS**, and **GSAP**. 
Use this file as your master map to easily find and manually edit text, images, fonts, and data.

---

## 💾 1. Where is the Data? (Text, Projects, Skills)
**File to edit:** `src/lib/data.ts`

This is your central database. You do **not** need to touch the UI code to change your text!
- **Projects (`projectsData`)**: Edit descriptions, tech stacks, or add new projects. (Remember: `Svarra` is at index 0).
- **Skills (`skillsData`)**: Change your 0-100 skill levels or update skill categories.
- **Experience (`experienceData`)**: Add new internships or jobs.
- **Research (`researchData`)**: Update abstracts or add new publications.
- **Contact (`contactData`)**: Update your email, phone, LinkedIn, or GitHub links.

---

## 🖼️ 2. Where do I change Images & Visuals?
**Directory to use:** `/public`

Any image placed in the `public/` folder can be referenced directly by its name with a leading slash (e.g., `/hero-image.png`).

1. **Hero Portrait**: Replace `public/hero-image.png` with your own transparent cutout portrait.
2. **Project Images**:
   - Drop your project screenshots into `public/` (e.g., `svarra.png`, `project1.png`).
   - Go to `src/lib/data.ts`, find the project in `projectsData`, and change the `images: ["svarra.png"]` array to match your file name.
3. **Favicon**: Replace `public/favicon.ico` with your own logo so your site has a custom icon in the browser tab.

---

## 🎨 3. Where do I change Fonts and Colors?
**Files to edit:** 
- `tailwind.config.ts` (Colors)
- `src/app/layout.tsx` (Fonts)

**Colors:**
Open `tailwind.config.ts`. Look for the `colors` object.
- `brand-black`: The deep dark background color (`#050505`).
- `brand-light`: The primary white text color.
- `brand-muted`: The grayish sub-text color.
Change these hex codes to instantly theme the entire site!

**Fonts:**
Open `src/app/layout.tsx`.
Currently, the site uses two Google Fonts: **Inter** (for reading text) and **Outfit** (for large dramatic headers).
If you want to change them, import a different font from `next/font/google` and swap out the variables.

---

## 🏗️ 4. Where is the UI Layout Code?
If you want to fundamentally change how sections look, here are the component files:
- **Directory:** `src/components/sections/`
  - `Hero.tsx`: The main landing screen.
  - `About.tsx`: Your personal summary and stats.
  - `Credentials.tsx`: Academic background and Honors/Certs.
  - `Skills.tsx`: The skill progress bars.
  - `Experience.tsx`: The vertical timeline of your internships.
  - `ProjectsGallery.tsx`: The massive project display screens.
  - `ResearchSection.tsx`: Your publication summaries.
  - `Connect.tsx`: The final contact page.

- **Horizontal Scroll Engine:** `src/components/HorizontalWrapper.tsx`
  - This file contains the **GSAP** logic that converts your vertical mouse scroll into horizontal cinematic movement.

- **Bottom Navigation Knobs:** `src/components/VolumeNav.tsx`
  - This controls the clickable buttons at the bottom of the screen.

---

## 🚀 5. How to Deploy (Vercel)
When you are ready to share this with the world:
1. Push all your code to a **GitHub repository**.
2. Go to [Vercel.com](https://vercel.com/) and create a free account.
3. Click **Add New Project**, connect your GitHub account, and select your repository.
4. Leave all settings as default (Framework Preset: Next.js) and click **Deploy**.
5. Within 2 minutes, your site will be live on a `.vercel.app` domain!
