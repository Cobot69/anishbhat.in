"use client";

import { useState } from "react";
import { Bot, X, ArrowRight, Sparkles } from "lucide-react";

interface ChatbotProps {
  onNavClick: (index: number) => void;
}

export default function Chatbot({ onNavClick }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const navOptions = [
    { label: "Home", index: 0 },
    { label: "About Me", index: 1 },
    { label: "Credentials", index: 2 },
    { label: "Tech Skills", index: 3 },
    { label: "Experience", index: 4 },
    { label: "Projects", index: 5 },
    { label: "Research", index: 6 },
    { label: "Connect", index: 7 },
  ];

  const handleOptionClick = (index: number) => {
    onNavClick(index);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-[#f5f5f5] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transform transition-all duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-[#0a0a0a] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#808000]" />
              <span className="font-bold tracking-wide text-gray-100">Anish&apos;s AI Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-gray-800 p-1 rounded-full transition-colors text-gray-300 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-5 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
            {/* Chatbot Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#808000]/20 flex items-center justify-center flex-shrink-0 border border-[#808000]/30">
                <Sparkles className="w-4 h-4 text-[#808000]" />
              </div>
              <div className="bg-[#111] text-[#e5e5e5] p-3.5 rounded-2xl rounded-tl-none shadow-md text-sm leading-relaxed border border-[#323831]">
                <p className="mb-2">Hi there! 👋 I&apos;m the portfolio assistant.</p>
                <p>Anish is a Lead AI Engineer specializing in <strong className="text-white">Generative AI, Agentic Systems, and Computer Vision</strong>.</p>
                <p className="mt-2 text-[#808000] font-bold">Where would you like to explore?</p>
              </div>
            </div>

            {/* Menu Options */}
            <div className="flex flex-col gap-2 mt-2">
              {navOptions.map((opt) => (
                <button 
                  key={opt.index} 
                  onClick={() => handleOptionClick(opt.index)}
                  className="bg-white border border-gray-200 text-[#0a0a0a] hover:bg-[#808000]/10 hover:border-[#808000]/50 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center justify-between group"
                >
                  {opt.label}
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#808000] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setHasClicked(true);
        }}
        className={`w-14 h-14 bg-[#808000] hover:bg-[#6b6b00] text-white rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-2 border-white/20 ${!hasClicked ? 'animate-bounce' : ''}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
      </button>
    </div>
  );
}
