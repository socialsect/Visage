"use client";

import { useState } from "react";

export function AskQuestionSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-8 bg-warm-300"></span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Ask a Question
              </p>
            </div>
            
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              Not sure where<br />to start? Just ask.
            </h2>
            
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-warm-600">
              Tell us a little about what's going on, and we'll point you to the right kind of support. No pressure, no commitment.
            </p>

            <div className="mt-12 space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 text-brand-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink">Completely confidential</h4>
                  <p className="mt-1 text-[13px] leading-relaxed text-warm-600">Your message goes directly to Dr. Musa's team — never shared with anyone.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 text-brand-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink">Reply within one working day</h4>
                  <p className="mt-1 text-[13px] leading-relaxed text-warm-600">A real person reads every message and responds personally.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 text-brand-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink">No obligation</h4>
                  <p className="mt-1 text-[13px] leading-relaxed text-warm-600">Asking a question doesn't commit you to anything. Start whenever you're ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7 lg:pl-10">
            <div className="rounded-[1.25rem] border border-warm-200 bg-white p-8 shadow-sm sm:p-10">
              {submitted ? (
                <div className="py-16 text-center">
                  <h3 className="font-serif text-2xl font-semibold text-ink">Thank you</h3>
                  <p className="mt-3 text-[14px] text-warm-600">
                    We have received your question and will get back to you within one working day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[13px] font-medium text-brand-500 hover:text-brand-700"
                  >
                    Ask another question
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-[12px] font-medium text-warm-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="block w-full rounded-lg border border-warm-200 bg-transparent px-4 py-3 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[12px] font-medium text-warm-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="block w-full rounded-lg border border-warm-200 bg-transparent px-4 py-3 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="askEmail" className="block text-[12px] font-medium text-warm-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="askEmail"
                        required
                        className="block w-full rounded-lg border border-warm-200 bg-transparent px-4 py-3 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="askPhone" className="block text-[12px] font-medium text-warm-700 mb-2">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="askPhone"
                        className="block w-full rounded-lg border border-warm-200 bg-transparent px-4 py-3 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
                        placeholder="+971 50 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="question" className="block text-[12px] font-medium text-warm-700 mb-2">
                      Your Question
                    </label>
                    <textarea
                      id="question"
                      required
                      rows={5}
                      className="block w-full resize-none rounded-lg border border-warm-200 bg-transparent px-4 py-3 text-[13px] text-ink placeholder:text-warm-400 transition-colors focus:border-brand-400 focus:outline-none"
                      placeholder="What would you like to know?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#b79bb9] px-6 py-4 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
                  >
                    Send My Question
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
