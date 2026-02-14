# 🚀 Nithishwaran A. | Modern Interactive Portfolio

A premium, high-performance developer portfolio built with **React 19** and **Vite 7**. Features glassmorphism, dynamic animations, custom cursor, and a fully responsive design.

![Design: Premium](https://img.shields.io/badge/Design-Premium-blueviolet?style=for-the-badge)
![Tech: React 19](https://img.shields.io/badge/Built%20With-React%2019%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
![Animations: Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-FF69B4?style=for-the-badge&logo=framer)
![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)

---

## ✨ Features

- **Interactive 3D Skill Carousel** – Navigate skills with momentum-based 3D carousel and detail modals
- **ChromaGrid Projects** – Project cards with centered-card color reveal on mobile
- **Custom Cursor** – TargetCursor with hover animations (desktop)
- **Contact Form** – EmailJS integration for real-time messaging
- **Responsive** – Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Core**: React 19, Vite 7, React Router
- **Animations**: Framer Motion, GSAP (MorphSVG)
- **Graphics**: Three.js (FloatingLines), OGL (LightRays)
- **Icons**: Lucide React, React Icons
- **Contact**: EmailJS

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+  
- npm

### Installation

```bash
git clone https://github.com/Nithish2005333/NithishPortfolio.git
cd Portfolio/client
npm install
```

### Environment Variables (optional, for Contact form)

Create `.env` in `client/`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 📂 Project Structure

```
client/
├── public/           # favicon.svg, static assets
├── src/
│   ├── components/   # Navbar, ChromaGrid, SkillCarousel, ProfileCard, etc.
│   ├── pages/        # Home, About, Projects, Services, Contact, ComingSoon
│   ├── styles/       # mobile-responsive.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 📤 Deploy to Git / Production

### Push to GitHub

```bash
git add .
git commit -m "your message"
git push origin main
```

### Deploy (Vercel / Netlify)

1. Connect your GitHub repo to Vercel or Netlify  
2. Set **Root Directory** to `client` (if repo root is Portfolio/)  
3. Build command: `npm run build`  
4. Output directory: `dist`

---

## 🤝 Connect

**Nithishwaran A.** – Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Nithish2005333)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nithishwaran-a-05655725b)

---
*© 2026 NITHISHWARAN A.*
