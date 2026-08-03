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
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#16171B]">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#A288A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[rgba(187,155,176,0.08)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
              <Sparkles className="w-3.5 h-3.5 text-[#A288A6]" />
              <span>Recommendations & Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1E3E4] tracking-tight">
              Client & Leadership <span className="bg-gradient-to-r from-[#F1E3E4] via-[#A288A6] to-[#BB9BB0] bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-[#F1E3E4]/70 text-base sm:text-lg">
              Feedback from engineering directors, AI researchers, and CTOs I&apos;ve collaborated with on enterprise systems.
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
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#A288A6]">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{TESTIMONIALS_DATA[currentIndex].projectTag}</span>
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#F1E3E4] font-light leading-relaxed italic">
                    &ldquo;{TESTIMONIALS_DATA[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author Information */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[rgba(204,188,188,0.1)]">
                    <img
                      src={TESTIMONIALS_DATA[currentIndex].avatar}
                      alt={TESTIMONIALS_DATA[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#A288A6]/40 shadow-md"
                    />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#F1E3E4]">
                        {TESTIMONIALS_DATA[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F1E3E4]/70 font-mono">
                        {TESTIMONIALS_DATA[currentIndex].role} &bull; <span className="text-[#A288A6]">{TESTIMONIALS_DATA[currentIndex].company}</span>
                      </p>
                    </div>
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
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.12)] text-[#A288A6]">
                      {item.projectTag}
                    </span>
                  </div>

                  {/* Feedback */}
                  <p className="text-[#F1E3E4]/90 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 mt-6 border-t border-[rgba(204,188,188,0.1)]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#A288A6]/30"
                  />
                  <div>
                    <h5 className="text-sm font-semibold text-[#F1E3E4]">{item.name}</h5>
                    <p className="text-xs text-[#F1E3E4]/60 font-mono">
                      {item.role} &bull; <span className="text-[#A288A6]">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
