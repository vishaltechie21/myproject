'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
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
            <AlertTriangle className="w-10 h-10 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-black leading-tight">Disclaimer</h1>
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
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">1. External Links Disclaimer</h2>
              <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. These external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by Vishray Technologies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">2. Accuracy of Information</h2>
              <p>
                The information provided on this Site is for general informational purposes only. While we attempt to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">3. Service Performance</h2>
              <p>
                As a software development company, our results and project success are heavily dependent on specific client requirements and collaboration. Case studies and success stories presented on the Site are illustrative and do not guarantee identical results for every project.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">4. Errors and Omissions</h2>
              <p>
                Vishray Technologies assumes no responsibility for errors or omissions in the contents of the Service. We reserve the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">5. No Professional Advice</h2>
              <p>
                The Site cannot and does not contain legal/financial/medical/etc. advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">6. Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, you can contact us at <span className="text-yellow-600 font-bold">legal@vishray.com</span>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
