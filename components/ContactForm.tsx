"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site";

const budgets = ["Under $10k", "$10k – $30k", "$30k – $75k", "$75k+", "Not sure yet"];

const field =
  "w-full rounded-xl border border-slate-200 bg-paper px-4 py-3 text-slate-900 placeholder:text-slate-400 focus-visible:border-brand-500";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire to an email service / API route in production.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-4 py-14 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-600/10 text-brand-600">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-slate-900">Thanks — message received.</h3>
        <p className="max-w-sm text-slate-500">
          We&apos;ll get back to you within one business day. (This is a demo form — connect it to
          your email service or an API route to go live.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name *</label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email *</label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" className={field} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+61 …" />
        </div>
        <div>
          <label htmlFor="service" className={label}>Service interested in</label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={label}>Budget range</label>
          <select id="budget" name="budget" className={field} defaultValue="">
            <option value="" disabled>Optional</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us about your project, goals, and timeline."
        />
      </div>
      <p className="text-xs text-slate-400">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-brand-600">Privacy Policy</a>.
      </p>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
    </form>
  );
}
