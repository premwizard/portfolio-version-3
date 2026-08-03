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
  github: "https://github.com/alexander-vance-ai",
  linkedin: "https://linkedin.com/in/alexander-vance-ai",
  leetcode: "https://leetcode.com/alexvance_ai",
  resumeUrl: "/resume.pdf",
};

export const STATS_DATA: StatItem[] = [
  {
    label: "Projects Built",
    value: 20,
    suffix: "+",
    description: "AI, ML & Full-Stack applications"
  },
  {
    label: "AI Applications",
    value: 10,
    suffix: "+",
    description: "LLMs, RAG & intelligent automation"
  },
  {
    label: "Technologies",
    value: 40,
    suffix: "",
    description: "Languages, frameworks & cloud platforms"
  },
  {
    label: "GitHub Contributions",
    value: 916,
    suffix: "+", 
    description: "Active development throughout 2026"
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
    id: "infrastructure",
    name: "Networking & Infrastructure",
    skills: [
      { name: "Nginx" },
      { name: "Reverse Proxy" },
      { name: "Proxy Server" },
      { name: "Microservices" },
    ]
  },
  {
    id: "realtime",
    name: "Real-Time Communication",
    skills: [
      { name: "WebSocket" },
      { name: "Socket.IO" },
    ]
  },
  {
    id: "apis",
    name: "API Development & Testing",
    skills: [
      { name: "Postman API" },
    ]
  },
  {
    id: "version-control",
    name: "Version Control",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
    ]
  },
  {
    id: "analytics",
    name: "Data Analytics & BI",
    skills: [
      { name: "Microsoft Power BI" },
      { name: "Tableau" },
    ]
  },
  {
    id: "design",
    name: "UI/UX & Design",
    skills: [
      { name: "UI/UX" },
      { name: "Figma" },
      { name: "Canva" },
    ]
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "neuro-mesh",
    title: "NeuroMesh Agentic Orchestrator",
    tagline: "Autonomous multi-agent LLM framework with DAG execution and dynamic memory consolidation.",
    description: "An enterprise-grade autonomous multi-agent orchestration engine featuring persistent memory, tool retrieval using HNSW vector indexing, and asynchronous parallel execution.",
    fullDescription: "NeuroMesh enables autonomous LLM agents to collaborate on multi-step reasoning workflows. Powered by vLLM inference engine, LangGraph routing, and Qdrant vector memory, it reduces agent loop overhead by 45% while handling up to 10,000 parallel sub-tasks.",
    category: "AI",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "PyTorch", "FastAPI", "vLLM", "Qdrant", "LangChain", "Redis"],
    features: [
      "Dynamic DAG workflow planning with topological sorting",
      "Asynchronous streaming tool invocation over gRPC",
      "Hierarchical memory storage (short-term KV cache + long-term vector embeddings)",
      "Built-in telemetry & trace visualization with Jaeger & MLflow"
    ],
    githubUrl: "https://github.com/alexander-vance-ai/neuromesh-orchestrator",
    liveUrl: "https://neuromesh-demo.vercel.app",
    metrics: "45% faster execution, 12k+ monthly API queries"
  },
  {
    id: "quant-vision-rag",
    title: "QuantVision Multimodal RAG Engine",
    tagline: "Ultra-low latency vision-language retrieval engine for technical diagrams and financial charts.",
    description: "Hybrid multimodal RAG pipeline extracting semantic knowledge from technical schematics, PDF tables, and chart metrics using ColPali and Qwen2-VL.",
    fullDescription: "Built for automated document understanding in finance and engineering, QuantVision combines visual layout embeddings with BM25 keyword matching for hybrid retrieval. Achieves sub-150ms retrieval latencies across 1M+ indexed documents.",
    category: "Machine Learning",
    featured: true,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "Transformers", "Milvus", "FastAPI", "React", "Tailwind CSS"],
    features: [
      "Visual document indexing with vision-transformer embeddings",
      "Hybrid retrieval combining dense vector search and BM25 sparse scoring",
      "Real-time PDF page bounding-box highlighting",
      "Custom fine-tuned reranker model trained on domain technical papers"
    ],
    githubUrl: "https://github.com/alexander-vance-ai/quantvision-rag",
    liveUrl: "https://quantvision.vercel.app",
    metrics: "Sub-150ms retrieval, 98.4% retrieval accuracy"
  },
  {
    id: "hyper-vector-db",
    title: "HyperVector C++ Indexer",
    tagline: "High-performance SIMD-accelerated C++ vector indexer with AVX-512 optimization.",
    description: "An ultra-fast, lightweight vector indexing engine written in modern C++20 with Python bindings, implementing Product Quantization (PQ) and HNSW graph search.",
    fullDescription: "HyperVector provides bare-metal performance for local vector operations. Utilizing Intel AVX-512 vector instructions and cache-aligned SIMD routines, it yields 3.2x faster query throughput compared to baseline FAISS implementations.",
    category: "Backend",
    featured: true,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    techStack: ["C++20", "Python", "pybind11", "OpenMP", "CMake", "Google Test"],
    features: [
      "SIMD-accelerated L2 cosine distance computations",
      "Thread-safe HNSW graph insertion with fine-grained locking",
      "Zero-copy Python integration via pybind11 buffers",
      "Quantization compression shrinking index footprint by 75%"
    ],
    githubUrl: "https://github.com/alexander-vance-ai/hypervector-cpp",
    metrics: "3.2x FAISS throughput, 75% memory footprint reduction"
  },
  {
    id: "cortex-studio",
    title: "Cortex AI Workflow Studio",
    tagline: "Full-stack visual node editor for prompt engineering and model evaluation.",
    description: "A sleek, node-based web application allowing developers to compose, test, benchmark, and deploy complex LLM prompt chains and evaluation pipelines.",
    fullDescription: "Cortex Studio bridges the gap between AI engineers and product builders. Featuring real-time execution graphs, token cost estimators, auto-evaluations with GPT-4-as-a-judge, and one-click FastAPI endpoint generation.",
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "ReactFlow", "FastAPI", "PostgreSQL"],
    features: [
      "Drag-and-drop node graph canvas with custom node runtime",
      "Real-time token cost breakdown and streaming output visualizer",
      "Automated prompt versioning and regression testing suite",
      "Serverless deployment to cloud REST endpoints"
    ],
    githubUrl: "https://github.com/alexander-vance-ai/cortex-studio",
    liveUrl: "https://cortex-studio-demo.vercel.app",
    metrics: "Over 500+ active developer nodes created"
  },
  {
    id: "deep-sentinel-cv",
    title: "DeepSentinel Anomaly Detection",
    tagline: "Real-time edge computer vision anomaly detection system for industrial IoT.",
    description: "Convolutional autoencoder model deployed on NVIDIA Jetson devices for instant defect classification in manufacturing assembly lines.",
    fullDescription: "Built with PyTorch and TensorRT, DeepSentinel analyzes 60 FPS video streams to detect structural defects and anomalies down to sub-millimeter scales with zero cloud dependency.",
    category: "Machine Learning",
    featured: false,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "PyTorch", "TensorRT", "OpenCV", "Docker", "MQTT"],
    features: [
      "Spatial autoencoder with structural similarity loss (SSIM)",
      "Hardware-accelerated inference with TensorRT FP16 quantization",
      "Edge-to-cloud telemetry sync with low latency MQTT",
      "Automated dataset drift detection and retraining trigger"
    ],
    githubUrl: "https://github.com/alexander-vance-ai/deepsentinel-cv",
    metrics: "60 FPS edge inference, 99.1% anomaly recall"
  },
  {
    id: "synergy-llm-serving",
    title: "Synergy LLM Gateway & Load Balancer",
    tagline: "Enterprise API gateway for intelligent LLM routing, fallback, and semantic caching.",
    description: "High-performance Rust/Node.js reverse proxy that caches LLM responses semantically using vector similarity and load balances requests across Anthropic, OpenAI, and self-hosted vLLM nodes.",
    fullDescription: "Synergy eliminates redundant LLM API costs by serving semantic cache hits from Redis + Milvus within 12ms. Features automated rate limiting, failover routing, and cost budgeting per tenant.",
    category: "Backend",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    techStack: ["TypeScript", "Node.js", "Redis", "Milvus", "Docker", "Prometheus"],
    features: [
      "Semantic vector cache delivering sub-15ms cached responses",
      "Dynamic cost-aware load balancing between model vendors",
      "Token usage throttling and tenant cost allocation dashboard",
      "Zero-downtime hot reloading of route configurations"
    ],
    githubUrl: "https://github.com/alexander-vance-ai/synergy-llm-gateway",
    liveUrl: "https://synergy-gateway.vercel.app",
    metrics: "Reduces API costs by 38%, 15ms semantic cache hits"
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
  }
];
