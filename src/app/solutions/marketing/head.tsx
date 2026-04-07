import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Marketing and Lead Generation Solutions</title>
      <meta
        name="description"
        content="Scale lead generation with marketing automation and ad integrations from Vishray Technologies."
      />
      <link rel="canonical" href={`${siteConfig.url}/solutions/marketing`} />
    </>
  );
}
