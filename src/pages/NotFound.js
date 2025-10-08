import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 text-center">
            <div className="not-found-content">
              <div className="error-code">
                <h1 className="display-1">404</h1>
              </div>
              
              <div className="error-icon">
                <i className="fas fa-search"></i>
              </div>
              
              <h2 className="error-title">Page Not Found</h2>
              
              <p className="error-description">
                Oops! The page you're looking for doesn't exist. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
              
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg me-3">
                  <i className="fas fa-home me-2"></i>
                  Go Home
                </Link>
                <button 
                  onClick={() => window.history.back()} 
                  className="btn btn-outline-primary btn-lg"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Go Back
                </button>
              </div>
              
              <div className="helpful-links">
                <h6>You might be looking for:</h6>
                <div className="links-grid">
                  <Link to="/mission-vision" className="help-link">
                    <i className="fas fa-bullseye me-2"></i>
                    Mission & Vision
                  </Link>
                  <Link to="/gallery" className="help-link">
                    <i className="fas fa-images me-2"></i>
                    Gallery
                  </Link>
                  <Link to="/about" className="help-link">
                    <i className="fas fa-users me-2"></i>
                    About Us
                  </Link>
                  <Link to="/contact" className="help-link">
                    <i className="fas fa-envelope me-2"></i>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
