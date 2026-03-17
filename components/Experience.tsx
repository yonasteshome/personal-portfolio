"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase, ChevronRight, Activity, Globe } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "EagleLion Technologies",
    role: "Front-End Intern",
    period: "2024",
    location: "Addis Ababa",
    description: "Focused on high-performance front-end architecture. Built responsive user interfaces and implemented secure JWT-based authentication. Collaborated on real-time dashboards with a focus on user-centric features.",
    tech: ["Next.js", "Tailwind CSS", "Zustand", "JWT", "REST API"]
  },
  {
    company: "INSA",
    role: "Full-Stack Intern",
    period: "2024",
    location: "Addis Ababa",
    description: "Collaborated with senior developers to architect full-stack solutions. Gained deep-level experience in MERN stack, focusing on building scalable backend features and optimizing client-server interaction for security and speed.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Security Protocols"]
  }
];

export default function Experience({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={containerRef}
      className={`relative py-32 px-12 md:px-32 transition-colors duration-700 ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 text-emerald-500 font-mono text-xs tracking-[0.5em] font-bold uppercase mb-4"
          >
            <Activity size={16} />
            <span>Deployment_History</span>
          </motion.div>
          <h2 className={`text-6xl md:text-8xl font-black tracking-tighter ${theme.text} uppercase`}>
            SERVICE <span className="text-emerald-500">RECORDS</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translateX-1/2 top-0 bottom-0 w-px bg-emerald-500/20" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10 hidden md:block" />

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className={`p-8 rounded-xl border-2 transition-all duration-300 ${
                    isDarkMode 
                    ? "bg-white/[0.02] border-white/5 hover:border-emerald-500/40" 
                    : "bg-black/[0.02] border-black/5 hover:border-emerald-500/40"
                  }`}>
                    {/* Role & Company */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className={`text-3xl font-black ${theme.text} uppercase tracking-tight`}>
                          {exp.role}
                        </h3>
                        <p className="text-emerald-500 font-mono text-sm font-bold mt-1">
                          @ {exp.company}
                        </p>
                      </div>
                      <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                        <Briefcase size={20} />
                      </div>
                    </div>

                    {/* Metadata Tags */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        <Calendar size={12} className="text-emerald-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        <MapPin size={12} className="text-emerald-500" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-lg leading-relaxed ${theme.subtext} mb-8 border-l-2 border-emerald-500/20 pl-6 italic`}>
                      "{exp.description}"
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm font-mono text-[10px] text-zinc-400 uppercase tracking-tighter"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Aesthetic Spacing for Desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="mt-32 pt-10 border-t border-white/5 flex justify-between items-center font-mono text-[10px] text-zinc-600 uppercase tracking-[0.5em]">
           <span className="flex items-center gap-2">
             <Globe size={10} className="text-emerald-500" />
             NODE: ADDIS_ABABA_REGION
           </span>
           <span className="animate-pulse">● LOGS_SAVED</span>
        </div>
      </div>
    </section>
  );
}