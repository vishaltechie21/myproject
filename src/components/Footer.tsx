import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Solutions',
      links: [
        { label: 'Real Estate CRM', href: '/solutions' },
        { label: 'Loan / DSA CRM', href: '/solutions' },
        { label: 'Finance CRM', href: '/solutions' },
        { label: 'Marketing Auto-Sync', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Firm Vision', href: '/about' },
        { label: 'SaaS Pricing', href: '/pricing' },
        { label: 'Careers', href: '#' },
        { label: 'Contact Support', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-32 pb-20 rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-10 group">
              <span className="text-3xl font-black text-slate-950 tracking-tighter uppercase italic">
                Vishray<span className="text-success h-1.5 w-1.5 rounded-full bg-success inline-block ml-1 group-hover:scale-150 transition-transform"></span>
              </span>
            </Link>
            <p className="text-slate-500 font-medium italic leading-relaxed mb-10 max-w-xs">
              Architecting high-fidelity SaaS CRM solutions for the future of Real Estate & Finance firms. Scaling your project with sub-second velocity.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-success hover:border-success/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[10px] font-black text-slate-950 mb-10 uppercase tracking-[0.4em]">
                {section.title}
              </h3>
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-success transition-colors text-sm font-bold uppercase tracking-widest"
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
            <h3 className="text-[10px] font-black text-slate-950 mb-10 uppercase tracking-[0.4em]">
              Connect Protocol
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-success/5 flex items-center justify-center text-success border border-success/10">
                   <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-950 uppercase tracking-widest">hello@vishray.io</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-success/5 flex items-center justify-center text-success border border-success/10">
                   <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-950 uppercase tracking-widest">+91 999 000 8888</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-success/5 flex items-center justify-center text-success border border-success/10">
                   <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-slate-950 uppercase tracking-widest">Skyline Tower, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] space-y-6 md:space-y-0">
          <p>© {currentYear} Vishray Technologies. High-Velocity SaaS Intelligence.</p>
          <div className="flex space-x-10">
            <Link href="/privacy" className="hover:text-success transition-colors">Privacy Privacy</Link>
            <Link href="/terms" className="hover:text-success transition-colors">Terms of Operations</Link>
            <Link href="/cookie-policy" className="hover:text-success transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
