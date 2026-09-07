import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagazineTearTransition from './components/MagazineTearTransition/MagazineTearTransition';

gsap.registerPlugin(ScrollTrigger);
import Hero from './components/Hero/Hero';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Proj';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function CustomCursor() {
// ... (keeping CustomCursor unchanged)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorText(target.dataset.cursor || 'VIEW');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={isHovering ? 'hovering' : ''}
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    >
      {isHovering && <span className="text-[8px] tracking-widest">{cursorText}</span>}
    </div>
  );
}

function App() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger for perfectly smooth scrubbing
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);


  return (
    <>
      <CustomCursor />
  
      <div id="smooth-wrapper" className="relative">
        <MagazineTearTransition />
        
        <div id="smooth-content">
          <main  className="relative z-0">
            <Hero />
            <Achievements />
            <Services />
            <Projects />
          </main>
          
         
        </div>
      </div>
    </>
  );
}

export default App;