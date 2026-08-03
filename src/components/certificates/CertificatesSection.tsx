'use client';

import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { CERTIFICATES_DATA } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const ITEMS_PER_PAGE = 4;

export const CertificatesSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CERTIFICATES_DATA.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCertificates = CERTIFICATES_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const sectionElement = document.getElementById('certificates');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Award className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>Certifications & Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Professional <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Showcasing my commitment to continuous learning through professional certifications in AI, Machine Learning, Cloud Computing, Full-Stack Development, and modern software engineering.
        </p>
      </SectionReveal>

      {/* Certificate Cards Grid (4 per page) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentCertificates.map((cert, index) => (
          <SectionReveal key={cert.id} delay={index * 0.05}>
            <Card className="h-full flex flex-col justify-between p-6 space-y-6 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-12 h-12 rounded-xl object-contain bg-[rgba(162,136,166,0.1)] border border-[#A288A6]/30 p-1 shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center text-[#A288A6] shrink-0 group-hover:border-[#BB9BB0] group-hover:text-[#BB9BB0] transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-[#F1E3E4] group-hover:text-[#BB9BB0] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[rgba(241,227,228,0.7)] font-mono mt-0.5">{cert.institution}</p>
                  </div>
                </div>
                <Badge variant="outline" size="sm" className="shrink-0 font-mono">
                  {cert.issueDate}
                </Badge>
              </div>

              {cert.credentialId && (
                <div className="px-3 py-1.5 rounded-md bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.15)] text-[11px] font-mono text-[rgba(241,227,228,0.7)]">
                  ID: <span className="text-[#F1E3E4]">{cert.credentialId}</span>
                </div>
              )}

              {/* Skills Acquired */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[rgba(241,227,228,0.6)]">Skills Validated</h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsAcquired.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-[rgba(162,136,166,0.12)] text-[#F1E3E4] border border-[rgba(204,188,188,0.15)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Button */}
              <div className="pt-2 border-t border-[rgba(204,188,188,0.15)] flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  href={cert.credentialUrl || cert.image}
                  external
                  icon={<ExternalLink className="w-3 h-3" />}
                >
                  Verify Credential
                </Button>
              </div>
            </Card>
          </SectionReveal>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-between border-t border-[rgba(204,188,188,0.15)] pt-6">
          <p className="text-xs font-mono text-[rgba(241,227,228,0.7)]">
            Showing <span className="text-[#F1E3E4] font-bold">{startIndex + 1}</span>–
            <span className="text-[#F1E3E4] font-bold">
              {Math.min(startIndex + ITEMS_PER_PAGE, CERTIFICATES_DATA.length)}
            </span>{' '}
            of <span className="text-[#F1E3E4] font-bold">{CERTIFICATES_DATA.length}</span> certificates
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-[rgba(204,188,188,0.2)] bg-[rgba(162,136,166,0.1)] text-[#F1E3E4] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[rgba(162,136,166,0.2)] transition-colors"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all border ${
                    currentPage === pageNum
                      ? 'bg-[#A288A6] text-[#1C1D21] border-[#A288A6] shadow-md shadow-[#A288A6]/20'
                      : 'bg-[rgba(162,136,166,0.08)] text-[#F1E3E4] border-[rgba(204,188,188,0.15)] hover:bg-[rgba(162,136,166,0.2)]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-[rgba(204,188,188,0.2)] bg-[rgba(162,136,166,0.1)] text-[#F1E3E4] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[rgba(162,136,166,0.2)] transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
