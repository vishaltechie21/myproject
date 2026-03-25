'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Zap,
  BarChart,
  Layout,
  LayoutTemplate,
  Users,
  Eye,
  Pencil
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function UIUXDevPage() {
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
    { title: 'User Psychology', icon: <Eye className="w-8 h-8 text-yellow-600" /> },
    { title: 'Rapid Prototyping', icon: <Pencil className="w-8 h-8 text-yellow-600" /> },
    { title: 'Premium Aesthetics', icon: <Palette className="w-8 h-8 text-yellow-600" /> },
    { title: 'Accessibility Focus', icon: <Users className="w-8 h-8 text-yellow-600" /> }
  ];

  return (
    <div ref={containerRef} className="bg-white pb-32">
      <div className="h-16 md:h-20" />
      
      <section className="bg-slate-900 py-16 md:py-20 lg:py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
               <div className="flex-1 space-y-8 w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-500 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                     <Palette className="w-4 h-4" /> Next-Gen UI/UX Design
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                     Design That <span className="text-yellow-400">Drives</span> Conversion
                  </h1>
                  <p className="text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                     Beautiful design is just the start. We create strategic, intuitive experiences that guide your users toward action and keep them coming back.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto items-center lg:items-start justify-center lg:justify-start">
                     <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 text-center text-sm sm:text-base">
                        Start Designing
                     </Link>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-video lg:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-slate-800 shadow-2xl bg-white p-6 md:p-12">
                  <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center">
                     <div className="text-slate-200 text-2xl sm:text-3xl md:text-5xl font-black rotate-[-15deg] uppercase tracking-tighter opacity-10">Premium UX Mockup</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6 text-center">
         <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 md:mb-16 underline decoration-yellow-400 decoration-4 underline-offset-8 tracking-tight">Our Creative Methodology</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-3xl hover:bg-yellow-50 hover:shadow-xl transition-all h-full scale-[0.98] hover:scale-100 duration-500 shadow-sm">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-600 shadow-lg border border-yellow-50">{f.icon}</div>
                 <h4 className="text-lg md:text-xl font-black text-slate-900 mb-4">{f.title}</h4>
                 <p className="text-slate-500 font-medium italic text-[10px] md:text-xs">Combining beauty with functionality for high-impact software.</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
