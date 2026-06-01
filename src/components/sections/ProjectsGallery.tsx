"use client";
import { projectsData } from "@/lib/data";

import { Github, ExternalLink } from "lucide-react";

export default function ProjectsGallery({ activeGlobalIndex }: { activeGlobalIndex: number }) {

  return (
    <>
      {projectsData.map((project, idx) => {
        const globalIndex = 5 + idx; // Projects start at index 5 in HorizontalWrapper
        return (
          <div key={project.id} className={`project-panel horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar bg-brand-black px-4 sm:px-6 lg:px-16 pt-20 pb-24 flex flex-col justify-center border-l border-white/5 transition-opacity duration-1000 ${activeGlobalIndex === globalIndex ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Huge Background Project Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] font-outfit pointer-events-none z-0">
            0{idx + 1}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center project-content">
            
            {/* Left Col - Details */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#d5d5d5] font-outfit mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-brand-muted font-inter mb-8">
                {project.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#323831] uppercase tracking-widest mb-2">Problem Solved</h4>
                  <p className="text-sm text-[#9a9a9a]">{project.problemSolved}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#323831] uppercase tracking-widest mb-2">Key Outcomes</h4>
                  <ul className="list-none text-sm text-[#9a9a9a] space-y-2">
                    {project.keyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex gap-2">
                        <span className="text-[#323831]">▹</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-3 py-1 bg-[#141414] border border-[#323831]/50 text-[#d5d5d5] rounded-full shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.documentLink && (
                  <a href={project.documentLink} download target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#808000] hover:bg-[#6b6b00] text-white rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Presentation
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && project.liveLink !== "" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== "#" && project.githubLink !== "" && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#1a1a1a] border border-white/20 hover:bg-[#2a2a2a] text-white rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Col - Visual/Stats */}
            <div className="flex flex-col gap-8">
              <div className="aspect-video w-full rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden relative flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* 
                  To update images, just drop your files in the public/ folder (e.g., project1.png, svarra.png)
                  and update the "images" array in src/lib/data.ts
                */}
                <img src={`/${project.images[0]}`} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {project.statistics.map((stat, sIdx) => (
                  <div key={sIdx} className="p-5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] rounded-xl border border-white/5 text-center shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#323831] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="text-3xl font-black text-[#d5d5d5] mb-2 font-outfit">{stat.value}</div>
                    <div className="text-xs font-bold text-[#323831] uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        );
      })}
    </>
  );
}
