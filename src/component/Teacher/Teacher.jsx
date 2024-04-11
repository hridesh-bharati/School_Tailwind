import React from 'react'

export default function Teacher() {
    return (
        <div>
            <p className="text-center text-danger fs-4 fw-medium">TEACHERS</p>
            <h1 className="text-center text-dark fw-bold">Meet Our Teachers</h1>
            <div className="card-group teachers">
                <div className="card m-3 rounded rounded-2">
                    <img src="/img/team-1.jpg" className="img-fluid rounded rounded-2" alt="..." />
                    <div class="card-body text-center bg-light">
                        <span> <h5 class="card-title text-primary fw-bold">Nisha jha</h5>
                            <p class="card-text text-danger">Web Developer</p></span>
                        <span className='d-flex justify-content-evenly'>
                            <i className="bi bi-facebook text-primary"></i>
                            <i className="bi bi-whatsapp text-success"></i>
                            <i className="bi bi-youtube text-danger"></i>
                            <i className="bi bi-messenger"></i>
                        </span>
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <img src="/img/team-2.jpg" className="img-fluid rounded rounded-2" alt="..." />
                    <div class="card-body text-center bg-light">
                        <span> <h5 class="card-title text-primary fw-bold">S.K. Jha</h5>
                            <p class="card-text text-danger">Teacher</p></span>
                        <span className='d-flex justify-content-evenly'>
                            <i className="bi bi-facebook text-primary"></i>
                            <i className="bi bi-whatsapp text-success"></i>
                            <i className="bi bi-youtube text-danger"></i>
                            <i className="bi bi-messenger"></i>
                        </span>
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <img src="/img/team-3.jpg" className="img-fluid rounded rounded-2" alt="..." />
                    <div class="card-body text-center bg-light">
                        <span> <h5 class="card-title text-primary fw-bold">Marliyan Cuome</h5>
                            <p class="card-text text-danger">Lab Trainer</p></span>
                        <span className='d-flex justify-content-evenly'>
                            <i className="bi bi-facebook text-primary"></i>
                            <i className="bi bi-whatsapp text-success"></i>
                            <i className="bi bi-youtube text-danger"></i>
                            <i className="bi bi-messenger"></i>
                        </span>
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <img src="/img/team-4.jpg" className="img-fluid rounded rounded-2" alt="..." />
                    <div class="card-body text-center bg-light">
                        <span> <h5 class="card-title text-primary fw-bold">Jhon Com</h5>
                            <p class="card-text text-danger">Web Developer</p></span>
                        <span className='d-flex justify-content-evenly'>
                            <i className="bi bi-facebook text-primary"></i>
                            <i className="bi bi-whatsapp text-success"></i>
                            <i className="bi bi-youtube text-danger"></i>
                            <i className="bi bi-messenger"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
