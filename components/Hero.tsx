  "use client";
  import React from 'react';
  import { motion, MotionValue } from 'framer-motion';
  import { Globe } from 'lucide-react';

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
      // FIX: Removed flex-1, ensured height is full
      <div className="relative h-full flex flex-col items-center justify-center px-4 w-full">
        <div className="flex items-center gap-4 mb-[-5px] relative z-20">
          <Globe size={24} className="animate-pulse text-[#10b981]" />
          <p className={`text-xl md:text-3xl font-bold ${theme.text} tracking-tight ${theme.codeFont}`}>
            // Welcome. I'm Yonas, a freelance
          </p>
        </div>

        <div 
          className="relative w-full max-w-[95vw] flex justify-center items-center flex-1 max-h-[60vh]"
          onMouseEnter={() => setIsInteractive(true)}
          onMouseLeave={() => setIsInteractive(false)}
        >
          {/* ... All background and foreground text remains EXACTLY the same ... */}
          {/* ... Image container remains EXACTLY the same ... */}
          
          {/* BACKGROUND TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10">
            <motion.h1 
              initial={slideFromLeft.initial}
              animate={{ 
                x: 0, opacity: 1,
                color: isInteractive ? (isDarkMode ? "#000" : "#fff") : (isDarkMode ? "#fff" : "#000") 
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11vw] leading-[0.7] font-black tracking-tighter uppercase"
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
              className="text-[11vw] leading-[0.7] font-black tracking-tighter uppercase"
              style={{ WebkitTextStroke: "1px var(--stroke-color)", backgroundClip: "text" }}
            >
              & QA Tester
            </motion.h1>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <motion.div style={{ x: imageX, y: imageY }} className="h-full flex items-center justify-center pointer-events-none">
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                src="/person.png" 
                alt="Yonas" 
                draggable="false"
                className={`h-[95%] w-auto object-contain grayscale transition-all duration-700 ${isDarkMode ? 'brightness-[0.8] contrast-[1.2]' : 'brightness-[1.05] opacity-90'}`}
                style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }} 
              />
            </motion.div>
          </div>

          {/* FOREGROUND TEXT (Outline) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none z-30 pointer-events-none">
            <motion.h1 
              animate={{ "--stroke-f": isInteractive ? (isDarkMode ? "#fff" : "#000") : (isDarkMode ? "transparent" : "#fff") } as any}
              className="text-[11vw] leading-[0.7] font-black tracking-tighter text-transparent uppercase" 
              style={{ WebkitTextStroke: "1.5px var(--stroke-f)" }}
            >
              Webdeveloper
            </motion.h1>
            <motion.h1 
              animate={{ "--stroke-b": isInteractive ? (isDarkMode ? "transparent" : "#fff") : (isDarkMode ? "#fff" : "#000") } as any}
              className="text-[11vw] leading-[0.7] font-black tracking-tighter text-transparent uppercase"
              style={{ WebkitTextStroke: "1px var(--stroke-b)" }}
            >
              & QA Tester
            </motion.h1>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="w-full max-w-6xl px-8 pb-10 flex flex-col items-center relative z-40 mt-[-10px]">
          <p className={`text-xl ${theme.subtext} mb-8 font-bold ${theme.codeFont}`}>
            &lt;located /&gt; Addis Ababa, Ethiopia
          </p>
          <div className="flex gap-6">
            <button onMouseEnter={() => setIsInteractive(true)} onMouseLeave={() => setIsInteractive(false)} className={`px-12 py-6 rounded-lg font-black text-sm uppercase tracking-[0.2em] active:scale-95 transition-all shadow-2xl ${isDarkMode ? 'bg-[#10b981] text-black hover:bg-emerald-400' : 'bg-slate-900 text-white hover:bg-black'}`}>
              Hire as Developer
            </button>
            <button onMouseEnter={() => setIsInteractive(true)} onMouseLeave={() => setIsInteractive(false)} className={`px-12 py-6 rounded-lg font-black text-sm uppercase tracking-[0.2em] active:scale-95 transition-all border-2 ${isDarkMode ? 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white' : 'border-slate-300 text-slate-700 hover:border-black hover:text-black'}`}>
              Hire as QA Tester
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;