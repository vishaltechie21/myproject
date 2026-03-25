'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-10 h-10 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-black leading-tight">Privacy Policy</h1>
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
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">1. Information We Collect</h2>
              <p>
                Vishray Technologies collects information to provide better services to all our users. We collect information in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided via contact forms.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses and browser types.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to improve user experience.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">2. How We Use Information</h2>
              <p>
                We use the information we collect to maintain, protect, and improve our services, and to develop new solutions. Specifically, we use it to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and fulfill service requests.</li>
                <li>Send you updates, newsletters, and marketing materials if you have opted in.</li>
                <li>Analyze website traffic to optimize performance and user experience.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">3. Data Security</h2>
              <p>
                We work hard to protect Vishray Technologies and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use industry-standard encryption (SSL) and secure server environments.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">4. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at <span className="text-yellow-600 font-bold">privacy@vishray.com</span>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-yellow-101 pb-2">5. Updates to This Policy</h2>
              <p>
                Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
