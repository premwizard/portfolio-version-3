'use client';

import React, { useState, useMemo } from 'react';
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
  LayoutGrid,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Modal } from '@/components/ui/Modal';

// Helper component for rock-solid SVG loading with fallback providers
const SkillLogo: React.FC<{ skillName: string }> = ({ skillName }) => {
  const name = skillName.toLowerCase();
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  if ((name.includes('ui') || name.includes('ux') || name.includes('design')) && !name.includes('redux')) return <Palette className="w-6 h-6 text-[#A288A6]" />;
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
    if (tech.includes('redux')) return ['https://cdn.simpleicons.org/redux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'];
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
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isAllSkillsModalOpen, setIsAllSkillsModalOpen] = useState<boolean>(false);

  const allSkills = useMemo(() => {
    return SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, categoryId: c.id, categoryName: c.name })));
  }, []);

  const displayedSkills = useMemo(() => {
    if (activeCategory === 'all') return allSkills;
    return allSkills.filter((s) => s.categoryId === activeCategory);
  }, [activeCategory, allSkills]);

  // Split skills into two balanced rows for dual-direction marquee
  const row1Skills = useMemo(() => displayedSkills.filter((_, i) => i % 2 === 0), [displayedSkills]);
  const row2Skills = useMemo(() => displayedSkills.filter((_, i) => i % 2 !== 0), [displayedSkills]);

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Decorative Low-Opacity Section Number 02 */}
      <div className="absolute top-10 right-6 text-7xl sm:text-9xl font-extrabold text-[#F1E3E4]/[0.03] select-none font-mono pointer-events-none">
        02
      </div>

      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-3 mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Wrench className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>02. TECHNICAL STACK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1E3E4] tracking-tight">
          Technologies & <span className="text-gradient">Tools</span>
        </h2>
        <p className="text-sm sm:text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Hover over any technology icon to inspect details or filter by engineering domain.
        </p>
      </SectionReveal>

      {/* Category Spotlight Filter Pills */}
      <SectionReveal className="flex items-center justify-center gap-2 flex-wrap mb-12 relative z-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-md shadow-[#A288A6]/20 border border-[#A288A6]'
              : 'bg-[rgba(162,136,166,0.1)] text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] border border-[rgba(204,188,188,0.15)]'
          }`}
        >
          All Stack ({allSkills.length})
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-md shadow-[#A288A6]/20 border border-[#A288A6]'
                : 'bg-[rgba(162,136,166,0.1)] text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] border border-[rgba(204,188,188,0.15)]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </SectionReveal>

      {/* Infinite Dual Marquee Rails Container with Fade Masks */}
      <div className="relative overflow-hidden py-6 space-y-6">
        {/* Left & Right Edge Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#1C1D21] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#1C1D21] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Scrolling Marquee Rail */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left pause-on-hover flex items-center gap-4">
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
              <div
                key={`r1-${idx}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-morphism-pure border border-[rgba(204,188,188,0.15)] hover:border-[#A288A6] hover:scale-105 transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="p-2 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.12)] shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center min-w-9 min-h-9">
                  <SkillLogo skillName={skill.name} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F1E3E4] font-mono group-hover:text-[#BB9BB0] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-[rgba(241,227,228,0.5)] font-mono">
                    {skill.categoryName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling Marquee Rail */}
        <div className="overflow-hidden">
          <div className="animate-marquee-right pause-on-hover flex items-center gap-4">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, idx) => (
              <div
                key={`r2-${idx}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-morphism-pure border border-[rgba(204,188,188,0.15)] hover:border-[#A288A6] hover:scale-105 transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="p-2 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.12)] shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center min-w-9 min-h-9">
                  <SkillLogo skillName={skill.name} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F1E3E4] font-mono group-hover:text-[#BB9BB0] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-[rgba(241,227,228,0.5)] font-mono">
                    {skill.categoryName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show All Modal Trigger Button */}
      <div className="mt-8 flex justify-center relative z-10">
        <button
          onClick={() => setIsAllSkillsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(162,136,166,0.12)] border border-[rgba(204,188,188,0.2)] text-xs font-mono text-[#F1E3E4] hover:bg-[#A288A6] hover:text-[#1C1D21] hover:font-bold transition-all duration-300 shadow-lg shadow-black/40 group cursor-pointer"
        >
          <LayoutGrid className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Show All Technologies ({allSkills.length})</span>
        </button>
      </div>

      {/* Full Tech Stack Grid Modal */}
      <Modal
        isOpen={isAllSkillsModalOpen}
        onClose={() => setIsAllSkillsModalOpen(false)}
        title="Complete Technical Stack Matrix"
      >
        <div className="space-y-8 p-2">
          <p className="text-xs font-mono text-[rgba(241,227,228,0.7)] leading-relaxed">
            All 40+ technologies, frameworks, databases, and engineering tools categorized by domain specialization.
          </p>

          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A288A6] border-b border-[rgba(204,188,188,0.15)] pb-1.5 flex items-center justify-between">
                <span>{cat.name}</span>
                <span className="text-[10px] text-[rgba(241,227,228,0.5)] font-normal">{cat.skills.length} skills</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(204,188,188,0.15)] hover:border-[#A288A6] hover:bg-[rgba(162,136,166,0.15)] transition-all"
                  >
                    <div className="p-1 rounded-lg bg-[#1C1D21] border border-[rgba(204,188,188,0.12)] shrink-0 flex items-center justify-center w-7 h-7">
                      <SkillLogo skillName={skill.name} />
                    </div>
                    <span className="text-xs font-mono text-[#F1E3E4] font-medium truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};
