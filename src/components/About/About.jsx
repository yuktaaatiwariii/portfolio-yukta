import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full bg-ivory text-espresso py-20 md:py-32 overflow-hidden border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative">
        
        {/* Large Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-16 md:mb-32"
        >
          <h2 className="font-serif text-5xl md:text-[8vw] leading-[0.9] tracking-tight">
            THE HUMAN<br />
            <span className="text-burgundy italic pr-4">BEHIND</span><br />
            THE CODE.
          </h2>
        </motion.div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Left Column: Typography/Labels */}
          <div className="md:col-span-3 flex flex-col gap-8 font-mono text-xs tracking-widest uppercase text-espresso/60 pt-4 border-t border-espresso/20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-burgundy mb-2">01 — Core Identity</span>
              <ul className="flex flex-col gap-2">
                <li>Full-Stack Web Dev</li>
                <li>UI/UX Designer</li>
                <li>Problem Solver</li>
                <li>Creative Thinker</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block text-burgundy mb-2">02 — Education</span>
              <p>B.Tech IT (2024–2028)</p>
              <p>Gautam Buddha Univ.</p>
              <p>CGPA: 9.4 (Rank 1)</p>
            </motion.div>
          </div>

          {/* Center Column: Portrait (Placeholder) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] bg-champagne relative overflow-hidden border border-espresso/10">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                alt="Yukta Tiwari"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent"></div>
            </div>
            {/* Abstract Decorative Frame Element */}
            <div className="absolute -inset-4 border border-espresso/20 -z-10 transform translate-x-4 translate-y-4"></div>
          </motion.div>

          {/* Right Column: Bio Paragraphs */}
          <div className="md:col-span-4 flex flex-col gap-8 font-sans text-lg leading-relaxed text-espresso/80 pt-4 border-t border-espresso/20 md:border-none md:pt-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I am a B.Tech Information Technology student at Gautam Buddha University with a deep-rooted passion for building full-stack systems and creating seamless user experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              My approach merges engineering rigor with visual design. I believe that powerful technology should be paired with intuitive, elegant interfaces. Currently, I am focused on the MERN stack and modern frontend architecture.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-serif italic text-2xl text-burgundy mt-4"
            >
              "Driven by a strong learning mindset and the desire to solve complex problems thoughtfully."
            </motion.p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
