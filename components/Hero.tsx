"use client";
import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Globe, Eye, Download } from 'lucide-react';

interface HeroProps {
  theme: any;
  isDarkMode: boolean;
  isInteractive: boolean;
  setIsInteractive: (val: boolean) => void;
  imageX: MotionValue<number>;
  imageY: MotionValue<number>;
}

const Hero = ({ theme, isDarkMode, isInteractive, setIsInteractive, imageX, imageY }: HeroProps) => {
  const slideFromLeft = {
    initial: { x: -250, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-4 w-full pt-24 overflow-visible z-20 isolate">
      
      {/* Welcome Text Section */}
      <div className="flex items-center gap-3 mb-1 relative z-20">
        <Globe size={18} className="animate-pulse text-[#10b981]" />
        <p className={`text-base md:text-xl font-bold ${theme.text} tracking-tight ${theme.codeFont}`}>
          // Welcome. I'm Yonas, a freelancer
        </p>
      </div>

      <div className="relative w-full max-w-full flex justify-center items-center flex-1 max-h-[60vh]">
        {/* BACKGROUND TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10">
          <motion.h1 
            initial={slideFromLeft.initial}
            animate={{ 
              x: 0, opacity: 1,
              color: isInteractive ? (isDarkMode ? "#000" : "#fff") : (isDarkMode ? "#fff" : "#000") 
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] leading-[0.8] font-black tracking-tighter uppercase"
          >
            Webdeveloper
          </motion.h1>

          <motion.h1 
            initial={slideFromLeft.initial}
            animate={{ 
              x: 0, opacity: 1,
              color: isInteractive ? (isDarkMode ? "#fff" : "#000") : (isDarkMode ? "#000" : "#fff"),
              "--stroke-color": isInteractive ? (isDarkMode ? "#fff" : "#000") : "#10b981"
            } as any}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] leading-[0.8] font-black tracking-tighter uppercase"
            style={{ WebkitTextStroke: "1px var(--stroke-color)", backgroundClip: "text" }}
          >
            & QA Tester
          </motion.h1>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="relative z-20 h-full flex items-center justify-center pointer-events-none">
          <motion.div style={{ x: imageX, y: imageY }} className="h-full flex items-center justify-center">
            <motion.img 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1.0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              src="/person.png" 
              alt="Yonas" 
              className={`h-[90%] w-auto object-contain grayscale transition-all duration-700 ${isDarkMode ? 'brightness-[0.9] contrast-[1.1]' : 'brightness-[1.05] opacity-90'}`}
              style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }} 
            />
          </motion.div>
        </div>

        {/* FOREGROUND TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none z-30 pointer-events-none">
          <motion.h1 
            animate={{ "--stroke-f": isInteractive ? (isDarkMode ? "#fff" : "#000") : (isDarkMode ? "transparent" : "#fff") } as any}
            className="text-[11vw] leading-[0.8] font-black tracking-tighter text-transparent uppercase" 
            style={{ WebkitTextStroke: "1.5px var(--stroke-f)" }}
          >
            Webdeveloper
          </motion.h1>
          <motion.h1 
            animate={{ "--stroke-b": isInteractive ? (isDarkMode ? "transparent" : "#fff") : (isDarkMode ? "#fff" : "#000") } as any}
            className="text-[11vw] leading-[0.8] font-black tracking-tighter text-transparent uppercase"
            style={{ WebkitTextStroke: "1px var(--stroke-b)" }}
          >
            & QA Tester
          </motion.h1>
        </div>
      </div>

      {/* SMALLER CV BUTTONS */}
      <div className="w-full max-w-6xl px-8 pb-10 flex flex-col items-center relative z-50 mt-4">
        <p className={`text-sm ${theme.subtext} mb-6 font-bold ${theme.codeFont}`}>
          <span className="opacity-60">&lt;located /&gt;</span> Addis Ababa, Ethiopia
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onMouseEnter={() => setIsInteractive(true)} 
            onMouseLeave={() => setIsInteractive(false)} 
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition-all shadow-xl ${isDarkMode ? 'bg-[#10b981] text-black hover:bg-emerald-400' : 'bg-slate-900 text-white hover:bg-black'}`}
          >
            <Eye size={14} /> View CV
          </button>
          <button 
            onMouseEnter={() => setIsInteractive(true)} 
            onMouseLeave={() => setIsInteractive(false)} 
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition-all border-2 ${isDarkMode ? 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white' : 'border-slate-300 text-slate-700 hover:border-black hover:text-black'}`}
          >
            <Download size={14} /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;