import React from 'react';
import { motion } from 'framer-motion';

export default function Achievements() {
  return (
    <section className="py-32 w-full bg-champagne text-espresso relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full text-center">
        <span className="font-serif text-[30vw] leading-none whitespace-nowrap overflow-hidden block">
          MERIT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:items-start items-center"
          >
            <h3 className="font-serif text-6xl md:text-8xl tracking-tighter mb-2">9.4</h3>
            <div className="h-[1px] w-12 bg-burgundy mb-4"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-espresso/60">
              CGPA Maintained
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col md:items-start items-center"
          >
            <h3 className="font-serif text-6xl md:text-8xl tracking-tighter mb-2">01</h3>
            <div className="h-[1px] w-12 bg-burgundy mb-4"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-espresso/60">
              Rank in IT Dept.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:items-start items-center"
          >
            <h3 className="font-serif text-6xl md:text-8xl tracking-tighter mb-2">4+</h3>
            <div className="h-[1px] w-12 bg-burgundy mb-4"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-espresso/60">
              Years Learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:items-start items-center"
          >
            <h3 className="font-serif text-6xl md:text-8xl tracking-tighter mb-2">∞</h3>
            <div className="h-[1px] w-12 bg-burgundy mb-4"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-espresso/60">
              Curiosity
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
