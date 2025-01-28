import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {
  return (
    <header id="header" className="fixed-top" style={{ backgroundColor: 'rgba(40, 58, 90, 0.9)', opacity: 0.9 }}>
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="index.html">Divyesh Rupala</a></h1>
        <nav id="navbar" className="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link scrollto" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link scrollto" href="#team">Team</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Skills
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">C/C++</a>
                <a className="dropdown-item" href="#">Python</a>
                <a className="dropdown-item" href="#">PHP</a>
                <div className="dropdown-divider"></div>
                <div className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Frontend Development</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Html-5</a>
                    <a className="dropdown-item" href="#">CSS-3</a>
                    <a className="dropdown-item" href="#">JavaScript</a>
                    <a className="dropdown-item" href="#">Bootstrap</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
