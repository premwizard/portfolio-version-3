'use client';

import React from 'react';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { CertificatesSection } from '@/components/certificates/CertificatesSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'certificates',
  'contact',
];

export default function Home() {
  // Initialize Lenis smooth scrolling
  useLenisScroll();

  // Track active section for Navbar link highlighting
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <main className="relative min-h-screen bg-primary overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
