import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description: "High-performance native and cross-platform mobile apps for iOS and Android. Specialized in field force tracking, CRM companion apps, and consumer applications.",
  alternates: {
    canonical: "https://vishray.me/services/mobile",
  },
  openGraph: {
    title: "Mobile App Development Services | Vishray Technologies",
    description: "High-performance native and cross-platform mobile apps for iOS and Android. Specialized in field force tracking, CRM companion apps, and consumer applications.",
    url: "https://vishray.me/services/mobile",
  },
};

export default function MobileServiceLayout({
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
        "name": "Mobile Development",
        "item": "https://vishray.me/services/mobile"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "name": "Custom Mobile App Development",
    "provider": {
      "@type": "Organization",
      "name": "Vishray Technologies",
      "logo": "https://vishray.me/icon.png"
    },
    "description": "High-fidelity native and cross-platform mobile applications for iOS and Android with real-time syncing and robust offline capabilities.",
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
