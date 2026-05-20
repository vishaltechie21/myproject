import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center & Technical Support",
  description: "Find technical documentation, troubleshooting articles, user guides, and direct support tickets for your custom Vishray Technologies deployment.",
  alternates: {
    canonical: "https://vishray.me/help-center",
  },
  openGraph: {
    title: "Help Center & Technical Support | Vishray Technologies",
    description: "Find technical documentation, troubleshooting articles, user guides, and direct support tickets for your custom Vishray Technologies deployment.",
    url: "https://vishray.me/help-center",
  },
};

export default function HelpCenterLayout({
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
        "name": "Help Center",
        "item": "https://vishray.me/help-center"
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
