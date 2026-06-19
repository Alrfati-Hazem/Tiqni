import Link from "next/link";

export function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const wordColor = variant === "dark" ? "text-white" : "text-slate-900";
  return (
    <Link
      href="/"
      aria-label="Tiqni — home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-soft">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* Geometric T forming a checkmark/anchor — "certainty confirmed" */}
          <path
            d="M4 5h16M12 5v9.5"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M7 14.5l5 4.5 5-9"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.92"
          />
        </svg>
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${wordColor}`}>
        Tiqni
      </span>
    </Link>
  );
}
