"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQAccordion({ items, title }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="mb-8 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          {title}
        </h2>
      )}
      <div className="border-t border-warm-300">
        {items.map((item, index) => (
          <div key={index} className="border-b border-warm-300">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 text-[14px] font-medium text-ink">
                {item.question}
              </span>
              <svg
                className={`h-4 w-4 flex-shrink-0 text-warm-400 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-5 pr-8">
                <p className="text-[13px] leading-relaxed text-warm-600">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
