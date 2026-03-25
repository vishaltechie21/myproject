'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users2, Rocket, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      title: 'Our Mission',
      content: 'To empower businesses by providing innovative, scalable, and affordable digital solutions that drive growth and efficiency.'
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-600" />,
      title: 'Our Vision',
      content: 'To be a global leader in IT consultancy, recognized for our commitment to quality, client success, and ethical technology practices.'
    }
  ];

  const highlights = [
    { label: 'Experienced Developers', value: '15-20', icon: <Users2 className="w-5 h-5" /> },
    { label: 'Projects Completed', value: '100+', icon: <Rocket className="w-5 h-5" /> },
    { label: 'Client Satisfaction', value: '99%', icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col w-full pb-24 bg-white">
      {/* Header Section */}
      <section className="bg-yellow-50 py-20 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            About Vishray Technologies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
          >
            We are a team of passionate creators, engineers, and strategists dedicated to building the next generation of digital tools.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Why We Stand Out</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded on the principles of speed, affordability, and reliability, Vishray Technologies has quickly grown into a hub for full-stack excellence. We don&apos;t just write code; we build business solutions that solve real-world problems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our team consists of 15–20 high-caliber developers who specialize in modern frameworks. From complex CRM integrations to consumer-facing mobile apps, we bring a wealth of experience to every project.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 bg-yellow-50 rounded-xl border border-yellow-101 outline-none">
                  <div className="text-yellow-600 mb-2">{h.icon}</div>
                  <div className="text-2xl font-bold text-slate-900">{h.value}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tight">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border border-yellow-100 shadow-sm"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {v.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Our Expert Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-white border border-yellow-50 rounded-2xl mb-4 overflow-hidden relative shadow-sm">
                   <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <Users2 className="w-12 h-12" />
                   </div>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">Developer #{i + 1}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase mt-1">Full-stack Expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
