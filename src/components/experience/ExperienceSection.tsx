'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { EXPERIENCES_DATA } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Experience' | 'Education'>('All');

  const filteredItems = EXPERIENCES_DATA.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Decorative Low-Opacity Section Number 04 */}
      <div className="absolute top-10 right-6 text-7xl sm:text-9xl font-extrabold text-[#F1E3E4]/[0.03] select-none font-mono pointer-events-none">
        04
      </div>

      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-3 mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Calendar className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>04. CAREER TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1E3E4] tracking-tight">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <p className="text-sm sm:text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          A connected timeline of my academic background, internships, and engineering experience in AI, Machine Learning, and Full-Stack Development.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 pt-4">
          {(['All', 'Experience', 'Education'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                filter === tab
                  ? 'bg-[#A288A6] text-[#1C1D21] border-[#A288A6] font-bold shadow-md shadow-[#A288A6]/20'
                  : 'bg-[rgba(162,136,166,0.1)] text-[#F1E3E4] border-[rgba(204,188,188,0.2)] hover:bg-[rgba(162,136,166,0.2)]'
              }`}
            >
              {tab === 'Experience' && '💼 '}
              {tab === 'Education' && '🎓 '}
              {tab}
            </button>
          ))}
        </div>
      </SectionReveal>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-[#A288A6]/60 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
        {filteredItems.map((exp, index) => {
          const isEducation = exp.category === 'Education';
          const orgName = exp.company || exp.organization;

          return (
            <SectionReveal key={exp.id} delay={index * 0.08} className="relative">
              {/* Glowing Timeline Marker Node with Icon */}
              <div
                className={`absolute -left-[37px] sm:-left-[53px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-colors ${
                  isEducation
                    ? 'bg-[#1C1D21] border-[#38BDF8] text-[#38BDF8] shadow-[#38BDF8]/20'
                    : 'bg-[#1C1D21] border-[#BB9BB0] text-[#BB9BB0] shadow-[#A288A6]/20'
                }`}
              >
                {isEducation ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Date Badge on Desktop Left Side */}
              <div className="hidden sm:block absolute -left-36 top-1.5 w-24 text-right">
                <span className="text-xs font-mono text-[#A288A6] font-semibold block">{exp.period}</span>
                <span className="text-[10px] text-[rgba(241,227,228,0.6)] font-mono block">{exp.type}</span>
              </div>

              {/* Timeline Card */}
              <Card className="p-6 sm:p-8 space-y-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(204,188,188,0.15)] pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded uppercase tracking-wider ${
                          isEducation
                            ? 'bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30'
                            : 'bg-[#BB9BB0]/15 text-[#BB9BB0] border border-[#BB9BB0]/30'
                        }`}
                      >
                        {isEducation ? '🎓 Education' : '💼 Experience'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F1E3E4] flex items-center gap-2">
                      <span>{exp.role}</span>
                      <Badge variant="accent" size="sm" className="sm:hidden">
                        {exp.period}
                      </Badge>
                    </h3>

                    <p className="text-sm font-semibold text-[#A288A6] flex items-center gap-2 mt-1">
                      <span>{orgName}</span>
                      {exp.location && (
                        <>
                          <span className="text-[rgba(241,227,228,0.4)]">•</span>
                          <span className="text-xs text-[rgba(241,227,228,0.7)] font-normal flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#A288A6]" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[rgba(241,227,228,0.85)] leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Contributions / Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#F1E3E4] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#A288A6]" />
                      <span>{isEducation ? 'Highlights & Achievements' : 'Key Impact & Accomplishments'}</span>
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
                )}

                {/* Tech / Skills Pills */}
                {exp.technologies && exp.technologies.length > 0 && (
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
                )}
              </Card>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
};
