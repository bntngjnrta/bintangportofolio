import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-ph:user-circle",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-ph:user",
        excerpt: "Let's connect and get to know me better."
      },
      {
        id: "github-stats",
        title: "Achievements",
        file: "markdown/github-stats.md",
        icon: "i-ph:trophy",
        excerpt: "My awards, organizations, and publications."
      },
      {
        id: "about-site",
        title: "Resume",
        file: "markdown/about-site.md",
        icon: "i-ph:browser",
        excerpt: "Download my complete resume."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-ph:git-branch",
    md: [
      {
        id: "sentiment-analysis",
        title: "Sentiment Analysis ML",
        file: "projects/sentiment-analysis.md",
        icon: "i-ph:article",
        excerpt: "Sentiment analysis & clustering with machine learning...",
        link: "https://ieeexplore.ieee.org/document/11381376"
      },
      {
        id: "melanoma-detection",
        title: "Melanoma Detection XAI",
        file: "projects/melanoma-detection.md",
        icon: "i-ph:certificate",
        excerpt: "Dermoscopic image melanoma detection with XAI (on going)...",
        link: "https://drive.google.com/file/d/1Umpu-bwWe23QHhGorEXij9P3Rz7SQo7J/view?usp=sharing"
      },
      {
        id: "asset-management",
        title: "Asset Management System",
        file: "projects/asset-management.md",
        icon: "i-ph:hard-drives",
        excerpt: "Asset management system for UPT Informatics using PHP CI3...",
      },
      {
        id: "academic-system",
        title: "Academic Info System",
        file: "projects/academic-system.md",
        icon: "i-ph:graduation-cap",
        excerpt: "Academic information system for ASTRA Polytechnic (Next.js & ASP.NET)...",
      },
      {
        id: "recruitment-system",
        title: "GS Battery Recruitment",
        file: "projects/recruitment-system.md",
        icon: "i-ph:briefcase",
        excerpt: "Employee recruitment system for PT GS Battery (C# & DevExpress)...",
        link: "https://career.gs.astra.co.id/"
      },
      {
        id: "cening-community",
        title: "Cening Community Web",
        file: "projects/cening-community.md",
        icon: "i-ph:globe",
        excerpt: "Company profile website for Cening Community using React.js...",
        link: "https://ceningcommunity.vercel.app/"
      },
      {
        id: "mentora-ai",
        title: "Mentora AI (RAG)",
        file: "projects/mentora-ai.md",
        icon: "i-fa6-brands:github",
        excerpt: "Mobile-Based AI Learning Assistant with RAG for students...",
        link: "https://github.com/bntngjnrta"
      },
      {
        id: "mackerel-carbon",
        title: "Mackerel Tuna Electrode",
        file: "projects/mackerel-carbon.md",
        icon: "i-ph:lightning-fill",
        excerpt: "Tuna bone waste as activated carbon electrode for supercapacitors...",
      },
      {
        id: "water-purification",
        title: "Water Purification IoT",
        file: "projects/water-purification.md",
        icon: "i-ph:sun",
        excerpt: "Arduino & solar-powered water purification system...",
      }
    ]
  }
];

export default bear;
