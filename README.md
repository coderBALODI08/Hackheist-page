# HackHeist 2026 — Event Landing Page
### GDG on Campus MIET Core Team (2026-27) | Web Development Selection Task

> **Live Reference:** [hackheist2.xyz](https://www.hackheist2.xyz/)  
> **Event Tagline:** *Build. Break. Solve.*

---

## 📌 Submission Overview

### 1. Short Explanation (3–5 lines for submission)
> *"I designed and developed **HackHeist 2026**, a modern, responsive single-page event landing page for **GDG on Campus MIET** using semantic HTML5, modern CSS3, and Vanilla JavaScript. Drawing inspiration from Google's developer design system and the hackheist2 reference, the website combines a dark developer aesthetic with Google's vibrant palette (`#4285F4`, `#EA4335`, `#FBBC05`, `#34A853`). The landing page strictly adheres to the 5 required sections—Hero, About HackHeist, 4 Highlight tracks, Bento-box Event Details, and Final CTA—engineered with fluid responsiveness from 360px mobile screens to 1920px desktop displays, interactive countdown timers, and subtle micro-interactions."*

---

## 🚀 The 5 Sections Implemented

1. **Section 1: Hero Section (`#hero`)**
   - Main Title: **HACKHEIST** with dynamic Google gradient & `2026` badge.
   - Tagline: **Build. Break. Solve.**
   - Organizing Organization: **GDG on Campus MIET**.
   - Event Date: **HackHeist 2026**.
   - Venue: **MIET Meerut**.
   - Primary Call-to-Action: Glowing **Register Now** button.
   - Bonus Feature: Live real-time countdown timer to HackHeist 2026.

2. **Section 2: About HackHeist (`#about`)**
   - Engaging briefing terminal explaining HackHeist's ethos: learning, building, collaborating, and connecting with mentors.
   - 4 Metric highlight chips (24+ Hours of Hacking, 500+ Hackers, ₹50K+ Prizes & Perks, 10+ Industry Mentors).

3. **Section 3: Event Highlights (`#highlights`)**
   - 4 Interactive track cards styled with Google brand accent borders and 3D hover effects:
     - 💻 **Hackathon**: Build and showcase your ideas
     - 🛠️ **Workshop**: Learn practical development skills
     - 🎤 **Tech Session**: Learn from experienced developers
     - 🤝 **Networking**: Connect with students and developer community

4. **Section 4: Event Details (`#details`)**
   - Creative Bento-box command center dashboard:
     - 📅 **Date**: HackHeist 2026 (Scheduled Annual Flagship Edition)
     - ⏰ **Time**: 9:00 AM onwards (interactive timeline with registration, keynote, and hack start checkpoints)
     - 📍 **Venue**: MIET (Meerut Institute of Engineering and Technology) with campus coordinates, facility tags, and a radar graphic.

5. **Section 5: Final CTA (`#register`)**
   - Heading: *"Ready to HackHeist?"*
   - Register Now button linked to the registration form placeholder.
   - Clean footer attribution for GDG on Campus MIET Core Team 2026-27.

---

## 📱 Responsive Testing Matrix

Tested and optimized for seamless viewing:
- 📱 **Mobile (360px & 390px)**: Compact stacked layout, full-width touch buttons, collapsible drawer navigation.
- 📱 **Tablet (768px)**: Flexible multi-column grid, responsive typography.
- 💻 **Laptop / Desktop (1024px, 1366px, 1920px)**: Multi-column Bento grid, ambient background glow, 3D card tilt micro-interactions.

---

## 🛠️ Technology Stack
- **HTML5**: Accessible, semantic markup with OpenGraph and SEO metadata.
- **CSS3**: Custom design system, CSS variables, `clamp()` fluid typography, Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`).
- **Vanilla JavaScript**: Lightweight, zero-dependency script for countdown calculation, mobile menu drawer, scrollspy, and card effects.

---

## 📁 Project Structure

```
Hackheist/
├── index.html       # Semantic single-page landing site
├── styles.css       # Complete responsive styling & design system
├── script.js        # Dynamic countdown, mobile menu, scrollspy & interactions
└── README.md        # Documentation and submission details
```

---

## 🌐 Deploying to GitHub & Live Hosting

### Step 1: Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "feat: complete HackHeist 2026 landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/hackheist-2026.git
git push -u origin main
```

### Step 2: Deploy Live
- **Option A (GitHub Pages)**: Go to Repository **Settings** > **Pages** > Select branch `main` and root `/` > Click **Save**.
- **Option B (Vercel)**: Import your GitHub repo on [vercel.com](https://vercel.com) (automatic instant deployment).
- **Option C (Netlify)**: Drag-and-drop the project folder to [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 📋 Section B: Your Two Best Projects (Submission Checklist)

*Fill in your two best projects below before final submission:*

### Project 1
- **Project Name:** `[Your Project 1 Name]`
- **Live/Deployment Link:** `[https://your-project-1.vercel.app]`
- **GitHub Repository Link:** `[https://github.com/your-username/project-1]`
- **Brief Description:** `[1-2 sentences highlighting your role, tech stack, and key problem solved]`

### Project 2
- **Project Name:** `[Your Project 2 Name]`
- **Live/Deployment Link:** `[https://your-project-2.vercel.app]`
- **GitHub Repository Link:** `[https://github.com/your-username/project-2]`
- **Brief Description:** `[1-2 sentences highlighting your role, tech stack, and key problem solved]`
