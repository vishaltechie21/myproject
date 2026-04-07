import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Custom CRM Development Services</title>
      <meta
        name="description"
        content="Build custom CRM systems for real estate, finance, and support teams with Vishray Technologies."
      />
      <link rel="canonical" href={`${siteConfig.url}/services/crm`} />
    </>
  );
}
