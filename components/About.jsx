import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
          <ul>
              <li><i className="ri-check-double-line"></i> My name is Divyesh Rupala. I am from Rupal, Ghandhinagar.</li>
              <li><i className="ri-check-double-line"></i> I completed my studies from Shree Swaminarayan School, Sector-23, Ghandhinagar.</li>
              <li><i className="ri-check-double-line"></i> I am pursuing Computer Engineering at LDRP-ITR, Sector-15, Ghandhinagar.</li>
              <li><i className="ri-check-double-line"></i> I am a skilled developer who has been working with Arraysoft Technology Pvt. Ltd. since 2023.</li>
              <li><i className="ri-check-double-line"></i> I started as a software engineer and later transitioned into an instructor role.</li>
              <li><i className="ri-check-double-line"></i> Arraysoft Technology Pvt. Ltd. has been instrumental in providing quality training to students and helping them enhance their skills in web application development.</li>
            </ul>
            <a href="https://www.arraysoft.in/" className="btn-learn-more">Learn More</a>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <img src="assets/img/team/divyesh_profile1.jpg" alt="" style={{ height: '350px', width: '500px', float: 'right', borderRadius: '2%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
