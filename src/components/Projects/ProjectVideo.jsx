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
      opacity: 0.6,
      zIndex: 5,
      filter: 'brightness(0.7)',
    },
    right: {
      scale: 0.8,
      opacity: 0.6,
      zIndex: 5,
      filter: 'brightness(0.7)',
    },
    'far-left': {
      scale: 0.6,
      opacity: 0.3,
      zIndex: 0,
      filter: 'brightness(0.4)',
    },
    'far-right': {
      scale: 0.6,
      opacity: 0.3,
      zIndex: 0,
      filter: 'brightness(0.4)',
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
        "absolute rounded-lg overflow-hidden cursor-pointer",
        position === 'main' ? "w-full max-w-[90vw] md:max-w-[50vw] h-[40vh] md:h-[55vh] top-0 md:top-[10%]" : "",
        position === 'left' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] -left-[10%] md:-left-[5%] top-[50vh] md:top-[25%]" : "",
        position === 'right' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] -right-[10%] md:-right-[5%] top-[80vh] md:top-[25%]" : "",
        position === 'far-left' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] -left-[15%] md:-left-[25%] top-[60vh] md:top-[35%]" : "",
        position === 'far-right' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] -right-[15%] md:-right-[25%] top-[90vh] md:top-[35%]" : "",
        position === 'hidden' ? "w-[70vw] md:w-[30vw] h-[25vh] md:h-[40vh] left-1/2 -translate-x-1/2 top-1/2" : ""
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-espresso/20 z-10 pointer-events-none transition-opacity duration-300" style={{ opacity: isHovered && position === 'main' ? 0 : 1 }} />
      
      <video
        ref={videoRef}
        src={project.video}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      <ProjectInfo project={project} isHovered={isHovered} position={position} />
    </motion.div>
  );
}
