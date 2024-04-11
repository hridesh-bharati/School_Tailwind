import React from 'react';

export default function Gallary() {
    return (
        <div className='container'>
            <p className="text-center text-danger fs-4 fw-medium">Gallary</p>
            <h1 className="text-center text-dark fw-bold">Photo Gallary</h1>
            <div className="card-group">
                <div className="card m-3 rounded rounded-2">
                    <div className="position-relative p-1">
                        <img src="/img/cat-1.jpg" className="card-img-top rounded rounded-2 img-thumbnail " alt="..." />
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <div className="position-relative p-1">
                        <img src="/img/cat-2.jpg" className="card-img-top rounded rounded-2 img-thumbnail " alt="..." />
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <div className="position-relative p-1">
                        <img src="/img/cat-3.jpg" className="card-img-top rounded rounded-2 img-thumbnail " alt="..." />
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card m-3 rounded rounded-2">
                    <div className="position-relative p-1">
                        <img src="/img/cat-4.jpg" className="card-img-top rounded rounded-2 img-thumbnail " alt="..." />
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <div className="position-relative p-1">
                        <img src="/img/cat-5.jpg" className="card-img-top rounded rounded-2 img-thumbnail " alt="..." />
                    </div>
                </div>
                <div className="card m-3 rounded rounded-2">
                    <div className="position-relative p-1">
                        <img src="/img/cat-6.jpg" className="card-img-top rounded rounded-2 img-thumbnail " alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}
