"use client";
import { aboutData } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Relying on parent container fade
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 bg-brand-black pt-20 pb-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Text */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-light font-outfit mb-8 about-text uppercase tracking-tight">
            About <span className="text-[#323831]">Me</span>
          </h2>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-[#d5d5d5] font-inter leading-relaxed about-text font-light">
              AI/ML Engineer and backend developer with hands-on experience designing scalable backend systems, API-driven architectures, and production-grade ML pipelines.
            </p>
            <p className="text-lg text-[#9a9a9a] font-inter leading-relaxed about-text">
              Proficient in <span className="text-brand-light font-medium">Python, OOP, and clean code practices</span> with a strong emphasis on writing test cases, debugging production issues, and maintaining reliable version control workflows.
            </p>
            <p className="text-lg text-[#9a9a9a] font-inter leading-relaxed about-text">
              Proven track record of shipping end-to-end systems—from architecture design through testing and deployment—with measurable impact on performance, reliability, and business outcomes.
            </p>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="grid grid-cols-2 gap-12 lg:pl-12">
          {aboutData.stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col gap-2">
              <span className="text-6xl md:text-8xl font-black text-[#d5d5d5] font-outfit tracking-tighter drop-shadow-[0_0_15px_rgba(213,213,213,0.1)]">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-inter tracking-widest text-brand-muted uppercase font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
