'use client';

import { 
  Mail, 
  Target, 
  Globe, 
  BarChart3, 
  Smartphone, 
  Layout, 
  MousePointer2, 
  Share2, 
  Search,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MarketingSolution() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const featureGroups = [
    {
      title: "Marketing Automation",
      features: [
        "Email Marketing", "Newsletters", "Email Tracking", 
        "Multichannel Campaigns", "Video Emails", "Personalization Software"
      ]
    },
    {
      title: "Web Engagement",
      features: [
        "Landing Pages", "Form Builder", "Lead Generation", 
        "Push Notifications", "Exit Intent", "SEO Tool"
      ]
    },
    {
      title: "Social & Mobile",
      features: [
        "Social CRM", "Social Listening", "Social Media Management", 
        "Social Suite", "Mobile Marketing", "Text Messaging"
      ]
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-950 min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                <Target className="w-4 h-4" /> Comprehensive Marketing Suite
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] italic">
                Scale Your <span className="text-emerald-500">Marketing</span> Efforts.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From email automation to advanced social listening, our marketing solutions provide the high-fidelity logic required to convert at scale.
              </p>
              <div className="flex pt-4 justify-center lg:justify-start">
                <Link href="/contact" className="px-10 py-5 bg-emerald-500 text-slate-950 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-lg">
                  Initiate Protocol
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none glass-dark rounded-[3rem] p-12 border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="w-full h-full border border-white/5 rounded-[2rem] flex items-center justify-center p-12 bg-slate-900 shadow-inner">
                  <BarChart3 className="w-32 h-32 text-emerald-500/20 absolute -right-10 -bottom-10 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                  <div className="text-emerald-500/10 text-5xl font-black rotate-[-15deg] uppercase tracking-tighter text-center">Marketing Intelligence</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {featureGroups.map((group, idx) => (
            <div key={idx} className="space-y-10 group">
              <h2 className="text-2xl font-bold text-white border-b border-emerald-500/30 pb-4 inline-block uppercase tracking-tight">
                {group.title}
              </h2>
              <ul className="space-y-6">
                {group.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-slate-400 font-medium text-lg group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 lg:py-40 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-medium italic">
            &ldquo;Our marketing tools are built for operational velocity. Whether you&apos;re a small team or a global enterprise, we provide the infrastructure to run complex, hyper-personalized campaigns with precision.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
