import Link from "next/link";
import {
  Smartphone, Globe, Server, Cloud, Palette, Lightbulb, Wrench, Sparkles,
  ShieldCheck, Eye, Layers, CheckCircle2, ArrowRight,
  HeartPulse, Truck, GraduationCap, Landmark, ShoppingCart,
  UtensilsCrossed, Users, Building2, HardHat, Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import {
  services, whyTiqni, processSteps, techStack, industries, homeFaq,
} from "@/lib/site";

const serviceIcons: Record<string, React.ElementType> = {
  "mobile-development": Smartphone,
  "web-development": Globe,
  "backend-development": Server,
  "cloud-devops": Cloud,
  "ui-ux": Palette,
  "technical-consulting": Lightbulb,
  "maintenance-support": Wrench,
  "ai-solutions": Sparkles,
};

const industryIcons: Record<string, React.ElementType> = {
  Healthcare: HeartPulse,
  Logistics: Truck,
  Education: GraduationCap,
  Finance: Landmark,
  "E-commerce": ShoppingCart,
  Hospitality: UtensilsCrossed,
  "Human Resources": Users,
  Government: Building2,
  Construction: HardHat,
  "Real Estate": HomeIcon,
};

const pillars = [
  { icon: ShieldCheck, title: "Reliable by design", body: "Production-grade software, tested and built to last." },
  { icon: Eye, title: "Clear all the way through", body: "You always know scope, status, and next steps." },
  { icon: Layers, title: "Built to scale", body: "Architecture that grows with your business, not against it." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-900">
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
          style={{ backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-brand-600/30 blur-[120px] animate-drift"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-tiqni relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-cyan-400 animate-fade-up">
              Software Development &amp; Consultancy
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-6xl">
              Software built with{" "}
              <span className="animate-gradient-x bg-brand-gradient bg-clip-text text-transparent">certainty.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 animate-fade-up sm:text-xl">
              Tiqni helps startups, SMEs, and enterprises design, build, and scale digital
              products — engineered by senior developers, delivered with transparency.
            </p>
            <div className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row">
              <Button href="/contact">Book a Free Consultation</Button>
              <Button href="/services" variant="ghost">See our services</Button>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              {["Senior engineers", "Modern stack", "Transparent process", "Long-term support"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="Why it matters"
            title="A technology partner, not just a vendor."
            sub="Most software fails slowly — through shortcuts, unclear scope, and code no one wants to maintain. We work the other way. Every project is scoped clearly, built to last, and owned end to end by senior engineers who care how it ages."
          />
          <div className="grid gap-5 sm:grid-cols-1">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card card-hover flex items-start gap-4">
                  <span className="badge grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-slate-500">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section tone="mist">
        <SectionHead
          eyebrow="What we do"
          title="From idea to production — and everything after."
          sub="End-to-end product engineering across mobile, web, backend, and cloud."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card card-hover group flex h-full flex-col"
                >
                  <span className="badge grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 font-display text-base font-semibold text-slate-900">
                    {s.title}
                    {s.comingSoon && (
                      <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[11px] font-medium text-brand-700">
                        Soon
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-500">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10">
          <Link href="/services" className="group inline-flex items-center gap-2 font-medium text-brand-600 hover:text-brand-700">
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* WHY TIQNI */}
      <Section>
        <SectionHead
          eyebrow="Why Tiqni"
          title="Senior engineering, without the agency overhead."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyTiqni.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 70}>
              <div className="card h-full">
                <CheckCircle2 className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="ink">
        <SectionHead
          eyebrow="How we work"
          title="A process you can follow step by step."
          tone="dark"
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={(i % 4) * 60}>
              <li className="rounded-2xl border border-ink-700 bg-ink-800 p-6">
                <span className="font-mono text-sm font-medium text-cyan-400">{step.n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <Link href="/process" className="group inline-flex items-center gap-2 font-medium text-cyan-400 hover:text-white">
            See our full process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* TECHNOLOGIES */}
      <Section tone="mist">
        <SectionHead
          eyebrow="Our stack"
          title="Proven tools, chosen for your project — not our convenience."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {techStack.map((group, i) => (
            <Reveal key={group.group} delay={(i % 5) * 60}>
              <div className="card h-full">
                <h3 className="font-display text-sm font-semibold text-slate-900">{group.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200 bg-mist px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHead
          eyebrow="Industries"
          title="Experience across the sectors that run on software."
        />
        <div className="marquee mt-12 overflow-x-clip py-2">
          <ul className="marquee-track flex w-max gap-4">
            {[...industries, ...industries].map((ind, i) => {
              const Icon = industryIcons[ind] ?? Building2;
              return (
                <li
                  key={`${ind}-${i}`}
                  aria-hidden={i >= industries.length}
                  className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-paper py-2.5 pl-3 pr-5 shadow-soft transition-colors hover:border-brand-500/50"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-600/10 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-brand-700">
                    {ind}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/industries" className="group inline-flex items-center gap-2 font-medium text-brand-600 hover:text-brand-700">
            Explore industries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <Section tone="mist">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Client stories</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Coming soon.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            We&apos;re a new partnership built on years of senior engineering experience. As we
            complete projects under the Tiqni name, client stories will appear here. In the
            meantime, the best signal of our work is a conversation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">Talk to our team</Button>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHead eyebrow="FAQ" title="Questions, answered." />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {homeFaq.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 60}>
              <div className="card">
                <h3 className="font-display text-base font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/faq" className="group inline-flex items-center gap-2 font-medium text-brand-600 hover:text-brand-700">
            See all FAQs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* CONTACT CTA */}
      <ContactCta />
    </>
  );
}

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
        style={{ backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-tiqni relative py-24 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something you can trust.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Book a free consultation. We&apos;ll discuss your goals and give you a clear plan,
            timeline, and estimate — no obligation.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="mailto:hello@tiqni.com" variant="ghost">Email us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
