import React from 'react'

import CLIENT1 from 'src/assets/images/about/1.png'
import CLIENT2 from 'src/assets/images/about/2.png'
import CLIENT3 from 'src/assets/images/about/3.png'
import CLIENT4 from 'src/assets/images/about/4.png'
import CLIENT5 from 'src/assets/images/about/5.png'
import CLIENT6 from 'src/assets/images/about/6.png'
const Clients = () => {
  return (
    <>
        <section className="section clients">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="section-title text-center">
          <h2>Partners who support us</h2>
          <div className="divider mx-auto my-4" />
          <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row clients-logo">
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT1} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT2} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT3} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT4} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT5} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT6} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT3} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT4} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT5} alt className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-2">
        <div className="client-thumb">
          <img src={CLIENT6} alt className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Clients