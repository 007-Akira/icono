import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";

export const metadata: Metadata = { title: "Terms & Conditions", description: policies.terms.description };
export default function TermsPage() { return <PolicyPage policy={policies.terms} />; }
