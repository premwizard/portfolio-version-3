'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code, Cpu, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import PulseHeart from '@/components/ui/PulseHeart';

export const Footer: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      // Remove old legacy key (which had 128 cached in browser storage)
      localStorage.removeItem('portfolio_likes_count');
      localStorage.removeItem('portfolio_liked');

      const savedLiked = localStorage.getItem('portfolio_v2_liked');
      const savedCount = localStorage.getItem('portfolio_v2_likes_count');
      if (savedLiked !== null) setLiked(JSON.parse(savedLiked));
      if (savedCount !== null) setCount(JSON.parse(savedCount));
    } catch {}

    // Synchronize across tabs using storage event and BroadcastChannel
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'portfolio_v2_likes_count' && e.newValue !== null) {
        setCount(JSON.parse(e.newValue));
      }
      if (e.key === 'portfolio_v2_liked' && e.newValue !== null) {
        setLiked(JSON.parse(e.newValue));
      }
    };

    let channel: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      channel = new BroadcastChannel('portfolio_likes_channel');
      channel.onmessage = (event) => {
        if (event.data && typeof event.data.count === 'number') {
          setCount(event.data.count);
          if (typeof event.data.liked === 'boolean') {
            setLiked(event.data.liked);
          }
        }
      };
    }

    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      if (channel) channel.close();
    };
  }, []);

  const handleLikeChange = (nextLiked: boolean, nextCount: number) => {
    setLiked(nextLiked);
    setCount(nextCount);
    try {
      localStorage.setItem('portfolio_v2_liked', JSON.stringify(nextLiked));
      localStorage.setItem('portfolio_v2_likes_count', JSON.stringify(nextCount));

      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        const channel = new BroadcastChannel('portfolio_likes_channel');
        channel.postMessage({ liked: nextLiked, count: nextCount });
        channel.close();
      }
    } catch {}
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-[rgba(204,188,188,0.15)] bg-[#1C1D21] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Like Portfolio Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[rgba(162,136,166,0.08)] border border-[rgba(204,188,188,0.12)]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[rgba(255,77,109,0.12)] border border-[#ff4d6d]/30 flex items-center justify-center text-[#ff4d6d] shrink-0">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F1E3E4] font-sans">
                Add a like if you like my portfolio!
              </h4>
              <p className="text-xs text-[rgba(241,227,228,0.7)] font-sans">
                Feedback & appreciation motivate future engineering work.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <PulseHeart
              liked={liked}
              count={count}
              onChange={handleLikeChange}
              showCount
              icon="heart"
              size={36}
              corner={24}
              likedColor="#ff4d6d"
              idleColor="#A288A6"
              pillColor="#27272a"
              textColor="#F1E3E4"
              label="Like portfolio"
            />
          </div>
        </div>

        {/* Brand, Socials & Back To Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
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
      </div>
    </footer>
  );
};
