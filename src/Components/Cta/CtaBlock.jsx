import React from 'react';
import CTA_BANNER from "src/assets/images/bg/banner.jpg";
const CtaBlock = () => {
  return (
    <>
      <section className="section cta-page"  style={{background:`url(${CTA_BANNER})`, backgroundPosition: "center center", position:"relative"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4" />
                <h2 className="mb-5 text-lg">
                  We are pleased to offer you the{' '}
                  <span className="title-color">
                    chance to have the healthy
                  </span>
                </h2>
                <a
                  href="appoinment.html"
                  className="btn btn-main-2 btn-round-full"
                >
                  Get appoinment
                  <i className="icofont-simple-right  ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaBlock;
