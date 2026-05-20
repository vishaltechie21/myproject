import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated Marketing Systems",
  description: "Synchronize your meta ads, google ads, and landing page capture workflows directly into your CRM. Automate lead routing and tracking to eliminate lead leakage.",
  alternates: {
    canonical: "https://vishray.me/solutions/marketing",
  },
  openGraph: {
    title: "Integrated Marketing Systems | Vishray Technologies",
    description: "Synchronize your meta ads, google ads, and landing page capture workflows directly into your CRM. Automate lead routing and tracking to eliminate lead leakage.",
    url: "https://vishray.me/solutions/marketing",
  },
};

export default function MarketingSolutionsLayout({
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
        "name": "Solutions",
        "item": "https://vishray.me/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Marketing Systems",
        "item": "https://vishray.me/solutions/marketing"
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
