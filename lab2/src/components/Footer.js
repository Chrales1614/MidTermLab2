import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="blog-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <h5 className="footer-title">
                <i className="fas fa-graduation-cap me-2"></i>
                Pamantasan ng Cabuyao
              </h5>
              <p className="footer-description">
                Premier institution of higher learning in Region IV, committed to developing 
                globally-competitive and value-laden professionals.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Quick Links</h6>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mission-vision">Mission & Vision</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Contact Info</h6>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  <span>Banlic, Cabuyao, Laguna, Philippines</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone me-2"></i>
                  <span>+63 (049) 502-8856</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope me-2"></i>
                  <span>info@pnc.edu.ph</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Follow Us</h6>
              <p className="footer-description">
                Stay connected with Pamantasan ng Cabuyao for the latest news, 
                events, and updates.
              </p>
              <div className="newsletter">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-copyright">
              © {currentYear} Pamantasan ng Cabuyao. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-legal">
              <Link to="#" className="legal-link">Privacy Policy</Link>
              <Link to="#" className="legal-link">Terms of Service</Link>
              <Link to="#" className="legal-link">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
