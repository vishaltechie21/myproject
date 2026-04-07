import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Website Development Services</title>
      <meta
        name="description"
        content="SEO-friendly and high-performance website development services for growing businesses."
      />
      <link rel="canonical" href={`${siteConfig.url}/services/web`} />
    </>
  );
}
