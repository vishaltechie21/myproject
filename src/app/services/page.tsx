'use client';

import { 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  BarChart4,
  Code2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      title: "CRM Integration",
      desc: "Connect your entire operational workflow into a single, high-fidelity source of truth.",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      tags: ["Supabase", "REST API", "Webhooks"]
    },
    {
      title: "Lead Acceleration",
      desc: "High-velocity logic that prioritizes and routes leads at sub-second speeds.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      tags: ["AI Scoring", "Auto-Routing", "SMS Sync"]
    },
    {
      title: "Data Intelligence",
      desc: "Real-time analytics and predictive modeling for data-driven precision.",
      icon: <BarChart4 className="w-6 h-6 text-emerald-500" />,
      tags: ["Forecasting", "Custom Dashboards", "Big Data"]
    },
    {
      title: "High-Fidelity Design",
      desc: "Premium UI/UX crafted for professional real estate and enterprise environments.",
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      tags: ["Tailwind v4", "GSAP", "Responsiveness"]
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero > *', { y: 30, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out' });
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-slate-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="services-hero">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Our Capabilities</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-8 max-w-5xl mx-auto italic">
                 Precision-Engineered <span className="text-emerald-500">Real Estate Solutions.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
                 The CRM is just the engine. Our ecosystem is the fuel. Vishray Technologies provides the full-stack architecture required for high-velocity firm growth.
              </p>
           </div>

           <div className="relative max-w-6xl mx-auto">
              <div className="glass-dark rounded-[3rem] p-4 border border-white/10 shadow-2xl overflow-hidden aspect-[16/7]">
                 <Image src="/assets/services-hero.png" alt="Data Intelligence" fill className="object-cover rounded-[2.5rem]" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="service-card glass-dark p-12 rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all group flex flex-col justify-between h-[450px]">
                 <div>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                       {s.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium">
                       {s.desc}
                    </p>
                 </div>
                 <div className="mt-10 pt-10 border-t border-white/5 flex flex-wrap gap-3">
                    {s.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                         {tag}
                      </span>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Process/CTA */}
      <section className="py-24 lg:py-40 bg-slate-900 shadow-2xl overflow-hidden relative rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6 text-center text-white relative z-10">
           <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Transform Your <br /> Operational Velocity</h2>
           <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
              Join the elite firms already using Vishray Technologies architecture to dominate their markets.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-emerald-500 text-slate-950 px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-emerald-500/20">
                 Get Started
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto px-12 py-5 rounded-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all">
                 View Pricing
              </Link>
           </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 -z-0" />
      </section>
    </div>
  );
}
