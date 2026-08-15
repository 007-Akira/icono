import Image from "next/image";
import Link from "next/link";
import { ServicePageData, services } from "@/data/services";

export function BrowseOtherServices({ current }: { current: ServicePageData }) {
  const alternatives = services.filter((service) => service.slug !== current.slug).slice(0, 3);
  return <section className="page-shell py-20 md:py-28"><h2 className="display border-b border-olive/25 pb-5 text-3xl">Explore More Services</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{alternatives.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className={`group relative block overflow-hidden bg-bone ${index === 1 ? "md:mt-16" : ""}`}><div className="relative aspect-[4/5]"><Image src={service.heroImage} alt={`${service.title} editorial reference`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-smoke/75 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-floral"><h3 className="display text-3xl">{service.title}</h3><p className="mt-2 text-sm text-bone">Discover services</p></div></div></Link>)}</div></section>;
}
