import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Healthcare, logistics, education, finance, e-commerce, and more — Tiqni builds software across the sectors that run on it.",
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Industries"
      title="Industry pages are on the way."
      body="Healthcare, logistics, education, finance, e-commerce, hospitality, HR, government, construction, real estate — we've built across them. Detailed pages are coming. Want to know our experience in yours? Just ask."
    />
  );
}
