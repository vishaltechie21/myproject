'use client';

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  
  // Smart Scroll Logic
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Threshold to prevent jitter
        if (Math.abs(currentScrollY - lastScrollY) < 10) return;

        // User's request logic: 
        // Showing standard premium behavior (Hide on Down, Show on Up)
        // because "nicha scroll" usually means "back to top" in many contexts
        // or a preference for the bar to appear when needed!
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (!isOpen) { // Don't hide navbar if mobile menu is open
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsVisible(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const services = [
    { name: 'CRM Development', href: '/services/crm', desc: 'Custom tools for sales & support' },
    { name: 'App Development', href: '/services/mobile', desc: 'Native & cross-platform apps' },
    { name: 'Web Development', href: '/services/web', desc: 'Modern & fast web experiences' },
    { name: 'UI/UX Design', href: '/services/uiux', desc: 'User-centric design solutions' },
  ];

  const solutions = [
    { name: 'Marketing & Engagement', href: '/solutions/marketing', icon: 'fas fa-bullhorn', isNew: true },
    { name: 'Service & Help Desk', href: '/solutions/service', icon: 'fas fa-headset', isNew: true },
    { name: 'Operations & HR', href: '/solutions/operations', icon: 'fas fa-briefcase', isNew: true },
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
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-yellow-101 shadow-md h-20 flex items-center transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="nav-item flex items-center space-x-2 sm:space-x-3 group min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0 group-hover:rotate-6 transition-transform">
                <Image src="/assets/logo.png" alt="Vishray Logo" fill className="object-contain" />
              </div>
              <span className="text-[15px] sm:text-[17px] lg:text-xl font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap overflow-hidden">
                VISHRAY <span className="text-yellow-600 hidden lg:inline">TECHNOLOGIES</span>
                <span className="text-yellow-600 lg:hidden">TECH</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className={`nav-item text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/' ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'}`}>Home</Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`nav-item text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 ${pathname.startsWith('/services') || pathname.startsWith('/solutions') ? 'text-yellow-600' : 'text-slate-600 group-hover:text-yellow-600'}`}>
                Solutions <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[800px] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-10 grid grid-cols-2 gap-12 animate-in fade-in zoom-in-95 duration-300">
                  <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50 pb-4">Core Services</div>
                    <div className="grid gap-3">
                      {services.map((s) => (
                        <Link 
                          key={s.name} 
                          href={s.href} 
                          className={`group flex flex-col p-4 rounded-[1.5rem] transition-all ${pathname === s.href ? 'bg-yellow-400' : 'hover:bg-slate-50'}`}
                        >
                          <span className={`text-xs font-black uppercase tracking-widest ${pathname === s.href ? 'text-slate-900' : 'text-slate-900'}`}>{s.name}</span>
                          <span className={`text-[10px] font-medium italic mt-1 ${pathname === s.href ? 'text-slate-800' : 'text-slate-400'}`}>{s.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50 pb-4">Specialized Products</div>
                    <div className="grid gap-3">
                      {solutions.map((s) => (
                        <Link 
                          key={s.name} 
                          href={s.href} 
                          className={`group flex items-center justify-between p-4 rounded-[1.5rem] transition-all ${pathname === s.href ? 'bg-yellow-400' : 'hover:bg-yellow-50/50 hover:pl-6'}`}
                        >
                          <div className="flex items-center gap-4">
                            <i className={`${s.icon} text-lg ${pathname === s.href ? 'text-slate-900' : 'text-yellow-600'}`}></i>
                            <span className={`text-xs font-black uppercase tracking-widest ${pathname === s.href ? 'text-slate-900' : 'text-slate-900'}`}>{s.name}</span>
                          </div>
                          {s.isNew && <span className="bg-slate-900 text-yellow-400 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">New</span>}
                        </Link>
                      ))}
                      <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-center">
                         <Link href="/services" className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-600 hover:text-slate-900 transition-all flex items-center gap-3 group/all">
                           Explore Full Stack Capabilities <ArrowRight className="w-4 h-4 group-hover/all:translate-x-2 transition-transform" />
                         </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={`nav-item text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/about' ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'}`}>About</Link>
            <Link href="/blog" className={`nav-item text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${pathname === '/blog' ? 'text-yellow-600' : 'text-slate-600 hover:text-yellow-600'}`}>Blog</Link>
            <Link href="/contact" className="nav-item bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-lg active:scale-95">Get Started</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
        <div className="absolute top-20 left-0 w-full bg-white border-b border-yellow-100 p-4 space-y-2 lg:hidden shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
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
          <div className="pt-4 pb-2 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-yellow-50 mb-2">Core Services</div>
          {services.map((s) => (
            <Link 
              key={s.name} 
              href={s.href} 
              className="block px-4 py-3 text-sm font-black uppercase tracking-widest text-slate-600 hover:text-yellow-600"
              onClick={() => setIsOpen(false)}
            >
              {s.name}
            </Link>
          ))}
          <div className="pt-6 pb-2 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-yellow-50 mb-2">Our Solutions</div>
          {solutions.map((s) => (
            <Link 
              key={s.name} 
              href={s.href} 
              className="flex items-center justify-between px-4 py-3 text-sm font-black uppercase tracking-widest text-yellow-600 hover:bg-yellow-50 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {s.name}
              {s.isNew && <span className="bg-slate-900 text-yellow-400 text-[8px] font-black px-2 py-1 rounded-full">New</span>}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full bg-slate-900 text-white py-5 rounded-[1.5rem] text-center font-black uppercase tracking-[0.2em] mt-8 shadow-xl"
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
