'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  const services = [
    { name: 'CRM Development', href: '/services/crm' },
    { name: 'App Development', href: '/services/mobile' },
    { name: 'Web Development', href: '/services/web' },
    { name: 'UI/UX Design', href: '/services/uiux' },
  ];

  // ... previous logic
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      ref={navRef} 
      className="fixed w-full z-50 bg-white border-b border-yellow-101 shadow-md h-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="nav-item flex items-center space-x-3 group">
              <div className="w-12 h-12 relative group-hover:rotate-6 transition-transform">
                <Image src="/assets/logo.png" alt="Vishray Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap">
                VISHRAY <span className="text-yellow-600">TECHNOLOGIES</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-item text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/' ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'}`}>Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`nav-item text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${pathname.startsWith('/services') ? 'text-yellow-600' : 'text-slate-600 group-hover:text-yellow-600'}`}>
                Services <ChevronDown className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 py-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-4">Our Specialties</div>
                  {services.map((s) => (
                    <Link 
                      key={s.name} 
                      href={s.href} 
                      className={`block px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === s.href ? 'bg-yellow-400 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:pl-6'}`}
                    >
                      {s.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-slate-50">
                     <Link href="/services" className="block px-4 py-2 text-[10px] font-black uppercase tracking-widest text-yellow-600 hover:text-slate-900 transition-colors">View All Services →</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={`nav-item text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/about' ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'}`}>About</Link>
            <Link href="/blog" className={`nav-item text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/blog' ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'}`}>Blog</Link>
            <Link href="/contact" className="nav-item bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-lg active:scale-95">Get Started</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-yellow-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-yellow-100 p-4 space-y-2 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                pathname === link.href 
                  ? 'bg-yellow-400 text-slate-900' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Our Services</div>
          {services.map((s) => (
            <Link 
              key={s.name} 
              href={s.href} 
              className="block px-4 py-2 text-sm font-bold text-slate-500 hover:text-yellow-600"
              onClick={() => setIsOpen(false)}
            >
              {s.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full bg-slate-900 text-white py-4 rounded-xl text-center font-black uppercase tracking-widest mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
