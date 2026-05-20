import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & System Logic Limits",
  description: "Read the operational disclaimer and technology service limits for Vishray Technologies custom CRM, mobile, and web implementations.",
  alternates: {
    canonical: "https://vishray.me/disclaimer",
  },
  openGraph: {
    title: "Disclaimer & System Logic Limits | Vishray Technologies",
    description: "Read the operational disclaimer and technology service limits for Vishray Technologies custom CRM, mobile, and web implementations.",
    url: "https://vishray.me/disclaimer",
  },
};

export default function DisclaimerLayout({
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
        "name": "Disclaimer",
        "item": "https://vishray.me/disclaimer"
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
