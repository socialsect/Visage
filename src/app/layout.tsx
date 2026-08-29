import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://visagepolyclinic.com"),
  title: {
    default: "Visage Polyclinic | Medical & Aesthetic Clinic | Business Bay, Dubai",
    template: "%s | Visage Polyclinic",
  },
  description:
    "Visage Polyclinic offers professional medical and aesthetic treatments in Business Bay, Dubai. Botox, fillers, skin treatments, general practice and minor surgery under one roof.",
  keywords: [
    "Visage Polyclinic Dubai",
    "aesthetic clinic Dubai",
    "botox Dubai",
    "fillers Dubai",
    "medical clinic Business Bay",
    "general practice Business Bay",
    "aesthetic medicine Business Bay",
    "skin treatments Dubai",
  ],
  openGraph: {
    title: "Visage Polyclinic | Medical & Aesthetic Clinic",
    description:
      "Professional medical and aesthetic treatments in Business Bay, Dubai. Personalised care under one roof.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
