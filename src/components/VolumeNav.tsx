"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "credentials", label: "CREDENTIALS" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "research", label: "RESEARCH" },
  { id: "connect", label: "CONNECT" }
];

export default function VolumeNav({ activeIndex, onNavClick }: { activeIndex: number, onNavClick: (idx: number) => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let displayIndex = activeIndex;
  if (activeIndex >= 5 && activeIndex <= 11) displayIndex = 5;
  if (activeIndex === 12) displayIndex = 6;
  if (activeIndex === 13) displayIndex = 7;

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"} hidden md:block`}>
      <div className="flex items-center px-8 py-5 bg-[#d5d5d5] rounded-[3rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_15px_30px_rgba(0,0,0,0.6)] border border-white/40">
        {navItems.map((item, idx) => (
          <div key={item.id} className="flex items-center">
            
            <div className="flex flex-col items-center gap-3 group cursor-pointer relative" onClick={() => onNavClick(idx)}>
              {/* LED Indicator */}
              <div className={`absolute -top-4 w-2 h-2 rounded-full transition-all duration-300 ${displayIndex === idx ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'}`} />
              
              {/* The Knob (Black 3D) */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#333] to-[#000] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_6px_10px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(255,255,255,0.5)] relative flex items-center justify-center transform group-hover:scale-105 transition-transform">
                {/* Inner metallic ring */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-tl from-[#111] to-[#222] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] flex items-center justify-center">
                   {/* Spindle detail */}
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)] relative">
                      <div className={`absolute top-1 left-1/2 -translate-x-1/2 w-1 h-3 rounded-full transition-all duration-500 ${displayIndex === idx ? 'bg-[#d5d5d5]' : 'bg-[#141414]'}`} />
                   </div>
                </div>
              </div>
              <span className="text-[10px] font-outfit tracking-widest text-[#141414] font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>

            {/* Connecting line */}
            {idx < navItems.length - 1 && (
              <div className="w-12 flex items-center justify-center mt-[-20px]">
                 <div className="w-full h-[1px] bg-[#141414]/20"></div>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}
