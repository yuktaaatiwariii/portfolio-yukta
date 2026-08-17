import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // App.jsx shifts the entire layout down by 1.2vh using Framer Motion.
    // This breaks standard GSAP measurements because the visual position is 1.2vh lower than the DOM position.
    // We add this offset to the GSAP trigger to perfectly sync it!
    const offset = window.innerHeight * 1.2;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        // Start when the visual top (DOM top + offset) hits the viewport top
        start: () => `top+=${offset} top`,
        end: `+=${window.innerHeight * 1.5}`, // Pin for 1.5 screen heights
        scrub: 1, 
        pin: true,
        // Critical: Forces GSAP to use translate instead of fixed positioning, 
        // which fixes the disappearing image bug inside the App.jsx transformed container!
        pinType: "transform" 
      }
    });

    // 1. Zoom through the image massively
    tl.to('.transition-img-wrapper', {
      scale: 35, 
      duration: 1,
      ease: 'power2.inOut'
    })
    // 2. Fade out the image
    .to('.transition-img-wrapper', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    }, "-=0.3") 
    // 3. Fade in projects content
    .to('.projects-content', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="relative w-full h-screen bg-ivory text-espresso">
      
      {/* The Transition Overlay Image */}
      <div className="transition-img-wrapper absolute z-20 flex items-center justify-center shadow-2xl origin-center w-[90vw] md:w-full max-w-4xl h-[40vh] md:h-[50vh] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/projects_transition.jpg" 
          alt="Projects Transition" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* The Actual Projects Content */}
      <div className="projects-content absolute inset-0 z-10 bg-ivory flex flex-col items-center pt-32 px-6 md:px-20 overflow-y-auto opacity-0 translate-y-12">
        <div className="w-full max-w-7xl flex justify-between items-end mb-16 border-b border-espresso/20 pb-8">
          <h2 className="font-serif text-5xl md:text-8xl tracking-tight text-espresso uppercase">
            Selected<br/>
            <span className="text-burgundy italic">Ventures</span>
          </h2>
          <p className="font-mono text-sm tracking-widest text-espresso/40 uppercase hidden md:block">
            // Showcasing recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl pb-32">
          {/* Project Placeholders */}
          <div className="group flex flex-col gap-4">
            <div className="h-[40vh] md:h-[50vh] bg-espresso/5 border border-espresso/10 rounded-sm flex items-center justify-center cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <span className="font-mono text-sm tracking-widest text-espresso/40 group-hover:scale-110 transition-transform duration-500 z-0">PROJECT 01</span>
            </div>
            <div className="flex justify-between items-center font-mono text-xs tracking-widest uppercase">
              <span className="text-espresso">E-Commerce Platform</span>
              <span className="text-espresso/40">2026</span>
            </div>
          </div>
          
          <div className="group flex flex-col gap-4 md:mt-24">
            <div className="h-[40vh] md:h-[50vh] bg-espresso/5 border border-espresso/10 rounded-sm flex items-center justify-center cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <span className="font-mono text-sm tracking-widest text-espresso/40 group-hover:scale-110 transition-transform duration-500 z-0">PROJECT 02</span>
            </div>
            <div className="flex justify-between items-center font-mono text-xs tracking-widest uppercase">
              <span className="text-espresso">Fintech Dashboard</span>
              <span className="text-espresso/40">2026</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
