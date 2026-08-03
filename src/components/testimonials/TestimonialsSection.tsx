'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Building2, LayoutGrid, Layers, Pause, Play } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/constants/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-slide carousel effect
  useEffect(() => {
    if (!isAutoplay || isGridView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, isGridView]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Decorative Low-Opacity Section Number 06 */}
      <div className="absolute top-10 right-6 text-7xl sm:text-9xl font-extrabold text-[#F1E3E4]/[0.03] select-none font-mono pointer-events-none">
        06
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
              <Quote className="w-3.5 h-3.5 text-[#A288A6]" />
              <span>06. TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1E3E4] tracking-tight">
              What People <span className="text-gradient">Say About Me</span>
            </h2>
            <p className="text-sm sm:text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
              Feedback from mentors, colleagues, internship supervisors, and collaborators on software projects.
            </p>
          </motion.div>

          {/* View Toggle & Carousel Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 self-start md:self-auto"
          >
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.15)]">
              <button
                onClick={() => setIsGridView(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  !isGridView
                    ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-md'
                    : 'text-[#F1E3E4]/70 hover:text-[#F1E3E4]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                onClick={() => setIsGridView(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isGridView
                    ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-md'
                    : 'text-[#F1E3E4]/70 hover:text-[#F1E3E4]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* Slider Navigation Buttons */}
            {!isGridView && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  title={isAutoplay ? 'Pause auto-scroll' : 'Play auto-scroll'}
                  className="w-9 h-9 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.15)] flex items-center justify-center text-[#F1E3E4]/70 hover:text-[#F1E3E4] hover:border-[#A288A6]/40 transition-all"
                >
                  {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.15)] flex items-center justify-center text-[#F1E3E4]/70 hover:text-[#F1E3E4] hover:border-[#A288A6]/40 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-[#1C1D21] border border-[rgba(204,188,188,0.15)] flex items-center justify-center text-[#F1E3E4]/70 hover:text-[#F1E3E4] hover:border-[#A288A6]/40 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Carousel / Grid Content */}
        {!isGridView ? (
          /* Slider View */
          <div className="relative min-h-[360px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="glass-card rounded-[28px] p-8 sm:p-10 border border-[rgba(204,188,188,0.15)] bg-[#1C1D21]/80 backdrop-blur-xl shadow-2xl relative group overflow-hidden"
              >
                {/* Accent Highlight Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A288A6] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Decorative Quote Icon */}
                <Quote className="absolute top-6 right-8 w-20 h-20 text-[#A288A6]/10 pointer-events-none group-hover:text-[#A288A6]/20 transition-colors" />

                <div className="space-y-6 relative z-10">
                  {/* Rating Stars & Project Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: TESTIMONIALS_DATA[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {TESTIMONIALS_DATA[currentIndex].projectTag && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#A288A6]">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{TESTIMONIALS_DATA[currentIndex].projectTag}</span>
                      </div>
                    )}
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#F1E3E4] font-light leading-relaxed italic">
                    &ldquo;{TESTIMONIALS_DATA[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author Information */}
                  <div className="pt-4 border-t border-[rgba(204,188,188,0.1)] flex items-center justify-between">
                    {TESTIMONIALS_DATA[currentIndex].linkedinUrl ? (
                      <a
                        href={TESTIMONIALS_DATA[currentIndex].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group/author hover:opacity-95 transition-all"
                        title={`View ${TESTIMONIALS_DATA[currentIndex].name}'s LinkedIn profile`}
                      >
                        <div className="relative">
                          {TESTIMONIALS_DATA[currentIndex].avatar && TESTIMONIALS_DATA[currentIndex].avatar.startsWith('http') ? (
                            <img
                              src={TESTIMONIALS_DATA[currentIndex].avatar}
                              alt={TESTIMONIALS_DATA[currentIndex].name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-[#A288A6]/40 shadow-md group-hover/author:border-[#0A66C2] transition-colors"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-full bg-[rgba(162,136,166,0.25)] border-2 border-[#A288A6]/50 flex items-center justify-center text-[#F1E3E4] font-bold text-xl shadow-md font-mono shrink-0 group-hover/author:border-[#0A66C2] transition-colors">
                              {TESTIMONIALS_DATA[currentIndex].name.charAt(0)}
                            </div>
                          )}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0A66C2] rounded-full flex items-center justify-center text-white border border-[#1C1D21] shadow">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-0.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-[#F1E3E4] group-hover/author:text-[#38BDF8] flex items-center gap-1.5 transition-colors">
                            <span>{TESTIMONIALS_DATA[currentIndex].name}</span>
                            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#0A66C2]/20 text-[#38BDF8] border border-[#0A66C2]/40 font-normal">
                              LinkedIn ↗
                            </span>
                          </h4>
                          <p className="text-xs sm:text-sm text-[#F1E3E4]/70 font-mono">
                            {TESTIMONIALS_DATA[currentIndex].role} &bull; <span className="text-[#A288A6]">{TESTIMONIALS_DATA[currentIndex].company}</span>
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        {TESTIMONIALS_DATA[currentIndex].avatar && TESTIMONIALS_DATA[currentIndex].avatar.startsWith('http') ? (
                          <img
                            src={TESTIMONIALS_DATA[currentIndex].avatar}
                            alt={TESTIMONIALS_DATA[currentIndex].name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#A288A6]/40 shadow-md"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-[rgba(162,136,166,0.25)] border-2 border-[#A288A6]/50 flex items-center justify-center text-[#F1E3E4] font-bold text-xl shadow-md font-mono shrink-0">
                            {TESTIMONIALS_DATA[currentIndex].name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-[#F1E3E4]">
                            {TESTIMONIALS_DATA[currentIndex].name}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#F1E3E4]/70 font-mono">
                            {TESTIMONIALS_DATA[currentIndex].role} &bull; <span className="text-[#A288A6]">{TESTIMONIALS_DATA[currentIndex].company}</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-10 bg-[#A288A6]'
                      : 'w-2.5 bg-[rgba(204,188,188,0.2)] hover:bg-[rgba(204,188,188,0.4)]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-[24px] p-6 sm:p-8 border border-[rgba(204,188,188,0.15)] bg-[#1C1D21]/80 backdrop-blur-lg hover:border-[#A288A6]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A288A6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Stars & Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {item.projectTag && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.12)] text-[#A288A6]">
                        {item.projectTag}
                      </span>
                    )}
                  </div>

                  {/* Feedback */}
                  <p className="text-[#F1E3E4]/90 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 mt-6 border-t border-[rgba(204,188,188,0.1)]">
                  {item.linkedinUrl ? (
                    <a
                      href={item.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group/author hover:opacity-95 transition-all"
                      title={`View ${item.name}'s LinkedIn profile`}
                    >
                      <div className="relative">
                        {item.avatar && item.avatar.startsWith('http') ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover border border-[#A288A6]/30 group-hover/author:border-[#0A66C2] transition-colors"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-[rgba(162,136,166,0.25)] border border-[#A288A6]/40 flex items-center justify-center text-[#F1E3E4] font-bold text-lg font-mono shrink-0 group-hover/author:border-[#0A66C2] transition-colors">
                            {item.name.charAt(0)}
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0A66C2] rounded-full flex items-center justify-center text-white border border-[#1C1D21] shadow">
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-0.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-[#F1E3E4] group-hover/author:text-[#38BDF8] flex items-center gap-1.5 transition-colors">
                          <span>{item.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#0A66C2]/20 text-[#38BDF8] border border-[#0A66C2]/40 font-normal">
                            LinkedIn ↗
                          </span>
                        </h5>
                        <p className="text-xs text-[#F1E3E4]/60 font-mono">
                          {item.role} &bull; <span className="text-[#A288A6]">{item.company}</span>
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">
                      {item.avatar && item.avatar.startsWith('http') ? (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border border-[#A288A6]/30"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[rgba(162,136,166,0.25)] border border-[#A288A6]/40 flex items-center justify-center text-[#F1E3E4] font-bold text-lg font-mono shrink-0">
                          {item.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h5 className="text-sm font-semibold text-[#F1E3E4]">{item.name}</h5>
                        <p className="text-xs text-[#F1E3E4]/60 font-mono">
                          {item.role} &bull; <span className="text-[#A288A6]">{item.company}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
