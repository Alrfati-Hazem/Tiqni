import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ContactCta } from "../../page";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} Services`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400"
            >
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <h1 className="flex flex-wrap items-center gap-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.title}
              {service.comingSoon && (
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-medium text-cyan-400">
                  Coming soon
                </span>
              )}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">{service.short}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
              What&apos;s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li key={b} className="card flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <span className="font-medium text-slate-800">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-slate-600">
              Every engagement is led by senior engineers and follows our transparent process:
              clear scope, regular updates, and quality you can rely on. Detailed{" "}
              {service.title.toLowerCase()} case material is on its way; for now, the fastest way to
              see if we&apos;re a fit is a quick conversation.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="card bg-mist">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Start with {service.title.toLowerCase()}
              </h3>
              <p className="mt-2 text-slate-500">
                Book a free consultation and we&apos;ll map out scope, timeline, and a clear
                estimate, no obligation.
              </p>
              <div className="mt-6">
                <Button href="/contact" className="w-full">Book a Free Consultation</Button>
              </div>
              <div className="mt-4">
                <Link href="/process" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                  See how we work →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
