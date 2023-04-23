import React from 'react'
import PAGE_BANNER from 'src/assets/images/bg/22.jpg'
const PageTitle = ({description, title}) => {
  return (
    <>
       <section className="page-title bg-1" style={{background:`url(${PAGE_BANNER}) no-repeat`}}>
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">{description}</span>
          <h1 className="text-capitalize mb-5 text-lg">{title}</h1>
          {/* <ul class="list-inline breadcumb-nav">
      <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
      <li class="list-inline-item"><span class="text-white">/</span></li>
      <li class="list-inline-item"><a href="#" class="text-white-50">@@description</a></li>
    </ul> */}
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default PageTitle