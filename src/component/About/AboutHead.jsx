import React from 'react';

export default function AboutHead() {
    const backgroundStyle = {
        background: `url('./img/page-header.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh'
    };

    return (
        <div>
            <nav style={{ '--bs-breadcrumb-divider': '>', ...backgroundStyle }} aria-label="breadcrumb" className='p-5 '>
                <h1 className="text-white fw-bolder lh-base">About Us</h1>
                <ol className="breadcrumb fs-4">
                    <li className="breadcrumb-item text-white"><a href="#">Home</a></li>
                    <li className="breadcrumb-item text-white " aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    );
}
