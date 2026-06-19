import type { Metadata } from "next";
import "./globals.css";
import { inter, sora, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Tiqni — Software Development & Technology Consultancy",
    template: "%s — Tiqni",
  },
  description: site.description,
  keywords: [
    "software development company Australia",
    "custom software development",
    "Flutter app development",
    "web app development",
    "software consultancy",
  ],
  openGraph: {
    type: "website",
    siteName: "Tiqni",
    title: "Tiqni — Software Development & Technology Consultancy",
    description: site.description,
    url: site.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiqni — Software Development & Technology Consultancy",
    description: site.description,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tiqni",
  url: site.domain,
  description: site.description,
  email: site.email,
  sameAs: [site.linkedin],
  founder: [
    { "@type": "Person", name: "Hazem Alrfati", jobTitle: "Co-Founder & CTO" },
    { "@type": "Person", name: "Hamzeh Dweik", jobTitle: "Co-Founder & Client Relations Director" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
