# Tiqni — Sitemap, SEO & CTA Strategy

## Sitemap

```
/                     Home
/about                About (story, mission, vision, values, founders, approach)
/services             Services overview
  /services/mobile-development
  /services/web-development
  /services/backend-development
  /services/cloud-devops
  /services/ui-ux
  /services/technical-consulting
  /services/maintenance-support
  /services/ai-solutions
/industries           Industries served
/technologies         Tech stack
/process              Development process
/why-tiqni            Why choose Tiqni
/contact              Contact + consultation booking
/insights             Blog / Insights (index)
  /insights/[slug]    Article
/careers              Careers
/faq                  FAQ
/privacy              Privacy Policy
/terms                Terms of Service
```

> Service detail pages, industries, technologies, process, why-tiqni, insights, careers, legal = **Pass 2**.
> Pass 1 builds: Home, About, Services (overview), Contact + global nav/footer/brand.

## Navigation

**Primary nav:** Services · Industries · Technologies · Process · About · Insights · **[Book a Consultation]** (button)
- Services as dropdown/mega-menu listing the 8 services (Pass 2).
**Footer nav:** Company (About, Process, Why Tiqni, Careers, Contact) · Services (8) · Resources (Insights, FAQ) · Legal (Privacy, Terms) · Social (LinkedIn).

## Internal linking

- Home → every top section links to its full page (Services→/services, etc.).
- Services overview → each service detail.
- Service detail → related industries + /process + /contact.
- About → /process, /why-tiqni, /contact.
- Insights articles → relevant service + /contact CTA.
- Global footer links every page (flat crawlability).

## CTA strategy

- **Primary CTA (everywhere):** *Book a Free Consultation* → /contact.
- Secondary: *Start Your Project*, *Let's Build Together*, *Talk to Our Team*.
- Placement: nav (persistent), hero, after each major section, sticky on mobile, footer band.
- One primary action per screen; never compete two CTAs of equal weight.

---

## Per-page SEO (Pass 1)

### Home
- **Title:** `Tiqni — Software Development & Technology Consultancy`
- **Meta:** `Tiqni builds reliable, scalable software for startups, SMEs, and enterprises. Senior engineers, modern practices, long-term partnership. Book a free consultation.`
- **H1:** `Software built with certainty.`
- **H2s:** What we do · Why Tiqni · How we work · Technologies · Industries · FAQ · Let's build.
- **Keywords:** software development company Australia, custom software development, Flutter app development, web app development, software consultancy.

### About
- **Title:** `About Tiqni — Senior Engineers, Long-Term Partners`
- **Meta:** `Meet Tiqni: a software consultancy founded by senior engineers. Our mission, values, and the founders behind reliable, high-quality software.`
- **H1:** `We're builders who stay.`
- **H2s:** Our story · Mission · Vision · Values · Meet the founders · Our approach.
- **Keywords:** software consultancy founders, senior software engineers, software development partner.

### Services
- **Title:** `Software Development Services — Tiqni`
- **Meta:** `Mobile, web, backend, cloud & DevOps, UI/UX, and technical consulting. Tiqni delivers production-grade software end to end.`
- **H1:** `Services that take you from idea to production.`
- **H2s:** one per service category.
- **Keywords:** mobile app development, web development services, backend API development, cloud DevOps, UI UX, technical consulting.

### Contact
- **Title:** `Contact Tiqni — Book a Free Consultation`
- **Meta:** `Tell us about your project. Book a free consultation with Tiqni's founders and get a clear plan, timeline, and estimate.`
- **H1:** `Let's build something you can trust.`
- **Keywords:** book software consultation, hire software developers, custom software quote.

## Technical SEO

- `metadata` API per page (title, description, OpenGraph, Twitter card, canonical).
- `app/sitemap.ts` + `app/robots.ts`.
- JSON-LD: `Organization` + `WebSite` global; `Service` on service pages; `FAQPage` on FAQ; `BreadcrumbList`; `Person` for founders.
- Semantic HTML, fast LCP (next/font, no blocking), responsive images, descriptive alt text.
