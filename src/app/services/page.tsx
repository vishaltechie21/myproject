'use client';

import { 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  BarChart4,
  Code2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header > *', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.service-row', {
        scrollTrigger: {
          trigger: '.services-list',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power2.out'
      });

      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const allServices = [
    {
      id: 'crm',
      title: 'CRM Development',
      icon: <Database className="w-12 h-12 text-yellow-600" />,
      description: 'Streamline your sales and operations with custom-built CRM systems that scale as you grow.',
      benefits: [
        'Automated lead management',
        'Sales funnel visualization',
        'Real-time reporting and analytics',
        'Email marketing integration',
        'Unified customer database'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Prisma'],
      image: '/assets/crm-service.png'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: <Smartphone className="w-12 h-12 text-yellow-600" />,
      description: 'Capture the mobile market with intuitive, feature-rich applications for both iOS and Android platforms.',
      benefits: [
        'High-performance native feel',
        'Offline capability',
        'Push notification systems',
        'Secure payment gateway integration',
        'Cross-platform efficiency'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      image: '/assets/mobile-app-service.png'
    },
    {
      id: 'web',
      title: 'Website Development',
      icon: <Globe className="w-12 h-12 text-yellow-600" />,
      description: 'Establish a powerful online presence with modern, blazing-fast web applications designed for conversion.',
      benefits: [
        'SEO-optimized architecture',
        'Responsive mobile-first design',
        'Fast loading speeds',
        'Cloud-native deployment',
        'CMS integration'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel', 'AWS'],
      image: '/assets/web-dev-service.png'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col w-full pb-24 bg-white">
      <div className="h-20" /> {/* Spacer for fixed navbar */}
      {/* Header */}
      <section className="bg-yellow-50 border-b border-yellow-101 py-16 md:py-24 services-header">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center uppercase tracking-tighter">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-yellow-400 text-slate-900 text-[10px] sm:text-xs font-black uppercase tracking-widest leading-none shadow-sm">
            Engineering Excellence
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Our Premium Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium italic underline-offset-4 underline decoration-yellow-400/30">
            From architecture to deployment, we offer end-to-end digital transformation services tailored for modern business needs.
          </p>
        </div>
      </section>

      {/* Services Breakdowns */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8 services-list">
        <div className="space-y-20 md:space-y-32">
          {allServices.map((service, index) => (
            <div 
              id={service.id}
              key={service.id}
              className={`service-row flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-16 items-start lg:items-center scroll-mt-24 text-center lg:text-left`}
            >
              <div className="flex-1 space-y-8 w-full flex flex-col items-center lg:items-start">
                <div className="p-4 bg-yellow-50 rounded-3xl inline-block border border-yellow-100 shadow-sm mx-auto lg:mx-0">
                   {service.icon}
                </div>
                <div className="space-y-4">
                   <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">{service.title}</h2>
                   <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic max-w-xl mx-auto lg:mx-0">
                    &ldquo;{service.description}&rdquo;
                   </p>
                </div>

                <div className="bg-yellow-50/50 p-6 md:p-8 rounded-3xl border border-yellow-100 shadow-sm w-full">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-center lg:justify-start gap-2 text-sm uppercase tracking-wide">
                     <Zap className="w-5 h-5 text-yellow-600" /> Key Benefits
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4 text-left">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                   <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest">Technologies Used</h4>
                   <div className="flex flex-wrap gap-2">
                      {service.technologies.map(tech => (
                        <span key={tech} className="px-4 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-bold border border-yellow-100 shadow-sm">
                          {tech}
                        </span>
                      ))}
                   </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                 <div className="aspect-square sm:aspect-video lg:aspect-square bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-yellow-50 flex items-center justify-center p-4 relative overflow-hidden group shadow-xl max-w-2xl mx-auto lg:max-w-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-colors z-10" />
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-12 text-center text-[10px] sm:text-xs font-black text-white shadow-sm opacity-90 uppercase tracking-[0.5em] z-20">
                       Vishray Tech Stack
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Specialized Solutions */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 uppercase tracking-tighter shadow-inner">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-yellow-400 text-[10px] font-black uppercase tracking-widest leading-none">
                Industry Specific
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Specialized <span className="text-yellow-600">Product Solutions</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg italic font-medium underline decoration-yellow-400/20 underline-offset-8">
                Go beyond custom code with our pre-built, hyper-customizable industry solutions designed for specific growth verticals.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Marketing & Engagement', 
                  desc: 'Scale your reach with automated campaigns, social listening, and advanced lead tracking.',
                  href: '/solutions/marketing',
                  icon: <Zap className="w-10 h-10 text-yellow-600" />
                },
                { 
                  title: 'Service & Help Desk', 
                  desc: 'Provide world-class support with intelligent ticketing, live chat, and automated flows.',
                  href: '/solutions/service',
                  icon: <Zap className="w-10 h-10 text-yellow-600" />
                },
                { 
                  title: 'Operations & HR', 
                  desc: 'Streamline talent acquisition and internal workflows with enterprise-grade operational tools.',
                  href: '/solutions/operations',
                  icon: <Zap className="w-10 h-10 text-yellow-600" />
                }
              ].map((sol, i) => (
                <Link 
                  key={i} 
                  href={sol.href}
                  className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full text-center sm:text-left"
                >
                  <div className="w-16 h-16 bg-yellow-50 rounded-3xl flex items-center justify-center mb-6 border border-yellow-100 group-hover:bg-yellow-400 transition-colors mx-auto sm:mx-0">
                     {sol.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors flex items-center justify-center sm:justify-start gap-2">
                    {sol.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic opacity-80 decoration-yellow-400/10 underline underline-offset-4 decoration-2">
                    {sol.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-center sm:justify-between">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expand Insights</span>
                     <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600">New Product</span>
                     </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 shadow-2xl overflow-hidden relative rounded-t-[2.5rem] md:rounded-t-[4rem] process-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-8 relative inline-block">
             <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl relative">
                <Image 
                  src="https://media.giphy.com/media/3o7TKSjPQCp-C8O1qM/giphy.gif" 
                  alt="Coding Process" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
             </div>
             <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
                Live Logic
             </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-12 sm:mb-16 tracking-tight">Our Development Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', desc: 'Requirements analysis and goal setting.' },
              { title: 'Designing', desc: 'UI/UX layout and system architecture.' },
              { title: 'Deployment', desc: 'Production-ready code and release.' },
              { title: 'Optimization', desc: 'Ongoing updates and full admin support.' }
            ].map((p, i) => (
              <div key={i} className="process-step relative group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 md:border-transparent">
                 <div className="text-4xl sm:text-5xl font-black text-yellow-400/20 mb-4 transition-colors group-hover:text-yellow-400/40">0{i+1}</div>
                 <h4 className="text-lg sm:text-xl font-bold mb-2 tracking-tight">{p.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                 {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] text-slate-700 font-bold"> → </div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
