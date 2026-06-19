import { Reveal } from "./Reveal";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-ink-900">
        <div className="container-tiqni py-20 sm:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-cyan-400">Legal</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-tiqni">
          <div className="prose-tiqni mx-auto max-w-3xl space-y-8 text-slate-600 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:tracking-tight [&_li]:mt-1.5 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              This is a template for general guidance only and is not legal advice. Have it
              reviewed by a qualified lawyer and tailored to your jurisdiction (e.g. the Australian
              Privacy Act 1988) before publishing.
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
