'use client';

import { 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  BarChart4,
  Code2
} from 'lucide-react';
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
      <section className="bg-yellow-50 border-b border-yellow-101 py-24 services-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-yellow-400 text-slate-900 text-sm font-bold uppercase tracking-wider">
            Engineering Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Our Premium Services
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            From architecture to deployment, we offer end-to-end digital transformation services tailored for modern business needs.
          </p>
        </div>
      </section>

      {/* Services Breakdowns */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 services-list">
        <div className="space-y-32">
          {allServices.map((service, index) => (
            <div 
              id={service.id}
              key={service.id}
              className={`service-row flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start lg:items-center scroll-mt-24`}
            >
              <div className="flex-1 space-y-8">
                <div className="p-4 bg-yellow-50 rounded-3xl inline-block border border-yellow-100 shadow-sm">
                   {service.icon}
                </div>
                <div className="space-y-4">
                   <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                   <p className="text-slate-600 text-lg leading-relaxed italic">
                    &ldquo;{service.description}&rdquo;
                   </p>
                </div>

                <div className="bg-yellow-50/50 p-8 rounded-3xl border border-yellow-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                     <Zap className="w-5 h-5 text-yellow-600" /> Key Benefits
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
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

              <div className="flex-1 w-full lg:w-auto">
                 <div className="aspect-square bg-slate-50 rounded-[3rem] border border-yellow-50 flex items-center justify-center p-4 relative overflow-hidden group shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-colors z-10" />
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-12 text-center text-xs font-bold text-white shadow-sm opacity-90 uppercase tracking-[0.5em] z-20">
                       Vishray Tech Stack
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 text-white py-24 shadow-2xl overflow-hidden relative rounded-t-[4rem] process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-8 relative inline-block">
             <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl relative">
                <Image 
                  src="https://media.giphy.com/media/3o7TKSjPQCp-C8O1qM/giphy.gif" 
                  alt="Coding Process" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
             </div>
             <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Live Logic
             </div>
          </div>
          <h2 className="text-3xl font-bold mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', desc: 'Requirements analysis and goal setting.' },
              { title: 'Designing', desc: 'UI/UX layout and system architecture.' },
              { title: 'Deployment', desc: 'Production-ready code and release.' },
              { title: 'Optimization', desc: 'Ongoing updates and full admin support.' }
            ].map((p, i) => (
              <div key={i} className="process-step relative group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                 <div className="text-4xl font-black text-blue-600/30 mb-4">0{i+1}</div>
                 <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                 <p className="text-slate-400 text-sm">{p.desc}</p>
                 {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] text-slate-700"> → </div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
