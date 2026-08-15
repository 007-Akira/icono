import Image from "next/image";
import { referenceImages } from "@/data/images";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function FeaturedTreatment() { return <section className="relative min-h-[650px] py-24"><Image src={referenceImages.treatment} alt="Abstract editorial treatment texture" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-smoke/20"/><div className="page-shell relative flex min-h-[450px] items-center"><div className="max-w-xl bg-floral p-8 sm:p-14"><SectionLabel>Featured Treatment</SectionLabel><h2 className="display mt-4 text-4xl">Speciality treatment to be confirmed</h2><p className="mt-5 leading-7 text-olive">This space is reserved for one of ICONO&apos;s confirmed speciality treatments. Service claims and treatment benefits will be added only after approval.</p><CTAButton href="/contact#appointment" className="mt-8">Enquire</CTAButton></div></div></section>; }
