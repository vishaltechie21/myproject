import { blogPosts } from "@/lib/site";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedId = decodeURIComponent(resolvedParams.id || "");
  const post = blogPosts.find(
    (item) => item.slug === decodedId || item.id === decodedId
  );

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://vishray.me/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Vishray Technologies`,
      description: post.excerpt,
      url: `https://vishray.me/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title
        },
      ],
    },
    twitter: {
      title: `${post.title} | Vishray Technologies`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
