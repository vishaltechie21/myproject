import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed SaaS Website Development",
  description: "Get institutional-grade, high-velocity websites designed for Real Estate developers and DSA finance partners. Includes sub-second rendering, built-in SEO protocols, and 99.9% uptime managed hosting.",
  alternates: {
    canonical: "https://vishray.me/websites",
  },
  openGraph: {
    title: "Managed SaaS Website Development | Vishray Technologies",
    description: "Get institutional-grade, high-velocity websites designed for Real Estate developers and DSA finance partners. Includes sub-second rendering, built-in SEO protocols, and 99.9% uptime managed hosting.",
    url: "https://vishray.me/websites",
  },
};

export default function WebsitesLayout({
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
        "name": "Websites",
        "item": "https://vishray.me/websites"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Managed Website Development",
    "name": "Institutional Web Development & Hosting Stack",
    "provider": {
      "@type": "Organization",
      "name": "Vishray Technologies",
      "logo": "https://vishray.me/icon.png"
    },
    "description": "Premium managed website creation and deployment with blazing fast load times and optimized lead forms for DSA and Real Estate firms.",
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
