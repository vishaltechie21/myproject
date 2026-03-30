import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Services', href: '/services' },
        { label: 'Success Stories', href: '/blog' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Investment Advisory', href: '/services/crm' },
        { label: 'Portfolio Management', href: '/services/mobile' },
        { label: 'Market Intelligence', href: '/services/web' },
        { label: 'Luxury Assets', href: '/services/uiux' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-slate-950 tracking-tight">
                Precision<span className="text-emerald-600">RealEstate</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xs">
              Redefining luxury and commercial real estate through high-fidelity market intelligence and high-velocity investment logic.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-slate-950 font-bold text-sm mb-6 uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-slate-950 font-bold text-sm mb-6 uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">precision@vishray.io</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">+1 (888) 555-0129</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">1200 Precision Way, San Francisco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Precision Real Estate. High-fidelity investment logic.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-emerald-600 transition-colors">Cookie Policy</Link>
            <Link href="/security" className="hover:text-emerald-600 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
