'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCES_DATA } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Briefcase className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>Professional Career Timeline</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Work & <span className="text-gradient">AI Leadership Experience</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Track record of driving AI engineering breakthroughs from early research prototypes to enterprise-scale deployments.
        </p>
      </SectionReveal>

      {/* Vertical Animated Timeline with #A288A6 line and #BB9BB0 nodes */}
      <div className="relative border-l-2 border-[#A288A6]/60 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
        {EXPERIENCES_DATA.map((exp, index) => (
          <SectionReveal key={exp.id} delay={index * 0.1} className="relative">
            {/* Glowing Timeline Marker Node (#BB9BB0) */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#1C1D21] border-2 border-[#BB9BB0] flex items-center justify-center shadow-lg shadow-[#A288A6]/20">
              <span className="w-2 h-2 rounded-full bg-[#BB9BB0] animate-pulse" />
            </div>

            {/* Date Badge on Desktop Left Side */}
            <div className="hidden sm:block absolute -left-36 top-1.5 w-24 text-right">
              <span className="text-xs font-mono text-[#A288A6] font-semibold block">{exp.period}</span>
              <span className="text-[10px] text-[rgba(241,227,228,0.6)] font-mono block">{exp.type}</span>
            </div>

            {/* Experience Card */}
            <Card className="p-6 sm:p-8 space-y-5">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(204,188,188,0.15)] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#F1E3E4] flex items-center gap-2">
                    <span>{exp.role}</span>
                    <Badge variant="accent" size="sm" className="sm:hidden">
                      {exp.period}
                    </Badge>
                  </h3>
                  <p className="text-sm font-semibold text-[#A288A6] flex items-center gap-2 mt-1">
                    <span>{exp.company}</span>
                    <span className="text-[rgba(241,227,228,0.4)]">•</span>
                    <span className="text-xs text-[rgba(241,227,228,0.7)] font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#A288A6]" />
                      {exp.location}
                    </span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[rgba(241,227,228,0.85)] leading-relaxed">
                {exp.description}
              </p>

              {/* Key Contributions */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F1E3E4] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A288A6]" />
                  <span>Key Impact & Accomplishments</span>
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[rgba(241,227,228,0.85)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A288A6] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-[rgba(162,136,166,0.15)] text-[#F1E3E4] border border-[rgba(204,188,188,0.15)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};
