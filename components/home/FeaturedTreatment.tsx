import Image from "next/image";
import { referenceImages } from "@/data/images";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function FeaturedTreatment() { return <section className="relative min-h-[650px] py-24"><Image src={referenceImages.treatment} alt="Abstract editorial facial-care texture" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-smoke/20"/><div className="page-shell relative flex min-h-[450px] items-center"><div className="max-w-xl bg-floral p-8 sm:p-14"><SectionLabel>Featured Treatment</SectionLabel><h2 className="display mt-4 text-4xl">Hydra Facial</h2><p className="mt-5 leading-7 text-olive">A salon facial focused on cleansing, hydration and a smoother, refreshed-looking cosmetic finish.</p><ul className="mt-5 space-y-2 text-sm text-olive"><li>— Hydration-focused facial care</li><li>— Fresh, smoother-looking finish</li><li>— Care selected around your preferences</li></ul><CTAButton href="/services/skin-facial" className="mt-8">Explore Skin &amp; Facial</CTAButton></div></div></section>; }
