'use client';

import { motion } from 'framer-motion';
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

export default function Home() {
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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-white">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900"
            >
              Building <span className="text-yellow-600">Smart</span> Digital Solutions for Your Business
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              CRM, Mobile Apps & Websites – Delivered Fast, Affordable & Reliable with current industry best practices.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/contact"
                className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg shadow-yellow-200 hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="bg-white border border-yellow-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-50 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-600">Expert engineering across the full technology stack.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-yellow-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-yellow-500/5 transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <Link href="/services" className="inline-flex items-center text-yellow-600 mt-6 font-semibold hover:underline group">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 border-y border-yellow-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Vishray Technologies?</h2>
              <p className="text-slate-600 text-lg">
                We combine industry expertise with a client-first approach to ensure your digital transformation is seamless and effective.
              </p>
              <div className="space-y-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-yellow-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm border border-yellow-100 flex items-center justify-center rounded-lg">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{val.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-50 rounded-3xl p-8 border border-yellow-100 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl text-center border border-yellow-50 shadow-sm">
                    <Users className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                    <div className="text-2xl font-black text-slate-900">20+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Developers</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl text-center border border-yellow-50 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
                    <div className="text-2xl font-black text-slate-900">100+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Projects</div>
                  </div>
                </div>
                {/* Visual Placeholder for Team Image */}
                <div className="mt-6 aspect-video bg-yellow-50 rounded-2xl border border-dashed border-yellow-200 flex items-center justify-center">
                  <span className="text-slate-500 text-sm italic">Experienced Team of Full-stack Experts</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-200/20 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Client Testimonials</h2>
            <p className="mt-4 text-slate-600">Trusted by startups and enterprises around the globe.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-yellow-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-24 h-24 text-yellow-600 rotate-12" />
                </div>
                <p className="text-lg italic text-slate-700 relative z-10">"{t.content}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-yellow-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 capitalize">{t.name}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden bg-yellow-400">
        <div className="absolute inset-0 bg-yellow-400 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's build your next big project together</h2>
          <p className="text-slate-800 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From custom CRM tools to mobile apps, our team of experts is ready to transform your vision into reality.
          </p>
          <Link
            href="/contact"
            className="bg-white text-slate-900 px-10 py-4 rounded-full font-black hover:scale-105 transition-transform inline-block shadow-2xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}

