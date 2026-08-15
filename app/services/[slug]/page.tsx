import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
type ServicePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> { const { slug } = await params; const service = getService(slug); return service ? { title: `${service.name} Services`, description: `Explore ${service.name.toLowerCase()} services at ICONO Beauty World & Makeover Studio in Kollam.` } : {}; }
export default async function Page({ params }: ServicePageProps) { const { slug } = await params; const service = getService(slug); if (!service) notFound(); return <ServicePage service={service} />; }
