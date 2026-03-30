import React, { useLayoutEffect, useRef } from 'react';
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  const services = [
    {
      title: "CRM Integration",
      desc: "Connect your entire operational workflow into a single, high-fidelity source of truth.",
      icon: <Database className="w-6 h-6" />,
      tags: ["Supabase", "REST API", "Webhooks"]
    },
    {
      title: "Lead Acceleration",
      desc: "High-velocity logic that prioritizes and routes leads at sub-second speeds.",
      icon: <Zap className="w-6 h-6" />,
      tags: ["AI Scoring", "Auto-Routing", "SMS Sync"]
    },
    {
      title: "Data Intelligence",
      desc: "Real-time analytics and predictive modeling for data-driven precision.",
      icon: <BarChart4 className="w-6 h-6" />,
      tags: ["Forecasting", "Custom Dashboards", "Big Data"]
    },
    {
      title: "High-Fidelity Design",
      desc: "Premium UI/UX crafted for professional real estate and enterprise environments.",
      icon: <Code2 className="w-6 h-6" />,
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
    <div ref={containerRef} className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="services-hero">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">Our Capabilities</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-950 tracking-tight leading-[0.9] mb-8 max-w-5xl mx-auto italic">
                 Precision-Engineered <span className="text-emerald-600">Real Estate Solutions.</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
                 The CRM is just the engine. Our ecosystem is the fuel. Vishray Technologies provides the full-stack architecture required for high-velocity firm growth.
              </p>
           </div>

           <div className="relative max-w-6xl mx-auto">
              <div className="bg-white rounded-[3rem] p-4 border border-slate-100 shadow-2xl overflow-hidden aspect-[16/7] relative">
                 <Image src="/assets/services-hero.png" alt="Data Intelligence" fill className="object-cover rounded-[2.5rem]" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="service-card bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all group flex flex-col justify-between h-[450px] shadow-sm hover:shadow-xl">
                 <div>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 border border-emerald-100">
                       {React.cloneElement(s.icon as React.ReactElement, { className: 'w-7 h-7' } as any)}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-6 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                       {s.desc}
                    </p>
                 </div>
                 <div className="mt-10 pt-10 border-t border-slate-200 flex flex-wrap gap-3">
                    {s.tags.map(tag => (
                       <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                          {tag}
                       </span>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Process/CTA */}
      <section className="py-24 lg:py-40 bg-slate-950 shadow-2xl overflow-hidden relative rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6 text-center text-white relative z-10">
           <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Transform Your <br /> Operational Velocity</h2>
           <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
              Join the elite firms already using Vishray Technologies architecture to dominate their markets.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-500/20">
                 Get Started
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto px-12 py-5 rounded-2xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all">
                 View Pricing
              </Link>
           </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 -z-0" />
      </section>
    </div>
  );
}
