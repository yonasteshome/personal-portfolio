"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase, Activity, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  image: string; // Added image field
}

const experiences: ExperienceItem[] = [
  {
    company: "EagleLion Technologies",
    role: "Front-End Intern",
    period: "2024",
    location: "Addis Ababa",
    description: "Focused on high-performance front-end architecture. Built responsive user interfaces and implemented secure JWT-based authentication. Collaborated on real-time dashboards with a focus on user-centric features.",
    tech: ["Next.js", "Tailwind CSS", "Zustand", "JWT"],
    image: "/eaglelion.jpg" // Replace with your actual path
  },
  {
    company: "INSA",
    role: "Full-Stack Intern",
    period: "2024",
    location: "Addis Ababa",
    description: "Collaborated with senior developers to architect full-stack solutions. Gained deep-level experience in MERN stack, focusing on building scalable backend features and optimizing client-server interaction for security and speed.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/insa.jpg" // Replace with your actual path
  }
];

export default function Experience({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={containerRef}
      className={`relative py-32 px-6 md:px-32 transition-colors duration-700 ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
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
          <h2 className={`text-5xl md:text-8xl font-black tracking-tighter ${theme.text} uppercase`}>
            SERVICE <span className="text-emerald-500">RECORDS</span>
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-40">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-full lg:w-1/2 group"
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-emerald-500/20 bg-zinc-900">
                    {/* Floating Animation for Image */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <div className="flex items-center justify-center h-full text-zinc-700 font-mono">
                        {/* Replace this div with your <Image /> component */}
                        [ IMAGE_DISPLAY: {exp.company} ]
                      </div>
                    </motion.div>
                  </div>
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 border border-emerald-500/10 rounded-3xl -z-10 group-hover:border-emerald-500/30 transition-colors duration-500" />
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded text-emerald-500">
                      <Briefcase size={18} />
                    </div>
                    <span className="text-emerald-500 font-mono text-sm font-bold tracking-widest uppercase">
                      {exp.company}
                    </span>
                  </div>

                  <h3 className={`text-4xl md:text-5xl font-black ${theme.text} mb-6 leading-tight uppercase`}>
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      <Calendar size={14} className="text-emerald-500" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      <MapPin size={14} className="text-emerald-500" />
                      {exp.location}
                    </div>
                  </div>

                  <p className={`text-xl leading-relaxed ${theme.subtext} mb-10 font-light border-l-4 border-emerald-500/30 pl-8`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full font-mono text-[10px] text-emerald-500/80 uppercase tracking-tighter"
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
        <div className="mt-40 pt-10 border-t border-emerald-500/10 flex justify-between items-center font-mono text-[10px] text-zinc-600 uppercase tracking-[0.5em]">
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