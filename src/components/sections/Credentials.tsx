import { educationData, certificationsData, awardsData } from "@/lib/data";

export default function Credentials() {
  return (
    <section className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 bg-brand-black pt-20 pb-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column - Education */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-light font-outfit mb-12 uppercase tracking-tight">
            Academic <span className="text-[#323831]">Background</span>
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-[#323831]/50 group">
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#323831] rounded-full -translate-x-[6.5px] group-hover:bg-brand-light transition-colors duration-300"></div>
                <h3 className="text-2xl font-bold text-[#d5d5d5] font-outfit mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-brand-muted font-inter mb-2">{edu.institution}, {edu.location}</h4>
                <div className="flex items-center gap-4 text-sm font-mono text-[#9a9a9a]">
                  <span>{edu.period}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#323831]"></span>
                  <span className="font-bold text-brand-light">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Certs & Awards */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-light font-outfit mb-12 uppercase tracking-tight">
            Honors & <span className="text-[#323831]">Certs</span>
          </h2>
          
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-brand-muted uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Certifications</h3>
              <div className="space-y-4">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="bg-brand-dark/50 border border-white/5 p-5 rounded-2xl flex justify-between items-center group hover:bg-white/5 transition-colors">
                    <span className="text-[#d5d5d5] font-inter font-medium">{cert.title}</span>
                    <span className="text-xs font-mono text-[#323831] font-bold tracking-widest bg-black px-3 py-1 rounded-full">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-xl font-bold text-brand-muted uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Awards</h3>
              <div className="space-y-4">
                {awardsData.map((award, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 text-[#323831]">🏆</div>
                    <p className="text-[#9a9a9a] font-inter leading-relaxed">{award.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
