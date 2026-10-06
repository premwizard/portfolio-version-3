'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ArrowDown, FolderGit2, Download } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import { useVantaClouds } from '@/hooks/useVantaClouds';
import { TypingText } from '@/components/animations/TypingText';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useVantaClouds(heroRef);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const yTranslate = useTransform(scrollY, [0, 500], [0, 80]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1C1D21]"
    >
      {/* Hero Overlay Gradient as specified */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,29,33,0.55)] to-[rgba(28,29,33,0.85)] pointer-events-none z-0" />
      
      {/* Subtle Noise Grid */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none z-0" />

      {/* Hero Core Content */}
      <motion.div
        style={{ opacity, y: yTranslate }}
        className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

          {/* Name & Title */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#F1E3E4] font-sans"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient hover:opacity-90 transition-opacity">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            {/* Dynamic Typing Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-sans font-semibold text-[rgba(241,227,228,0.7)] flex items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <span>Specialized as</span>
              <TypingText texts={PERSONAL_INFO.roles} className="text-[#A288A6] font-semibold font-sans" />
            </motion.div>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-[rgba(241,227,228,0.85)] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToProjects}
              icon={<FolderGit2 className="w-4 h-4" />}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={PERSONAL_INFO.resumeUrl}
              external
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-[rgba(204,188,188,0.15)]"
          >
            <span className="text-xs text-[rgba(241,227,228,0.6)] uppercase font-mono tracking-wider">Connect:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="w-4 h-4" />, href: PERSONAL_INFO.github, label: 'GitHub' },
                { icon: <Linkedin className="w-4 h-4" />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                { icon: <Mail className="w-4 h-4" />, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
                { icon: <Code className="w-4 h-4" />, href: PERSONAL_INFO.leetcode, label: 'LeetCode' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.15)] flex items-center justify-center text-[#A288A6] hover:text-[#BB9BB0] hover:border-[#A288A6]/40 hover:bg-[rgba(162,136,166,0.2)] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Cursor-Tracking Mascot */}
        <div className="lg:col-span-5 flex justify-center relative z-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-[36px] p-6 bg-gradient-to-br from-[#A288A6]/40 via-[rgba(187,155,176,0.2)] to-transparent border border-[rgba(204,188,188,0.2)] shadow-[0_20px_50px_rgba(162,136,166,0.25)] flex items-center justify-center overflow-visible group z-20"
          >
            <Mascot
              directions="/mascots/prem-directions.webp"
              reactions="/mascots/prem-reactions.webp"
              size={320}
              label="PREM M Page Mascot"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator Prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
        onClick={scrollToProjects}
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-[rgba(241,227,228,0.6)]">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#A288A6]" />
      </motion.div>
    </section>
  );
};
