import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Careers",
  description: "Tiqni is a new, growing software consultancy. Open roles will appear here. Senior engineers welcome to reach out anytime.",
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Careers"
      title="We're not hiring just yet, but we're growing."
      body="Tiqni is a new partnership. As we scale, open roles will appear here. If you're a senior engineer who cares about quality and long-term work, introduce yourself anytime."
    />
  );
}
