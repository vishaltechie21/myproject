"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound, useParams } from "next/navigation";
import { useSyncExternalStore } from "react";
import { blogPosts, siteConfig } from "@/lib/site";

type BlogRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  relatedServices: string[];
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const readStoredPosts = (): BlogRecord[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = localStorage.getItem("vishray_blogs");
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as Array<{
      id: string | number;
      title: string;
      content: string;
      image?: string | null;
      date?: string;
    }>;

    return parsed.map((post, index) => ({
      id: String(post.id || `local-${index}`),
      slug: toSlug(post.title || `blog-${index}`),
      title: post.title || "Untitled post",
      excerpt: (post.content || "").slice(0, 160) + "...",
      content: post.content || "",
      date: post.date || new Date().toISOString().slice(0, 10),
      author: "Vishray Editorial",
      category: "Insights",
      image: post.image || "/assets/blog-web-speed.png",
      readTime: "3 min read",
      relatedServices: ["/services", "/contact"],
    }));
  } catch {
    return [];
  }
};

const subscribeToBlogStore = (onStoreChange: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener("vishray_blogs_updated", handler as EventListener);

  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("vishray_blogs_updated", handler as EventListener);
  };
};

export default function BlogDetailPage() {
  const params = useParams<{ id: string }>();
  const routeParam = decodeURIComponent(params.id || "");

  const localPosts = useSyncExternalStore(subscribeToBlogStore, readStoredPosts, () => []);
  const allPosts: BlogRecord[] = [...localPosts, ...blogPosts];

  const post = allPosts.find(
    (item) => item.slug === routeParam || item.id === routeParam
  );

  if (!post) {
    notFound();
  }

  const canonical = `${siteConfig.url}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    image: [`${siteConfig.url}${post.image}`],
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/assets/logo.png`,
      },
    },
    mainEntityOfPage: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonical,
      },
    ],
  };

  return (
    <article className="bg-white text-slate-900">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-emerald-100 bg-emerald-50/70">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-10 md:pt-32 md:pb-14">
          <Link href="/blog" className="text-emerald-700 font-semibold hover:text-emerald-800">
            Back to blog
          </Link>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-emerald-700 font-semibold">
            {post.category}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <p className="mt-4 text-slate-600">{post.excerpt}</p>
          <div className="mt-4 text-sm text-slate-500">
            {new Date(post.date).toLocaleDateString()} · {post.readTime} · {post.author}
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-8 md:py-10">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-slate-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-14 md:pb-20">
        <h2 className="text-2xl font-bold">Article</h2>
        <div className="mt-4 prose prose-slate max-w-none">
          {post.content.split("\n").map((paragraph, idx) => (
            <p key={`${post.slug}-${idx}`} className="text-slate-700 leading-8">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
          <h3 className="text-xl font-semibold">Related Services</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {post.relatedServices.map((serviceHref) => (
              <Link
                key={serviceHref}
                href={serviceHref}
                className="px-4 py-2 rounded-lg bg-white border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-50"
              >
                {serviceHref.replace("/services/", "").replace("/", "").toUpperCase() || "SERVICES"}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
