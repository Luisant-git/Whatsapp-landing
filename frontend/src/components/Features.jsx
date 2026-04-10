import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowUpRight } from "react-icons/hi2";

import img1 from "../assets/feature1.png";
import img2 from "../assets/feature2.png";
import img3 from "../assets/feature3.png";

const cards = [
  {
    title: "Conversational AI",
    desc: "Respond intelligently with GPT-powered\nnatural language understanding.",
    img: img1,
  },
  {
    title: "Multi-Platform",
    desc: "Integrate with websites, apps, Facebook,\nWhatsApp & more.",
    img: img2,
    mid: true,
  },
  {
    title: "Real-Time Analytics",
    desc: "Monitor chatbot performance and\nuser behavior in real time.",
    img: img3,
  },
];

function ArrowTile() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-slate-200/60 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
      <HiArrowUpRight className="text-[17px] text-slate-700" />
    </div>
  );
}

export default function Features() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 80,
      anchorPlacement: "top-bottom",
    });

    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <section className="bg-white font-poppins">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-[12px] font-medium text-blue-600">
            Amazing Features
          </p>

          <h2 className="mt-3 font-poppins text-[26px] font-medium leading-[1.18] tracking-[-0.015em] text-slate-900 sm:text-[32px] md:text-[44px]">
  AI That Understands, Learns <br className="hidden md:block" /> &amp; Engages
</h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className={[
                "relative overflow-hidden rounded-[22px]",
                "border border-transparent",
                "shadow-[0_16px_45px_rgba(15,23,42,0.07)]",
                c.mid
                  ? "bg-[radial-gradient(820px_440px_at_50%_0%,rgba(59,130,246,0.08),#F3FBFF_58%)]"
                  : "bg-[#F3F7FF]",
              ].join(" ")}
            >
              {/* right blue glow */}
              <span className="pointer-events-none absolute -right-8 top-20 h-20 w-20 rounded-full bg-blue-600/18" />
              <span className="pointer-events-none absolute -right-12 top-10 h-28 w-28 rounded-full bg-blue-600/10 blur-xl" />

              {/* reduced height */}
              <div className="flex h-[250px] flex-col p-5 md:h-[265px]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0B1220]">
                      {c.title}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-[12px] leading-5 text-slate-500">
                      {c.desc}
                    </p>
                  </div>
                  <ArrowTile />
                </div>

                {/* smaller image */}
                <div className="mt-auto flex justify-center pt-3">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-[115px] w-full max-w-[280px] object-contain"
                    onLoad={() => AOS.refresh()}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}