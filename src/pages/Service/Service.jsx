import React from 'react'
import PageTitle from 'src/Components/PageTitle/PageTitle'
import SIGN from 'src/assets/images/about/sign.png';
import Feature1 from 'src/Components/Feature/Feature1';
import Award from 'src/Components/Award/Award';
import Testimonial from 'src/Components/Testimonial/Testimonial';
import ServiceBlock2 from 'src/Components/ServiceBlock/ServiceBlock2';
import CtaBlock from 'src/Components/Cta/CtaBlock';
const Service = () => {
  return (
    <>
        <PageTitle title="Our services" description="What We Do"/>
       <ServiceBlock2/>
       <CtaBlock/>
    </>
  )
}

export default Service