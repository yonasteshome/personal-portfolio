"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp, 
  Terminal,
  Activity,
  Globe2,
  Lock,
  Cpu
} from "lucide-react";

export default function Footer({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { name: "GITHUB", icon: <Github size={20} />, link: "https://github.com/yourusername" },
    { name: "LINKEDIN", icon: <Linkedin size={20} />, link: "https://linkedin.com/in/yourusername" },
    { name: "TWITTER", icon: <Twitter size={20} />, link: "https://twitter.com/yourusername" },
  ];

  return (
    <footer className={`relative pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t-4 transition-colors duration-700 
      ${isDarkMode 
        ? "bg-[#050505] border-emerald-500/30" 
        : "bg-[#f8fafc] border-emerald-500/20"}`}>
      
      <div className="max-w-[1600px] mx-auto">
        
        {/* THREE COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
          
          {/* COLUMN 1: SOCIAL_CONNECT (LEFT) */}
          <div className="space-y-10 order-2 lg:order-1">
            <h4 className="font-mono text-[10px] font-black text-emerald-500 tracking-[0.6em] uppercase flex items-center gap-2">
              <Globe2 size={14} /> // SOCIAL_UPLINK
            </h4>
            <div className="space-y-4">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank"
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all group
                    ${isDarkMode ? 'bg-white/5 border-white/5 hover:border-emerald-500/50' : 'bg-black/5 border-black/5 hover:border-emerald-500/30'}`}
                >
                  <span className={`font-mono text-xs font-black tracking-widest ${theme.text}`}>{social.name}</span>
                  <div className={`transition-colors ${theme.subtext} group-hover:text-emerald-500`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: BRAND & CONTACT (CENTER) */}
          <div className="flex flex-col items-center text-center space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="p-4 bg-emerald-500 rounded-[2rem] inline-block shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Terminal size={40} className="text-black" />
              </div>
              <h2 className={`text-5xl md:text-6xl font-black tracking-tighter uppercase ${theme.text}`}>
                YONAS<span className="text-emerald-500">.DEV</span>
              </h2>
            </div>

            <div className="space-y-4 w-full">
              <p className={`text-sm font-mono font-bold tracking-[0.2em] ${theme.subtext}`}>DIRECT_ENCRYPTION_CHANNEL</p>
              <a 
                href="mailto:hello@yonas.dev" 
                className={`text-2xl md:text-3xl font-black tracking-tighter border-b-4 border-emerald-500/20 hover:border-emerald-500 transition-all pb-2 block ${theme.text}`}
              >
                hello@yonas.dev
              </a>
            </div>
          </div>

          {/* COLUMN 3: SYSTEM_UTILITY (RIGHT) */}
          <div className="space-y-10 order-3">
            <h4 className="font-mono text-[10px] font-black text-emerald-500 tracking-[0.6em] uppercase flex items-center gap-2">
              <Cpu size={14} /> // SYSTEM_SPECS
            </h4>
            <div className={`p-8 rounded-[2.5rem] border-2 space-y-8 ${isDarkMode ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-black/5'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-zinc-500">AVAILABILITY</span>
                <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] font-black">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  OPEN_TO_WORK
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-zinc-500">ENCRYPTION</span>
                <span className={`font-mono text-[10px] font-black ${theme.text} flex items-center gap-2`}>
                  <Lock size={12} className="text-emerald-500" /> AES_256
                </span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                 <span className="font-mono text-[10px] font-bold text-zinc-500">LOCAL_TIME</span>
                 <span className={`font-mono text-[10px] font-black ${theme.text}`}>ADDIS_ABABA // GMT+3</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM TERMINAL BAR */}
        <div className={`pt-10 border-t-2 flex flex-col md:flex-row justify-between items-center gap-8 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
          <div className="flex items-center gap-8 font-mono text-[10px] font-black text-zinc-600 uppercase tracking-[0.6em]">
            <span className="flex items-center gap-2">
               <Activity size={14} className="text-emerald-500" /> 
               V5.4.2_STABLE
            </span>
            <span className="hidden md:block opacity-20">/</span>
            <span>© 2026_YONAS_REVELO</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#10b981", color: "#000" }}
            onClick={scrollToTop}
            className={`flex items-center gap-4 px-10 py-5 rounded-2xl border-2 font-mono text-[11px] font-black tracking-[0.4em] transition-all
              ${isDarkMode ? 'border-emerald-500/30 text-emerald-500' : 'border-emerald-500 text-emerald-500 bg-emerald-500/5'}`}
          >
            RETURN_TO_BASE <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute bottom-0 right-10 overflow-hidden pointer-events-none opacity-[0.02] select-none translate-y-1/3">
        <span className={`text-[20rem] font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
          YONAS
        </span>
      </div>
    </footer>
  );
}