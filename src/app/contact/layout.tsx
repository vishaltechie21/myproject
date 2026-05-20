import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Vishray Technologies. Tell us about your CRM, mobile app, or website needs, and request a personalized demo or technical audit from our engineering team.",
  alternates: {
    canonical: "https://vishray.me/contact",
  },
  openGraph: {
    title: "Contact Us | Vishray Technologies",
    description: "Get in touch with Vishray Technologies. Tell us about your CRM, mobile app, or website needs, and request a personalized demo or technical audit from our engineering team.",
    url: "https://vishray.me/contact",
  },
};

export default function ContactLayout({
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
        "name": "Contact",
        "item": "https://vishray.me/contact"
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
