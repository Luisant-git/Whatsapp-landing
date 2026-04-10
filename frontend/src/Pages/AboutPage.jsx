import React from 'react'

import Breadcrump from '../components/Breadcrump'
import Aboutus from '../components/Aboutus'
import Statics from '../components/Statics'
import TestimonialsCarousel from '../components/Testimonials'
import ExperienceBoostCTA from '../components/ExperienceBoost'
import TeamSection from '../components/Teamscetion'

const AboutPage = () => {
  return (
    <>
      <Breadcrump
        name="About Us"
        desc="Create Realistic AI Chatbots in Minutes—Perfect for Websites, Apps, and Customer Support." />
      <Aboutus />
      <Statics />
      <TeamSection />
      <TestimonialsCarousel />
      <ExperienceBoostCTA />
    </>
  )
}

export default AboutPage