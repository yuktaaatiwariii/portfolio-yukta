import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: '01', title: 'HOME', href: '#home' },
  { id: '02', title: 'ABOUT', href: '#about' },
  { id: '03', title: 'STACK', href: '#stack' },
  { id: '04', title: 'PROJECTS', href: '#projects' },
  { id: '05', title: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Desktop Navigation Elements */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 pointer-events-none mix-blend-difference text-silver">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <a href="#home" data-cursor="HOME" className="font-serif text-lg tracking-widest hover:text-ivory transition-colors">
            YUKTA / 01
          </a>
          <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-glow uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse"></span>
            Online / Available
          </span>
        </div>

        <button 
          onClick={toggleMenu}
          data-cursor="MENU"
          className="pointer-events-auto font-mono text-xs tracking-widest uppercase hover:text-ivory transition-colors flex items-center gap-2"
        >
          {isOpen ? 'CLOSE' : 'INDEX'}
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed h-screen inset-0 z-40 bg-black backdrop-blur-md flex flex-col  justify-center items-center"
          >
            <div className="flex flex-col h-full items-center mt-30 gap-6 md:gap-8 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  data-cursor="OPEN"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group  flex items-baseline gap-4 md:gap-8 hover:ml-4 transition-all duration-300"
                >
                  <span className="font-mono text-sm md:text-base text-silver/50 group-hover:text-cyan-glow transition-colors">
                    {link.id}
                  </span>
                  <span className="font-serif text-6xl text-ivory/80 group-hover:text-ivory transition-colors">
                    {link.title}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 left-10 font-mono text-xs text-silver/40 uppercase tracking-widest"
            >
              Digital Interface // YT-01
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
