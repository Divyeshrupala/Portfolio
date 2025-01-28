import React from 'react';
import divyeshImage from '../assets/img/team/DIVYESH RUPALA.png';
import divyeImage from '../assets/img/team/divye.png';

function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src={divyeshImage} className="img-fluid" alt="Divyesh Rupala" />
              </div>
              <div className="member-info">
                <h4>Divyesh Rupala</h4>
                <span>Chief Executive Officer</span>
                <p>I am a passionate and detail-oriented computer science student with a strong interest in software development.</p>
                <div className="social">
                  <a href="https://twitter.com/your_twitter_profile" style={{ textDecoration: 'none' }}><i className="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/your_facebook_profile" style={{ textDecoration: 'none' }}><i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/your_instagram_profile" style={{ textDecoration: 'none' }}><i className="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/your_linkedin_profile" style={{ textDecoration: 'none' }}><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src={divyeImage} className="img-fluid" alt="Divyesh Rupala" />
              </div>
              <div className="member-info">
                <h4>Divyesh Rupala</h4>
                <span>Product Manager</span>
                <p>I am a dedicated and enthusiastic computer science student with a solid foundation in programming and problem-solving.</p>
                <div className="social">
                  <a href="https://twitter.com/your_twitter_profile" style={{ textDecoration: 'none' }}><i className="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/your_facebook_profile" style={{ textDecoration: 'none' }}><i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/your_instagram_profile" style={{ textDecoration: 'none' }}><i className="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/your_linkedin_profile" style={{ textDecoration: 'none' }}><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
