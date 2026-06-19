import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Why Choose Tiqni",
  description: "Senior engineers, modern technologies, transparent communication, scalable architecture, and long-term support.",
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Why Tiqni"
      title="More reasons, coming soon."
      body="Senior engineers, modern technologies, transparent communication, scalable architecture, long-term support, high code quality, agile delivery, and business-focused solutions. A dedicated page is on its way."
    />
  );
}
