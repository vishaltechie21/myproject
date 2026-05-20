import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Development for Real Estate & Finance",
  description: "Deploy niche-tailored CRM systems for builders, DSA loan agents, and finance professionals. Includes call logging, lead pipeline management, and auto-dialer integrations.",
  alternates: {
    canonical: "https://vishray.me/services/crm",
  },
  openGraph: {
    title: "CRM Development for Real Estate & Finance | Vishray Technologies",
    description: "Deploy niche-tailored CRM systems for builders, DSA loan agents, and finance professionals. Includes call logging, lead pipeline management, and auto-dialer integrations.",
    url: "https://vishray.me/services/crm",
  },
};

export default function CrmServiceLayout({
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
        "name": "CRM Development",
        "item": "https://vishray.me/services/crm"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CRM Development",
    "name": "Enterprise CRM Development",
    "provider": {
      "@type": "Organization",
      "name": "Vishray Technologies",
      "logo": "https://vishray.me/icon.png"
    },
    "description": "Tailor-made CRM software solutions designed specifically for Real Estate builders and Loan DSA firms to automate lead capture, pipeline tracking, and calling systems.",
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
