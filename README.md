# 🌟 Personal Developer Portfolio — Kyush Kumar

A modern, responsive, and interactive personal portfolio web application built with **React 19**, **Vite**, and **Custom CSS Animation Systems**. Featuring interactive WebGL fluid background simulations, physics-based rope intro screens, custom floating navigation, a interactive resume modal viewer, and real-time session visitor tracking.

---

## ✨ Features

- **🌊 Fluid Interactive Background**: Dynamic WebGL particle fluid simulation that reacts smoothly to cursor and touch interactions.
- **🪢 Interactive Rope Intro**: Physics-based interactive rope canvas welcoming users to the portfolio.
- **👁️ Session-Based Visitor Counter**: Top-left live session visitor tracking badge built with `sessionStorage` and `localStorage`.
- **🧭 Floating Icon Navigation**: Minimalist pill-shaped floating navbar with hover tooltips and smooth scroll targeting.
- **👤 About & Education Cards**: Clean grid presentation detailing background, academic timeline, and university CGPA / percentage scores.
- **🏆 Zigzag Achievements Timeline**: Connected organic timeline showcasing hackathons, competitions, and milestone accomplishments.
- **📜 Certifications Showcase**: Interactive card viewer revealing certificates (Oracle Cloud GenAI, IEI Membership, ATF 2025, Energy Literacy Training).
- **⚙️ Dynamic Skills Matrix**: Interactive skill tags highlighting expertise in Python, C++, HTML, CSS, Git, and VS Code.
- **💻 Projects Hub**: Showcase of featured projects with live demos and repository links (*MineSafe SIH Hackathon Project*, *HTML & CSS Projects*).
- **📄 On-Page Resume Modal Viewer**: Built-in PDF resume viewer modal with direct one-click PDF downloading.
- **📊 Vercel Web Analytics**: Native integration with `@vercel/analytics` for tracking visitor page views and audience insights.
- **📍 Centered Footer**: Clean footer displaying developer location (**Patna, Bihar**) and dynamic copyright details.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, Javascript (ES6+)
- **Analytics & Insights**: `@vercel/analytics`
- **Build Tooling**: Vite 8, Oxlint

- **Styling**: Vanilla CSS (Custom Design System with Glassmorphism, Micro-Animations & Responsive Layouts)
- **Interactive Graphics**: WebGL Fluid Simulation (`webgl-fluid`), HTML5 Canvas Physics
- **Icons & Assets**: SVG Icon sets, PDF Viewer Integration

---

## 📂 Project Structure

```
Portfolioo/
├── public/
│   ├── certifications/         # Certificate images & badges
│   └── resume.pdf              # Downloadable resume PDF
├── src/
│   ├── AchievementsSection.jsx # Connected zigzag timeline component
│   ├── App.jsx                 # Main application container & section manager
│   ├── CertificationsSection.jsx# Interactive certification cards grid
│   ├── ContactSection.jsx      # Contact form & social media links
│   ├── FluidBackground.jsx     # WebGL interactive fluid background canvas
│   ├── Footer.jsx              # Minimalist centered footer
│   ├── Navbar.jsx              # Floating icon navigation with tooltips
│   ├── ProjectsSection.jsx     # Featured projects showcase
│   ├── ResumeModal.jsx         # Modal resume viewer with download action
│   ├── RopeIntro.jsx           # Physics-based interactive rope introduction
│   ├── SkillsSection.jsx       # Interactive skills matrix
│   ├── VisitorCounter.jsx      # Top-left session visitor tracking badge
│   ├── index.css               # Core CSS design system & utility classes
│   └── main.jsx                # Application entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kyush02/Portfolioo.git
   cd Portfolioo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📦 Production Build

To build the project for production deployment:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 👤 Author

**Kyush Kumar**  
*B.Tech Computer Science & Engineering Student at Guru Ghasidas Vishwavidyalaya (GGV)*  
📍 Bilaspur, Chhattisgarh / Patna, Bihar, India

- **GitHub**: [@kyush02](https://github.com/kyush02)
- **LinkedIn**: [linkedin.com/in/kyush-kumar](https://linkedin.com/in/kyush-kumar)
- **Email**: kyushkumar212@gmail.com
