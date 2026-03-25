import React from 'react';
import Link from 'next/link';
import { Rocket, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
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
        { label: 'CRM Development', href: '/services' },
        { label: 'App Development', href: '/services' },
        { label: 'Web Development', href: '/services' },
        { label: 'UI/UX Design', href: '/services' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg overflow-hidden relative">
                <Image 
                  src="/assets/logo.png" 
                  alt="Vishray Logo" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Vishray Technologies
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Building smart digital solutions for businesses worldwide. We deliver fast, affordable, and reliable tech solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-400 hover:text-slate-900 transition-all transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-yellow-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                <Mail className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span>contact@vishray.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                <Phone className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span>123 Tech Square, Smart City, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 space-y-4 md:space-y-0 text-center md:text-left">
          <p>© {currentYear} Vishray Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-yellow-600 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
