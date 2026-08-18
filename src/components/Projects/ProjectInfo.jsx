import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectInfo({ project, isHovered, position }) {
  if (position !== 'main') return null;

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent pointer-events-none"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h3 className="text-ivory font-serif text-4xl md:text-5xl uppercase tracking-tight leading-none mb-2">
              {project.title}
            </h3>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex items-center gap-3 font-mono text-xs text-ivory/80 uppercase tracking-widest mb-4"
          >
            <span>{project.category}</span>
            <span className="w-1 h-1 bg-ivory/50 rounded-full" />
            <span>{project.year}</span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-ivory/90 text-sm md:text-base max-w-lg mb-6"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="px-3 py-1 rounded-full border border-ivory/20 bg-ivory/10 backdrop-blur-sm text-ivory font-mono text-xs uppercase"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-ivory text-espresso font-mono text-xs tracking-widest uppercase rounded-full pointer-events-auto hover:bg-ivory/90 transition-colors"
          >
            View Project →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
