import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition duration-200 focus-visible:outline-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 px-5 py-3 text-white hover:bg-brand-700 hover:-translate-y-0.5 shadow-soft hover:shadow-lift",
  secondary:
    "border border-slate-300 bg-paper px-5 py-3 text-slate-900 hover:border-brand-500 hover:text-brand-700",
  ghost:
    "border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10",
  link: "px-0 py-1 text-brand-600 hover:text-brand-700",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {(withArrow || variant === "link") && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      )}
    </Link>
  );
}
