"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };
  const whatsappUrl = createGeneralWhatsAppUrl(business.whatsapp);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-smoke/10 bg-floral/90 backdrop-blur-md">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link href="/" aria-label="Icono home">
          <BrandLogo variant="navbar" className="h-14 w-28 sm:w-32" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`eyebrow border-b py-2 ${pathname === link.href ? "border-smoke" : "border-transparent hover:border-olive"}`}
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
              className="eyebrow flex items-center gap-2 py-2"
            >
              Services <span aria-hidden>⌄</span>
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
                    href={`/services/${s.slug}`}
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
              href={link.href}
              className={`eyebrow border-b py-2 ${pathname === link.href ? "border-smoke" : "border-transparent hover:border-olive"}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="eyebrow bg-smoke px-5 py-3 text-floral"
          >
            Enquire
          </a>
        </nav>
        <button
          ref={menuButton}
          className="grid size-11 place-items-center lg:hidden"
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
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto bg-smoke px-6 py-10 text-floral lg:hidden"
        >
          <div className="mx-auto flex max-w-lg flex-col">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="display border-b border-floral/20 py-4 text-3xl"
              >
                {link.label}
              </Link>
            ))}
            <button
              className="display flex items-center justify-between border-b border-floral/20 py-4 text-left text-3xl"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services <span className="text-xl">{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="border-b border-floral/20 py-3 pl-4">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeMenus}
                    className="block py-3 text-bone"
                  >
                    {s.navName}
                  </Link>
                ))}
              </div>
            )}
            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="display border-b border-floral/20 py-4 text-3xl"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenus}
              className="eyebrow mt-8 bg-floral px-6 py-4 text-center text-sm text-smoke"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
