import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";

export const metadata: Metadata = { title: "Accessibility Statement", description: policies.accessibility.description };
export default function AccessibilityPage() { return <PolicyPage policy={policies.accessibility} />; }
