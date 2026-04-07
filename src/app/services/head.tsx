import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Services | CRM, Web and Mobile Development</title>
      <meta
        name="description"
        content="Explore Vishray services: custom CRM development, web development, mobile apps, and UI/UX design."
      />
      <link rel="canonical" href={`${siteConfig.url}/services`} />
    </>
  );
}
