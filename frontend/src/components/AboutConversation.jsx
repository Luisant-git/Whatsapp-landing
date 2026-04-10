// src/components/AboutConversation.jsx
// Replace the image imports with your actual asset paths.
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/chatbot-laptop.jpg";
import img2 from "../assets/chatbot-mobile.jpg";

export default function AboutConversation() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-quart", once: true, offset: 80 });
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: two tall rounded images */}
        <div className="grid grid-cols-2 gap-6" data-aos="fade-right">
          <div className="h-[360px] md:h-[420px] overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-sm bg-slate-100">
            <img src={img1} alt="AI on laptop" className="h-full w-full object-cover" />
          </div>
          <div className="h-[360px] md:h-[420px] overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-sm bg-slate-100">
            <img src={img2} alt="AI on mobile" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Right: eyebrow, headline, copy, bullets, CTA */}
        <div data-aos="fade-left">
          <div className="mb-3 text-sm font-medium text-blue-600">About Us</div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            Real Conversations
            <br className="hidden md:block" /> with Human-Like AI
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            We’re on a mission to revolutionize how businesses communicate.
            Our AI chatbots are designed to be fast, intuitive, and incredibly lifelike—empowering
            teams to provide 24/7 support and scale effortlessly.
            Whether you’re a startup or a global brand, we make AI accessible, practical, and impactful.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <CheckIcon />
              <span>Launch your AI chatbot in minutes—no coding or technical expertise required.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <span>Fully customizable to match your brand voice, workflows, and customer needs.</span>
            </li>
          </ul>

          <Link
            to="/get-started"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-blue-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}