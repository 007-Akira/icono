import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Icono Beauty World",
  description: policies.privacy.description,
  path: "/privacy-policy",
});
export default function PrivacyPolicyPage() {
  return <PolicyPage policy={policies.privacy} />;
}
