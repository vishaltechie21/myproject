import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailored Software Solutions",
  description: "Enterprise software solutions specifically architected for DSA partners, real estate builders, channel partners, and financial advisors. Scale your business velocity.",
  alternates: {
    canonical: "https://vishray.me/solutions",
  },
  openGraph: {
    title: "Tailored Software Solutions | Vishray Technologies",
    description: "Enterprise software solutions specifically architected for DSA partners, real estate builders, channel partners, and financial advisors. Scale your business velocity.",
    url: "https://vishray.me/solutions",
  },
};

export default function SolutionsLayout({
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
