import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: policies.privacy.description,
};
export default function PrivacyPolicyPage() {
  return <PolicyPage policy={policies.privacy} />;
}
