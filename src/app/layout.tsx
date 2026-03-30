import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogNotification from "@/components/BlogNotification";
import ConsultationSidebar from "@/components/ConsultationSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precision Real Estate | High-Fidelity Advisory",
  description: "Precision Real Estate delivers high-velocity investment solutions, property management, and intelligent market analysis for elite clients.",
  keywords: ["Real Estate Investment", "High-Fidelity Real Estate", "Property Management", "Market Intelligence", "Precision Real Estate"],
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-700">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ConsultationSidebar />
        <BlogNotification />
      </body>
    </html>
  );
}
