export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  relatedServices: string[];
};

export const siteConfig = {
  name: "Vishray Technologies",
  url: "https://vishray.me",
  description:
    "Vishray Technologies builds CRM systems, managed websites, mobile apps, and growth tools for real estate and finance businesses.",
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "crm-logic-for-real-estate-teams",
    title: "CRM Logic for Real Estate Teams That Need Faster Follow-Up",
    excerpt:
      "A practical look at how a structured CRM workflow reduces lead leakage and improves handoff speed.",
    content:
      "Real estate teams move quickly, and lead follow-up has to move faster.\n\nThe core of the system is not just capturing a lead, but routing it to the right person, at the right time, with the right context.\n\nWhen your CRM stores source, project, budget, and status in a consistent way, your team can respond faster and measure outcomes more clearly.",
    date: "2026-03-01",
    updatedAt: "2026-03-22",
    author: "Vishray Editorial",
    category: "CRM",
    image: "/assets/blog-crm.png",
    readTime: "4 min read",
    relatedServices: ["/services/crm", "/contact"],
  },
  {
    id: "2",
    slug: "website-speed-that-converts",
    title: "Website Speed Is a Conversion Tool, Not Just a Technical Metric",
    excerpt:
      "Performance improvements impact trust, bounce rate, and the number of people who actually contact your team.",
    content:
      "A slow website quietly costs leads.\n\nIf the first interaction feels delayed or unstable, buyers and clients assume the rest of the experience will be the same.\n\nSpeed, layout stability, and simple navigation all improve the chance that a visitor becomes a qualified inquiry.",
    date: "2026-02-14",
    updatedAt: "2026-03-10",
    author: "Vishray Editorial",
    category: "Web Performance",
    image: "/assets/blog-web-speed.png",
    readTime: "3 min read",
    relatedServices: ["/websites", "/services/web"],
  },
  {
    id: "3",
    slug: "automation-for-finance-operations",
    title: "Automation Patterns for Finance Operations Teams",
    excerpt:
      "Use automation to remove repetitive tasks from lead qualification, document collection, and reporting.",
    content:
      "Automation works best when it supports the workflow instead of replacing it.\n\nFor finance teams, that usually means repetitive intake tasks, status updates, reminders, and document tracking.\n\nThe result is a cleaner operation with fewer missed steps and better visibility for the team.",
    date: "2026-01-20",
    updatedAt: "2026-02-05",
    author: "Vishray Editorial",
    category: "Automation",
    image: "/assets/blog-automation.png",
    readTime: "5 min read",
    relatedServices: ["/solutions/operations", "/services"],
  },
];