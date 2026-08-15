import Image from "next/image";
import { Service } from "@/data/services";

export function ServiceHero({ service }: { service: Service }) { return <section className="relative min-h-[78svh] overflow-hidden pt-20"><Image src={service.image} alt={`${service.name} editorial reference`} fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-smoke/75 via-smoke/10 to-transparent"/><div className="page-shell relative flex min-h-[calc(78svh-5rem)] items-end pb-14 text-floral"><div><p className="eyebrow text-bone">{service.eyebrow}</p><h1 className="display mt-4 text-[clamp(4rem,10vw,8rem)] uppercase leading-none">{service.name}</h1></div></div></section>; }
