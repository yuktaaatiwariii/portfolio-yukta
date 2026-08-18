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
    </section>
  );
}