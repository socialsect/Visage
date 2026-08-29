import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visagepolyclinic.com";

  const routes = [
    "",
    "/about",
    "/treatments",
    "/botox",
    "/fillers",
    "/doctor",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
