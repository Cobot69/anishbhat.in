import { researchData } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResearchSection() {
  return (
    <section className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 bg-brand-black pt-20 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-black text-brand-light font-outfit uppercase tracking-tight">
            Research <span className="text-[#323831]">Publications</span>
          </h2>
          <Link href="/research" className="hidden md:flex items-center gap-2 text-brand-muted hover:text-brand-light transition-colors font-mono text-sm tracking-widest uppercase">
            View All Papers <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchData.map((paper) => (
            <Link key={paper.id} href={`/research/${paper.id}`} className="group relative bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-white/20 transition-colors flex flex-col h-[400px]">
              
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-8 h-8 text-[#323831]" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest bg-black text-[#d5d5d5] px-3 py-1 rounded-full border border-white/10">{paper.conference}</span>
                <span className="text-xs font-mono text-[#323831] font-bold">{paper.year}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#d5d5d5] font-outfit mb-4 leading-snug group-hover:text-brand-light transition-colors">
                {paper.title}
              </h3>

              <p className="text-[#9a9a9a] font-inter text-sm line-clamp-4 leading-relaxed flex-grow">
                {paper.abstract}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">Read Abstract</span>
                <div className="w-8 h-1 bg-[#323831] group-hover:bg-brand-light transition-colors"></div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/research" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-light transition-colors font-mono text-sm tracking-widest uppercase bg-white/5 px-6 py-3 rounded-full">
            View All Papers <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
