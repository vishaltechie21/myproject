import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogNotification from "@/components/BlogNotification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emerald Precision | High-Fidelity Real Estate CRM",
  description: "Emerald Precision delivers high-velocity CRM solutions, mobile app development, and intelligent workflow automation for modern real estate agencies.",
  keywords: ["Real Estate CRM", "High-Fidelity CRM", "Workflow Automation", "Emerald Precision", "Property Management Software", "Custom CRM Solutions"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-500">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BlogNotification />
      </body>
    </html>
  );
}
