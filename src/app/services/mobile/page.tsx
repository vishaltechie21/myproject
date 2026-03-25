'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Globe, 
  Cloud, 
  Zap,
  Layout,
  Users,
  Fingerprint
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function MobileAppPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { title: 'Cross Platform Development', icon: <Globe className="w-8 h-8 text-yellow-600" /> },
    { title: 'High-Performance UI/UX', icon: <Cpu className="w-8 h-8 text-yellow-600" /> },
    { title: 'Cloud Infrastructure', icon: <Cloud className="w-8 h-8 text-yellow-600" /> },
    { title: 'Biometric Security', icon: <Fingerprint className="w-8 h-8 text-yellow-600" /> }
  ];

  const steps = [
    { title: 'Discovery', description: 'Brainstorming and user flow architecture.' },
    { title: 'Wireframing', description: 'Visualizing every interactive screen.' },
    { title: 'Coding', description: 'Flutter/React Native implementation.' },
    { title: 'Launch', description: 'App Store & Play Store deployment.' }
  ];

  return (
    <div ref={containerRef} className="bg-white pb-32">
      <div className="h-16 md:h-20" />
      {/* Hero Header */}
      <section className="bg-slate-900 py-16 md:py-20 lg:py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
               <div className="flex-1 space-y-8 w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-500 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                     <Smartphone className="w-4 h-4" /> Next-Gen Mobile Apps
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                     Building <span className="text-yellow-400">Mobile First</span> Experiences
                  </h1>
                  <p className="text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                     Turn your ideas into pocket-sized powerhouses. We build fast, reliable, and stunning mobile applications that users love to keep on their home screens.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto items-center lg:items-start justify-center lg:justify-start">
                     <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 text-center text-sm sm:text-base">
                        Get Started
                     </Link>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-sm lg:max-w-none relative aspect-[9/16] max-h-[500px] md:max-h-[600px] lg:aspect-auto lg:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-slate-800 shadow-2xl">
                  <Image src="/assets/blog-mobile.png" alt="App Preview" fill className="object-cover" />
               </div>
            </div>
         </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
         <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-10 md:mb-16 text-center tracking-tight">Software Implementation Roadmap</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="p-6 md:p-8 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all h-full text-center sm:text-left">
                 <div className="w-12 h-12 bg-slate-900 text-yellow-400 rounded-xl flex items-center justify-center font-black mb-6 shadow-lg mx-auto sm:mx-0">{i+1}</div>
                 <h4 className="text-lg md:text-xl font-black text-slate-900 mb-4">{s.title}</h4>
                 <p className="text-slate-500 font-medium italic text-sm md:text-base leading-relaxed">{s.description}</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
