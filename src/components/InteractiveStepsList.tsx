import React from "react";

interface Step {
  num: string;
  title: string;
  body: string;
}

interface InteractiveStepsListProps {
  title: string;
  steps: Step[];
  className?: string;
}

export default function InteractiveStepsList({ 
  title, 
  steps, 
  className = "bg-surface-alt py-20 sm:py-28" 
}: InteractiveStepsListProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
            {title}
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="group relative border-t border-warm-300 pt-6 cursor-default">
              
              {/* Number */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-brand-500 group-hover:shadow-md">
                <span className="text-2xl font-semibold text-brand-400 transition-colors duration-300 group-hover:text-white">
                  {s.num}
                </span>
              </div>
              
              {/* Card content */}
              <div className="mt-2 p-6 rounded-2xl transition-all duration-300 border border-transparent -mx-6 group-hover:bg-brand-500 group-hover:shadow-xl group-hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600 transition-colors duration-300 group-hover:text-white/90">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
