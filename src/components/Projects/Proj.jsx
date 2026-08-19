import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import download from "../../assets/1.jpg"
import Projects from "./Projects"

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsLoad() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      scale: 15, 
      duration: 1,
      ease: 'none',
      force3D: false
    })
    // 2. Fade out the image
    .to('.transition-img-wrapper', {
      opacity: 0,
      duration: 0.5,
      ease: 'none'
    }, "-=0.3") 
    // 3. Fade in projects content
    .to('.projects-content', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.2");

  }, { scope: containerRef });

  const handleMouseMove = (e) => {
    // Calculate mouse position relative to center of screen (-1 to 1)
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    // Return to center smoothly
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <>
    <section ref={containerRef} id="projects" className="relative mt-20 w-full h-screen bg-ivory text-espresso">
      
      {/* Half-screen background image behind the project pic */}
      <div 
        className="absolute transition-img-wrapper top-0 left-0 w-full h-full z-10 bg-espresso/10 flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Replace the src below with your uploaded image's path in the public folder */}
        <img 
          src={download}
          alt="Background Setup" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
        />
        
        {/* Animated Text Parallax */}
        <div 
          className="relative z-10 transition-transform duration-300 ease-out pointer-events-none"
          style={{ 
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` 
          }}
        >
          <h1 
            className="text-white text-[15vw] md:text-[18vw] drop-shadow-2xl" 
            style={{ 
              fontFamily: "'Great Vibes', cursive", 
              WebkitTextStroke: "2px #1A1A1A", 
              textShadow: "4px 4px 0px #1A1A1A, 0px 8px 20px rgba(0,0,0,0.6)" 
            }}
          >
            Project ?
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/80 font-semibold drop-shadow-md">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
        </div>
        
      </div>
      
    </section>

    <Projects/>
    </>
  );
}