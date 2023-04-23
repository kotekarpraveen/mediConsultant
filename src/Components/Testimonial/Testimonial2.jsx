import React from 'react'

import TEST_THUMB1 from 'src/assets/images/team/test-thumb1.jpg';
import TEST_THUMB2 from 'src/assets/images/team/test-thumb2.jpg';
import TEST_THUMB3 from 'src/assets/images/team/test-thumb3.jpg';
import TEST_THUMB4 from 'src/assets/images/team/test-thumb4.jpg';

const  Testimonial2 = () => {
  return (
    <>
       <section className="section testimonial-2 gray-bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="section-title text-center">
          <h2>We served over 5000+ Patients</h2>
          <div className="divider mx-auto my-4" />
          <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12 testimonial-wrap-2">
        <div className="testimonial-block style-2  gray-bg">
          <i className="icofont-quote-right" />
          <div className="testimonial-thumb">
            <img src={TEST_THUMB1} alt className="img-fluid" />
          </div>
          <div className="client-info ">
            <h4>Amazing service!</h4>
            <span>John Partho</span>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
            </p>
          </div>
        </div>
        <div className="testimonial-block style-2  gray-bg">
          <div className="testimonial-thumb">
            <img src={TEST_THUMB2} alt className="img-fluid" />
          </div>
          <div className="client-info">
            <h4>Expert doctors!</h4>
            <span>Mullar Sarth</span>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
            </p>
          </div>
          <i className="icofont-quote-right" />
        </div>
        <div className="testimonial-block style-2  gray-bg">
          <div className="testimonial-thumb">
            <img src={TEST_THUMB3} alt className="img-fluid" />
          </div>
          <div className="client-info">
            <h4>Good Support!</h4>
            <span>Kolis Mullar</span>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
            </p>
          </div>
          <i className="icofont-quote-right" />
        </div>
        <div className="testimonial-block style-2  gray-bg">
          <div className="testimonial-thumb">
            <img src={TEST_THUMB4} alt className="img-fluid" />
          </div>
          <div className="client-info">
            <h4>Nice Environment!</h4>
            <span>Partho Sarothi</span>
            <p className="mt-4">
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
            </p>
          </div>
          <i className="icofont-quote-right" />
        </div>
        <div className="testimonial-block style-2  gray-bg">
          <div className="testimonial-thumb">
            <img src={TEST_THUMB1} alt className="img-fluid" />
          </div>
          <div className="client-info">
            <h4>Modern Service!</h4>
            <span>Kolis Mullar</span>
            <p>
              They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
            </p>
          </div>
          <i className="icofont-quote-right" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
export default Testimonial2;
