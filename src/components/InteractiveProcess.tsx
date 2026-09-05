import React from "react";

interface Step {
  title: string;
  desc: string;
}

interface InteractiveProcessProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  className?: string;
}

export default function InteractiveProcess({ title, subtitle, steps, className = "bg-surface py-20 sm:py-28" }: InteractiveProcessProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {subtitle && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-warm-300"></span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                {subtitle}
              </p>
              <span className="h-px w-8 bg-warm-300"></span>
            </div>
          )}
          <h2 className="relative inline-block text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            {title}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-24">
          {/* Desktop connecting line */}
          <div className="absolute left-[15%] top-8 hidden w-[70%] border-t border-warm-200 md:block z-0"></div>
          
          <div className="grid gap-16 md:grid-cols-3 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="group relative flex flex-col items-center text-center cursor-default">
                {/* Number Circle */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-warm-200 bg-surface shadow-sm transition-all duration-300 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:shadow-md z-10">
                  <span className="text-lg font-medium text-ink transition-colors duration-300 group-hover:text-white">
                    {index + 1}
                  </span>
                </div>
                
                {/* Card Container */}
                <div className="mt-4 p-8 rounded-2xl transition-all duration-300 border border-transparent group-hover:bg-brand-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs mx-auto text-[14px] leading-relaxed text-warm-600 transition-colors duration-300 group-hover:text-white/90">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
