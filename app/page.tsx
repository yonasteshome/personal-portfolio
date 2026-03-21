"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import ValueProp from '../components/ValueProp'; 
import Footer from '../components/Footer';

export default function Home() {
  // 1. Start with a state that doesn't trigger a "light" render first
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false); 
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 2. Initial Theme Detection
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Logic: use saved preference, otherwise fallback to system setting
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);

    // Apply background color to the root immediately to prevent white flashes
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = "#0a0a0b";
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = "#fcfcfd";
    }

    setMounted(true);
  }, []);

  // 3. Sync Theme Changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      
      // Keep the root element in sync with the state
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = "#0a0a0b";
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = "#fcfcfd";
      }
    }
  }, [isDarkMode, mounted]);

  const theme = {
    bg: isDarkMode ? "bg-[#0a0a0b]" : "bg-[#fcfcfd]",
    nav: isDarkMode ? "bg-[#0a0a0b]/90 border-zinc-800" : "bg-[#ffffff]/90 border-slate-200",
    text: isDarkMode ? "text-slate-100" : "text-slate-900",
    subtext: isDarkMode ? "text-slate-400" : "text-slate-500",
    codeFont: "font-mono",
  };

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const imageX = useTransform(cursorX, [0, 1920], [-15, 15]);
  const imageY = useTransform(cursorY, [0, 1080], [-15, 15]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  // 4. Hydration Guard: 
  // Returning a simple background matching your dark theme prevents the 
  // screen from flashing white while React is loading components.
  if (!mounted) {
    return <div className="min-h-screen bg-[#0a0a0b]" />;
  }

  return (
    <main 
      className={`relative min-h-screen w-full ${theme.bg} transition-colors duration-700 
      overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar flex flex-col font-sans cursor-none select-none`}
    >
      
      {/* 1. LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <div className="fixed inset-0 z-[10000] pointer-events-none">
            <motion.div 
              exit={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%, 50% 50%)', opacity: 0 }} 
              transition={{ duration: 1.5 }} 
              className="absolute inset-0 bg-black" 
            />
          </div>
        )}
      </AnimatePresence>

      {/* 2. CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference bg-white w-8 h-8"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isInteractive ? 2.5 : 1 }}
      />

      {/* 3. NAVIGATION */}
      <Navbar 
        theme={theme} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        setIsInteractive={setIsInteractive} 
      />

      {/* 4. HERO SECTION */}
      <div className="relative w-full z-20">
        <Hero 
          theme={theme} 
          isDarkMode={isDarkMode} 
          isInteractive={isInteractive} 
          setIsInteractive={setIsInteractive}
          imageX={imageX}
          imageY={imageY}
        />
      </div>

      {/* 5. ABOUT SECTION */}
      <About theme={theme} isDarkMode={isDarkMode} />

      {/* 6. SKILLS SECTION */}
      <Skills theme={theme} isDarkMode={isDarkMode} />

      {/* 7. PROJECTS SECTION */}
      <Projects theme={theme} isDarkMode={isDarkMode} />

      {/* 8. EXPERIENCE SECTION */}
      <Experience theme={theme} isDarkMode={isDarkMode} />

      {/* 9. VALUE PROPOSITION */}
      <ValueProp theme={theme} isDarkMode={isDarkMode} />

      {/* 10. FOOTER */}
      <Footer theme={theme} isDarkMode={isDarkMode} />

    </main>
  );
}