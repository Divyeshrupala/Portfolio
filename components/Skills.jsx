import React from 'react';
import Teamimage from '../assets/img/team/arrsoft.jpg';
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={Teamimage} style={{ height: '400px', width: '600px' }} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>My knowledge about below languages</h3>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">C/C++ <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: '100%' }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: '100%' }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: '90%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">JavaScript <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: '75%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">Python <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: '55%' }} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">PHP <i className="val">50%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: '50%' }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
