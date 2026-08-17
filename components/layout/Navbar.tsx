"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useState } from "react";
import { services } from "@/data/services";
import { business } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { BrandLogo } from "@/components/shared/BrandLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };
  const pageHref = (targetPath: string) => `${targetPath === "/" ? "/" : targetPath}#top`;
  const handlePageLink = (event: MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    closeMenus();

    // New routes use their #top destination. If the route is already open,
    // handle the scroll directly because Next.js does not remount the page.
    if (pathname !== targetPath) return;
    event.preventDefault();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollContainer = document.scrollingElement ?? document.documentElement;
    scrollContainer.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };
  const whatsappUrl = createGeneralWhatsAppUrl(business.whatsapp);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-smoke/10 bg-floral/90 backdrop-blur-md">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link
          href={pageHref("/")}
          onClick={(event) => handlePageLink(event, "/")}
          aria-label="Icono home — return to the top"
        >
          <BrandLogo variant="navbar" className="h-14 w-28 sm:w-32" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={pageHref(link.href)}
              onClick={(event) => handlePageLink(event, link.href)}
              className={`display text-lg border-b py-2 ${pathname === link.href ? "border-smoke" : "border-transparent hover:border-olive"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className="display text-lg flex items-center gap-2 py-2"
            >
              Services
            </button>
            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full w-64 -translate-x-1/2 border border-smoke/10 bg-floral p-3 shadow-xl"
              >
                {services.map((s) => (
                  <Link
                    role="menuitem"
                    key={s.slug}
                    href={pageHref(`/services/${s.slug}`)}
                    onClick={(event) => handlePageLink(event, `/services/${s.slug}`)}
                    className="block px-4 py-3 text-sm hover:bg-bone/40"
                  >
                    {s.navName}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              href={pageHref(link.href)}
              onClick={(event) => handlePageLink(event, link.href)}
              className={`display text-lg border-b py-2 ${pathname === link.href ? "border-smoke" : "border-transparent hover:border-olive"}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="display text-lg bg-smoke px-5 py-3 text-floral"
          >
            Enquire
          </a>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="display bg-smoke px-4 py-2 text-sm text-floral"
          >
            Enquire
          </a>

          <button
            type="button"
            className="grid size-11 touch-manipulation place-items-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-2xl" aria-hidden>
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-smoke/10 bg-floral shadow-[0_18px_40px_rgba(17,18,13,0.12)] lg:hidden"
        >
          <div className="page-shell py-4">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={pageHref(link.href)}
                onClick={(event) => handlePageLink(event, link.href)}
                className={`display text-lg flex items-center justify-between border-b border-smoke/10 py-3.5 ${pathname === link.href ? "text-smoke" : "text-olive"}`}
              >
                {link.label} <span aria-hidden>→</span>
              </Link>
            ))}
            <button
              type="button"
              className="display text-lg flex w-full touch-manipulation items-center justify-between border-b border-smoke/10 py-3.5 text-left text-olive"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services <span className="text-base font-normal">{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="grid border-b border-smoke/10 bg-bone/30 px-3 py-2 sm:grid-cols-2 sm:gap-x-6">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={pageHref(`/services/${s.slug}`)}
                    onClick={(event) => handlePageLink(event, `/services/${s.slug}`)}
                    className="flex items-center justify-between border-b border-smoke/10 py-2.5 text-sm text-olive last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    {s.navName} <span aria-hidden>→</span>
                  </Link>
                ))}
              </div>
            )}
            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={pageHref(link.href)}
                onClick={(event) => handlePageLink(event, link.href)}
                className={`display text-lg flex items-center justify-between border-b border-smoke/10 py-3.5 ${pathname === link.href ? "text-smoke" : "text-olive"}`}
              >
                {link.label} <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
