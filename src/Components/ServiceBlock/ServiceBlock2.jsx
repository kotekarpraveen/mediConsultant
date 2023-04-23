import React from 'react'
import SERVICE1 from 'src/assets/images/service/service-1.jpg'
import SERVICE2 from 'src/assets/images/service/service-2.jpg'
import SERVICE3 from 'src/assets/images/service/service-3.jpg'
import SERVICE4 from 'src/assets/images/service/service-4.jpg'
import SERVICE6 from 'src/assets/images/service/service-6.jpg'
import SERVICE8 from 'src/assets/images/service/service-8.jpg'

const ServiceBlock2 = () => {
  return (
   <>
    <section className="section service-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5">
          <img src={SERVICE1} alt className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2 title-color">Child care</h4>
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5">
          <img src={SERVICE2} alt className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2  
            title-color">Personal Care</h4>
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5">
          <img src={SERVICE3} alt className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2 title-color">CT scan</h4>
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5 mb-lg-0">
          <img src={SERVICE4} alt className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2 title-color">Joint replacement</h4>
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5 mb-lg-0">
          <img src={SERVICE6} alt className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2 title-color">Examination &amp; Diagnosis</h4>
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5 mb-lg-0">
          <img src="images/service/service-8.jpg" alt className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2 title-color">Alzheimer's disease</h4>
            <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default ServiceBlock2