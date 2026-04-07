import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>UI UX Design Services</title>
      <meta
        name="description"
        content="Create intuitive and conversion-focused interfaces with Vishray UI/UX design services."
      />
      <link rel="canonical" href={`${siteConfig.url}/services/uiux`} />
    </>
  );
}
