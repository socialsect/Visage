import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Laboratory Dubai | In-House Diagnostics | Visage",
  description:
    "In-house medical laboratory in Dubai offering 250+ diagnostic tests across 8 departments, with results in 1–5 days. Book a blood test at Visage Polyclinic.",
};

const departments = [
  {
    title: "Biochemistry",
    desc: "Detailed blood chemistry analysis covering liver function, kidney function, lipid levels, glucose, electrolytes and key enzymes.",
    tests: ["Complete Blood Chemistry", "Liver Function Tests", "Kidney Function Tests", "Lipid Profile", "Blood Glucose", "Electrolyte Panel", "Calcium", "Albumin", "Bilirubin", "Amylase"],
  },
  {
    title: "Haematology",
    desc: "A full picture of your blood health, including cell counts, clotting function and blood typing.",
    tests: ["Complete Blood Count (CBC)", "Blood Film / Peripheral Smear", "Blood Group & Rh", "Coagulation Profile", "APTT", "ESR", "Haemoglobin"],
  },
  {
    title: "Microbiology",
    desc: "Identifies bacterial and fungal infections through culture and sensitivity testing, helping guide the right treatment.",
    tests: ["Urine Culture & Sensitivity", "Blood Culture", "Genital Culture", "Stool Culture", "Wound Swab Culture", "Sputum Culture", "STI Screening"],
  },
  {
    title: "Immunology & Serology",
    desc: "Assesses immune system function and screens for autoimmune conditions, allergies and infectious disease markers.",
    tests: ["ANA (Anti-Nuclear Antibodies)", "Thyroid Antibodies", "Allergy Panels", "CMV / EBV Screening", "Hepatitis Panel", "HIV Screening", "Rubella Immunity"],
  },
  {
    title: "Hormones",
    desc: "Evaluates hormonal balance across thyroid, reproductive, adrenal and metabolic function.",
    tests: ["Thyroid Profile (TSH, T3, T4)", "Testosterone", "Cortisol", "AMH (Anti-Müllerian Hormone)", "Insulin", "Vitamin D", "Ferritin"],
  },
  {
    title: "Tumour Markers",
    desc: "Blood-based markers used for cancer screening and ongoing monitoring, supporting earlier detection and follow-up care.",
    tests: ["CEA", "CA-125", "CA 19-9", "CA 15-3", "Alpha Fetoprotein (AFP)", "PSA (Prostate)"],
  },
  {
    title: "Molecular / PCR",
    desc: "Advanced PCR-based testing for infectious disease detection and genetic analysis, offering higher sensitivity than standard testing.",
    tests: ["COVID-19 PCR", "Chlamydia Trachomatis PCR", "HPV Testing", "Hepatitis B/C PCR", "STI PCR Panel"],
  },
  {
    title: "Histopathology",
    desc: "Microscopic tissue analysis for biopsy samples, supporting accurate diagnosis of abnormal growths and tissue conditions.",
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
              Laboratory &amp; <span className="font-display font-normal italic text-brand-500">Diagnostic</span> Services in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              A proper diagnosis starts with proper testing. Our in-house laboratory covers everything from routine blood work to advanced molecular diagnostics, so your results come from the same clinic that's treating you — not a third-party lab you never see.
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
            { label: "Typical Turnaround", value: "1–5 Days" },
            { label: "Processed In-House", value: "All Tests" },
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
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">Our Departments</h2>
          <p className="mt-4 mb-10 text-[15px] text-warm-600 max-w-2xl">
            Eight specialised departments covering the full range of diagnostic needs, from a routine check-up to targeted disease screening.
          </p>
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
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Need a Specific Test?</h2>
            <p className="mt-4 text-[15px] text-warm-600">
              Get in touch to ask about a specific test or book a blood draw — our team can advise on exactly which tests are relevant to your situation.
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
