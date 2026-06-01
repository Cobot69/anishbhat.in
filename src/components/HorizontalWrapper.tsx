"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalWrapper({ children, onIndexChange }: { children: React.ReactNode, onIndexChange: (idx: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollRef.current || !containerRef.current) return;
    const panels = gsap.utils.toArray(".horizontal-panel") as HTMLElement[];
    if (panels.length === 0) return;

    gsap.to(scrollRef.current, {
      x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.6 },
          delay: 0.1,
          ease: "power1.inOut"
        },
        end: () => "+=" + (scrollRef.current!.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (panels.length - 1));
          onIndexChange(newIndex);
        }
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-screen bg-brand-black overflow-hidden relative">
      <div ref={scrollRef} className="h-full flex flex-nowrap w-max">
        {children}
      </div>
    </div>
  );
}
