import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, Globe, BarChart3, MessagesSquare } from "lucide-react";

export default function Statics() {
  useEffect(() => {
    AOS.init({
      once: false,   // repeat on every scroll (infinite on scroll)
      mirror: true,  // re-animate when scrolling back up
      offset: 100,
      easing: "ease-out-cubic",
      duration: 850,
    });

    // ensure correct positions after render/images/fonts
    setTimeout(() => AOS.refresh(), 0);
  }, []);

  function StatCard({ Icon, value, label, aos, delay }) {
    return (
      <div
        data-aos={aos}
        data-aos-delay={delay}
        data-aos-duration="850"
        data-aos-once="false"
        className="
          relative overflow-hidden
          w-full
          rounded-xl bg-white
          px-4 py-4
          text-center
          ring-1 ring-slate-200/70
          shadow-[0_12px_28px_rgba(15,23,42,0.08)]
          min-h-[115px]
          flex flex-col items-center justify-center
          after:content-[''] after:absolute after:inset-x-0 after:bottom-0
          after:h-[2px] after:bg-blue-600
        "
      >
        <div className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
          <Icon className="h-5 w-5" />
        </div>
  
        <div className="text-[18px] font-semibold text-slate-900">{value}</div>
        <div className="mt-1 text-[10.5px] leading-4 text-slate-500">{label}</div>
      </div>
    );
  }
 

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background like screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-100" />
      {/* Soft glow / vignette */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div data-aos="fade-right">
            <p className="mb-2 text-xs font-semibold text-blue-600">Statistics</p>

            <h2 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.02em] text-slate-900 sm:text-[42px]">
              Trusted by Teams, <br />
              Built for Scale
            </h2>

            <p className="mt-4 max-w-[540px] text-sm leading-[1.9] text-slate-600">
              From growing startups to enterprise-level organizations, our AI
              chatbots are trusted to handle thousands of conversations every
              day. Designed for speed, reliability, and flexibility, our
              platform empowers teams to deliver seamless customer experiences.
            </p>

            <a
              href="#"
              data-aos="zoom-in"
              data-aos-delay="120"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white
                         shadow-[0_12px_26px_rgba(37,99,235,0.25)]
                         transition hover:-translate-y-[1px]
                         hover:shadow-[0_16px_34px_rgba(37,99,235,0.30)]"
            >
              Get Started
            </a>
          </div>

       {/* RIGHT (cards) */}
<div className="lg:flex lg:justify-end">
  <div
    className="
      grid w-full max-w-[420px] grid-cols-2 gap-4
      place-items-stretch
    "
  >
    <StatCard Icon={Clock} value="95%" label="Faster Response Time" aos="fade-left" delay={0} />
    <StatCard Icon={Globe} value="24/7" label="Global Availability" aos="fade-left" delay={120} />
    <StatCard Icon={BarChart3} value="+40%" label="Increases Engagement" aos="fade-left" delay={220} />
    <StatCard Icon={MessagesSquare} value="10,000+" label="Conversations Daily" aos="fade-left" delay={320} />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}