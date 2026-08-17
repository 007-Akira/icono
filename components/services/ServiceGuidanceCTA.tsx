import { business } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function ServiceGuidanceCTA({ category }: { category: string }) {
  const message = `Hello Icono, I would like guidance on your ${category} services. Please help me choose a suitable option.`;
  return (
    <section className="border-y border-olive/25 bg-bone/35 px-6 py-16 text-center md:py-20">
      <p className="eyebrow text-olive">Need Guidance?</p>
      <h2 className="display mx-auto mt-5 max-w-3xl text-4xl md:text-5xl">
        Not sure which service is right for you?
      </h2>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-olive">
        Tell us what you&apos;re looking for and the Icono team can guide you through the available
        options.
      </p>
      <a
        href={createGeneralWhatsAppUrl(business.whatsapp, message)}
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow mt-8 inline-flex bg-smoke px-7 py-4 text-floral"
      >
        Enquire on WhatsApp
      </a>
    </section>
  );
}
