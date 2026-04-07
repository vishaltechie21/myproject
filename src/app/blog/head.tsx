import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Vishray Blog | CRM, Growth and Technology Insights</title>
      <meta
        name="description"
        content="Read practical insights on CRM development, web performance, mobile app engineering, and business automation."
      />
      <link rel="canonical" href={`${siteConfig.url}/blog`} />
    </>
  );
}
