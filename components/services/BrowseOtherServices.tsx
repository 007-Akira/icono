import Link from "next/link";
import { services } from "@/data/services";

export function BrowseOtherServices({ current }: { current: string }) { return <section className="py-section"><div className="page-shell"><h2 className="display text-4xl">Explore more services</h2><div className="mt-10 grid gap-px bg-olive/30 sm:grid-cols-2 lg:grid-cols-3">{services.filter(s => s.slug !== current).map(s => <Link href={`/services/${s.slug}`} key={s.slug} className="group flex min-h-36 items-end justify-between bg-floral p-7"><span className="display text-2xl">{s.name}</span><span className="transition-transform group-hover:translate-x-1">→</span></Link>)}</div></div></section>; }
