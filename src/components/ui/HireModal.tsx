'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/constants/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState<'fulltime' | 'consulting' | 'project'>('fulltime');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#A288A6', '#BB9BB0', '#F1E3E4'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16171B]/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg bg-[#1C1D21] border border-[rgba(204,188,188,0.2)] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-[rgba(162,136,166,0.1)] text-[#F1E3E4]/70 hover:text-[#F1E3E4] hover:bg-[rgba(162,136,166,0.2)] transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[rgba(162,136,166,0.2)] border border-[#A288A6] flex items-center justify-center text-[#A288A6] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F1E3E4]">Inquiry Submitted!</h3>
                <p className="text-xs text-[#F1E3E4]/70">Prem will respond to your inquiry at {email} within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#A288A6]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Collaboration Request</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#F1E3E4]">
                    Work with <span className="text-gradient">Prem M</span>
                  </h3>
                  <p className="text-xs text-[#F1E3E4]/70">
                    Open for Full-Time AI Engineering roles, AI Architecture Consulting, or LLM System Development.
                  </p>
                </div>

                {/* Role Type Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-[#16171B] border border-[rgba(204,188,188,0.12)]">
                  {[
                    { id: 'fulltime', label: 'Full-Time' },
                    { id: 'consulting', label: 'Consulting' },
                    { id: 'project', label: 'AI Project' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setRoleType(tab.id as any)}
                      className={`py-1.5 text-xs font-mono rounded-lg transition-all ${
                        roleType === tab.id
                          ? 'bg-[#A288A6] text-[#1C1D21] font-bold shadow'
                          : 'text-[#F1E3E4]/70 hover:text-[#F1E3E4]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#F1E3E4]/60 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-xl bg-[#16171B] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] focus:border-[#A288A6] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#F1E3E4]/60 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-3 py-2 rounded-xl bg-[#16171B] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] focus:border-[#A288A6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#F1E3E4]/60 uppercase mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. OpenAI / Startup / Self"
                      className="w-full px-3 py-2 rounded-xl bg-[#16171B] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] focus:border-[#A288A6] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#F1E3E4]/60 uppercase mb-1">Brief Details / Scope</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell Prem about the role or project requirements..."
                      className="w-full px-3 py-2 rounded-xl bg-[#16171B] border border-[rgba(204,188,188,0.15)] text-xs text-[#F1E3E4] focus:border-[#A288A6] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#A288A6] text-[#1C1D21] font-bold text-xs hover:bg-[#BB9BB0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
