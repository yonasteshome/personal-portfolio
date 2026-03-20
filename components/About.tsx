"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  BookOpen, 
  User,
  Activity
} from "lucide-react";

export default function About({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  return (
    <section id="about" className={`relative z-10 py-32 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-700 ${isDarkMode ? "bg-[#050505]" : "bg-[#fcfcfd]"}`}>
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 text-emerald-500 font-mono text-xs font-black tracking-[0.5em] uppercase">
            <User size={14} /> // PROFILE_IDENTITY_V3
          </motion.div>
          
          <motion.h2 variants={itemVariants} className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] ${theme.text}`}>
            ABOUT <br /> 
            <span className="text-emerald-500">ME.</span>
          </motion.h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          {/* Main Content Card */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-8 p-8 md:p-12 rounded-[2.5rem] border-2 relative overflow-hidden group
              ${isDarkMode ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-black/5 shadow-xl'}`}
          >
            <div className="flex items-center gap-2 mb-8 font-mono text-[10px] text-zinc-500 uppercase font-black">
              <Terminal size={12} className="text-emerald-500" />
              <span className="ml-2 tracking-[0.3em]">terminal_input: whoami</span>
            </div>

            <div className="space-y-6">
              <h3 className={`text-3xl md:text-4xl font-black tracking-tighter uppercase ${theme.text}`}>
                Crafting Digital <span className="text-emerald-500">Excellence</span> <br /> 
                from the ground up.
              </h3>
              <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${theme.subtext}`}>
                I am a <span className={theme.text}>Full-Stack Developer</span> and <span className={theme.text}>QA Tester</span> currently sharpening my skills at <span className="text-emerald-500 font-medium text-xl">ASTU</span>. My approach combines creativity with a detailed eye.
              </p>
            </div>
          </motion.div>

          {/* Mindset Card */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-4 p-8 rounded-[2.5rem] border-2 flex flex-col justify-between group
              ${isDarkMode ? 'bg-emerald-500 text-black border-transparent' : 'bg-slate-900 text-white border-transparent'}`}
          >
            <div className="space-y-4">
              <Cpu size={40} className="opacity-40 group-hover:rotate-12 transition-transform duration-500" />
              <h4 className="text-3xl font-black tracking-tighter uppercase leading-none">
                The <br /> Mindset
              </h4>
            </div>
            <p className="font-mono text-[11px] leading-relaxed opacity-80 uppercase tracking-wider">
              "Clean code is not a goal; it's a requirement."
            </p>
          </motion.div>
        </motion.div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-t border-emerald-500/10"
        >
           <div className="flex items-center gap-4 font-mono text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">
              <Activity size={14} className="text-emerald-500" /> ReveloOne Strategy // IN_PROGRESS
           </div>
           <div className={`font-mono text-[10px] font-black uppercase tracking-[0.3em] ${theme.text}`}>
              Yonas Teshome // Adama, Ethiopia
           </div>
        </motion.div>
      </div>
    </section>
  );
}