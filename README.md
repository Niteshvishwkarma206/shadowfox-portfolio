# Nitesh Vishwakarma — Production Portfolio

> Production-grade personal portfolio website for **Nitesh Vishwakarma**, a third-year B.Tech student at **Sagar Institute of Science and Technology** (Graduation: 2028) pursuing a career as a **Full Stack Developer**.

[![Built With React 19](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 🌟 Key Features

- **Hero & Strategic Introduction**: Clear statement of academic standing (3rd Year B.Tech, 2024–2028), active availability pill for internships, quick CTAs, and an interactive developer code snapshot.
- **Academic & Engineering About Section**: Grounded in computer science fundamentals at Sagar Institute of Science and Technology, detailing coursework (DSA, OOP, DBMS, OS, Networks) and engineering principles.
- **Technical Competency Matrix**: Categorized skill tabs highlighting core languages (**Python, C, C++, Java, JavaScript, C#, SQL**), web technologies (**React, Node.js, Express, Tailwind CSS, REST APIs**), and engineering fundamentals.
- **Engineered Projects**:
  1. **CivicConnect**: Citizen complaint reporting and tracking platform featuring multi-stage status lifecycle tracking (Submitted → Under Review → In Progress → Resolved), category routing, and administrative moderation.
  2. **SERA**: Gemini-powered Windows voice assistant combining low-latency microphone audio processing (STT/TTS) with Google Gemini multimodal LLM reasoning and Windows OS automation.
- **Interactive Project Architecture Modal**: Deep-dive architectural breakdown detailing Client, API, and Database or Voice/LLM/Dispatcher pipelines.
- **Validated Contact System**:
  - Full client-side validation (name length, RFC email regex, subject length, message character counter).
  - **Honest submission handling**: Transparently launches the user's default email client (`mailto:`) with pre-filled content and includes a 1-click clipboard copy fallback. No spoofed or faked success screens.
  - One-click verified email copy with instant visual confirmation.
- **Accessible & Responsive**: Fully responsive across mobile, tablet, and desktop layouts with keyboard focus states, semantic landmarks, and ARIA attributes.
- **Sophisticated Dark Theme**: Deep slate/charcoal palette (`#080b11`, `#0c111c`, `#101625`) with restrained blue accents, subtle borders, and smooth micro-interactions. Zero neon or gamified XP distractions.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand components
- **Typography**: Inter & JetBrains Mono

---

## 📁 Project Architecture

```
shadowfox-portfolio/
├── public/
│   └── favicon.svg              # Custom developer monogram favicon
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── GithubIcon.jsx   # Clean SVG GitHub brand icon
│   │   ├── About.jsx            # Academic context, coursework & pillars
│   │   ├── Contact.jsx          # Validated contact form & direct channels
│   │   ├── Footer.jsx           # Clean footer with quick navigation & top-scroll
│   │   ├── Hero.jsx             # Hero section with CTAs & code telemetry card
│   │   ├── Navbar.jsx           # Fixed glassmorphism navbar with scrollspy & drawer
│   │   ├── ProjectModal.jsx     # Deep architectural inspection modal
│   │   ├── Projects.jsx         # CivicConnect & SERA project cards
│   │   ├── ResumeModal.jsx      # Printable & viewable developer curriculum vitae
│   │   └── Skills.jsx           # Categorized technical competency matrix
│   ├── data/
│   │   ├── profile.js           # Verified student profile & education details
│   │   ├── projects.js          # Project specifications, architecture & features
│   │   └── skills.js            # Categorized skills & descriptions
│   ├── hooks/
│   │   └── useScrollSpy.js      # Active navigation section detection hook
│   ├── App.jsx                  # Main application container
│   ├── index.css                # Base stylesheet with Tailwind v4 & custom scrollbars
│   └── main.jsx                 # Application entrypoint
├── .env.example                 # Example configuration
├── .gitignore                   # Ignore rules for node_modules, build & env files
├── index.html                   # SEO metadata, OpenGraph tags & fonts
├── package.json                 # Project dependencies & scripts
├── vercel.json                  # Production configuration for Vercel SPA deployment
├── vite.config.js               # Vite configuration with Tailwind CSS v4
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. Clone or open the repository:
   ```bash
   git clone https://github.com/Niteshvishwkarma206/shadowfox-portfolio.git
   cd shadowfox-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

### Production Build & Preview

To generate an optimized production bundle:
```bash
npm run build
```

To test the generated production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment on Vercel

The repository is configured out-of-the-box for seamless Vercel deployment:

### Method 1: Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New" > "Project"**.
3. Import your GitHub repository (`shadowfox-portfolio`).
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live with automatic SSL in seconds.

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 👨‍💻 Developer Profile

- **Developer**: Nitesh Vishwakarma
- **Academic Status**: 3rd Year B.Tech Student (Graduation: 2028)
- **Institution**: Sagar Institute of Science and Technology
- **GitHub**: [github.com/Niteshvishwkarma206](https://github.com/Niteshvishwkarma206)
- **Role Focus**: Full Stack Developer / Software Engineering Intern

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
