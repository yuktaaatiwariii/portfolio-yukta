import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectNavigation({ total, current, onNext, onPrev, progress }) {
  // Format numbers to have leading zero
  const formatNum = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-30">
      
      {/* Controls */}
      <div className="flex items-center gap-12 font-mono text-xs tracking-widest text-espresso uppercase">
        <button 
          onClick={onPrev}
          className="hover:text-burgundy transition-colors hover:-translate-x-1 transform duration-300"
          aria-label="Previous project"
        >
          ← Prev
        </button>
        
        <div className="flex items-center gap-2">
          <motion.span 
            key={current}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-sm font-bold"
          >
            {formatNum(current + 1)}
          </motion.span>
          <span className="opacity-40">/ {formatNum(total)}</span>
        </div>

        <button 
          onClick={onNext}
          className="hover:text-burgundy transition-colors hover:translate-x-1 transform duration-300"
          aria-label="Next project"
        >
          Next →
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-48 md:w-64 h-[2px] bg-espresso/10 relative overflow-hidden rounded-full">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-espresso"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

    </div>
  );
}
