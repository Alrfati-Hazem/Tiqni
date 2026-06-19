import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactCta } from "../page";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about working with Tiqni, services, pricing, process, support, confidentiality, technologies, and how to get started.",
};

const faqs = [
  { q: "What does Tiqni do?", a: "We design, build, and scale custom software across mobile, web, backend, and cloud, for startups, SMEs, and enterprises." },
  { q: "Who do you work with?", a: "Startups building MVPs, SMEs, companies modernizing legacy systems, and enterprises needing custom software, in Australia and internationally." },
  { q: "Can I see past projects?", a: "Most of our prior work was built for previous employers under confidentiality and IP agreements, so we can't publicly showcase it. We're happy to walk you through our experience, capabilities, and approach in detail." },
  { q: "How much will my project cost?", a: "It depends on scope and complexity. After a free consultation, we provide a clear written estimate and timeline before any work begins." },
  { q: "How long does a project take?", a: "An MVP can take a few weeks to a few months; larger platforms take longer. We scope timelines clearly during planning and deliver in increments." },
  { q: "Do you work fixed-price or hourly?", a: "Both. We recommend the model that fits your project: fixed-price for well-defined scope, time-based for evolving or ongoing work." },
  { q: "Do you support software after launch?", a: "Yes. Long-term maintenance and support is core to how we work: updates, monitoring, fixes, and improvements." },
  { q: "What technologies do you use?", a: "Flutter, React, Next.js, and TypeScript on the front end; Node.js, NestJS, Laravel, ASP.NET, and Firebase on the back end; PostgreSQL, MySQL, MongoDB, and Firestore for data; AWS, Azure, Google Cloud, and Docker for infrastructure." },
  { q: "Can you build mobile and web from one codebase?", a: "Yes. We specialize in Flutter for cross-platform mobile, and modern web frameworks for the web, choosing the right approach per project." },
  { q: "Do you work with existing teams or codebases?", a: "Absolutely. We can join an existing team, take over a legacy codebase, run an architecture review, or audit code. Whatever your situation needs, we adapt." },
  { q: "How do you communicate during a project?", a: "Transparently and regularly: clear updates, shared timelines, and a single point of contact. You always know scope, status, and next steps." },
  { q: "Who owns the code and IP?", a: "You do. On project completion and payment, all code and intellectual property belong to you." },
  { q: "Can you sign an NDA?", a: "Yes. We take confidentiality seriously and are happy to sign an NDA before discussing sensitive details." },
  { q: "Do you offer a free consultation?", a: "Yes, a free, no-obligation consultation to understand your goals and outline scope, timeline, and an estimate." },
  { q: "Are you available for international clients?", a: "Yes. We work with clients in Australia and internationally, and adapt to your time zone where possible." },
  { q: "Do you build AI features?", a: "Practical AI capabilities like search, automation, assistants, and data insights are a growing part of what we offer, added thoughtfully as your product matures." },
  { q: "How do we get started?", a: "Send us a message through the contact page or email us. We'll reply within one business day to set up a consultation." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">FAQ</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently asked questions.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Everything you need to know about working with Tiqni. Can&apos;t find your answer?{" "}
              <a href="/contact" className="text-cyan-400 underline">Get in touch.</a>
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead eyebrow="Answers" title="Common questions." />
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-paper">
          {faqs.map((f, i) => (
            <details key={f.q} className="group px-6 py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-slate-900">
                {f.q}
                <span className="text-brand-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <ContactCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
