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
  title: "Vishray Technologies | Building Smart Digital Solutions",
  description: "Vishray Technologies provides top-notch CRM development, mobile app development, and affordable website development services with a team of expert full-stack developers.",
  keywords: ["CRM development company", "Mobile app development services", "Affordable website development", "Vishray Technologies", "IT consulting", "Custom software solutions"],
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
      <body className="min-h-full flex flex-col bg-white text-slate-900">
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
