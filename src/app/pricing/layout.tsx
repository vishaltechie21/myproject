import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent SaaS Pricing & Plans",
  description: "Review our transparent CRM, mobile app, and web hosting plans. Zero hidden fees, high uptime SLAs, and custom quotes for enterprise tech stacks.",
  alternates: {
    canonical: "https://vishray.me/pricing",
  },
  openGraph: {
    title: "Transparent SaaS Pricing & Plans | Vishray Technologies",
    description: "Review our transparent CRM, mobile app, and web hosting plans. Zero hidden fees, high uptime SLAs, and custom quotes for enterprise tech stacks.",
    url: "https://vishray.me/pricing",
  },
};

export default function PricingLayout({
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
        "name": "Pricing",
        "item": "https://vishray.me/pricing"
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
