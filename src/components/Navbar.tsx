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
      className={`fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group min-w-0">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Vishray<span className="text-emerald-500">Technologies</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/solutions" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Solutions</Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Blog</Link>
            
            <div className="flex items-center space-x-4 ml-4">
              <Link href="/signin" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</Link>
              <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 p-6 space-y-4 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 text-lg font-medium transition-all ${
                pathname === link.href 
                  ? 'text-emerald-400' 
                  : 'text-slate-300 hover:text-emerald-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="block w-full bg-emerald-500 text-slate-950 py-4 rounded-xl text-center font-bold text-lg shadow-xl shadow-emerald-500/10"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
