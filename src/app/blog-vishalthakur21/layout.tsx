import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Blog Portal",
  description: "Secure administrative console to publish new technical insights and blog posts for Vishray Technologies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
