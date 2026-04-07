import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Mobile App Development Services</title>
      <meta
        name="description"
        content="Design and develop high-performance mobile applications for Android and iOS with Vishray."
      />
      <link rel="canonical" href={`${siteConfig.url}/services/mobile`} />
    </>
  );
}
