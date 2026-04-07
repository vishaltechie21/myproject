import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Contact Vishray Technologies</title>
      <meta
        name="description"
        content="Contact Vishray Technologies for CRM development, web development, and mobile app solutions."
      />
      <link rel="canonical" href={`${siteConfig.url}/contact`} />
    </>
  );
}
