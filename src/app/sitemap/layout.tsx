import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Sitemap & Navigation Index",
  description: "Navigate all pages, services, solutions, blogs, and corporate documents on the Vishray Technologies platform.",
  alternates: {
    canonical: "https://vishray.me/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap & Navigation Index | Vishray Technologies",
    description: "Navigate all pages, services, solutions, blogs, and corporate documents on the Vishray Technologies platform.",
    url: "https://vishray.me/sitemap",
  },
};

export default function SitemapLayout({
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
        "name": "Sitemap",
        "item": "https://vishray.me/sitemap"
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
