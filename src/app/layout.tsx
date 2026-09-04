import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://visagepolyclinicdubai.com"),
  title: {
    default: "Aesthetic Clinic Dubai | Visage Polyclinic, Business Bay",
    template: "%s | Visage Polyclinic",
  },
  description:
    "Visage Polyclinic is an aesthetic clinic in Dubai's Business Bay offering Botox, dermal fillers, skin rejuvenation and general medical care. Book today.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  keywords: [
    "Visage Polyclinic Dubai",
    "aesthetic clinic Dubai",
    "botox Dubai",
    "fillers Dubai",
    "medical clinic Business Bay",
    "general practice Business Bay",
    "aesthetic medicine Business Bay",
    "skin treatments Dubai",
    "dermal fillers Dubai",
    "PRP treatment Dubai",
    "microneedling Dubai",
    "minor surgery Dubai",
    "Dr Musa Dubai",
    "polyclinic Business Bay",
  ],
  authors: [{ name: "Visage Polyclinic LLC" }],
  creator: "Visage Polyclinic LLC",
  publisher: "Visage Polyclinic LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Aesthetic Clinic Dubai | Visage Polyclinic, Business Bay",
    description:
      "Visage Polyclinic is an aesthetic clinic in Dubai's Business Bay offering Botox, dermal fillers, skin rejuvenation and general medical care. Book today.",
    url: "https://visagepolyclinicdubai.com",
    siteName: "Visage Polyclinic",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "https://visagepolyclinicdubai.com/api/og?title=Visage%20Polyclinic&subtitle=Medical%20%26%20Aesthetic%20Clinic%20%7C%20Business%20Bay%2C%20Dubai",
        width: 1200,
        height: 630,
        alt: "Visage Polyclinic - Medical & Aesthetic Clinic in Business Bay, Dubai",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Clinic Dubai | Visage Polyclinic, Business Bay",
    description:
      "Visage Polyclinic is an aesthetic clinic in Dubai's Business Bay offering Botox, dermal fillers, skin rejuvenation and general medical care. Book today.",
    images: [
      {
        url: "https://visagepolyclinicdubai.com/api/og?title=Visage%20Polyclinic&subtitle=Medical%20%26%20Aesthetic%20Clinic%20%7C%20Business%20Bay%2C%20Dubai",
        width: 1200,
        height: 630,
        alt: "Visage Polyclinic - Medical & Aesthetic Clinic in Business Bay, Dubai",
      },
    ],
  },
  alternates: {
    canonical: "https://visagepolyclinicdubai.com",
  },
  verification: {
    google: "your-google-site-verification", // Replace with actual verification code
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Visage Polyclinic LLC",
  description:
    "Multi-speciality medical and aesthetic clinic offering Botox, fillers, skin treatments, general practice, and minor surgery in Business Bay, Dubai.",
  url: "https://visagepolyclinicdubai.com",
  telephone: "+97145758729",
  email: "visagepolyclinicllc@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 711, Regal Tower, Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1857,
    longitude: 55.2646,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
  ],
  priceRange: "$$",
  medicalSpecialty: [
    "Aesthetic Medicine",
    "General Practice",
    "Dermatology",
    "Minor Surgery",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Botox",
      procedureType: "http://schema.org/SurgicalProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "Dermal Fillers",
      procedureType: "http://schema.org/SurgicalProcedure",
    },
    {
      "@type": "MedicalTherapy",
      name: "PRP Treatment",
    },
    {
      "@type": "MedicalTherapy",
      name: "Chemical Peel",
    },
  ],
  physician: {
    "@type": "Physician",
    name: "Dr. Musa",
    jobTitle: "General Practitioner & Aesthetic Medicine",
    medicalSpecialty: ["General Practice", "Aesthetic Medicine"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C386MN03NN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C386MN03NN');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-surface text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
