import { Project, SkillCategory, ExperienceItem, CertificateItem, StatItem, Testimonial } from '@/types';

export const PERSONAL_INFO = {
  name: "PREM M",
  avatar: "/profile.jpg",
  title: "AI Engineer | Full-Stack Developer",
  roles: [
    "AI Engineer",
    "Generative AI Developer",
    "LLM & RAG Developer",
    "Machine Learning Engineer",
    "Full-Stack Python Developer",
    "MERN Stack Developer"
  ],
  bio: "Building AI-powered applications using LLMs, RAG, machine learning, and modern full-stack technologies. Passionate about solving real-world problems through intelligent systems and scalable software.",

  about:
    "I am an AI Engineer passionate about Generative AI, Machine Learning, and Full-Stack Development. I enjoy building production-ready AI applications, developing Retrieval-Augmented Generation (RAG) systems, integrating Large Language Models, and creating scalable web applications. My goal is to bridge AI research with practical software solutions that deliver real-world impact.",

  mission:
    "To build intelligent, scalable, and accessible AI solutions that empower people, solve meaningful problems, and make advanced artificial intelligence available to everyone.",

  location: "Coimbatore, Tamil Nadu, India",
  email: "mprem5032@gmail.com",
  github: "https://github.com/premwizard",
  linkedin: "https://www.linkedin.com/in/m-prem/",
  leetcode: "https://leetcode.com/u/mprem5032/",
  resumeUrl: "/RESUME_PREM_M (6).pdf",
};

export const STATS_DATA: StatItem[] = [
  {
    label: "Projects Built",
    value: 28,
    suffix: "+",
    description: "AI, ML & Full-Stack applications"
  },
  {
    label: "GitHub Contributions",
    value: 1195,
    suffix: "+",
    description: "Active development throughout 2026"
  },
  {
    label: "LeetCode Problems",
    value: 600,
    suffix: "+",
    description: "DSA problems solved across algorithms & data structures"
  },

  {
    label: "Learning Streaks (days)",
    value: 710,
    suffix: "+",
    description: "Combined activity across coding & learning platforms"
  }

];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-genai",
    name: "AI & Generative AI",
    skills: [
      { name: "Generative AI (GenAI)" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Prompt Engineering" },
      { name: "LangChain" },
      { name: "Google Agent Development Kit (ADK)" },
      { name: "Ollama" },
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
    ]
  },
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" },
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Redux.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      { name: "Django" },
      { name: "Flask" },
      { name: "Node.js" },
      { name: "Prisma ORM" },
    ]
  },
  {
    id: "databases",
    name: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL (PgSQL)" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "Redis" },
      { name: "ChromaDB" },
    ]
  },
  {
    id: "cloud",
    name: "Cloud Platforms",
    skills: [
      { name: "Amazon Web Services (AWS)" },
      { name: "Microsoft Azure" },
    ]
  },
  {
    id: "infrastructure-realtime",
    name: "Networking, Real-Time & Infra",
    skills: [
      { name: "Nginx" },
      { name: "Reverse Proxy" },
      { name: "Proxy Server" },
      { name: "Microservices" },
      { name: "WebSocket" },
      { name: "Socket.IO" },
    ]
  },
  {
    id: "apis-vcs",
    name: "APIs & Version Control",
    skills: [
      { name: "Postman API" },
      { name: "Git" },
      { name: "GitHub" },
    ]
  },
  {
    id: "analytics-design",
    name: "Analytics & UI/UX Design",
    skills: [
      { name: "Microsoft Power BI" },
      { name: "Tableau" },
      { name: "UI/UX" },
      { name: "Figma" },
      { name: "Canva" },
    ]
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "task-updater-ai",
    title: "Task Updater AI",
    tagline: "AI-powered daily work reporting and productivity management system.",
    description:
      "An intelligent work reporting platform that automates daily status updates, summarizes completed tasks, and helps teams maintain consistent progress tracking using Generative AI.",
    fullDescription:
      "Task Updater AI streamlines daily reporting by leveraging LLMs to generate structured work summaries, monitor project progress, and improve collaboration. Built with a modern full-stack architecture, it reduces manual reporting effort while providing clear insights into individual and team productivity.",
    category: "Generative AI",
    featured: true,
    image: "/projects/task-updater-ai.png",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "LLM",
      "Prompt Engineering"
    ],
    features: [
      "AI-generated daily work reports",
      "Automated task summarization",
      "Progress tracking dashboard",
      "Team productivity insights"
    ],
    githubUrl: "https://github.com/premwizard/Task-Reporter-AI",
    liveUrl: "https://task-reporter-ai.vercel.app/",
    metrics: "AI-powered reporting & workflow automation"
  },

  {
    id: "text-to-design",
    title: "Text to Design AI",
    tagline: "Generate modern UI designs directly from natural language prompts.",
    description:
      "An AI-powered platform that converts text prompts into responsive website layouts and UI concepts using Large Language Models.",
    fullDescription:
      "Text to Design enables users to rapidly prototype interfaces by describing them in plain English. The application generates structured layouts, reusable UI components, and frontend-ready designs, helping designers and developers accelerate product development.",
    category: "AI",
    featured: true,
    image: "/projects/text-to-design.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google ADK",
      "Generative AI",
      "Prompt Engineering"
    ],
    features: [
      "Prompt-to-UI generation",
      "Responsive layout creation",
      "Modern component generation",
      "Rapid design prototyping"
    ],
    githubUrl: "https://github.com/premwizard/Text-to-Design",
    liveUrl: "https://synapseai-ebon.vercel.app/",
    metrics: "AI-powered UI generation platform"
  },

  {
    id: "prompt-vault",
    title: "PromptVault AI",
    tagline: "Intelligent prompt management and organization platform.",
    description:
      "A centralized application for storing, organizing, searching, and managing AI prompts with categories, tags, and reusable collections.",
    fullDescription:
      "PromptVault AI helps developers and AI engineers efficiently manage prompt libraries through intelligent categorization, search capabilities, and version control, making prompt engineering workflows faster and more organized.",
    category: "AI",
    featured: true,
    image: "/projects/prompt-vault.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Generative AI"
    ],
    features: [
      "Prompt organization",
      "Advanced search",
      "Categories & tags",
      "Reusable prompt collections"
    ],
    githubUrl: "https://github.com/premwizard/PromptVault-AI",
    liveUrl: "https://prompt-vault-ai-omega.vercel.app/",
    metrics: "Centralized AI prompt management"
  },

  {
    id: "ai-job-finder",
    title: "AI Job Finder",
    tagline: "AI-powered platform for discovering relevant job opportunities.",
    description:
      "A smart job search platform that helps users find suitable roles using AI-based recommendations and intelligent filtering.",
    fullDescription:
      "AI Job Finder simplifies the job search process by combining intelligent recommendations, modern search capabilities, and an intuitive user experience to connect users with relevant opportunities.",
    category: "Full Stack",
    featured: true,
    image: "/projects/ai-job-finder.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "AI"
    ],
    features: [
      "AI-powered recommendations",
      "Advanced job search",
      "Modern dashboard",
      "Responsive interface"
    ],
    githubUrl: "https://github.com/premwizard/AI-Job-Finder",
    liveUrl: "https://ai-job-finder-flame.vercel.app/",
    metrics: "Smart AI-assisted job discovery"
  },

  {
    id: "medisync360",
    title: "MediSync360",
    tagline: "AI-assisted healthcare management platform.",
    description:
      "A healthcare application focused on patient management, intelligent health monitoring, and medical record organization.",
    fullDescription:
      "MediSync360 integrates healthcare workflows with AI-powered features to improve patient management, medical record accessibility, and healthcare monitoring.",
    category: "Healthcare AI",
    featured: false,
    image: "/projects/medisync360.png",
    techStack: [
      "Python",
      "React",
      "MongoDB",
      "Machine Learning",
      "Flask"
    ],
    features: [
      "Patient management",
      "Health record system",
      "AI-assisted healthcare",
      "Medical data management"
    ],
    githubUrl: "https://github.com/premwizard/Medisync360",
    metrics: "Healthcare management solution"
  },

  {
    id: "ticket-assets",
    title: "Ticket & Asset Management System",
    tagline: "Enterprise asset tracking and IT ticket management platform.",
    description:
      "A modern system for managing organizational assets, service requests, and support tickets with role-based access.",
    fullDescription:
      "Built to streamline IT operations by combining asset inventory, ticket management, reporting, and workflow automation into one centralized platform.",
    category: "Full Stack",
    featured: false,
    image: "/projects/ticket-system.png",
    techStack: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase"
    ],
    features: [
      "Asset management",
      "Ticket tracking",
      "Role-based access",
      "Reporting dashboard"
    ],
    githubUrl: "https://github.com/premwizard/Ticket-and-Asset-Management-System",
    liveUrl:
      "https://ticket-and-asset-management-system-premwizards-projects.vercel.app/",
    metrics: "Enterprise IT management platform"
  },

  {
    id: "music-therapy",
    title: "Music Therapy AI",
    tagline: "AI-driven music recommendation for emotional well-being.",
    description:
      "A machine learning application that recommends personalized music based on mood and emotional analysis.",
    fullDescription:
      "Music Therapy AI uses AI models to analyze emotional states and recommend suitable music playlists that enhance relaxation, focus, or motivation.",
    category: "Machine Learning",
    featured: false,
    image: "/projects/music-therapy.png",
    techStack: [
      "Python",
      "Machine Learning",
      "Flask",
      "React"
    ],
    features: [
      "Mood prediction",
      "Personalized music recommendations",
      "Emotion analysis",
      "Interactive dashboard"
    ],
    githubUrl: "https://github.com/premwizard/Music-Therapy-AI",
    metrics: "AI-based music recommendation system"
  },

  {
    id: "wearable-ai",
    title: "Wearable AI Monitor System",
    tagline: "Smart wearable health monitoring using AI.",
    description:
      "A wearable monitoring platform that collects health data and provides intelligent insights through machine learning.",
    fullDescription:
      "Designed to support continuous health monitoring by combining wearable sensor data with AI models to detect anomalies and visualize health trends.",
    category: "Machine Learning",
    featured: false,
    image: "/projects/wearable-ai.png",
    techStack: [
      "Python",
      "Machine Learning",
      "React",
      "MongoDB"
    ],
    features: [
      "Health monitoring",
      "Sensor integration",
      "Real-time analytics",
      "AI predictions"
    ],
    githubUrl: "https://github.com/premwizard/Wearable-AI-Monitor-System",
    metrics: "Smart health monitoring platform"
  },

  {
    id: "voice-agent",
    title: "Voice Agent",
    tagline: "Conversational AI voice assistant with speech interaction.",
    description:
      "An AI voice assistant capable of understanding speech, processing user queries, and generating natural voice responses.",
    fullDescription:
      "Voice Agent combines speech-to-text, LLM-powered reasoning, and text-to-speech technologies to create a conversational AI assistant for real-time voice interactions.",
    category: "Generative AI",
    featured: false,
    image: "/projects/voice-agent.png",
    techStack: [
      "Python",
      "LLM",
      "Speech-to-Text",
      "Text-to-Speech",
      "FastAPI"
    ],
    features: [
      "Speech recognition",
      "Natural conversations",
      "Voice responses",
      "LLM integration"
    ],
    githubUrl: "https://github.com/premwizard/Voice-Agent",
    metrics: "Conversational AI assistant"
  },

  {
    id: "progression-tracker",
    title: "Progression Tracker",
    tagline: "Track learning progress, goals, and productivity.",
    description:
      "A productivity platform that helps users monitor goals, visualize progress, and stay consistent through detailed analytics.",
    fullDescription:
      "Progression Tracker enables users to set milestones, monitor achievements, and analyze personal growth through intuitive dashboards and progress visualization.",
    category: "Web Application",
    featured: false,
    image: "/projects/progression-tracker.png",
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL"
    ],
    features: [
      "Goal tracking",
      "Progress analytics",
      "Productivity dashboard",
      "Performance insights"
    ],
    githubUrl: "https://github.com/premwizard/Progression-Tracker",
    metrics: "Goal and productivity management"
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  // Experience
  {
    id: "exp-1",
    category: "Experience",
    role: "AI Engineer Intern",
    organization: "ECLearnix Edtech Private Limited",
    location: "India",
    period: "Apr 2026 – Jul 2026",
    type: "Internship",

    description:
      "Contributed to the development of AI-powered applications using Generative AI, Machine Learning, Deep Learning, and Large Language Models.",

    highlights: [
      "Built 4 AI-powered applications including MCP-based AI Agents, Text-to-Design AI, AI UI/UX Automation, and Workflow Automation.",
      "Integrated LLMs, prompt engineering pipelines, backend APIs, and AI automation workflows.",
      "Developed scalable and production-ready AI solutions in a collaborative development environment."
    ],

    technologies: [
      "Python",
      "LLMs",
      "Generative AI",
      "Machine Learning",
      "Deep Learning",
      "Prompt Engineering",
      "Git"
    ]
  },

  {
    id: "exp-2",
    category: "Experience",
    role: "Web Development Intern",
    organization: "Zidio Development",
    location: "Remote",
    period: "Mar 2026 – May 2026",
    type: "Internship",

    description:
      "Developed responsive web applications using modern frontend and backend technologies.",

    highlights: [
      "Built responsive user interfaces.",
      "Worked on real-world web development projects.",
      "Focused on clean, maintainable, and scalable code."
    ],

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Git"
    ]
  },

  {
    id: "exp-3",
    category: "Experience",
    role: "Full Stack Python Developer Intern",
    organization: "Code Infinite Technology",
    location: "Coimbatore, India",
    period: "Jun 2025",
    type: "Internship",

    description:
      "Worked on end-to-end web application development using Python and Django.",

    highlights: [
      "Built full-stack web applications.",
      "Implemented backend APIs and SQL database integration.",
      "Improved understanding of software engineering practices."
    ],

    technologies: [
      "Python",
      "Django",
      "SQL",
      "HTML",
      "CSS"
    ]
  },

  {
    id: "exp-4",
    category: "Experience",
    role: "Machine Learning Intern",
    organization: "EMGLITZ Technologies",
    location: "Coimbatore, India",
    period: "Dec 2024 – Jan 2025",
    type: "Internship",

    description:
      "Applied machine learning techniques to solve real-world prediction problems.",

    highlights: [
      "Performed data preprocessing and visualization.",
      "Built and evaluated machine learning models.",
      "Improved prediction accuracy through feature engineering."
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas"
    ]
  },

  // Education
  {
    id: "edu-1",
    category: "Education",
    role: "B.E. Computer Science and Technology",
    organization: "SNS College of Engineering",
    location: "Coimbatore, India",
    period: "2022 – 2026",
    type: "Bachelor's Degree",

    description:
      "Built a strong foundation in software engineering, artificial intelligence, machine learning, and full-stack development.",

    highlights: [
      "Developed multiple AI and web-based projects.",
      "Focused on Data Structures, Algorithms, AI, and Machine Learning.",
      "Graduated with practical software development experience."
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "React",
      "Node.js",
      "MongoDB"
    ]
  },

  {
    id: "edu-2",
    category: "Education",
    role: "Higher Secondary Certificate (HSC)",
    organization: "Annai Violet Matric Hr. Sec. School",
    location: "India",
    period: "2021 – 2022",
    type: "Higher Secondary",

    description:
      "Completed higher secondary education with a focus on Mathematics and Computer Science.",

    highlights: [
      "Developed analytical thinking.",
      "Built a strong foundation in mathematics and programming."
    ],

    technologies: []
  },

  {
    id: "edu-3",
    category: "Education",
    role: "Secondary School Leaving Certificate (SSLC)",
    organization: "Brilliant Matric Hr. Sec. School",
    location: "India",
    period: "2019 – 2020",
    type: "Secondary Education",

    description:
      "Completed secondary education while developing an early interest in technology and programming.",

    highlights: [
      "Established strong academic fundamentals.",
      "Developed problem-solving and logical reasoning skills."
    ],

    technologies: []
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Microsoft Certified: Azure AI Apps & Agents Developer Associate",
    institution: "Microsoft",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/microsoft-certified-associate-badge.png",
    skillsAcquired: ["Azure AI", "AI Agents", "Prompt Engineering", "LLM Integration", "Generative AI"]
  },
  {
    id: "cert-2",
    title: "Micro-Certification – Agentic AI Executive",
    institution: "ServiceNow / Executive AI",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/servicenow.png",
    skillsAcquired: ["Agentic AI", "AI Governance", "Executive Strategy", "Autonomous Agents"]
  },
  {
    id: "cert-3",
    title: "Databricks Accredited Generative AI Fundamentals",
    institution: "Databricks",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/databricks.png",
    skillsAcquired: ["Generative AI", "Databricks", "LLMs", "Vector Search", "RAG"]
  },
  {
    id: "cert-4",
    title: "Azure AI Fundamentals",
    institution: "Microsoft",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/azureai.png",
    skillsAcquired: ["Azure AI", "Machine Learning", "Computer Vision", "NLP"]
  },
  {
    id: "cert-5",
    title: "Deep Learning",
    institution: "DeepLearning.AI",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/DL.jpg",
    skillsAcquired: ["Neural Networks", "Deep Learning", "CNNs", "Optimization"]
  },
  {
    id: "cert-6",
    title: "AWS Databricks Platform Architect",
    institution: "Databricks & AWS",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/databricksaws.png",
    skillsAcquired: ["AWS", "Databricks", "Platform Architecture", "Data Engineering"]
  },
  {
    id: "cert-7",
    title: "Cloud Computing",
    institution: "NPTEL / Online Certification",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/CLOUD  COMMPUTING.jpg",
    skillsAcquired: ["Cloud Infrastructure", "Distributed Systems", "Virtualization", "AWS"]
  },
  {
    id: "cert-8",
    title: "Mastering Cloud Engineering with AWS and Python",
    institution: "CodeSignal",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/codesignalMCEWAWS.png",
    skillsAcquired: ["AWS", "Python", "Cloud Engineering", "DevOps", "Serverless"]
  },
  {
    id: "cert-9",
    title: "UI/UX Design Traineeship",
    institution: "Design Institute",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/UX Design.png",
    skillsAcquired: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping"]
  },
  {
    id: "cert-10",
    title: "Responsive Web Design",
    institution: "freeCodeCamp",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/RWD.png",
    skillsAcquired: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"]
  },
  {
    id: "cert-11",
    title: "React.js Unfiltered – AIALCHEMIST",
    institution: "AIALCHEMIST",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/react.jpg",
    skillsAcquired: ["React.js", "State Management", "Component Architecture", "Hooks"]
  },
  {
    id: "cert-12",
    title: "Full-Stack (MERN) App/Web Development Traineeship",
    institution: "Maiyyam / Full Stack Institute",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/FSD MAiyyam.png",
    skillsAcquired: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"]
  },
  {
    id: "cert-13",
    title: "Postman API Fundamentals Student Expert",
    institution: "Postman",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/postman.png",
    skillsAcquired: ["API Testing", "Postman", "REST APIs", "API Documentation"]
  },
  {
    id: "cert-14",
    title: "Introduction to MongoDB",
    institution: "MongoDB University",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/intro to mongodb.png",
    skillsAcquired: ["MongoDB", "NoSQL", "Database Queries", "Data Modeling"]
  },
  {
    id: "cert-15",
    title: "Python Flask",
    institution: "Certification",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/pythonflask.png",
    skillsAcquired: ["Python", "Flask", "Backend Development", "REST APIs"]
  },
  {
    id: "cert-16",
    title: "Prompt Engineering",
    institution: "Infosys Springboard",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/promptinfosys.png",
    skillsAcquired: ["Prompt Engineering", "Generative AI", "LLM Optimization", "Context Structuring"]
  },
  {
    id: "cert-17",
    title: "Natural Language Processing",
    institution: "Online Certification",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/NLP.jpg",
    skillsAcquired: ["NLP", "Text Processing", "Tokenization", "Transformers", "Sentiment Analysis"]
  },
  {
    id: "cert-18",
    title: "Progressive Hands-on App Development",
    institution: "Certification",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/PWA.jpg",
    skillsAcquired: ["Progressive Web Apps", "Frontend Development", "Web Performance", "Service Workers"]
  },
  {
    id: "cert-19",
    title: "Python Essentials 1",
    institution: "Cisco Networking Academy / Python Institute",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/python essentials 1.png",
    skillsAcquired: ["Python", "Control Flow", "Functions", "Data Structures"]
  },
  {
    id: "cert-20",
    title: "Mastering Algorithms and Data Structures in Python",
    institution: "Udemy / Tech Academy",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/mastering A&DS In python.png",
    skillsAcquired: ["Algorithms", "Data Structures", "Python", "Problem Solving", "Time Complexity"]
  },
  {
    id: "cert-21",
    title: "Introduction to Machine Learning: Art of the Possible",
    institution: "AWS Training",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/intro to ML art of the possible.png",
    skillsAcquired: ["Machine Learning", "AI Fundamentals", "AWS AI Services"]
  },
  {
    id: "cert-22",
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    institution: "AWS Training",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/fundamentals of MLandAI.png",
    skillsAcquired: ["Machine Learning", "Artificial Intelligence", "Model Building", "Data Preparation"]
  },
  {
    id: "cert-23",
    title: "Foundation: Introduction to LangSmith",
    institution: "LangChain",
    issueDate: "2026",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/intro to langsmith.png",
    skillsAcquired: ["LangSmith", "LLM Evaluation", "Tracing", "Debugging", "LangChain"]
  },
  {
    id: "cert-24",
    title: "Machine Learning Terminology and Process",
    institution: "AWS Training",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/ml terminology.png",
    skillsAcquired: ["ML Pipeline", "Feature Engineering", "Model Evaluation", "ML Lifecycle"]
  },
  {
    id: "cert-25",
    title: "Introduction to Amazon SageMaker",
    institution: "AWS Training",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/intro to aws sagemaker.png",
    skillsAcquired: ["Amazon SageMaker", "Model Deployment", "Cloud ML", "AWS"]
  },
  {
    id: "cert-26",
    title: "Planning a Machine Learning Project",
    institution: "AWS Training",
    issueDate: "2025",
    credentialId: "",
    credentialUrl: "",
    image: "/certificates/ML Project AWS.png",
    skillsAcquired: ["ML Project Management", "Problem Formulation", "Data Strategy", "MLOps"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr.Pravin thangavelu",
    role: "Executive Director",
    company: "ECLearnix Edtech Private Limited",
    avatar: "",
    content: "It has been a pleasure mentoring Prem during his internship as an AI Engineer. Throughout this period, I was consistently impressed by his dedication, curiosity, and eagerness to learn. He quickly grasped new concepts, took ownership of his responsibilities, and approached every task with a positive attitude. Prem has shown strong potential in AI, machine learning, and software development. He contributed well to project work, demonstrated good problem-solving skills, and was always willing to explore new technologies. I’m confident that with his passion and commitment to continuous learning, he will be a valuable addition to any team and has a bright future ahead.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/dr-pravin-thangavelu-32942569/"
  },
  {
    id: "test-2",
    name: "Gopinath Manickam",
    role: "Mobile App Developer",
    company: "ECLearnix Edtech Private Limited",
    avatar: "",
    content: "I am delighted to recommend Prem for opportunities in AI Product Engineer. During his internship, Prem consistently demonstrated exceptional learning agility, adaptability, and a strong passion for emerging AI technologies. He quickly grasped new concepts, proactively took ownership of tasks, and showed a remarkable ability to apply his knowledge to real-world challenges. His dedication, curiosity, and continuous improvement mindset make him a promising AI Product Engineer. I am confident that Prem will be a valuable asset to any team and wish him great success in his professional journey.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/gopinath-manickam-941415234/"
  },
  {
    id: "test-3",
    name: "Vanisree M",
    role: "UI/UX Developer",
    company: "7dots.space",
    avatar: "",
    content: "I highly recommend Prem. He is a talented and versatile professional with a strong eagerness to learn and execute. He brings solid knowledge and proven skills to everything he does in his field.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/vanisree-m/"
  },
  {
    id: "test-4",
    name: "ET Gaming - தமிழ்",
    role: "Client",
    company: "ETBros",
    avatar: "",
    content: "I had a great experience working with Prem on our website project for ET Gaming. From the beginning, he took the time to understand all of our requirements and made sure every detail was implemented as requested. He communicated clearly throughout the development process, was open to feedback, and quickly made any changes we needed. The quality of the website exceeded our expectations. It is modern, responsive, easy to use, and performs smoothly across different devices. Prem paid attention to both the design and functionality, ensuring the final product looked professional and worked exactly as we wanted. What impressed us the most was his dedication and commitment to delivering a project that truly satisfied our requirements. He was reliable, delivered on time, and maintained a professional attitude throughout the project. Overall, we are very satisfied with the service provided by Prem and would highly recommend him to anyone looking for a skilled and trustworthy web developer. We look forward to working with him again on future projects.",
    rating: 5,
    linkedinUrl: ""
  },
  {
    id: "test-5",
    name: "Siva V",
    role: "Full Stack Developer",
    company: "SurgeonsLab",
    avatar: "",
    content: "I’ve had the opportunity to work with Prem and have been consistently impressed by his strong technical knowledge and problem-solving skills. He has a solid understanding of Full Stack and AI technologies, learns quickly, and approaches complex challenges with a practical mindset. I highly recommend Prem for roles where strong technical expertise, adaptability, and a passion for building innovative solutions are valued.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/siva-v-30b86a210/"
  }

];
