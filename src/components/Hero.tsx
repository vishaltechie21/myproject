'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Star, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DemoModal from './DemoModal';

const LetterAnimation = ({ text }: { text: string }) => {
  const words = text.split(" ");

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
    <motion.div
      className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-slate-950 uppercase italic leading-[1.1] flex flex-wrap gap-x-[0.2em] gap-y-[0.1em] mb-4 min-h-[3em]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="whitespace-nowrap flex">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span 
              key={letterIndex} 
              variants={child}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

const RotatingBlackText = () => {
    const phrases = [
        "WE MOVE YOUR BUSINESS FORWARD",
        "WE SCALE YOUR PROJECTS FASTER",
        "WE AUTOMATE YOUR CRM LOGIC",
        "WE BUILD YOUR DIGITAL IDENTITY"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [phrases.length]);

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <LetterAnimation text={phrases[index]} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

const RotatingGreenText = () => {
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
    <div className="h-8 md:h-10 overflow-hidden flex mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl font-black text-success uppercase italic tracking-[0.2em]"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SnakeSegment = ({ mouseX, mouseY, index }: { mouseX: any, mouseY: any, index: number }) => {
  const x = useSpring(mouseX, { damping: 25 + index * 8, stiffness: 200 - index * 20 });
  const y = useSpring(mouseY, { damping: 25 + index * 8, stiffness: 200 - index * 20 });
  
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        opacity: 1 - index * 0.15,
        scale: 1 - index * 0.1,
      }}
    >
      <span className="text-4xl font-black text-success uppercase italic leading-none select-none drop-shadow-[0_0_10px_rgba(22,163,74,0.3)]">V</span>
    </motion.div>
  );
};

const SnakeFollower = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const trail = [0, 1, 2, 3, 4, 5];
  return (
    <>
      {trail.map((i) => (
        <SnakeSegment key={i} mouseX={mouseX} mouseY={mouseY} index={i} />
      ))}
    </>
  );
};

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Movement tracker
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
      className="relative min-h-screen pt-48 pb-20 overflow-hidden bg-white cursor-crosshair flex items-start lg:items-center"
    >
      {/* Background Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(22, 163, 74, 0.05), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-10 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
           
           {/* LEFT COLUMN: Text Content */}
           <div className="text-left lg:col-span-5 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-success/5 border border-success/10 mb-8 w-fit"
              >
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] text-success uppercase">
                  Institutional Logic Cluster
                </span>
              </motion.div>

              <RotatingBlackText />

              <RotatingGreenText />

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-slate-500 text-base md:text-lg font-medium italic leading-relaxed mb-10 max-w-xl"
              >
                Specialized CRM and Managed Hosting for the high-frequency operational logic of Real Estate & Finance firms. Scaling projects with precision.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="w-full sm:w-auto bg-success text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-110 active:scale-95 transition-all shadow-xl shadow-success/20 uppercase tracking-widest group flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10">Book Demo Hub</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
                </button>
                <Link href="/pricing" className="w-full sm:w-auto border-2 border-slate-100 text-slate-950 px-10 py-5 rounded-2xl font-black text-lg transition-all uppercase tracking-widest text-center shadow-lg hover:bg-slate-50 hover:border-success/30 hover:shadow-success/5 active:scale-95">
                  Start Trial
                </Link>
              </motion.div>
           </div>

           {/* RIGHT COLUMN: CRM Dashboard Image */}
           <motion.div 
             initial={{ opacity: 0, x: 50, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, x: 0, scale: 1, y: -40 }}
             transition={{ delay: 0.5, duration: 1.2 }}
             className="relative group lg:col-span-7 lg:-mt-20"
           >
              {/* Decorative Glow */}
              <div className="absolute inset-x-0 inset-y-0 bg-success/10 rounded-[4rem] blur-[100px] -z-10 group-hover:bg-success/20 transition-all duration-1000" />
              
              <div className="bg-white rounded-[4rem] p-4 border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden aspect-[4/3] md:aspect-video lg:aspect-[4/3] relative group-hover:rotate-1 transition-transform duration-1000">
                <Image 
                  src="/assets/crm-dashboard.png" 
                  alt="Vishray CRM Dashboard Interface" 
                  fill
                  className="object-cover rounded-[3rem] transition-all duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
           </motion.div>
        </div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <SnakeFollower mouseX={mouseX} mouseY={mouseY} />
    </section>
  );
}
