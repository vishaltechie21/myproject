import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations & Workflow Automation",
  description: "Remove manual labor from lead verification, document collection, payout processing, and team reporting with custom backend automated logic.",
  alternates: {
    canonical: "https://vishray.me/solutions/operations",
  },
  openGraph: {
    title: "Operations & Workflow Automation | Vishray Technologies",
    description: "Remove manual labor from lead verification, document collection, payout processing, and team reporting with custom backend automated logic.",
    url: "https://vishray.me/solutions/operations",
  },
};

export default function OperationsSolutionsLayout({
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
        "name": "Operations Automation",
        "item": "https://vishray.me/solutions/operations"
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
