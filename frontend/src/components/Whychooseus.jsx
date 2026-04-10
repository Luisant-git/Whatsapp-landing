import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lucide icons
import {
  Lightbulb,
  Headphones,
  Wallet,
  Expand,
  Users,
} from 'lucide-react';

const points = [
  {
    title: 'Tailored Solutions',
    desc: 'We offer customized services designed to meet your specific needs.',
    icon: Lightbulb,
  },
  {
    title: 'Customer Support',
    desc: 'Our dedicated support team is available 24/7, providing assistance.',
    icon: Headphones,
  },
  {
    title: 'Affordable Pricing',
    desc: 'Competitive rates with transparent pricing—no hidden fees.',
    icon: Wallet,
  },
  {
    title: 'Scalable Solutions',
    desc: 'Our services grow with your business, allowing you to scale up.',
    icon: Expand,
  },
  {
    title: 'Expert Team',
    desc: 'Experienced professionals bringing deep industry knowledge.',
    icon: Users,
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3"
            data-aos="fade-up"
          >
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Unique Selling Points &amp; Advantages
            <br className="hidden sm:block" />
            of Our Service
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  relative bg-white rounded-3xl border border-slate-100
                  shadow-sm hover:shadow-lg transition transform hover:-translate-y-1
                  flex flex-col px-6 py-7
                "
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
              >
                {/* icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50/40">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>

                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">{item.desc}</p>

                {/* blue bottom bar */}
                <div className="mt-6 h-[3px] w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="750"
        >
          <button
            className="
              inline-flex items-center justify-center
              rounded-full bg-blue-600 hover:bg-blue-700
              text-white text-sm font-semibold
              px-8 py-3 shadow-lg shadow-blue-300/60 transition
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}