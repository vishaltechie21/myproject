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
    <footer className="bg-slate-50 border-t border-yellow-101">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand Info */}
          <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                <Image src="/assets/logo.png" alt="Vishray Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-black text-slate-800 tracking-tighter uppercase">
                VISHRAY <span className="text-yellow-600 sm:inline hidden">TECHNOLOGIES</span>
                <span className="text-yellow-600 sm:hidden inline">TECH</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-medium italic">
              &ldquo;Engineering the future of digital commerce with speed, affordability, and reliability.&rdquo;
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-yellow-100 text-yellow-600 hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-sm hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {sections.map((section) => (
            <div key={section.title} className="text-center md:text-left">
              <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-yellow-600 transition-colors text-sm font-bold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li className="flex items-start space-x-3 text-sm text-slate-600 font-medium">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="mt-1.5 break-all sm:break-normal">contact@vishray.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600 font-medium">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="mt-1.5">+91 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600 font-medium">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="mt-1.5">123 Tech Square, Smart City, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-20 pt-8 border-t border-yellow-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400 space-y-4 md:space-y-0 text-center md:text-left">
          <p>© {currentYear} VISHRAY TECHNOLOGIES. BUILT FOR SCALE.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <Link href="/privacy" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-yellow-600 transition-colors">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-yellow-600 transition-colors">Disclaimer</Link>
            <Link href="/sitemap" className="hover:text-yellow-600 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
