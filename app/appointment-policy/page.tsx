import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";

export const metadata: Metadata = { title: "Appointment & Cancellation Policy", description: policies.appointments.description };
export default function AppointmentPolicyPage() { return <PolicyPage policy={policies.appointments} />; }
