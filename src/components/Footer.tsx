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
        { label: 'CRM Development', href: '/services/crm' },
        { label: 'App Development', href: '/services/mobile' },
        { label: 'Web Development', href: '/services/web' },
        { label: 'UI/UX Design', href: '/services/uiux' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-white tracking-tight">
                Emerald<span className="text-emerald-500">Precision</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Eliminate the chaos of traditional property management. Emerald Precision leverages high-velocity logic to streamline your pipeline and maximize deal flow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-white font-semibold text-sm mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
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
            <h3 className="text-white font-semibold text-sm mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>precision@emerald.io</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+1 (888) 555-0129</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>1200 Precision Way, San Francisco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Emerald Precision. High-fidelity operational clarity.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-emerald-500 transition-colors">Cookie Policy</Link>
            <Link href="/security" className="hover:text-emerald-500 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
