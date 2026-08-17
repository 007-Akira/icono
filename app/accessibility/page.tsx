import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Accessibility Statement | Icono Beauty World",
  description: policies.accessibility.description,
  path: "/accessibility",
});
export default function AccessibilityPage() {
  return <PolicyPage policy={policies.accessibility} />;
}
