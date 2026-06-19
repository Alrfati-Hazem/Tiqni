import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/about", "/services", "/industries", "/technologies", "/process",
    "/why-tiqni", "/contact", "/insights", "/careers", "/faq", "/privacy", "/terms",
  ].map((path) => ({
    url: `${site.domain}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.domain}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
