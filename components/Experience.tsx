"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase, Terminal, Cpu, ShieldCheck, Globe, Activity, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: React.ReactNode; // Changed to ReactNode to allow JSX bolding
  tech: string[];
  image: string; 
  feedback: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "INSA",
    role: "Full-Stack Developer",
    period: "2024",
    location: "Addis Ababa",
    description: (
      <>
        During my tenure at **INSA**, I worked directly with senior engineering mentors to architect and deploy full-stack web applications using the MERN ecosystem. I took ownership of building scalable backend services and hardening security protocols, receiving high praise for my ability to optimize client-server interactions and improve overall system performance.
      </>
    ),
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/INSA.png",
    feedback: "Exceptional backend logic & scalability focus."
  },
  {
    company: "EagleLion Technologies",
    role: "Front-End Engineer",
    period: "2024 - PRESENT",
    location: "Addis Ababa",
    description: (
      <>
        At **EagleLion Technologies**, I drive the development of high-fidelity user interfaces using Next.js and Framer Motion. I successfully implemented complex JWT authentication flows and real-time dashboard state management with Zustand. My contributions were noted for significantly enhancing the user experience and maintaining clean, modular code architecture.
      </>
    ),
    tech: ["Next.js", "Tailwind CSS", "Zustand", "JWT"],
    image: "/eaglelion.jfif",
    feedback: "High-caliber UI execution & modular architecture."
  }
];

export default function Experience({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={containerRef}
      className={`relative py-48 px-6 md:px-12 lg:px-24 transition-colors duration-700 ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
    >
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 text-emerald-500 font-mono text-sm tracking-[0.6em] font-bold uppercase mb-6"
          >
            <Activity size={18} className="animate-pulse" />
            <span>PROFESSIONAL_DEPLOYMENTS_V5.0</span>
          </motion.div>
          <h2 className={`text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter ${theme.text} uppercase leading-[0.8]`}>
            WORK <span className="text-emerald-500 font-outline-2">HISTORY</span>
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="space-y-48">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12 lg:gap-24`}
              >
                {/* Image Log Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/3 group"
                >
                  <div className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${isDarkMode ? 'bg-white/[0.03] border-white/10 shadow-emerald-500/5' : 'bg-black/[0.03] border-black/5 shadow-xl'} group-hover:border-emerald-500/50 overflow-hidden`}>
                    
                    {/* ID & Feedback Badge */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="font-mono text-[10px] text-emerald-500 tracking-widest font-bold">LOG_ENTRY_0{index + 1}</span>
                      <div className="flex items-center gap-2 text-[9px] font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle2 size={10} /> POSITIVE_FEEDBACK_RECEIVED
                      </div>
                    </div>

                    {/* The Company Image (The Log) */}
                    <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-zinc-950/40 border border-white/5 mb-8 flex items-center justify-center group-hover:bg-zinc-900/60 transition-colors duration-500">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-full object-contain p-10 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-105"
                      />
                      
                      {/* Scanning Line Animation */}
                      <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-emerald-500/40 shadow-[0_0_10px_#10b981] z-10 pointer-events-none"
                      />
                    </div>

                    {/* Metadata Box */}
                    <div className="space-y-4 border-t border-emerald-500/10 pt-6">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        <MapPin size={12} className="text-emerald-500" />
                        {exp.location} // {exp.period}
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 italic text-[11px] text-emerald-500/80 font-mono">
                        "{exp.feedback}"
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Description Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-2/3 space-y-10 lg:pt-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500">
                        <Terminal size={24} />
                      </div>
                      <span className="text-emerald-500 font-mono text-sm font-bold tracking-[0.4em] uppercase">
                        {exp.company} // CORE_NODE
                      </span>
                    </div>

                    <h3 className={`text-6xl md:text-8xl font-black ${theme.text} uppercase tracking-tighter leading-[0.85]`}>
                      {exp.role}
                    </h3>
                  </div>

                  <p className={`text-2xl lg:text-3xl leading-relaxed ${theme.subtext} font-light border-l-2 border-emerald-500/30 pl-10`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {exp.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-6 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full font-mono text-[11px] text-emerald-500 uppercase font-bold tracking-tight hover:bg-emerald-500/10 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Telemetry Footer */}
        <div className="mt-64 pt-12 border-t border-emerald-500/10 flex justify-between items-center font-mono text-[11px] text-zinc-600 uppercase tracking-[0.6em]">
           <span className="flex items-center gap-3">
             <Globe size={14} className="text-emerald-500" />
             NODE: ADDIS_ABABA // SYNC_STATUS: OPTIMAL
           </span>
           <span className="flex items-center gap-2 animate-pulse text-emerald-500/50">
             <div className="w-2 h-2 rounded-full bg-emerald-500" />
             LOG_FILE_0{experiences.length}_COMPILED
           </span>
        </div>
      </div>
    </section>
  );
}