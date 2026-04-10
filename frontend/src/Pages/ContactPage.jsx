import React from 'react'
import ContactInfoSection from '../components/ContactInfo'
import Breadcrump from '../components/Breadcrump'
import ContactFormSection from '../components/Contactform'


const Contactpage = () => {
  return (
    <>
      <Breadcrump
        name="Contact"
        desc="We are here to support you at every step. Reach out and our team will get back to you as soon as possible." />

      <ContactInfoSection />
      <ContactFormSection />




    </>
  )
}

export default Contactpage