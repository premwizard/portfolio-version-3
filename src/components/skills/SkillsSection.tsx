'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Terminal,
  Layers,
  Database,
  Wrench,
  Sparkles,
  Search,
  Code2,
  Server,
  Boxes,
  Workflow,
  Zap,
  Palette,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';

// Helper component for rock-solid SVG loading with fallback providers
const SkillLogo: React.FC<{ skillName: string }> = ({ skillName }) => {
  const name = skillName.toLowerCase();
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  if (name.includes('ui') || name.includes('ux') || name.includes('design')) return <Palette className="w-6 h-6 text-[#A288A6]" />;
  if (name.includes('rag')) return <Search className="w-6 h-6 text-[#A288A6]" />;
  if (name.includes('prompt')) return <Terminal className="w-6 h-6 text-[#A288A6]" />;
  if (name.includes('generative')) return <Sparkles className="w-6 h-6 text-[#A288A6]" />;
  if (name.includes('machine learning')) return <Workflow className="w-6 h-6 text-[#A288A6]" />;
  if (name === 'artificial intelligence' || name === 'ai') return <Brain className="w-6 h-6 text-[#A288A6]" />;

  if (name.includes('chroma')) {
    return (
      <img
        src="/chromadb-icon.png"
        alt="ChromaDB"
        className="w-6 h-6 object-contain"
      />
    );
  }

  // Map technology names to primary SimpleIcons CDN slugs & Devicon fallbacks
  const getLogoUrls = (tech: string): string[] => {
    if (tech.includes('chroma')) return [
      'https://raw.githubusercontent.com/chroma-core/chroma/main/docs/static/img/chroma-logo.redesigned.svg',
      'https://cdn.simpleicons.org/chromadb',
      'https://raw.githubusercontent.com/chroma-core/chroma/main/docs/static/img/chroma-logo.svg'
    ];
    if (tech === 'mysql' || (tech.includes('mysql') && !tech.includes('azure'))) return ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'https://cdn.simpleicons.org/mysql'];
    if (tech.includes('sql') && !tech.includes('mysql') && !tech.includes('pgsql') && !tech.includes('postgres')) return ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', 'https://cdn.simpleicons.org/mysql'];
    if (tech.includes('chroma')) return ['https://cdn.simpleicons.org/chromadb'];
    if (tech.includes('postgres') || tech.includes('pgsql')) return ['https://cdn.simpleicons.org/postgresql', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'];
    if (tech.includes('python')) return ['https://cdn.simpleicons.org/python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'];
    if (tech.includes('pytorch')) return ['https://cdn.simpleicons.org/pytorch', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'];
    if (tech.includes('transformers') || tech.includes('huggingface')) return ['https://cdn.simpleicons.org/huggingface', 'https://huggingface.co/front/assets/huggingface-logo-noborder.svg'];
    if (tech.includes('tensorflow') || tech.includes('keras')) return ['https://cdn.simpleicons.org/tensorflow', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'];
    if (tech.includes('opencv') || tech.includes('vision')) return ['https://cdn.simpleicons.org/opencv', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'];
    if (tech.includes('typescript')) return ['https://cdn.simpleicons.org/typescript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'];
    if (tech.includes('javascript')) return ['https://cdn.simpleicons.org/javascript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'];
    if (tech.includes('c++')) return ['https://cdn.simpleicons.org/cplusplus', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'];
    if (tech.includes('django')) return ['https://cdn.simpleicons.org/django', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'];
    if (tech.includes('flask')) return ['https://cdn.simpleicons.org/flask/F1E3E4', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'];
    if (tech.includes('fastapi')) return ['https://cdn.simpleicons.org/fastapi', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'];
    if (tech.includes('prisma')) return ['https://cdn.simpleicons.org/prisma/F1E3E4'];
    if (tech.includes('node')) return ['https://cdn.simpleicons.org/nodedotjs', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'];
    if (tech.includes('mongo')) return ['https://cdn.simpleicons.org/mongodb', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'];
    if (tech.includes('firebase')) return ['https://cdn.simpleicons.org/firebase', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'];
    if (tech.includes('supabase')) return ['https://cdn.simpleicons.org/supabase'];
    if (tech.includes('redis')) return ['https://cdn.simpleicons.org/redis', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'];
    if (tech.includes('aws') || tech.includes('amazon')) return ['https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', 'https://cdn.simpleicons.org/amazonwebservices/FF9900'];
    if (tech.includes('azure')) return ['https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg', 'https://cdn.simpleicons.org/microsoftazure'];
    if (tech.includes('nginx')) return ['https://cdn.simpleicons.org/nginx', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'];
    if (tech.includes('socket')) return ['https://cdn.simpleicons.org/socketdotio/F1E3E4'];
    if (tech.includes('postman')) return ['https://cdn.simpleicons.org/postman'];
    if (tech.includes('github')) return ['https://cdn.simpleicons.org/github/F1E3E4', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'];
    if (tech.includes('git')) return ['https://cdn.simpleicons.org/git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'];
    if (tech.includes('power bi') || tech.includes('powerbi')) return ['https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', 'https://cdn.simpleicons.org/powerbi'];
    if (tech.includes('tableau')) return ['https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg'];
    if (tech.includes('figma')) return ['https://cdn.simpleicons.org/figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'];
    if (tech.includes('canva')) return ['https://cdn.simpleicons.org/canva', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'];
    if (tech.includes('bootstrap')) return ['https://cdn.simpleicons.org/bootstrap', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'];
    if (tech.includes('react')) return ['https://cdn.simpleicons.org/react', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'];
    if (tech.includes('next')) return ['https://cdn.simpleicons.org/nextdotjs/F1E3E4', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'];
    if (tech.includes('tailwind')) return ['https://cdn.simpleicons.org/tailwindcss', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'];
    if (tech.includes('redux')) return ['https://cdn.simpleicons.org/redux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'];
    if (tech.includes('ollama')) return ['https://cdn.simpleicons.org/ollama/F1E3E4'];
    if (tech.includes('langchain')) return ['https://cdn.simpleicons.org/langchain'];
    if (tech.includes('office')) return ['https://cdn.simpleicons.org/microsoftoffice'];
    if (tech.includes('google')) return ['https://cdn.simpleicons.org/google'];
    return [];
  };

  const urls = getLogoUrls(name);
  const primaryUrl = imgSrc || (urls.length > 0 ? urls[0] : null);

  const handleError = () => {
    if (urls.length > 1 && imgSrc !== urls[1]) {
      setImgSrc(urls[1]);
    } else {
      setHasError(true);
    }
  };

  if (!primaryUrl || hasError) {
    if (name.includes('rag') || name.includes('generative') || name.includes('prompt') || name.includes('ai')) return <Brain className="w-6 h-6 text-[#A288A6]" />;
    if (name.includes('vector') || name.includes('database')) return <Database className="w-6 h-6 text-[#A288A6]" />;
    if (name.includes('api') || name.includes('proxy') || name.includes('microservices')) return <Server className="w-6 h-6 text-[#A288A6]" />;
    return <Code2 className="w-6 h-6 text-[#A288A6]" />;
  }

  return (
    <img
      src={primaryUrl}
      alt={skillName}
      onError={handleError}
      className="w-6 h-6 object-contain"
      loading="lazy"
    />
  );
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategoryData = SKILL_CATEGORIES.find((cat) => cat.id === activeCategory) || SKILL_CATEGORIES[0];

  const filteredSkills = searchQuery.trim()
    ? SKILL_CATEGORIES.flatMap((c) => c.skills).filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : currentCategoryData.skills;

  const categoryIcons: Record<string, React.ReactNode> = {
    'ai-genai': <Brain className="w-4 h-4" />,
    languages: <Terminal className="w-4 h-4" />,
    frontend: <Layers className="w-4 h-4" />,
    backend: <Cpu className="w-4 h-4" />,
    databases: <Database className="w-4 h-4" />,
    cloud: <Sparkles className="w-4 h-4" />,
    infrastructure: <Server className="w-4 h-4" />,
    realtime: <Zap className="w-4 h-4" />,
    apis: <Wrench className="w-4 h-4" />,
    'version-control': <Workflow className="w-4 h-4" />,
    analytics: <Sparkles className="w-4 h-4" />,
    design: <Layers className="w-4 h-4" />,
    productivity: <Boxes className="w-4 h-4" />,
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Wrench className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Technologies & <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          From AI and machine learning to full-stack development and cloud technologies, these are the tools I use to turn ideas into real-world solutions.
        </p>
      </SectionReveal>

      {/* Category Tabs & Search Bar */}
      <SectionReveal className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id && !searchQuery;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-lg shadow-[#A288A6]/20 border border-[#A288A6]'
                    : 'bg-[rgba(162,136,166,0.1)] text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] hover:bg-[rgba(162,136,166,0.2)] border border-[rgba(204,188,188,0.15)]'
                  }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(241,227,228,0.6)]" />
          <input
            type="text"
            placeholder="Search technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] placeholder-[rgba(241,227,228,0.5)] focus:border-[#A288A6] focus:outline-none transition-all"
          />
        </div>
      </SectionReveal>

      {/* Robust SVG Skill Logo Badges */}
      <SectionReveal key={activeCategory + searchQuery} direction="up">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, y: -3 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[rgba(162,136,166,0.08)] border border-[rgba(204,188,188,0.15)] hover:border-[#A288A6] hover:bg-[rgba(162,136,166,0.18)] hover:shadow-lg hover:shadow-[#A288A6]/10 transition-all duration-300 group cursor-default"
            >
              <div className="p-1.5 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.12)] shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center min-w-9 min-h-9">
                <SkillLogo skillName={skill.name} />
              </div>
              <span className="text-xs font-bold text-[#F1E3E4] font-mono group-hover:text-[#BB9BB0] transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};
