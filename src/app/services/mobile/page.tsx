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
    <div ref={containerRef} className="bg-slate-950 min-h-screen pb-32">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                     <Smartphone className="w-4 h-4" /> Next-Gen Mobile Apps
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] italic">
                     Building <span className="text-emerald-500">Mobile First</span> Logic.
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                     Turn your ideas into high-fidelity pocket-size powerhouses. We architect fast, reliable, and stunning mobile applications with operational precision.
                  </p>
                  <div className="flex pt-4 justify-center lg:justify-start">
                     <Link href="/contact" className="px-10 py-5 bg-emerald-500 text-slate-950 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-lg uppercase tracking-widest">
                        Initiate Protocol
                     </Link>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-sm lg:max-w-none glass-dark rounded-[3rem] p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="aspect-[9/16] relative rounded-2xl overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 h-[500px] mx-auto">
                    <Image src="/assets/emerald-abstract-geometric.png" alt="Mobile Logic" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="text-center mb-20 space-y-4">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Software Implementation Roadmap</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none italic uppercase">Strategic <span className="text-emerald-500">Milestones.</span></h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="group p-10 glass-dark rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all h-full">
                 <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center font-bold mb-8 shadow-lg group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">{i+1}</div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{s.title}</h4>
                 <p className="text-slate-400 font-medium leading-relaxed">{s.description}</p>
              </div>
            ))}
         </div>
      </section>

      <section className="py-24 lg:py-40 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">{f.title}</h4>
                <div className="w-10 h-0.5 bg-emerald-500/30 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
