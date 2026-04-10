import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter Plan',
    price: 49,
    tagline: 'Get started with our essential chatbot features.',
    features: [
      'Basic chatbot functionality',
      'Limited to 1 website',
      'Up to 100 conversations/month',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Pro Plan',
    price: 79,
    tagline: 'Unlock full functionality with advanced features and support.',
    features: [
      'Unlimited conversations',
      'Custom branding',
      'Multi-language support',
      'Analytics dashboard',
    ],
    popular: true, // middle highlighted card
  },
  {
    name: 'Enterprise Plan',
    price: 199,
    tagline: 'Tailored solutions and priority support for large-scale businesses.',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'API access & integrations',
      'SLA & priority support',
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#E5F1FF] via-white to-[#F5FBFF]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3"
            data-aos="fade-up"
          >
            Pricing Plans
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Simple, Transparent Pricing for
            <br className="hidden sm:block" />
            Every Business
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;

            const cardBase =
              'rounded-[32px] p-8 md:p-10 shadow-lg flex flex-col justify-between transition transform hover:-translate-y-1';
            const cardColors = isPopular
              ? 'bg-blue-600 text-white border border-transparent'
              : 'bg-white text-slate-900 border border-slate-100';

            const tagColor = isPopular ? 'text-blue-100/80' : 'text-slate-500';
            const priceColor = isPopular ? 'text-white' : 'text-blue-600';
            const perTextColor = isPopular ? 'text-blue-100/80' : 'text-slate-400';
            const featureTextColor = isPopular ? 'text-blue-100' : 'text-slate-500';
            const checkColor = isPopular ? 'text-white' : 'text-blue-600';

            return (
              <div
                key={plan.name}
                className={`${cardBase} ${cardColors}`}
                data-aos="fade-up"
                data-aos-delay={150 + index * 150}
              >
                {/* Top */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${tagColor}`}>{plan.tagline}</p>

                  <p className={`text-xs font-medium uppercase tracking-wide ${tagColor}`}>
                    Starting at:
                  </p>

                  <div className="flex items-baseline gap-1 mt-1 mb-6">
                    <span className={`text-2xl font-semibold ${priceColor}`}>$</span>
                    <span className={`text-4xl font-bold ${priceColor}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ml-1 ${perTextColor}`}>/mo</span>
                  </div>

                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className={`h-4 w-4 mt-0.5 ${checkColor}`} />
                        <span className={`text-sm ${featureTextColor}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-8">
                  {isPopular ? (
                    <button
                      className="
                        w-full rounded-full bg-white text-slate-900
                        text-sm font-semibold py-3
                        hover:bg-slate-100 transition
                      "
                    >
                      Get Started
                    </button>
                  ) : (
                    <button
                      className="
                        w-full rounded-full bg-blue-600 text-white
                        text-sm font-semibold py-3
                        hover:bg-blue-700 transition
                      "
                    >
                      Get Started
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}