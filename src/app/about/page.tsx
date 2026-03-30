'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Target, Eye, Rocket, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  const values = [
    {
      title: "High Fidelity",
      desc: "We don't do 'good enough'. Every pixel, every line of code, and every client interaction is tuned for the highest possible fidelity.",
      icon: <Target className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Velocity First",
      desc: "In real estate, speed is survival. We build tools that eliminate friction and move your deals at the speed of logic.",
      icon: <Rocket className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Absolute Precision",
      desc: "Data-driven decisions only. Our systems provide the clarity you need to execute with surgical precision.",
      icon: <Eye className="w-6 h-6 text-emerald-500" />
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero > *', { y: 30, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out' });
      gsap.from('.value-card', {
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power2.out'
      });
      gsap.from('.team-card', {
        scrollTrigger: { trigger: '.team-grid', start: 'top 80%' },
        scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="about-hero space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">Our Foundation</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-950 tracking-tight leading-[1] max-w-xl">
                 The Intelligent Workflow Engine for <span className="text-emerald-600">Real Estate.</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                 Vishray Technologies was founded to bridge the gap between chaotic spreadsheets and operational clarity. We build the high-fidelity logic that powers top-tier agencies.
              </p>
           </div>
           <div className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden group shadow-2xl border border-slate-100">
              <Image 
                src="/assets/about-hero.png" 
                alt="High Fidelity Logic" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
           </div>
        </div>
      </section>

    {/* Mission & Values */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-950 mb-8">Our Mission & Principles</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                We believe that technology should be an accelerator, not a bottleneck. Every tool we build at Vishray Technologies is guided by three core principles.
              </p>
              <div className="space-y-4">
                <div className="p-8 bg-emerald-600 rounded-[2rem] text-white shadow-xl shadow-emerald-500/20">
                  <h3 className="text-2xl font-bold mb-4">Precision over Volume</h3>
                  <p className="font-medium opacity-90">
                    We don't build features for the sake of it. We build precise solutions that solve high-impact problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all group shadow-sm hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors border border-emerald-100">
                    {React.cloneElement(v.icon as React.ReactElement, { className: 'w-6 h-6 text-emerald-600' } as any)}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-4">{v.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{v.desc}</p>
                </div>
              ))}
              <div className="value-card bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-center text-center">
                <div className="space-y-4">
                  <div className="text-emerald-600 text-5xl font-black">99.9%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Operational Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-950 mb-6 uppercase tracking-tight italic">Meet the Architects</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-20 font-medium">
               The team behind Vishray Technologies is a collective of engineers and designers obsessed with high-fidelity operational logic.
            </p>

            <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { name: "Julian Thorne", role: "Chief Executive Officer", img: "/assets/team-ceo.png" },
                 { name: "Elena Voss", role: "Chief Technology Officer", img: "/assets/team-cto.png" },
                 { name: "Marcus Reed", role: "Head of Product Design", img: "/assets/team-designer.png" }
               ].map((member, i) => (
                 <div key={i} className="team-card group">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative border border-slate-200 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                       <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-[0.3em]">{member.role}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 px-6 bg-white">
         <div className="max-w-4xl mx-auto bg-slate-950 p-12 lg:p-24 rounded-[3rem] border border-slate-900 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[0.9]">Ready for High-Fidelity Logic?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
               Join the forward-thinking agencies who have abandoned the noise for the precision of Vishray Technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-500/20">
                 Speak to an Architect
              </Link>
              <Link href="/demo" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all">
                 View Showcase
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

