import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "AUTHENTICATION SYSTEM",
    desc: "A full-stack authentication system built using the MERN stack.",
    features: ["User Registration", "Login/Logout", "Protected Routes", "JWT"],
    tags: ["MERN", "JWT", "MongoDB", "Express", "React", "Node.js"],
    accent: "text-cyan-glow",
    borderAccent: "border-cyan-glow",
    bgStyle: "from-cyan-glow/10 to-transparent"
  },
  {
    id: "02",
    title: "FILE STORAGE BACKEND",
    desc: "A futuristic digital archive backend system with RESTful APIs.",
    features: ["File Validation", "Size Limits", "Metadata Management", "Local Storage"],
    tags: ["Node.js", "Express", "REST APIs", "Multer"],
    accent: "text-silver",
    borderAccent: "border-silver",
    bgStyle: "from-silver/10 to-transparent"
  },
  {
    id: "03",
    title: "OCHI WEBSITE CLONE",
    desc: "A high-fidelity UI clone inspired by the Awwwards-winning Ochi website.",
    features: ["Typography Focus", "Responsive Layout", "Smooth Interactions", "Visual Consistency"],
    tags: ["React", "Vite", "Tailwind CSS"],
    accent: "text-ivory",
    borderAccent: "border-ivory",
    bgStyle: "from-ivory/10 to-transparent"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 w-full bg-obsidian text-silver border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-ivory">
            SELECTED<br />WORK
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <div key={project.id} className="relative min-h-screen w-full flex items-center border-t border-white/10 overflow-hidden group">
            
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.bgStyle} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
            
            <div className="max-w-7xl mx-auto w-full px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative z-10 py-20">
              
              {/* Left Details */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-5 flex flex-col justify-center"
              >
                <span className={`font-mono text-xs tracking-[0.2em] uppercase ${project.accent} mb-4 block`}>
                  Project // {project.id}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-ivory tracking-tight mb-6 leading-none">
                  {project.title}
                </h3>
                <p className="font-sans text-silver/80 text-lg mb-8 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] tracking-widest uppercase border border-white/20 rounded-full px-3 py-1 text-silver/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="flex flex-col gap-3 font-mono text-xs text-silver/50 tracking-widest uppercase">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${project.accent}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Abstract Visual representation instead of a plain card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="md:col-span-7 h-[400px] md:h-[600px] relative border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-500 overflow-hidden flex items-center justify-center"
              >
                {/* Abstract geometric placeholders for the projects */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <div className={`w-[80%] h-[80%] border-2 ${project.borderAccent} rounded-full absolute mix-blend-overlay animate-spin-slow`}></div>
                  <div className={`w-[60%] h-[60%] border border-white/20 rounded-sm absolute rotate-45 group-hover:rotate-90 transition-transform duration-1000`}></div>
                </div>
                
                <div className="font-mono text-sm tracking-widest uppercase text-silver/40">
                  [ Visual Interface Offline ]
                  <br />
                  <span className="text-[10px] block mt-2 opacity-50 text-center">Await actual deployment screenshots</span>
                </div>
              </motion.div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
