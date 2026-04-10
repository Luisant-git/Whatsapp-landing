import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";

export default function Aboutus() {
  useEffect(() => {
    AOS.init({
      once: false,     // <-- repeat on every scroll (not only once)
      mirror: true,    // <-- animate again when scrolling back
      offset: 90,
      easing: "ease-out-cubic",
      duration: 850,
    });

    // helpful when images load after init
    setTimeout(() => AOS.refresh(), 0);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT images */}
          <div className="flex items-start justify-center gap-7 lg:justify-start">
            {/* Image 1 (UP) */}
            <div className="relative lg:-top-6">
              <figure
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-once="false"
                className="w-[44vw] max-w-[280px] overflow-hidden rounded-[28px]
                           shadow-[0_22px_50px_rgba(15,23,42,0.14)]
                           ring-1 ring-black/5"
              >
                <div className="aspect-[3/4]">
                  <img className="h-full w-full object-cover" src={img1} alt="" />
                </div>
              </figure>
            </div>

            {/* Image 2 (DOWN) */}
            <div className="relative lg:top-6">
              <figure
                data-aos="fade-up"
                data-aos-delay="120"
                data-aos-duration="900"
                data-aos-once="false"
                className="w-[44vw] max-w-[280px] overflow-hidden rounded-[26px]
                           shadow-[0_22px_50px_rgba(15,23,42,0.14)]
                           ring-1 ring-black/5"
              >
                <div className="aspect-[3/4]">
                  <img className="h-full w-full object-cover" src={img2} alt="" />
                </div>
              </figure>
            </div>
          </div>

          {/* RIGHT text */}
          <div className="relative z-10">
            <p
              data-aos="fade-left"
              data-aos-delay="40"
              data-aos-once="false"
              className="mb-2 text-[13px] font-semibold text-[#1f6bff]"
            >
              About Us
            </p>

            <h2
              data-aos="fade-left"
              data-aos-delay="90"
              data-aos-once="false"
              className="mb-5 text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-slate-900 sm:text-[40px] lg:text-[48px]"
            >
              Real Conversations <br className="hidden sm:block" />
              with Human-Like AI
            </h2>

            <p
              data-aos="fade-left"
              data-aos-delay="130"
              data-aos-once="false"
              className="mb-4 max-w-[560px] text-[14px] leading-[1.85] text-slate-500"
            >
              We’re on a mission to revolutionize how businesses communicate.
              Our AI chatbots are designed to be fast, intuitive, and incredibly
              lifelike—empowering teams to provide 24/7 support and scale effortlessly.
            </p>

            <p
              data-aos="fade-left"
              data-aos-delay="170"
              data-aos-once="false"
              className="mb-5 max-w-[560px] text-[14px] leading-[1.85] text-slate-500"
            >
              Whether you’re a startup or a global brand, we make AI accessible,
              practical, and impactful.
            </p>

            <ul className="mb-7 grid gap-3">
              <li
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-once="false"
                className="flex items-start gap-2.5 text-[13px] leading-[1.65] text-slate-700"
              >
                <CheckIcon />
                Launch your AI chatbot in minutes—no coding or technical expertise required.
              </li>

              <li
                data-aos="fade-up"
                data-aos-delay="220"
                data-aos-once="false"
                className="flex items-start gap-2.5 text-[13px] leading-[1.65] text-slate-700"
              >
                <CheckIcon />
                Fully customizable to match your brand voice, workflows, and customer needs.
              </li>
            </ul>

            <a
              data-aos="zoom-in"
              data-aos-delay="260"
              data-aos-once="false"
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#1f6bff]
                         px-7 text-sm font-semibold text-white
                         shadow-[0_12px_26px_rgba(31,107,255,0.25)]
                         transition hover:-translate-y-[1px]
                         hover:shadow-[0_16px_34px_rgba(31,107,255,0.30)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-[3px] h-[18px] w-[18px] flex-none text-[#1f6bff]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}