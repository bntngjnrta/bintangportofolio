# Bintang Portfolio — Interactive macOS CV & Web Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![UnoCSS](https://img.shields.io/badge/UnoCSS-0.59-333333?style=for-the-badge&logo=unocss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-4.5-brown?style=for-the-badge&logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-black?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<p align="center">
  <b>An interactive, high-fidelity macOS desktop simulation serving as a personal portfolio and Curriculum Vitae for Kadek Bintang Januarta.</b>
</p>

[✨ Live Demo](https://bintang-portofolio.vercel.app/) • [📄 IEEE Paper](https://ieeexplore.ieee.org/document/11381376) • [📜 HKI Copyright](https://drive.google.com/file/d/1z5ozBWJldrQylcjBU3FhV0oJobwCFR6h/view?usp=sharing) • [💼 LinkedIn](https://www.linkedin.com/in/kadek-bintang-januarta/)

</div>

---

## 📖 Overview

**Bintang Portfolio** (`bintang-portofolio`) is a web-based portfolio crafted to simulate the modern macOS desktop environment with the **Liquid Glass (macOS Tahoe)** design system. It presents my professional background, academic research, publications, software engineering projects, awards, and technical skill set through interactive native-like macOS desktop applications.

---

## ✨ Key Features

### 🖥️ 1. macOS Desktop Experience
- **Interactive Dock**: Features authentic icon magnification on hover, bounce animations on app launch, running indicator dots, and responsive auto-scaling for mobile and desktop screens.
- **Window Management**: Multi-window support with drag-and-drop (`react-rnd`), resize handles, minimize, maximize/fullscreen, close actions, z-index elevation on focus, and automatic vertical optical centering.
- **Top Menu Bar**: Dynamic topbar updating with the active application name, Control Center, battery status, Wi-Fi toggle, calendar/clock, and dark/light mode switcher.
- **Spotlight Search & Launchpad**: Instant search across apps, documents, and contacts, alongside a full-screen app grid launcher.
- **Sound Effects & Dynamic Island**: Topbar interactive media pill playing portfolio audio with live playback controls, progress bar, and volume management.

### 👤 2. Comprehensive CV Applications (About Me)
- **Profile Summary**: In-depth personal bio, formal education at Politeknik Astra and SMA Negeri Bali Mandara, technical competencies, and contact channels.
- **Achievements & Leadership**: Verified competitive programming awards, academic honors, organizational leadership, and industry certifications.
- **Research & Projects Showcase**: Detailed views for 9 projects and publications, complete with technical summaries, methodology breakdowns, tech stacks, and direct external action buttons:
  - 📄 **IEEE Xplore Paper**: Sentiment analysis & vocational clustering ML research.
  - 📜 **HKI Copyright**: Ministry of Law and Human Rights registered IP.
  - 🎓 **Credentials & Certificates**: Medical AI & Melanoma XAI training certification.
  - 🌐 **Live Demo & GitHub Repositories**: Active production deployments and source code repositories.
- **Integrated PDF Resume Viewer**: In-window resume preview with page zoom, pan, and direct one-click PDF download.

### 🛠️ 3. Interactive Utility Apps
- **Mail**: Fully functional contact form integrated with EmailJS.
- **System Settings**: Customize desktop wallpaper (Light/Dark dynamic wallpapers), accent colors, brightness, dock size, and magnification levels.
- **Terminal**: Interactive command-line interface with custom commands (`intro.txt`, `contact.txt`, `help`, `clear`, etc.).
- **Notes & Calculator**: Functional productivity tools with dark/light theme integration.

---

## 🚀 Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework & Language** | [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [UnoCSS](https://uno.antfu.me/), Vanilla CSS (Liquid Glass Tahoe UI, Glassmorphism, CSS Variables) |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) (with local storage persistence) |
| **Animation & Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Window & UI Mechanics** | [react-rnd](https://github.com/bokuweb/react-rnd), [react-rangeslider](https://github.com/whoisandy/react-rangeslider) |
| **Media & PDF** | [PDF.js](https://mozilla.github.io/pdf.js/), [React-PDF](https://github.com/wojtekmaj/react-pdf), Web Audio API |
| **Icons & Typography** | [Iconify](https://iconify.design/) (`@iconify/json`), SF Pro Display, Avenir Next, Inter |

---

## 📁 Project Structure

```text
bintang-portofolio/
├── public/
│   ├── img/              # Application icons, launchpad assets, and avatars
│   ├── markdown/         # Content sources for profile & documents
│   ├── music/            # Audio files and album artworks
│   ├── wallpapers/       # macOS Light/Dark desktop wallpaper assets
│   └── resume.pdf        # Downloadable Curriculum Vitae
├── src/
│   ├── components/
│   │   ├── apps/         # macOS Application views (Bear, Mail, Settings, Terminal, etc.)
│   │   ├── dock/         # Dock, DockItem, and Magnification hooks
│   │   ├── menus/        # Topbar, Apple menu, Control Center, Context menu
│   │   ├── widgets/      # Desktop widgets (Calendar, Weather)
│   │   ├── AppWindow.tsx # Window container with drag, resize, and zoom mechanics
│   │   └── DynamicIsland.tsx # Topbar interactive media pill
│   ├── configs/          # Configuration files (apps, bear, music, wallpapers, user)
│   ├── context/          # Audio playback and global application contexts
│   ├── hooks/            # Custom React hooks (window size, audio, local storage)
│   ├── pages/            # Desktop and Login screens
│   ├── stores/           # Zustand stores for settings and window states
│   └── styles/           # Liquid Glass CSS design system and UnoCSS tokens
├── index.html            # Web entry point with metadata
├── package.json          # Project dependencies and npm scripts
├── unocss.config.ts      # UnoCSS design presets and shortcuts
└── vite.config.ts        # Vite configuration and build pipelines
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have Node.js (version **18.0.0** or higher) and npm/pnpm installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/bntngjnrta/bintang-portofolio.git
cd bintang-portofolio
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Run Development Server
```bash
npm run dev
# or
pnpm dev
```
Open your browser and navigate to `http://localhost:5173/` (or the URL displayed in your terminal).

### 4. Build for Production
To create an optimized production build in the `dist` folder:
```bash
npm run build
# or
pnpm build
```

### 5. Preview Production Build
```bash
npm run serve
# or
pnpm serve
```

---

## ⚙️ Customization Guide

To adapt this portfolio for your own CV or personal portfolio:
- **Personal Profile**: Update bio, education, and links in [`src/components/apps/AboutMeProfile.tsx`](src/components/apps/AboutMeProfile.tsx) and [`src/configs/user.ts`](src/configs/user.ts).
- **Achievements & Awards**: Add or edit achievements in [`src/components/apps/AchievementsProfile.tsx`](src/components/apps/AchievementsProfile.tsx).
- **Projects & Publications**: Update project entries and links in [`src/components/apps/ProjectsProfile.tsx`](src/components/apps/ProjectsProfile.tsx) and [`src/configs/bear.tsx`](src/configs/bear.tsx).
- **Audio / Song**: Change the audio file in `public/music/` and edit [`src/configs/music.ts`](src/configs/music.ts).
- **Resume PDF**: Replace `public/resume.pdf` with your own resume file.

---

## 👨‍💻 Author

**Kadek Bintang Januarta**
- 🎓 **Education**: Diploma III - Informatics Management, [Politeknik Astra](https://www.polytechnic.astra.ac.id/)
- 📍 **Location**: Cikarang, West Java / Bali, Indonesia
- ✉️ **Email**: [kadekbintangjanuarta@gmail.com](mailto:kadekbintangjanuarta@gmail.com)
- 💼 **LinkedIn**: [kadek-bintang-januarta](https://www.linkedin.com/in/kadek-bintang-januarta/)
- 🐙 **GitHub**: [@bntngjnrta](https://github.com/bntngjnrta)
- 📸 **Instagram**: [@bntngjnrta](https://www.instagram.com/bntngjnrta?igsh=MW5kb3N4d2h6OW50bA==)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE.md).

