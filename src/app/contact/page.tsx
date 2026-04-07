import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="border-b border-slate-100 bg-slate-50/70 py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<p className="text-[10px] font-black uppercase tracking-[0.4em] text-success">Contact</p>
					<h1 className="mt-4 max-w-4xl text-4xl font-black uppercase italic tracking-tighter text-slate-950 md:text-7xl">
						Start the
						<span className="block text-success">conversation.</span>
					</h1>
					<p className="mt-6 max-w-2xl text-base font-medium italic leading-relaxed text-slate-500 md:text-lg">
						Tell us what you need built and we’ll map the fastest path to launch.
					</p>
				</div>
			</section>

			<section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
				<div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-8 shadow-sm lg:p-12">
					<h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-950">Request a demo</h2>
					<p className="mt-4 max-w-xl text-sm font-medium italic leading-relaxed text-slate-500">
						Use the form below if you want a quick response about CRM, website, or mobile app work.
					</p>
					<div className="mt-8">
						<LeadForm />
					</div>
				</div>

				<div className="space-y-6">
					<div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-10">
						<h2 className="text-2xl font-black uppercase italic tracking-tighter">Direct contact</h2>
						<div className="mt-8 space-y-5 text-sm font-medium italic text-slate-300">
							<div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-success" /> contact@vishray.com</div>
							<div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-success" /> +91 123 456 7890</div>
							<div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-success" /> 123 Tech Square, Smart City, India</div>
						</div>
					</div>

					<div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm lg:p-10">
						<h2 className="text-2xl font-black uppercase italic tracking-tighter text-slate-950">Need more context?</h2>
						<p className="mt-4 text-sm font-medium italic leading-relaxed text-slate-500">
							You can also review our services or pricing before you reach out.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<Link href="/services" className="inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-transform hover:scale-105">
								Services <ArrowRight className="h-4 w-4" />
							</Link>
							<Link href="/pricing" className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 px-7 py-4 text-[10px] font-black uppercase tracking-widest text-slate-950 transition-colors hover:bg-slate-50">
								Pricing
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
