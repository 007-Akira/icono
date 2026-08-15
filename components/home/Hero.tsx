import Image from "next/image";
import { referenceImages } from "@/data/images";
import { CTAButton } from "@/components/shared/CTAButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-20 sm:items-center">
      <Image
        src={referenceImages.hero}
        alt="Editorial beauty portrait used as temporary visual reference"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-floral via-floral/20 to-transparent sm:bg-gradient-to-r sm:from-floral sm:via-floral/55 sm:to-transparent" />
      <div className="page-shell relative w-full pb-14 sm:pb-0">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">ICONO Beauty World & Makeover Studio</p>
          <h1 className="display text-[clamp(3.6rem,8vw,7rem)] font-semibold leading-[.92]">
            Beauty,
            <br />
            considered.
          </h1>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#services">Explore Services</CTAButton>
            <CTAButton href="#appointment" variant="outline">
              Enquire on WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
