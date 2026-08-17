import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Website Disclaimer | Icono Beauty World",
  description: policies.disclaimer.description,
  path: "/disclaimer",
});
export default function DisclaimerPage() {
  return <PolicyPage policy={policies.disclaimer} />;
}
