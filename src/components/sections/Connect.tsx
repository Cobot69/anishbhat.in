"use client";
import { contactData } from "@/lib/data";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Connect() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 bg-brand-black pt-20 pb-24">
      <div className="max-w-4xl mx-auto w-full text-center">
        
        <h2 className="text-5xl md:text-8xl font-black text-[#d5d5d5] font-outfit mb-6 uppercase tracking-tighter connect-item">
          Let&apos;s <span className="text-[#323831]">Build</span>
        </h2>
        
        <p className="text-xl text-brand-muted font-inter mb-16 max-w-2xl mx-auto connect-item">
          Whether it&apos;s a freelance AI pipeline, a scalable backend, or a full-stack product, I&apos;m ready to collaborate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 connect-item">
          <a href={`mailto:${contactData.email}`} className="group flex flex-col items-center p-8 rounded-3xl bg-brand-dark/50 border border-white/5 hover:bg-[#323831]/10 transition-colors">
            <Mail className="w-8 h-8 text-[#d5d5d5] mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-brand-muted tracking-widest uppercase mb-1">Email</span>
            <span className="text-lg text-[#d5d5d5] font-inter">{contactData.email}</span>
          </a>
          
          <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 rounded-3xl bg-brand-dark/50 border border-white/5 hover:bg-[#323831]/10 transition-colors">
            <MessageCircle className="w-8 h-8 text-[#d5d5d5] mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-brand-muted tracking-widest uppercase mb-1">WhatsApp</span>
            <span className="text-lg text-[#d5d5d5] font-inter">{contactData.phone}</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 connect-item">
          <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[#d5d5d5] font-inter font-medium group">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
          <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[#d5d5d5] font-inter font-medium group">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
}
