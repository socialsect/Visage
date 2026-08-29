"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-warm-300 py-12 text-center">
        <h3 className="font-serif text-xl font-semibold text-ink">Thank you</h3>
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="block text-[12px] font-medium text-warm-700">
            Preferred Service
          </label>
          <select
            id="service"
            name="service"
            className="mt-1.5 block w-full border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink transition-colors focus:border-brand-400 focus:outline-none"
          >
            <option value="">Select a service</option>
            <optgroup label="Aesthetic Medicine">
              <option value="botox">Botox</option>
              <option value="fillers">Fillers</option>
              <option value="skin-treatments">Skin Treatments</option>
              <option value="threads">Threads</option>
              <option value="fat-melting">Fat Melting</option>
              <option value="prp-prf">PRP / PRF</option>
              <option value="mesotherapy">Mesotherapy</option>
              <option value="other-aesthetic">Other Aesthetic Treatment</option>
            </optgroup>
            <optgroup label="Medical Care">
              <option value="general-practice">General Practice</option>
              <option value="male-health">Male Health</option>
              <option value="chronic-disease">Chronic Disease Management</option>
              <option value="minor-surgery">Minor Surgery</option>
              <option value="other-medical">Other Medical Service</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-[12px] font-medium text-warm-700">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1.5 block w-full border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink transition-colors focus:border-brand-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="time" className="block text-[12px] font-medium text-warm-700">
          Preferred Time
        </label>
        <select
          id="time"
          name="time"
          className="mt-1.5 block w-full border border-warm-300 bg-transparent px-4 py-2.5 text-[13px] text-ink transition-colors focus:border-brand-400 focus:outline-none"
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (8:00 - 12:00)</option>
          <option value="afternoon">Afternoon (12:00 - 17:00)</option>
          <option value="evening">Evening (17:00 - 23:00)</option>
        </select>
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

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
      >
        Request Appointment
      </button>
      <p className="text-center text-[11px] text-warm-400">
        Our team will confirm your appointment shortly.
      </p>
    </form>
  );
}
