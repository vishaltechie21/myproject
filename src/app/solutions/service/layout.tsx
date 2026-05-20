import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Service Systems",
  description: "Provide exceptional customer support nodes, instant feedback channels, automated WhatsApp notifications, and post-sales tracking portals.",
  alternates: {
    canonical: "https://vishray.me/solutions/service",
  },
  openGraph: {
    title: "Client Service Systems | Vishray Technologies",
    description: "Provide exceptional customer support nodes, instant feedback channels, automated WhatsApp notifications, and post-sales tracking portals.",
    url: "https://vishray.me/solutions/service",
  },
};

export default function ServiceSolutionsLayout({
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
        "name": "Client Services",
        "item": "https://vishray.me/solutions/service"
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
