'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Star, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DemoModal from './DemoModal';

const LetterAnimation = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 15,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.9] flex flex-wrap mb-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          variants={child}
          className={letter === " " ? "mr-4" : ""}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const RotatingText = () => {
  const texts = [
    "CRM for Real Estate",
    "CRM for Loan Agents",
    "CRM for Finance Agents",
    "Websites & Mobile Apps"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div className="h-10 md:h-12 overflow-hidden flex mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl md:text-3xl font-black text-success uppercase italic tracking-[0.2em]"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Movement tracker for spotlight & follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-40 pb-20 overflow-hidden bg-white cursor-crosshair flex items-center"
    >
      {/* Background Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(22, 163, 74, 0.05), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           
           {/* LEFT COLUMN: Text Content */}
           <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-success/5 border border-success/10 mb-10"
              >
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] text-success uppercase">
                  Institutional Logic Cluster
                </span>
              </motion.div>

              <LetterAnimation text="WE MOVE YOUR BUSINESS FORWARD" />

              <RotatingText />

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-slate-500 text-lg md:text-xl font-medium italic leading-relaxed mb-14 max-w-xl"
              >
                Specialized CRM and Managed Hosting for the high-frequency operational logic of Real Estate & Finance firms. Scaling projects with precision.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6 mb-20"
              >
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="w-full sm:w-auto bg-success text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-110 active:scale-95 transition-all shadow-xl shadow-success/20 uppercase tracking-widest group flex items-center justify-center gap-3"
                >
                  Book Demo Hub <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link href="/pricing" className="w-full sm:w-auto border-2 border-slate-100 text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all uppercase tracking-widest text-center shadow-lg">
                  Start Trial
                </Link>
              </motion.div>

              {/* Minimal Trust Bar */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-10 opacity-40"
              >
                <div className="flex items-center gap-2 font-black text-slate-900 tracking-tighter uppercase italic text-xs">
                  <ShieldCheck className="w-4 h-4 text-success" /> Secure Hub
                </div>
                <div className="flex items-center gap-2 font-black text-slate-900 tracking-tighter uppercase italic text-xs">
                  <Zap className="w-4 h-4 text-success" /> Sub-Second
                </div>
                <div className="flex items-center gap-2 font-black text-slate-900 tracking-tighter uppercase italic text-xs">
                  <Star className="w-4 h-4 text-success" /> 1.2k firms
                </div>
              </motion.div>
           </div>

           {/* RIGHT COLUMN: CRM Dashboard Image */}
           <motion.div 
             initial={{ opacity: 0, x: 50, scale: 0.9 }}
             animate={{ opacity: 1, x: 0, scale: 1 }}
             transition={{ delay: 0.5, duration: 1.2 }}
             className="relative group"
           >
              {/* Decorative Glow */}
              <div className="absolute inset-x-0 inset-y-0 bg-success/10 rounded-[4rem] blur-[100px] -z-10 group-hover:bg-success/20 transition-all duration-1000" />
              
              <div className="bg-white rounded-[4rem] p-4 border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative group-hover:rotate-1 transition-transform duration-1000">
                <Image 
                  src="/assets/emerald-hero.png" 
                  alt="Vishray CRM Dashboard Interface" 
                  fill
                  className="object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Mini Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white border border-slate-100 p-6 rounded-[2rem] shadow-2xl z-20 hidden md:block"
              >
                 <div className="text-[10px] font-black text-success uppercase tracking-[0.2em] mb-2 leading-none">New Protocol</div>
                 <div className="text-xl font-black text-slate-950 uppercase italic leading-none">V-v2 Intelligence</div>
              </motion.div>
           </motion.div>
        </div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* High-Fidelity Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl shadow-2xl"
        style={{
          x: useSpring(mouseX, { damping: 50, stiffness: 400 }),
          y: useSpring(mouseY, { damping: 50, stiffness: 400 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-success flex items-center justify-center text-white shadow-lg">
          <Building2 className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-success leading-none mb-1">Vishray Hub</span>
          <span className="text-[10px] font-black text-slate-900 uppercase italic tracking-tighter leading-none">Real Estate logic</span>
        </div>
      </motion.div>
    </section>
  );
}
