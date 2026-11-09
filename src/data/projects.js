export const projectsData = [
  {
    id: "civicconnect",
    title: "CivicConnect",
    tagline: "Citizen Complaint Reporting and Tracking Platform",
    category: "Full Stack Web Application",
    timeline: "2025 – Present",
    status: "Active Development",
    featured: true,
    description:
      "A full-stack community reporting platform engineered to streamline communication between citizens and municipal bodies. CivicConnect empowers residents to file geo-located complaints regarding civic issues (road damage, water leakages, sanitation, street lighting) and track resolution progress transparently through an accountable status pipeline.",
    overview:
      "Traditional municipal complaint filing often lacks transparency, leaving citizens uncertain if their reports were received or acted upon. CivicConnect resolves this by providing an end-to-end status lifecycle dashboard, category-based routing, and verified resolution updates.",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "SQL",
      "Tailwind CSS",
      "REST APIs"
    ],
    architecture: {
      client: "Responsive React frontend with client-side form validation, category filtering, and real-time report status visualization.",
      server: "RESTful Express.js API enforcing structured request parsing, input sanitization, and administrative state transition guards.",
      database: "Relational SQL database maintaining normalized tables for users, complaint tickets, category tags, and historical resolution logs."
    },
    keyFeatures: [
      {
        title: "Complaint Filing & Categorization",
        detail: "Intuitive citizen submission flow with structured incident details, location tagging, and departmental categorization."
      },
      {
        title: "Transparent Lifecycle Tracking",
        detail: "Clear multi-stage status indicators: Submitted, Under Review, In Progress, and Resolved."
      },
      {
        title: "Administrative Management Portal",
        detail: "Authorized interface for officials to review incoming civic complaints, assign priority levels, and post resolution updates."
      },
      {
        title: "Public Transparency Feed",
        detail: "Searchable and filterable community feed preventing duplicate reports and increasing public awareness."
      }
    ],
    githubUrl: "https://github.com/Niteshvishwkarma206",
    codebaseTag: "Full Stack",
    accentColor: "blue"
  },
  {
    id: "sera",
    title: "SERA",
    tagline: "Gemini-Powered Windows Voice Assistant",
    category: "AI & Desktop Automation",
    timeline: "2025 – Present",
    status: "Active Development",
    featured: true,
    description:
      "A voice-activated Windows desktop assistant that pairs local audio processing with Google Gemini's multimodal intelligence. SERA captures voice commands, queries the Gemini API for natural language reasoning, and executes local operating system tasks such as application launching, web lookups, and system queries.",
    overview:
      "Standard voice assistants are frequently rigid and bound to fixed keyword commands. SERA leverages modern generative AI (Google Gemini) to comprehend nuanced natural language prompts, bridging high-level reasoning with desktop OS automation.",
    techStack: [
      "Python",
      "Google Gemini API",
      "SpeechRecognition",
      "pyttsx3 / Windows SAPI",
      "OS & Subprocess Automation",
      "JSON Configuration"
    ],
    architecture: {
      audioPipeline: "Low-latency microphone capture utilizing Python SpeechRecognition, converting spoken input into clean transcribed text.",
      reasoningEngine: "Integration with Google Gemini API with system prompting to classify user intent into conversation or executable system tasks.",
      executionModule: "Safe Windows automation layer executing verified application launches, web search queries, and operating system diagnostics."
    },
    keyFeatures: [
      {
        title: "Voice-First Interaction (STT / TTS)",
        detail: "Hands-free interaction using speech-to-text input paired with natural, local text-to-speech audio feedback."
      },
      {
        title: "Gemini Generative Reasoning",
        detail: "Context-aware conversational answers powered by Google Gemini LLM for coding help, factual queries, and instructions."
      },
      {
        title: "Desktop & System Automation",
        detail: "Automates repetitive Windows actions: launching IDEs, searching browser tabs, checking time/weather, and system utilities."
      },
      {
        title: "Modular Intent Architecture",
        detail: "Structured Python architecture separating voice capture, LLM reasoning, command verification, and task execution."
      }
    ],
    githubUrl: "https://github.com/Niteshvishwkarma206",
    codebaseTag: "Python & AI",
    accentColor: "indigo"
  }
];

