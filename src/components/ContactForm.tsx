"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
          pageUrl: window.location.href,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-warm-300 py-12 text-center">
        <h3 className="text-xl font-semibold text-ink">Thank you</h3>
        <p className="mt-2 text-[13px] text-warm-600">
          We have received your enquiry and will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[13px] font-medium text-brand-500 hover:text-brand-700"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[12px] font-medium text-warm-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1.5 block w-full border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[12px] font-medium text-warm-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1.5 block w-full border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
            placeholder="+971 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[12px] font-medium text-warm-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1.5 block w-full border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[12px] font-medium text-warm-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 block w-full resize-none border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      {error && (
        <p className="text-[13px] text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#b79bb9] px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Request Appointment"}
      </button>
      <p className="text-center text-[11px] text-warm-400">
        Our team typically confirms appointments within one working day.
      </p>
    </form>
  );
}
