import type { Metadata } from "next";
import { Mail, Phone, Linkedin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Tiqni — Book a Free Consultation",
  description:
    "Tell us about your project. Book a free consultation with Tiqni's founders and get a clear plan, timeline, and estimate.",
};

const steps = [
  { n: "01", title: "We reply", body: "Within one business day." },
  { n: "02", title: "We talk", body: "A short call to understand your goals." },
  { n: "03", title: "You get a plan", body: "Scope, timeline, and a written estimate." },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Contact</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something you can trust.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Tell us about your project. We&apos;ll get back within one business day with next
              steps — usually a free consultation to map out scope, timeline, and a clear estimate.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-tiqni grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="card">
              <h2 className="font-display text-lg font-semibold text-slate-900">Reach us directly</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="text-slate-700 hover:text-brand-600">{site.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <span className="text-slate-700">{site.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-brand-600">/company/tiqni</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <span className="text-slate-700">Mon–Fri, Australian business hours</span>
                </li>
              </ul>
            </div>

            <div className="card bg-ink-900 text-slate-300">
              <h3 className="font-display text-lg font-semibold text-white">Prefer to talk first?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Book a free 30-minute consultation. No obligation, no sales script — just a clear
                conversation about what you&apos;re building.
              </p>
              <a
                href={`mailto:${site.email}?subject=Free%20consultation%20request`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 font-medium text-white"
              >
                Book a Free Consultation
              </a>
            </div>

            <div className="card">
              <h3 className="font-display text-lg font-semibold text-slate-900">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-3">
                    <span className="font-mono text-sm font-medium text-brand-600">{s.n}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                      <p className="text-sm text-slate-500">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
