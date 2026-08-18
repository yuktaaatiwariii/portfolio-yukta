import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectShowcase from './ProjectShowcase';
import Proj from "./Proj"

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%', // Trigger when section top hits 70% of viewport
        toggleActions: 'play none none none', // Play once
      }
    });

    // 1. Metadata fades in
    tl.fromTo('.projects-meta', 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    // 2. Main heading slides upward slightly and fades in
    .fromTo('.projects-heading',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      "-=0.3"
    )
    // 3. Description follows
    .fromTo('.projects-desc',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      "-=0.5"
    )
    // 4. The project video composition enters (handled partly by framer motion in showcase, 
    // but we can fade the whole container here for the entrance)
    .fromTo('.projects-showcase-container',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      "-=0.3"
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="projects" className="relative w-full min-h-screen bg-ivory pt-32 md:pt-40 pb-20 overflow-hidden flex flex-col">
      

       <Proj/>


      {/* Editorial Intro */}
      <div ref={headerRef} className="w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-20 z-10 relative pointer-events-none">
        
        <p className="projects-meta font-mono text-xs tracking-widest text-espresso/50 uppercase mb-6 opacity-0">
          SELECTED PROJECTS / 2024—2026
        </p>

        <h2 className="projects-heading font-serif text-6xl md:text-[8rem] leading-[0.9] tracking-tighter text-espresso uppercase mb-10 opacity-0 flex flex-col">
          <span>Selected</span>
          <span className="text-burgundy italic md:pl-32">Work</span>
        </h2>

        <p className="projects-desc font-sans text-sm md:text-base text-espresso/80 max-w-md md:ml-auto md:text-right leading-relaxed opacity-0">
          A collection of experiments, products, interfaces and full-stack experiences I've designed and built — where engineering meets visual storytelling.
        </p>

      </div>

      {/* Main Interactive Showcase */}
      <div className="projects-showcase-container w-full flex-grow relative opacity-0">
        <ProjectShowcase />
      </div>

    </section>
  );
}
