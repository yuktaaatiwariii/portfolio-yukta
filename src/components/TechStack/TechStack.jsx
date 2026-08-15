import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import TechCube from '../3d/TechCube';

const categories = {
  DEVELOPMENT: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  PROGRAMMING: ['C', 'C++', 'Java OOP', 'JavaScript'],
  DESIGN: ['Figma', 'Canva', 'UI/UX', 'Responsive Design'],
  TOOLS: ['GitHub', 'Postman', 'Mailtrap'],
  OTHER: ['REST APIs', 'Authentication', 'JWT', 'Deployment', 'Backend']
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="stack" className="relative min-h-screen w-full bg-obsidian text-silver py-20 md:py-32 overflow-hidden border-t border-white/10">
      
      <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto opacity-30 md:opacity-100">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#6DE7FF" />
          <Suspense fallback={null}>
            <TechCube activeCategory={activeCategory} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 h-full flex flex-col justify-between">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-0"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-ivory tracking-tighter uppercase">
            THE DIGITAL<br />TOOLKIT
          </h2>
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow mt-4 uppercase">
            System Infrastructure //
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-20 md:mt-32">
          
          <div className="flex flex-col gap-6 md:w-1/3">
            {Object.keys(categories).map((cat) => (
              <motion.button
                key={cat}
                onHoverStart={() => setActiveCategory(cat)}
                onHoverEnd={() => setActiveCategory(null)}
                className={`text-left font-mono text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat ? 'text-cyan-glow pl-4 border-l border-cyan-glow' : 'text-silver/60 hover:text-ivory pl-0 border-l border-transparent'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="md:w-1/2 min-h-[150px]">
            <AnimatePresence mode="wait">
              {activeCategory ? (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-wrap gap-3"
                >
                  {categories[activeCategory].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 border border-white/10 rounded-full font-sans text-sm text-ivory bg-white/5 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-mono text-xs text-silver/40 tracking-widest uppercase"
                >
                  Hover over a category to initialize scan...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
