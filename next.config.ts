import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/treatments", destination: "/aesthetic-treatments", permanent: true },
      { source: "/botox", destination: "/botox-dubai", permanent: true },
      { source: "/fillers", destination: "/dermal-fillers-dubai", permanent: true },
      { source: "/doctor", destination: "/aesthetic-doctor-dubai", permanent: true },
      { source: "/treatments/skin-rejuvenation", destination: "/skin-rejuvenation-dubai", permanent: true },
      { source: "/treatments/prp", destination: "/prp-treatment-dubai", permanent: true },
      { source: "/treatments/prf", destination: "/prf-treatment-dubai", permanent: true },
      { source: "/treatments/threads", destination: "/thread-lift-dubai", permanent: true },
      { source: "/treatments/fat-melting", destination: "/fat-melting-treatment-dubai", permanent: true },
      { source: "/treatments/skin-boosters", destination: "/skin-boosters-dubai", permanent: true },
      { source: "/treatments/minor-aesthetic-procedures", destination: "/minor-aesthetic-procedures-dubai", permanent: true },
    ];
  },
};

export default nextConfig;
