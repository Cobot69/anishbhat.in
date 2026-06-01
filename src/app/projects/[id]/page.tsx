import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-32">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <Link href="/#projects" className="inline-flex items-center space-x-2 text-brand-muted hover:text-brand-light transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium tracking-widest uppercase">Back to Projects</span>
        </Link>
        
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-brown/20 text-brand-brown rounded-full text-xs font-medium tracking-widest uppercase border border-brand-brown/30">
              {project.timeline}
            </span>
          </div>
          <h1 className="font-outfit text-5xl md:text-7xl font-black text-brand-light mb-8 tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="w-full h-[50vh] md:h-[70vh] relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-brand-dark flex items-center justify-center z-0">
            <span className="text-brand-muted/50 font-outfit text-3xl font-light">Main Architecture / Hero Screenshot</span>
          </div>
          <Image
            src={`/${project.images[0]}`}
            alt={project.title}
            fill
            className="object-cover z-10"
          />
        </div>
      </section>

      {/* Details Grid */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <div>
              <h2 className="font-outfit text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-brand-brown block" />
                Problem Statement
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-brand-brown block" />
                Architecture & Solution
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                {project.architecture}
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-brand-brown block" />
                Key Outcomes
              </h2>
              <ul className="space-y-4">
                {project.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-brand-muted text-lg">
                    <span className="text-brand-brown mt-1">▹</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Metadata */}
          <div className="space-y-12">
            
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="font-outfit text-xl font-bold mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-brand-light">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="font-outfit text-xl font-bold mb-6">Skills Learned</h3>
              <div className="flex flex-wrap gap-2">
                {project.skillsLearned.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-brand-brown/10 text-brand-brown border border-brand-brown/20 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {project.statistics.length > 0 && (
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="font-outfit text-xl font-bold mb-6">Metrics</h3>
                <div className="space-y-6">
                  {project.statistics.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-3xl font-black text-brand-light mb-1">{stat.value}</p>
                      <p className="text-sm font-medium text-brand-muted uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-white/20 flex items-center justify-center gap-3 hover:bg-white/5 hover:border-brand-brown/50 transition-all group"
              >
                <Github className="w-5 h-5 text-brand-muted group-hover:text-brand-light transition-colors" />
                <span className="font-medium text-brand-light">View Source Code</span>
              </a>
              {project.liveLink && project.liveLink !== "#" && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-brand-brown text-white flex items-center justify-center gap-3 hover:bg-brand-brown/80 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">Live Deployment</span>
                </a>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
