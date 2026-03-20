"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Terminal, Activity, CheckCircle2, Globe } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: React.ReactNode;
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
        During my tenure at **INSA**, I worked directly with senior engineering mentors to architect and deploy full-stack web applications using the MERN ecosystem. I took ownership of building scalable backend services and hardening security protocols.
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
        At **EagleLion Technologies**, I drive the development of high-fidelity user interfaces using Next.js and Framer Motion. I successfully implemented complex JWT authentication flows and real-time dashboard state management with Zustand.
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
      className={`relative py-24 px-6 md:px-12 lg:px-24 transition-colors duration-700 ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header - Scale Down */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 text-emerald-500 font-mono text-[10px] tracking-[0.4em] font-bold uppercase mb-4"
          >
            <Activity size={14} className="animate-pulse" />
            <span>PROFESSIONAL_DEPLOYMENTS_V5.0</span>
          </motion.div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${theme.text} uppercase leading-none`}>
            WORK <span className="text-emerald-500">HISTORY</span>
          </h2>
        </div>

        {/* Experience Grid - Spacing Reduced */}
        <div className="space-y-28">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12 lg:gap-20`}
              >
                {/* Image Log Card - Tightened Scale */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-[30%] group"
                >
                  <div className={`relative p-6 rounded-3xl border transition-all duration-500 ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.02] border-black/5 shadow-lg'} group-hover:border-emerald-500/30 overflow-hidden`}>
                    
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-[9px] text-emerald-500 tracking-widest font-bold uppercase">LOG_0{index + 1}</span>
                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 size={8} /> FEEDBACK_SYNCED
                      </div>
                    </div>

                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-950/20 border border-white/5 mb-6 flex items-center justify-center">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-full object-contain p-8 grayscale group-hover:grayscale-0 transition-all duration-700 scale-95 group-hover:scale-100"
                      />
                      <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-emerald-500/30 z-10 pointer-events-none"
                      />
                    </div>

                    <div className="space-y-3 border-t border-white/5 pt-5">
                      <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        <MapPin size={10} className="text-emerald-500" />
                        {exp.location} // {exp.period}
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 italic text-[10px] text-emerald-500/70 font-mono">
                        "{exp.feedback}"
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Description Side - Scale Down */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full lg:w-[70%] space-y-6 lg:pt-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-500">
                        <Terminal size={18} />
                      </div>
                      <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                        {exp.company} // CORE_NODE
                      </span>
                    </div>

                    <h3 className={`text-4xl md:text-5xl font-black ${theme.text} uppercase tracking-tighter leading-none`}>
                      {exp.role}
                    </h3>
                  </div>

                  <p className={`text-lg lg:text-xl leading-relaxed ${theme.subtext} font-light border-l border-emerald-500/20 pl-6 max-w-3xl`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full font-mono text-[9px] text-emerald-500 uppercase font-bold tracking-tight hover:bg-emerald-500/10 transition-colors"
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

        {/* Telemetry Footer - Scale Down */}
        <div className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center font-mono text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
           <span className="flex items-center gap-2">
             <Globe size={12} className="text-emerald-500" />
             NODE: ADDIS_ABABA // OPTIMAL
           </span>
           <span className="flex items-center gap-2 text-emerald-500/50">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             LOG_FILE_0{experiences.length}_COMPILED
           </span>
        </div>
      </div>
    </section>
  );
}