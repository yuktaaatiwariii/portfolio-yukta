import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Fullstack Development",
    desc: "Building scalable and performant web applications with modern technologies from front to back."
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Crafting intuitive, aesthetically pleasing, and user-centric interfaces that engage and convert."
  },
  {
    num: "03",
    title: "Social Media Manager/Branding",
    desc: "Strategizing and managing digital presence to build brand identity and grow audiences."
  },
  {
    num: "04",
    title: "Deployement & SEO",
    desc: "Developing and deploying voices that resonate with the target market."
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 w-full bg-burgundy text-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-4">What I Do</h2>
            <div className="h-[1px] w-24 bg-electric-blue"></div>
          </div>
          <p className="font-mono text-sm md:text-base text-silver/70 max-w-sm mt-8 md:mt-0 text-right">
            Delivering end-to-end digital experiences, from initial concept and design to robust development and branding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between items-start hover:bg-white/10 hover:border-electric-blue hover:-translate-y-2 transition-all duration-500 cursor-none shadow-xl"
              data-cursor="EXPLORE"
            >
              <div className="flex flex-col items-start gap-4 w-full mb-8">
                <span className="font-mono text-xl md:text-2xl text-silver/50 group-hover:text-electric-blue transition-colors duration-500">
                  {service.num}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              
              <div className="w-full">
                <p className="font-sans text-silver/80 text-sm md:text-base leading-relaxed group-hover:text-ivory transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large text background */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [100, -300]) }}
        className="absolute top-1/4 left-0 opacity-[0.03] pointer-events-none whitespace-nowrap"
      >
        <span className="font-serif text-[25vw] leading-none">EXPERTISE</span>
      </motion.div>
    </section>
  );
}
