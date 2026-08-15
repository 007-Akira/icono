import type { Metadata } from "next";
import { AppointmentEnquiry } from "@/components/home/AppointmentEnquiry";
import { VisitIcono } from "@/components/home/VisitIcono";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "Contact", description: "Contact ICONO Beauty World & Makeover Studio and enquire about an appointment." };
export default function ContactPage() { return <><section className="bg-bone/35 pb-20 pt-40"><div className="page-shell grid gap-10 md:grid-cols-12"><div className="md:col-span-7"><p className="eyebrow text-olive">Contact</p><h1 className="display mt-4 text-6xl sm:text-8xl">Let&apos;s talk beauty.</h1></div><div className="space-y-5 text-olive md:col-span-4 md:col-start-9"><p>{business.phone || "Phone number to be provided."}</p><p>{business.email || "Email address to be provided."}</p><p>{business.address || "Studio address to be provided."}</p><p>{business.openingHours.length ? business.openingHours.join(" · ") : "Opening hours to be provided."}</p></div></div></section><AppointmentEnquiry /><VisitIcono /></>; }
