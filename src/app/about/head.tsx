import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>About Vishray Technologies</title>
      <meta
        name="description"
        content="Learn about Vishray Technologies, our mission, and our team delivering CRM, web, and mobile solutions."
      />
      <link rel="canonical" href={`${siteConfig.url}/about`} />
    </>
  );
}
