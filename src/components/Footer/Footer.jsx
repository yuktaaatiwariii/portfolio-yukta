import React from 'react';
import { motion } from 'framer-motion';
import cvFile from '../../assets/Yukta_Tiwari_Resume.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/yuktaaatiwariii', target: "_blank" },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yukta-tiwari-017928319/', target: "_blank" },
    { name: 'CV', url: cvFile, download: true },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 md:px-12 border-t border-zinc-900 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold text-white tracking-tighter">YUKTA</span>
            <span className="text-sm">© {currentYear} All rights reserved.</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.target || undefined}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                download={link.download ? "Yukta_Tiwari_Resume.pdf" : undefined}
                className="text-sm hover:text-white transition-colors relative group"
                data-cursor={link.download ? "DOWNLOAD" : "GO"}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
