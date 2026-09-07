"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

const featuredOffers = [
  { treatment: "Botox Full Face", price: 499, category: "Botox", badge: "Popular" },
  { treatment: "Lip Filler", price: 650, category: "Fillers", badge: "Popular" },
  { treatment: "PRP Face", price: 250, category: "PRP / PRF", badge: "Best Value" },
  { treatment: "Profhilo", price: 750, category: "Skin Treatments", badge: "Trending" },
  { treatment: "Nose Filler", price: 600, category: "Fillers", badge: null },
  { treatment: "PRP Hair", price: 300, category: "PRP / PRF", badge: null },
  { treatment: "Fat Melting 3ml", price: 300, category: "Body Treatments", badge: "New" },
  { treatment: "Dermapen", price: 250, category: "Skin Treatments", badge: null },
];

export function OffersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const totalDots = Math.max(1, featuredOffers.length - visibleCount + 1);

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardEl = scrollRef.current.firstElementChild?.nextElementSibling as HTMLElement;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 24;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, totalDots - 1));
  }, [totalDots]);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const cardEl = scrollRef.current.firstElementChild?.nextElementSibling as HTMLElement;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 24;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const itemElement = scrollRef.current.firstElementChild?.nextElementSibling as HTMLElement;
      let scrollAmount = 300;
      if (itemElement) {
        scrollAmount = itemElement.offsetWidth + 24;
      }

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

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
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
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
          aria-label="Previous offers"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-warm-300 bg-surface text-ink transition-colors hover:bg-warm-200 active:scale-95"
          aria-label="Next offers"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `\n          .flex::-webkit-scrollbar { display: none; }\n        `}} />
        {featuredOffers.map((offer, i) => (
          <div
            key={i}
            className="w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%_-_16px)] flex-none snap-start group relative overflow-hidden rounded-2xl border border-warm-200 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
          >
            <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#b79bb9] to-[#997c9b] transition-all duration-500 group-hover:w-full" />
            {offer.badge && (
              <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-600 mb-4">
                {offer.badge}
              </span>
            )}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500 mb-2">
              {offer.category}
            </p>
            <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-brand-600">
              {offer.treatment}
            </h3>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-ink">
                {offer.price}
              </span>
              <span className="text-sm font-medium text-warm-500">AED</span>
            </div>
            <div className="mt-6 border-t border-warm-100 pt-5">
              <Link
                href="/contact"
                className="inline-flex items-center text-[13px] font-medium text-brand-500 transition-colors group-hover:text-brand-700"
              >
                Book now
                <svg className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to offer ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "h-2.5 w-2.5 bg-[#b79bb9]"
                : "h-2 w-2 bg-warm-300 hover:bg-warm-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
