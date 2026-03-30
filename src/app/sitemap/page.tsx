'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Map, Globe, Briefcase, Info, MessageCircle, Shield, FileText, AlertTriangle } from 'lucide-react';

export default function Sitemap() {
  const sections = [
    {
      title: 'Main Navigation',
      icon: <Globe className="w-6 h-6" />,
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Our Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Core Services',
      icon: <Briefcase className="w-6 h-6" />,
      links: [
        { name: 'CRM Development', href: '/services/crm' },
        { name: 'App Development', href: '/services/mobile' },
        { name: 'Web Development', href: '/services/web' },
        { name: 'UI/UX Design', href: '/services/uiux' },
      ],
    },
    {
      title: 'Product Solutions',
      icon: <Info className="w-6 h-6" />,
      links: [
        { name: 'Marketing & Engagement', href: '/solutions/marketing' },
        { name: 'Service & Help Desk', href: '/solutions/service' },
        { name: 'Operations & HR', href: '/solutions/operations' },
      ],
    },
    {
      title: 'Legal & Info',
      icon: <Shield className="w-6 h-6" />,
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
              <Map className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-950 tracking-tight leading-none italic uppercase">Site <span className="text-emerald-600">Mapping.</span></h1>
          </div>
          <p className="text-slate-600 text-sm md:text-lg font-medium italic">
            Visualizing the Vishray Technologies architectural hierarchy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 border border-emerald-100">
                    {React.cloneElement(section.icon as React.ReactElement, { className: 'w-6 h-6' } as any)}
                  </div>
                  <h2 className="text-lg font-bold text-slate-950 uppercase tracking-tight leading-none">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center justify-between text-slate-600 hover:text-emerald-600 font-bold transition-all text-xs uppercase tracking-widest pl-2 hover:pl-4 border-l-2 border-transparent hover:border-emerald-600 py-1"
                      >
                        {link.name}
                        <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
