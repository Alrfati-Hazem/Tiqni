import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { services, site } from "@/lib/site";

const company = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Why Tiqni", href: "/why-tiqni" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-400">
      <div className="container-tiqni py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A software development and technology consultancy. Reliable, scalable software,
              engineered by senior developers and delivered with transparency.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiqni on LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-ink-700 transition-colors hover:border-brand-500 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Tiqni"
                className="grid h-10 w-10 place-items-center rounded-xl border border-ink-700 transition-colors hover:border-brand-500 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Col title="Company" links={company} />
          <Col title="Resources" links={resources} />
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Tiqni. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-slate-500 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
