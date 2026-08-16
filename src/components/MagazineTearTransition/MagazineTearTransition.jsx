import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import LoadingCover from '../LoadingCover/LoadingCover';

export default function MagazineTearTransition() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const leftX = useTransform(smoothProgress, [0, 0.5, 1], ["0vw", "-15vw", "-60vw"]);
  const rightX = useTransform(smoothProgress, [0, 0.5, 1], ["0vw", "15vw", "60vw"]);
  
  const leftRotate = useTransform(smoothProgress, [0, 1], [0, -8]);
  const rightRotate = useTransform(smoothProgress, [0, 1], [0, 8]);

  const leftY = useTransform(smoothProgress, [0, 0.5, 1], ["0vh", "10vh", "40vh"]);
  const rightY = useTransform(smoothProgress, [0, 0.5, 1], ["0vh", "-10vh", "-40vh"]);

  const paperOpacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);
  
  // Hide the entire transition container visually once it's fully scrolled
  // so it doesn't intercept clicks
  const pointerEvents = useTransform(smoothProgress, (p) => p >= 0.99 ? "none" : "auto");

  // Diagonal jagged tear from top-right (85% 0%) to bottom-left (15% 100%)
  const leftClip = "polygon(0% 0%, 85% 0%, 83% 4%, 85% 8%, 79% 12%, 80% 16%, 73% 21%, 74% 25%, 68% 30%, 69% 34%, 62% 40%, 64% 45%, 57% 50%, 58% 54%, 52% 60%, 53% 64%, 46% 70%, 47% 75%, 41% 80%, 42% 84%, 35% 89%, 36% 93%, 30% 97%, 28% 100%, 0% 100%)";
  const rightClip = "polygon(100% 0%, 85% 0%, 83% 4%, 85% 8%, 79% 12%, 80% 16%, 73% 21%, 74% 25%, 68% 30%, 69% 34%, 62% 40%, 64% 45%, 57% 50%, 58% 54%, 52% 60%, 53% 64%, 46% 70%, 47% 75%, 41% 80%, 42% 84%, 35% 89%, 36% 93%, 30% 97%, 28% 100%, 100% 100%)";

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-[220vh] z-50 bg-transparent"
      style={{ pointerEvents }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-transparent">
        
        {/* LAYER 2: MAGAZINE COVER - LEFT HALF */}
        <motion.div
          className="absolute inset-0 z-20 origin-bottom-left will-change-transform drop-shadow-2xl"
          style={{
            clipPath: leftClip,
            x: leftX,
            y: leftY,
            rotateZ: leftRotate,
            opacity: paperOpacity,
          }}
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
            scale: isLoaded ? 1 : 1.05
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 bottom-0 left-[48%] right-0 bg-gradient-to-r from-transparent to-black/30 z-[50] pointer-events-none" 
               style={{ clipPath: leftClip, transform: 'translateX(2px)' }} />
          
          <LoadingCover isLoaded={isLoaded} />
        </motion.div>

        {/* LAYER 3: MAGAZINE COVER - RIGHT HALF */}
        <motion.div
          className="absolute inset-0 z-20 origin-bottom-right will-change-transform drop-shadow-2xl"
          style={{
            clipPath: rightClip,
            x: rightX,
            y: rightY,
            rotateZ: rightRotate,
            opacity: paperOpacity,
          }}
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
            scale: isLoaded ? 1 : 1.05
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-[48%] bg-gradient-to-l from-transparent to-black/30 z-[50] pointer-events-none" 
               style={{ clipPath: rightClip, transform: 'translateX(-2px)' }} />

          <LoadingCover isLoaded={isLoaded} />
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-espresso font-bold bg-[#EFE3D7]/80 px-2 py-1 rounded backdrop-blur">Scroll to Open</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-espresso"
          />
        </motion.div>

      </div>
    </motion.div>
  );
}
