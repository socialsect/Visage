import Link from "next/link";
import Image from "next/image";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { MapEmbed } from "@/components/MapEmbed";
import { AskQuestionSection } from "@/components/AskQuestionSection";
import { MedicalServicesList } from "@/components/MedicalServicesList";
import InteractiveProcess from "@/components/InteractiveProcess";

const featuredTreatments = [
  { title: "Botox", description: "Non-surgical wrinkle reduction and muscle relaxation. Treatments tailored to individual anatomy and goals.", href: "/botox-dubai", linkText: "Botox Dubai", icon: "/moisturizing.svg" },
  { title: "Dermal Fillers", description: "Restore volume, contour the face, and address static wrinkles with precision injectable treatments.", href: "/dermal-fillers-dubai", linkText: "dermal fillers Dubai", icon: "/clear.svg" },
  { title: "Skin Rejuvenation", description: "Chemical peels, microneedling, PRP and mesotherapy to improve skin quality and resilience.", href: "/skin-rejuvenation-dubai", linkText: "skin rejuvenation Dubai", icon: "/face-care.svg" },
  { title: "Threads", description: "Non-surgical lift and skin tightening using dissolvable PDO thread technology.", href: "/thread-lift-dubai", linkText: "PDO thread lift Dubai", icon: "/mesotherapy.svg" },
  { title: "Fat Melting", description: "Targeted injectable treatment for localised fat reduction without surgery.", href: "/fat-melting-treatment-dubai", linkText: "fat melting treatment Dubai", icon: "/slim-body.svg" },
  { title: "Regenerative Medicine", description: "PRP, PRF, and biostimulators supporting the skin's natural renewal process.", href: "/prp-treatment-dubai", linkText: "PRP treatment Dubai", icon: "/medication-bottle.svg" },
];

const howItWorksSteps = [
  { title: "Book a Consultation", desc: "We start with a conversation, not a checklist — your concerns, goals, and medical history, all discussed in detail." },
  { title: "Receive Your Treatment Plan", desc: "Dr. Musa reviews your case and recommends the right approach for your specific situation, no guesswork involved." },
  { title: "Start Treatment", desc: "Your care begins at our Business Bay clinic, with ongoing support at every stage of the process." }
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-surface">
        {/* Logo watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt=""
            width={600}
            height={600}
            className="opacity-[0.08]"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex min-h-[75dvh] flex-col items-center justify-center py-20 text-center lg:min-h-[80dvh]">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-400">
              Aesthetic Clinic in Dubai's Business Bay
            </p>
            <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Modern Medicine,
              <br />
              <span className="font-display font-normal italic text-brand-500 pb-1 inline-block">Thoughtfully</span>
              <br />
              Delivered
            </h1>
            <p className="mt-8 max-w-lg text-[15px] leading-[1.8] text-warm-500">
              Visage Polyclinic is an aesthetic clinic in Dubai offering medical and aesthetic treatments under one roof.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
              >
                Book an Appointment
              </Link>
              <Link
                href="/aesthetic-treatments"
                className="inline-flex items-center rounded-full border border-warm-300 px-8 py-3.5 text-[13px] font-medium text-warm-600 transition-all duration-200 hover:border-brand-300 hover:text-ink"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              A Clinic Built Around<br />the <span className="font-display font-normal italic text-brand-500">Patient</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Established in Business Bay, Visage Polyclinic brings together aesthetic medicine and general medical services in the heart of Dubai. Our approach is simple: professional, evidence-based care, delivered with clarity and respect for every individual.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              As a medical aesthetic clinic, we don't push treatments — we explain them. You'll always know what a procedure involves, what results to expect, and whether it's actually right for you before you book it in.
            </p>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Aesthetic Treatments ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Aesthetic Medicine
            </p>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Treatments That Reflect<br className="hidden sm:block" /> Your Individual Needs
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-warm-600">
              From Botox to regenerative medicine, every treatment at our Dubai aesthetic clinic is tailored to your anatomy, skin type and goals — never a one-size-fits-all protocol.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-warm-200 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#b79bb9] to-[#997c9b] transition-all duration-500 group-hover:w-full" />
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 p-3 transition-colors group-hover:bg-brand-100">
                    <Image src={t.icon} alt={t.title} width={32} height={32} className="h-full w-full object-contain opacity-80 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-brand-600">
                    {t.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-warm-600">
                    {t.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-warm-100 pt-5">
                  <span className="inline-flex items-center text-[13px] font-medium text-brand-500 transition-colors group-hover:text-brand-700">
                    Learn more
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-500 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#b79bb9] group-hover:text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Botox Feature ─── */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Botox
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Addressing Dynamic Wrinkles With Precision
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-warm-600">
                Botox works by relaxing targeted facial muscles to reduce the appearance of dynamic wrinkles. Treatment areas include the full face, lower face, neck, underarms and trapezius muscles. Results typically last 3 to 6 months, and every treatment plan is built around your facial anatomy and expression patterns — not a fixed unit count.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Full Face", "Lower Face", "True Botox", "Underarm"].map((a) => (
                  <span key={a} className="rounded-full border border-warm-300 px-3 py-1 text-[11px] font-medium text-warm-600">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href="/botox-dubai"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                Full Botox overview
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-warm-200">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&h=625&fit=crop&crop=center"
                  alt="Aesthetic treatment at Visage Polyclinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fillers Feature ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[5px] bg-warm-200 sm:aspect-[16/10]">
                <Image
                  src="/dr-musa.jpg"
                  alt="Dr. Musa - Dermal filler treatments at Visage Polyclinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Fillers
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Restoring Volume, Refining Contours
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-warm-600">
                Dermal fillers address static wrinkles and restore lost volume. Treatments range from facial contouring and lip enhancement to skin biostimulators like Sculptra. Results vary by product and individual factors, and we'll always talk you through which filler type suits your goals before recommending one.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Lips", "Jawline", "Chin", "Skin Boosters", "Sculptra"].map((a) => (
                  <span key={a} className="rounded-full border border-warm-300 px-3 py-1 text-[11px] font-medium text-warm-600">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href="/dermal-fillers-dubai"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                Full Fillers overview
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Medical Services ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Medical Services
            </p>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Comprehensive Care, One Location
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-warm-600">
              Alongside aesthetic medicine, Visage Polyclinic is a general medical clinic in Dubai offering everyday healthcare for individuals and families.
            </p>
          </div>
          <MedicalServicesList />
        </div>
      </section>

      {/* ─── Why Visage ─── */}
      <section className="bg-ink py-24 sm:py-32 relative">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Sticky Left Column */}
              <div className="lg:w-1/3">
                 <div className="sticky top-12 lg:top-32 lg:pr-10 lg:pb-[280px]">
                   <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                     Your Voice
                   </p>
                   <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white mb-6">
                     Why <br className="hidden lg:block" />
                     <span className="font-display font-normal italic text-brand-200">Visage</span>
                   </h2>
                   <p className="text-warm-400 text-[15px] leading-[1.8] max-w-sm">
                     We believe in transparent, ethical care where your needs come first. No pressure, no rushed appointments—just expert guidance tailored to you.
                   </p>
                 </div>
              </div>

              {/* Scrolling Right Column (Stacked Cards) */}
              <div className="lg:w-2/3 flex flex-col gap-12 sm:gap-20 relative pb-12 lg:pb-32">
                 {[
                    { title: "Individual Assessment", body: "Your treatment plan starts with you — not a standard package. We assess your anatomy, skin, and goals before recommending anything." },
                    { title: "Professional Standards", body: "Every procedure follows evidence-based clinical protocols, carried out with the rigour you'd expect from a medical practice, not just a beauty clinic." },
                    { title: "Informed Decisions", body: "We explain the \"why\" behind every recommendation, so you're choosing your treatment with full clarity — never pressure." },
                    { title: "Under One Roof", body: "Aesthetic care and general medicine, coordinated by the same team, in the same clinic — no shuttling between providers." },
                 ].map((item, index) => (
                    <div 
                       key={item.title} 
                       className="sticky w-full transition-transform"
                       style={{ top: `calc(128px + ${index * 30}px)` }}
                    >
                       <div className="bg-brand-500 rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-white/10 min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
                          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                             <span className="text-5xl sm:text-6xl font-bold text-white leading-none">
                                0{index + 1}
                             </span>
                             <div className="mt-1 sm:mt-2">
                                <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 sm:mb-5 tracking-tight">
                                   {item.title}
                                </h3>
                                <p className="text-[1rem] sm:text-[1.125rem] leading-[1.8] text-brand-50 max-w-xl">
                                   {item.body}
                                </p>
                             </div>
                          </div>
                       </div>
                       {/* Invisible spacer ensures all cards share the exact same sticky bottom boundary so they scroll up together */}
                       <div style={{ height: `${(3 - index) * 30}px` }} />
                    </div>
                 ))}
              </div>

           </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <InteractiveProcess 
        title="How It Works" 
        subtitle="Your Path" 
        steps={howItWorksSteps} 
      />

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Doctor ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[5px] bg-warm-200">
                <Image
                  src="/dr-musa.jpg"
                  alt="Dr. Musa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Our Doctor
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Dr. Musa
              </h2>
              <p className="mt-1 text-[15px] font-medium text-brand-500">
                MBChB &middot; General Practitioner &amp; Aesthetic Medicine
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-warm-600">
                Every patient should be treated as an individual. Care should be professional and personalised — this clinic brings multiple specialities together under one roof to provide comprehensive care.
              </p>
              <Link
                href="/aesthetic-doctor-dubai"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                Full profile
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Testimonials Carousel ─── */}
      <section className="py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 relative">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Patient feedback
            </h2>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── Ask A Question ─── */}
      <AskQuestionSection />

      {/* ─── Location & Consultation ─── */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Begin your <span className="font-display font-normal italic text-brand-500">consultation</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-warm-600">
                Visit us in Business Bay or get in touch to schedule an appointment. We look forward to welcoming you.
              </p>
              <div className="mt-6 space-y-3 text-[14px] leading-relaxed text-warm-600">
                <p>Office 711, Regal Tower<br />Business Bay, Dubai<br />United Arab Emirates</p>
                <p className="text-warm-500">Open daily, 8:00 AM to 11:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-[#b79bb9] px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
                >
                  Book an Appointment
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
            <div className="lg:col-span-7">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
