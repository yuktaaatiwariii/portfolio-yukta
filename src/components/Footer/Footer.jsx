import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian text-silver py-12 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col items-center">
        
        <h2 className="font-serif text-[20vw] leading-none text-ivory/5 select-none text-center mix-blend-overlay">
          YUKTA
        </h2>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-12 text-center md:text-left">
          
          <div className="font-mono text-xs text-silver/40 tracking-widest uppercase flex flex-col gap-1">
            <span>Building Digital Experiences</span>
            <span>One Idea at a Time.</span>
          </div>

          <div className="font-mono text-xs text-silver/60 tracking-widest uppercase">
            © 2026 YUKTA TIWARI
          </div>

          <div className="font-mono text-[10px] text-cyan-glow tracking-[0.2em] uppercase">
            Designed with Curiosity + Code
          </div>

        </div>

      </div>
    </footer>
  );
}
