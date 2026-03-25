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
    <div ref={containerRef} className="bg-white min-h-screen pb-24 uppercase tracking-tighter">
      <div className="h-16 md:h-20" />
      
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-8 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-500 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                <Target className="w-4 h-4" /> Comprehensive Marketing Suite
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                Scale Your <span className="text-yellow-400">Marketing</span> Efforts
              </h1>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                From email automation to advanced social listening, our marketing solutions give you the edge you need to capture and convert more leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto items-center lg:items-start justify-center lg:justify-start">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 text-center text-sm sm:text-base">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-slate-800 shadow-2xl bg-white p-6 md:p-12">
               <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                  <BarChart3 className="w-32 h-32 md:w-48 md:h-48 text-slate-200 absolute -right-10 -bottom-10 rotate-12" />
                  <div className="text-slate-200 text-2xl sm:text-3xl md:text-5xl font-black rotate-[-15deg] uppercase tracking-tighter opacity-10">Marketing Intelligence</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {featureGroups.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="text-2xl font-black text-slate-900 border-b-4 border-yellow-400 pb-2 inline-block">
                {group.title}
              </h2>
              <ul className="space-y-4">
                {group.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-slate-600 font-bold text-sm sm:text-base group-hover:text-slate-900 transition-colors uppercase decoration-yellow-400/20 underline underline-offset-4">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 italic font-medium">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed underline decoration-yellow-400/20 underline-offset-8">
            &ldquo;Our marketing tools are built for scale. Whether you&apos;re a small team or a global enterprise, we provide the infrastructure to run complex, hyper-personalized campaigns with ease.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
