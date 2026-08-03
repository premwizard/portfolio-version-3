'use client';

import { useState } from 'react';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { CertificatesSection } from '@/components/certificates/CertificatesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { CliTerminalModal } from '@/components/terminal/CliTerminalModal';
import { Terminal } from 'lucide-react';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'certificates',
  'testimonials',
  'contact',
];

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Initialize Lenis smooth scrolling
  useLenisScroll();

  // Track active section for Navbar link highlighting
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <main className="relative min-h-screen bg-primary overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating CLI Terminal Launcher Widget */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1C1D21] border border-[#A288A6]/40 text-[#A288A6] hover:bg-[#A288A6] hover:text-[#1C1D21] shadow-2xl transition-all duration-300 group flex items-center gap-2"
        title="Open Interactive CLI Playground (Command Terminal)"
      >
        <Terminal className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-mono font-bold whitespace-nowrap pr-1">
          Interactive CLI Playground
        </span>
      </button>

      {/* Interactive CLI Terminal Drawer */}
      <CliTerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </main>
  );
}
