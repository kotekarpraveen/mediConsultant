import React from 'react'
import About2 from 'src/Components/AboutBlock/About2'
import AboutBlock from 'src/Components/AboutBlock/AboutBlock'
import Clients from 'src/Components/Clients/Clients'
import Cta from 'src/Components/Cta/Cta'
import { Feature } from 'src/Components/Feature/Feature'
import ServiceBlock from 'src/Components/ServiceBlock/ServiceBlock'
import MainSlider from 'src/Components/Slider/Slider'
import Testimonial2 from 'src/Components/Testimonial/Testimonial2'

const Home = () => {
  return (
   <>
    <MainSlider/>
    <Feature/>
    <AboutBlock/>
    <Cta/>
    <ServiceBlock/>
    <About2/>
    <Testimonial2/>
    <Clients/>
   </>
  )
}

export default Home