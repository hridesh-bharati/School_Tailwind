import React from 'react'

export default function Registration() {
    const BgPic = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("./img/registration.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div style={BgPic}>
                <div className="row container m-auto py-5 my-5">
                    <div className="col-md-7 mt-5">
                        <h4 className='text-danger'>NEED ANY COURSE</h4>
                        <h1 className="text-white fw-bolder my-2">
                            30% Off For New Students
                        </h1>
                        <p className="text-white fs-5 lh-lg my-4">
                            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                        </p>
                        <ul>
                            <li className='text-white my-2'>Labore eos amet dolor amet diam</li>
                            <li className='text-white my-2'>Etsea et sit dolor amet ipsum</li>
                            <li className='text-white my-2'>Diam dolor diam elitripsum vero.</li>
                        </ul>
                        <button className="btn btn-danger m-4">Apply Now</button>
                    </div>
                    <div className="col-md-5 mt-5">
                        <form className='bg-white rounded-4'>
                            <h1 className="py-3 fw-bolder text-center"><b>Sign Up Now</b></h1>
                            <div class="mb-3 bg-danger container p-5 rounded-4 rounded-top-0">
                                <input type="text"
                                    class=" form-control mb-3 p-2 ps-3"
                                    placeholder="Enter Name" />
                                <input type="email"
                                    class=" form-control mb-3 p-2 ps-3"
                                    placeholder="Enter Email" />
                                <div class="mb-3">
                                    <select class="form-select form-select-lg" >
                                        <option selected>Select one</option>
                                        <option value="">New Delhi</option>
                                        <option value="">Istanbul</option>
                                        <option value="">Jakarta</option>
                                    </select>
                                </div>
                                <button className="btn btn-dark w-100 py-3">Sign Up Now</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
