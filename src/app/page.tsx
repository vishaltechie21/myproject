'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Database, 
  Clock, 
  ShieldCheck, 
  BadgeDollarSign,
  Users,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-desc', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-btns', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: 'power3.out'
      });

      gsap.from('.hero-bg-img', {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });

      gsap.to('.hero-scroll-indicator', {
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: 'power1.inOut'
      });

      gsap.to('.hero-scroll-indicator div', {
        height: 0,
        repeat: -1,
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true
      });

      // Service Cards Animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out'
      });

      // Why Choose Us Section
      gsap.from('.why-choose-content > *', {
        scrollTrigger: {
          trigger: '.why-choose-section',
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Core Values Animation
      gsap.from('.value-item', {
        scrollTrigger: {
          trigger: '.values-list',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Stats Animation
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      // Testimonials Animation
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });

      // Final CTA Animation
      gsap.from('.cta-content > *', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Database className="w-10 h-10 text-yellow-600" />,
      title: 'CRM Development',
      description: 'Customized client relationship management tools to automate your sales and support workflows.'
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-600" />,
      title: 'Mobile App Development',
      description: 'High-performance native and cross-platform mobile applications for Android and iOS.'
    },
    {
      icon: <Globe className="w-10 h-10 text-yellow-600" />,
      title: 'Website Development',
      description: 'Modern, responsive, and SEO-friendly websites that drive user engagement and conversions.'
    }
  ];

  const coreValues = [
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: 'On-Time Delivery',
      desc: 'We value your time. Our agile methodology ensures we meet deadlines consistently without compromising quality.'
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-yellow-600" />,
      title: 'Affordable Pricing',
      desc: 'Transparent and competitive pricing plans tailored for small startups and large corporations alike.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
      title: 'Full Admin Support',
      desc: 'Dedicated technical support team available to assist you 24/7 with post-launch maintenance and updates.'
    }
  ];

  const testimonials = [
    {
      name: 'John Miller',
      role: 'CEO, TechFlow Solutions',
      content: 'Vishray Technologies delivered our custom CRM ahead of schedule. Their attention to detail and proactive communication was impressive.'
    },
    {
      name: 'Sarah Chen',
      role: 'Founder, Applyst',
      content: 'The mobile app they developed for us has a flawless UI and amazing performance. Our user retention has increased by 40% since launch.'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 -z-10 bg-slate-50">
          <Image 
            src="/assets/hero-illustration.png" 
            alt="Digital Solutions Illustration" 
            fill
            className="hero-bg-img object-cover opacity-70"
            priority
          />
          {/* Gradients Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>
 
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 pt-28 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl hero-content text-center md:text-left">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 drop-shadow-sm uppercase tracking-tighter">
              Building <span className="text-yellow-600">Smart</span> <br className="sm:hidden" /> Digital Solutions <br className="sm:hidden" /> at <span className="text-yellow-600">Vishray Technologies</span>
            </h1>
            <p className="hero-desc mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mx-auto md:mx-0 italic">
              CRM, Mobile Apps & Websites – Delivered Fast, Affordable & Reliable with current industry best practices.
            </p>
            <div className="hero-btns mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center md:items-start justify-center md:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-yellow-400 text-slate-900 px-8 py-5 sm:py-4 rounded-full font-bold shadow-lg shadow-yellow-200 hover:scale-105 transition-transform flex items-center justify-center gap-2 group text-sm sm:text-base uppercase tracking-widest"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto bg-white border border-yellow-200 text-slate-700 px-8 py-5 sm:py-4 rounded-full font-bold hover:bg-yellow-50 transition-colors text-center text-sm sm:text-base uppercase tracking-widest"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
 
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-scroll-indicator opacity-0 invisible md:visible">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Scroll Down</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-400 to-transparent" />
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 uppercase tracking-tighter">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full shadow-sm shadow-yellow-400/20" />
            <p className="mt-6 text-slate-600 text-sm md:text-base font-medium italic underline-offset-4 underline decoration-yellow-400/10">Expert engineering across the full technology stack.</p>
          </div>
          
          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card p-6 md:p-8 bg-white border border-yellow-101 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-yellow-500/5 transition-all text-center sm:text-left group"
              >
                <div className="mb-6 flex justify-center sm:justify-start group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm italic font-medium">
                  {service.description}
                </p>
                <Link href="/services" className="inline-flex items-center text-yellow-600 mt-6 font-black text-[10px] uppercase tracking-widest hover:underline group underline-offset-4 decoration-2">
                  Learn more <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section py-16 md:py-24 border-y border-yellow-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="why-choose-content space-y-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight uppercase">Why Choose Vishray Technologies?</h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium italic underline-offset-4 underline decoration-yellow-400/10">
                We combine industry expertise with a client-first approach to ensure your digital transformation is seamless and effective.
              </p>
              <div className="values-list space-y-4 md:space-y-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="value-item flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-100 items-center sm:items-start text-center sm:text-left group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm border border-yellow-100 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1 tracking-tight text-sm md:text-base uppercase">{val.title}</h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none px-2 sm:px-0">
              <div className="bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-8 border border-yellow-100 relative z-10 shadow-2xl backdrop-blur-sm">
                <div className="stats-grid grid grid-cols-2 gap-4 md:gap-6">
                  <div className="stat-card p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl text-center border border-yellow-50 shadow-sm hover:shadow-lg transition-shadow">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-yellow-600 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">20+</div>
                    <div className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Developers</div>
                  </div>
                  <div className="stat-card p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl text-center border border-yellow-50 shadow-sm hover:shadow-lg transition-shadow">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-500 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">100+</div>
                    <div className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Projects</div>
                  </div>
                </div>
                {/* Visual Placeholder for Team Image */}
                <div className="mt-6 aspect-video rounded-[1.5rem] md:rounded-2xl border border-yellow-200 relative overflow-hidden shadow-inner bg-white">
                  <Image 
                    src="/assets/team-collaboration.png"
                    alt="Our Expert Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-4 text-center text-[9px] font-black text-white/80 uppercase tracking-[0.3em] z-20">
                    Engineering Culture
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-200/20 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 uppercase tracking-tighter">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">Client Testimonials</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-slate-600 text-sm md:text-base font-medium italic underline-offset-4 underline decoration-yellow-400/10">Trusted by startups and enterprises around the globe.</p>
          </div>
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card p-6 md:p-8 bg-white rounded-[2rem] border border-yellow-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-20 h-20 md:w-24 md:h-24 text-yellow-600 rotate-12" />
                </div>
                <p className="text-base md:text-lg italic text-slate-700 relative z-10 font-medium leading-[1.6]">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-slate-50 pt-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-yellow-700 overflow-hidden relative border border-yellow-200 shadow-sm">
                    <Image 
                      src={`/assets/team-member-${(idx % 4) + 1}.png`} 
                      alt={t.name}
                      fill
                      className="object-cover p-1"
                    />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 text-sm md:text-base capitalize tracking-tight">{t.name}</h5>
                    <p className="text-[10px] md:text-xs text-slate-500 font-black uppercase tracking-widest opacity-60 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section py-16 md:py-24 relative overflow-hidden bg-slate-900 rounded-t-[2.5rem] md:rounded-t-[4rem]">
        <div className="absolute inset-0 bg-yellow-400/5 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center cta-content uppercase tracking-tighter">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">Let's build your next <br className="sm:hidden" /> <span className="text-yellow-400">big project</span> together</h2>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium italic underline-offset-8 underline decoration-yellow-400/10 transition-all">
            From custom CRM tools to mobile apps, our team of experts is ready to transform your vision into reality.
          </p>
          <div className="w-full flex justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-yellow-400 text-slate-900 px-10 sm:px-16 py-5 sm:py-6 rounded-full font-black hover:scale-105 transition-transform inline-flex items-center justify-center gap-4 shadow-2xl uppercase tracking-widest text-sm sm:text-lg"
            >
              Start Your Journey <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

