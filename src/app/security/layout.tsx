import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Grade Security Protocols",
  description: "Learn about the high-grade security protocols, encryption, and secure server architecture deployed across all Vishray Technologies software products.",
  alternates: {
    canonical: "https://vishray.me/security",
  },
  openGraph: {
    title: "Enterprise Grade Security Protocols | Vishray Technologies",
    description: "Learn about the high-grade security protocols, encryption, and secure server architecture deployed across all Vishray Technologies software products.",
    url: "https://vishray.me/security",
  },
};

export default function SecurityLayout({
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
        "name": "Security",
        "item": "https://vishray.me/security"
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
