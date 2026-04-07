import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Blog Publisher Console</title>
      <meta name="description" content="Internal blog publishing console." />
      <meta name="robots" content="noindex,nofollow" />
      <link rel="canonical" href={`${siteConfig.url}/blog`} />
    </>
  );
}
