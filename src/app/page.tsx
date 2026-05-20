import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Vishray Technologies | Building Smart Digital Solutions",
  description:
    "Vishray Technologies provides high-quality CRM development, web development, mobile app development, and digital transformation services for real estate and finance companies.",
  alternates: {
    canonical: "https://vishray.me",
  },
  openGraph: {
    title: "Vishray Technologies | Building Smart Digital Solutions",
    description:
      "Vishray Technologies provides high-quality CRM development, web development, mobile app development, and digital transformation services for real estate and finance companies.",
    url: "https://vishray.me",
  },
  twitter: {
    title: "Vishray Technologies | Building Smart Digital Solutions",
    description:
      "Vishray Technologies provides high-quality CRM development, web development, mobile app development, and digital transformation services for real estate and finance companies.",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vishray Technologies",
    "url": "https://vishray.me",
    "logo": "https://vishray.me/icon.png",
    "image": "https://vishray.me/og-image.png",
    "description": "Vishray Technologies builds CRM systems, managed websites, mobile apps, and growth tools for real estate and finance businesses.",
    "email": "precision@vishray.io",
    "sameAs": [
      "https://github.com/vishaltechie21",
      "https://linkedin.com/in/vishal-thakur-vt"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vishray Technologies",
    "url": "https://vishray.me",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vishray.me/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Services offered by Vishray Technologies",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "CRM Development",
          "description": "Custom CRM systems specialized for Real Estate and Finance sectors with automated lead capturing and calling integrations.",
          "provider": {
            "@type": "Organization",
            "name": "Vishray Technologies"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Premium native and cross-platform mobile apps designed for high-performance and sub-second user experience.",
          "provider": {
            "@type": "Organization",
            "name": "Vishray Technologies"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Website Development",
          "description": "High-velocity, performance-optimized, responsive business websites that drive lead conversions.",
          "provider": {
            "@type": "Organization",
            "name": "Vishray Technologies"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Software Solutions & Digital Automation",
          "description": "Intelligent automated workflows and integrations that remove manual labor from document management and sales processes.",
          "provider": {
            "@type": "Organization",
            "name": "Vishray Technologies"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <HomeClient />
    </>
  );
}
