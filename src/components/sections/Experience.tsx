"use client";
import { experienceData } from "@/lib/data";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 bg-brand-black pt-20 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-black text-brand-light font-outfit mb-16 uppercase tracking-tight">
          Professional <span className="text-[#323831]">Experience</span>
        </h2>

        <div className="space-y-12 pl-4 border-l border-brand-muted/20">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="exp-item relative pl-8">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#323831] shadow-[0_0_10px_#808000]" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-[#d5d5d5] font-outfit tracking-wide">
                    {exp.title}
                  </h3>
                  <div className="text-lg text-[#323831] font-medium font-inter mt-1">
                    {exp.company} <span className="text-brand-muted font-light px-2">•</span> <span className="text-brand-muted text-sm">{exp.location}</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-muted whitespace-nowrap self-start">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-[#9a9a9a] font-inter leading-relaxed flex items-start gap-3 text-sm md:text-base">
                    <span className="text-[#323831] mt-1.5 text-xs">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-3 py-1 bg-black border border-[#323831]/30 text-[#d5d5d5] rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
