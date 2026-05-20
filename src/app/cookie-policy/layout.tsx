import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Read the Cookie Policy for Vishray Technologies. Learn how we utilize cookies and local storage tokens to optimize system performance and navigation logic.",
  alternates: {
    canonical: "https://vishray.me/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Vishray Technologies",
    description: "Read the Cookie Policy for Vishray Technologies. Learn how we utilize cookies and local storage tokens to optimize system performance and navigation logic.",
    url: "https://vishray.me/cookie-policy",
  },
};

export default function CookiePolicyLayout({
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
        "name": "Cookie Policy",
        "item": "https://vishray.me/cookie-policy"
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
