'use client';

import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATES_DATA } from '@/constants/portfolioData';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <Award className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>Accreditations & Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Verified <span className="text-gradient">AI Certifications</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Industry-recognized certifications in deep learning systems, cloud AI architecture, and large language model optimization.
        </p>
      </SectionReveal>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATES_DATA.map((cert, index) => (
          <SectionReveal key={cert.id} delay={index * 0.1}>
            <Card className="h-full flex flex-col justify-between p-6 space-y-6 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center text-[#A288A6] shrink-0 group-hover:border-[#BB9BB0] group-hover:text-[#BB9BB0] transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F1E3E4] group-hover:text-[#BB9BB0] transition-colors">
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
                  href={cert.credentialUrl}
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
    </section>
  );
};
