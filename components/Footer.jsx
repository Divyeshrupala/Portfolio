import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Divyesh Rupala</h3>
              <p>
                Rohitvas, Rupal <br />
                Gandhinagar, Gujarat<br />
                India <br /><br />
                <strong>Phone:</strong> +91 6354218069<br />
                <strong>Email:</strong> divyeshrupala789@gmail.com<br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              {/* <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p> */}
              <div className="social-links mt-3">
                <a href="https://twitter.com/your_twitter_profile" style={{ textDecoration: 'none' }}><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/your_facebook_profile" style={{ textDecoration: 'none' }}><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/your_instagram_profile" style={{ textDecoration: 'none' }}><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/your_linkedin_profile" style={{ textDecoration: 'none' }}><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>Divyesh Rupala</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Divyesh Rupala</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
