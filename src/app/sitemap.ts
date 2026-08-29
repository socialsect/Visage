import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visagepolyclinic.com";

  const routes = [
    "",
    "/about",
    "/treatments",
    "/botox",
    "/fillers",
    "/treatments/skin-rejuvenation",
    "/treatments/prp",
    "/treatments/prf",
    "/treatments/threads",
    "/treatments/fat-melting",
    "/treatments/skin-boosters",
    "/treatments/minor-aesthetic-procedures",
    "/laboratory",
    "/doctor",
    "/publications",
    "/publications/botox-everything-you-need-to-know",
    "/publications/skincare-routine-dubai-climate",
    "/publications/when-to-see-general-practitioner",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
