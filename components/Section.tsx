import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "mist" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper",
    mist: "bg-mist",
    ink: "bg-ink-900 text-slate-300",
  };
  return (
    <section id={id} className={`py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <div className="container-tiqni">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-slate-900";
  const subColor = tone === "dark" ? "text-slate-400" : "text-slate-500";
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`font-display text-2xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{sub}</p>}
    </Reveal>
  );
}
