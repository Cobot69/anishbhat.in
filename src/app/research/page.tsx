import Link from "next/link";
import { researchData } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function ResearchIndexPage() {
  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <header className="mb-20">
          <h1 className="font-outfit text-5xl md:text-7xl font-black tracking-tighter mb-6">
            RESEARCH <span className="text-brand-brown">&</span><br /> PUBLICATIONS
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed max-w-2xl">
            A collection of my academic contributions, exploring multimodal intelligence, embedded AI systems, and neural network optimization.
          </p>
        </header>

        <div className="space-y-8">
          {researchData.map((research, index) => (
            <Link 
              href={`/research/${research.id}`} 
              key={research.id}
              className="block glass-panel p-8 md:p-12 rounded-3xl group hover:border-brand-brown/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-brown/10 transition-colors duration-500" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <span className="font-mono text-brand-brown font-bold text-xl">0{index + 1}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-white/5 text-brand-light rounded-full text-xs font-medium tracking-widest uppercase">
                      {research.conference}
                    </span>
                    <span className="text-sm font-mono text-brand-muted">{research.year}</span>
                  </div>
                  <h2 className="font-outfit text-3xl md:text-4xl font-bold text-brand-light mb-4 group-hover:text-brand-brown transition-colors">
                    {research.title}
                  </h2>
                  <p className="text-brand-muted line-clamp-2 leading-relaxed">
                    {research.objective}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-4">
                  <span className="text-sm font-bold tracking-widest uppercase text-brand-light opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Read Abstract
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-brown group-hover:border-brand-brown transition-colors">
                    <ArrowRight className="w-5 h-5 text-brand-light" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
