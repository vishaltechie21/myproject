import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Pricing Plans for CRM and SaaS Solutions</title>
      <meta
        name="description"
        content="Explore Vishray pricing plans for CRM, web platforms, and enterprise software solutions."
      />
      <link rel="canonical" href={`${siteConfig.url}/pricing`} />
    </>
  );
}
