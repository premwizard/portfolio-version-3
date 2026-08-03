'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, STATS_DATA } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Decorative Low-Opacity Section Number 01 */}
      <div className="absolute top-10 left-6 text-7xl sm:text-9xl font-extrabold text-[#F1E3E4]/[0.03] select-none font-mono pointer-events-none">
        01
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Heading, Vertical Accent & Content */}
        <div className="lg:col-span-7 space-y-8">
          <SectionReveal direction="left" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(162,136,166,0.12)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
              <Sparkles className="w-3.5 h-3.5 text-[#A288A6]" />
              <span>01. ABOUT ME</span>
            </div>

            {/* Left-Aligned Heading with Vertical Accent Line */}
            <div className="flex items-stretch gap-4">
              <div className="w-1.5 rounded-full bg-gradient-to-b from-[#A288A6] via-[#BB9BB0] to-transparent shrink-0" />
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1E3E4] tracking-tight leading-tight">
                Building Intelligent Solutions with <span className="text-gradient">AI & Machine Learning</span>
              </h2>
            </div>

            <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed pl-5">
              Transforming ideas into intelligent applications through Generative AI, Large Language Models, Retrieval-Augmented Generation (RAG), and modern full-stack development.
            </p>
          </SectionReveal>

          {/* Bio & Mission Content Card */}
          <SectionReveal direction="left" delay={0.1}>
            <div className="glass-card p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#F1E3E4] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#A288A6]" />
                  <span>Background & Experience</span>
                </h3>
                <p className="text-[rgba(241,227,228,0.85)] leading-relaxed text-sm sm:text-base">
                  {PERSONAL_INFO.about}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(204,188,188,0.15)] space-y-3">
                <h4 className="text-xs font-bold text-[#F1E3E4] flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Target className="w-4 h-4 text-[#A288A6]" />
                  <span>Mission & Objective</span>
                </h4>
                <p className="text-[rgba(241,227,228,0.7)] text-sm leading-relaxed">
                  {PERSONAL_INFO.mission}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(204,188,188,0.15)]">
                <h4 className="text-[11px] font-mono text-[rgba(241,227,228,0.6)] uppercase tracking-widest mb-3">Core Technical Focus</h4>
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
            </div>
          </SectionReveal>
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="lg:col-span-5 space-y-6">
          <SectionReveal direction="right" delay={0.2} className="grid grid-cols-2 gap-4">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="glass-card-light p-6 text-center flex flex-col justify-center space-y-2 hover:border-[#A288A6]/40 transition-colors">
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
              </div>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
