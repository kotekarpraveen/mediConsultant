import React from 'react'
import ABOUT1 from 'src/assets/images/about/about-1.jpg';
import ABOUT2 from 'src/assets/images/about/about-2.jpg';
import ABOUT3 from 'src/assets/images/about/about-3.jpg';
import ABOUT4 from 'src/assets/images/about/about-4.jpg';
const Feature1 = () => {
  return (
   <>
   <section className="fetaure-page ">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="about-block-item mb-5 mb-lg-0">
          <img src={ABOUT1} alt className="img-fluid w-100" />
          <h4 className="mt-3">Healthcare for Kids</h4>
          <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="about-block-item mb-5 mb-lg-0">
          <img src={ABOUT2} alt className="img-fluid w-100" />
          <h4 className="mt-3">Medical Counseling</h4>
          <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="about-block-item    b-5 mb-lg-0">
          <img src={ABOUT3} alt className="img-fluid w-100" />
          <h4 className="mt-3">Modern Equipments</h4>
          <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="about-block-item">
          <img src={ABOUT4} alt className="img-fluid w-100" />
          <h4 className="mt-3">Qualified Doctors</h4>
          <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Feature1