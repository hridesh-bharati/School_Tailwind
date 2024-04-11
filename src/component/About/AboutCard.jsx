import React from 'react'

export default function AboutCard() {
    return (
        <div className='container my-5 py-5'>
            <div className="row container-fluid my-5">
                <div className="col-md-6"><img src="./img/about.jpg" className='img-fluid' /></div>
                <div className="col-md-6 fw-medium pt-3">
                    <h3 className='text-danger'>ABOUT&nbsp; US</h3>
                    <h2 className='fw-bolder my-3'><b>Innovative Way To Learn</b></h2>
                    <p className='fs-5 text-secondary-emphasis'>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                    <button className="btn btn-danger btn-lg">Learn More</button>
                </div>
            </div>
        </div>
    )
}
