import React from 'react';
import { motion } from 'framer-motion';
import model from "../../assets/model.png"

export default function LoadingCover({ isLoaded }) {
  // Staggered animation variants for initial load
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#E5DCC5] text-[#2C2B29] selection:bg-[#A63333] selection:text-[#E5DCC5]">
      
      {/* Paper texture overlay for the cover */}
     <div
        className="absolute inset-0 z-0 bg-cover bg-top object-top bg-no-repeat mix-blend-multiply opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${model})` }}/>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        className="relative w-full h-full max-w-[1400px] mx-auto px-6 py-6 md:px-12 lg:px-16 flex flex-col z-10 border-8 border-transparent"
      >
        
        {/* --- HEADER --- */}
        <motion.div variants={itemVars} className="flex justify-between items-center border-b-[3px] border-[#2C2B29] pb-2 mb-2">
          <span className="font-['Oswald'] text-lg md:text-xl tracking-wide uppercase font-semibold">ISSUE, 2026</span>
          <span className="text-[#A63333] text-2xl md:text-3xl leading-none">✶</span>
          <span className="font-['Oswald'] text-lg md:text-xl tracking-wide uppercase font-semibold">PORTFOLIO</span>
        </motion.div>

        {/* --- MAIN TITLE --- */}
        <motion.div variants={itemVars} className="w-full text-center border-b-[6px] border-[#2C2B29] pb-0 mb-4">
          <h1 className="font-['Anton'] text-[11vw] md:text-[13vw] lg:text-[180px] leading-[0.85] tracking-tight uppercase text-[#2C2B29] transform scale-y-125 origin-bottom mt-4 md:mt-8 mb-2">
            WHAT IF YOU BUILD IT?
          </h1>
        </motion.div>

        {/* --- GRID CONTENT --- */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          
          {/* CENTER IMAGE (Absolute in center for large screens) */}
          <motion.div variants={itemVars} className="md:absolute md:inset-0 md:left-[55%] md:-translate-x-1/2 md:w-[45%] h-[50vh] md:h-full z-20 flex flex-col justify-end items-center mb-6 md:mb-0 pointer-events-none">
             <div className="w-full h-full flex items-end justify-center relative overflow-hidden">
                <img 
                  src="/portrait.png" 
                  alt="Yukta Tiwari" 
                  className="object-cover w-full h-full object-bottom md:object-center transform scale-110 drop-shadow-2xl" 
                />
             </div>
          </motion.div>

          {/* LEFT COLUMN */}
          <div className="md:col-span-3 flex flex-col gap-4 z-30 justify-between h-full">
            
            <motion.div variants={itemVars} className="flex flex-col border-b-2 border-[#2C2B29]/30 pb-3">
              <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#A63333] leading-none mb-1">FULL-STACK<br/>DEVELOPER</h2>
              <p className="font-['Oswald'] text-sm md:text-base font-semibold leading-tight uppercase tracking-wide mb-2">Building digital experiences<br/>from frontend to backend</p>
              <div className="w-full h-[2px] bg-[#A63333] mb-2"></div>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-bold tracking-widest text-justify">CODE. CREATE. DEPLOY. REPEAT.</p>
              <div className="w-full h-[2px] bg-[#A63333] mt-2 mb-2"></div>
              <p className="font-['Playfair_Display'] italic text-sm md:text-base font-bold leading-tight">Turning ideas into<br/>interactive experiences.</p>
            </motion.div>

            <motion.div variants={itemVars} className="flex flex-col border-b-2 border-[#2C2B29]/30 pb-3">
              <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#A63333] tracking-wider mb-1">FRONTEND</h3>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-medium tracking-widest uppercase leading-tight mb-2">HTML / CSS / JAVASCRIPT<br/>REACT / TAILWIND / REDUX</p>
              <p className="font-serif text-[10px] md:text-xs leading-snug">Crafting responsive, accessible and interactive user interfaces that bring ideas to life.</p>
            </motion.div>

            <motion.div variants={itemVars} className="flex flex-col border-b-2 border-[#2C2B29]/30 pb-3">
              <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#A63333] tracking-wider mb-1">BACKEND</h3>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-medium tracking-widest uppercase leading-tight mb-2">NODE.JS / EXPRESS<br/>REST API / GRAPHQL<br/>AUTHENTICATION</p>
              <p className="font-serif text-[10px] md:text-xs leading-snug">Building robust server-side logic, secure APIs and scalable applications that power the web.</p>
            </motion.div>
            
            <motion.div variants={itemVars} className="flex flex-col pb-3">
              <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#A63333] tracking-wider mb-1">DATABASE</h3>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-medium tracking-widest uppercase leading-tight mb-2">MONGODB / MYSQL<br/>DATA MODELING<br/>AGGREGATION</p>
              <p className="font-serif text-[10px] md:text-xs leading-snug">Designing efficient database structures to store, manage and retrieve data seamlessly.</p>
            </motion.div>

            {/* Bottom Left Name Box */}
            <motion.div variants={itemVars} className="mt-auto border-[3px] border-[#A63333] p-3 md:p-4 bg-[#E5DCC5] relative z-30 shadow-lg shadow-black/10">
              <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#A63333] leading-none mb-1">YUKTA TIWARI</h2>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-semibold tracking-widest text-[#2C2B29] border-b border-[#A63333]/50 pb-2 mb-2">FULL-STACK WEB DEVELOPER</p>
              <p className="font-['Oswald'] text-[9px] md:text-[10px] tracking-widest text-[#2C2B29]">BUILDING THE WEB,<br/>ONE IDEA AT A TIME.</p>
            </motion.div>
          </div>

          {/* MIDDLE SPACER FOR GRID ON LARGE SCREENS */}
          <div className="hidden md:block md:col-span-6 pointer-events-none"></div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-3 flex flex-col gap-4 z-30 justify-start h-full pt-8 md:pt-0">
             
             {/* FAKE TEXT BLOCK (Visual Texture) */}
             <motion.div variants={itemVars} className="hidden md:block w-full h-32 opacity-20 border-b border-[#2C2B29]/30 mb-6 overflow-hidden">
                <div className="text-[6px] leading-[8px] text-justify font-serif columns-2 gap-2">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                </div>
             </motion.div>

             <motion.div variants={itemVars} className="flex flex-col border-b-2 border-[#2C2B29]/30 pb-3">
              <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#A63333] tracking-wider mb-1">DEVELOPMENT</h3>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-medium tracking-widest uppercase leading-tight mb-2">GIT / GITHUB<br/>DOCKER / POSTMAN<br/>VS CODE / NPM</p>
              <p className="font-serif text-[10px] md:text-xs leading-snug">Writing clean code, collaborating efficiently and delivering production ready solutions.</p>
            </motion.div>

            <motion.div variants={itemVars} className="flex flex-col border-b-2 border-[#2C2B29]/30 pb-3">
              <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#A63333] tracking-wider mb-1">DEPLOYMENT</h3>
              <p className="font-['Oswald'] text-[10px] md:text-xs font-medium tracking-widest uppercase leading-tight mb-2">VPS / RENDER / NETLIFY<br/>CI / CD / MONITORING<br/>PERFORMANCE</p>
              <p className="font-serif text-[10px] md:text-xs leading-snug">Deploying with confidence, monitoring performance and ensuring smooth user experiences.</p>
            </motion.div>

            <motion.div variants={itemVars} className="flex flex-col mt-auto pt-8">
              <h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-[#A63333] tracking-wider mb-3">TECH STACK</h3>
              <ul className="font-['Oswald'] text-xs md:text-sm font-semibold tracking-widest leading-loose uppercase flex flex-col gap-0.5">
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>NODE.JS</li>
                <li>EXPRESS</li>
                <li>MONGODB</li>
                <li>TAILWIND CSS</li>
                <li>GIT & GITHUB</li>
                <li>REST API</li>
                <li>JWT / AUTH</li>
                <li>AWS / CLOUD</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
