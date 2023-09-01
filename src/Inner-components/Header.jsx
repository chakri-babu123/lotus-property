import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';
import header1 from '../lotus-images/header-bg-1.jpg';
import header2 from '../lotus-images/header-bg-2.jpg';
import header3 from '../lotus-images/header-bg-3.jpg';
import header4 from '../lotus-images/header-bg-4.jpg';
import header5 from '../lotus-images/header-bg-5.jpg';
function Header() {
  return (
    <>
     <section id="hero" className="hero">

<div className="info d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12 text-center">
        <h2 data-aos="fade-down">Welcome to <span>Lotus Properties</span></h2>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Get Started</a>
      </div>
    </div>
  </div>
</div>

<div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

  <div className="carousel-item active" style={ { backgroundImage: `url(${header1})`  }} >
  </div>
  <div className="carousel-item" style={ { backgroundImage: `url(${header2})`  }} ></div>
  <div className="carousel-item" style={ { backgroundImage: `url(${header3})`  }} ></div>
  <div className="carousel-item" style={ { backgroundImage: `url(${header4})`  }} ></div>
  <div className="carousel-item" style={ { backgroundImage: `url(${header5})`  }} ></div>

  <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
  </a>

  <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
  </a>

</div>

</section>
    </>
  );
}

export default Header;
