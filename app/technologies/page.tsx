import type { Metadata } from "next";
import { Layers, Server, Database, Cloud, Wrench } from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactCta } from "../page";
import { techStack } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Technology Stack",
  description:
    "Flutter, React, Next.js, Node.js, NestJS, Laravel, ASP.NET, PostgreSQL, AWS, Azure, and more — the proven tools Tiqni builds with.",
};

const groupIcons: Record<string, React.ElementType> = {
  Frontend: Layers,
  Backend: Server,
  Databases: Database,
  Cloud: Cloud,
  Tools: Wrench,
};

export default function TechnologiesPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Technologies</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Proven tools, chosen for your project.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              We pick technologies for fit, not fashion — modern, well-supported, and right for
              what you&apos;re building. Here&apos;s the stack we work in every day.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Our stack"
          title="From front end to infrastructure."
          sub="Full coverage across the product lifecycle — mobile and web front ends, backend services, data, cloud, and the tooling that keeps delivery smooth."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => {
            const Icon = groupIcons[group.group] ?? Layers;
            return (
              <Reveal key={group.group} delay={(i % 3) * 70}>
                <div className="card card-hover h-full">
                  <div className="flex items-center gap-3">
                    <span className="badge grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="font-display text-lg font-semibold text-slate-900">{group.group}</h2>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-200 bg-mist px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="How we choose"
            title="The right tool beats the trendy one."
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Every project starts with the problem, not the stack. We weigh your timeline, team,
              budget, and how the product needs to scale — then choose technologies that keep it
              fast to build now and cheap to maintain later.
            </p>
            <p>
              We favor mature, well-documented tools with strong communities, so your software
              stays supportable for years — and any developer can pick it up, not just us.
            </p>
          </Reveal>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
