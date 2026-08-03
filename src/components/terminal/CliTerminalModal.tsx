'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO, STATS_DATA, PROJECTS_DATA } from '@/constants/portfolioData';

interface CliTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const CliTerminalModal: React.FC<CliTerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs text-[#F1E3E4]/90 font-mono">
            <p className="text-[#A288A6] font-bold">⚡ Available Commands:</p>
            <p><span className="text-[#F1E3E4] font-bold">prem</span> or <span className="text-[#F1E3E4] font-bold">bio</span> — Executive background & bio summary</p>
            <p><span className="text-[#F1E3E4] font-bold">skills</span> — Technical stack & core competencies</p>
            <p><span className="text-[#F1E3E4] font-bold">projects</span> — Featured AI systems & applications</p>
            <p><span className="text-[#F1E3E4] font-bold">stats</span> — Key engineering metrics & impact</p>
            <p><span className="text-[#F1E3E4] font-bold">contact</span> — Email address & direct links</p>
            <p><span className="text-[#F1E3E4] font-bold">clear</span> — Clear terminal screen output</p>
            <p><span className="text-[#F1E3E4] font-bold">sudo</span> — Request administrative privileges</p>
          </div>
        );
        break;

      case 'prem':
      case 'bio':
        response = (
          <div className="space-y-2 text-xs text-[#F1E3E4]/90 font-mono">
            <p className="font-bold text-[#A288A6]">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="leading-relaxed">{PERSONAL_INFO.bio}</p>
            <p className="text-[#F1E3E4]/60">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1.5 text-xs text-[#F1E3E4]/90 font-mono">
            <p className="font-bold text-[#A288A6]">Core Engineering Skills:</p>
            <p>• LLM Architecture: vLLM, RAG, TensorRT-LLM, LangChain, LlamaIndex</p>
            <p>• Machine Learning: PyTorch, CUDA, Scikit-Learn, Transformers, OpenCV</p>
            <p>• Backend & Infra: Python, FastAPI, Docker, Kubernetes, Vector DBs</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs text-[#F1E3E4]/90 font-mono">
            <p className="font-bold text-[#A288A6]">Featured AI Systems:</p>
            {PROJECTS_DATA.slice(0, 3).map((p) => (
              <div key={p.id} className="pl-2.5 border-l-2 border-[#A288A6]/60">
                <p className="font-semibold text-[#F1E3E4]">{p.title} <span className="text-[10px] text-[#A288A6]">[{p.category}]</span></p>
                <p className="text-[11px] text-[#F1E3E4]/70">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'stats':
        response = (
          <div className="grid grid-cols-2 gap-2 text-xs text-[#F1E3E4]/90 font-mono">
            {STATS_DATA.map((s, idx) => (
              <div key={idx} className="p-2 rounded bg-[rgba(162,136,166,0.12)] border border-[rgba(204,188,188,0.15)]">
                <span className="font-bold text-[#A288A6]">{s.value}{s.suffix}</span>
                <p className="text-[10px] text-[#F1E3E4]/70">{s.label}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-[#F1E3E4]/90 font-mono">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#A288A6] underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#A288A6] underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#A288A6] underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
        response = (
          <p className="text-xs text-rose-400 font-mono">
            [ACCESS GRANTED] User prem is already root. You have administrative access to hire/collaborate!
          </p>
        );
        break;

      default:
        response = (
          <p className="text-xs text-rose-300 font-mono">
            Command not recognized: &quot;{cmd}&quot;. Click any quick button above or type <span className="text-[#A288A6]">help</span>.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: response }]);
    setInputVal('');
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
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
            className={`w-full bg-[#1C1D21] border border-[rgba(204,188,188,0.2)] rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
              isExpanded ? 'max-w-5xl h-[85vh]' : 'max-w-2xl h-[520px]'
            }`}
          >
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-[#16171B] border-b border-[rgba(204,188,188,0.12)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="ml-3 text-xs font-mono text-[#F1E3E4]/80 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#A288A6]" />
                  Interactive CLI Playground &bull; prem@engineer
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 rounded text-[#F1E3E4]/60 hover:text-[#F1E3E4] hover:bg-[#1C1D21] transition-colors"
                  title={isExpanded ? 'Restore window size' : 'Expand window'}
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 rounded text-[#F1E3E4]/60 hover:text-rose-400 hover:bg-[#1C1D21] transition-colors"
                  title="Close Terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Beginner-Friendly Explanation Banner & Quick Action Buttons */}
            <div className="p-3 bg-[rgba(162,136,166,0.08)] border-b border-[rgba(204,188,188,0.12)] space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-[#F1E3E4]/80">
                <HelpCircle className="w-4 h-4 text-[#A288A6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F1E3E4]">What is this?</span> This is an interactive Command-Line Interface (CLI). Click any button below or type commands at the bottom prompt!
                </div>
              </div>

              {/* 1-Click Action Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {[
                  { label: '💡 help', cmd: 'help' },
                  { label: '👤 bio', cmd: 'bio' },
                  { label: '🛠️ skills', cmd: 'skills' },
                  { label: '🚀 projects', cmd: 'projects' },
                  { label: '📊 stats', cmd: 'stats' },
                  { label: '📬 contact', cmd: 'contact' },
                  { label: '🧹 clear', cmd: 'clear' },
                ].map((chip) => (
                  <button
                    key={chip.cmd}
                    onClick={() => executeCommand(chip.cmd)}
                    className="px-2.5 py-1 rounded-md bg-[#1C1D21] border border-[rgba(204,188,188,0.2)] text-[11px] font-mono text-[#A288A6] hover:bg-[#A288A6] hover:text-[#1C1D21] transition-all cursor-pointer shadow-sm"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Output Body */}
            <div ref={scrollRef} className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 bg-[#1C1D21]">
              {history.length === 0 && (
                <div className="text-[11px] text-[rgba(241,227,228,0.5)] italic">
                  Terminal ready. Click a button above or type a command below to explore.
                </div>
              )}
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#A288A6]">
                    <span>prem@engineer:~$</span>
                    <span className="text-[#F1E3E4] font-bold">{item.command}</span>
                  </div>
                  <div className="pl-2">{item.output}</div>
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form onSubmit={handleCommandSubmit} className="p-3 bg-[#16171B] border-t border-[rgba(204,188,188,0.12)] flex items-center gap-2">
              <span className="text-xs font-mono text-[#A288A6] shrink-0">prem@engineer:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help', 'bio', 'projects' or click a button..."
                className="flex-1 bg-transparent text-xs font-mono text-[#F1E3E4] focus:outline-none placeholder-[#F1E3E4]/40"
              />
              <button type="submit" className="p-1.5 rounded-lg bg-[rgba(162,136,166,0.15)] text-[#A288A6] hover:bg-[#A288A6] hover:text-[#1C1D21] transition-colors">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
