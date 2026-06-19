import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function ComingSoon({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-ink-900">
      <div className="container-tiqni grid min-h-[70vh] place-items-center py-24 text-center">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-cyan-400">{eyebrow}</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{body}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="/" variant="ghost">Back to home</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
