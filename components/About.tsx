"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  BookOpen, 
  User,
  Command
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
        // FIXED: Added 'as const' to satisfy TypeScript tuple requirements
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  return (
    <section id="about" className={`relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-700 ${isDarkMode ? "bg-[#050505]" : "bg-[#fcfcfd]"}`}>
      
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
                I am a <span className={theme.text}>Full-Stack Developer</span> and <span className={theme.text}>QA Tester</span> currently sharpening my skills at <span className="text-emerald-500 font-medium text-xl">ASTU</span>. My approach combines the creativity of a developer with the critical, detailed eye of a tester.
              </p>
              <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${theme.subtext}`}>
                Whether it's architecting high-concurrency systems or ensuring pixel-perfect responsiveness, I focus on building software that is not just functional, but <span className="italic text-emerald-500">resilient</span>.
              </p>
            </div>
          </motion.div>

          {/* High Contrast Mindset Card */}
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
              "Clean code is not a goal; it's a requirement. If it isn't testable, it isn't finished."
            </p>
          </motion.div>

          {/* Three-Column Capabilities */}
          {[
            { 
              title: "ACADEMIC_BASE", 
              desc: "Pursuing excellence at Adama Science and Technology University, blending theoretical CS with real-world builds.", 
              icon: <BookOpen size={24} />, 
              span: "md:col-span-4" 
            },
            { 
              title: "QA_PRECISION", 
              desc: "Expertise in behavioral data architecture and rigorous testing strategies to ensure zero-debt deployments.", 
              icon: <ShieldCheck size={24} />, 
              span: "md:col-span-4" 
            },
            { 
              title: "ADAPTIVE_STACK", 
              desc: "Fast-moving learner focused on Next.js, Framer Motion, and scalable Node.js/Django backends.", 
              icon: <Zap size={24} />, 
              span: "md:col-span-4" 
            }
          ].map((box) => (
            <motion.div 
              key={box.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`${box.span} p-8 rounded-[2.5rem] border-2 group hover:border-emerald-500/50 transition-all duration-500
                ${isDarkMode ? 'bg-zinc-900/20 border-white/5' : 'bg-white border-black/5 shadow-md'}`}
            >
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 w-fit mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                {box.icon}
              </div>
              <h4 className="font-mono text-xs font-black text-emerald-500 tracking-[0.2em] mb-3">{box.title}</h4>
              <p className={`text-sm font-medium leading-relaxed ${theme.subtext}`}>
                {box.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-t border-emerald-500/10"
        >
           <div className="flex items-center gap-4 font-mono text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">
              <Activity size={14} className="text-emerald-500" /> ReveloOne Behavioral Strategy // IN_PROGRESS
           </div>
           <div className={`font-mono text-[10px] font-black uppercase tracking-[0.3em] ${theme.text}`}>
              Yonas Teshome // Adama, Ethiopia
           </div>
        </motion.div>
      </div>
    </section>
  );
}