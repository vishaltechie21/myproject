'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Zap,
  BarChart,
  Layout,
  Code2,
  Rocket
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function WebDevPage() {
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
    { title: 'SEO Optimized', icon: <Search className="w-8 h-8 text-yellow-600" /> },
    { title: 'Lightning Speed', icon: <Zap className="w-8 h-8 text-yellow-600" /> },
    { title: 'Analytics Integration', icon: <BarChart className="w-8 h-8 text-yellow-600" /> },
    { title: 'Scalable Architecture', icon: <Rocket className="w-8 h-8 text-yellow-600" /> }
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
                     <Globe className="w-4 h-4" /> Modern Web Development
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] italic">
                     Architectural <span className="text-emerald-500">Web Logic.</span>
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                     A website is the front-door to your operational logic. We architect lightning-fast web experiences backed by high-velocity technologies.
                  </p>
                  <div className="flex pt-4 justify-center lg:justify-start">
                     <Link href="/contact" className="px-10 py-5 bg-emerald-500 text-slate-950 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-lg uppercase tracking-widest">
                        Build Your Site
                     </Link>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-lg lg:max-w-none glass-dark rounded-[3rem] p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src="/assets/emerald-abstract-geometric.png" alt="Web Logic" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group p-10 glass-dark rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all text-center">
                 <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl border border-emerald-500/20">{f.icon}</div>
                 <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{f.title}</h4>
                 <p className="text-slate-400 font-medium leading-relaxed italic">Industry leading standards followed for every project.</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
