import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Appointment & Cancellation Policy | Icono",
  description: policies.appointments.description,
  path: "/appointment-policy",
});
export default function AppointmentPolicyPage() {
  return <PolicyPage policy={policies.appointments} />;
}
