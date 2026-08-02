'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-[rgba(204,188,188,0.15)] bg-[#1C1D21] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center">
            <Cpu className="w-4 h-4 text-[#A288A6]" />
          </div>
          <div>
            <p className="text-xs font-mono text-[#F1E3E4]">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-[10px] font-mono text-[rgba(241,227,228,0.6)]">
              Built with Next.js 15, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A288A6] hover:text-[#BB9BB0] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A288A6] hover:text-[#BB9BB0] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-[#A288A6] hover:text-[#BB9BB0] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A288A6] hover:text-[#BB9BB0] transition-colors"
            aria-label="LeetCode"
          >
            <Code className="w-4 h-4" />
          </a>
        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4] hover:border-[#A288A6] hover:text-[#BB9BB0] transition-all cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#A288A6]" />
        </button>
      </div>
    </footer>
  );
};
