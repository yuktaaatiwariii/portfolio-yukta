import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mona1 from "../../assets/mona.png";
import Navigation from '../Navigation/Navigation';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Subtle parallax effects
  const yImage = useTransform(scrollY, [0, 1000], [0, 0]);
  const yTextSolid = useTransform(scrollY, [0, 1000], [0, -100]);
  const yTextStroke = useTransform(scrollY, [0, 1000], [0, 0]);
  const yTitle = useTransform(scrollY, [0, 0], [0, -20]);


  // Letter array for vertical typography
  const letters = ['Y', 'U', 'K', 'T', 'A'];

  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const updateAnim = () => {
      if (scrollY.get() > window.innerHeight * 0.4 && !startAnim) {
        setStartAnim(true);
      }
    };
    
    // Check initially in case page is refreshed halfway down
    updateAnim();
    
    const unsubscribe = scrollY.on("change", updateAnim);
    return () => unsubscribe();
  }, [scrollY, startAnim]);

  // Staggered animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1]} }
  };

  const letterVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };


  return (
    <section 
      id="hero-editorial" 
      className="relative   w-full h-screen z-50 flex items-center justify-center"
      style={{ backgroundColor: '#EFE3D7' }}
    >
      <Navigation />
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate={startAnim ? "show" : "hidden"}
        className="relative w-full h-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row"
      >
         
        {/* --- TOP METADATA LABELS --- */}
        <motion.div variants={itemVars} className="absolute  top-25 left-6 md:left-4 lg:left-24 z-40 flex items-center gap-2 text-espresso">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">Creative Technologist</span>
          <div className="w-12 h-px bg-espresso/50 hidden sm:block"></div>
        </motion.div>

        <motion.div variants={itemVars} className="absolute bottom-28 right-6 md:right-12 lg:right-24 z-40 text-right text-espresso">
          <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold leading-relaxed">
            BUILDING<br/>
            DIGITAL<br/>
            EXPERIENCES
          </p>
        </motion.div>


        {/* --- ASYMMETRICAL EDITORIAL GRID --- */}
        <div className="relative  w-full h-full flex flex-col md:flex-row ">
          
          {/* LEFT SIDE: Intro & Typography */}
          <div className="w-full md:w-[55%] flex flex-col justify-center relative z-40 md:pt-20">
            
            <motion.div variants={itemVars} >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-espresso tracking-tighter leading-[0.9] mb-8">
                FULL-STACK<br />
                <span className="italic text-espresso/80">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVars} className="max-w-full  lg:max-w-[600px]">
              <p className="font-sans text-[15px] md:text-[15px] text-espresso/60 leading-[1.6] mb-6">
                An Information Technology student who enjoys turning ideas into thoughtful digital experiences — combining full-stack development, modern frontend engineering and UI/UX design.
              </p>
              <p className="font-sans text-[15px] md:text-[15px] text-espresso/60 leading-[1.6] mb-10">
                Currently exploring modern interfaces, backend systems and the space where technology meets creativity.
              </p>
              
              {/* Signature / Name */}
              <div className="mb-4">
                <span className="font-serif italic text-3xl md:text-4xl text-espresso">Yukta Tiwari</span>
              </div>

            

              {/* Academic & Location Metadata */}
              <div className="flex gap-10 items-start pt-6 border-t border-espresso/20">
                {/* Professional Label */}
              <div className="flex flex-col gap-1 mb-8">
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-espresso font-semibold">FULL-STACK DEVELOPER</span>
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-espresso/60">/ UI/UX DESIGNER</span>
              </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-espresso font-semibold">GREATER NOIDA, IN</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-espresso/60">B.TECH 2024—2028</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* RIGHT SIDE: Portrait & Typography Overlap */}
          <div className="w-full relative flex items-center justify-end h-full ">
            
            {/* PORTRAIT IMAGE (Hierarchy: Middle Layer) */}
            <motion.div 
              variants={itemVars}
              style={{ y: yImage }}
              className="absolute h-full  bg-amber-900 right-36 w-full md:w-[65%]  z-20 flex justify-end  "
            >
              <img 
                src={mona1} 
                alt="Yukta Tiwari"
                className="h-full shadow-3xl"
              />
            </motion.div>

            {/* GIANT VERTICAL TYPOGRAPHY (Hierarchy: Top Layer) */}
            <motion.div 
              style={{ y: yTextStroke }}
              className="absolute  left-[5%] md:left-[7%] flex flex-col items-center z-30 select-none "
            >
              {letters.map((letter, index) => (
                <motion.span 
                  key={`giant-${index}`} 
                  variants={letterVars}
                  className="font-serif font-extrabold text-[19vw] md:text-[21vw] lg:text-[14vw] leading-[0.75] tracking-tighter mix-blend-overlay"
                  style={{ 
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)', 
                    color: 'transparent',
                    textShadow: '0px 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* VERTICAL RIGHT TEXT LABEL */}
            <motion.div 
              variants={itemVars}
              className="absolute translate-x-1/2 top-0  right-20 rotate-90  z-40 hidden md:block"
            >
              <span className="font-sans font-bold text-[12vw] md:text-[10vw] uppercase text-espresso/20 tracking-tighter leading-none select-none">
                DEVELOPER
              </span>
            </motion.div>

          </div>
        </div>

        {/* --- BOTTOM COLLAGE --- */}
        <motion.div 
          variants={itemVars}
          className="absolute bottom-10 md:bottom-20 left-[50%] md:left-[45%] lg:left-[35%] z-40 flex items-center justify-center w-[150px] h-[150px] hidden sm:flex"
        >
          <div className="relative w-full h-full">
            {/* Collage Item 1 */}
            <div className="absolute border top-0 left-0 w-24 h-30 bg-espresso/10 backdrop-blur-sm  border-espresso/20 p-1 -rotate-6 shadow-xl">
              <div className="w-full h-full bg-espresso flex items-center justify-center overflow-hidden">
                <div className="font-mono text-[11px] text-ivory/50 leading-tight ">
                  {"<Code />"}<br/>{"function() {"}<br/>{"  build();"}<br/>{"}"}
                </div>
              </div>
            </div>
            {/* Collage Item 2 */}
            <div className="absolute top-6 left-12 w-28 h-20 bg-espresso/5 backdrop-blur-sm border border-espresso/20 p-1 rotate-3 shadow-xl z-10">
              <div className="w-full h-full bg-[#EFE3D7] border border-espresso/10 flex items-center justify-center">
                <span className="font-serif italic text-espresso/40 text-xs">design</span>
              </div>
            </div>
            {/* Collage Item 3 */}
            <div className="absolute top-16 left-4 w-18 h-18 bg-ivory/80 backdrop-blur-sm border border-espresso/20 p-1 -rotate-2 shadow-xl z-20">
              <div className="w-full h-full border border-espresso/20 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-espresso/40"></span>
              </div>
            </div>
          </div>
        </motion.div>

       
     

      </motion.div>
    </section>
  );
}
