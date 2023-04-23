import React from 'react';
import IMG_FLUID from 'src/assets/images/about/img-1.jpg'
import IMG_FLUID2 from 'src/assets/images/about/img-2.jpg'
import IMG_FLUID3 from 'src/assets/images/about/img-3.jpg'

const   AboutBlock = () => {
  return (
    <>
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <img src={IMG_FLUID} alt className="img-fluid" />
                <img
                  src={IMG_FLUID2}
                  alt
                  className="img-fluid mt-4"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <img src={IMG_FLUID3} alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">
                  Personal care <br />
                  &amp; healthy living
                </h2>
                <p className="mt-4 mb-5">
                  We provide best leading medicle service Nulla perferendis
                  veniam deleniti ipsum officia dolores repellat laudantium
                  obcaecati neque.
                </p>
                <a
                  href="service.html"
                  className="btn btn-main-2 btn-round-full btn-icon"
                >
                  Services
                  <i className="icofont-simple-right ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBlock;
