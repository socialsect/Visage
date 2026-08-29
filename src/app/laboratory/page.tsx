import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laboratory & Diagnostic Services",
  description:
    "Comprehensive laboratory and diagnostic services at Visage Polyclinic, Business Bay, Dubai. Blood tests, pathology, microbiology, hormonal panels, and more.",
};

const departments = [
  {
    title: "Biochemistry",
    desc: "Comprehensive blood chemistry analysis including liver function, kidney function, lipids, glucose, electrolytes, and enzymes.",
    tests: ["Complete Blood Chemistry", "Liver Function Tests", "Kidney Function Tests", "Lipid Profile", "Blood Glucose", "Electrolyte Panel", "Calcium", "Albumin", "Bilirubin", "Amylase"],
  },
  {
    title: "Haematology",
    desc: "Complete blood count, blood film analysis, coagulation studies, and blood group testing.",
    tests: ["Complete Blood Count (CBC)", "Blood Film / Peripheral Smear", "Blood Group & Rh", "Coagulation Profile", "APTT", "ESR", "Haemoglobin"],
  },
  {
    title: "Microbiology",
    desc: "Culture and sensitivity testing, infection screening, and identification of bacterial and fungal pathogens.",
    tests: ["Urine Culture & Sensitivity", "Blood Culture", "Genital Culture", "Stool Culture", "Wound Swab Culture", "Sputum Culture", "STI Screening"],
  },
  {
    title: "Immunology & Serology",
    desc: "Autoimmune markers, allergy panels, infectious disease screening, and immune system assessment.",
    tests: ["ANA (Anti-Nuclear Antibodies)", "Thyroid Antibodies", "Allergy Panels", "CMV / EBV Screening", "Hepatitis Panel", "HIV Screening", "Rubella Immunity"],
  },
  {
    title: "Hormones",
    desc: "Hormonal assessment including thyroid, reproductive, adrenal, and metabolic hormones.",
    tests: ["Thyroid Profile (TSH, T3, T4)", "Testosterone", "Cortisol", "AMH (Anti-Mullerian Hormone)", "Insulin", "Vitamin D", "Ferritin"],
  },
  {
    title: "Tumour Markers",
    desc: "Cancer screening and monitoring markers for early detection and follow-up.",
    tests: ["CEA", "CA-125", "CA 19-9", "CA 15-3", "Alpha Fetoprotein (AFP)", "PSA (Prostate)"],
  },
  {
    title: "Molecular / PCR",
    desc: "Advanced molecular diagnostics including PCR testing for infectious diseases and genetic analysis.",
    tests: ["COVID-19 PCR", "Chlamydia Trachomatis PCR", "HPV Testing", "Hepatitis B/C PCR", "STI PCR Panel"],
  },
  {
    title: "Histopathology",
    desc: "Tissue biopsy analysis and microscopic examination for diagnosis of abnormal growths and conditions.",
    tests: ["Biopsy Analysis (Small)", "Biopsy Analysis (Medium)", "Biopsy Analysis (Large)", "Cytology / Pap Smear", "Fine Needle Aspiration"],
  },
];

export default function LaboratoryPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Diagnostics</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Laboratory &amp; <span className="font-display font-normal italic text-brand-500">Diagnostic</span> Services
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              In-house laboratory services providing comprehensive diagnostic testing. From routine blood work to advanced molecular diagnostics, we offer a wide range of tests to support your health assessment and ongoing care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book a Test</Link>
              <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">Ask a Question</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-warm-300 py-10 sm:py-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-warm-300 sm:grid-cols-4 px-5 sm:px-8 lg:px-12">
          {[
            { label: "Tests Available", value: "250+" },
            { label: "Departments", value: "8" },
            { label: "Turnaround", value: "1–5 Days" },
            { label: "In-House", value: "All Tests" },
          ].map((f) => (
            <div key={f.label} className="bg-surface p-6 text-center">
              <p className="text-2xl font-semibold text-ink">{f.value}</p>
              <p className="mt-1 text-[12px] text-warm-500">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-10 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">Our Departments</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {departments.map((d) => (
              <div key={d.title} className="rounded-xl border border-warm-200 p-6 sm:p-8">
                <h3 className="text-[15px] font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.tests.map((t) => (
                    <span key={t} className="rounded-full bg-surface-alt px-3 py-1 text-[11px] font-medium text-warm-600 border border-warm-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Need a specific test?</h2>
            <p className="mt-4 text-[15px] text-warm-600">
              Contact us to enquire about specific laboratory tests or to book a blood draw. Our team can advise on the most appropriate tests for your needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Contact Us</Link>
              <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
