import React from 'react'
import PricingPlans from '../components/PricingPlan'
import TestimonialsCarousel from '../components/Testimonials'
import ExperienceBoostCTA from '../components/ExperienceBoost'
import Statics from '../components/Statics'
import Breadcrump from '../components/Breadcrump'


const Pricingpage = () => {
  return (
 <> 
 <Breadcrump 
    name="Pricing"
        desc="Powerful AI chatbot ready in minutes Boost supports and engagement- simple pricing , Instant setup."/>
 <PricingPlans/>
 <Statics/>
 <TestimonialsCarousel/>
 <ExperienceBoostCTA/>

 </>
  )
}

export default Pricingpage