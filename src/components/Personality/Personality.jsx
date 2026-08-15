import React from 'react';
import { motion } from 'framer-motion';

const traits = [
  { title: "CURIOUS", desc: "Always questioning how things work beneath the surface." },
  { title: "ADAPTABLE", desc: "Quick to learn and pivot in fast-paced tech environments." },
  { title: "EMPATHETIC", desc: "High emotional intelligence, making team communication seamless." },
  { title: "ORGANIZED", desc: "Task prioritization and structured thinking in every project." }
];

export default function Personality() {
  return (
    <section className="py-24 md:py-32 w-full bg-ivory text-espresso border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left: Section Title */}
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-mono text-sm tracking-[0.2em] uppercase text-burgundy mb-6">
                Psychometrics
              </h3>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight">
                THE WAY<br />
                <span className="italic text-espresso/60">I THINK</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="hidden md:block w-32 h-32 border border-espresso/20 rounded-full flex items-center justify-center p-4 mt-12 relative"
            >
              <div className="absolute inset-2 border border-burgundy/30 rounded-full animate-spin-slow"></div>
              <p className="font-mono text-[10px] uppercase text-center tracking-widest text-espresso/60">
                Continuous<br/>Improvement
              </p>
            </motion.div>
          </div>

          {/* Right: Traits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
            {traits.map((trait, index) => (
              <motion.div 
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="flex flex-col gap-4 group"
              >
                <div className="h-[1px] w-full bg-espresso/20 group-hover:bg-burgundy transition-colors duration-500 relative">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-burgundy group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                <h4 className="font-sans text-xl font-medium tracking-tight mt-2">
                  {trait.title}
                </h4>
                <p className="font-serif text-base text-espresso/70 italic leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
