import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// If you have local images, import like:
// import t1 from "../assets/team1.jpg";

const TEAM = [
  {
    name: "Emily Carter",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "James Thompson",
    role: "Head of Product",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Daniel Reed",
    role: "Lead Software Engineer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Olivia Brook",
    role: "Director",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      once: false,     // repeat on every scroll
      mirror: true,    // animate when scrolling back
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
            Our Team
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-slate-900 sm:text-[38px]"
          >
            The Expert Team Behind <br className="hidden sm:block" />
            Our Success
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="w-full max-w-[240px]"
            >
              {/* Image block */}
              <div className="rounded-2xl bg-slate-100 p-3 shadow-[0_14px_35px_rgba(15,23,42,0.10)] ring-1 ring-black/5">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="pt-4 text-center">
                <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                <p className="mt-1 text-[11px] text-slate-500">{m.role}</p>

                {/* Socials */}
                <div className="mt-4 flex justify-center gap-2.5">
                  <SocialBtn Icon={Facebook} />
                  <SocialBtn Icon={Instagram} />
                  <SocialBtn Icon={Linkedin} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialBtn({ Icon, href = "#" }) {
  return (
    <a
      href={href}
      className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-white
                 shadow-[0_10px_18px_rgba(37,99,235,0.20)]
                 transition hover:-translate-y-[1px] hover:bg-blue-700"
      aria-label="social link"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}