import React, { useEffect, useMemo, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alina Jame',
    role: 'Happy Client',
    quote:
      'We were amazed at how easy it was to set up. Within days, the chatbot was handling real conversations and doing it well.',
  },
  {
    name: 'Kevin Andrew',
    role: 'Happy Client',
    quote:
      'Our website engagement shot up after installing the chatbot. Visitors now stay longer and actually get the answers they need instantly.',
  },
  {
    name: 'Nazish Ehtaan',
    role: 'Happy Client',
    quote:
      'We serve customers in three time zones, and this chatbot handles it all. No more missed messages or delayed replies.',
  },
  {
    name: 'John Clark',
    role: 'Happy Client',
    quote:
      'What impressed me most was how natural the chatbot sounds—and we were able to fully match it to our brand voice.',
  },
  {
    name: 'Zampa Devo',
    role: 'Happy Client',
    quote:
      'It’s not just for support. Our chatbot has become a key sales tool, helping qualify leads and guiding users through purchases.',
  },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function TestimonialsCarousel() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  // Responsive cards per slide
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const pages = useMemo(
    () => chunkArray(testimonials, itemsPerPage),
    [itemsPerPage]
  );

  // Reset current page if layout changed
  useEffect(() => {
    if (currentPage > pages.length - 1) {
      setCurrentPage(0);
    }
  }, [pages.length, currentPage]);

  // Auto‑scroll
  useEffect(() => {
    if (pages.length <= 1) return;
    const id = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(id);
  }, [pages.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight mb-4">
            Build Trust With Reviews
            <br className="hidden sm:block" />
            Loved by Businesses Worldwide
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((group, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {group.map((t) => (
                    <article
                      key={t.name}
                      className="
                        rounded-3xl bg-white border border-slate-100
                        shadow-md px-6 py-6 flex flex-col justify-between
                      "
                    >
                      <div>
                        {/* stars */}
                        <div className="flex items-center gap-1 mb-4 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>

                        <p className="text-sm text-slate-600 mb-4">{t.quote}</p>
                      </div>

                      <div className="mt-2">
                        <p className="font-semibold text-slate-900 text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-400">{t.role}</p>
                      </div>

                      {/* blue bottom line */}
                      <div className="mt-5 h-[3px] w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2.5 w-2.5 rounded-full transition transform ${
                  idx === currentPage
                    ? 'bg-blue-600 scale-110'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}