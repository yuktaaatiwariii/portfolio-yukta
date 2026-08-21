import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectShowcase from './ProjectShowcase';


gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 10%', // Trigger when the text actually scrolls into view
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
    <section ref={sectionRef} className="group relative pb-20 w-full min-h-screen max-h-full bg-ivory overflow-hidden">

      {/* Background Abstract Shapes for the whole page */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Main giant distorted square (Water Effect) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[140vw] max-w-[1200px] h-[140vw] max-h-[800px] bg-[#5d1730] opacity-90 transform -rotate-12 group-hover:-rotate-3 group-hover:scale-105 transition-all duration-[2000ms] ease-in-out blur-[1px] animate-water [animation-play-state:paused] group-hover:[animation-play-state:running]"></div>

        {/* Small bubble 1 (Water Effect) */}
        <div className="absolute top-[10%] left-[5%] w-[15vw] max-w-[200px] h-[18vw] max-h-[220px] bg-[#5d1730] opacity-85 transform rotate-[25deg] group-hover:rotate-[45deg] group-hover:translate-y-8 transition-all duration-[2500ms] ease-in-out animate-water-alt [animation-play-state:paused] group-hover:[animation-play-state:running]"></div>
    <div className="absolute bottom-[5%] left-[15%] w-[12vw] max-w-[150px] h-[15vw] max-h-[180px] bg-[#5d1730] opacity-75 transform rotate-[45deg] group-hover:rotate-[70deg] group-hover:-translate-y-10 transition-all duration-[2000ms] ease-in-out animate-water-alt [animation-play-state:paused] group-hover:[animation-play-state:running]" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Editorial Intro */}
      <div ref={headerRef} className="w-full max-w-7xl  mx-auto px-6 md:px-12 xl:px-20 z-10 relative pointer-events-none">

        <p className="projects-meta font-mono text-xs tracking-widest text-espresso/50 uppercase mb-6 opacity-0">
          SELECTED PROJECTS / 2024—2026
        </p>

        <h2 className="projects-heading font-serif text-6xl md:text-[8rem] leading-[0.9] tracking-tighter text-espresso uppercase mb-1 opacity-0 flex flex-col">
          <span>Selected</span>
          <span className="text-burgundy italic md:pl-32">Work</span>
        </h2>

        <p className="projects-desc font-sans text-sm md:text-base text-espresso/80 max-w-md md:ml-auto md:text-right leading-relaxed opacity-0">
          A collection of experiments, products, interfaces and full-stack experiences I've designed and built — where engineering meets visual storytelling.
        </p>

      </div>

      {/* Main Interactive Showcase */}
      <div className="projects-showcase-container w-full grow relative opacity-0">
        <ProjectShowcase />
      </div>

    </section>
  );
}
