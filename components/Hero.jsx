import React from 'react';
import divyeImage from '../assets/img/team/divye.png';

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
            <h1>hey, I Am Divyesh Rupala</h1>
            <h2>Welcome to My Portfolio Website</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={divyeImage} className="img-fluid animated" alt="Divyesh Rupala" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
