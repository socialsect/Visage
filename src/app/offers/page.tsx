import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Current Offers & Prices | Visage Polyclinic Dubai",
  description:
    "View current treatment prices at Visage Polyclinic Dubai — Botox from 299 AED, dermal fillers from 400 AED, PRP from 250 AED, and more competitive aesthetic treatment prices.",
};

interface OfferItem {
  treatment: string;
  price: number;
  unit?: string;
  description?: string;
}

interface OfferCategory {
  name: string;
  label: string;
  icon: ReactNode;
  items: OfferItem[];
}

const offerCategories: OfferCategory[] = [
  {
    name: "Botox",
    label: "Botox Treatments",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    items: [
      { treatment: "Botox Full Face", price: 499, description: "Comprehensive wrinkle reduction across the entire face" },
      { treatment: "Botox Masseter", price: 450, description: "Jawline slimming and teeth grinding relief" },
      { treatment: "Botox — One Area", price: 299, description: "Targeted treatment for a single problem area" },
      { treatment: "Trap Botox", price: 1099, description: "Trapezius muscle relaxation for shoulder contouring" },
      { treatment: "Baby Arm Botox", price: 999, description: "Upper arm contouring and skin smoothing" },
      { treatment: "Underarm Botox for Sweating", price: 1199, description: "Hyperhidrosis treatment to reduce excessive sweating" },
      { treatment: "Botox Nose Tip Slimming", price: 300, description: "Non-surgical nose tip refinement" },
      { treatment: "Botox Lower Face & Jawline", price: 999, description: "Lower face slimming and jawline contouring" },
      { treatment: "Necklace Botox", price: 750, description: "Neck band relaxation and horizontal line reduction" },
    ],
  },
  {
    name: "Fillers",
    label: "Dermal Fillers",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    items: [
      { treatment: "Dermal Filler — Per ml", price: 400, unit: "/ml", description: "Hyaluronic acid filler for volume and contouring" },
      { treatment: "Nose Filler", price: 600, description: "Non-surgical rhinoplasty for bridge and tip refinement" },
      { treatment: "Lip Filler", price: 650, description: "Lip enhancement for volume, shape and definition" },
      { treatment: "Chin Filler", price: 500, description: "Chin augmentation and jawline balance" },
      { treatment: "Body Filler — Per 100ml", price: 1999, unit: "/100ml", description: "Body contouring and volume restoration" },
      { treatment: "Filler Dissolver — Per ml", price: 200, unit: "/ml", description: "Hyaluronidase treatment to dissolve unwanted filler" },
    ],
  },
  {
    name: "Skin",
    label: "Skin Treatments",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    items: [
      { treatment: "Profhilo", price: 750, description: "Injectable hyaluronic acid for deep hydration and skin laxity" },
      { treatment: "Sculptra — Per 5ml", price: 750, unit: "/5ml", description: "Biostimulatory filler for collagen regeneration" },
      { treatment: "Jalupro", price: 850, description: "Amino acid skin booster for rejuvenation" },
      { treatment: "Salmon DNA Mesotherapy", price: 1099, description: "PDRN therapy for skin repair and glow" },
      { treatment: "Salmon DNA with Dermapen", price: 850, description: "Microneedling combined with salmon DNA serum" },
      { treatment: "Dermapen", price: 250, description: "Collagen induction therapy for texture and scarring" },
      { treatment: "Mesotherapy Face", price: 350, description: "Vitamin and nutrient cocktails for skin rejuvenation" },
    ],
  },
  {
    name: "PRP / PRF",
    label: "PRP & PRF Treatments",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    items: [
      { treatment: "PRP Face", price: 250, description: "Platelet-rich plasma for natural skin rejuvenation" },
      { treatment: "PRP Face with Dermapen", price: 499, description: "PRP combined with microneedling for enhanced results" },
      { treatment: "PRF Under Eye", price: 999, description: "Platelet-rich fibrin for dark circles and tear troughs" },
      { treatment: "PRP Hair", price: 300, description: "Platelet-rich plasma for hair restoration and growth" },
    ],
  },
  {
    name: "Body",
    label: "Body Treatments",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    items: [
      { treatment: "Fat Melting — Per 3ml", price: 300, unit: "/3ml", description: "Targeted injectable fat reduction for small areas" },
      { treatment: "Slim Queen Fat Melting — Per 10ml", price: 999, unit: "/10ml", description: "Extended fat dissolving for larger treatment areas" },
    ],
  },
  {
    name: "IV",
    label: "IV Drip Therapy",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    items: [
      { treatment: "IV Drip for Glowing Skin", price: 350, description: "Vitamin and antioxidant drip for radiance" },
      { treatment: "IV Iron Sucrose Drip", price: 999, description: "Iron supplementation for anaemia treatment" },
    ],
  },
  {
    name: "Procedures",
    label: "Minor Procedures",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3h3.658a1 1 0 01.707.293l2.828 2.828a1 1 0 01.293.707V21H3V3z" />
      </svg>
    ),
    items: [
      { treatment: "Mole Removal — Per 1–5", price: 300, description: "Professional mole removal in a sterile clinical setting" },
      { treatment: "Wart Removal — Per 1–3", price: 350, description: "Safe and effective wart treatment" },
    ],
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Current Prices
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Treatment <span className="font-display font-normal italic text-brand-500">Offers</span>
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Transparent pricing for all aesthetic treatments at Visage Polyclinic Dubai. Every treatment is performed by Dr. Musa with clinical-grade products and personalised care.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+97145758729"
                className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
              >
                Call Us
              </a>
              <a
                href="https://wa.me/971581867309"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Categories */}
      {offerCategories.map((category, catIndex) => (
        <section
          key={category.name}
          className={catIndex % 2 === 0 ? "pb-16 sm:pb-20" : "pb-16 sm:pb-20 bg-surface-alt"}
          id={category.name.toLowerCase()}
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                {category.icon}
              </div>
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                  {category.label}
                </h2>
              </div>
            </div>

            <div className="flex flex-col border-t border-warm-300">
              {category.items.map((item, itemIndex) => (
                <div
                  key={item.treatment}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-warm-300 py-6 px-2 transition-colors hover:bg-white/40 rounded-xl"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-warm-400 min-w-[2rem]">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[1.1rem] font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600">
                        {item.treatment}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="mt-2 ml-9 text-[13px] leading-relaxed text-warm-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5 ml-9 sm:ml-0">
                    <span className="text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-brand-600">
                      {item.price}
                    </span>
                    <span className="text-sm font-medium text-warm-500">AED{item.unit || ""}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Ready to Book Your Treatment?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            All prices are subject to consultation. Contact us to discuss which treatments are right for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
            >
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/971581867309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
