import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions | Icono Beauty World",
  description: policies.terms.description,
  path: "/terms-and-conditions",
});
export default function TermsPage() {
  return <PolicyPage policy={policies.terms} />;
}
