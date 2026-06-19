import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Our Technology Stack",
  description: "Flutter, React, Next.js, Node.js, NestJS, Laravel, ASP.NET, PostgreSQL, AWS, Azure, and more — the tools Tiqni builds with.",
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Technologies"
      title="The full stack breakdown is coming."
      body="Frontend, backend, databases, cloud, and tooling — we choose proven technologies that fit your project. A detailed page is in progress; the highlights are on the home page in the meantime."
    />
  );
}
