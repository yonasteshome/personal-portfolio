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
  Code2,
  TrendingUp
} from "lucide-react";

export default function ValueProp({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const valuePillars = [
    {
      title: "FULL_STACK_VERSATILITY",
      desc: "Bridging the gap between robust Node.js/MongoDB backends and fluid Next.js frontends. I ensure the entire system communicates perfectly.",
      icon: <Layers size={22} />,
      metric: "99%_SYNC"
    },
    {
      title: "TRILINGUAL_COMMUNICATION",
      desc: "Fluent in English, Amharic, and Afaan Oromo. I facilitate smooth collaboration in diverse, multi-cultural engineering environments.",
      icon: <MessageSquare size={22} />,
      metric: "GLOBAL_READY"
    },
    {
      title: "CLEAN_CODE_ARCHITECTURE",
      desc: "Passionate about building modular, maintainable, and user-focused applications that scale without technical debt.",
      icon: <ShieldCheck size={22} />,
      metric: "ZERO_DEBT"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className={`relative py-48 px-6 md:px-12 lg:px-24 transition-colors duration-700 overflow-hidden ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
    >
      {/* Background HUD elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-emerald-500/5 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-emerald-500/5 hidden lg:block" />

      <div className="max-w-[1600px] mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-32 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center justify-center lg:justify-start gap-4 text-emerald-500 font-mono text-sm tracking-[0.6em] font-bold uppercase mb-6"
          >
            <Cpu size={18} className="animate-spin-slow" />
            <span>ACQUISITION_VALUE_V2.0</span>
          </motion.div>
          <h2 className={`text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter ${theme.text} uppercase leading-[0.85]`}>
            WHY WORK <span className="text-emerald-500 font-outline-2">WITH ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Narrative Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-12"
          >
            <div className={`p-12 rounded-[3.5rem] border ${isDarkMode ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/5'} relative overflow-hidden group shadow-2xl`}>
              {/* Decorative Scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent h-1/2 group-hover:translate-y-full transition-transform duration-[3s] linear infinite" />
              
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-widest">
                  <Zap size={12} className="fill-emerald-500" /> SYSTEM_UPGRADE_READY
                </div>
                
                <p className={`text-3xl md:text-5xl font-light leading-tight ${theme.text}`}>
                  I bring a <span className="text-emerald-500 font-bold">solid foundation</span> in full-stack development, delivering <span className="italic">user-focused</span> applications through modular code and expert problem-solving.
                </p>

                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-emerald-500/10">
                   <div className="space-y-2">
                      <div className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-widest">LANGUAGES_SYNCED</div>
                      <div className={`text-sm font-mono ${theme.subtext}`}>EN / AM / OR</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-widest">LOCATION_BASE</div>
                      <div className={`text-sm font-mono ${theme.subtext}`}>ADDIS_ABABA</div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Pillars List */}
          <div className="lg:col-span-6 space-y-8">
            {valuePillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`p-10 rounded-[2.5rem] border transition-all duration-500 group relative
                  ${isDarkMode 
                    ? 'bg-white/[0.01] border-white/5 hover:border-emerald-500/30' 
                    : 'bg-black/[0.01] border-black/5 hover:border-emerald-500/20'}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] font-bold">{pillar.metric}</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-xs font-bold text-emerald-500 tracking-[0.2em]">{pillar.title}</h4>
                  <p className={`text-xl ${theme.subtext} font-light leading-relaxed`}>
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Action / Feedback Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-40 pt-12 border-t border-emerald-500/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
           <div className="flex items-center gap-6 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.4em]">
              <span className="flex items-center gap-2 text-emerald-500"><Globe2 size={12} /> GLOBAL_READY</span>
              <span className="flex items-center gap-2"><TrendingUp size={12} /> IMPACT_DRIVEN</span>
           </div>
           
           <div className={`px-8 py-4 rounded-2xl font-mono text-[11px] font-black uppercase tracking-[0.3em] border
             ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-emerald-500 text-black border-transparent'}`}>
             INITIATE_COLLABORATION_0x00FF
           </div>
        </motion.div>
      </div>
    </section>
  );
}