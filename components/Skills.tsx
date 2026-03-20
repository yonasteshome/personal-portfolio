"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import * as Si from "react-icons/si";
import * as Fi from "react-icons/fi";
import * as Vsc from "react-icons/vsc";
import { Crosshair, Shield, Terminal, Zap, ChevronRight } from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
  desc: string;
}

const skillData: SkillItem[] = [
  { name: "TypeScript", icon: <Si.SiTypescript />, color: "#3178C6", category: "SECURE_LOGIC", desc: "Strongly typed programming for robust, error-free applications." },
  { name: "JavaScript", icon: <Si.SiJavascript />, color: "#F7DF1E", category: "NEURAL_LINK", desc: "Dynamic scripting for modern web interaction and logic." },
  { name: "Python", icon: <Si.SiPython />, color: "#3776AB", category: "AUTOMATION", desc: "Versatile backend logic and automation scripting." },
  { name: "React", icon: <Si.SiReact />, color: "#61DAFB", category: "UI_INTERFACE", desc: "Component-based UI development with optimized state management." },
  { name: "Next.js", icon: <Si.SiNextdotjs />, color: "#FFFFFF", category: "GRID_SYSTEM", desc: "SEO-friendly SSR and static generation for high-performance sites." },
  { name: "Node.js", icon: <Si.SiNodedotjs />, color: "#339933", category: "CORE_PROCESS", desc: "Asynchronous event-driven JavaScript runtime for servers." },
  { name: "Express", icon: <Si.SiExpress />, color: "#828282", category: "BRIDGE_DATA", desc: "Minimalist web framework for building powerful REST APIs." },
  { name: "Postman", icon: <Si.SiPostman />, color: "#FF6C37", category: "SIGNAL_CHECK", desc: "Comprehensive API development and automated testing platform." },
  { name: "Thunder Client", icon: <Fi.FiZap />, color: "#FF6C37", category: "SIGNAL_CHECK", desc: "Lightweight API client for rapid endpoint validation." },
  { name: "Git", icon: <Si.SiGit />, color: "#F05032", category: "SYNC_VAULT", desc: "Distributed version control for seamless code collaboration." },
  { name: "GitHub", icon: <Si.SiGithub />, color: "#FFFFFF", category: "REMOTE_LINK", desc: "Cloud-based hosting for git repositories and CI/CD pipelines." },
  { name: "VS Code", icon: <Vsc.VscCode />, color: "#007ACC", category: "COMMAND_DECK", desc: "Primary environment for streamlined coding and debugging." },
  { name: "Android Studio", icon: <Si.SiAndroidstudio />, color: "#3DDC84", category: "FIELD_UNIT", desc: "Native mobile development for robust Android applications." },
  { name: "Linux", icon: <Si.SiLinux />, color: "#FCC624", category: "ROOT_ACCESS", desc: "Unix-like operating system for development and server management." },
  { name: "Docker", icon: <Si.SiDocker />, color: "#2496ED", category: "CONTAINMENT", desc: "Containerization for consistent deployment across environments." },
];

export default function Skills({ theme, isDarkMode }: { theme: any; isDarkMode: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  
  // SCALE REDUCTION: Reduced radius from 320 to 240
  const radius = 240; 
  const totalItems = skillData.length;
  const stepAngle = 360 / totalItems;

  const playTargetSound = useCallback(() => {
    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const playNote = (freq: number, start: number, duration: number) => {
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, context.currentTime + start);
      gain.gain.setValueAtTime(0.025, context.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start(context.currentTime + start);
      osc.stop(context.currentTime + start + duration);
    };
    playNote(880, 0, 0.05);     
    playNote(880, 0.07, 0.05);  
    playNote(1174, 0.14, 0.15); 
  }, []);

  useEffect(() => {
    if (isInView) playTargetSound();
  }, [isInView, playTargetSound]);

  useEffect(() => {
    if (isPaused || !isInView) return;
    const interval = setInterval(() => {
      setRotation(prev => prev + stepAngle);
      setActiveIndex(prev => (prev + 1) % totalItems);
      playTargetSound();
    }, 1500);
    return () => clearInterval(interval);
  }, [isPaused, totalItems, isInView, stepAngle, playTargetSound]);

  const handleManualNav = (index: number) => {
    const diff = (index - activeIndex + totalItems) % totalItems;
    setRotation(prev => prev + (diff * stepAngle));
    setActiveIndex(index);
    playTargetSound();
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center py-20 px-8 md:px-24 overflow-hidden transition-colors duration-700 ${isDarkMode ? "bg-[#050506]" : "bg-[#fcfcfd]"}`}
    >
      {/* Container max-width reduced for tighter feel */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* WHEEL SECTION - Height reduced */}
        <div 
          className="relative h-[600px] flex items-center justify-center order-2 lg:order-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
               animate={{ scale: [1, 1.3], opacity: [0.1, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
               className="absolute w-[400px] h-[400px] border border-emerald-500/30 rounded-full"
             />
          </div>
          
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            animate={{ rotate: -rotation }} 
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {skillData.map((skill, i) => {
              const angle = (i * stepAngle) * (Math.PI / 180);
              const x = Math.round(Math.cos(angle) * radius);
              const y = Math.round(Math.sin(angle) * radius);
              const isActive = activeIndex === i;

              return (
                <motion.button
                  key={skill.name}
                  onClick={() => handleManualNav(i)}
                  className="absolute p-2"
                  style={{ x, y, rotate: rotation }} 
                >
                    <motion.div 
                        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`p-4 rounded-lg border transition-all duration-500 ${
                            isActive 
                            ? "border-emerald-500 bg-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.4)] opacity-100" 
                            : "border-white/5 bg-white/[0.01] opacity-20 hover:opacity-50"
                        }`}
                    >
                        {/* Icon size reduced from 5xl to 3xl */}
                        <span className={`text-3xl transition-colors duration-300 ${isActive ? "text-emerald-400" : "text-zinc-500"}`}>
                            {skill.icon}
                        </span>
                    </motion.div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Center Element Scale Down */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none">
            <div className="w-40 h-40 border border-dashed border-emerald-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute">
               <Crosshair className="text-emerald-500/30" size={50} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] tracking-[0.4em] font-bold uppercase">
              <div className="w-1.5 h-1.5 bg-emerald-500 animate-ping" />
              <span>Target_Locked</span>
            </div>
            {/* Reduced from 9xl to 7xl */}
            <h2 className={`text-6xl md:text-7xl font-black tracking-tighter ${theme.text} uppercase leading-[0.9]`}>
              SKILLS <br/> <span className="text-emerald-500">ON</span> TECH
            </h2>
          </div>

          <div className="relative flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1"
              >
                <div className="flex items-center gap-4 mb-6">
                    {/* Reduced size and padding */}
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-3xl text-emerald-400 rounded shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                        {skillData[activeIndex].icon}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <Shield size={10} className="text-emerald-500" />
                            <span className="font-mono text-[8px] text-emerald-500 font-bold uppercase tracking-[0.3em]">
                                Verified_{skillData[activeIndex].category}
                            </span>
                        </div>
                        <h3 className={`text-4xl md:text-5xl font-black tracking-tight ${theme.text} uppercase`}>
                            {skillData[activeIndex].name}
                        </h3>
                    </div>
                </div>
                
                {/* Font size reduced to text-lg */}
                <p className={`text-lg leading-relaxed font-medium ${theme.subtext} mb-8 max-w-md border-l-2 border-emerald-500/40 pl-6`}>
                    {skillData[activeIndex].desc}
                </p>

                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 py-2 px-4 border border-white/10 bg-white/[0.02] transition-colors">
                        <Terminal size={14} className="text-emerald-500" />
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Protocol: Active</span>
                    </div>
                    <div className="flex items-center gap-2 py-2 px-4 border border-white/10 bg-white/[0.02] transition-colors">
                        <Zap size={14} className="text-emerald-500" />
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Efficiency: 100%</span>
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pt-6 border-t border-white/5 flex justify-between items-center font-mono text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
              <div className="flex gap-6">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight size={8} className="text-emerald-500" />
                    STATUS: <span className="text-emerald-500">NOMINAL</span>
                  </span>
                  <span>NODE: <span className="text-emerald-500">0{activeIndex + 1}</span></span>
              </div>
              <span className="hidden md:block">SECURE_ARCHIVE_V3.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}