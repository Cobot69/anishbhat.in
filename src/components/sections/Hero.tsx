"use client";
import Image from "next/image";
import { aboutData } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-content", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-full flex items-center bg-brand-black overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-image.png"
          alt="Anish Bhat"
          fill
          className="object-contain object-right"
          priority
          quality={100}
          unoptimized
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center h-full">
        <div className="max-w-2xl text-left">
          <p className="text-brand-light font-inter tracking-widest text-sm mb-4 hero-content opacity-80 uppercase">
            {aboutData.role}
          </p>
          <h1 className="text-5xl md:text-8xl font-black text-brand-light font-outfit leading-[0.9] tracking-tighter mb-6 hero-content">
            {aboutData.name.toUpperCase()}
          </h1>
          <p className="text-xl md:text-3xl text-brand-muted font-inter max-w-xl leading-snug hero-content">
            {aboutData.tagline}
          </p>
          
          <div className="mt-12 flex gap-6 hero-content">
            <button className="px-8 py-4 bg-brand-light text-brand-black font-outfit font-bold rounded-full hover:bg-white transition-colors">
              VIEW WORK
            </button>
            <button className="px-8 py-4 bg-transparent text-brand-light border border-brand-light/30 font-outfit font-bold rounded-full hover:bg-brand-light/10 transition-colors">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
