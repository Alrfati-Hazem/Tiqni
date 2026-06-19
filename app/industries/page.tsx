import type { Metadata } from "next";
import {
  HeartPulse, Truck, GraduationCap, Landmark, ShoppingCart,
  UtensilsCrossed, Users, Building2, HardHat, Home,
} from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactCta } from "../page";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Healthcare, logistics, education, finance, e-commerce, hospitality, HR, government, construction, real estate, Tiqni builds software across the sectors that run on it.",
};

const meta: Record<string, { icon: React.ElementType; blurb: string }> = {
  Healthcare: { icon: HeartPulse, blurb: "Patient portals, scheduling, and secure data flows built with care for privacy." },
  Logistics: { icon: Truck, blurb: "Live tracking, dispatch, and route tooling that keep operations moving." },
  Education: { icon: GraduationCap, blurb: "Learning platforms and content delivery built to scale to many users." },
  Finance: { icon: Landmark, blurb: "Secure, auditable systems where reliability and trust are non-negotiable." },
  "E-commerce": { icon: ShoppingCart, blurb: "Storefronts, checkout, and dashboards tuned for conversion and speed." },
  Hospitality: { icon: UtensilsCrossed, blurb: "Booking, ordering, and guest experiences that work on every device." },
  "Human Resources": { icon: Users, blurb: "Attendance, requests, approvals, and role-based workflows that simplify HR." },
  Government: { icon: Building2, blurb: "Accessible, dependable services for citizens and staff alike." },
  Construction: { icon: HardHat, blurb: "Field tools, reporting, and coordination that hold up on site." },
  "Real Estate": { icon: Home, blurb: "Listings, CRM, and platforms connecting buyers, sellers, and agents." },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Industries</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Software for the sectors that run on it.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              We&apos;ve built production software across many industries. We learn how your
              business actually works before we write a line of code, so the software fits the
              way you operate, not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Where we work"
          title="Experience across ten sectors."
          sub="Different industries, same standard: reliable, scalable, well-built software."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((name, i) => {
            const m = meta[name] ?? { icon: Building2, blurb: "" };
            const Icon = m.icon;
            return (
              <Reveal key={name} delay={(i % 3) * 70}>
                <div className="card card-hover h-full">
                  <span className="badge grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-display text-lg font-semibold text-slate-900">{name}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{m.blurb}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="Don't see yours?"
            title="The fundamentals travel."
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Good engineering isn&apos;t industry-specific. Clean architecture, secure data, clear
              UX, and reliable delivery matter everywhere, and they&apos;re what we bring to every
              project, whatever the sector.
            </p>
            <p>
              If your industry isn&apos;t listed, that&apos;s not a gap, it&apos;s a conversation.
              Tell us what you&apos;re building and we&apos;ll tell you exactly how we&apos;d approach it.
            </p>
          </Reveal>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
