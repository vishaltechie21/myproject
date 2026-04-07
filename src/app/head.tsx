import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Vishray Technologies | CRM, Web and Mobile Development</title>
      <meta name="description" content={siteConfig.description} />
      <link rel="canonical" href={siteConfig.url} />
    </>
  );
}
