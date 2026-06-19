import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone, Globe, Server, Cloud, Palette, Lightbulb, Wrench, Sparkles, Check, ArrowRight,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ContactCta } from "../page";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Mobile, web, backend, cloud & DevOps, UI/UX, and technical consulting. Tiqni delivers production-grade software end to end.",
};

const icons: Record<string, React.ElementType> = {
  "mobile-development": Smartphone,
  "web-development": Globe,
  "backend-development": Server,
  "cloud-devops": Cloud,
  "ui-ux": Palette,
  "technical-consulting": Lightbulb,
  "maintenance-support": Wrench,
  "ai-solutions": Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Services</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Services that take you from idea to production.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              End-to-end product engineering. Engage us for a full build, a single phase, or an
              ongoing partnership.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.slug];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <div className="card card-hover grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600/10 text-brand-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-slate-900">
                      {s.title}
                      {s.comingSoon && (
                        <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[11px] font-medium text-brand-700">
                          Coming soon
                        </span>
                      )}
                    </h2>
                    <p className="mt-1.5 max-w-2xl text-slate-500">{s.short}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/services/${s.slug}`}
                    aria-label={`Learn more about ${s.title}`}
                    className="group inline-flex items-center gap-2 self-start text-sm font-medium text-brand-600 hover:text-brand-700 sm:self-center"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 rounded-2xl border border-slate-200 bg-mist p-8 text-center">
          <p className="text-lg text-slate-700">
            Not sure where to start?{" "}
            <span className="font-semibold text-slate-900">We&apos;ll point you the right way.</span>
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Book a free consultation</Button>
          </div>
        </Reveal>
      </Section>

      <ContactCta />
    </>
  );
}
