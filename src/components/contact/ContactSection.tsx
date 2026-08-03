'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, User, Sparkles, Phone, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import { ContactFormData } from '@/types';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call & trigger confetti animation with palette colors
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A288A6', '#BB9BB0', '#F1E3E4', '#CCBCBC'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 bg-[#1C1D21]">
      {/* Section Header */}
      <SectionReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#F1E3E4]">
          <MessageSquare className="w-3.5 h-3.5 text-[#A288A6]" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1E3E4] tracking-tight">
          Let&apos;s Build Next-Gen <span className="text-gradient">AI Solutions</span>
        </h2>
        <p className="text-base text-[rgba(241,227,228,0.85)] leading-relaxed">
          Open for technical consulting, AI advisory, senior engineering roles, or high-impact open source collaborations.
        </p>
      </SectionReveal>

      {/* Main Grid: Info + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards */}
        <SectionReveal direction="left" className="lg:col-span-5 space-y-6">
          <Card className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-[#F1E3E4] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#A288A6]" />
              <span>Contact Information</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.12)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center text-[#A288A6] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[rgba(241,227,228,0.6)] uppercase">Direct Email</h4>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-[#F1E3E4] hover:text-[#BB9BB0] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[rgba(204,188,188,0.15)] text-xs font-mono text-[#A288A6] hover:bg-[#A288A6] hover:text-[#1C1D21] transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.12)]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center text-[#A288A6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[rgba(241,227,228,0.6)] uppercase">Location</h4>
                  <p className="text-sm font-semibold text-[#F1E3E4]">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.12)]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(162,136,166,0.15)] border border-[#A288A6]/30 flex items-center justify-center text-[#A288A6] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[rgba(241,227,228,0.6)] uppercase">Response Time</h4>
                  <p className="text-sm font-semibold text-[#F1E3E4]">Within 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(204,188,188,0.15)]">
              <h4 className="text-xs font-mono text-[rgba(241,227,228,0.6)] uppercase tracking-widest mb-3">Availability</h4>
              <p className="text-xs text-[rgba(241,227,228,0.7)] leading-relaxed">
                Currently taking selected consulting clients for multi-agent LLM system architecture and custom RAG pipeline optimization.
              </p>
            </div>
          </Card>
        </SectionReveal>

        {/* Interactive Form Card */}
        <SectionReveal direction="right" className="lg:col-span-7">
          <Card className="p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(162,136,166,0.2)] border border-[#A288A6] flex items-center justify-center text-[#A288A6] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F1E3E4]">Message Received!</h3>
                <p className="text-sm text-[rgba(241,227,228,0.85)] max-w-md mx-auto">
                  Thank you for reaching out. I have received your request and will respond back promptly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-xl font-bold text-[#F1E3E4] mb-2">Send a Message</h3>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#F1E3E4] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#A288A6]" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border ${
                        errors.name ? 'border-red-400' : 'border-[rgba(204,188,188,0.15)]'
                      } text-sm text-[#F1E3E4] placeholder-[rgba(241,227,228,0.4)] focus:border-[#A288A6] focus:outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#F1E3E4] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#A288A6]" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border ${
                        errors.email ? 'border-red-400' : 'border-[rgba(204,188,188,0.15)]'
                      } text-sm text-[#F1E3E4] placeholder-[rgba(241,227,228,0.4)] focus:border-[#A288A6] focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#F1E3E4]">Subject *</label>
                  <input
                    type="text"
                    placeholder="AI Infrastructure Inquiry / Project Proposal"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border ${
                      errors.subject ? 'border-red-400' : 'border-[rgba(204,188,188,0.15)]'
                    } text-sm text-[#F1E3E4] placeholder-[rgba(241,227,228,0.4)] focus:border-[#A288A6] focus:outline-none transition-colors`}
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#F1E3E4]">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, timeline, or engineering inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border ${
                      errors.message ? 'border-red-400' : 'border-[rgba(204,188,188,0.15)]'
                    } text-sm text-[#F1E3E4] placeholder-[rgba(241,227,228,0.4)] focus:border-[#A288A6] focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 font-mono">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Transmitting Message...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
};
