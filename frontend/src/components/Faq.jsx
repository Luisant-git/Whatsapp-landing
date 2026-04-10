import React, { useState } from "react";

import faq1 from "../assets/faq1.png";
import faq2 from "../assets/faq2.png";

const faqs = [
  {
    q: "What Are the Main Use Cases and Benefits of Using This AI Chatbot?",
    a: "Our chatbot helps with support, lead qualification, onboarding, and FAQ automation—reducing response times and improving customer satisfaction.",
  },
  {
    q: "Is the AI Chatbot Capable of Providing Reliable 24/7 Automated Support?",
    a: "Yes. The chatbot is always on—functioning 24 hours a day, 7 days a week, including holidays. Your customers never have to wait for answers.",
  },
  {
    q: "How Much Can I Customize the Chatbot's Responses, Design, and Behavior?",
    a: "You can fully customize tone of voice, branding, flows, and fallback behavior so the chatbot feels native to your product.",
  },
  {
    q: "Does the Chatbot Support Multiple Languages and Global Audiences?",
    a: "Yes, it supports multiple languages so you can serve global customers with localized responses.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      
      {/* Left image */}
      <img
        src={faq1}
        alt=""
        className="
        hidden md:block pointer-events-none select-none
        absolute left-4 lg:left-10 top-1/2 -translate-y-1/2
        w-28 sm:w-32 lg:w-40 xl:w-48
        "
      />

      {/* Right image */}
      <img
        src={faq2}
        alt=""
        className="
        hidden md:block pointer-events-none select-none
        absolute right-4 lg:right-10 bottom-2 sm:bottom-4 lg:bottom-8
        w-24 sm:w-32 lg:w-40 xl:w-48
        "
      />

      <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue-600 mb-2">
            FAQ'S
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-snug">
            Answers to Your Most
            <br className="hidden sm:block" />
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={`
                rounded-3xl border transition-all duration-300
                ${
                  isOpen
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-slate-100 bg-white hover:bg-slate-50"
                }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-3 text-left"
                >
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      isOpen ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`text-xl sm:text-2xl font-light ${
                      isOpen ? "text-blue-500" : "text-blue-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-[11px] sm:text-xs text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}