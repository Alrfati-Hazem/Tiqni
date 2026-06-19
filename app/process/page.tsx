import type { Metadata } from "next";
import {
  Search, ClipboardList, Palette, Code2, TestTube2, Rocket, LifeBuoy,
} from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactCta } from "../page";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Development Process",
  description:
    "Discovery, planning, UI/UX, development, testing, deployment, support, a transparent, step-by-step process you can follow from idea to launch and beyond.",
};

const stepIcons: Record<string, React.ElementType> = {
  Discovery: Search,
  Planning: ClipboardList,
  "UI/UX": Palette,
  Development: Code2,
  Testing: TestTube2,
  Deployment: Rocket,
  Support: LifeBuoy,
};

const detail: Record<string, string> = {
  Discovery: "We start with your business, goals, users, constraints, and what success looks like. No assumptions, no jumping to code.",
  Planning: "You get scope, architecture, timeline, and a written estimate before we build. Decisions are documented so there are no surprises later.",
  "UI/UX": "We design the flows and screens, and you approve them before development starts. Building the right thing beats building fast.",
  Development: "We build in short increments you can see and test. You watch the product take shape instead of waiting for a big reveal.",
  Testing: "Every feature is checked before it ships, functionality, edge cases, and performance, so quality is built in, not bolted on.",
  Deployment: "We release safely, with monitoring and rollback in place. Going live is routine, not a risk.",
  Support: "Software is never “done.” We maintain, monitor, and improve what we build, long after launch.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Process</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A process you can follow, step by step.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              No black boxes. From the first call to long after launch, you always know what&apos;s
              happening, what&apos;s next, and why. Here&apos;s how we work.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="How we work"
          title="Seven stages, fully transparent."
          sub="Each stage has a clear output you can see and sign off on, so the project stays predictable from idea to support."
        />
        <ol className="mt-14 space-y-6">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[step.title] ?? Search;
            return (
              <Reveal key={step.n} delay={(i % 3) * 60}>
                <li className="card card-hover grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex items-center gap-4">
                    <span className="badge grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600/10 text-brand-600">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-2xl font-medium text-slate-300 sm:hidden">{step.n}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="hidden font-mono text-sm font-medium text-brand-600 sm:inline">{step.n}</span>
                      <h2 className="font-display text-xl font-semibold text-slate-900">{step.title}</h2>
                    </div>
                    <p className="mt-2 leading-relaxed text-slate-600">{detail[step.title] ?? step.body}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="How we deliver"
            title="Agile, but accountable."
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              We work in short cycles with regular check-ins, so you can steer the project as it
              evolves instead of finding out at the end. Priorities can shift, the transparency
              doesn&apos;t.
            </p>
            <p>
              Every engagement has a single point of contact, clear written scope, and updates you
              don&apos;t have to chase. That&apos;s what &quot;certainty&quot; means to us.
            </p>
          </Reveal>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
