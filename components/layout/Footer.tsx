import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { business, formattedAddress } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return <footer className="bg-smoke pb-24 pt-16 text-floral lg:pb-16"><div className="page-shell grid gap-12 md:grid-cols-12">
    <div className="md:col-span-5"><Link href="/" aria-label="Icono home"><BrandLogo className="h-auto w-52" /></Link><p className="mt-5 max-w-sm text-sm leading-6 text-bone">{business.name}<br />Professional beauty, hair and makeover services in Kollam.</p></div>
    <div className="md:col-span-3"><p className="eyebrow mb-5 text-bone">Explore</p><div className="flex flex-col gap-3 text-sm"><Link href="/about">About</Link><Link href="/services/hair">Services</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link></div></div>
    <div className="md:col-span-4"><p className="eyebrow mb-5 text-bone">Contact</p><div className="flex flex-col gap-3 text-sm text-bone"><a href={`tel:${business.phonePrimary}`}>{business.phoneDisplay}</a><a href={`mailto:${business.email}`}>{business.email}</a><a href={createGeneralWhatsAppUrl(business.whatsapp)} target="_blank" rel="noreferrer">WhatsApp</a><a href={business.instagramUrl} target="_blank" rel="noreferrer">@{business.instagram}</a><p>{formattedAddress}</p></div></div>
  </div><div className="page-shell mt-14 border-t border-floral/15 pt-6 text-xs text-bone">© {new Date().getFullYear()} {business.name}. All rights reserved.</div></footer>;
}
