import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Industry Solutions for Real Estate and Finance</title>
      <meta
        name="description"
        content="Explore Vishray industry solutions for real estate CRM, loan workflows, and service operations."
      />
      <link rel="canonical" href={`${siteConfig.url}/solutions`} />
    </>
  );
}
