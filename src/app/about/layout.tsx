import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Vishray Technologies, our mission, vision, values, and our expert team of full-stack developers crafting high-speed CRM, web, and mobile solutions.",
  alternates: {
    canonical: "https://vishray.me/about",
  },
  openGraph: {
    title: "About Us | Vishray Technologies",
    description: "Learn more about Vishray Technologies, our mission, vision, values, and our expert team of full-stack developers crafting high-speed CRM, web, and mobile solutions.",
    url: "https://vishray.me/about",
  },
};

export default function AboutLayout({
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
        "name": "About",
        "item": "https://vishray.me/about"
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
