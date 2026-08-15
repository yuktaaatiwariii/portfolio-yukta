import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Personality from './components/Personality/Personality';
import Achievements from './components/Achievements/Achievements';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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

function LoadingScreen({ onComplete }) {
// ... (keeping LoadingScreen unchanged)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian text-silver"
    >
      <h1 className="font-serif text-4xl md:text-6xl text-ivory tracking-wider mb-4">
        YUKTA TIWARI
      </h1>
      <p className="font-mono text-xs md:text-sm tracking-widest text-silver/60 uppercase mb-12">
        Initializing Digital Space...
      </p>
      <div className="font-mono text-2xl">
        {Math.min(progress, 100).toString().padStart(2, '0')}
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <>
          <CustomCursor />
      
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>
                <Hero />
                <About />
                <Personality />
                <Achievements />
                <TechStack />
                <Projects />
                <Contact />
                <Footer />
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
