import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Services",
  description: "Explore our full suite of professional services including custom CRM systems, high-speed website development, native mobile app development, and business automation logic.",
  alternates: {
    canonical: "https://vishray.me/services",
  },
  openGraph: {
    title: "Professional Services | Vishray Technologies",
    description: "Explore our full suite of professional services including custom CRM systems, high-speed website development, native mobile app development, and business automation logic.",
    url: "https://vishray.me/services",
  },
};

export default function ServicesLayout({
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
