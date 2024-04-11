import React from 'react'

export default function Testimonial() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide container bg-light my-5 py-5">
                <div class="carousel-inner Testimonial text-center py-3">
                    <h1 className='fw-bold text-danger'>What Say Our Students</h1>
                    <i class="bi bi-quote m-0 p-0 h1 text-danger"></i>
                    <p className='fw-bolder'>Some representative placeholder content for the first slide. Lorem ipsum dolor sit amet.</p>
                    <div class="carousel-item active ">
                        <img src="/img/testimonial-1.jpg" className="card-img-top rounded rounded-pill" alt="..." />
                        <p className="text-primary fw-bolder">Client Name</p>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>  <div class="carousel-item ">
                        <img src="/img/testimonial-2.jpg" className="card-img-top rounded rounded-pill" alt="..." />
                        <p className="text-primary fw-bolder">Client Name</p>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
