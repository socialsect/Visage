import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visagepolyclinicdubai.com";

  const routes = [
    "",
    "/about-us",
    "/aesthetic-treatments",
    "/botox-dubai",
    "/dermal-fillers-dubai",
    "/skin-rejuvenation-dubai",
    "/prp-treatment-dubai",
    "/prf-treatment-dubai",
    "/thread-lift-dubai",
    "/fat-melting-treatment-dubai",
    "/skin-boosters-dubai",
    "/minor-aesthetic-procedures-dubai",
    "/laboratory",
    "/aesthetic-doctor-dubai",
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
