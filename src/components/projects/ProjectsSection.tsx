'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Search, ExternalLink, Github, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/constants/portfolioData';
import { Project } from '@/types';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Featured', 'AI', 'Machine Learning', 'Full Stack', 'Backend'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'Featured'
          ? project.featured
          : project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Decorative Low-Opacity Section Number 03 */}
      <div className="absolute top-10 left-6 text-7xl sm:text-9xl font-extrabold text-[#F1E3E4]/[0.03] select-none font-mono pointer-events-none">
        03
      </div>

      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-3 mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <FolderGit2 className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>03. FEATURED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1E3E4] tracking-tight">
          Production <span className="text-gradient">AI Systems & Code</span>
        </h2>
        <p className="text-sm sm:text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Autonomous agents, multimodal search engines, and microsecond latency vector indexers built for scale.
        </p>
      </SectionReveal>

      {/* Filter Pills & Search Input Row */}
      <SectionReveal className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#A288A6] text-[#1C1D21] font-semibold shadow-md shadow-[#A288A6]/20 border border-[#A288A6]'
                  : 'bg-[rgba(162,136,166,0.1)] text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] border border-[rgba(204,188,188,0.15)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(241,227,228,0.6)]" />
          <input
            type="text"
            placeholder="Search tech or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] placeholder-[rgba(241,227,228,0.5)] focus:border-[#A288A6] focus:outline-none focus:ring-1 focus:ring-[#A288A6]/50 transition-all"
          />
        </div>
      </SectionReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className="h-full flex flex-col justify-between p-0 overflow-hidden group"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Project Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1C1D21]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D21] via-[#1C1D21]/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="accent" size="sm">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge variant="secondary" size="sm" className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#A288A6]" />
                        <span>Featured</span>
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#F1E3E4] group-hover:text-[#BB9BB0] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#A288A6]" />
                    </h3>
                    <p className="text-xs text-[rgba(241,227,228,0.7)] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.metrics && (
                    <div className="px-3 py-1.5 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.12)] text-[11px] font-mono text-[#F1E3E4]">
                      ⚡ {project.metrics}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-[rgba(162,136,166,0.1)] text-[#F1E3E4] border border-[rgba(204,188,188,0.12)]">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[rgba(162,136,166,0.1)] text-[rgba(241,227,228,0.7)]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 border-t border-[rgba(204,188,188,0.12)] bg-[rgba(255,255,255,0.01)] flex items-center justify-between">
                  <span className="text-xs text-[#A288A6] font-medium group-hover:underline flex items-center gap-1">
                    View Details
                  </span>
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[rgba(162,136,166,0.15)] text-[#A288A6] hover:text-[#BB9BB0] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[rgba(162,136,166,0.15)] text-[#A288A6] hover:text-[#BB9BB0] transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-[rgba(241,227,228,0.7)] space-y-2">
          <p className="text-base font-mono">No matching AI projects found.</p>
          <p className="text-xs text-[rgba(241,227,228,0.5)]">Try adjusting your category filter or search query.</p>
        </div>
      )}

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        title={activeModalProject?.title}
      >
        {activeModalProject && (
          <div className="space-y-6">
            <div className="relative h-60 w-full rounded-xl overflow-hidden bg-[#1C1D21]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[rgba(241,227,228,0.85)] leading-relaxed font-mono">
              {activeModalProject.tagline}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F1E3E4]">Detailed Overview</h4>
              <p className="text-sm text-[rgba(241,227,228,0.85)] leading-relaxed">
                {activeModalProject.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F1E3E4]">Key Innovations</h4>
              <ul className="space-y-2">
                {activeModalProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[rgba(241,227,228,0.85)]">
                    <Check className="w-4 h-4 text-[#A288A6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Architecture Workflow Diagram */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F1E3E4]">System Architecture Flow</h4>
              <div className="p-4 rounded-xl bg-[#16171B] border border-[rgba(204,188,188,0.12)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#F1E3E4]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30">
                  <span className="text-[#A288A6] font-bold">1. Ingestion</span>
                  <span className="text-[11px] text-[#F1E3E4]/70">Raw Input / Data Stream</span>
                </div>
                <span className="text-[#A288A6] font-bold">➔</span>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30">
                  <span className="text-[#A288A6] font-bold">2. Processing</span>
                  <span className="text-[11px] text-[#F1E3E4]/70">vLLM / Embeddings</span>
                </div>
                <span className="text-[#A288A6] font-bold">➔</span>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30">
                  <span className="text-[#A288A6] font-bold">3. Vector Search</span>
                  <span className="text-[11px] text-[#F1E3E4]/70">HNSW Index</span>
                </div>
                <span className="text-[#A288A6] font-bold">➔</span>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#A288A6] text-[#1C1D21] font-bold">
                  <span>4. Output</span>
                  <span className="text-[11px]">Sub-40ms Response</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F1E3E4]">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, idx) => (
                  <Badge key={idx} variant="accent" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-[rgba(204,188,188,0.15)]">
              <Button
                variant="primary"
                href={activeModalProject.githubUrl}
                external
                icon={<Github className="w-4 h-4" />}
              >
                GitHub Source
              </Button>
              {activeModalProject.liveUrl && (
                <Button
                  variant="outline"
                  href={activeModalProject.liveUrl}
                  external
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Application
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
