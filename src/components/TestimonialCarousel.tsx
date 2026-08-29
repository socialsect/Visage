"use client";

import { useRef, useEffect } from "react";

const testimonials = [
  {
    text: "Dr. Musa is absolutely wonderful! He took the time to understand exactly what I wanted and delivered the most natural-looking results. I couldn't be happier with my Botox treatment.",
    name: "Sarah T.",
    service: "Botox Treatment"
  },
  {
    text: "The clinic is beautiful and the staff is so welcoming. I had lip fillers done, and I was so nervous, but Dr. Musa made me feel completely at ease. Highly recommend!",
    name: "Aisha M.",
    service: "Dermal Fillers"
  },
  {
    text: "I’ve been to several clinics in Dubai, but Visage Polyclinic is by far the best. The level of professionalism and care here is unmatched. My skin has never looked better.",
    name: "Elena R.",
    service: "Skin Boosters"
  },
  {
    text: "I had facial contouring done recently. The results are subtle but incredible. Nobody can tell I had work done, they just tell me I look refreshed. Thank you, Dr. Musa!",
    name: "Jessica K.",
    service: "Facial Contouring"
  },
  {
    text: "Clean, modern clinic with a very transparent approach. They never try to upsell you on treatments you don't need. Honest advice and fantastic results.",
    name: "Fatima H.",
    service: "Consultation"
  },
  {
    text: "A truly premium experience from the moment you walk in. The staff is lovely, and the attention to detail during the procedure was amazing. Will definitely be coming back.",
    name: "Noor A.",
    service: "Aesthetic Medicine"
  }
];

export function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const itemElement = scrollRef.current.firstElementChild?.nextElementSibling as HTMLElement;
      let scrollAmount = 300; 
      if (itemElement) {
        scrollAmount = itemElement.offsetWidth + 24; 
      }
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Handle looping when going right
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-scroll on desktop (tailwind lg breakpoint is usually 1024px)
      if (window.innerWidth >= 1024 && scrollRef.current) {
        scroll("right");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute right-0 top-[-70px] hidden sm:flex gap-3">
        <button 
          onClick={() => scroll("left")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-300 bg-surface text-ink transition-colors hover:bg-warm-200 active:scale-95"
          aria-label="Previous testimonials"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => scroll("right")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-300 bg-surface text-ink transition-colors hover:bg-warm-200 active:scale-95"
          aria-label="Next testimonials"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `\n          .flex::-webkit-scrollbar { display: none; }\n        `}} />
        {testimonials.map((testimonial, i) => (
          <div 
            key={i} 
            className="w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%_-_16px)] flex-none snap-start border border-warm-300 bg-surface p-8 rounded-2xl flex flex-col justify-between transition-colors hover:border-[#b79bb9]"
          >
            <div>
              <div className="flex text-[#b79bb9] mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-warm-700 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-ink">{testimonial.name}</p>
              <p className="text-[11px] uppercase tracking-[0.1em] text-brand-500 mt-1">{testimonial.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
