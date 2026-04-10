import React from 'react'
import Banner from '../components/Banner'
import TrustedBy from '../components/TrustBy'
import Features from '../components/Features'
import ChatbotHero from '../components/ChatbotHero'
import WhyChooseUs from '../components/Whychooseus'
import PricingPlans from '../components/PricingPlan'
import TestimonialsCarousel from '../components/Testimonials'
import FaqSection from '../components/Faq'
import ExperienceBoostCTA from '../components/ExperienceBoost'


const Homepage = () => {
  return (
 <>

 <Banner/>
 <TrustedBy/>
 <Features/>
 <ChatbotHero/>
 <WhyChooseUs/>
 <PricingPlans/>
 <TestimonialsCarousel/>
 <FaqSection/>
 <ExperienceBoostCTA/>

 </>
  )
}

export default Homepage