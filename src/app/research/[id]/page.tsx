import { notFound } from "next/navigation";
import Link from "next/link";
import { researchData } from "@/lib/data";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";

export function generateStaticParams() {
  return researchData.map((r) => ({ id: r.id }));
}

export default function ResearchDetailPage({ params }: { params: { id: string } }) {
  const research = researchData.find((r) => r.id === params.id);

  if (!research) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <Link href="/research" className="inline-flex items-center space-x-2 text-brand-muted hover:text-brand-light transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Research</span>
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1.5 bg-brand-brown/20 text-brand-brown rounded-full text-sm font-medium tracking-widest uppercase border border-brand-brown/30">
              {research.conference}
            </span>
            <span className="text-brand-muted font-mono">{research.year}</span>
          </div>
          
          <h1 className="font-outfit text-4xl md:text-6xl font-black text-brand-light mb-8 tracking-tighter leading-tight">
            {research.title}
          </h1>
        </header>

        <div className="glass-panel p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-brown/10 rounded-full blur-3xl" />
          <h2 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-brand-brown" />
            Abstract
          </h2>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-light italic border-l-2 border-brand-brown/50 pl-6">
            &quot;{research.abstract}&quot;
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h3 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="w-6 h-[2px] bg-white/20 block" />
              Objective
            </h3>
            <p className="text-lg text-brand-muted leading-relaxed">
              {research.objective}
            </p>
          </section>

          <section>
            <h3 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="w-6 h-[2px] bg-white/20 block" />
              Methodology
            </h3>
            <p className="text-lg text-brand-muted leading-relaxed">
              {research.methodology}
            </p>
          </section>

          <section>
            <h3 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="w-6 h-[2px] bg-white/20 block" />
              Results & Conclusion
            </h3>
            <p className="text-lg text-brand-muted leading-relaxed">
              {research.results}
            </p>
          </section>
        </div>

        {research.publicationLink && (
          <div className="mt-20 pt-12 border-t border-white/10 flex justify-center">
            <a 
              href={research.publicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-brown text-white font-medium rounded-full hover:bg-brand-brown/80 transition-all hover:scale-105"
            >
              <span>View Full Publication</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
