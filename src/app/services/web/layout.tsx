import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Development Services",
  description: "Fast, secure, and search-optimized business websites and web applications. Built using React, Next.js, and high-performance frontend frameworks.",
  alternates: {
    canonical: "https://vishray.me/services/web",
  },
  openGraph: {
    title: "Custom Web Development Services | Vishray Technologies",
    description: "Fast, secure, and search-optimized business websites and web applications. Built using React, Next.js, and high-performance frontend frameworks.",
    url: "https://vishray.me/services/web",
  },
};

export default function WebServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vishray.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://vishray.me/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Website Development",
        "item": "https://vishray.me/services/web"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "name": "Enterprise Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Vishray Technologies",
      "logo": "https://vishray.me/icon.png"
    },
    "description": "High-velocity, performance-optimized, responsive business websites that drive conversions and load in under a second.",
    "areaServed": "Worldwide"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
