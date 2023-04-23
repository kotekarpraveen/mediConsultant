import React from 'react'
import AWARD1 from "src/assets/images/about/1.png"
import AWARD2 from "src/assets/images/about/2.png"
import AWARD3 from "src/assets/images/about/3.png"
import AWARD4 from "src/assets/images/about/4.png"
import AWARD5 from "src/assets/images/about/5.png"
import AWARD6 from "src/assets/images/about/6.png"

const Award = () => {
  return (
    <>
       <section className="section awards">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4">
        <h2 className="title-color">Our Doctors achievements </h2>
        <div className="divider mt-4 mb-5 mb-lg-0" />
      </div>
      <div className="col-lg-8">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="award-img">
              <img src={AWARD3} alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="award-img">
              <img src={AWARD4} alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="award-img">
              <img src={AWARD1} alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="award-img">
              <img src={AWARD2} alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="award-img">
              <img src={AWARD5} alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="award-img">
              <img src={AWARD6} alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Award