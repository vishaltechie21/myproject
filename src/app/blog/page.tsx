import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts } from "@/lib/site";

export default function BlogIndexPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="border-b border-slate-100 bg-slate-50/70 py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<p className="text-[10px] font-black uppercase tracking-[0.4em] text-success">Blog</p>
					<h1 className="mt-4 max-w-4xl text-4xl font-black uppercase italic tracking-tighter text-slate-950 md:text-7xl">
						Insights for CRM,
						<span className="block text-success">Web, and Growth Teams.</span>
					</h1>
					<p className="mt-6 max-w-2xl text-base font-medium italic leading-relaxed text-slate-500 md:text-lg">
						Practical notes from the Vishray team on digital systems, performance, and automation.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
				<div className="grid gap-8 lg:grid-cols-3">
					{blogPosts.map((post) => (
						<article key={post.slug} className="group overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 transition-all hover:-translate-y-1 hover:border-success/20 hover:bg-white hover:shadow-2xl lg:col-span-1">
							<div className="relative aspect-[16/10] overflow-hidden">
								<Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
							</div>
							<div className="p-8">
								<div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-success">
									<span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
									<span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {post.readTime}</span>
								</div>
								<h2 className="mt-5 text-2xl font-black uppercase italic tracking-tighter text-slate-950">{post.title}</h2>
								<p className="mt-4 text-sm font-medium italic leading-relaxed text-slate-500">{post.excerpt}</p>
								<Link href={`/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-success transition-transform hover:translate-x-1">
									Read article <ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</article>
					))}
				</div>

				<div className="mt-16 rounded-[3rem] bg-slate-950 p-10 text-white lg:p-14">
					<p className="text-[10px] font-black uppercase tracking-[0.4em] text-success">For the full stack</p>
					<h2 className="mt-4 text-3xl font-black uppercase italic tracking-tighter md:text-5xl">Need a custom post or insight page?</h2>
					<p className="mt-5 max-w-2xl text-base font-medium italic leading-relaxed text-slate-400">
						The blog is wired to share updates about our CRM, website, and automation work. You can connect it to your content pipeline later without changing the layout.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<Link href="/contact" className="inline-flex items-center gap-3 rounded-2xl bg-success px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-transform hover:scale-105">
							Contact team <ArrowRight className="h-4 w-4" />
						</Link>
						<Link href="/" className="inline-flex items-center gap-3 rounded-2xl border border-white/10 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white/5">
							Back to home
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
