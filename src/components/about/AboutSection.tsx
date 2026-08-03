'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, STATS_DATA } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Sparkles className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>About</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Building Intelligent Solutions with<span className="text-gradient">AI & Machine Learning</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Transforming ideas into intelligent applications through Generative AI, Large Language Models, Retrieval-Augmented Generation (RAG), and modern full-stack development.
        </p>
      </SectionReveal>

      {/* Main Grid: Bio + Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Bio & Mission Card */}
        <SectionReveal direction="left" className="lg:col-span-7">
          <Card className="space-y-6 p-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#F1E3E4] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#A288A6]" />
                <span>Background & Experience</span>
              </h3>
              <p className="text-[rgba(241,227,228,0.85)] leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.about}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(204,188,188,0.15)] space-y-3">
              <h4 className="text-sm font-semibold text-[#F1E3E4] flex items-center gap-2 uppercase tracking-wider font-mono">
                <Target className="w-4 h-4 text-[#A288A6]" />
                <span>Mission & Objective</span>
              </h4>
              <p className="text-[rgba(241,227,228,0.7)] text-sm leading-relaxed">
                {PERSONAL_INFO.mission}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(204,188,188,0.15)]">
              <h4 className="text-xs font-mono text-[rgba(241,227,228,0.6)] uppercase tracking-widest mb-3">Core Technical Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Generative AI",
                  "Large Language Models",
                  "Retrieval-Augmented Generation",
                  "AI Agents",
                  "Machine Learning",
                  "Computer Vision",
                  "Full-Stack AI Development"
                ].map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-[#F1E3E4] font-mono"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </SectionReveal>

        {/* Animated Statistics Counter Grid */}
        <SectionReveal direction="right" className="lg:col-span-5 grid grid-cols-2 gap-4">
          {STATS_DATA.map((stat, index) => (
            <Card key={index} className="p-6 text-center flex flex-col justify-center space-y-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-gradient font-mono"
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <h4 className="text-xs font-semibold text-[#F1E3E4] uppercase tracking-wider">{stat.label}</h4>
              <p className="text-[11px] text-[rgba(241,227,228,0.6)] leading-normal">{stat.description}</p>
            </Card>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
};
