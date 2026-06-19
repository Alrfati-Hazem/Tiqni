import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles on mobile, Flutter, software engineering, AI, cloud, backend, web development, and business technology — from Tiqni.",
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Insights"
      title="Our blog is warming up."
      body="Practical articles on Flutter, software engineering, AI, cloud, backend, web development, and business technology. First posts are in the works."
    />
  );
}
