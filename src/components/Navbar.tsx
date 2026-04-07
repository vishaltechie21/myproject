'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, Building2, HandCoins, Target, BarChart3, Settings, PhoneCall, Layout, Sparkles, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DemoModal from "./DemoModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const pathname = usePathname();
  
  // Smart Scroll Logic
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    if (!isOpen) window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen, isHydrated]);

  const megaMenus = {
    solutions: {
      items: [
        { title: 'Real Estate CRM', desc: 'Manage projects, inventory & sales velocity.', icon: <Building2 className="w-6 h-6" />, href: '/solutions' },
        { title: 'Loan / DSA CRM', desc: 'Track loan leads, documents & payouts.', icon: <HandCoins className="w-6 h-6" />, href: '/solutions' },
        { title: 'Finance CRM', desc: 'Specialized for advisors and agents.', icon: <Target className="w-6 h-6" />, href: '/solutions' },
        { title: 'Meta Ads Sync', desc: '2-second lead capture from Meta ads.', icon: <BarChart3 className="w-6 h-6" />, href: '/services' },
      ],
      more: [
        { label: 'Case Studies', href: '/blog' },
        { label: 'Success Stories', href: '/about' },
        { label: 'Security Protocols', href: '/security' },
        { label: 'SaaS Logic', href: '/solutions' },
      ]
    },
    services: {
      items: [
        { title: 'Custom CRM Dev', desc: 'Bespoke logic tailred to your firm.', icon: <Settings className="w-6 h-6" />, href: '/services' },
        { title: 'Calling Systems', desc: 'IVR, Auto-dialer & Call tracking.', icon: <PhoneCall className="w-6 h-6" />, href: '/services' },
        { title: 'Websites & Hosting', desc: 'Institutional grade web identity.', icon: <Globe className="w-6 h-6" />, href: '/websites' },
        { title: 'Ad Management', desc: 'Meta & Google ads for lead gen.', icon: <Layout className="w-6 h-6" />, href: '/services' },
        { title: 'Strategic Audit', desc: 'Operational velocity consultancy.', icon: <Sparkles className="w-6 h-6" />, href: '/about' },
      ],
      more: [
        { label: 'Help Center', href: '/help-center' },
        { label: 'API Records', href: '/services' },
        { label: 'About Vishray', href: '/about' },
        { label: 'Support Node', href: '/contact' },
      ]
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] bg-white/90 backdrop-blur-2xl border-b border-slate-100 h-24 flex items-center transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100 shadow-sm' : '-translate-y-full opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center gap-12">
              <Link href="/" className="group flex items-center">
                <span className="text-2xl font-black text-slate-950 tracking-tighter uppercase italic flex items-center">
                  Vishray <span className="ml-2 hidden sm:inline text-slate-400 font-bold lowercase tracking-normal">Technology.</span>
                  <span className="text-success h-2 w-2 rounded-full bg-success inline-block ml-1 animate-pulse"></span>
                </span>
              </Link>

              {/* Desktop Menu Items */}
              <div className="hidden lg:flex items-center space-x-10">
                <Link href="/" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${pathname === '/' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>Home</Link>
                
                {/* Solutions Dropdown */}
                <div 
                  className="relative group h-24 flex items-center"
                  onMouseEnter={() => setActiveMenu('solutions')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 transition-colors ${activeMenu === 'solutions' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>
                    Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMenu === 'solutions' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-24 left-[-100px] w-[650px] bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] overflow-hidden flex"
                      >
                         <div className="flex-1 p-10 grid grid-cols-2 gap-8">
                            <div className="col-span-2 text-[9px] font-black tracking-[0.4em] text-success uppercase mb-2">Architectural Logic</div>
                            {megaMenus.solutions.items.map((item, i) => (
                              <Link key={i} href={item.href} className="group/item flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors">
                                 <div className="w-12 h-12 rounded-xl bg-success/5 text-success flex items-center justify-center shrink-0 border border-success/10 group-hover/item:bg-success group-hover/item:text-white transition-all">
                                    {item.icon}
                                 </div>
                                 <div className="text-left">
                                    <div className="text-sm font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-2">{item.title}</div>
                                    <div className="text-[11px] font-medium text-slate-500 leading-tight italic">{item.desc}</div>
                                 </div>
                              </Link>
                            ))}
                         </div>
                         <div className="w-[200px] bg-slate-50/50 border-l border-slate-100 p-10">
                            <div className="text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase mb-8">More...</div>
                            <ul className="space-y-6">
                               {megaMenus.solutions.more.map((m, i) => (
                                 <li key={i}>
                                    <Link href={m.href} className="text-[10px] font-black text-slate-950 uppercase tracking-widest hover:text-success hover:translate-x-1 block transition-all">
                                       {m.label} <ArrowRight className="inline w-2.5 h-2.5 ml-1" />
                                    </Link>
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Dropdown */}
                <div 
                  className="relative group h-24 flex items-center"
                  onMouseEnter={() => setActiveMenu('services')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 transition-colors ${activeMenu === 'services' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>
                    Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMenu === 'services' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-24 left-[-200px] w-[650px] bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] overflow-hidden flex"
                      >
                         <div className="flex-1 p-10 grid grid-cols-2 gap-8">
                            <div className="col-span-2 text-[9px] font-black tracking-[0.4em] text-success uppercase mb-2">Capability Clusters</div>
                            {megaMenus.services.items.map((item, i) => (
                              <Link key={i} href={item.href} className="group/item flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors">
                                 <div className="w-12 h-12 rounded-xl bg-success/5 text-success flex items-center justify-center shrink-0 border border-success/10 group-hover/item:bg-success group-hover/item:text-white transition-all">
                                    {item.icon}
                                 </div>
                                 <div className="text-left">
                                    <div className="text-sm font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-2">{item.title}</div>
                                    <div className="text-[11px] font-medium text-slate-500 leading-tight italic">{item.desc}</div>
                                 </div>
                              </Link>
                            ))}
                         </div>
                         <div className="w-[200px] bg-slate-50/50 border-l border-slate-100 p-10">
                            <div className="text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase mb-8">More...</div>
                            <ul className="space-y-6">
                               {megaMenus.services.more.map((m, i) => (
                                 <li key={i}>
                                    <Link href={m.href} className="text-[10px] font-black text-slate-950 uppercase tracking-widest hover:text-success hover:translate-x-1 block transition-all">
                                       {m.label} <ArrowRight className="inline w-2.5 h-2.5 ml-1" />
                                    </Link>
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/pricing" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${pathname === '/pricing' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>Pricing</Link>
                <Link href="/websites" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${pathname === '/websites' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>Websites <span className="bg-success text-white px-1.5 py-0.5 rounded-full text-[8px] animate-pulse">New</span></Link>
                <Link href="/blog" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${pathname === '/blog' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>Blog</Link>
                <Link href="/contact" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${pathname === '/contact' ? 'text-success' : 'text-slate-500 hover:text-success'}`}>Contact</Link>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="bg-success text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-success/20 active:scale-95 hover:scale-105"
                >
                  Book Demo Hub
                </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-2xl text-slate-950 flex items-center justify-center bg-slate-50 transition-colors hover:text-success border border-slate-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-24 left-0 w-full bg-white border-b border-slate-100 lg:hidden overflow-hidden shadow-2xl"
            >
              <div className="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                 {['Home', 'Solutions', 'Services', 'Pricing', 'Blog', 'Contact'].map((label) => (
                   <Link 
                     key={label}
                     href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                     className="block text-2xl font-black text-slate-950 uppercase italic tracking-tighter"
                     onClick={() => setIsOpen(false)}
                   >
                     {label}
                   </Link>
                 ))}
                 <div className="pt-8 border-t border-slate-100 space-y-6">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setIsDemoOpen(true);
                      }}
                      className="block w-full bg-success text-white py-6 rounded-2xl text-center font-black text-lg uppercase tracking-widest shadow-xl shadow-success/20 animate-pulse"
                    >
                      BOOK DEMO
                    </button>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Navbar;
