import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactCta } from "../page";
import { projects } from "@/lib/site";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 16.07c-.42.96-.62 1.39-1.16 2.24-.752 1.18-1.81 2.65-3.122 2.66-1.168.01-1.469-.76-3.054-.75-1.585.01-1.913.76-3.082.75-1.312-.01-2.31-1.34-3.062-2.52-2.103-3.32-2.323-7.21-1.026-9.28.92-1.47 2.378-2.33 3.745-2.33 1.392 0 2.268.76 3.42.76 1.118 0 1.798-.76 3.41-.76 1.218 0 2.51.66 3.43 1.81-3.014 1.65-2.526 5.97.501 7.42z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M3.609 1.814 13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.43V3.244c0-.527.231-1.018.61-1.43zm10.89 10.893 2.302 2.302-11.302 6.483 9-8.785zM21.094 12c0 .713-.385 1.371-1.005 1.722l-3.07 1.764-2.595-2.486 2.595-2.486 3.07 1.764c.62.351 1.005 1.009 1.005 1.722zM5.5 1.418l11.296 6.487-2.301 2.301L5.5 1.418z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected production software shipped by the Tiqni team, mobile apps, delivery platforms, HR systems, and backend services across education, media, and real estate.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-24 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Projects</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Software we&apos;ve shipped.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              A selection of production work, mobile apps, delivery platforms, HR systems, and
              backend services, built end-to-end with the same standard we bring to every project.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Selected work"
          title="Built, launched, and maintained."
          sub="Real apps in the stores and platforms in production, across education, media, delivery, HR, and real estate."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <article className="card card-hover flex h-full flex-col">
                <span className="badge inline-flex self-start rounded-full bg-brand-600/10 px-3 py-1 text-xs font-medium text-brand-700">
                  {p.category}
                </span>

                <h2 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {p.name}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {p.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-mist px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(p.stores || p.links) && (
                  <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4 text-sm font-medium">
                    {p.stores?.appStore && (
                      <a
                        href={p.stores.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-brand-700"
                      >
                        <AppleIcon className="h-4 w-4" />
                        App Store
                      </a>
                    )}
                    {p.stores?.playStore && (
                      <a
                        href={p.stores.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-brand-700"
                      >
                        <GooglePlayIcon className="h-4 w-4" />
                        Google Play
                      </a>
                    )}
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-brand-700"
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
