'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers, Database, Wrench, Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const currentCategoryData = SKILL_CATEGORIES.find((cat) => cat.id === activeCategory) || SKILL_CATEGORIES[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    'ai-ml': <Brain className="w-4 h-4" />,
    'languages': <Terminal className="w-4 h-4" />,
    'backend': <Cpu className="w-4 h-4" />,
    'frontend': <Layers className="w-4 h-4" />,
    'data-science': <Sparkles className="w-4 h-4" />,
    'databases-tools': <Database className="w-4 h-4" />,
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Wrench className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>Technical Proficiency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Comprehensive <span className="text-gradient">AI Stack & Tools</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Mastery across foundational machine learning algorithms, modern deep learning frameworks, and scalable cloud architectures.
        </p>
      </SectionReveal>

      {/* Category Tabs Bar */}
      <SectionReveal className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-lg shadow-[#A288A6]/20 border border-[#A288A6]'
                  : 'bg-[rgba(162,136,166,0.1)] text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] hover:bg-[rgba(162,136,166,0.2)] border border-[rgba(204,188,188,0.15)]'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </SectionReveal>

      {/* Skills Progress Visualizer Grid */}
      <SectionReveal key={activeCategory} direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentCategoryData.skills.map((skill, index) => (
          <Card key={index} className="p-5 flex flex-col justify-between space-y-3 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] flex items-center justify-center text-[#A288A6] group-hover:border-[#A288A6] transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F1E3E4] group-hover:text-[#BB9BB0] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] text-[rgba(241,227,228,0.6)] font-mono">{skill.experience}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {skill.popular && (
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[rgba(162,136,166,0.15)] text-[#F1E3E4] border border-[#A288A6]/30">
                    Core
                  </span>
                )}
                <span className="text-xs font-mono font-semibold text-[#F1E3E4]">{skill.level}%</span>
              </div>
            </div>

            {/* Progress Bar with specified track & fill */}
            <div className="w-full h-2 rounded-full overflow-hidden p-0.5 bg-[rgba(255,255,255,0.06)] border border-[rgba(204,188,188,0.12)]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[#A288A6] to-[#BB9BB0]"
              />
            </div>
          </Card>
        ))}
      </SectionReveal>
    </section>
  );
};
