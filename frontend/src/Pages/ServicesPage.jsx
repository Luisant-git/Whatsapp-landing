import React from 'react'

import Features from '../components/Features'
import ChatbotHero from '../components/ChatbotHero'
import WhyChooseUs from '../components/Whychooseus'

import FaqSection from '../components/Faq'
import ExperienceBoostCTA from '../components/ExperienceBoost'
import Breadcrump from '../components/Breadcrump'


const Servicespage = () => {
    return (
        <>
            <Breadcrump
                name="Services"
                desc="Enhance user experience and streamline support with life like AI chatbots- build in minutes to integrate." />


            <Features />
            <ChatbotHero />
            <WhyChooseUs />
            <FaqSection />
            <ExperienceBoostCTA />

        </>
    )
}

export default Servicespage