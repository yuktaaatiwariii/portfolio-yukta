import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 text-white flex flex-col justify-between overflow-hidden pt-24"
      id="contact"
    >
      {/* Background dramatic effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-zinc-400 uppercase tracking-[0.3em] text-sm font-medium mb-6"
          >
            Got a project in mind?
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12"
          >
            LET'S <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-600">
              CREATE
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a 
              href="mailto:hello@example.com" 
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-zinc-300 transition-colors"
              data-cursor="MAIL"
            >
              yuktatiwari0@gmail.com
              <span className="p-4 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
