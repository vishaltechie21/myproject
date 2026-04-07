import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Business Websites and Hosting Solutions</title>
      <meta
        name="description"
        content="Launch business websites with fast hosting, modern design, and technical SEO best practices."
      />
      <link rel="canonical" href={`${siteConfig.url}/websites`} />
    </>
  );
}
