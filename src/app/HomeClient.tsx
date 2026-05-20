'use client';

import Link from 'next/link';
import { useState } from 'react';
import Hero from '@/components/Hero';
import ChatWidget from '@/components/ChatWidget';
import WhatsAppButton from '@/components/WhatsAppButton';
import DemoModal from '@/components/DemoModal';

const ecosystemFeatures = [
  {
    title: "CRM FEATURES",
    icon: "📊",
    features: [
      "LEAD MANAGEMENT",
      "PIPELINE TRACKING",
      "FOLLOW-UPS & REMINDERS",
      "TEAM MANAGEMENT",
    ],
  },
  {
    title: "CALLING SYSTEM",
    icon: "📞",
    features: [
      "AUTO DIALER",
      "CALL RECORDING",
      "CALL ANALYTICS",
      "IVR INTEGRATION",
    ],
  },
  {
    title: "MARKETING SYNC",
    icon: "📈",
    features: [
      "META ADS INTEGRATION",
      "GOOGLE ADS INTEGRATION",
      "LEAD CAPTURE AUTOMATION",
      "CAMPAIGN ANALYTICS",
    ],
  },
  {
    title: "INVENTORY MGMT",
    icon: "📋",
    features: [
      "PROPERTY LISTINGS",
      "AVAILABILITY TRACKING",
      "PROJECT MANAGEMENT",
      "FLOOR PLANS SYNC",
    ],
  },
];

const portalTypes = [
  {
    title: "REAL ESTATE CRM",
    description: "Architected for Builders, Developers, and Channel Partners to manage projects and sales velocity.",
  },
  {
    title: "LOAN / DSA CRM",
    description: "Perfect for DSA partners to track loan applications, documents, and payout status with ease.",
  },
  {
    title: "FINANCE CRM",
    description: "Specialized for Financial Advisors and Insurance agents to manage client portfolios and renewals.",
  },
];

const advantages = [
  {
    title: "SAAS HOSTING",
    description: "Institutional grade web hosting included for your firm's identity.",
  },
  {
    title: "NICHE LOGIC",
    description: "Built specifically for Real Estate & Finance project velocity.",
  },
  {
    title: "SUB-SECOND UX",
    description: "Optimized interface for high-frequency lead management.",
  },
  {
    title: "CLIENT FIRST",
    description: "Dedicated support nodes for your operational success.",
  },
];

export default function HomeClient() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Unified Logic Ecosystem */}
      <section className="border-b border-slate-100 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6">Institutional Pillars</p>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-slate-950 mb-4">
              UNIFIED <span className="text-emerald-600">LOGIC</span> ECOSYSTEM.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemFeatures.map((feature) => (
              <div key={feature.title} className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-lg transition-all">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black italic text-slate-950 mb-8 tracking-tighter uppercase">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Grade Portals */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6">Precision Verticals</p>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-slate-950">
              INSTITUTIONAL <span className="text-emerald-600">GRADE</span> PORTALS.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portalTypes.map((portal) => (
              <div key={portal.title} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="text-6xl mb-8 opacity-50">🏢</div>
                <h3 className="text-2xl font-black italic text-slate-950 mb-4 tracking-tighter uppercase">{portal.title}</h3>
                <p className="text-slate-600 font-medium italic leading-relaxed mb-6">{portal.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all">
                  REVIEW ARCHITECTURE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vishray Advantage */}
      <section className="bg-slate-950 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6">The Vishray Advantage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-white/10 transition-all">
                <div className="text-4xl mb-6">⚙️</div>
                <h3 className="text-lg font-black italic text-white mb-3 tracking-tighter uppercase">{adv.title}</h3>
                <p className="text-sm text-slate-300 font-medium italic">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6">Deploy Vishray</p>
              <h2 className="text-4xl md:text-5xl font-black italic text-slate-950 mb-6 tracking-tighter">
                बुक करें उप्ना <span className="text-emerald-600">फ्री</span> डेमा.
              </h2>
              <p className="text-slate-600 text-base font-medium italic leading-relaxed mb-8 max-w-lg">
                Deploy vishray logic today. Join 1.2k+ firms scaling their DSA and Real Estate assets with institutional velocity.
              </p>
              <div className="flex items-center gap-4">
                <button onClick={() => setIsDemoOpen(true)} className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-lg shadow-success/20">
                  INITIATE AUDIT
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 bg-emerald-600/20 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">JOINED BY 1.2K+ EXPERTS</p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Full Identity</label>
                  <input type="text" placeholder="Agent Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-none font-medium" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Secure Link</label>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-none font-medium" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Sector Logic</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-none font-medium">
                    <option>Business Type</option>
                    <option>Real Estate</option>
                    <option>Loan Agent</option>
                    <option>Finance</option>
                  </select>
                </div>
                <button onClick={() => setIsDemoOpen(true)} className="w-full px-6 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-success/20">
                  INITIATE AUDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
      <WhatsAppButton />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
