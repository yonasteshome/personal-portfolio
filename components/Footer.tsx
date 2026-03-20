"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowUp, 
  Terminal,
  Activity,
  Globe2,
  Lock,
  Cpu,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { name: "GITHUB", icon: <Github size={16} />, link: "https://github.com/yonasteshome", color: "hover:text-emerald-500" },
    { name: "LINKEDIN", icon: <Linkedin size={16} />, link: "https://www.linkedin.com/in/yonas-teshome-341260378/", color: "hover:text-emerald-500" },
    { name: "PORTFOLIO", icon: <Globe2 size={16} />, link: "https://portfolio-azure-seven2ik0kj7l26.vercel.app/", color: "hover:text-emerald-500" },
  ];

  return (
    <footer className={`relative pt-24 pb-10 px-6 md:px-12 lg:px-24 border-t transition-colors duration-700 
      ${isDarkMode 
        ? "bg-[#050505] border-white/5" 
        : "bg-[#fcfcfd] border-black/5"}`}>
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* THREE COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
          
          {/* COLUMN 1: SOCIAL_UPLINK */}
          <div className="space-y-6 order-2 lg:order-1">
            <h4 className="font-mono text-[9px] font-black text-emerald-500 tracking-[0.4em] uppercase flex items-center gap-2">
              <Globe2 size={12} /> // SOCIAL_UPLINK
            </h4>
            <div className="space-y-3">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all group
                    ${isDarkMode ? 'bg-white/[0.02] border-white/5 hover:border-emerald-500/30' : 'bg-black/[0.02] border-black/5 hover:border-emerald-500/20'}`}
                >
                  <span className={`font-mono text-[10px] font-black tracking-widest ${theme.text}`}>{social.name}</span>
                  <div className={`transition-colors ${theme.subtext} ${social.color}`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: BRAND & CONTACT (CENTER) */}
          <div className="flex flex-col items-center text-center space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <div className="p-3 bg-emerald-500 rounded-2xl inline-block shadow-lg shadow-emerald-500/10">
                <Terminal size={28} className="text-black" />
              </div>
              <h2 className={`text-3xl md:text-4xl font-black tracking-tighter uppercase ${theme.text}`}>
                YONAS<span className="text-emerald-500"> TESHOME</span>
              </h2>
              <p className="font-mono text-[9px] font-bold text-emerald-500 tracking-[0.4em] uppercase">Full Stack Developer</p>
            </div>

            <div className="space-y-4 w-full">
              <div className="space-y-1">
                <p className={`text-[8px] font-mono font-bold tracking-[0.3em] ${theme.subtext} uppercase opacity-50`}>Direct_Communication</p>
                <a 
                  href="mailto:yoyoni826@gmail.com" 
                  className={`text-lg md:text-xl font-black tracking-tighter hover:text-emerald-500 transition-colors ${theme.text}`}
                >
                  yoyoni826@gmail.com
                </a>
              </div>
              
              <div className={`flex items-center justify-center gap-2 font-mono text-[10px] font-bold ${theme.subtext}`}>
                <Phone size={12} className="text-emerald-500" />
                <span>+251 985 813 866</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: SYSTEM_UTILITY */}
          <div className="space-y-6 order-3">
            <h4 className="font-mono text-[9px] font-black text-emerald-500 tracking-[0.4em] uppercase flex items-center gap-2">
              <Cpu size={12} /> // SYSTEM_SPECS
            </h4>
            <div className={`p-6 rounded-2xl border space-y-5 ${isDarkMode ? 'bg-zinc-900/20 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Availability</span>
                <div className="flex items-center gap-2 text-emerald-500 font-mono text-[9px] font-black">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  OPEN_FOR_OFFERS
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Status</span>
                <span className={`font-mono text-[9px] font-black ${theme.text} flex items-center gap-2`}>
                  <Lock size={10} className="text-emerald-500" /> ENCRYPTED
                </span>
              </div>
              <div className="flex flex-col gap-1 pt-4 border-t border-white/5">
                 <span className="font-mono text-[8px] font-bold text-zinc-500 uppercase tracking-widest opacity-50">Location_Node</span>
                 <span className={`font-mono text-[9px] font-black ${theme.text} flex items-center gap-2 uppercase`}>
                   <MapPin size={10} className="text-emerald-500" /> Adama, Ethiopia
                 </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM TERMINAL BAR */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
          <div className="flex items-center gap-6 font-mono text-[9px] font-black text-zinc-600 uppercase tracking-[0.4em]">
            <span className="flex items-center gap-2">
               <Activity size={12} className="text-emerald-500" /> 
               V5.4.2_STABLE
            </span>
            <span>© 2026_YONAS_TESHOME</span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToTop}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl border font-mono text-[10px] font-black tracking-[0.3em] transition-all
              ${isDarkMode 
                ? 'border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/10' 
                : 'border-emerald-500/30 text-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10'}`}
          >
            RETURN_TO_BASE <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>

      {/* BACKGROUND WATERMARK - Scaled down */}
      <div className="absolute bottom-0 right-4 overflow-hidden pointer-events-none opacity-[0.03] select-none translate-y-1/4">
        <span className={`text-[10rem] font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
          YONAS
        </span>
      </div>
    </footer>
  );
}