import React from 'react';
import { motion } from 'framer-motion';

const techLogos = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg' },
  { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Postman', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
];

export default function About() {
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section id="about" className="relative h-auto w-full bg-ivory text-espresso pt-40 pb-20 overflow-hidden">
      <style>
        {`
          @keyframes infinite-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-marquee {
            animation: infinite-marquee 35s linear infinite;
          }
          .pause-marquee:hover .animate-infinite-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="w-full relative z-10 flex flex-col items-center justify-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-sans font-bold text-4xl md:text-6xl mt-3 tracking-[0.2em] text-espresso/80 uppercase">
            TECH STACK
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="pause-marquee w-full py-6 overflow-hidden relative flex flex-col justify-center">
        {/* Overlay Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none"></div>

        <div className="animate-infinite-marquee flex gap-16 md:gap-24 w-max items-center">
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] group cursor-pointer">
              <div className="w-16 h-16 md:w-30 md:h-30 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-6 font-mono text-xs uppercase tracking-widest text-espresso/80 group-hover:text-burgundy transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
