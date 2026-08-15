import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/PolicyPage";
import { policies } from "@/data/policies";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: policies.disclaimer.description,
};
export default function DisclaimerPage() {
  return <PolicyPage policy={policies.disclaimer} />;
}
