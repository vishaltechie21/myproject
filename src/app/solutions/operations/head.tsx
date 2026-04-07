import { siteConfig } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>Operations and Workflow Automation Solutions</title>
      <meta
        name="description"
        content="Improve operations with process automation, analytics dashboards, and integrated workflow systems."
      />
      <link rel="canonical" href={`${siteConfig.url}/solutions/operations`} />
    </>
  );
}
