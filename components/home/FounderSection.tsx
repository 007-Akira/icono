import Image from "next/image";
import Link from "next/link";
import { referenceImages } from "@/data/images";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function FounderSection() { return <section className="py-section"><div className="page-shell grid items-center gap-12 md:grid-cols-12"><div className="md:col-span-5 md:col-start-2"><SectionLabel>Founder · Cosmetologist</SectionLabel><h2 className="display mt-5 text-5xl">Meet Revathy</h2><p className="mt-7 text-lg leading-8 text-olive">Ms. Revathy is the owner and face of ICONO. Founder biography and professional background to be provided.</p><p className="mt-5 leading-7 text-olive">Cosmetology certification details to be provided.</p><Link href="/about" className="eyebrow mt-8 inline-block border-b border-smoke pb-1">Discover her story</Link></div><div className="relative aspect-[3/4] overflow-hidden md:col-span-5 md:col-start-8 md:row-start-1"><Image src={referenceImages.founder} alt="Temporary founder portrait reference; replace with an authentic photograph of Ms. Revathy" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover grayscale" /></div></div></section>; }
