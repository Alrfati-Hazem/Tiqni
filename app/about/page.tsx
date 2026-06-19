import type { Metadata } from "next";
import { Target, Eye, Compass } from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ContactCta } from "../page";
import { values, founders } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Tiqni — Senior Engineers, Long-Term Partners",
  description:
    "Meet Tiqni: a software consultancy founded by senior engineers. Our mission, values, and the founders behind reliable, high-quality software.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">About Tiqni</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              We&apos;re builders who stay.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Tiqni is a software development and technology consultancy. We help businesses
              design, build, and scale digital products through modern engineering — and we
              stick around to keep them healthy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead eyebrow="Our story" title="Why we started Tiqni." />
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              We spent years building production software inside established companies — apps and
              systems used by thousands of people. We saw what makes software succeed: senior
              people who care, clear communication, and a commitment to quality over shortcuts.
            </p>
            <p>
              We also saw how often clients get the opposite. Tiqni is our answer — a consultancy
              where senior engineering and honest partnership are the default, not the upsell.
            </p>
            <p>
              The name comes from the Arabic idea of{" "}
              <span className="font-medium text-slate-900">certainty and trust</span> — exactly
              what we want every client to feel.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* MISSION / VISION / APPROACH */}
      <Section tone="mist">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Target, title: "Our mission", body: "To become a trusted long-term technology partner for startups, SMEs, and enterprises by delivering reliable, scalable, and high-quality software." },
            { icon: Eye, title: "Our vision", body: "A world where businesses of any size can access senior-level engineering and ship software they can rely on for years." },
            { icon: Compass, title: "Our approach", body: "Understand the business first. Scope clearly in writing. Build in increments you can test. Write code our future selves would thank us for. And stay." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="card card-hover h-full">
                <span className="badge grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                  <b.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-500">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* VALUES */}
      <Section>
        <SectionHead eyebrow="Values" title="What we stand for." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 70}>
              <div className="card h-full">
                <h3 className="font-display text-base font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FOUNDERS */}
      <Section tone="mist">
        <SectionHead eyebrow="The team" title="Meet the founders." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="card h-full">
                <div className="flex items-center gap-4">
                  {f.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={f.photo}
                      alt={`${f.name} — ${f.role}`}
                      className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top ring-1 ring-slate-200"
                    />
                  ) : (
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-gradient font-display text-xl font-semibold text-white">
                      {f.initials}
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{f.name}</h3>
                    <p className="text-sm font-medium text-brand-600">{f.role}</p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-slate-600">{f.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {f.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-slate-200 bg-paper px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/contact">Book a Free Consultation</Button>
        </Reveal>
      </Section>

      <ContactCta />
    </>
  );
}
