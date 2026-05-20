import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Software Demo",
  description: "Schedule a live, free software demo with our technical architects. See how Vishray CRMs and custom tools can scale your real estate or DSA business operations.",
  alternates: {
    canonical: "https://vishray.me/demo",
  },
  openGraph: {
    title: "Book a Free Software Demo | Vishray Technologies",
    description: "Schedule a live, free software demo with our technical architects. See how Vishray CRMs and custom tools can scale your real estate or DSA business operations.",
    url: "https://vishray.me/demo",
  },
};

export default function DemoLayout({
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
        "name": "Book a Demo",
        "item": "https://vishray.me/demo"
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
