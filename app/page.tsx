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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false); 
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
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

  if (!mounted) return null;

  return (
    <main 
      className={`relative min-h-screen w-full ${theme.bg} transition-colors duration-700 
      overflow-x-hidden overflow-y-auto no-scrollbar flex flex-col font-sans cursor-none select-none`}
    >
      
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

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference bg-white w-8 h-8"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isInteractive ? 2.5 : 1 }}
      />

      <Navbar 
        theme={theme} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        setIsInteractive={setIsInteractive} 
      />

      {/* FIXED: Removed height constraints and overflow-hidden */}
      <section className="relative w-full overflow-visible z-20">
        <Hero 
          theme={theme} 
          isDarkMode={isDarkMode} 
          isInteractive={isInteractive} 
          setIsInteractive={setIsInteractive}
          imageX={imageX}
          imageY={imageY}
        />
      </section>

      <About theme={theme} isDarkMode={isDarkMode} />
      <Skills theme={theme} isDarkMode={isDarkMode} />
      <Projects theme={theme} isDarkMode={isDarkMode} />
      <Experience theme={theme} isDarkMode={isDarkMode} />
      <ValueProp theme={theme} isDarkMode={isDarkMode} />
      <Footer theme={theme} isDarkMode={isDarkMode} />

    </main>
  );
}