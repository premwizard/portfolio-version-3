'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
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
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-[#F1E3E4]/80">
          <p className="text-[#A288A6] font-bold">⚡ PREM M — Interactive CLI Terminal v2.4.0</p>
          <p className="text-xs">Type <span className="text-[#A288A6] font-mono">help</span> to list available CLI commands.</p>
        </div>
      ),
    },
  ]);
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

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs text-[#F1E3E4]/80">
            <p className="text-[#A288A6] font-bold">Available Commands:</p>
            <p><span className="text-[#F1E3E4] font-mono">prem</span> or <span className="text-[#F1E3E4] font-mono">bio</span> — Executive summary & background</p>
            <p><span className="text-[#F1E3E4] font-mono">skills</span> — Technical stack & core competencies</p>
            <p><span className="text-[#F1E3E4] font-mono">projects</span> — List top featured AI projects</p>
            <p><span className="text-[#F1E3E4] font-mono">stats</span> — Engineering impact metrics</p>
            <p><span className="text-[#F1E3E4] font-mono">contact</span> — Get direct contact links</p>
            <p><span className="text-[#F1E3E4] font-mono">clear</span> — Clear terminal screen</p>
            <p><span className="text-[#F1E3E4] font-mono">sudo</span> — Execute root permission request</p>
          </div>
        );
        break;

      case 'prem':
      case 'bio':
        response = (
          <div className="space-y-2 text-xs text-[#F1E3E4]/90">
            <p className="font-bold text-[#A288A6]">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-[#F1E3E4]/60">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1.5 text-xs text-[#F1E3E4]/90">
            <p className="font-bold text-[#A288A6]">Core Tech Stack:</p>
            <p>• LLM Architecture: vLLM, RAG, TensorRT-LLM, LangChain, LlamaIndex</p>
            <p>• Machine Learning: PyTorch, CUDA, Scikit-Learn, Transformers, OpenCV</p>
            <p>• Backend & Infra: Python, FastAPI, Docker, Kubernetes, Vector DBs (Milvus/Pinecone)</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs text-[#F1E3E4]/90">
            <p className="font-bold text-[#A288A6]">Top Featured Projects:</p>
            {PROJECTS_DATA.slice(0, 3).map((p) => (
              <div key={p.id} className="pl-2 border-l border-[#A288A6]/40">
                <p className="font-semibold text-[#F1E3E4]">{p.title} <span className="text-[10px] text-[#A288A6]">[{p.category}]</span></p>
                <p className="text-[11px] text-[#F1E3E4]/70">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'stats':
        response = (
          <div className="grid grid-cols-2 gap-2 text-xs text-[#F1E3E4]/90">
            {STATS_DATA.map((s, idx) => (
              <div key={idx} className="p-1.5 rounded bg-[rgba(162,136,166,0.1)] border border-[rgba(204,188,188,0.1)]">
                <span className="font-mono font-bold text-[#A288A6]">{s.value}{s.suffix}</span>
                <p className="text-[10px] text-[#F1E3E4]/70">{s.label}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-[#F1E3E4]/90">
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
            [ACCESS DENIED] User prem is already root. You have administrative access to hire/collaborate!
          </p>
        );
        break;

      default:
        response = (
          <p className="text-xs text-rose-300 font-mono">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-[#A288A6]">help</span> for options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output: response }]);
    setInputVal('');
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
              isExpanded ? 'max-w-5xl h-[85vh]' : 'max-w-2xl h-[480px]'
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
                <span className="ml-3 text-xs font-mono text-[#F1E3E4]/70 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#A288A6]" />
                  prem@systems-engineer:~
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 rounded text-[#F1E3E4]/60 hover:text-[#F1E3E4] hover:bg-[#1C1D21] transition-colors"
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 rounded text-[#F1E3E4]/60 hover:text-rose-400 hover:bg-[#1C1D21] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div ref={scrollRef} className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 bg-[#1C1D21]">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  {item.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-[#A288A6]">
                      <span>prem@engineer:~$</span>
                      <span className="text-[#F1E3E4]">{item.command}</span>
                    </div>
                  )}
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
                placeholder="Type 'help' for commands..."
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
