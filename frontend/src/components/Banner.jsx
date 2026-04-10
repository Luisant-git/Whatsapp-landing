// Banner.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImg from "../assets/bannerrobot.png";

const Badge = ({ children, delay = 0 }) => (
  <span
    data-aos="fade-up"
    data-aos-delay={delay}
    data-aos-duration="700"
    className="inline-flex items-center gap-2 text-[13px] font-normal text-slate-600"
  >
    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.10)]" />
    {children}
  </span>
);

export default function Banner() {
  useEffect(() => {
    AOS.init({
      once: false,            // run every time it enters viewport
      mirror: true,           // also when scrolling back up
      duration: 900,
      easing: "ease-out-cubic",
      offset: 120,
    });

    // refresh on resize only (optional, better perf)
    const handleResize = () => AOS.refreshHard();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className='relative overflow-hidden bg-[#f6fbff] font-["Poppins"]'
      data-aos="fade-up"
    >
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200 via-blue-100 to-indigo-200 blur-3xl opacity-80" />
        <div className="absolute left-[-140px] top-24 h-[420px] w-[420px] rounded-full bg-sky-100 blur-3xl opacity-70" />
        <div className="absolute right-[-160px] bottom-[-140px] h-[520px] w-[520px] rounded-full bg-indigo-100 blur-3xl opacity-70" />
        <div className="absolute left-10 top-16 h-[520px] w-[520px] rounded-full bg-white/45 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* RIGHT on desktop, FIRST on mobile (image first) */}
          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="order-1 flex items-center justify-center lg:order-2 lg:justify-end"
          >
            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-md select-none object-contain sm:max-w-lg"
              draggable="false"
              onLoad={() => AOS.refresh()}
            />
          </div>

          {/* LEFT on desktop, SECOND on mobile (text second) */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Badge delay={0}>Free 14-day trial</Badge>
              <Badge delay={120}>No credit card required</Badge>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="220"
              className="mt-4 text-balance text-3xl font-medium leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Boost Conversations <br />
              with Our Intelligent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent font-semibold">
                Chatbot
              </span>{" "}
              Platform
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="320"
              className="mt-5 max-w-xl text-pretty text-base font-normal leading-relaxed text-slate-700 sm:text-lg"
            >
              Build human-like AI chatbots for websites, apps, and customer
              service in minutes.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="420"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_55px_rgba(37,99,235,.22)] transition hover:bg-blue-700"
              >
                Get Started
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200/70 backdrop-blur transition hover:bg-white"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}