// src/components/Breadcrump.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import robot from "../assets/breadcrumpimg.png";

const Breadcrump = ({
  name = "About Us",
  desc = "Create Realistic AI Chatbots in Minutes—Perfect for Websites, Apps, and Customer Support.",
}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Base soft linear gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#eef6ff] via-white to-[#f6fbff]" />

      {/* Strong, in-bounds bottom-left wash (won’t get cut off) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_520px_at_0%_100%,rgba(59,130,246,0.33),transparent_60%)] md:bg-[radial-gradient(1400px_640px_at_0%_100%,rgba(59,130,246,0.36),transparent_62%)] bg-no-repeat" />

      {/* Soft highlight near top-right (behind robot) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(420px_420px_at_92%_8%,rgba(147,197,253,0.35),transparent_60%)] bg-no-repeat" />

      {/* Gentle orb top-left for extra glow */}
      <div className="pointer-events-none absolute -left-16 top-4 -z-10 h-72 w-72 rounded-full bg-blue-200/55 blur-[90px]" />

      {/* Fixed hero height like your reference */}
      <div className="mx-auto grid h-[340px] md:h-[400px] lg:h-[420px] max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Left: title, description, breadcrumb */}
        <div data-aos="fade-right">
          <h1 className="text-[44px] leading-tight font-semibold tracking-tight md:text-[68px] md:leading-[1.05] text-slate-900">
            {name}
          </h1>

          {desc && (
            <p className="mt-4 max-w-xl text-slate-600 md:text-[15px]">
              {desc}
            </p>
          )}

          {/* Breadcrumb pill */}
          <nav aria-label="Breadcrumb" className="mt-6" data-aos="fade-up" data-aos-delay="120">
            <ol className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-sm text-slate-600 shadow-md ring-1 ring-black/5 backdrop-blur">
              <li className="flex items-center gap-2">
                <Link to="/" className="hover:text-slate-900">Home</Link>
                <span className="text-slate-400">/</span>
                <span aria-current="page" className="font-medium text-blue-600">{name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Right: robot image */}
        <div className="relative hidden md:block" data-aos="fade-left" data-aos-delay="80">
          <img
            src={robot}
            alt="Robot illustration"
            className="relative z-10 mx-auto w-full max-w-[520px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Breadcrump;