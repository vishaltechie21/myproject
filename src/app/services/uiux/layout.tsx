import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium UI/UX Design Services",
  description: "User experience and visual identity design focused on conversions. Wireframing, prototyping, and fully responsive user interface designs.",
  alternates: {
    canonical: "https://vishray.me/services/uiux",
  },
  openGraph: {
    title: "Premium UI/UX Design Services | Vishray Technologies",
    description: "User experience and visual identity design focused on conversions. Wireframing, prototyping, and fully responsive user interface designs.",
    url: "https://vishray.me/services/uiux",
  },
};

export default function UiUxServiceLayout({
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
        "name": "UI/UX Design",
        "item": "https://vishray.me/services/uiux"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "UI/UX Design",
    "name": "User Interface and Experience Design",
    "provider": {
      "@type": "Organization",
      "name": "Vishray Technologies",
      "logo": "https://vishray.me/icon.png"
    },
    "description": "High-fidelity, responsive UI/UX designs including interactive wireframes and conversion-focused customer journeys.",
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
