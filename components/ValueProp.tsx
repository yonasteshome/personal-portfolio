"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Layers, 
  MessageSquare, 
  TrendingUp
} from "lucide-react";

export default function ValueProp({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const valuePillars = [
    {
      title: "FULL_STACK_VERSATILITY",
      desc: "Bridging the gap between robust Node.js backends and fluid Next.js frontends. I ensure the entire system communicates perfectly.",
      icon: <Layers size={18} />,
      metric: "99%_SYNC"
    },
    {
      title: "TRILINGUAL_COMMUNICATION",
      desc: "Fluent in English, Amharic, and Afaan Oromo. I facilitate smooth collaboration in diverse, multi-cultural environments.",
      icon: <MessageSquare size={18} />,
      metric: "GLOBAL_READY"
    },
    {
      title: "CLEAN_CODE_ARCHITECTURE",
      desc: "Passionate about building modular, maintainable, and user-focused applications that scale without technical debt.",
      icon: <ShieldCheck size={18} />,
      metric: "ZERO_DEBT"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className={`relative py-24 px-6 md:px-12 lg:px-24 transition-colors duration-700 overflow-hidden ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
    >
      {/* Background HUD elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-emerald-500/5 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-emerald-500/5 hidden lg:block" />

      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Section Header - Scaled Down */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center justify-center lg:justify-start gap-3 text-emerald-500 font-mono text-[10px] tracking-[0.4em] font-bold uppercase mb-4"
          >
            <Cpu size={14} className="animate-spin-slow" />
            <span>ACQUISITION_VALUE_V2.0</span>
          </motion.div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${theme.text} uppercase leading-none`}>
            WHY WORK <span className="text-emerald-500">WITH ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Main Narrative Block - Padding Tightened */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className={`p-10 rounded-[2.5rem] border ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.02] border-black/5'} relative overflow-hidden group shadow-xl`}>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-500 font-mono text-[9px] font-bold uppercase tracking-widest">
                  <Zap size={10} className="fill-emerald-500" /> SYSTEM_UPGRADE_READY
                </div>
                
                <p className={`text-2xl md:text-3xl font-light leading-tight ${theme.text}`}>
                  I deliver <span className="text-emerald-500 font-bold">solid full-stack solutions</span> using modular code and user-focused design to build scalable, high-impact applications.
                </p>

                <div className="pt-6 grid grid-cols-2 gap-6 border-t border-white/5">
                   <div className="space-y-1">
                      <div className="text-emerald-500 font-mono text-[9px] font-bold uppercase tracking-widest">LANGUAGES_SYNCED</div>
                      <div className={`text-xs font-mono ${theme.subtext}`}>EN / AM / OR</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-emerald-500 font-mono text-[9px] font-bold uppercase tracking-widest">LOCATION_BASE</div>
                      <div className={`text-xs font-mono ${theme.subtext}`}>ADDIS_ABABA</div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Pillars List - Scaled Down */}
          <div className="lg:col-span-6 space-y-6">
            {valuePillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 rounded-[2rem] border transition-all duration-500 group relative
                  ${isDarkMode 
                    ? 'bg-white/[0.01] border-white/5 hover:border-emerald-500/20' 
                    : 'bg-black/[0.01] border-black/5 hover:border-emerald-500/10'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[8px] text-zinc-500 tracking-[0.2em] font-bold uppercase">{pillar.metric}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] font-bold text-emerald-500 tracking-[0.1em]">{pillar.title}</h4>
                  <p className={`text-base ${theme.subtext} font-light leading-relaxed`}>
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Action Footer - Scale Down */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
           <div className="flex items-center gap-6 font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2 text-emerald-500"><Globe2 size={12} /> GLOBAL_READY</span>
              <span className="flex items-center gap-2"><TrendingUp size={12} /> IMPACT_DRIVEN</span>
           </div>
           
           <button className={`px-6 py-3 rounded-xl font-mono text-[10px] font-black uppercase tracking-[0.2em] border transition-all active:scale-95
             ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20' : 'bg-emerald-500 text-black border-transparent hover:bg-emerald-400'}`}>
             INITIATE_COLLABORATION_0x00FF
           </button>
        </motion.div>
      </div>
    </section>
  );
}