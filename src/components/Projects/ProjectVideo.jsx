import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import ProjectInfo from './ProjectInfo';

export default function ProjectVideo({ project, position, isHovered, setHovered }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (position === 'main') {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [position]);

  const variants = {
    main: {
      scale: isHovered && position === 'main' ? 1.03 : 1,
      opacity: 1,
      zIndex: 10,
      filter: isHovered && position === 'main' ? 'brightness(1.1)' : 'brightness(1)',
    },
    left: {
      scale: 0.8,
      opacity: 1,
      zIndex: 5,
      filter: 'brightness(0.9)',
    },
    right: {
      scale: 0.8,
      opacity: 1,
      zIndex: 5,
      filter: 'brightness(0.9)',
    },
    'far-left': {
      scale: 0.6,
      opacity: 1,
      zIndex: 0,
      filter: 'brightness(0.8)',
    },
    'far-right': {
      scale: 0.6,
      opacity: 1,
      zIndex: 0,
      filter: 'brightness(0.8)',
    },
    hidden: {
      scale: 0.4,
      opacity: 0,
      zIndex: -10,
    }
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial={position}
      animate={position}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "absolute cursor-pointer w-full",
        position === 'main' ? "w-full max-w-[90vw] md:max-w-[50vw] h-[40vh] md:h-[55vh] top-0 md:top-[10%]" : "",
        position === 'left' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[50vh] -left-[10%] md:-left-[1%] top-[50vh] md:top-[18%]" : "",
        position === 'right' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[50vh] -right-[10%] md:-right-[1%] top-[80vh] md:top-[18%]" : "",
        position === 'far-left' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] -left-[15%] md:-left-[12%] top-[60vh] md:top-[28%]" : "",
        position === 'far-right' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] -right-[15%] md:-right-[12%] top-[60vh] md:top-[28%]" : "",
        position === 'hidden' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] left-1/2 -translate-x-1/2 top-1/2" : ""
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tablet Device Wrapper */}
      <div className="w-full h-full bg-[#07090b] p-2 md:p-4 flex flex-col items-center justify-between shadow-2xl border border-gray-300 rounded-[1.5rem] md:rounded-[2.5rem] relative z-10">
        {/* Top camera dot */}
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-800 mb-1.5 md:mb-2.5 shadow-inner"></div>

        {/* Screen container */}
        <div className="w-full h-full relative rounded-md md:rounded-[1rem] overflow-hidden bg-[#0a0a0a] border border-gray-400/50 shadow-inner">
          
          {/* Polished Glass Reflection for all screens */}
          <div className="absolute top-0 right-0 w-[150%] h-[60%] bg-gradient-to-b from-white/20 via-white/5 to-transparent -rotate-[25deg] translate-x-1/4 -translate-y-[10%] pointer-events-none z-30 mix-blend-overlay"></div>

          <div className="absolute inset-0 bg-espresso/20 z-10 pointer-events-none transition-opacity duration-300" style={{ opacity: isHovered && position === 'main' ? 0 : 1 }} />
          
          {position === 'main' && (
            <video
              ref={videoRef}
              src={project.video}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          <ProjectInfo project={project} isHovered={isHovered} position={position} />
        </div>
      </div>
    </motion.div>
  );
}
