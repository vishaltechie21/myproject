import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Customer Service and Support Solutions</title>
      <meta
        name="description"
        content="Modern customer service solutions with support automation, analytics, and omnichannel workflows."
      />
      <link rel="canonical" href={`${siteConfig.url}/solutions/service`} />
    </>
  );
}
