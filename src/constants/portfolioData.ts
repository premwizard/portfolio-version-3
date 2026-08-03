import { Project, SkillCategory, ExperienceItem, CertificateItem, StatItem, Testimonial } from '@/types';

export const PERSONAL_INFO = {
  name: "PREM M",
  avatar: "/profile.jpg",
  title: "AI Engineer",
  roles: [
    "AI Engineer",
    "LLM & RAG Architect",
    "Machine Learning Engineer",
    "Deep Learning Researcher",
    "Full-Stack Python Developer"
  ],
  bio: "Architecting high-throughput LLM pipelines, distributed vector search engines, and enterprise AI agent frameworks. Specialized in productionizing foundation models with microsecond latency.",
  about: "I am a Senior AI & Machine Learning Engineer with 6+ years of experience engineering scalable artificial intelligence systems, multi-agent frameworks, and high-performance backend infrastructure. Formerly leading ML infrastructure projects, I focus on bridging cutting-edge LLM research into low-latency production applications.",
  mission: "Democratizing state-of-the-art AI systems through clean architectural patterns, robust model optimization, and performant user experiences.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "mprem5032@gmail.com",
  github: "https://github.com/alexander-vance-ai",
  linkedin: "https://linkedin.com/in/alexander-vance-ai",
  leetcode: "https://leetcode.com/alexvance_ai",
  resumeUrl: "/resume.pdf",
};

export const STATS_DATA: StatItem[] = [
  {
    label: "Years Experience",
    value: 6,
    suffix: "+",
    description: "Building production ML & distributed systems"
  },
  {
    label: "AI Pipelines Built",
    value: 40,
    suffix: "+",
    description: "Production LLM, RAG & vision workflows"
  },
  {
    label: "GitHub Stars",
    value: 1200,
    suffix: "+",
    description: "Across open-source AI repos & toolkits"
  },
  {
    label: "Certifications",
    value: 8,
    suffix: "",
    description: "Deep Learning, PyTorch, AWS ML & GCP AI"
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
  {
    id: "exp-1",
    role: "Senior AI & Systems Engineer",
    company: "Apex Cognitive Systems",
    location: "San Francisco, CA",
    period: "2023 - Present",
    type: "Full-time",
    description: "Leading the core AI Infrastructure team building enterprise multi-agent frameworks, low-latency RAG systems, and self-hosted LLM clusters.",
    highlights: [
      "Architected distributed RAG infrastructure serving 1.5M+ daily queries with 99.98% availability.",
      "Reduced foundation model inference latency by 40% through vLLM integration and FP8 quantization.",
      "Mentored a team of 6 ML engineers and published 2 internal technical whitepapers on Agentic Workflows."
    ],
    technologies: ["PyTorch", "vLLM", "FastAPI", "Qdrant", "Ray", "Kubernetes", "Next.js"]
  },
  {
    id: "exp-2",
    role: "Machine Learning Engineer",
    company: "Neural Scale Labs",
    location: "Palo Alto, CA",
    period: "2021 - 2023",
    type: "Full-time",
    description: "Engineered computer vision and natural language processing pipelines for automated technical document parsing.",
    highlights: [
      "Trained custom vision-language models achieving SOTA performance on technical diagram extraction.",
      "Built end-to-end MLOps pipeline on AWS SageMaker with automated model validation & deployment.",
      "Optimized vector search indexing, cutting infrastructure cloud expenditure by $120K annually."
    ],
    technologies: ["Python", "TensorFlow", "Transformers", "Pinecone", "Docker", "AWS SageMaker"]
  },
  {
    id: "exp-3",
    role: "Full-Stack AI Developer",
    company: "Synthetix Intelligence",
    location: "Austin, TX",
    period: "2019 - 2021",
    type: "Full-time",
    description: "Developed interactive web applications driven by NLP models and custom predictive analytics dashboards.",
    highlights: [
      "Created modern React/Next.js dashboard interfaces for real-time model telemetry visualization.",
      "Implemented RESTful microservices in Python & FastAPI connecting web clients to ML inference backends.",
      "Decreased API payload response times by 55% using async gRPC protocol adapters."
    ],
    technologies: ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "Redis"]
  },
  {
    id: "exp-4",
    role: "AI Research Intern",
    company: "Stanford Vision & AI Lab",
    location: "Stanford, CA",
    period: "2018 - 2019",
    type: "Research",
    description: "Researched deep generative models and self-supervised visual representation learning under faculty guidance.",
    highlights: [
      "Co-authored research poster on self-supervised contrastive learning for unlabeled medical imagery.",
      "Developed modular PyTorch benchmarking scripts open-sourced for laboratory researchers."
    ],
    technologies: ["Python", "PyTorch", "Scikit-Learn", "OpenCV", "Git"]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Deep Learning Specialization",
    institution: "DeepLearning.AI / Stanford",
    issueDate: "2023",
    credentialId: "DL-AI-9948271",
    credentialUrl: "https://coursera.org/verify/specialization/DL-AI",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    skillsAcquired: ["Neural Networks", "CNNs", "RNNs", "Transformers", "Model Optimization"]
  },
  {
    id: "cert-2",
    title: "AWS Certified Machine Learning - Specialty",
    institution: "Amazon Web Services",
    issueDate: "2023",
    credentialId: "AWS-MLS-772109",
    credentialUrl: "https://aws.amazon.com/verification",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    skillsAcquired: ["SageMaker", "MLOps", "Data Engineering", "Distributed Training", "Security"]
  },
  {
    id: "cert-3",
    title: "Generative AI & LLM Systems Architect",
    institution: "NVIDIA Deep Learning Institute",
    issueDate: "2024",
    credentialId: "NV-DLI-882314",
    credentialUrl: "https://nvidia.com/dli/verify",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    skillsAcquired: ["vLLM", "TensorRT-LLM", "NeMo", "RAG Optimization", "GPU Parallelism"]
  },
  {
    id: "cert-4",
    title: "Google Professional Cloud AI Engineer",
    institution: "Google Cloud Platform",
    issueDate: "2022",
    credentialId: "GCP-AI-334910",
    credentialUrl: "https://cloud.google.com/certification/verify",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    skillsAcquired: ["Vertex AI", "BigQuery ML", "TensorFlow", "Kubeflow", "ML Governance"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "ScaleAI Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    content: "Prem's expertise in low-latency RAG architectures transformed our entire search pipeline. He reduced our inference latency from 450ms to sub-40ms while scaling to 10M daily requests. A world-class engineer.",
    rating: 5,
    projectTag: "Enterprise RAG Engine",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "test-2",
    name: "Dr. Marcus Vance",
    role: "Head of AI Research",
    company: "NeuralNode Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    content: "Working alongside Prem on multi-agent orchestrations was an absolute pleasure. His deep intuition for vLLM optimization and distributed CUDA workloads is rare to find. Highly recommended!",
    rating: 5,
    projectTag: "Multi-Agent Platform",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Product Director",
    company: "Nexus AI Cloud",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    content: "Prem delivered our distributed vector search engine weeks ahead of deadline. His clean architecture, thorough testing, and clear communication set the benchmark for engineering excellence.",
    rating: 5,
    projectTag: "Vector Search Infrastructure",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "test-4",
    name: "David Kormann",
    role: "CTO",
    company: "Synthetix Automations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    content: "Prem redesigned our ML feature store and model serving layer. His proactive problem solving saved our infra costs by over 40% while doubling output throughput.",
    rating: 5,
    projectTag: "MLOps & Feature Store",
    linkedinUrl: "https://linkedin.com"
  }
];
