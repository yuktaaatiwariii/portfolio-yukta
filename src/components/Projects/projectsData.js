import agrihubVideo from "../../assets/agrihub-video.mp4";
import ombreilleVideo from "../../assets/ombreille.mp4";
import mojitoVideo from "../../assets/Mojito.mp4";

export const projectsData = [
  {
    id: 1,
    title: "AGRIHUB",
    category: "Agricultural Technology",
    year: "2026",

    description:
      "A full-stack agricultural support platform developed as a team project to bring essential farming resources into one digital ecosystem. AgriHub combines weather forecasting, government scheme information, educational video tutorials, crop mapping, and an AI-powered chatbot that helps users access relevant agricultural guidance through an interactive interface.",

    video: agrihubVideo,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI"
    ]
  },

  {
    id: 2,
    title: "OMBREILLE",
    category: "Professional Client Work",
    year: "2026",

    description:
      "A premium digital brand experience developed professionally for OMBREILLE, a company bringing three distinct services under one roof across hospitality, aviation, and real estate. The website was designed and developed as a unified digital experience, combining a sophisticated visual identity .",
    video: ombreilleVideo,

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Responsive Design"
    ]
  },

  {
    id: 3,
    title: "LEDGERPAY",
    category: "FinTech / Banking Platform",
    year: "2026",

    description:
      "A full-stack banking management system designed to simulate the core functionality of a modern digital banking platform. LedgerPay provides secure authentication, account management, fund transfers, transaction history, administrator controls, and an immutable ledger system.",

    video: "",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose"
    ]
  },

  {
    id: 4,
    title: "INTERVIA",
    category: "AI-Powered SaaS",
    year: "2026",

    description:
      "An AI-powered career SaaS platform that conducts personalized interviews in the candidate’s preferred language and provides detailed performance feedback. It also includes an AI resume analyzer and optimizer, resume builder, and job board for tracking applications and managing the job search journey.",

    video: "",

    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "OpenRouter",
      "AI",
      "Speech Recognition"
    ]
  },

  {
    id: 5,
    title: "MOJITO",
    category: "3D Creative Experience",
    year: "2026",

    description:
      "A frontend-focused experimental web experience built around immersive 3D visuals, animation, and interactive storytelling. MOJITO explores how modern web technologies can transform a conventional interface into a highly visual digital experience through animated transitions, 3D elements, smooth interactions, and motion-driven layouts.", 
    video: mojitoVideo,

    technologies: [
      "React",
      "Three.js",
      "WebGL",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS"
    ]
  }
];