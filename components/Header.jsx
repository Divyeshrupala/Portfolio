import React from 'react';

function Header() {
  return (
    <header id="header" className="fixed-top" style={{ backgroundColor: '#6150A9', opacity: 0.9 }}>
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="index.html">Divyesh Rupala</a></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li className="dropdown">
              <a href="#"><span>Skills</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">C/C++</a></li>
                <li className="dropdown">
                  <a href="#"><span>Frontend Development</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Html-5</a></li>
                    <li><a href="#">CSS-3</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">Bootstrap</a></li>
                  </ul>
                </li>
                <li><a href="#">Python</a></li>
                <li><a href="#">PHP</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
