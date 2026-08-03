'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu, FileText, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  activeSection: string;
  onOpenTerminal?: () => void;
  onOpenHireModal?: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenTerminal, onOpenHireModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-lg border-b border-[rgba(204,188,188,0.12)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#BB9BB0]">
            <Cpu className="w-5 h-5 text-[#A288A6] group-hover:text-[#BB9BB0] transition-colors" />
          </div>
          <div>
            <span className="font-semibold text-[#F1E3E4] text-base tracking-tight block group-hover:text-[#BB9BB0] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-[rgba(241,227,228,0.6)] font-mono tracking-widest uppercase block -mt-1">
              AI Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border-[rgba(204,188,188,0.15)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 cursor-pointer rounded-full ${
                  isActive ? 'text-[#F1E3E4]' : 'text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[rgba(162,136,166,0.25)] border border-[#A288A6]/40 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#A288A6] hover:bg-[#A288A6] hover:text-[#1C1D21] transition-all"
              title="Open CLI Terminal Playground"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>
          )}
          {onOpenHireModal && (
            <button
              onClick={onOpenHireModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#A288A6] text-[#1C1D21] font-mono font-bold text-xs hover:bg-[#BB9BB0] shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Prem</span>
            </button>
          )}
          <Button
            variant="outline"
            size="sm"
            href={PERSONAL_INFO.resumeUrl}
            external
            icon={<FileText className="w-3.5 h-3.5" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[rgba(162,136,166,0.15)] text-[#F1E3E4] border border-[rgba(204,188,188,0.15)] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 glass-nav border-b border-[rgba(204,188,188,0.15)] px-6 py-6 space-y-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-[rgba(162,136,166,0.25)] text-[#F1E3E4] border border-[#A288A6]/30'
                  : 'text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] hover:bg-[rgba(162,136,166,0.1)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              href={PERSONAL_INFO.resumeUrl}
              external
              icon={<FileText className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
