import { blogPosts, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Head({ params }: Props) {
  const { id } = await params;
  const value = decodeURIComponent(id || "");

  const post = blogPosts.find((item) => item.id === value || item.slug === value);

  const title = post
    ? `${post.title} | Vishray Blog`
    : "Blog Article | Vishray Technologies";

  const description = post
    ? post.excerpt
    : "Read Vishray blog insights on CRM, web performance, and business automation.";

  const canonicalPath = post ? `/blog/${post.slug}` : `/blog/${value}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteConfig.url}${canonicalPath}`} />
    </>
  );
}
