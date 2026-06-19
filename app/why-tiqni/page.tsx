import type { Metadata } from "next";
import {
  UserCheck, Cpu, MessagesSquare, Layers, LifeBuoy, CheckCircle2, Repeat, Target,
} from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactCta } from "../page";
import { whyTiqni } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Choose Tiqni",
  description:
    "Senior engineers, modern technologies, transparent communication, scalable architecture, long-term support, high code quality, agile delivery, and business-focused solutions.",
};

const icons: Record<string, React.ElementType> = {
  "Senior engineers": UserCheck,
  "Modern technologies": Cpu,
  "Transparent communication": MessagesSquare,
  "Scalable architecture": Layers,
  "Long-term support": LifeBuoy,
  "High code quality": CheckCircle2,
  "Agile delivery": Repeat,
  "Business-focused": Target,
};

const contrast = [
  { them: "Junior devs do the work after a senior sells it", us: "Senior engineers build it themselves" },
  { them: "Surprises on scope, timeline, and cost", us: "Everything agreed in writing, up front" },
  { them: "Hand-off and disappear at launch", us: "We stay for maintenance and growth" },
  { them: "Code that's hard to change later", us: "Readable, tested, maintainable code" },
];

export default function WhyTiqniPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Why Tiqni</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Senior engineering, without the agency overhead.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              You get the people who actually build the software — not a sales layer between you
              and the code. Here&apos;s what that means in practice.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="What sets us apart"
          title="Eight reasons clients choose us."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyTiqni.map((w, i) => {
            const Icon = icons[w.title] ?? CheckCircle2;
            return (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <div className="card card-hover h-full">
                  <span className="badge grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-display text-base font-semibold text-slate-900">{w.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{w.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead
          eyebrow="The difference"
          title="What you often get vs. what we deliver."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
          {contrast.map((row, i) => (
            <Reveal key={row.us} delay={(i % 4) * 60}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex items-start gap-3 border-b border-slate-200 bg-paper p-5 text-slate-500 sm:border-r">
                  <span className="mt-0.5 text-slate-400" aria-hidden="true">✕</span>
                  <p className="text-sm">{row.them}</p>
                </div>
                <div className="flex items-start gap-3 border-b border-slate-200 bg-brand-600/[0.04] p-5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-800">{row.us}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
