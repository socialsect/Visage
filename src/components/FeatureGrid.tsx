import React from "react";

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface FeatureGridProps {
  title: string;
  description?: string;
  items: FeatureItem[];
}

export default function FeatureGrid({ title, description, items }: FeatureGridProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              {description}
            </p>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-surface-alt border border-warm-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-warm-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
