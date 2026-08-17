import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { ContactIcon } from "@/components/shared/ContactIcon";
import { business, formattedAddress } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-smoke pb-16 pt-16 text-floral">
      <div className="page-shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href="/#top" aria-label="Icono home — return to top">
            <BrandLogo className="h-auto w-52" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-bone">
            {business.name}
            <br />
            Professional beauty, hair and makeover services in Kollam.
          </p>
          <address className="mt-5 max-w-sm text-sm not-italic leading-6 text-bone">
            {formattedAddress}
          </address>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-5 text-bone">Explore</p>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/#top">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services/hair">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-5 text-bone">Connect</p>
          <div className="flex flex-col gap-3 text-sm text-bone">
            <a
              href={createGeneralWhatsAppUrl(business.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 transition-colors hover:text-floral"
            >
              <ContactIcon name="whatsapp" />
              WhatsApp
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 transition-colors hover:text-floral"
            >
              <ContactIcon name="instagram" />
              Instagram
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-2.5 transition-colors hover:text-floral"
            >
              <ContactIcon name="email" />
              Email
            </a>
            <a
              href={`tel:${business.phonePrimary}`}
              className="flex items-center gap-2.5 transition-colors hover:text-floral"
            >
              <ContactIcon name="phone" />
              {business.phoneDisplay}
            </a>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 transition-colors hover:text-floral"
            >
              <ContactIcon name="location" />
              Directions
            </a>
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-5 text-bone">Information</p>
          <div className="grid gap-3 text-sm text-bone sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/appointment-policy">Appointment Policy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/explore">Explore All Pages</Link>
          </div>
        </div>
      </div>
      <div className="page-shell mt-14 border-t border-floral/15 pt-6 text-xs text-bone">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
        <div className="mt-5 flex items-end justify-between gap-6">
          <p className="text-[10px] tracking-wide text-bone/45">
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/adithya-kiran-08291827b/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bone"
            >
              Adithya Kiran
            </a>{" "}
            &amp;{" "}
            <a
              href="https://www.linkedin.com/in/neev-justin"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bone"
            >
              Neev Justin
            </a>
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid size-10 shrink-0 place-items-center border border-floral/20 text-sm text-bone transition-colors hover:border-floral/50 hover:text-floral"
          >
            <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
