import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const INFO = [
  {
    Icon: MapPin,
    title: "Our Location:",
    lines: ["121 King Street, Melbourne Victoria", "3000 Australia"],
  },
  {
    Icon: Mail,
    title: "Email us at:",
    lines: ["support@chatnex.com", "chatnex@gmail.com"],
  },
  {
    Icon: Phone,
    title: "Phone Number:",
    lines: ["+012 (345) 678 99", "+12345678 478 58"],
  },
  {
    Icon: Clock,
    title: "Business Hours:",
    lines: ["Monday–Friday: 9 am – 6 pm", "Saturday–Sunday: 12 pm – 5pm"],
  },
];

export default function ContactInfoSection() {
  useEffect(() => {
    AOS.init({
      once: false,   // repeat on scroll
      mirror: true,  // animate again when scrolling back
      offset: 90,
      easing: "ease-out-cubic",
      duration: 850,
    });
    setTimeout(() => AOS.refresh(), 0);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        {/* Heading */}
        <div className="text-center">
          <p
            data-aos="fade-up"
            className="mb-2 text-xs font-semibold text-blue-600"
          >
            Contact Info
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-slate-900 sm:text-[38px]"
          >
            Our Contact Information <br className="hidden sm:block" /> & Details
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((item, i) => (
            <InfoCard key={i} {...item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ Icon, title, lines, delay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-once="false"
      className="
        relative overflow-hidden
        rounded-2xl bg-white p-6
        shadow-[0_18px_45px_rgba(15,23,42,0.08)]
        ring-1 ring-slate-200/70
        after:content-[''] after:absolute after:inset-x-0 after:bottom-0
        after:h-[3px] after:bg-blue-600
      "
    >
      <div className="mb-4 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>

      <p className="text-sm font-semibold text-slate-900">{title}</p>

      <div className="mt-2 space-y-1 text-[11px] leading-5 text-slate-500">
        {lines.map((t, idx) => (
          <p key={idx}>{t}</p>
        ))}
      </div>
    </div>
  );
}