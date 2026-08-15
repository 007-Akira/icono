import Link from "next/link";
import { business } from "@/data/business";

export function Footer() {
  return <footer className="bg-smoke py-16 text-floral"><div className="page-shell grid gap-12 md:grid-cols-12">
    <div className="md:col-span-5"><Link href="/" className="display text-5xl">ICONO</Link><p className="mt-5 max-w-sm text-sm leading-6 text-bone">Beauty World & Makeover Studio. A considered, founder-led approach to beauty.</p></div>
    <div className="md:col-span-3"><p className="eyebrow mb-5 text-bone">Explore</p><div className="flex flex-col gap-3 text-sm"><Link href="/about">About</Link><Link href="/services/hair">Services</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link></div></div>
    <div className="md:col-span-4"><p className="eyebrow mb-5 text-bone">Contact</p><p className="text-sm text-bone">{business.address || "Address to be provided."}</p><p className="mt-3 text-sm text-bone">{business.phone || "Phone number to be provided."}</p></div>
  </div><div className="page-shell mt-14 border-t border-floral/15 pt-6 text-xs text-bone">© {new Date().getFullYear()} ICONO. All rights reserved.</div></footer>;
}
