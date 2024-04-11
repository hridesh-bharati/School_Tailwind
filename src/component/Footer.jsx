import React from 'react'

export default function Footer() {
  return (
    <div className='m-auto bg-dark my-4'>
      <div className="row container m-auto py-5">
        <div className="col-md-4">
          <h2 className="text-danger"> <b> GET IN TOUCH </b></h2>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>123 Street, New York, USA</li>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>+012 345 67890</li>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>info@example.com</li>
        </div>
        <div className="col-md-4">
          <h2 className="text-danger"> <b> OUR COURSE </b></h2>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>Web Design</li>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>Apps Design</li>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>Marketing</li>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>Research</li>
          <li className='list-group-item fw-medium lh-lg text-white LtSpacing'>SEO</li>
        </div>
        <div className="col-md-4">
          <h2 className="text-danger"> <b> NEWS LETTER </b></h2>
          <p className="text-light">
            Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam
          </p>
          <div className="input-group"><input type="email" className='form-control p-3' placeholder='Your Email Address' /><button className='btn btn-danger'>Submit</button></div>
        </div>
        <div className="text-center text-white fs-4 my-2 border-top border-secondary pt-3">This website is degined by <b className='text-danger'>Hridsh Bharati</b></div>
      </div>
    </div>
  )
}
