'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Map, Globe, Briefcase, Info, MessageCircle, Shield, FileText, AlertTriangle } from 'lucide-react';

export default function Sitemap() {
  const sections = [
    {
      title: 'Main Navigation',
      icon: <Globe className="w-6 h-6 text-yellow-600" />,
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
      icon: <Briefcase className="w-6 h-6 text-yellow-600" />,
      links: [
        { name: 'CRM Development', href: '/services/crm' },
        { name: 'App Development', href: '/services/mobile' },
        { name: 'Web Development', href: '/services/web' },
        { name: 'UI/UX Design', href: '/services/uiux' },
      ],
    },
    {
      title: 'Product Solutions',
      icon: <Info className="w-6 h-6 text-yellow-600" />,
      links: [
        { name: 'Marketing & Engagement', href: '/solutions/marketing' },
        { name: 'Service & Help Desk', href: '/solutions/service' },
        { name: 'Operations & HR', href: '/solutions/operations' },
      ],
    },
    {
      title: 'Legal & Info',
      icon: <Shield className="w-6 h-6 text-yellow-600" />,
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="h-20" />
      
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white uppercase tracking-tighter">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors mb-8 text-xs font-black">
            <ArrowLeft className="w-4 h-4" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Globe className="w-10 h-10 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-black leading-tight">Sitemap</h1>
          </div>
          <p className="text-slate-400 text-sm md:text-base font-medium italic underline underline-offset-8 decoration-yellow-400/20">
            A comprehensive guide to all pages on our site.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-yellow-101 pb-4">
                  {section.icon}
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center justify-between text-slate-600 hover:text-yellow-600 font-bold transition-all text-sm uppercase tracking-widest pl-2 hover:pl-4 border-l-2 border-transparent hover:border-yellow-400"
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
