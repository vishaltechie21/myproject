'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-20" />
      
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white uppercase tracking-tighter">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors mb-8 text-xs font-black">
            <ArrowLeft className="w-4 h-4" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-10 h-10 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-black leading-tight">Terms & Conditions</h1>
          </div>
          <p className="text-slate-400 text-sm md:text-base font-medium italic underline underline-offset-8 decoration-yellow-400/20">
            Last Updated: March 25, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 prose prose-slate prose-lg">
          <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing and using vishray.com and our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">2. Services Description</h2>
              <p>
                Vishray Technologies provides custom CRM, mobile, and web development services. All project timelines, costs, and deliverables are specified in separate service agreements signed by both parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">3. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to designs, logos, text, and graphics, is the property of Vishray Technologies or our licensors and is protected by copyright and intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">4. User Obligations</h2>
              <p>
                Users agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any illegal or unauthorized purpose.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Submit misleading or fraudulent information via our contact forms.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">5. Limitation of Liability</h2>
              <p>
                Vishray Technologies shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
