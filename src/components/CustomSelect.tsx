"use client";

import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  name: string;
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
};

export function CustomSelect({ name, options, placeholder = "Select an option", value, onChange, required }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === selected)?.label || "";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option: Option) {
    setSelected(option.value);
    setIsOpen(false);
    onChange?.(option.value);
  }

  return (
    <div ref={ref} className="relative">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-1.5 flex w-full items-center justify-between border bg-transparent px-4 py-2.5 text-[13px] transition-colors focus:border-brand-400 focus:outline-none ${
          selected ? "border-warm-300 text-ink" : "border-warm-300 text-warm-400"
        } ${isOpen ? "border-brand-400" : ""}`}
      >
        <span className="truncate">{selectedLabel || placeholder}</span>
        <svg
          className={`h-4 w-4 flex-shrink-0 text-warm-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto border border-warm-200 bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-brand-50 ${
                option.value === selected
                  ? "bg-brand-50 font-medium text-brand-600"
                  : "text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {required && !selected && (
        <span className="sr-only">Required</span>
      )}
    </div>
  );
}
