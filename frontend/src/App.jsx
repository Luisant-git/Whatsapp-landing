import React from 'react'

import './App.css'
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import Servicespage from './Pages/ServicesPage';
import Pricingpage from './Pages/PricingPage';
import Contactpage from './Pages/ContactPage';

const App = () => {
  return (
    <>
   <BrowserRouter>
<Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/services" element={<Servicespage/>}/>
    <Route path="/pricing" element={<Pricingpage/>}/>
    <Route path="/contact" element={<Contactpage/>}/>
    </Route>
  </Routes>
   </BrowserRouter>
    </>
  )
}

export default App