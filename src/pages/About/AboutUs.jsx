import React from 'react'
import PageTitle from 'src/Components/PageTitle/PageTitle'
import SIGN from 'src/assets/images/about/sign.png';
import Feature1 from 'src/Components/Feature/Feature1';
import Award from 'src/Components/Award/Award';
import Testimonial from 'src/Components/Testimonial/Testimonial';
const AboutUs = () => {
  return (
    <>
        <PageTitle title="About Us" description="About us Description"/>
        <section className="section about-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <h2 className="title-color">Personal care for your healthy living</h2>
      </div>
      <div className="col-lg-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
        <img src={SIGN} alt className="img-fluid" />
      </div>
    </div>
  </div>
</section>
<Feature1/>
<Award/>
{/* <Testimonial/> */}
    </>
  )
}

export default AboutUs