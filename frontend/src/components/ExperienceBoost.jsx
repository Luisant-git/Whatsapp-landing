import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/boostimg1.png';
import img2 from '../assets/boostimg2.png';

export default function ExperienceBoostCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div
          className="
            relative
            rounded-[40px]
            bg-gradient-to-r from-[#E5F0FF] via-[#F6FBFF] to-[#E6FBFF]
            shadow-xl
            px-4 sm:px-8 lg:px-16
            py-10 sm:py-14 lg:py-16
            overflow-visible
          "
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* Top‑left robot (bigger) */}
          <img
            src={img1}
            alt=""
            className="
              hidden md:block pointer-events-none select-none
              absolute
              -left-10 md:-left-14 lg:-left-16
              -top-6 md:-top-8 lg:-top-10
              w-36 md:w-44 lg:w-52 xl:w-60
            "
            data-aos="fade-right"
            data-aos-delay="150"
          />

          {/* Bottom‑right robot (bigger) */}
          <img
            src={img2}
            alt=""
            className="
              hidden md:block pointer-events-none select-none
              absolute
              -right-10 md:-right-14 lg:-right-16
              -bottom-6 md:-bottom-8 lg:-bottom-10
              w-36 md:w-44 lg:w-52 xl:w-60
            "
            data-aos="fade-left"
            data-aos-delay="150"
          />

          {/* Center content */}
          <div
            className="relative z-10 text-center max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
              Experience Boost
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight mb-4">
              Ready to Supercharge
              <br className="hidden sm:block" />
              Your Customer Experience?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-8">
              Start using our AI chatbot today to automate support, boost engagement,
              and save time.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="
                  inline-flex items-center justify-center
                  px-8 py-3 rounded-full
                  bg-blue-600 hover:bg-blue-700
                  text-white text-sm font-semibold
                  shadow-lg shadow-blue-300/60 transition
                "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get Started
              </button>

              <button
                className="
                  inline-flex items-center justify-center
                  px-8 py-3 rounded-full
                  bg-white hover:bg-slate-50
                  border border-slate-200
                  text-slate-900 text-sm font-semibold
                  transition
                "
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}