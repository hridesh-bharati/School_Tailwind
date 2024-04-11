import React from 'react';
import { Link } from 'react-router-dom';
import AboutCard from './About/AboutCard';
import Gallary from './TopCourse/Gallary';
import TopCourse from './TopCourse/TopCourse';
import Footer from './Footer';
import Registration from './Registration/Registration';
import Teacher from './Teacher/Teacher';
import Testimonial from './Testimonial/Testimonial';

export default function Home() {
  const images = ['./img/carousel-1.jpg', './img/carousel-2.jpg', './img/carousel-3.jpg'];

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', borderRadius: '8px', overflow: 'hidden' }}
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
                data-bs-interval="3000"
                style={{ backgroundColor: 'black' }}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`carousel-${index + 1}`}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
          <div className="d-flex flex-column position-absolute top-50 start-50 translate-middle mheading">
            <h3 className="text-white fw-bolder">BEST ONLINE COURSES</h3>
            <h1 className="text-white fw-bolder">
              New Way To Learn <br /> From Home
            </h1>
            <button className='btn bg-gradient btn-warning d-inline'><Link to='/about'>Learn More</Link></button>
          </div>
        </div>
      </div>
      <AboutCard />
      <Gallary />
      <TopCourse />
      <Testimonial />
      <Teacher />
      <Registration />
      <Footer />
    </>
  );
}
