"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Connect from "@/components/sections/Connect";

import HorizontalWrapper from "@/components/HorizontalWrapper";
import VolumeNav from "@/components/VolumeNav";

import Credentials from "@/components/sections/Credentials";
import ResearchSection from "@/components/sections/ResearchSection";
import Chatbot from "@/components/Chatbot";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index: number) => {
    // Map VolumeNav index to actual panel index
    let targetPanelIndex = index;
    if (index === 5) targetPanelIndex = 5; // Projects start at 5
    if (index === 6) targetPanelIndex = 12; // Research is at 12
    if (index === 7) targetPanelIndex = 13; // Connect is at 13

    setActiveIndex(targetPanelIndex);
    window.scrollTo({
      top: targetPanelIndex * window.innerWidth,
      behavior: "smooth"
    });
  };

  return (
    <>
      <VolumeNav activeIndex={activeIndex} onNavClick={handleNavClick} />
      <Chatbot onNavClick={handleNavClick} />
      <HorizontalWrapper onIndexChange={setActiveIndex}>
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
        </div>
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <About />
        </div>
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <Credentials />
        </div>
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <Skills />
        </div>
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'}`}>
          <Experience />
        </div>
        <ProjectsGallery activeGlobalIndex={activeIndex} />
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 12 ? 'opacity-100' : 'opacity-0'}`}>
          <ResearchSection />
        </div>
        <div className={`horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar transition-opacity duration-1000 ${activeIndex === 13 ? 'opacity-100' : 'opacity-0'}`}>
          <Connect />
        </div>
      </HorizontalWrapper>
    </>
  );
}
