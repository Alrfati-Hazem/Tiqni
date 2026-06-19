import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Our Development Process",
  description: "Discovery, planning, UI/UX, development, testing, deployment, support — a transparent process you can follow step by step.",
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Process"
      title="A deeper look at how we work is coming."
      body="Discovery, planning, UI/UX, development, testing, deployment, and support — each stage explained in full. The summary lives on the home page for now."
    />
  );
}
