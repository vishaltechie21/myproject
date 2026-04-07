import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	BarChart3,
	Building2,
	Globe,
	Smartphone,
	Workflow,
} from "lucide-react";

const offerings = [
	{
		title: "CRM Development",
		description: "Lead management, status tracking, automation, and task pipelines tailored to your process.",
		icon: <Building2 className="h-7 w-7" />,
		href: "/services/crm",
	},
	{
		title: "Web Development",
		description: "Fast marketing sites and landing pages that match the brand and convert visitors.",
		icon: <Globe className="h-7 w-7" />,
		href: "/services/web",
	},
	{
		title: "Mobile Apps",
		description: "Customer and internal apps for teams that need portable workflows.",
		icon: <Smartphone className="h-7 w-7" />,
		href: "/services/mobile",
	},
	{
		title: "Growth Systems",
		description: "Reporting, dashboards, and conversion logic that help teams move faster.",
		icon: <BarChart3 className="h-7 w-7" />,
		href: "/solutions",
	},
];

export default function ServicesPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="border-b border-slate-100 bg-slate-50/70 py-24 lg:py-32">
				<div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="text-[10px] font-black uppercase tracking-[0.4em] text-success">Services</p>
						<h1 className="mt-4 text-4xl font-black uppercase italic tracking-tighter text-slate-950 md:text-7xl">
							Build the
							<span className="block text-success">full stack.</span>
						</h1>
						<p className="mt-6 max-w-xl text-base font-medium italic leading-relaxed text-slate-500 md:text-lg">
							Vishray covers the essential layers of a modern digital business: websites, CRMs, mobile apps, and the operational systems behind them.
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<Link href="/contact" className="inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-transform hover:scale-105">
								Start a project <ArrowRight className="h-4 w-4" />
							</Link>
							<Link href="/pricing" className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-slate-950 transition-colors hover:bg-white">
								View pricing
							</Link>
						</div>
					</div>

					<div className="relative">
						<div className="absolute inset-0 -z-10 rounded-[3rem] bg-success/15 blur-3xl" />
						<Image
							src="/assets/services-hero.png"
							alt="Services hero"
							width={1200}
							height={900}
							className="w-full rounded-[3rem] border border-slate-100 object-cover shadow-2xl"
						/>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{offerings.map((item) => (
						<Link key={item.title} href={item.href} className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-success/20 hover:bg-white hover:shadow-2xl">
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10 text-success transition-all group-hover:bg-success group-hover:text-white">
								{item.icon}
							</div>
							<h2 className="text-2xl font-black uppercase italic tracking-tighter text-slate-950">{item.title}</h2>
							<p className="mt-4 text-sm font-medium italic leading-relaxed text-slate-500">{item.description}</p>
							<div className="mt-8 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-success">
								Explore <ArrowRight className="h-4 w-4" />
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="bg-slate-950 py-24 text-white lg:py-32">
				<div className="mx-auto max-w-5xl px-6 text-center">
					<Workflow className="mx-auto h-12 w-12 text-success" />
					<h2 className="mt-6 text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
						One team.
						<span className="block text-success">One delivery path.</span>
					</h2>
					<p className="mx-auto mt-6 max-w-3xl text-base font-medium italic leading-relaxed text-slate-400 md:text-lg">
						If you want us to build the site fully, this page is where the supporting services should live. The foundation is now in place.
					</p>
				</div>
			</section>
		</div>
	);
}
