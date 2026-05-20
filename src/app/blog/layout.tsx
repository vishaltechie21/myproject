import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog",
  description: "Read the latest engineering articles, CRM operational tips, website speed improvements, and technology growth guides from the Vishray editorial team.",
  alternates: {
    canonical: "https://vishray.me/blog",
  },
  openGraph: {
    title: "Insights & Engineering Blog | Vishray Technologies",
    description: "Read the latest engineering articles, CRM operational tips, website speed improvements, and technology growth guides from the Vishray editorial team.",
    url: "https://vishray.me/blog",
  },
};

export default function BlogLayout({
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
        "name": "Blog",
        "item": "https://vishray.me/blog"
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
