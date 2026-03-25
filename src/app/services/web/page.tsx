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
    <div ref={containerRef} className="bg-white pb-32">
      <div className="h-20" />
      
      <section className="bg-slate-900 py-32 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-500 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                     <Globe className="w-4 h-4" /> Modern Web Development
                  </div>
                  <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
                     Fast, Functional <br/> <span className="text-yellow-400">& Modern Websites</span>
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                     A website is the front-door to your business. We build lightning-fast web experiences backed by the latest technologies like Next.js and Tailwind.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <Link href="/contact" className="px-10 py-5 bg-yellow-400 text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95">
                        Build Your Site
                     </Link>
                  </div>
               </div>
               <div className="flex-1 aspect-[16/10] relative rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
                  <Image src="/assets/blog-web-speed.png" alt="Web Performance" fill className="object-cover" />
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
         <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all h-full text-center">
                 <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-8 text-yellow-600 shadow-lg">{f.icon}</div>
                 <h4 className="text-xl font-black text-slate-900 mb-4">{f.title}</h4>
                 <p className="text-slate-500 font-medium italic">Industry leading standards followed for every project.</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
