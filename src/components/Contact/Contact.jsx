import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Briefcase, MapPin, Phone } from 'lucide-react';

export default function Contact() {
// ... (keeping Contact unchanged)
  return (
    <section id="contact" className="relative py-32 w-full bg-obsidian text-silver overflow-hidden">
      
      {/* Background Abstract Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mono text-sm tracking-[0.2em] uppercase text-cyan-glow mb-6">
              Have an idea?
            </h2>
            <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter text-ivory leading-[0.9]">
              LET'S BUILD<br />
              <span className="italic text-silver/60">SOMETHING</span><br />
              WORTH<br />
              REMEMBERING.
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-t border-white/10 pt-16">
          
          {/* Identity Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            <h4 className="font-serif text-3xl text-ivory">YUKTA TIWARI</h4>
            <div className="flex flex-col gap-1 font-mono text-xs text-silver/60 uppercase tracking-widest mt-2">
              <span>Full-Stack Developer</span>
              <span>UI/UX Designer</span>
              <span>Creative Technologist</span>
            </div>
            
            <div className="mt-8 flex flex-col gap-4 font-sans text-sm text-silver/80">
              <a href="mailto:yuktatiwari0@gmail.com" data-cursor="EMAIL" className="flex items-center gap-3 hover:text-cyan-glow transition-colors w-fit">
                <Mail size={16} /> yuktatiwari0@gmail.com
              </a>
              <span className="flex items-center gap-3">
                <Phone size={16} /> +91-9053176121
              </span>
              <span className="flex items-center gap-3">
                <MapPin size={16} /> Greater Noida, UP, India
              </span>
            </div>
          </motion.div>

          {/* Socials / Communication Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-7 flex flex-col items-start md:items-end justify-between"
          >
            <div className="w-full max-w-md p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-50"></div>
              <h5 className="font-mono text-xs uppercase tracking-widest text-silver/40 mb-8 border-b border-white/10 pb-4">
                Communication Terminal
              </h5>
              <div className="flex flex-col gap-4">
                <a href="#" data-cursor="OPEN" className="flex justify-between items-center font-sans text-lg text-ivory group/link hover:text-cyan-glow transition-colors">
                  <span>GitHub</span>
                  <Terminal size={18} className="opacity-50 group-hover/link:opacity-100" />
                </a>
                <div className="h-[1px] w-full bg-white/5"></div>
                <a href="#" data-cursor="OPEN" className="flex justify-between items-center font-sans text-lg text-ivory group/link hover:text-cyan-glow transition-colors">
                  <span>LinkedIn</span>
                  <Briefcase size={18} className="opacity-50 group-hover/link:opacity-100" />
                </a>
                <div className="h-[1px] w-full bg-white/5"></div>
                <a href="mailto:yuktatiwari0@gmail.com" data-cursor="SEND" className="flex justify-between items-center font-sans text-lg text-ivory group/link hover:text-cyan-glow transition-colors">
                  <span>Send Email</span>
                  <Mail size={18} className="opacity-50 group-hover/link:opacity-100" />
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
