'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Folder,
  FolderGit2,
  GitBranch,
  Github,
  ExternalLink,
  Search,
  Sparkles,
  Check,
  Code2,
  Clock
} from 'lucide-react';
import { PROJECTS_DATA } from '@/constants/portfolioData';
import { Project } from '@/types';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Modal } from '@/components/ui/Modal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const ITEMS_PER_PAGE = 4;
  const categories = ['All', 'Featured', 'AI', 'Generative AI', 'Full Stack', 'Machine Learning'];

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

  // Reset pagination on filter change
  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const sectionElement = document.getElementById('projects');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'Production Ready':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Production Ready
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            In Progress
          </span>
        );
      case 'Internship Project':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Internship Project
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[rgba(162,136,166,0.15)] text-[#BB9BB0] border border-[rgba(204,188,188,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A288A6]" />
            Personal Project
          </span>
        );
    }
  };

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
          <span>03. FEATURED REPOSITORIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1E3E4] tracking-tight">
          Software & <span className="text-gradient">AI Systems</span>
        </h2>
        <p className="text-sm sm:text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Open-source repositories, production AI platforms, and technical implementations built with modern engineering practices.
        </p>
      </SectionReveal>

      {/* Filter Pills & Search Input Row */}
      <SectionReveal className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative z-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
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
            placeholder="Search repository or tech..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] placeholder-[rgba(241,227,228,0.5)] focus:border-[#A288A6] focus:outline-none focus:ring-1 focus:ring-[#A288A6]/50 transition-all font-mono"
          />
        </div>
      </SectionReveal>

      {/* GitHub Repository 2x2 Grid (4 Projects per Page) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {paginatedProjects.map((project, index) => {
            const isFeatured = project.featured && selectedCategory === 'All' && !searchQuery && currentPage === 1;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div
                  className="relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-morphism-pure hover:border-[#A288A6] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A288A6]/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-6">
                    {/* Top Row: Repository Icon, Title & Category Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[rgba(162,136,166,0.12)] border border-[rgba(204,188,188,0.18)] text-[#A288A6] group-hover:text-[#F1E3E4] group-hover:border-[#A288A6] group-hover:bg-[#A288A6]/20 transition-all shrink-0">
                          {isFeatured ? (
                            <FolderGit2 className="w-5 h-5" />
                          ) : (
                            <Folder className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-[#F1E3E4] group-hover:text-[#BB9BB0] transition-colors font-mono tracking-tight">
                              {project.title}
                            </h3>
                          </div>
                          <span className="text-[11px] font-mono text-[rgba(241,227,228,0.5)]">
                            public repository • main branch
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isFeatured && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[rgba(162,136,166,0.2)] border border-[#A288A6]/40 text-[10px] font-mono text-[#F1E3E4] font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#A288A6]" />
                            Featured
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Repository Description */}
                    <p className="text-sm text-[rgba(241,227,228,0.85)] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2 border-t border-[rgba(204,188,188,0.1)]">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#A288A6] font-semibold">
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[rgba(241,227,228,0.8)]">
                            <Check className="w-3.5 h-3.5 text-[#A288A6] shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Rounded Chips */}
                    <div className="space-y-2 pt-2 border-t border-[rgba(204,188,188,0.1)]">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#A288A6] font-semibold flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Tech Stack</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.15)] text-[#F1E3E4] group-hover:border-[#A288A6]/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Developer Metadata & Status Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[rgba(204,188,188,0.1)] text-xs font-mono text-[rgba(241,227,228,0.6)]">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-[rgba(241,227,228,0.7)]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#A288A6]" />
                          {project.language || 'Python'}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitBranch className="w-3.5 h-3.5 text-[#A288A6]" />
                          {project.repoType || 'Public'}
                        </span>
                        <span className="flex items-center gap-1 hidden sm:flex">
                          <Clock className="w-3.5 h-3.5 text-[#A288A6]" />
                          {project.lastUpdated || '2026'}
                        </span>
                      </div>

                      <div>{getStatusBadge(project.status)}</div>
                    </div>
                  </div>

                  {/* Card Footer: Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-[rgba(204,188,188,0.12)] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(162,136,166,0.12)] border border-[rgba(204,188,188,0.2)] text-xs font-mono text-[#F1E3E4] hover:bg-[#A288A6] hover:text-[#1C1D21] hover:font-bold transition-all duration-300 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-transparent border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4] hover:border-[#A288A6] hover:text-[#BB9BB0] transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-[#A288A6] hover:text-[#F1E3E4] transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination Controls (4 Projects per Page) */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(204,188,188,0.15)] relative z-10">
          <div className="text-xs font-mono text-[rgba(241,227,228,0.7)]">
            Showing <span className="text-[#F1E3E4] font-bold">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> -{' '}
            <span className="text-[#F1E3E4] font-bold">
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)}
            </span>{' '}
            of <span className="text-[#F1E3E4] font-bold">{filteredProjects.length}</span> repositories
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                currentPage === 1
                  ? 'bg-transparent text-[rgba(241,227,228,0.3)] border-[rgba(204,188,188,0.1)] cursor-not-allowed'
                  : 'bg-[rgba(162,136,166,0.12)] text-[#F1E3E4] border-[rgba(204,188,188,0.2)] hover:bg-[#A288A6] hover:text-[#1C1D21] font-semibold'
              }`}
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 rounded-xl text-xs font-mono transition-all border flex items-center justify-center ${
                  currentPage === pageNum
                    ? 'bg-[#A288A6] text-[#1C1D21] font-bold border-[#A288A6] shadow-md shadow-[#A288A6]/20'
                    : 'bg-[rgba(162,136,166,0.08)] text-[rgba(241,227,228,0.7)] border-[rgba(204,188,188,0.15)] hover:text-[#F1E3E4] hover:bg-[rgba(162,136,166,0.2)]'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                currentPage === totalPages
                  ? 'bg-transparent text-[rgba(241,227,228,0.3)] border-[rgba(204,188,188,0.1)] cursor-not-allowed'
                  : 'bg-[rgba(162,136,166,0.12)] text-[#F1E3E4] border-[rgba(204,188,188,0.2)] hover:bg-[#A288A6] hover:text-[#1C1D21] font-semibold'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      )}

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
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.2)] text-xs font-mono text-[#F1E3E4]">
                {activeModalProject.category}
              </span>
              {getStatusBadge(activeModalProject.status)}
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
