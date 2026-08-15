import type { Metadata } from "next";
import Image from "next/image";
import { referenceImages } from "@/data/images";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = { title: "About", description: "Meet Ms. Revathy, founder of ICONO Beauty World & Makeover Studio." };
export default function AboutPage() { return <>
  <section className="grid min-h-[82svh] items-end bg-bone/35 pt-20 md:grid-cols-2"><div className="order-2 p-8 sm:p-14 md:order-1 md:p-16"><SectionLabel>About Icono</SectionLabel><h1 className="display mt-6 text-6xl leading-none sm:text-7xl">A story rooted in care.</h1><p className="mt-7 max-w-lg leading-7 text-olive">ICONO&apos;s complete story and history will be added after client approval.</p></div><div className="relative order-1 min-h-[52svh] md:order-2 md:h-full"><Image src={referenceImages.founder} alt="Temporary portrait reference to be replaced with an authentic photograph of Ms. Revathy" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover grayscale" /></div></section>
  <section className="py-section"><div className="page-shell grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><SectionLabel>Founder · Cosmetologist</SectionLabel><h2 className="display mt-5 text-5xl">Ms. Revathy</h2></div><div className="space-y-6 text-lg leading-8 text-olive md:col-span-6 md:col-start-7"><p>Founder biography to be provided.</p><p>Areas of expertise and professional philosophy to be provided.</p><div className="mt-8 border border-olive/40 p-6"><p className="eyebrow">Credentials</p><p className="mt-3 text-base">Cosmetology certification details to be provided.</p></div></div></div></section>
  <section className="bg-smoke py-section text-center text-floral"><SectionLabel light>The Icono Standard</SectionLabel><h2 className="display mx-auto mt-5 max-w-4xl px-6 text-5xl sm:text-7xl">Real founder. Real work. Curated atmosphere.</h2><CTAButton href="/contact#appointment" variant="light" className="mt-10">Enquire with Icono</CTAButton></section>
  </>; }
