import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-20">
      {/* Explicit columns keep both images equally visible at every desktop width. */}
      <div className="absolute inset-0 hidden grid-cols-2 sm:grid">
        <div className="relative overflow-hidden">
          <Image
            src="/images/editorial/home-hero-portrait.webp"
            alt="Editorial beauty portrait"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/images/editorial/home-hero-studio.webp"
            alt="Stylist finishing a client’s hair"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* On phones, each half receives equal time instead of losing one image to cropping. */}
      <Image
        src="/images/editorial/home-hero-portrait.webp"
        alt="Editorial beauty portrait"
        fill
        priority
        sizes="(max-width: 639px) 100vw, 0px"
        className="hero-mobile-primary object-cover object-center sm:hidden"
      />
      <Image
        src="/images/editorial/home-hero-studio.webp"
        alt="Stylist finishing a client’s hair"
        fill
        sizes="(max-width: 639px) 100vw, 0px"
        className="hero-mobile-secondary object-cover object-center sm:hidden"
      />

      <div className="absolute inset-0 bg-smoke/30 sm:bg-smoke/25" />
      <div className="page-shell relative w-full py-14 text-center text-floral">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-7">ICONO Beauty World &amp; Makeover Studio</p>
          <h1 className="display text-[clamp(3.4rem,7.5vw,7.5rem)] font-semibold leading-[0.94] text-balance">
            <em className="font-normal">Beauty</em>, shaped with{" "}
            <em className="font-normal">intention.</em>
          </h1>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href="#services" variant="light">
              Explore Services
            </CTAButton>
            <CTAButton href="#appointment" variant="outlineLight">
              Enquire on WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
