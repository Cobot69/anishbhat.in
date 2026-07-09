import Link from "next/link";
import { contactData } from "@/lib/data";
import { Linkedin, Github, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-black py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-outfit text-2xl font-bold tracking-wider text-brand-light">
            ANISH<span className="text-brand-brown">.</span>
          </Link>
          <p className="text-brand-muted text-sm mt-2">AI Engineer & Backend Developer</p>
        </div>
        
        <div className="flex space-x-6">
          <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-light transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-light transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={`mailto:${contactData.email}`} className="text-brand-muted hover:text-brand-light transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-light transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-light transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <a href="/resume.txt" download="Anish_Bhat_Resume.txt" className="px-6 py-2 rounded-full border border-brand-brown/50 text-brand-light text-sm hover:bg-brand-brown/10 transition-colors">
            Download Resume
          </a>
          <p className="text-brand-muted text-xs">
            © {currentYear} Anish Bhat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
