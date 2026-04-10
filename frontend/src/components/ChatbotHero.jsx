import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chatbot from '../assets/chatbothero.png';

const features = [
  {
    id: '01',
    title: 'Build with Ease',
    desc: 'Use our drag-and-drop interface to launch your chatbot—no coding required.',
  },
  {
    id: '02',
    title: 'Train with Your Content',
    desc: 'Upload documents, FAQs, or URLs to create accurate, personalized responses.',
  },
  {
    id: '03',
    title: 'Deploy Anywhere',
    desc: 'Add to your website, mobile app, or messaging platforms in just a few clicks.',
  },
];

export default function ChatbotHero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E5F1FF] via-white to-[#F5FBFF] flex items-center">
      <div
        className="max-w-6xl mx-auto px-4 lg:px-8 py-12 w-full"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT – big image */}
          <div
            className="relative w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60" />

            <img
              src={chatbot}// change to your image path
              alt="Chatbot illustration"
              className="relative z-10 w-64 sm:w-80 lg:w-[420px] xl:w-[480px] drop-shadow-2xl"
            />
          </div>

          {/* RIGHT – text & features */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
              How It Works
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-4">
              How Our Advanced
              <br />
              AI Chatbot Works
            </h1>

            <p className="text-slate-500 text-sm sm:text-base max-w-xl mb-8">
              Launch a fully branded AI assistant that understands your content, answers
              customers instantly, and scales with your business 24/7.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  {/* Gradient circle 01 / 02 / 03 */}
                  <div
                    className="
                      shrink-0 h-12 w-12 rounded-full
                      bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200
                      shadow-lg flex items-center justify-center
                      text-blue-600 text-sm font-semibold
                    "
                  >
                    {item.id}
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visible blue button (no custom color classes) */}
            <button
              className="
                mt-8 lg:mt-10
                inline-flex items-center justify-center
                rounded-full bg-blue-600 hover:bg-blue-700
                text-white text-sm font-semibold
                px-8 py-3 shadow-lg shadow-blue-300/60 transition
              "
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}