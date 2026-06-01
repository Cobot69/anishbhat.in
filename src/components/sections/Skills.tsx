"use client";
import { skillsData } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Relying on parent container fade
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 bg-brand-black pt-20 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-black text-brand-light font-outfit mb-12 uppercase tracking-tight">
          Technical <span className="text-[#323831]">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category bg-brand-dark/50 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-light font-outfit mb-6 uppercase tracking-widest border-b border-white/10 pb-4">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                        {/* Using standard img tag for external CDN svgs to avoid Next.js domain config issues */}
                        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="text-sm font-inter text-[#d5d5d5] font-medium tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-brand-muted">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-black rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="skill-progress h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
