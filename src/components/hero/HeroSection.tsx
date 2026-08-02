'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ArrowDown, FolderGit2, Download, Bot, BrainCircuit, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import { useVantaClouds } from '@/hooks/useVantaClouds';
import { TypingText } from '@/components/animations/TypingText';
import { Button } from '@/components/ui/Button';

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
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#A288A6] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#A288A6] -ml-4" />
            <span>Available for AI Advisory & Lead Engineering</span>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F1E3E4]"
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
              className="text-xl sm:text-2xl font-mono text-[rgba(241,227,228,0.7)] flex items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <span>Specialized as</span>
              <TypingText texts={PERSONAL_INFO.roles} className="text-[#A288A6]" />
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

        {/* Right Column: Animated Profile & Floating Nodes */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Floating AI Node Icons */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-4 z-20 glass-card px-3 py-2 rounded-[16px] border-[rgba(204,188,188,0.15)] flex items-center gap-2 shadow-lg"
          >
            <BrainCircuit className="w-4 h-4 text-[#A288A6] animate-pulse" />
            <span className="text-xs font-mono text-[#F1E3E4]">vLLM & RAG</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-1/2 -right-6 z-20 glass-card px-3 py-2 rounded-[16px] border-[rgba(204,188,188,0.15)] flex items-center gap-2 shadow-lg hidden sm:flex"
          >
            <Bot className="w-4 h-4 text-[#F1E3E4]" />
            <span className="text-xs font-mono text-[#F1E3E4]">Multi-Agent</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-4 left-6 z-20 glass-card px-3 py-2 rounded-[16px] border-[rgba(204,188,188,0.15)] flex items-center gap-2 shadow-lg"
          >
            <Terminal className="w-4 h-4 text-[#A288A6]" />
            <span className="text-xs font-mono text-[#F1E3E4]">PyTorch & CUDA</span>
          </motion.div>

          {/* Glowing Profile Avatar Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[28px] p-1 bg-gradient-to-br from-[#A288A6]/40 via-[rgba(187,155,176,0.2)] to-transparent border border-[rgba(204,188,188,0.2)] shadow-2xl overflow-hidden group"
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden bg-[#1C1D21] relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D21]/80 via-transparent to-transparent" />
            </div>
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
